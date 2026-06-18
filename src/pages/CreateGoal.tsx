import { useSeoMeta } from '@unhead/react';
import { Link, useNavigate } from 'react-router-dom';
import { useSeoMeta } from '@unhead/react';
import { GoalForm } from '@/components/GoalForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import { TEMPLATES } from '@/lib/templates';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { GOAL_KIND } from '@/lib/goals';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { LoginArea } from '@/components/auth/LoginArea';
import { ArrowLeft, Brain, Zap, Sparkles } from 'lucide-react';

export function CreateGoal() {
  const navigate = useNavigate();
  const { user } = useCurrentUser();
  const { mutate: publishEvent } = useNostrPublish();

  useSeoMeta({
    title: 'Create a Goal — MindfulSats',
    description: 'Set a new meditation goal with accountability deposits on Nostr.',
  });

  const applyTemplate = (t: typeof TEMPLATES[number]) => {
    if (!user) return;

    const now = Math.floor(Date.now() / 1000);
    const dTag = `goal-${now}-${Math.random().toString(36).slice(2, 8)}`;
    const allDaysSelected = t.days.length === 7;
    const daysTag = allDaysSelected ? undefined : t.days.join(',');

    const tags: string[][] = [
      ['d', dTag],
      ['alt', 'Meditation goal with accountability deposit'],
      ['title', t.title],
      ['t', t.category],
      ['t', 'mental-health'],
      ['frequency', allDaysSelected ? 'daily' : 'custom'],
      ['target', String(t.target)],
      ['unit', t.unit],
      ['duration_days', String(t.durationDays)],
      ['pledge_msats', String(t.pledgeSats * 1000)],
      ['start_date', String(now)],
      ['status', 'active'],
    ];

    if (daysTag) tags.push(['days', daysTag]);

    publishEvent(
      { kind: GOAL_KIND, content: '', tags, created_at: now },
      { onSuccess: (event) => navigate(`/goal/${event.pubkey}/${dTag}`) },
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-lg mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon">
              <Link to="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold">Create Goal</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LoginArea className="max-w-36" />
          </div>
        </div>

        {/* Quick template dropdown */}
        <div className="mb-6 flex items-center gap-2">
          <Select onValueChange={(i) => applyTemplate(TEMPLATES[parseInt(i)])}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Quick start: pick a template..." />
            </SelectTrigger>
            <SelectContent>
              {TEMPLATES.map((t, i) => (
                <SelectItem key={i} value={String(i)}>
                  <span className="flex items-center gap-2">
                    <span>{t.title}</span>
                    <span className="text-muted-foreground text-xs">
                      · {t.durationDays}d
                      {t.pledgeSats > 0 && ` · ${t.pledgeSats >= 1000 ? `${t.pledgeSats / 1000}k` : t.pledgeSats} sats`}
                    </span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <GoalForm />
      </div>
    </div>
  );
}
