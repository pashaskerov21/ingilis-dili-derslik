import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";

export const metadata: Metadata = buildSectionMetadata("evezlikler", "xulase");

export default function Page() {
  return (
    <LessonShell chapterSlug="evezlikler" sectionSlug="xulase">
      <div className="space-y-8">
        <p className="text-base leading-relaxed text-muted">
          8 bölmənin ən əsas qaydaları — sürətli təkrar üçün. Ətraflı izah və
          daha çox nümunə üçün uyğun bölməyə qayıt.
        </p>

        <div className="divide-y divide-line border-y border-line">
          {/* 3.1 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                3.1
              </span>
              <h3 className="font-display text-lg text-foreground">
                Şəxs əvəzlikləri (subyekt)
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                I / you / he / she / it / we / they — felin subyekti
              </code>
              <p className="text-sm text-foreground">
                "X and I" — mürəkkəb subyektdə, özündən sonra, subyekt forması.
                Danışıqda "It's me" normadır ("It is I" — çox rəsmi).
              </p>
              <p className="text-sm text-accent">
                ⚠ "Me and Sarah" deyil, "Sarah and I".
              </p>
            </div>
          </div>

          {/* 3.2 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                3.2
              </span>
              <h3 className="font-display text-lg text-foreground">
                Obyekt əvəzlikləri
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                me / you / him / her / it / us / them — fel/sözönü obyekti
              </code>
              <p className="text-sm text-foreground">
                İki obyekt əvəzlik ard-arda gəlməməli — "to/for" ilə: "pass it
                to me".
              </p>
              <p className="text-sm text-accent">
                ⚠ "than" müqayisəsində forma mənanı dəyişir: "more than she" ≠
                "more than her".
              </p>
            </div>
          </div>

          {/* 3.3 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                3.3
              </span>
              <h3 className="font-display text-lg text-foreground">
                Mülkiyyət sifət/əvəzlikləri
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                my/mine · your/yours · his/his · her/hers · its/— · our/ours ·
                their/theirs
              </code>
              <p className="text-sm text-foreground">
                Sifət (+ isim) vs əvəzlik (isimsiz). "a friend of mine" =
                qeyri-müəyyən.
              </p>
              <p className="text-sm text-accent">
                ⚠ HEÇ BİRİNDƏ apostrof yoxdur: "hers", "theirs" — "her's" deyil.
              </p>
            </div>
          </div>

          {/* 3.4 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                3.4
              </span>
              <h3 className="font-display text-lg text-foreground">
                Refleksiv əvəzliklər
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                myself / yourself / himself / herself / itself / ourselves /
                themselves
              </code>
              <p className="text-sm text-foreground">
                Subyekt=obyekt olanda. "by + refleksiv" = tək, köməksiz.
                wash/dress/shave/sit down kimi fellər refleksiv TƏLƏB ETMİR.
              </p>
              <p className="text-sm text-accent">
                ⚠ "Contact John or myself" deyil, "John or me".
              </p>
            </div>
          </div>

          {/* 3.5 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                3.5
              </span>
              <h3 className="font-display text-lg text-foreground">
                Qarşılıqlı əvəzliklər
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                each other / one another — A→B və B→A (qarşılıqlı)
              </code>
              <p className="text-sm text-foreground">
                Mülkiyyət: each other's (apostrof "s"-dən ƏVVƏL). Subyekt ola
                bilməz.
              </p>
              <p className="text-sm text-accent">
                ⚠ "blamed themselves" (hər biri özünü) ≠ "blamed each other"
                (bir-birini).
              </p>
            </div>
          </div>

          {/* 3.6 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                3.6
              </span>
              <h3 className="font-display text-lg text-foreground">
                Göstərici əvəzliklər
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                this/these (yaxın) · that/those (uzaq)
              </code>
              <p className="text-sm text-foreground">
                Mətndə: "this" irəliyə (indi deyiləcək), "that" geriyə
                (deyilmiş). Telefonda: "Is that John?" / "This is David
                speaking."
              </p>
              <p className="text-sm text-accent">
                ⚠ "This shoes" deyil, "These shoes" (cəm isimlə).
              </p>
            </div>
          </div>

          {/* 3.7 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                3.7
              </span>
              <h3 className="font-display text-lg text-foreground">
                Qeyri-müəyyən əvəzliklər
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                some-/any-/no-/every- + -body/-one/-thing/-where
              </code>
              <p className="text-sm text-foreground">
                Sifət SONRA gəlir: "something important". no- özü mənfi, tək
                fel.
              </p>
              <p className="text-sm text-accent">
                ⚠ "important something" deyil, "something important".
              </p>
            </div>
          </div>

          {/* 3.8 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                3.8
              </span>
              <h3 className="font-display text-lg text-foreground">
                Əvəzedici one / ones
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                one (tək) / ones (cəm) — sayıla bilən ismi əvəz edir
              </code>
              <p className="text-sm text-foreground">
                Sifətlə: müəyyənedici məcburi ("a faster one"). Sifətsiz,
                some/any/both/ədəddən sonra: "ones" düşür ("I have some").
              </p>
              <p className="text-sm text-accent">
                ⚠ Sayıla bilməyən isimlə işlənmir — "some advice", "some one"
                yox.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LessonShell>
  );
}
