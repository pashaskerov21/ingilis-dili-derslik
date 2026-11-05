import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "feller-ve-zamanlar",
  "past-perfect-continuous",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="feller-ve-zamanlar"
      sectionSlug="past-perfect-continuous"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu, 4.5-dəki Present Perfect Continuous-un birbaşa keçmiş qarşılığıdır
          — fərq yalnız istinad nöqtəsinin indi deyil, keçmişdəki başqa bir an
          olmasıdır. 4.8-dəki Past Perfect kimi, diqqət yenə iki keçmiş nöqtə
          arasındakı əlaqədədir, amma burada{" "}
          <strong>müddət və prosesin özü</strong> vurğulanır.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.9.1</span>
              <h3 className="font-display text-xl text-foreground">
                Forma: had been + fel-ing
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "By the time I joined, they had been developing the product for two years.",
                  az: "Mən qoşulanda, onlar məhsulu artıq iki ildir hazırlayırdılar.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.9.2</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas funksiya: keçmişdəki nöqtəyə qədər davam edən müddət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              "Nə qədər müddətdir davam edirdi" sualına cavab verir — müddət,
              ikinci (daha sonrakı) keçmiş hadisədən{" "}
              <strong>əvvələ qədər</strong> ölçülür.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She had been waiting for twenty minutes when the doors finally opened.",
                  az: "Qapılar nəhayət açılanda o, iyirmi dəqiqədir gözləyirdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.9.3</span>
              <h3 className="font-display text-xl text-foreground">
                For/since — keçmiş istinad nöqtəsinə qədər ölçülür
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              4.4.5-dəki eyni for/since qaydası, sadəcə istinad nöqtəsi indi
              deyil, keçmişdə olan bir andır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "By six o'clock, I had been working for nine hours.",
                  az: "Saat altıya qədər mən doqquz saatdır işləyirdim.",
                },
                {
                  en: "He had been managing the team since the previous reorganization.",
                  az: "O, əvvəlki yenidənqurmadan bəri komandanı idarə edirdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.9.4</span>
              <h3 className="font-display text-xl text-foreground">
                Səbəb-nəticə: keçmişdəki vəziyyəti izah etmək
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Keçmişdə müşahidə olunan bir vəziyyətin <strong>səbəbini</strong>{" "}
              izah edərkən — "niyə belə idi" sualına cavab verən fon məlumatı
              kimi.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He was exhausted because he had been coding all night.",
                  az: "O, yorğun idi, çünki bütün gecəni kod yazmışdı.",
                },
                {
                  en: "The ground was wet — it had been raining earlier.",
                  az: "Yer islaq idi — əvvəllər yağış yağmışdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.9.5</span>
              <h3 className="font-display text-xl text-foreground">
                Simple vs Continuous: 4.5-in eyni məntiqi, keçmişə köçürülüb
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Past Perfect Simple — nəticə/say/tamamlanma; Past Perfect
              Continuous — müddət/proses. Eyni "sendviç məntiqi" (4.5.5) burada
              da keçərlidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "By noon, she had written three reports. (say — nə qədər)",
                  az: "Günortaya qədər o, üç hesabat yazmışdı.",
                },
                {
                  en: "By noon, she had been writing reports all morning. (müddət — nə qədər vaxt)",
                  az: "Günortaya qədər o, bütün səhər hesabat yazırdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.9.6</span>
              <h3 className="font-display text-xl text-foreground">
                Reported speech-də sürüşmə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              4.8.5-dəki qaydaya uyğun olaraq, əsl cümlə Present Perfect
              Continuous-da idisə, nəql edərkən bir addım geriyə — Past Perfect
              Continuous-a keçir.
            </p>
            <ExampleList
              examples={[
                {
                  en: '"I have been studying all night." → She said she had been studying all night.',
                  az: '"Bütün gecə oxuyuram." → O, bütün gecə oxuduğunu söylədi.',
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.9.7</span>
              <h3 className="font-display text-xl text-foreground">
                Məhdudiyyətlər: stative və anlıq fellər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              4.3 və 4.5.8-dəki qaydalar dəyişmədən qalır — stative fellər
              (know, believe) və anlıq fellər (start, stop) bu formada işlənmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We had known about the risk for months. (✗ had been knowing)",
                  az: "Biz aylardır riskdən xəbərdar idik.",
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
            4.5-dəki eyni əsas çətinlik burada bir qat da mürəkkəbləşir — indi
            təkcə "nəticə/müddət" fərqini deyil, həm də bunun{" "}
            <strong>hansı keçmiş nöqtəyə qədər</strong> hesablandığını idarə
            etmək lazımdır. Azərbaycan dilində bu üç qatlı qərar (keçmişdə vaxt
            + nəticə/proses + hansı nöqtəyə qədər) ayrı-ayrı qrammatik
            formalarla ifadə olunmur, ona görə bu, fəslin ən çətin zamanlarından
            biri sayıla bilər.
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
                wrong: "She had been knowing the answer for a while.",
                right: "She had known the answer for a while.",
                az: "O, bir müddətdir cavabı bilirdi.",
              },
              {
                wrong: "By six, we had been finishing the project.",
                right: "By six, we had finished the project.",
                az: "Saat altıya qədər biz layihəni bitirmişdik.",
              },
              {
                wrong:
                  "He was tired because he had run all day. (davamlılıq vurğulanmalıdır)",
                right: "He was tired because he had been running all day.",
                az: "O, yorğun idi, çünki bütün gün qaçmışdı.",
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
          title="Məşq 1 — Simple yoxsa Continuous?"
          items={[
            {
              prompt:
                "By the time the client arrived, we (had prepared/had been preparing) five slides. (say)",
              answer:
                "By the time the client arrived, we had prepared five slides.",
              translation: "Müştəri gələndə biz beş slayd hazırlamışdıq.",
            },
            {
              prompt:
                "Her eyes were red because she (had cried/had been crying). (proses/səbəb)",
              answer: "Her eyes were red because she had been crying.",
              translation: "Onun gözləri qızarmışdı, çünki ağlayırdı.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "They had been understanding the risks for months.",
              answer: "They had understood the risks for months.",
              translation: "Onlar aylardır riskləri başa düşürdülər.",
            },
            {
              prompt: "We had been arrived before the storm started.",
              answer: "We had arrived before the storm started.",
              translation: "Fırtına başlamazdan əvvəl biz çatmışdıq.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
