import type { Metadata } from 'next';
import LessonShell from '@/components/LessonShell';
import { buildSectionMetadata } from '@/lib/grammar-data';

export const metadata: Metadata = buildSectionMetadata(
  'mexanika',
  'xulase'
);

export default function Page() {
  return (
    <LessonShell chapterSlug="mexanika" sectionSlug="xulase">
      <p className="text-muted">Bu fəslin xülasəsi tezliklə əlavə olunacaq.</p>
    </LessonShell>
  );
}
