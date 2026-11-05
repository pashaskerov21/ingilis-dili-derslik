import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sifet-ve-zerfler",
  "muqayise-strukturlari",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sifet-ve-zerfler"
      sectionSlug="muqayise-strukturlari"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          6.4 və 6.5-də bərabərsizlik (biri digərindən çox/az) bildirən
          formaları öyrəndik. Bu bölmə isə <strong>bərabərlik</strong>{" "}
          (as...as), <strong>aşağı dərəcə</strong> (less) və müqayisələri{" "}
          <strong>gücləndirmək/yumşaltmaq</strong> üçün əlavə strukturları əhatə
          edir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.6.1</span>
              <h3 className="font-display text-xl text-foreground">
                Bərabərlik: as + sifət/zərf + as
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "This model is as reliable as the previous one.",
                  az: "Bu model əvvəlkindən heç fərqlənmir — eyni dərəcədə etibarlıdır.",
                },
                {
                  en: "She completed the task as quickly as her colleague.",
                  az: "O, tapşırığı həmkarı qədər tez tamamladı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.6.2</span>
              <h3 className="font-display text-xl text-foreground">
                Bərabərsizlik inkarı: not as/so + sifət + as
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "This laptop isn't as fast as the new model.",
                  az: "Bu noutbuk yeni modeldən sürətli deyil.",
                },
                {
                  en: "The results weren't so impressive as we had hoped.",
                  az: "Nəticələr umduğumuz qədər təsirli deyildi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.6.3</span>
              <h3 className="font-display text-xl text-foreground">
                Miqdar bərabərliyi: as much as / as many as
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              2.1-dəki sayıla bilən/bilməyən ayrımı burada da tətbiq olunur —{" "}
              <em>as much as</em> sayıla bilməyən, <em>as many as</em> sayıla
              bilən isimlə.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We don't have as much time as we thought.",
                  az: "Düşündüyümüzdən az vaxtımız var.",
                },
                {
                  en: "There weren't as many applicants as last year.",
                  az: "Keçən ildəki qədər müraciət edən olmadı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.6.4</span>
              <h3 className="font-display text-xl text-foreground">
                Fərqin dərəcəsini göstərmək: az fərq
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Fərqin <strong>demək olar yox</strong> olduğunu bildirmək üçün:{" "}
              <em>almost, nearly, just as, exactly as</em>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This solution is almost as effective as the original one.",
                  az: "Bu həll demək olar orijinalı qədər effektivdir.",
                },
                {
                  en: "She is just as qualified as the other candidates.",
                  az: "O, digər namizədlər qədər ixtisaslıdır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.6.5</span>
              <h3 className="font-display text-xl text-foreground">
                "Not as...as"-i yumşaltmaq: kiçik fərqi vurğulamaq
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Not quite as / not nearly as</em> — mənfi müqayisəni daha
              dəqiq dərəcələndirir. <em>Not quite as</em> = kiçik fərq,{" "}
              <em>not nearly as</em> = böyük fərq.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This version isn't quite as fast as the last one. (kiçik fərq)",
                  az: "Bu versiya sonuncu qədər sürətli deyil, amma yaxındır.",
                },
                {
                  en: "This café isn't nearly as busy as the one downtown. (böyük fərq)",
                  az: "Bu kafe şəhər mərkəzindəki qədər sıx deyil, çox fərq var.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.6.6</span>
              <h3 className="font-display text-xl text-foreground">
                Aşağı dərəcə: less + sifət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Less</em>, <em>more</em>-un tərsidir — heca sayından asılı
              olmadan (6.4-dəki -er/more seçimi burda tətbiq olunmur){" "}
              <strong>bütün</strong> sifətlərlə eyni formada işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This method is less complicated than the previous one.",
                  az: "Bu üsul əvvəlkindən az mürəkkəbdir.",
                },
                {
                  en: "The new office is less crowded in the mornings.",
                  az: "Yeni ofis səhərlər az sıxlıqlıdır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.6.7</span>
              <h3 className="font-display text-xl text-foreground">
                Comparative-i gücləndirmək: much, far, a lot, way
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Böyük fərqi vurğulamaq üçün comparative-dən əvvəl bu
              gücləndiricilər işlədilir. Kiçik fərq üçün isə{" "}
              <em>a bit, a little, slightly</em>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This year's turnout was much higher than last year's.",
                  az: "Bu ilki iştirak keçən ildən xeyli yüksək idi.",
                },
                {
                  en: "The new process is slightly faster than the old one.",
                  az: "Yeni proses əvvəlkindən bir az sürətlidir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.6.8</span>
              <h3 className="font-display text-xl text-foreground">
                İncəlik: "far" cəm isim/less ilə, "much" cəm isimlə YOX
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Far</em>, "less/fewer" ilə və cəm isimlə birgə işlənəndə
              üstünlük təşkil edir. <em>Much</em> isə cəm isimlə uyğun gəlmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We have far fewer resources than last quarter.",
                  az: "Keçən rübdən xeyli az resursumuz var.",
                },
                {
                  en: "There are far more applicants this year. (✗ much more applicants)",
                  az: "Bu il xeyli çox müraciət edən var.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.6.9</span>
              <h3 className="font-display text-xl text-foreground">
                Superlativi gücləndirmək: by far, easily, nearly
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Comparative-dən fərqli olaraq, superlativ üçün ayrı gücləndirici
              dəsti işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This is by far the best proposal we've received.",
                  az: "Bu, aldığımız ən yaxşı təklifdir — heç şübhə yoxdur.",
                },
                {
                  en: "He's easily the most experienced developer on the team.",
                  az: "O, komandadakı ən təcrübəli proqramçıdır — heç şübhəsiz.",
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
            Azərbaycan dilində bərabərlik "qədər" sözü ilə ifadə olunur ("səndən
            sürətli qədər deyil"), bu, "as...as" ilə struktur baxımından
            yaxındır. Əsas fərq — ingilis dilində fərqin{" "}
            <strong>dərəcəsini</strong> (kiçik/böyük) bildirən çoxsaylı
            gücləndirici/yumşaldıcı söz sistemi (much/a bit/nearly/by far) var,
            bu, Azərbaycan dilində bu qədər zəngin leksik alət dəsti ilə ifadə
            olunmur.
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
                wrong: "This isn't as good than the last one.",
                right: "This isn't as good as the last one.",
                az: "Bu, sonuncu qədər yaxşı deyil.",
              },
              {
                wrong: "We have much more employees this year.",
                right: "We have far more employees this year.",
                az: "Bu il xeyli çox işçimiz var.",
              },
              {
                wrong: "This is more less expensive than before.",
                right: "This is less expensive than before.",
                az: "Bu, əvvəlkindən ucuzdur.",
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
          title="Məşq 1 — Uyğun strukturu yaz"
          items={[
            {
              prompt:
                "This café is (not / busy) the one downtown. (böyük fərq)",
              answer: "This café isn't nearly as busy as the one downtown.",
              translation: "Bu kafe şəhər mərkəzindəki qədər sıx deyil.",
            },
            {
              prompt: "We have (few) resources than we expected. (far ilə)",
              answer: "We have far fewer resources than we expected.",
              translation: "Gözlədiyimizdən xeyli az resursumuz var.",
            },
            {
              prompt:
                "This design is (simple) the previous one. (aşağı dərəcə)",
              answer: "This design is less simple than the previous one.",
              translation: "Bu dizayn əvvəlkindən az sadədir.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "She isn't as talented than her sister.",
              answer: "She isn't as talented as her sister.",
              translation: "O, bacısı qədər istedadlı deyil.",
            },
            {
              prompt:
                "This year's sales are much lower items than last year's.",
              answer: "This year's sales are far lower than last year's.",
              translation: "Bu ilin satışları keçən ildən xeyli aşağıdır.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
