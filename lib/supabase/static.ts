import { createClient as createSupabaseClient } from "@supabase/supabase-js"

/**
 * Creates a Supabase client for static/ISR pages.
 * 
 * This client does NOT use cookies, which allows Next.js to cache
 * the page with ISR (Incremental Static Regeneration).
 * 
 * Use this for:
 * - Public data that's the same for all users
 * - Pages that should be statically generated
 * 
 * Do NOT use this for:
 * - User-specific data
 * - Authenticated operations
 * - Pages that need real-time user session
 */
export function createStaticClient() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return null
  }

  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    }
  )
}
