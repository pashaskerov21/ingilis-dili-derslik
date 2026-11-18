import { readFileSync } from 'node:fs';
import path from 'node:path';
import { Header } from '@/components/Header';

function inlineContent(text: string) {
  return text.split(/(`[^`]+`)/g).map((part, index) =>
    part.startsWith('`') && part.endsWith('`') ? (
      <code key={index} className="font-mono text-[0.9em]">{part.slice(1, -1)}</code>
    ) : part,
  );
}

function parseArticle(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const title = lines.find((line) => line.startsWith('# '))?.slice(2) ?? '';
  const termsStart = lines.findIndex((line) => /^## 1\./.test(line));
  const questionsStart = lines.findIndex((line) => /^## 2\./.test(line));
  const terms = lines.slice(termsStart + 2, questionsStart)
    .filter((line) => line.startsWith('|') && !line.includes('---'))
    .map((line) => line.split('|').slice(1, -1).map((cell) => cell.trim()));
  const questions = lines.slice(questionsStart + 1).join('\n')
    .split(/(?=^### Question )/m)
    .filter((block) => block.startsWith('### Question '))
    .map((block) => {
      const rows = block.split(/\r?\n/);
      const heading = rows[0].replace(/^### /, '');
      const answers: Record<'question' | 'answer' | 'translation', string[]> = {
        question: [], answer: [], translation: [],
      };
      let current: keyof typeof answers | null = null;
      for (const row of rows.slice(1)) {
        const line = row.trim();
        const labels = [
          ['**Sual:**', 'question'],
          ['**Answer:**', 'answer'],
          ['**Cavab:**', 'translation'],
        ] as const;
        const label = labels.find(([prefix]) => line.startsWith(prefix));
        if (label) {
          current = label[1];
          answers[current].push(line.slice(label[0].length).trim());
        } else if (line && line !== '---' && current) {
          answers[current].push(line);
        }
      }
      return {
        heading,
        question: answers.question.join(' '),
        answer: answers.answer.join(' '),
        translation: answers.translation.join(' '),
      };
    });
  return { title, terms, questions };
}

export function SoftwareArticle({ file, title }: { file: string; title: string }) {
  const markdown = readFileSync(
    path.join(process.cwd(), 'data/software/javascript', file),
    'utf-8',
  );
  const article = parseArticle(markdown);

  return (
    <main>
      <Header items={[
        { label: 'Ana səhifə', href: '/' },
        { label: 'Software', href: '/software/' },
        { label: 'JavaScript', href: '/software/javascript/' },
        { label: title },
      ]} />
      <h1 className="font-display text-3xl sm:text-4xl">{article.title}</h1>
      <section className="mt-10 space-y-4">
        <h2 className="font-display text-2xl">Terminlər</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-line text-sm">
            <thead>
              <tr className="border-b border-line text-left">
                {article.terms[0]?.map((cell) => <th key={cell} className="p-2 font-display">{cell}</th>)}
              </tr>
            </thead>
            <tbody>
              {article.terms.slice(1).map((row) => (
                <tr key={row[0]} className="border-b border-line last:border-0">
                  {row.map((cell, index) => <td key={index} className="p-2">{inlineContent(cell)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-12 space-y-5">
        <h2 className="font-display text-2xl">Interview Questions</h2>
        {article.questions.map((item) => (
          <article key={item.heading} className="space-y-3 border border-line p-4 sm:p-5">
            <h3 className="font-display text-lg">{inlineContent(item.heading)}</h3>
            <p><span className="font-semibold">Sual:</span> {inlineContent(item.question)}</p>
            <p><span className="font-semibold">Answer:</span> {inlineContent(item.answer)}</p>
            <p><span className="font-semibold">Cavab:</span> {inlineContent(item.translation)}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
