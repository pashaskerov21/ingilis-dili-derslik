import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { VocabSearch } from '@/components/vocabulary/VocabSearch';
import {
  getAllCategories,
  getSearchIndex,
  getWordsByCategory,
} from '@/lib/vocabulary-data';

export const metadata: Metadata = {
  title: 'Lüğət — English',
  description: 'A1–C2 səviyyələri üzrə söz ehtiyatı, kateqoriyalar üzrə.',
};

export default function VocabularyPage() {
  const categories = getAllCategories();
  const searchIndex = getSearchIndex();

  return (
    <main>
      <Header
        items={[{ label: 'Ana səhifə', href: '/' }, { label: 'Lüğət' }]}
      />

      <header>
        <h1 className="font-display text-3xl sm:text-4xl">Lüğət</h1>
        <p className="mt-3 font-body text-muted">
          Kateqoriyalar üzrə söz ehtiyatı — A1-dən C2-yə qədər.
        </p>
      </header>

      <div className="mt-8 pb-28">
        <ul className="border-t border-line">
          {categories.map((category) => {
            const wordCount = getWordsByCategory(category.slug).length;

            return (
              <li key={category.slug} className="border-b border-line">
                <div className="flex items-start gap-4 py-5">
                  <Link
                    href={`/vocabulary/${category.slug}`}
                    className="group flex min-w-0 flex-1 items-start gap-4 transition-colors hover:text-accent"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-lg">
                        {category.titleAz}
                      </span>
                      <span className="mt-1 block font-body text-sm text-muted">
                        {wordCount} söz
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1 font-mono text-sm text-line transition-colors group-hover:text-accent"
                    >
                      →
                    </span>
                  </Link>
                  <Link
                    href={`/vocabulary/game?category=${category.slug}`}
                    className="mt-1 shrink-0 font-mono text-[11px] uppercase tracking-wide text-muted transition-colors hover:text-accent"
                  >
                    Oyna
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <VocabSearch
        index={searchIndex}
        trailing={
          <Link
            href="/vocabulary/game"
            className="shrink-0 border border-accent px-3 py-2 font-mono text-xs uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Oyna
          </Link>
        }
      />
    </main>
  );
}
