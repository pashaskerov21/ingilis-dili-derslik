import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { PhrasesView } from '@/components/phrases/PhrasesView';
import {
  getAllPhraseCategories,
  getPhraseCategoryBySlug,
  getPhrasesByCategory,
  getPhrasesGroupedByLevel,
} from '@/lib/phrases-data';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

/** Bütün kateqoriya səhifələri build vaxtı statik generasiya olunur. */
export function generateStaticParams() {
  return getAllPhraseCategories().map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getPhraseCategoryBySlug(slug);

  if (!category) return {};

  return {
    title: `${category.titleAz} — İfadələr`,
    description: `${category.titleAz} kateqoriyasının ifadələri, A1–C2.`,
  };
}

export default async function PhraseCategoryPage({
  params,
}: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getPhraseCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const phraseCount = getPhrasesByCategory(slug).length;
  const groupedByLevel = getPhrasesGroupedByLevel(slug);

  return (
    <main>
      <Header
        items={[
          { label: 'İfadələr', href: '/phrases' },
          { label: category.titleAz },
        ]}
        back={{ href: '/phrases', label: 'Kateqoriyalara qayıt' }}
      />

      <header>
        <p className="font-mono text-xs text-muted">{phraseCount} ifadə</p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl">
          {category.titleAz}
        </h1>
      </header>

      <Suspense fallback={null}>
        <PhrasesView groupedByLevel={groupedByLevel} />
      </Suspense>
    </main>
  );
}
