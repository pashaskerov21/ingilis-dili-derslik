import type { LessonBlock } from '@/lib/types';
import { ContrastNoteView } from './ContrastNoteView';
import { ExampleGroupView } from './ExampleGroupView';
import { ExerciseList } from './Exercise';
import { IntroBlockView } from './IntroBlockView';
import { MistakeTableView } from './MistakeTableView';
import { RuleBlockView } from './RuleBlockView';

function LessonBlockView({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case 'intro':
      return <IntroBlockView block={block} />;
    case 'rule':
      return <RuleBlockView block={block} />;
    case 'example-group':
      return <ExampleGroupView block={block} />;
    case 'contrast-note':
      return <ContrastNoteView block={block} />;
    case 'mistake-table':
      return <MistakeTableView block={block} />;
    case 'exercise':
      return <ExerciseList title={block.title} items={block.items} />;
    default:
      // Naməlum blok tipi — səssizcə buraxılır.
      return null;
  }
}

/** Dərsin bloklarını JSON-dakı sıra ilə render edir. */
export function LessonBlocks({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="space-y-10">
      {blocks.map((block, index) => (
        <LessonBlockView key={index} block={block} />
      ))}
    </div>
  );
}
