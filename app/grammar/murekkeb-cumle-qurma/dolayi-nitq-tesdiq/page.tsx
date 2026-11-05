import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "murekkeb-cumle-qurma",
  "dolayi-nitq-tesdiq",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="murekkeb-cumle-qurma"
      sectionSlug="dolayi-nitq-tesdiq"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Dolayı nitq — kiminsə dediyini **öz sözlərinlə**, dırnaq işarəsiz
          çatdırmaq. Bu, sadəcə "that" əlavə etmək deyil — üç şey **sistemli
          şəkildə dəyişir**: fel zamanı (geriyə sürüşmə), əvəzliklər və
          zaman/yer ifadələri.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.9.1</span>
              <h3 className="font-display text-xl text-foreground">
                Forma: say/tell + (that) + geriyə sürüşmüş cümlə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Say</em> obyektsiz, <em>tell</em> isə mütləq obyektlə (kimə
              deyildiyi) işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: '"I\'m busy." → She said (that) she was busy.',
                  az: '"Mən məşğulam." → O, məşğul olduğunu dedi.',
                },
                {
                  en: '"We finished the report." → He told me they had finished the report.',
                  az: '"Hesabatı bitirdik." → O, mənə hesabatı bitirdiklərini dedi.',
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.9.2</span>
              <h3 className="font-display text-xl text-foreground">
                Geriyə sürüşmə (Backshift) cədvəli
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">Əsl</th>
                    <th className="p-2 font-display text-foreground">Dolayı</th>
                  </tr>
                </thead>
                <tbody className="text-foreground font-mono">
                  <tr className="border-b border-line">
                    <td className="p-2">Present Simple</td>
                    <td className="p-2">Past Simple</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">Present Continuous</td>
                    <td className="p-2">Past Continuous</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">Present Perfect</td>
                    <td className="p-2">Past Perfect</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">Past Simple</td>
                    <td className="p-2">Past Perfect</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">will</td>
                    <td className="p-2">would</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">can</td>
                    <td className="p-2">could</td>
                  </tr>
                  <tr>
                    <td className="p-2">may</td>
                    <td className="p-2">might</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ExampleList
              examples={[
                {
                  en: '"I\'ll call you tomorrow." → She said she would call me the next day.',
                  az: '"Sabah sənə zəng edəcəm." → O, ertəsi gün mənə zəng edəcəyini dedi.',
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.9.3</span>
              <h3 className="font-display text-xl text-foreground">
                İstisna: Past Perfect artıq geri sürüşmür
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Past Perfect artıq "ən geri" nöqtədir, ona görə dəyişmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: '"I had already left when she called." → He said he had already left when she called.',
                  az: '"O zəng edəndə mən artıq getmişdim." → O, zəng edəndə artıq getdiyini söylədi.',
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.9.4</span>
              <h3 className="font-display text-xl text-foreground">
                İstisna: hələ də doğrudursa, geriyə sürüşmə şərt deyil
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əgər deyilən fakt **hələ də doğrudursa/aktualdırsa**, geriyə
              sürüşmə məcburi deyil — xüsusilə yaxın zamanda deyilmiş sözlər
              üçün.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He told me his brother works for an Italian company. (hələ də doğrudur)",
                  az: "O, mənə qardaşının italyan şirkətində işlədiyini dedi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.9.5</span>
              <h3 className="font-display text-xl text-foreground">
                Əvəzliklərin dəyişməsi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əvəzlik nəql edənin perspektivinə uyğunlaşdırılır — kim danışırdı,
              kimə nəql olunur, bunlar üst-üstə düşmürsə, əvəzlik dəyişir.
            </p>
            <ExampleList
              examples={[
                {
                  en: '"I finished my part." → She said (that) she had finished her part.',
                  az: '"Mən öz hissəmi bitirdim." → O, öz hissəsini bitirdiyini söylədi.',
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.9.6</span>
              <h3 className="font-display text-xl text-foreground">
                Zaman/yer ifadələrinin dəyişməsi
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                ["today", "that day"],
                ["yesterday", "the day before"],
                ["tomorrow", "the next day"],
                ["now", "then"],
                ["here", "there"],
                ["this", "that"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="font-mono text-sm border border-line px-2 py-1 text-center"
                >
                  {a} → {b}
                </div>
              ))}
            </div>
            <ExampleList
              examples={[
                {
                  en: '"We\'re launching this today." → They said they were launching that that day.',
                  az: '"Biz bunu bu gün buraxırıq." → Onlar bunu həmin gün buraxdıqlarını söylədilər.',
                },
              ]}
            />
            <p className="text-sm text-muted">
              Diqqət: bu dəyişikliklər yalnız **fərqli zaman/yerdə** nəql
              edildikdə lazımdır — eyni gündə, eyni yerdə nəql edilirsə,
              dəyişmək lazım deyil.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.9.7</span>
              <h3 className="font-display text-xl text-foreground">
                Şərt cümlələri ilə: 9.6-9.8-in xatırladılması
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sıfır və İkinci Şərt artıq özlüyündə "uzaq/ümumi" olduğu üçün
              dəyişmir. Birinci Şərt isə normal backshift qaydasına tabedir.
            </p>
            <ExampleList
              examples={[
                {
                  en: '"If it rains, I\'ll stay home." → She said that if it rained, she would stay home.',
                  az: '"Yağış yağsa, evdə qalacam." → O, yağış yağsa evdə qalacağını söylədi.',
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
            Azərbaycan dilində dolayı nitqdə fel zamanı **çox vaxt dəyişmir** —
            "O dedi ki, mən məşğulam" (indiki zaman qalır), ingilis dilinin
            "geriyə sürüşmə" tələbi olmadan. Bu, ingilis dilini öyrənən üçün ən
            sistemli, amma həm də ən çox unudulan qaydalardan biridir — çünki
            ana dildə bu addımı atlamaq təbii hiss olunur.
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
                wrong: "She said that she is busy.",
                right: "She said that she was busy.",
                az: "O, məşğul olduğunu dedi.",
              },
              {
                wrong: "He told that he would come. (tell obyektsiz işlənib)",
                right:
                  "He said that he would come. / He told me that he would come.",
                az: "O, gələcəyini dedi.",
              },
              {
                wrong: "They said they will finish tomorrow.",
                right: "They said they would finish the next day.",
                az: "Onlar ertəsi gün bitirəcəklərini söylədilər.",
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
          title="Məşq 1 — Dolayı nitqə çevir"
          items={[
            {
              prompt: '"I\'m working from home today," she said. →',
              answer: "She said (that) she was working from home that day.",
              translation: "O, həmin gün evdən işlədiyini dedi.",
            },
            {
              prompt: '"We haven\'t received the payment yet," he told me. →',
              answer: "He told me (that) they hadn't received the payment yet.",
              translation: "O, mənə ödənişi hələ almadıqlarını dedi.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "She said she is coming to the meeting tomorrow.",
              answer: "She said she was coming to the meeting the next day.",
              translation: "O, ertəsi gün iclasa gələcəyini dedi.",
            },
            {
              prompt: "He told he was tired.",
              answer: "He said he was tired. / He told me he was tired.",
              translation: "O, yorğun olduğunu dedi.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
