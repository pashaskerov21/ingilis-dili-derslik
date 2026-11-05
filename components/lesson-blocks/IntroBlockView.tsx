import type { IntroBlock } from '@/lib/types';
import { renderBold } from './bold';

/** Dərsin giriş paraqrafı — bir az böyük və işıqlı mətn. */
export function IntroBlockView({ block }: { block: IntroBlock }) {
  return (
    <p className="font-body text-[1.05rem] leading-relaxed text-foreground">
      {renderBold(block.text)}
    </p>
  );
}
