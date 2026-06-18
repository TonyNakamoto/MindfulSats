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
    title: 'Meditate',
    category: 'meditation',
    target: 10,
    unit: 'minutes',
    days: [1, 2, 3, 4, 5, 6, 0],
    durationDays: 7,
    pledgeSats: 1000,
  },
  {
    title: 'Exercise',
    category: 'exercise',
    target: 1,
    unit: 'sessions',
    days: [1, 3, 5],
    durationDays: 14,
    pledgeSats: 5000,
  },
  {
    title: 'Journal',
    category: 'journaling',
    target: 5,
    unit: 'minutes',
    days: [1, 2, 3, 4, 5],
    durationDays: 14,
    pledgeSats: 2000,
  },
  {
    title: 'Stay sober',
    category: 'sobriety',
    target: 1,
    unit: 'sessions',
    days: [1, 2, 3, 4, 5, 6, 0],
    durationDays: 30,
    pledgeSats: 10000,
  },
  {
    title: 'Yoga',
    category: 'yoga',
    target: 1,
    unit: 'sessions',
    days: [2, 4],
    durationDays: 21,
    pledgeSats: 5000,
  },
  {
    title: 'Drink water',
    category: 'hydration',
    target: 8,
    unit: 'glasses',
    days: [1, 2, 3, 4, 5, 6, 0],
    durationDays: 7,
    pledgeSats: 1000,
  },
  {
    title: 'Gratitude',
    category: 'gratitude',
    target: 3,
    unit: 'minutes',
    days: [1, 2, 3, 4, 5, 6, 0],
    durationDays: 7,
    pledgeSats: 1000,
  },
];
