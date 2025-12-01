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

        {/* Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-xl">
              <SubmitQuoteForm />
            </div>
          </div>
        </section>

        {/* Guidelines */}
        <section className="border-t border-border bg-neutral-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl">
              <h2 className="font-serif text-2xl font-bold mb-8 text-center">Submission Guidelines</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="font-semibold mb-2">What we accept</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Inspirational & thought-provoking quotes</li>
                    <li>• Original quotes you've written</li>
                    <li>• Verified quotes from known authors</li>
                    <li>• Timeless wisdom from any era</li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="font-semibold mb-2">What we don't accept</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Offensive or hateful content</li>
                    <li>• Promotional or commercial content</li>
                    <li>• Misattributed quotes</li>
                    <li>• Duplicate submissions</li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 text-center text-sm text-muted-foreground">
                All submissions are reviewed by our team before being added to the collection.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
