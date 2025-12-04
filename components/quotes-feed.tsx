"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { QuoteCard } from "@/components/quote-card"
import { GENRES, type Quote } from "@/lib/types"

interface QuotesFeedProps {
    initialQuotes: Quote[]
}

export function QuotesFeed({ initialQuotes }: QuotesFeedProps) {
    const [search, setSearch] = useState("")
    const [genre, setGenre] = useState("all")
    const [author, setAuthor] = useState("")

    const filteredQuotes = useMemo(() => {
        return initialQuotes.filter((quote) => {
            const matchesSearch =
                search === "" ||
                quote.text.toLowerCase().includes(search.toLowerCase()) ||
                quote.author.toLowerCase().includes(search.toLowerCase())

            const matchesGenre = genre === "all" || quote.genre === genre

            const matchesAuthor =
                author === "" || quote.author.toLowerCase().includes(author.toLowerCase())

            return matchesSearch && matchesGenre && matchesAuthor
        })
    }, [initialQuotes, search, genre, author])

    const clearFilters = () => {
        setSearch("")
        setGenre("all")
        setAuthor("")
    }

    const hasFilters = search !== "" || genre !== "all" || author !== ""

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
                            ? `Showing ${filteredQuotes.length} results`
                            : "Handpicked wisdom for you"}
                    </p>
                </div>
            </div>

            {/* Quotes Grid */}
            {filteredQuotes.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredQuotes.map((quote) => (
                        <QuoteCard key={quote.id} quote={quote} />
                    ))}
                </div>
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
