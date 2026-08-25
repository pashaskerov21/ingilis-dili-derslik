import type { RuleBlock } from '@/lib/types';
import { ExampleList } from './ExamplePair';
import { renderBold } from './bold';

/** Nömrələnmiş qayda: sol tərəfdə mono nömrə, yanında qayda və nümunələr. */
export function RuleBlockView({ block }: { block: RuleBlock }) {
  return (
    <section className="sm:flex sm:gap-4">
      <p className="shrink-0 font-mono text-xs text-muted sm:mt-1 sm:w-12">
        {block.number}
      </p>

      <div className="mt-2 min-w-0 flex-1 sm:mt-0">
        <p className="font-body leading-relaxed text-foreground">
          {renderBold(block.text)}
        </p>

        <div className="mt-5">
          <ExampleList examples={block.examples} />
        </div>
      </div>
    </section>
  );
}
