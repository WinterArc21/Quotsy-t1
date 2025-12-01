"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { AdminLogin } from "@/components/admin-login"
import { AdminDashboard } from "@/components/admin-dashboard"
import { checkAdminSession, adminLogoutAction } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { LogOut, Loader2 } from "lucide-react"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function checkSession() {
      const authenticated = await checkAdminSession()
      setIsAuthenticated(authenticated)
      setIsLoading(false)
    }
    checkSession()
  }, [])

  async function handleLogout() {
    await adminLogoutAction()
    setIsAuthenticated(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {isAuthenticated ? (
          <>
            <div className="border-b border-border bg-neutral-50">
              <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div>
                  <h1 className="font-serif text-2xl font-bold">Admin Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Manage quote submissions</p>
                </div>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
            <AdminDashboard />
          </>
        ) : (
          <AdminLogin onSuccess={() => setIsAuthenticated(true)} />
        )}
      </main>
    </div>
  )
}
