/**
 * Charity directory for MindfulSats accountability donations.
 *
 * Each charity needs:
 * 1. A Nostr profile (npub) with a Lightning address (lud16 or lud06)
 * 2. That Lightning address must support zaps (NIP-57 LNURL-pay)
 *
 * Verification: when a user donates via zap, the LNURL service publishes
 * a kind 9735 zap receipt on Nostr relays. Anyone can verify by querying
 * for zap receipts referencing the charity's pubkey.
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
  /** Lightning address (resolved dynamically from Nostr profile if omitted) */
  lightningAddress?: string;
}

export const CHARITIES: Charity[] = [
  {
    npub: 'npub10pensatlcfwktnvjjw2dtem38n6rvw8g6fv73h84cuacxn4c28eqyfn34f',
    pubkey: '787338757fc25d65cd929394d5e7713cf43638e8d259e8dcf5c73b834eb851f2',
    name: 'OpenSats',
    description: '501(c)(3) funding Bitcoin & open-source dev. Nostr Fund, General Fund, 100% pass-through.',
    website: 'https://opensats.org',
    lightningAddress: 'opensats@npub.cash',
  },
  {
    npub: 'npub17xvf49kht23cddxgw92rvfktkd3vqvjgkgsdexh9847wl0927tqsrhc9as',
    pubkey: 'f1989a96d75aa386b4c871543626cbb362c03248b220dc9ae53d7cefbcaaf2c1',
    name: 'Human Rights Foundation',
    description: '501(c)(3) protecting human rights globally. Funds Bitcoin tools for dissidents, journalists & activists.',
    website: 'https://hrf.org',
    lightningAddress: 'nostr@btcpay.hrf.org',
  },
  {
    npub: 'npub133yvyku5munsddczjqwz4w6aspwz93z22jmlzgw8xur7qu0368vq7urapg',
    pubkey: '8c48c25b94df2706b702901c2abb5d805c22c44a54b7f121c73707e071f1d1d8',
    name: 'Btrust',
    description: 'Decentralizing Bitcoin development in Africa & the Global South.',
    website: 'https://btrust.tech',
  },
];

export function getCharities(): Charity[] {
  return CHARITIES;
}
