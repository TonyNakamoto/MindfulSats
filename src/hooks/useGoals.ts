import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';
import type { NostrEvent } from '@nostrify/nostrify';
import { GOAL_KIND, parseGoalEvent, type GoalWithEvent } from '@/lib/goals';

export function useGoals(author?: string, category?: string) {
  const { nostr } = useNostr();

  return useQuery<GoalWithEvent[]>({
    queryKey: ['nostr', 'goals', author ?? 'all', category ?? 'all'],
    queryFn: async ({ signal }) => {
      const filters: Record<string, unknown>[] = [
        {
          kinds: [GOAL_KIND],
          limit: 50,
        },
      ];

      if (author) {
        filters[0].authors = [author];
      }

      if (category) {
        filters[0]['#t'] = [category];
      }

      const events: NostrEvent[] = await nostr.query(filters, {
        signal,
      });

      const goals: GoalWithEvent[] = [];
      for (const event of events) {
        const goal = parseGoalEvent(event);
        if (goal) {
          goals.push({ goal, event });
        }
      }

      return goals;
    },
    staleTime: 30_000,
  });
}

export function useUserGoals(pubkey?: string) {
  return useGoals(pubkey);
}

export function useGoalFeed(category?: string) {
  return useGoals(undefined, category);
}
