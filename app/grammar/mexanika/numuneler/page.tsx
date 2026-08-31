import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata("mexanika", "numuneler");

export default function Page() {
  return (
    <LessonShell chapterSlug="mexanika" sectionSlug="numuneler">
      <div className="space-y-12">
        <p className="text-base leading-relaxed text-muted">
          Hər bölməyə aid, dərslərdə görülməyən yeni nümunələr — sadəcə oxu,
          qaydanı real cümlələrdə tanı.
        </p>

        {/* 11.1 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">11.1</span>
            <h3 className="font-display text-lg text-foreground">
              Böyük hərflər
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The conference takes place every October in Berlin.",
                az: "Konfrans hər il oktyabrda Berlində keçirilir.",
              },
              {
                en: "Dr. Aliyeva will present the findings on Tuesday.",
                az: "Dr. Əliyeva çərşənbə axşamı tapıntıları təqdim edəcək.",
              },
              {
                en: "Our regional director oversees operations across Europe.",
                az: "Regional direktorumuz Avropa üzrə əməliyyatlara nəzarət edir.",
              },
            ]}
          />
        </section>

        {/* 11.2 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">11.2</span>
            <h3 className="font-display text-lg text-foreground">Apostrof</h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The customers' complaints were addressed within a day.",
                az: "Müştərilərin şikayətləri bir gün ərzində həll edildi.",
              },
              {
                en: "The company doubled its revenue since the 2010s.",
                az: "Şirkət 2010-cu illərdən bəri gəlirini ikiqat artırıb.",
              },
              {
                en: "Whose responsibility is it to update the records?",
                az: "Qeydləri yeniləmək kimin vəzifəsidir?",
              },
            ]}
          />
        </section>

        {/* 11.3 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">11.3</span>
            <h3 className="font-display text-lg text-foreground">
              Vergül qaydaları
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Despite the tight schedule, the team delivered ahead of time.",
                az: "Sıx cədvələ baxmayaraq, komanda vaxtından əvvəl təhvil verdi.",
              },
              {
                en: "The founder, an experienced entrepreneur, secured funding quickly.",
                az: "Təsisçi, təcrübəli bir sahibkar, tez bir zamanda maliyyələşmə əldə etdi.",
              },
              {
                en: "We opened our new branch on September 3, 2025, in Tbilisi.",
                az: "3 sentyabr 2025-ci ildə Tbilisidə yeni filialımızı açdıq.",
              },
            ]}
          />
        </section>

        {/* 11.4 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">11.4</span>
            <h3 className="font-display text-lg text-foreground">
              Digər durğu işarələri
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The plan looked solid; the execution told a different story.",
                az: "Plan möhkəm görünürdü; icra fərqli bir hekayə danışdı.",
              },
              {
                en: "There's only one word for this outcome: disappointing.",
                az: "Bu nəticə üçün yalnız bir söz var: məyusedici.",
              },
              {
                en: "This is a results-oriented team — and it shows.",
                az: "Bu, nəticəyönümlü bir komandadır — və bu, özünü göstərir.",
              },
            ]}
          />
        </section>
      </div>
    </LessonShell>
  );
}
