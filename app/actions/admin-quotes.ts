"use server"

import { createAdminClient } from "@/lib/supabase/admin"
import { GENRES } from "@/lib/types"
import { checkAdminSession } from "./admin-auth"
import { logError, logInfo, logWarn } from "@/lib/logger"

export async function approveQuoteAction(id: number, genre: string) {
  const isAdmin = await checkAdminSession()
  if (!isAdmin) {
    logWarn("Unauthorized quote approval attempt", { quoteId: id })
    return { success: false, message: "Unauthorized" }
  }

  // Validate genre against allowed values
  if (!GENRES.includes(genre as typeof GENRES[number])) {
    logWarn("Invalid genre for quote approval", { quoteId: id, genre })
    return { success: false, message: "Invalid genre" }
  }

  const supabase = createAdminClient()

  if (!supabase) {
    logError("Supabase admin client unavailable for quote approval")
    return { success: false, message: "Service unavailable" }
  }

  // Get the pending quote
  const { data: pendingQuote, error: fetchError } = await supabase
    .from("pending_quotes")
    .select("*")
    .eq("id", id)
    .single()

  if (fetchError || !pendingQuote) {
    logWarn("Pending quote not found for approval", { quoteId: id })
    return { success: false, message: "Quote not found" }
  }

  // Prevent double-approval (could happen if admin opens quote in multiple tabs)
  if (pendingQuote.status === "approved") {
    logWarn("Quote already approved", { quoteId: id })
    return { success: false, message: "This quote has already been approved" }
  }

  // Insert into quotes table
  const { error: insertError } = await supabase.from("quotes").insert({
    text: pendingQuote.text,
    author: pendingQuote.author,
    genre: genre, // Use the potentially updated genre
  })

  if (insertError) {
    logError("Failed to approve quote", { error: insertError, quoteId: id, genre })
    return { success: false, message: "Failed to approve quote" }
  }

  // Update pending quote status
  const { error: updateError } = await supabase
    .from("pending_quotes")
    .update({ status: "approved", genre, reviewed_at: new Date().toISOString() })
    .eq("id", id)

  if (updateError) {
    logError("Failed to update pending quote status", { error: updateError, quoteId: id, genre })
  }

  logInfo("Quote approved", { quoteId: id, genre })
  return { success: true, message: "Quote approved and added to collection!" }
}

export async function rejectQuoteAction(id: number) {
  const isAdmin = await checkAdminSession()
  if (!isAdmin) {
    logWarn("Unauthorized quote rejection attempt", { quoteId: id })
    return { success: false, message: "Unauthorized" }
  }

  const supabase = createAdminClient()

  if (!supabase) {
    logError("Supabase admin client unavailable for quote rejection")
    return { success: false, message: "Service unavailable" }
  }

  const { error } = await supabase
    .from("pending_quotes")
    .update({ status: "rejected", reviewed_at: new Date().toISOString() })
    .eq("id", id)

  if (error) {
    logError("Failed to reject quote", { error, quoteId: id })
    return { success: false, message: "Failed to reject quote" }
  }

  logInfo("Quote rejected", { quoteId: id })
  return { success: true, message: "Quote rejected" }
}

export async function restoreQuoteAction(id: number) {
  const isAdmin = await checkAdminSession()
  if (!isAdmin) {
    logWarn("Unauthorized quote restore attempt", { quoteId: id })
    return { success: false, message: "Unauthorized" }
  }

  const supabase = createAdminClient()

  if (!supabase) {
    logError("Supabase admin client unavailable for quote restore")
    return { success: false, message: "Service unavailable" }
  }

  // First, get the pending quote to check its current status
  const { data: pendingQuote, error: fetchError } = await supabase
    .from("pending_quotes")
    .select("*")
    .eq("id", id)
    .single()

  if (fetchError || !pendingQuote) {
    logWarn("Pending quote not found for restore", { quoteId: id })
    return { success: false, message: "Quote not found" }
  }

  // If the quote was approved, we need to remove it from the quotes table
  if (pendingQuote.status === "approved") {
    const { error: deleteError } = await supabase
      .from("quotes")
      .delete()
      .eq("text", pendingQuote.text)
      .eq("author", pendingQuote.author)

    if (deleteError) {
      logError("Failed to remove quote from quotes table", { error: deleteError, quoteId: id })
      return { success: false, message: "Failed to revoke quote approval" }
    }
  }

  // Update pending quote status back to pending
  const { error } = await supabase
    .from("pending_quotes")
    .update({ status: "pending", reviewed_at: null })
    .eq("id", id)

  if (error) {
    logError("Failed to restore quote", { error, quoteId: id })
    return { success: false, message: "Failed to restore quote" }
  }

  logInfo("Quote restored to pending", { quoteId: id })
  return { success: true, message: "Quote restored to pending" }
}

export async function getPendingQuotesAction(status?: string) {
  const isAdmin = await checkAdminSession()
  if (!isAdmin) {
    logWarn("Unauthorized pending quotes fetch")
    return { success: false, message: "Unauthorized", data: [] }
  }

  const supabase = createAdminClient()

  if (!supabase) {
    logError("Supabase admin client unavailable for pending quotes fetch")
    return { success: false, message: "Service unavailable", data: [] }
  }

  let query = supabase.from("pending_quotes").select("*").order("submitted_at", { ascending: false })

  if (status && status !== "all") {
    query = query.eq("status", status)
  }

  const { data, error } = await query

  if (error) {
    logError("Failed to fetch pending quotes", { error, status })
    return { success: false, message: "Failed to fetch quotes", data: [] }
  }

  return { success: true, data: data || [] }
}

