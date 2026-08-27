import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sifet-ve-zerfler",
  "zerf-duzeltme",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="sifet-ve-zerfler" sectionSlug="zerf-duzeltme">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Zərflərin böyük əksəriyyəti sifətdən <strong>-ly</strong> şəkilçisi
          ilə düzəlir, amma bu qaydanın bir neçə orfoqrafik alt-forması və —
          daha vacibi — sifətlə eyni görünən, amma tam fərqli məna daşıyan bir
          qrup "cüt forma" var.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.2.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas qayda: sifət + -ly
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "She reviewed the contract carefully before signing.",
                  az: "O, imzalamazdan əvvəl müqaviləni diqqətlə nəzərdən keçirdi.",
                },
                {
                  en: "The team responded quickly to the outage.",
                  az: "Komanda nasazlığa tez cavab verdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.2.2</span>
              <h3 className="font-display text-xl text-foreground">
                Orfoqrafiya alt-qaydaları
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
                    <td className="p-2">samit+y → -ily</td>
                    <td className="p-2 font-mono">
                      easy → easily, happy → happily
                    </td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">-le → -y (yalnız "l" saxlanır)</td>
                    <td className="p-2 font-mono">
                      simple → simply, gentle → gently
                    </td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">-ic → -ically</td>
                    <td className="p-2 font-mono">
                      basic → basically, tragic → tragically
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">-ll ilə bitən: yalnız -y</td>
                    <td className="p-2 font-mono">full → fully</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ExampleList
              examples={[
                {
                  en: "He explained the process quite simply.",
                  az: "O, prosesi kifayət qədər sadə şəkildə izah etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.2.3</span>
              <h3 className="font-display text-xl text-foreground">
                Sifət və zərf eyni formada olan sözlər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bir qrup söz həm sifət, həm zərf kimi{" "}
              <strong>eyni yazılışla</strong> işlənir — bunlara "-ly" əlavə
              etmək səhvdir.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "fast",
                "hard",
                "late",
                "right",
                "wrong",
                "straight",
                "early",
                "daily",
                "weekly",
                "monthly",
                "yearly",
              ].map((w) => (
                <span
                  key={w}
                  className="font-mono text-sm border border-line px-2 py-1"
                >
                  {w}
                </span>
              ))}
            </div>
            <ExampleList
              examples={[
                {
                  en: "This is a fast car. (sifət) / She drives fast. (zərf, ✗ fastly)",
                  az: "Bu, sürətli maşındır. / O, sürətli sürür.",
                },
                {
                  en: "The team meets weekly to review progress.",
                  az: "Komanda irəliləyişi nəzərdən keçirmək üçün həftəlik görüşür.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.2.4</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik istisna: good → well
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Good</em>-un zərfi "goodly" deyil — tamam fərqli bir söz,{" "}
              <strong>well</strong>. Bu, ən çox səhv edilən qrammatik
              nöqtələrdən biridir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This is a good presentation. (sifət)",
                  az: "Bu, yaxşı bir təqdimatdır.",
                },
                {
                  en: "She presented the results well. (zərf, ✗ good)",
                  az: "O, nəticələri yaxşı təqdim etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.2.5</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik cütlər: hard/hardly, late/lately — MƏNA dəyişir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzi sözlərdə -ly forması sadəcə üslub fərqi deyil,{" "}
              <strong>tamamilə fərqli bir məna</strong> daşıyır. Bu, hər ikisini
              bilmədən qarışdırıla biləcək ən təhlükəli qrupdur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He works hard every day. (hard = çox səylə)",
                  az: "O, hər gün çox çalışır.",
                },
                {
                  en: "He hardly works at all. (hardly = demək olar heç)",
                  az: "O, demək olar heç işləmir.",
                },
                {
                  en: "The train arrived late. (late = gec)",
                  az: "Qatar gec gəldi.",
                },
                {
                  en: "I haven't seen him lately. (lately = son vaxtlar)",
                  az: "Onu son vaxtlar görməmişəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.2.6</span>
              <h3 className="font-display text-xl text-foreground">
                -ly ilə bitən sifətlərin zərf forması YOXDUR
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzi sifətlər artıq -ly ilə bitir (friendly, lovely, silly, ugly,
              lonely, costly) — bunlardan əlavə -ly əlavə etməklə zərf düzəltmək
              mümkün deyil (tələffüz baxımından çox çətindir). Bunun əvəzinə "in
              a ... way/manner" ifadəsi işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She greeted us in a friendly way. (✗ friendlily)",
                  az: "O, bizi mehriban şəkildə qarşıladı.",
                },
                {
                  en: "He behaved in a silly manner during the meeting. (✗ sillily)",
                  az: "O, iclas zamanı axmaqcasına davrandı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.2.7</span>
              <h3 className="font-display text-xl text-foreground">
                Bağlayıcı fellərdən sonra: sifət, zərf YOX
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Be, become, seem, look, smell, taste, feel</em> kimi bağlayıcı
              (linking) fellərdən sonra <strong>sifət</strong> işlədilir — bu
              fellər hərəkəti deyil, subyektin özünün vəziyyətini təsvir edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This soup tastes amazing. (✗ amazingly — sifət lazımdır)",
                  az: "Bu şorba möhtəşəm dadır.",
                },
                {
                  en: "I feel bad about missing the deadline. (✗ badly)",
                  az: "Son tarixi qaçırdığım üçün özümü pis hiss edirəm.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "I feel badly" geniş yayılmış bir səhvdir — "badly" fəaliyyət
              tərzini bildirir (məs. "I feel badly" = toxunma hissim zəifdir),
              "bad" isə emosional vəziyyəti.
            </p>
          </div>
        </section>

        {/* ---------- MÜQAYİSƏ QUTUSU ---------- */}
        <aside className="border-l-2 border-accent bg-accent/5 p-5 space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Azərbaycan dili ilə struktur fərqi
          </h4>
          <p className="text-foreground leading-relaxed">
            Azərbaycan dilində sifətdən zərf düzəltmək çox vaxt formanın özündə
            fərq yaratmır ("yaxşı" — həm sifət, həm zərf kimi işlənə bilir:
            "yaxşı insan" / "yaxşı işləyir"). İngilis dilində isə bu ayrım{" "}
            <strong>məcburidir</strong> (good/well) və üstəlik bəzi cütlərdə
            (hard/hardly) tamam əks məna yaradır — bu, Azərbaycan dilli öyrənən
            üçün gözlənilməz bir "tələ" nöqtəsidir.
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
                wrong: "She sings very good.",
                right: "She sings very well.",
                az: "O, çox yaxşı oxuyur.",
              },
              {
                wrong: "He drives very fastly.",
                right: "He drives very fast.",
                az: "O, çox sürətli sürür.",
              },
              {
                wrong:
                  "I hardly worked all day, I'm exhausted. (bura 'hard' lazımdır — çox işlədi, az yox)",
                right: "I worked hard all day, I'm exhausted.",
                az: "Bütün gün çox çalışdım, yorulmuşam.",
              },
              {
                wrong: "This cake tastes deliciously.",
                right: "This cake tastes delicious.",
                az: "Bu tort ləzzətli dadır.",
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
          title="Məşq 1 — Uyğun zərf/sifət formasını yaz"
          items={[
            {
              prompt: "He completed the task (careful). →",
              answer: "He completed the task carefully.",
              translation: "O, tapşırığı diqqətlə tamamladı.",
            },
            {
              prompt: "She did (good) on the exam. →",
              answer: "She did well on the exam.",
              translation: "O, imtahanda yaxşı nəticə göstərdi.",
            },
            {
              prompt: "This milk smells (bad). →",
              answer: "This milk smells bad.",
              translation: "Bu süd pis qoxuyur. (bağlayıcı fel → sifət)",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "The room looked beautifully after the renovation.",
              answer: "The room looked beautiful after the renovation.",
              translation: "Otaq təmirdən sonra gözəl görünürdü.",
            },
            {
              prompt:
                "He hasn't called me lately, meaning he calls very rarely, using 'hard'.",
              answer: "He hardly calls me anymore.",
              translation: "O, artıq demək olar mənə zəng etmir.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
