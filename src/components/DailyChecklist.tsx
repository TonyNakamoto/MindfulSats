import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { NostrEvent } from '@nostrify/nostrify';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useUserGoals } from '@/hooks/useGoals';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { CHECKIN_KIND, buildGoalRef, formatDateKey, formatSats } from '@/lib/goals';
import { checkRateLimit } from '@/lib/moderation';
import { getRandomQuote } from '@/lib/quotes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  Target,
  Zap,
  Sparkles,
} from 'lucide-react';

export function DailyChecklist() {
  const { user } = useCurrentUser();
  const { data: goals, isLoading } = useUserGoals(user?.pubkey);
  const { mutate: publishEvent, isPending } = useNostrPublish();
  const [checkedInIds, setCheckedInIds] = useState<Set<string>>(new Set());
  const [lastQuote, setLastQuote] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  if (!user) return null;

  const activeGoals = goals?.filter((g) => g.goal.status === 'active') ?? [];
  const today = new Date();
  const todayKey = formatDateKey(today);
  const todayDow = today.getDay();

  // Goals due today
  const dueToday = activeGoals.filter(({ goal }) => goal.days.includes(todayDow));

  // Count completed today
  const completedToday = dueToday.filter(({ event }) => checkedInIds.has(event.id));

  const handleCheckin = (goalEvent: NostrEvent, goal: any, pubkey: string) => {
    if (!user || !checkRateLimit().allowed) return;

    const ref = buildGoalRef(pubkey, goal.id);

    publishEvent(
      {
        kind: CHECKIN_KIND,
        content: '',
        tags: [
          ['a', ref],
          ['date', todayKey],
          ['duration', `${goal.target} ${goal.unit}`],
          ['t', goal.categories[0] ?? 'meditation'],
        ],
      },
      {
        onSuccess: () => {
          setCheckedInIds((prev) => new Set(prev).add(goalEvent.id));
          if (completedToday.length + 1 >= dueToday.length) {
            setLastQuote(getRandomQuote());
          }
        },
      },
    );
  };

  if (isLoading) {
    return (
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <Skeleton className="h-5 w-36" />
        </CardHeader>
        <CardContent className="space-y-2">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-8 w-full" />
          ))}
        </CardContent>
      </Card>
    );
  }

  if (dueToday.length === 0) {
    if (activeGoals.length === 0) return null;

    return (
      <Card className="mb-6 border-dashed">
        <CardContent className="py-4 text-center">
          <Sparkles className="h-5 w-5 mx-auto text-muted-foreground mb-1" />
          <p className="text-sm text-muted-foreground">
            Nothing due today. {activeGoals.length} goal{activeGoals.length > 1 ? 's' : ''} active, but not scheduled for {today.toLocaleDateString('en-US', { weekday: 'long' })}.
          </p>
        </CardContent>
      </Card>
    );
  }

  const allDone = completedToday.length >= dueToday.length;

  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <Target className="h-4 w-4 text-emerald-500" />
            Today · {todayKey}
          </CardTitle>
          <div className="flex items-center gap-2">
            {allDone && (
              <Badge variant="default" className="text-[10px] gap-1 bg-emerald-500">
                <CheckCircle2 className="h-3 w-3" />
                All done
              </Badge>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              {collapsed ? `${dueToday.length} goals` : 'collapse'}
            </button>
          </div>
        </div>
      </CardHeader>

      {!collapsed && (
        <CardContent className="space-y-1">
          {dueToday.map(({ goal, event }) => {
            const isChecked = checkedInIds.has(event.id);
            return (
              <div
                key={event.id}
                className={`flex items-center gap-3 py-2 px-2 rounded-md transition-colors min-h-[44px] ${
                  isChecked ? 'opacity-60' : 'hover:bg-muted/50'
                }`}
              >
                <button
                  onClick={() => !isChecked && handleCheckin(event, goal, event.pubkey)}
                  disabled={isChecked || isPending}
                  className="shrink-0"
                >
                  {isChecked ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground hover:text-emerald-500 transition-colors" />
                  )}
                </button>

                <Link
                  to={`/goal/${event.pubkey}/${goal.id}`}
                  className="flex-1 min-w-0"
                >
                  <p className="text-sm truncate">{goal.title}</p>
                  <p className="text-[10px] text-muted-foreground">
                    {goal.target} {goal.unit}
                    {goal.pledgeMsats > 0 && (
                      <span className="ml-2 inline-flex items-center gap-0.5">
                        <Zap className="h-2.5 w-2.5" />
                        {formatSats(goal.pledgeMsats)}
                      </span>
                    )}
                  </p>
                </Link>

                {isChecked && (
                  <span className="text-[10px] text-emerald-500 font-medium shrink-0">
                    ✓
                  </span>
                )}
              </div>
            );
          })}

          {lastQuote && allDone && (
            <div className="mt-3 p-2 rounded-lg bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 border border-emerald-500/20">
              <p className="text-[11px] text-muted-foreground italic text-center">
                "{lastQuote}"
              </p>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}
