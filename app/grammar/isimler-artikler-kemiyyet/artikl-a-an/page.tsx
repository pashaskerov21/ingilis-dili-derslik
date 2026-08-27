import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "isimler-artikler-kemiyyet",
  "artikl-a-an",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="isimler-artikler-kemiyyet"
      sectionSlug="artikl-a-an"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          <em>A/an</em> — tək, sayıla bilən bir ismi ilk dəfə təqdim edərkən və
          ya onu konkret deyil, ümumi bir nümunə kimi göstərərkən istifadə
          olunur. Seçim (a və ya an){" "}
          <strong>orfoqrafiyaya deyil, tələffüzə</strong> əsaslanır — bu,
          öyrənənlərin ən çox səhv saldığı məqamdır.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.3.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas qayda: səs, hərf deyil
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sözün <strong>ilk hərfi yox, ilk tələffüz olunan səsi</strong>{" "}
              seçimi müəyyən edir: samit səslə başlayan sözdən əvvəl{" "}
              <strong>a</strong>, sait səslə başlayan sözdən əvvəl{" "}
              <strong>an</strong>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She works as a consultant.",
                  az: "O, konsultant kimi işləyir.",
                },
                {
                  en: "We need an engineer for this project.",
                  az: "Bu layihə üçün bir mühəndisə ehtiyacımız var.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.3.2</span>
              <h3 className="font-display text-xl text-foreground">
                Sait hərflə başlayıb samit səslə tələffüz olunan sözlər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzi sözlər sait hərflə (u, o) yazılsa da, əvvəlində "y" və ya "w"
              səsi eşidilir — bu hallarda <strong>a</strong> işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This is a unique opportunity.",
                  az: "Bu, unikal bir fürsətdir. (u → /juː/ səsi)",
                },
                {
                  en: "He completed a one-year contract.",
                  az: "O, bir illik müqavilə tamamladı. (o → /w/ səsi)",
                },
                {
                  en: "It was a useful discussion.",
                  az: "Bu, faydalı bir müzakirə idi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.3.3</span>
              <h3 className="font-display text-xl text-foreground">
                Samit hərflə başlayıb sait səslə tələffüz olunan sözlər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əksinə, <strong>h</strong> hərfi bəzi sözlərdə tələffüz olunmur
              (səssizdir) — bu halda söz əslində sait səslə başlayır, ona görə{" "}
              <strong>an</strong> işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The meeting lasted an hour.",
                  az: "İclas bir saat çəkdi. (h səssiz)",
                },
                {
                  en: "She is an honest person.",
                  az: "O, dürüst bir insandır. (h səssiz)",
                },
              ]}
            />
            <p className="text-sm text-muted leading-relaxed">
              Qeyd: "historic" sözündə h tələffüz olunur, lakin vurğusuz olduğu
              üçün bəzi (xüsusilə britaniya) danışanlar həmçinin "an historic"
              formasını da işlədirlər — hər iki forma qəbul edilir.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.3.4</span>
              <h3 className="font-display text-xl text-foreground">
                Abreviatura və qısaltmalar: hərfin adı üzərindən tələffüz
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Qısaltmalarda (abbreviation) qayda dəyişmir — sadəcə diqqət
              edilməli olan budur ki, hərf <strong>öz adı ilə</strong> necə
              tələffüz olunur. Bu, texnologiya sahəsində xüsusilə vacibdir,
              çünki qısaltmalar çox işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We integrated an API for payments.",
                  az: "Ödənişlər üçün bir API inteqrasiya etdik. (A → /eɪ/, sait)",
                },
                {
                  en: "The form requires a URL.",
                  az: "Forma bir URL tələb edir. (U → /juː/, samit səsi)",
                },
                {
                  en: "This runs on an SQL database.",
                  az: "Bu, SQL bazasında işləyir. (S → /es/, sait)",
                },
                {
                  en: "She works as a UX designer.",
                  az: "O, UX dizayneri kimi işləyir. (U → /juː/, samit səsi)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.3.5</span>
              <h3 className="font-display text-xl text-foreground">
                İşlənmə funksiyaları
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>A/an</em> aşağıdakı hallarda tələb olunur:
            </p>
            <div className="space-y-5">
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  İlk dəfə qeyd olunan isim
                </p>
                <ExampleList
                  examples={[
                    {
                      en: "I received an email from the client this morning.",
                      az: "Bu səhər müştəridən bir email aldım.",
                    },
                  ]}
                />
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Peşə/vəzifə
                </p>
                <ExampleList
                  examples={[
                    {
                      en: "He is a backend developer.",
                      az: "O, backend proqramçısıdır.",
                    },
                  ]}
                />
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Növ/kateqoriya bildirmək
                </p>
                <ExampleList
                  examples={[
                    {
                      en: "A whale is a mammal, not a fish.",
                      az: "Balina məməlidir, balıq deyil.",
                    },
                  ]}
                />
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  "Hər" mənasında (tezlik/qiymət)
                </p>
                <ExampleList
                  examples={[
                    {
                      en: "We hold a stand-up meeting twice a day.",
                      az: "Biz gündə iki dəfə stand-up iclası keçiririk.",
                    },
                    {
                      en: "The service costs ten dollars a month.",
                      az: "Xidmət ayda on dollara başa gəlir.",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.3.6</span>
              <h3 className="font-display text-xl text-foreground">
                İşlənmə məhdudiyyəti: yalnız tək, sayıla bilən isimlə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              2.1-də öyrənildiyi kimi, <em>a/an</em> yalnız{" "}
              <strong>tək sayıla bilən</strong> isimlərlə işlənir — nə cəm
              isimlə, nə sayıla bilməyən isimlə uyğun gəlmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She gave me some advice. (✗ an advice)",
                  az: "O, mənə bir məsləhət verdi.",
                },
                {
                  en: "They hired new engineers. (✗ a engineers)",
                  az: "Onlar yeni mühəndislər işə götürdülər.",
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
            Azərbaycan dilində artikl sistemi ümumiyyətlə mövcud deyil. "Bir"
            sözü bəzən oxşar funksiya daşıyır ("bir mühəndisə ehtiyacım var"),
            lakin bu, məcburi deyil və çox vaxt buraxılır ("mühəndisə ehtiyacım
            var" — eyni məna). İngilis dilində isə
            <em> a/an</em> tək sayıla bilən isimlə demək olar heç vaxt buraxıla
            bilməz — bu, Azərbaycan dilli öyrənənlər üçün ən çox unudulan
            elementdir, çünki ana dildə bu cür məcburi qrammatik işarə yoxdur.
          </p>
          <div className="font-mono text-sm space-y-1 text-muted">
            <p>AZ: Mühəndisə ehtiyacımız var. (artiklsiz, düzgün)</p>
            <p>EN: We need an engineer. (artikl məcburidir)</p>
          </div>
        </aside>

        {/* ---------- SƏHV CƏDVƏLİ ---------- */}
        <section className="space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Tipik struktur səhvləri
          </h4>
          <div className="space-y-3">
            {[
              {
                wrong: "We need engineer for this project.",
                right: "We need an engineer for this project.",
                az: "Bu layihə üçün mühəndisə ehtiyacımız var.",
              },
              {
                wrong: "She is a honest person.",
                right: "She is an honest person.",
                az: "O, dürüst bir insandır.",
              },
              {
                wrong: "This is an unique opportunity.",
                right: "This is a unique opportunity.",
                az: "Bu, unikal bir fürsətdir.",
              },
              {
                wrong: "He gave me an advice.",
                right: "He gave me some advice.",
                az: "O, mənə məsləhət verdi.",
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
          title="Məşq 1 — Uyğun artikli seç (a / an)"
          items={[
            {
              prompt: "She is ___ architect.",
              answer: "She is an architect.",
              translation: "O, memardır.",
            },
            {
              prompt: "We waited for ___ hour.",
              answer: "We waited for an hour.",
              translation: "Biz bir saat gözlədik.",
            },
            {
              prompt: "This is ___ European company.",
              answer: "This is a European company.",
              translation: "Bu, Avropa şirkətidir. (E → /juː/ səsi)",
            },
            {
              prompt: "He works with ___ MBA graduate.",
              answer: "He works with an MBA graduate.",
              translation: "O, MBA məzunu ilə işləyir.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "This is a excellent proposal.",
              answer: "This is an excellent proposal.",
              translation: "Bu, əla bir təklifdir.",
            },
            {
              prompt: "He needs an one-day pass.",
              answer: "He needs a one-day pass.",
              translation: "Ona bir günlük bilet lazımdır.",
            },
            {
              prompt: "She is a honest manager.",
              answer: "She is an honest manager.",
              translation: "O, dürüst bir menecerdir.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
