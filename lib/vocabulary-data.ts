// Lüğət məlumatına sorğu qatı.
// DİQQƏT: yalnız server komponentlərində istifadə olunur — bütün JSON
// client bundle-ına düşməsin deyə heç bir client faylından import etmə.
import vocabularyIndex from '@/data/vocabulary/index.json';
import aileVeInsanlar from '@/data/vocabulary/aile-ve-insanlar.json';
import type {
  VocabCategory,
  VocabCategoryWords,
  VocabIndex,
  VocabLevel,
  VocabSearchEntry,
  VocabWord,
} from '@/lib/types';

const index = vocabularyIndex as VocabIndex;

/**
 * Hər kateqoriyanın JSON faylı burada əl ilə qeydə alınır — statik export
 * dinamik (dəyişən yollu) import-u dəstəkləmədiyi üçün. Yeni kateqoriya əlavə
 * edəndə: faylı yuxarıda import et və slug açarı ilə bu map-ə əlavə et.
 */
const categoryWordsBySlug: Record<string, VocabCategoryWords> = {
  'aile-ve-insanlar': aileVeInsanlar as VocabCategoryWords,
};

const LEVEL_ORDER: VocabLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/** Bütün kateqoriyalar, index.json-dakı sıra ilə. */
export function getAllCategories(): VocabCategory[] {
  return index.categories;
}

/** Slug ilə tək kateqoriya; tapılmasa undefined. */
export function getCategoryBySlug(slug: string): VocabCategory | undefined {
  return index.categories.find((category) => category.slug === slug);
}

/** Kateqoriyanın bütün sözləri, JSON-dakı sıra ilə. */
export function getWordsByCategory(slug: string): VocabWord[] {
  return categoryWordsBySlug[slug]?.words ?? [];
}

/** Kateqoriyanın sözləri səviyyəyə görə qruplaşdırılıb (A1 → C2). */
export function getWordsGroupedByLevel(
  slug: string
): Record<VocabLevel, VocabWord[]> {
  const words = getWordsByCategory(slug);
  const grouped = {} as Record<VocabLevel, VocabWord[]>;

  for (const level of LEVEL_ORDER) {
    grouped[level] = words.filter((word) => word.level === level);
  }

  return grouped;
}

/**
 * Kateqoriyanın sözləri ilk hərfə görə qruplaşdırılıb (A → Z) — hər hərf
 * daxilində də əlifba sırasında.
 */
export function getWordsGroupedByLetter(
  slug: string
): Record<string, VocabWord[]> {
  const words = [...getWordsByCategory(slug)].sort((a, b) =>
    a.word.localeCompare(b.word)
  );
  const grouped: Record<string, VocabWord[]> = {};

  for (const word of words) {
    const letter = word.word[0]?.toUpperCase() ?? '#';
    (grouped[letter] ??= []).push(word);
  }

  return grouped;
}

/**
 * Bütün kateqoriyalardakı bütün sözlərin sadə, "yastılanmış" siyahısı —
 * hər sözə hansı kateqoriyadan gəldiyi əlavə olunub. Ümumi axtarış üçün
 * nəzərdə tutulub: bu layihə tam statik export olduğundan (server yoxdur),
 * axtarışın özü client tərəfdə aparılır — bu funksiya yalnız build vaxtı
 * axtarış indeksini hazırlayıb client komponentinə prop kimi ötürmək
 * üçündür (bax: app/vocabulary/page.tsx, components/vocabulary/VocabSearch.tsx).
 */
export function getSearchIndex(): VocabSearchEntry[] {
  return index.categories.flatMap((category) =>
    getWordsByCategory(category.slug).map((word) => ({
      ...word,
      categorySlug: category.slug,
      categoryTitleAz: category.titleAz,
    }))
  );
}
