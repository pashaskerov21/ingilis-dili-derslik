'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import type { VocabLevel, VocabWord } from '@/lib/types';
import { VocabLevelPills } from '@/components/vocabulary/VocabLevelPills';
import { VocabLevelSection } from '@/components/vocabulary/VocabLevelSection';
import { VocabLetterSection } from '@/components/vocabulary/VocabLetterSection';

type Tab = 'category' | 'alphabet';

const LEVEL_ORDER: VocabLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

// VocabLevelPills-in h-11 hündürlüyü ilə eyni olmalıdır.
const PILLS_HEIGHT_PX = 44;

interface VocabularyViewProps {
  groupedByLevel: Record<VocabLevel, VocabWord[]>;
  groupedByLetter: Record<string, VocabWord[]>;
}

/** Kateqoriya / Əlifba tab-ları arasında keçidi idarə edən client qatı. */
export function VocabularyView({
  groupedByLevel,
  groupedByLetter,
}: VocabularyViewProps) {
  const [tab, setTab] = useState<Tab>('category');
  const letters = Object.keys(groupedByLetter);
  const searchParams = useSearchParams();
  const targetWordId = searchParams.get('word');

  // Axtarışdan `?word=` ilə gələndə: Kateqoriya tabına keç və həmin söz
  // kartına scroll et — kart DOM-da render olunsun deyə bir tick gözlənilir.
  // Sabit piksel hədəfi əl ilə hesablanır (bax: VocabLevelPills) ki, sticky
  // başlıqlarla `scrollIntoView`-in brauzerlər arası uzlaşmazlığından qaçınılsın.
  useEffect(() => {
    if (!targetWordId) return;

    setTab('category');
    const timer = setTimeout(() => {
      const wordEl = document.getElementById(targetWordId);
      if (!wordEl) return;

      const headerEl = wordEl.parentElement?.querySelector('h3');
      const offset = PILLS_HEIGHT_PX + (headerEl?.getBoundingClientRect().height ?? 0);
      const targetY = wordEl.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }, 50);

    return () => clearTimeout(timer);
  }, [targetWordId]);

  return (
    <div className="mt-8">
      <div className="flex gap-2 border-b border-line">
        <TabButton active={tab === 'category'} onClick={() => setTab('category')}>
          Kateqoriya
        </TabButton>
        <TabButton active={tab === 'alphabet'} onClick={() => setTab('alphabet')}>
          Əlifba
        </TabButton>
      </div>

      {tab === 'category' ? (
        <div className="mt-4">
          <VocabLevelPills />
          <div className="mt-2">
            {LEVEL_ORDER.map((level) => (
              <VocabLevelSection
                key={level}
                level={level}
                words={groupedByLevel[level]}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4">
          {letters.map((letter) => (
            <VocabLetterSection
              key={letter}
              letter={letter}
              words={groupedByLetter[letter]}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`-mb-px border-b-2 px-1 pb-3 font-mono text-xs uppercase tracking-wide transition-colors ${
        active
          ? 'border-accent text-accent'
          : 'border-transparent text-muted hover:text-foreground'
      }`}
    >
      {children}
    </button>
  );
}
