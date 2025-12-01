"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GENRES } from "@/lib/types"
import { submitQuoteAction } from "@/app/actions"
import { CheckCircle2, Send, Loader2 } from "lucide-react"

export function SubmitQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedGenre, setSelectedGenre] = useState<string>("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    formData.set("genre", selectedGenre)

    const result = await submitQuoteAction(formData)

    setIsSubmitting(false)

    if (result.success) {
      setIsSuccess(true)
    } else {
      setError(result.message)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl font-bold mb-3">Quote Submitted!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for contributing. Our team will review your submission shortly.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>
          Submit Another Quote
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="text">Quote *</Label>
        <Textarea
          id="text"
          name="text"
          placeholder="Enter the quote here..."
          required
          minLength={10}
          rows={4}
          className="resize-none"
        />
        <p className="text-xs text-muted-foreground">Minimum 10 characters</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="author">Author</Label>
        <Input id="author" name="author" placeholder="Who said or wrote this? (Leave blank for Anonymous)" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="genre">Genre *</Label>
        <Select value={selectedGenre} onValueChange={setSelectedGenre} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a genre" />
          </SelectTrigger>
          <SelectContent>
            {GENRES.map((genre) => (
              <SelectItem key={genre} value={genre}>
                {genre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="submitterEmail">Your Email (optional)</Label>
        <Input
          id="submitterEmail"
          name="submitterEmail"
          type="email"
          placeholder="Get notified when your quote is approved"
        />
        <p className="text-xs text-muted-foreground">We'll only use this to notify you about your submission</p>
      </div>

      {error && <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md border border-red-200">{error}</div>}

      <Button type="submit" className="w-full" disabled={isSubmitting || !selectedGenre}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Submit Quote
          </>
        )}
      </Button>
    </form>
  )
}
