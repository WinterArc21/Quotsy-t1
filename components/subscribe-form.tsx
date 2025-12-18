"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { GENRES, type Genre } from "@/lib/types"
import { subscribeAction } from "@/app/actions"
import { Check, Loader2 } from "lucide-react"

export function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const toggleGenre = (genre: Genre) => {
    setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]))
  }

  const selectAll = () => {
    setSelectedGenres([...GENRES])
  }

  const clearAll = () => {
    setSelectedGenres([])
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Name (optional)
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-11 bg-background"
          />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Choose your genres</Label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={selectAll}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Select all
            </button>
            <span className="text-muted-foreground">·</span>
            <button
              type="button"
              onClick={clearAll}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {GENRES.map((genre) => (
            <label
              key={genre}
              className={`flex cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2.5 transition-all ${selectedGenres.includes(genre)
                  ? "border-foreground bg-secondary"
                  : "border-border hover:border-muted-foreground bg-background"
                }`}
            >
              <Checkbox
                checked={selectedGenres.includes(genre)}
                onCheckedChange={() => toggleGenre(genre)}
                className="h-4 w-4"
              />
              <span className="text-sm">{genre}</span>
            </label>
          ))}
        </div>

        {selectedGenres.length > 0 && (
          <p className="text-xs text-muted-foreground">
            {selectedGenres.length} genre{selectedGenres.length !== 1 ? "s" : ""} selected
          </p>
        )}
      </div>

      {message && (
        <div
          className={`flex items-center gap-2 rounded-lg p-4 text-sm ${message.type === "success"
              ? "bg-secondary border border-foreground/20 text-foreground"
              : "bg-destructive/10 border border-destructive/20 text-destructive"
            }`}
        >
          {message.type === "success" && <Check className="h-4 w-4 shrink-0" />}
          {message.text}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full h-12" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
          </>
        ) : (
          "Subscribe to Daily Quotes"
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">No spam, ever. Unsubscribe anytime.</p>
    </form>
  )
}
