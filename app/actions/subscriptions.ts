"use server"

import { createClient } from "@/lib/supabase/server"
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

  const supabase = await createClient()

  if (!supabase) {
    return { success: false, message: "Service unavailable" }
  }

  // Check if already subscribed
  const { data: existing } = await supabase.from("subscribers").select("id").eq("email", email).maybeSingle()

  if (existing) {
    // Update existing subscription
    const { error } = await supabase.from("subscribers").update({ name, genres, verified: true }).eq("email", email)

    if (error) {
      return { success: false, message: "Failed to update subscription" }
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

