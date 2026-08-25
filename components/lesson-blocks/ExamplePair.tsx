import type { ExamplePair as ExamplePairType } from '@/lib/types';

/**
 * Bir nümunə: üstdə ingiliscə cümlə, altında tərcümə.
 * İkisi arasında minimal boşluq (mt-1) — cütlüklər arasında isə açıq boşluq
 * (ExampleList-dəki space-y-4) ki, mobil ekranda hər cüt ayrıca blok görünsün.
 */
export function ExamplePair({ en, az }: ExamplePairType) {
  return (
    <li className="border-l-2 border-line pl-3 transition-colors duration-300">
      <p className="font-mono text-[0.95rem] leading-snug tracking-tight text-foreground">
        {en}
      </p>
      <p className="mt-1 font-body text-sm leading-snug text-muted">{az}</p>
    </li>
  );
}

/** Nümunə siyahısı — cütlər arasında aydın vizual ayrılıq. */
export function ExampleList({ examples }: { examples: ExamplePairType[] }) {
  return (
    <ul className="space-y-4">
      {examples.map((example, index) => (
        <ExamplePair key={index} en={example.en} az={example.az} />
      ))}
    </ul>
  );
}
