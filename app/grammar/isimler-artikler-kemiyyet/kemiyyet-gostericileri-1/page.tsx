import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";

export const metadata: Metadata = buildSectionMetadata(
  "isimler-artikler-kemiyyet",
  "kemiyyet-gostericileri-1",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="isimler-artikler-kemiyyet"
      sectionSlug="kemiyyet-gostericileri-1"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu bölmə 2.1-də tanış olduğun sayıla bilən/bilməyən ayrımının praktik
          tətbiqidir — kəmiyyəti dəqiq ədədsiz ifadə etmək üçün istifadə olunan
          sözlər toplusu. Seçim yalnız ismin tipindən deyil, həm də cümlənin{" "}
          <strong>təsdiq, inkar və ya sual</strong> olmasından asılıdır.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.7.1</span>
              <h3 className="font-display text-xl text-foreground">
                Some / any: əsas qayda
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>Some</strong> — təsdiq cümlələrində, <strong>any</strong>{" "}
              — inkar və sual cümlələrində işlənir. Hər ikisi həm sayıla bilən
              (cəm), həm sayıla bilməyən isimlə uyğun gəlir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We received some positive feedback on the update.",
                  az: "Yeniləmə haqqında bəzi müsbət rəylər aldıq.",
                },
                {
                  en: "We haven't received any feedback yet.",
                  az: "Hələ heç bir rəy almamışıq.",
                },
                {
                  en: "Do you have any questions about the proposal?",
                  az: "Təklif haqqında hər hansı sualın var?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.7.2</span>
              <h3 className="font-display text-xl text-foreground">
                İstisna: təklif/xahişdə "some", ümumiləşdirmədə "any"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sual formasında olsa da, <strong>təklif və ya xahiş</strong>{" "}
              bildirən cümlələrdə (cavabın "bəli" olacağı gözlənildiyi üçün){" "}
              <em>some</em> işlədilir. Əksinə, təsdiq cümləsində <em>any</em>{" "}
              "hansı olursa olsun, fərq etməz" mənasını verə bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Would you like some coffee? (təklif)",
                  az: "Bir az qəhvə istəyərdinmi?",
                },
                {
                  en: "Could I ask you some questions? (xahiş)",
                  az: "Sənə bir neçə sual verə bilərəmmi?",
                },
                {
                  en: "You can choose any option — they all work fine. (fərq etməz)",
                  az: "İstənilən variantı seçə bilərsən — hamısı yaxşı işləyir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.7.3</span>
              <h3 className="font-display text-xl text-foreground">
                Much / many: miqdar, əsasən inkar və sualda
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>Much</strong> — sayıla bilməyən isimlə,{" "}
              <strong>many</strong> — cəm sayıla bilən isimlə. Hər ikisi əsasən
              inkar və sual cümlələrində, yaxud rəsmi/yazılı üslubda təsdiq
              cümləsində işlənir. Gündəlik danışıqda təsdiq cümləsində əvəzinə{" "}
              <em>a lot of / lots of</em> üstünlük təşkil edir (hər iki isim
              tipi ilə uyğun gəlir).
            </p>
            <ExampleList
              examples={[
                {
                  en: "There isn't much time before the deadline.",
                  az: "Son tarixə qədər çox vaxt yoxdur.",
                },
                {
                  en: "How many candidates applied for the role?",
                  az: "Bu vəzifəyə neçə namizəd müraciət etdi?",
                },
                {
                  en: "There is much debate about this policy. (rəsmi üslub)",
                  az: "Bu siyasət haqqında geniş müzakirə gedir.",
                },
                {
                  en: "We have a lot of work to finish today. (gündəlik üslub)",
                  az: "Bu gün bitirməli olduğumuz çox işimiz var.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.7.4</span>
              <h3 className="font-display text-xl text-foreground">
                A few / few və a little / little: müsbət və mənfi çalar
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ən incə fərqdir: <strong>"a" ilə</strong> — kifayət qədər,
              müsbət çalar ("bir az var, bu yaxşıdır"). <strong>"a" siz</strong>{" "}
              — kifayət qədər deyil, mənfi çalar ("demək olar yoxdur, bu
              pisdir"). <em>A few/few</em> cəm sayıla bilənlə,{" "}
              <em>a little/little</em> sayıla bilməyənlə işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We have a few options left. (müsbət — kifayət qədər var)",
                  az: "Bir neçə seçimimiz qalıb. (yaxşı, hələ var)",
                },
                {
                  en: "We have few options left. (mənfi — demək olar yoxdur)",
                  az: "Demək olar heç seçimimiz qalmayıb.",
                },
                {
                  en: "There is a little time before the call. (müsbət)",
                  az: "Zəngdən əvvəl bir az vaxt var.",
                },
                {
                  en: "There is little time before the call. (mənfi)",
                  az: "Zəngdən əvvəl demək olar heç vaxt yoxdur.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "few friends" (demək olar heç dostu yoxdur, tənha) və "a few
              friends" (bir neçə dostu var) tamam fərqli məna verir — "a"
              hərfinin özü tonu dəyişir.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.7.5</span>
              <h3 className="font-display text-xl text-foreground">
                Several: bir neçə, yalnız sayıla bilənlə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              "İkidən çox, lakin çox deyil" mənasını verir, yalnız cəm sayıla
              bilən isimlə işlənir, mənfi çalar daşımır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Several clients have already confirmed attendance.",
                  az: "Bir neçə müştəri artıq iştirakını təsdiqləyib.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.7.6</span>
              <h3 className="font-display text-xl text-foreground">
                Plenty of: kifayətdən çox
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Hər iki isim tipi ilə işlənir, "lazım olandan çox, kifayət qədər"
              mənasını verir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "There's plenty of time to review the document.",
                  az: "Sənədi nəzərdən keçirmək üçün kifayət qədər vaxt var.",
                },
                {
                  en: "We have plenty of candidates to choose from.",
                  az: "Seçim edəcəyimiz kifayət qədər namizəd var.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.7.7</span>
              <h3 className="font-display text-xl text-foreground">
                Fewer və less: rəsmi qayda və müasir istifadə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Rəsmi qrammatika qaydasına görə <strong>fewer</strong> cəm sayıla
              bilən isimlə, <strong>less</strong> sayıla bilməyən isimlə
              işlənməlidir. Danışıq dilində "less" hər iki halda da tez-tez
              eşidilir, lakin yazılı və rəsmi kontekstdə fərq qorunmalıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We received fewer applications this year. (rəsmi düzgün)",
                  az: "Bu il daha az müraciət aldıq.",
                },
                {
                  en: "We have less time than expected.",
                  az: "Gözlədiyimizdən daha az vaxtımız var.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.7.8</span>
              <h3 className="font-display text-xl text-foreground">
                İkiqat inkardan çəkinmək
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İnkar cümləsində artıq <em>not</em> istifadə olunubsa, ikinci
              inkar sözü (no) əlavə edilmir — bunun əvəzinə <em>any</em>{" "}
              işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We don't have any tickets left. (✗ don't have no tickets)",
                  az: "Bizdə heç bilet qalmayıb.",
                },
              ]}
            />
          </div>
        </section>

        <div className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">2.7.9</span>
            <h3 className="font-display text-xl text-foreground">
              Enough: kifayət qədər — determinativ, əvəzlik və zərf
            </h3>
          </div>
          <p className="text-foreground leading-relaxed">
            <em>Enough</em> "lazım olan qədər" mənasını verir və üç fərqli
            qrammatik rolda çıxış edə bilir: isimdən <strong>əvvəl</strong>{" "}
            (determinativ), isimsiz <strong>tək başına</strong> (əvəzlik), və ya
            sifət/zərfdən <strong>sonra</strong> (zərf — bu, digər zərflərdən
            fərqli olaraq sona keçən nadir haldır).
          </p>
          <ExampleList
            examples={[
              {
                en: "We don't have enough time to finish this today.",
                az: "Bunu bu gün bitirmək üçün kifayət qədər vaxtımız yoxdur. (determinativ)",
              },
              {
                en: "I've reviewed enough of the applications to make a decision.",
                az: "Qərar vermək üçün müraciətlərin kifayət qədərini nəzərdən keçirdim.",
              },
              {
                en: "Is the connection fast enough for a video call?",
                az: "Bağlantı video zəng üçün kifayət qədər sürətlidir? (zərf, sifətdən SONRA)",
              },
            ]}
          />
          <p className="text-sm text-accent">
            ⚠ "enough fast" deyil, "fast enough" — enough zərf kimi işlədikdə
            həmişə sifətdən/zərfdən sonra gəlir, digər gücləndiricilərin (very,
            quite) əksinə.
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">2.7.10</span>
            <h3 className="font-display text-xl text-foreground">
              Kəmiyyət göstəricilərinin isimsiz (əvəzlik kimi) işlənməsi
            </h3>
          </div>
          <p className="text-foreground leading-relaxed">
            İndiyə qədər bütün nümunələr "kəmiyyət göstəricisi + isim"
            formasında verildi. Lakin isim kontekstdən aydındırsa, kəmiyyət
            göstəricisi <strong>tək başına, isimsiz</strong> işlənə bilər — bu,
            təbii danışıqda çox tez-tez rast gəlinən formadır.
          </p>
          <ExampleList
            examples={[
              {
                en: "Do you need any help? — No, thanks, I have enough.",
                az: "Köməyə ehtiyacın var? — Yox, təşəkkür edirəm, kifayət qədərim var.",
              },
              {
                en: "We ordered ten copies, but only a few arrived.",
                az: "On nüsxə sifariş etdik, amma yalnız bir neçəsi gəldi.",
              },
              {
                en: "Some of the data was corrupted, but most was fine.",
                az: "Məlumatın bir hissəsi zədələnmişdi, amma əksəriyyəti qaydasında idi.",
              },
            ]}
          />
        </div>

        {/* ---------- MÜQAYİSƏ QUTUSU ---------- */}
        <aside className="border-l-2 border-accent bg-accent/5 p-5 space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Azərbaycan dili ilə struktur fərqi
          </h4>
          <p className="text-foreground leading-relaxed">
            Azərbaycan dilində "bir az" sözü universal işlənir — həm sayıla
            bilən, həm sayıla bilməyən isimlə problemsiz uyğun gəlir ("bir az
            pul", "bir az kitab"). İngilis dilində isə bu seçim ismin tipinə
            görə bölünür (a little / a few), üstəlik cümlənin təsdiq/inkar/sual
            olmasından da asılıdır (some/any). Bu ikiqat şərtləmə (isim tipi +
            cümlə növü) Azərbaycan dilində paraleli olmayan bir qərar
            mexanizmidir.
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
                wrong: "I don't have some time today.",
                right: "I don't have any time today.",
                az: "Bu gün heç vaxtım yoxdur.",
              },
              {
                wrong: "There are much people in the office.",
                right: "There are many people in the office.",
                az: "Ofisdə çoxlu adam var.",
              },
              {
                wrong: "How much candidates applied?",
                right: "How many candidates applied?",
                az: "Neçə namizəd müraciət etdi?",
              },
              {
                wrong: "We don't have no budget for this.",
                right: "We don't have any budget for this.",
                az: "Bunun üçün heç büdcəmiz yoxdur.",
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
          title="Məşq 1 — Uyğun sözü seç"
          items={[
            {
              prompt: "Would you like ___ tea? (some/any)",
              answer: "Would you like some tea?",
              translation: "Bir az çay istəyərdinmi?",
            },
            {
              prompt: "There isn't ___ information about this. (much/many)",
              answer: "There isn't much information about this.",
              translation: "Bu barədə çox məlumat yoxdur.",
            },
            {
              prompt:
                "We have ___ options — most are outdated. (few/a few, mənfi çalar)",
              answer: "We have few options — most are outdated.",
              translation: "Az seçimimiz var — əksəri köhnəlib.",
            },
            {
              prompt:
                "She has ___ experience in this field, which is a good start. (little/a little, müsbət çalar)",
              answer:
                "She has a little experience in this field, which is a good start.",
              translation:
                "Onun bu sahədə bir az təcrübəsi var, bu yaxşı başlanğıcdır.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "How much emails did you send today?",
              answer: "How many emails did you send today?",
              translation: "Bu gün neçə email göndərdin?",
            },
            {
              prompt: "I don't need no help with this.",
              answer: "I don't need any help with this.",
              translation: "Buna heç köməyə ehtiyacım yoxdur.",
            },
            {
              prompt: "There are much reasons to worry.",
              answer: "There are many reasons to worry.",
              translation: "Narahat olmaq üçün çoxlu səbəb var.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
