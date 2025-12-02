import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteCard } from "@/components/quote-card"
import { SearchQuotes } from "@/components/search-quotes"
import { createClient } from "@/lib/supabase/server"
import { Skeleton } from "@/components/ui/skeleton"

interface BrowsePageProps {
  searchParams: Promise<{
    q?: string
    genre?: string
    author?: string
    page?: string
  }>
}

async function QuotesList({ searchParams }: { searchParams: Awaited<BrowsePageProps["searchParams"]> }) {
  const supabase = await createClient()

  if (!supabase) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <p className="text-muted-foreground">Database connection unavailable.</p>
      </div>
    )
  }

  const { q, genre, author } = searchParams

  let query = supabase.from("quotes").select("*")

  if (q) {
    query = query.or(`text.ilike.%${q}%,author.ilike.%${q}%`)
  }

  if (genre && genre !== "all") {
    query = query.eq("genre", genre)
  }

  if (author) {
    query = query.ilike("author", `%${author}%`)
  }

  const { data: quotes, error } = await query.order("created_at", { ascending: false }).limit(50)

  if (error) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <p className="text-muted-foreground">Failed to load quotes. Please try again.</p>
      </div>
    )
  }

  if (!quotes || quotes.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-12 text-center">
        <p className="mb-2 font-serif text-xl font-medium text-foreground">No quotes found</p>
        <p className="text-muted-foreground">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <>
      <p className="mb-6 text-sm text-muted-foreground">
        Showing {quotes.length} quote{quotes.length !== 1 ? "s" : ""}
        {genre && genre !== "all" && ` in ${genre}`}
        {q && ` matching "${q}"`}
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </>
  )
}

function QuotesListSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="rounded-xl border border-border bg-card p-6">
          <Skeleton className="mb-4 h-24 w-full" />
          <Skeleton className="h-4 w-32" />
        </div>
      ))}
    </div>
  )
}

export default async function BrowsePage({ searchParams }: BrowsePageProps) {
  const resolvedParams = await searchParams

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="border-b border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Browse Quotes
            </h1>
            <p className="mb-8 text-muted-foreground">
              Explore our collection of 1000+ verified quotes from history's greatest minds
            </p>
            <SearchQuotes />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Suspense fallback={<QuotesListSkeleton />}>
              <QuotesList searchParams={resolvedParams} />
            </Suspense>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
