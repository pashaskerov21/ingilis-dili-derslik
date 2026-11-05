import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "qabaqcil-struktur-formalari",
  "infinitiv",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="qabaqcil-struktur-formalari"
      sectionSlug="infinitiv"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          İnfinitiv — felin "lüğət forması", ən çox "to" ilə birgə (to work, to
          go). Gerund kimi isim funksiyası daşıya bilir, amma fərqli
          kontekstlərdə işlənir. Bundan əlavə, "to"-suz **çılpaq infinitiv**
          forması da var, müəyyən struktur şərtlərində.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.4.1</span>
              <h3 className="font-display text-xl text-foreground">
                Tam infinitiv (to + fel): əsas işlənmə halları
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Müəyyən fellərdən sonra (want, decide, hope, plan, agree — 10.5-də
              tam siyahı), məqsəd bildirmək üçün, sifətdən sonra.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We decided to postpone the launch.",
                  az: "Buraxılışı təxirə salmağı qərara aldıq.",
                },
                {
                  en: "I called the vendor to confirm the delivery date. (məqsəd)",
                  az: "Çatdırılma tarixini təsdiqləmək üçün təchizatçıya zəng etdim.",
                },
                {
                  en: "She was happy to help with the migration. (sifətdən sonra)",
                  az: "O, köçürmədə kömək etməkdən məmnun idi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.4.2</span>
              <h3 className="font-display text-xl text-foreground">
                Çılpaq infinitiv: modal fellərdən sonra (5-in xatırladılması)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              5.1-5.10-da öyrəndiyin bütün modal fellərdən sonra "to" işlənmir —
              bu, artıq tanış bir qaydadır, burada rəsmiləşdirilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She can finish this by tomorrow. (✗ can to finish)",
                  az: "O, bunu sabaha qədər bitirə bilər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.4.3</span>
              <h3 className="font-display text-xl text-foreground">
                Çılpaq infinitiv: "make/let" ilə (icazə/məcburiyyət)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Make</em> (məcbur etmək) və <em>let</em> (icazə vermək)
              özlərindən sonra heç vaxt "to" qəbul etmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The manager made us redo the entire presentation. (✗ made us to redo)",
                  az: "Menecer bizə bütün təqdimatı yenidən etdirdi.",
                },
                {
                  en: "They let the team decide the timeline. (✗ let the team to decide)",
                  az: "Onlar komandaya vaxt cədvəlini müəyyənləşdirməyə icazə verdilər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.4.4</span>
              <h3 className="font-display text-xl text-foreground">
                Qavrayış felləri: obyekt + çılpaq infinitiv (tam hərəkət)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>See, hear, feel, watch</em> kimi fellərdən sonra, əgər hərəkət
              **tam, bitmiş** kimi müşahidə olunubsa — obyekt + çılpaq
              infinitiv. Əgər hərəkət **davam edən** kimi müşahidə olunubsa —
              obyekt + -ing (gerund/participle).
            </p>
            <ExampleList
              examples={[
                {
                  en: "I heard the door close. (tam hərəkət — bağlanma prosesi bitdi)",
                  az: "Qapının bağlandığını eşitdim.",
                },
                {
                  en: "I heard him talking on the phone. (davam edən — danışıq prosesi)",
                  az: "Onun telefonda danışdığını eşitdim.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.4.5</span>
              <h3 className="font-display text-xl text-foreground">
                İstisna: "help" hər iki forması qəbul edir
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "She helped me finish the report. / She helped me to finish the report. (hər ikisi düzgün)",
                  az: "O, hesabatı bitirməyimə kömək etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.4.6</span>
              <h3 className="font-display text-xl text-foreground">
                İnkar forması: "not" "to"-dan əvvəl
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "We agreed not to discuss the budget publicly.",
                  az: "Büdcəni açıq şəkildə müzakirə etməməyi razılaşdıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.4.7</span>
              <h3 className="font-display text-xl text-foreground">
                Split infinitive: "to" ilə fel arasına zərf
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ənənəvi qaydaya görə "to" ilə fel arasına heç nə girməməli idi,
              amma müasir ingilis dilində (Oxford Dictionary daxil) bu, təbii
              axın üçün geniş qəbul edilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We need to really understand the root cause. (split, amma qəbul edilən)",
                  az: "Kök səbəbi həqiqətən başa düşməliyik.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.4.8</span>
              <h3 className="font-display text-xl text-foreground">
                Perfekt və passiv infinitiv
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>To have + III forma</em> — daha əvvəlki hərəkəti bildirir
              (10.2.4-dəki hesabat strukturuna bənzər).{" "}
              <em>To be + III forma</em> — passiv məna.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He seems to have made a mistake in the calculation. (perfekt)",
                  az: "Görünür, hesablamada səhv edib.",
                },
                {
                  en: "The project is expected to be finished by June. (passiv)",
                  az: "Layihənin iyuna qədər bitəcəyi gözlənilir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.4.9</span>
              <h3 className="font-display text-xl text-foreground">
                Sual sözlərindən sonra: subyektsiz infinitiv
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              8.2.7-dəki "How to...?" xəbərdarlığının tamamlanması: bu,
              **müstəqil sual kimi** işlənə bilməz, amma **isim ifadəsi kimi**
              başqa cümlənin daxilində tam düzgündür.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I don't know how to fix this bug. (isim ifadəsi kimi, düzgün)",
                  az: "Bu xətanı necə düzəltməyi bilmirəm.",
                },
                {
                  en: "She explained what to do next.",
                  az: "O, sonra nə etmək lazım olduğunu izah etdi.",
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
            Azərbaycan dilində məsdər forması (-maq/-mək) həm gerund, həm
            infinitiv funksiyasını eyni formada yerinə yetirir — iki ayrı forma
            yoxdur. İngilis dilində isə bu iki funksiya (gerund/ infinitiv)
            leksik cəhətdən ayrılıb, seçim isə əvvəlki felə bağlıdır — bu,
            10.5-də tam ələ alınacaq əsas çətinlikdir.
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
                wrong: "She let me to use her laptop.",
                right: "She let me use her laptop.",
                az: "O, mənə noutbukundan istifadə etməyə icazə verdi.",
              },
              {
                wrong: "We must to finish this today.",
                right: "We must finish this today.",
                az: "Bunu bu gün bitirməliyik.",
              },
              {
                wrong: "I don't know how fix this. (to unudulub)",
                right: "I don't know how to fix this.",
                az: "Bunu necə düzəltməyi bilmirəm.",
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
          title="Məşq 1 — Uyğun formanı yaz"
          items={[
            {
              prompt: "The team made him ___ (redo) the analysis. (bare)",
              answer: "The team made him redo the analysis.",
              translation: "Komanda ona təhlili yenidən etdirdi.",
            },
            {
              prompt:
                "I saw her ___ (leave) the building at noon. (tam hərəkət)",
              answer: "I saw her leave the building at noon.",
              translation: "Onun günorta binadan çıxdığını gördüm.",
            },
            {
              prompt: "We plan ___ (launch) the update next week.",
              answer: "We plan to launch the update next week.",
              translation: "Növbəti həftə yeniləməni buraxmağı planlaşdırırıq.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "They made her to sign the form again.",
              answer: "They made her sign the form again.",
              translation: "Onlar ona formu yenidən imzalatdılar.",
            },
            {
              prompt: "He agreed sign the contract.",
              answer: "He agreed to sign the contract.",
              translation: "O, müqaviləni imzalamağa razılaşdı.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
