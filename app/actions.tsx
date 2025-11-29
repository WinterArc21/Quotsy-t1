"use server"

import { createClient } from "@/lib/supabase/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function subscribeAction(formData: FormData) {
  const email = formData.get("email") as string
  const name = formData.get("name") as string
  const genresRaw = formData.get("genres") as string

  if (!email) {
    return { success: false, message: "Email is required" }
  }

  let genres: string[]
  try {
    genres = JSON.parse(genresRaw)
  } catch {
    return { success: false, message: "Invalid genres selection" }
  }

  if (genres.length === 0) {
    return { success: false, message: "Please select at least one genre" }
  }

  const supabase = await createClient()

  // Check if already subscribed
  const { data: existing } = await supabase.from("subscribers").select("id").eq("email", email).single()

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
  try {
    await resend.emails.send({
      from: "Quotsy <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to Quotsy - Your Daily Quote Journey Begins!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Georgia, serif; background-color: #ffffff; color: #171717; margin: 0; padding: 40px 20px;">
          <div style="max-width: 500px; margin: 0 auto;">
            <h1 style="font-size: 28px; font-weight: bold; margin-bottom: 24px; letter-spacing: -0.5px;">
              Welcome to Quotsy
            </h1>
            
            <p style="font-size: 16px; line-height: 1.6; color: #525252; margin-bottom: 20px;">
              ${name ? `Hi ${name},` : "Hello,"}
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #525252; margin-bottom: 20px;">
              Thank you for subscribing to Quotsy! You'll now receive daily quotes from these genres:
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #171717; font-weight: 500; margin-bottom: 24px;">
              ${genres.join(" • ")}
            </p>
            
            <div style="background-color: #fafafa; border-left: 3px solid #171717; padding: 20px; margin: 24px 0;">
              <p style="font-size: 18px; font-style: italic; line-height: 1.5; color: #171717; margin: 0 0 12px 0;">
                "The journey of a thousand miles begins with one step."
              </p>
              <p style="font-size: 14px; color: #525252; margin: 0;">
                — Lao Tzu
              </p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #525252; margin-bottom: 20px;">
              Your first daily quote will arrive tomorrow morning. Until then, explore our full collection at quotsy.app.
            </p>
            
            <p style="font-size: 14px; color: #a3a3a3; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
              You're receiving this because you subscribed to Quotsy. 
              <a href="#" style="color: #525252;">Unsubscribe</a>
            </p>
          </div>
        </body>
        </html>
      `,
    })
  } catch (emailError) {
    // Log error but don't fail the subscription
    console.error("Failed to send welcome email:", emailError)
  }

  return {
    success: true,
    message: "Welcome to Quotsy! Check your inbox for a confirmation email.",
  }
}
