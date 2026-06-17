/** Inspirational quotes about persistence, kaizen, and discipline. Shown on check-in. */

export const QUOTES = [
  // Kaizen / small steps
  "Little by little, a little becomes a lot.",
  "The journey of a thousand miles begins with a single step. — Lao Tzu",
  "Kaizen: small, continuous improvements lead to monumental change.",
  "You do not rise to the level of your goals. You fall to the level of your systems. — James Clear",
  "Success is the sum of small efforts, repeated day in and day out. — Robert Collier",
  "Great things are not done by impulse, but by a series of small things brought together. — Van Gogh",

  // Persistence / discipline
  "Discipline is choosing between what you want now and what you want most.",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Aristotle",
  "The difference between try and triumph is a little umph. — Marvin Phillips",
  "It does not matter how slowly you go as long as you do not stop. — Confucius",
  "Fall seven times, stand up eight. — Japanese proverb",
  "Persistence is the twin sister of excellence. One is a matter of quality; the other, a matter of time.",

  // Mindfulness / meditation
  "The mind is everything. What you think you become. — Buddha",
  "Quiet the mind, and the soul will speak.",
  "Meditation is not about stopping thoughts, but recognizing that we are more than our thoughts.",
  "The present moment is the only moment available to us. — Thich Nhat Hanh",
  "In the middle of difficulty lies opportunity. — Albert Einstein",
  "Almost everything will work again if you unplug it for a few minutes, including you. — Anne Lamott",

  // Accountability / Bitcoin
  "Accountability is the glue that ties commitment to results.",
  "When you put sats on the line, you put skin in the game.",
  "Freedom begins with discipline.",
  "You alone are enough. You have nothing to prove to anybody. — Maya Angelou",
  "What gets measured gets managed. — Peter Drucker",
  "The best time to plant a tree was 20 years ago. The second best time is now. — Chinese proverb",

  // Short & punchy
  "One more day. One more rep. One more minute.",
  "Consistency beats intensity.",
  "Show up. That's 80% of the battle.",
  "Don't break the chain.",
  "Stack small wins.",
  "Today's effort is tomorrow's strength.",
];

export function getRandomQuote(): string {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}
