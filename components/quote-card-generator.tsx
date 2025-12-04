"use client"

import { useState, useRef, useCallback } from "react"
import { toBlob, toPng } from "html-to-image"
import { Download, Copy, ImageIcon, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { THEMES } from "@/lib/themes"
import type { Quote } from "@/lib/types"
import { cn } from "@/lib/utils"

interface QuoteCardGeneratorProps {
    quote: Quote
    trigger?: React.ReactNode
}

export function QuoteCardGenerator({ quote, trigger }: QuoteCardGeneratorProps) {
    const [selectedThemeId, setSelectedThemeId] = useState("modern")
    const [ratio, setRatio] = useState<"square" | "portrait">("square")
    const [rounded, setRounded] = useState(true)
    const [isGenerating, setIsGenerating] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    const selectedTheme = THEMES.find((t) => t.id === selectedThemeId) || THEMES[0]

    const generateImage = useCallback(async () => {
        if (!cardRef.current) return null

        // We need to ensure fonts are loaded and layout is stable
        // html-to-image sometimes needs a little help with specific styles
        const dataUrl = await toPng(cardRef.current, {
            cacheBust: true,
            pixelRatio: 2, // Higher quality
            style: {
                transform: "scale(1)", // Reset any potential transforms
            },
        })
        return dataUrl
    }, [])

    const handleDownload = async () => {
        try {
            setIsGenerating(true)
            const dataUrl = await generateImage()
            if (!dataUrl) throw new Error("Failed to generate image")

            const link = document.createElement("a")
            link.download = `quotsy-${quote.author.toLowerCase().replace(/\s+/g, "-")}.png`
            link.href = dataUrl
            link.click()
            toast.success("Card downloaded successfully")
        } catch (error) {
            console.error(error)
            toast.error("Failed to download card")
        } finally {
            setIsGenerating(false)
        }
    }

    const handleCopy = async () => {
        try {
            setIsGenerating(true)
            if (!cardRef.current) return

            const blob = await toBlob(cardRef.current, {
                cacheBust: true,
                pixelRatio: 2,
            })

            if (!blob) throw new Error("Failed to generate blob")

            await navigator.clipboard.write([
                new ClipboardItem({
                    [blob.type]: blob,
                }),
            ])
            toast.success("Card copied to clipboard")
        } catch (error) {
            console.error(error)
            toast.error("Failed to copy card")
        } finally {
            setIsGenerating(false)
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger || (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ImageIcon className="h-4 w-4" />
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full flex flex-col md:flex-row gap-0 p-0 overflow-hidden h-[90vh] md:h-auto">
                {/* Preview Area */}
                <div className="flex-1 bg-secondary/30 p-8 flex items-center justify-center overflow-auto min-h-[400px]">
                    <div
                        ref={cardRef}
                        className={cn(
                            "relative flex flex-col justify-between p-8 md:p-12 shadow-2xl transition-all duration-500 ease-in-out",
                            selectedTheme.containerClass,
                            ratio === "square" ? "aspect-square w-full max-w-[500px]" : "aspect-[9/16] h-full max-h-[600px]",
                            rounded ? "rounded-3xl" : "rounded-none"
                        )}
                    >
                        <div className="flex-1 flex items-center justify-center">
                            <blockquote className={cn("text-center leading-relaxed text-balance", selectedTheme.textClass, ratio === "square" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl")}>
                                "{quote.text}"
                            </blockquote>
                        </div>

                        <div className="mt-8 flex items-end justify-between w-full">
                            <div className="flex flex-col">
                                <span className={cn(selectedTheme.authorClass)}>{quote.author}</span>
                            </div>
                            <span className={cn(selectedTheme.brandingClass)}>Quotsy</span>
                        </div>
                    </div>
                </div>

                {/* Controls Area */}
                <div className="w-full md:w-[350px] flex flex-col border-l border-border bg-background">
                    <div className="p-6 border-b border-border">
                        <DialogHeader>
                            <DialogTitle>Create Card</DialogTitle>
                            <DialogDescription>Customize and share this quote.</DialogDescription>
                        </DialogHeader>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-8">
                        {/* Aspect Ratio */}
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-muted-foreground">Format</label>
                            <Tabs value={ratio} onValueChange={(v) => setRatio(v as any)} className="w-full">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="square">Square (1:1)</TabsTrigger>
                                    <TabsTrigger value="portrait">Story (9:16)</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>

                        {/* Rounded Corners */}
                        <div className="flex items-center justify-between">
                            <label htmlFor="rounded-mode" className="text-sm font-medium text-muted-foreground">
                                Rounded Corners
                            </label>
                            <Switch id="rounded-mode" checked={rounded} onCheckedChange={setRounded} />
                        </div>

                        {/* Themes */}
                        <div className="space-y-3">
                            <label className="text-sm font-medium text-muted-foreground">Theme</label>
                            <div className="grid grid-cols-2 gap-3">
                                {THEMES.map((theme) => (
                                    <button
                                        key={theme.id}
                                        onClick={() => setSelectedThemeId(theme.id)}
                                        className={cn(
                                            "group relative aspect-video w-full overflow-hidden rounded-lg border-2 text-left transition-all",
                                            selectedThemeId === theme.id ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-border"
                                        )}
                                    >
                                        <div className={cn("absolute inset-0 flex items-center justify-center p-2", theme.containerClass)}>
                                            <span className={cn("text-xs truncate w-full text-center", theme.textClass)}>{theme.name}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border-t border-border bg-secondary/10 space-y-3">
                        <Button onClick={handleDownload} className="w-full" disabled={isGenerating}>
                            {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
                            Download Image
                        </Button>
                        <Button variant="outline" onClick={handleCopy} className="w-full" disabled={isGenerating}>
                            {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Copy className="mr-2 h-4 w-4" />}
                            Copy to Clipboard
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
