// "Yaz və Yoxla" oyununun localStorage-a əsaslanan rekord saxlanması.
// Qayda (bax: app/vocabulary/page.tsx-dəki digər client state nümunələri):
//   1. SSR-safe — hər funksiya əvvəlcə `typeof window` yoxlayır.
//   2. Heç vaxt exception atmır — try/catch, uğursuz olsa sakitcə default qaytarır.
//   3. React-a useSyncExternalStore ilə reaktiv bağlanır.
'use client';

import { useSyncExternalStore } from 'react';

export type HighScoreScope = 'overall' | { category: string };

interface HighScoreRecord {
  score: number;
}

const CHANGE_EVENT = 'vocab-highscore-change';

function scopeKey(scope: HighScoreScope): string {
  return scope === 'overall'
    ? 'vocab-highscore:overall'
    : `vocab-highscore:category:${scope.category}`;
}

function readScore(key: string): number {
  if (typeof window === 'undefined') return 0;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return 0;
    const parsed = JSON.parse(raw) as HighScoreRecord;
    return typeof parsed.score === 'number' ? parsed.score : 0;
  } catch {
    return 0;
  }
}

export function getHighScore(scope: HighScoreScope): number {
  return readScore(scopeKey(scope));
}

/** Yalnız `newScore` mövcud rekorddan yüksəkdirsə yazır. Yeni rekord qoyulubsa true qaytarır. */
export function setHighScoreIfHigher(
  scope: HighScoreScope,
  newScore: number
): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const key = scopeKey(scope);
    if (newScore <= readScore(key)) return false;

    const record: HighScoreRecord = { score: newScore };
    window.localStorage.setItem(key, JSON.stringify(record));
    // `storage` hadisəsi yalnız DİGƏR tab-larda tətikləndiyi üçün, cari
    // tab-dakı reaktiv oxuyucuları xəbərdar etmək üçün öz hadisəmizi yayırıq.
    window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
    return true;
  } catch {
    return false;
  }
}

function subscribe(onChange: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function getServerSnapshot(): number {
  return 0;
}

/** Rekordu reaktiv oxuyur — dəyişəndə komponent avtomatik yenidən render olunur. */
export function useHighScore(scope: HighScoreScope): number {
  return useSyncExternalStore(
    subscribe,
    () => getHighScore(scope),
    getServerSnapshot
  );
}
