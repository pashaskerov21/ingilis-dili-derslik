import type { Metadata } from 'next';
import { Suspense } from 'react';
import { VocabularyGame } from '@/components/vocabulary/game/VocabularyGame';
import { getAllCategories } from '@/lib/vocabulary-data';

export const metadata: Metadata = {
  title: 'Yaz və Yoxla — Lüğət',
  description:
    'Sözü tərcümə edərək skor topla — bir səhvdə oyun bitir (survival).',
};

export default function VocabularyGamePage() {
  const categories = getAllCategories();

  return (
    <main>
      <Suspense fallback={null}>
        <VocabularyGame categories={categories} />
      </Suspense>
    </main>
  );
}
