import type { Metadata } from 'next';
import LessonShell from '@/components/LessonShell';
import { buildSectionMetadata } from '@/lib/grammar-data';

export const metadata: Metadata = buildSectionMetadata(
  'isimler-artikler-kemiyyet',
  'numuneler'
);

export default function Page() {
  return (
    <LessonShell chapterSlug="isimler-artikler-kemiyyet" sectionSlug="numuneler">
      <p className="text-muted">Bu fəslin nümunə bankı tezliklə əlavə olunacaq.</p>
    </LessonShell>
  );
}
