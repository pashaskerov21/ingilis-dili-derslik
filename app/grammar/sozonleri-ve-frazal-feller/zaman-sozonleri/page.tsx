import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sozonleri-ve-frazal-feller",
  "zaman-sozonleri",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sozonleri-ve-frazal-feller"
      sectionSlug="zaman-sozonleri"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Zaman sözönləri də 7.1-dəki eyni "ümumidən konkretə" məntiqini
          izləyir, sadəcə fəza deyil, zaman oxunda: <strong>in</strong> — geniş
          dövr (ay, il, mövsüm), <strong>on</strong> — konkret gün/ tarix,{" "}
          <strong>at</strong> — dəqiq an. Bundan əlavə, müddət və son tarix
          bildirən ayrıca bir qrup sözönü də var.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.2.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas üçlük: in (geniş dövr) / on (gün) / at (dəqiq an)
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The company was founded in 2015.",
                  az: "Şirkət 2015-ci ildə yaradılıb.",
                },
                {
                  en: "We have a review scheduled on Monday.",
                  az: "Bazar ertəsi üçün baxış planlaşdırılıb.",
                },
                {
                  en: "The meeting starts at 9 AM sharp.",
                  az: "İclas dəqiq saat 9-da başlayır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.2.2</span>
              <h3 className="font-display text-xl text-foreground">
                "At"-ın sabit istisnaları
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzi zaman ifadələri məntiqi qaydaya (gecə/bayram — geniş dövr
              kimi görünür) tabe olmur, sadəcə <em>at</em> ilə əzbərlənməlidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The servers are backed up at night.",
                  az: "Serverlər gecə ehtiyat nüsxələnir.",
                },
                {
                  en: "We're closed at Christmas. (BrE: at the weekend / AmE: on the weekend)",
                  az: "Milad bayramında bağlıyıq.",
                },
                {
                  en: "I'm not available at the moment.",
                  az: "Hazırda əlçatan deyiləm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.2.3</span>
              <h3 className="font-display text-xl text-foreground">
                "By" vs "until" — eyni son nöqtə, fərqli məntiq
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>By</strong> — "ən gec bu vaxta qədər", tək bir hərəkətin
              tamamlanma anını bildirir. <strong>Until</strong> — həmin ana
              qədər <strong>davam edən</strong> bir vəziyyəti bildirir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Please submit the report by Friday. (cümə günü və ya ondan əvvəl, bir dəfəlik hərəkət)",
                  az: "Zəhmət olmasa, hesabatı cüməyə qədər təqdim et.",
                },
                {
                  en: "The office will be closed until Friday. (davam edən vəziyyət)",
                  az: "Ofis cüməyə qədər bağlı olacaq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.2.4</span>
              <h3 className="font-display text-xl text-foreground">
                "For" vs "since" — 4.4.5-in xatırladılması
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>For</strong> — müddətin özü (nə qədər).{" "}
              <strong>Since</strong> — başlanğıc nöqtəsi (nə vaxtdan). Bunlar
              bir-birinin əvəzinə keçmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We've been in this office for three years. (✗ since three years)",
                  az: "Biz bu ofisdə üç ildir varıq.",
                },
                {
                  en: "We've been in this office since 2021.",
                  az: "Biz bu ofisdə 2021-dən bəri varıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.2.5</span>
              <h3 className="font-display text-xl text-foreground">
                "During" vs "for" — nə vaxt, yoxsa nə qədər?
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>During</strong> — hərəkətin baş verdiyi{" "}
              <strong>dövrü</strong> göstərir ("nə vaxt"), müddətin özünü yox.{" "}
              <strong>For</strong> isə birbaşa müddəti ("nə qədər") bildirir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The system was down during the migration. (nə vaxt — köçürmə zamanı)",
                  az: "Köçürmə zamanı sistem işləmirdi.",
                },
                {
                  en: "The system was down for two hours. (nə qədər)",
                  az: "Sistem iki saat işləmirdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.2.6</span>
              <h3 className="font-display text-xl text-foreground">
                "Next/last" ilə sözönü buraxılır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Next</em> və ya <em>last</em> sifət kimi zaman sözündən əvvəl
              gələndə, sözönü (in/on/at) tamamilə <strong>buraxılır</strong>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Let's schedule it for next Friday. (✗ on next Friday)",
                  az: "Onu növbəti cüməyə planlaşdıraq.",
                },
                {
                  en: "We signed the contract last month. (✗ in last month)",
                  az: "Müqaviləni keçən ay imzaladıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.2.7</span>
              <h3 className="font-display text-xl text-foreground">
                Gələcəkdə "in": "bu vaxtdan sonra" mənasında
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Gələcək zaman ifadələrində <em>in</em> "indidən X müddət sonra"
              mənasını verir — bu, 7.2.1-dəki "geniş dövr" mənasından fərqli,
              əlavə bir funksiyadır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We'll have the results in two weeks.",
                  az: "İki həftədən sonra nəticələr olacaq.",
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
            Azərbaycan dilində zaman bildirən söz birləşmələri çox vaxt heç bir
            əlavə sözönü tələb etmir (şəkilçilər kifayət edir: "2015-ci ildə",
            "bazar ertəsi", "saat 9-da" — hamısı fərqli şəkilçilərlə, amma vahid
            məntiqlə). İngilis dilində isə bu üçlük (in/on/at) ayrı-ayrı
            sözlərdir və granulyarlıq (genişlikdən dəqiqliyə) məntiqinə görə
            seçilir — bu, yeni bir qərar sistemidir.
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
                wrong: "We've worked together since five years.",
                right: "We've worked together for five years.",
                az: "Biz beş ildir birgə işləyirik.",
              },
              {
                wrong: "The store is closed on night.",
                right: "The store is closed at night.",
                az: "Mağaza gecə bağlıdır.",
              },
              {
                wrong: "Let's meet in next Tuesday.",
                right: "Let's meet next Tuesday.",
                az: "Növbəti çərşənbə axşamı görüşək.",
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
          title="Məşq 1 — in / on / at / by / for / since seç"
          items={[
            {
              prompt:
                "The invoice must be paid ___ the end of the month. (son tarix)",
              answer: "The invoice must be paid by the end of the month.",
              translation: "Faktura ay sonuna qədər ödənməlidir.",
            },
            {
              prompt: "She has worked here ___ 2019. (başlanğıc nöqtəsi)",
              answer: "She has worked here since 2019.",
              translation: "O, 2019-dan bəri burada işləyir.",
            },
            {
              prompt: "We'll be traveling ___ the holiday season. (geniş dövr)",
              answer: "We'll be traveling in the holiday season.",
              translation: "Bayram mövsümündə səyahət edəcəyik.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "The team worked overtime during three hours.",
              answer: "The team worked overtime for three hours.",
              translation: "Komanda üç saat əlavə işlədi.",
            },
            {
              prompt: "I'll call you on next week.",
              answer: "I'll call you next week.",
              translation: "Növbəti həftə sənə zəng edəcəm.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
