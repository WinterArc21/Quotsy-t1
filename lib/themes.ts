export interface Theme {
    id: string
    name: string
    containerClass: string
    textClass: string
    authorClass: string
    brandingClass: string
}

export const THEMES: Theme[] = [
    {
        id: "modern",
        name: "Modern",
        containerClass: "bg-white border-2 border-black",
        textClass: "font-sans text-black font-bold",
        authorClass: "font-sans text-black/70 font-medium",
        brandingClass: "text-black font-bold tracking-tighter",
    },
    {
        id: "midnight",
        name: "Midnight",
        containerClass: "bg-slate-950 border border-slate-800",
        textClass: "font-serif text-slate-100",
        authorClass: "font-sans text-slate-400",
        brandingClass: "text-slate-500 font-medium tracking-widest uppercase",
    },
    {
        id: "sunset",
        name: "Sunset",
        containerClass: "bg-gradient-to-br from-orange-100 to-rose-100 border border-rose-200",
        textClass: "font-serif text-rose-950 italic",
        authorClass: "font-sans text-rose-800/80",
        brandingClass: "text-rose-900/50 font-serif italic",
    },
    {
        id: "forest",
        name: "Forest",
        containerClass: "bg-emerald-900 border border-emerald-800",
        textClass: "font-mono text-emerald-50",
        authorClass: "font-mono text-emerald-400/80 text-sm",
        brandingClass: "text-emerald-700 font-mono text-xs",
    },
    {
        id: "paper",
        name: "Paper",
        containerClass: "bg-[#fdfbf7] border border-[#e6e1d6]",
        textClass: "font-serif text-stone-800",
        authorClass: "font-sans text-stone-500 uppercase tracking-widest text-xs",
        brandingClass: "text-stone-400 font-serif italic",
    },
    {
        id: "neon",
        name: "Neon",
        containerClass: "bg-black border border-purple-500/50 shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)]",
        textClass: "font-sans text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]",
        authorClass: "font-mono text-purple-400",
        brandingClass: "text-purple-500 font-bold tracking-tighter drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]",
    },
]
