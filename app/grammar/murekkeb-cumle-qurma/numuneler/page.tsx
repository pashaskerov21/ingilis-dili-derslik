import type { Metadata } from 'next';
import LessonShell from '@/components/LessonShell';
import { buildSectionMetadata } from '@/lib/grammar-data';

export const metadata: Metadata = buildSectionMetadata(
  'murekkeb-cumle-qurma',
  'numuneler'
);

export default function Page() {
  return (
    <LessonShell chapterSlug="murekkeb-cumle-qurma" sectionSlug="numuneler">
      <p className="text-muted">Bu fəslin nümunə bankı tezliklə əlavə olunacaq.</p>
    </LessonShell>
  );
}
