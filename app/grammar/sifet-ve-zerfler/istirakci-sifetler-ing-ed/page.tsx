import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sifet-ve-zerfler",
  "istirakci-sifetler-ing-ed",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sifet-ve-zerfler"
      sectionSlug="istirakci-sifetler-ing-ed"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Fəslin son bölməsi. Bir çox fel -ing və -ed şəkilçiləri ilə sifətə
          çevrilə bilir (bore → boring/bored) — bunlar{" "}
          <strong>eyni kökdən</strong> gəlsə də, mənaca tamamilə əks
          istiqamətlərə işarə edir: biri <strong>səbəbi</strong>, digəri{" "}
          <strong>hissi</strong> bildirir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.8.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas qayda: -ing = səbəb, -ed = hiss
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>-ing</strong> — hissi <strong>yaradan</strong> şey/ şəxsi
              təsvir edir. <strong>-ed</strong> — həmin hissi{" "}
              <strong>keçirən</strong> şəxsi təsvir edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The presentation was boring. (səbəb — özü darıxdırıcı idi)",
                  az: "Təqdimat darıxdırıcı idi.",
                },
                {
                  en: "The audience was bored. (hiss — onlar darıxdılar)",
                  az: "Auditoriya darıxmışdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.8.2</span>
              <h3 className="font-display text-xl text-foreground">
                "-ed" yalnız hiss edə bilən varlıqla işlənir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Cansız əşyalar hiss keçirə bilmədiyi üçün, onlar üçün{" "}
              <strong>yalnız -ing</strong> forması təbiidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This report is confusing. (✗ This report is confused — hesabat hiss edə bilməz)",
                  az: "Bu hesabat çaşdırıcıdır.",
                },
                {
                  en: "I was confused by the instructions. (mən — hiss edən şəxs)",
                  az: "Təlimatlardan çaşdım.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.8.3</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik fərq: "I'm boring" vs "I'm bored"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu iki cümlə arasındakı fərq nəticəni tamamilə dəyişir —{" "}
              <em>diqqətlə seç</em>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I'm boring. (= Mən başqalarını darıxdırıram — bu, özün haqqında pis bir şeydir!)",
                  az: "Mən darıxdırıcıyam.",
                },
                {
                  en: "I'm bored. (= Mən darıxıram, edəcək bir şeyim yoxdur)",
                  az: "Mən darıxıram.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.8.4</span>
              <h3 className="font-display text-xl text-foreground">
                Diqqət: "-ing" şəxsi də təsvir edə bilər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              6.8.2-dəki qaydadan səhv nəticə çıxarıb "-ing yalnız cansız
              əşyalar üçündür" düşünmə — qayda "cansız/canlı" deyil,{" "}
              <strong>"səbəb/hiss"</strong> əsasındadır. Şəxs özü hissin{" "}
              <strong>səbəbi</strong> olduqda, -ing tamamilə düzgündür.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She's a really interesting person. (o, marağı yaradır)",
                  az: "O, həqiqətən maraqlı bir insandır.",
                },
                {
                  en: "He's so annoying — he interrupts everyone. (o, əsəbləşdirir)",
                  az: "O, çox əsəbiləşdiricidir — hər kəsin sözünü kəsir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.8.5</span>
              <h3 className="font-display text-xl text-foreground">
                Praktik test: "Kim/nə səbəbdir, kim hiss edir?"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Hər dəfə çaşdıqda özünə bu sualı ver: təsvir etdiyim şey{" "}
              <strong>hissin mənbəyidirmi</strong>, yoxsa{" "}
              <strong>hissi keçirən tərəfdirmi</strong>?
            </p>
            <ExampleList
              examples={[
                {
                  en: "The sunset is stunning. (səbəb → -ing)",
                  az: "Gün batımı heyrətamizdir.",
                },
                {
                  en: "I was stunned by the sunset. (hiss edən → -ed)",
                  az: "Gün batımından heyrətə gəldim.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.8.6</span>
              <h3 className="font-display text-xl text-foreground">
                Ən çox işlənən cütlər
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">
                      -ing (səbəb)
                    </th>
                    <th className="p-2 font-display text-foreground">
                      -ed (hiss)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-foreground font-mono">
                  {[
                    ["boring", "bored"],
                    ["interesting", "interested"],
                    ["exciting", "excited"],
                    ["surprising", "surprised"],
                    ["confusing", "confused"],
                    ["annoying", "annoyed"],
                    ["frightening", "frightened"],
                    ["satisfying", "satisfied"],
                    ["tiring", "tired"],
                    ["disappointing", "disappointed"],
                    ["embarrassing", "embarrassed"],
                    ["worrying", "worried"],
                  ].map(([ing, ed]) => (
                    <tr
                      key={ing}
                      className="border-b border-line last:border-b-0"
                    >
                      <td className="p-2">{ing}</td>
                      <td className="p-2">{ed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.8.7</span>
              <h3 className="font-display text-xl text-foreground">
                Qarışdırılmaması lazım olan hal: fiziki vəziyyət bildirən -ed
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzi -ed sifətlər (damaged, broken, fixed) emosiya deyil,{" "}
              <strong>fiziki vəziyyəti</strong> bildirir — bunlar bu bölmənin
              əsas qaydasına aid deyil, sadəcə səthi oxşarlıq var.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The laptop screen is damaged. (fiziki vəziyyət, emosiya deyil)",
                  az: "Noutbukun ekranı zədəlidir.",
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
            Azərbaycan dilində "darıxdırıcı" (səbəb) və "darıxmış" (hiss) kimi
            ayrı sözlər mövcuddur, bu, konseptual olaraq ingilis dilinə
            bənzəyir. Əsas çətinlik ondadır ki, ingilis dilində bu ayrım{" "}
            <strong>eyni fel kökündən sadə şəkilçi dəyişikliyi ilə</strong>{" "}
            yaradılır (bore → boring/bored), Azərbaycan dilində isə çox vaxt
            tamamilə fərqli söz köklərinə keçmək lazım gəlir — bu, ingilis
            dilində sistemli, nizamlı bir naxış olduğu üçün, düzgün
            öyrənildikdən sonra əslində Azərbaycan dilindən{" "}
            <strong>daha asan əzbərlənən</strong> bir qaydadır.
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
                  "I am very boring in this meeting. (özün darıxırsan demək istəyirsən)",
                right: "I am very bored in this meeting.",
                az: "Mən bu iclasda çox darıxıram.",
              },
              {
                wrong: "This movie is bored.",
                right: "This movie is boring.",
                az: "Bu film darıxdırıcıdır.",
              },
              {
                wrong:
                  "She was interesting in the topic. (o, mövzu ilə maraqlanırdı)",
                right: "She was interested in the topic.",
                az: "O, mövzu ilə maraqlanırdı.",
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
          title="Məşq 1 — Uyğun formanı seç"
          items={[
            {
              prompt:
                "The client's feedback was very ___ (surprise) — we didn't expect praise.",
              answer:
                "The client's feedback was very surprising — we didn't expect praise.",
              translation:
                "Müştərinin rəyi çox təəccüblü idi — tərif gözləmirdik.",
            },
            {
              prompt: "I was ___ (disappoint) with the final result.",
              answer: "I was disappointed with the final result.",
              translation: "Son nəticədən məyus oldum.",
            },
            {
              prompt: "This puzzle is really ___ (confuse).",
              answer: "This puzzle is really confusing.",
              translation: "Bu tapmaca həqiqətən çaşdırıcıdır.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt:
                "I'm so bored — I keep talking about myself and no one listens.",
              answer:
                "I'm so boring — I keep talking about myself and no one listens.",
              translation:
                "Mən çox darıxdırıcıyam — özümdən danışmaqdan qalmıram və heç kim qulaq asmır.",
            },
            {
              prompt: "The kids were very excite about the trip.",
              answer: "The kids were very excited about the trip.",
              translation: "Uşaqlar səyahət haqqında çox həyəcanlı idilər.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
