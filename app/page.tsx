import Link from 'next/link';
import { SoonBadge } from '@/components/SoonBadge';

interface ModuleCard {
  code: string;
  title: string;
  description: string;
  href?: string;
}

const modules: ModuleCard[] = [
  {
    code: '01',
    title: 'Qrammatika',
    description: 'Sıfırdan ardıcıl kurikulum — fəsil-fəsil, səviyyəsiz.',
    href: '/grammar',
  },
  {
    code: '02',
    title: 'Lüğət',
    description: 'A1–C2 səviyyələri üzrə söz ehtiyatı.',
  },
  {
    code: '03',
    title: 'Mətnlər',
    description: 'Səviyyəyə uyğun oxu mətnləri.',
  },
  {
    code: '04',
    title: 'Testlər',
    description: 'Bölmə testləri və qarışıq təkrar.',
  },
];

export default function HomePage() {
  return (
    <main>
      <header>
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Learn English
        </p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl">
          Sıfırdan İngilis Dili
        </h1>
        <p className="mt-3 font-body text-muted">
          Addım-addım qrammatika, səviyyələr üzrə lüğət və mətnlər, təkrar
          testləri.
        </p>
      </header>

      <ul className="mt-10 border-t border-line">
        {modules.map((module) => (
          <li key={module.code} className="border-b border-line">
            {module.href ? (
              <Link
                href={module.href}
                className="group flex items-start gap-4 py-5 transition-colors hover:text-accent"
              >
                <span className="mt-1 font-mono text-xs text-muted">
                  {module.code}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-lg">
                    {module.title}
                  </span>
                  <span className="mt-1 block font-body text-sm text-muted">
                    {module.description}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 font-mono text-sm text-line transition-colors group-hover:text-accent"
                >
                  →
                </span>
              </Link>
            ) : (
              <div
                aria-disabled="true"
                className="flex items-start gap-4 py-5 opacity-45"
              >
                <span className="mt-1 font-mono text-xs text-muted">
                  {module.code}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-lg">
                    {module.title}
                  </span>
                  <span className="mt-1 block font-body text-sm text-muted">
                    {module.description}
                  </span>
                </span>
                <span className="mt-1.5">
                  <SoonBadge />
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
