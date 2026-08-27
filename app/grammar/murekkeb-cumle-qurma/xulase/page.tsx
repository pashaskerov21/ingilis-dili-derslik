import type { Metadata } from 'next';
import LessonShell from '@/components/LessonShell';
import { buildSectionMetadata } from '@/lib/grammar-data';

export const metadata: Metadata = buildSectionMetadata(
  'murekkeb-cumle-qurma',
  'xulase'
);

export default function Page() {
  return (
    <LessonShell chapterSlug="murekkeb-cumle-qurma" sectionSlug="xulase">
      <p className="text-muted">Bu fəslin xülasəsi tezliklə əlavə olunacaq.</p>
    </LessonShell>
  );
}
