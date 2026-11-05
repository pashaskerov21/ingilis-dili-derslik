import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sozonleri-ve-frazal-feller",
  "istiqamet-herekt-sozonleri",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sozonleri-ve-frazal-feller"
      sectionSlug="istiqamet-herekt-sozonleri"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          7.1-dəki statik yer sözönlərindən (harada?) fərqli olaraq, bu
          sözönləri <strong>hərəkəti</strong> (haraya? necə?) təsvir edir. Bir
          çoxu 7.1-dəki statik qarşılığından yaranıb (in→into, on→onto), amma öz
          müstəqil incəlikləri var.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.3.1</span>
              <h3 className="font-display text-xl text-foreground">
                "To" vs "towards": çatmaq, yoxsa sadəcə istiqamət?
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>To</strong> — mənzil başına <strong>çatıldığını</strong>{" "}
              bildirir. <strong>Towards</strong> — sadəcə istiqaməti göstərir,
              çatıb-çatmadığı bəlli deyil.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She walked to the office. (çatdı)",
                  az: "O, ofisə piyada getdi. (çatdı)",
                },
                {
                  en: "He was walking towards the office when I saw him. (istiqamətdə, çatıb-çatmadığı bəlli deyil)",
                  az: "Mən onu görəndə o, ofisə doğru gedirdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.3.2</span>
              <h3 className="font-display text-xl text-foreground">
                "Into" və "onto" — 7.1-dəki in/on-un hərəkət forması
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>Into</strong> — bağlı sahənin xaricindən daxilinə hərəkət.{" "}
              <strong>Onto</strong> — bir səthin üzərinə hərəkət. Statik
              "in/on"dan fərqli, hərəkət prosesini vurğulayır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She walked into the meeting room. (in — statik olsaydı: 'she is in the room')",
                  az: "O, iclas otağına girdi.",
                },
                {
                  en: "He climbed onto the roof to fix the antenna.",
                  az: "O, antenanı düzəltmək üçün dama qalxdı.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "Onto" (bir söz) hərəkət üçün, "on to" (iki söz) yalnız "on"
              başqa fel birləşməsinə aid olanda ("move on to the next topic").
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.3.3</span>
              <h3 className="font-display text-xl text-foreground">
                "Through" vs "across" — daxildən, yoxsa üzərindən?
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>Through</strong> — bağlı/əhatəli bir mühitin{" "}
              <strong>içindən</strong> keçmək. <strong>Across</strong> — açıq
              bir səthin/sərhədin bir tərəfindən <strong>digərinə</strong>{" "}
              keçmək. Açıq sahələrdə (park, şəhər) hər ikisi işlənə bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We drove through the tunnel. (bağlı mühit)",
                  az: "Tunelin içindən maşınla keçdik.",
                },
                {
                  en: "They walked across the street. (açıq sərhəd)",
                  az: "Onlar küçənin o tərəfinə keçdilər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.3.4</span>
              <h3 className="font-display text-xl text-foreground">
                "Along" və "past" — xətt boyu, yanından keçmək
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "We walked along the river for an hour.",
                  az: "Bir saat çay boyu getdik.",
                },
                {
                  en: "The bus went past our stop without slowing down.",
                  az: "Avtobus yavaşlamadan bizim dayanacağın yanından keçdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.3.5</span>
              <h3 className="font-display text-xl text-foreground">
                "Over" və "under" — hərəkətdə şaquli münasibət
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The plane flew over the mountains.",
                  az: "Təyyarə dağların üzərindən uçdu.",
                },
                {
                  en: "The cable runs under the floor.",
                  az: "Kabel döşəmənin altından keçir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.3.6</span>
              <h3 className="font-display text-xl text-foreground">
                Əks istiqamətlər: out of / off
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>Out of</strong> — into-nun əksi (daxildən xaricə).{" "}
              <strong>Off</strong> — onto-nun əksi (səthdən uzaqlaşma).
            </p>
            <ExampleList
              examples={[
                {
                  en: "She stepped out of the elevator.",
                  az: "O, liftdən çıxdı.",
                },
                {
                  en: "The book fell off the shelf.",
                  az: "Kitab rəfdən düşdü.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.3.7</span>
              <h3 className="font-display text-xl text-foreground">
                Xatırlatma: hərəkət sözönləri hərəkət felləri ilə işlənir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              4.3-dəki stative fellərlə (know, understand, believe) bu sözönləri
              işlətmək məntiqsizdir — bunlar yalnız fiziki hərəkəti bildirən
              fellərlə (walk, drive, jump, climb, run) təbii işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He drove into the garage. (✗ He knew into the garage)",
                  az: "O, qaraja maşınla girdi.",
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
            Azərbaycan dilində istiqamət bildirən hal şəkilçiləri (-a/-ə, "-a
            doğru") ümumi bir istiqaməti bildirir, ingilis dilindəki qədər incə
            fərqlər (into/onto/through/across arasında) leksik olaraq ayrı
            sözlərlə ifadə olunmur. Bu, Azərbaycan dilli öyrənən üçün fəza
            münasibətlərini daha dəqiq sözlərlə ifadə etmək tələb edən yeni bir
            söz ehtiyatı sistemidir.
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
                  "She walked in the room. (hərəkət, in yox into lazımdır)",
                right: "She walked into the room.",
                az: "O, otağa girdi.",
              },
              {
                wrong: "He climbed on the roof. (hərəkət, on yox onto)",
                right: "He climbed onto the roof.",
                az: "O, dama qalxdı.",
              },
              {
                wrong:
                  "We drove to the tunnel and out the other side. (through unudulub)",
                right: "We drove through the tunnel and out the other side.",
                az: "Tunelin içindən keçib digər tərəfə çıxdıq.",
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
          title="Məşq 1 — Uyğun sözönünü seç"
          items={[
            {
              prompt: "The children jumped ___ the pool. (bağlı sahə, hərəkət)",
              answer: "The children jumped into the pool.",
              translation: "Uşaqlar hovuza atıldılar.",
            },
            {
              prompt:
                "We walked ___ the bridge to get to the other side. (açıq sərhəd)",
              answer: "We walked across the bridge to get to the other side.",
              translation: "Digər tərəfə keçmək üçün körpüdən keçdik.",
            },
            {
              prompt: "The cat jumped ___ the table. (səth, hərəkət)",
              answer: "The cat jumped onto the table.",
              translation: "Pişik masanın üzərinə atıldı.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "She threw the ball in the basket.",
              answer: "She threw the ball into the basket.",
              translation: "O, topu səbətə atdı.",
            },
            {
              prompt:
                "We walked to the park, unsure if we would arrive. (towards lazımdır)",
              answer: "We walked towards the park, unsure if we would arrive.",
              translation: "Parka doğru getdik, çatacağımızdan əmin deyildik.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
