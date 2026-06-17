import { useSeoMeta } from '@unhead/react';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useUserGoals } from '@/hooks/useGoals';
import { GoalCard, GoalCardSkeleton } from '@/components/GoalCard';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LoginArea } from '@/components/auth/LoginArea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Brain, Sparkles, Target } from 'lucide-react';

export function MyGoals() {
  const { user } = useCurrentUser();
  const { data: goals, isLoading } = useUserGoals(user?.pubkey);

  useSeoMeta({
    title: 'My Goals — MindfulSats',
    description: 'View and manage your meditation goals with accountability deposits.',
  });

  const activeGoals = goals?.filter((g) => g.goal.status === 'active') ?? [];
  const completedGoals = goals?.filter((g) => g.goal.status === 'completed') ?? [];
  const failedGoals = goals?.filter((g) => g.goal.status === 'failed') ?? [];

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl mx-auto px-4 py-8">
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
              <h1 className="text-xl font-bold">My Goals</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="gap-1">
              <Link to="/create">
                <Sparkles className="h-4 w-4" />
                New Goal
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LoginArea className="max-w-36" />
            </div>
          </div>
        </div>

        {!user ? (
          <Card className="border-dashed">
            <CardContent className="py-12 text-center">
              <Target className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground max-w-sm mx-auto mb-4">
                Sign in to view and manage your meditation goals.
              </p>
              <LoginArea className="max-w-44 inline-flex" />
            </CardContent>
          </Card>
        ) : isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <GoalCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {/* Active Goals */}
            {activeGoals.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {activeGoals.length}
                  </Badge>
                  Active Goals
                </h2>
                <div className="grid gap-4">
                  {activeGoals.map(({ goal, event }) => (
                    <GoalCard key={event.id} goal={goal} event={event} />
                  ))}
                </div>
              </section>
            )}

            {/* Completed Goals */}
            {completedGoals.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Badge variant="default" className="text-xs">
                    {completedGoals.length}
                  </Badge>
                  Completed
                </h2>
                <div className="grid gap-4 opacity-75">
                  {completedGoals.map(({ goal, event }) => (
                    <GoalCard key={event.id} goal={goal} event={event} />
                  ))}
                </div>
              </section>
            )}

            {/* Failed Goals */}
            {failedGoals.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Badge variant="destructive" className="text-xs">
                    {failedGoals.length}
                  </Badge>
                  Not Met
                </h2>
                <div className="grid gap-4 opacity-75">
                  {failedGoals.map(({ goal, event }) => (
                    <GoalCard key={event.id} goal={goal} event={event} />
                  ))}
                </div>
              </section>
            )}

            {/* Empty State */}
            {activeGoals.length === 0 && completedGoals.length === 0 && failedGoals.length === 0 && (
              <Card className="border-dashed">
                <CardContent className="py-12 text-center">
                  <Target className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground max-w-sm mx-auto mb-4">
                    You haven't created any goals yet. Start your mindfulness journey today!
                  </p>
                  <Button asChild className="gap-2">
                    <Link to="/create">
                      <Sparkles className="h-4 w-4" />
                      Create Your First Goal
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
