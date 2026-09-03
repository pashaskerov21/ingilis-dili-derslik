// data/grammar.json və data/vocabulary/index.json-dan bütün statik səhifə
// URL-lərini çıxarıb public/precache-urls.json-a yazır — sw.js bunu fetch
// edib presache siyahısı kimi istifadə edir (bax: public/sw.js).
// İşlətmək: node scripts/generate-precache-list.mjs (npm run build zamanı avtomatik).
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const grammar = JSON.parse(
  readFileSync(join(root, 'data/grammar.json'), 'utf8')
);
const vocabIndex = JSON.parse(
  readFileSync(join(root, 'data/vocabulary/index.json'), 'utf8')
);

const urls = new Set([
  '/',
  '/grammar/',
  '/vocabulary/',
  '/vocabulary/game/',
  // Route handler-lər `trailingSlash`-a (next.config.js) tabe deyil.
  '/api/vocabulary/game-words',
]);

for (const chapter of grammar.chapters) {
  urls.add(`/grammar/${chapter.slug}/`);

  for (const section of chapter.sections) {
    urls.add(`/grammar/${chapter.slug}/${section.slug}/`);
  }

  urls.add(`/grammar/${chapter.slug}/${chapter.chapterReview.slug}/`);
  urls.add(`/grammar/${chapter.slug}/${chapter.exampleBank.slug}/`);

  // Yalnız bəzi fəsillərdə olur (məs. Fəsil 4-ün qeyri-müntəzəm fellər cədvəli).
  if (chapter.irregularVerbsTable) {
    urls.add(`/grammar/${chapter.slug}/${chapter.irregularVerbsTable.slug}/`);
  }
}

for (const category of vocabIndex.categories) {
  urls.add(`/vocabulary/${category.slug}/`);
}

const sorted = [...urls].sort();
const outPath = join(root, 'public/precache-urls.json');
writeFileSync(outPath, JSON.stringify(sorted, null, 2) + '\n');

console.log(`✓ precache-urls.json: ${sorted.length} URL`);
