"use server"

import { createClient } from "@/lib/supabase/server"
import { checkRateLimit } from "@/lib/rate-limit"
import { submitQuoteSchema } from "@/lib/validation"
import type { Quote } from "@/lib/types"
import { logError, logInfo, logWarn } from "@/lib/logger"

/**
 * Escapes special characters for safe use in PostgREST ILIKE filters.
 * 
 * Handles:
 * - LIKE wildcards (%, _)
 * - Escape character (\)
 * 
 * This prevents SQL injection and pattern manipulation in search queries.
 */
function escapeSearchTerm(term: string): string {
  return term
    .replace(/\\/g, '\\\\')  // Escape backslashes first
    .replace(/%/g, '\\%')    // Escape LIKE wildcard %
    .replace(/_/g, '\\_')    // Escape LIKE wildcard _
}

export async function submitQuoteAction(formData: FormData) {
  // Parse form data into raw object
  const rawInput = {
    text: formData.get("text"),
    author: formData.get("author") || undefined,
    genre: formData.get("genre"),
    submitterEmail: formData.get("submitterEmail") || null,
  }

  // Validate with Zod schema
  const validationResult = submitQuoteSchema.safeParse(rawInput)

  if (!validationResult.success) {
    // Return the first validation error
    return {
      success: false,
      message: validationResult.error.errors[0].message
    }
  }

  // Use validated and transformed data
  const { text, author, genre, submitterEmail } = validationResult.data

  // Check rate limit
  const { allowed, message } = await checkRateLimit("submit_quote", 10, 3600)
  if (!allowed) {
    logWarn("Rate limit blocked quote submission", { action: "submit_quote" })
    return { success: false, message: message || "Too many attempts" }
  }

  const supabase = await createClient()

  if (!supabase) {
    logError("Supabase client unavailable for quote submission")
    return { success: false, message: "Service unavailable" }
  }

  const { error } = await supabase.from("pending_quotes").insert({
    text,
    author,
    genre,
    submitter_email: submitterEmail,
  })

  if (error) {
    logError("Failed to submit quote", { error, genre, hasAuthor: Boolean(author), hasSubmitterEmail: Boolean(submitterEmail) })
    return { success: false, message: "Failed to submit quote. Please try again." }
  }

  logInfo("Quote submitted for review", { genre, hasAuthor: Boolean(author), hasSubmitterEmail: Boolean(submitterEmail) })
  return {
    success: true,
    message: "Thank you! Your quote has been submitted for review.",
  }
}

export async function getRandomQuoteAction(): Promise<{ success: true; data: Quote } | { success: false; message: string; data: null }> {
  try {
    const { allowed, message } = await checkRateLimit("get_random_quote", 30, 60)
    if (!allowed) {
      logWarn("Rate limit blocked random quote", { action: "get_random_quote" })
      return { success: false, message: message || "Too many requests", data: null }
    }

    const supabase = await createClient()

    if (!supabase) {
      logError("Supabase client unavailable for random quote")
      return { success: false, message: "Service unavailable", data: null }
    }

    // Use RPC for efficient random selection (1 request instead of 2)
    const { data, error } = await supabase.rpc("get_random_quote").single()

    if (error) {
      logError("Failed to fetch random quote", { error })
      return { success: false, message: "Failed to fetch quote", data: null }
    }

    if (!data) {
      return { success: false, message: "Quote not found", data: null }
    }

    // Type assertion: RPC returns Quote type
    return { success: true, data: data as Quote }
  } catch (error) {
    logError("Unexpected error in getRandomQuoteAction", { error })
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
      logError("Supabase client unavailable for quotes fetch")
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
      // Escape LIKE wildcards to prevent SQL injection/pattern manipulation
      const safeSearch = escapeSearchTerm(search.trim())
      query = query.or(`text.ilike.%${safeSearch}%,author.ilike.%${safeSearch}%`)
    }

    // Apply pagination
    query = query.range(offset, offset + limit - 1)

    const { data, count, error } = await query

    if (error) {
      logError("Failed to fetch quotes", { error, offset, limit, genre, hasSearch: Boolean(search?.trim()) })
      return { success: false, quotes: [], hasMore: false, total: 0 }
    }

    return {
      success: true,
      quotes: data || [],
      hasMore: (offset + limit) < (count || 0),
      total: count || 0
    }
  } catch (error) {
    logError("Unexpected error in getQuotesAction", { error, offset, limit, genre, hasSearch: Boolean(search?.trim()) })
    return { success: false, quotes: [], hasMore: false, total: 0 }
  }
}

