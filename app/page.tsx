import Link from "next/link"
import { ArrowRight, PenLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuotesFeed } from "@/components/quotes-feed"
import { createClient } from "@/lib/supabase/server"

export default async function HomePage() {
  const supabase = await createClient()

  let quotes = []
  let quoteOfTheDay = null

  if (supabase) {
    // Fetch all quotes (limit 1000 for client-side filtering)
    const { data: fetchedQuotes } = await supabase
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1000)

    quotes = fetchedQuotes || []

    // Fetch quote of the day (based on date seed)
    const today = new Date().toISOString().split("T")[0]
    const seed = today.split("-").reduce((a, b) => a + Number.parseInt(b), 0)

    // Get total count first
    const { count } = await supabase
      .from("quotes")
      .select("*", { count: "exact", head: true })

    // Only fetch quote if database has quotes
    if (count && count > 0) {
      const index = seed % count
      const { data } = await supabase
        .from("quotes")
        .select("*")
        .range(index, index)
        .single()
      quoteOfTheDay = data
    }
  } else {
    console.warn("Supabase client not initialized. Missing environment variables.")
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-background" />
          <div className="container relative mx-auto px-4 py-24 md:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
                1000+ Verified Quotes
              </p>
              <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
                Words that inspire, thoughts that endure
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty">
                Discover timeless wisdom from history's greatest minds. Get a daily dose of inspiration delivered to
                your inbox.
              </p>
              <div className="mx-auto max-w-2xl">
                <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button asChild variant="outline" size="sm" className="bg-transparent text-muted-foreground hover:text-foreground">
                    <Link href="/subscribe">Get Daily Quotes</Link>
                  </Button>
                  <span className="hidden text-muted-foreground sm:inline">•</span>
                  <Button asChild variant="outline" size="sm" className="bg-transparent text-muted-foreground hover:text-foreground">
                    <Link href="/submit">
                      <PenLine className="mr-2 h-4 w-4" />
                      Submit Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote of the Day */}
        {quoteOfTheDay && (
          <section className="border-b border-border bg-secondary/30 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center">
                <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Quote of the Day
                </p>
                <blockquote className="mb-6">
                  <p className="font-serif text-2xl font-medium leading-relaxed text-foreground md:text-3xl lg:text-4xl text-balance">
                    "{quoteOfTheDay.text}"
                  </p>
                </blockquote>
                <cite className="not-italic">
                  <span className="font-medium text-foreground">{quoteOfTheDay.author}</span>
                  {quoteOfTheDay.author_bio && (
                    <span className="block text-sm text-muted-foreground mt-1">{quoteOfTheDay.author_bio}</span>
                  )}
                </cite>
              </div>
            </div>
          </section>
        )}

        {/* Quotes Feed (Client Side) */}
        <section id="quotes" className="border-t border-border bg-secondary/20 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <QuotesFeed initialQuotes={quotes} />
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center md:p-12">
              <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Start your day with wisdom
              </h2>
              <p className="mb-8 text-muted-foreground">
                Subscribe to receive a carefully curated quote every morning, tailored to your preferred genres.
              </p>
              <Button asChild size="lg" className="h-12 px-8">
                <Link href="/subscribe">
                  Subscribe Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
