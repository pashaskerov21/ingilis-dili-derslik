'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Breadcrumb, type Crumb } from '@/components/Breadcrumb';

interface BackLink {
  href: string;
  label: string;
}

interface HeaderProps {
  /** Breadcrumb zənciri — sonuncu element cari səhifədir. */
  items: Crumb[];
  /** Altda görünən "← geri" düyməsi. */
  back?: BackLink;
}

/**
 * Bütün qrammatika səhifələrinin yuxarı zolağı:
 * solda naviqasiya (breadcrumb + geri), sağda tema düyməsi.
 */
export function Header({ items, back }: HeaderProps) {
  return (
    <header className="mb-8 flex items-start justify-between gap-4 border-b border-line pb-4 transition-colors duration-300">
      <div className="min-w-0 flex-1">
        <Breadcrumb items={items} />
        {/* Mobil breadkramb özü "← valideyn" düyməsini göstərdiyi üçün bu
            təkrar keçid yalnız geniş ekranda görünür. */}
        {back ? (
          <Link
            href={back.href}
            className="mt-1 hidden font-mono text-xs text-muted underline-offset-4 transition-colors hover:text-accent hover:underline sm:inline-block"
          >
            ← {back.label}
          </Link>
        ) : null}
      </div>

      <ThemeToggle />
    </header>
  );
}

/** Açıq/tünd tema keçidi. */
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Server render-ində hansı temanın aktiv olduğu bilinmir, ona görə ikon
  // yalnız hidrasiyadan sonra göstərilir — eyni ölçüdə boş yer saxlanılır.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className="block h-9 w-9 shrink-0" aria-hidden="true" />;
  }

  const isLight = resolvedTheme === 'light';

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      aria-label={isLight ? 'Tünd temaya keç' : 'Açıq temaya keç'}
      title={isLight ? 'Tünd tema' : 'Açıq tema'}
      className="flex h-9 w-9 shrink-0 items-center justify-center border border-line text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
    >
      {isLight ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M19.1 4.9l-1.5 1.5M6.4 17.6l-1.5 1.5" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  );
}
