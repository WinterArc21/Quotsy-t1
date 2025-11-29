"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GENRES } from "@/lib/types"
import { useRouter, useSearchParams } from "next/navigation"

export function SearchQuotes() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [search, setSearch] = useState(searchParams.get("q") || "")
  const [genre, setGenre] = useState(searchParams.get("genre") || "all")
  const [author, setAuthor] = useState(searchParams.get("author") || "")

  const updateFilters = () => {
    const params = new URLSearchParams()
    if (search) params.set("q", search)
    if (genre && genre !== "all") params.set("genre", genre)
    if (author) params.set("author", author)

    router.push(`/browse?${params.toString()}`)
  }

  const clearFilters = () => {
    setSearch("")
    setGenre("all")
    setAuthor("")
    router.push("/browse")
  }

  useEffect(() => {
    const timeoutId = setTimeout(updateFilters, 300)
    return () => clearTimeout(timeoutId)
  }, [search, genre, author])

  const hasFilters = search || (genre && genre !== "all") || author

  return (
    <div className="space-y-4">
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
  )
}
