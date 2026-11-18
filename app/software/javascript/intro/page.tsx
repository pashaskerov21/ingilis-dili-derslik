import type { Metadata } from 'next';
import { SoftwareArticle } from '@/components/software/SoftwareArticle';

export const metadata: Metadata = { title: 'JavaScript Introduction — English' };

export default function JavaScriptIntroPage() {
  return <SoftwareArticle file="00-intro.md" title="Intro" />;
}
