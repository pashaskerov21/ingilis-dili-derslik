import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { getAllChapters } from '@/lib/grammar-data';

export const metadata: Metadata = {
  title: 'Qrammatika — English',
  description:
    'İngilis dili qrammatikasının səviyyəsiz, ardıcıl kurikulumu — fəsillər üzrə.',
};

export default function GrammarPage() {
  const chapters = getAllChapters();

  return (
    <main>
      <Header
        items={[{ label: 'Ana səhifə', href: '/' }, { label: 'Qrammatika' }]}
      />

      <header>
        <h1 className="font-display text-3xl sm:text-4xl">Qrammatika</h1>
        <p className="mt-3 font-body text-muted">
          Səviyyəsiz, ardıcıl kurikulum. Fəsilləri sıra ilə keçmək tövsiyə
          olunur.
        </p>
      </header>

      <ul className="mt-10 border-t border-line">
        {chapters.map((chapter) => (
          <li key={chapter.slug} className="border-b border-line">
            <Link
              href={`/grammar/${chapter.slug}`}
              className="group flex items-start gap-4 py-5 transition-colors hover:text-accent"
            >
              <span className="mt-1 font-mono text-xs text-muted">
                {chapter.code}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-lg">
                  {chapter.titleAz}
                </span>
                <span className="mt-1 block font-body text-sm text-muted">
                  {chapter.description}
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
        ))}
      </ul>
    </main>
  );
}
