import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";

export const metadata: Metadata = buildSectionMetadata(
  "murekkeb-cumle-qurma",
  "xulase",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="murekkeb-cumle-qurma" sectionSlug="xulase">
      <div className="space-y-8">
        <p className="text-base leading-relaxed text-muted">
          10 bölmənin ən əsas qaydaları — sürətli təkrar üçün. Ətraflı izah və
          daha çox nümunə üçün uyğun bölməyə qayıt.
        </p>

        <div className="divide-y divide-line border-y border-line">
          {/* 9.1 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                9.1
              </span>
              <h3 className="font-display text-lg text-foreground">
                Koordinativ bağlayıcılar (FANBOYS)
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                for, and, nor, but, or, yet, so
              </code>
              <p className="text-sm text-foreground">
                Vergül YALNIZ iki müstəqil cümlə birləşəndə. Eyni subyektin iki
                felində vergül YOX.
              </p>
              <p className="text-sm text-accent">
                ⚠ "nor" → inversiya tələb edir.
              </p>
            </div>
          </div>

          {/* 9.2 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                9.2
              </span>
              <h3 className="font-display text-lg text-foreground">
                Subordinativ bağlayıcılar
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                because/since/as (səbəb) · although/whereas (ziddiyyət) ·
                if/unless (şərt)
              </code>
              <p className="text-sm text-foreground">
                Budaq cümlə ƏVVƏLDƏ → vergül. SONDA → vergülsüz (whereas
                istisna).
              </p>
              <p className="text-sm text-accent">
                ⚠ because + budaq cümlə, because of + isim.
              </p>
            </div>
          </div>

          {/* 9.3 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                9.3
              </span>
              <h3 className="font-display text-lg text-foreground">
                Təyin cümlələri (defining)
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                who/that (şəxs) · which/that (əşya) — vergülsüz, VACİB məlumat
              </code>
              <p className="text-sm text-foreground">
                Subyekt → buraxıla bilməz. Obyekt → buraxıla bilər (zero
                relative).
              </p>
            </div>
          </div>

          {/* 9.4 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                9.4
              </span>
              <h3 className="font-display text-lg text-foreground">
                Təyin cümlələri (non-defining)
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                who/which/whose — VERGÜLLƏ, ƏLAVƏ (könüllü) məlumat
              </code>
              <p className="text-sm text-accent">
                ⚠ "that" QADAĞAN, əvəzlik HEÇ VAXT buraxılmır. Vergül məna
                dəyişir.
              </p>
            </div>
          </div>

          {/* 9.5 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                9.5
              </span>
              <h3 className="font-display text-lg text-foreground">
                Təyin cümlələri: səhvlər/qısaltma
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Qısaltma: yalnız SUBYEKT əvəzliklə (be→düşür, aktiv→-ing,
                passiv→-ed)
              </code>
              <p className="text-sm text-accent">
                ⚠ "what" heç vaxt that/which əvəzinə işlənmir. Əvəzlik təkrarı
                səhvdir.
              </p>
            </div>
          </div>

          {/* 9.6 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                9.6
              </span>
              <h3 className="font-display text-lg text-foreground">
                Sıfır və Birinci Şərt
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Sıfır: If+Present, Present (həmişə doğru) Birinci: If+Present,
                will+bazafel (real gələcək)
              </code>
              <p className="text-sm text-accent">
                ⚠ if-cümləsində HEÇ VAXT "will". in case ≠ if (ehtiyat vs şərt).
              </p>
            </div>
          </div>

          {/* 9.7 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                9.7
              </span>
              <h3 className="font-display text-lg text-foreground">
                İkinci Şərt Cümləsi
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                If+Past Simple, would+bazafel — xəyali/qeyri-real indi/gələcək
              </code>
              <p className="text-sm text-foreground">
                Keçmiş forma = uzaqlıq, VAXT DEYİL. "If I were" (rəsmi, hər
                şəxs).
              </p>
            </div>
          </div>

          {/* 9.8 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                9.8
              </span>
              <h3 className="font-display text-lg text-foreground">
                Üçüncü/Qarışıq Şərt
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Üçüncü: If+Past Perfect, would have+III (keçmiş peşmançılıq)
                Qarışıq: fərqli zaman qatları eyni cümlədə
              </code>
              <p className="text-sm text-accent">
                ⚠ if-cümləsində "would have" YOX — həmişə Past Perfect.
              </p>
            </div>
          </div>

          {/* 9.9 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                9.9
              </span>
              <h3 className="font-display text-lg text-foreground">
                Dolayı nitq: bəyanatlar
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Backshift: Present→Past, Past→Past Perfect, will→would
              </code>
              <p className="text-sm text-foreground">
                Əvəzlik və zaman/yer ifadələri dəyişir (today→that day). Hələ
                doğrudursa, dəyişməyə bilər.
              </p>
            </div>
          </div>

          {/* 9.10 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                9.10
              </span>
              <h3 className="font-display text-lg text-foreground">
                Dolayı nitq: sual/əmr
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Sual: asked + if/wh-söz + TƏSDİQ sıra Əmr: told/asked + obyekt +
                to-infinitiv
              </code>
              <p className="text-sm text-accent">
                ⚠ "ask" iki struktur: sual (if+cümlə) vs xahiş
                (obyekt+infinitiv).
              </p>
            </div>
          </div>
        </div>
      </div>
    </LessonShell>
  );
}
