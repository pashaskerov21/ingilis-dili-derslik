// İfadələr məlumatına sorğu qatı.
// DİQQƏT: yalnız server komponentlərində istifadə olunur — bütün JSON
// client bundle-ına düşməsin deyə heç bir client faylından import etmə.
// Struktur baxımından Lüğət modulundan (lib/vocabulary-data.ts) MÜSTƏQİLDİR,
// amma eyni məntiqi izləyir.
import fs from 'node:fs';
import path from 'node:path';
import phrasesIndex from '@/data/phrases/index.json';

import type {
  Phrase,
  PhraseCategory,
  PhraseCategoryPhrases,
  PhraseIndex,
  PhraseLevel,
  PhraseSearchEntry,
} from '@/lib/types';

const index = phrasesIndex as PhraseIndex;

const PHRASES_DATA_DIR = path.join(process.cwd(), 'data', 'phrases');

/**
 * Kateqoriya ifadələrini diskdən oxuyur. Build vaxtı (output: 'export') işlədiyi
 * üçün faylları statik import etmək əvəzinə birbaşa fs ilə oxuyuruq — beləcə
 * `data/phrases/` içinə yeni JSON əlavə edib index.json-a qeyd etmək
 * kifayətdir, heç bir kodu əl ilə yeniləmək lazım deyil. Fayl hələ yoxdursa
 * (məs. index.json-a əvvəlcədən qeyd olunub, amma JSON hələ yazılmayıb) undefined qaytarır.
 */
function loadCategoryPhrases(file: string): PhraseCategoryPhrases | undefined {
  const filePath = path.join(PHRASES_DATA_DIR, file);
  if (!fs.existsSync(filePath)) return undefined;
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as PhraseCategoryPhrases;
}

const categoryPhrasesBySlug: Record<string, PhraseCategoryPhrases> = {};
for (const category of index.categories) {
  const phrases = loadCategoryPhrases(category.file);
  if (phrases) categoryPhrasesBySlug[category.slug] = phrases;
}

const LEVEL_ORDER: PhraseLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/**
 * Bütün kateqoriyalar, index.json-dakı sıra ilə (12 kateqoriyanın hamısı).
 * Lüğətdən fərqli olaraq burada fayl-mövcudluğuna görə süzgəc YOXDUR: kateqoriya
 * kartları həmişə görünür (ifadə faylları bölmə-bölmə əlavə olunur, JSON hələ
 * yazılmayıbsa sadəcə ifadə sayı 0 olur) və hər kateqoriya səhifəsi statik
 * generasiya olunur (`output: export` üçün ən azı bir marşrut lazımdır).
 */
export function getAllPhraseCategories(): PhraseCategory[] {
  return index.categories;
}

/** Slug ilə tək kateqoriya; tapılmasa undefined. */
export function getPhraseCategoryBySlug(
  slug: string
): PhraseCategory | undefined {
  return index.categories.find((category) => category.slug === slug);
}

/** Kateqoriyanın bütün ifadələri, JSON-dakı sıra ilə. */
export function getPhrasesByCategory(slug: string): Phrase[] {
  return categoryPhrasesBySlug[slug]?.phrases ?? [];
}

/** Kateqoriyanın ifadələri səviyyəyə görə qruplaşdırılıb (A1 → C2). */
export function getPhrasesGroupedByLevel(
  slug: string
): Record<PhraseLevel, Phrase[]> {
  const phrases = getPhrasesByCategory(slug);
  const grouped = {} as Record<PhraseLevel, Phrase[]>;

  for (const level of LEVEL_ORDER) {
    grouped[level] = phrases.filter((phrase) => phrase.level === level);
  }

  return grouped;
}

/**
 * Bütün kateqoriyalardakı bütün ifadələrin sadə, "yastılanmış" siyahısı —
 * hər ifadəyə hansı kateqoriyadan gəldiyi əlavə olunub. Ümumi axtarış üçün
 * nəzərdə tutulub: bu layihə tam statik export olduğundan (server yoxdur),
 * axtarışın özü client tərəfdə aparılır — bu funksiya yalnız build vaxtı
 * axtarış indeksini hazırlayıb client komponentinə prop kimi ötürmək
 * üçündür (bax: app/phrases/page.tsx, components/phrases/PhraseSearch.tsx).
 */
export function getPhraseSearchIndex(): PhraseSearchEntry[] {
  return index.categories.flatMap((category) =>
    getPhrasesByCategory(category.slug).map((phrase) => ({
      ...phrase,
      categorySlug: category.slug,
      categoryTitleAz: category.titleAz,
    }))
  );
}

/**
 * `phrase` və `meaning` sahələrində case-insensitive, qismən uyğunlaşma
 * axtarışı — Lüğət modulundakı searchAllWords ilə eyni məntiq, fərqli sahə
 * adları ilə. (Client tərəfdə də istifadə oluna bilməsi üçün eyni imza
 * PhraseSearch komponentində təkrarlanır.)
 */
export function searchAllPhrases(query: string): PhraseSearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return getPhraseSearchIndex().filter(
    (entry) =>
      entry.phrase.toLowerCase().includes(q) ||
      entry.meaning.toLowerCase().includes(q)
  );
}
