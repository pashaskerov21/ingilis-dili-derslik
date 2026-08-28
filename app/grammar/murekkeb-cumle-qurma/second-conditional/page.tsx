import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "murekkeb-cumle-qurma",
  "second-conditional",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="murekkeb-cumle-qurma"
      sectionSlug="second-conditional"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          9.6-dan fərqli olaraq, İkinci Şərt Cümləsi **real deyil, xəyali və ya
          uzaq ehtimallı** vəziyyətləri təsvir edir. Buradakı ən çətin
          konseptual məqam budur: keçmiş zaman forması işlədilir, amma bu,
          **keçmiş vaxtı bildirmir** — sadəcə "reallıqdan uzaqlığı" göstərir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.7.1</span>
              <h3 className="font-display text-xl text-foreground">
                Forma: If + Past Simple, would + bazafel
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "If we had more budget, we would hire two more developers.",
                  az: "Daha çox büdcəmiz olsaydı, iki proqramçı da işə götürərdik.",
                },
                {
                  en: "I would relocate if the company offered a remote package.",
                  az: "Şirkət uzaqdan iş paketi təklif etsə, köçərdim.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.7.2</span>
              <h3 className="font-display text-xl text-foreground">
                Real (Birinci) vs Xəyali (İkinci) — kritik seçim
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Seçim danışanın vəziyyəti **necə qiymətləndirdiyinə** bağlıdır —
              obyektiv "gerçəklik" deyil.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If we win this contract, we will expand the team. (real, mümkün — Birinci)",
                  az: "Bu müqaviləni qazansaq, komandanı genişləndirəcəyik.",
                },
                {
                  en: "If we won the lottery, we would retire early. (xəyali, ehtimalı çox az — İkinci)",
                  az: "Lotereyanı qazansaq, tez təqaüdə çıxardıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.7.3</span>
              <h3 className="font-display text-xl text-foreground">
                Konseptual açar: keçmiş forma = uzaqlıq, keçmiş vaxt YOX
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, 5.2.3-də gördüyün "could — daha nəzakətli, daha uzaq"
              məntiqinin daha böyük miqyasda təzahürüdür: ingilis dilində keçmiş
              fel forması bəzən sadəcə **"gerçəklikdən uzaqlaşdırma"** vasitəsi
              kimi işlənir, vaxtla əlaqəsi olmadan.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If I knew the answer, I would tell you. (indiki zamana aiddir, amma 'knew' — keçmiş forma)",
                  az: "Cavabı bilsəydim, sənə deyərdim. (indi bilmirəm)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.7.4</span>
              <h3 className="font-display text-xl text-foreground">
                "Be" felli: rəsmi qaydada həmişə "were"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Rəsmi qrammatika qaydasına görə, İkinci Şərtdə <em>be</em> feli
              hər şəxs üçün <strong>were</strong> formasını alır (was yox),
              hətta I/he/she/it ilə də. Danışıqda "was" tez-tez eşidilsə də,
              rəsmi yazıda "were" tələb olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If I were you, I would double-check the numbers. (rəsmi, düzgün)",
                  az: "Sənin yerində olsaydım, rəqəmləri yenidən yoxlayardım.",
                },
                {
                  en: "If she were available, she would join the call. (rəsmi)",
                  az: "O, əlçatan olsaydı, zəngə qoşulardı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.7.5</span>
              <h3 className="font-display text-xl text-foreground">
                "Would"-dan başqa: could/might
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Could</em> — imkan/bacarıq mənasında. <em>Might</em> — daha az
              əmin ehtimal.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If we had more time, we could test every scenario.",
                  az: "Daha çox vaxtımız olsaydı, hər ssenarini test edə bilərdik.",
                },
                {
                  en: "If she asked for an extension, they might grant it.",
                  az: "O, əlavə vaxt istəsə, bəlkə verərlər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.7.6</span>
              <h3 className="font-display text-xl text-foreground">
                Sabit ifadə: "If it weren't for..."
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              "X olmasaydı, Y baş verməzdi" mənasını verən çox işlək bir
              struktur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If it weren't for her quick thinking, we would have missed the deadline.",
                  az: "Onun sürətli düşüncəsi olmasaydı, son tarixi qaçırardıq.",
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
            Azərbaycan dilində şərt şəkilçisi ("-saydı/-səydi") özü artıq
            "qeyri-real, xəyali" mənasını daşıyır — fel forması ilə "vaxt"ı
            qarışdırmaq riski yoxdur. İngilis dilində isə eyni **keçmiş zaman
            forması** həm real keçmişi (4.6), həm xəyali indini/gələcəyi (9.7)
            bildirə bilir — bu, Azərbaycan dilli öyrənən üçün formanın özündən
            çıxarıla bilməyən, kontekstdən asılı bir qərar tələb edir.
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
                wrong: "If I would have more money, I would travel more.",
                right: "If I had more money, I would travel more.",
                az: "Daha çox pulum olsaydı, daha çox səyahət edərdim.",
              },
              {
                wrong:
                  "If she was the manager, she would change the policy. (rəsmi qaydada)",
                right: "If she were the manager, she would change the policy.",
                az: "O, menecer olsaydı, siyasəti dəyişərdi.",
              },
              {
                wrong:
                  "If we win the lottery, we would buy a house. (ehtimalı çox az — 2-ci şərt lazımdır)",
                right: "If we won the lottery, we would buy a house.",
                az: "Lotereyanı qazansaq, ev alardıq.",
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
                "If I ___ (be) in your position, I would negotiate the offer.",
              answer:
                "If I were in your position, I would negotiate the offer.",
              translation: "Sənin yerində olsaydım, təklifi danışardım.",
            },
            {
              prompt: "We ___ (finish) faster if we had more resources.",
              answer: "We would finish faster if we had more resources.",
              translation: "Daha çox resursumuz olsaydı, daha tez bitirərdik.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt:
                "If she would know the truth, she would react differently.",
              answer: "If she knew the truth, she would react differently.",
              translation: "Həqiqəti bilsəydi, fərqli reaksiya verərdi.",
            },
            {
              prompt:
                "If it wasn't for the team's effort, we would have failed. (rəsmi qaydada)",
              answer:
                "If it weren't for the team's effort, we would have failed.",
              translation: "Komandanın səyi olmasaydı, uğursuz olardıq.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
