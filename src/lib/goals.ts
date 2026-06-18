import type { NostrEvent } from '@nostrify/nostrify';

/** Kind for goal definitions (addressable) */
export const GOAL_KIND = 39651;

/** Kind for daily check-ins (regular) */
export const CHECKIN_KIND = 9327;

export type GoalFrequency = 'daily' | 'weekly' | 'custom';
export type GoalStatus = 'active' | 'completed' | 'failed';

export interface GoalData {
  /** The d-tag identifier */
  id: string;
  /** Short title */
  title: string;
  /** Categories (e.g. "meditation", "mental-health") */
  categories: string[];
  /** How often the goal repeats */
  frequency: GoalFrequency;
  /** Selected days of week (0=Sun..6=Sat). Empty = all days. */
  days: number[];
  /** Numeric target value */
  target: number;
  /** Unit of measure (e.g. "minutes", "sessions") */
  unit: string;
  /** Number of days the goal runs */
  durationDays: number;
  /** Amount pledged in millisatoshis */
  pledgeMsats: number;
  /** Unix timestamp when the goal starts */
  startDate: number;
  /** Current status */
  status: GoalStatus;
  /** Unix timestamp when completed (only if status is "completed") */
  completedAt?: number;
  /** Optional description */
  description: string;
}

export interface CheckinData {
  /** The goal's a-tag reference (39651:pubkey:d-tag) */
  goalRef: string;
  /** Date in YYYY-MM-DD format */
  date: string;
  /** Actual duration achieved */
  duration?: string;
  /** Optional reflection note */
  content: string;
}

export interface GoalWithEvent {
  goal: GoalData;
  event: NostrEvent;
}

/** Parse a kind 39651 goal event into GoalData */
export function parseGoalEvent(event: NostrEvent): GoalData | null {
  if (event.kind !== GOAL_KIND) return null;

  const tags = event.tags;

  const id = tags.find(([n]) => n === 'd')?.[1];
  const title = tags.find(([n]) => n === 'title')?.[1];
  const frequency = tags.find(([n]) => n === 'frequency')?.[1] as GoalFrequency | undefined;
  const daysStr = tags.find(([n]) => n === 'days')?.[1];
  const targetStr = tags.find(([n]) => n === 'target')?.[1];
  const unit = tags.find(([n]) => n === 'unit')?.[1];
  const durationStr = tags.find(([n]) => n === 'duration_days')?.[1];
  const pledgeStr = tags.find(([n]) => n === 'pledge_msats')?.[1];
  const startStr = tags.find(([n]) => n === 'start_date')?.[1];
  const status = tags.find(([n]) => n === 'status')?.[1] as GoalStatus | undefined;
  const completedStr = tags.find(([n]) => n === 'completed_at')?.[1];
  const description = tags.find(([n]) => n === 'description')?.[1] ?? '';
  const categories = tags.filter(([n]) => n === 't').map(([, v]) => v);

  // Parse days: comma-separated day numbers (0=Sun..6=Sat). Empty = all days.
  const days = daysStr
    ? daysStr.split(',').map(Number).filter((n) => n >= 0 && n <= 6)
    : [0, 1, 2, 3, 4, 5, 6];

  // Compute frequency from days for backwards compat
  const resolvedFreq: GoalFrequency = frequency
    || (days.length === 7 ? 'daily' : 'custom');

  if (!id || !title || !targetStr || !unit || !durationStr || !startStr || !status) {
    return null;
  }

  const target = parseInt(targetStr, 10);
  const durationDays = parseInt(durationStr, 10);
  const pledgeMsats = parseInt(pledgeStr ?? '0', 10);
  const startDate = parseInt(startStr, 10);
  const completedAt = completedStr ? parseInt(completedStr, 10) : undefined;

  if (isNaN(target) || isNaN(durationDays) || isNaN(pledgeMsats) || isNaN(startDate)) {
    return null;
  }

  return {
    id,
    title,
    categories,
    frequency: resolvedFreq,
    days,
    target,
    unit,
    durationDays,
    pledgeMsats,
    startDate,
    status,
    completedAt,
    description,
  };
}

/** Parse a kind 9327 check-in event */
export function parseCheckinEvent(event: NostrEvent): CheckinData | null {
  if (event.kind !== CHECKIN_KIND) return null;

  const goalRef = event.tags.find(([n]) => n === 'a')?.[1];
  const date = event.tags.find(([n]) => n === 'date')?.[1];
  const duration = event.tags.find(([n]) => n === 'duration')?.[1];

  if (!goalRef || !date) return null;

  return {
    goalRef,
    date,
    duration,
    content: event.content,
  };
}

/**
 * Get the date keys (YYYY-MM-DD) that should have been checked in
 * from the goal's start date through today (or end date).
 */
export function getExpectedDates(goal: GoalData): string[] {
  const dates: string[] = [];
  const start = new Date(goal.startDate * 1000);
  const end = new Date(start.getTime() + goal.durationDays * 86400000);
  const today = new Date();
  const finalDate = end < today ? end : today;

  const cursor = new Date(start);
  while (cursor <= finalDate) {
    dates.push(formatDateKey(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
}

/** Format a Date to YYYY-MM-DD */
export function formatDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** Check if a date string is today */
export function isToday(dateStr: string): boolean {
  return dateStr === formatDateKey(new Date());
}

/** Convert millisatoshis to a display string */
export function formatSats(msats: number): string {
  const sats = Math.floor(msats / 1000);
  if (sats >= 1000000) {
    return `${(sats / 1000000).toFixed(1)}M sats`;
  }
  if (sats >= 1000) {
    return `${(sats / 1000).toFixed(1)}k sats`;
  }
  return `${sats} sats`;
}

/** Build an a-tag reference string for a goal */
export function buildGoalRef(pubkey: string, dTag: string): string {
  return `${GOAL_KIND}:${pubkey}:${dTag}`;
}

/** Parse an a-tag reference (kind:pubkey:d) into its parts */
export function parseGoalRef(ref: string): { kind: number; pubkey: string; dTag: string } | null {
  const parts = ref.split(':');
  if (parts.length !== 3) return null;
  const kind = parseInt(parts[0], 10);
  if (isNaN(kind)) return null;
  return { kind, pubkey: parts[1], dTag: parts[2] };
}
