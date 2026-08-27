import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "evezlikler",
  "qeyri-mueyyen-evezlikler",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="evezlikler"
      sectionSlug="qeyri-mueyyen-evezlikler"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Qeyri-müəyyən əvəzliklər konkret şəxs, əşya və ya yeri deyil,{" "}
          <strong>ümumi, qeyri-spesifik</strong> bir varlığı bildirir. Bunlar
          2.7 və 2.8-də öyrəndiyin some/any/no/every sistemi ilə birbaşa
          əlaqəlidir — sadəcə indi isimlə deyil, "şəxs/əşya/yer" bildirən sabit
          şəkilçilərlə (-body/-one/-thing/-where) birləşir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.7.1</span>
              <h3 className="font-display text-xl text-foreground">
                Formalaşma sxemi: 4 kök × 4 şəkilçi
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left font-mono">
                    <th className="p-2 font-display text-foreground"></th>
                    <th className="p-2">-body/-one (şəxs)</th>
                    <th className="p-2">-thing (əşya)</th>
                    <th className="p-2">-where (yer)</th>
                  </tr>
                </thead>
                <tbody className="text-foreground font-mono">
                  <tr className="border-b border-line">
                    <td className="p-2 font-body text-muted">some-</td>
                    <td className="p-2">someone/somebody</td>
                    <td className="p-2">something</td>
                    <td className="p-2">somewhere</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body text-muted">any-</td>
                    <td className="p-2">anyone/anybody</td>
                    <td className="p-2">anything</td>
                    <td className="p-2">anywhere</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body text-muted">no-</td>
                    <td className="p-2">no one/nobody</td>
                    <td className="p-2">nothing</td>
                    <td className="p-2">nowhere</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-body text-muted">every-</td>
                    <td className="p-2">everyone/everybody</td>
                    <td className="p-2">everything</td>
                    <td className="p-2">everywhere</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted">
              Diqqət: <em>no one</em> yeganə istisnadır — iki ayrı söz (və ya
              defislə "no-one") kimi yazılır, "noone" formasında birləşmir.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.7.2</span>
              <h3 className="font-display text-xl text-foreground">
                Some-/any- paylanması: 2.7.1-in birbaşa davamı
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Eyni qayda: <em>some-</em> təsdiq və təklif/xahiş cümlələrində,{" "}
              <em>any-</em> inkar və sualda.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Someone left a message for you this morning.",
                  az: "Bu səhər kimsə sənə mesaj buraxıb.",
                },
                {
                  en: "I couldn't find anyone available at that hour.",
                  az: "O saatda əlçatan heç kimi tapa bilmədim.",
                },
                {
                  en: "Would you like something to eat before we start?",
                  az: "Başlamazdan əvvəl bir şey yemək istəyərsən? (təklif)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.7.3</span>
              <h3 className="font-display text-xl text-foreground">
                No- formaları: özü mənfi, tək fel, ikiqat inkar yoxdur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              2.8.7-də gördüyün qaydaya uyğun olaraq, <em>no-</em> ilə başlayan
              formalar artıq mənfidir — eyni cümlədə <em>not</em> işlədilmir.
              Bunlar həmişə tək fel alır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Nothing has changed since our last conversation.",
                  az: "Son söhbətimizdən bəri heç nə dəyişməyib.",
                },
                {
                  en: "There was nowhere to sit in the waiting room.",
                  az: "Gözləmə otağında oturacaq yer yox idi.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "I don't know nothing" — standart ingilis dilində səhvdir;
              düzgünü: "I know nothing" və ya "I don't know anything."
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.7.4</span>
              <h3 className="font-display text-xl text-foreground">
                Every- formaları: tək fel, amma "they/their" ilə geri istinad
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              3.1.5-də gördüyün gender-neutral "they" qaydası burada da
              keçərlidir — <em>everyone/everybody</em> qrammatik cəhətdən tək
              olsa da, cinsi bilinməyən şəxsə geri istinad edərkən{" "}
              <em>they/their</em> işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Everyone should submit their timesheet by Friday.",
                  az: "Hər kəs vaxt cədvəlini cümə gününə qədər təqdim etməlidir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.7.5</span>
              <h3 className="font-display text-xl text-foreground">
                Vacib söz sırası: sifət qeyri-müəyyən əvəzlikdən SONRA gəlir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Adi isimlərdən fərqli olaraq (bax: 1.1.6, sifət isimdən əvvəl),
              qeyri-müəyyən əvəzlikləri təsvir edən sifət{" "}
              <strong>həmişə sonra</strong> gəlir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I need to tell you something important.",
                  az: "Sənə vacib bir şey deməliyəm.",
                },
                {
                  en: "Is there anywhere quiet we could talk?",
                  az: "Danışa biləcəyimiz sakit bir yer varmı?",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "an important something" deyil, "something important" — sıra
              tərsinədir.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.7.6</span>
              <h3 className="font-display text-xl text-foreground">
                Mülkiyyət forması: "else" ilə birgə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Mülkiyyət bildirmək üçün 's əlavə olunur. "Başqası" mənasında{" "}
              <em>else</em> sözü əvəzlikdən sonra, mülkiyyət şəkilçisindən{" "}
              <strong>əvvəl</strong> yerləşir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This isn't my laptop — it must be somebody else's.",
                  az: "Bu mənim noutbukum deyil — deyəsən, başqasınındır.",
                },
                {
                  en: "Whose idea was this? — Anybody's guess.",
                  az: "Bu kimin fikri idi? — Heç kim dəqiq bilmir. (sabit ifadə)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.7.7</span>
              <h3 className="font-display text-xl text-foreground">
                Qeyri-standart formalar: "-s" əlavə etmə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzi regional danışıqda eşidilsə də,{" "}
              <em>anywheres, somewheres, nowheres</em> standart ingilis dilində
              mövcud deyil — həmişə "-s" olmadan işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I can't find my badge anywhere. (✗ anywheres)",
                  az: "Vəsiqəmi heç yerdə tapa bilmirəm.",
                },
              ]}
            />
          </div>
        </section>

        {/* ---------- MÜQAYİSƏ QUTUSU ---------- */}
        <aside className="border-l-2 border-accent bg-accent/5 p-5 space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Azərbaycan dili ilə struktur fərqi
          </h4>
          <p className="text-foreground leading-relaxed">
            Azərbaycan dilində "kimsə/hər kəs/heç kim" kimi sözlər tək
            sözlərdir, ingilis dilindəki kimi kök+şəkilçi sisteminə bölünmür.
            Bundan başqa, Azərbaycan dilində ikiqat inkar tam normaldır və
            məcburidir ("heç kim heç nə demədi") — halbuki ingilis dilində bu,
            standart qaydaya görə yalnız <strong>bir</strong> mənfi element
            tələb edir. Bu, Azərbaycan dilli öyrənənlər üçün 2.7/2.8-də
            gördüyümüz ikiqat inkar probleminin bu bölmədəki təkrarıdır və
            xüsusi diqqət tələb edir.
          </p>
        </aside>

        {/* ---------- SƏHV CƏDVƏLİ ---------- */}
        <section className="space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Tipik struktur səhvləri
          </h4>
          <div className="space-y-3">
            {[
              {
                wrong: "I don't know nobody in this city.",
                right: "I don't know anybody in this city.",
                az: "Bu şəhərdə heç kimi tanımıram.",
              },
              {
                wrong: "I need to tell you important something.",
                right: "I need to tell you something important.",
                az: "Sənə vacib bir şey deməliyəm.",
              },
              {
                wrong: "This bag is somebody's else.",
                right: "This bag is somebody else's.",
                az: "Bu çanta başqasınındır.",
              },
              {
                wrong: "Everyone submitted his report. (cinsi bilinməyəndə)",
                right: "Everyone submitted their report.",
                az: "Hər kəs hesabatını təqdim etdi.",
              },
            ].map((row) => (
              <div
                key={row.wrong}
                className="border border-line p-3 space-y-1 text-sm"
              >
                <p className="text-muted line-through decoration-accent/60">
                  {row.wrong}
                </p>
                <p className="text-foreground font-medium">{row.right}</p>
                <p className="text-muted">{row.az}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- MƏŞQLƏR ---------- */}
        <ExerciseList
          title="Məşq 1 — Uyğun qeyri-müəyyən əvəzliyi seç"
          items={[
            {
              prompt:
                "Is ___ interested in joining the workshop? (təklif/sual)",
              answer: "Is anyone interested in joining the workshop?",
              translation: "Seminara qoşulmaqda maraqlanan kimsə var?",
            },
            {
              prompt: "There's ___ wrong with the server logs. (təsdiq)",
              answer: "There's something wrong with the server logs.",
              translation: "Server loglarında nəsə səhvdir.",
            },
            {
              prompt: "___ has seen the final draft yet. (inkar, özü mənfi)",
              answer: "No one has seen the final draft yet.",
              translation: "Hələ heç kim son variantı görməyib.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "We don't have nowhere to store these files.",
              answer: "We don't have anywhere to store these files.",
              translation: "Bu faylları saxlamaq üçün heç yerimiz yoxdur.",
            },
            {
              prompt: "I want to say interesting something about this.",
              answer: "I want to say something interesting about this.",
              translation: "Bu barədə maraqlı bir şey demək istəyirəm.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
