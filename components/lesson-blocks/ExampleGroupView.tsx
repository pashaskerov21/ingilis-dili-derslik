import type { ExampleGroupBlock } from '@/lib/types';
import { ExampleList } from './ExamplePair';

/** Başlıqlı nümunə dəsti. */
export function ExampleGroupView({ block }: { block: ExampleGroupBlock }) {
  return (
    <section>
      <h2 className="font-display text-lg text-foreground">{block.title}</h2>
      <div className="mt-5">
        <ExampleList examples={block.examples} />
      </div>
    </section>
  );
}
