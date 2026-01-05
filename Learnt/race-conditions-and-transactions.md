# Race Conditions and Database Transactions

**Date Learned:** January 5, 2026  
**Context:** Identified in the `approveQuoteAction` sequence in Quotsy.  
**Severity:** 🟠 High (Data Inconsistency / Duplication)

---

## What is a Race Condition?

A **Race Condition** occurs when the outcome of a process depends on the specific sequence or timing of other events. When two or more operations "race" to finish, they can interfere with each other, leading to unexpected results.

In web development, this usually happens when you have a **"Read-Modify-Write"** cycle that isn't protected.

### The Problem in Quotsy

The original `approveQuoteAction` followed these steps:
1. **Read:** Fetch the data from `pending_quotes`.
2. **Write 1:** Insert that data into the `quotes` table.
3. **Write 2:** Update the status in `pending_quotes` to "approved".

Crucially, **Step 2 and Step 3 are separate network requests.**

---

## The Two Nightmare Scenarios

### 1. The Partial Failure (The "Ghost" Quote)
If Step 2 succeeds but Step 3 fails (due to a timeout, database crash, or network glitch), you are left in a "broken state":
- The quote is now live in the `quotes` table.
- But in the Admin Dashboard, it still looks "Pending."
- When the Admin clicks "Approve" again to "fix" it, a duplicate quote is created.

### 2. The Double Click (The "Parallel" Admin)
If two admins are reviewing quotes at the same time:
- **Admin A** reads the quote.
- **Admin B** reads the same quote 10ms later.
- Both admins see the status is "pending," so both trigger an "Insert."
- **Result:** Two identical quotes are added to the database.

---

## The Solution: Atomic Transactions

To prevent this, we need the operation to be **Atomic**. 
> **Atomic** means "all or nothing." Either every step succeeds, or the whole thing is rolled back as if it never started.

### How to Achieve Atomicity in Supabase

Since Supabase is based on PostgreSQL, we can use **RPC (Remote Procedure Call)** functions. By moving the logic from our TypeScript code into a SQL function inside the database, we get:

1. **Transaction Wrapping:** Postgres automatically wraps functions in a transaction.
2. **Speed:** Only one network request is sent to the database instead of three.
3. **Data Integrity:** The database engine itself ensures that no two people can modify the same row at the exact same moment.

### The "Before and After" Logic

**Before (Vulnerable):**
```typescript
// Server Action (Client -> DB, Client -> DB, Client -> DB)
const data = await supabase.from('pending').select();
await supabase.from('quotes').insert(data);
await supabase.from('pending').update({status: 'approved'});
```

**After (Secure):**
```typescript
// Server Action (Client -> DB [One Request])
await supabase.rpc('approve_quote', { quote_id: 5 });
```

---

## Key Takeaways

1. **Never chain multiple writes** in a Server Action if they depend on each other for consistency.
2. **Use the Database for Logic:** When moving data between tables, do it inside a SQL function.
3. **Think in "Units of Work":** If "Step A" shouldn't exist without "Step B," they must be in a transaction.

---

*This document is part of the Quotsy "Learnt" collection.*
