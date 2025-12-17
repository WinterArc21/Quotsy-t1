import Link from "next/link"
import { ArrowRight, PenLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuotesFeed } from "@/components/quotes-feed"
import { HeroQuoteCard } from "@/components/hero-quote-card"
import { createClient } from "@/lib/supabase/server"

export default async function HomePage() {
  const supabase = await createClient()

  let quotes = []
  let quoteOfTheDay = null
  let totalQuoteCount = 0

  if (supabase) {
    // Fetch initial quotes (24 for fast load, more loaded via pagination)
    const { data: fetchedQuotes } = await supabase
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(24)

    quotes = fetchedQuotes || []

    // Fetch quote of the day (based on date seed)
    const today = new Date().toISOString().split("T")[0]
    const seed = today.split("-").reduce((a, b) => a + Number.parseInt(b), 0)

    // Get total count first
    const { count } = await supabase
      .from("quotes")
      .select("*", { count: "exact", head: true })

    totalQuoteCount = count || 0

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
        {/* Split Hero Section */}
        <section className="relative min-h-[85vh] overflow-hidden border-b border-border flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />

          <div className="container relative mx-auto px-4 py-12 md:py-24 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-start">

              {/* Left Column: Hero Text */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                <div>
                  <div className="inline-flex items-center rounded-full border border-border bg-background/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                    {totalQuoteCount > 0 ? `${totalQuoteCount.toLocaleString()}+ Verified Quotes` : "Verified Quotes"}
                  </div>
                  <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
                    Words that inspire, <br className="hidden lg:block" />
                    <span className="text-muted-foreground">thoughts that endure</span>
                  </h1>
                </div>

                <p className="text-lg text-muted-foreground md:text-xl text-pretty max-w-lg">
                  Discover timeless wisdom from history's greatest minds. curated for the modern thinker.
                </p>
              </div>

              {/* Right Column: Hero Quote Card & Actions */}
              <div className="relative w-full max-w-xl mx-auto lg:ml-auto flex flex-col gap-8">
                {/* Decorative blobs */}
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />

                <HeroQuoteCard initialQuote={quoteOfTheDay} />

                <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 justify-center z-10">
                  <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                    <Link href="/subscribe">
                      Get Daily Quotes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all">
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
