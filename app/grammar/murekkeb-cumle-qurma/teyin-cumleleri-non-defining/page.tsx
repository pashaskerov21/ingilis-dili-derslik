import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "murekkeb-cumle-qurma",
  "teyin-cumleleri-non-defining",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="murekkeb-cumle-qurma"
      sectionSlug="teyin-cumleleri-non-defining"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Non-defining budaq cümlə 9.3-dəki defining formadan **tamamilə fərqli
          funksiya** daşıyır — burada məlumat **əlavə, könüllü**dir, isimi
          tanımaq üçün lazım deyil. Struktur baxımından da bir neçə kəskin fərq
          var.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.4.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əlavə məlumat, vergüllə ayrılır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Budaq cümləni çıxarsan, əsas cümlənin mənası **dəyişmir** — sadəcə
              əlavə detal itir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Our CEO, who founded the company in 2010, will speak at the event.",
                  az: "Şirkəti 2010-cu ildə quran İcraçı Direktorumuz tədbirdə çıxış edəcək.",
                },
                {
                  en: "The new policy, which takes effect next month, affects all departments.",
                  az: "Növbəti ay qüvvəyə minəcək yeni siyasət bütün şöbələrə təsir edir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.4.2</span>
              <h3 className="font-display text-xl text-foreground">
                "That" QADAĞANDIR, əvəzlik BURAXILA BİLMƏZ
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              9.3-dəki iki əsas çeviklik burada tamamilə itir: (1) <em>that</em>{" "}
              heç vaxt işlənmir (yalnız who/which/whose), (2) əvəzlik heç vaxt
              buraxıla bilməz — subyekt olsun, obyekt olsun, fərqi yoxdur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "My colleague, who has ten years of experience, will lead the project. (✗ that)",
                  az: "On il təcrübəsi olan həmkarım layihəyə rəhbərlik edəcək.",
                },
                {
                  en: "This model, which we tested extensively, performed exceptionally well. (✗ buraxılma)",
                  az: "Geniş test etdiyimiz bu model olduqca yaxşı performans göstərdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.4.3</span>
              <h3 className="font-display text-xl text-foreground">
                "Which" bütöv əvvəlki cümləyə istinad edə bilər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, non-defining formaya xas, defining-də mövcud olmayan bir
              xüsusiyyətdir: <em>which</em> tək bir isimə deyil, **bütün əvvəlki
              cümləyə** istinad edə bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: 'She apologized publicly, which surprised everyone. (which = bütün "apologized publicly" hadisəsi)',
                  az: "O, açıq şəkildə üzr istədi, bu isə hamını təəccübləndirdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.4.4</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik nüans: eyni cümlə, vergüllə/vergülsüz — fərqli məna
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Vergülün olub-olmaması cümlənin **faktiki mənasını** dəyişir — bu,
              sadəcə üslub deyil, məzmun fərqidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "My brother who lives in Baku is a doctor. (defining — bir neçə qardaşım var, Bakıda yaşayanı həkimdir)",
                  az: "Bakıda yaşayan qardaşım həkimdir. (o birilərindən fərqləndirilir)",
                },
                {
                  en: "My brother, who lives in Baku, is a doctor. (non-defining — bir qardaşım var, o Bakıda yaşayır, üstəlik həkimdir)",
                  az: "Qardaşım (bir dənədir), Bakıda yaşayır, həkimdir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.4.5</span>
              <h3 className="font-display text-xl text-foreground">
                Xüsusi isimlərlə: adətən non-defining
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Xüsusi isim (insan adı, unikal təşkilat) artıq özlüyündə tam
              müəyyəndir — "tanımlamağa" ehtiyacı yoxdur, ona görə onun haqqında
              əlavə məlumat demək olar həmişə non-defining formada gəlir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Microsoft, which was founded in 1975, is headquartered in Redmond.",
                  az: "1975-ci ildə qurulan Microsoft-un baş ofisi Redmond-dadır.",
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
            Azərbaycan dilində əlavə, könüllü məlumat çox vaxt ayrıca cümlə kimi
            ("O, Bakıda yaşayır. Qardaşımdır.") və ya vergüllə ayrılmış tərkib
            kimi verilir, bu, ingilis dilinin non-defining formasına struktur
            baxımından yaxındır. Əsl çətinlik 9.4.4-dəki vergülün özünün **məna
            dəyişdirici** rolunu oynamasıdır — bu qədər incə, tək bir durğu
            işarəsinə bağlı məna fərqi Azərbaycan dilində bu sistematiklikdə
            mövcud deyil.
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
                wrong:
                  "Our manager, that started last year, is very experienced.",
                right:
                  "Our manager, who started last year, is very experienced.",
                az: "Keçən il başlayan menecerimiz çox təcrübəlidir.",
              },
              {
                wrong: "The report, was submitted late, caused some concern.",
                right:
                  "The report, which was submitted late, caused some concern.",
                az: "Gec təqdim olunan hesabat bir qədər narahatlıq yaratdı.",
              },
              {
                wrong:
                  "This car which is quite old still runs well. (vergül unudulub)",
                right: "This car, which is quite old, still runs well.",
                az: "Bu maşın kifayət qədər köhnə olsa da, hələ də yaxşı işləyir.",
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
          title="Məşq 1 — Vergül əlavə et (non-defining)"
          items={[
            {
              prompt:
                "The project which was completed ahead of schedule impressed the client.",
              answer:
                "The project, which was completed ahead of schedule, impressed the client.",
              translation:
                "Vaxtından əvvəl tamamlanan layihə müştərini heyran etdi.",
            },
            {
              prompt: "Sarah who joined last month is already leading a team.",
              answer:
                "Sarah, who joined last month, is already leading a team.",
              translation:
                "Keçən ay qoşulan Sara artıq komandaya rəhbərlik edir.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "Our office, that was renovated recently, looks great.",
              answer: "Our office, which was renovated recently, looks great.",
              translation: "Bu yaxınlarda təmir olunan ofisimiz əla görünür.",
            },
            {
              prompt:
                "The CEO who founded the company in 2005 is retiring. (Yalnız bir CEO var, non-defining lazımdır)",
              answer: "The CEO, who founded the company in 2005, is retiring.",
              translation:
                "Şirkəti 2005-ci ildə quran İcraçı Direktor təqaüdə çıxır.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
