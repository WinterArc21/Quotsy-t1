"use client"

import { useState, useEffect } from "react"
import { Search, X, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { QuoteCard } from "@/components/quote-card"
import { getQuotesAction } from "@/app/actions/quotes"
import { GENRES, type Quote } from "@/lib/types"
import useSWRInfinite from "swr/infinite"

interface QuotesFeedProps {
    initialQuotes: Quote[]
}

const QUOTES_PER_PAGE = 24

// Wrapper for the server action to work with SWR
const fetcher = async (key: { offset: number; limit: number; genre?: string; search?: string }) => {
    const { offset, limit, genre, search } = key
    const result = await getQuotesAction({ offset, limit, genre, search })
    if (!result.success) throw new Error("Failed to fetch quotes")
    return result
}

export function QuotesFeed({ initialQuotes }: QuotesFeedProps) {
    const [search, setSearch] = useState("")
    const [debouncedSearch, setDebouncedSearch] = useState("")
    const [genre, setGenre] = useState("all")

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search)
        }, 300)
        return () => clearTimeout(timer)
    }, [search])

    const getKey = (pageIndex: number, previousPageData: any) => {
        // Reached the end
        if (previousPageData && !previousPageData.hasMore) return null

        // Return the key/arguments for this page
        return {
            offset: pageIndex * QUOTES_PER_PAGE,
            limit: QUOTES_PER_PAGE,
            genre: genre !== "all" ? genre : undefined,
            search: debouncedSearch || undefined,
        }
    }

    const { data, size, setSize, isLoading, isValidating } = useSWRInfinite(
        getKey,
        fetcher,
        {
            fallbackData: [{
                success: true,
                quotes: initialQuotes,
                hasMore: initialQuotes.length >= QUOTES_PER_PAGE,
                total: 0 // We don't have this initially, but it updates on first fetch/revalidate
            }],
            revalidateFirstPage: false,
            revalidateOnFocus: false, // Performance: don't revalidate on window focus for this feed
        }
    )

    // Derived state from SWR data
    const quotes = data ? data.flatMap(page => page.quotes) : []
    const hasMore = data ? data[data.length - 1]?.hasMore : false
    const total = data ? data[data.length - 1]?.total : 0

    // Loading states
    const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined")
    const isRefreshing = isValidating && data && data.length === size
    const isEmpty = !isLoading && quotes.length === 0

    const loadMore = () => {
        setSize(size + 1)
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
                        {hasFilters && total > 0
                            ? `Showing ${quotes.length} of ${total} results`
                            : "Handpicked wisdom for you"}
                    </p>
                </div>
                {isRefreshing && !isLoading && (
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                )}
            </div>

            {/* Content */}
            {isLoading && quotes.length === 0 ? (
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
