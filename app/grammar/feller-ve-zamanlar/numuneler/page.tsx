import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "feller-ve-zamanlar",
  "numuneler",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="feller-ve-zamanlar" sectionSlug="numuneler">
      <div className="space-y-12">
        <p className="text-base leading-relaxed text-muted">
          Hər bölməyə aid, dərslərdə görülməyən yeni nümunələr — sadəcə oxu,
          qaydanı real cümlələrdə tanı.
        </p>

        {/* 4.1 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">4.1</span>
            <h3 className="font-display text-lg text-foreground">
              Present Simple
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The department handles all vendor negotiations.",
                az: "Şöbə bütün təchizatçı danışıqlarını aparır.",
              },
              {
                en: "Our support line closes at midnight.",
                az: "Dəstək xəttimiz gecə yarısı bağlanır.",
              },
              {
                en: "I'll confirm the booking once payment clears.",
                az: "Ödəniş keçəndən sonra bronu təsdiqləyəcəm.",
              },
              {
                en: "Fold the dough twice before it rests.",
                az: "Xəmiri dincəlməzdən əvvəl iki dəfə qatla.",
              },
            ]}
          />
        </section>

        {/* 4.2 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">4.2</span>
            <h3 className="font-display text-lg text-foreground">
              Present Continuous
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "We're onboarding two new hires this week.",
                az: "Bu həftə iki yeni işçini işə cəlb edirik.",
              },
              {
                en: "The traffic is getting worse near the stadium.",
                az: "Stadion yaxınlığında trafik pisləşir.",
              },
              {
                en: "I'm attending a workshop on Thursday afternoon.",
                az: "Cümə axşamı günorta bir seminarda iştirak edirəm.",
              },
            ]}
          />
        </section>

        {/* 4.3 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">4.3</span>
            <h3 className="font-display text-lg text-foreground">
              Stative fellər
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "This offer sounds too good to be true.",
                az: "Bu təklif inanılmaz dərəcədə yaxşı görünür.",
              },
              {
                en: "I'm having second thoughts about the vendor. (dinamik)",
                az: "Təchizatçı barədə fikrimi dəyişirəm.",
              },
              {
                en: "The client owns two other businesses.",
                az: "Müştərinin iki başqa biznesi var.",
              },
            ]}
          />
        </section>

        {/* 4.4 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">4.4</span>
            <h3 className="font-display text-lg text-foreground">
              Present Perfect
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The board has approved the acquisition.",
                az: "İdarə heyəti alınmanı təsdiqləyib.",
              },
              {
                en: "Have you ever negotiated a contract this complex?",
                az: "Heç bu qədər mürəkkəb müqavilə üzərində danışıq aparmısan?",
              },
              {
                en: "We haven't finalized the budget yet.",
                az: "Büdcəni hələ yekunlaşdırmamışıq.",
              },
            ]}
          />
        </section>

        {/* 4.5 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">4.5</span>
            <h3 className="font-display text-lg text-foreground">
              Present Perfect Continuous
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "I've been troubleshooting this bug since morning.",
                az: "Səhərdən bəri bu xətanı həll etməyə çalışıram.",
              },
              {
                en: "They've been negotiating the terms for weeks.",
                az: "Onlar həftələrdir şərtləri müzakirə edirlər.",
              },
            ]}
          />
        </section>

        {/* 4.6 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">4.6</span>
            <h3 className="font-display text-lg text-foreground">
              Past Simple
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The vendor delivered the shipment two days late.",
                az: "Təchizatçı göndərməni iki gün gec çatdırdı.",
              },
              {
                en: "She resigned from her position last spring.",
                az: "O, keçən bahar vəzifəsindən istefa verdi.",
              },
              {
                en: "We didn't anticipate this level of demand.",
                az: "Bu səviyyədə tələbi gözləmirdik.",
              },
            ]}
          />
        </section>

        {/* 4.7 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">4.7</span>
            <h3 className="font-display text-lg text-foreground">
              Past Continuous
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "We were negotiating the price when the offer expired.",
                az: "Təklifin müddəti bitəndə biz qiyməti müzakirə edirdik.",
              },
              {
                en: "While she was drafting the proposal, the client called twice.",
                az: "O, təklifi yazarkən müştəri iki dəfə zəng etdi.",
              },
            ]}
          />
        </section>

        {/* 4.8 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">4.8</span>
            <h3 className="font-display text-lg text-foreground">
              Past Perfect
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "By the time we noticed the error, the client had already paid.",
                az: "Səhvi görəndə müştəri artıq ödəniş etmişdi.",
              },
              {
                en: "She had worked at two other agencies before joining us.",
                az: "Bizə qoşulmazdan əvvəl o, iki başqa agentlikdə işləmişdi.",
              },
            ]}
          />
        </section>

        {/* 4.9 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">4.9</span>
            <h3 className="font-display text-lg text-foreground">
              Past Perfect Continuous
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The printer was jammed because it had been overheating for hours.",
                az: "Printer sıxılmışdı, çünki saatlardır həddindən artıq qızmışdı.",
              },
              {
                en: "They had been renting the office for a year before buying it.",
                az: "Onlar ofisi almazdan əvvəl bir ildir kirayə götürmüşdülər.",
              },
            ]}
          />
        </section>

        {/* 4.10 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">4.10</span>
            <h3 className="font-display text-lg text-foreground">
              will vs going to
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "We're going to relocate the warehouse next quarter.",
                az: "Növbəti rübdə anbarı köçürəcəyik.",
              },
              {
                en: "I'll take care of the paperwork — don't worry about it.",
                az: "Kağız işlərini mən öz üzərimə götürərəm — narahat olma.",
              },
              {
                en: "The battery is at two percent — it's going to die any second.",
                az: "Batareya iki faizdədir — bir saniyəyə bitəcək.",
              },
            ]}
          />
        </section>

        {/* 4.11 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">4.11</span>
            <h3 className="font-display text-lg text-foreground">
              Future Continuous / Perfect
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "This time next month, we'll be operating in two new markets.",
                az: "Növbəti ay bu vaxt biz iki yeni bazarda fəaliyyət göstərəcəyik.",
              },
              {
                en: "By Friday, the auditors will have reviewed every transaction.",
                az: "Cüməyə qədər auditorlar hər əməliyyatı nəzərdən keçirmiş olacaqlar.",
              },
            ]}
          />
        </section>

        {/* 4.12 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">4.12</span>
            <h3 className="font-display text-lg text-foreground">
              Fel-subyekt uzlaşması
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Neither the accountant nor the auditors were satisfied with the numbers.",
                az: "Nə mühasib, nə də auditorlar rəqəmlərdən razı qaldı.",
              },
              {
                en: "A number of clients have switched to the new plan.",
                az: "Bir sıra müştəri yeni plana keçib.",
              },
              {
                en: "The staff was informed about the policy change yesterday.",
                az: "İşçilər dünən siyasət dəyişikliyi haqqında məlumatlandırıldı.",
              },
            ]}
          />
        </section>
      </div>
    </LessonShell>
  );
}
