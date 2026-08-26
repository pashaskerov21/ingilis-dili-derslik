import Link from 'next/link';

export interface Crumb {
  label: string;
  /** Verilməyibsə, cari səhifə sayılır və link olmur. */
  href?: string;
}

/**
 * Qrammatika / Fəsil / Bölmə tipli naviqasiya zənciri.
 *
 * Geniş ekranda tam zəncir görünür — uzun adlar sətri sındırmır, lazım gələndə
 * zolaq üfüqi sürüşdürülür. Dar ekranda zəncir sadələşir: yalnız valideyn
 * səhifəyə "←" düyməsi və cari səhifənin adı qalır.
 */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  const current = items[items.length - 1];
  // Mobil "←" düyməsinin hədəfi: zəncirdəki sonuncu keçidli element.
  const parent = items
    .filter((item): item is Required<Crumb> => Boolean(item.href))
    .pop();

  if (!current) {
    return null;
  }

  return (
    <nav aria-label="Səhifə yolu" className="font-mono text-xs text-muted">
      {/* sm və yuxarı: tam zəncir. */}
      <ol className="hidden items-center gap-x-2 overflow-x-auto whitespace-nowrap sm:flex">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex shrink-0 items-center gap-x-2">
            {index > 0 ? (
              <span aria-hidden="true" className="text-line">
                /
              </span>
            ) : null}
            {item.href ? (
              <Link
                href={item.href}
                className="block max-w-[14rem] truncate py-2 underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className="block max-w-[14rem] truncate py-2 text-foreground"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* sm-dən aşağı: "← valideyn" + cari səhifə. */}
      <ol className="flex items-center gap-x-2 sm:hidden">
        {parent && parent !== current ? (
          <li className="flex shrink-0 items-center gap-x-2">
            <Link
              href={parent.href}
              className="flex max-w-[9rem] items-center gap-x-1 py-2 underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              <span aria-hidden="true" className="shrink-0">
                ←
              </span>
              <span className="truncate">{parent.label}</span>
            </Link>
            <span aria-hidden="true" className="text-line">
              /
            </span>
          </li>
        ) : null}
        <li className="min-w-0">
          <span aria-current="page" className="block truncate py-2 text-foreground">
            {current.label}
          </span>
        </li>
      </ol>
    </nav>
  );
}
