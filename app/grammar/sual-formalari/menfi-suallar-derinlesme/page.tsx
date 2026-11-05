import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sual-formalari",
  "menfi-suallar-derinlesme",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sual-formalari"
      sectionSlug="menfi-suallar-derinlesme"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Mənfi sualın forması (1.2, 5.4-də tanış olduğun) sadədir — bu bölmə
          isə formaya deyil, <strong>funksiyaya</strong> fokuslanır. Mənfi sual
          heç vaxt sadəcə "inkar sual" demək deyil — o, danışanın{" "}
          <strong>gözləntisini, təəccübünü və ya təklifini</strong> daşıyan
          güclü bir vasitədir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.6.1</span>
              <h3 className="font-display text-xl text-foreground">
                Qısaldılmış və tam forma: fərqli söz sırası
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Qısaldılmış formada (gündəlik) "n't" köməkçi felə bitişik
              subyektdən əvvəl gəlir. Tam formada (rəsmi) "not" subyektdən{" "}
              <strong>sonra</strong> gəlir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Isn't he coming to the meeting? (qısaldılmış, təbii)",
                  az: "O, iclasa gəlmirmi?",
                },
                {
                  en: "Is he not coming to the meeting? (tam, rəsmi)",
                  az: "O, iclasa gəlmirmi? (rəsmi)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.6.2</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 1 — Gözlənti/təsdiq axtarışı
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Danışan artıq bir şeyin doğru olduğuna inanır və dinləyicidən{" "}
              <strong>təsdiq</strong> gözləyir — bu, question tag-lərlə (8.5)
              eyni psixoloji funksiyanı daşıyır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Isn't this the report you were waiting for?",
                  az: "Bu, sənin gözlədiyin hesabat deyilmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.6.3</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 2 — Təəccüb: gözlənilən şey baş vermədi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Danışan bir şeyin baş verməli olduğunu düşünürdü, amma bu baş
              verməyib — mənfi sual bu ziddiyyətə təəccübü ifadə edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Didn't you get my email? I sent it yesterday.",
                  az: "Emailimi almadın? Dünən göndərmişdim.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.6.4</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 3 — Yumşaldılmış təklif: "Why don't we...?"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Mənfi sual quruluşu birbaşa təklifdən daha{" "}
              <strong>yumşaq, dolayı</strong> bir tövsiyə forması yaradır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Why don't we schedule a follow-up call next week?",
                  az: "Növbəti həftə izləmə zəngi planlaşdırsaq necə olar?",
                },
                {
                  en: "Wouldn't it be easier to automate this process?",
                  az: "Bu prosesi avtomatlaşdırmaq daha asan olmazmı?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.6.5</span>
              <h3 className="font-display text-xl text-foreground">
                "Why" + mənfi + tənqid
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Why</em> ilə birgə mənfi struktur çox vaxt yumşaq{" "}
              <strong>tənqid/məzəmmət</strong> bildirir — "niyə bunu etmirsən"
              sualı çox vaxt "bunu etməli idin" mesajını daşıyır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Why didn't you tell me about the delay earlier?",
                  az: "Gecikmə barədə mənə niyə daha tez demədin?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.6.6</span>
              <h3 className="font-display text-xl text-foreground">
                Ən kritik qayda: cavab HƏMİŞƏ FAKTA görə, sualın forması yox
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ingilis dilinin ən çox səhv salınan xüsusiyyətlərindən biridir
              — bir çox dildən fərqli olaraq, <strong>"yes"</strong> həmişə{" "}
              <strong>müsbət faktı</strong>, <strong>"no"</strong> həmişə{" "}
              <strong>mənfi faktı</strong> təsdiqləyir — sualın özünün mənfi
              olması bunu dəyişmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Didn't you finish the report? — Yes, I did. (hesabatı BİTİRDİ)",
                  az: "Hesabatı bitirmədin? — Xeyr, bitirdim. (Azərbaycan dilində 'xeyr' olardı, amma ingiliscə 'yes')",
                },
                {
                  en: "Didn't you finish the report? — No, I didn't. (hesabatı BİTİRMƏDİ)",
                  az: "Hesabatı bitirmədin? — Bəli, bitirmədim.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ Bu, Azərbaycan dilindən tərs işləyir — Azərbaycan dilində
              "bitirmədin?" sualına "bitirdim" cavabı üçün "xeyr" (sualı inkar
              edirsən) deyilir, ingilis dilində isə "yes" (faktın özü müsbətdir)
              deyilir.
            </p>
          </div>
        </section>

        {/* ---------- MÜQAYİSƏ QUTUSU ---------- */}
        <aside className="border-l-2 border-accent bg-accent/5 p-5 space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Azərbaycan dili ilə struktur fərqi
          </h4>
          <p className="text-foreground leading-relaxed">
            8.6.6-da göstərilən "yes/no faktın özünə görə" qaydası, əslində
            bütün bu bölmənin ən vacib məqamıdır — bu, sadəcə qrammatik forma
            fərqi deyil, <strong>məntiqi cavablandırma sistemi</strong>{" "}
            fərqidir. Azərbaycan dilində (bir çox dil kimi) cavab sualın öz
            formasına "razılıq/etiraz" bildirir, ingilis dilində isə cavab
            birbaşa faktın özünə aiddir — bu, tərcümə zamanı ən çox
            anlaşılmazlıq yaradan nöqtədir.
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
                  "Didn't you see the email? — No, I saw it. (fakt müsbətdir, 'yes' olmalıdır)",
                right: "Didn't you see the email? — Yes, I saw it.",
                az: "Emaili görmədin? — Xeyr, gördüm.",
              },
              {
                wrong: "Is he not coming? — No, he is coming. (fakt müsbətdir)",
                right: "Is he not coming? — Yes, he is coming.",
                az: "O, gəlmir? — Xeyr, gəlir.",
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
          title="Məşq 1 — Düzgün cavabı seç"
          items={[
            {
              prompt: "Aren't you tired? (yorğunsan, fakt: bəli) — ___",
              answer: "Aren't you tired? — Yes, I am.",
              translation: "Yorğun deyilsən? — Bəli, yorğunam.",
            },
            {
              prompt:
                "Didn't she call you back? (fakt: yox, zəng etmədi) — ___",
              answer: "Didn't she call you back? — No, she didn't.",
              translation: "O, sənə geri zəng etmədi? — Xeyr, etmədi.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Funksiyanı müəyyən et və tərcümə et"
          items={[
            {
              prompt: "Why don't we take a short break?",
              answer: "təklif — Bir qısa fasilə versək necə olar?",
              translation: "Bir qısa fasilə versək necə olar?",
            },
            {
              prompt: "Didn't I tell you this would happen?",
              answer:
                "gözlənti/təsdiq — Sənə bunun baş verəcəyini deməmişdimmi?",
              translation: "Sənə bunun baş verəcəyini deməmişdimmi?",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
