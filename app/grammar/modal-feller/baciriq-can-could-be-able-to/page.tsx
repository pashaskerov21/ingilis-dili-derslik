import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "modal-feller",
  "baciriq-can-could-be-able-to",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="modal-feller"
      sectionSlug="baciriq-can-could-be-able-to"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu üç forma eyni mənanı — bacarıq, qabiliyyət — bildirsə də, hər
          birinin öz qrammatik <strong>məhdudiyyəti</strong> var. Əsas çətinlik
          budur: <em>can/could</em> yalnız iki zamanda mövcuddur
          (indiki/keçmiş), digər bütün formalarda (gələcək, perfekt, infinitiv)
          məcburən <em>be able to</em>-yə keçmək lazımdır.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.1.1</span>
              <h3 className="font-display text-xl text-foreground">
                Can — indiki/ümumi bacarıq
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "She can debug complex issues quickly.",
                  az: "O, mürəkkəb problemləri tez debug edə bilir.",
                },
                {
                  en: "I can't attend the call tomorrow.",
                  az: "Sabahkı zəngdə iştirak edə bilmirəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.1.2</span>
              <h3 className="font-display text-xl text-foreground">
                Could — keçmiş, ÜMUMİ bacarıq
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Keçmişdə uzun müddət mövcud olmuş, ümumi bir bacarığı bildirir
              (bir dəfəlik nailiyyət deyil).
            </p>
            <ExampleList
              examples={[
                {
                  en: "By the age of ten, she could already write basic scripts.",
                  az: "On yaşında o, artıq sadə skriptlər yaza bilirdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.1.3</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik fərq: "could" (ümumi) vs "was/were able to" (konkret
                nailiyyət)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ən çox səhv edilən qaydadır. Keçmişdə{" "}
              <strong>bir dəfəlik, konkret bir uğur</strong> haqqında danışarkən
              — "cəhd etdim və bacardım" mənasında — Təsdiq cümləsində{" "}
              <em>could</em> YOX, <em>was/were able to</em> işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She could speak three languages fluently. (ümumi bacarıq)",
                  az: "O, üç dildə səlis danışa bilirdi.",
                },
                {
                  en: "We were able to fix the bug just before the release. (bir dəfəlik nailiyyət)",
                  az: "Biz xətanı buraxılışdan dərhal əvvəl düzəldə bildik.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ Bu fərq YALNIZ təsdiq cümləsində keçərlidir — inkarda hər ikisi
              (couldn't / wasn't able to) sərbəst əvəz oluna bilər.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.1.4</span>
              <h3 className="font-display text-xl text-foreground">
                Be able to — bütün zamanlarda, can/could-un boşluğunu doldurur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Can</em>-in gələcək, perfekt və infinitiv forması{" "}
              <strong>mövcud deyil</strong> — bu boşluqlarda <em>be able to</em>{" "}
              məcburidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "You will be able to access the dashboard after verification. (✗ you will can access)",
                  az: "Doğrulamadan sonra panelə giriş əldə edə biləcəksən.",
                },
                {
                  en: "I have finally been able to reproduce the bug. (Present Perfect)",
                  az: "Nəhayət xətanı təkrar edə bildim.",
                },
                {
                  en: "I'd love to be able to work remotely full-time. (infinitiv)",
                  az: "Tam ştat uzaqdan işləyə bilmək istərdim.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.1.5</span>
              <h3 className="font-display text-xl text-foreground">
                İki modal fel yan-yana işlənmir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Modal fellər (bax: 5.9-a qədər hamısı) bir-birinin ardınca birbaşa
              gələ bilməz. Başqa bir modal felin yanında bacarıq ifadə etmək
              lazım olduqda, <em>can/could</em> əvəzinə <em>be able to</em>{" "}
              işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "You should be able to resolve this on your own. (✗ should can)",
                  az: "Sən bunu özün həll edə bilməlisən.",
                },
                {
                  en: "She might be able to join the call later.",
                  az: "O, ola bilsin zəngə sonra qoşula bilər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.1.6</span>
              <h3 className="font-display text-xl text-foreground">
                Registr qeydi: "be able to" bir qədər daha rəsmidir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İndiki zamanda, hər iki forma (can/is able to) demək olar eyni
              mənanı versə də, <em>be able to</em> bir az daha rəsmi, yazılı
              üslub üçün uyğun səslənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I can help with that. (gündəlik)",
                  az: "Buna kömək edə bilərəm.",
                },
                {
                  en: "I am able to provide the documentation you requested. (rəsmi)",
                  az: "Tələb etdiyin sənədləşməni təqdim edə bilərəm.",
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
            Azərbaycan dilində "bilmək/bacarmaq" feli bütün zamanlarda sərbəst
            çəkilir (bilirəm, bildim, biləcəm, bilə bilərəm) — heç bir "boşluq"
            yoxdur. İngilis dilində isə <em>can</em>-in qrammatik cəhətdən
            "əlil" olması (yalnız iki forması olması) və bunun əvəzinə tam ayrı
            bir söz (be able to) tələb olunması, Azərbaycan dilli öyrənən üçün
            gözlənilməz bir struktur boşluğudur.
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
                wrong: "I will can finish this by Friday.",
                right: "I will be able to finish this by Friday.",
                az: "Cüməyə qədər bunu bitirə biləcəm.",
              },
              {
                wrong:
                  "She could win the competition yesterday. (bir dəfəlik nailiyyət)",
                right: "She was able to win the competition yesterday.",
                az: "O, dünən yarışı qazana bildi.",
              },
              {
                wrong: "He should can handle this alone.",
                right: "He should be able to handle this alone.",
                az: "O, bunun öhdəsindən tək gələ bilməlidir.",
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
          title="Məşq 1 — Uyğun formanı seç"
          items={[
            {
              prompt:
                "After months of practice, she (could/was able to) finally pass the certification exam. (bir dəfəlik nailiyyət)",
              answer:
                "After months of practice, she was able to finally pass the certification exam.",
              translation:
                "Aylarla məşqdən sonra o, nəhayət sertifikat imtahanını keçə bildi.",
            },
            {
              prompt:
                "You (must can/must be able to) explain your reasoning clearly.",
              answer: "You must be able to explain your reasoning clearly.",
              translation: "Sən öz məntiqini aydın izah edə bilməlisən.",
            },
            {
              prompt:
                "When I was a child, I (could/was able to) climb trees easily. (ümumi bacarıq)",
              answer: "When I was a child, I could climb trees easily.",
              translation: "Uşaq olanda ağaclara asanlıqla dırmaşa bilirdim.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "We will can join the meeting at 3 PM.",
              answer: "We will be able to join the meeting at 3 PM.",
              translation: "Saat 3-də iclasa qoşula biləcəyik.",
            },
            {
              prompt:
                "He could fix the printer this morning after two tries. (konkret nailiyyət)",
              answer:
                "He was able to fix the printer this morning after two tries.",
              translation:
                "O, bu səhər iki cəhddən sonra printeri düzəldə bildi.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
