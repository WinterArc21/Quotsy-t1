export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6 animate-pulse">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <span className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Quotsy
          </span>
        </div>

        {/* Subtle Loading Text */}
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground/80">
          Gathering Wisdom...
        </p>
      </div>
    </div>
  )
}
