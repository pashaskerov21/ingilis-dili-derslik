import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";

export const metadata: Metadata = buildSectionMetadata(
  "sifet-ve-zerfler",
  "xulase",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="sifet-ve-zerfler" sectionSlug="xulase">
      <div className="space-y-8">
        <p className="text-base leading-relaxed text-muted">
          8 bölmənin ən əsas qaydaları — sürətli təkrar üçün. Ətraflı izah və
          daha çox nümunə üçün uyğun bölməyə qayıt.
        </p>

        <div className="divide-y divide-line border-y border-line">
          {/* 6.1 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                6.1
              </span>
              <h3 className="font-display text-lg text-foreground">
                Sifətlərin sırası
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                OSASCOMP: Opinion → Size → Age → Shape → Colour → Origin →
                Material → Purpose
              </code>
              <p className="text-sm text-foreground">
                Rəy həmişə birinci. Kumulyativ (vergülsüz, sabit sıra) vs
                koordinativ (vergüllü, sərbəst sıra).
              </p>
            </div>
          </div>

          {/* 6.2 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                6.2
              </span>
              <h3 className="font-display text-lg text-foreground">
                Zərf düzəltmə
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                sifət + ly · good → well (qeyri-müntəzəm)
              </code>
              <p className="text-sm text-foreground">
                hard/hardly, late/lately — MƏNA dəyişir. Bağlayıcı fellərdən
                sonra (be/seem/taste) sifət, zərf yox.
              </p>
              <p className="text-sm text-accent">
                ⚠ "I feel badly" deyil, "I feel bad".
              </p>
            </div>
          </div>

          {/* 6.3 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                6.3
              </span>
              <h3 className="font-display text-lg text-foreground">
                Zərflərin növləri və yeri
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Tərz→sonda · Yer→sonda · Tezlik→orta (be-dən sonra) ·
                Zaman→sonda/əvvəldə
              </code>
              <p className="text-sm text-foreground">
                Sıra: Tərz→Yer→Tezlik→Zaman. Fel-obyekt heç vaxt ayrılmır.
              </p>
            </div>
          </div>

          {/* 6.4 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                6.4
              </span>
              <h3 className="font-display text-lg text-foreground">
                Comparative
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                1 heca: -er · 2 heca (-ful istisna): more/-er · 3+ heca: more
              </code>
              <p className="text-sm text-foreground">
                good→better, bad→worse, far→farther/further. -er VƏ more birgə
                YOX.
              </p>
            </div>
          </div>

          {/* 6.5 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                6.5
              </span>
              <h3 className="font-display text-lg text-foreground">
                Superlative
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                the + sifət + -est/most — "the" MƏCBURİ
              </code>
              <p className="text-sm text-foreground">
                in (yer) vs of (tərkib). "one of the + superlative + CƏM isim".
              </p>
            </div>
          </div>

          {/* 6.6 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                6.6
              </span>
              <h3 className="font-display text-lg text-foreground">
                Müqayisə strukturları
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                as...as (bərabərlik) · less (aşağı, universal forma)
              </code>
              <p className="text-sm text-foreground">
                Gücləndirmə: much/far/a lot (böyük fərq), a bit/slightly
                (kiçik). "far" cəm isimlə, "much" YOX.
              </p>
            </div>
          </div>

          {/* 6.7 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                6.7
              </span>
              <h3 className="font-display text-lg text-foreground">
                Dərəcələnən/dərəcələnməyən + gücləndiricilər
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                dərəcələnən → very/quite/extremely ekstremal/mütləq →
                absolutely/completely/totally
              </code>
              <p className="text-sm text-accent">
                ⚠ "quite" mənasını dəyişir: quite good (kifayət) ≠ quite amazing
                (tamamilə).
              </p>
            </div>
          </div>

          {/* 6.8 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                6.8
              </span>
              <h3 className="font-display text-lg text-foreground">
                İştirakçı sifətlər -ing/-ed
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                -ing = SƏBƏB (boring) · -ed = HİSS (bored)
              </code>
              <p className="text-sm text-accent">
                ⚠ "I'm boring" ≠ "I'm bored" — tamam fərqli məna!
              </p>
            </div>
          </div>
        </div>
      </div>
    </LessonShell>
  );
}
