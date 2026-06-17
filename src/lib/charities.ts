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
    description: '501(c)(3) funding Bitcoin & open-source dev. 100% pass-through, no management fees.',
    website: 'https://opensats.org',
    lightningAddress: 'opensats@npub.cash',
  },
  {
    npub: 'npub10pensatlcfwktnvjjw2dtem38n6rvw8g6fv73h84cuacxn4c28eqyfn34f',
    pubkey: '787338757fc25d65cd929394d5e7713cf43638e8d259e8dcf5c73b834eb851f2',
    name: 'OpenSats Nostr Fund',
    description: 'Grants for Nostr relay operators, client devs, library maintainers, and protocol contributors.',
    website: 'https://opensats.org/funds/nostr',
    lightningAddress: 'opensats@npub.cash',
  },
  {
    npub: 'npub17xvf49kht23cddxgw92rvfktkd3vqvjgkgsdexh9847wl0927tqsrhc9as',
    pubkey: 'f1989a96d75aa386b4c871543626cbb362c03248b220dc9ae53d7cefbcaaf2c1',
    name: 'Human Rights Foundation',
    description: 'Protecting human rights globally. Funds Bitcoin tools for dissidents, journalists & activists.',
    website: 'https://hrf.org',
    lightningAddress: 'nostr@btcpay.hrf.org',
  },
  {
    npub: 'npub17xvf49kht23cddxgw92rvfktkd3vqvjgkgsdexh9847wl0927tqsrhc9as',
    pubkey: 'f1989a96d75aa386b4c871543626cbb362c03248b220dc9ae53d7cefbcaaf2c1',
    name: 'HRF Bitcoin Development Fund',
    description: 'Grants for Bitcoin privacy, security & freedom tech — CoinSwap, Muun, SeedSigner, and more.',
    website: 'https://hrf.org/program/financial-freedom/bitcoin-development-fund/',
    lightningAddress: 'nostr@btcpay.hrf.org',
  },
];

export function getCharities(): Charity[] {
  return CHARITIES;
}
