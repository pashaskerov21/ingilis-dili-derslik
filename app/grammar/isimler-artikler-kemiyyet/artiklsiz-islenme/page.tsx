import type { Metadata } from 'next';
import LessonShell from '@/components/LessonShell';
import { buildSectionMetadata } from '@/lib/grammar-data';

export const metadata: Metadata = buildSectionMetadata(
  'isimler-artikler-kemiyyet',
  'artiklsiz-islenme'
);

export default function Page() {
  return (
    <LessonShell chapterSlug="isimler-artikler-kemiyyet" sectionSlug="artiklsiz-islenme">
      <p className="text-muted">Bu dərsin məzmunu tezliklə əlavə olunacaq.</p>
    </LessonShell>
  );
}
