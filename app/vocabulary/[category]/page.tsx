import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { VocabularyView } from '@/components/vocabulary/VocabularyView';
import {
  getAllCategories,
  getCategoryBySlug,
  getWordsByCategory,
  getWordsGroupedByLetter,
  getWordsGroupedByLevel,
} from '@/lib/vocabulary-data';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

/** Bütün kateqoriya səhifələri build vaxtı statik generasiya olunur. */
export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) return {};

  return {
    title: `${category.titleAz} — Lüğət`,
    description: `${category.titleAz} kateqoriyasının söz ehtiyatı, A1–C2.`,
  };
}

export default async function VocabularyCategoryPage({
  params,
}: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const wordCount = getWordsByCategory(slug).length;
  const groupedByLevel = getWordsGroupedByLevel(slug);
  const groupedByLetter = getWordsGroupedByLetter(slug);

  return (
    <main>
      <Header
        items={[
          { label: 'Lüğət', href: '/vocabulary' },
          { label: category.titleAz },
        ]}
        back={{ href: '/vocabulary', label: 'Kateqoriyalara qayıt' }}
      />

      <header>
        <p className="font-mono text-xs text-muted">{wordCount} söz</p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl">
          {category.titleAz}
        </h1>
      </header>

      <Suspense fallback={null}>
        <VocabularyView
          groupedByLevel={groupedByLevel}
          groupedByLetter={groupedByLetter}
        />
      </Suspense>
    </main>
  );
}
