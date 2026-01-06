"use server"

import { cookies } from "next/headers"

export async function adminLoginAction(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    return { success: false, message: "Admin access not configured" }
  }

  if (password !== adminPassword) {
    return { success: false, message: "Invalid password" }
  }

  // Set admin session cookie (expires in 24 hours)
  const cookieStore = await cookies()
  cookieStore.set("admin_session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 24 hours
  })

  return { success: true, message: "Welcome, admin!" }
}

export async function adminLogoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete("admin_session")
  return { success: true }
}

export async function checkAdminSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")
  return session?.value === "authenticated"
}

