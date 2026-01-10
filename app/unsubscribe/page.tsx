import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UnsubscribeForm } from "@/components/unsubscribe-form"

export const metadata = {
    title: "Unsubscribe | Quotsy",
    description: "Unsubscribe from Quotsy daily quotes.",
}

interface UnsubscribePageProps {
    searchParams: Promise<{ email?: string }>
}

export default async function UnsubscribePage({ searchParams }: UnsubscribePageProps) {
    const { email } = await searchParams

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 flex items-center justify-center py-12 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-md">
                        <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm">
                            <div className="mb-8 text-center">
                                <h1 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                                    Unsubscribe
                                </h1>
                                <p className="mt-2 text-muted-foreground">
                                    We're sorry to see you go. Enter your email to unsubscribe from daily quotes.
                                </p>
                            </div>
                            <UnsubscribeForm initialEmail={email} />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
