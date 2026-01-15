"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GENRES, type PendingQuote } from "@/lib/types"
import { getPendingQuotesAction, approveQuoteAction, rejectQuoteAction, restoreQuoteAction } from "@/app/actions/admin-quotes"
import { Check, X, RotateCcw, Loader2, Quote, Clock, CheckCircle, XCircle } from "lucide-react"

export function AdminDashboard() {
  const [quotes, setQuotes] = useState<PendingQuote[]>([])
  const [filter, setFilter] = useState("pending")
  const [isLoading, setIsLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState<number | null>(null)

  const fetchQuotes = useCallback(async () => {
    setIsLoading(true)
    const result = await getPendingQuotesAction(filter)
    if (result.success) {
      setQuotes(result.data as PendingQuote[])
    }
    setIsLoading(false)
  }, [filter])

  useEffect(() => {
    fetchQuotes()
  }, [fetchQuotes])

  async function handleApprove(id: number, genre: string) {
    setActionLoading(id)
    const result = await approveQuoteAction(id, genre)
    if (result.success) {
      fetchQuotes()
    }
    setActionLoading(null)
  }

  async function handleReject(id: number) {
    setActionLoading(id)
    const result = await rejectQuoteAction(id)
    if (result.success) {
      fetchQuotes()
    }
    setActionLoading(null)
  }

  async function handleRestore(id: number) {
    setActionLoading(id)
    const result = await restoreQuoteAction(id)
    if (result.success) {
      fetchQuotes()
    }
    setActionLoading(null)
  }

  const pendingCount = quotes.filter((q) => q.status === "pending").length
  const approvedCount = quotes.filter((q) => q.status === "approved").length
  const rejectedCount = quotes.filter((q) => q.status === "rejected").length

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
          <Clock className="h-5 w-5 mx-auto text-amber-600 mb-2" />
          <div className="text-2xl font-bold text-amber-700">{pendingCount}</div>
          <div className="text-xs text-amber-600">Pending</div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <CheckCircle className="h-5 w-5 mx-auto text-green-600 mb-2" />
          <div className="text-2xl font-bold text-green-700">{approvedCount}</div>
          <div className="text-xs text-green-600">Approved</div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <XCircle className="h-5 w-5 mx-auto text-red-600 mb-2" />
          <div className="text-2xl font-bold text-red-700">{rejectedCount}</div>
          <div className="text-xs text-red-600">Rejected</div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-sm font-medium">Filter by status:</span>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm" onClick={fetchQuotes}>
          Refresh
        </Button>
      </div>

      {/* Quotes List */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : quotes.length === 0 ? (
        <div className="text-center py-20">
          <Quote className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-medium">No quotes found</h3>
          <p className="text-sm text-muted-foreground">
            {filter === "pending" ? "No pending quotes to review" : `No ${filter} quotes`}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {quotes.map((quote) => (
            <PendingQuoteCard
              key={quote.id}
              quote={quote}
              isLoading={actionLoading === quote.id}
              onApprove={handleApprove}
              onReject={handleReject}
              onRestore={handleRestore}
            />
          ))}
        </div>
      )}
    </div>
  )
}

interface PendingQuoteCardProps {
  quote: PendingQuote
  isLoading: boolean
  onApprove: (id: number, genre: string) => void
  onReject: (id: number) => void
  onRestore: (id: number) => void
}

function PendingQuoteCard({ quote, isLoading, onApprove, onReject, onRestore }: PendingQuoteCardProps) {
  const [selectedGenre, setSelectedGenre] = useState(quote.genre)

  const statusColors = {
    pending: "bg-amber-100 text-amber-800 border-amber-200",
    approved: "bg-green-100 text-green-800 border-green-200",
    rejected: "bg-red-100 text-red-800 border-red-200",
  }

  return (
    <div className="border border-border rounded-lg p-6 bg-background">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <blockquote className="font-serif text-lg italic leading-relaxed">"{quote.text}"</blockquote>
          <p className="mt-2 text-sm text-muted-foreground">— {quote.author}</p>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${statusColors[quote.status]}`}>
          {quote.status}
        </span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span>Submitted: {new Date(quote.submitted_at).toLocaleDateString()}</span>
          {quote.submitter_email && <span>By: {quote.submitter_email}</span>}
        </div>

        {quote.status === "pending" && (
          <div className="flex items-center gap-2">
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="w-32 h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {GENRES.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              size="sm"
              variant="outline"
              className="h-8 text-green-600 hover:text-green-700 hover:bg-green-50 bg-transparent"
              onClick={() => onApprove(quote.id, selectedGenre)}
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50 bg-transparent"
              onClick={() => onReject(quote.id)}
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <X className="h-4 w-4" />}
            </Button>
          </div>
        )}

        {quote.status === "approved" && (
          <Button
            size="sm"
            variant="outline"
            className="text-amber-600 hover:text-amber-700 hover:bg-amber-50"
            onClick={() => onRestore(quote.id)}
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RotateCcw className="mr-2 h-4 w-4" />}
            Revoke Approval
          </Button>
        )}

        {quote.status === "rejected" && (
          <Button size="sm" variant="outline" onClick={() => onRestore(quote.id)} disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <RotateCcw className="mr-2 h-4 w-4" />}
            Restore
          </Button>
        )}
      </div>
    </div>
  )
}
