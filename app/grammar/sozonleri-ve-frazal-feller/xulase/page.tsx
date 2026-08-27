import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";

export const metadata: Metadata = buildSectionMetadata(
  "sozonleri-ve-frazal-feller",
  "xulase",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="sozonleri-ve-frazal-feller" sectionSlug="xulase">
      <div className="space-y-8">
        <p className="text-base leading-relaxed text-muted">
          8 bölmənin ən əsas qaydaları — sürətli təkrar üçün. Ətraflı izah və
          daha çox nümunə üçün uyğun bölməyə qayıt.
        </p>

        <div className="divide-y divide-line border-y border-line">
          {/* 7.1 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                7.1
              </span>
              <h3 className="font-display text-lg text-foreground">
                Yer sözönləri
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                in (geniş sahə) · on (səth/xətt) · at (dəqiq nöqtə)
              </code>
              <p className="text-sm text-foreground">
                in bed/hospital (funksiya). at office (iş) vs in office
                (fiziki). on bus/train, in car.
              </p>
              <p className="text-sm text-accent">
                ⚠ "arrive to" heç vaxt işlənmir — arrive in/at.
              </p>
            </div>
          </div>

          {/* 7.2 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                7.2
              </span>
              <h3 className="font-display text-lg text-foreground">
                Zaman sözönləri
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                in (ay/il/mövsüm) · on (gün) · at (dəqiq an)
              </code>
              <p className="text-sm text-foreground">
                by (son tarix) vs until (davam edən). for (müddət) vs since
                (başlanğıc). during (nə vaxt) vs for (nə qədər).
              </p>
              <p className="text-sm text-accent">
                ⚠ next/last ilə sözönü buraxılır: "next Friday", "on next
                Friday" yox.
              </p>
            </div>
          </div>

          {/* 7.3 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                7.3
              </span>
              <h3 className="font-display text-lg text-foreground">
                İstiqamət/hərəkət sözönləri
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                to (çatır) vs towards (istiqamət) · into/onto (hərəkət) ·
                through/across
              </code>
              <p className="text-sm text-foreground">
                Hərəkət felləri ilə işlənir (stative fellə yox).
              </p>
            </div>
          </div>

          {/* 7.4 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                7.4
              </span>
              <h3 className="font-display text-lg text-foreground">
                Fellə sabit sözönləri
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                depend ON · listen TO · wait FOR · consist OF · believe IN
              </code>
              <p className="text-sm text-foreground">
                Sözönündən sonra fel = gerund (-ing), infinitiv yox.
              </p>
              <p className="text-sm text-accent">
                ⚠ agree WITH (şəxs) ≠ agree ON/ABOUT (mövzu).
              </p>
            </div>
          </div>

          {/* 7.5 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                7.5
              </span>
              <h3 className="font-display text-lg text-foreground">
                Frazal fellərin əsasları
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                fel + particle = yeni məna (çox vaxt məcazi)
              </code>
              <p className="text-sm text-foreground">
                Qeyri-rəsmi registr — rəsmi yazıda tək sözlü qarşılıq (put off →
                postpone).
              </p>
            </div>
          </div>

          {/* 7.6 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                7.6
              </span>
              <h3 className="font-display text-lg text-foreground">
                Ayrıla bilən frazal fellər
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                isim: hər iki sıra düzgün · əvəzlik: MƏCBURİ arada
              </code>
              <p className="text-sm text-accent">
                ⚠ "turn off it" DEYİL — "turn it off".
              </p>
            </div>
          </div>

          {/* 7.7 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                7.7
              </span>
              <h3 className="font-display text-lg text-foreground">
                Ayrılmayan frazal fellər
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                obyekt (isim VƏ əvəzlik) həmişə SONDA
              </code>
              <p className="text-sm text-foreground">
                look after, run into, depend on, wait for — heç ayrılmır.
              </p>
            </div>
          </div>

          {/* 7.8 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                7.8
              </span>
              <h3 className="font-display text-lg text-foreground">
                Keçişsiz/üç hissəli frazal fellər
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                keçişsiz: obyektsiz (go off, work out) üç hissəli: HƏMİŞƏ
                ayrılmaz (look forward to, put up with)
              </code>
              <p className="text-sm text-accent">
                ⚠ "looking forward to see" deyil, "to seeing" (gerund).
              </p>
            </div>
          </div>
        </div>
      </div>
    </LessonShell>
  );
}
