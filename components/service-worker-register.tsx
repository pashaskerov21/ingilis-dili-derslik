'use client';

import { useEffect } from 'react';

/**
 * Production-da service worker-i qeydiyyatdan keçirir.
 *
 * Development-da ƏKSİNƏ — mövcud qeydiyyatları LƏĞV EDİR: `next dev`-də
 * cache-first SW köhnə JS chunk-ları qaytara bilər (hər dev restart-da
 * chunk hash-ları dəyişir), bu da React hidration uyğunsuzluğuna səbəb olur.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    if (process.env.NODE_ENV !== 'production') {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) registration.unregister();
      });
      return;
    }

    // `updateViaCache: 'none'`: brauzerin HTTP keşi sw.js-i heç vaxt
    // saxlamasın — next.config.js-dəki Cache-Control header-i statik
    // export-da server olmadığı üçün effektiv olmaya bilər, bu isə
    // hosting-dən asılı olmayan əlavə təminatdır.
    navigator.serviceWorker
      .register('/sw.js', { updateViaCache: 'none' })
      .catch(() => {
        // Qeydiyyat uğursuz olsa tətbiq adi (online) rejimdə işləməyə davam edir.
      });
  }, []);

  return null;
}
