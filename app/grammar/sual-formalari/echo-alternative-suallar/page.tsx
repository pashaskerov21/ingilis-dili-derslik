import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sual-formalari",
  "echo-alternative-suallar",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sual-formalari"
      sectionSlug="echo-alternative-suallar"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Fəslin son bölməsi iki xüsusi sual növünü əhatə edir — hər ikisi
          indiyə qədər öyrəndiyin standart inversiya qaydalarından{" "}
          <strong>fərqli</strong> davranır və gündəlik danışıqda çox işlənir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.7.1</span>
              <h3 className="font-display text-xl text-foreground">
                Echo sualı: söz sırası DƏYİŞMİR
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Eşitdiyini təsdiqləmək və ya aydınlaşdırmaq üçün, natamam/
              gözlənilməz hissəni sual sözü ilə əvəz edərək{" "}
              <strong>eyni söz sırasında</strong> təkrarlayırsan — heç bir
              inversiya baş vermir, sual sözü öz yerində qalır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "A: I'm relocating to Berlin. B: You're relocating WHERE? (✗ Where are you relocating?)",
                  az: "A: Berlinə köçürəm. B: Sən HARAYA köçürsən?",
                },
                {
                  en: "A: She quit her job yesterday. B: She did WHAT?",
                  az: "A: O, dünən işdən çıxdı. B: O NƏ ETDİ?",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Qalxan intonasiya ilə tələffüz olunur — ya eşitmədiyini, ya da
              təəccübünü bildirir.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.7.2</span>
              <h3 className="font-display text-xl text-foreground">
                Echo sualı — bəli/xeyr formasında da mümkündür
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bütöv cümləni, dəyişiklik etmədən, sadəcə qalxan intonasiya ilə
              təkrarlamaqla da echo sualı yaratmaq olar.
            </p>
            <ExampleList
              examples={[
                {
                  en: "A: We lost the client. B: We lost the client? (təəccüb)",
                  az: "A: Müştərini itirdik. B: Müştərini itirdik?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.7.3</span>
              <h3 className="font-display text-xl text-foreground">
                Alternativ suallar: standart formada, "or" ilə seçim
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu suallar 8.1-dəki standart inversiya qaydasını izləyir, amma
              bəli/xeyr əvəzinə <strong>iki və ya daha çox seçim</strong>{" "}
              arasından cavab tələb edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Would you prefer tea or coffee?",
                  az: "Çay, yoxsa qəhvə istərdin?",
                },
                {
                  en: "Are we meeting on Monday or Tuesday?",
                  az: "Bazar ertəsi, yoxsa çərşənbə axşamı görüşürük?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.7.4</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik fərq: intonasiya mənanı dəyişir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Eyni "or" cümləsi iki tamam fərqli sual növü ola bilər — fərqi{" "}
              <strong>intonasiya</strong> müəyyən edir. Alternativ sualda
              birinci seçimdə səs qalxır, sonuncuda enir (seçim tələb olunur).
              Sadə bəli/xeyr sualında bütöv cümlə boyu səs yalnız sonda qalxır
              (bütöv təklifə "bəli/xeyr" cavabı gözlənilir).
            </p>
            <ExampleList
              examples={[
                {
                  en: "Do you want tea or coffee? (↗ tea, ↘ coffee — alternativ, seçim tələb olunur)",
                  az: "Çay, yoxsa qəhvə istəyirsən? (seçim et)",
                },
                {
                  en: "Do you want tea or coffee? (↗ bütöv cümlə sonunda — bəli/xeyr, 'istənilən biri' mənasında)",
                  az: "Çay ya da qəhvə (fərqi yoxdur, hər hansı) istəyirsən?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.7.5</span>
              <h3 className="font-display text-xl text-foreground">
                Bonus: Statement suallar (declarative questions)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Adi təsdiq cümləsi, sadəcə qalxan intonasiya ilə, sual kimi
              işlədilə bilər — inversiya heç lazım deyil. Bu, çox danışıq
              formalı, gündəlik bir üsuldur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "You're coming to the launch party? (adi cümlə, sual intonasiyası ilə)",
                  az: "Buraxılış məclisinə gəlirsən?",
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
            Echo sualında söz sırasının dəyişməməsi Azərbaycan dilli öyrənən
            üçün əslində rahatlıqdır — çünki bu, indiyə qədər 8.1-8.3-də
            öyrəndiyimiz "hər sualda inversiya lazımdır" refleksinin{" "}
            <strong>istisnasıdır</strong> və Azərbaycan dilindəki sabit söz
            sırası məntiqinə daha yaxındır. Əsl çətinlik 8.7.4-dəki intonasiya
            fərqidir — Azərbaycan dilində bu qədər incə intonasiya fərqi ilə
            məna dəyişməsi bu qədər sistemli deyil.
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
                  "Where are you moving? (echo sualı kimi nəzərdə tutulub, amma standart inversiya işlədilib)",
                right: "You're moving where?",
                az: "Sən haraya köçürsən? (echo — təəccüb/aydınlaşdırma)",
              },
              {
                wrong: "Prefer you tea or coffee?",
                right: "Do you prefer tea or coffee?",
                az: "Çay, yoxsa qəhvə üstün tutursan?",
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
          title="Məşq 1 — Echo sualı qur"
          items={[
            {
              prompt: "A: I'm quitting my job. B: (təəccüb, echo sualı)",
              answer: "You're quitting WHAT?",
              translation: "Sən NƏDƏN çıxırsan?",
            },
            {
              prompt: "A: The meeting is at midnight. B: (echo sualı)",
              answer: "The meeting is WHEN?",
              translation: "İclas NƏ VAXTDIR?",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Alternativ sual qur"
          items={[
            {
              prompt: "(seçim: bu gün / sabah görüşmək)",
              answer: "Shall we meet today or tomorrow?",
              translation: "Bu gün, yoxsa sabah görüşək?",
            },
            {
              prompt: "(seçim: qırmızı / mavi rəngi seçmək)",
              answer: "Would you like the red one or the blue one?",
              translation: "Qırmızını, yoxsa mavisini istərdin?",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
