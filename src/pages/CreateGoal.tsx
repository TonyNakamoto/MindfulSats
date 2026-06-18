import { useSeoMeta } from '@unhead/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSeoMeta } from '@unhead/react';
import { GoalForm } from '@/components/GoalForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import { TEMPLATES, type GoalTemplate } from '@/lib/templates';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LoginArea } from '@/components/auth/LoginArea';
import { ArrowLeft, Brain } from 'lucide-react';

export function CreateGoal() {
  const [selectedTemplate, setSelectedTemplate] = useState<GoalTemplate | undefined>();

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

        {/* Quick template dropdown */}
        <div className="mb-6">
          <Select onValueChange={(i) => setSelectedTemplate(TEMPLATES[parseInt(i)])}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Quick start: pick a template to pre-fill..." />
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

        <GoalForm prefill={selectedTemplate} />
      </div>
    </div>
  );
}
