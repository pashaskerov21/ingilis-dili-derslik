import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sual-formalari",
  "wh-sual-sozleri",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="sual-formalari" sectionSlug="wh-sual-sozleri">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          1.2.5-də tanış olduğun əsas quruluşu (sual sözü + köməkçi fel +
          subyekt + əsas fel) bu bölmədə dərinləşdiririk — xüsusilə hansı sual
          sözünün seçilməsi, "how/what" ilə birləşmələr və sözönlərinin yeri
          kimi incə məqamları.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.2.1</span>
              <h3 className="font-display text-xl text-foreground">
                "What" vs "which" — açıq imkan vs məhdud seçim
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>What</strong> — imkanlar məhdudlaşdırılmayıb, açıq
              sualdır. <strong>Which</strong> — konkret, məhdud bir seçimlər
              dəstindən seçim tələb edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "What do you do for a living? (açıq, hər hansı cavab ola bilər)",
                  az: "Nə işlə məşğulsan?",
                },
                {
                  en: "Which of these three proposals do you prefer? (məhdud, üç seçim)",
                  az: "Bu üç təklifdən hansını üstün tutursan?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.2.2</span>
              <h3 className="font-display text-xl text-foreground">
                "Whose" — sahiblik
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "Whose laptop is this on the desk?",
                  az: "Masadakı bu kimin noutbukudur?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.2.3</span>
              <h3 className="font-display text-xl text-foreground">
                "How" + sifət/zərf birləşmələri
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>How</em> demək olar istənilən sifətlə birləşərək konkret ölçü
              sualı yarada bilir.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                ["how long", "müddət"],
                ["how far", "məsafə"],
                ["how often", "tezlik"],
                ["how old", "yaş"],
                ["how much", "miqdar (uncountable)"],
                ["how many", "miqdar (countable)"],
              ].map(([en, az]) => (
                <div key={en} className="border border-line px-2 py-1 text-sm">
                  <span className="font-mono text-foreground">{en}</span> —{" "}
                  <span className="text-muted">{az}</span>
                </div>
              ))}
            </div>
            <ExampleList
              examples={[
                {
                  en: "How long have you worked at this company?",
                  az: "Bu şirkətdə nə qədərdir işləyirsən?",
                },
                {
                  en: "How often does the team meet for reviews?",
                  az: "Komanda baxışlar üçün nə qədər tez-tez görüşür?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.2.4</span>
              <h3 className="font-display text-xl text-foreground">
                "What" + isim birləşmələri
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["what time", "what kind of", "what type of", "what colour"].map(
                (v) => (
                  <span
                    key={v}
                    className="font-mono text-sm border border-line px-2 py-1"
                  >
                    {v}
                  </span>
                ),
              )}
            </div>
            <ExampleList
              examples={[
                {
                  en: "What time does the store close?",
                  az: "Mağaza saat neçədə bağlanır?",
                },
                {
                  en: "What kind of feedback did the client give?",
                  az: "Müştəri hansı növ rəy verdi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.2.5</span>
              <h3 className="font-display text-xl text-foreground">
                Sözönünün yeri: qeyri-rəsmi sonda, rəsmi əvvəldə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              7.4-dəki sabit sözönü fellərlə sual qurarkən, sözönü{" "}
              <strong>qeyri-rəsmi</strong> danışıqda cümlənin sonuna keçir.{" "}
              <strong>Rəsmi</strong> yazıda isə sual sözü ilə birgə əvvələ
              aparıla bilər (yalnız "who" "whom" olur).
            </p>
            <ExampleList
              examples={[
                {
                  en: "Who did you talk to about this? (qeyri-rəsmi, təbii)",
                  az: "Bu barədə kiminlə danışdın?",
                },
                {
                  en: "To whom did you address the complaint? (rəsmi)",
                  az: "Şikayəti kimə ünvanladın?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.2.6</span>
              <h3 className="font-display text-xl text-foreground">
                İstisna: frazal fellərdə particle heç vaxt köçmür
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              7.6/7.7-dəki frazal fellərlə (get up, set out) sual qurarkən,
              particle felin yanında qalır, sözönü kimi köçmür.
            </p>
            <ExampleList
              examples={[
                {
                  en: "What time did you get up this morning? (✗ Up what time did you get?)",
                  az: "Bu səhər saat neçədə oyandın?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.2.7</span>
              <h3 className="font-display text-xl text-foreground">
                Ən çox rast gəlinən səhv: "How to...?" tam sual deyil
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>How to + fel</em> tək başına sual deyil — bu, başlıq/ təlimat
              ifadəsidir ("How to Cook Rice" bir kitab başlığıdır). Real sual
              üçün subyekt və köməkçi fel mütləq lazımdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "How do I reset my password? (✗ How to reset my password?)",
                  az: "Şifrəmi necə sıfırlaya bilərəm?",
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
            Azərbaycan dilində "nə" sözü həm açıq, həm məhdud sual üçün
            universal işlənə bilir ("nə istəyirsən" və "bu ikisindən nəyi
            istəyirsən" — hər ikisində "nə"). İngilis dilində isə bu fərq
            (what/which) leksik olaraq ayrılır — 8.2.1-dəki bu ayrım Azərbaycan
            dilində olmayan yeni bir qərar nöqtəsidir.
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
                wrong:
                  "What of these two options do you prefer? (məhdud seçim üçün what səhvdir)",
                right: "Which of these two options do you prefer?",
                az: "Bu iki seçimdən hansını üstün tutursan?",
              },
              {
                wrong: "How to fix this bug?",
                right: "How do I fix this bug?",
                az: "Bu xətanı necə düzəldə bilərəm?",
              },
              {
                wrong: "What time you woke up?",
                right: "What time did you wake up?",
                az: "Saat neçədə oyandın?",
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
          title="Məşq 1 — Uyğun sual sözünü seç"
          items={[
            {
              prompt: "___ jacket is this — yours or mine? (məhdud, iki seçim)",
              answer: "Which jacket is this — yours or mine?",
              translation: "Bu hansı gödəkçədir — sənin, yoxsa mənim?",
            },
            {
              prompt: "___ does this project usually take to complete?",
              answer: "How long does this project usually take to complete?",
              translation: "Bu layihə adətən nə qədər vaxt aparır?",
            },
            {
              prompt: "___ car is parked outside?",
              answer: "Whose car is parked outside?",
              translation: "Bayırda dayanan maşın kimindir?",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "How to solve this problem?",
              answer: "How do I solve this problem?",
              translation: "Bu problemi necə həll edə bilərəm?",
            },
            {
              prompt: "What of the two designs looks better?",
              answer: "Which of the two designs looks better?",
              translation: "İki dizaynın hansı daha yaxşı görünür?",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
