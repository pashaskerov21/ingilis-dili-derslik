import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";

export const metadata: Metadata = buildSectionMetadata(
  "isimler-artikler-kemiyyet",
  "kemiyyet-gostericileri-2",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="isimler-artikler-kemiyyet"
      sectionSlug="kemiyyet-gostericileri-2"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          2.7-dəki göstəricilər qeyri-dəqiq miqdarı ifadə edirdi (bir az, bir
          çox). Bu bölmədəki göstəricilər isə <strong>tam əhatəni</strong> —
          qrupun hamısını, hər bir üzvünü ayrı-ayrılıqda, əksəriyyətini və ya
          heç birini — bildirir. Fərqlər əsasən qrammatik uzlaşmada (tək/cəm
          fel) və vurğu incəliyində gizlənir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.8.1</span>
              <h3 className="font-display text-xl text-foreground">
                Every: qrupu bütöv, rutin kimi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>Every</strong> tək sayıla bilən isimlə işlənir, tək fel
              alır, lakin mənası "hamısı, istisnasız" — qrupu{" "}
              <strong>bir bütöv</strong> kimi təsvir edir. Tezlik və rutin
              bildirən kontekstlərdə ən təbii seçimdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Every employee receives a performance review annually.",
                  az: "Hər işçi illik olaraq performans qiymətləndirməsi alır.",
                },
                {
                  en: "The system backs up data every six hours.",
                  az: "Sistem məlumatları hər altı saatdan bir ehtiyat nüsxələyir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.8.2</span>
              <h3 className="font-display text-xl text-foreground">
                Each: hər üzvü ayrı-ayrılıqda vurğulamaq
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>Each</strong> də tək sayıla bilən isimlə işlənir, tək fel
              alır, lakin diqqəti qrupun bütövlüyünə deyil,{" "}
              <strong>hər bir üzvün ayrılıqda</strong> nəzərdən keçirilməsinə
              yönəldir. Kiçik, konkret qruplarda daha təbiidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Each candidate was interviewed separately.",
                  az: "Hər namizəd ayrı-ayrılıqda müsahibədən keçirildi.",
                },
                {
                  en: "Each of the three proposals has its own budget.",
                  az: "Üç təklifin hər birinin öz büdcəsi var.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "Each" ədədlərlə birlikdə "each of" formasında işlənə bilər
              ("each of the three"), amma "every" bu formanı qəbul etmir ("every
              of the three" — səhvdir).
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.8.3</span>
              <h3 className="font-display text-xl text-foreground">
                All: bütöv miqdar, cəm və ya sayıla bilməyən isimlə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>All</strong> cəm sayıla bilən və ya sayıla bilməyən isimlə
              işlənir, felin forması ismə uyğunlaşır. Ümumi mənada işlədildikdə{" "}
              <em>the</em> tələb olunmur (bax: 2.5.1), konkret qrupa aid olduqda
              isə <em>the</em> qayıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "All feedback is reviewed by the product team. (ümumi)",
                  az: "Bütün rəylər məhsul komandası tərəfindən nəzərdən keçirilir.",
                },
                {
                  en: "All the employees in this office work remotely on Fridays. (konkret)",
                  az: "Bu ofisdəki bütün işçilər cümə günləri uzaqdan işləyir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.8.4</span>
              <h3 className="font-display text-xl text-foreground">
                Most: əksəriyyət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              "Hamısı deyil, amma yarıdan çoxu" mənasını verir. Ümumi mənada{" "}
              <em>the</em>-siz, konkret qrupa aid olduqda <em>most of the</em>{" "}
              formasında işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Most companies now offer remote work options.",
                  az: "Əksər şirkətlər indi uzaqdan iş imkanı təklif edir.",
                },
                {
                  en: "Most of the team agreed with the new approach.",
                  az: "Komandanın əksəriyyəti yeni yanaşma ilə razılaşdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.8.5</span>
              <h3 className="font-display text-xl text-foreground">
                No: "heç bir" — inkarı isim üzərinə keçirmək
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>No</strong> özü artıq mənfi mənadadır, ona görə felin özü
              təsdiq formasında qala bilər. Bu, "not any" ilə eyni mənanı daha
              yığcam ifadə edir. Həm tək, həm cəm, həm sayıla bilməyən isimlə
              işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "No changes were made to the original document.",
                  az: "Orijinal sənədə heç bir dəyişiklik edilmədi.",
                },
                {
                  en: "There is no evidence to support this claim.",
                  az: "Bu iddianı təsdiqləyən heç bir dəlil yoxdur.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.8.6</span>
              <h3 className="font-display text-xl text-foreground">
                None: isimsiz işlənən "heç biri"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>None</strong> — <em>no</em>-dan fərqli olaraq, birbaşa
              isimdən əvvəl gəlmir; ya tək başına (kontekstdən isim aydın
              olanda), ya da <em>none of</em> formasında işlənir. Formal qaydaya
              görə tək fel alır, lakin danışıq və yazıda{" "}
              <em>none of + cəm isim</em> ilə cəm fel də geniş yayılıb.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We reviewed all the applications, but none were suitable.",
                  az: "Bütün müraciətləri nəzərdən keçirdik, amma heç biri uyğun deyildi.",
                },
                {
                  en: "None of the servers responded to the request.",
                  az: "Serverlərin heç biri sorğuya cavab vermədi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.8.7</span>
              <h3 className="font-display text-xl text-foreground">
                İkiqat inkardan çəkinmək (2.7.8-in davamı)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>No</em> və <em>none</em> özləri artıq mənfi olduğu üçün,
              bunlarla eyni cümlədə <em>not</em> işlədilmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "There is no reason to delay this. (✗ There isn't no reason)",
                  az: "Bunu təxirə salmaq üçün heç bir səbəb yoxdur.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.8.8</span>
              <h3 className="font-display text-xl text-foreground">
                Sərhəd nöqtəsi: iki elementlə "both/either/neither"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Diqqət: yuxarıdakı göstəricilər (every, each, all, most){" "}
              <strong>ikidən çox</strong> elementdən ibarət qruplar üçündür.
              Yalnız <strong>iki</strong> element olduqda, əvəzinə <em>both</em>{" "}
              (hər ikisi), <em>either</em> (istənilən biri) və <em>neither</em>{" "}
              (heç biri) işlədilir — bu, ayrıca mövzu kimi irəlidə dərinləşəcək.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Both candidates were well qualified.",
                  az: "Hər iki namizəd yaxşı ixtisaslı idi.",
                },
                {
                  en: "Neither option fully solves the problem.",
                  az: "Heç bir variant problemi tam həll etmir.",
                },
              ]}
            />
          </div>
        </section>

        <div className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">2.8.9</span>
            <h3 className="font-display text-xl text-foreground">
              "Each" isimsiz işlənə bilir, "every" bilmir
            </h3>
          </div>
          <p className="text-foreground leading-relaxed">
            Each/every arasındakı vacib qrammatik fərq: <strong>each</strong>{" "}
            tək başına, isim olmadan işlənə bilir. <strong>Every</strong> isə
            tək başına dayana bilmir — onun əvəzinə{" "}
            <em>everyone/everybody/ everything</em> və ya <em>every one of</em>{" "}
            formaları işlədilir.
          </p>
          <ExampleList
            examples={[
              {
                en: "We have three plans. Each has a different price.",
                az: "Üç planımız var. Hər birinin fərqli qiyməti var.",
              },
              {
                en: "Everyone is expected to attend the meeting.",
                az: "Hər kəsin iclasda iştirak etməsi gözlənilir. (✗ Every is expected)",
              },
              {
                en: "Every one of the reports was reviewed carefully.",
                az: "Hesabatların hər biri diqqətlə nəzərdən keçirildi.",
              },
            ]}
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">2.8.10</span>
            <h3 className="font-display text-xl text-foreground">
              "Each" ismdən sonra: qiymət və bölgü kontekstində
            </h3>
          </div>
          <p className="text-foreground leading-relaxed">
            <em>Each</em> cümlənin sonuna da keçə bilər — bu forma xüsusilə
            qiymət, say bölgüsü bildirən kontekstlərdə (biznes, maliyyə) çox
            işlənir.
          </p>
          <ExampleList
            examples={[
              {
                en: "The tickets cost fifteen dollars each.",
                az: "Biletlərin hər biri on beş dollara başa gəlir.",
              },
              {
                en: "We gave the interns two tasks each.",
                az: "Stajçılara hər birinə iki tapşırıq verdik.",
              },
            ]}
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">2.8.11</span>
            <h3 className="font-display text-xl text-foreground">
              Qeyri-müəyyənlik: "all...not" strukturunun iki mənası
            </h3>
          </div>
          <p className="text-foreground leading-relaxed">
            Bu, məntiqi baxımdan ən incə məqamdır:{" "}
            <em>All + isim + not + fel</em> strukturu İKİ fərqli məna verə bilər
            — "heç biri deyil" (∀¬) və ya "hamısı deyil, bəziləri" (¬∀).
            Qeyri-müəyyənliyi aradan qaldırmaq üçün daha dəqiq struktur
            seçilməlidir.
          </p>
          <ExampleList
            examples={[
              {
                en: "All the tests didn't pass. (qeyri-müəyyən — hansı məna?)",
                az: "Bütün testlər keçmədi. (heç biri, ya bəziləri?)",
              },
              {
                en: "None of the tests passed. (dəqiq: heç biri)",
                az: "Testlərin heç biri keçmədi.",
              },
              {
                en: "Not all of the tests passed. (dəqiq: bəziləri keçmədi, bəziləri yox)",
                az: "Testlərin hamısı keçmədi. (bəziləri keçdi)",
              },
            ]}
          />
          <p className="text-sm text-accent">
            ⚠ Dəqiqlik tələb olunan kontekstdə (texniki sənəd, hesabat)
            "all...not" strukturundan qaçıb, "none" və ya "not all"
            formalarından istifadə et.
          </p>
        </div>

        {/* ---------- MÜQAYİSƏ QUTUSU ---------- */}
        <aside className="border-l-2 border-accent bg-accent/5 p-5 space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Azərbaycan dili ilə struktur fərqi
          </h4>
          <p className="text-foreground leading-relaxed">
            Azərbaycan dilində "hər" sözü həm "every", həm "each" mənasında
            universal işlənir ("hər işçi", "hər namizəd") — iki fərqli vurğu
            (bütöv qrup / ayrı-ayrı üzv) üçün ayrıca söz yoxdur. İngilis dilində
            bu fərq leksik olaraq iki ayrı sözlə (every/each) ifadə olunur.
            Bənzər vəziyyət "heç" sözündə də var — Azərbaycan dilində "heç bir"
            universal işlənir, ingilis dilində isə isimlə birbaşa (no) və
            isimsiz/of ilə (none) işlənən forma fərqləndirilir.
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
                wrong: "Every students must attend.",
                right: "Every student must attend.",
                az: "Hər tələbə iştirak etməlidir.",
              },
              {
                wrong: "Every of the applicants was interviewed.",
                right: "Each of the applicants was interviewed.",
                az: "Müraciət edənlərin hər biri müsahibədən keçdi.",
              },
              {
                wrong: "There isn't no solution.",
                right: "There is no solution.",
                az: "Heç bir həll yolu yoxdur.",
              },
              {
                wrong:
                  "None of the reports was ready. (formal qaydaya görə düzgün, lakin bəzi kontekstdə 'were' üstünlük təşkil edir)",
                right: "None of the reports were ready.",
                az: "Hesabatların heç biri hazır deyildi.",
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
          title="Məşq 1 — Uyğun sözü seç (every / each / all / no / none)"
          items={[
            {
              prompt:
                "___ team member submitted their report on time. (bütöv qrup, rutin)",
              answer: "Every team member submitted their report on time.",
              translation: "Hər komanda üzvü hesabatını vaxtında təqdim etdi.",
            },
            {
              prompt:
                "___ of the two designs has its own advantages. (hər birini ayrıca vurğula, ədədlə)",
              answer: "Each of the two designs has its own advantages.",
              translation: "İki dizaynın hər birinin öz üstünlükləri var.",
            },
            {
              prompt: "There is ___ update available at the moment.",
              answer: "There is no update available at the moment.",
              translation: "Hazırda heç bir yeniləmə mövcud deyil.",
            },
            {
              prompt: "___ of the applicants met the requirements.",
              answer: "None of the applicants met the requirements.",
              translation:
                "Müraciət edənlərin heç biri tələblərə cavab vermədi.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "Every of the members voted in favor.",
              answer:
                "Each of the members voted in favor. / All the members voted in favor.",
              translation: "Üzvlərin hamısı lehinə səs verdi.",
            },
            {
              prompt: "We don't have no other option.",
              answer:
                "We don't have any other option. / We have no other option.",
              translation: "Başqa seçimimiz yoxdur.",
            },
            {
              prompt: "Every students passed the exam.",
              answer: "Every student passed the exam.",
              translation: "Hər tələbə imtahandan keçdi.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
