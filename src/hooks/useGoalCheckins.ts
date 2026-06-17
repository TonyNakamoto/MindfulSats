import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';
import type { NostrEvent } from '@nostrify/nostrify';
import { CHECKIN_KIND, parseCheckinEvent, buildGoalRef, type CheckinData, type GoalData } from '@/lib/goals';

export function useGoalCheckins(goal: GoalData | null, authorPubkey?: string) {
  const { nostr } = useNostr();

  return useQuery<CheckinData[]>({
    queryKey: ['nostr', 'checkins', goal?.id ?? '', authorPubkey ?? ''],
    queryFn: async ({ signal }) => {
      if (!goal || !authorPubkey) return [];

      const ref = buildGoalRef(authorPubkey, goal.id);

      const events: NostrEvent[] = await nostr.query(
        [
          {
            kinds: [CHECKIN_KIND],
            authors: [authorPubkey],
            '#a': [ref],
            limit: 100,
          },
        ],
        { signal },
      );

      return events
        .map(parseCheckinEvent)
        .filter((c): c is CheckinData => c !== null);
    },
    staleTime: 15_000,
    enabled: !!goal && !!authorPubkey,
  });
}

export interface GoalProgress {
  totalDays: number;
  elapsedDays: number;
  checkedInDays: number;
  checkedInDates: Set<string>;
  percentage: number;
  isOnTrack: boolean;
  streak: number;
}

export function computeProgress(goal: GoalData, checkins: CheckinData[]): GoalProgress {
  const checkedInDates = new Set(checkins.map((c) => c.date));
  const today = new Date();
  const start = new Date(goal.startDate * 1000);
  const end = new Date(start.getTime() + goal.durationDays * 86400000);

  const isWeekly = goal.frequency === 'weekly';
  const checkedInDays = checkins.length;
  const totalDays = isWeekly
    ? goal.target * Math.ceil(goal.durationDays / 7)
    : goal.durationDays;

  // Calculate elapsed - for weekly, count elapsed weeks * target
  let elapsedExpected = 0;
  const cursor = new Date(start);
  if (isWeekly) {
    // Weekly: count how many full weeks have elapsed, multiply by target
    const msPerWeek = 7 * 86400000;
    const elapsedMs = Math.min(today.getTime() - start.getTime(), goal.durationDays * 86400000);
    const elapsedWeeks = Math.floor(elapsedMs / msPerWeek);
    elapsedExpected = Math.min(elapsedWeeks * goal.target, totalDays);
  } else {
    // Daily: count elapsed days
    while (cursor <= today && elapsedExpected < goal.durationDays) {
      elapsedExpected++;
      cursor.setDate(cursor.getDate() + 1);
    }
  }

  // Calculate streak (consecutive days counting backwards from today)
  let streak = 0;
  const streakCursor = new Date(today);
  while (true) {
    const key = formatDateKey(streakCursor);
    if (key < formatDateKey(start)) break;
    if (checkedInDates.has(key)) {
      streak++;
    } else {
      if (key === formatDateKey(today) || streak > 0) break;
    }
    streakCursor.setDate(streakCursor.getDate() - 1);
    if (streakCursor < start) break;
  }

  const percentage = totalDays > 0 ? Math.round((checkedInDays / totalDays) * 100) : 0;
  const isOnTrack = elapsedExpected > 0 ? checkedInDays >= elapsedExpected : true;

  return {
    totalDays,
    elapsedDays: elapsedExpected,
    checkedInDays,
    checkedInDates,
    percentage,
    isOnTrack,
    streak,
  };
}

function formatDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
