import type React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Lightbulb,
  Heart,
  Trophy,
  Brain,
  Zap,
  Smile,
  Palette,
  Users,
  Shield,
  Sparkles,
  Clock,
  Star,
  PenLine,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteCard } from "@/components/quote-card"
import { createClient } from "@/lib/supabase/server"

const genreIcons: Record<string, React.ReactNode> = {
  Philosophy: <Lightbulb className="h-5 w-5" />,
  Love: <Heart className="h-5 w-5" />,
  Success: <Trophy className="h-5 w-5" />,
  Wisdom: <Brain className="h-5 w-5" />,
  Motivation: <Zap className="h-5 w-5" />,
  Happiness: <Smile className="h-5 w-5" />,
  Creativity: <Palette className="h-5 w-5" />,
  Leadership: <Users className="h-5 w-5" />,
  Courage: <Shield className="h-5 w-5" />,
  Life: <Sparkles className="h-5 w-5" />,
  Change: <Clock className="h-5 w-5" />,
  Friendship: <Star className="h-5 w-5" />,
  Time: <Clock className="h-5 w-5" />,
}

const genres = [
  "Philosophy",
  "Love",
  "Success",
  "Wisdom",
  "Motivation",
  "Happiness",
  "Creativity",
  "Leadership",
  "Courage",
  "Life",
  "Change",
  "Friendship",
]

export default async function HomePage() {
  const supabase = await createClient()

  // Fetch featured quotes
  const { data: featuredQuotes } = await supabase
    .from("quotes")
    .select("*")
    .limit(6)
    .order("created_at", { ascending: false })

  // Fetch quote of the day (based on date seed)
  const today = new Date().toISOString().split("T")[0]
  const seed = today.split("-").reduce((a, b) => a + Number.parseInt(b), 0)
  const { data: allQuotes } = await supabase.from("quotes").select("*")
  const quoteOfTheDay = allQuotes?.[seed % (allQuotes?.length || 1)]

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
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="h-12 px-8">
                  <Link href="/browse">
                    Explore Quotes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 bg-transparent">
                  <Link href="/subscribe">Get Daily Quotes</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 bg-transparent">
                  <Link href="/submit">
                    <PenLine className="mr-2 h-4 w-4" />
                    Submit Quote
                  </Link>
                </Button>
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

        {/* Browse by Genre */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Browse by Genre
              </h2>
              <p className="text-muted-foreground">Find quotes that resonate with your current mood or needs</p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {genres.map((genre) => (
                <Link
                  key={genre}
                  href={`/browse?genre=${genre}`}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground hover:bg-secondary"
                >
                  <div className="text-muted-foreground transition-colors group-hover:text-foreground">
                    {genreIcons[genre]}
                  </div>
                  <span className="text-sm font-medium text-foreground">{genre}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Quotes */}
        {featuredQuotes && featuredQuotes.length > 0 && (
          <section className="border-t border-border bg-secondary/20 py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="mb-12 flex items-center justify-between">
                <div>
                  <h2 className="mb-2 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    Featured Quotes
                  </h2>
                  <p className="text-muted-foreground">Handpicked wisdom for you</p>
                </div>
                <Button asChild variant="outline" className="hidden bg-transparent sm:flex">
                  <Link href="/browse">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredQuotes.map((quote) => (
                  <QuoteCard key={quote.id} quote={quote} />
                ))}
              </div>
              <div className="mt-8 text-center sm:hidden">
                <Button asChild variant="outline" className="bg-transparent">
                  <Link href="/browse">
                    View All Quotes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        )}

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
