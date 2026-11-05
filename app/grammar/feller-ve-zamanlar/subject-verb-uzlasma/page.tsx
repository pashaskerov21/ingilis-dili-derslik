import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "feller-ve-zamanlar",
  "subject-verb-uzlasma",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="feller-ve-zamanlar"
      sectionSlug="subject-verb-uzlasma"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu, fəslin yekun bölməsidir və məqsədli şəkildə sona saxlanıb — çünki
          bu qayda <strong>bütün zamanlara</strong> tətbiq olunur. Əsas prinsip
          sadədir (tək subyekt → tək fel, cəm subyekt → cəm fel), amma real
          cümlələrdə subyekti düzgün müəyyənləşdirmək gözlənildiyindən çətin ola
          bilər.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.12.1</span>
              <h3 className="font-display text-xl text-foreground">
                Araya girən söz birləşmələri uzlaşmanı dəyişmir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Subyektlə fel arasına sözönü birləşməsi girsə də, fel əsl
              subyektlə uzlaşır, araya girən isimlə yox.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The manager, along with three team members, is attending the workshop.",
                  az: "Menecer, üç komanda üzvü ilə birgə, seminarda iştirak edir.",
                },
                {
                  en: "The list of requirements has changed significantly.",
                  az: "Tələblər siyahısı əhəmiyyətli dərəcədə dəyişib.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.12.2</span>
              <h3 className="font-display text-xl text-foreground">
                "And" ilə birləşən subyekt: cəm fel
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The designer and the developer are reviewing the mockup together.",
                  az: "Dizayner və proqramçı maketi birlikdə nəzərdən keçirirlər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.12.3</span>
              <h3 className="font-display text-xl text-foreground">
                "Or/nor/either...or/neither...nor": felin özünə YAXIN olan hissə
                ilə uzlaşması
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, "and"-dən fərqli, ən çox səhv edilən qaydadır — fel
              subyektlərin cəmi ilə deyil, felə <strong>ən yaxın</strong> olan
              hissə ilə uzlaşır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Either the manager or the developers are responsible for this decision.",
                  az: "Ya menecer, ya da proqramçılar bu qərara görə məsuldur. (developers — cəm, yaxın)",
                },
                {
                  en: "Neither the developers nor the manager is responsible for this decision.",
                  az: "Nə proqramçılar, nə menecer bu qərara görə məsul deyil. (manager — tək, yaxın)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.12.4</span>
              <h3 className="font-display text-xl text-foreground">
                Kollektiv isimlər: bütövlük (tək) vs fərdilər (cəm)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Team, family, committee, staff, jury</em> kimi isimlər qrupu{" "}
              <strong>bir bütöv</strong> kimi düşünəndə tək fel, üzvləri{" "}
              <strong>ayrı-ayrılıqda</strong> hərəkət edən fərdlər kimi
              düşünəndə cəm fel alır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The team is presenting its results tomorrow. (bütöv qurum)",
                  az: "Komanda sabah öz nəticələrini təqdim edir.",
                },
                {
                  en: "The team are arguing about the deadline among themselves. (ayrı-ayrı üzvlər)",
                  az: "Komanda üzvləri son tarix barədə öz aralarında mübahisə edirlər.",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Britaniya ingiliscəsində kollektiv isimlərlə cəm fel Amerika
              ingiliscəsinə nisbətən daha çox yayılıb.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.12.5</span>
              <h3 className="font-display text-xl text-foreground">
                Qeyri-müəyyən əvəzliklər: həmişə tək
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              3.7-dəki qeyri-müəyyən əvəzliklər (everyone, everybody, each,
              either, neither, somebody) zahirən cəm mənası daşısa belə,
              qrammatik cəhətdən həmişə <strong>tək</strong> fel alır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Everyone in the department has received the update.",
                  az: "Şöbədəki hər kəs yeniləməni alıb.",
                },
                {
                  en: "Each of the proposals has its own budget.",
                  az: "Təkliflərin hər birinin öz büdcəsi var.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.12.6</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik cüt: "a number of" (cəm) vs "the number of" (tək)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, çox vaxt gözdən qaçan, amma dəqiq bir qaydadır: "a number of"
              kəmiyyət göstəricisi kimi işlənir (2.7-dəki "many" ilə eyni rolda)
              və cəm fel alır. "The number of" isə konkret ədədin özünə istinad
              edir və tək fel alır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "A number of clients have requested a refund. (= many clients)",
                  az: "Bir sıra müştəri geri ödəniş tələb edib.",
                },
                {
                  en: "The number of complaints has decreased this month.",
                  az: "Şikayətlərin sayı bu ay azalıb.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.12.7</span>
              <h3 className="font-display text-xl text-foreground">
                Miqdar/məsafə/pul: bütöv vahid kimi tək
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Vaxt, pul, məsafə kimi miqdarlar bir bütöv "paket" kimi
              düşünüldükdə tək fel alır, hətta zahirən cəm görünsə belə.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Ten years is a long time to wait for a promotion.",
                  az: "Vəzifə artımı üçün on il gözləmək uzun müddətdir.",
                },
                {
                  en: "Two hundred dollars seems reasonable for this service.",
                  az: "Bu xidmət üçün iki yüz dollar məqbul görünür.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.12.8</span>
              <h3 className="font-display text-xl text-foreground">
                Tək qurumların adları: forması cəm olsa belə tək fel
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Kitab, təşkilat, ölkə adları vahid bir varlığı bildirir, ona görə
              tək fel alır — hətta adın özündə cəm görünüş olsa belə.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The United States has strong trade relations with the region.",
                  az: "ABŞ regionla güclü ticarət əlaqələrinə malikdir.",
                },
                {
                  en: '"The Analysts" is a bestselling book about market trends.',
                  az: '"Analitiklər" bazar tendensiyaları haqqında ən çox satılan kitabdır.',
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.12.9</span>
              <h3 className="font-display text-xl text-foreground">
                Tərsinə çevrilmiş cümlələr: fel əsl subyektlə uzlaşır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              1.4-dəki "there is/are" strukturunda fel özündən{" "}
              <strong>sonra</strong> gələn həqiqi subyektlə uzlaşır — bu, artıq
              öyrənilmiş qayda, burada bütün sistemin bir hissəsi kimi
              xatırladılır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Here are the documents you requested.",
                  az: "Tələb etdiyin sənədlər buradadır.",
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
            Azərbaycan dilində fel-subyekt uzlaşması əsasən şəxsə görə
            (mən/sən/o) baş verir, "tək/cəm" fərqi bəzən hətta ismin özündə açıq
            görünməyə bilər ("tələbələr gəldi" — fel cəm şəkilçisi almır).
            İngilis dilində isə (yalnız 3-cü şəxs tək istisna olmaqla) uzlaşma
            daha çox subyektin <strong>tipinə</strong> (kollektiv,
            qeyri-müəyyən, miqdar) bağlıdır — bu, bu bölmədə göstərilən 9 fərqli
            qərar nöqtəsinin səbəbidir.
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
                wrong: "The list of items are on the table.",
                right: "The list of items is on the table.",
                az: "Əşyaların siyahısı masadadır.",
              },
              {
                wrong: "Neither the manager nor the developers is available.",
                right: "Neither the manager nor the developers are available.",
                az: "Nə menecer, nə də proqramçılar əlçatan deyil.",
              },
              {
                wrong: "Everyone have submitted their forms.",
                right: "Everyone has submitted their forms.",
                az: "Hər kəs formalarını təqdim edib.",
              },
              {
                wrong: "A number of issues has been reported.",
                right: "A number of issues have been reported.",
                az: "Bir sıra problem bildirilib.",
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
              prompt: "The number of applicants ___ (increase) every year.",
              answer: "The number of applicants increases every year.",
              translation: "Müraciət edənlərin sayı hər il artır.",
            },
            {
              prompt:
                "Either the client or the vendors ___ (need) to approve this.",
              answer: "Either the client or the vendors need to approve this.",
              translation:
                "Ya müştəri, ya da təchizatçılar bunu təsdiqləməlidir.",
            },
            {
              prompt: "Five hundred dollars ___ (be) the total cost.",
              answer: "Five hundred dollars is the total cost.",
              translation: "Beş yüz dollar ümumi məbləğdir.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt:
                "The committee are voting on the proposal this week. (bütöv qurum kimi)",
              answer: "The committee is voting on the proposal this week.",
              translation: "Komitə bu həftə təklifə səs verir.",
            },
            {
              prompt: "Nobody know the final decision yet.",
              answer: "Nobody knows the final decision yet.",
              translation: "Hələ heç kim yekun qərarı bilmir.",
            },
            {
              prompt: "The rules of the game is confusing.",
              answer: "The rules of the game are confusing.",
              translation: "Oyunun qaydaları çaşdırıcıdır.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
