import { z } from "zod"
import { GENRES } from "./types"

/**
 * Schema for newsletter subscription form
 */
export const subscribeSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    name: z
        .string()
        .max(100, "Name must be less than 100 characters")
        .optional()
        .transform((val) => val || undefined),
    genres: z.array(z.string()).min(1, "Please select at least one genre"),
})

export type SubscribeInput = z.infer<typeof subscribeSchema>

/**
 * Schema for quote submission form
 * 
 * Validates:
 * - text: Required, 10-2000 characters
 * - author: Optional, max 200 characters, defaults to "Anonymous"
 * - genre: Required, must be one of the predefined genres
 * - submitterEmail: Optional, must be valid email if provided
 */
export const submitQuoteSchema = z.object({
    text: z.string()
        .min(10, "Quote must be at least 10 characters")
        .max(2000, "Quote must be less than 2000 characters")
        .transform((val) => val.trim()),
    author: z.string()
        .max(200, "Author name must be less than 200 characters")
        .optional()
        .transform((val) => val?.trim() || "Anonymous"),
    genre: z.enum(GENRES, {
        errorMap: () => ({ message: "Please select a valid genre" })
    }),
    submitterEmail: z.string()
        .email("Please enter a valid email address")
        .optional()
        .nullable()
        .transform((val) => val || null),
})

export type SubmitQuoteInput = z.infer<typeof submitQuoteSchema>
