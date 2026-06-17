/**
 * Content moderation and anti-abuse utilities for MindfulSats.
 *
 * Defense layers:
 * 1. Text sanitization (unicode normalization, zero-width stripping)
 * 2. Profanity / harm filter
 * 3. URL validation
 * 4. Rate limiting (client-side throttle)
 * 5. Duplicate detection
 * 6. Content length enforcement
 */

// ─── Text Sanitization ────────────────────────────────────────────

/** Zero-width and invisible characters used to bypass filters */
const INVISIBLE_CHARS = /[\u200B-\u200D\uFEFF\u00AD\u2060\u180E\u034F\u2028\u2029]/g;

/** Strip characters designed to evade filters */
export function sanitizeText(text: string): string {
  return text
    .normalize('NFKC')  // Normalize unicode homoglyphs: а→a, р→p, etc.
    .replace(INVISIBLE_CHARS, '');  // Strip zero-width chars
}

// ─── Profanity / Harm Filter ───────────────────────────────────────

const BLOCKED_PATTERNS: RegExp[] = [
  // Slurs
  /\bn[i1!]g{2,}[e3]r[s$]?\b/i,
  /\bf[a@4]g{1,}[gq][o0]?[t7]s?\b/i,
  /\bk[i1!]k[e3]\b/i,
  /\bch[i1!]nk\b/i,
  /\btr[a@4]nn?[y1!]\b/i,
  /\br[e3]t[a@4]rd\b/i,
  /\bsp[i1!][cg][cga]\b/i,
  /\bw[e3]tb[a@4]ck\b/i,

  // Explicit / sexual
  /\bp[o0]rn\b/i,
  /\bs[e3]xual\b/i,
  /\bf[u*]ck\b/i,
  /\bsh[i1!]t\b/i,
  /\bc[u*]nt\b/i,
  /\bd[i1!]ck\b/i,
  /\bp[u*]ss[iy]\b/i,
  /\b[a@4]ss(?:h[o0]l[e3])?\b/i,
  /\bb[i1!]tch\b/i,
  /\bwh[o0]r[e3]\b/i,
  /\bsl[u*]t\b/i,
  /\bd[a@4]mn\b/i,

  // Violence / self-harm
  /\bsu[i1!]c[i1!]d[e3]\b/i,
  /\bk[i1!]ll\s*(?:myself|yourself|me|you)\b/i,
  /\b[self]?\s*h[a@4]rm\b/i,
  /\bc[u*]tting\b/i,
  /\br[a@4]p[e3]\b/i,
  /\bm[u*]rd[e3]r\b/i,
  /\bt[e3]rr[o0]r[i1!]s[tm]\b/i,

  // Scams / spam
  /\b[a@4][i1!]rdrop\b/i,
  /\bpump\s*[&]?\s*dump\b/i,
  /\brug\s*pull\b/i,
  /\bnot\s*financ[i1!]al\s*adv[i1!]c[e3]\b/i,
  /\bclick\s*here\b/i,
  /\bfree\s*sats\b/i,
  /\bdouble\s*your\b/i,
  /\bguaranteed\s*returns?\b/i,
];

export interface ModerationResult {
  passed: boolean;
  blockedWord?: string;
  reason?: string;
}

export function moderateText(text: string): ModerationResult {
  if (!text.trim()) return { passed: true };

  const sanitized = sanitizeText(text);

  for (const pattern of BLOCKED_PATTERNS) {
    const match = sanitized.match(pattern);
    if (match) {
      return {
        passed: false,
        blockedWord: match[0],
        reason: `Blocked language: "${match[0]}"`,
      };
    }
  }

  return { passed: true };
}

// ─── URL Validation ────────────────────────────────────────────────

const ALLOWED_PROTOCOLS = ['https:', 'http:'];
const BLOCKED_DOMAINS = new Set([
  // Known phishing / scam domains
]);

/** Check if a URL is safe to include in content */
export function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (!ALLOWED_PROTOCOLS.includes(parsed.protocol)) return false;
    if (BLOCKED_DOMAINS.has(parsed.hostname.toLowerCase())) return false;
    // Block IP addresses (prevent SSRF-like probing)
    if (/^\d+\.\d+\.\d+\.\d+$/.test(parsed.hostname)) return false;
    return true;
  } catch {
    return false;
  }
}

/** Extract and validate URLs from text. Returns the first unsafe URL found, or null. */
export function findUnsafeUrl(text: string): string | null {
  const urlPattern = /https?:\/\/[^\s<>"']+/gi;
  const matches = text.match(urlPattern);
  if (!matches) return null;

  for (const url of matches) {
    if (!isValidUrl(url)) return url;
  }
  return null;
}

// ─── Rate Limiting (Client-Side) ────────────────────────────────────

const RateLimitWindow = 60_000; // 1 minute
const MaxEventsPerWindow = 10;   // Max goal/check-in publishes per minute
const eventTimestamps: number[] = [];

export function checkRateLimit(): { allowed: boolean; retryAfterMs: number } {
  const now = Date.now();
  // Prune old timestamps
  while (eventTimestamps.length > 0 && eventTimestamps[0] < now - RateLimitWindow) {
    eventTimestamps.shift();
  }

  if (eventTimestamps.length >= MaxEventsPerWindow) {
    const oldest = eventTimestamps[0];
    const retryAfter = oldest + RateLimitWindow - now;
    return { allowed: false, retryAfterMs: Math.max(0, retryAfter) };
  }

  eventTimestamps.push(now);
  return { allowed: true, retryAfterMs: 0 };
}

// ─── Duplicate Detection ────────────────────────────────────────────

const recentGoalHashes = new Map<string, number>();
const DuplicateWindow = 300_000; // 5 minutes

/** Returns true if a goal with similar content was published recently */
export function isDuplicateGoal(title: string): boolean {
  const hash = sanitizeText(title.toLowerCase().trim());
  const now = Date.now();

  // Clean old entries
  for (const [key, ts] of recentGoalHashes) {
    if (ts < now - DuplicateWindow) recentGoalHashes.delete(key);
  }

  if (recentGoalHashes.has(hash)) return true;
  recentGoalHashes.set(hash, now);
  return false;
}

// ─── Content Length Enforcement ─────────────────────────────────────

export const MAX_TITLE_LENGTH = 120;
export const MAX_DESCRIPTION_LENGTH = 500;

export function enforceLength(title: string, description: string): { valid: boolean; reason?: string } {
  if (title.length > MAX_TITLE_LENGTH) {
    return { valid: false, reason: `Title too long (max ${MAX_TITLE_LENGTH} characters)` };
  }
  if (description.length > MAX_DESCRIPTION_LENGTH) {
    return { valid: false, reason: `Description too long (max ${MAX_DESCRIPTION_LENGTH} characters)` };
  }
  return { valid: true };
}
