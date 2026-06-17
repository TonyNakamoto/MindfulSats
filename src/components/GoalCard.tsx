import { Link } from 'react-router-dom';
import { nip19 } from 'nostr-tools';
import type { NostrEvent } from '@nostrify/nostrify';
import { useAuthor } from '@/hooks/useAuthor';
import { type GoalData, formatSats } from '@/lib/goals';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Progress } from '@/components/ui/progress';
import { Target, Clock, Flame, Zap, User as UserIcon } from 'lucide-react';

interface GoalCardProps {
  goal: GoalData;
  event: NostrEvent;
  progress?: {
    percentage: number;
    checkedInDays: number;
    totalDays: number;
    streak: number;
  };
}

export function GoalCard({ goal, event, progress }: GoalCardProps) {
  const author = useAuthor(event.pubkey);
  const metadata = author.data?.metadata;
  const npub = event.pubkey ? nip19.npubEncode(event.pubkey) : '';
  const isLoading = author.isLoading;

  const displayName = metadata?.display_name || metadata?.name || (isLoading ? '...' : 'Anonymous');
  const avatarUrl = metadata?.picture;
  const statusVariant =
    goal.status === 'completed' ? 'default' :
    goal.status === 'failed' ? 'destructive' :
    goal.status === 'cancelled' ? 'secondary' :
    'outline';

  const startDate = new Date(goal.startDate * 1000);
  const endDate = new Date((goal.startDate + goal.durationDays * 86400) * 1000);

  return (
    <Link to={`/goal/${event.pubkey}/${goal.id}`} className="block group">
      <Card className="hover:border-primary/50 transition-colors duration-200 h-full">
        <CardHeader className="pb-1.5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <Avatar className="h-8 w-8 shrink-0">
                <AvatarImage src={avatarUrl} alt={displayName} />
                <AvatarFallback className="text-[10px]">
                  {avatarUrl ? displayName[0] : <UserIcon className="h-3.5 w-3.5 text-muted-foreground" />}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="text-sm font-medium truncate leading-tight">{displayName}</p>
                <p className="text-[11px] text-muted-foreground leading-tight">
                  {startDate.toLocaleDateString()} – {endDate.toLocaleDateString()}
                </p>
              </div>
            </div>
            <Badge variant={statusVariant} className="shrink-0 capitalize text-[10px] px-1.5 py-0">
              {goal.status}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-2">
          <h3 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
            {goal.title}
          </h3>
          {goal.description && (
            <p className="text-xs text-muted-foreground line-clamp-2">
              {goal.description}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5">
            <Badge variant="secondary" className="text-[10px] gap-1 px-1.5 py-0">
              <Target className="h-3 w-3" />
              {goal.target} {goal.unit}
            </Badge>
            <Badge variant="secondary" className="text-[10px] gap-1 px-1.5 py-0">
              <Clock className="h-3 w-3" />
              {goal.days.length === 7 ? 'daily' : `${goal.days.length}d/wk`} · {goal.durationDays}d
            </Badge>
            {goal.pledgeMsats > 0 && (
              <Badge variant="secondary" className="text-[10px] gap-1 px-1.5 py-0">
                <Zap className="h-3 w-3" />
                {formatSats(goal.pledgeMsats)}
              </Badge>
            )}
          </div>

          {progress && goal.status === 'active' && (
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Flame className="h-3 w-3 text-orange-500" />
                  {progress.streak}d streak
                </span>
                <span>
                  {progress.checkedInDays}/{progress.totalDays}
                </span>
              </div>
              <Progress value={progress.percentage} className="h-1" />
            </div>
          )}

          {goal.categories.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {goal.categories.map((cat) => (
                <Badge key={cat} variant="outline" className="text-[9px] px-1 py-0 leading-tight">
                  {cat}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}

export function GoalCardSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-1.5">
        <div className="flex items-center gap-2.5">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="space-y-1">
            <Skeleton className="h-3.5 w-20" />
            <Skeleton className="h-2.5 w-28" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <div className="flex gap-1.5">
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-14 rounded-full" />
          <Skeleton className="h-4 w-20 rounded-full" />
        </div>
        <Skeleton className="h-1 w-full" />
      </CardContent>
    </Card>
  );
}
