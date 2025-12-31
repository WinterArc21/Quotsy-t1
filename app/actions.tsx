"use server"

import { createClient } from "@/lib/supabase/server"
import { Resend } from "resend"
import { cookies } from "next/headers"
import { checkRateLimit } from "@/lib/rate-limit"

export async function subscribeAction(formData: FormData) {
  const email = formData.get("email") as string
  const name = formData.get("name") as string
  const genresRaw = formData.get("genres") as string

  if (!email) {
    return { success: false, message: "Email is required" }
  }

  const { allowed, message } = await checkRateLimit("subscribe", 5, 3600)
  if (!allowed) {
    return { success: false, message: message || "Too many attempts" }
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

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
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
  }

  return {
    success: true,
    message: "Welcome to Quotsy! Check your inbox for a confirmation email.",
  }
}

export async function submitQuoteAction(formData: FormData) {
  const text = formData.get("text") as string
  const author = (formData.get("author") as string) || "Anonymous"
  const genre = formData.get("genre") as string
  const submitterEmail = formData.get("submitterEmail") as string | null

  if (!text || text.trim().length < 10) {
    return { success: false, message: "Quote must be at least 10 characters long" }
  }

  if (!genre) {
    return { success: false, message: "Please select a genre" }
  }

  const { allowed, message } = await checkRateLimit("submit_quote", 10, 3600)
  if (!allowed) {
    return { success: false, message: message || "Too many attempts" }
  }

  const supabase = await createClient()

  if (!supabase) {
    return { success: false, message: "Service unavailable" }
  }

  const { error } = await supabase.from("pending_quotes").insert({
    text: text.trim(),
    author: author.trim() || "Anonymous",
    genre,
    submitter_email: submitterEmail || null,
  })

  if (error) {
    console.error("Failed to submit quote:", error)
    return { success: false, message: "Failed to submit quote. Please try again." }
  }

  return {
    success: true,
    message: "Thank you! Your quote has been submitted for review.",
  }
}

export async function adminLoginAction(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    return { success: false, message: "Admin access not configured" }
  }

  if (password !== adminPassword) {
    return { success: false, message: "Invalid password" }
  }

  // Set admin session cookie (expires in 24 hours)
  const cookieStore = await cookies()
  cookieStore.set("admin_session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 24 hours
  })

  return { success: true, message: "Welcome, admin!" }
}

export async function adminLogoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete("admin_session")
  return { success: true }
}

export async function checkAdminSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")
  return session?.value === "authenticated"
}

export async function approveQuoteAction(id: number, genre: string) {
  const isAdmin = await checkAdminSession()
  if (!isAdmin) {
    return { success: false, message: "Unauthorized" }
  }

  const supabase = await createClient()

  if (!supabase) {
    return { success: false, message: "Service unavailable" }
  }

  // Get the pending quote
  const { data: pendingQuote, error: fetchError } = await supabase
    .from("pending_quotes")
    .select("*")
    .eq("id", id)
    .single()

  if (fetchError || !pendingQuote) {
    return { success: false, message: "Quote not found" }
  }

  // Insert into quotes table
  const { error: insertError } = await supabase.from("quotes").insert({
    text: pendingQuote.text,
    author: pendingQuote.author,
    genre: genre, // Use the potentially updated genre
  })

  if (insertError) {
    console.error("Failed to approve quote:", insertError)
    return { success: false, message: "Failed to approve quote" }
  }

  // Update pending quote status
  const { error: updateError } = await supabase
    .from("pending_quotes")
    .update({ status: "approved", genre, reviewed_at: new Date().toISOString() })
    .eq("id", id)

  if (updateError) {
    console.error("Failed to update pending quote status:", updateError)
  }

  return { success: true, message: "Quote approved and added to collection!" }
}

export async function rejectQuoteAction(id: number) {
  const isAdmin = await checkAdminSession()
  if (!isAdmin) {
    return { success: false, message: "Unauthorized" }
  }

  const supabase = await createClient()

  if (!supabase) {
    return { success: false, message: "Service unavailable" }
  }

  const { error } = await supabase
    .from("pending_quotes")
    .update({ status: "rejected", reviewed_at: new Date().toISOString() })
    .eq("id", id)

  if (error) {
    return { success: false, message: "Failed to reject quote" }
  }

  return { success: true, message: "Quote rejected" }
}

export async function restoreQuoteAction(id: number) {
  const isAdmin = await checkAdminSession()
  if (!isAdmin) {
    return { success: false, message: "Unauthorized" }
  }

  const supabase = await createClient()

  if (!supabase) {
    return { success: false, message: "Service unavailable" }
  }

  const { error } = await supabase.from("pending_quotes").update({ status: "pending", reviewed_at: null }).eq("id", id)

  if (error) {
    return { success: false, message: "Failed to restore quote" }
  }

  return { success: true, message: "Quote restored to pending" }
}

export async function getPendingQuotesAction(status?: string) {
  const isAdmin = await checkAdminSession()
  if (!isAdmin) {
    return { success: false, message: "Unauthorized", data: [] }
  }

  const supabase = await createClient()

  if (!supabase) {
    return { success: false, message: "Service unavailable", data: [] }
  }

  let query = supabase.from("pending_quotes").select("*").order("submitted_at", { ascending: false })

  if (status && status !== "all") {
    query = query.eq("status", status)
  }

  const { data, error } = await query

  if (error) {
    return { success: false, message: "Failed to fetch quotes", data: [] }
  }

  return { success: true, data: data || [] }
}

export async function getRandomQuoteAction() {
  try {
    const { allowed, message } = await checkRateLimit("get_random_quote", 30, 60)
    if (!allowed) {
      return { success: false, message: message || "Too many requests", data: null }
    }

    const supabase = await createClient()

    if (!supabase) {
      return { success: false, message: "Service unavailable", data: null }
    }

    // Use RPC for efficient random selection (1 request instead of 2)
    const { data, error } = await supabase.rpc("get_random_quote").single()

    if (error) {
      console.error("Failed to fetch random quote:", error)
      return { success: false, message: "Failed to fetch quote", data: null }
    }

    if (!data) {
      return { success: false, message: "Quote not found", data: null }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Unexpected error in getRandomQuoteAction:", error)
    return { success: false, message: "An unexpected error occurred", data: null }
  }
}

export async function getQuotesAction(options: {
  offset?: number
  limit?: number
  genre?: string
  search?: string
}) {
  const { offset = 0, limit = 24, genre, search } = options

  try {
    const supabase = await createClient()

    if (!supabase) {
      return { success: false, quotes: [], hasMore: false, total: 0 }
    }

    let query = supabase
      .from("quotes")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })

    // Apply genre filter
    if (genre && genre !== "all") {
      query = query.eq("genre", genre)
    }

    // Apply search filter (text or author)
    if (search && search.trim() !== "") {
      query = query.or(`text.ilike.%${search}%,author.ilike.%${search}%`)
    }

    // Apply pagination
    query = query.range(offset, offset + limit - 1)

    const { data, count, error } = await query

    if (error) {
      console.error("Failed to fetch quotes:", error)
      return { success: false, quotes: [], hasMore: false, total: 0 }
    }

    return {
      success: true,
      quotes: data || [],
      hasMore: (offset + limit) < (count || 0),
      total: count || 0
    }
  } catch (error) {
    console.error("Unexpected error in getQuotesAction:", error)
    return { success: false, quotes: [], hasMore: false, total: 0 }
  }
}
