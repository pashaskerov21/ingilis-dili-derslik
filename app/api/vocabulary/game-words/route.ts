import { getSearchIndex } from '@/lib/vocabulary-data';

/**
 * `output: 'export'` altında route handler request-dən asılı ola bilmir
 * (bax: next.config.js, node_modules/next/dist/docs/.../static-exports.md)
 * — ona görə `?category=` server tərəfdə oxuna bilmir. Bu handler HƏMİŞƏ
 * bütün kateqoriyaların bütün sözlərini qaytarır; kateqoriya süzgəci
 * client tərəfdə (VocabularyGame) tətbiq olunur.
 */
export const dynamic = 'force-static';

export async function GET() {
  return Response.json(getSearchIndex());
}
