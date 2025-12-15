import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Quotsy - 1000+ Inspiring Quotes from History's Greatest Minds",
  description:
    "Discover timeless wisdom from philosophers, writers, and leaders. Browse 1000+ verified quotes by genre and subscribe to receive daily inspiration.",
  keywords: ["quotes", "inspiration", "wisdom", "philosophy", "motivation", "daily quotes"],
  authors: [{ name: "Quotsy" }],
  openGraph: {
    title: "Quotsy - Words that inspire, thoughts that endure",
    description: "Discover timeless wisdom from history's greatest minds. Get a daily dose of inspiration.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quotsy - 1000+ Inspiring Quotes",
    description: "Discover timeless wisdom from history's greatest minds.",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
