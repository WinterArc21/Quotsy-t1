"use server"

import { after } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { Resend } from "resend"
import { checkRateLimit } from "@/lib/rate-limit"
import { subscribeSchema } from "@/lib/validation"
import { WelcomeEmail } from "@/emails/Welcome"
import { logError, logInfo, logWarn } from "@/lib/logger"

export async function subscribeAction(formData: FormData) {
  // Parse and validate input with Zod
  const rawInput = {
    email: formData.get("email"),
    name: formData.get("name") || undefined,
    genres: (() => {
      try {
        return JSON.parse(formData.get("genres") as string)
      } catch {
        return []
      }
    })(),
  }

  const validationResult = subscribeSchema.safeParse(rawInput)
  if (!validationResult.success) {
    return { success: false, message: validationResult.error.errors[0].message }
  }

  const { email, name, genres } = validationResult.data

  const { allowed, message } = await checkRateLimit("subscribe", 5, 3600)
  if (!allowed) {
    logWarn("Rate limit blocked subscription", { action: "subscribe" })
    return { success: false, message: message || "Too many attempts" }
  }

  const supabase = createAdminClient()

  if (!supabase) {
    logError("Supabase admin client unavailable for subscription")
    return { success: false, message: "Service unavailable" }
  }

  // Check if already subscribed
  const { data: existing } = await supabase.from("subscribers").select("id, genres").eq("email", email).maybeSingle()

  if (existing) {
    // Check if genres actually changed
    const oldGenres = (existing.genres as string[]) || []
    const genresChanged = oldGenres.length !== genres.length || !oldGenres.every((g) => genres.includes(g))

    // Update existing subscription
    const { error } = await supabase.from("subscribers").update({ name, genres, verified: true }).eq("email", email)

    if (error) {
      logError("Failed to update subscription", { error, email, genresCount: genres.length })
      return { success: false, message: "Failed to update subscription" }
    }

    // Send genre update email after response (non-blocking)
    if (genresChanged && process.env.RESEND_API_KEY) {
      after(async () => {
        try {
          const { GenreUpdateEmail } = await import("@/emails/GenreUpdate")
          const resend = new Resend(process.env.RESEND_API_KEY!)
          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://quotsy.me"
          const unsubscribeUrl = `${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}`

          await resend.emails.send({
            from: "Quotsy <hello@mail.quotsy.me>",
            to: [email],
            subject: "Your Quotsy Preferences Have Been Updated",
            react: GenreUpdateEmail({ name, genres, unsubscribeUrl, baseUrl }),
          })
        } catch (emailError) {
          logError("Failed to send genre update email", { error: emailError, email })
        }
      })
    }

    logInfo("Subscription updated", { email, genresCount: genres.length, genresChanged })
    return { success: true, message: "Your subscription has been updated!" }
  }

  // Create new subscriber
  const { error: insertError } = await supabase.from("subscribers").insert({ email, name, genres, verified: true })

  if (insertError) {
    logError("Failed to create subscription", { error: insertError, email, genresCount: genres.length })
    return { success: false, message: "Failed to subscribe. Please try again." }
  }

  // Send welcome email after response (non-blocking)
  if (process.env.RESEND_API_KEY) {
    after(async () => {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY!)
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://quotsy.me"
        const unsubscribeUrl = `${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}`

        await resend.emails.send({
          from: "Quotsy <hello@mail.quotsy.me>",
          to: [email],
          subject: "Welcome to Quotsy - Your Daily Quote Journey Begins!",
          react: WelcomeEmail({ name, genres, unsubscribeUrl, baseUrl }),
        })
      } catch (emailError) {
        logError("Failed to send welcome email", { error: emailError, email })
      }
    })
  }

  logInfo("Subscription created", { email, genresCount: genres.length })
  return {
    success: true,
    message: "Welcome to Quotsy! Check your inbox for a welcome email.",
  }
}

export async function unsubscribeAction(formData: FormData) {
  const { unsubscribeSchema } = await import("@/lib/validation")

  const rawInput = {
    email: formData.get("email"),
  }

  const validationResult = unsubscribeSchema.safeParse(rawInput)
  if (!validationResult.success) {
    return { success: false, message: validationResult.error.errors[0].message }
  }

  const { email } = validationResult.data

  const supabase = createAdminClient()

  if (!supabase) {
    logError("Supabase admin client unavailable for unsubscribe")
    return { success: false, message: "Service unavailable" }
  }

  // Check if subscriber exists
  const { data: existing, error: selectError } = await supabase
    .from("subscribers")
    .select("id")
    .eq("email", email)
    .maybeSingle()

  if (selectError) {
    logError("Failed to lookup subscriber", { error: selectError, email })
    return { success: false, message: "Failed to check subscription status." }
  }

  if (!existing) {
    return { success: false, message: "This email is not subscribed." }
  }

  // Delete subscriber
  const { error } = await supabase
    .from("subscribers")
    .delete()
    .eq("email", email)

  if (error) {
    logError("Failed to unsubscribe", { error, email })
    return { success: false, message: "Failed to unsubscribe. Please try again." }
  }

  logInfo("Unsubscribed", { email })
  return {
    success: true,
    message: "You have been successfully unsubscribed. We're sorry to see you go!",
  }
}
