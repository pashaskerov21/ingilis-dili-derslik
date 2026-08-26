'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * Client-side keçidlərdə səhifəni yuxarı qaytarır.
 *
 * App Router eyni layout daxilində qalan route-larda scroll mövqeyini həmişə
 * sıfırlamır — dərslər arası "əvvəlki/növbəti" keçidində səhifə ortadan açılır.
 * Bu komponent root layout-a qoşulduğu üçün həm dərs, həm də siyahı
 * səhifələrində işləyir.
 *
 * Geri/irəli (popstate) keçidləri istisnadır: orada brauzerin bərpa etdiyi
 * əvvəlki mövqe saxlanılır, əks halda geri düyməsi həmişə səhifənin başına
 * atardı.
 */
export function ScrollToTop() {
  const pathname = usePathname();
  const isPopNavigation = useRef(false);

  useEffect(() => {
    const markPop = () => {
      isPopNavigation.current = true;
    };

    window.addEventListener('popstate', markPop);
    return () => window.removeEventListener('popstate', markPop);
  }, []);

  useEffect(() => {
    if (isPopNavigation.current) {
      isPopNavigation.current = false;
      return;
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
