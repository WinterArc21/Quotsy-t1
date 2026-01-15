import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Disclaimer | Quotsy",
  description: "Important information about quote attribution and accuracy on Quotsy.",
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
                  <AlertTriangle className="w-8 h-8 text-amber-600" />
                </div>
                <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl mb-4">
                  Disclaimer
                </h1>
                <p className="text-lg text-muted-foreground">
                  Important information about quote attribution and accuracy
                </p>
              </div>

              {/* Content */}
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <div className="rounded-lg border border-border bg-card p-6 md:p-8 space-y-6">
                  <section>
                    <h2 className="font-serif text-2xl font-bold mb-4">Quote Attribution</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      While we strive for accuracy, Quotsy cannot guarantee that all quotes are correctly attributed. 
                      Many quotes have uncertain origins or may be misattributed. We review submissions but cannot verify 
                      the historical accuracy of every quote's attribution.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl font-bold mb-4">No Warranty</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Quotsy provides quotes "as is" without warranty or guarantee of accuracy, completeness, or authenticity. 
                      We do not take responsibility for misattribution, misquotation, or false narration. Users are encouraged 
                      to verify quotes independently, especially in academic or professional contexts.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl font-bold mb-4">Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Quotsy and its operators shall not be liable for any damages or consequences arising from the use of quotes 
                      on this website, including misattribution or reliance on inaccurate information.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-serif text-2xl font-bold mb-4">Purpose</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      This site is intended for inspiration and entertainment. It is not a scholarly resource, and quotes should 
                      not be used as definitive sources without independent verification.
                    </p>
                  </section>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">
                      Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
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
