# Quotsy quote app


## Deployment

Your project is live on Vercel. 

Dev link: v0-quotsy-quote-app.vercel.app

Production link: quotsy.me

## Build your app


## Local Development Setup

> ⚠️ **Important**: This project uses **pnpm** as its package manager. Do not use npm or yarn, as this will create conflicting lock files and cause deployment issues.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)

### 1. Install pnpm (if you don't have it)

```bash
npm install -g pnpm
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file with the required environment variables (see `.env.example` if available).

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint |

