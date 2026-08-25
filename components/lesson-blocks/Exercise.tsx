'use client';

import { useId, useState } from 'react';
import type { ExerciseBlock, ExerciseItem } from '@/lib/types';

/** Aşağı ox — cavab açılanda 180° fırlanır. */
function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-3 w-3 transition-transform duration-200 ${
        isOpen ? 'rotate-180' : ''
      }`}
    >
      <path d="M2.5 4.5 6 8l3.5-3.5" />
    </svg>
  );
}

/**
 * Tək məşq sətri: defolt olaraq yalnız sual görünür, sətrə toxunanda cavab
 * altında açılır. Açılış `grid-rows-[0fr] → [1fr]` ilə edilir ki, `height: auto`
 * animasiya edilə bilməməsi problemi yaranmasın.
 *
 * Nömrə CSS sayğacından (`counter(exercise)`) gəlir — ExerciseList `<ol>`
 * üzərində sayğacı sıfırlayır, hər sətir onu artırır.
 */
export function ExerciseItemRow({ prompt, answer, translation }: ExerciseItem) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <li
      className={`border border-line border-l-2 transition-colors duration-200 [counter-increment:exercise] ${
        isOpen ? 'border-l-accent' : 'border-l-line'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group flex w-full cursor-pointer items-start gap-3 px-4 py-4 text-left transition-colors duration-200 hover:bg-accent/5 active:bg-accent/10 sm:px-5"
      >
        <span
          aria-hidden="true"
          className="shrink-0 pt-0.5 font-mono text-xs text-muted before:content-[counter(exercise)'.']"
        />

        <span className="min-w-0 flex-1 font-mono text-[0.95rem] leading-snug text-foreground">
          {prompt}
        </span>

        <span className="shrink-0 pt-1 text-muted transition-colors duration-200 group-hover:text-accent">
          <Chevron isOpen={isOpen} />
        </span>
      </button>

      <div
        id={panelId}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        {/* Doldurma da bu qatın içindədir ki, bağlı halda hündürlük tam sıfır olsun. */}
        <div className="overflow-hidden">
          <div className="border-t border-line px-4 py-3 sm:px-5">
            <p className="font-mono text-[0.95rem] font-medium leading-snug text-foreground">
              {answer}
            </p>

            {translation ? (
              <p className="mt-1.5 font-body text-sm leading-snug text-muted">
                {translation}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </li>
  );
}

/** Başlıq + nömrələnmiş, açılıb-bağlanan məşq sətirləri. */
export function ExerciseList({ title, items }: ExerciseBlock) {
  return (
    <section className="space-y-3">
      <h4 className="font-display text-lg text-foreground">{title}</h4>

      <ol className="space-y-2.5 [counter-reset:exercise]">
        {items.map((item, index) => (
          <ExerciseItemRow
            key={index}
            prompt={item.prompt}
            answer={item.answer}
            translation={item.translation}
          />
        ))}
      </ol>
    </section>
  );
}
