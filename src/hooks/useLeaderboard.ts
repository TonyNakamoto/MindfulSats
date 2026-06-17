import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';
import type { NostrEvent } from '@nostrify/nostrify';
import { GOAL_KIND, parseGoalEvent, type GoalData } from '@/lib/goals';

export interface LeaderboardEntry {
  pubkey: string;
  totalGoals: number;
  completedGoals: number;
  failedGoals: number;
  activeGoals: number;
  totalSatsPledged: number;
  totalSatsDonated: number;
  completionRate: number;
}

export function useLeaderboard() {
  const { nostr } = useNostr();

  return useQuery<LeaderboardEntry[]>({
    queryKey: ['nostr', 'leaderboard'],
    queryFn: async ({ signal }) => {
      const events: NostrEvent[] = await nostr.query(
        [{ kinds: [GOAL_KIND], limit: 200 }],
        { signal },
      );

      // Aggregate by pubkey
      const byPubkey = new Map<string, {
        total: number;
        completed: number;
        failed: number;
        active: number;
        pledgedMsats: number;
        donatedSats: number;
      }>();

      for (const event of events) {
        const goal = parseGoalEvent(event);
        if (!goal) continue;

        const entry = byPubkey.get(event.pubkey) || {
          total: 0,
          completed: 0,
          failed: 0,
          active: 0,
          pledgedMsats: 0,
          donatedSats: 0,
        };

        entry.total++;
        entry.pledgedMsats += goal.pledgeMsats;

        if (goal.status === 'completed') entry.completed++;
        else if (goal.status === 'failed') entry.failed++;
        else if (goal.status === 'active') entry.active++;

        // Check for donation tags
        const donatedSatsTag = event.tags.find(([n]) => n === 'donated_sats')?.[1];
        if (donatedSatsTag) {
          entry.donatedSats += parseInt(donatedSatsTag, 10) || 0;
        }

        byPubkey.set(event.pubkey, entry);
      }

      // Convert to sorted array
      const entries: LeaderboardEntry[] = Array.from(byPubkey.entries())
        .map(([pubkey, data]) => ({
          pubkey,
          totalGoals: data.total,
          completedGoals: data.completed,
          failedGoals: data.failed,
          activeGoals: data.active,
          totalSatsPledged: Math.floor(data.pledgedMsats / 1000),
          totalSatsDonated: data.donatedSats,
          completionRate: data.total > 0
            ? Math.round((data.completed / (data.completed + data.failed)) * 100)
            : 0,
        }))
        .filter((e) => e.totalGoals > 0);

      return entries;
    },
    staleTime: 60_000,
  });
}
