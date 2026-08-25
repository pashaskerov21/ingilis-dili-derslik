import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "cumlenin-esaslari",
  "numuneler",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="cumlenin-esaslari" sectionSlug="numuneler">
      <div className="space-y-12">
        <p className="text-base leading-relaxed text-muted">
          Hər bölməyə aid, dərslərdə görülməyən yeni nümunələr — sadəcə oxu,
          qaydanı real cümlələrdə tanı.
        </p>

        {/* 1.1 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">1.1</span>
            <h3 className="font-display text-lg text-foreground">Söz sırası</h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The analyst compiled the quarterly figures.",
                az: "Analitik rüblük göstəriciləri tərtib etdi.",
              },
              {
                en: "The company launched a new product line last spring.",
                az: "Şirkət keçən bahar yeni məhsul xəttini istifadəyə verdi.",
              },
              {
                en: "Developers rarely comment their code thoroughly.",
                az: "Proqramçılar öz kodlarına nadir hallarda hərtərəfli şərh yazırlar.",
              },
              {
                en: "The support team quickly resolved the outage.",
                az: "Dəstək komandası nasazlığı tez həll etdi.",
              },
              {
                en: "We usually review contracts before signing them.",
                az: "Biz adətən müqavilələri imzalamazdan əvvəl nəzərdən keçiririk.",
              },
              {
                en: "She handed the auditor the missing documents.",
                az: "O, çatışmayan sənədləri auditora təqdim etdi.",
              },
              {
                en: "I always back up my files before an update.",
                az: "Mən yeniləmədən əvvəl həmişə fayllarımı ehtiyat nüsxələyirəm.",
              },
              {
                en: "a durable, waterproof laptop case",
                az: "davamlı, su keçirməyən noutbuk çantası",
              },
            ]}
          />
        </section>

        {/* 1.2 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">1.2</span>
            <h3 className="font-display text-lg text-foreground">
              Təsdiq / İnkar / Sual məntiqi
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The vendor delivered the equipment on time.",
                az: "Təchizatçı avadanlığı vaxtında çatdırdı.",
              },
              {
                en: "Did the vendor deliver the equipment on time?",
                az: "Təchizatçı avadanlığı vaxtında çatdırdımı?",
              },
              {
                en: "The vendor did not deliver the equipment on time.",
                az: "Təchizatçı avadanlığı vaxtında çatdırmadı.",
              },
              {
                en: "She checks the logs every morning.",
                az: "O, hər səhər log-ları yoxlayır.",
              },
              {
                en: "Why does the application crash under heavy load?",
                az: "Tətbiq ağır yük altında niyə çökür?",
              },
              {
                en: "Who scheduled this meeting?",
                az: "Bu iclası kim planlaşdırdı?",
              },
              {
                en: "What triggered the alert?",
                az: "Xəbərdarlığı nə tetiklədi?",
              },
              { en: "Has the invoice been paid?", az: "Faktura ödənilibmi?" },
              {
                en: "Doesn't this contract need a signature?",
                az: "Bu müqavilə imza tələb etmirmi?",
              },
            ]}
          />
        </section>

        {/* 1.3 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">1.3</span>
            <h3 className="font-display text-lg text-foreground">To be feli</h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The prototype is nearly finished.",
                az: "Prototip demək olar ki, hazırdır.",
              },
              {
                en: "These figures are misleading.",
                az: "Bu rəqəmlər yanlış təsəvvür yaradır.",
              },
              {
                en: "I'm not entirely convinced by this argument.",
                az: "Mən bu arqumentə tam əmin deyiləm.",
              },
              {
                en: "The warehouse is on the outskirts of the city.",
                az: "Anbar şəhərin kənarındadır.",
              },
              {
                en: "My colleague is originally from Ganja.",
                az: "Həmkarım əslən Gəncədəndir.",
              },
              {
                en: "The meeting room is fully booked this afternoon.",
                az: "İclas otağı bu gün günorta tam doludur.",
              },
              {
                en: "The candidate is well qualified for the role.",
                az: "Namizəd bu vəzifə üçün yaxşı ixtisaslıdır.",
              },
              {
                en: "It's already past six o'clock.",
                az: "Artıq saat altını keçib.",
              },
              {
                en: "Are these calculations correct?",
                az: "Bu hesablamalar düzgündür?",
              },
            ]}
          />
        </section>

        {/* 1.4 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">1.4</span>
            <h3 className="font-display text-lg text-foreground">
              There is / There are
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "There is a shortage of qualified engineers.",
                az: "İxtisaslı mühəndis çatışmazlığı var.",
              },
              {
                en: "There are several ways to fix this issue.",
                az: "Bu problemi həll etməyin bir neçə yolu var.",
              },
              {
                en: "There isn't a clear answer yet.",
                az: "Hələ dəqiq cavab yoxdur.",
              },
              {
                en: "Is there an alternative supplier?",
                az: "Alternativ təchizatçı varmı?",
              },
              {
                en: "How many candidates are there for this position?",
                az: "Bu vəzifə üçün neçə namizəd var?",
              },
              {
                en: "There used to be a factory on this site.",
                az: "Bu ərazidə əvvəllər bir zavod var idi.",
              },
              {
                en: "There has been a significant improvement in performance.",
                az: "Performansda ciddi yaxşılaşma olub.",
              },
              {
                en: "There will be a short break at eleven.",
                az: "Saat on birdə qısa fasilə olacaq.",
              },
              {
                en: "There seems to be a misunderstanding.",
                az: "Deyəsən, bir anlaşılmazlıq var.",
              },
            ]}
          />
        </section>

        {/* 1.5 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">1.5</span>
            <h3 className="font-display text-lg text-foreground">
              Əmr cümlələri
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Review the attached file before the call.",
                az: "Zəngdən əvvəl əlavə olunmuş faylı nəzərdən keçir.",
              },
              {
                en: "Please confirm your attendance by Thursday.",
                az: "Zəhmət olmasa, iştirakını cümə axşamına qədər təsdiqlə.",
              },
              {
                en: "Don't hesitate to reach out with questions.",
                az: "Sualların olarsa, çəkinmə, əlaqə saxla.",
              },
              {
                en: "Never share your password with anyone.",
                az: "Şifrəni heç kimlə heç vaxt paylaşma.",
              },
              {
                en: "Let's finalize the agenda first.",
                az: "Əvvəlcə gündəliyi yekunlaşdıraq.",
              },
              {
                en: "Let them know about the schedule change.",
                az: "Qoy onlar cədvəl dəyişikliyindən xəbərdar olsunlar.",
              },
              {
                en: "Keep this document confidential.",
                az: "Bu sənədi məxfi saxla.",
              },
              {
                en: "Handle the equipment with care.",
                az: "Avadanlıqla ehtiyatla davran.",
              },
              {
                en: "Do double-check the figures before submitting.",
                az: "Təqdim etmədən əvvəl rəqəmləri mütləq yenidən yoxla.",
              },
            ]}
          />
        </section>
      </div>
    </LessonShell>
  );
}
