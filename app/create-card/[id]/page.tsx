import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { CardGenerator } from "@/components/card-generator"
import { Button } from "@/components/ui/button"
import type { Quote } from "@/lib/types"

export const metadata = {
  title: "Create Quote Card | Quotsy",
  description: "Create a beautiful shareable image from this quote.",
}

interface CreateCardPageProps {
  params: Promise<{ id: string }>
}

async function getQuoteById(id: number): Promise<Quote | null> {
  const supabase = await createClient()

  if (!supabase) {
    return null
  }

  const { data, error } = await supabase
    .from("quotes")
    .select("*")
    .eq("id", id)
    .single()

  if (error || !data) {
    return null
  }

  return data as Quote
}

export default async function CreateCardPage({ params }: CreateCardPageProps) {
  const { id } = await params
  const quoteId = parseInt(id, 10)

  if (isNaN(quoteId)) {
    notFound()
  }

  const quote = await getQuoteById(quoteId)

  if (!quote) {
    notFound()
  }

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Compact Header */}
      <header className="shrink-0 z-50 w-full border-b border-border/40 bg-background">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/#quotes">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
          <h1 className="font-serif text-lg font-bold tracking-tight">Create Card</h1>
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-lg font-bold tracking-tight text-muted-foreground">Quotsy</span>
          </Link>
        </div>
      </header>

      {/* Main Content - Full height */}
      <main className="flex-1 overflow-hidden">
        <div className="h-full container mx-auto px-4 py-4 lg:py-6">
          <CardGenerator quote={quote} />
        </div>
      </main>
    </div>
  )
}
