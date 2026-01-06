"use server"

import { createClient } from "@/lib/supabase/server"
import { checkAdminSession } from "./admin-auth"

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

