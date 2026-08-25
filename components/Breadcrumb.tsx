import Link from 'next/link';

export interface Crumb {
  label: string;
  /** Verilməyibsə, cari səhifə sayılır və link olmur. */
  href?: string;
}

/** Qrammatika / Fəsil / Bölmə tipli sadə naviqasiya zənciri. */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Səhifə yolu" className="font-mono text-xs text-muted">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-x-2">
            {index > 0 ? (
              <span aria-hidden="true" className="text-line">
                /
              </span>
            ) : null}
            {item.href ? (
              <Link
                href={item.href}
                className="underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
