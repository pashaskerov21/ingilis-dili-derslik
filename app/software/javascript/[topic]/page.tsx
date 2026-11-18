import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SoftwareArticle } from '@/components/software/SoftwareArticle';
import { javascriptTopics } from '@/lib/software-topics';

type TopicParams = { topic: string };

export function generateStaticParams(): TopicParams[] {
  return javascriptTopics
    .filter((topic) => topic.label !== 'Intro')
    .map((topic) => ({ topic: topic.href.split('/').filter(Boolean).at(-1)! }));
}

export async function generateMetadata({ params }: { params: Promise<TopicParams> }): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = javascriptTopics.find((item) => item.href.split('/').filter(Boolean).at(-1) === slug);
  return { title: topic ? `${topic.label} — JavaScript — English` : 'JavaScript — English' };
}

export default async function JavaScriptTopicPage({ params }: { params: Promise<TopicParams> }) {
  const { topic: slug } = await params;
  const topic = javascriptTopics.find((item) => item.href.split('/').filter(Boolean).at(-1) === slug);
  if (!topic || topic.label === 'Intro') notFound();
  return <SoftwareArticle file={topic.file} title={topic.label} />;
}
