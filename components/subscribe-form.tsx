"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { GENRES, type Genre } from "@/lib/types"
import { subscribeAction } from "@/app/actions"

export function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const toggleGenre = (genre: Genre) => {
    setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (selectedGenres.length === 0) {
      setMessage({ type: "error", text: "Please select at least one genre." })
      return
    }

    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData()
    formData.append("email", email)
    formData.append("name", name)
    formData.append("genres", JSON.stringify(selectedGenres))

    const result = await subscribeAction(formData)

    if (result.success) {
      setMessage({ type: "success", text: result.message })
      setEmail("")
      setName("")
      setSelectedGenres([])
    } else {
      setMessage({ type: "error", text: result.message })
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name (optional)</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12"
          />
        </div>
      </div>

      <div className="space-y-4">
        <Label>Choose your genres</Label>
        <p className="text-sm text-muted-foreground">Select the categories you want to receive quotes from.</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {GENRES.map((genre) => (
            <label
              key={genre}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all ${
                selectedGenres.includes(genre)
                  ? "border-foreground bg-secondary"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <Checkbox checked={selectedGenres.includes(genre)} onCheckedChange={() => toggleGenre(genre)} />
              <span className="text-sm font-medium">{genre}</span>
            </label>
          ))}
        </div>
      </div>

      {message && (
        <div
          className={`rounded-lg p-4 text-sm ${
            message.type === "success"
              ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400"
              : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {message.text}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Subscribing..." : "Subscribe to Daily Quotes"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        You can unsubscribe at any time. We respect your inbox.
      </p>
    </form>
  )
}
