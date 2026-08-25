import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";

export const metadata: Metadata = buildSectionMetadata(
  "cumlenin-esaslari",
  "xulase",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="cumlenin-esaslari" sectionSlug="xulase">
      <div className="space-y-8">
        <p className="text-base leading-relaxed text-muted">
          5 bölmənin ən əsas qaydaları — sürətli təkrar üçün. Ətraflı izah və
          daha çox nümunə üçün uyğun bölməyə qayıt.
        </p>

        <div className="divide-y divide-line border-y border-line">
          {/* 1.1 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                1.1
              </span>
              <h3 className="font-display text-lg text-foreground">
                Söz sırası
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Subject + Verb + Object
              </code>
              <p className="font-mono text-sm italic text-foreground">
                The team fixed the bug.
              </p>
              <p className="text-sm text-accent">
                ⚠ Fel heç vaxt sona qoyulmur (AZ vərdişi).
              </p>
            </div>
          </div>

          {/* 1.2 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                1.2
              </span>
              <h3 className="font-display text-lg text-foreground">
                Təsdiq / İnkar / Sual məntiqi
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground space-y-1">
                <span className="block">+ Subject + köməkçi fel + fel</span>
                <span className="block">
                  − Subject + köməkçi fel + not + fel
                </span>
                <span className="block">? Köməkçi fel + Subject + fel</span>
              </code>
              <p className="text-sm text-foreground">
                Köməkçi yoxdursa → <strong>do/does/did</strong> ödünc alınır,
                əsas fel bazaya qayıdır.
              </p>
              <p className="font-mono text-sm italic text-foreground">
                Does she work remotely? / She doesn&apos;t work remotely.
              </p>
              <p className="text-sm text-accent">
                ⚠ &quot;does&quot; varsa fel &quot;-s&quot; almır: doesn&apos;t
                works deyil, doesn&apos;t work.
              </p>
            </div>
          </div>

          {/* 1.3 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                1.3
              </span>
              <h3 className="font-display text-lg text-foreground">
                To be (am/is/are)
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground space-y-1">
                <span className="block">I → am</span>
                <span className="block">he / she / it → is</span>
                <span className="block">you / we / they → are</span>
              </code>
              <p className="text-sm text-foreground">
                İnkar: <strong>+ not</strong> · Sual: <strong>be əvvələ</strong>
              </p>
              <p className="font-mono text-sm italic text-foreground">
                She is not ready. Is she ready?
              </p>
              <p className="text-sm text-accent">
                ⚠ Yaş həmişə be ilə, have ilə yox: I am 25, "I have 25"
                yanlışdır.
              </p>
            </div>
          </div>

          {/* 1.4 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                1.4
              </span>
              <h3 className="font-display text-lg text-foreground">
                There is / There are
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground space-y-1">
                <span className="block">
                  There is + tək / saya bilməyən isim
                </span>
                <span className="block">There are + cəm isim</span>
                <span className="block">Sual: Is/Are there...?</span>
              </code>
              <p className="font-mono text-sm italic text-foreground">
                There are three chairs. Is there a solution?
              </p>
              <p className="text-sm text-accent">
                ⚠ Existential &quot;there&quot; (var) ilə yer zərfi
                &quot;there&quot; (orada) qarışdırılmamalıdır.
              </p>
            </div>
          </div>

          {/* 1.5 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                1.5
              </span>
              <h3 className="font-display text-lg text-foreground">
                Əmr cümlələri
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground space-y-1">
                <span className="block">Fel (bazada) + ... — subyektsiz</span>
                <span className="block">İnkar: Don&apos;t + fel</span>
                <span className="block">Təklif: Let&apos;s + fel</span>
              </code>
              <p className="font-mono text-sm italic text-foreground">
                Close the door. Don&apos;t be late. Let&apos;s begin.
              </p>
              <p className="text-sm text-accent">
                ⚠ Çılpaq əmr iş mühitində kobud səslənə bilər —
                &quot;please&quot; və ya sual forması ilə yumşalt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LessonShell>
  );
}
