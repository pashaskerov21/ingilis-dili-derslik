import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sifet-ve-zerfler",
  "superlative-sifetler",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sifet-ve-zerfler"
      sectionSlug="superlative-sifetler"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Superlativ forması üç və ya daha çox şey arasında{" "}
          <strong>ən yüksək/ən aşağı</strong> dərəcəni bildirir —
          comparative-dən (iki şey arasında) fərqli olaraq, burada bir bütün
          qrupla müqayisə edilir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.5.1</span>
              <h3 className="font-display text-xl text-foreground">
                Bir hecalı sifətlər: the + sifət + -est
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Orfoqrafiya qaydaları 6.4.1-dəki comparative qaydalarının
              eynisidir (CVC ikiləşməsi, səssiz "e" + st, samit+y → -iest).
            </p>
            <ExampleList
              examples={[
                {
                  en: "This is the tallest building in the city.",
                  az: "Bu, şəhərdəki ən hündür binadır.",
                },
                {
                  en: "That was the busiest week of the entire year.",
                  az: "Bu, bütün ilin ən məşğul həftəsi idi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.5.2</span>
              <h3 className="font-display text-xl text-foreground">
                İki və çox hecalı sifətlər: the most
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              6.4.2-dəki eyni istisna qrupu (-y, -er, -le, -ow) burada da
              keçərlidir — bunlar -est ilə də işlənə bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This is the most efficient method we've tried.",
                  az: "Bu, sınadığımız ən effektiv üsuldur.",
                },
                {
                  en: "She is the friendliest/most friendly person on the team.",
                  az: "O, komandadakı ən mehriban insandır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.5.3</span>
              <h3 className="font-display text-xl text-foreground">
                Qeyri-müntəzəm formalar
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                ["good", "the best"],
                ["bad", "the worst"],
                ["far", "the farthest/furthest"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="font-mono text-sm border border-line px-2 py-1 text-center"
                >
                  {a} → {b}
                </div>
              ))}
            </div>
            <ExampleList
              examples={[
                {
                  en: "This is the best decision we've made all year.",
                  az: "Bu, bütün il ərzində verdiyimiz ən yaxşı qərardır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.5.4</span>
              <h3 className="font-display text-xl text-foreground">
                Məcburi "the" — comparative-dən fərqli
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Comparative-dən fərqli olaraq (bax: 6.4, "the" tələb olunmur),
              superlativdən əvvəl demək olar həmişə <em>the</em> gəlir — çünki
              2.4.5-də öyrəndiyin kimi, superlativ öz təbiətinə görə tək bir
              elementi müəyyənləşdirir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She is taller than me. (comparative — 'the' yoxdur)",
                  az: "O, məndən hündürdür.",
                },
                {
                  en: "She is the tallest in the room. (superlative — 'the' məcburi)",
                  az: "O, otaqdakı ən hündürdür.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.5.5</span>
              <h3 className="font-display text-xl text-foreground">
                Sözönü seçimi: "in" (yer/qrup) vs "of" (say/tərkib)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Superlativdən sonra tək bir yer/qrup adı gəlirsə — <em>in</em>.
              Bir sıra/say bildirən tərkib gəlirsə — <em>of</em>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "It's the most expensive restaurant in the neighborhood. (yer)",
                  az: "Bu, məhəllədəki ən baha restorandır.",
                },
                {
                  en: "This was the most difficult of all the questions. (tərkib)",
                  az: "Bu, bütün sualların ən çətini idi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.5.6</span>
              <h3 className="font-display text-xl text-foreground">
                Çox işlək struktur: "one of the + superlative + cəm isim"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Diqqət — bu strukturda superlativdən sonra gələn isim{" "}
              <strong>cəm</strong> olmalıdır, çünki "bir çox ən yaxşıdan biri"
              mənasını verir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This is one of the most important decisions we'll make this year.",
                  az: "Bu, bu il verəcəyimiz ən vacib qərarlardan biridir.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "one of the most important decision" — səhvdir, "decisions"
              (cəm) olmalıdır.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.5.7</span>
              <h3 className="font-display text-xl text-foreground">
                Comparative/superlative seçimi: iki, yoxsa üç+?
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Yalnız <strong>iki</strong> şey/şəxs müqayisə edildikdə
              comparative (bax: 6.4) işlədilir.{" "}
              <strong>Üç və ya daha çox</strong> olduqda superlativ tələb
              olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Of the two candidates, she is the more experienced. (iki — comparative, 'the' ilə birgə də ola bilər)",
                  az: "İki namizəddən o, daha təcrübəlidir.",
                },
                {
                  en: "Of the five candidates, she is the most experienced. (beş — superlativ)",
                  az: "Beş namizəddən o, ən təcrübəlisidir.",
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
            Azərbaycan dilində üstünlük dərəcəsi "ən" sözü ilə universal ifadə
            olunur ("ən böyük", "ən maraqlı") — sifətin uzunluğundan asılı
            olmayaraq. İngilis dilində isə (comparative kimi) seçim heca sayına
            bağlıdır, üstəlik <em>the</em>-nin məcburiliyi (6.5.4) Azərbaycan
            dilində paraleli olmayan əlavə bir qrammatik tələbdir.
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
                wrong: "She is tallest in her class.",
                right: "She is the tallest in her class.",
                az: "O, sinfindəki ən hündürdür.",
              },
              {
                wrong: "This is one of the best decision I've made.",
                right: "This is one of the best decisions I've made.",
                az: "Bu, verdiyim ən yaxşı qərarlardan biridir.",
              },
              {
                wrong: "It's the most tall building of the city.",
                right: "It's the tallest building in the city.",
                az: "Bu, şəhərin ən hündür binasıdır.",
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
          title="Məşq 1 — Superlativ formasını yaz"
          items={[
            {
              prompt: "This is (good) offer we've received. →",
              answer: "This is the best offer we've received.",
              translation: "Bu, aldığımız ən yaxşı təklifdir.",
            },
            {
              prompt: "She is (talented) member of the team. →",
              answer: "She is the most talented member of the team.",
              translation: "O, komandanın ən istedadlı üzvüdür.",
            },
            {
              prompt: "That was (hot) day of the summer. →",
              answer: "That was the hottest day of the summer.",
              translation: "Bu, yayın ən isti günü idi.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "This is most expensive option we have.",
              answer: "This is the most expensive option we have.",
              translation: "Bu, sahib olduğumuz ən baha seçimdir.",
            },
            {
              prompt:
                "He is one of the most successful entrepreneur in the city.",
              answer:
                "He is one of the most successful entrepreneurs in the city.",
              translation: "O, şəhərdəki ən uğurlu sahibkarlardan biridir.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
