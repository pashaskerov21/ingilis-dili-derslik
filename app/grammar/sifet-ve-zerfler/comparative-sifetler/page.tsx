import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sifet-ve-zerfler",
  "comparative-sifetler",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sifet-ve-zerfler"
      sectionSlug="comparative-sifetler"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          İki şeyi müqayisə edərkən sifətin forması dəyişir. Forma seçimi —{" "}
          <strong>-er</strong> şəkilçisi, yoxsa <strong>more</strong> sözü —
          sifətin neçə hecadan ibarət olduğundan asılıdır, amma bu qaydanın bir
          neçə istisnası var.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.4.1</span>
              <h3 className="font-display text-xl text-foreground">
                Bir hecalı sifətlər: +er
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">Qayda</th>
                    <th className="p-2 font-display text-foreground">Nümunə</th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  <tr className="border-b border-line">
                    <td className="p-2">Əksəriyyət: +er</td>
                    <td className="p-2 font-mono">tall → taller</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">Səssiz "e": +r</td>
                    <td className="p-2 font-mono">large → larger</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">CVC — son samit ikiləşir</td>
                    <td className="p-2 font-mono">
                      big → bigger, hot → hotter
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">samit+y → -ier</td>
                    <td className="p-2 font-mono">easy → easier</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ExampleList
              examples={[
                {
                  en: "This laptop is faster than my old one.",
                  az: "Bu noutbuk köhnəmdən sürətlidir.",
                },
                {
                  en: "The new office is bigger than the previous one.",
                  az: "Yeni ofis əvvəlkindən böyükdür.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.4.2</span>
              <h3 className="font-display text-xl text-foreground">
                İki hecalı sifətlər: adətən "more", bəzi istisnalarla
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əksər iki hecalı sifətlər <em>more</em> tələb edir. Lakin{" "}
              <strong>-y, -er, -le, -ow</strong> ilə bitən iki hecalı sifətlər
              həm -er, həm "more" ilə işlənə bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This approach is more effective than the previous one. (adi iki hecalı)",
                  az: "Bu yanaşma əvvəlkindən daha effektivdir.",
                },
                {
                  en: "He seems happier/more happy since he changed jobs. (-y ilə bitən — hər ikisi düzgün)",
                  az: "İşini dəyişdikdən sonra o, daha xoşbəxt görünür.",
                },
                {
                  en: "This road is narrower/more narrow than the old one. (-ow ilə bitən)",
                  az: "Bu yol köhnəsindən dardır.",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Əmin olmadıqda, <em>more</em> istifadə etmək daha təhlükəsiz
              seçimdir.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.4.3</span>
              <h3 className="font-display text-xl text-foreground">
                Üç və daha çox hecalı sifətlər: həmişə "more"
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "This solution is more efficient than the original design.",
                  az: "Bu həll orijinal dizayndan daha effektivdir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.4.4</span>
              <h3 className="font-display text-xl text-foreground">
                İstisna: "-ful" ilə bitən iki hecalı sifətlər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İki heca olsa da, <em>-ful</em> ilə bitən sifətlər -er şəkilçisi
              ilə işlənmir — həmişə <em>more</em> tələb edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This tool is more useful than the previous version. (✗ usefuler)",
                  az: "Bu alət əvvəlki versiyadan daha faydalıdır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.4.5</span>
              <h3 className="font-display text-xl text-foreground">
                Qeyri-müntəzəm formalar
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                ["good", "better"],
                ["bad", "worse"],
                ["far", "farther/further"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="font-mono text-sm border border-line px-2 py-1 text-center"
                >
                  {a} → {b}
                </div>
              ))}
            </div>
            <ExampleList
              examples={[
                {
                  en: "This candidate's experience is better than the others'.",
                  az: "Bu namizədin təcrübəsi digərlərindən yaxşıdır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.4.6</span>
              <h3 className="font-display text-xl text-foreground">
                "Than" — orfoqrafiya xəbərdarlığı
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Müqayisə edilən iki tərəf arasında <em>than</em> (müqayisə üçün)
              işlədilir — <em>then</em> (vaxt bildirən, "sonra") ilə səhv
              salınmamalıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She is more experienced than her colleague. (✗ then)",
                  az: "O, həmkarından daha təcrübəlidir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.4.7</span>
              <h3 className="font-display text-xl text-foreground">
                Qadağa: -er və "more" birlikdə işlənmir
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "This model is better than the old one. (✗ more better)",
                  az: "Bu model köhnəsindən yaxşıdır.",
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
            Azərbaycan dilində müqayisə "daha" sözü ilə universal işlənir ("daha
            böyük", "daha maraqlı") — sifətin uzunluğundan asılı olmayaraq eyni
            struktur. İngilis dilində isə seçim (-er vs more) sifətin{" "}
            <strong>heca sayına</strong> bağlıdır — bu, Azərbaycan dilində
            olmayan, tamamilə yeni bir qərar mexanizmidir.
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
                wrong: "This report is more clear than the last one.",
                right: "This report is clearer than the last one.",
                az: "Bu hesabat əvvəlkindən daha aydındır.",
              },
              {
                wrong: "She is more good at math than me.",
                right: "She is better at math than me.",
                az: "O, riyaziyyatda məndən yaxşıdır.",
              },
              {
                wrong: "This is more interestinger than I expected.",
                right: "This is more interesting than I expected.",
                az: "Bu, gözlədiyimdən daha maraqlıdır.",
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
          title="Məşq 1 — Müqayisə formasını yaz"
          items={[
            {
              prompt: "cheap →",
              answer: "cheaper",
              translation: "ucuz → daha ucuz",
            },
            {
              prompt: "expensive →",
              answer: "more expensive",
              translation: "baha → daha baha",
            },
            {
              prompt: "good →",
              answer: "better",
              translation: "yaxşı → daha yaxşı",
            },
            {
              prompt: "big →",
              answer: "bigger",
              translation: "böyük → daha böyük",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "This year's results are more better than last year's.",
              answer: "This year's results are better than last year's.",
              translation: "Bu ilin nəticələri keçən ildən yaxşıdır.",
            },
            {
              prompt: "The traffic is worst then yesterday.",
              answer: "The traffic is worse than yesterday.",
              translation: "Trafik dünəndən pisdir.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
