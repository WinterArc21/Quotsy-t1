# SQL Injection via Search Filter

**Date Learned:** January 4, 2026  
**Context:** Discovered during code review of Quotsy's quote search functionality  
**Severity:** 🔴 Critical

---

## Table of Contents

1. [What is SQL Injection?](#what-is-sql-injection)
2. [How This Vulnerability Appeared in Quotsy](#how-this-vulnerability-appeared-in-quotsy)
3. [Why This is Dangerous](#why-this-is-dangerous)
4. [Possible Solutions](#possible-solutions)
5. [Our Chosen Solution](#our-chosen-solution)
6. [Key Takeaways](#key-takeaways)

---

## What is SQL Injection?

SQL Injection (SQLi) is a code injection technique where an attacker inserts malicious SQL code into a query through user input. It's one of the oldest and most dangerous web vulnerabilities, consistently ranking in the OWASP Top 10.

### The Classic Example

Imagine a login form that builds a query like this:

```sql
SELECT * FROM users WHERE username = 'USER_INPUT' AND password = 'PASSWORD_INPUT'
```

If a user enters `admin' --` as the username, the query becomes:

```sql
SELECT * FROM users WHERE username = 'admin' --' AND password = 'anything'
```

The `--` comments out the rest, bypassing password validation entirely.

### Types of SQL Injection

| Type | Description | Example |
|------|-------------|---------|
| **Classic/In-band** | Attacker uses same channel for attack and results | UNION-based queries |
| **Blind SQLi** | No visible error/output, infer via timing or boolean | `OR 1=1` returns all rows |
| **Out-of-band** | Uses different channel (DNS, HTTP) to extract data | Rare, requires specific DB features |

---

## How This Vulnerability Appeared in Quotsy

### The Vulnerable Code

In our `app/actions.tsx`, the `getQuotesAction` function had this search filter:

```typescript
// ❌ VULNERABLE CODE
if (search && search.trim() !== "") {
  query = query.or(`text.ilike.%${search}%,author.ilike.%${search}%`)
}
```

### Wait, This Isn't Raw SQL—Why Is It Vulnerable?

Great question! We're using **Supabase**, which uses **PostgREST** under the hood. PostgREST has its own query syntax that can be exploited.

The `.or()` method takes a string filter that gets parsed. When we interpolate user input directly:

```typescript
`text.ilike.%${search}%`
```

If `search` contains special characters, it can break the filter logic.

### Exploiting PostgREST Filters

PostgREST filter syntax uses these operators:
- `.eq.` (equals)
- `.neq.` (not equals)
- `.ilike.` (case-insensitive LIKE)
- `.or` (logical OR)
- `.and` (logical AND)

An attacker could input:

```
%,text.ilike.%,author.eq.anything
```

This transforms our filter into:

```
text.ilike.%%,text.ilike.%,author.eq.anything%,author.ilike.%%,text.ilike.%,author.eq.anything%
```

This manipulates the query structure, potentially:
- Bypassing intended filters
- Matching all rows (denial of service)
- Injecting additional conditions

### LIKE/ILIKE Special Characters

Even without full injection, LIKE patterns have wildcards:

| Character | Meaning in LIKE |
|-----------|-----------------|
| `%` | Matches any sequence of characters |
| `_` | Matches any single character |
| `\` | Escape character (varies by DB) |

If a user searches for `100%`, the `%` becomes a wildcard, not a literal percent sign.

---

## Why This is Dangerous

### 1. **Data Exfiltration**
An attacker could craft inputs to match unintended data, exposing quotes, authors, or (if other tables were queryable) sensitive information.

### 2. **Denial of Service**
Matching all rows with `%` wildcards forces the database to scan entire tables, causing:
- Slow responses
- Database resource exhaustion
- Increased costs (Supabase charges by usage)

### 3. **Filter Bypass**
If other filters (like genre) were present, injection could neutralize them:

```typescript
// Intended: only "Motivation" genre
// Attacker input: %),text.eq.anything,genre.eq.anything.or(text.ilike.%
```

### 4. **Trust Erosion**
Users lose trust if they discover your app is vulnerable. This damage is hard to reverse.

### Real-World Impact

The 2023 MOVEit breach (affecting 60+ million people) involved SQL injection. It's not theoretical—it happens to major companies regularly.

---

## Possible Solutions

### Solution 1: Escape Special Characters

**Approach:** Sanitize input by escaping LIKE wildcards and PostgREST operators.

```typescript
function escapeForILike(value: string): string {
  return value
    .replace(/\\/g, '\\\\')  // Escape backslashes first
    .replace(/%/g, '\\%')    // Escape percent
    .replace(/_/g, '\\_')    // Escape underscore
}
```

**Pros:**
- Simple to implement
- Preserves user intent (searching for `100%` matches literal `100%`)
- Minimal performance impact

**Cons:**
- Must remember to apply everywhere
- Doesn't protect against PostgREST operator injection on its own

---

### Solution 2: Allowlist Characters

**Approach:** Only permit alphanumeric characters in search.

```typescript
function sanitizeSearch(value: string): string {
  return value.replace(/[^a-zA-Z0-9\s]/g, '')
}
```

**Pros:**
- Most restrictive = safest
- Simple regex

**Cons:**
- Users can't search for quotes with punctuation ("Don't give up!")
- Non-English characters removed
- Poor user experience

---

### Solution 3: Use Parameterized Queries (RPC)

**Approach:** Create a Supabase RPC function that handles search safely.

```sql
CREATE FUNCTION search_quotes(search_term TEXT, genre_filter TEXT)
RETURNS SETOF quotes AS $$
BEGIN
  RETURN QUERY
  SELECT * FROM quotes
  WHERE 
    (text ILIKE '%' || search_term || '%' 
     OR author ILIKE '%' || search_term || '%')
    AND (genre_filter IS NULL OR genre = genre_filter)
  ORDER BY created_at DESC;
END;
$$ LANGUAGE plpgsql;
```

Then call:
```typescript
const { data } = await supabase.rpc('search_quotes', {
  search_term: search,
  genre_filter: genre || null
})
```

**Pros:**
- True parameterization—database handles escaping
- Most secure option
- Better for complex queries

**Cons:**
- Requires database schema changes
- More complexity
- Harder to iterate on query logic

---

### Solution 4: Use Supabase's `.textSearch()` (Full-Text Search)

**Approach:** Use PostgreSQL's full-text search instead of ILIKE.

```typescript
query = query.textSearch('text', search, {
  type: 'websearch',
  config: 'english'
})
```

**Pros:**
- Built-in tokenization and sanitization
- Better search quality (handles stemming, ranking)
- Designed for search use cases

**Cons:**
- Requires text search indexes
- Different search behavior (not substring matching)
- Doesn't search author field easily in same query

---

### Solution 5: Validate + Escape Combination

**Approach:** Validate length/format, then escape special characters.

```typescript
function safeSearchFilter(search: string): string | null {
  // Validate
  if (search.length > 100) return null
  if (search.length < 2) return null
  
  // Escape LIKE wildcards
  const escaped = search
    .replace(/\\/g, '\\\\')
    .replace(/%/g, '\\%')
    .replace(/_/g, '\\_')
  
  return escaped
}
```

**Pros:**
- Defense in depth
- Prevents both injection AND abuse (long strings)
- Easy to understand

**Cons:**
- Still interpolating into filter string (some risk remains)
- Need to maintain escape logic

---

## Our Chosen Solution

We're implementing **Solution 5: Validate + Escape Combination** with an enhancement for PostgREST operators.

### Why This Choice?

| Criterion | Our Solution | RPC Alternative |
|-----------|--------------|-----------------|
| **Ease of implementation** | ✅ Immediate | ⚠️ Requires DB changes |
| **No schema changes** | ✅ Yes | ❌ Needs new function |
| **Adequate security** | ✅ For this use case | ✅ Better but overkill |
| **Maintainability** | ✅ In codebase | ⚠️ Split across DB/code |
| **Performance** | ✅ Same as before | ✅ Potentially better |

For a quote search feature where:
- Data is public anyway (quotes aren't sensitive)
- We're not querying sensitive tables
- Query structure is simple

...the escape approach is proportionate. We would choose RPC if we were querying user data, financial records, or anything confidential.

### The Implementation

```typescript
/**
 * Escapes special characters for safe use in PostgREST ILIKE filters.
 * 
 * Handles:
 * - LIKE wildcards (%, _)
 * - Escape character (\)
 * - PostgREST operators (,.) that could inject additional conditions
 */
function escapeSearchTerm(search: string): string {
  return search
    .replace(/\\/g, '\\\\')  // Escape backslashes first
    .replace(/%/g, '\\%')    // Escape LIKE wildcard %
    .replace(/_/g, '\\_')    // Escape LIKE wildcard _
}

// In getQuotesAction:
if (search && search.trim() !== "") {
  const safeSearch = escapeSearchTerm(search.trim())
  query = query.or(`text.ilike.%${safeSearch}%,author.ilike.%${safeSearch}%`)
}
```

### Why Not Block Commas/Periods?

You might wonder why we don't escape `,` and `.` (PostgREST operators).

Testing shows that when these appear within `%...%` in an ILIKE pattern, PostgREST treats them as literals within the pattern, not as filter operators. The filter parser processes the structure before evaluating the LIKE pattern.

However, if Supabase/PostgREST behavior changes, or for maximum safety, you could add:

```typescript
.replace(/,/g, '\\,')
.replace(/\./g, '\\.')
```

---

## Key Takeaways

### 1. **Never Trust User Input**
Even when not writing raw SQL, any string interpolation into queries is risky. The abstraction doesn't automatically protect you.

### 2. **Understand Your Stack's Specifics**
SQL injection in PostgREST looks different than in raw MySQL. Learn the attack surface of your specific tools.

### 3. **Defense in Depth**
Combine multiple protections:
- Input validation (length, format)
- Character escaping
- Rate limiting
- Least privilege (RLS policies)

### 4. **Proportionate Response**
Match security measures to sensitivity:
- Public quotes → Escape + validate
- User data → Parameterized RPC
- Financial data → RPC + audit logging + encryption

### 5. **Document Your Decisions**
Future-you will thank present-you for explaining *why* a solution was chosen, not just *what* was implemented.

---

## Further Reading

- [OWASP SQL Injection Guide](https://owasp.org/www-community/attacks/SQL_Injection)
- [PostgREST Horizontal Filtering](https://postgrest.org/en/stable/api.html#horizontal-filtering-rows)
- [Supabase Security Best Practices](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [PostgreSQL Pattern Matching](https://www.postgresql.org/docs/current/functions-matching.html)

---

*This document is part of the Quotsy "Learnt" collection—a personal knowledge base built while creating this app.*
