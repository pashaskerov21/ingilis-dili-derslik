import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sifet-ve-zerfler",
  "numuneler",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="sifet-ve-zerfler" sectionSlug="numuneler">
      <div className="space-y-12">
        <p className="text-base leading-relaxed text-muted">
          Hər bölməyə aid, dərslərdə görülməyən yeni nümunələr — sadəcə oxu,
          qaydanı real cümlələrdə tanı.
        </p>

        {/* 6.1 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">6.1</span>
            <h3 className="font-display text-lg text-foreground">
              Sifətlərin sırası
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "He bought a stylish new leather laptop bag.",
                az: "O, şık, yeni, dəri noutbuk çantası aldı.",
              },
              {
                en: "They found an interesting old Japanese vase at the market.",
                az: "Onlar bazarda maraqlı, köhnə, yapon vazası tapdılar.",
              },
              {
                en: "She wore a comfortable grey wool sweater.",
                az: "O, rahat, boz, yun sviter geyinmişdi.",
              },
            ]}
          />
        </section>

        {/* 6.2 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">6.2</span>
            <h3 className="font-display text-lg text-foreground">
              Zərf düzəltmə
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The negotiations proceeded smoothly.",
                az: "Danışıqlar hamar getdi.",
              },
              {
                en: "He handled the criticism gracefully.",
                az: "O, tənqidə zərif şəkildə cavab verdi.",
              },
              {
                en: "This soup tastes wonderful. (bağlayıcı fel → sifət)",
                az: "Bu şorba möhtəşəm dadır.",
              },
            ]}
          />
        </section>

        {/* 6.3 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">6.3</span>
            <h3 className="font-display text-lg text-foreground">
              Zərflərin növləri və yeri
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "She rarely misses a chance to give feedback.",
                az: "O, rəy bildirmək fürsətini nadir hallarda qaçırır.",
              },
              {
                en: "They celebrated the launch quietly at the office.",
                az: "Onlar buraxılışı ofisdə sakitcə qeyd etdilər.",
              },
              {
                en: "I trust his judgment completely.",
                az: "Onun mühakiməsinə tam etibar edirəm.",
              },
            ]}
          />
        </section>

        {/* 6.4 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">6.4</span>
            <h3 className="font-display text-lg text-foreground">
              Comparative
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "This quarter's numbers look stronger than last quarter's.",
                az: "Bu rübün rəqəmləri keçən rübdən güclü görünür.",
              },
              {
                en: "The updated interface is more intuitive than the old one.",
                az: "Yenilənmiş interfeys köhnəsindən daha intuitivdir.",
              },
            ]}
          />
        </section>

        {/* 6.5 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">6.5</span>
            <h3 className="font-display text-lg text-foreground">
              Superlative
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "This is the fastest turnaround we've ever achieved.",
                az: "Bu, əldə etdiyimiz ən sürətli tamamlanmadır.",
              },
              {
                en: "He is one of the most reliable suppliers we work with.",
                az: "O, işlədiyimiz ən etibarlı təchizatçılardan biridir.",
              },
            ]}
          />
        </section>

        {/* 6.6 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">6.6</span>
            <h3 className="font-display text-lg text-foreground">
              Müqayisə strukturları
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "This branch isn't as profitable as the one downtown.",
                az: "Bu filial şəhər mərkəzindəki qədər gəlirli deyil.",
              },
              {
                en: "We have far less inventory than we need for the holidays.",
                az: "Bayramlar üçün lazım olandan xeyli az anbarımız var.",
              },
            ]}
          />
        </section>

        {/* 6.7 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">6.7</span>
            <h3 className="font-display text-lg text-foreground">
              Dərəcələnən/dərəcələnməyən sifətlər
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The venue was absolutely packed for the launch event.",
                az: "Məkan buraxılış tədbiri üçün tamamilə dolu idi.",
              },
              {
                en: "Her explanation was very clear and easy to follow.",
                az: "Onun izahı çox aydın və izləməsi asan idi.",
              },
            ]}
          />
        </section>

        {/* 6.8 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">6.8</span>
            <h3 className="font-display text-lg text-foreground">
              İştirakçı sifətlər -ing/-ed
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The quarterly numbers were quite alarming.",
                az: "Rüblük rəqəmlər kifayət qədər narahatedici idi.",
              },
              {
                en: "I was relieved when the deployment finally succeeded.",
                az: "Yayım nəhayət uğurlu olanda rahatladım.",
              },
            ]}
          />
        </section>
      </div>
    </LessonShell>
  );
}
