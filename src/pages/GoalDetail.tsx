import { useParams, Link } from 'react-router-dom';
import { nip19 } from 'nostr-tools';
import { useState, useEffect, useRef } from 'react';
import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';
import { useSeoMeta } from '@unhead/react';
import type { NostrEvent } from '@nostrify/nostrify';
import { useAuthor } from '@/hooks/useAuthor';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { GOAL_KIND, CHECKIN_KIND, parseGoalEvent, buildGoalRef, formatSats, formatDateKey, type GoalData } from '@/lib/goals';
import { useGoalCheckins, computeProgress } from '@/hooks/useGoalCheckins';
import { getRandomQuote } from '@/lib/quotes';
import { checkRateLimit } from '@/lib/moderation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { WalletModal } from '@/components/WalletModal';
import { DonateDialog } from '@/components/DonateDialog';
import { useState } from 'react';
import {
  ArrowLeft,
  Target,
  Clock,
  Zap,
  Flame,
  CheckCircle2,
  Calendar,
  Trophy,
  XCircle,
  Wallet,
  AlertCircle,
  Heart,
  WifiOff,
  Flag,
} from 'lucide-react';

export function GoalDetail() {
  const { pubkey, dTag } = useParams<{ pubkey: string; dTag: string }>();
  const { nostr } = useNostr();
  const { user } = useCurrentUser();
  const { mutate: publishEvent, isPending: isPublishing } = useNostrPublish();
  const [donateDialogOpen, setDonateDialogOpen] = useState(false);
  const [lastQuote, setLastQuote] = useState<string | null>(null);

  const handleReport = () => {
    if (!user || !goalEvent) return;
    publishEvent({
      kind: 1984,
      content: '',
      tags: [
        ['e', goalEvent.id],
        ['p', goalEvent.pubkey],
        ['report', 'Malicious content or spam'],
      ],
    });
  };

  // Fetch goal event
  const {
    data: goalWithEvent,
    isLoading,
    error,
  } = useQuery<{ goal: GoalData; event: NostrEvent } | null>({
    queryKey: ['nostr', 'goal', pubkey, dTag],
    queryFn: async ({ signal }) => {
      if (!pubkey || !dTag) return null;

      const events: NostrEvent[] = await nostr.query(
        [{ kinds: [GOAL_KIND], authors: [pubkey], '#d': [dTag], limit: 1 }],
        { signal },
      );

      if (events.length === 0) return null;

      const goal = parseGoalEvent(events[0]);
      if (!goal) return null;

      return { goal, event: events[0] };
    },
    staleTime: 30_000,
    enabled: !!pubkey && !!dTag,
  });

  const goal = goalWithEvent?.goal ?? null;
  const goalEvent = goalWithEvent?.event ?? null;

  const { data: checkins = [] } = useGoalCheckins(goal, pubkey);
  const progress = goal ? computeProgress(goal, checkins) : null;

  const author = useAuthor(pubkey);
  const metadata = author.data?.metadata;
  const displayName = metadata?.display_name || metadata?.name || (pubkey ? nip19.npubEncode(pubkey).slice(0, 12) + '...' : '');
  const avatarUrl = metadata?.picture;

  const isOwner = user?.pubkey === pubkey;
  const isWeekly = goal?.frequency === 'weekly';
  const canCheckin = isOwner && goal?.status === 'active' && progress && !progress.checkedInDates.has(formatDateKey(new Date()));
  const todayKey = formatDateKey(new Date());

  // Auto-finalize: when the owner views an expired active goal, publish the result
  const autoFinalizedRef = useRef(false);
  useEffect(() => {
    if (!isOwner || !goal || !goalEvent || !progress || goal.status !== 'active') return;
    if (autoFinalizedRef.current) return;

    const endDate = new Date((goal.startDate + goal.durationDays * 86400) * 1000);
    if (new Date() < endDate) return;

    autoFinalizedRef.current = true;
    const isComplete = progress.checkedInDays >= progress.totalDays;
    const status = isComplete ? 'completed' : 'failed';

    const tags = goalEvent.tags
      .filter(([n]) => n !== 'status' && n !== 'completed_at')
      .concat([
        ['status', status],
        ...(isComplete ? [['completed_at', String(Math.floor(Date.now() / 1000))]] : []),
      ]);

    publishEvent({
      kind: GOAL_KIND,
      content: '',
      tags,
      created_at: Math.floor(Date.now() / 1000),
    });
  }, [isOwner, goal?.id, goal?.status, progress, goalEvent?.id]);

  useSeoMeta({
    title: goal ? `${goal.title} — MindfulSats` : 'Goal — MindfulSats',
    description: goal?.description || 'Track meditation goals with accountability deposits on Nostr.',
  });

  const handleCheckin = (dateKey?: string) => {
    if (!user || !goal || !pubkey) return;

    // Rate limit check-ins
    if (!checkRateLimit().allowed) return;

    const ref = buildGoalRef(pubkey, goal.id);
    const checkinDate = dateKey || formatDateKey(new Date());

    publishEvent(
      {
        kind: CHECKIN_KIND,
        content: '',
        tags: [
          ['a', ref],
          ['date', todayKey],
          ['duration', `${goal.target} ${goal.unit}`],
          ['t', ...goal.categories.slice(0, 1)],
        ],
      },
      {
        onSuccess: () => {
          const quote = getRandomQuote();
          setLastQuote(quote);
        },
      },
    );
  };

  const handleCompleteGoal = () => {
    if (!user || !goal || !goalEvent) return;

    const tags = goalEvent.tags
      .filter(([n]) => n !== 'status' && n !== 'completed_at')
      .concat([
        ['status', 'completed'],
        ['completed_at', String(Math.floor(Date.now() / 1000))],
      ]);

    publishEvent({
      kind: GOAL_KIND,
      content: '',
      tags,
      created_at: Math.floor(Date.now() / 1000),
    });
  };

  const handleFailGoal = () => {
    if (!user || !goal || !goalEvent) return;

    const tags = goalEvent.tags
      .filter(([n]) => n !== 'status')
      .concat([['status', 'failed']]);

    publishEvent({
      kind: GOAL_KIND,
      content: '',
      tags,
      created_at: Math.floor(Date.now() / 1000),
    });
  };

  // Get all dates for the goal period
  const allDates = goal ? getDateRange(goal) : [];

  if (isLoading) {
    return (
      <div className="container max-w-2xl mx-auto py-8 px-4 space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64 w-full rounded-xl" />
        <Skeleton className="h-48 w-full rounded-xl" />
      </div>
    );
  }

  if (error || !goal || !goalEvent) {
    const isRelayError = !!error;
    return (
      <div className="container max-w-2xl mx-auto py-16 px-4 text-center">
        {isRelayError ? (
          <WifiOff className="h-16 w-16 mx-auto text-amber-500 mb-4" />
        ) : (
          <XCircle className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        )}
        <h1 className="text-2xl font-bold mb-2">
          {isRelayError ? 'Relay Connection Issue' : 'Goal Not Found'}
        </h1>
        <p className="text-muted-foreground mb-6">
          {isRelayError
            ? 'Could not reach Nostr relays. Check your connection and try again.'
            : "This goal doesn't exist or couldn't be loaded from relays."}
        </p>
        <Button asChild variant="outline">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl mx-auto py-8 px-4 space-y-6">
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Feed
      </Link>

      {/* Goal Header */}
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <Avatar className="h-12 w-12 shrink-0 ring-2 ring-background">
                <AvatarImage src={avatarUrl} alt={displayName} />
                <AvatarFallback>{displayName[0]}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <h1 className="text-xl font-bold">{goal.title}</h1>
                <p className="text-sm text-muted-foreground">
                  by {displayName}
                </p>
              </div>
            </div>
            <Badge
              variant={
                goal.status === 'completed' ? 'default' :
                goal.status === 'failed' ? 'destructive' :
                'outline'
              }
              className="capitalize shrink-0"
            >
              {goal.status}
            </Badge>
            {!isOwner && user && (
              <button
                onClick={handleReport}
                className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-destructive transition-colors"
                title="Report this goal"
              >
                <Flag className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {goal.description && (
            <p className="text-sm text-muted-foreground mt-3">{goal.description}</p>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary" className="gap-1">
              <Target className="h-3 w-3" />
              {goal.target} {goal.unit}
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Clock className="h-3 w-3" />
              {goal.frequency} · {goal.durationDays}d
            </Badge>
            {goal.pledgeMsats > 0 && (
              <Badge variant="secondary" className="gap-1">
                <Zap className="h-3 w-3" />
                {formatSats(goal.pledgeMsats)} pledged
              </Badge>
            )}
          </div>
        </div>
      </Card>

      {/* Progress Section */}
      {goal.status === 'active' && progress && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold">{progress.checkedInDays}</span>
                <span className="text-muted-foreground">
                  /{progress.totalDays} {isWeekly ? 'sessions' : 'days'}
                </span>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">
                  {progress.percentage}% complete
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span className="font-medium">{progress.streak} day streak</span>
                </div>
              </div>
            </div>
            <Progress value={progress.percentage} className="h-2" />

            {/* Check-in button */}
            {canCheckin && (
              <Button
                onClick={() => handleCheckin()}
                disabled={isPublishing}
                className="w-full gap-2"
                size="lg"
              >
                <CheckCircle2 className="h-5 w-5" />
                {isPublishing ? 'Checking in...' : `Check in for Today (${todayKey})`}
              </Button>
            )}

            {isOwner && progress.checkedInDates.has(todayKey) && (
              <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-green-50 border border-green-200 dark:bg-green-950 dark:border-green-800">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-sm font-medium text-green-800 dark:text-green-200">
                  You've already checked in today. Great work!
                </span>
              </div>
            )}

            {/* Inline quote card after check-in */}
            {lastQuote && (
              <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 border border-emerald-500/20">
                <p className="text-sm text-muted-foreground italic text-center">
                  "{lastQuote}"
                </p>
              </div>
            )}

            {/* Backfill: show missed eligible days (travel/timezone safety) */}
            {isOwner && goal.status === 'active' && (() => {
              const todayDate = new Date();
              const missedDays: string[] = [];
              const lookback = new Date(todayDate);
              lookback.setDate(lookback.getDate() - 1); // Start from yesterday

              for (let i = 0; i < 3; i++) {
                const key = formatDateKey(lookback);
                const dayOfWeek = lookback.getDay();
                if (
                  goal.days.includes(dayOfWeek) &&
                  !progress.checkedInDates.has(key) &&
                  key >= formatDateKey(new Date(goal.startDate * 1000))
                ) {
                  missedDays.push(key);
                }
                lookback.setDate(lookback.getDate() - 1);
              }

              if (missedDays.length === 0) return null;

              return (
                <div className="space-y-1.5 pt-1">
                  <p className="text-xs text-muted-foreground text-center">Missed a day? Backfill:</p>
                  <div className="flex gap-1.5 justify-center flex-wrap">
                    {missedDays.map((date) => (
                      <Button
                        key={date}
                        variant="outline"
                        size="sm"
                        className="gap-1 text-xs min-h-[44px]"
                        onClick={() => handleCheckin(date)}
                        disabled={isPublishing}
                      >
                        <CheckCircle2 className="h-3 w-3" />
                        {date}
                      </Button>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* Day grid — calendar style */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-muted-foreground">
                {isWeekly
                  ? 'Check-in History (any day counts)'
                  : goal.days.length < 7
                    ? `Check-in History (${goal.days.length} day${goal.days.length > 1 ? 's' : ''}/wk)` 
                    : 'Daily Check-ins'}
              </p>

              {(() => {
                // Group dates by month
                const months = new Map<string, string[]>();
                for (const date of allDates) {
                  const d = new Date(date + 'T00:00:00');
                  const key = d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
                  if (!months.has(key)) months.set(key, []);
                  months.get(key)!.push(date);
                }

                const dayHeaders = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
                const dayHeadersFull = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

                return Array.from(months.entries()).map(([monthLabel, dates]) => {
                  // Find the day-of-week offset for the first day of the month
                  const firstDate = new Date(dates[0] + 'T00:00:00');
                  const startPad = firstDate.getDay(); // 0=Sun

                  // Build padded grid: empty cells for offset, then the dates
                  const padded: (string | null)[] = [
                    ...Array(startPad).fill(null),
                    ...dates,
                  ];

                  return (
                    <div key={monthLabel} className="space-y-1.5">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {monthLabel}
                      </p>

                      {/* Day headers */}
                      <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
                        {dayHeaders.map((dh, i) => (
                          <div
                            key={dh}
                            className="text-center text-[9px] sm:text-[10px] text-muted-foreground font-medium py-0.5"
                            title={dayHeadersFull[i]}
                          >
                            <span className="hidden sm:inline">{dayHeadersFull[i]}</span>
                            <span className="sm:hidden">{dh}</span>
                          </div>
                        ))}
                      </div>

                      {/* Calendar grid */}
                      <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
                        {padded.map((date, i) => {
                          if (date === null) {
                            return <div key={`empty-${i}`} className="aspect-square" />;
                          }

                          const isChecked = progress.checkedInDates.has(date);
                          const isFuture = date > formatDateKey(new Date());
                          const dayOfWeek = new Date(date + 'T00:00:00').getDay();
                          const isEligible = goal.days.includes(dayOfWeek);

                          return (
                            <div
                              key={date}
                              className={`aspect-square rounded-md flex items-center justify-center text-[11px] transition-colors ${
                                isChecked
                                  ? 'bg-emerald-500 text-white'
                                  : isFuture
                                    ? isEligible
                                      ? 'bg-secondary/40 text-muted-foreground/60'
                                      : 'bg-secondary/20 text-muted-foreground/30'
                                    : isEligible
                                      ? 'bg-destructive/15 text-destructive'
                                      : 'bg-muted/30 text-muted-foreground/40'
                              }`}
                              title={`${date}${!isEligible ? ' (rest day)' : ''}`}
                            >
                              {isChecked ? (
                                <CheckCircle2 className="h-3.5 w-3.5" />
                              ) : (
                                <span>{new Date(date + 'T00:00:00').getDate()}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                });
              })()}

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-sm bg-emerald-500" /> Done
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-sm bg-destructive/15" /> Missed
                </span>
                {goal.days.length < 7 && (
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-sm bg-muted/30" /> Rest day
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Goal completed state */}
      {goal.status === 'completed' && progress && (
        <Card className="border-emerald-500/30">
          <CardContent className="py-8 text-center space-y-3">
            <Trophy className="h-16 w-16 mx-auto text-emerald-500" />
            <h2 className="text-2xl font-bold">Goal Completed!</h2>
            <p className="text-muted-foreground">
              You successfully checked in {progress.checkedInDays} out of {progress.totalDays} days.
              {goal.pledgeMsats > 0 && ` Your ${formatSats(goal.pledgeMsats)} pledge is safe!`}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Goal failed state */}
      {goal.status === 'failed' && progress && (
        <Card className="border-destructive/30">
          <CardContent className="py-8 text-center space-y-4">
            <XCircle className="h-16 w-16 mx-auto text-destructive" />
            <h2 className="text-2xl font-bold">Goal Not Met</h2>
            <p className="text-muted-foreground">
              You completed {progress.checkedInDays} out of {progress.totalDays} days.
            </p>

            {goal.pledgeMsats > 0 && isOwner && (
              <div className="space-y-3 max-w-md mx-auto">
                {/* Pledge reminder */}
                <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200 dark:bg-amber-950 dark:border-amber-800">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
                  <p className="text-sm text-amber-800 dark:text-amber-200 text-left">
                    You pledged <strong>{formatSats(goal.pledgeMsats)}</strong>.
                    Donate to support the Bitcoin open-source ecosystem.
                    Your donation will be verifiable on Nostr.
                  </p>
                </div>

                {/* Donate button */}
                <Button
                  className="w-full gap-2"
                  size="lg"
                  onClick={() => setDonateDialogOpen(true)}
                >
                  <Heart className="h-4 w-4" />
                  Donate to Honor Pledge
                </Button>

                <DonateDialog
                  open={donateDialogOpen}
                  onOpenChange={setDonateDialogOpen}
                  goalEvent={goalEvent}
                  goalTitle={goal.title}
                  pledgeSats={Math.floor(goal.pledgeMsats / 1000)}
                />

                {/* Manual wallet option */}
                <WalletModal>
                  <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                    <Wallet className="h-3.5 w-3.5" />
                    Open Wallet Manually
                  </Button>
                </WalletModal>
              </div>
            )}

            {goal.pledgeMsats > 0 && !isOwner && (
              <div className="max-w-md mx-auto p-3 rounded-lg bg-muted/50 border">
                <p className="text-sm text-muted-foreground">
                  This user pledged <strong>{formatSats(goal.pledgeMsats)}</strong> on this goal.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Auto-finalize: goal expired but still active */}
      {isOwner && goal.status === 'active' && progress && (() => {
        const endDate = new Date((goal.startDate + goal.durationDays * 86400) * 1000);
        const hasExpired = new Date() >= endDate;
        if (!hasExpired) return null;

        const isComplete = progress.checkedInDays >= progress.totalDays;
        return (
          <Card className={isComplete ? 'border-emerald-500/30' : 'border-destructive/30'}>
            <CardContent className="py-6 text-center space-y-3">
              <Calendar className={`h-10 w-10 mx-auto ${isComplete ? 'text-emerald-500' : 'text-destructive'}`} />
              <h3 className="text-lg font-semibold">
                {isComplete ? 'Goal Period Ended — Completed!' : 'Goal Period Ended — Not Met'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {progress.checkedInDays} of {progress.totalDays} check-ins completed.
              </p>
              <Button
                className="gap-2"
                onClick={isComplete ? handleCompleteGoal : handleFailGoal}
                disabled={isPublishing}
              >
                {isPublishing ? 'Finalizing...' : 'Finalize Goal'}
              </Button>
            </CardContent>
          </Card>
        );
      })()}

      {/* Check-in log */}
      {checkins.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Check-in Log</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {checkins
                .sort((a, b) => b.date.localeCompare(a.date))
                .map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{c.date}</p>
                      {c.duration && (
                        <p className="text-xs text-muted-foreground">{c.duration}</p>
                      )}
                      {c.content && (
                        <p className="text-xs text-muted-foreground mt-0.5">{c.content}</p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}

    </div>
  );
}

function getDateRange(goal: GoalData): string[] {
  const dates: string[] = [];
  const start = new Date(goal.startDate * 1000);
  const end = new Date(start);
  end.setDate(end.getDate() + goal.durationDays - 1);

  // Show ~6 weeks window around today: 2 weeks back, 4 weeks ahead
  const today = new Date();
  const windowStart = new Date(today);
  windowStart.setDate(windowStart.getDate() - 14);
  const windowEnd = new Date(today);
  windowEnd.setDate(windowEnd.getDate() + 28);

  // Clamp to goal's actual range
  const displayStart = windowStart > start ? windowStart : start;
  const displayEnd = windowEnd < end ? windowEnd : end;

  const cursor = new Date(displayStart);
  while (cursor <= displayEnd) {
    dates.push(formatDateKey(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
}
