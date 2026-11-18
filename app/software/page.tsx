import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Software — English',
  description: 'Proqramlaşdırma mövzuları üzrə interview sualları və terminlər.',
};

const topics = [{ label: 'JavaScript', href: '/software/javascript/' }];

export default function SoftwarePage() {
  return (
    <main>
      <Header items={[{ label: 'Ana səhifə', href: '/' }, { label: 'Software' }]} />
      <header>
        <h1 className="font-display text-3xl sm:text-4xl">Software</h1>
        <p className="mt-3 font-body text-muted">
          Proqramlaşdırma mövzuları üzrə interview sualları və terminlər.
        </p>
      </header>
      <ul className="mt-10 border-t border-line">
        {topics.map((topic) => (
          <li key={topic.href} className="border-b border-line">
            <Link href={topic.href} className="group flex items-start gap-4 py-5 transition-colors hover:text-accent">
              <span className="min-w-0 flex-1">
                <span className="block font-display text-lg">{topic.label}</span>
              </span>
              <span aria-hidden="true" className="mt-1 font-mono text-sm text-line transition-colors group-hover:text-accent">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
