import type { Metadata } from 'next';
import LessonShell from '@/components/LessonShell';
import { buildSectionMetadata } from '@/lib/grammar-data';

export const metadata: Metadata = buildSectionMetadata(
  'isimler-artikler-kemiyyet',
  'kemiyyet-gostericileri-1'
);

export default function Page() {
  return (
    <LessonShell chapterSlug="isimler-artikler-kemiyyet" sectionSlug="kemiyyet-gostericileri-1">
      <p className="text-muted">Bu dərsin məzmunu tezliklə əlavə olunacaq.</p>
    </LessonShell>
  );
}
