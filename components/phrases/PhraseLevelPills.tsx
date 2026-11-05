'use client';

import type { PhraseLevel } from '@/lib/types';

const LEVELS: PhraseLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

// Pills zolağının hündürlüyü (h-11 = 44px) — PhraseLevelSection-un `top-11`
// sticky offset-i ilə eynidir.
const PILLS_HEIGHT_PX = 44;

/**
 * Kateqoriya görünüşünün yuxarısında sabit, üfüqi sürüşən səviyyə düymələri.
 * Klik uyğun PhraseLevelSection başlığına scroll edir. (Lüğətdəki
 * VocabLevelPills-in analoqu.)
 *
 * DİQQƏT: `el.scrollIntoView()` + `scroll-margin-top` qəsdən İSTİFADƏ
 * OLUNMUR — bu kombinasiya `position: sticky` əcdad daxilində brauzerlər
 * arasında (xüsusilə mobil Safari) uzlaşmır və "yarımçıq"/işləməyən scroll-a
 * səbəb olur. Bunun əvəzinə hədəf piksel dəyəri əl ilə hesablanıb birbaşa
 * `window.scrollTo`-ya verilir — bu, bütün brauzerlərdə eyni davranır.
 *
 * VACİB: mövqe hesablanarkən sticky `h3`-in ÖZÜNÜN deyil, onu əhatələyən
 * sadə (sticky olmayan) div-in `getBoundingClientRect()`-i istifadə olunur
 * (bax: VocabLevelPills-dəki geniş izah).
 */
export function PhraseLevelPills() {
  function handleClick(level: PhraseLevel) {
    const heading = document.getElementById(`level-${level}`);
    const wrapper = heading?.parentElement;
    if (!wrapper) return;

    const targetY =
      wrapper.getBoundingClientRect().top + window.scrollY - PILLS_HEIGHT_PX;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }

  return (
    <div className="sticky top-0 z-20 flex h-11 items-center gap-2 overflow-x-auto border-b border-line bg-paper/95 backdrop-blur-sm">
      {LEVELS.map((level) => (
        <button
          key={level}
          type="button"
          onClick={() => handleClick(level)}
          className="shrink-0 border border-line px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
        >
          {level}
        </button>
      ))}
    </div>
  );
}
