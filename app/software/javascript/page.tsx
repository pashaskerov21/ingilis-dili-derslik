import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { javascriptTopics } from '@/lib/software-topics';

export const metadata: Metadata = {
  title: 'JavaScript — Software — English',
  description: 'JavaScript mövzuları, terminlər və interview sualları.',
};

export default function JavaScriptPage() {
  return (
    <main>
      <Header items={[{ label: 'Ana səhifə', href: '/' }, { label: 'Software', href: '/software/' }, { label: 'JavaScript' }]} />
      <header>
        <h1 className="font-display text-3xl sm:text-4xl">JavaScript</h1>
      </header>
      <ul className="mt-10 border-t border-line">
        {javascriptTopics.map((topic) => (
          <li key={topic.href} className="border-b border-line">
            <Link href={topic.href} className="group flex items-start gap-4 py-5 transition-colors hover:text-accent">
              <span className="min-w-0 flex-1"><span className="block font-display text-lg">{topic.label}</span></span>
              <span aria-hidden="true" className="mt-1 font-mono text-sm text-line transition-colors group-hover:text-accent">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
