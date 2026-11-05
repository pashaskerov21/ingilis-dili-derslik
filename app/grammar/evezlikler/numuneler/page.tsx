import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "evezlikler",
  "numuneler",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="evezlikler" sectionSlug="numuneler">
      <div className="space-y-12">
        <p className="text-base leading-relaxed text-muted">
          Hər bölməyə aid, dərslərdə görülməyən yeni nümunələr — sadəcə oxu,
          qaydanı real cümlələrdə tanı.
        </p>

        {/* 3.1 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">3.1</span>
            <h3 className="font-display text-lg text-foreground">
              Şəxs əvəzlikləri (subyekt)
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "We reviewed the proposal carefully before submitting it.",
                az: "Təklifi təqdim etməzdən əvvəl diqqətlə nəzərdən keçirdik.",
              },
              {
                en: "He and the design lead disagreed on the layout.",
                az: "O və dizayn rəhbəri düzülüş barədə razılaşmadılar.",
              },
              {
                en: "It rained heavily throughout the conference.",
                az: "Konfrans boyunca güclü yağış yağdı.",
              },
              {
                en: "Whoever calls first — is that you or your assistant?",
                az: "Kim birinci zəng edir — sən, yoxsa köməkçin?",
              },
            ]}
          />
        </section>

        {/* 3.2 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">3.2</span>
            <h3 className="font-display text-lg text-foreground">
              Obyekt əvəzlikləri
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The client asked us to revise the estimate.",
                az: "Müştəri bizdən qiymətləndirməni yenidən baxmağı xahiş etdi.",
              },
              {
                en: "Could you forward that email to them?",
                az: "O emaili onlara yönləndirə bilərsən?",
              },
              {
                en: "This decision affects her more than him.",
                az: "Bu qərar ona (qadına) onu (kişini) təsir etdiyindən daha çox təsir edir.",
              },
              {
                en: "Nobody warned me about the schedule change.",
                az: "Cədvəl dəyişikliyi barədə heç kim mənə xəbərdarlıq etmədi.",
              },
            ]}
          />
        </section>

        {/* 3.3 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">3.3</span>
            <h3 className="font-display text-lg text-foreground">
              Mülkiyyət sifət/əvəzlikləri
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Their proposal was stronger than ours.",
                az: "Onların təklifi bizimkindən güclü idi.",
              },
              {
                en: "Is this your umbrella or hers?",
                az: "Bu sənin çətirindir, yoxsa onun (qadının)?",
              },
              {
                en: "The board reduced its spending this quarter.",
                az: "İdarə heyəti bu rüb xərclərini azaltdı.",
              },
              {
                en: "A cousin of his works in the same building.",
                az: "Onun bir əmisi oğlu eyni binada işləyir.",
              },
            ]}
          />
        </section>

        {/* 3.4 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">3.4</span>
            <h3 className="font-display text-lg text-foreground">
              Refleksiv əvəzliklər
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "She locked herself out of the office this morning.",
                az: "O, bu səhər özünü ofisdən kənarda qıfılladı.",
              },
              {
                en: "We painted the entire room by ourselves over the weekend.",
                az: "Bütün otağı həftəsonu özümüz (köməksiz) boyadıq.",
              },
              {
                en: "The founder herself responded to the complaint.",
                az: "Təsisçinin özü şikayətə cavab verdi.",
              },
              {
                en: "Please make yourselves at home while you wait.",
                az: "Gözləyərkən zəhmət olmasa rahat olun.",
              },
            ]}
          />
        </section>

        {/* 3.5 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">3.5</span>
            <h3 className="font-display text-lg text-foreground">
              Qarşılıqlı əvəzliklər
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The partners consulted each other before signing.",
                az: "Tərəfdaşlar imzalamazdan əvvəl bir-biri ilə məsləhətləşdilər.",
              },
              {
                en: "The applicants competed against one another for the position.",
                az: "Namizədlər vəzifə üçün bir-biri ilə yarışdılar.",
              },
              {
                en: "We should learn from each other's mistakes.",
                az: "Biz bir-birimizin səhvlərindən öyrənməliyik.",
              },
            ]}
          />
        </section>

        {/* 3.6 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">3.6</span>
            <h3 className="font-display text-lg text-foreground">
              Göstərici əvəzliklər
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "This offer expires at the end of the month.",
                az: "Bu təklifin müddəti ayın sonunda bitir.",
              },
              {
                en: "Those figures you mentioned earlier turned out to be wrong.",
                az: "Əvvəl qeyd etdiyin o rəqəmlər yanlış çıxdı.",
              },
              {
                en: "Can you pass me that folder on the shelf?",
                az: "Rəfdəki o qovluğu mənə uzada bilərsən?",
              },
              {
                en: "This is exactly the kind of feedback we needed.",
                az: "Bu, dəqiq bizim ehtiyacımız olan rəy növüdür.",
              },
            ]}
          />
        </section>

        {/* 3.7 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">3.7</span>
            <h3 className="font-display text-lg text-foreground">
              Qeyri-müəyyən əvəzliklər
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Someone forgot to lock the storage room last night.",
                az: "Kimsə dünən gecə anbar otağını bağlamağı unudub.",
              },
              {
                en: "There isn't anything else we can do at this point.",
                az: "Bu mərhələdə edə biləcəyimiz başqa heç nə yoxdur.",
              },
              {
                en: "Everybody deserves a clear explanation of the changes.",
                az: "Hər kəs dəyişikliklərin aydın izahını haqq edir.",
              },
              {
                en: "I looked everywhere, but I couldn't find the invoice.",
                az: "Hər yerə baxdım, amma fakturanı tapa bilmədim.",
              },
            ]}
          />
        </section>

        {/* 3.8 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">3.8</span>
            <h3 className="font-display text-lg text-foreground">
              Əvəzedici one / ones
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "This chair squeaks — could you bring a quieter one?",
                az: "Bu stul cırıldayır — daha səssizini gətirə bilərsən?",
              },
              {
                en: "We compared several vendors and chose the cheapest one.",
                az: "Bir neçə təchizatçını müqayisə edib ən ucuzunu seçdik.",
              },
              {
                en: "Do you need extra chairs? — Yes, a couple would help.",
                az: "Əlavə stul lazımdır? — Bəli, bir neçəsi kömək edərdi.",
              },
            ]}
          />
        </section>
      </div>
    </LessonShell>
  );
}
