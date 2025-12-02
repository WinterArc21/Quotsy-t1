import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SubscribeForm } from "@/components/subscribe-form"
import { Mail, Sparkles, Clock, Heart, Quote } from "lucide-react"

const benefits = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Daily Inspiration",
    description: "A handpicked quote every morning",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Personalized",
    description: "Tailored to your favorite genres",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Timeless Wisdom",
    description: "From history's greatest minds",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Always Free",
    description: "No spam, just inspiration",
  },
]

export default function SubscribePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-background" />
          <div className="container relative mx-auto px-4 py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              {/* Left Column: Text */}
              <div className="text-center lg:text-left lg:col-start-2 lg:col-span-5">
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">Quote a Day</p>
                <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
                  Start every morning with wisdom
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl text-pretty max-w-2xl mx-auto lg:mx-0">
                  Join thousands of readers who begin their day with carefully curated quotes, delivered straight to your
                  inbox.
                </p>
              </div>

              {/* Right Column: Quote Card */}
              <div className="mx-auto w-full max-w-md lg:max-w-none lg:col-start-7 lg:col-span-5">
                <div className="rounded-xl border border-border bg-background/50 p-8 backdrop-blur-sm">
                  <Quote className="mx-auto lg:mx-0 mb-4 h-6 w-6 text-muted-foreground/50" />
                  <blockquote className="mb-4 text-center lg:text-left">
                    <p className="font-serif text-xl font-medium leading-relaxed text-foreground md:text-2xl text-balance">
                      "The only true wisdom is in knowing you know nothing."
                    </p>
                  </blockquote>
                  <cite className="not-italic block text-center lg:text-left">
                    <span className="font-medium text-foreground">Socrates</span>
                    <span className="block text-sm text-muted-foreground">Greek Philosopher</span>
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Benefits */}
              <div className="lg:col-start-2 lg:col-span-4 flex flex-col justify-center">
                <div>
                  <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    Why subscribe?
                  </h2>
                  <p className="mb-10 text-muted-foreground text-lg">
                    A simple way to add meaning to your daily routine.
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                    {benefits.map((benefit) => (
                      <div key={benefit.title} className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/50 text-foreground">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{benefit.title}</h3>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 flex gap-8 border-t border-border pt-8">
                    <div>
                      <p className="font-serif text-3xl font-bold text-foreground">1000+</p>
                      <p className="text-sm text-muted-foreground">Curated quotes</p>
                    </div>
                    <div>
                      <p className="font-serif text-3xl font-bold text-foreground">13</p>
                      <p className="text-sm text-muted-foreground">Unique genres</p>
                    </div>
                    <div>
                      <p className="font-serif text-3xl font-bold text-foreground">100+</p>
                      <p className="text-sm text-muted-foreground">Notable authors</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-5 lg:col-start-7">
                <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm">
                  <div className="mb-8">
                    <h2 className="font-serif text-xl font-bold text-foreground md:text-2xl">Get your daily quote</h2>
                    <p className="mt-2 text-muted-foreground">
                      Choose your genres and we'll send you inspiration every morning.
                    </p>
                  </div>
                  <SubscribeForm />
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
