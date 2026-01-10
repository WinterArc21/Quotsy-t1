# Supabase Admin Client for Server Actions

**Date Learned:** January 10, 2026  
**Context:** Unsubscribe action was returning "email not subscribed" despite the email existing in the database.  
**Root Cause:** RLS policies blocked the anon key from reading the `subscribers` table.

---

## The Issue

We implemented an unsubscribe feature that:
1. Looks up if an email exists in `subscribers`
2. Deletes the row if found

The code used the same Supabase client as other server actions:

```typescript
const supabase = await createClient() // Uses anon key
const { data } = await supabase.from("subscribers").select("id").eq("email", email)
// data was ALWAYS null, even for emails that existed
```

**Why it failed:** The `subscribers` table has Row Level Security (RLS) enabled with no `SELECT` policy for anonymous users. The anon key respects RLS, so the query returned nothing.

---

## The Solutions Considered

### Option 1: Add RLS Policies for Anon Access

```sql
CREATE POLICY "Public can select" ON subscribers FOR SELECT USING (true);
CREATE POLICY "Public can delete" ON subscribers FOR DELETE USING (true);
```

**Pros:**
- No code changes needed
- Works immediately

**Cons:**
- Anyone with the anon key can enumerate all subscriber emails (privacy leak)
- Anyone can mass-delete subscribers
- Violates principle of least privilege

### Option 2: Service Role Key (Admin Client) ✓ Chosen

Create a separate Supabase client using the service role key for server actions only.

```typescript
import { createClient } from "@supabase/supabase-js"

export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!, // Bypasses RLS
  )
}
```

**Pros:**
- Keep RLS strict (no public access to sensitive tables)
- Authorization logic is in your code, not in RLS policies
- Standard pattern for production apps
- Service key never exposed to browser

**Cons:**
- Must ensure service key is never imported in client components
- More responsibility on your code to authorize correctly

### Option 3: Edge Functions / RPC

Create a Supabase Edge Function or PostgreSQL RPC that runs with elevated privileges.

**Pros:**
- Encapsulates logic at database/edge level
- Can add custom validation in SQL

**Cons:**
- More infrastructure to maintain
- Overkill for simple CRUD operations

---

## Why We Chose Option 2

1. **Security:** RLS stays strict. The `subscribers` table is not readable by the public.

2. **Simplicity:** Next.js Server Actions (`"use server"`) already run exclusively on the server. Adding an admin client is a one-file change.

3. **Standard Pattern:** This is how most production Supabase + Next.js apps work:
   - Anon key → Client-side queries (RLS protected)
   - Service role key → Server-side mutations (code-protected)

4. **Flexibility:** We control authorization in TypeScript. Need rate limiting? Add it. Need audit logs? Add them. RLS policies are less flexible.

---

## The Concepts Explained

### Beginner Level: Keys Are Like Badges

Supabase gives you two keys:

| Key | Who Uses It | Access Level |
|-----|-------------|--------------|
| **Anon Key** | Your website visitors | Limited (RLS decides what they see) |
| **Service Role Key** | Your server only | Full access (bypass all security) |

Think of it like a hotel:
- **Anon key** = Guest keycard. Opens your room, maybe the pool.
- **Service role key** = Master key. Opens every door.

Your server is the hotel manager—it needs the master key. Your website visitors are guests—they get keycards.

### Intermediate Level: RLS and the Anon Key

Row Level Security (RLS) is PostgreSQL's way of filtering data per-user. When you enable RLS on a table:

```sql
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
```

PostgreSQL now requires policies to allow any access. Without policies, **no one can read or write** (except superusers).

The anon key represents unauthenticated users. When your code does:

```typescript
const supabase = createClient(url, anonKey)
await supabase.from("subscribers").select("*")
```

Supabase sends the query as the `anon` role. PostgreSQL checks: "Does `anon` have a policy allowing SELECT on `subscribers`?" If not, it returns nothing.

### Advanced Level: The Server Action Trust Model

Next.js Server Actions (`"use server"`) execute on your server, never in the browser. The client sends a POST request, your server runs the function, and returns the result.

```
Browser                          Server
   |                                |
   |-- POST /subscribe ------------>|
   |                                |  1. Parse form data
   |                                |  2. Validate with Zod
   |                                |  3. Query Supabase (admin)
   |                                |  4. Return result
   |<-- { success: true } ---------|
```

Because the function runs on your server:
- Environment variables (like `SUPABASE_SERVICE_ROLE_KEY`) are available
- The browser never sees the service key
- You control what happens before/after the database call

This is why using the service role key in server actions is safe:

```typescript
// ✅ SAFE: This file has "use server", runs only on server
"use server"
import { createAdminClient } from "@/lib/supabase/admin" 

// ❌ DANGEROUS: This file is a client component
"use client"
import { createAdminClient } from "@/lib/supabase/admin" // NEVER DO THIS
```

### Expert Level: Defense in Depth

Even with an admin client, you should layer your security:

1. **Input Validation:** Use Zod schemas before touching the database
2. **Rate Limiting:** Prevent abuse (we use `checkRateLimit()`)
3. **Audit Logging:** Log sensitive operations
4. **Principle of Least Privilege:** Only use admin client where needed

The admin client bypasses RLS, but your code becomes the security layer:

```typescript
export async function unsubscribeAction(formData: FormData) {
  // Layer 1: Validate input
  const result = unsubscribeSchema.safeParse({ email: formData.get("email") })
  if (!result.success) return { error: "Invalid email" }

  // Layer 2: Rate limit (optional for unsubscribe)
  // const { allowed } = await checkRateLimit(...)

  // Layer 3: Business logic check
  const { data: existing } = await supabase.from("subscribers").select("id").eq("email", email).single()
  if (!existing) return { error: "Not subscribed" }

  // Layer 4: Perform action
  await supabase.from("subscribers").delete().eq("email", email)
}
```

---

## File Changes Made

| File | Change |
|------|--------|
| `lib/supabase/admin.ts` | **NEW** - Admin client with service role key |
| `app/actions/subscriptions.ts` | Use `createAdminClient()` instead of `createClient()` |
| `.env` | Added `SUPABASE_SERVICE_ROLE_KEY` |

---

## Key Takeaways

1. **Anon key + RLS** = For browser/client access with row-level restrictions
2. **Service role key** = For server-side operations that need full access
3. **Never expose the service role key** to the client
4. **Server Actions are server-only** = Safe to use service role key
5. **Layer your security** = Validation, rate limiting, and logging still matter

---

*This document is part of the Quotsy "Learnt" collection.*
