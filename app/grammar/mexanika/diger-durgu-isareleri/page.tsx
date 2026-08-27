import type { Metadata } from 'next';
import LessonShell from '@/components/LessonShell';
import { buildSectionMetadata } from '@/lib/grammar-data';

export const metadata: Metadata = buildSectionMetadata(
  'mexanika',
  'diger-durgu-isareleri'
);

export default function Page() {
  return (
    <LessonShell chapterSlug="mexanika" sectionSlug="diger-durgu-isareleri">
      <p className="text-muted">Bu dərsin məzmunu tezliklə əlavə olunacaq.</p>
    </LessonShell>
  );
}
