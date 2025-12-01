export interface Quote {
  id: number
  text: string
  author: string
  author_bio: string | null
  genre: string
  created_at: string
}

export interface Subscriber {
  id: number
  email: string
  name: string | null
  genres: string[]
  verified: boolean
  subscribed_at: string
}

export interface PendingQuote {
  id: number
  text: string
  author: string
  genre: string
  submitter_email: string | null
  status: "pending" | "approved" | "rejected"
  submitted_at: string
  reviewed_at: string | null
}

export const GENRES = [
  "Philosophy",
  "Love",
  "Success",
  "Wisdom",
  "Motivation",
  "Happiness",
  "Creativity",
  "Leadership",
  "Courage",
  "Life",
  "Change",
  "Friendship",
  "Time",
] as const

export type Genre = (typeof GENRES)[number]
