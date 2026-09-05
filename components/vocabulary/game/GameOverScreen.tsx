'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  gameScopeToHighScoreScope,
  getCategoryLabel,
  getCorrectAnswer,
  getPrompt,
} from '@/lib/vocabulary-game';
import type { GameDirection, GameScope, GameWord } from '@/lib/vocabulary-game';
import { setHighScoreIfHigher } from '@/lib/vocabulary-highscores';

interface GameOverScreenProps {
  scope: GameScope;
  direction: GameDirection;
  score: number;
  missedWord: GameWord;
  onReplay: () => void;
}

/** Addım 4 — oyun bitdi ekranı: final skor, səhv cavab, rekord yenilənməsi. */
export function GameOverScreen({
  scope,
  direction,
  score,
  missedWord,
  onReplay,
}: GameOverScreenProps) {
  const [isNewRecord, setIsNewRecord] = useState(false);

  useEffect(() => {
    setIsNewRecord(setHighScoreIfHigher(gameScopeToHighScoreScope(scope), score));
    // Rekord yalnız bu ekran ilk açılanda bir dəfə yazılmalıdır.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // en-az istiqamətində düzgün cavab tərcümədir — birləşdirilmiş sözlərdə
  // hər tərcüməni öz kateqoriyası ilə annotasiya edirik. Digər hallarda sadə
  // cavab göstərilir, kateqoriya isə ayrıca kiçik etiket kimi verilir.
  const annotatedParts =
    direction === 'en-az' ? missedWord.mergedTranslationParts : undefined;

  return (
    <div className="mx-auto mt-10 flex max-w-md flex-col items-center px-4 text-center">
      <h1 className="font-display text-3xl sm:text-4xl">Oyun bitdi!</h1>

      <p className="mt-6 font-display text-5xl">{score}</p>

      {isNewRecord ? (
        <p className="mt-2 font-mono text-xs uppercase tracking-wide text-accent">
          Yeni rekord!
        </p>
      ) : null}

      <div className="mt-8 w-full border border-line p-5">
        <p className="font-mono text-xs text-muted">
          {getPrompt(missedWord, direction)}
        </p>
        {annotatedParts && annotatedParts.length > 0 ? (
          <p className="mt-1 font-display text-lg text-accent">
            {annotatedParts.map((part, index) => (
              <span key={index}>
                {index > 0 ? <span className="text-muted"> / </span> : null}
                {part.text}{' '}
                <span className="font-mono text-xs text-muted">
                  ({part.categoryTitleAz})
                </span>
              </span>
            ))}
          </p>
        ) : (
          <>
            <p className="mt-1 font-display text-lg text-accent">
              {getCorrectAnswer(missedWord, direction)}
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">
              {getCategoryLabel(missedWord)}
            </p>
          </>
        )}
      </div>

      <div className="mt-10 flex w-full flex-col gap-3">
        <button
          type="button"
          onClick={onReplay}
          className="w-full border border-accent py-3 font-mono text-xs uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-background"
        >
          Yenidən oyna
        </button>
        <Link
          href="/"
          className="w-full border border-line py-3 text-center font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:border-accent hover:text-accent"
        >
          Ana səhifəyə qayıt
        </Link>
      </div>
    </div>
  );
}
