"use server"

import { cookies } from "next/headers"
import { createAdminToken, verifyAdminToken } from "@/lib/jwt"
import { checkRateLimit } from "@/lib/rate-limit"

/**
 * Admin Login Action
 * 
 * Authenticates the admin using a password and creates a signed JWT session.
 * 
 * Security features:
 * - Rate limiting (5 attempts per hour per IP)
 * - Password comparison (should ideally use timing-safe comparison)
 * - JWT token with HS256 signature
 * - HttpOnly cookie (not accessible via JavaScript)
 * - Secure flag in production (HTTPS only)
 * - SameSite=strict (prevents CSRF)
 */
export async function adminLoginAction(password: string) {
  // Rate limit to 5 attempts per hour to prevent brute-force attacks
  const { allowed, message } = await checkRateLimit("admin_login", 5, 3600)
  if (!allowed) {
    return { success: false, message: message || "Too many login attempts. Please try again later." }
  }

  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    return { success: false, message: "Admin access not configured" }
  }

  // Note: In production with multiple admins, use bcrypt for password hashing
  if (password !== adminPassword) {
    return { success: false, message: "Invalid password" }
  }

  try {
    // Create a signed JWT token (expires in 24 hours)
    const token = await createAdminToken("24h")

    // Set the token in an HttpOnly cookie
    const cookieStore = await cookies()
    cookieStore.set("admin_session", token, {
      httpOnly: true,                               // Not accessible via JavaScript
      secure: process.env.NODE_ENV === "production", // HTTPS only in production
      sameSite: "strict",                           // Prevents CSRF attacks
      maxAge: 60 * 60 * 24,                         // 24 hours (matches JWT expiry)
      path: "/",                                    // Available on all paths
    })

    return { success: true, message: "Welcome, admin!" }
  } catch (error) {
    console.error("Failed to create admin session:", error)
    return { success: false, message: "Authentication failed. Please try again." }
  }
}

/**
 * Admin Logout Action
 * 
 * Removes the admin session cookie.
 * Note: The JWT itself remains valid until expiry, but without the cookie,
 * the browser can't send it. For immediate revocation, you'd need a token blacklist.
 */
export async function adminLogoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete("admin_session")
  return { success: true }
}

/**
 * Check Admin Session
 * 
 * Verifies the admin session by validating the JWT token.
 * 
 * This function:
 * 1. Retrieves the token from cookies
 * 2. Verifies the signature (proves it was created with our secret)
 * 3. Checks expiration time
 * 4. Validates the payload contains role="admin"
 * 
 * @returns true if valid admin session, false otherwise
 */
export async function checkAdminSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get("admin_session")

    if (!sessionCookie?.value) {
      return false
    }

    // Verify the JWT token - this checks signature and expiration
    const payload = await verifyAdminToken(sessionCookie.value)

    return payload !== null && payload.role === "admin"
  } catch (error) {
    // Any error means invalid session
    return false
  }
}

