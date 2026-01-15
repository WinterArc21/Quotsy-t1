"use client"

import { useState, useRef } from "react"
import { Download, Copy, Loader2, Check } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { THEMES } from "@/lib/themes"
import type { Quote } from "@/lib/types"
import { cn } from "@/lib/utils"

interface CardGeneratorProps {
  quote: Quote
}

const RATIO_CONFIGS = {
  square: {
    label: "1:1",
    sub: "Instagram",
    class: "aspect-square w-full max-w-[400px]",
    textClass: "text-xl md:text-2xl",
  },
  portrait: {
    label: "4:5",
    sub: "Instagram",
    class: "aspect-[4/5] w-full max-w-[360px]",
    textClass: "text-xl md:text-2xl",
  },
  landscape: {
    label: "16:9",
    sub: "X / FB",
    class: "aspect-[16/9] w-full max-w-[500px]",
    textClass: "text-lg md:text-xl",
  },
  story: {
    label: "9:16",
    sub: "TikTok",
    class: "aspect-[9/16] w-full max-w-[280px]",
    textClass: "text-lg md:text-xl",
  },
} as const

type RatioKey = keyof typeof RATIO_CONFIGS

export function CardGenerator({ quote }: CardGeneratorProps) {
  const [selectedThemeId, setSelectedThemeId] = useState("modern")
  const [ratio, setRatio] = useState<RatioKey>("square")
  const [rounded, setRounded] = useState(true)

  const [isDownloading, setIsDownloading] = useState(false)
  const [isCopying, setIsCopying] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const selectedTheme = THEMES.find((t) => t.id === selectedThemeId) || THEMES[0]
  const currentRatio = RATIO_CONFIGS[ratio]

  const handleDownload = async () => {
    try {
      setIsDownloading(true)
      const { toPng } = await import("html-to-image")
      if (!cardRef.current) throw new Error("Card not found")

      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        style: { transform: "scale(1)" },
      })

      const link = document.createElement("a")
      link.download = `quotsy-${quote.author.toLowerCase().replace(/\s+/g, "-")}.png`
      link.href = dataUrl
      link.click()
      toast.success("Card downloaded successfully")
    } catch (error) {
      console.error(error)
      toast.error("Failed to download card")
    } finally {
      setIsDownloading(false)
    }
  }

  const handleCopy = async () => {
    try {
      setIsCopying(true)
      const { toBlob } = await import("html-to-image")
      if (!cardRef.current) throw new Error("Card not found")

      const blob = await toBlob(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      })

      if (!blob) throw new Error("Failed to generate image")

      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob }),
      ])
      toast.success("Card copied to clipboard")
    } catch (error) {
      console.error(error)
      toast.error("Failed to copy card")
    } finally {
      setIsCopying(false)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-10rem)] gap-6">
      {/* Preview Area - Left side on desktop */}
      <div className="flex-1 flex items-center justify-center rounded-2xl border border-border bg-secondary/20 p-4 md:p-8 min-h-[400px] lg:min-h-0">
        <div
          ref={cardRef}
          className={cn(
            "relative flex flex-col justify-between p-6 md:p-10 shadow-2xl transition-all duration-300",
            selectedTheme.containerClass,
            currentRatio.class,
            rounded ? "rounded-2xl" : "rounded-none"
          )}
        >
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <blockquote
              className={cn(
                "text-center leading-relaxed text-balance",
                selectedTheme.textClass,
                currentRatio.textClass
              )}
            >
              "{quote.text}"
            </blockquote>
            <span className={cn(selectedTheme.authorClass)}>— {quote.author}</span>
          </div>

          <div className="mt-6 flex items-end justify-center w-full">
            <span className={cn(selectedTheme.brandingClass)}>Quotsy</span>
          </div>
        </div>
      </div>

      {/* Controls Panel - Right side on desktop */}
      <div className="w-full lg:w-[320px] flex flex-col rounded-2xl border border-border bg-card lg:h-full">
        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Format Selection - Compact pills */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Format
            </label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(RATIO_CONFIGS).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => setRatio(key as RatioKey)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                    ratio === key
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {config.label}
                  <span className="ml-1 opacity-60">{config.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Rounded Corners - Compact */}
          <div className="flex items-center justify-between py-2 border-y border-border">
            <label htmlFor="rounded-mode" className="text-sm text-muted-foreground">
              Rounded corners
            </label>
            <Switch id="rounded-mode" checked={rounded} onCheckedChange={setRounded} />
          </div>

          {/* Themes - Compact grid */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Theme
            </label>
            <div className="grid grid-cols-3 gap-2">
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedThemeId(theme.id)}
                  className={cn(
                    "relative aspect-[4/3] w-full overflow-hidden rounded-lg border-2 transition-all",
                    selectedThemeId === theme.id
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border/50 hover:border-border"
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center p-1",
                      theme.containerClass
                    )}
                  >
                    <span className={cn("text-[10px] font-medium truncate", theme.textClass)}>
                      {theme.name}
                    </span>
                  </div>
                  {selectedThemeId === theme.id && (
                    <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-primary-foreground" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons - Fixed at bottom */}
        <div className="p-5 border-t border-border bg-secondary/5 space-y-2">
          <Button 
            onClick={handleDownload} 
            className="w-full h-11" 
            disabled={isDownloading || isCopying}
          >
            {isDownloading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Download className="mr-2 h-4 w-4" />
            )}
            Download PNG
          </Button>
          <Button
            variant="outline"
            onClick={handleCopy}
            className="w-full h-11"
            disabled={isDownloading || isCopying}
          >
            {isCopying ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Copy className="mr-2 h-4 w-4" />
            )}
            Copy to Clipboard
          </Button>
        </div>
      </div>
    </div>
  )
}
