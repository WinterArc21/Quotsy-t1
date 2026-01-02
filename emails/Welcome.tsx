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

interface WelcomeEmailProps {
    name?: string
    genres: string[]
    unsubscribeUrl: string
    baseUrl: string
}

export function WelcomeEmail({ name, genres, unsubscribeUrl, baseUrl }: WelcomeEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Welcome to Quotsy - Your daily wisdom awaits</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Welcome to Quotsy</Heading>

                    <Text style={text}>{name ? `Hi ${name},` : "Hello,"}</Text>

                    <Text style={text}>
                        Thank you for subscribing to Quotsy! You'll now receive daily quotes
                        from these genres:
                    </Text>

                    <Text style={genreList}>{genres.join(" • ")}</Text>

                    <Section style={quoteBox}>
                        <Text style={quoteText}>
                            "The journey of a thousand miles begins with one step."
                        </Text>
                        <Text style={quoteAuthor}>— Lao Tzu</Text>
                    </Section>

                    <Text style={text}>
                        Your first daily quote will arrive tomorrow morning. Until then,
                        explore our full collection at <Link href={baseUrl} style={link}>{new URL(baseUrl).hostname}</Link>.
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

const h1: React.CSSProperties = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "24px",
    letterSpacing: "-0.5px",
    color: "#171717",
}

const text: React.CSSProperties = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#525252",
    marginBottom: "20px",
}

const genreList: React.CSSProperties = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#171717",
    fontWeight: 500,
    marginBottom: "24px",
}

const quoteBox: React.CSSProperties = {
    backgroundColor: "#fafafa",
    borderLeft: "3px solid #171717",
    padding: "20px",
    margin: "24px 0",
}

const quoteText: React.CSSProperties = {
    fontSize: "18px",
    fontStyle: "italic",
    lineHeight: "1.5",
    color: "#171717",
    margin: "0 0 12px 0",
}

const quoteAuthor: React.CSSProperties = {
    fontSize: "14px",
    color: "#525252",
    margin: 0,
}

const footer: React.CSSProperties = {
    fontSize: "14px",
    color: "#a3a3a3",
    marginTop: "40px",
    paddingTop: "20px",
    borderTop: "1px solid #e5e5e5",
}

const link: React.CSSProperties = {
    color: "#525252",
}

export default WelcomeEmail
