// Lüğət məlumatına sorğu qatı.
// DİQQƏT: yalnız server komponentlərində istifadə olunur — bütün JSON
// client bundle-ına düşməsin deyə heç bir client faylından import etmə.
import fs from 'node:fs';
import path from 'node:path';
import vocabularyIndex from '@/data/vocabulary/index.json';

import type {
  VocabCategory,
  VocabCategoryWords,
  VocabIndex,
  VocabLevel,
  VocabSearchEntry,
  VocabWord,
} from '@/lib/types';

const index = vocabularyIndex as VocabIndex;

const VOCAB_DATA_DIR = path.join(process.cwd(), 'data', 'vocabulary');

/**
 * Kateqoriya sözlərini diskdən oxuyur. Build vaxtı (output: 'export') işlədiyi
 * üçün faylları statik import etmək əvəzinə birbaşa fs ilə oxuyuruq — beləcə
 * `data/vocabulary/` içinə yeni JSON əlavə edib index.json-a qeyd etmək
 * kifayətdir, heç bir kodu əl ilə yeniləmək lazım deyil. Fayl hələ yoxdursa
 * (məs. index.json-a əvvəlcədən qeyd olunub, amma JSON hələ yazılmayıb) undefined qaytarır.
 */
function loadCategoryWords(file: string): VocabCategoryWords | undefined {
  const filePath = path.join(VOCAB_DATA_DIR, file);
  if (!fs.existsSync(filePath)) return undefined;
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as VocabCategoryWords;
}

const categoryWordsBySlug: Record<string, VocabCategoryWords> = {};
for (const category of index.categories) {
  const words = loadCategoryWords(category.file);
  if (words) categoryWordsBySlug[category.slug] = words;
}

const LEVEL_ORDER: VocabLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/**
 * Bütün kateqoriyalar, index.json-dakı sıra ilə — yalnız JSON faylı
 * `data/vocabulary/` içində həqiqətən mövcud olanlar göstərilir.
 */
export function getAllCategories(): VocabCategory[] {
  return index.categories.filter((category) => category.slug in categoryWordsBySlug);
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
