import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "feller-ve-zamanlar",
  "present-perfect",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="feller-ve-zamanlar" sectionSlug="present-perfect">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Present Perfect Azərbaycan dilli (və bir çox dil daşıyıcısı) üçün ən
          çətin zamanlardan biridir, çünki bu, "keçmiş" və "indi" arasında bir{" "}
          <strong>körpü</strong> qurur — hərəkət keçmişdə baş verib, amma onun{" "}
          <strong>nəticəsi və ya əlaqəsi indiyə uzanır</strong>. Konkret vaxt
          deyilmir — çünki diqqət "nə vaxt" yox, "indiki vəziyyətə necə təsir
          edir" sualındadır.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.4.1</span>
              <h3 className="font-display text-xl text-foreground">
                Forma: have/has + Past Participle (III forma)
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The team has completed the migration.",
                  az: "Komanda köçürməni tamamlayıb.",
                },
                {
                  en: "I have not reviewed the contract yet.",
                  az: "Müqaviləni hələ nəzərdən keçirməmişəm.",
                },
                {
                  en: "Has she confirmed her attendance?",
                  az: "O, iştirakını təsdiqləyibmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.4.2</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 1 — Yeni xəbər, indiki nəticəyə malik hadisə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Nə vaxt baş verdiyi vacib deyil — vacib olan bunun{" "}
              <strong>indiki nəticəsidir</strong>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The server has crashed. (nəticə: hazırda işləmir)",
                  az: "Server çökdü. (indi işləmir)",
                },
                {
                  en: "She has broken her laptop screen.",
                  az: "O, noutbukunun ekranını sındırıb. (indi zədəlidir)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.4.3</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 2 — Həyat təcrübəsi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Şəxsin həyatı boyu (indiyə qədər) baş vermiş, konkret vaxtı önəmli
              olmayan təcrübə. <em>Ever/never</em> ilə tez-tez birgə işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Have you ever worked with a remote team before?",
                  az: "Heç uzaqdan işləyən komanda ilə işləmisən?",
                },
                {
                  en: "I have never used this software.",
                  az: "Mən bu proqramı heç işlətməmişəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.4.4</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 3 — Hələ bitməmiş zaman dövrü
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              "Today, this week, this month, this year, so far" kimi hələ{" "}
              <strong>bitməmiş</strong> zaman ifadələri ilə — çünki dövr hələ
              davam edir, içindəki hər hadisə "indiyə qədər" mənasında oxunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We haven't received any complaints today.",
                  az: "Bu gün heç bir şikayət almamışıq.",
                },
                {
                  en: "I've already sent three follow-up emails this week.",
                  az: "Bu həftə artıq üç izləmə emaili göndərmişəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.4.5</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 4 — Keçmişdən indiyə davam edən vəziyyət: for/since
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Başlanğıcı keçmişdə olan, amma HƏLƏ DƏ davam edən vəziyyət üçün.{" "}
              <strong>For</strong> — müddət ("neçə vaxtdır"),{" "}
              <strong>since</strong> — başlanğıc nöqtəsi ("nə vaxtdan bəri").
            </p>
            <ExampleList
              examples={[
                {
                  en: "I have worked here for five years. (hələ də işləyirəm)",
                  az: "Mən burada beş ildir işləyirəm.",
                },
                {
                  en: "She has known the CEO since college.",
                  az: "O, İcraçı Direktoru kollecdən bəri tanıyır.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "Since"-dən sonra heç vaxt Present Simple/Continuous işlədilmir:
              "They know each other since January" — səhvdir, "have known"
              olmalıdır.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.4.6</span>
              <h3 className="font-display text-xl text-foreground">
                Just / already / yet / still — mövqe və məna
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>Just</strong> (bir az əvvəl) — have/has ilə fel arasında.{" "}
              <strong>Already</strong> (artıq, gözlənilmədən tez) — adətən eyni
              mövqedə, təsdiqdə. <strong>Yet</strong> (hələ, indiyə qədər) —
              cümlə sonunda, yalnız inkar/sualda.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I've just finished the quarterly review.",
                  az: "Rüblük baxışı bir az əvvəl bitirdim.",
                },
                {
                  en: "We've already discussed this in the last meeting.",
                  az: "Bunu son iclasda artıq müzakirə etmişik.",
                },
                {
                  en: "Haven't they replied yet?",
                  az: "Onlar hələ cavab verməyiblər?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.4.7</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik fərq: "been" və "gone"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>Has/have been to</strong> — getdi VƏ geri qayıtdı
              (təcrübə). <strong>Has/have gone to</strong> — getdi və hələ
              orada, geri qayıtmayıb.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She has been to Istanbul three times. (qayıdıb, təcrübə)",
                  az: "O, İstanbula üç dəfə gedib (və qayıdıb).",
                },
                {
                  en: "She has gone to Istanbul for a conference. (hazırda ordadır)",
                  az: "O, konfrans üçün İstanbula gedib (hazırda ordadır).",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.4.8</span>
              <h3 className="font-display text-xl text-foreground">
                Ən vacib məhdudiyyət: konkret, bitmiş vaxtla işlənmir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Present Perfect <strong>heç vaxt</strong> "yesterday, last week,
              in 2020, at 5 PM" kimi konkret, bitmiş bir vaxt ifadəsi ilə birgə
              işlənmir — bu hallarda Past Simple (4.6) işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We met the client yesterday. (✗ We have met the client yesterday)",
                  az: "Biz dünən müştəri ilə görüşdük.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.4.9</span>
              <h3 className="font-display text-xl text-foreground">
                Registr qeydi: Britaniya vs Amerika ingiliscəsi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Just, already, yet</em> ilə Britaniya ingiliscəsi demək olar
              həmişə Present Perfect tələb edir. Amerika ingiliscəsində isə eyni
              mənanı Past Simple ilə ifadə etmək tamamilə qəbul edilir — hər iki
              forma da düzgündür, sadəcə regional fərqdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I've already sent the invoice. (BrE, standart)",
                  az: "Fakturanı artıq göndərmişəm.",
                },
                {
                  en: "I already sent the invoice. (AmE, tam qəbul edilən)",
                  az: "Fakturanı artıq göndərdim.",
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
            Azərbaycan dilində keçmiş zaman formaları (bitmiş keçmiş, nəqli
            keçmiş) vaxtın "nə qədər əvvəl" olduğuna görə fərqlənir, amma
            ingilis dilindəki Past Simple/Present Perfect ayrımı — yəni "konkret
            vaxt bilinirmi, yoxsa yalnız indiki nəticə/əlaqə vacibdirmi" sualı —
            Azərbaycan dilində qrammatik cəhətdən ayrılmır. Bu, Present
            Perfect-in Azərbaycan dilli öyrənən üçün ən çətin mövzu olmasının
            əsas səbəbidir: burada həll etmək lazım olan sual "nə vaxt oldu?"
            deyil, "bu, indiki anla necə bağlıdır?"
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
                wrong: "I have seen him yesterday.",
                right: "I saw him yesterday.",
                az: "Onu dünən gördüm.",
              },
              {
                wrong: "They know each other since 2015.",
                right: "They have known each other since 2015.",
                az: "Onlar 2015-dən bəri bir-birini tanıyırlar.",
              },
              {
                wrong: "She has gone to Paris five times. (təcrübə mənasında)",
                right: "She has been to Paris five times.",
                az: "O, Parisə beş dəfə gedib.",
              },
              {
                wrong: "I have finish the report.",
                right: "I have finished the report.",
                az: "Hesabatı bitirmişəm. (past participle unudulub)",
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
          title="Məşq 1 — Present Perfect yoxsa Past Simple?"
          items={[
            {
              prompt:
                "I (finish/have finished) the report yesterday. (konkret vaxt)",
              answer: "I finished the report yesterday.",
              translation: "Hesabatı dünən bitirdim.",
            },
            {
              prompt:
                "We (not receive/have not received) any updates so far. (hələ bitməyən dövr)",
              answer: "We have not received any updates so far.",
              translation: "İndiyə qədər heç bir yenilik almamışıq.",
            },
            {
              prompt: "She (worked/has worked) here since 2019. (davam edən)",
              answer: "She has worked here since 2019.",
              translation: "O, 2019-dan bəri burada işləyir.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — been yoxsa gone?"
          items={[
            {
              prompt: "He has ___ to London — he'll be back next week.",
              answer: "He has gone to London — he'll be back next week.",
              translation: "O, Londona gedib — növbəti həftə qayıdacaq.",
            },
            {
              prompt: "I have ___ to London twice, and I loved it both times.",
              answer: "I have been to London twice, and I loved it both times.",
              translation:
                "Mən Londona iki dəfə getmişəm və hər ikisini sevmişəm.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
