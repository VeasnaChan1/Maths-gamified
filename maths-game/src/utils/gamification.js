/**
 * Gamification calculations for XP, Levels, and Topic Mastery.
 */

export const LEVEL_THRESHOLDS = [
  0,     // Level 1 starts at 0 XP
  100,   // Level 2
  250,   // Level 3
  450,   // Level 4
  700,   // Level 5
  1000,  // Level 6
  1350,  // Level 7
  1750,  // Level 8
  2200,  // Level 9
  2700,  // Level 10
];

export function getLevelInfo(totalXp) {
  const xp = Math.max(0, totalXp || 0);
  let level = 1;

  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) {
      level = i + 1;
      break;
    }
  }

  const currentThreshold = LEVEL_THRESHOLDS[level - 1] || 0;
  const nextThreshold = LEVEL_THRESHOLDS[level] || (currentThreshold + 500);

  const xpInCurrentLevel = xp - currentThreshold;
  const xpRequiredForNext = nextThreshold - currentThreshold;
  const progressPercent = Math.min(100, Math.round((xpInCurrentLevel / xpRequiredForNext) * 100));

  return {
    level,
    totalXp: xp,
    currentThreshold,
    nextThreshold,
    xpInCurrentLevel,
    xpRequiredForNext,
    progressPercent,
  };
}

/**
 * Calculates XP earned for a question answer.
 * Base XP: 10
 * Speed bonus: up to 5 XP if answered in under 10 seconds (for 20s question)
 * Streak bonus: 15 XP added on every 3rd consecutive correct answer
 */
export function calculateAnswerXp({ isCorrect, timeLeftSeconds = 0, currentStreak = 0 }) {
  if (!isCorrect) return { xp: 0, streakBonus: 0, speedBonus: 0 };

  const base = 10;
  let speedBonus = 0;
  if (timeLeftSeconds >= 12) {
    speedBonus = 5;
  } else if (timeLeftSeconds >= 6) {
    speedBonus = 3;
  }

  const streakBonus = (currentStreak > 0 && currentStreak % 3 === 0) ? 15 : 0;
  const total = base + speedBonus + streakBonus;

  return {
    xp: total,
    base,
    speedBonus,
    streakBonus,
  };
}

/**
 * Derives topic mastery status from recorded topic stats.
 * Returns: { label: 'Not started' | 'Practising' | 'Mastered', badgeClass: string }
 */
export function getTopicMastery(stats) {
  if (!stats || !stats.total || stats.total === 0) {
    return { label: 'Not started', badgeClass: 'mastery-none' };
  }

  const accuracy = stats.correct / stats.total;
  if (stats.correct >= 8 && accuracy >= 0.8) {
    return { label: 'Mastered', badgeClass: 'mastery-mastered' };
  }

  return { label: 'Practising', badgeClass: 'mastery-practising' };
}
