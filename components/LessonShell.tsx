import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { getChapterBySlug } from '@/lib/grammar-data';
import type {
  Chapter,
  ChapterReview,
  ExampleBank,
  Section,
} from '@/lib/types';

interface LessonShellProps {
  /** data/grammar.json-dakı Chapter.slug. */
  chapterSlug: string;
  /**
   * data/grammar.json-dakı Section.slug — və ya fəslin `chapterReview.slug`-u
   * (məs. "xulase"), yaxud `exampleBank.slug`-u (məs. "numuneler"), çünki bu
   * iki səhifə `sections` massivində deyil.
   */
  sectionSlug: string;
  /** Dərsin əsl məzmunu. */
  children: ReactNode;
}

/** Xülasə səhifəsinin işarəsi. */
const REVIEW_MARK = '✦';
/** Nümunə bankı səhifəsinin işarəsi. */
const BANK_MARK = '◆';

/** Naviqasiya kartının göstərdiyi hədəf — bölmə, xülasə və ya nümunə bankı. */
interface NavTarget {
  href: string;
  /** Sol/sağdakı kiçik kod: bölmədə "1.5", əlavə səhifələrdə işarə. */
  code: string;
  titleAz: string;
}

function sectionTarget(chapterSlug: string, section: Section): NavTarget {
  return {
    href: `/grammar/${chapterSlug}/${section.slug}`,
    code: section.code,
    titleAz: section.titleAz,
  };
}

function reviewTarget(chapterSlug: string, review: ChapterReview): NavTarget {
  return {
    href: `/grammar/${chapterSlug}/${review.slug}`,
    code: REVIEW_MARK,
    titleAz: review.titleAz,
  };
}

function bankTarget(chapterSlug: string, bank: ExampleBank): NavTarget {
  return {
    href: `/grammar/${chapterSlug}/${bank.slug}`,
    code: BANK_MARK,
    titleAz: bank.titleAz,
  };
}

/**
 * Hər statik dərs səhifəsinin çərçivəsi: breadkramb, başlıq, tema düyməsi və
 * fəsil daxilində əvvəlki/növbəti keçidlər. Məzmun JSON-dan deyil, çağıran
 * page.tsx faylından `children` kimi gəlir.
 *
 * Eyni çərçivə fəslin əlavə səhifələri üçün də işləyir: slug əvvəlcə
 * `sections` massivində axtarılır, tapılmasa `chapterReview`, ondan sonra
 * `exampleBank` yoxlanılır.
 */
export default function LessonShell({
  chapterSlug,
  sectionSlug,
  children,
}: LessonShellProps) {
  const chapter = getChapterBySlug(chapterSlug);
  const index =
    chapter?.sections.findIndex((item) => item.slug === sectionSlug) ?? -1;
  const isSection = index !== -1;
  const isReview = !isSection && chapter?.chapterReview.slug === sectionSlug;
  const isBank =
    !isSection && !isReview && chapter?.exampleBank.slug === sectionSlug;

  // Yanlış slug yazılıbsa səhifə səssizcə boş görünməsin.
  if (!chapter || (!isSection && !isReview && !isBank)) {
    notFound();
  }

  if (isReview) {
    return (
      <ReviewShell chapter={chapter} review={chapter.chapterReview}>
        {children}
      </ReviewShell>
    );
  }

  if (isBank) {
    return (
      <BankShell chapter={chapter} bank={chapter.exampleBank}>
        {children}
      </BankShell>
    );
  }

  return (
    <SectionShell chapter={chapter} index={index}>
      {children}
    </SectionShell>
  );
}

/** Adi dərs bölməsi. */
function SectionShell({
  chapter,
  index,
  children,
}: {
  chapter: Chapter;
  index: number;
  children: ReactNode;
}) {
  const section = chapter.sections[index];
  const review = chapter.chapterReview;

  const previous =
    index > 0 ? sectionTarget(chapter.slug, chapter.sections[index - 1]) : undefined;

  // Sonuncu bölmədən sonra növbəti dayanacaq fəsil xülasəsidir.
  const next =
    index < chapter.sections.length - 1
      ? sectionTarget(chapter.slug, chapter.sections[index + 1])
      : review
        ? reviewTarget(chapter.slug, review)
        : undefined;

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

      <article className="mt-10">{children}</article>

      <LessonNav previous={previous} next={next} />
    </main>
  );
}

