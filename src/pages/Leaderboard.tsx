import { Link } from 'react-router-dom';
import { nip19 } from 'nostr-tools';
import { useState } from 'react';
import { useSeoMeta } from '@unhead/react';
import { useLeaderboard, type LeaderboardEntry } from '@/hooks/useLeaderboard';
import { useAuthor } from '@/hooks/useAuthor';
import { formatSats } from '@/lib/goals';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { LoginArea } from '@/components/auth/LoginArea';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  ArrowLeft,
  Trophy,
  Medal,
  Target,
  Heart,
  CheckCircle2,
  XCircle,
  Brain,
} from 'lucide-react';

type Tab = 'completed' | 'donated' | 'goals';

const TAB_LABELS: { key: Tab; label: string; icon: typeof CheckCircle2 }[] = [
  { key: 'completed', label: 'Completions', icon: CheckCircle2 },
  { key: 'donated', label: 'Sats Donated', icon: Heart },
  { key: 'goals', label: 'Most Goals', icon: Target },
];

function UserRow({ entry, rank, tab }: { entry: LeaderboardEntry; rank: number; tab: Tab }) {
  const author = useAuthor(entry.pubkey);
  const metadata = author.data?.metadata;
  const npub = nip19.npubEncode(entry.pubkey);
  const displayName = metadata?.display_name || metadata?.name || npub.slice(0, 12) + '...';
  const avatarUrl = metadata?.picture;

  const rankIcon = rank === 1
    ? <Trophy className="h-5 w-5 text-amber-500" />
    : rank === 2
      ? <Medal className="h-5 w-5 text-slate-400" />
      : rank === 3
        ? <Medal className="h-5 w-5 text-amber-700" />
        : <span className="text-sm font-mono text-muted-foreground w-5 text-center">{rank}</span>;

  // Highlight the active ranking metric
  const highlightValue = tab === 'completed'
    ? `${entry.completionRate}% (${entry.completedGoals}/${entry.completedGoals + entry.failedGoals})`
    : tab === 'donated'
      ? formatSats(entry.totalSatsDonated * 1000)
      : String(entry.totalGoals);

  return (
    <Link
      to={`/${npub}`}
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
    >
      <div className="w-8 flex justify-center shrink-0">
        {rankIcon}
      </div>

      <Avatar className="h-10 w-10 shrink-0">
        <AvatarImage src={avatarUrl} alt={displayName} />
        <AvatarFallback>{displayName[0]}</AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium truncate">{displayName}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-0.5">
            <Target className="h-3 w-3" />
            {entry.totalGoals} goals
          </span>
          <span className="flex items-center gap-0.5">
            <CheckCircle2 className="h-3 w-3 text-emerald-500" />
            {entry.completedGoals}
          </span>
          <span className="flex items-center gap-0.5">
            <XCircle className="h-3 w-3 text-destructive" />
            {entry.failedGoals}
          </span>
        </div>
      </div>

      <div className="text-right shrink-0">
        <span className="text-sm font-semibold">{highlightValue}</span>
        {tab !== 'donated' && entry.totalSatsDonated > 0 && (
          <div className="text-[10px] text-rose-500 flex items-center gap-0.5 justify-end">
            <Heart className="h-3 w-3" />
            {formatSats(entry.totalSatsDonated * 1000)}
          </div>
        )}
      </div>
    </Link>
  );
}

export function Leaderboard() {
  const { data: entries, isLoading } = useLeaderboard();
  const [tab, setTab] = useState<Tab>('completed');

  const sorted = entries
    ? [...entries].sort((a, b) => {
        if (tab === 'completed') {
          return b.completionRate - a.completionRate || b.completedGoals - a.completedGoals;
        }
        if (tab === 'donated') {
          return b.totalSatsDonated - a.totalSatsDonated || b.totalGoals - a.totalGoals;
        }
        return b.totalGoals - a.totalGoals || b.completedGoals - a.completedGoals;
      })
    : [];

  useSeoMeta({
    title: 'Leaderboard — MindfulSats',
    description: 'Top accountability champions. See who\'s crushing their goals and donating the most sats.',
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto px-4 py-8">
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
              <h1 className="text-xl font-bold">Leaderboard</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LoginArea className="max-w-36" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-muted rounded-lg p-1">
          {TAB_LABELS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-medium rounded-md transition-colors ${
                tab === key
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </div>

        {/* Stats overview */}
        {entries && entries.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            <Card>
              <CardContent className="pt-4 text-center">
                <Trophy className="h-5 w-5 mx-auto text-amber-500 mb-1" />
                <p className="text-2xl font-bold">{entries.length}</p>
                <p className="text-xs text-muted-foreground">Participants</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 text-center">
                <Target className="h-5 w-5 mx-auto text-emerald-500 mb-1" />
                <p className="text-2xl font-bold">
                  {entries.reduce((sum, e) => sum + e.totalGoals, 0)}
                </p>
                <p className="text-xs text-muted-foreground">Total Goals</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4 text-center">
                <Heart className="h-5 w-5 mx-auto text-rose-500 mb-1" />
                <p className="text-2xl font-bold">
                  {formatSats(entries.reduce((sum, e) => sum + e.totalSatsDonated, 0) * 1000)}
                </p>
                <p className="text-xs text-muted-foreground">Donated</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Leaderboard list */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" />
              Top Accountability Champions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="p-4 space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1 space-y-1.5">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
              </div>
            ) : sorted && sorted.length > 0 ? (
              <div className="divide-y">
                {sorted.map((entry, i) => (
                  <UserRow key={entry.pubkey} entry={entry} rank={i + 1} tab={tab} />
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <Trophy className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground max-w-sm mx-auto">
                  No goals found yet. Create the first goal and be the pioneer on the leaderboard!
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
