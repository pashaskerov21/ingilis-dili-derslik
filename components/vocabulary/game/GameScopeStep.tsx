'use client';

import { useState } from 'react';
import type { VocabCategory } from '@/lib/types';
import type { GameScope } from '@/lib/vocabulary-game';

interface GameScopeStepProps {
  categories: VocabCategory[];
  onSelect: (scope: GameScope) => void;
}

/** Addım 1 — əhatə seçimi: Ümumi Lüğət ya konkret kateqoriya. */
export function GameScopeStep({ categories, onSelect }: GameScopeStepProps) {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="mt-10">
      <h1 className="font-display text-2xl sm:text-3xl">Yaz və Yoxla</h1>
      <p className="mt-3 font-body text-muted">
        Sözü tərcümə edərək skor topla. Bir səhv — oyun bitir.
      </p>

      {!showCategories ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <ChoiceCard
            title="Ümumi Lüğət"
            description="Bütün kateqoriyalardan qarışıq sözlər"
            onClick={() => onSelect({ type: 'overall' })}
          />
          <ChoiceCard
            title="Kateqoriya seç"
            description="Tək bir kateqoriya üzərində oyna"
            onClick={() => setShowCategories(true)}
          />
        </div>
      ) : (
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setShowCategories(false)}
            className="font-mono text-xs text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            ← geri
          </button>

          <ul className="mt-4 border-t border-line">
            {categories.map((category) => (
              <li key={category.slug} className="border-b border-line">
                <button
                  type="button"
                  onClick={() =>
                    onSelect({
                      type: 'category',
                      slug: category.slug,
                      titleAz: category.titleAz,
                    })
                  }
                  className="group flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-accent"
                >
                  <span className="font-display text-base">
                    {category.titleAz}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-line transition-colors group-hover:text-accent"
                  >
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ChoiceCard({
  title,
  description,
  onClick,
}: {
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-start gap-2 border border-line p-6 text-left transition-colors hover:border-accent hover:text-accent"
    >
      <span className="font-display text-xl">{title}</span>
      <span className="font-body text-sm text-muted">{description}</span>
    </button>
  );
}
