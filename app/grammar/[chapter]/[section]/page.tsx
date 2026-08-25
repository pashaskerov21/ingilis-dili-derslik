import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { getAllChapters, getChapterBySlug } from '@/lib/grammar-data';

interface SectionPageProps {
  params: Promise<{ chapter: string; section: string }>;
}

/**
 * Bütün bölmələr üçün fallback marşrut.
 *
 * Öz statik `page.tsx` faylı olan bölmələrdə (məs. app/grammar/
 * cumlenin-esaslari/soz-sirasi) Next.js statik marşrutu üstün tutur — export
 * zamanı HTML-i həmin fayl yazır, bu səhifə isə yalnız hələ statik faylı
 * olmayan bölmələr üçün işə düşür. Siyahını burada süzmək olmur: bütün
 * bölmələr statik olduqda massiv boşalır və `output: export` xəta verir.
 */
export function generateStaticParams() {
  return getAllChapters().flatMap((chapter) =>
    chapter.sections.map((section) => ({
      chapter: chapter.slug,
      section: section.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: SectionPageProps): Promise<Metadata> {
  const { chapter: chapterSlug, section: sectionSlug } = await params;
  const section = getChapterBySlug(chapterSlug)?.sections.find(
    (item) => item.slug === sectionSlug
  );

  if (!section) return {};

  return {
    title: `${section.titleAz} — Qrammatika`,
    description: section.summary,
  };
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { chapter: chapterSlug, section: sectionSlug } = await params;
  const chapter = getChapterBySlug(chapterSlug);
  const section = chapter?.sections.find((item) => item.slug === sectionSlug);

  if (!chapter || !section) {
    notFound();
  }

  return (
    <main>
      <Header
        items={[
          { label: 'Qrammatika', href: '/grammar' },
          { label: chapter.titleAz, href: `/grammar/${chapter.slug}` },
          { label: section.titleAz },
        ]}
        back={{ href: `/grammar/${chapter.slug}`, label: chapter.titleAz }}
      />

      <header className="border-b border-line pb-6 transition-colors duration-300">
        <p className="font-mono text-xs text-muted">{section.code}</p>
        <h1 className="mt-2 font-display text-2xl sm:text-3xl">
          {section.titleAz}
        </h1>
        <p className="mt-2 font-mono text-xs text-muted">{section.title}</p>
      </header>

      {/* Bu bölmə üçün hələ statik dərs faylı yazılmayıb. */}
      <article className="mt-8">
        <p className="font-body text-muted">
          Bu dərsin məzmunu tezliklə əlavə olunacaq.
        </p>
      </article>
    </main>
  );
}
