import type { Metadata } from 'next';
import LessonShell from '@/components/LessonShell';
import { buildSectionMetadata } from '@/lib/grammar-data';

export const metadata: Metadata = buildSectionMetadata(
  'qabaqcil-struktur-formalari',
  'gerund'
);

export default function Page() {
  return (
    <LessonShell chapterSlug="qabaqcil-struktur-formalari" sectionSlug="gerund">
      <p className="text-muted">Bu dərsin məzmunu tezliklə əlavə olunacaq.</p>
    </LessonShell>
  );
}
