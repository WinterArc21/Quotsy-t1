# AGENTS.md - Quotsy

## Commands
- **Dev**: `pnpm dev`
- **Build**: `pnpm build`
- **Lint**: `pnpm lint`
- No test runner configured

## Architecture
- **Framework**: Next.js 16 (App Router) with React 19, TypeScript, Tailwind CSS 4
- **Database**: Supabase (client: `lib/supabase/client.ts`, server: `lib/supabase/server.ts`)
- **Email**: Resend with React Email templates in `emails/`
- **UI**: shadcn/ui components in `components/ui/`, Radix primitives
- **Server Actions**: `app/actions/` (subscriptions, quotes, admin-auth, admin-quotes)
- **Types**: `lib/types.ts` (Quote, Subscriber, PendingQuote, GENRES)

## Code Style
- Use `@/*` path alias for imports (e.g., `@/lib/utils`, `@/components/ui/button`)
- Use `cn()` from `lib/utils.ts` for className merging (clsx + tailwind-merge)
- TypeScript strict mode enabled; define types in `lib/types.ts`
- Server actions must have `"use server"` directive at file top
- Validation with Zod (schemas in `lib/validation.ts`)
- Use Supabase server client in server components/actions, client in client components
