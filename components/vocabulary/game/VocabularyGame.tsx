'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { GameDirectionStep } from '@/components/vocabulary/game/GameDirectionStep';
import { GameOverScreen } from '@/components/vocabulary/game/GameOverScreen';
import { GamePlayScreen } from '@/components/vocabulary/game/GamePlayScreen';
import { GameScopeStep } from '@/components/vocabulary/game/GameScopeStep';
import type { VocabCategory } from '@/lib/types';
import { mergeDuplicateWordsForOverallMode } from '@/lib/vocabulary-game';
import type { GameDirection, GameScope, GameWord } from '@/lib/vocabulary-game';

type Step = 'scope' | 'direction' | 'playing' | 'gameover';

interface GameOverData {
  score: number;
  missedWord: GameWord;
}

interface VocabularyGameProps {
  categories: VocabCategory[];
}

/**
 * Oyunun addım-addım state maşını. Sözlər `/api/vocabulary/game-words`-dan
 * bir dəfə fetch olunur (bax: o route-un statik export qeydinə) — əhatə
 * (ümumi/kateqoriya) süzgəci bu fetch olunmuş tam siyahı üzərində burada,
 * client tərəfdə tətbiq olunur.
 */
export function VocabularyGame({ categories }: VocabularyGameProps) {
  const searchParams = useSearchParams();
  const initialCategory = categories.find(
    (category) => category.slug === searchParams.get('category')
  );

  const [step, setStep] = useState<Step>(initialCategory ? 'direction' : 'scope');
  const [scope, setScope] = useState<GameScope>(
    initialCategory
      ? { type: 'category', slug: initialCategory.slug, titleAz: initialCategory.titleAz }
      : { type: 'overall' }
  );
  const [direction, setDirection] = useState<GameDirection>('en-az');
  const [words, setWords] = useState<GameWord[] | null>(null);
  const [gameOverData, setGameOverData] = useState<GameOverData | null>(null);
  // GamePlayScreen-i hər yeni oyunda sıfırdan mount etmək üçün.
  const [playKey, setPlayKey] = useState(0);

  useEffect(() => {
    let cancelled = false;

    fetch('/api/vocabulary/game-words')
      .then((res) => res.json())
      .then((data: GameWord[]) => {
        if (!cancelled) setWords(data);
      })
      .catch(() => {
        if (!cancelled) setWords([]);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const poolWords = useMemo(() => {
    if (!words) return null;
    return scope.type === 'overall'
      ? mergeDuplicateWordsForOverallMode(words)
      : words.filter((word) => word.categorySlug === scope.slug);
  }, [words, scope]);

  function handleScopeSelected(nextScope: GameScope) {
    setScope(nextScope);
    setStep('direction');
  }

  function handleDirectionSelected(nextDirection: GameDirection) {
    setDirection(nextDirection);
    setGameOverData(null);
    setPlayKey((key) => key + 1);
    setStep('playing');
  }

  function handleGameOver(score: number, missedWord: GameWord) {
    setGameOverData({ score, missedWord });
    setStep('gameover');
  }

  function handleReplay() {
    setGameOverData(null);
    setPlayKey((key) => key + 1);
    setStep('playing');
  }

  return (
    <>
      {step !== 'playing' ? (
        <Header
          items={[
            { label: 'Ana səhifə', href: '/' },
            { label: 'Lüğət', href: '/vocabulary' },
            { label: 'Yaz və Yoxla' },
          ]}
          back={{ href: '/vocabulary', label: 'Lüğətə qayıt' }}
        />
      ) : null}

      {step === 'scope' ? (
        <GameScopeStep categories={categories} onSelect={handleScopeSelected} />
      ) : null}

      {step === 'direction' ? (
        <GameDirectionStep
          scope={scope}
          onSelect={handleDirectionSelected}
          onBack={() => setStep('scope')}
        />
      ) : null}

      {step === 'playing' ? (
        poolWords ? (
          <GamePlayScreen
            key={playKey}
            scope={scope}
            direction={direction}
            words={poolWords}
            onGameOver={handleGameOver}
          />
        ) : (
          <p className="mt-10 text-center font-body text-sm text-muted">
            Yüklənir…
          </p>
        )
      ) : null}

      {step === 'gameover' && gameOverData ? (
        <GameOverScreen
          scope={scope}
          direction={direction}
          score={gameOverData.score}
          missedWord={gameOverData.missedWord}
          onReplay={handleReplay}
        />
      ) : null}
    </>
  );
}
