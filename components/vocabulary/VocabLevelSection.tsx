import type { VocabLevel, VocabWord } from '@/lib/types';
import { VocabWordCard } from '@/components/vocabulary/VocabWordCard';

interface VocabLevelSectionProps {
  level: VocabLevel;
  words: VocabWord[];
}

/**
 * Kateqoriya görünüşündə bir səviyyə qrupu. Başlıq yapışqandır (sticky) —
 * VocabLevelPills zolağının (h-11) altında qalır, üstünə minmir. `id`
 * VocabLevelPills-dəki anchor keçidləri üçündür.
 */
export function VocabLevelSection({ level, words }: VocabLevelSectionProps) {
  if (words.length === 0) {
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
      {words.map((word) => (
        <VocabWordCard key={word.id} word={word} showLevel={false} />
      ))}
    </div>
  );
}
