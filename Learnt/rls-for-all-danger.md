# The Danger of `FOR ALL` in Row Level Security (RLS)

**Date Learned:** January 4, 2026  
**Context:** Discovered that live policies used `FOR ALL` for public access to `subscribers` and `pending_quotes`.  
**Severity:** 🔴 Critical (PII Leak Risk)

---

## What is `FOR ALL`?

In PostgreSQL Row Level Security (RLS), when you define a policy, you specify which command it applies to: `SELECT`, `INSERT`, `UPDATE`, or `DELETE`.

The `FOR ALL` command is a shorthand that applies the policy to **every single one** of those operations.

```sql
-- ❌ DANGEROUS for public access
CREATE POLICY "Anyone can subscribe" ON subscribers
FOR ALL
TO anon
WITH CHECK (true);
```

---

## Why It's Dangerous

### 1. Implicit Read Access (The Silent Leak)
Most people use `FOR ALL` thinking, "I want anyone to be able to do anything needed to subscribe." However, `subscribers` often contains sensitive data like email addresses.

By using `FOR ALL`, you are explicitly granting `SELECT` access to the `anon` role (the public). 

**The Attack:**
Anyone with your `NEXT_PUBLIC_SUPABASE_ANON_KEY` (which is visible in the browser) can open the console and run:
```javascript
const { data } = await supabase.from('subscribers').select('email')
console.log(data) // 🚩 Returns EVERY subscriber's email
```

### 2. Broad Modification Powers
`FOR ALL` also grants `UPDATE` and `DELETE`. 
- An attacker could delete your entire subscriber list.
- An attacker could change names/genres for other users.
- Since `WITH CHECK (true)` is often used with `FOR ALL`, there are no row-level restrictions on *which* rows can be modified.

---

## The Correct Approach: Principle of Least Privilege

You should only grant the minimum permissions necessary for the app to function.

### A. Subscriptions (Insert Only + Limited Check)
Users need to be able to **Insert** a new subscription. They also often need to **Select** specifically their own record to check if they are already subscribed.

**The Fix:**
```sql
-- 1. Allow anyone to join the list
CREATE POLICY "Public can insert" ON subscribers 
FOR INSERT WITH CHECK (true);

-- 2. Only allow specific row lookups (Optional/Advanced)
-- For public apps, it's often better to handle "Already Subscribed" 
-- logic via a secure Edge Function or RPC rather than public SELECT.
```

### B. Pending Quotes (Insert Only)
The public should be able to submit a quote, but they should **never** be able to see other people's pending submissions or emails.

**The Fix:**
```sql
-- ✅ SAFE: Only allow adding new rows
CREATE POLICY "Anyone can submit" ON pending_quotes 
FOR INSERT WITH CHECK (true);

-- ❌ REMOVE any SELECT policy for the 'anon' role
```

### C. Public Quotes (Select Only)
This is the one place where `SELECT` is intended.

```sql
-- ✅ SAFE: Public can read, but not touch
CREATE POLICY "Quotes are public" ON quotes 
FOR SELECT USING (true);
```

---

## How to Verify Your Policies

You can check your current policies by running this query in the Supabase SQL Editor:

```sql
SELECT 
    schemaname, tablename, policyname, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE schemaname = 'public';
```

Look at the `cmd` column:
- `r` = SELECT (Read)
- `a` = INSERT (Add/All - check `polcmd` details)
- `w` = UPDATE (Write)
- `d` = DELETE

---

## Key Takeaways

1. **Avoid `FOR ALL`** for public/anonymous policies. Be explicit.
2. **`SELECT` is the biggest risk.** If you grant `SELECT` to `anon` without a restrictive `USING` clause, your database is effectively an open API for that table.
3. **Check your work.** Test your security by trying to `select()` data from the browser console while logged out. If you get data you shouldn't see, your RLS is too loose.

---

*This document is part of the Quotsy "Learnt" collection.*
