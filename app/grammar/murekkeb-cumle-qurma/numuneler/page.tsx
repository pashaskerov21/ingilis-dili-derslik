import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "murekkeb-cumle-qurma",
  "numuneler",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="murekkeb-cumle-qurma" sectionSlug="numuneler">
      <div className="space-y-12">
        <p className="text-base leading-relaxed text-muted">
          Hər bölməyə aid, dərslərdə görülməyən yeni nümunələr — sadəcə oxu,
          qaydanı real cümlələrdə tanı.
        </p>

        {/* 9.1 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">9.1</span>
            <h3 className="font-display text-lg text-foreground">
              Koordinativ bağlayıcılar
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The proposal was solid, yet the board still had concerns.",
                az: "Təklif möhkəm idi, amma idarə heyətinin yenə də narahatlıqları var idi.",
              },
              {
                en: "We need to hire a designer or outsource the work.",
                az: "Ya dizayner işə götürməliyik, ya da işi kənar podratçıya verməliyik.",
              },
            ]}
          />
        </section>

        {/* 9.2 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">9.2</span>
            <h3 className="font-display text-lg text-foreground">
              Subordinativ bağlayıcılar
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "As soon as the payment clears, we'll ship the order.",
                az: "Ödəniş keçən kimi, sifarişi göndərəcəyik.",
              },
              {
                en: "Even though the market is competitive, our sales keep growing.",
                az: "Bazar rəqabətli olsa da, satışlarımız artmağa davam edir.",
              },
            ]}
          />
        </section>

        {/* 9.3 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">9.3</span>
            <h3 className="font-display text-lg text-foreground">
              Təyin cümlələri (defining)
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The vendor that supplies our packaging raised its prices.",
                az: "Bizə qablaşdırma tədarük edən təchizatçı qiymətlərini artırdı.",
              },
              {
                en: "People who work remotely often report higher productivity.",
                az: "Uzaqdan işləyən insanlar tez-tez daha yüksək məhsuldarlıq bildirirlər.",
              },
            ]}
          />
        </section>

        {/* 9.4 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">9.4</span>
            <h3 className="font-display text-lg text-foreground">
              Təyin cümlələri (non-defining)
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The prototype, which took three months to build, exceeded expectations.",
                az: "Üç ay çəkən prototip gözləntiləri üstələdi.",
              },
              {
                en: "Mr. Aliyev, whose firm handles our legal matters, retired last year.",
                az: "Hüquqi məsələlərimizlə məşğul olan cənab Əliyev keçən il təqaüdə çıxdı.",
              },
            ]}
          />
        </section>

        {/* 9.5 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">9.5</span>
            <h3 className="font-display text-lg text-foreground">
              Səhvlər və qısaltma
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The candidates interviewed this week will hear back by Friday.",
                az: "Bu həftə müsahibə edilən namizədlər cüməyə qədər cavab alacaqlar.",
              },
              {
                en: "Anyone caught violating the policy will face disciplinary action.",
                az: "Siyasəti pozan hər kəs intizam tənbehi ilə üzləşəcək.",
              },
            ]}
          />
        </section>

        {/* 9.6 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">9.6</span>
            <h3 className="font-display text-lg text-foreground">
              Sıfır və Birinci Şərt
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "If sales drop below target, we cut back on marketing spend. (sıfır)",
                az: "Satışlar hədəfin altına düşərsə, marketinq xərclərini azaldırıq.",
              },
              {
                en: "If the client signs today, we'll begin onboarding tomorrow. (birinci)",
                az: "Müştəri bu gün imzalayarsa, sabah işə başlama prosesinə keçəcəyik.",
              },
            ]}
          />
        </section>

        {/* 9.7 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">9.7</span>
            <h3 className="font-display text-lg text-foreground">
              İkinci Şərt Cümləsi
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "If I ran this department, I would restructure the workflow entirely.",
                az: "Bu şöbəyə mən rəhbərlik etsəydim, iş axınını tamamilə yenidən qurardım.",
              },
              {
                en: "We would save a lot of time if the approval process were simpler.",
                az: "Təsdiqləmə prosesi daha sadə olsaydı, çox vaxt qənaət edərdik.",
              },
            ]}
          />
        </section>

        {/* 9.8 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">9.8</span>
            <h3 className="font-display text-lg text-foreground">
              Üçüncü/Qarışıq Şərt
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "If we had negotiated harder, we would have secured a better rate.",
                az: "Daha güclü danışıq aparsaydıq, daha yaxşı tarif əldə edərdik.",
              },
              {
                en: "If she hadn't left the company, she would be leading this project now.",
                az: "Şirkəti tərk etməsəydi, indi bu layihəyə rəhbərlik edərdi.",
              },
            ]}
          />
        </section>

        {/* 9.9 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">9.9</span>
            <h3 className="font-display text-lg text-foreground">
              Dolayı nitq: bəyanatlar
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "He mentioned that the shipment would arrive within two weeks.",
                az: "O, göndərmənin iki həftə ərzində çatacağını qeyd etdi.",
              },
              {
                en: "The technician explained that the issue had been resolved.",
                az: "Texniki mütəxəssis problemin həll olunduğunu izah etdi.",
              },
            ]}
          />
        </section>

        {/* 9.10 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">9.10</span>
            <h3 className="font-display text-lg text-foreground">
              Dolayı nitq: sual/əmr
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The interviewer asked why I wanted to switch careers.",
                az: "Müsahibə aparan mənə niyə karyera dəyişmək istədiyimi soruşdu.",
              },
              {
                en: "The supervisor instructed the team to prioritize the client's request.",
                az: "Rəhbər komandaya müştərinin sorğusuna üstünlük verməyi tapşırdı.",
              },
            ]}
          />
        </section>
      </div>
    </LessonShell>
  );
}
