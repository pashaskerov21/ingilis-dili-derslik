import type { MistakeTableBlock } from '@/lib/types';

/**
 * Tipik səhvlər cədvəli.
 * Tək DOM ağacı: geniş ekranda real cədvəl, dar ekranda hər sətir karta çevrilir
 * (display siniflərini dəyişməklə) — mobil ekranda üfüqi scroll olmur.
 */
export function MistakeTableView({ block }: { block: MistakeTableBlock }) {
  return (
    <section>
      <h2 className="font-display text-lg text-foreground">Tez-tez edilən səhvlər</h2>

      <table className="mt-5 w-full border-collapse text-left">
        <thead className="hidden sm:table-header-group">
          <tr className="border-b border-line">
            <th className="w-2/5 pb-2 pr-3 font-mono text-xs font-normal uppercase tracking-wide text-muted">
              Səhv
            </th>
            <th className="w-2/5 pb-2 pr-3 font-mono text-xs font-normal uppercase tracking-wide text-muted">
              Düzgün
            </th>
            <th className="pb-2 font-mono text-xs font-normal uppercase tracking-wide text-muted">
              İzah
            </th>
          </tr>
        </thead>

        <tbody className="block sm:table-row-group">
          {block.rows.map((row, index) => (
            <tr
              key={index}
              className="mb-3 block border border-line p-3 transition-colors duration-300 last:mb-0 sm:mb-0 sm:table-row sm:border-0 sm:border-b sm:p-0"
            >
              <td className="block py-0 pr-3 align-top font-mono text-sm leading-snug text-muted sm:table-cell sm:py-3">
                <span aria-hidden="true" className="mr-1.5 sm:hidden">
                  ✗
                </span>
                <span className="line-through decoration-1">{row.wrong}</span>
              </td>
              <td className="mt-1 block py-0 pr-3 align-top font-mono text-sm leading-snug text-foreground sm:mt-0 sm:table-cell sm:py-3">
                <span aria-hidden="true" className="mr-1.5 text-accent sm:hidden">
                  ✓
                </span>
                {row.right}
              </td>
              <td className="mt-2 block align-top font-body text-xs leading-snug text-muted sm:mt-0 sm:table-cell sm:py-3 sm:text-sm">
                {row.az}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
