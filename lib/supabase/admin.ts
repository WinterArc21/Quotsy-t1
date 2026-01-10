import { createClient } from "@supabase/supabase-js"

/**
 * Creates a Supabase client with the service role key.
 * This bypasses RLS and should ONLY be used in server-side code.
 * 
 * Use this for server actions that need to modify protected tables
 * like `subscribers` where RLS would block anon access.
 */
export function createAdminClient() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!url || !serviceKey) {
        return null
    }

    return createClient(url, serviceKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
        },
    })
}
