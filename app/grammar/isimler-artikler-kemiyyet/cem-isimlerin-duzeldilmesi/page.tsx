import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "isimler-artikler-kemiyyet",
  "cem-isimlerin-duzeldilmesi",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="isimler-artikler-kemiyyet"
      sectionSlug="cem-isimlerin-duzeldilmesi"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu bölmə 2.1-də tanış olduğun sayıla bilən isimlərin{" "}
          <strong>cəm formasının necə qurulduğunu</strong> əhatə edir. Qayda
          əsasən orfoqrafik xarakter daşıyır — sözün son hərfindən asılı olaraq
          fərqli şəkilçi əlavə olunur — lakin bir qrup isim heç bir qaydaya tabe
          olmayan, əzbər bilinməli müstəqil formalara malikdir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.2.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas qayda: -s əlavəsi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İsimlərin böyük əksəriyyəti sadəcə sona <strong>-s</strong> əlavə
              etməklə cəm forma alır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The company hired five new engineers.",
                  az: "Şirkət beş yeni mühəndis işə götürdü.",
                },
                {
                  en: "All the reports are on the shared drive.",
                  az: "Bütün hesabatlar ümumi diskdədir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.2.2</span>
              <h3 className="font-display text-xl text-foreground">
                Sibilyant səslə bitən isimlər: -es
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>-s, -ss, -sh, -ch, -x, -z</strong> ilə bitən isimlərə{" "}
              <strong>-es</strong> əlavə olunur — bu, tələffüzü asanlaşdırmaq
              üçündür (yalnız "-s" əlavəsi tələffüz edilə bilməzdi).
            </p>
            <ExampleList
              examples={[
                {
                  en: "The company runs two branches downtown.",
                  az: "Şirkətin şəhər mərkəzində iki filialı var.",
                },
                {
                  en: "We compared several boxes of samples.",
                  az: "Bir neçə nümunə qutusunu müqayisə etdik.",
                },
                {
                  en: "The technician replaced the switches.",
                  az: "Texnik açarları (switch) dəyişdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.2.3</span>
              <h3 className="font-display text-xl text-foreground">
                Samitdən sonra -y: -y → -ies
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İsim <strong>samit + y</strong> ilə bitirsə, <em>y</em> hərfi
              düşür, əvəzinə <strong>-ies</strong> əlavə olunur. Sait + y ilə
              bitən isimlərdə isə bu qayda tətbiq olunmur, sadəcə -s əlavə
              edilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Three companies submitted proposals.",
                  az: "Üç şirkət təklif təqdim etdi. (company → companies)",
                },
                {
                  en: "We reviewed the quarterly summaries.",
                  az: "Rüblük xülasələri nəzərdən keçirdik. (summary → summaries)",
                },
                {
                  en: "The team held several strategy days.",
                  az: "Komanda bir neçə strategiya günü keçirdi. (day → days, sait+y)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.2.4</span>
              <h3 className="font-display text-xl text-foreground">
                -f / -fe ilə bitən isimlər: -ves
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bir çox isimdə <strong>-f/-fe</strong> sonluğu{" "}
              <strong>-ves</strong> ilə əvəz olunur. Lakin bu, universal qayda
              deyil — bir qrup söz sadəcə -s alır (məs. roof, chief, cliff,
              belief) — bu, hər sözün ayrıca yoxlanmasını tələb edən istisnadır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Both shelves collapsed under the weight.",
                  az: "Hər iki rəf ağırlıq altında çökdü. (shelf → shelves)",
                },
                {
                  en: "The company changed its policies on remote work.",
                  az: "Şirkət uzaqdan iş siyasətlərini dəyişdi. (policy — 2.2.3 qaydası, y-yə diqqət)",
                },
                {
                  en: "The building has flat roofs. (istisna — roof → roofs)",
                  az: "Binanın düz damları var.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.2.5</span>
              <h3 className="font-display text-xl text-foreground">
                -o ilə bitən isimlər: -s və ya -es
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sait + o ilə bitən isimlər sadəcə -s alır. Samit + o ilə bitən
              isimlərin çoxu -es alır, amma bir qrup (əsasən qısaldılmış və ya
              texniki sözlər) yalnız -s ilə kifayətlənir — bu qrup xüsusilə
              yadda saxlanmalıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We tested three prototypes. (sait+o)",
                  az: "Üç prototip test etdik.",
                },
                {
                  en: "The presentation includes several photos. (istisna — yalnız -s)",
                  az: "Təqdimatda bir neçə foto var.",
                },
                {
                  en: "The heroes of this project are the support team.",
                  az: "Bu layihənin qəhrəmanları dəstək komandasıdır. (samit+o → -es)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.2.6</span>
              <h3 className="font-display text-xl text-foreground">
                Qeyri-müntəzəm cəm formaları (əzbər bilinməli)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bir qrup ismin cəm forması heç bir orfoqrafik qaydaya tabe deyil —
              sözün özü tamamilə dəyişir. Bunlar tarixi inkişaf nəticəsində
              formalaşıb və hər biri ayrıca əzbərlənməlidir.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                ["man", "men"],
                ["woman", "women"],
                ["child", "children"],
                ["person", "people"],
                ["tooth", "teeth"],
                ["foot", "feet"],
                ["mouse", "mice"],
                ["goose", "geese"],
              ].map(([sg, pl]) => (
                <div
                  key={sg}
                  className="font-mono text-sm border border-line px-2 py-1 text-center text-foreground"
                >
                  {sg} → {pl}
                </div>
              ))}
            </div>
            <ExampleList
              examples={[
                {
                  en: "Several people joined the call late.",
                  az: "Bir neçə nəfər zəngə gec qoşuldu.",
                },
                {
                  en: "The children's version of the app is simpler.",
                  az: "Tətbiqin uşaq versiyası daha sadədir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.2.7</span>
              <h3 className="font-display text-xl text-foreground">
                Tək və cəm forması eyni olan isimlər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzi isimlərdə cəm forması sinqulyar formadan fərqlənmir —
              kontekst və ya say (one/two...) bunun tək, yoxsa cəm olduğunu
              müəyyən edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We found one species of bacteria in the sample.",
                  az: "Nümunədə bir bakteriya növü tapdıq.",
                },
                {
                  en: "The lab identified several species in total.",
                  az: "Laboratoriya ümumilikdə bir neçə növ müəyyən etdi.",
                },
                {
                  en: "The company released a new series of updates.",
                  az: "Şirkət yeni bir yeniləmə seriyası buraxdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.2.8</span>
              <h3 className="font-display text-xl text-foreground">
                Cəm formalı, lakin tək mənalı isimlər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Elm sahələrinin adları (<em>economics, mathematics, physics</em>)
              və bəzi xəstəlik adları -s ilə bitsə də, qrammatik cəhətdən{" "}
              <strong>tək</strong> sayılır və tək fel alır. Bu, 2.1.6-dakı
              "news" nümunəsi ilə eyni prinsipdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Economics is a required course this semester.",
                  az: "İqtisadiyyat bu semestr məcburi fəndir.",
                },
                {
                  en: "Statistics shows a clear upward trend.",
                  az: "Statistika aydın yüksəliş tendensiyasını göstərir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.2.9</span>
              <h3 className="font-display text-xl text-foreground">
                Yalnız cəm formada mövcud olan isimlər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzi isimlərin heç vaxt tək forması olmur — iki hissədən ibarət
              obyektləri bildirirlər və həmişə cəm fellə uzlaşırlar. Konkret bir
              ədəd bildirmək lazım gələndə <em>a pair of</em> birləşməsindən
              istifadə olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "My glasses are on the desk.",
                  az: "Eynəyim masanın üstündədir.",
                },
                {
                  en: "I need a new pair of trousers.",
                  az: "Mənə yeni bir şalvar lazımdır.",
                },
                {
                  en: "The scissors are in the top drawer.",
                  az: "Qayçı yuxarı siyirmədədir.",
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
            Azərbaycan dilində cəm forması demək olar həmişə eyni şəkilçi
            (-lar/-lər) ilə qurulur — istisnalar minimaldır. İngilis dilində isə
            cəm forması bir neçə orfoqrafik qaydaya (2.2.1–2.2.5) və əlavə
            olaraq geniş bir qeyri-müntəzəm sözlər qrupuna (2.2.6) bölünür. Bu,
            Azərbaycan dilli öyrənən üçün "bir universal şəkilçi" gözləntisinin
            işləmədiyi bir sahədir — hər yeni ismi öyrənərkən onun cəm formasını
            da ayrıca yadda saxlamaq vərdişi lazımdır.
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
                wrong: "The company has three branchs.",
                right: "The company has three branches.",
                az: "Şirkətin üç filialı var.",
              },
              {
                wrong: "Many countrys use this system.",
                right: "Many countries use this system.",
                az: "Bir çox ölkə bu sistemi istifadə edir.",
              },
              {
                wrong: "There are many mans in the room.",
                right: "There are many men in the room.",
                az: "Otaqda bir çox kişi var.",
              },
              {
                wrong: "Mathematics are difficult.",
                right: "Mathematics is difficult.",
                az: "Riyaziyyat çətindir.",
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
          title="Məşq 1 — Cəm formasını yaz"
          items={[
            { prompt: "box →", answer: "boxes", translation: "qutu → qutular" },
            {
              prompt: "policy →",
              answer: "policies",
              translation: "siyasət → siyasətlər",
            },
            {
              prompt: "child →",
              answer: "children",
              translation: "uşaq → uşaqlar",
            },
            {
              prompt: "shelf →",
              answer: "shelves",
              translation: "rəf → rəflər",
            },
            {
              prompt: "photo →",
              answer: "photos",
              translation: "foto → fotolar",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "We opened two new branchs this year.",
              answer: "We opened two new branches this year.",
              translation: "Bu il iki yeni filial açdıq.",
            },
            {
              prompt: "The economics are complicated.",
              answer: "Economics is complicated.",
              translation: "İqtisadiyyat mürəkkəbdir.",
            },
            {
              prompt: "There are three mouses on the desk.",
              answer:
                "There are three mice on the desk. / There are three mouse devices on the desk.",
              translation: "Masada üç siçan var.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
