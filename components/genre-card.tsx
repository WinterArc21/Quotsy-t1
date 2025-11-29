import type React from "react"
import Link from "next/link"
import type { Genre } from "@/lib/types"

interface GenreCardProps {
  genre: Genre
  count: number
  icon: React.ReactNode
}

export function GenreCard({ genre, count, icon }: GenreCardProps) {
  return (
    <Link
      href={`/browse?genre=${genre}`}
      className="group flex flex-col items-center gap-4 rounded-lg border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:border-foreground hover:shadow-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-foreground">{genre}</h3>
        <p className="text-sm text-muted-foreground">{count}+ quotes</p>
      </div>
    </Link>
  )
}
