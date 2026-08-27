import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";

export const metadata: Metadata = buildSectionMetadata(
  "modal-feller",
  "xulase",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="modal-feller" sectionSlug="xulase">
      <div className="space-y-8">
        <p className="text-base leading-relaxed text-muted">
          10 bölmənin ən əsas qaydaları — sürətli təkrar üçün. Ətraflı izah və
          daha çox nümunə üçün uyğun bölməyə qayıt.
        </p>

        <div className="divide-y divide-line border-y border-line">
          {/* 5.1 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                5.1
              </span>
              <h3 className="font-display text-lg text-foreground">
                Bacarıq: can / could / be able to
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                can = indiki · could = keçmiş, ÜMUMİ bacarıq be able to = bütün
                zamanlar (can/could-un boşluğunu doldurur)
              </code>
              <p className="text-sm text-foreground">
                Konkret nailiyyət (təsdiqdə) → was/were able to, could YOX.
              </p>
              <p className="text-sm text-accent">
                ⚠ "will can" deyil, "will be able to".
              </p>
            </div>
          </div>

          {/* 5.2 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                5.2
              </span>
              <h3 className="font-display text-lg text-foreground">
                İcazə və xahiş
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                İcazə: can → could → may (artan nəzakət) Xahiş: can/could (may
                YOX)
              </code>
              <p className="text-sm text-accent">
                ⚠ "could" yalnız icazə İSTƏMƏK üçün, VERMƏK üçün "can/may"
                lazımdır.
              </p>
            </div>
          </div>

          {/* 5.3 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                5.3
              </span>
              <h3 className="font-display text-lg text-foreground">
                Öhdəlik: must / have to / need to
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                must = daxili (danışanın özü) · have to = xarici (qayda/qanun)
              </code>
              <p className="text-sm text-foreground">
                Sualda: have to üstünlük təşkil edir. Keçmiş/gələcək: had to /
                will have to.
              </p>
            </div>
          </div>

          {/* 5.4 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                5.4
              </span>
              <h3 className="font-display text-lg text-foreground">
                Zərurət yoxluğu və qadağa
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                mustn't = QADAĞAN · don't have to/needn't = məcburi DEYİL (seçim
                var)
              </code>
              <p className="text-sm text-accent">
                ⚠ Bu iki forma ƏKS mənadadır — "you mustn't come" ≠ "you don't
                have to come".
              </p>
            </div>
          </div>

          {/* 5.5 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                5.5
              </span>
              <h3 className="font-display text-lg text-foreground">
                Məsləhət: should / ought to / had better
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                should (standart) → ought to (rəsmi) → had better (xəbərdarlıq)
              </code>
              <p className="text-sm text-foreground">
                should have + III = peşmançılıq/tənqid. "had better not" (not
                "better"-dən əvvəl).
              </p>
            </div>
          </div>

          {/* 5.6 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                5.6
              </span>
              <h3 className="font-display text-lg text-foreground">
                Ehtimal: may / might / could
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                &lt;50% əminlik — üçü də demək olar bərabər
              </code>
              <p className="text-sm text-accent">
                ⚠ Zəif inkar ehtimal = might not/may not — can't/couldn't YOX
                (bu, tam fərqli, güclü mənadır).
              </p>
            </div>
          </div>

          {/* 5.7 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                5.7
              </span>
              <h3 className="font-display text-lg text-foreground">
                Məntiqi nəticə: must / can't
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                must = ~95% müsbət · can't = ~95% mənfi (qeyri-mümkün)
              </code>
              <p className="text-sm text-accent">
                ⚠ Mənfi nəticə "mustn't" DEYİL — "can't"dır. Keçmiş: must have /
                can't have + III.
              </p>
            </div>
          </div>

          {/* 5.8 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                5.8
              </span>
              <h3 className="font-display text-lg text-foreground">
                Keçmiş modal fellər
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                should have = tənqid · could have = imkan (mühakiməsiz) would
                have = hipotetik · must/can't have = nəticə · needn't have =
                lazımsız (edildi)
              </code>
              <p className="text-sm text-foreground">
                Bir struktur (modal+have+III), altı fərqli məna.
              </p>
            </div>
          </div>

          {/* 5.9 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                5.9
              </span>
              <h3 className="font-display text-lg text-foreground">
                İstəklilik, təklif, vəd: will / would / shall
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                will = təklif/vəd · would = daha nəzakətli/keçmiş istəməmə shall
                I/we = təklif (yalnız I/we ilə)
              </code>
              <p className="text-sm text-accent">
                ⚠ "Shall you/he/she/they" işlənmir — yalnız I/we.
              </p>
            </div>
          </div>

          {/* 5.10 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                5.10
              </span>
              <h3 className="font-display text-lg text-foreground">
                Keçmiş vərdişlər: would / used to
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                used to = hərəkət VƏ vəziyyət · would = YALNIZ hərəkət
                (stative-lə yox)
              </code>
              <p className="text-sm text-accent">
                ⚠ "She would own..." səhv — stative fellə "used to" lazımdır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LessonShell>
  );
}
