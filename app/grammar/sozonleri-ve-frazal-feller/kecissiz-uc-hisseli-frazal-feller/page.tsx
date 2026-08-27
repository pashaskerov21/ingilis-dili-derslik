import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sozonleri-ve-frazal-feller",
  "kecissiz-uc-hisseli-frazal-feller",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sozonleri-ve-frazal-feller"
      sectionSlug="kecissiz-uc-hisseli-frazal-feller"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Fəslin son bölməsi iki fərqli, lakin əlaqəli mövzunu əhatə edir:{" "}
          <strong>keçişsiz</strong> frazal fellər (obyekt tələb etmir) və{" "}
          <strong>üç hissəli</strong> frazal fellər (fel + iki particle) — hər
          ikisi öz-özlüyündə "ayrılma" məsələsini fərqli şəkildə həll edir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.8.1</span>
              <h3 className="font-display text-xl text-foreground">
                Keçişsiz frazal fellər: obyekt yoxdur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu fellər heç bir obyekt tələb etmir, ona görə "ayrılma" sualı
              ümumiyyətlə keçərli deyil — sadəcə birlikdə işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The fire alarm went off in the middle of the night.",
                  az: "Yanğın həyəcan siqnalı gecə yarısı çaldı.",
                },
                {
                  en: "Our new marketing strategy really worked out.",
                  az: "Yeni marketinq strategiyamız həqiqətən uğurlu oldu.",
                },
                {
                  en: "The old printer finally broke down.",
                  az: "Köhnə printer nəhayət sıradan çıxdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.8.2</span>
              <h3 className="font-display text-xl text-foreground">
                Diqqət: eyni forma həm keçişli, həm keçişsiz ola bilər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bir çox frazal fel mənasından asılı olaraq həm obyektsiz
              (keçişsiz), həm obyektlə (keçişli, adətən ayrıla bilən) işlənə
              bilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The plane took off on time. (keçişsiz — obyektsiz)",
                  az: "Təyyarə vaxtında havaya qalxdı.",
                },
                {
                  en: "She took off her jacket before the meeting. (keçişli, ayrıla bilən)",
                  az: "O, iclasdan əvvəl gödəkçəsini çıxardı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.8.3</span>
              <h3 className="font-display text-xl text-foreground">
                Üç hissəli frazal fellər: fel + zərf + sözönü
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu qrupda iki particle var — birincisi zərf, ikincisi sözönü.
              Sözönü öz obyektindən heç vaxt ayrıla bilmədiyi üçün (bax: 7.7.3),
              bu fellər <strong>həmişə tam ayrılmaz</strong> — həm isim, həm
              əvəzliklə.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "look forward to",
                "put up with",
                "come up with",
                "get along with",
                "look up to",
                "get away with",
                "catch up with",
                "cut down on",
                "face up to",
              ].map((v) => (
                <span
                  key={v}
                  className="font-mono text-sm border border-line px-2 py-1"
                >
                  {v}
                </span>
              ))}
            </div>
            <ExampleList
              examples={[
                {
                  en: "I'm really looking forward to the launch next week.",
                  az: "Növbəti həftəki buraxılışı səbirsizliklə gözləyirəm.",
                },
                {
                  en: "We can't put up with these delays much longer.",
                  az: "Biz bu gecikmələrə daha çox dözə bilmərik.",
                },
                {
                  en: "She came up with a clever solution during the call.",
                  az: "O, zəng zamanı ağıllı bir həll təklif etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.8.4</span>
              <h3 className="font-display text-xl text-foreground">
                Əvəzliklə: hər zaman sonda
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              7.7.2-dəki qaydanın davamı — əvəzlik bu üç hissəli fellərdə də{" "}
              <strong>həmişə ən sonda</strong> gəlir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I'm looking forward to it. (✗ looking it forward to)",
                  az: "Onu səbirsizliklə gözləyirəm.",
                },
                {
                  en: "We finally caught up with them after the delay.",
                  az: "Gecikmədən sonra nəhayət onlara çatdıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.8.5</span>
              <h3 className="font-display text-xl text-foreground">
                Fel gəlirsə: gerund, 7.4.5-in xatırladılması
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Son söz sözönü olduğu üçün (to, with, on), ondan sonra fel
              gələrsə, mütləq -ing formasında olmalıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I'm looking forward to meeting the new team. (✗ to meet)",
                  az: "Yeni komanda ilə tanış olmağı səbirsizliklə gözləyirəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.8.6</span>
              <h3 className="font-display text-xl text-foreground">
                Registr: qeyri-rəsmi, tez-tez tam məcazi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu strukturların böyük əksəriyyəti tərkib hissələrindən tamamilə
              fərqli, məcazi məna daşıyır və gündəlik danışıqda çox işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He always manages to get away with being late.",
                  az: "O, həmişə gec qalmasına baxmayaraq cəzasız qurtulur.",
                },
                {
                  en: "We need to cut down on unnecessary meetings.",
                  az: "Lazımsız iclasları azaltmalıyıq.",
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
            Üç hissəli frazal fellər Azərbaycan dilində birbaşa paraleli
            olmayan, tamamilə ingilis dilinə xas bir strukturdur. Ən yaxın
            konseptual paralel — bir fikri ifadə etmək üçün bir neçə sözün
            birləşərək yeni məna yaratması — Azərbaycan dilində tamamilə fərqli,
            tək sözlə (çox vaxt fars/ərəb kökənli) ifadə olunur, bu da bu
            strukturların Azərbaycan dilli öyrənən üçün ən çətin frazal fel
            qrupu olmasının səbəbidir.
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
                wrong: "I'm looking forward to see you.",
                right: "I'm looking forward to seeing you.",
                az: "Səni görməyi səbirsizliklə gözləyirəm.",
              },
              {
                wrong: "We can't put up it with anymore.",
                right: "We can't put up with it anymore.",
                az: "Buna daha dözə bilmirik.",
              },
              {
                wrong: "The meeting worked well out.",
                right: "The meeting worked out well.",
                az: "İclas yaxşı keçdi.",
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
          title="Məşq 1 — Düzgün formanı qur"
          items={[
            {
              prompt: "I'm looking forward ___ (meet) you next week.",
              answer: "I'm looking forward to meeting you next week.",
              translation:
                "Səni növbəti həftə görməyi səbirsizliklə gözləyirəm.",
            },
            {
              prompt: "The plan ___ (fail — intransitive)",
              answer: "The plan fell through.",
              translation: "Plan pozuldu.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "We are looking forward it to.",
              answer: "We are looking forward to it.",
              translation: "Onu səbirsizliklə gözləyirik.",
            },
            {
              prompt: "She came up an idea with quickly.",
              answer: "She came up with an idea quickly.",
              translation: "O, tez bir fikir təklif etdi.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
