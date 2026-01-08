# Secure Session Management with JWT

This document explains the session forgery vulnerability we had, various solutions we considered, and why we chose JWT tokens.

---

## The Problem: Session Forgery

### What We Had (Insecure)

```typescript
// OLD CODE - INSECURE!
cookieStore.set("admin_session", "authenticated", {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 60 * 60 * 24,
})

// Verification - also INSECURE!
export async function checkAdminSession() {
  const session = cookieStore.get("admin_session")
  return session?.value === "authenticated"  // Just checking if value equals "authenticated"
}
```

### Why This Is a Critical Vulnerability

The problem is that **cookies are stored on the client's browser**. The user has full control over their cookies.

**Attack scenario:**

1. Open browser DevTools → Application → Cookies
2. Add a new cookie: `admin_session = authenticated`
3. Refresh the page
4. ✅ You're now logged in as admin!

No password needed. No hacking skills needed. Just set a cookie.

```
Browser DevTools → Storage → Cookies → Add:
Name:  admin_session
Value: authenticated

That's it. You're admin now.
```

This is called **session forgery** - creating a fake session that the server accepts as legitimate.

---

## Why Can't We Just Use a "Secret" Value?

You might think: "What if we use a secret value instead of 'authenticated'?"

```typescript
// Still insecure!
cookieStore.set("admin_session", "super_secret_value_12345", {...})
```

Problems:
1. **The secret is visible to the user** - They can see it in their cookies
2. **Once seen, it can be shared** - Post it online, anyone can use it
3. **No expiration in the value itself** - Even if the cookie expires, knowing the value means you can recreate it
4. **No way to invalidate** - If the secret leaks, you'd need to change code and redeploy

---

## Solution Options Considered

### Option 1: Database Sessions

Store sessions in a database table.

```typescript
// On login
const sessionId = crypto.randomUUID()
await db.insert("sessions", { 
  id: sessionId, 
  userId: admin.id, 
  expiresAt: new Date(Date.now() + 24*60*60*1000) 
})
cookieStore.set("session_id", sessionId)

// On verification
const session = await db.query("sessions", { id: sessionId })
return session && session.expiresAt > new Date()
```

**Pros:**
- Easy to invalidate (just delete from database)
- Can track all active sessions
- Can revoke immediately

**Cons:**
- Database query on every request (performance hit)
- More infrastructure (need session cleanup jobs)
- Single point of failure (if DB is down, no auth works)

### Option 2: Encrypted Cookies

Encrypt the session data with a server-side key.

```typescript
import { seal, unseal } from '@hapi/iron'

// On login
const data = { role: 'admin', createdAt: Date.now() }
const encrypted = await seal(data, SECRET_KEY, iron.defaults)
cookieStore.set("session", encrypted)

// On verification
const data = await unseal(cookie.value, SECRET_KEY, iron.defaults)
return data.role === 'admin'
```

**Pros:**
- No database needed
- Data is hidden from client
- Can include any payload

**Cons:**
- Larger cookie size
- `@hapi/iron` is less maintained than alternatives
- No standard format (custom implementation)

### Option 3: JWT (JSON Web Tokens) ✅ OUR CHOICE

Sign the session data so we can verify it wasn't tampered with.

```typescript
import { SignJWT, jwtVerify } from 'jose'

// On login
const token = await new SignJWT({ role: 'admin' })
  .setProtectedHeader({ alg: 'HS256' })
  .setExpirationTime('24h')
  .sign(SECRET_KEY)

// On verification
const { payload } = await jwtVerify(token, SECRET_KEY)
return payload.role === 'admin'
```

**Pros:**
- Industry standard (RFC 7519)
- Stateless (no database queries)
- Self-contained expiration
- Well-audited libraries available
- Edge-runtime compatible

**Cons:**
- Cannot revoke before expiration (without blacklist)
- Token size grows with payload

---

## What Is a JWT Token?

JWT stands for **JSON Web Token**. It's a standard way to securely transmit information between parties.

### Structure

A JWT has three parts separated by dots:

