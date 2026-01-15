"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { unsubscribeAction } from "@/app/actions/subscriptions"
import { Check, Loader2, AlertCircle } from "lucide-react"
import Link from "next/link"

interface UnsubscribeFormProps {
    initialEmail?: string
}

export function UnsubscribeForm({ initialEmail }: UnsubscribeFormProps) {
    const [email, setEmail] = useState(initialEmail || "")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setIsSubmitting(true)
        setMessage(null)

        const formData = new FormData()
        formData.append("email", email)

        const result = await unsubscribeAction(formData)

        if (result.success) {
            setMessage({ type: "success", text: result.message })
            setEmail("")
        } else {
            setMessage({ type: "error", text: result.message })
        }

        setIsSubmitting(false)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                    Email address
                </Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11 bg-background"
                    readOnly={!!initialEmail}
                />
                {initialEmail && (
                    <p className="text-xs text-muted-foreground">
                        This is the email from your unsubscribe link.
                    </p>
                )}
            </div>

            {message && (
                <div
                    className={`flex items-center gap-2 rounded-lg p-4 text-sm ${message.type === "success"
                            ? "bg-secondary border border-foreground/20 text-foreground"
                            : "bg-destructive/10 border border-destructive/20 text-destructive"
                        }`}
                >
                    {message.type === "success" ? (
                        <Check className="h-4 w-4 shrink-0" />
                    ) : (
                        <AlertCircle className="h-4 w-4 shrink-0" />
                    )}
                    {message.text}
                </div>
            )}

            {message?.type === "success" ? (
                <Button asChild variant="outline" size="lg" className="w-full h-12">
                    <Link href="/">Return to Home</Link>
                </Button>
            ) : (
                <Button
                    type="submit"
                    size="lg"
                    variant="destructive"
                    className="w-full h-12"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Unsubscribing...
                        </>
                    ) : (
                        "Unsubscribe"
                    )}
                </Button>
            )}

            <p className="text-center text-xs text-muted-foreground">
                Changed your mind?{" "}
                <Link href="/subscribe" className="underline hover:text-foreground">
                    Subscribe again
                </Link>
            </p>
        </form>
    )
}
