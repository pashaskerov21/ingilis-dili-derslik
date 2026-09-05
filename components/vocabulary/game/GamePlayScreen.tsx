'use client';

import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import {
  checkAnswer,
  gameScopeToHighScoreScope,
  getCategoryLabel,
  getCorrectAnswer,
  getPrompt,
  shuffle,
} from '@/lib/vocabulary-game';
import type { GameDirection, GameScope, GameWord } from '@/lib/vocabulary-game';
import { useHighScore } from '@/lib/vocabulary-highscores';

const FEEDBACK_DELAY_MS = 700;

type Feedback = 'idle' | 'correct' | 'incorrect';

interface GamePlayScreenProps {
  scope: GameScope;
  direction: GameDirection;
  words: GameWord[];
  onGameOver: (score: number, missedWord: GameWord) => void;
}

/** Addım 3 — oyun ekranı: bag-shuffle sıra ilə söz göstərir, cavabı yoxlayır. */
export function GamePlayScreen({
  scope,
  direction,
  words,
  onGameOver,
}: GamePlayScreenProps) {
  // "Bag" — qarışdırılmış sözlərin növbəsi; bitəndə yenidən qarışdırılır.
  const bagRef = useRef<GameWord[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const [currentWord, setCurrentWord] = useState<GameWord | null>(null);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<Feedback>('idle');

  const highScore = useHighScore(gameScopeToHighScoreScope(scope));

  function drawNextWord(): GameWord | undefined {
    if (bagRef.current.length === 0) {
      bagRef.current = shuffle(words);
    }
    return bagRef.current.pop();
  }

  useEffect(() => {
    setCurrentWord(drawNextWord() ?? null);
    // Yalnız mount zamanı ilk sözü çək — bu komponent hər yeni oyunda
    // VocabularyGame tərəfindən yenidən `key` ilə mount edilir.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (feedback === 'idle') inputRef.current?.focus();
  }, [feedback, currentWord]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (feedback !== 'idle' || !currentWord) return;

    const correctAnswer = getCorrectAnswer(currentWord, direction);

    if (checkAnswer(input, correctAnswer)) {
      setFeedback('correct');
      setScore((s) => s + 1);
      setTimeout(() => {
        setFeedback('idle');
        setInput('');
        setCurrentWord(drawNextWord() ?? null);
      }, FEEDBACK_DELAY_MS);
    } else {
      setFeedback('incorrect');
      setTimeout(() => onGameOver(score, currentWord), FEEDBACK_DELAY_MS);
    }
  }

  if (words.length === 0) {
    return (
      <p className="mt-10 text-center font-body text-sm text-muted">
        Bu əhatədə söz tapılmadı.
      </p>
    );
  }

  if (!currentWord) return null;

  const feedbackClass =
    feedback === 'correct'
      ? 'border-emerald-500 bg-emerald-500/10'
      : feedback === 'incorrect'
        ? 'border-rose-500 bg-rose-500/10'
        : 'border-line';

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-4">
      <div className="flex w-full items-center justify-between">
        <p className="font-display text-4xl">{score}</p>
        <p className="font-mono text-xs text-muted">Rekord: {highScore}</p>
      </div>

      <p className="mt-10 text-center font-display text-3xl sm:text-4xl">
        {getPrompt(currentWord, direction)}
      </p>

      <p className="mt-3 text-center font-mono text-xs uppercase tracking-wide text-muted">
        {getCategoryLabel(currentWord)}
      </p>

      <form onSubmit={handleSubmit} className="mt-8 w-full">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          disabled={feedback !== 'idle'}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="Tərcüməni yaz…"
          aria-label="Tərcümə"
          className={`w-full border bg-paper px-4 py-3 text-center font-body text-lg text-foreground placeholder:text-muted transition-colors duration-300 focus-visible:outline ${feedbackClass}`}
        />
        <button
          type="submit"
          disabled={feedback !== 'idle'}
          className="mt-4 w-full border border-line py-3 font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:border-accent hover:text-accent disabled:opacity-50"
        >
          Yoxla
        </button>
      </form>
    </div>
  );
}