```
xxxxx.yyyyy.zzzzz
  ↓      ↓      ↓
Header.Payload.Signature
```

Example:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDQ3MjAwMDAsImV4cCI6MTcwNDgwNjQwMH0.BjLTNMq6JvPXVLkZYGGHLxVHHQXG8TQxNq2fZEAaXvk
```

Let's decode each part:

#### 1. Header (Base64 encoded)
```json
{
  "alg": "HS256",   // Algorithm used for signing
  "typ": "JWT"      // Token type
}
```

#### 2. Payload (Base64 encoded)
```json
{
  "role": "admin",   // Our custom data
  "iat": 1704720000, // Issued At (timestamp)
  "exp": 1704806400  // Expires At (timestamp)
}
```

#### 3. Signature
```
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret_key
)
```

### Why Is This Secure?

The magic is in the **signature**. Here's how it works:

1. **Creating the token:**
   - Server takes header + payload
   - Signs them with a secret key only the server knows
   - Attaches the signature

2. **Verifying the token:**
   - Server receives the token
   - Extracts header + payload
   - Recalculates what the signature SHOULD be using the same secret
   - Compares with the actual signature
   - If they match → token is authentic

### Why Can't Attackers Forge It?

```
Attacker tries:
1. Decode the payload (easy - it's just Base64)
2. Modify it: { role: "admin" }
3. Encode it back
4. But... they don't have the SECRET KEY
5. They can't create a valid signature
6. Server recalculates signature → DOESN'T MATCH
7. Token rejected ❌
```

The payload is NOT encrypted - anyone can read it. But they can't MODIFY it without invalidating the signature.

---

## The Algorithm: HS256

We're using `HS256` which stands for:
- **H**MAC with
- **S**HA-**256**

### What's HMAC?

HMAC = Hash-based Message Authentication Code

It combines:
1. A hash function (SHA-256)
2. A secret key

```
HMAC(message, key) = Hash((key XOR opad) || Hash((key XOR ipad) || message))
```

The result is a fixed-length string that:
- Is different for any change in the message
- Can only be recreated with the same key
- Is computationally infeasible to reverse

### Other Algorithm Options

| Algorithm | Type | Use Case |
|-----------|------|----------|
| **HS256** | Symmetric | Single server, shared secret |
| HS384 | Symmetric | Higher security, larger signature |
| HS512 | Symmetric | Even higher security |
| **RS256** | Asymmetric | Multiple services, public key verification |
| ES256 | Asymmetric | Smaller signatures, modern |

We chose HS256 because:
- Single server application
- Good balance of security and performance
- Simpler key management (one secret vs public/private pair)

---

## Our Implementation

### File: `lib/jwt.ts`

```typescript
import { SignJWT, jwtVerify } from "jose"

// Convert string secret to bytes
function getSecretKey(): Uint8Array {
  const secret = process.env.ADMIN_JWT_SECRET
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_JWT_SECRET must be at least 32 characters")
  }
  return new TextEncoder().encode(secret)
}

// Create token
export async function createAdminToken(expiresIn: string = "24h"): Promise<string> {
  const secret = getSecretKey()
  
  return await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secret)
}

