"use client"

import { useState } from "react"
import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getRandomQuoteAction } from "@/app/actions/quotes"
import type { Quote } from "@/lib/types"
import { logError } from "@/lib/logger"

interface HeroQuoteCardProps {
    initialQuote: Quote | null
}

export function HeroQuoteCard({ initialQuote }: HeroQuoteCardProps) {
    const [quote, setQuote] = useState<Quote | null>(initialQuote)
    const [isRefreshing, setIsRefreshing] = useState(false)

    const handleRefresh = async () => {
        setIsRefreshing(true)
        try {
            const { success, data } = await getRandomQuoteAction()
            if (success && data) {
                setQuote(data)
            }
        } catch (error) {
            logError("Failed to refresh quote", { error })
        } finally {
            setIsRefreshing(false)
        }
    }

    return (
        <div className="relative w-full max-w-xl mx-auto lg:ml-auto">
            {/* Decorative blobs */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />

            {quote ? (
                <div className="relative transition-all duration-300 hover:scale-[1.02]">
                    {/* Floating Label */}
                    <div className="absolute -top-4 left-6 z-20 flex items-center gap-2">
                        <span className="flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-sm">
                            Quote of the Day
                        </span>
                    </div>

                    {/* Refresh Button */}
                    <div className="absolute -top-4 right-6 z-20">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm hover:bg-background"
                            onClick={handleRefresh}
                            disabled={isRefreshing}
                        >
                            <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
                            <span className="sr-only">Refresh Quote</span>
                        </Button>
                    </div>

                    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/40 p-8 shadow-2xl backdrop-blur-xl md:p-12 min-h-[280px] md:min-h-[320px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <blockquote className={`relative z-10 transition-opacity duration-300 ${isRefreshing ? "opacity-50" : "opacity-100"}`}>
                            <span className="absolute -left-2 -top-4 font-serif text-6xl text-primary/20">“</span>
                            <p className="font-serif text-2xl font-medium leading-relaxed text-foreground md:text-3xl text-balance italic">
                                {quote.text}
                            </p>
                        </blockquote>

                        <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-6">
                            <div className={`transition-opacity duration-300 ${isRefreshing ? "opacity-50" : "opacity-100"}`}>
                                <cite className="not-italic font-semibold text-foreground text-lg">
                                    {quote.author}
                                </cite>
                                {quote.author_bio && (
                                    <span className="block text-sm text-muted-foreground mt-0.5 line-clamp-1">
                                        {quote.author_bio}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                /* Fallback skeleton layout if no quote */
                <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center h-[300px] flex items-center justify-center flex-col gap-4">
                    <p className="text-muted-foreground">Refresh for inspiration</p>
                    <Button onClick={handleRefresh} disabled={isRefreshing}>
                        <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
                        Refresh
                    </Button>
                </div>
            )}
        </div>
    )
}
