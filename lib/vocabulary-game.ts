// "Yaz və Yoxla" oyununun saf məntiqi — state saxlamır, komponentlərdən çağırılır.
import type { VocabSearchEntry } from '@/lib/types';

export type GameWord = VocabSearchEntry & {
  /**
   * Yalnız "ümumi" rejimdə birləşdirilmiş sözlər üçün doldurulur (bax:
   * `mergeDuplicateWordsForOverallMode`). Yalnız görüntüləmə üçündür — hər
   * tərcümə hissəsini onun gəldiyi kateqoriya adı ilə əlaqələndirir. Sıra
   * qorunur və eyni normalizə olunmuş tərcümə təkrar sayılmır.
   */
  mergedTranslationParts?: Array<{ text: string; categoryTitleAz: string }>;
};

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

/**
 * Xam tərcümə mətnini qəbul edilən cavablar massivinə çevirir.
 * "/" alternativ formaları, mötərizə isə əlavə izahı bildirir (nəzərə alınmır).
 * Məs: "xala / bibi (qeyri-rəsmi)" → ["xala", "bibi"]
 */
export function parseAcceptedAnswers(rawTranslation: string): string[] {
  const parts = rawTranslation.split('/').map((p) => p.trim());
  const cleaned = parts.map((p) => p.replace(/\s*\([^)]*\)\s*/g, '').trim());
  const normalized = cleaned.filter(Boolean).map((c) => c.toLowerCase());
  return Array.from(new Set(normalized));
}

export function checkAnswer(userInput: string, rawCorrectAnswer: string): boolean {
  const accepted = parseAcceptedAnswers(rawCorrectAnswer);
  const normalizedInput = userInput.trim().toLowerCase();
  return accepted.includes(normalizedInput);
}

/** İstiqamətə görə göstərilən sual sözü. */
export function getPrompt(word: GameWord, direction: GameDirection): string {
  return direction === 'en-az' ? word.word : word.translation;
}

/** İstiqamətə görə gözlənilən düzgün cavab. */
export function getCorrectAnswer(word: GameWord, direction: GameDirection): string {
  return direction === 'en-az' ? word.translation : word.word;
}

/**
 * "Ümumi" rejim üçün hovuz hazırlayarkən eyni ingilis sözünü (fərqli
 * kateqoriyalarda fərqli mənalarla) BİR girişə birləşdirir — söz oyunda
 * yalnız bir dəfə görünür, amma bütün kateqoriyalardakı tərcümələri "/"
 * ilə ayrılmış vahid tərcümə mətnində saxlanılır. `checkAnswer` artıq "/"
 * ilə ayrılmış variantların hər birini ayrıca qəbul edilən cavab kimi
 * emal etdiyi üçün əlavə dəyişiklik tələb olunmur. Kateqoriya-daxili
 * rejimə toxunmur (yalnız "overall" hovuzuna tətbiq olunur).
 */
export function mergeDuplicateWordsForOverallMode(words: GameWord[]): GameWord[] {
  const order: string[] = [];
  const groups = new Map<string, GameWord[]>();

  for (const word of words) {
    const key = word.word.trim().toLowerCase();
    if (!groups.has(key)) {
      order.push(key);
      groups.set(key, []);
    }
    groups.get(key)!.push(word);
  }

  return order.map((key) => {
    const group = groups.get(key)!;
    if (group.length === 1) return group[0];

    const seenTranslations = new Set<string>();
    const mergedTranslationParts: Array<{ text: string; categoryTitleAz: string }> = [];

    for (const entry of group) {
      for (const part of entry.translation.split('/').map((p) => p.trim())) {
        if (!part) continue;
        const normalized = part
          .replace(/\s*\([^)]*\)\s*/g, '')
          .trim()
          .toLowerCase();
        if (!normalized || seenTranslations.has(normalized)) continue;
        seenTranslations.add(normalized);
        mergedTranslationParts.push({ text: part, categoryTitleAz: entry.categoryTitleAz });
      }
    }

    return {
      ...group[0],
      translation: mergedTranslationParts.map((p) => p.text).join(' / '),
      mergedTranslationParts,
    };
  });
}

/**
 * Sual mərhələsində göstərilən kateqoriya etiketi. Birləşdirilmiş sözlər üçün
 * bütün mənbə kateqoriyaları (təkrarsız, sıra qorunmaqla) vergüllə ayrılmış
 * halda qaytarır; adi sözlər üçün isə sadəcə öz kateqoriyasını.
 */
export function getCategoryLabel(word: GameWord): string {
  if (word.mergedTranslationParts && word.mergedTranslationParts.length > 0) {
    const titles: string[] = [];
    for (const part of word.mergedTranslationParts) {
      if (!titles.includes(part.categoryTitleAz)) titles.push(part.categoryTitleAz);
    }
    return titles.join(', ');
  }
  return word.categoryTitleAz;
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
