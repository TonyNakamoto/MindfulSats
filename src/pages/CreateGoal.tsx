import { useSeoMeta } from '@unhead/react';
import { Link, useNavigate } from 'react-router-dom';
import { useSeoMeta } from '@unhead/react';
import { GoalForm } from '@/components/GoalForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import { TEMPLATES } from '@/lib/templates';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { GOAL_KIND } from '@/lib/goals';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

        {/* Templates */}
        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Quick Templates
            </CardTitle>
            <CardDescription>One tap to start. You can customize everything after.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {TEMPLATES.map((t, i) => (
              <button
                key={i}
                onClick={() => applyTemplate(t)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border bg-background hover:border-primary/50 hover:text-primary transition-colors"
              >
                {t.title}
                <Badge variant="secondary" className="text-[9px] px-1 py-0">
                  {t.target} {t.unit}
                </Badge>
                {t.pledgeSats > 0 && (
                  <span className="text-[9px] text-amber-500 flex items-center gap-0.5">
                    <Zap className="h-2.5 w-2.5" />
                    {t.pledgeSats >= 1000 ? `${t.pledgeSats / 1000}k` : t.pledgeSats}
                  </span>
                )}
              </button>
            ))}
          </CardContent>
        </Card>

        <GoalForm />
      </div>
    </div>
  );
}
