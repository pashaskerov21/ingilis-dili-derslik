import type { VocabWord } from '@/lib/types';

interface VocabWordCardProps {
  word: VocabWord;
  /** Əlifba görünüşündə true — səviyyə nişanı sağda göstərilir. */
  showLevel: boolean;
}

/** Tək söz kartı — söz və tərcümə vizual olaraq ayrı təbəqələrdə. */
export function VocabWordCard({ word, showLevel }: VocabWordCardProps) {
  return (
    <div
      id={word.id}
      className="scroll-mt-20 flex items-start justify-between gap-3 border-b border-line py-3 transition-colors duration-300"
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="font-display text-base text-foreground">
            {word.word}
          </span>
          <span className="font-mono text-xs text-muted">
            {word.partOfSpeech}
          </span>
        </div>
        <p className="mt-0.5 font-body text-sm text-accent">
          {word.translation}
        </p>
      </div>

      {showLevel ? (
        <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-wide text-muted">
          {word.level}
        </span>
      ) : null}
    </div>
  );
}
