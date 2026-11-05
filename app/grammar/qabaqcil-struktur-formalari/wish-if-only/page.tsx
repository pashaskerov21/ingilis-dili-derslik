import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "qabaqcil-struktur-formalari",
  "wish-if-only",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="qabaqcil-struktur-formalari"
      sectionSlug="wish-if-only"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Fəslin son bölməsi. <em>Wish/if only</em> arzu, peşmançılıq və
          narazılıq bildirir — 9.7 və 9.8-dəki Şərt Cümlələrinin **eyni
          "reallıqdan uzaqlıq" məntiqini** paylaşır, sadəcə "if" ilə deyil,
          "wish" ilə başlayır.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.6.1</span>
              <h3 className="font-display text-xl text-foreground">
                İndiki arzu: wish/if only + Past Simple
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              9.7-dəki İkinci Şərtin eyni məntiqi — indiki vəziyyət fərqli
              olmasını arzulayırsan, amma dəyişə bilmirsən.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I wish I had more time to review this properly.",
                  az: "Bunu düzgün nəzərdən keçirmək üçün daha çox vaxtım olmasını istərdim.",
                },
                {
                  en: "If only we had a bigger budget for this quarter.",
                  az: "Kaş bu rüb üçün daha böyük büdcəmiz olaydı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.6.2</span>
              <h3 className="font-display text-xl text-foreground">
                "Be" felli: rəsmi qaydada "were"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              9.7.4-dəki eyni qayda — rəsmi kontekstdə "were" bütün şəxslərlə,
              danışıqda "was" da eşidilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I wish I were more experienced in this area. (rəsmi)",
                  az: "Kaş bu sahədə daha təcrübəli olaydım.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.6.3</span>
              <h3 className="font-display text-xl text-foreground">
                Keçmiş peşmançılıq: wish/if only + Past Perfect
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              9.8-dəki Üçüncü Şərtin eyni məntiqi — keçmişdə fərqli olmasını
              istəyirdin, amma artıq dəyişdirilə bilməz.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I wish we had tested this feature more thoroughly.",
                  az: "Kaş bu funksiyanı daha hərtərəfli test edəydik.",
                },
                {
                  en: "If only she had mentioned the deadline earlier.",
                  az: "Kaş o, son tarixi daha tez qeyd edəydi.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ Ən çox səhv edilən nöqtə: keçmiş peşmançılıqda Past Simple yox,
              mütləq Past Perfect işlədilir.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.6.4</span>
              <h3 className="font-display text-xl text-foreground">
                Narazılıq/şikayət: wish/if only + would + bazafel
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Kiminsə (və ya bir şeyin) davranışını **dəyişdirmək istədiyini**,
              buna görə narazı olduğunu bildirir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I wish he would stop interrupting during meetings.",
                  az: "Kaş o, iclaslar zamanı sözümü kəsməyi dayandıraydı.",
                },
                {
                  en: "If only the system would stop crashing every hour.",
                  az: "Kaş sistem hər saat çökməyi dayandıraydı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.6.5</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik məhdudiyyət: "wish...would" özünə aid edilə bilməz
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              "Would" ilə struktur yalnız **başqasının** və ya bir
              **vəziyyətin** davranışına aiddir — öz hərəkətinlə bağlı
              işlədilmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I wish I would work harder. (✗ — özünə aid, məntiqsiz)",
                  az: "(bu, qrammatik cəhətdən yanlışdır)",
                },
                {
                  en: "I wish I worked harder. (✗ would əvəzinə sadə Past Simple, 10.6.1)",
                  az: "Kaş daha çox çalışaydım.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.6.6</span>
              <h3 className="font-display text-xl text-foreground">
                Bacarıq: wish + could (indiki) / could have (keçmiş)
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "I wish I could speak Mandarin — it would help with this client.",
                  az: "Kaş mandarin dilində danışa biləydim — bu müştəri ilə kömək edərdi.",
                },
                {
                  en: "I wish I could have attended the conference last month.",
                  az: "Kaş keçən ay konfransda iştirak edə biləydim.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.6.7</span>
              <h3 className="font-display text-xl text-foreground">
                "Wish" vs "if only": emosional intensivlik fərqi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Struktur baxımından eynidirlər, amma <em>if only</em> daha{" "}
              **güclü, dramatik** bir arzu/peşmançılıq hissi verir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I wish we had more resources. (neytral)",
                  az: "Kaş daha çox resursumuz olaydı.",
                },
                {
                  en: "If only we had more resources! (daha emosional, güclü)",
                  az: "Kaş daha çox resursumuz olaydı!",
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
            Azərbaycan dilində "kaş" sözü ilə arzu ifadə edilir, feil isə şərt
            formasında ("-saydı") qalır — bu, ingilis dilinin 10.6.1/
            10.6.3-dəki eyni "keçmiş forma = uzaqlıq" məntiqi ilə üst-üstə
            düşür. Əsl çətinlik 10.6.4/10.6.5-dəki "would" strukturudur —
            Azərbaycan dilində "kaş dayandıraydı" ilə "kaş dayanaydım" arasında
            bu qədər sərt qrammatik ayrım yoxdur, hər ikisi eyni "kaş" formasına
            düşür.
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
                  "I wish I studied harder for that exam. (keçmiş peşmançılıq — Past Perfect lazımdır)",
                right: "I wish I had studied harder for that exam.",
                az: "Kaş o imtahan üçün daha çox çalışaydım.",
              },
              {
                wrong: "I wish I would be taller. (özünə aid — would işlənmir)",
                right: "I wish I were taller.",
                az: "Kaş daha hündür olaydım.",
              },
              {
                wrong: "I wish he stops making noise. (would lazımdır)",
                right: "I wish he would stop making noise.",
                az: "Kaş səs-küy salmağı dayandıraydı.",
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
          title="Məşq 1 — Uyğun formanı yaz"
          items={[
            {
              prompt: "I wish I ___ (know) the answer right now. (indiki)",
              answer: "I wish I knew the answer right now.",
              translation: "Kaş indi cavabı biləydim.",
            },
            {
              prompt:
                "If only we ___ (back up) the files before the crash. (keçmiş)",
              answer: "If only we had backed up the files before the crash.",
              translation: "Kaş çökmədən əvvəl faylları ehtiyat nüsxələyəydik.",
            },
            {
              prompt:
                "I wish she ___ (stop) canceling meetings last minute. (narazılıq)",
              answer: "I wish she would stop canceling meetings last minute.",
              translation: "Kaş son anda iclasları ləğv etməyi dayandıraydı.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "I wish I have more free time these days.",
              answer: "I wish I had more free time these days.",
              translation: "Kaş bu günlərdə daha çox boş vaxtım olaydı.",
            },
            {
              prompt:
                "If only they contacted us sooner. (keçmiş — Past Perfect lazımdır)",
              answer: "If only they had contacted us sooner.",
              translation: "Kaş bizimlə daha tez əlaqə saxlayaydılar.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
