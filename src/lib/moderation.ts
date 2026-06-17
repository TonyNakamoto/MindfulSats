/**
 * Content moderation utilities for MindfulSats.
 */

/** Words/phrases that should be blocked from goal titles and descriptions */
const BLOCKED_PATTERNS: RegExp[] = [
  // Slurs (common English racial and homophobic slurs)
  /\bn{1,2}[i1!]g{2,}[e3]r[s$]?\b/i,
  /\bf[a@4]g{1,}[gq][o0]?[t7]s?\b/i,
  /\bk[i1!]k[e3]\b/i,
  /\bch[i1!]nk\b/i,
  /\btr[a@4]nn?[y1!]\b/i,
  /\br[e3]t[a@4]rd\b/i,
  /\bsp[i1!][cg][cga]\b/i,
  /\bw[e3]tb[a@4]ck\b/i,
  /\bp[o0]rn\b/i,
  /\bs[e3]xual\b/i,

  // Explicit sexual terms in common use
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
  /\bh[e3]ll\b/i,

  // Violence / self-harm (keep mental health space safe)
  /\bsu[i1!]c[i1!]d[e3]\b/i,
  /\bk[i1!]ll\s*(?:myself|yourself|me|you)\b/i,
  /\b[self]?\s*h[a@4]rm\b/i,
  /\bc[u*]tting\b/i,
  /\br[a@4]p[e3]\b/i,
  /\bm[u*]rd[e3]r\b/i,
  /\bt[e3]rr[o0]r[i1!]s[tm]\b/i,

  // Scams / spam indicators
  /\b[a@4][i1!]rdrop\b/i,
  /\bt[o0]k[e3]n\s*s[a@4]l[e3]\b/i,
  /\bpump\s*(?:and|&)\s*dump\b/i,
  /\brug\s*pull\b/i,
  /\bn[o0]t\s*f[i1!]n[a@4]nc[i1!][a@4]l\s*[a@4]dv[i1!]c[e3]\b/i,
];

/** Check if text contains blocked content */
export function containsBlockedContent(text: string): string | null {
  if (!text.trim()) return null;

  const lower = text.toLowerCase();
  for (const pattern of BLOCKED_PATTERNS) {
    const match = lower.match(pattern);
    if (match) {
      return match[0];
    }
  }
  return null;
}
