import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components"

interface DailyQuoteEmailProps {
    name?: string
    genre: string
    quoteText: string
    quoteAuthor: string
    unsubscribeUrl: string
    baseUrl: string
}

export function DailyQuoteEmail({
    name,
    genre,
    quoteText,
    quoteAuthor,
    unsubscribeUrl,
    baseUrl,
}: DailyQuoteEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Your daily {genre.toLowerCase()} quote is here</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Text style={greeting}>
                        {name ? `Good morning, ${name}` : "Good morning"}
                    </Text>

                    <Text style={genreLabel}>Today's {genre} Quote</Text>

                    <Section style={quoteBox}>
                        <Text style={quoteTextStyle}>"{quoteText}"</Text>
                        <Text style={quoteAuthorStyle}>— {quoteAuthor}</Text>
                    </Section>

                    <Text style={text}>
                        Explore more quotes at{" "}
                        <Link href={baseUrl} style={link}>
                            Quotsy.me
                        </Link>
                    </Text>

                    <Text style={footer}>
                        You're receiving this because you subscribed to Quotsy.{" "}
                        <Link href={unsubscribeUrl} style={link}>
                            Unsubscribe
                        </Link>
                    </Text>
                </Container>
            </Body>
        </Html>
    )
}

// Styles (inline for email compatibility)
const main: React.CSSProperties = {
    backgroundColor: "#ffffff",
    fontFamily: "Georgia, serif",
    margin: 0,
    padding: "40px 20px",
}

const container: React.CSSProperties = {
    maxWidth: "500px",
    margin: "0 auto",
}

const greeting: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "normal",
    color: "#171717",
    marginBottom: "8px",
}

const genreLabel: React.CSSProperties = {
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#737373",
    marginBottom: "20px",
}

const quoteBox: React.CSSProperties = {
    backgroundColor: "#fafafa",
    borderLeft: "3px solid #171717",
    padding: "24px",
    margin: "24px 0",
}

const quoteTextStyle: React.CSSProperties = {
    fontSize: "20px",
    fontStyle: "italic",
    lineHeight: "1.6",
    color: "#171717",
    margin: "0 0 16px 0",
}

const quoteAuthorStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#525252",
    margin: 0,
}

const text: React.CSSProperties = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#525252",
    marginBottom: "20px",
}

const footer: React.CSSProperties = {
    fontSize: "14px",
    color: "#a3a3a3",
    marginTop: "40px",
    paddingTop: "20px",
    borderTop: "1px solid #e5e5e5",
}

const link: React.CSSProperties = {
    color: "#171717",
    fontWeight: "bold",
    textDecoration: "underline",
}

export default DailyQuoteEmail
