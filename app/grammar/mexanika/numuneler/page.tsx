import type { Metadata } from 'next';
import LessonShell from '@/components/LessonShell';
import { buildSectionMetadata } from '@/lib/grammar-data';

export const metadata: Metadata = buildSectionMetadata(
  'mexanika',
  'numuneler'
);

export default function Page() {
  return (
    <LessonShell chapterSlug="mexanika" sectionSlug="numuneler">
      <p className="text-muted">Bu fəslin nümunə bankı tezliklə əlavə olunacaq.</p>
    </LessonShell>
  );
}
