import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sual-formalari",
  "beli-xeyr-sual-recap",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sual-formalari"
      sectionSlug="beli-xeyr-sual-recap"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu bölmə yeni qayda öyrətmir — əvəzinə, 1.2-dən 5.10-a qədər{" "}
          <strong>bütün fəsillərdə səpələnmiş</strong> sual formalarını{" "}
          <strong>tək bir universal formula</strong> altında birləşdirir.
          Məqsəd: hər zamanı/modalı ayrıca yadda saxlamaq əvəzinə,{" "}
          <strong>bir naxışı</strong> mənimsəmək.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.1.1</span>
              <h3 className="font-display text-xl text-foreground">
                Universal formula: köməkçi/modal + subyekt + əsas fel
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bütün "bəli/xeyr" sualları eyni bir prinsipə tabedir: cümlədəki{" "}
              <strong>ilk köməkçi fel və ya modal</strong> subyektdən əvvələ
              keçir. Əgər cümlədə heç bir köməkçi fel yoxdursa (sadə fel),
              1.2.4-dəki do-support qaydası işə düşür.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.1.2</span>
              <h3 className="font-display text-xl text-foreground">
                Tam cədvəl: bütün zamanlar bir formulada
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">Zaman</th>
                    <th className="p-2 font-display text-foreground">
                      Sual nümunəsi
                    </th>
                  </tr>
                </thead>
                <tbody className="text-foreground font-mono">
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Present Simple</td>
                    <td className="p-2">Does she work here?</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Present Continuous</td>
                    <td className="p-2">Is she working?</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Present Perfect</td>
                    <td className="p-2">Has she worked here?</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Present Perfect Cont.</td>
                    <td className="p-2">Has she been working?</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Past Simple</td>
                    <td className="p-2">Did she work here?</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Past Continuous</td>
                    <td className="p-2">Was she working?</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Past Perfect</td>
                    <td className="p-2">Had she worked here?</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Future (will)</td>
                    <td className="p-2">Will she work here?</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Future Perfect</td>
                    <td className="p-2">Will she have worked here?</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-body">Modal (any)</td>
                    <td className="p-2">Can/Should/Must she work here?</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-foreground">
              Diqqət et: dəyişən yalnız <strong>ilk</strong> sözdür (does, is,
              has, did, was, had, will, can...) — qalan struktur (subyekt + əsas
              fel) hər zaman eynidir.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.1.3</span>
              <h3 className="font-display text-xl text-foreground">
                Bir neçə köməkçi fel olanda: yalnız BİRİNCİSİ öndə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Present Perfect Continuous (has been working) kimi bir neçə
              köməkçi fel olan zamanlarda, yalnız <strong>ilk</strong> köməkçi
              subyektdən əvvələ keçir, qalanlar öz yerində qalır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Has the report been reviewed yet? (✗ Has been the report reviewed?)",
                  az: "Hesabat artıq nəzərdən keçirilibmi?",
                },
                {
                  en: "Will the results have been published by then? (✗ Will have the results been published?)",
                  az: "Nəticələr o vaxta qədər dərc olunmuş olacaqmı?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.1.4</span>
              <h3 className="font-display text-xl text-foreground">
                "Be" əsas fel kimi: heç vaxt do-support tələb etmir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              1.3.3-dəki qaydanın xatırladılması: <em>to be</em> özü köməkçi
              rolunu oynadığı üçün, əsas fel olsa belə heç vaxt "does/did" tələb
              etmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Is he the new manager? (✗ Does he be)",
                  az: "O, yeni menecerdirmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.1.5</span>
              <h3 className="font-display text-xl text-foreground">
                Qısa cavab: sualdakı EYNİ köməkçi fellə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Qısa cavab həmişə sualda görünən köməkçi feli təkrarlayır, əsas
              feli yox. Bir neçə köməkçi olduqda, çox vaxt yalnız birincisi
              saxlanılır, "been" tez-tez buraxılır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Has she finished? — Yes, she has.",
                  az: "O, bitirdimi? — Bəli, bitirdi.",
                },
                {
                  en: "Will they have arrived by noon? — Yes, they will (have).",
                  az: "Onlar günortaya qədər çatmış olacaqlarmı? — Bəli.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.1.6</span>
              <h3 className="font-display text-xl text-foreground">
                Xatırlatma: do-support artıq mövcud köməkçi ilə birləşmir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              5.1.5-dəki qaydanın davamı — modal fel artıq köməkçi rolundadır,
              ona görə "do" əlavə etmək lazımsız və səhvdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Can she swim? (✗ Does she can swim?)",
                  az: "O, üzə bilirmi?",
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
            Bu tam təkrarda ən əhəmiyyətli məqam budur: Azərbaycan dilində bütün
            zamanlarda sual eyni sadə mexanizmlə (-mı/-mi şəkilçisi) qurulur —
            zamandan asılı olmayan universal bir vasitə. İngilis dilində isə hər
            zaman öz köməkçi felini gətirir, amma{" "}
            <strong>struktur məntiqi</strong> (ilk köməkçi + subyekt + qalanı)
            bütün zamanlarda sabit qalır — bu tam təkrarın əsas dəyəri məhz bu
            sabit naxışı görməkdir.
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
                wrong: "Has been the invoice sent?",
                right: "Has the invoice been sent?",
                az: "Faktura göndərilibmi?",
              },
              {
                wrong: "Does she can attend the meeting?",
                right: "Can she attend the meeting?",
                az: "O, iclasda iştirak edə bilərmi?",
              },
              {
                wrong: "Is he works here?",
                right: "Does he work here?",
                az: "O, burada işləyirmi?",
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
          title="Məşq 1 — Suala çevir"
          items={[
            {
              prompt: "They have been reviewing the contract. →",
              answer: "Have they been reviewing the contract?",
              translation: "Onlar müqaviləni nəzərdən keçirirlərmi?",
            },
            {
              prompt: "She will have finished by Friday. →",
              answer: "Will she have finished by Friday?",
              translation: "O, cüməyə qədər bitirmiş olacaqmı?",
            },
            {
              prompt: "He can speak three languages. →",
              answer: "Can he speak three languages?",
              translation: "O, üç dildə danışa bilirmi?",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "Will have she completed the project by then?",
              answer: "Will she have completed the project by then?",
              translation: "O, o vaxta qədər layihəni tamamlamış olacaqmı?",
            },
            {
              prompt: "Does he must submit the form today?",
              answer: "Must he submit the form today?",
              translation: "O, formu bu gün təqdim etməlidirmi?",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
