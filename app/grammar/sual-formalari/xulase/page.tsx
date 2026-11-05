import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";

export const metadata: Metadata = buildSectionMetadata(
  "sual-formalari",
  "xulase",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="sual-formalari" sectionSlug="xulase">
      <div className="space-y-8">
        <p className="text-base leading-relaxed text-muted">
          7 bölmənin ən əsas qaydaları — sürətli təkrar üçün. Ətraflı izah və
          daha çox nümunə üçün uyğun bölməyə qayıt.
        </p>

        <div className="divide-y divide-line border-y border-line">
          {/* 8.1 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                8.1
              </span>
              <h3 className="font-display text-lg text-foreground">
                Bəli/Xeyr sualları — tam təkrar
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                İlk köməkçi/modal + subyekt + qalan hissə (bütün zamanlarda
                eyni)
              </code>
              <p className="text-sm text-accent">
                ⚠ Bir neçə köməkçi olanda YALNIZ birincisi öndə: "Has the report
                been reviewed?"
              </p>
            </div>
          </div>

          {/* 8.2 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                8.2
              </span>
              <h3 className="font-display text-lg text-foreground">
                Wh-sual sözləri
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                what (açıq) vs which (məhdud) · how+sifət (old/long/often/far)
              </code>
              <p className="text-sm text-accent">
                ⚠ "How to...?" tam sual deyil — "How do I...?" lazımdır.
              </p>
            </div>
          </div>

          {/* 8.3 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                8.3
              </span>
              <h3 className="font-display text-lg text-foreground">
                Subyekt və obyekt sualları
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Sual sözü subyektdirsə → köməkçisiz, söz sırası dəyişmir
              </code>
              <p className="text-sm text-foreground">
                "Who sent this?" (✗ Who did send) — YALNIZ Simple zamanlarda
                keçərli.
              </p>
            </div>
          </div>

          {/* 8.4 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                8.4
              </span>
              <h3 className="font-display text-lg text-foreground">
                Dolayı suallar
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Could you tell me / Do you know + TƏSDİQ söz sırası
              </code>
              <p className="text-sm text-accent">
                ⚠ Bəli/xeyr sualında "if/whether" əlavə olunur, do-support itir.
              </p>
            </div>
          </div>

          {/* 8.5 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                8.5
              </span>
              <h3 className="font-display text-lg text-foreground">
                Question Tags
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Müsbət → mənfi tag · Mənfi → müsbət tag · I am → aren't I?
              </code>
              <p className="text-sm text-foreground">
                Gizli mənfi (never/nobody) → müsbət tag. İntonasiya:
                enən=təsdiq, qalxan=əsl sual.
              </p>
            </div>
          </div>

          {/* 8.6 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                8.6
              </span>
              <h3 className="font-display text-lg text-foreground">
                Mənfi suallar — dərinləşmə
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                gözlənti/təsdiq · təəccüb · yumşaq təklif (Why don't we...?)
              </code>
              <p className="text-sm text-accent">
                ⚠ Cavab FAKTA görə: "Didn't you finish? — Yes, I did"
                (bitirdisə, "yes").
              </p>
            </div>
          </div>

          {/* 8.7 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                8.7
              </span>
              <h3 className="font-display text-lg text-foreground">
                Echo və alternativ suallar
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Echo: söz sırası DƏYİŞMİR ("You're moving WHERE?") Alternativ:
                standart inversiya + or
              </code>
              <p className="text-sm text-foreground">
                İntonasiya mənanı dəyişir: ↗...↘ = seçim, ↗ (sonda) = bəli/xeyr.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LessonShell>
  );
}
