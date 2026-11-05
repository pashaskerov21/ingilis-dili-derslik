import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "modal-feller",
  "icaze-xahis",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="modal-feller" sectionSlug="icaze-xahis">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu bölmə iki fərqli, lakin tez-tez qarışdırılan funksiyanı əhatə edir:{" "}
          <strong>icazə</strong> (özün üçün nəyisə etmək hüququ) və{" "}
          <strong>xahiş</strong> (başqasından nəyisə etməsini istəmək). Hər
          ikisində eyni modal fellər (can, could, may) işlənir, amma{" "}
          <strong>fərqli qaydalarla</strong> — bu qarışıqlığın əsas mənbəyidir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.2.1</span>
              <h3 className="font-display text-xl text-foreground">
                İcazə istəmək və vermək: can / may
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İcazə istəmək/vermək üçün <em>can</em> (gündəlik) və <em>may</em>{" "}
              (rəsmi, nəzakətli) işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Can I leave early today? — Yes, you can. (gündəlik)",
                  az: "Bu gün tez gedə bilərəmmi? — Bəli, ola bilər.",
                },
                {
                  en: "May I ask you a few questions about the report? (rəsmi)",
                  az: "Hesabat haqqında sizə bir neçə sual verə bilərəmmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.2.2</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik asimmetriya: "could" yalnız İSTƏMƏK üçün, VERMƏK üçün yox
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ən çox gözdən qaçan qaydadır: <em>could</em> icazə{" "}
              <strong>istəmək</strong> üçün nəzakətli bir vasitədir, amma icazə{" "}
              <strong>vermək</strong> üçün işlənmir — cavab verərkən{" "}
              <em>can</em> və ya <em>may</em> lazımdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Could I use your laptop for a moment? (istəmək — düzgün)",
                  az: "Bir anlıq noutbukundan istifadə edə bilərəmmi?",
                },
                {
                  en: "— Yes, you can. / Yes, of course. (vermək — 'you could' DEYİL)",
                  az: "— Bəli, ola bilər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.2.3</span>
              <h3 className="font-display text-xl text-foreground">
                Nəzakət spektri: can → could → may
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İcazə istəyəndə üç forma artan nəzakət dərəcəsi təşkil edir —
              münasibətin yaxınlığına və vəziyyətin rəsmiliyinə görə seçim
              edilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Can I grab a coffee before we start? (dost/həmkar arasında, gündəlik)",
                  az: "Başlamazdan əvvəl bir qəhvə götürə bilərəmmi?",
                },
                {
                  en: "Could I take a short break? (nəzakətli, işgüzar)",
                  az: "Qısa fasilə verə bilərəmmi?",
                },
                {
                  en: "May I step out for a moment? (çox rəsmi, məsələn müştəri qarşısında)",
                  az: "Bir anlıq çölə çıxa bilərəmmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.2.4</span>
              <h3 className="font-display text-xl text-foreground">
                Xahiş etmək (başqasından): can / could, "may" YOX
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Diqqət — bu, icazədən fərqli funksiyadır: kiminsə{" "}
              <strong>sənin üçün nəsə etməsini</strong> xahiş edirsən (özün üçün
              icazə yox). Bu halda <em>may</em> işlənmir, yalnız{" "}
              <em>can/could</em>. <em>Could</em> burada da <em>can</em>-dan daha
              nəzakətlidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Can you send me the file by tonight? (birbaşa, gündəlik xahiş)",
                  az: "Bu gecəyə qədər faylı mənə göndərə bilərsənmi?",
                },
                {
                  en: "Could you review this before the meeting, please? (nəzakətli xahiş)",
                  az: "Zəhmət olmasa, iclasdan əvvəl bunu nəzərdən keçirə bilərsən?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.2.5</span>
              <h3 className="font-display text-xl text-foreground">
                "Might" — daha da çəkingən, dolayı forma
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Might</em>, <em>may</em>-dən də çəkingən və rəsmidir, adətən
              dolayı sual strukturunda ("I wonder if...") işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I wonder if I might have a word with you privately.",
                  az: "Görəsən, səninlə xüsusi danışa bilərəmmi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.2.6</span>
              <h3 className="font-display text-xl text-foreground">
                İcazə rədd etmək
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İnkar forması ilə icazə rədd edilir — <em>mustn't</em> daha güclü,
              qəti qadağa bildirir (bax: 5.4).
            </p>
            <ExampleList
              examples={[
                {
                  en: "Can I take next Friday off? — I'm afraid you can't, we have a client visit.",
                  az: "Növbəti cümə istirahət edə bilərəmmi? — Təəssüf ki, yox, müştəri ziyarəti var.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.2.7</span>
              <h3 className="font-display text-xl text-foreground">
                Kontekstdən ayırmaq: icazə "can" vs bacarıq "can" (5.1)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Eyni <em>can</em> sözü kontekstdən asılı olaraq ya bacarıq (5.1),
              ya icazə bildirə bilər — cümlənin özü bunu aydınlaşdırır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She can speak Turkish. (bacarıq)",
                  az: "O, türkcə danışa bilir.",
                },
                {
                  en: "She can leave early today. (icazə)",
                  az: "O, bu gün tez gedə bilər. (icazəsi var)",
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
            Azərbaycan dilində icazə/xahiş nəzakəti əsasən{" "}
            <strong>fel forması</strong> (sən/siz uzlaşması, əmr forması) və
            intonasiya vasitəsilə ifadə olunur — "ola bilərmi", "bilərəmmi" kimi
            ifadələr nisbətən sabit qalır. İngilis dilində isə nəzakət dərəcəsi
            bütünlüklə <strong>hansı modal felin seçildiyindən</strong>{" "}
            (can/could/may) asılıdır — bu, üç ayrı söz arasında seçim etmək
            tələb edən yeni bir qərar mexanizmidir.
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
                  "Could I borrow your pen? — Yes, you could. (icazə vermək)",
                right: "Could I borrow your pen? — Yes, you can.",
                az: "Qələmini götürə bilərəmmi? — Bəli, ola bilər.",
              },
              {
                wrong: "May you send me the report? (xahişdə may yox)",
                right: "Could you send me the report?",
                az: "Hesabatı mənə göndərə bilərsənmi?",
              },
              {
                wrong: "Can I to leave early?",
                right: "Can I leave early?",
                az: "Tez gedə bilərəmmi? (to əlavə olunmur)",
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
          title="Məşq 1 — Uyğun modal feli seç"
          items={[
            {
              prompt:
                "___ I ask you something personal? (çox rəsmi, professor qarşısında)",
              answer: "May I ask you something personal?",
              translation: "Sizə şəxsi bir sual verə bilərəmmi?",
            },
            {
              prompt:
                "___ you pass me the stapler? (gündəlik xahiş, iş yoldaşına)",
              answer: "Can you pass me the stapler?",
              translation: "Stəplerı mənə uzada bilərsənmi?",
            },
            {
              prompt: "Can I park here? — I'm afraid you ___. (rədd)",
              answer: "Can I park here? — I'm afraid you can't.",
              translation: "Burada dayana bilərəmmi? — Təəssüf ki, yox.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "Could I open the window? — Yes, you could.",
              answer: "Could I open the window? — Yes, you can.",
              translation: "Pəncərəni aça bilərəmmi? — Bəli, ola bilər.",
            },
            {
              prompt: "May you help me carry these boxes?",
              answer: "Could you help me carry these boxes?",
              translation: "Bu qutuları daşımağa kömək edə bilərsənmi?",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
