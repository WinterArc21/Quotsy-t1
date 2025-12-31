import { createClient } from "@/lib/supabase/server"
import { headers } from "next/headers"

/**
 * Checks if the current requester has exceeded the rate limit for a specific action.
 * Uses a database-backed implementation via Supabase RPC.
 * 
 * @param action - Unique identifier for the action (e.g., 'subscribe', 'submit_quote')
 * @param limit - Max number of requests allowed in the window (default: 5)
 * @param windowSeconds - Time window in seconds (default: 60)
 * @returns Object indicating success/failure and a message if blocked
 */
export async function checkRateLimit(
  action: string, 
  limit: number = 5, 
  windowSeconds: number = 60
): Promise<{ allowed: boolean; message?: string }> {
  try {
    const headerList = await headers()
    const ip = headerList.get("x-forwarded-for") || "unknown"
    
    // Create a unique key combining the IP and the action
    const key = `${ip}:${action}`

    const supabase = await createClient()
    
    if (!supabase) {
      // Fail open if database is unavailable to ensure user functionality
      console.error("Rate limit check failed: Supabase client unavailable")
      return { allowed: true }
    }

    const { data: allowed, error } = await supabase.rpc("check_rate_limit", {
      rate_key: key,
      limit_count: limit,
      window_seconds: windowSeconds
    })

    if (error) {
      console.error("Rate limit check RPC error:", error)
      // Fail open on error
      return { allowed: true }
    }

    if (!allowed) {
      return { 
        allowed: false, 
        message: "Too many requests. Please try again later." 
      }
    }

    return { allowed: true }
  } catch (error) {
    console.error("Unexpected error in checkRateLimit:", error)
    return { allowed: true }
  }
}
