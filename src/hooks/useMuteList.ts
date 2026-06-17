import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';
import type { NostrEvent } from '@nostrify/nostrify';
import { useCurrentUser } from './useCurrentUser';

/**
 * Fetches the current user's NIP-51 mute list (kind 10000).
 * Returns a Set of muted pubkeys for fast lookup.
 */
export function useMuteList() {
  const { user } = useCurrentUser();
  const { nostr } = useNostr();

  return useQuery<Set<string>>({
    queryKey: ['nostr', 'mutelist', user?.pubkey ?? ''],
    queryFn: async ({ signal }) => {
      if (!user?.pubkey) return new Set<string>();

      const events: NostrEvent[] = await nostr.query(
        [{ kinds: [10000], authors: [user.pubkey], limit: 1 }],
        { signal },
      );

      const event = events[0];
      if (!event) return new Set<string>();

      // Mute list tags: ["p", "<pubkey>"]
      const muted = new Set<string>();
      for (const tag of event.tags) {
        if (tag[0] === 'p' && tag[1]) {
          muted.add(tag[1]);
        }
      }

      return muted;
    },
    staleTime: 5 * 60_000,
    enabled: !!user?.pubkey,
  });
}
