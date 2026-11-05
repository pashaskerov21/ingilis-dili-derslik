import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "feller-ve-zamanlar",
  "past-simple",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="feller-ve-zamanlar" sectionSlug="past-simple">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Past Simple ingilis dilinin hekayə danışmaq, hadisə bildirmək və
          tamamlanmış keçmiş faktları ifadə etmək üçün əsas vasitəsidir.
          4.4-dəki Present Perfect-dən fərqli olaraq, burada{" "}
          <strong>konkret vaxt həmişə ya bilinir, ya nəzərdə tutulur</strong> —
          diqqət "nə vaxt oldu" sualındadır, "indiyə necə bağlıdır" sualında
          deyil.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.6.1</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 1 — Konkret vaxtda baş vermiş, bitmiş tək hərəkət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Vaxt ifadəsi (yesterday, last week, in 2020, three days ago, when
              I was young) ya açıq deyilir, ya da kontekstdən aydındır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The team launched the product last October.",
                  az: "Komanda məhsulu keçən oktyabrda buraxdı.",
                },
                {
                  en: "She graduated in 2021.",
                  az: "O, 2021-ci ildə məzun oldu.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.6.2</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 2 — Ardıcıl hadisələr (povest, hekayə)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Hadisələri baş vermə ardıcıllığı ilə nəql edərkən — hekayə,
              hesabat, şəxsi təcrübə danışarkən ən çox işlənən quruluş.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She opened her laptop, checked her emails, and immediately called the client.",
                  az: "O, noutbukunu açdı, emaillərini yoxladı və dərhal müştəriyə zəng etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.6.3</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 3 — Keçmiş adət, artıq davam etmir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Keçmişdə müntəzəm baş vermiş, amma indi artıq davam etməyən adət.
              Mənası <em>used to</em> ilə demək olar eynidir (ayrıca mövzuda
              dərinləşəcək).
            </p>
            <ExampleList
              examples={[
                {
                  en: "I worked in retail before I moved into tech.",
                  az: "Texnologiya sahəsinə keçmədən əvvəl pərakəndə satışda işləyirdim.",
                },
                {
                  en: "We always met on Fridays when I was at university.",
                  az: "Universitetdə oxuyanda hər cümə görüşürdük.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.6.4</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 4 — Keçmiş fakt/vəziyyət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              4.1.4-ün ("daimi indiki fakt") keçmiş qarşılığı — o zaman doğru
              olan, indi doğru olub-olmaması önəmli olmayan vəziyyət.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The company had fifty employees at that time.",
                  az: "O zaman şirkətdə əlli işçi var idi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.6.5</span>
              <h3 className="font-display text-xl text-foreground">
                Forma: müntəzəm fellər (+ed) — orfoqrafiya qaydaları
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">Qayda</th>
                    <th className="p-2 font-display text-foreground">Nümunə</th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  <tr className="border-b border-line">
                    <td className="p-2">Əksəriyyət: +ed</td>
                    <td className="p-2 font-mono">work → worked</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">Səssiz "e" ilə bitən: +d</td>
                    <td className="p-2 font-mono">live → lived</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">
                      CVC (bir hecalı) — son samit ikiləşir
                    </td>
                    <td className="p-2 font-mono">
                      stop → stopped, plan → planned
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">samit+y → -ied</td>
                    <td className="p-2 font-mono">
                      study → studied, carry → carried
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted">
              Diqqət: bu qaydalar 4.2.1-dəki -ing qaydaları ilə demək olar
              eynidir (CVC ikiləşməsi, səssiz e düşməsi) — fərq yalnız "samit+y"
              halında (Continuous-da dəyişmir, Past Simple-da -ied olur).
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.6.6</span>
              <h3 className="font-display text-xl text-foreground">
                Forma: qeyri-müntəzəm fellər — sabit qayda yoxdur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İngilis dilinin ən çox işlənən fellərinin böyük əksəriyyəti
              qeyri-müntəzəmdir (be→was/were, go→went, have→had, see→saw) —
              bunlar heç bir orfoqrafik qaydaya tabe olmur, hər biri ayrıca
              əzbərlənməlidir. Fəsil sonundakı Qeyri-müntəzəm Fellər Cədvəli
              buna həsr olunub.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We went to the conference together.",
                  az: "Konfransa birlikdə getdik.",
                },
                {
                  en: "She wrote the proposal in one afternoon.",
                  az: "O, təklifi bir günortada yazdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.6.7</span>
              <h3 className="font-display text-xl text-foreground">
                İnkar/sual: did-support, əsas fel bazaya qayıdır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              1.2.4-dəki do-support qaydası keçmiş zamanda "did" ilə eynilə
              tətbiq olunur — həm müntəzəm, həm qeyri-müntəzəm fellərdə əsas fel
              bazaya (dəyişməmiş formaya) qayıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The client didn't approve the design. (✗ didn't approved)",
                  az: "Müştəri dizaynı təsdiqləmədi.",
                },
                {
                  en: "Did they go to the launch event? (✗ Did they went)",
                  az: "Onlar buraxılış tədbirinə getdilərmi?",
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
            Azərbaycan dilində keçmiş zaman şəkilçisi (-dı/-di/-du/-dü) demək
            olar bütün fellərə eyni qaydayla əlavə olunur — istisna azdır.
            İngilis dilində isə 4.6.5/4.6.6-da gördüyün kimi, fellər iki böyük
            qrupa (müntəzəm/qeyri-müntəzəm) bölünür və qeyri-müntəzəm qrup, ən
            çox işlənən fellərin əksəriyyətini əhatə edir. Bu, Azərbaycan dilli
            öyrənən üçün "hər fel eyni qaydaya tabedir" gözləntisinin işləmədiyi
            əsas sahələrdən biridir.
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
                wrong: "She goed to the meeting late.",
                right: "She went to the meeting late.",
                az: "O, iclasa gec getdi.",
              },
              {
                wrong: "We didn't went to the office yesterday.",
                right: "We didn't go to the office yesterday.",
                az: "Biz dünən ofisə getmədik.",
              },
              {
                wrong: "He studyed the market before investing.",
                right: "He studied the market before investing.",
                az: "O, investisiya etməzdən əvvəl bazarı araşdırdı.",
              },
              {
                wrong: "I have visited them yesterday.",
                right: "I visited them yesterday.",
                az: "Onları dünən ziyarət etdim.",
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
          title="Məşq 1 — Uyğun keçmiş formanı yaz"
          items={[
            {
              prompt: "We ___ (visit) the factory last month.",
              answer: "We visited the factory last month.",
              translation: "Keçən ay zavodu ziyarət etdik.",
            },
            {
              prompt: "She ___ (not / finish) the assignment on time.",
              answer: "She did not finish the assignment on time.",
              translation: "O, tapşırığı vaxtında bitirmədi.",
            },
            {
              prompt: "___ they ___ (sign) the contract yesterday?",
              answer: "Did they sign the contract yesterday?",
              translation: "Onlar dünən müqaviləni imzaladılarmı?",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "He buyed a new laptop last week.",
              answer: "He bought a new laptop last week.",
              translation: "O, keçən həftə yeni noutbuk aldı.",
            },
            {
              prompt: "We didn't spoke about the budget.",
              answer: "We didn't speak about the budget.",
              translation: "Büdcə barədə danışmadıq.",
            },
            {
              prompt: "I have called her yesterday.",
              answer: "I called her yesterday.",
              translation: "Onu dünən çağırdım.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
