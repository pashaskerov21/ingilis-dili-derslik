import type { ContrastNoteBlock } from '@/lib/types';
import { renderBold } from './bold';

/** Azərbaycan dili ilə müqayisə qeydi — fərqli səth və sol vurğu xətti. */
export function ContrastNoteView({ block }: { block: ContrastNoteBlock }) {
  return (
    <aside className="border-l-2 border-accent bg-surface px-4 py-5 transition-colors duration-300 sm:px-5">
      <h2 className="font-display text-base text-foreground">{block.title}</h2>
      <p className="mt-2 font-body text-sm leading-relaxed text-muted">
        {renderBold(block.text)}
      </p>

      <ul className="mt-5 space-y-4">
        {block.pairs.map((pair, index) => (
          <li key={index}>
            <p className="font-mono text-sm leading-snug text-muted">
              <span aria-hidden="true" className="mr-1.5">
                ✗
              </span>
              <span className="line-through decoration-1">{pair.wrong}</span>
            </p>
            <p className="mt-1 font-mono text-sm leading-snug text-foreground">
              <span aria-hidden="true" className="mr-1.5 text-accent">
                ✓
              </span>
              {pair.right}
            </p>
            <p className="mt-1 font-body text-xs leading-snug text-muted">
              {pair.az}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
