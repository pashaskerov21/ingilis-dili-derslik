import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata("mexanika", "apostrof");

export default function Page() {
  return (
    <LessonShell chapterSlug="mexanika" sectionSlug="apostrof">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          2.6-da mülkiyyət halının **qrammatikasını** öyrənmişdik — bu bölmə isə
          apostrofun özünün **mexanikasına**, yəni onu harada yazıb harada
          yazmamaq lazım olduğuna fokuslanır. Apostrofun cəmi iki vəzifəsi var:
          **mülkiyyət** və **ixtisar** (hərflərin buraxılması) — amma bu iki
          vəzifə arasında sərhəd tez-tez pozulur.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.2.1</span>
              <h3 className="font-display text-xl text-foreground">
                Tək isim: -s ilə bitsə belə, 's əlavə olunur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Müasir üslub bələdçilərinin (APA, Chicago) əksəriyyəti, isim "-s"
              ilə bitsə belə, tam "'s" əlavə olunmasını tövsiyə edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "James's proposal was approved yesterday.",
                  az: "Ceymsin təklifi dünən təsdiqləndi.",
                },
                {
                  en: "The boss's decision is final.",
                  az: "Rəisin qərarı yekundur.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.2.2</span>
              <h3 className="font-display text-xl text-foreground">
                Cəm isim, -s ilə bitir: yalnız apostrof
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The employees' feedback was reviewed carefully.",
                  az: "İşçilərin rəyi diqqətlə nəzərdən keçirildi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.2.3</span>
              <h3 className="font-display text-xl text-foreground">
                Cəm isim, -s ilə BİTMİR: 's əlavə olunur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              2.2.6-dakı qeyri-müntəzəm cəm formaları (children, men, women,
              people) -s ilə bitmədiyi üçün tək isim kimi işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The children's questions were surprisingly detailed.",
                  az: "Uşaqların sualları təəccüblü dərəcədə ətraflı idi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.2.4</span>
              <h3 className="font-display text-xl text-foreground">
                Mülkiyyət əvəzlikləri: HEÇ VAXT apostrof
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              3.3.6-dakı qaydanın mexanika versiyası — his, hers, its, ours,
              yours, theirs sözlərinin heç birində apostrof yoxdur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This decision was theirs to make. (✗ their's)",
                  az: "Bu qərar onların vermə işi idi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.2.5</span>
              <h3 className="font-display text-xl text-foreground">
                "Greengrocer's apostrof" — sadə cəmdə apostrof QADAĞAN
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ingilis dilində ən geniş yayılmış apostrof səhvidir — sadə cəm
              (mülkiyyət olmadan) heç vaxt apostrof tələb etmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We ordered three new laptops. (✗ laptop's)",
                  az: "Üç yeni noutbuk sifariş etdik.",
                },
                {
                  en: "The reports are on your desk. (✗ report's)",
                  az: "Hesabatlar sənin masandadır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.2.6</span>
              <h3 className="font-display text-xl text-foreground">
                Onilliklər və qısaltmalar: apostrofsuz cəm
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İstisna: ilk rəqəmlər buraxıldıqda ("90s"), apostrof rəqəmin
              yerinə keçir — bu, ixtisar funksiyasıdır, mülkiyyət deyil.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The company was founded in the 1990s. (✗ 1990's)",
                  az: "Şirkət 1990-cı illərdə yaradılıb.",
                },
                {
                  en: "We hired three new PMs this year. (✗ PM's)",
                  az: "Bu il üç yeni layihə meneceri işə götürdük.",
                },
                {
                  en: "Sales grew steadily throughout the '90s. (rəqəm buraxılıb — apostrof lazımdır)",
                  az: "Satışlar 90-cı illər boyu davamlı artdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.2.7</span>
              <h3 className="font-display text-xl text-foreground">
                İxtisar funksiyası: qeyri-rəsmi registr
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Apostrof buraxılmış hərflərin yerini göstərir. İxtisarlar
              qeyri-rəsmidir — akademik/rəsmi yazıda tam formalar üstünlük
              təşkil edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We can't finish this by Friday. (qeyri-rəsmi)",
                  az: "Bunu cüməyə qədər bitirə bilmərik.",
                },
                {
                  en: "We cannot finish this by Friday. (rəsmi)",
                  az: "Bunu cüməyə qədər bitirə bilmərik.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.2.8</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik yoxlama: its vs it's
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              2.6.8-dəki qayda — "it is/it has" yerinə oxumaq üçün sınaqdan
              keçir: mənalıdırsa "it's", deyilsə "its".
            </p>
            <ExampleList
              examples={[
                {
                  en: "The system lost its connection. (✗ it's)",
                  az: "Sistem bağlantısını itirdi.",
                },
                {
                  en: "It's been a long week. (= it has)",
                  az: "Uzun bir həftə oldu.",
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
            Azərbaycan dilində apostrof demək olar işlənmir — mülkiyyət şəkilçi
            ilə, ixtisar isə əsasən danışıq dilində fonetik dəyişikliklə ifadə
            olunur, yazıda əks olunmur. Bu, Azərbaycan dilli öyrənən üçün
            apostrofun **özünün** yeni bir yazı işarəsi olması deməkdir — həm
            harada işlədiləcəyini, həm harada işlədilməyəcəyini (11.2.5-dəki cəm
            qadağası) ayrıca öyrənmək lazımdır.
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
                wrong: "We bought new monitor's for the office.",
                right: "We bought new monitors for the office.",
                az: "Ofis üçün yeni monitorlar aldıq.",
              },
              {
                wrong: "The company increased it's revenue.",
                right: "The company increased its revenue.",
                az: "Şirkət gəlirini artırdı.",
              },
              {
                wrong: "This was theirs' idea.",
                right: "This was their idea. / This idea was theirs.",
                az: "Bu, onların fikri idi.",
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
          title="Məşq 1 — Apostrof lazımdırmı?"
          items={[
            {
              prompt: "We need three new laptop___s for the interns.",
              answer: "We need three new laptops for the interns.",
              translation: "Stajçılar üçün üç yeni noutbuk lazımdır.",
            },
            {
              prompt:
                "The manager___s office is on the second floor. (bir menecer)",
              answer: "The manager's office is on the second floor.",
              translation: "Menecerin kabineti ikinci mərtəbədədir.",
            },
            {
              prompt: "This laptop lost ___s charge quickly.",
              answer: "This laptop lost its charge quickly.",
              translation: "Bu noutbuk şarjını tez itirdi.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "The company was founded in the 1980's.",
              answer: "The company was founded in the 1980s.",
              translation: "Şirkət 1980-ci illərdə yaradılıb.",
            },
            {
              prompt:
                "The teacher's (bir neçə müəllim) lounge was renovated. (should be plural possessive)",
              answer: "The teachers' lounge was renovated.",
              translation: "Müəllimlər otağı təmir edildi.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
