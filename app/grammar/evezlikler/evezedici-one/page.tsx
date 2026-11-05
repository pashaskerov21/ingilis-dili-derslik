import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "evezlikler",
  "evezedici-one",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="evezlikler" sectionSlug="evezedici-one">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          <em>One/ones</em> artıq adı çəkilmiş bir sayıla bilən ismi{" "}
          <strong>təkrarlamamaq</strong> üçün onun yerinə keçir. Bu, 3.6-dakı
          göstərici əvəzliklərlə (this one, that one) tez-tez birgə işlənir,
          amma öz müstəqil qaydalarına malikdir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.8.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas qayda: one (tək) / ones (cəm)
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "Do you need a pen? — No thanks, I've already got one.",
                  az: "Qələmə ehtiyacın var? — Yox, təşəkkür edirəm, artıq var.",
                },
                {
                  en: "Which files should I send — the old ones or the updated ones?",
                  az: "Hansı faylları göndərim — köhnələri, yoxsa yenilənmişləri?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.8.2</span>
              <h3 className="font-display text-xl text-foreground">
                Vacib məhdudiyyət: sayıla bilməyən isimlə işlənmir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              2.1-dəki ayrımı xatırla: <em>one/ones</em> yalnız sayıla bilən
              isimləri əvəz edir. Sayıla bilməyən isim üçün sadəcə buraxılır və
              ya başqa vasitə (some) işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Do you have any advice? — Yes, I have some. (✗ some one/ones)",
                  az: "Hər hansı məsləhətin var? — Bəli, var.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.8.3</span>
              <h3 className="font-display text-xl text-foreground">
                Sifətlə birgə: müəyyənedici (determiner) məcburidir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              "One/ones"-dan əvvəl sifət əlavə olunanda (premodified), onun
              qarşısına mütləq bir müəyyənedici (a/an, the, this, my)
              qoyulmalıdır — sifət + one tək başına dayana bilməz.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This laptop is slow — I need a faster one.",
                  az: "Bu noutbuk yavaşdır — mənə daha sürətlisi lazımdır.",
                },
                {
                  en: "These figures are old. Can you send me the updated ones?",
                  az: "Bu rəqəmlər köhnədir. Yenilənmişlərini göndərə bilərsən?",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "I need faster one" — səhvdir, müəyyənedici (a) buraxılıb: "I
              need a faster one."
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.8.4</span>
              <h3 className="font-display text-xl text-foreground">
                Sifətsiz halda: some/any/both/ədədlərdən sonra "ones" düşür
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əksinə, əgər heç bir sifət yoxdursa (sadə təkrar önləmə),{" "}
              <em>some, any, both</em> və ədədlərdən dərhal sonra <em>ones</em>{" "}
              adətən <strong>buraxılır</strong> — əlavə etmək artıq və
              qeyri-təbii səslənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Do you have any samples? — Yes, I have some. (✗ some ones)",
                  az: "Hər hansı nümunən var? — Bəli, var.",
                },
                {
                  en: "I need three copies. — I only have two. (✗ two ones)",
                  az: "Mənə üç nüsxə lazımdır. — Mənim yalnız ikim var.",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Sifət əlavə olunanda isə "ones" geri qayıdır: "I have some red
              ones" (3.8.3-ün nümunəsi ilə eyni məntiq).
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.8.5</span>
              <h3 className="font-display text-xl text-foreground">
                Qeyri-rəsmi vurğu: mülkiyyət sifəti + "one"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Gündəlik, qeyri-rəsmi danışıqda mülkiyyət sifəti (my, his, her)
              "one"-dan əvvələ keçə bilər — bu, 3.3-dəki standart mülkiyyət
              əvəzliyindən (mine, his, hers) daha{" "}
              <strong>emosional vurğulu</strong> səslənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "My laptop got stolen too. — Really? My one got stolen last week. (daha emosional, qeyri-rəsmi)",
                  az: "Mənim noutbukum da oğurlandı. — Doğrudan? Mənimki keçən həftə oğurlanmışdı.",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Standart/rəsmi forma: "Mine got stolen last week" (3.3-dəki adi
              mülkiyyət əvəzliyi).
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.8.6</span>
              <h3 className="font-display text-xl text-foreground">
                İstinad istiqaməti: geriyə (adi), irəliyə (nadir)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Adətən "one/ones" artıq deyilmiş bir isimə <strong>geriyə</strong>{" "}
              istinad edir. Irəliyə istinad (hələ deyilməmiş isimi qabaqcadan
              əvəz etmək) mümkündür, amma xeyli az işlək və nadir haldır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We need a bigger meeting room, but we don't have one available today. (geriyə — room)",
                  az: "Bizə daha böyük iclas otağı lazımdır, amma bu gün əlçatan yoxdur.",
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
            Azərbaycan dilində təkrarı önləmək üçün adətən ismin özü sadəcə
            buraxılır, ayrıca əvəzedici söz tələb olunmur ("Bu noutbuk yavaşdır,
            mənə sürətli lazımdır" — "noutbuk" ikinci dəfə demək olar buraxıla
            bilər, əvəzedici söz şərt deyil). İngilis dilində isə sifətdən sonra
            ismin tam buraxılması qrammatik cəhətdən natamam sayılır —
            "one/ones" mütləq onun yerini tutmalıdır.
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
                wrong: "This report is fine, but I need better.",
                right: "This report is fine, but I need a better one.",
                az: "Bu hesabat yaxşıdır, amma mənə daha yaxşısı lazımdır.",
              },
              {
                wrong: "Do you have any questions? Yes, I have some ones.",
                right: "Do you have any questions? Yes, I have some.",
                az: "Sualın var? Bəli, var.",
              },
              {
                wrong: "I need faster laptop, not this old one.",
                right: "I need a faster one, not this old one.",
                az: "Mənə daha sürətlisi lazımdır, bu köhnəsi yox.",
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
          title="Məşq 1 — one / ones əlavə et (lazımdırsa)"
          items={[
            {
              prompt: "This chair is broken. Can you bring me a new ___?",
              answer: "This chair is broken. Can you bring me a new one?",
              translation: "Bu stul sınıqdır. Mənə yenisini gətirə bilərsən?",
            },
            {
              prompt:
                "Do you have any pens? — Yes, I have some ___. (sifətsiz)",
              answer: "Do you have any pens? — Yes, I have some.",
              translation: "Qələmin var? — Bəli, var.",
            },
            {
              prompt: "I like these shoes more than the ___ we saw earlier.",
              answer: "I like these shoes more than the ones we saw earlier.",
              translation:
                "Bu ayaqqabıları əvvəl gördüklərimizdən daha çox bəyənirəm.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "This version is outdated — I need updated.",
              answer: "This version is outdated — I need an updated one.",
              translation: "Bu versiya köhnəlib — mənə yenilənmişi lazımdır.",
            },
            {
              prompt: "Do you have any spare chargers? Yes, I have two ones.",
              answer: "Do you have any spare chargers? Yes, I have two.",
              translation: "Ehtiyat şarj cihazın var? Bəli, iki dənə var.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
