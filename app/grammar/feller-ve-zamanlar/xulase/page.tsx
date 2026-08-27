import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";

export const metadata: Metadata = buildSectionMetadata(
  "feller-ve-zamanlar",
  "xulase",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="feller-ve-zamanlar" sectionSlug="xulase">
      <div className="space-y-8">
        <p className="text-base leading-relaxed text-muted">
          12 bölmənin ən əsas qaydaları — sürətli təkrar üçün. Ətraflı izah və
          daha çox nümunə üçün uyğun bölməyə qayıt.
        </p>

        <div className="divide-y divide-line border-y border-line">
          {/* 4.1 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                4.1
              </span>
              <h3 className="font-display text-lg text-foreground">
                Present Simple
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                bazafel (+s 3-cü şəxs) — adət, ümumi həqiqət, cədvəl, təlimat
              </code>
              <p className="text-sm text-foreground">
                Cədvəl/proqram = GƏLƏCƏK məna. when/before/if-dən sonra will
                YOX.
              </p>
              <p className="text-sm text-accent">
                ⚠ "when I will arrive" deyil, "when I arrive".
              </p>
            </div>
          </div>

          {/* 4.2 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                4.2
              </span>
              <h3 className="font-display text-lg text-foreground">
                Present Continuous
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                am/is/are + fel-ing — indi, müvəqqəti, şəxsi gələcək razılaşma
              </code>
              <p className="text-sm text-foreground">
                always/constantly ilə = narazılıq tonu. Şəxsi razılaşma ≠
                4.1-dəki rəsmi cədvəl.
              </p>
            </div>
          </div>

          {/* 4.3 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                4.3
              </span>
              <h3 className="font-display text-lg text-foreground">
                Stative fellər
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                know, believe, want, have (sahiblik), see, seem — Continuous YOX
              </code>
              <p className="text-sm text-foreground">
                Test: "Nə baş verdi?" — cavab yoxdursa, stative. Qarışıq fellər:
                think/have/see mənaya görə dəyişir.
              </p>
              <p className="text-sm text-accent">
                ⚠ "I am knowing" — həmişə səhv.
              </p>
            </div>
          </div>

          {/* 4.4 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                4.4
              </span>
              <h3 className="font-display text-lg text-foreground">
                Present Perfect
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                have/has + III forma — nəticə, təcrübə, for/since, hələ bitməyən
                dövr
              </code>
              <p className="text-sm text-foreground">
                been (gedib-qayıdıb) ≠ gone (hələ ordadır). Konkret bitmiş
                vaxtla İŞLƏNMİR.
              </p>
              <p className="text-sm text-accent">
                ⚠ "have seen yesterday" — səhv, Past Simple lazımdır.
              </p>
            </div>
          </div>

          {/* 4.5 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                4.5
              </span>
              <h3 className="font-display text-lg text-foreground">
                Present Perfect Continuous
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                have/has been + fel-ing — müddət/proses (4.4 = nəticə/say)
              </code>
              <p className="text-sm text-foreground">
                Görünən izdən nəticə: "Have you been crying?" Şikayət tonu:
                "Who's been eating my food?"
              </p>
            </div>
          </div>

          {/* 4.6 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                4.6
              </span>
              <h3 className="font-display text-lg text-foreground">
                Past Simple
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                fel+ed (müntəzəm) / qeyri-müntəzəm forma — konkret bitmiş keçmiş
              </code>
              <p className="text-sm text-foreground">
                did-support: əsas fel bazaya qayıdır. Qeyri-müntəzəm fellər
                əzbər (bax: fəsil sonu cədvəli).
              </p>
              <p className="text-sm text-accent">
                ⚠ "didn't went" deyil, "didn't go".
              </p>
            </div>
          </div>

          {/* 4.7 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                4.7
              </span>
              <h3 className="font-display text-lg text-foreground">
                Past Continuous
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                was/were + fel-ing — kəsilən (uzun+qısa), paralel (while)
              </code>
              <p className="text-sm text-foreground">
                "At 6 PM I called" (başladı) ≠ "At 6 PM I was calling" (artıq
                davam edirdi).
              </p>
            </div>
          </div>

          {/* 4.8 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                4.8
              </span>
              <h3 className="font-display text-lg text-foreground">
                Past Perfect
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                had + III forma — iki keçmişdən ƏVVƏLKİni işarələyir
              </code>
              <p className="text-sm text-foreground">
                "When I arrived, she left" (ardıcıl/eyni vaxt) ≠ "...she had
                left" (artıq getmişdi). Reported speech-də bir addım geri.
              </p>
            </div>
          </div>

          {/* 4.9 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                4.9
              </span>
              <h3 className="font-display text-lg text-foreground">
                Past Perfect Continuous
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                had been + fel-ing — keçmiş nöqtəyə qədər davam edən müddət
              </code>
              <p className="text-sm text-foreground">
                Səbəb-nəticə: "He was tired because he had been running."
              </p>
            </div>
          </div>

          {/* 4.10 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                4.10
              </span>
              <h3 className="font-display text-lg text-foreground">
                will vs going to
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                will = ani qərar, fikir/proqnoz, vəd/təklif going to =
                əvvəlcədən plan, dəlilə əsaslanan proqnoz
              </code>
              <p className="text-sm text-accent">
                ⚠ "Look at the sky, it will rain" deyil (dəlil var) — "it's
                going to rain".
              </p>
            </div>
          </div>

          {/* 4.11 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                4.11
              </span>
              <h3 className="font-display text-lg text-foreground">
                Future Continuous / Perfect
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                will be + fel-ing — gələcəkdə davam edən will have + III forma —
                gələcəkdə bitmiş olacaq
              </code>
              <p className="text-sm text-foreground">
                Future Continuous həm də nəzakətli sual üçün: "Will you be
                needing...?"
              </p>
            </div>
          </div>

          {/* 4.12 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                4.12
              </span>
              <h3 className="font-display text-lg text-foreground">
                Fel-subyekt uzlaşması
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                or/nor → yaxın subyektlə · collective → bütöv(tək)/fərd(cəm) a
                number of (cəm) ≠ the number of (tək)
              </code>
              <p className="text-sm text-accent">
                ⚠ "Neither X nor Y" — fel Y-yə (yaxın olana) uyğunlaşır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LessonShell>
  );
}
