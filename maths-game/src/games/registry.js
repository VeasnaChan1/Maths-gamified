import QuizBlitz from './quiz-blitz/QuizBlitz';

export const GAME_REGISTRY = [
  {
    id: 'quiz-blitz',
    name: 'Quiz Blitz',
    description: 'Fast-paced multiple choice with 3 lives. 20 seconds per question with streak bonuses.',
    durationText: '~3 minutes',
    questionCount: 10,
    component: QuizBlitz,
    isReady: true,
  },
];

export function getGameById(id) {
  return GAME_REGISTRY.find((g) => g.id === id);
}
