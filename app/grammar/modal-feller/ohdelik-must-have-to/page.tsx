import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "modal-feller",
  "ohdelik-must-have-to",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="modal-feller" sectionSlug="ohdelik-must-have-to">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Üç forma da "lazımdır, məcburidir" mənasını versə də, fərq{" "}
          <strong>öhdəliyin haradan gəldiyindədir</strong> — sənin öz
          qərarındanmı, yoxsa xarici bir qaydadan/qanundan/vəziyyətdən? Bu fərq,
          xüsusilə inkar formasında (5.4-də görəcəyik), tamam fərqli mənalara
          aparır.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.3.1</span>
              <h3 className="font-display text-xl text-foreground">
                Must — daxili öhdəlik, danışanın öz qərarı/təkidi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Öhdəlik <strong>danışanın özündən</strong> gəlir — şəxsi fikir,
              güclü inam və ya danışanın (müəllim, valideyn, rəhbər kimi)
              birbaşa səlahiyyəti.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I must finish this before I go home — it's important to me.",
                  az: "Evə getməzdən əvvəl bunu bitirməliyəm — mənim üçün vacibdir.",
                },
                {
                  en: "You must submit this form by Friday. (mən özüm tələb edirəm)",
                  az: "Bu formu cüməyə qədər təqdim etməlisən.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.3.2</span>
              <h3 className="font-display text-xl text-foreground">
                Have to — xarici öhdəlik, qayda/qanun/vəziyyət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Öhdəlik <strong>danışandan kənar</strong> bir mənbədən gəlir —
              qanun, şirkət siyasəti, cədvəl, başqasının qərarı.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I have to submit this form by Friday. (şirkət qaydasıdır, mən yaratmamışam)",
                  az: "Bu formu cüməyə qədər təqdim etməliyəm. (belə qayda var)",
                },
                {
                  en: "She has to wear a uniform at work.",
                  az: "O, işdə forma geyinməlidir. (iş yerinin tələbidir)",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Diqqət: eyni vəziyyət haqqında danışan iki fərqli insan fərqli
              forma seçə bilər — seçim obyektiv faktdan çox, danışanın{" "}
              <strong>vəziyyəti necə gördüyündən</strong> asılıdır.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.3.3</span>
              <h3 className="font-display text-xl text-foreground">
                Qrammatik məhdudiyyət: "must"-un keçmiş/gələcək forması yoxdur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              5.1.4-dəki can/be able to naxışının eynisi: <em>must</em> yalnız
              indiki zamanda mövcuddur. Keçmiş və gələcək öhdəlik üçün məcburən{" "}
              <em>have to</em>-ya keçilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We had to cancel the meeting due to the outage. (✗ we musted)",
                  az: "Nasazlığa görə iclası ləğv etməli olduq.",
                },
                {
                  en: "You will have to submit the documents in person. (✗ you will must)",
                  az: "Sənədləri şəxsən təqdim etməli olacaqsan.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.3.4</span>
              <h3 className="font-display text-xl text-foreground">
                Sualda: "have to" üstünlük təşkil edir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sual formasında <em>must</em> həddindən artıq rəsmi, hətta
              köhnəlmiş səslənə bilər — gündəlik danışıqda <em>have to</em> daha
              təbiidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Do we have to finish this today? (təbii)",
                  az: "Bunu bu gün bitirməliyikmi?",
                },
                {
                  en: "Must we finish this today? (çox rəsmi/köhnə üslub)",
                  az: "Bunu bu gün bitirməliyikmi? (rəsmi)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.3.5</span>
              <h3 className="font-display text-xl text-foreground">
                Need to — praktik zərurət, məqsədə xidmət edən
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Need to</em> daha yumşaq, praktik don daşıyır — öhdəliyi
              qayda/avtoritetdən çox,{" "}
              <strong>bir məqsədə çatmaq üçün zəruriliklə</strong> əsaslandırır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We need to test this before deploying it to production.",
                  az: "Bunu istehsala buraxmazdan əvvəl test etməliyik. (məqsəd: təhlükəsizlik)",
                },
                {
                  en: "I need to renew my passport before the trip.",
                  az: "Səfərdən əvvəl pasportumu yeniləməliyəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.3.6</span>
              <h3 className="font-display text-xl text-foreground">
                Diqqət: "must" başqa mənada da işlənir — məntiqi nəticə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu bölmədəki <em>must</em> öhdəlik bildirir, lakin eyni söz tamam
              fərqli bir funksiyada — dəlilə əsaslanan{" "}
              <strong>ehtimal/nəticə çıxarma</strong> mənasında da işlənir
              (5.7-də ətraflı). İkisini kontekstdən ayırmaq lazımdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "You must submit the form today. (öhdəlik)",
                  az: "Formu bu gün təqdim etməlisən.",
                },
                {
                  en: "She must be at the airport by now. (ehtimal/nəticə, 5.7)",
                  az: "İndiyə qədər o, hava limanında olmalıdır. (yəqin ki, ordadır)",
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
            Azərbaycan dilində "-malı/-məli" şəkilçisi (etməliyəm, getməliyik)
            öhdəliyin mənbəyindən (daxili/xarici) asılı olmayaraq universal
            işlənir. İngilis dilində isə bu, iki (əslində üç, need to ilə) ayrı
            formaya bölünür və seçim{" "}
            <strong>danışanın subyektiv perspektivindən</strong> asılıdır — bu,
            Azərbaycan dilli öyrənən üçün "hansı düzgündür" sualının əslində
            "mən vəziyyəti necə görürəm" sualına çevrildiyi bir qərar
            nöqtəsidir.
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
                wrong: "I musted finish the report yesterday.",
                right: "I had to finish the report yesterday.",
                az: "Hesabatı dünən bitirməli oldum.",
              },
              {
                wrong: "We will must attend the training next week.",
                right: "We will have to attend the training next week.",
                az: "Növbəti həftə təlimdə iştirak etməli olacağıq.",
              },
              {
                wrong: "Must you work on weekends? (adi sual, gündəlik)",
                right: "Do you have to work on weekends?",
                az: "Həftəsonları işləməli olursanmı?",
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
              prompt:
                "Last year, we ___ (must) relocate the entire office. (keçmiş)",
              answer: "Last year, we had to relocate the entire office.",
              translation: "Keçən il bütün ofisi köçürməli olduq.",
            },
            {
              prompt:
                "___ you ___ (have) to wear a badge to enter the building? (sual)",
              answer: "Do you have to wear a badge to enter the building?",
              translation: "Binaya girmək üçün vəsiqə taxmalısan?",
            },
            {
              prompt:
                "I ___ (need) to double-check these numbers before submitting.",
              answer: "I need to double-check these numbers before submitting.",
              translation:
                "Təqdim etməzdən əvvəl bu rəqəmləri yenidən yoxlamalıyam.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "She musted attend the conference last month.",
              answer: "She had to attend the conference last month.",
              translation: "O, keçən ay konfransda iştirak etməli oldu.",
            },
            {
              prompt: "Must I bring my own laptop tomorrow? (gündəlik sual)",
              answer: "Do I have to bring my own laptop tomorrow?",
              translation: "Sabah öz noutbukumu gətirməliyəmmi?",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
