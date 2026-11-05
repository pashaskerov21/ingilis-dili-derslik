import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "evezlikler",
  "gosterici-evezlikler",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="evezlikler" sectionSlug="gosterici-evezlikler">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Göstərici əvəzliklər fiziki və ya mənəvi{" "}
          <strong>yaxınlıq/uzaqlıq</strong> bildirir. Səthi baxışda sadə görünsə
          də, bu sistem təkcə fiziki məsafəni deyil, vaxtı, mətn daxilindəki
          istinadı və hətta emosional tonu da idarə edir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.6.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas sistem: yaxınlıq/uzaqlıq × tək/cəm
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground"></th>
                    <th className="p-2 font-display text-foreground">Tək</th>
                    <th className="p-2 font-display text-foreground">Cəm</th>
                  </tr>
                </thead>
                <tbody className="text-foreground font-mono">
                  <tr className="border-b border-line">
                    <td className="p-2 font-body text-muted">Yaxın</td>
                    <td className="p-2">this</td>
                    <td className="p-2">these</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-body text-muted">Uzaq</td>
                    <td className="p-2">that</td>
                    <td className="p-2">those</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ExampleList
              examples={[
                {
                  en: "This laptop needs a software update.",
                  az: "Bu noutbuka proqram yeniləməsi lazımdır.",
                },
                {
                  en: "Those figures on the last slide were outdated.",
                  az: "Son slayddakı o rəqəmlər köhnəlmişdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.6.2</span>
              <h3 className="font-display text-xl text-foreground">
                İkili qrammatik rol: sifət (determiner) və əvəzlik (pronoun)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Hər dördü də iki formada işlənir: isimlə birgə (sifət) və ya isim
              olmadan, tək başına (əvəzlik, kontekstdən nəyə istinad etdiyi
              aydındır).
            </p>
            <ExampleList
              examples={[
                {
                  en: "This approach hasn't worked before. (sifət)",
                  az: "Bu yanaşma əvvəllər işləməyib.",
                },
                {
                  en: "I've tried several methods, but this hasn't worked either. (əvəzlik)",
                  az: "Bir neçə üsul sınamışam, amma bu da işləməyib.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.6.3</span>
              <h3 className="font-display text-xl text-foreground">
                Vaxt baxımından: "this" cari/gələcək, "that" keçmiş
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Fiziki yaxınlıq metaforası zamana da tətbiq olunur: içində
              olduğumuz və ya yaxınlaşan zaman period üçün <em>this</em>, artıq
              bitmiş, uzaqlaşmış zaman üçün <em>that</em> işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This quarter has been particularly demanding.",
                  az: "Bu rüb xüsusilə tələbkar olub. (cari)",
                },
                {
                  en: "That period was difficult for the whole industry.",
                  az: "O dövr bütün sənaye üçün çətin idi. (keçmiş, uzaqlaşmış)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.6.4</span>
              <h3 className="font-display text-xl text-foreground">
                Mətn daxilində istinad: "this" irəliyə, "that" geriyə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Yazıda çox işlək, amma az öyrədilən qayda: <em>this</em> tez-tez{" "}
              <strong>indicə deyiləcək</strong> fikrə işarə edir (cataphoric),{" "}
              <em>that</em> isə <strong>artıq deyilmiş</strong> fikrə geri
              qayıdır (anaphoric). Bu, mətnin məntiqi axınını izləməyə kömək
              edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Here's the key point: this decision affects every department. (irəli — indi izah edəcək)",
                  az: "Əsas məqam budur: bu qərar hər şöbəyə təsir edir.",
                },
                {
                  en: "The client cancelled the contract. That decision surprised everyone. (geri — artıq deyilmiş fikrə istinad)",
                  az: "Müştəri müqaviləni ləğv etdi. Bu qərar hamını təəccübləndirdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.6.5</span>
              <h3 className="font-display text-xl text-foreground">
                Telefon və şəxs müəyyənləşdirmə konvensiyası
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Telefon danışığında və ya uzaqdan kimisə tanımaq istəyəndə,
              ingilis dilində (xüsusilə Britaniya variantında) danışanın özündən
              deyil, <strong>digər tərəfdən</strong> soruşarkən <em>that</em>{" "}
              işlədilir, <em>this</em> isə özünü təqdim edərkən.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Hello, is that David? — Yes, this is David speaking.",
                  az: "Salam, Davidsiniz? — Bəli, mən Davidəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.6.6</span>
              <h3 className="font-display text-xl text-foreground">
                Emosional çalar: "that" məsafə/bəyənməmə bildirə bilər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>That</em> fiziki uzaqlıqdan əlavə, mənəvi{" "}
              <strong>məsafə, məyusluq və ya bəyənməmə</strong> tonunu da daşıya
              bilər — bu, kontekstdən və intonasiyadan asılıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "That client again? He always causes delays.",
                  az: "Yenə o müştərimi? O həmişə gecikmə yaradır. (narazılıq tonu)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.6.7</span>
              <h3 className="font-display text-xl text-foreground">
                "This" ilə yeni şəxs/mövzu təqdim etmək
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Kimisə tanış etdirərkən və ya yeni mövzu açarkən <em>this</em>{" "}
              istifadə olunur — <em>that</em> bu funksiyada işlənmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This is Elvin — he's joining our team next week.",
                  az: "Bu, Elvindir — o, növbəti həftə komandamıza qoşulur.",
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
            Azərbaycan dilində "bu/bunlar" (yaxın) və "o/onlar" (uzaq) əsas
            fiziki məsafə fərqi ingilis dilinə çox bənzəyir. Əsas fərq
            3.6.4-dəki <strong>mətn daxili istinad qaydasındadır</strong> —
            Azərbaycan dilində yazıda "bu" və "o" arasında irəli/geri istinad
            fərqi bu qədər sistemli şəkildə qeyd edilmir, ona görə ingilis
            dilində akademik/işgüzar yazıda bu incəliyə xüsusi diqqət lazımdır
            ki, mətnin məntiqi axını aydın olsun.
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
                wrong: "This shoes are too small.",
                right: "These shoes are too small.",
                az: "Bu ayaqqabılar çox kiçikdir. (cəm isimlə 'these')",
              },
              {
                wrong: "That informations were incorrect.",
                right: "That information was incorrect.",
                az: "O məlumat yanlış idi. (uncountable — tək qalır)",
              },
              {
                wrong:
                  "Hello, is this John? (telefonda özünü soruşarkən — səhv)",
                right: "Hello, is that John?",
                az: "Salam, Consunuz?",
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
          title="Məşq 1 — Uyğun göstərici əvəzliyi yaz"
          items={[
            {
              prompt:
                "___ report on my desk right now needs your signature. (yaxın)",
              answer: "This report on my desk right now needs your signature.",
              translation: "Masamdakı bu hesabata imzan lazımdır.",
            },
            {
              prompt:
                "___ decisions we made last year turned out well. (uzaq, keçmiş, cəm)",
              answer: "Those decisions we made last year turned out well.",
              translation: "Keçən il verdiyimiz o qərarlar yaxşı nəticə verdi.",
            },
            {
              prompt: "Hello, ___ Ali? (telefonda digər tərəfi soruşarkən)",
              answer: "Hello, is that Ali?",
              translation: "Salam, Alisiniz?",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "This shoes don't fit me.",
              answer: "These shoes don't fit me.",
              translation: "Bu ayaqqabılar mənə olmur.",
            },
            {
              prompt: "That advice was very helpful, thanks for those.",
              answer: "That advice was very helpful, thanks for that.",
              translation: "O məsləhət çox faydalı oldu, təşəkkürlər.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
