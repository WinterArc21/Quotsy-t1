import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Text,
} from "@react-email/components"

interface GenreUpdateEmailProps {
    name?: string
    genres: string[]
    unsubscribeUrl: string
    baseUrl: string
}

export function GenreUpdateEmail({ name, genres, unsubscribeUrl, baseUrl }: GenreUpdateEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Your Quotsy genre preferences have been updated</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Preferences Updated</Heading>

                    <Text style={text}>{name ? `Hi ${name},` : "Hello,"}</Text>

                    <Text style={text}>
                        Your genre preferences have been successfully updated! You'll now receive
                        daily quotes from these genres:
                    </Text>

                    <Text style={genreList}>{genres.join(" • ")}</Text>

                    <Text style={text}>
                        Your next daily quote will reflect your new preferences. In the meantime,
                        explore more inspiration at{" "}
                        <Link href={baseUrl} style={link}>
                            Quotsy.me
                        </Link>
                        .
                    </Text>

                    <Text style={footer}>
                        You're receiving this because you updated your Quotsy preferences.{" "}
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

export default GenreUpdateEmail
