import { useSeoMeta } from '@unhead/react';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useGoalFeed } from '@/hooks/useGoals';
import { GoalCard, GoalCardSkeleton } from '@/components/GoalCard';
import { LoginArea } from '@/components/auth/LoginArea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import {
  Sparkles,
  Target,
  Flame,
  Heart,
  Brain,
  Zap,
  Trophy,
  Leaf,
  Users,
} from 'lucide-react';

const CATEGORIES = [
  { value: 'all', label: 'All Goals', icon: Target },
  { value: 'meditation', label: 'Meditation', icon: Brain },
  { value: 'mindfulness', label: 'Mindfulness', icon: Leaf },
  { value: 'exercise', label: 'Exercise', icon: Flame },
  { value: 'yoga', label: 'Yoga', icon: Heart },
  { value: 'journaling', label: 'Journaling', icon: Sparkles },
  { value: 'sleep', label: 'Sleep', icon: Zap },
];

const Index = () => {
  const { user } = useCurrentUser();
  const [activeCategory, setActiveCategory] = useState('all');
  const category = activeCategory === 'all' ? undefined : activeCategory;
  const { data: goals, isLoading } = useGoalFeed(category);

  useSeoMeta({
    title: 'MindfulSats — Meditation Accountability on Nostr',
    description: 'Set meditation goals, track your progress, and put sats on the line. Build better habits with the power of Nostr and Bitcoin.',
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />

        <div className="container max-w-5xl mx-auto px-4 py-12 md:py-20 relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">MindfulSats</span>
            </div>
            <div className="flex items-center gap-3">
              {user && (
                <Button asChild variant="ghost" size="sm" className="gap-1">
                  <Link to="/my-goals">
                    <Target className="h-4 w-4" />
                    My Goals
                  </Link>
                </Button>
              )}
              <LoginArea className="max-w-44" />
            </div>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Build Better Habits
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                With Accountability
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Set meditation goals, track your daily progress, and put sats on the line.
              Powered by Nostr for true ownership of your wellness journey.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link to="/create">
                  <Sparkles className="h-4 w-4" />
                  Create a Goal
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/my-goals">
                  <Target className="h-4 w-4" />
                  My Goals
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* How it Works */}
      <section className="container max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">How It Works</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Three simple steps to build lasting habits with real accountability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-dashed">
            <CardContent className="pt-6 text-center">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="font-semibold mb-2">Set Your Goal</h3>
              <p className="text-sm text-muted-foreground">
                Choose what you want to achieve. Meditate 10 minutes daily, journal every morning, or exercise 3 times a week.
              </p>
            </CardContent>
          </Card>

          <Card className="border-dashed">
            <CardContent className="pt-6 text-center">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="font-semibold mb-2">Pledge Sats</h3>
              <p className="text-sm text-muted-foreground">
                Put skin in the game. Pledge Lightning sats you'll lose if you don't stay consistent. Real stakes, real results.
              </p>
            </CardContent>
          </Card>

          <Card className="border-dashed">
            <CardContent className="pt-6 text-center">
              <div className="h-12 w-12 rounded-xl bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                <Flame className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="font-semibold mb-2">Check In Daily</h3>
              <p className="text-sm text-muted-foreground">
                Track your progress each day. Build streaks, earn accountability, and watch your habits transform.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Goals Feed */}
      <section className="container max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Users className="h-5 w-5" />
              Community Goals
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              See what others are working on. Get inspired.
            </p>
          </div>
          <Button asChild variant="ghost" size="sm" className="gap-1">
            <Link to="/create">
              <Sparkles className="h-4 w-4" />
              Start Yours
            </Link>
          </Button>
        </div>

        {/* Category tabs */}
        <div className="mb-6 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                    activeCategory === cat.value
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Goals grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <GoalCardSkeleton key={i} />
            ))}
          </div>
        ) : goals && goals.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {goals.map(({ goal, event }) => (
              <GoalCard
                key={event.id}
                goal={goal}
                event={event}
              />
            ))}
          </div>
        ) : (
          <Card className="border-dashed">
            <CardContent className="py-12 px-8 text-center">
              <Target className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground max-w-sm mx-auto">
                No goals found in this category yet. Be the first to create one!
              </p>
              <Button asChild variant="outline" className="mt-4 gap-2">
                <Link to="/create">
                  <Sparkles className="h-4 w-4" />
                  Create a Goal
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Brain className="h-4 w-4" />
              <span>MindfulSats — Built on Nostr</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/leaderboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                <Trophy className="h-3 w-3" />
                Leaderboard
              </Link>
              <a
                href="https://shakespeare.diy/clone?url=https%3A%2F%2Fgithub.com%2FTonyNakamoto%2Fwellness"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://shakespeare.diy/badge.svg"
                  alt="Edit with Shakespeare"
                  style={{ height: 'auto' }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
