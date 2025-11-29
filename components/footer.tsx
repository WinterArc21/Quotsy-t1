import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <span className="font-serif text-xl font-bold">Quotsy</span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curated wisdom from history&apos;s greatest minds. 1000+ verified quotes to inspire your daily journey.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/browse" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Browse Quotes
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?genre=Philosophy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?genre=Love"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Love
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?genre=Wisdom"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Wisdom
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/browse?genre=Success"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Success
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?genre=Motivation"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Motivation
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?genre=Leadership"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/browse?genre=Creativity"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Creativity
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Stay Inspired</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get a daily quote delivered to your inbox. Choose your favorite genres.
            </p>
            <Link
              href="/subscribe"
              className="inline-block text-sm font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Subscribe Now →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Quotsy. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Crafted with care for seekers of wisdom.</p>
        </div>
      </div>
    </footer>
  )
}
