import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { SoonBadge } from '@/components/SoonBadge';
import { getAllChapters, getChapterBySlug } from '@/lib/grammar-data';

interface ChapterPageProps {
  params: Promise<{ chapter: string }>;
}

/** Bütün fəsil səhifələri build vaxtı statik generasiya olunur. */
export function generateStaticParams() {
  return getAllChapters().map((chapter) => ({ chapter: chapter.slug }));
}

export async function generateMetadata({
  params,
}: ChapterPageProps): Promise<Metadata> {
  const { chapter: chapterSlug } = await params;
  const chapter = getChapterBySlug(chapterSlug);

  if (!chapter) return {};

  return {
    title: `${chapter.titleAz} — Qrammatika`,
    description: chapter.description,
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { chapter: chapterSlug } = await params;
  const chapter = getChapterBySlug(chapterSlug);

  if (!chapter) {
    notFound();
  }

  return (
    <main>
      <Header
        items={[
          { label: 'Qrammatika', href: '/grammar' },
          { label: chapter.titleAz },
        ]}
        back={{ href: '/grammar', label: 'Fəsillərə qayıt' }}
      />

      <header>
        <p className="font-mono text-xs text-muted">Fəsil {chapter.code}</p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl">
          {chapter.titleAz}
        </h1>
        <p className="mt-3 font-body text-muted">{chapter.description}</p>
      </header>

      <ul className="mt-10 border-t border-line">
        {chapter.sections.map((section) => (
          <li key={section.slug} className="border-b border-line">
            <Link
              href={`/grammar/${chapter.slug}/${section.slug}`}
              className={`group flex items-start gap-4 py-4 transition-colors hover:text-accent ${
                section.hasContent ? '' : 'opacity-50'
              }`}
            >
              <span className="mt-1 font-mono text-xs text-muted">
                {section.code}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-base">
                    {section.titleAz}
                  </span>
                  {section.hasContent ? null : <SoonBadge />}
                </span>
                <span className="mt-1 block font-body text-sm text-muted">
                  {section.summary}
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

      {/* Fəslin əlavə səhifələri — bölmə siyahısından ayrı, vurğulanmış kartlar. */}
      <div className="mt-10 flex flex-col gap-3 border-t border-line pt-10">
        <HighlightCard
          href={`/grammar/${chapter.slug}/${chapter.chapterReview.slug}`}
          mark="✦"
          label="Summary"
          titleAz={chapter.chapterReview.titleAz}
          description={chapter.chapterReview.description}
          hasContent={chapter.chapterReview.hasContent}
        />
        <HighlightCard
          href={`/grammar/${chapter.slug}/${chapter.exampleBank.slug}`}
          mark="◆"
          label="Examples"
          titleAz={chapter.exampleBank.titleAz}
          description={chapter.exampleBank.description}
          hasContent={chapter.exampleBank.hasContent}
        />
        {/* Yalnız bu cədvəli olan fəsillərdə (hazırda Fəsil 4) görünür. */}
        {chapter.irregularVerbsTable ? (
          <HighlightCard
            href={`/grammar/${chapter.slug}/${chapter.irregularVerbsTable.slug}`}
            mark="▣"
            label="Reference"
            titleAz={chapter.irregularVerbsTable.titleAz}
            description={chapter.irregularVerbsTable.description}
            hasContent={chapter.irregularVerbsTable.hasContent}
          />
        ) : null}
      </div>
    </main>
  );
}

interface HighlightCardProps {
  href: string;
  /** Bölmə kodunun yerini tutan kiçik simvol. */
  mark: string;
  /** font-mono kiçik etiket, məs. "SUMMARY". */
  label: string;
  titleAz: string;
  description: string;
  hasContent: boolean;
}

/** Xülasə və nümunə bankı üçün ortaq vurğulu kart. */
function HighlightCard({
  href,
  mark,
  label,
  titleAz,
  description,
  hasContent,
}: HighlightCardProps) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 border border-line bg-accent/5 px-4 py-5 transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
    >
      <span aria-hidden="true" className="mt-0.5 font-mono text-sm text-accent">
        {mark}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">
          {label}
        </span>
        <span className="mt-1 flex flex-wrap items-center gap-2">
          <span className="font-display text-base">{titleAz}</span>
          {hasContent ? null : <SoonBadge />}
        </span>
        <span className="mt-1 block font-body text-sm text-muted">
          {description}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="mt-1 font-mono text-sm text-line transition-colors group-hover:text-accent"
      >
        →
      </span>
    </Link>
  );
}
