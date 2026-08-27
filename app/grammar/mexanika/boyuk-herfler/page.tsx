import type { Metadata } from 'next';
import LessonShell from '@/components/LessonShell';
import { buildSectionMetadata } from '@/lib/grammar-data';

export const metadata: Metadata = buildSectionMetadata(
  'mexanika',
  'boyuk-herfler'
);

export default function Page() {
  return (
    <LessonShell chapterSlug="mexanika" sectionSlug="boyuk-herfler">
      <p className="text-muted">Bu dərsin məzmunu tezliklə əlavə olunacaq.</p>
    </LessonShell>
  );
}
