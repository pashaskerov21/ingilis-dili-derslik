import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sual-formalari",
  "subyekt-obyekt-suallari",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sual-formalari"
      sectionSlug="subyekt-obyekt-suallari"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu, 3.1.5-də qısaca toxunduğumuz istisnanın **tam qaydasıdır** — sual
          sözü (who, what, which) cümlənin <strong>subyektinə</strong> aid
          olduqda, indiyə qədər öyrəndiyin bütün inversiya qaydaları (8.1, 8.2)
          tətbiq olunmur.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.3.1</span>
              <h3 className="font-display text-xl text-foreground">
                Obyekt sualı: tanış formula (Sual sözü + Aux + Subyekt + Fel)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sual sözü hərəkətin <strong>qəbul edicisini</strong> soruşduqda,
              8.1/8.2-dəki tam inversiya tətbiq olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "What did the client request? (client = subyekt, what = obyekt)",
                  az: "Müştəri nə tələb etdi?",
                },
                {
                  en: "Who does she report to? (she = subyekt, who = obyekt)",
                  az: "O, kimə hesabat verir?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.3.2</span>
              <h3 className="font-display text-xl text-foreground">
                Subyekt sualı: köməkçi fel YOX, söz sırası dəyişmir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sual sözünün özü hərəkəti <strong>icra edən</strong> olduqda (yəni
              sual sözü subyektin yerini tutur), heç bir inversiya baş vermir —
              cümlə sadəcə təsdiq cümləsi kimi qalır, sual sözü subyektin yerinə
              keçir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Who approved this budget? (✗ Who did approve)",
                  az: "Bu büdcəni kim təsdiqlədi?",
                },
                {
                  en: "What caused the delay? (✗ What did cause)",
                  az: "Gecikməyə nə səbəb oldu?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.3.3</span>
              <h3 className="font-display text-xl text-foreground">
                Vacib məhdudiyyət: yalnız Present/Past Simple-da köməkçisiz
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu "köməkçisiz" qayda yalnız Present Simple və Past Simple-a
              aiddir (çünki bunlarda köməkçi fel yalnız do-support ilə gəlir).
              Digər zamanlarda (Continuous, Perfect) köməkçi fel artıq felin öz
              strukturunun bir hissəsidir, ona görə subyekt sualında da{" "}
              <strong>görünür</strong>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Who is reviewing the contract right now? (Present Continuous — köməkçi görünür)",
                  az: "İndi müqaviləni kim nəzərdən keçirir?",
                },
                {
                  en: "Who has finished the report? (Present Perfect)",
                  az: "Hesabatı kim bitirib?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.3.4</span>
              <h3 className="font-display text-xl text-foreground">
                Praktik test: kim/nə edir, kim/nəyi edir?
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Hər dəfə çaşdıqda özünə sual ver: sual sözü{" "}
              <strong>hərəkəti icra edəni</strong> soruşur, yoxsa{" "}
              <strong>hərəkətin nəticəsini/qəbul edicisini</strong>?
            </p>
            <ExampleList
              examples={[
                {
                  en: "A cat caught a mouse. → What caught the mouse? (subyekt sualı — the cat)",
                  az: "Pişik siçanı tutdu. → Siçanı nə tutdu?",
                },
                {
                  en: "A cat caught a mouse. → What did the cat catch? (obyekt sualı — the mouse)",
                  az: "Pişik siçanı tutdu. → Pişik nəyi tutdu?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.3.5</span>
              <h3 className="font-display text-xl text-foreground">
                Qabaqcıl incəlik: subyekt sualında vurğulanan "do"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Danışıqda, subyekt sualına belə vurğu üçün "do" əlavə oluna bilər
              — bu, adi qaydanın istisnasıdır, güclü maraq/təkid bildirmək
              üçündür.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Who DOES want dessert? (heç kim əl qaldırmayanda, təkidlə soruşur)",
                  az: "Axı desert kim istəyir?",
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
            Azərbaycan dilində "kim" sözü subyekt və obyekt sualında eyni
            formada işlənir, söz sırası hər ikisində də dəyişməz qalır ("kim
            gəldi" / "sən kimi gördün"). İngilis dilində isə bu fərq — subyekt
            sualında inversiyanın olmaması — leksik cəhətdən görünməsə də,
            qrammatik struktur baxımından fərqlidir. Bu, Azərbaycan dilli
            öyrənən üçün adətən avtomatik "do/does" əlavə etmə refleksinə səbəb
            olur, halbuki subyekt sualında bu lazımsızdır.
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
                wrong: "Who did send this email?",
                right: "Who sent this email?",
                az: "Bu emaili kim göndərdi?",
              },
              {
                wrong: "What does cause this error?",
                right: "What causes this error?",
                az: "Bu xətaya nə səbəb olur?",
              },
              {
                wrong: "Which team did win the contract?",
                right: "Which team won the contract?",
                az: "Hansı komanda müqaviləni qazandı?",
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
          title="Məşq 1 — Subyekt yoxsa obyekt sualı?"
          items={[
            {
              prompt: "The manager signed the contract. → (kim etdi — subyekt)",
              answer: "Who signed the contract?",
              translation: "Müqaviləni kim imzaladı?",
            },
            {
              prompt: "The manager signed the contract. → (nəyi etdi — obyekt)",
              answer: "What did the manager sign?",
              translation: "Menecer nəyi imzaladı?",
            },
            {
              prompt:
                "The storm damaged the roof. → (nəyə səbəb oldu — subyekt)",
              answer: "What damaged the roof?",
              translation: "Dama nə ziyan vurdu?",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "Who did break the window?",
              answer: "Who broke the window?",
              translation: "Pəncərəni kim sındırdı?",
            },
            {
              prompt: "What does happen if the server crashes?",
              answer: "What happens if the server crashes?",
              translation: "Server çökərsə nə baş verir?",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
