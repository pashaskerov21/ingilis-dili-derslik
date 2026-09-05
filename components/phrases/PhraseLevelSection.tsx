import type { Phrase, PhraseLevel } from '@/lib/types';
import { PhraseCard } from '@/components/phrases/PhraseCard';

interface PhraseLevelSectionProps {
  level: PhraseLevel;
  phrases: Phrase[];
}

/**
 * Bir səviyyə qrupu. Başlıq yapışqandır (sticky) — PhraseLevelPills zolağının
 * (h-11) altında qalır, üstünə minmir. `id` PhraseLevelPills-dəki keçidlər
 * üçündür. (Lüğətdəki VocabLevelSection-un birbaşa analoqu.)
 */
export function PhraseLevelSection({ level, phrases }: PhraseLevelSectionProps) {
  if (phrases.length === 0) {
    return null;
  }

  return (
    <div>
      <h3
        id={`level-${level}`}
        className="sticky top-11 z-10 scroll-mt-11 border-b border-line bg-paper/95 py-2 font-mono text-sm text-accent backdrop-blur-sm"
      >
        {level}
      </h3>
      {phrases.map((phrase) => (
        <PhraseCard key={phrase.id} phrase={phrase} />
      ))}
    </div>
  );
}
