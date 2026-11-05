import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "qabaqcil-struktur-formalari",
  "numuneler",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="qabaqcil-struktur-formalari"
      sectionSlug="numuneler"
    >
      <div className="space-y-12">
        <p className="text-base leading-relaxed text-muted">
          Hər bölməyə aid, dərslərdə görülməyən yeni nümunələr — sadəcə oxu,
          qaydanı real cümlələrdə tanı.
        </p>

        {/* 10.1 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">10.1</span>
            <h3 className="font-display text-lg text-foreground">
              Passiv növ: əsaslar
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "New employees are trained during their first two weeks.",
                az: "Yeni işçilər ilk iki həftə ərzində təlim keçirlər.",
              },
              {
                en: "The contract has been reviewed by the legal team.",
                az: "Müqavilə hüquq komandası tərəfindən nəzərdən keçirilib.",
              },
              {
                en: "This feature can be disabled in the settings.",
                az: "Bu funksiya tənzimləmələrdə söndürülə bilər.",
              },
            ]}
          />
        </section>

        {/* 10.2 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">10.2</span>
            <h3 className="font-display text-lg text-foreground">
              Passiv növ: qabaqcıl
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "It is understood that the terms may change without notice.",
                az: "Başa düşülür ki, şərtlər xəbərdarlıqsız dəyişə bilər.",
              },
              {
                en: "We had the entire system audited last quarter.",
                az: "Keçən rüb bütün sistemi audit etdirdik.",
              },
            ]}
          />
        </section>

        {/* 10.3 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">10.3</span>
            <h3 className="font-display text-lg text-foreground">Gerund</h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Negotiating with suppliers is one of her strongest skills.",
                az: "Təchizatçılarla danışıq aparmaq onun ən güclü bacarıqlarından biridir.",
              },
              {
                en: "He avoided answering the question directly.",
                az: "O, suala birbaşa cavab verməkdən qaçındı.",
              },
            ]}
          />
        </section>

        {/* 10.4 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">10.4</span>
            <h3 className="font-display text-lg text-foreground">İnfinitiv</h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "We watched the demo crash twice during the presentation.",
                az: "Təqdimat zamanı demonun iki dəfə çökdüyünü izlədik.",
              },
              {
                en: "The board expects the numbers to improve next quarter.",
                az: "İdarə heyəti rəqəmlərin növbəti rübdə yaxşılaşacağını gözləyir.",
              },
            ]}
          />
        </section>

        {/* 10.5 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">10.5</span>
            <h3 className="font-display text-lg text-foreground">
              Gerund vs İnfinitiv
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Try turning it off and on again before calling support.",
                az: "Dəstəyə zəng etmədən əvvəl onu bağlayıb açmağı sına.",
              },
              {
                en: "I'll never forget pitching this idea for the first time.",
                az: "Bu fikri ilk dəfə təqdim etməyimi heç unutmayacam.",
              },
            ]}
          />
        </section>

        {/* 10.6 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">10.6</span>
            <h3 className="font-display text-lg text-foreground">
              Wish / If only
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "I wish this laptop had a longer battery life.",
                az: "Kaş bu noutbukun batareyası daha uzun ömürlü olaydı.",
              },
              {
                en: "If only we had allocated more budget to marketing.",
                az: "Kaş marketinqə daha çox büdcə ayıraydıq.",
              },
            ]}
          />
        </section>
      </div>
    </LessonShell>
  );
}
