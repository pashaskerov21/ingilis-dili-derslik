import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "murekkeb-cumle-qurma",
  "third-mixed-conditional",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="murekkeb-cumle-qurma"
      sectionSlug="third-mixed-conditional"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Şərt cümlələri üçlüyünün son həlqəsi. Üçüncü Şərt — **keçmişdə** baş
          verməmiş, artıq dəyişdirilə bilməyən vəziyyətlər üçündür (peşmançılıq,
          "kaş belə olsaydı"). Qarışıq Şərt isə iki fərqli zaman qatını (keçmiş
          + indi) **eyni cümlədə** birləşdirir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.8.1</span>
              <h3 className="font-display text-xl text-foreground">
                Üçüncü Şərt: If + Past Perfect, would have + III forma
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Keçmişdə baş verməmiş bir şərt və onun (yenə keçmişdə qalan)
              xəyali nəticəsi. Peşmançılıq, "əlbəttə mümkün idi, amma baş
              vermədi" hissi verir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If we had tested the feature more thoroughly, we would have caught the bug earlier.",
                  az: "Funksiyanı daha hərtərəfli test etsəydik, xətanı daha tez tapardıq.",
                },
                {
                  en: "She would have gotten the promotion if she had applied on time.",
                  az: "Vaxtında müraciət etsəydi, vəzifə artımı alardı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.8.2</span>
              <h3 className="font-display text-xl text-foreground">
                Ən vacib qayda: if-cümləsində "would have" YOX
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              4.1.7/9.6.3/9.7-dəki eyni prinsipin üçüncü şərtdəki forması — "if"
              hissəsi heç vaxt "would" və ya "would have" tələb etmir, yalnız
              Past Perfect.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If I had known about the meeting, I would have joined. (✗ if I would have known)",
                  az: "İclas barədə bilsəydim, qoşulardım.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.8.3</span>
              <h3 className="font-display text-xl text-foreground">
                "Would have"-dan başqa: could have, might have
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "If we had allocated more time, we could have avoided the delay.",
                  az: "Daha çox vaxt ayırsaydıq, gecikmənin qarşısını ala bilərdik.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.8.4</span>
              <h3 className="font-display text-xl text-foreground">
                Rəsmi/ədəbi variant: "if"-siz, tərsinə çevrilmiş forma
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              "If"-i çıxarıb "had"-i subyektdən əvvələ keçirməklə eyni mənanı
              daha rəsmi/ədəbi şəkildə vermək mümkündür.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Had I known about the risk, I would have declined the offer.",
                  az: "Riskdən xəbərim olsaydı, təklifi rədd edərdim.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.8.5</span>
              <h3 className="font-display text-xl text-foreground">
                Qarışıq Şərt, Tip 1: keçmiş şərt → indiki nəticə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Forma: <em>If + Past Perfect, would + bazafel</em>. Keçmişdə baş
              verməyən bir şey **indiki** vəziyyətə necə təsir edərdi.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If she had accepted the job offer, she would be working in London now.",
                  az: "Təklifi qəbul etsəydi, indi Londonda işləyərdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.8.6</span>
              <h3 className="font-display text-xl text-foreground">
                Qarışıq Şərt, Tip 2: indiki vəziyyət → keçmiş nəticə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Forma: <em>If + Past Simple, would have + III forma</em>. İndi
              doğru olan (dəyişməz) bir fakt keçmişdəki bir hərəkətə necə təsir
              edərdi.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If I spoke Spanish, I would have taken that job in Madrid. (indi ispanca bilmirəm — bu, dəyişməz fakt)",
                  az: "İspanca bilsəydim, Madriddəki o işi qəbul edərdim.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.8.7</span>
              <h3 className="font-display text-xl text-foreground">
                Praktik test: hər hissənin zamanını ayrıca müəyyənləşdir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Qarışıq şərtdə səhv etməmək üçün: əvvəlcə "if" hissəsi **hansı
              zamana** aiddir (keçmiş/indi), sonra nəticə hissəsi **hansı
              zamana** aiddir — bunları ayrıca müəyyənləşdir, sonra uyğun
              formanı seç.
            </p>
          </div>
        </section>

        {/* ---------- MÜQAYİSƏ QUTUSU ---------- */}
        <aside className="border-l-2 border-accent bg-accent/5 p-5 space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Azərbaycan dili ilə struktur fərqi
          </h4>
          <p className="text-foreground leading-relaxed">
            Azərbaycan dilində keçmişə aid peşmançılıq "-saydı" formasının
            keçmiş zaman şəkilçisi ilə birləşməsi ilə ifadə olunur, bu, ingilis
            dilinin Üçüncü Şərtinə struktur baxımından yaxındır. Əsl çətinlik
            **Qarışıq Şərtdədir** — iki fərqli zaman qatının (keçmiş şərt +
            indiki nəticə, ya əksinə) **eyni cümlədə** birləşməsi Azərbaycan
            dilində bu qədər aydın qrammatik formalarla ayrılmır, kontekstdən
            çıxarılmalıdır.
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
                  "If I would have known about the traffic, I would have left earlier.",
                right:
                  "If I had known about the traffic, I would have left earlier.",
                az: "Trafik barədə bilsəydim, daha tez çıxardım.",
              },
              {
                wrong:
                  "If she had had more experience, she would have gotten the job. (double 'had' səhv istifadə)",
                right:
                  "If she had more experience, she would have gotten the job.",
                az: "Daha çox təcrübəsi olsaydı, işi alardı.",
              },
              {
                wrong:
                  "If I studied harder, I would have passed the exam. (keçmiş nəticə — Past Perfect lazımdır)",
                right: "If I had studied harder, I would have passed the exam.",
                az: "Daha çox çalışsaydım, imtahanı keçərdim.",
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
                "If we ___ (start) earlier, we would have finished by now. (Qarışıq — keçmiş şərt, indiki nəticə)",
              answer:
                "If we had started earlier, we would have finished by now.",
              translation:
                "Daha tez başlasaydıq, indiyə qədər bitirmiş olardıq.",
            },
            {
              prompt:
                "If he ___ (be) more careful, he wouldn't have lost the data.",
              answer:
                "If he had been more careful, he wouldn't have lost the data.",
              translation: "Daha diqqətli olsaydı, məlumatı itirməzdi.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "If she would have called, I would have answered.",
              answer: "If she had called, I would have answered.",
              translation: "O zəng etsəydi, cavab verərdim.",
            },
            {
              prompt:
                "If I had had more time yesterday, I could finish it. (indiki nəticə — would/could lazımdır, have without)",
              answer:
                "If I had had more time yesterday, I could have finished it.",
              translation: "Dünən daha çox vaxtım olsaydı, bitirə bilərdim.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
