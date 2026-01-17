"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
    { href: "/submit", label: "Submit" },
    { href: "/subscribe", label: "Subscribe" },
]

export function MobileNav() {
    const [open, setOpen] = React.useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    aria-label="Open navigation menu"
                >
                    <Menu className="h-5 w-5" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetHeader>
                    <SheetTitle className="font-serif text-xl">Quotsy</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="mt-4 border-t pt-4">
                        <Button asChild className="w-full" size="lg">
                            <Link href="/subscribe" onClick={() => setOpen(false)}>
                                Get Daily Quotes
                            </Link>
                        </Button>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
}
