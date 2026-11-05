import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "evezlikler",
  "mulkiyyet-sifetleri-evezlikleri",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="evezlikler"
      sectionSlug="mulkiyyet-sifetleri-evezlikleri"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu mövzuda iki fərqli, tez-tez qarışdırılan kateqoriya var:{" "}
          <strong>mülkiyyət sifətləri</strong> (my, your, his...) — isimdən{" "}
          <strong>əvvəl</strong> gəlir, isimi müşayiət edir; və{" "}
          <strong>mülkiyyət əvəzlikləri</strong> (mine, yours, his...) — ismi{" "}
          <strong>tamamilə əvəz edir</strong>, tək başına dayanır. Fərqi dəqiq
          ayırmaq bu bölmənin əsas məqsədidir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.3.1</span>
              <h3 className="font-display text-xl text-foreground">
                İki kateqoriya: sifət (determiner) və əvəzlik (pronoun)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">Şəxs</th>
                    <th className="p-2 font-display text-foreground">
                      Sifət (+ isim)
                    </th>
                    <th className="p-2 font-display text-foreground">
                      Əvəzlik (isimsiz)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-foreground font-mono">
                  <tr className="border-b border-line">
                    <td className="p-2">I</td>
                    <td className="p-2">my</td>
                    <td className="p-2">mine</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">you</td>
                    <td className="p-2">your</td>
                    <td className="p-2">yours</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">he</td>
                    <td className="p-2">his</td>
                    <td className="p-2">his</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">she</td>
                    <td className="p-2">her</td>
                    <td className="p-2">hers</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">it</td>
                    <td className="p-2">its</td>
                    <td className="p-2">— (nadir)</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">we</td>
                    <td className="p-2">our</td>
                    <td className="p-2">ours</td>
                  </tr>
                  <tr>
                    <td className="p-2">they</td>
                    <td className="p-2">their</td>
                    <td className="p-2">theirs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ExampleList
              examples={[
                {
                  en: "Is that your badge? It's very similar to mine.",
                  az: "Bu sənin vəsiqəndir? Mənimkinə çox bənzəyir.",
                },
                {
                  en: "That's not their office. Theirs is on the third floor.",
                  az: "Bu, onların ofisi deyil. Onlarınki üçüncü mərtəbədədir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.3.2</span>
              <h3 className="font-display text-xl text-foreground">
                "His" — hər iki kateqoriyada eyni forma
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Cədvəldə gördüyün kimi, <em>his</em> yeganə formadır ki, həm
              sifət, həm əvəzlik kimi eyni cür yazılır — kontekst rolunu müəyyən
              edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This is his laptop. (sifət, isimlə birgə)",
                  az: "Bu, onun noutbukudur.",
                },
                {
                  en: "It was his fault, not hers. (əvəzlik, isimsiz)",
                  az: "Bu, onun günahı idi, onun (qadının) yox.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.3.3</span>
              <h3 className="font-display text-xl text-foreground">
                İstisna: "its" əvəzlik kimi demək olar işlənmir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Its</em> demək olar həmişə sifət kimi (isimlə birgə) işlənir.
              Əvəzlik kimi (isimsiz) yalnız <em>own</em> sözü ilə birgə görünür,
              tək başına təbii səslənmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The company is proud of its achievements. (sifət)",
                  az: "Şirkət öz nailiyyətləri ilə fəxr edir.",
                },
                {
                  en: "The system has a life of its own. (own ilə əvəzlik)",
                  az: "Sistemin öz həyatı var. (məcazi)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.3.4</span>
              <h3 className="font-display text-xl text-foreground">
                İkiqat mülkiyyət konstruksiyası: noun + of + mülkiyyət əvəzliyi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              2.6.6-da öyrəndiyin ikiqat mülkiyyət halının bir forması da
              mülkiyyət əvəzlikləri ilə qurulur:{" "}
              <em>isim + of + mine/his/ hers...</em>. Bu struktur{" "}
              <strong>qeyri-müəyyən</strong> mənanı (bir çox nəfərdən biri)
              daşıyır — "my colleague" (müəyyən, konkret) ilə "a colleague of
              mine" (qeyri-müəyyən, bir neçədən biri) arasındakı fərqə diqqət
              et.
            </p>
            <ExampleList
              examples={[
                {
                  en: "A colleague of mine recommended this tool.",
                  az: "Həmkarlarımdan biri bu aləti tövsiyə etdi. (bir çox həmkardan biri)",
                },
                {
                  en: "My colleague recommended this tool. (fərqli — konkret, bilinən bir həmkar)",
                  az: "Həmkarım bu aləti tövsiyə etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.3.5</span>
              <h3 className="font-display text-xl text-foreground">
                Bədən üzvləri və şəxsi əşyalarla məcburi mülkiyyət sifəti
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bədən üzvləri, geyim və şəxsi əşyalardan danışarkən ingilis
              dilində <em>the</em> deyil, mülkiyyət sifəti (my/his/her)
              işlədilir — bu, bir çox dildə fərqli ola bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I'm going to get my hair cut this afternoon.",
                  az: "Bu gün günorta saçımı kəsdirəcəm.",
                },
                {
                  en: "She broke her arm while skiing.",
                  az: "O, xizək sürərkən qolunu sındırdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.3.6</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik orfoqrafiya: mülkiyyət əvəzliklərində HEÇ BİRİNDƏ
                apostrof yoxdur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              2.6.8-də "its/it's" fərqini görmüşdük — bu qayda, əslində,{" "}
              <strong>bütün</strong> mülkiyyət sifət/əvəzliklərinə aiddir: heç
              biri (my, your, his, her, its, our, their, mine, yours, hers,
              ours, theirs) apostrof almır. Apostroflu formalar (it's, who's)
              həmişə "is/has"-ın qısaldılmasıdır, mülkiyyət deyil.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The decision was theirs to make. (✗ their's)",
                  az: "Qərar vermək onların işi idi.",
                },
                {
                  en: "Whose report is this? — It's yours. (✗ your's)",
                  az: "Bu kimin hesabatıdır? — Sənindir.",
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
            Azərbaycan dilində mülkiyyət sahib olunan sözə mənsubiyyət şəkilçisi
            əlavə etməklə göstərilir ("mənim kitab-ım", "onun kitab-ı") — bu,
            ismin özünə bitişir. İngilis dilində isə mülkiyyət sifəti/əvəzliyi
            ismdən tamamilə <strong>ayrı, müstəqil söz</strong>dür və şəxsə görə
            tamamilə fərqli sözlərə (my/mine, his/his, her/hers) çevrilir — bu,
            Azərbaycan dilindəki bir sabit şəkilçi modelindən daha mürəkkəb bir
            əzbər tələb edir.
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
                wrong: "This laptop is her's.",
                right: "This laptop is hers.",
                az: "Bu noutbuk onundur.",
              },
              {
                wrong: "That idea was their's.",
                right: "That idea was theirs.",
                az: "O fikir onların idi.",
              },
              {
                wrong: "The team is proud of it's results.",
                right: "The team is proud of its results.",
                az: "Komanda öz nəticələri ilə fəxr edir.",
              },
              {
                wrong: "I washed the hair before the meeting.",
                right: "I washed my hair before the meeting.",
                az: "İclasdan əvvəl saçımı yudum.",
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
          title="Məşq 1 — Sifət yoxsa əvəzlik? Uyğun formanı yaz"
          items={[
            {
              prompt: "This is not my pen — it's ___. (you)",
              answer: "This is not my pen — it's yours.",
              translation: "Bu mənim qələmim deyil — sənindir.",
            },
            {
              prompt: "___ presentation was well-structured. (she)",
              answer: "Her presentation was well-structured.",
              translation: "Onun təqdimatı yaxşı strukturlaşdırılmışdı.",
            },
            {
              prompt: "The company increased ___ profits this year. (it)",
              answer: "The company increased its profits this year.",
              translation: "Şirkət bu il mənfəətini artırdı.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "This decision was her's alone.",
              answer: "This decision was hers alone.",
              translation: "Bu qərar yalnız onun idi.",
            },
            {
              prompt: "The car in the garage is our's.",
              answer: "The car in the garage is ours.",
              translation: "Qarajdakı maşın bizimdir.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
