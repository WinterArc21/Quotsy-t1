import { z } from "zod"

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
