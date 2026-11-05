import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sual-formalari",
  "numuneler",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="sual-formalari" sectionSlug="numuneler">
      <div className="space-y-12">
        <p className="text-base leading-relaxed text-muted">
          Hər bölməyə aid, dərslərdə görülməyən yeni nümunələr — sadəcə oxu,
          qaydanı real cümlələrdə tanı.
        </p>

        {/* 8.1 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">8.1</span>
            <h3 className="font-display text-lg text-foreground">
              Bəli/Xeyr sualları — tam təkrar
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Have the new hires been given access to the system yet?",
                az: "Yeni işçilərə hələ sistemə giriş verilibmi?",
              },
              {
                en: "Should we notify the client before making this change?",
                az: "Bu dəyişikliyi etməzdən əvvəl müştəriyə bildirməliyikmi?",
              },
              {
                en: "Will the servers have been upgraded by next Monday?",
                az: "Serverlər növbəti bazar ertəsinə qədər yenilənmiş olacaqmı?",
              },
            ]}
          />
        </section>

        {/* 8.2 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">8.2</span>
            <h3 className="font-display text-lg text-foreground">
              Wh-sual sözləri
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Which of these two vendors offers better pricing?",
                az: "Bu iki təchizatçıdan hansı daha yaxşı qiymət təklif edir?",
              },
              {
                en: "How far is the warehouse from the main office?",
                az: "Anbar baş ofisdən nə qədər uzaqdır?",
              },
              {
                en: "What kind of support does this plan include?",
                az: "Bu plan hansı növ dəstəyi əhatə edir?",
              },
            ]}
          />
        </section>

        {/* 8.3 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">8.3</span>
            <h3 className="font-display text-lg text-foreground">
              Subyekt və obyekt sualları
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Who reviewed the final draft before submission?",
                az: "Təqdim etməzdən əvvəl son variantı kim nəzərdən keçirdi?",
              },
              {
                en: "What triggered the sudden spike in traffic?",
                az: "Trafikdə qəfil artışa nə səbəb oldu?",
              },
            ]}
          />
        </section>

        {/* 8.4 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">8.4</span>
            <h3 className="font-display text-lg text-foreground">
              Dolayı suallar
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Could you let me know when the shipment is expected to arrive?",
                az: "Göndərmənin nə vaxt çatacağını mənə bildirə bilərsinizmi?",
              },
              {
                en: "I'm not sure whether the discount still applies.",
                az: "Endirimin hələ də tətbiq olunub-olunmadığından əmin deyiləm.",
              },
            ]}
          />
        </section>

        {/* 8.5 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">8.5</span>
            <h3 className="font-display text-lg text-foreground">
              Question Tags
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "You reviewed the numbers already, didn't you?",
                az: "Rəqəmləri artıq nəzərdən keçirmisən, elə deyilmi?",
              },
              {
                en: "This isn't the final version, is it?",
                az: "Bu, son versiya deyil, elə deyilmi?",
              },
            ]}
          />
        </section>

        {/* 8.6 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">8.6</span>
            <h3 className="font-display text-lg text-foreground">
              Mənfi suallar — dərinləşmə
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Wouldn't it be simpler to combine these two steps?",
                az: "Bu iki addımı birləşdirmək daha sadə olmazmı?",
              },
              {
                en: "Haven't we discussed this exact issue before?",
                az: "Biz məhz bu məsələni əvvəllər müzakirə etməmişdikmi?",
              },
            ]}
          />
        </section>

        {/* 8.7 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">8.7</span>
            <h3 className="font-display text-lg text-foreground">
              Echo və alternativ suallar
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "A: We're launching next week. B: Next WEEK?",
                az: "A: Növbəti həftə buraxılış edirik. B: Növbəti HƏFTƏ?",
              },
              {
                en: "Should I send the invoice by email or by post?",
                az: "Fakturanı emaillə, yoxsa poçtla göndərim?",
              },
            ]}
          />
        </section>
      </div>
    </LessonShell>
  );
}
