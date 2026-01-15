"use server"

import { createAdminClient } from "@/lib/supabase/admin"
import { Resend } from "resend"
import { checkRateLimit } from "@/lib/rate-limit"
import { subscribeSchema } from "@/lib/validation"
import { WelcomeEmail } from "@/emails/Welcome"

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
    return { success: false, message: message || "Too many attempts" }
  }

  const supabase = createAdminClient()

  if (!supabase) {
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
      return { success: false, message: "Failed to update subscription" }
    }

    // Send genre update email if genres changed
    if (genresChanged && process.env.RESEND_API_KEY) {
      try {
        const { GenreUpdateEmail } = await import("@/emails/GenreUpdate")
        const resend = new Resend(process.env.RESEND_API_KEY)
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://quotsy.me"
        const unsubscribeUrl = `${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}`

        await resend.emails.send({
          from: "Quotsy <hello@mail.quotsy.me>",
          to: [email],
          subject: "Your Quotsy Preferences Have Been Updated",
          react: GenreUpdateEmail({ name, genres, unsubscribeUrl, baseUrl }),
        })
      } catch (emailError) {
        console.error("Failed to send genre update email:", emailError)
      }
    }

    return { success: true, message: "Your subscription has been updated!" }
  }

  // Create new subscriber
  const { error: insertError } = await supabase.from("subscribers").insert({ email, name, genres, verified: true })

  if (insertError) {
    return { success: false, message: "Failed to subscribe. Please try again." }
  }

  // Send welcome email
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://quotsy.me"
      const unsubscribeUrl = `${baseUrl}/unsubscribe?email=${encodeURIComponent(email)}`

      const { error: emailError } = await resend.emails.send({
        from: "Quotsy <hello@mail.quotsy.me>",
        to: [email],
        subject: "Welcome to Quotsy - Your Daily Quote Journey Begins!",
        react: WelcomeEmail({ name, genres, unsubscribeUrl, baseUrl }),
      })

      if (emailError) {
        console.error("Failed to send welcome email:", emailError)
      }
    } catch (emailError) {
      // Log error but don't fail the subscription
      console.error("Failed to send welcome email:", emailError)
    }
  }

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
    return { success: false, message: "Service unavailable" }
  }

  // Check if subscriber exists
  const { data: existing, error: selectError } = await supabase
    .from("subscribers")
    .select("id")
    .eq("email", email)
    .maybeSingle()

  if (selectError) {
    console.error("Failed to lookup subscriber:", selectError)
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
    console.error("Failed to unsubscribe:", error)
    return { success: false, message: "Failed to unsubscribe. Please try again." }
  }

  return {
    success: true,
    message: "You have been successfully unsubscribed. We're sorry to see you go!",
  }
}
