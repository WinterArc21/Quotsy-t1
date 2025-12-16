"use client"

import { useState, useEffect, useCallback } from "react"
import { Search, X, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { QuoteCard } from "@/components/quote-card"
import { getQuotesAction } from "@/app/actions"
import { GENRES, type Quote } from "@/lib/types"

interface QuotesFeedProps {
    initialQuotes: Quote[]
}

const QUOTES_PER_PAGE = 24

export function QuotesFeed({ initialQuotes }: QuotesFeedProps) {
    const [quotes, setQuotes] = useState<Quote[]>(initialQuotes)
    const [search, setSearch] = useState("")
    const [genre, setGenre] = useState("all")
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [total, setTotal] = useState(0)

    // Debounced search
    const [debouncedSearch, setDebouncedSearch] = useState("")

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search)
        }, 300)
        return () => clearTimeout(timer)
    }, [search])

    // Fetch quotes when filters change
    const fetchQuotes = useCallback(async (resetOffset = true) => {
        setIsLoading(true)
        const result = await getQuotesAction({
            offset: 0,
            limit: QUOTES_PER_PAGE,
            genre: genre !== "all" ? genre : undefined,
            search: debouncedSearch || undefined,
        })

        if (result.success) {
            setQuotes(result.quotes)
            setHasMore(result.hasMore)
            setTotal(result.total)
        }
        setIsLoading(false)
    }, [genre, debouncedSearch])

    // Re-fetch when filters change
    useEffect(() => {
        // Skip initial render (use server-provided data)
        if (genre === "all" && debouncedSearch === "") {
            // Reset to initial state
            setQuotes(initialQuotes)
            setHasMore(initialQuotes.length >= QUOTES_PER_PAGE)
            return
        }
        fetchQuotes()
    }, [genre, debouncedSearch, fetchQuotes, initialQuotes])

    // Load more quotes
    const loadMore = async () => {
        setIsLoadingMore(true)
        const result = await getQuotesAction({
            offset: quotes.length,
            limit: QUOTES_PER_PAGE,
            genre: genre !== "all" ? genre : undefined,
            search: debouncedSearch || undefined,
        })

        if (result.success) {
            setQuotes(prev => [...prev, ...result.quotes])
            setHasMore(result.hasMore)
            setTotal(result.total)
        }
        setIsLoadingMore(false)
    }

    const clearFilters = () => {
        setSearch("")
        setGenre("all")
    }

    const hasFilters = search !== "" || genre !== "all"

    return (
        <div className="space-y-8">
            {/* Search and Filters */}
            <div className="mx-auto max-w-2xl">
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search quotes or authors..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="h-12 pl-10"
                        />
                    </div>

                    <Select value={genre} onValueChange={setGenre}>
                        <SelectTrigger className="h-12 w-full md:w-48">
                            <SelectValue placeholder="All genres" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All genres</SelectItem>
                            {GENRES.map((g) => (
                                <SelectItem key={g} value={g}>
                                    {g}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {hasFilters && (
                        <Button variant="outline" onClick={clearFilters} className="h-12 bg-transparent">
                            <X className="mr-2 h-4 w-4" />
                            Clear
                        </Button>
                    )}
                </div>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="mb-2 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        {hasFilters ? "Search Results" : "Latest Quotes"}
                    </h2>
                    <p className="text-muted-foreground">
                        {hasFilters
                            ? `Showing ${quotes.length} of ${total} results`
                            : "Handpicked wisdom for you"}
                    </p>
                </div>
            </div>

            {/* Loading State */}
            {isLoading ? (
                <div className="flex items-center justify-center py-20">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
            ) : quotes.length > 0 ? (
                <>
                    {/* Quotes Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {quotes.map((quote) => (
                            <QuoteCard key={quote.id} quote={quote} />
                        ))}
                    </div>

                    {/* Load More Button */}
                    {hasMore && (
                        <div className="flex justify-center pt-8">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={loadMore}
                                disabled={isLoadingMore}
                                className="h-12 px-8"
                            >
                                {isLoadingMore ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Loading...
                                    </>
                                ) : (
                                    "Load More Quotes"
                                )}
                            </Button>
                        </div>
                    )}
                </>
            ) : (
                <div className="py-12 text-center">
                    <p className="text-lg text-muted-foreground">No quotes found matching your criteria.</p>
                    <Button variant="link" className="mt-2" onClick={clearFilters}>
                        Clear filters
                    </Button>
                </div>
            )}
        </div>
    )
}
