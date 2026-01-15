import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SubmitQuoteForm } from "@/components/submit-quote-form"

export const metadata = {
  title: "Submit a Quote | Quotsy",
  description: "Share your favorite quotes or your own words of wisdom with the Quotsy community.",
}

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-background to-neutral-50" />
          <div className="container relative mx-auto px-4 py-20 md:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Contribute
              </span>
              <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
                Share Your Wisdom
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                Know a quote that inspires you? Written something profound yourself? Submit it to our collection and
                inspire thousands of readers.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Form */}
              <div className="lg:col-start-2 lg:col-span-6">
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-bold mb-4">Submit a Quote</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below to share your wisdom. Please ensure all details are accurate.
                  </p>
                </div>
                <SubmitQuoteForm />
              </div>

              {/* Right Column: Guidelines */}
              <div className="lg:col-span-4">
                <div className="sticky top-24 rounded-2xl border border-neutral-400 bg-neutral-50/50 p-6 md:p-8">
                  <h2 className="font-serif text-xl font-bold mb-6">Submission Guidelines</h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">✓</span>
                        What we accept
                      </h3>
                      <ul className="text-sm text-muted-foreground space-y-2.5 ml-8 list-disc">
                        <li>Inspirational & thought-provoking quotes</li>
                        <li>Original quotes you've written</li>
                        <li>Verified quotes from known authors</li>
                        <li>Timeless wisdom from any era</li>
                      </ul>
                    </div>

                    <div className="border-t border-border/50 pt-6">
                      <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs text-red-600">✕</span>
                        What we don't accept
                      </h3>
                      <ul className="text-sm text-muted-foreground space-y-2.5 ml-8 list-disc">
                        <li>Offensive or hateful content</li>
                        <li>Promotional or commercial content</li>
                        <li>Misattributed quotes</li>
                        <li>Duplicate submissions</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border space-y-3">
                    <p className="text-xs text-muted-foreground text-center">
                      All submissions are reviewed by our team within 24-48 hours.
                    </p>
                    <p className="text-xs text-muted-foreground text-center">
                      Please ensure accurate attribution. See our{" "}
                      <Link href="/disclaimer" className="underline hover:text-foreground transition-colors">
                        disclaimer
                      </Link>{" "}
                      for more information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
