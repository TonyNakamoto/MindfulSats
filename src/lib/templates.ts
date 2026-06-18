/** Quick-start goal templates for one-tap creation */

export interface GoalTemplate {
  title: string;
  category: string;
  target: number;
  unit: string;
  days: number[];
  durationDays: number;
  pledgeSats: number;
}

export const TEMPLATES: GoalTemplate[] = [
  {
    title: 'Meditate 10 min daily',
    category: 'meditation',
    target: 10,
    unit: 'minutes',
    days: [1, 2, 3, 4, 5, 6, 0], // all days
    durationDays: 7,
    pledgeSats: 1000,
  },
  {
    title: 'Exercise 3x per week',
    category: 'exercise',
    target: 1,
    unit: 'sessions',
    days: [1, 3, 5], // MWF
    durationDays: 14,
    pledgeSats: 5000,
  },
  {
    title: 'Journal every morning',
    category: 'journaling',
    target: 5,
    unit: 'minutes',
    days: [1, 2, 3, 4, 5], // weekdays
    durationDays: 14,
    pledgeSats: 2000,
  },
  {
    title: 'Read 10 pages daily',
    category: 'reading',
    target: 10,
    unit: 'pages',
    days: [1, 2, 3, 4, 5, 6, 0],
    durationDays: 7,
    pledgeSats: 1000,
  },
  {
    title: 'Stay sober today',
    category: 'sobriety',
    target: 1,
    unit: 'sessions',
    days: [1, 2, 3, 4, 5, 6, 0],
    durationDays: 30,
    pledgeSats: 10000,
  },
  {
    title: 'Yoga 2x per week',
    category: 'yoga',
    target: 1,
    unit: 'sessions',
    days: [2, 4], // Tue, Thu
    durationDays: 21,
    pledgeSats: 5000,
  },
  {
    title: 'Gratitude journal daily',
    category: 'gratitude',
    target: 3,
    unit: 'minutes',
    days: [1, 2, 3, 4, 5, 6, 0],
    durationDays: 7,
    pledgeSats: 1000,
  },
  {
    title: 'Sleep by 10pm weekdays',
    category: 'sleep',
    target: 1,
    unit: 'sessions',
    days: [1, 2, 3, 4, 5],
    durationDays: 14,
    pledgeSats: 5000,
  },
  {
    title: 'Drink 8 glasses daily',
    category: 'hydration',
    target: 8,
    unit: 'glasses',
    days: [1, 2, 3, 4, 5, 6, 0],
    durationDays: 7,
    pledgeSats: 1000,
  },
  {
    title: 'Digital detox weekends',
    category: 'digital-detox',
    target: 1,
    unit: 'sessions',
    days: [6, 0], // Sat, Sun
    durationDays: 14,
    pledgeSats: 5000,
  },
];
