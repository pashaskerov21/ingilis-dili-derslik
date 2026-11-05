import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { PhraseSearch } from '@/components/phrases/PhraseSearch';
import {
  getAllPhraseCategories,
  getPhraseSearchIndex,
  getPhrasesByCategory,
} from '@/lib/phrases-data';

export const metadata: Metadata = {
  title: 'İfadələr — English',
  description:
    'İdiomlar, kollokasiyalar və sabit ifadələr — A1–C2, kateqoriyalar üzrə.',
};

export default function PhrasesPage() {
  const categories = getAllPhraseCategories();
  const searchIndex = getPhraseSearchIndex();
  const totalPhraseCount = searchIndex.length;

  return (
    <main>
      <Header
        items={[{ label: 'Ana səhifə', href: '/' }, { label: 'İfadələr' }]}
      />

      <header>
        <h1 className="font-display text-3xl sm:text-4xl">İfadələr</h1>
        <p className="mt-3 font-body text-muted">
          İdiomlar, kollokasiyalar və sabit ifadələr — A1-dən C2-yə qədər. Cəmi{' '}
          {totalPhraseCount} ifadə.
        </p>
      </header>

      <div className="mt-8 pb-28">
        <ul className="border-t border-line">
          {categories.map((category) => {
            const phraseCount = getPhrasesByCategory(category.slug).length;

            return (
              <li key={category.slug} className="border-b border-line">
                <Link
                  href={`/phrases/${category.slug}`}
                  className="group flex items-start gap-4 py-5 transition-colors hover:text-accent"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg">
                      {category.titleAz}
                    </span>
                    <span className="mt-1 block font-body text-sm text-muted">
                      {phraseCount} ifadə
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 font-mono text-sm text-line transition-colors group-hover:text-accent"
                  >
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <PhraseSearch index={searchIndex} />
    </main>
  );
}
