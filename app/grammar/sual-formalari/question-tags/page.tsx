import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sual-formalari",
  "question-tags",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="sual-formalari" sectionSlug="question-tags">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Question tag — cümlənin sonuna əlavə olunan kiçik bir sual ("...,
          isn't it?") — razılıq axtarmaq və ya təsdiq istəmək üçün işlədilir.
          Formulası sadədir, amma bir neçə əzbər tələb edən istisna var.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.5.1</span>
              <h3 className="font-display text-xl text-foreground">
                Qızıl qayda: müsbət → mənfi, mənfi → müsbət
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The report is ready, isn't it? (müsbət + mənfi tag)",
                  az: "Hesabat hazırdır, elə deyilmi?",
                },
                {
                  en: "You haven't finished yet, have you? (mənfi + müsbət tag)",
                  az: "Sən hələ bitirməmisən, elə deyilmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.5.2</span>
              <h3 className="font-display text-xl text-foreground">
                Tag cümlədəki EYNİ köməkçi/modal feli təkrarlayır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Köməkçi fel/modal yoxdursa (Present/Past Simple), 1.2.4-dəki
              do-support qaydası tag üçün də tətbiq olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "They've already left, haven't they?",
                  az: "Onlar artıq getdi, elə deyilmi?",
                },
                {
                  en: "She can join the call, can't she?",
                  az: "O, zəngə qoşula bilər, elə deyilmi?",
                },
                {
                  en: "You work here, don't you? (köməkçi yoxdur → do)",
                  az: "Sən burda işləyirsən, elə deyilmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.5.3</span>
              <h3 className="font-display text-xl text-foreground">
                İstisna: "I am" → "aren't I?"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Məntiqi olaraq "am I not" gözlənilsə də (amn't standart deyil),
              qəbul edilən forma <strong>aren't I</strong>-dir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I'm invited too, aren't I?",
                  az: "Mən də dəvətliyəm, elə deyilmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.5.4</span>
              <h3 className="font-display text-xl text-foreground">
                Tag həmişə əvəzliklə: this/that → it, subyektə uyğunlaşır
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "This solution works well, doesn't it? (this → it)",
                  az: "Bu həll yaxşı işləyir, elə deyilmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.5.5</span>
              <h3 className="font-display text-xl text-foreground">
                Gizli mənfi sözlər: müsbət tag tələb edir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Cümlə qrammatik olaraq müsbət görünsə də, tərkibində
              <em> never, hardly, no one, nothing, nobody</em> kimi mənfi mənalı
              sözlər varsa, məntiqi cəhətdən mənfi sayılır — tag
              <strong> müsbət</strong> olmalıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She hardly ever complains, does she?",
                  az: "O, demək olar heç şikayət etmir, elə deyilmi?",
                },
                {
                  en: "Nobody called about the invoice, did they?",
                  az: "Faktura barədə heç kim zəng etmədi, elə deyilmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.5.6</span>
              <h3 className="font-display text-xl text-foreground">
                Qeyri-müəyyən əvəzlik subyektlərlə: "they"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              3.1.5/3.7.4-dəki gender-neutral "they" qaydası burada da işləyir —
              somebody/everyone/no one kimi subyektlərlə tag həmişə "they".
            </p>
            <ExampleList
              examples={[
                {
                  en: "Someone left their badge here, didn't they?",
                  az: "Kimsə vəsiqəsini burda unudub, elə deyilmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.5.7</span>
              <h3 className="font-display text-xl text-foreground">
                Əmr cümlələri ilə (1.5-in davamı)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Müsbət əmrdən sonra <em>will you/won't you/can you/could you</em>{" "}
              istənilən birini işlətmək olar. Mənfi əmrdən sonra isə yalnız{" "}
              <strong>will you</strong>.
            </p>
            <ExampleList
              examples={[
                { en: "Close the door, will you?", az: "Qapını bağla, olar?" },
                {
                  en: "Don't be late, will you? (✗ won't you)",
                  az: "Gecikmə, olar?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.5.8</span>
              <h3 className="font-display text-xl text-foreground">
                İntonasiya: enən — təsdiq, qalxan — əsl sual
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Eyni tag iki fərqli funksiya daşıya bilər — səsin{" "}
              <strong>enməsi</strong> "artıq cavabı bilirəm, sadəcə təsdiq
              istəyirəm" mənasını, <strong>qalxması</strong> isə "həqiqətən əmin
              deyiləm, məlumat istəyirəm" mənasını verir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "You've finished the report, haven't you? (enən — əminəm)",
                  az: "Hesabatı bitirmisən, elə deyilmi?",
                },
                {
                  en: "You've finished the report, haven't you? (qalxan — əmin deyiləm)",
                  az: "Hesabatı bitirmisən, elə deyilmi?",
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
            Azərbaycan dilində "elə deyilmi?", "hə?" kimi universal, dəyişməz
            ifadələr eyni funksiyanı yerinə yetirir — heç bir qrammatik
            uyğunlaşma (fel, əvəzlik, polaritə) tələb olunmur. İngilis dilində
            isə tag hər dəfə cümlənin öz köməkçi feli, əvəzliyi və əks
            polaritəsi ilə <strong>yenidən qurulmalıdır</strong> — bu,
            Azərbaycan dilli öyrənən üçün ən çox diqqət tələb edən "kiçik, amma
            tələbkar" qrammatik quruluşlardan biridir.
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
                wrong: "You're tired, don't you?",
                right: "You're tired, aren't you?",
                az: "Sən yorğunsan, elə deyilmi?",
              },
              {
                wrong: "She doesn't like coffee, doesn't she?",
                right: "She doesn't like coffee, does she?",
                az: "O, qəhvəni sevmir, elə deyilmi?",
              },
              {
                wrong: "He can swim, can he?",
                right: "He can swim, can't he?",
                az: "O, üzə bilir, elə deyilmi?",
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
          title="Məşq 1 — Uyğun tag-i yaz"
          items={[
            {
              prompt: "You've read the email, ___?",
              answer: "You've read the email, haven't you?",
              translation: "Sən emaili oxumusan, elə deyilmi?",
            },
            {
              prompt: "I'm right about this, ___?",
              answer: "I'm right about this, aren't I?",
              translation: "Bu barədə haqlıyam, elə deyilmi?",
            },
            {
              prompt: "Nobody answered the phone, ___?",
              answer: "Nobody answered the phone, did they?",
              translation: "Heç kim telefona cavab vermədi, elə deyilmi?",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "They will attend the meeting, will they?",
              answer: "They will attend the meeting, won't they?",
              translation: "Onlar iclasda iştirak edəcək, elə deyilmi?",
            },
            {
              prompt: "She hardly ever calls, doesn't she?",
              answer: "She hardly ever calls, does she?",
              translation: "O, demək olar heç zəng etmir, elə deyilmi?",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
