// "Yaz və Yoxla" oyununun saf məntiqi — state saxlamır, komponentlərdən çağırılır.
import type { VocabSearchEntry } from '@/lib/types';

export type GameWord = VocabSearchEntry;

export type GameDirection = 'en-az' | 'az-en';

export type GameScope =
  | { type: 'overall' }
  | { type: 'category'; slug: string; titleAz: string };

/** lib/vocabulary-highscores.ts-in gözlədiyi scope formatına çevirir. */
export function gameScopeToHighScoreScope(
  scope: GameScope
): 'overall' | { category: string } {
  return scope.type === 'overall' ? 'overall' : { category: scope.slug };
}

function normalizeAnswer(text: string): string {
  return text.trim().toLowerCase();
}

export function checkAnswer(userInput: string, correctAnswer: string): boolean {
  return normalizeAnswer(userInput) === normalizeAnswer(correctAnswer);
}

/** İstiqamətə görə göstərilən sual sözü. */
export function getPrompt(word: GameWord, direction: GameDirection): string {
  return direction === 'en-az' ? word.word : word.translation;
}

/** İstiqamətə görə gözlənilən düzgün cavab. */
export function getCorrectAnswer(word: GameWord, direction: GameDirection): string {
  return direction === 'en-az' ? word.translation : word.word;
}

/** Fisher-Yates qarışdırma — orijinal massivi dəyişmir. */
export function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
