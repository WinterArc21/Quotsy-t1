import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight">Quotsy</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/submit"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Submit
          </Link>
          <Link
            href="/subscribe"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Subscribe
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="default" size="sm" className="hidden sm:inline-flex">
            <Link href="/subscribe">Get Daily Quotes</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
