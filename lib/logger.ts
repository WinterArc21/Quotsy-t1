type LogLevel = "debug" | "info" | "warn" | "error"

const LEVEL_PRIORITY: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
}

const DEFAULT_LEVEL: LogLevel =
  process.env.NODE_ENV === "production" ? "info" : "debug"

const ACTIVE_LEVEL = normalizeLevel(process.env.LOG_LEVEL) ?? DEFAULT_LEVEL
const MAX_DEPTH = 3
const MAX_KEYS = 25
const MAX_ARRAY = 10

type LogContext = Record<string, unknown>

function normalizeLevel(level?: string): LogLevel | null {
  if (!level) return null
  const normalized = level.toLowerCase()
  if (normalized === "debug" || normalized === "info" || normalized === "warn" || normalized === "error") {
    return normalized
  }
  return null
}

function shouldLog(level: LogLevel) {
  return LEVEL_PRIORITY[level] >= LEVEL_PRIORITY[ACTIVE_LEVEL]
}

function redactString(value: string) {
  if (value.includes("@")) {
    const [user, domain] = value.split("@")
    if (!domain) return "***"
    const safeUser = user.length > 1 ? `${user[0]}***` : "***"
    const safeDomain = domain.length > 2 ? `***${domain.slice(-2)}` : "***"
    return `${safeUser}@${safeDomain}`
  }
  return value
}

function isSensitiveKey(key: string) {
  return /password|token|secret|email|authorization/i.test(key)
}

function sanitizeValue(value: unknown, depth: number): unknown {
  if (value === null || value === undefined) return value
  if (value instanceof Error) {
    return { name: value.name, message: value.message, stack: value.stack }
  }
  if (typeof value === "string") return redactString(value)
  if (typeof value !== "object") return value
  if (depth >= MAX_DEPTH) return "[Truncated]"

  if (Array.isArray(value)) {
    return value.slice(0, MAX_ARRAY).map((item) => sanitizeValue(item, depth + 1))
  }

  const entries = Object.entries(value).slice(0, MAX_KEYS)
  return Object.fromEntries(
    entries.map(([key, val]) => [key, isSensitiveKey(key) ? "[REDACTED]" : sanitizeValue(val, depth + 1)])
  )
}

function log(level: LogLevel, message: string, context?: LogContext) {
  if (!shouldLog(level)) return
  const payload = context ? sanitizeValue(context, 0) : undefined
  const prefix = "[Quotsy]"
  console[level](`${prefix} ${message}`, payload ?? "")
}

export function logDebug(message: string, context?: LogContext) {
  log("debug", message, context)
}

export function logInfo(message: string, context?: LogContext) {
  log("info", message, context)
}

export function logWarn(message: string, context?: LogContext) {
  log("warn", message, context)
}

export function logError(message: string, context?: LogContext) {
  log("error", message, context)
}
