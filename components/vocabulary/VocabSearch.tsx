'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import type { VocabSearchEntry } from '@/lib/types';

const MIN_QUERY_LENGTH = 2;
const DEBOUNCE_MS = 300;

interface VocabSearchProps {
  /** Bütün kateqoriyalar üzrə yastılanmış söz siyahısı (build vaxtı hazırlanıb). */
  index: VocabSearchEntry[];
  /** Axtarış zolağının yanında göstərilən əlavə keçid (məs. "Oyna" düyməsi). */
  trailing?: ReactNode;
}

/** word/translation sahələrində case-insensitive, qismən uyğunlaşma axtarışı. */
function searchAllWords(
  index: VocabSearchEntry[],
  query: string
): VocabSearchEntry[] {
  const q = query.toLowerCase();
  return index.filter(
    (entry) =>
      entry.word.toLowerCase().includes(q) ||
      entry.translation.toLowerCase().includes(q)
  );
}

/**
 * Ekranın altında sabit axtarış zolağı — bütün lüğət üzrə ümumi axtarış,
 * kateqoriyadan asılı olmayaraq. Statik export olduğundan (server/API route
 * yoxdur) filtrasiya birbaşa brauzerdə, build vaxtı ötürülmüş `index`
 * massivi üzərində aparılır.
 *
 * Nəticələr zolağın ÜSTÜNDƏ, yuxarı doğru açılan overlay kimi göstərilir.
 * `flex-col-reverse` istifadə olunur ki, overlay-in hündürlüyünü əl ilə
 * hesablamağa (bax: VocabLevelPills-dəki PILLS_HEIGHT_PX) ehtiyac qalmasın —
 * DOM sırası [input, nəticələr] `flex-col-reverse` ilə vizual olaraq
 * [nəticələr yuxarıda, input aşağıda] kimi göstərilir.
 */
export function VocabSearch({ index, trailing }: VocabSearchProps) {
  const [query, setQuery] = useState('');
  const [debounced, setDebounced] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(query.trim()), DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  const isActive = debounced.length >= MIN_QUERY_LENGTH;
  const results = isActive ? searchAllWords(index, debounced) : [];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex flex-col-reverse border-t border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-2xl items-center gap-2 px-5 py-4 sm:px-6">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Söz axtar (ingiliscə və ya azərbaycanca)…"
          aria-label="Lüğətdə axtar"
          className="min-w-0 flex-1 border border-line bg-paper px-3 py-2 font-body text-sm text-foreground placeholder:text-muted focus-visible:outline"
        />
        {trailing}
      </div>

      {isActive ? (
        <div className="max-h-[65vh] overflow-y-auto border-b border-line">
          <div className="mx-auto w-full max-w-2xl px-5 sm:px-6">
            {results.length === 0 ? (
              <p className="py-8 font-body text-sm text-muted">
                Nəticə tapılmadı.
              </p>
            ) : (
              <ul className="divide-y divide-line">
                {results.map((entry) => (
                  <li key={`${entry.categorySlug}-${entry.id}`}>
                    <Link
                      href={`/vocabulary/${entry.categorySlug}?word=${entry.id}`}
                      className="group flex items-start justify-between gap-3 py-3 transition-colors hover:text-accent"
                    >
                      <span className="min-w-0">
                        <span className="flex flex-wrap items-baseline gap-2">
                          <span className="font-display text-base text-foreground">
                            {entry.word}
                          </span>
                          <span className="font-mono text-xs text-muted">
                            {entry.partOfSpeech}
                          </span>
                        </span>
                        <span className="mt-0.5 block font-body text-sm text-accent">
                          {entry.translation}
                        </span>
                      </span>
                      <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-wide text-muted">
                        {entry.categoryTitleAz}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
