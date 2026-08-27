import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "feller-ve-zamanlar",
  "past-perfect",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="feller-ve-zamanlar" sectionSlug="past-perfect">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Past Perfect keçmişdəki{" "}
          <strong>iki hadisə arasında ardıcıllıq</strong> qurur — "hansı daha
          əvvəl baş verdi" sualına cavab verir. Fikir olaraq 4.4-dəki Present
          Perfect-ə bənzəyir (keçmişi bir istinad nöqtəsi ilə əlaqələndirir),
          fərq yalnız istinad nöqtəsinin <strong>indi</strong> deyil,{" "}
          <strong>keçmişdəki başqa bir an</strong> olmasıdır.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.8.1</span>
              <h3 className="font-display text-xl text-foreground">
                Forma: had + Past Participle (III forma)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Forma bütün şəxslər üçün eynidir — dəyişmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "By the time we arrived, the meeting had already started.",
                  az: "Biz çatana qədər iclas artıq başlamışdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.8.2</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas funksiya: iki keçmiş hadisədən əvvəlkini işarələmək
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Keçmişdə iki nöqtə təsəvvür et: Past Perfect{" "}
              <strong>daha erkən</strong> olanı, Past Simple isə{" "}
              <strong>daha sonrakını</strong> işarələyir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She had finished the presentation before her manager walked in. (əvvəlcə bitirdi, sonra menecer gəldi)",
                  az: "Menecer içəri girməzdən əvvəl o, təqdimatı bitirmişdi.",
                },
                {
                  en: "When I checked my inbox, she had already replied. (əvvəlcə cavab verdi, sonra mən yoxladım)",
                  az: "Poçt qutusunu yoxlayanda o, artıq cavab vermişdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.8.3</span>
              <h3 className="font-display text-xl text-foreground">
                Tez-tez birgə işlənən sözlər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Before, after, by the time, already, just, never</em>{" "}
              ardıcıllığı aydınlaşdırmaq üçün tez-tez istifadə olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "By the time the deadline arrived, we had submitted every document.",
                  az: "Son tarix çatanda biz bütün sənədləri təqdim etmişdik.",
                },
                {
                  en: "I had never used this tool before joining the company.",
                  az: "Şirkətə qoşulmazdan əvvəl bu aləti heç işlətməmişdim.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.8.4</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik nüans: "when" ilə mənanı dəqiqləşdirmək
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Eyni "when" bağlayıcısı ilə iki fərqli struktur tamam fərqli vaxt
              münasibəti bildirir — bu, ən çox səhv edilən məqamdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "When the guests arrived, Sarah cooked dinner. (eyni vaxtda/ardınca başladı — Past Simple + Past Simple)",
                  az: "Qonaqlar gələndə Sara yeməyi bişirdi. (o vaxt başladı)",
                },
                {
                  en: "When the guests arrived, Sarah had cooked dinner. (artıq bitmişdi, əvvəlcədən — Past Perfect)",
                  az: "Qonaqlar gələndə Sara yeməyi artıq bişirmişdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.8.5</span>
              <h3 className="font-display text-xl text-foreground">
                Reported speech-də vaxt geriyə sürüşməsi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Kimisə dolayı nəql edərkən, əgər əsl cümlə Past Simple-da idisə
              (və nəql edən fel keçmişdədirsə), nəql olunan hissə bir addım
              geriyə — Past Perfect-ə keçir.
            </p>
            <ExampleList
              examples={[
                {
                  en: '"I saw an old friend yesterday." → She said she had seen an old friend the day before.',
                  az: '"Dünən köhnə bir dostumu gördüm." → O, bir gün əvvəl köhnə dostunu gördüyünü söylədi.',
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.8.6</span>
              <h3 className="font-display text-xl text-foreground">
                Şərti cümlələrə (Conditional III) əvvəlcədən baxış
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Past Perfect, gerçəkləşməmiş keçmiş şərtləri ifadə edən{" "}
              <em>Third Conditional</em>-ın əsas komponentidir (ayrıca fəsildə
              dərinləşəcək).
            </p>
            <ExampleList
              examples={[
                {
                  en: "If we had tested the feature earlier, we would have caught the bug.",
                  az: "Əgər funksiyanı daha tez test etsəydik, xətanı tapardıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.8.7</span>
              <h3 className="font-display text-xl text-foreground">
                Xəbərdarlıq: Past Perfect məcburi deyil, aydınlıq üçündür
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ardıcıllıq kontekstdən (before/after sözlərindən) artıq
              aydındırsa, Past Simple hər iki hərəkət üçün kifayət edə bilər.
              Lakin ardıcıllıq aydın olmadıqda, Past Perfect{" "}
              <strong>zəruridir</strong> — əks halda cümlə natamam və ya
              qeyri-müəyyən qalır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She left before I arrived. (before ilə aydın, Past Simple kifayətdir)",
                  az: "O, mən çatmazdan əvvəl getdi.",
                },
                {
                  en: "This morning I had cleaned the kitchen. (natamam — sonra nə oldu?)",
                  az: "(Bu, tək başına qeyri-tam eşidilir — davamı gözlənilir.)",
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
            Azərbaycan dilində "getmişdi", "bitirmişdi" kimi -mişdi şəkilçili
            forma Past Perfect-ə kifayət qədər yaxın bir konsept təqdim edir —
            hər iki dildə "keçmişdən əvvəlki keçmiş" ideyası mövcuddur. Əsas
            fərq 4.8.4-dəki kimi, ingilis dilinin bu ayrımı{" "}
            <strong>hər dəfə açıq şəkildə</strong> tələb etməsidir — Past
            Simple/Past Perfect seçimi mütləq edilməlidir, halbuki Azərbaycan
            dilində bəzən kontekstdən asılı olaraq sadə keçmiş forma da kifayət
            edə bilər.
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
                wrong: "When I arrived, she left. (ardıcıllıq qeyri-müəyyən)",
                right: "When I arrived, she had already left.",
                az: "Mən çatanda o, artıq getmişdi.",
              },
              {
                wrong: "She said she visit the museum last week.",
                right: "She said she had visited the museum the week before.",
                az: "O, keçən həftə muzeyi ziyarət etdiyini söylədi.",
              },
              {
                wrong: "By 2020, they have moved abroad.",
                right: "By 2020, they had moved abroad.",
                az: "2020-ci ilə qədər onlar xaricə köçmüşdülər.",
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
              prompt: "By the time we called, they ___ (leave) the office.",
              answer: "By the time we called, they had left the office.",
              translation: "Biz zəng edəndə onlar ofisi tərk etmişdilər.",
            },
            {
              prompt:
                "I ___ (never / see) such a detailed report before that project.",
              answer:
                "I had never seen such a detailed report before that project.",
              translation:
                "O layihədən əvvəl belə ətraflı hesabat görməmişdim.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "When she opened the laptop, it crashed already.",
              answer: "When she opened the laptop, it had already crashed.",
              translation: "O, noutbuku açanda artıq çökmüşdü.",
            },
            {
              prompt: "He told me he finish the assignment.",
              answer: "He told me he had finished the assignment.",
              translation: "O, mənə tapşırığı bitirdiyini söylədi.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
