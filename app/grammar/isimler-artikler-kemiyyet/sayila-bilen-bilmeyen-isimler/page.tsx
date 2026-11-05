import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "isimler-artikler-kemiyyet",
  "sayila-bilen-bilmeyen-isimler",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="isimler-artikler-kemiyyet"
      sectionSlug="sayila-bilen-bilmeyen-isimler"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu bölmə fəslin qalan hissəsinin təməlidir: bir ismin sayıla bilən
          (countable) və ya sayıla bilməyən (uncountable) olması onun{" "}
          <strong>
            cəm forması ala bilib-bilməməsini, hansı artiklə işlənəcəyini və
            hansı kəmiyyət göstəricisi ilə uzlaşacağını
          </strong>{" "}
          müəyyən edir — bundan sonrakı 7 bölmənin demək olar hamısı bu ayrımın
          üzərində qurulur.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.1.1</span>
              <h3 className="font-display text-xl text-foreground">
                Sayıla bilən isimlər (Countable Nouns)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ayrı-ayrı vahidlər kimi sayıla bilən varlıqları bildirir. Tək və
              cəm forması var, <em>a/an</em> ilə, ədədlərlə və <em>how many</em>{" "}
              sualı ilə işlənə bilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I need a laptop for the presentation.",
                  az: "Təqdimat üçün bir noutbuka ehtiyacım var.",
                },
                {
                  en: "We hired three new developers this month.",
                  az: "Bu ay üç yeni proqramçı işə götürdük.",
                },
                {
                  en: "How many meetings do you have today?",
                  az: "Bu gün neçə iclasın var?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.1.2</span>
              <h3 className="font-display text-xl text-foreground">
                Sayıla bilməyən isimlər (Uncountable Nouns)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bütöv, bölünməz kütlə və ya konsepsiya kimi qəbul edilən
              varlıqları bildirir. Cəm forması yoxdur, <em>a/an</em> və ya
              ədədlə işlənmir, əvəzinə <em>much</em> və <em>how much</em> sualı
              ilə uzlaşır. Fel həmişə tək formada qalır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The project needs more funding.",
                  az: "Layihəyə daha çox maliyyələşmə lazımdır.",
                },
                {
                  en: "We don't have much time left.",
                  az: "Çox vaxtımız qalmayıb.",
                },
                {
                  en: "How much traffic does the site get daily?",
                  az: "Sayt gündə nə qədər trafik alır?",
                },
              ]}
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.1.3</span>
              <h3 className="font-display text-xl text-foreground">
                Ən çox səhv edilən sayıla bilməyən isimlər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bir qrup ismin ingilis dilində sayıla bilməyən statusu olduğu
              halda, digər dillərdə (Azərbaycan dili daxil) sayıla bilən
              qarşılığı var. Bu, dildə ən çox rast gəlinən sistematik səhvlərdən
              birinin mənbəyidir — buna görə bu siyahı əzbər bilinməlidir.
            </p>

            <div className="border border-line divide-y divide-line">
              {[
                { en: "information", az: "məlumat" },
                { en: "advice", az: "məsləhət" },
                { en: "furniture", az: "mebel" },
                { en: "news", az: "xəbər" },
                { en: "luggage", az: "baqaj" },
                { en: "baggage", az: "baqaj" },
                { en: "equipment", az: "avadanlıq" },
                { en: "homework", az: "ev tapşırığı" },
                { en: "research", az: "tədqiqat" },
                { en: "knowledge", az: "bilik" },
                { en: "money", az: "pul" },
                { en: "traffic", az: "trafik" },
                { en: "weather", az: "hava (şərait)" },
                { en: "permission", az: "icazə" },
                { en: "accommodation", az: "yaşayış yeri" },
                { en: "progress", az: "irəliləyiş" },
                { en: "software", az: "proqram təminatı" },
                { en: "feedback", az: "rəy, geri bildirim" },
                { en: "transportation", az: "nəqliyyat" },
                { en: "luck", az: "uğur, şans" },
              ].map((item) => (
                <div
                  key={item.en}
                  className="flex items-baseline justify-between px-3 py-2 text-sm"
                >
                  <span className="font-mono text-foreground">{item.en}</span>
                  <span className="text-muted">{item.az}</span>
                </div>
              ))}
            </div>

            <ExampleList
              examples={[
                {
                  en: "She gave me some useful advice.",
                  az: "O, mənə bəzi faydalı məsləhətlər verdi.",
                },
                {
                  en: "I need more information before deciding.",
                  az: "Qərar verməzdən əvvəl daha çox məlumata ehtiyacım var.",
                },
                {
                  en: "The office needs new furniture.",
                  az: "Ofisə yeni mebel lazımdır.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "informations", "advices", "furnitures", "news are" — bunların
              heç biri qrammatik cəhətdən düzgün deyil.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.1.4</span>
              <h3 className="font-display text-xl text-foreground">
                İkili təbiətli isimlər — eyni söz, fərqli mənada fərqli status
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzi isimlər mənasından asılı olaraq həm sayıla bilən, həm sayıla
              bilməyən ola bilir. Fərq adətən <strong>konkret nümunə</strong>{" "}
              (sayıla bilən) ilə <strong>ümumi maddə/anlayış</strong> (sayıla
              bilməyən) arasındadır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Could you get me a coffee? (konkret fincan)",
                  az: "Mənə bir qəhvə gətirə bilərsən? (bir fincan)",
                },
                {
                  en: "I don't drink coffee in the evening. (ümumi maddə)",
                  az: "Axşamlar qəhvə içmirəm. (ümumiyyətlə)",
                },
                {
                  en: "This is a fascinating piece of work. (konkret əsər)",
                  az: "Bu, maraqlı bir əsərdir.",
                },
                {
                  en: "I have a lot of work this week. (ümumi iş yükü)",
                  az: "Bu həftə çox işim var.",
                },
                {
                  en: "There's a hair in my coffee. (tək tük)",
                  az: "Qəhvəmdə bir tük var.",
                },
                {
                  en: "She has beautiful hair. (ümumi saç)",
                  az: "Onun gözəl saçları var.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.1.5</span>
              <h3 className="font-display text-xl text-foreground">
                Sayıla bilməyən isimləri "sayma" üsulu — ölçü sözləri
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sayıla bilməyən ismi konkret vahidə bölmək lazım gələndə, ismin
              özü deyil, ona əlavə olunan <strong>ölçü/say vahidi</strong>{" "}
              (piece, bit, item) cəm forma alır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Let me give you a piece of advice.",
                  az: "Sənə bir məsləhət verim.",
                },
                {
                  en: "I found two pieces of information that contradict each other.",
                  az: "Bir-birinə zidd olan iki məlumat tapdım.",
                },
                {
                  en: "We ordered a new item of equipment.",
                  az: "Yeni bir avadanlıq sifariş etdik.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.1.6</span>
              <h3 className="font-display text-xl text-foreground">
                Fel uzlaşması: sayıla bilməyən isim həmişə tək fel alır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sayıla bilməyən isim zahirən "çoxluq" mənası daşısa belə (məs.
              <em> news, research</em>), qrammatik cəhətdən tək sayılır və felin
              tək forması ilə uzlaşır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The news is not encouraging.",
                  az: "Xəbər ürəkaçan deyil.",
                },
                {
                  en: "This research suggests a different conclusion.",
                  az: "Bu tədqiqat fərqli bir nəticəyə işarə edir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.1.7</span>
              <h3 className="font-display text-xl text-foreground">
                Kəmiyyət göstəricilərinin əvvəlcədən görünüşü
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sayıla bilən/bilməyən ayrımı 2.7 və 2.8-də ətraflı işlənəcək
              kəmiyyət göstəricilərinin seçimini birbaşa müəyyən edir:{" "}
              <em>many/few</em> yalnız sayıla bilənlə, <em>much/little</em>{" "}
              yalnız sayıla bilməyənlə işlənir. <em>Some/any/a lot of</em> isə
              hər ikisi ilə uyğun gəlir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "There are many options available.",
                  az: "Bir çox seçim mövcuddur.",
                },
                {
                  en: "There isn't much room for error.",
                  az: "Səhv üçün çox yer yoxdur.",
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
            Azərbaycan dilində "məlumat", "məsləhət", "mebel" kimi sözlər
            rahatlıqla cəm şəkilçisi ala bilir (məlumatlar, məsləhətlər,
            mebellər) — bu, ingilis dilində qrammatik cəhətdən yol verilməyən
            formadır. Bu uyğunsuzluq yalnız lüğət əzbərləməklə deyil, hər bir
            yeni sözü öyrənərkən "bu, ingilis dilində sayıla bilirmi?" sualını
            vermə vərdişi ilə aradan qaldırılır.
          </p>
          <div className="font-mono text-sm space-y-1 text-muted">
            <p>AZ: Mənə bəzi məlumatlar lazımdır. (cəm)</p>
            <p>EN: I need some information. (tək, cəmsiz)</p>
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
                wrong: "I need some informations.",
                right: "I need some information.",
                az: "Mənə bir az məlumat lazımdır.",
              },
              {
                wrong: "She gave me a good advice.",
                right: "She gave me some good advice.",
                az: "O, mənə yaxşı bir məsləhət verdi.",
              },
              {
                wrong: "We bought new furnitures.",
                right: "We bought new furniture.",
                az: "Biz yeni mebel aldıq.",
              },
              {
                wrong: "The news are good.",
                right: "The news is good.",
                az: "Xəbər yaxşıdır.",
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
          title="Məşq 1 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "I need to buy some new furnitures.",
              answer: "I need to buy some new furniture.",
              translation: "Yeni mebel almalıyam.",
            },
            {
              prompt: "He gave us three advices.",
              answer:
                "He gave us some advice. / He gave us three pieces of advice.",
              translation: "O, bizə bir neçə məsləhət verdi.",
            },
            {
              prompt: "Do you have some informations about the flight?",
              answer: "Do you have any information about the flight?",
              translation: "Uçuş haqqında məlumatın varmı?",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Uyğun kəmiyyət sözünü seç (many / much)"
          items={[
            {
              prompt: "How ___ employees work in this department?",
              answer: "How many employees work in this department?",
              translation: "Bu şöbədə neçə işçi işləyir?",
            },
            {
              prompt: "There isn't ___ traffic today.",
              answer: "There isn't much traffic today.",
              translation: "Bu gün çox trafik yoxdur.",
            },
            {
              prompt: "We don't have ___ time before the deadline.",
              answer: "We don't have much time before the deadline.",
              translation: "Son tarixə qədər çox vaxtımız yoxdur.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
