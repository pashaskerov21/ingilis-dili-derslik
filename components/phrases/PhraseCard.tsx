'use client';

import { useId, useState } from 'react';
import type { Phrase } from '@/lib/types';

/** Aşağı ox — nümunə açılanda 180° fırlanır. */
function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-3 w-3 transition-transform duration-200 ${
        isOpen ? 'rotate-180' : ''
      }`}
    >
      <path d="M2.5 4.5 6 8l3.5-3.5" />
    </svg>
  );
}

interface PhraseCardProps {
  phrase: Phrase;
}

/**
 * Tək ifadə kartı — defolt (bağlı) halda ifadə + tip etiketi + məna görünür;
 * kartına toxunanda nümunə cümlə (en/az) altında açılır. Açılış
 * `grid-rows-[0fr] → [1fr]` ilə edilir (ExerciseItemRow ilə eyni məntiq) ki,
 * `height: auto` animasiya edilə bilməməsi problemi yaranmasın. Nümunə HƏMİŞƏ
 * mövcuddur, ona görə şərti render lazım deyil.
 */
export function PhraseCard({ phrase }: PhraseCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div
      id={phrase.id}
      className={`scroll-mt-20 border-b border-line transition-colors duration-300 ${
        isOpen ? 'bg-accent/5' : ''
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group flex w-full cursor-pointer items-start justify-between gap-3 py-3 text-left transition-colors duration-200"
      >
        <span className="min-w-0">
          <span className="flex flex-wrap items-baseline gap-2">
            <span className="font-display text-base text-foreground">
              {phrase.phrase}
            </span>
            <span className="font-mono text-xs text-muted">{phrase.type}</span>
          </span>
          <span className="mt-0.5 block font-body text-sm text-accent">
            {phrase.meaning}
          </span>
        </span>

        <span className="mt-1 shrink-0 text-muted transition-colors duration-200 group-hover:text-accent">
          <Chevron isOpen={isOpen} />
        </span>
      </button>

      <div
        id={panelId}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        {/* Doldurma da bu qatın içindədir ki, bağlı halda hündürlük tam sıfır olsun. */}
        <div className="overflow-hidden">
          <div className="border-t border-line py-3">
            <p className="font-body text-sm leading-snug text-foreground">
              {phrase.example.en}
            </p>
            <p className="mt-1 font-body text-sm leading-snug text-muted">
              {phrase.example.az}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