// Verify token
export async function verifyAdminToken(token: string): Promise<Payload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey(), {
      algorithms: ["HS256"],  // Prevent algorithm confusion attacks
    })
    return payload.role === "admin" ? payload : null
  } catch {
    return null  // Invalid, expired, or tampered
  }
}
```

### Why `jose` Library?

We chose `jose` over `jsonwebtoken` because:

1. **Edge Runtime Compatible**
   - `jsonwebtoken` uses Node.js crypto module
   - `jose` uses Web Crypto API
   - Works in Vercel Edge Functions, Cloudflare Workers, etc.

2. **Modern and Maintained**
   - Actively developed
   - TypeScript-first
   - Follows latest JWT RFCs

3. **No Dependencies**
   - Single package, no dependency tree
   - Smaller bundle size

---

## Environment Setup

Add to your `.env` file:

```env
# Generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
ADMIN_JWT_SECRET=your_64_character_hex_string_here_at_least_32_chars
```

Requirements:
- **Minimum 32 characters** (256 bits) for HS256
- **Random** - use cryptographic random generator
- **Secret** - never commit to git, never share

Generate a secure secret:
```bash
# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Using OpenSSL
openssl rand -hex 32
```

---

## Security Considerations

### What We're Protected Against

✅ **Session Forgery** - Can't create valid tokens without the secret
✅ **Token Tampering** - Any modification invalidates the signature
✅ **Expiration Bypass** - Expiry is in the signed payload
✅ **Algorithm Confusion** - We explicitly check for HS256 only
✅ **CSRF** - SameSite=strict cookie flag
✅ **XSS Token Theft** - HttpOnly cookie flag

### What We're NOT Protected Against

⚠️ **Token Revocation** - Once issued, valid until expiry
- Solution: Add a token blacklist in Redis/DB (if needed)

⚠️ **Secret Key Compromise** - If leaked, all tokens can be forged
- Solution: Rotate keys, use secret management service

⚠️ **Replay Attacks** - Token can be reused until expiry
- Solution: Short expiry + refresh tokens (if needed)

---

## Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        LOGIN FLOW                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  User                     Server                                 │
│   │                          │                                   │
│   │  POST /login             │                                   │
│   │  { password: "***" }     │                                   │
│   │─────────────────────────>│                                   │
│   │                          │                                   │
│   │                    ┌─────┴─────┐                             │
│   │                    │ Validate  │                             │
│   │                    │ Password  │                             │
│   │                    └─────┬─────┘                             │
│   │                          │                                   │
│   │                    ┌─────┴─────┐                             │
│   │                    │ Create    │                             │
│   │                    │ JWT Token │                             │
│   │                    │ (signed)  │                             │
│   │                    └─────┬─────┘                             │
│   │                          │                                   │
│   │  Set-Cookie: token=xxx   │                                   │
│   │<─────────────────────────│                                   │
│   │                          │                                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    VERIFICATION FLOW                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  User                     Server                                 │
│   │                          │                                   │
│   │  GET /admin              │                                   │
│   │  Cookie: token=xxx       │                                   │
│   │─────────────────────────>│                                   │
│   │                          │                                   │
│   │                    ┌─────┴─────┐                             │
│   │                    │ Extract   │                             │
│   │                    │ Token     │                             │
│   │                    └─────┬─────┘                             │
│   │                          │                                   │
│   │                    ┌─────┴─────┐                             │
│   │                    │ Verify    │                             │
│   │                    │ Signature │──── Invalid? ───> 401       │
│   │                    └─────┬─────┘                             │
│   │                          │                                   │
│   │                    ┌─────┴─────┐                             │
│   │                    │ Check     │                             │
│   │                    │ Expiry    │──── Expired? ───> 401       │
│   │                    └─────┬─────┘                             │
│   │                          │                                   │
│   │                    ┌─────┴─────┐                             │
│   │                    │ Check     │                             │
│   │                    │ Payload   │──── Invalid? ───> 401       │
│   │                    └─────┬─────┘                             │
│   │                          │                                   │
│   │  200 OK (admin page)     │                                   │
│   │<─────────────────────────│                                   │
│   │                          │                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Summary

| Aspect | Before | After |
|--------|--------|-------|
| Cookie Value | `"authenticated"` (static) | `eyJhbGci...` (signed JWT) |
| Verification | String comparison | Cryptographic signature verification |
| Forgery Risk | Anyone can create | Only possible with secret key |
| Expiration | Cookie-only | Built into token (double protection) |
| Payload | None | Contains role, timestamps |

The key insight: **Authentication isn't about hiding data, it's about proving authenticity**. JWTs don't hide the payload (it's Base64, not encrypted), but they prove the payload hasn't been tampered with and was created by someone with the secret key.

---

## Further Reading

- [JWT.io](https://jwt.io/) - Interactive JWT debugger
- [RFC 7519](https://tools.ietf.org/html/rfc7519) - JWT Standard
- [jose library docs](https://github.com/panva/jose)
- [OWASP JWT Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html)
