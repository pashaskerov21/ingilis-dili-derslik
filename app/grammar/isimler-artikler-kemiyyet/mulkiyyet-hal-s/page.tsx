import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "isimler-artikler-kemiyyet",
  "mulkiyyet-hal-s",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="isimler-artikler-kemiyyet"
      sectionSlug="mulkiyyet-hal-s"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Mülkiyyət halı ('s, tarixi adı ilə "genitive") sahiblik, aidiyyət və
          ya əlaqə bildirmək üçün istifadə olunur. Formanın özü sadə görünsə də,
          tətbiqi zamanı — xüsusilə cəm isimlərlə, mürəkkəb söz birləşmələrində
          və "of" konstruksiyası ilə seçimdə — incəliklər çoxdur.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.6.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas forma: tək isim + 's
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The client's request was approved.",
                  az: "Müştərinin sorğusu təsdiqləndi.",
                },
                {
                  en: "The company's revenue increased this quarter.",
                  az: "Şirkətin gəliri bu rübdə artdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.6.2</span>
              <h3 className="font-display text-xl text-foreground">
                -s ilə bitən cəm isim: yalnız apostrof
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Cəm isim artıq -s ilə bitdiyi üçün, əlavə "s" yazılmır — sadəcə
              apostrof əlavə olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The employees' feedback was mostly positive.",
                  az: "İşçilərin rəyi əsasən müsbət idi.",
                },
                {
                  en: "The two companies' merger was finalized last week.",
                  az: "İki şirkətin birləşməsi keçən həftə yekunlaşdı.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "employee's feedback" (tək, bir işçi) və "employees' feedback"
              (cəm, bir neçə işçi) — apostrofun yeri mənanı dəyişir.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.6.3</span>
              <h3 className="font-display text-xl text-foreground">
                Qeyri-müntəzəm cəm isimlər: 's qaydası davam edir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              2.2.6-dakı qeyri-müntəzəm cəm formaları (children, men, women,
              people) -s ilə bitmədiyi üçün, bunlarda 2.6.1-dəki tək qayda
              tətbiq olunur — tam "'s" əlavə edilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The children's questions were surprisingly insightful.",
                  az: "Uşaqların sualları təəccüblü dərəcədə dərin idi.",
                },
                {
                  en: "The committee reviewed the people's concerns.",
                  az: "Komitə xalqın narahatlıqlarını nəzərdən keçirdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.6.4</span>
              <h3 className="font-display text-xl text-foreground">
                Qrup mülkiyyəti: 's bütöv söz birləşməsinin sonuna əlavə olunur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Mülkiyyət göstəricisi qrammatik cəhətdən əsas isimə deyil,{" "}
              <strong>bütöv söz birləşməsinin sonuna</strong> bağlanır — bu,
              birbaşa tərcümə edərkən Azərbaycan dilli öyrənən üçün gözlənilməz
              struktur yaradır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The Head of Marketing's decision was final.",
                  az: "Marketinq Rəhbərinin qərarı yekun idi.",
                },
                {
                  en: "My colleague in Berlin's report is due tomorrow.",
                  az: "Berlindəki həmkarımın hesabatı sabaha planlaşdırılıb.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.6.5</span>
              <h3 className="font-display text-xl text-foreground">
                Ortaq və ayrı mülkiyyət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İki sahib bir şeyi <strong>birgə</strong> sahiblənirsə, 's yalnız{" "}
              <strong>sonuncu</strong> isimə əlavə olunur. Sahiblər{" "}
              <strong>ayrı-ayrı</strong> şeylərə sahibdirsə, hər ismə öz 's-i
              əlavə olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Tom and Sarah's project won an award. (ortaq layihə)",
                  az: "Tomun və Saranın (birgə) layihəsi mükafat qazandı.",
                },
                {
                  en: "Tom's and Sarah's projects were both approved. (ayrı layihələr)",
                  az: "Tomun və Saranın (ayrı-ayrı) layihələri təsdiqləndi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.6.6</span>
              <h3 className="font-display text-xl text-foreground">
                İkiqat mülkiyyət hal: "of" + 's
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzən "of" konstruksiyası ilə 's birlikdə işlənir — bu, mülkiyyət
              mənasını "haqqında/barədə" mənasından ayırmaq üçündür.
            </p>
            <ExampleList
              examples={[
                {
                  en: "That idea of Sarah's turned out to be very useful.",
                  az: "Saranın (məxsus olan) həmin fikri çox faydalı çıxdı.",
                },
              ]}
            />
            <p className="text-foreground leading-relaxed">
              Müqayisə et: <em>"a photo of Sarah"</em> (Sarahın şəkli, o
              şəkildədir) ilə <em>"a photo of Sarah's"</em> (Sarahın sahib
              olduğu bir şəkil, o şəkildə olmaya da bilər) arasındakı məna
              fərqinə diqqət et.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.6.7</span>
              <h3 className="font-display text-xl text-foreground">
                Vaxt, müddət və mücərrəd mülkiyyət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              'S təkcə fiziki sahiblik üçün deyil, vaxt müddətini və mücərrəd
              əlaqələri (ölkə, təşkilat) bildirmək üçün də işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She took a week's leave after the project ended.",
                  az: "O, layihə bitdikdən sonra bir həftəlik məzuniyyət götürdü.",
                },
                {
                  en: "The country's economy grew significantly last year.",
                  az: "Ölkənin iqtisadiyyatı keçən il əhəmiyyətli dərəcədə böyüdü.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.6.8</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik orfoqrafiya: its vs it's
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ana dili ingilis olanlar arasında belə ən çox rast gəlinən
              yazı səhvidir. <strong>Its</strong> (apostrofsuz) — mülkiyyət
              əvəzliyi ("onun"). <strong>It's</strong> (apostroflu) — "it is" və
              ya "it has"-ın qısaldılmış forması. Heç bir başqa mülkiyyət
              əvəzliyi (his, hers, ours, theirs, yours) apostrof almır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The company increased its market share.",
                  az: "Şirkət öz bazar payını artırdı. (mülkiyyət)",
                },
                {
                  en: "It's the best result we've had this year.",
                  az: "Bu, bu il əldə etdiyimiz ən yaxşı nəticədir. (it is)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.6.9</span>
              <h3 className="font-display text-xl text-foreground">
                's yoxsa "of"? Canlı və cansız arasındakı meyil
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Hər iki forma da mülkiyyəti ifadə edə bilsə də, üslub baxımından
              meyil var: <strong>insan/heyvan (canlı)</strong> ilə adətən{" "}
              <em>'s</em> üstünlük təşkil edir,{" "}
              <strong>cansız/mücərrəd obyektlərlə</strong> isə <em>of</em> daha
              təbii səslənir. Bu, sərt qayda deyil, üslub meylidir — hər iki
              forma da 2.6.7-dəki kimi mücərrəd isimlərlə (şirkət, ölkə) da
              qəbul edilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The manager's office is on the second floor.",
                  az: "Menecerin kabineti ikinci mərtəbədədir. (canlı → 's)",
                },
                {
                  en: "The legs of the table were damaged during transport.",
                  az: "Masanın ayaqları daşınma zamanı zədələndi. (cansız → of)",
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
            Azərbaycan dilində mülkiyyət hər iki tərəfdə işarələnir — həm sahib
            olan sözə yiyəlik hal şəkilçisi (-ın/-in/-un/-ün), həm də sahib
            olunan sözə mənsubiyyət şəkilçisi (-ı/-i/-u/-ü) əlavə olunur:
            "menecer-in kabinet-i". İngilis dilində isə işarə yalnız{" "}
            <strong>bir tərəfdə</strong> — sahib olan sözdə ('s) — görünür,
            sahib olunan söz heç bir şəkilçi almır: "the manager's office". Bu
            ikili işarələmə vərdişi Azərbaycan dilli öyrənəni bəzən ingilis
            dilində də ikinci sözə səhvən şəkilçi əlavə etməyə sövq edə bilər.
          </p>
          <div className="font-mono text-sm space-y-1 text-muted">
            <p>AZ: menecer-in kabinet-i (hər iki tərəf işarələnir)</p>
            <p>EN: the manager's office (yalnız bir tərəf işarələnir)</p>
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
                wrong: "The company increased it's market share.",
                right: "The company increased its market share.",
                az: "Şirkət bazar payını artırdı.",
              },
              {
                wrong: "The employees complaints were ignored.",
                right: "The employees' complaints were ignored.",
                az: "İşçilərin şikayətləri nəzərə alınmadı.",
              },
              {
                wrong: "The childrens toys were everywhere.",
                right: "The children's toys were everywhere.",
                az: "Uşaqların oyuncaqları hər yerdə idi.",
              },
              {
                wrong: "This is a report of my manager.",
                right:
                  "This is a report of my manager's. / This is my manager's report.",
                az: "Bu, menecerimin hesabatıdır.",
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
          title="Məşq 1 — Düzgün mülkiyyət formasını yaz"
          items={[
            {
              prompt: "the car / my sister →",
              answer: "my sister's car",
              translation: "bacımın maşını",
            },
            {
              prompt: "the toys / the children →",
              answer: "the children's toys",
              translation: "uşaqların oyuncaqları",
            },
            {
              prompt: "the reports / the employees (bir neçə işçi) →",
              answer: "the employees' reports",
              translation: "işçilərin hesabatları",
            },
            {
              prompt: "the policy of the company (of ilə) →",
              answer: "the company's policy",
              translation: "şirkətin siyasəti",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — its yoxsa it's?"
          items={[
            {
              prompt: "___ raining outside.",
              answer: "It's raining outside.",
              translation: "Bayırda yağış yağır.",
            },
            {
              prompt: "The system updated ___ database automatically.",
              answer: "The system updated its database automatically.",
              translation: "Sistem öz bazasını avtomatik yenilədi.",
            },
            {
              prompt: "___ been a long day.",
              answer: "It's been a long day.",
              translation: "Uzun bir gün oldu.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
