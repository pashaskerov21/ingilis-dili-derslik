// Custom service worker — statik export (output: 'export') üçün "presache +
// versiyalı keş + cache-first statik / network-first səhifə" strategiyası.
// next-pwa istifadə olunmur, çünki tam statik export-da elə bir ehtiyac yoxdur.

const CACHE_VERSION = 'v1';
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const PAGES_CACHE = `pages-${CACHE_VERSION}`;

// Presache siyahısı yüklənməsə belə minimum bunlar keşlənməyə çalışılır.
const CORE_URLS = ['/', '/grammar/', '/vocabulary/'];

self.addEventListener('install', (event) => {
  event.waitUntil(precacheAll());
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== PAGES_CACHE)
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // GET olmayan sorğulara (POST və s.) toxunma.
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // Xarici origin-ə toxunma.
  if (url.origin !== self.location.origin) return;

  // Fayl adında hash olduğu üçün heç vaxt dəyişmir — cache-first.
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Səhifələr və /api/vocabulary/* — network-first, offline-da keşə fallback.
  event.respondWith(networkFirst(request));
});

/** CORE_URLS + data-dan generasiya olunan bütün səhifələri, sonra onların JS/CSS chunk-larını keşləyir. */
async function precacheAll() {
  const pagesCache = await caches.open(PAGES_CACHE);
  const staticCache = await caches.open(STATIC_CACHE);

  let generatedUrls = [];
  try {
    const res = await fetch('/precache-urls.json', { cache: 'no-cache' });
    if (res.ok) generatedUrls = await res.json();
  } catch {
    // Siyahı yüklənməsə belə CORE_URLS aşağıda keşlənəcək.
  }

  const pageUrls = new Set([...CORE_URLS, ...generatedUrls]);

  await Promise.all([...pageUrls].map((url) => cacheOne(pagesCache, url)));

  // Səhifələrin HTML-indən JS/CSS chunk path-larını çıxarıb ayrıca keşlə —
  // bu addım olmadan offline açılan səhifə hidrasiya oluna bilmir, çünki
  // /_next/static/... chunk-ları keşdə olmur. ƏN VACİB addım budur.
  const chunkUrls = new Set();
  for (const url of pageUrls) {
    try {
      const cached = await pagesCache.match(url);
      if (!cached) continue;

      const html = await cached.clone().text();
      for (const match of html.matchAll(/\ssrc="(\/_next\/static\/[^"]+)"/g)) {
        chunkUrls.add(match[1]);
      }
      for (const match of html.matchAll(/\shref="(\/_next\/static\/[^"]+\.css)"/g)) {
        chunkUrls.add(match[1]);
      }
    } catch {
      // Bir səhifədən chunk çıxarıla bilməsə də digərləri ilə davam et.
    }
  }

  await Promise.all([...chunkUrls].map((url) => cacheOne(staticCache, url)));
}

/** Tək URL-i fetch edib keşə yazır — uğursuz olsa quraşdırmanı dayandırmır. */
async function cacheOne(cache, url) {
  try {
    const res = await fetch(url, { cache: 'no-cache' });
    if (res.ok) await cache.put(url, res);
  } catch {
    // Bu URL-i ötür, quraşdırma davam etsin.
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  const res = await fetch(request);
  if (res.ok) {
    const cache = await caches.open(STATIC_CACHE);
    cache.put(request, res.clone());
  }
  return res;
}

async function networkFirst(request) {
  try {
    const res = await fetch(request);
    if (res.ok) {
      const cache = await caches.open(PAGES_CACHE);
      cache.put(request, res.clone());
    }
    return res;
  } catch {
    // Əvvəl dəqiq uyğunluq, tapılmasa axtarış (?) parametrlərini nəzərə
    // almadan təkrar axtarış (məs. /vocabulary/aile-ve-insanlar/?word=fam-001).
    const exact = await caches.match(request);
    if (exact) return exact;

    const ignoringSearch = await caches.match(request, { ignoreSearch: true });
    if (ignoringSearch) return ignoringSearch;

    throw new Error(`Offline və keşdə tapılmadı: ${request.url}`);
  }
}
