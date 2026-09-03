'use client';

import type { GameDirection, GameScope } from '@/lib/vocabulary-game';

interface GameDirectionStepProps {
  scope: GameScope;
  onSelect: (direction: GameDirection) => void;
  onBack: () => void;
}

/** Addım 2 — tərcümə istiqamətinin seçimi. */
export function GameDirectionStep({
  scope,
  onSelect,
  onBack,
}: GameDirectionStepProps) {
  return (
    <div className="mt-10">
      <button
        type="button"
        onClick={onBack}
        className="font-mono text-xs text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
      >
        ← geri
      </button>

      <h1 className="mt-4 font-display text-2xl sm:text-3xl">İstiqamət seç</h1>
      <p className="mt-3 font-body text-muted">
        {scope.type === 'overall' ? 'Ümumi Lüğət' : scope.titleAz}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => onSelect('en-az')}
          className="flex flex-col items-start gap-2 border border-line p-6 text-left transition-colors hover:border-accent hover:text-accent"
        >
          <span className="font-display text-xl">
            İngiliscə → Azərbaycanca
          </span>
          <span className="font-mono text-xs text-muted">word → tərcümə</span>
        </button>
        <button
          type="button"
          onClick={() => onSelect('az-en')}
          className="flex flex-col items-start gap-2 border border-line p-6 text-left transition-colors hover:border-accent hover:text-accent"
        >
          <span className="font-display text-xl">
            Azərbaycanca → İngiliscə
          </span>
          <span className="font-mono text-xs text-muted">tərcümə → word</span>
        </button>
      </div>
    </div>
  );
}
