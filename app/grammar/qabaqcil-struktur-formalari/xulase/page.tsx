import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";

export const metadata: Metadata = buildSectionMetadata(
  "qabaqcil-struktur-formalari",
  "xulase",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="qabaqcil-struktur-formalari" sectionSlug="xulase">
      <div className="space-y-8">
        <p className="text-base leading-relaxed text-muted">
          6 bölmənin ən əsas qaydaları — sürətli təkrar üçün. Ətraflı izah və
          daha çox nümunə üçün uyğun bölməyə qayıt.
        </p>

        <div className="divide-y divide-line border-y border-line">
          {/* 10.1 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                10.1
              </span>
              <h3 className="font-display text-lg text-foreground">
                Passiv növ: əsaslar
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                be (uyğun zamanda) + III forma — obyekt → subyekt
              </code>
              <p className="text-sm text-foreground">
                "by" könüllü. Modal+be (həmişə bazada)+III. Keçişsiz fellər
                passivləşmir.
              </p>
            </div>
          </div>

          {/* 10.2 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                10.2
              </span>
              <h3 className="font-display text-lg text-foreground">
                Passiv növ: qabaqcıl
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                It is said/believed that... · Subyekt + is said + to (have) +
                III have/get + obyekt + III forma (causative)
              </code>
              <p className="text-sm text-foreground">
                Causative: xidmət sifariş etmək VƏ ya başına gələn hadisə.
              </p>
            </div>
          </div>

          {/* 10.3 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                10.3
              </span>
              <h3 className="font-display text-lg text-foreground">Gerund</h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                fel-ing = isim: subyekt, obyekt, sözönündən sonra, "be"-dən
                sonra
              </code>
              <p className="text-sm text-accent">
                ⚠ Sözönündən sonra HƏMİŞƏ gerund, infinitiv YOX.
              </p>
            </div>
          </div>

          {/* 10.4 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                10.4
              </span>
              <h3 className="font-display text-lg text-foreground">
                İnfinitiv
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                to + fel (tam) · modal/make/let + bazafel (çılpaq)
              </code>
              <p className="text-sm text-foreground">
                Qavrayış felləri: tam hərəkət→çılpaq, davam edən→-ing.
              </p>
            </div>
          </div>

          {/* 10.5 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                10.5
              </span>
              <h3 className="font-display text-lg text-foreground">
                Gerund vs İnfinitiv
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                stop/remember/forget/try/regret — MƏNA DƏYİŞİR
              </code>
              <p className="text-sm text-accent">
                ⚠ Ümumi naxış: gerund=keçmiş/təcrübə, infinitiv=gələcək/niyyət.
              </p>
            </div>
          </div>

          {/* 10.6 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                10.6
              </span>
              <h3 className="font-display text-lg text-foreground">
                Wish / If only
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                indiki: wish+Past Simple · keçmiş: wish+Past Perfect narazılıq:
                wish+would (özünə aid YOX)
              </code>
              <p className="text-sm text-accent">
                ⚠ "I wish I would..." səhvdir — özünə "would" işlənmir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LessonShell>
  );
}
