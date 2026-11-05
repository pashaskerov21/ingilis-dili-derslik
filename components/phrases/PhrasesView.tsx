'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Phrase, PhraseLevel } from '@/lib/types';
import { PhraseLevelPills } from '@/components/phrases/PhraseLevelPills';
import { PhraseLevelSection } from '@/components/phrases/PhraseLevelSection';

const LEVEL_ORDER: PhraseLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

// PhraseLevelPills-in h-11 hündürlüyü ilə eyni olmalıdır.
const PILLS_HEIGHT_PX = 44;

interface PhrasesViewProps {
  groupedByLevel: Record<PhraseLevel, Phrase[]>;
}

/**
 * Kateqoriya görünüşü — YALNIZ səviyyəyə görə qruplaşdırma (bu modulda əlifba
 * görünüşü yoxdur). Axtarışdan `?phrase=` ilə gələndə həmin ifadə kartına
 * scroll edir.
 */
export function PhrasesView({ groupedByLevel }: PhrasesViewProps) {
  const searchParams = useSearchParams();
  const targetPhraseId = searchParams.get('phrase');

  // Sabit piksel hədəfi əl ilə hesablanır (bax: PhraseLevelPills) ki, sticky
  // başlıqlarla `scrollIntoView`-in brauzerlər arası uzlaşmazlığından qaçınılsın.
  useEffect(() => {
    if (!targetPhraseId) return;

    const timer = setTimeout(() => {
      const phraseEl = document.getElementById(targetPhraseId);
      if (!phraseEl) return;

      const headerEl = phraseEl.parentElement?.querySelector('h3');
      const offset =
        PILLS_HEIGHT_PX + (headerEl?.getBoundingClientRect().height ?? 0);
      const targetY =
        phraseEl.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }, 50);

    return () => clearTimeout(timer);
  }, [targetPhraseId]);

  return (
    <div className="mt-8">
      <PhraseLevelPills />
      <div className="mt-2">
        {LEVEL_ORDER.map((level) => (
          <PhraseLevelSection
            key={level}
            level={level}
            phrases={groupedByLevel[level]}
          />
        ))}
      </div>
    </div>
  );
}
