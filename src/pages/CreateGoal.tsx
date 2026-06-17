import { useSeoMeta } from '@unhead/react';
import { Link } from 'react-router-dom';
import { GoalForm } from '@/components/GoalForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LoginArea } from '@/components/auth/LoginArea';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Brain } from 'lucide-react';

export function CreateGoal() {
  useSeoMeta({
    title: 'Create a Goal — MindfulSats',
    description: 'Set a new meditation goal with accountability deposits on Nostr.',
  });

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

        <GoalForm />
      </div>
    </div>
  );
}