/** Fəsil xülasəsi səhifəsi. */
function ReviewShell({
  chapter,
  review,
  children,
}: {
  chapter: Chapter;
  review: ChapterReview;
  children: ReactNode;
}) {
  const lastSection = chapter.sections[chapter.sections.length - 1];
  const bank = chapter.exampleBank;

  // "Əvvəlki" fəsildəki sonuncu bölməyə qayıdır.
  const previous = lastSection
    ? sectionTarget(chapter.slug, lastSection)
    : undefined;

  // Xülasədən sonrakı dayanacaq fəslin nümunə bankıdır.
  const next = bank ? bankTarget(chapter.slug, bank) : undefined;

  return (
    <main>
      <Header
        items={[
          { label: 'Qrammatika', href: '/grammar' },
          { label: chapter.titleAz, href: `/grammar/${chapter.slug}` },
          { label: review.titleAz },
        ]}
        back={{ href: `/grammar/${chapter.slug}`, label: chapter.titleAz }}
      />

      <header className="border-b border-line pb-6 transition-colors duration-300">
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          <span aria-hidden="true">{REVIEW_MARK}</span> Xülasə
        </p>
        <h1 className="mt-2 font-display text-2xl sm:text-3xl">
          {review.titleAz}
        </h1>
        <p className="mt-2 font-mono text-xs text-muted">{review.title}</p>
      </header>

      <article className="mt-10">{children}</article>

      <LessonNav previous={previous} next={next} />
    </main>
  );
}

/** Fəslin nümunə bankı səhifəsi. */
function BankShell({
  chapter,
  bank,
  children,
}: {
  chapter: Chapter;
  bank: ExampleBank;
  children: ReactNode;
}) {
  const review = chapter.chapterReview;
  const lastSection = chapter.sections[chapter.sections.length - 1];

  // "Əvvəlki" fəsil xülasəsinə qayıdır; xülasə yoxdursa sonuncu bölməyə.
  const previous = review
    ? reviewTarget(chapter.slug, review)
    : lastSection
      ? sectionTarget(chapter.slug, lastSection)
      : undefined;

  // TODO: fəsillər arası keçid — növbəti fəsil hazır olanda buradan onun ilk
  // bölməsinə keçid əlavə olunacaq; hazırda "Növbəti" gizlidir.
  const next = undefined;

  return (
    <main>
      <Header
        items={[
          { label: 'Qrammatika', href: '/grammar' },
          { label: chapter.titleAz, href: `/grammar/${chapter.slug}` },
          { label: bank.titleAz },
        ]}
        back={{ href: `/grammar/${chapter.slug}`, label: chapter.titleAz }}
      />

      <header className="border-b border-line pb-6 transition-colors duration-300">
        <p className="font-mono text-xs uppercase tracking-wide text-accent">
          <span aria-hidden="true">{BANK_MARK}</span> Nümunə bankı
        </p>
        <h1 className="mt-2 font-display text-2xl sm:text-3xl">
          {bank.titleAz}
        </h1>
        <p className="mt-2 font-mono text-xs text-muted">{bank.title}</p>
      </header>

      <article className="mt-10">{children}</article>

      <LessonNav previous={previous} next={next} />
    </main>
  );
}

interface LessonNavProps {
  previous?: NavTarget;
  next?: NavTarget;
}

/** Fəsil daxilində əvvəlki/növbəti keçidlər. */
function LessonNav({ previous, next }: LessonNavProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav
      aria-label="Bölmələr arası keçid"
      className="mt-14 flex flex-col gap-3 border-t border-line pt-6 transition-colors duration-300 sm:flex-row sm:items-stretch sm:justify-between sm:gap-4"
    >
      {previous ? (
        <NavLink direction="previous" target={previous} />
      ) : (
        <span className="hidden sm:block sm:flex-1" />
      )}

      {next ? (
        <NavLink direction="next" target={next} />
      ) : (
        <span className="hidden sm:block sm:flex-1" />
      )}
    </nav>
  );
}

function NavLink({
  direction,
  target,
}: {
  direction: 'previous' | 'next';
  target: NavTarget;
}) {
  const isNext = direction === 'next';

  return (
    <Link
      href={target.href}
      className={`group flex-1 border border-line px-4 py-3 transition-colors duration-300 hover:border-accent hover:text-accent ${
        isNext ? 'sm:text-right' : ''
      }`}
    >
      <span className="block font-mono text-xs text-muted">
        {isNext ? 'Növbəti bölmə →' : '← Əvvəlki bölmə'}
      </span>
      <span className="mt-1 flex flex-wrap items-baseline gap-2 sm:flex-nowrap">
        {isNext ? null : (
          <span className="font-mono text-xs text-muted">{target.code}</span>
        )}
        <span className="min-w-0 font-display text-sm sm:flex-1">
          {target.titleAz}
        </span>
        {isNext ? (
          <span className="font-mono text-xs text-muted">{target.code}</span>
        ) : null}
      </span>
    </Link>
  );
}
