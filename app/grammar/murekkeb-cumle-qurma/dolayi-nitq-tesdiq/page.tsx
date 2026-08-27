import type { Metadata } from 'next';
import LessonShell from '@/components/LessonShell';
import { buildSectionMetadata } from '@/lib/grammar-data';

export const metadata: Metadata = buildSectionMetadata(
  'murekkeb-cumle-qurma',
  'dolayi-nitq-tesdiq'
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="murekkeb-cumle-qurma"
      sectionSlug="dolayi-nitq-tesdiq"
    >
      <p className="text-muted">Bu dərsin məzmunu tezliklə əlavə olunacaq.</p>
    </LessonShell>
  );
}
