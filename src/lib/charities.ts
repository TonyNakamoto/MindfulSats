/**
 * Mental health charity directory for MindfulSats accountability donations.
 *
 * To add a charity, they need:
 * 1. A Nostr profile (npub) with a Lightning address (lud16 or lud06)
 * 2. That Lightning address must support zaps (NIP-57 LNURL-pay)
 *
 * Verification: when a user donates via zap, the LNURL service publishes
 * a kind 9735 zap receipt on Nostr. Anyone can verify the donation by
 * querying for zap receipts from the charity's pubkey.
 */

export interface Charity {
  /** Nostr npub (bech32 public key) */
  npub: string;
  /** Hex public key */
  pubkey: string;
  /** Display name */
  name: string;
  /** Short description */
  description: string;
  /** Website URL */
  website?: string;
}

/**
 * Add real mental health charities with Nostr profiles + Lightning addresses here.
 * The pubkey must be a real Nostr identity with a lud16/lud06 in their kind 0 profile.
 */
export const CHARITIES: Charity[] = [
  // Placeholder — replace with real mental health charities that accept Bitcoin via Lightning
  // Example format:
  // {
  //   npub: 'npub1...',
  //   pubkey: 'abcdef...',
  //   name: 'Mental Health Foundation',
  //   description: 'Providing accessible mental health support worldwide.',
  //   website: 'https://example.org',
  // },
];

export function getCharities(): Charity[] {
  return CHARITIES;
}
