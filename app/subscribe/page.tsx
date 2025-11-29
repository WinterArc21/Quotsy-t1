import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SubscribeForm } from "@/components/subscribe-form"
import { Mail, Sparkles, Clock, Heart } from "lucide-react"

const benefits = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Daily Inspiration",
    description: "Receive a handpicked quote every morning to start your day right",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Personalized Selection",
    description: "Choose your favorite genres and get quotes tailored to your interests",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Timeless Wisdom",
    description: "Access quotes from history's greatest philosophers, leaders, and artists",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Completely Free",
    description: "No hidden fees, no spam. Just pure inspiration in your inbox",
  },
]

export default function SubscribePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="border-b border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">Quote a Day</p>
              <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
                Start your mornings with inspiration
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Subscribe to receive a daily quote from your favorite genres, delivered straight to your inbox every
                morning.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
              {/* Benefits */}
              <div className="space-y-8">
                <div>
                  <h2 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground">Why subscribe?</h2>
                  <p className="text-muted-foreground">
                    Join thousands of readers who start their day with timeless wisdom.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-foreground">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <blockquote className="mb-4 font-serif text-lg italic text-foreground">
                    "The only true wisdom is in knowing you know nothing."
                  </blockquote>
                  <cite className="text-sm text-muted-foreground not-italic">— Socrates, Greek Philosopher</cite>
                </div>
              </div>

              {/* Form */}
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="mb-6 font-serif text-xl font-bold text-foreground">Subscribe to Daily Quotes</h2>
                <SubscribeForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
