import type { VocabWord } from '@/lib/types';
import { VocabWordCard } from '@/components/vocabulary/VocabWordCard';

interface VocabLetterSectionProps {
  letter: string;
  words: VocabWord[];
}

/**
 * Əlifba görünüşündə bir hərf qrupu. Bu görünüşdə üstündə başqa sticky zolaq
 * olmadığı üçün başlıq birbaşa viewport-un yuxarısına yapışır.
 */
export function VocabLetterSection({ letter, words }: VocabLetterSectionProps) {
  return (
    <div>
      <h3
        id={`letter-${letter}`}
        className="sticky top-0 z-10 border-b border-line bg-paper/95 py-2 font-mono text-sm text-accent backdrop-blur-sm"
      >
        {letter}
      </h3>
      {words.map((word) => (
        <VocabWordCard key={word.id} word={word} showLevel />
      ))}
    </div>
  );
}
