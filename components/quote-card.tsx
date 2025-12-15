"use client"

import { useState } from "react"
import { Copy, Check, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteCardGenerator } from "@/components/quote-card-generator"
import type { Quote } from "@/lib/types"

interface QuoteCardProps {
  quote: Quote
  featured?: boolean
}

export function QuoteCard({ quote, featured = false }: QuoteCardProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    const text = `"${quote.text}" — ${quote.author}`
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: `Quote by ${quote.author}`,
        text: `"${quote.text}" — ${quote.author}`,
        url: window.location.href,
      })
    } else {
      copyToClipboard()
    }
  }

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-lg border border-border/50 bg-card p-6 transition-all duration-300 hover:border-border hover:shadow-lg ${featured ? "md:p-10" : ""
        }`}
    >
      <div className="space-y-4">
        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          {quote.genre}
        </span>

        <blockquote
          className={`font-serif leading-relaxed text-foreground ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}
        >
          &ldquo;{quote.text}&rdquo;
        </blockquote>
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <p className="font-medium text-foreground">{quote.author}</p>
          {quote.author_bio && <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{quote.author_bio}</p>}
        </div>

        <div className="flex items-center gap-1 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100 md:focus-within:opacity-100">
          <QuoteCardGenerator quote={quote} />
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyToClipboard} aria-label="Copy quote">
            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={share} aria-label="Share quote">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  )
}
