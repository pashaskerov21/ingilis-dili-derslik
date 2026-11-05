import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "feller-ve-zamanlar",
  "future-continuous-perfect",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="feller-ve-zamanlar"
      sectionSlug="future-continuous-perfect"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          4.10-da gördüyümüz will/going to əsas gələcək formalarıdır. Bu bölmə
          isə iki daha spesifik formanı əhatə edir: gələcəkdə{" "}
          <strong>müəyyən anda davam edəcək</strong> hərəkət (Future Continuous)
          və gələcəkdə <strong>müəyyən vaxtdan əvvəl bitmiş olacaq</strong>{" "}
          hərəkət (Future Perfect).
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.11.1</span>
              <h3 className="font-display text-xl text-foreground">
                Future Continuous — forma: will be + fel-ing
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "This time tomorrow, we'll be presenting to the board.",
                  az: "Sabah bu vaxt idarə heyətinə təqdimat edirik olacağıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.11.2</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 1 — Gələcəkdə konkret anda davam edən hərəkət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Gələcəkdə göstərilən bir nöqtədə hərəkət artıq başlamış və davam
              edir — 4.7-dəki Past Continuous-un gələcək güzgüsü.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Don't call at 3 PM — I'll be interviewing candidates.",
                  az: "Saat 3-də zəng etmə — namizədlərlə müsahibə aparıram olacağam.",
                },
                {
                  en: "By next week, the team will be working from the new office.",
                  az: "Növbəti həftəyə komanda yeni ofisdən işləyir olacaq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.11.3</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 2 — Təbii gedişat, qərar deyil
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, incə, amma vacib bir fərqdir: Future Continuous hadisəni{" "}
              <strong>təbii olaraq baş verəcək bir şey</strong> kimi təqdim edir
              — 4.10-dakı "going to" kimi qəsdən qərarlaşdırılmış niyyət deyil,
              sadəcə "vəziyyətin gedişatı belədir".
            </p>
            <ExampleList
              examples={[
                {
                  en: "I'll be seeing Sarah at the conference anyway, so I can pass the message on. (təsadüfi, planlaşdırılmamış)",
                  az: "Konfransda Saranı elə də görəcəm, mesajı ona ötürə bilərəm.",
                },
                {
                  en: "I'm going to see Sarah to discuss the contract. (qəsdən, məqsədli görüş)",
                  az: "Müqaviləni müzakirə etmək üçün Sara ilə görüşəcəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.11.4</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 3 — Nəzakətli, dolayı sual
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Future Continuous ilə sual vermək, sadə "will" ilə sualdan daha
              yumşaq, daha az təzyiqli səslənir — çünki cavab verənin
              niyyətindən çox, onun "təbii planından" soruşulur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Will you be needing the projector after lunch? (yumşaq)",
                  az: "Nahar sonrası proyektor lazım olacaqmı?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.11.5</span>
              <h3 className="font-display text-xl text-foreground">
                Future Perfect — forma: will have + Past Participle
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Gələcəkdə göstərilən vaxta qədər{" "}
              <strong>artıq bitmiş olacaq</strong> hərəkət — 4.8-dəki Past
              Perfect-in gələcək güzgüsü. Adətən "by" ilə işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "By the end of the quarter, we will have shipped three major releases.",
                  az: "Rübün sonuna qədər biz üç böyük buraxılış çıxarmış olacağıq.",
                },
                {
                  en: "She will have finished the certification by next spring.",
                  az: "O, növbəti bahara qədər sertifikatı bitirmiş olacaq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.11.6</span>
              <h3 className="font-display text-xl text-foreground">
                Future Perfect Continuous — müddəti vurğulamaq (bonus)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              4.5/4.9-dakı Simple/Continuous məntiqi burada da təkrarlanır:
              nəticə deyil, <strong>müddət</strong> vurğulanmaq istəyəndə{" "}
              <em>will have been + fel-ing</em> işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "By December, I will have been working here for five years.",
                  az: "Dekabra qədər burada beş ildir işləmiş olacağam. (müddət vurğulanır)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.11.7</span>
              <h3 className="font-display text-xl text-foreground">
                Xatırlatma: zaman budaq cümləsində "will" yenə qadağandır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              4.1.7-dəki qayda bu formalara da aiddir —{" "}
              <em>when, after, until, before</em> ilə başlayan budaq cümlədə
              Present Simple işlədilir, Future forması yox.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We'll be halfway done by the time you arrive. (✗ by the time you will arrive)",
                  az: "Sən çatana qədər işin yarısı bitmiş olacaq.",
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
            Azərbaycan dilində "işləyəcəm" tipli gələcək forması bu iki fərqli
            məna qatını (davam edəcək proses / bitmiş olacaq nəticə) ayırmır —
            kontekstdən çıxarılmalıdır. İngilis dilində isə bu iki qat Present
            ailəsindəki (4.2 vs 4.4) eyni Simple/Continuous/ Perfect məntiqi ilə
            leksik cəhətdən ayrılır — bu, bütün fəsil boyu təkrarlanan struktur
            naxışın gələcəyə tətbiqidir.
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
                wrong: "By next year, we finish the migration.",
                right: "By next year, we will have finished the migration.",
                az: "Növbəti ilə qədər köçürməni bitirmiş olacağıq.",
              },
              {
                wrong: "We will be meet the client at 3 PM.",
                right: "We will be meeting the client at 3 PM.",
                az: "Saat 3-də müştəri ilə görüşürük olacağıq.",
              },
              {
                wrong: "I'll finish the report when you will arrive.",
                right: "I'll finish the report when you arrive.",
                az: "Sən çatanda hesabatı bitirmiş olacam.",
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
              prompt: "This time next week, we ___ (relax) on the beach.",
              answer: "This time next week, we will be relaxing on the beach.",
              translation: "Növbəti həftə bu vaxt biz çimərlikdə dincələcəyik.",
            },
            {
              prompt:
                "By 2027, the company ___ (open) offices in five countries.",
              answer:
                "By 2027, the company will have opened offices in five countries.",
              translation:
                "2027-ci ilə qədər şirkət beş ölkədə ofis açmış olacaq.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "By the time she calls, I finish the presentation.",
              answer:
                "By the time she calls, I will have finished the presentation.",
              translation:
                "O zəng edənə qədər mən təqdimatı bitirmiş olacağam.",
            },
            {
              prompt: "We will be discuss the budget tomorrow at 10.",
              answer: "We will be discussing the budget tomorrow at 10.",
              translation: "Sabah saat 10-da büdcəni müzakirə edəcəyik.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
