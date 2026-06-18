import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { useWallet } from '@/hooks/useWallet';
import { GOAL_KIND } from '@/lib/goals';
import { type GoalTemplate } from '@/lib/templates';
import {
  moderateText,
  findUnsafeUrl,
  checkRateLimit,
  isDuplicateGoal,
  enforceLength,
} from '@/lib/moderation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { WalletModal } from '@/components/WalletModal';
import { Separator } from '@/components/ui/separator';
import {
  Target,
  Clock,
  Zap,
  Calendar,
  Hash,
  AlignLeft,
  Sparkles,
  Wallet,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

const CATEGORIES = [
  'meditation',
  'mindfulness',
  'exercise',
  'yoga',
  'reading',
  'journaling',
  'gratitude',
  'sleep',
  'breathing',
  'digital-detox',
  'hydration',
  'nutrition',
  'sobriety',
] as const;


const UNITS = [
  { value: 'minutes', label: 'Minutes' },
  { value: 'hours', label: 'Hours' },
  { value: 'sessions', label: 'Sessions' },
  { value: 'reps', label: 'Reps' },
  { value: 'steps', label: 'Steps' },
  { value: 'pages', label: 'Pages' },
  { value: 'glasses', label: 'Glasses' },
] as const;

const FREQUENCIES = [
  { value: 'daily', label: 'Every Day', desc: 'Check in once per day' },
  { value: 'weekly', label: 'N Times Per Week', desc: 'Check in N times in any 7 days' },
] as const;

export interface GoalFormData {
  title: string;
  description: string;
  category: string;
  target: number;
  unit: string;
  durationDays: number;
  pledgeSats: number;
}

export function GoalForm({ prefill }: { prefill?: GoalTemplate }) {
  const { user } = useCurrentUser();
  const { mutate: publishEvent, isPending } = useNostrPublish();
  const { hasNWC, webln } = useWallet();
  const navigate = useNavigate();
  // Only consider wallet connected if user is logged in AND has an active NWC connection
  const hasWallet = !!user && hasNWC;

  // Day selection: array of day indices (0=Sun..6=Sat), default none
  const [selectedDays, setSelectedDays] = useState<number[]>(prefill?.days ?? []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<GoalFormData>({
    defaultValues: {
      title: '',
      description: '',
      category: 'meditation',
      target: 10,
      unit: 'minutes',
      durationDays: 7,
      pledgeSats: 0,
    },
  });

  const selectedCategory = watch('category');
  const pledgeSats = watch('pledgeSats');
  const target = watch('target');
  const unit = watch('unit');
  const durationDays = watch('durationDays');

  // Pre-fill form when a template is selected
  useEffect(() => {
    if (!prefill) return;
    setValue('title', prefill.title);
    setValue('category', prefill.category);
    setValue('target', prefill.target);
    setValue('unit', prefill.unit);
    setValue('durationDays', prefill.durationDays);
    setValue('pledgeSats', prefill.pledgeSats);
    setSelectedDays(prefill.days);
  }, [prefill?.title]); // Only re-run when template title changes

  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayLabelsShort = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
  const toggleDay = (day: number) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day].sort()
    );
  };

  const onSubmit = async (data: GoalFormData) => {
    if (!user) return;

    if (selectedDays.length === 0) {
      return; // Form won't submit without days, but button is disabled anyway
    }

    // ─── Defense checks ────────────────────────────────
    // 1. Length limits
    const lenCheck = enforceLength(data.title, data.description);
    if (!lenCheck.valid) return;

    // 2. Rate limit
    const rateCheck = checkRateLimit();
    if (!rateCheck.allowed) return;

    // 3. Duplicate detection
    if (isDuplicateGoal(data.title)) return;

    // 4. Profanity / harm filter
    const titleCheck = moderateText(data.title);
    if (!titleCheck.passed) return;
    const descCheck = moderateText(data.description);
    if (!descCheck.passed) return;

    // 5. Unsafe URLs
    const unsafeUrl = findUnsafeUrl(data.description);
    if (unsafeUrl) return;
    // ─── End defense checks ────────────────────────────

    const now = Math.floor(Date.now() / 1000);
    const dTag = `goal-${now}-${Math.random().toString(36).slice(2, 8)}`;
    const pledgeMsats = data.pledgeSats * 1000;

    // Determine frequency from day selection
    const allDaysSelected = selectedDays.length === 7;
    const freqValue = allDaysSelected ? 'daily' : 'custom';
    const daysTag = allDaysSelected ? undefined : selectedDays.join(',');

    const tags: string[][] = [
      ['d', dTag],
      ['alt', 'Meditation goal with accountability deposit'],
      ['title', data.title],
      ['t', data.category],
    ];

    if (daysTag) {
      tags.push(['days', daysTag]);
    }

    if (data.description) {
      tags.push(['description', data.description]);
    }

    publishEvent(
      {
        kind: GOAL_KIND,
        content: '',
        tags,
        created_at: now,
      },
      {
        onSuccess: (event) => {
          navigate(`/goal/${event.pubkey}/${dTag}`);
        },
      },
    );
  };

  if (!user) {
    return (
      <Card className="border-dashed">
        <CardContent className="py-12 text-center">
          <Sparkles className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground max-w-sm mx-auto">
            Sign in to create your first meditation goal and start tracking your progress.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Goal Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Goal Details
          </CardTitle>
          <CardDescription>
            Define what you want to achieve and how you'll track it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Goal Title</Label>
            <Input
              id="title"
              placeholder="e.g., Meditate 10 minutes every morning"
              {...register('title', { required: 'Title is required' })}
              aria-invalid={!!errors.title}
            />
            {errors.title && (
              <p className="text-sm text-destructive">{errors.title.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="flex items-center gap-1">
              <AlignLeft className="h-3.5 w-3.5" />
              Description (optional)
            </Label>
            <Textarea
              id="description"
              placeholder="Why is this goal important to you?"
              rows={3}
              {...register('description')}
            />
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setValue('category', cat)}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:border-primary/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Target Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="h-5 w-5" />
            Target
          </CardTitle>
          <CardDescription>
            Set your target amount, unit, frequency, and duration.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="target">Amount</Label>
              <Input
                id="target"
                type="number"
                min={1}
                {...register('target', {
                  required: 'Target is required',
                  min: { value: 1, message: 'Must be at least 1' },
                  valueAsNumber: true,
                })}
                aria-invalid={!!errors.target}
              />
              {errors.target && (
                <p className="text-sm text-destructive">{errors.target.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="unit">Unit</Label>
              <Select onValueChange={(v) => setValue('unit', v)} value={unit}>
                <SelectTrigger id="unit">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  {UNITS.map((u) => (
                    <SelectItem key={u.value} value={u.value}>
                      {u.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Day picker */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Which days?</Label>
              <button
                type="button"
                onClick={() => setSelectedDays([0, 1, 2, 3, 4, 5, 6])}
                className="text-xs text-primary hover:underline"
              >
                Select all days
              </button>
            </div>
            <div className="flex gap-1">
              {dayLabels.map((label, i) => {
                const isSelected = selectedDays.includes(i);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggleDay(i)}
                    className={`flex-1 py-2 text-xs font-medium rounded-md border transition-colors ${
                      isSelected
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-muted-foreground border-border hover:border-primary/40'
                    }`}
                    title={label}
                  >
                    <span className="hidden sm:inline">{label}</span>
                    <span className="sm:hidden">{dayLabelsShort[i]}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              {selectedDays.length === 7
                ? 'Every day'
                : selectedDays.length === 0
                  ? 'No days selected'
                  : `${selectedDays.length} day${selectedDays.length > 1 ? 's' : ''} per week · ${dayLabels.filter((_, i) => selectedDays.includes(i)).join(', ')}`}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="durationDays">Duration (days)</Label>
            <Input
              id="durationDays"
              type="number"
              min={1}
              max={365}
              {...register('durationDays', {
                required: 'Duration is required',
                min: { value: 1, message: 'Must be at least 1 day' },
                max: { value: 365, message: 'Max 365 days' },
                valueAsNumber: true,
              })}
              aria-invalid={!!errors.durationDays}
            />
            {errors.durationDays && (
              <p className="text-sm text-destructive">{errors.durationDays.message}</p>
            )}
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground bg-secondary/50 rounded-lg p-3">
            <Calendar className="h-4 w-4 shrink-0" />
            <span>
              {selectedDays.length === 0
                ? 'Select days above'
                : `${target || '?'} ${unit || 'units'} on ${selectedDays.length} day${selectedDays.length > 1 ? 's' : ''} per week for ${durationDays || '?'} days`}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Pledge */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Accountability Pledge
          </CardTitle>
          <CardDescription>
            Put skin in the game. Pledge sats you'll lose if you don't reach your goal.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!hasWallet && (
            <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-50 border border-amber-200 dark:bg-amber-950 dark:border-amber-800">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-amber-800 dark:text-amber-200">
                  No wallet connected
                </p>
                <p className="text-amber-700 dark:text-amber-300">
                  Connect one to enable automatic Lightning donations. You can still pledge — it'll be a public commitment.
                </p>
              </div>
              <WalletModal>
                <Button variant="outline" size="sm" className="shrink-0 gap-1">
                  <Wallet className="h-3.5 w-3.5" />
                  Setup
                </Button>
              </WalletModal>
            </div>
          )}

          {hasWallet && (
            <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200 dark:bg-green-950 dark:border-green-800">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0" />
              <div className="text-sm flex-1">
                <p className="font-medium text-green-800 dark:text-green-200">
                  Wallet found
                </p>
                <p className="text-green-700 dark:text-green-300">
                  Your pledge will be publicly visible on Nostr.
                </p>
              </div>
              <WalletModal>
                <Button variant="ghost" size="sm" className="shrink-0 gap-1 text-xs">
                  <Wallet className="h-3 w-3" />
                  Manage
                </Button>
              </WalletModal>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="pledgeSats" className="flex items-center gap-1">
              <Zap className="h-3.5 w-3.5" />
              Pledge Amount (sats)
            </Label>
            <div className="flex gap-2">
              {[0, 1000, 5000, 10000, 50000, 100000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setValue('pledgeSats', amt)}
                  className={`inline-flex items-center rounded-md px-3 py-1.5 text-xs font-medium border transition-colors ${
                    pledgeSats === amt
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:border-primary/50'
                  }`}
                >
                  {amt === 0 ? '0' : amt >= 1000 ? `${amt / 1000}k` : amt}
                </button>
              ))}
            </div>
            <Input
              id="pledgeSats"
              type="number"
              min={0}
              placeholder="Custom amount"
              {...register('pledgeSats', {
                min: { value: 0, message: 'Must be 0 or more' },
                valueAsNumber: true,
              })}
            />
            <p className="text-xs text-muted-foreground">
              This pledge is a public commitment. If you fail your goal, you'll be prompted to send these sats as a donation.
            </p>
          </div>
        </CardContent>
      </Card>

      <Button type="submit" size="lg" className="w-full gap-2" disabled={isPending || selectedDays.length === 0}>
        <Sparkles className="h-4 w-4" />
        {isPending ? 'Creating Goal...' : 'Create Goal'}
      </Button>
    </form>
  );
}
