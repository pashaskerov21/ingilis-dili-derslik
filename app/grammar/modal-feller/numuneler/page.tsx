import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "modal-feller",
  "numuneler",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="modal-feller" sectionSlug="numuneler">
      <div className="space-y-12">
        <p className="text-base leading-relaxed text-muted">
          Hər bölməyə aid, dərslərdə görülməyən yeni nümunələr — sadəcə oxu,
          qaydanı real cümlələrdə tanı.
        </p>

        {/* 5.1 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">5.1</span>
            <h3 className="font-display text-lg text-foreground">
              Bacarıq: can / could / be able to
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Our new system can process thousands of requests per minute.",
                az: "Yeni sistemimiz dəqiqədə minlərlə sorğunu emal edə bilir.",
              },
              {
                en: "As a teenager, she could memorize entire pages effortlessly.",
                az: "Yeniyetmə olanda o, bütöv səhifələri asanlıqla əzbərləyə bilirdi.",
              },
              {
                en: "Thanks to the new tool, we've been able to cut processing time in half.",
                az: "Yeni alət sayəsində emal vaxtını yarıya endirə bildik.",
              },
            ]}
          />
        </section>

        {/* 5.2 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">5.2</span>
            <h3 className="font-display text-lg text-foreground">
              İcazə və xahiş
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "May I have your attention for a moment, please?",
                az: "Bir anlıq diqqətinizi cəlb edə bilərəmmi?",
              },
              {
                en: "Could you double-check these figures before I send them?",
                az: "Göndərmədən əvvəl bu rəqəmləri yenidən yoxlaya bilərsənmi?",
              },
              {
                en: "You can use the meeting room whenever it's free.",
                az: "İclas otağını boş olduğu vaxt istifadə edə bilərsən.",
              },
            ]}
          />
        </section>

        {/* 5.3 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">5.3</span>
            <h3 className="font-display text-lg text-foreground">
              Öhdəlik: must / have to / need to
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "All applicants have to submit a cover letter.",
                az: "Bütün müraciət edənlər motivasiya məktubu təqdim etməlidir.",
              },
              {
                en: "I must remember to renew the domain before it expires.",
                az: "Domenin müddəti bitməzdən əvvəl onu yeniləməyi xatırlamalıyam.",
              },
              {
                en: "We need to align on priorities before the sprint starts.",
                az: "Sprint başlamazdan əvvəl prioritetlər üzərində razılığa gəlməliyik.",
              },
            ]}
          />
        </section>

        {/* 5.4 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">5.4</span>
            <h3 className="font-display text-lg text-foreground">
              Zərurət yoxluğu və qadağa
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "You mustn't disclose the salary details to other candidates.",
                az: "Namizədlərə maaş məlumatını açıqlamaq olmaz.",
              },
              {
                en: "You don't have to fill out this section if it doesn't apply to you.",
                az: "Bu bölmə sənə aid deyilsə, doldurmaq məcburi deyil.",
              },
              {
                en: "Visitors mustn't enter the lab without protective gear.",
                az: "Ziyarətçilər qoruyucu geyimsiz laboratoriyaya girə bilməzlər.",
              },
            ]}
          />
        </section>

        {/* 5.5 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">5.5</span>
            <h3 className="font-display text-lg text-foreground">
              Məsləhət: should / ought to / had better
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "You should keep a copy of the signed agreement.",
                az: "İmzalanmış razılaşmanın bir nüsxəsini saxlamalısan.",
              },
              {
                en: "We'd better confirm the venue before sending invitations.",
                az: "Dəvətnamələri göndərmədən əvvəl məkanı təsdiqləsək yaxşı olar.",
              },
              {
                en: "I ought to have asked more questions during the interview.",
                az: "Müsahibə zamanı daha çox sual verməli idim.",
              },
            ]}
          />
        </section>

        {/* 5.6 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">5.6</span>
            <h3 className="font-display text-lg text-foreground">
              Ehtimal: may / might / could
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The shipment might be delayed due to customs.",
                az: "Göndərmə gömrük ucbatından gecikə bilər.",
              },
              {
                en: "This approach could save us a significant amount of time.",
                az: "Bu yanaşma bizə xeyli vaxt qazandıra bilər.",
              },
              {
                en: "She may not have seen your message yet.",
                az: "O, mesajını hələ görməyə bilər.",
              },
            ]}
          />
        </section>

        {/* 5.7 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">5.7</span>
            <h3 className="font-display text-lg text-foreground">
              Məntiqi nəticə: must / can't
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The Wi-Fi light is off — the router must have restarted.",
                az: "Wi-Fi işığı sönüb — router yenidən işə düşmüş olmalıdır.",
              },
              {
                en: "That can't be the final version — it still has placeholder text.",
                az: "Bu, son versiya ola bilməz — hələ də doldurma mətni var.",
              },
            ]}
          />
        </section>

        {/* 5.8 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">5.8</span>
            <h3 className="font-display text-lg text-foreground">
              Keçmiş modal fellər
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "We could have negotiated a better rate, but we signed too quickly.",
                az: "Daha yaxşı tarif üçün danışıq apara bilərdik, amma tez imzaladıq.",
              },
              {
                en: "I would have joined the call, but I was traveling that day.",
                az: "Zəngə qoşulardım, amma o gün səfərdə idim.",
              },
              {
                en: "You shouldn't have deleted the original file.",
                az: "Orijinal faylı silməməli idin.",
              },
            ]}
          />
        </section>

        {/* 5.9 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">5.9</span>
            <h3 className="font-display text-lg text-foreground">
              İstəklilik, təklif, vəd: will / would / shall
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "I'll take care of the vendor negotiations myself.",
                az: "Təchizatçı danışıqlarını özüm həll edərəm.",
              },
              {
                en: "Shall we reschedule the demo for next week?",
                az: "Nümayişi növbəti həftəyə köçürək?",
              },
              {
                en: "Would you be willing to mentor the new interns?",
                az: "Yeni stajçılara mentorluq etməyə hazır olarsanmı?",
              },
            ]}
          />
        </section>

        {/* 5.10 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">5.10</span>
            <h3 className="font-display text-lg text-foreground">
              Keçmiş vərdişlər: would / used to
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "We used to handle everything manually before this system existed.",
                az: "Bu sistem mövcud olmazdan əvvəl hər şeyi əl ilə həll edirdik.",
              },
              {
                en: "Every Friday, the whole team would gather for a retrospective.",
                az: "Hər cümə bütün komanda retrospektiv üçün toplaşardı.",
              },
            ]}
          />
        </section>
      </div>
    </LessonShell>
  );
}
