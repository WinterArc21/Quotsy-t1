import type { Quote } from "@/lib/types"

interface QuoteOfTheDayProps {
  quote: Quote
}

export function QuoteOfTheDay({ quote }: QuoteOfTheDayProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-foreground text-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="relative px-8 py-16 md:px-16 md:py-24">
        <span className="inline-block rounded-full bg-background/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-background/80">
          Quote of the Day
        </span>

        <blockquote className="mt-8 font-serif text-3xl leading-relaxed md:text-4xl lg:text-5xl">
          &ldquo;{quote.text}&rdquo;
        </blockquote>

        <div className="mt-8">
          <p className="text-xl font-medium">{quote.author}</p>
          {quote.author_bio && <p className="mt-1 text-background/60">{quote.author_bio}</p>}
        </div>

        <div className="mt-6 inline-block rounded-full bg-background/10 px-3 py-1 text-sm text-background/80">
          {quote.genre}
        </div>
      </div>
    </section>
  )
}
