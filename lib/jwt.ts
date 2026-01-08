import { SignJWT, jwtVerify, type JWTPayload } from "jose"

/**
 * JWT utility functions for secure session management.
 * 
 * We use the `jose` library because:
 * - It's edge-runtime compatible (works with Vercel Edge, Cloudflare Workers)
 * - It's maintained and audited
 * - It supports modern algorithms (HS256, RS256, ES256, etc.)
 * - It doesn't rely on Node.js crypto module (unlike jsonwebtoken)
 */

/**
 * Interface for admin session payload.
 * Keeping it minimal reduces token size.
 */
interface AdminSessionPayload extends JWTPayload {
  role: "admin"
  iat: number
  exp: number
}

/**
 * Get the secret key for signing/verifying tokens.
 * The secret must be at least 32 characters for HS256.
 */
function getSecretKey(): Uint8Array {
  const secret = process.env.ADMIN_JWT_SECRET
  
  if (!secret) {
    throw new Error("ADMIN_JWT_SECRET environment variable is not set")
  }
  
  if (secret.length < 32) {
    throw new Error("ADMIN_JWT_SECRET must be at least 32 characters long")
  }
  
  return new TextEncoder().encode(secret)
}

/**
 * Creates a signed JWT token for admin authentication.
 * 
 * @param expiresIn - Token expiration time (default: 24 hours)
 * @returns Signed JWT token string
 * 
 * The token contains:
 * - role: "admin" - identifies this as an admin session
 * - iat: issued at timestamp (automatically added)
 * - exp: expiration timestamp
 */
export async function createAdminToken(expiresIn: string = "24h"): Promise<string> {
  const secret = getSecretKey()
  
  const token = await new SignJWT({ role: "admin" as const })
    .setProtectedHeader({ alg: "HS256" }) // HMAC with SHA-256
    .setIssuedAt()                         // Current timestamp
    .setExpirationTime(expiresIn)          // Expiration time
    .sign(secret)
  
  return token
}

/**
 * Verifies an admin JWT token and returns the payload.
 * 
 * @param token - The JWT token to verify
 * @returns The decoded payload if valid, null if invalid/expired
 * 
 * Verification checks:
 * - Signature is valid (matches our secret)
 * - Token hasn't expired
 * - Token structure is correct
 */
export async function verifyAdminToken(token: string): Promise<AdminSessionPayload | null> {
  try {
    const secret = getSecretKey()
    
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ["HS256"], // Only accept HS256 to prevent algorithm confusion attacks
    })
    
    // Validate the payload has the expected shape
    if (payload.role !== "admin") {
      return null
    }
    
    return payload as AdminSessionPayload
  } catch (error) {
    // Token is invalid, expired, or tampered with
    // We don't log the specific error to avoid leaking information
    return null
  }
}
