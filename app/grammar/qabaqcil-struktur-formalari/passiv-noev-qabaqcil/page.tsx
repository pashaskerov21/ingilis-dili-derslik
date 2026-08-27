import type { Metadata } from 'next';
import LessonShell from '@/components/LessonShell';
import { buildSectionMetadata } from '@/lib/grammar-data';

export const metadata: Metadata = buildSectionMetadata(
  'qabaqcil-struktur-formalari',
  'passiv-noev-qabaqcil'
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="qabaqcil-struktur-formalari"
      sectionSlug="passiv-noev-qabaqcil"
    >
      <p className="text-muted">Bu dərsin məzmunu tezliklə əlavə olunacaq.</p>
    </LessonShell>
  );
}
