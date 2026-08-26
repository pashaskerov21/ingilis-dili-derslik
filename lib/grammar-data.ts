// Qrammatika məlumatına sorğu qatı.
// DİQQƏT: yalnız server komponentlərində istifadə olunur — bütün JSON
// client bundle-ına düşməsin deyə heç bir client faylından import etmə.
import type { Metadata } from 'next';
import grammar from '@/data/grammar.json';
import type {
  Chapter,
  ChapterReview,
  ExampleBank,
  GrammarData,
  Section,
} from '@/lib/types';

const data = grammar as GrammarData;

/** Bütün fəsillər, JSON-dakı sıra ilə. */
export function getAllChapters(): Chapter[] {
  return data.chapters;
}

/** Slug ilə tək fəsil; tapılmasa undefined. */
export function getChapterBySlug(slug: string): Chapter | undefined {
  return data.chapters.find((chapter) => chapter.slug === slug);
}

/** JSON sırasında bu fəsildən əvvəlki fəsil; birincidirsə undefined. */
export function getPreviousChapter(slug: string): Chapter | undefined {
  const index = data.chapters.findIndex((chapter) => chapter.slug === slug);

  return index > 0 ? data.chapters[index - 1] : undefined;
}

/** JSON sırasında bu fəsildən sonrakı fəsil; sonuncudursa undefined. */
export function getNextChapter(slug: string): Chapter | undefined {
  const index = data.chapters.findIndex((chapter) => chapter.slug === slug);

  return index !== -1 && index < data.chapters.length - 1
    ? data.chapters[index + 1]
    : undefined;
}

/** Fəsil + bölmə slug cütü ilə tək bölmə; tapılmasa undefined. */
export function getSectionBySlug(
  chapterSlug: string,
  sectionSlug: string
): Section | undefined {
  return getChapterBySlug(chapterSlug)?.sections.find(
    (section) => section.slug === sectionSlug
  );
}

/** Fəslin xülasə səhifəsinin məlumatı; fəsil tapılmasa undefined. */
export function getChapterReview(
  chapterSlug: string
): ChapterReview | undefined {
  return getChapterBySlug(chapterSlug)?.chapterReview;
}

/** Fəslin nümunə bankı səhifəsinin məlumatı; fəsil tapılmasa undefined. */
export function getExampleBank(chapterSlug: string): ExampleBank | undefined {
  return getChapterBySlug(chapterSlug)?.exampleBank;
}

/** Statik dərs səhifələri üçün hazır <title>/description dəsti. */
export function buildSectionMetadata(
  chapterSlug: string,
  sectionSlug: string
): Metadata {
  const section = getSectionBySlug(chapterSlug, sectionSlug);

  if (section) {
    return {
      title: `${section.titleAz} — Qrammatika`,
      description: section.summary,
    };
  }

  // Bölmələrdə yoxdursa fəsil xülasəsi və ya nümunə bankı ola bilər —
  // axtarış sırası LessonShell-dəki ilə eynidir.
  const review = getChapterReview(chapterSlug);

  if (review?.slug === sectionSlug) {
    return {
      title: `${review.titleAz} — Qrammatika`,
      description: review.description,
    };
  }

  const bank = getExampleBank(chapterSlug);

  if (bank?.slug === sectionSlug) {
    return {
      title: `${bank.titleAz} — Qrammatika`,
      description: bank.description,
    };
  }

  return {};
}
