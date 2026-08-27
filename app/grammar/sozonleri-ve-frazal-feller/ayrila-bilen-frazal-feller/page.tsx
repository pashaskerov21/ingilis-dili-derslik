import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sozonleri-ve-frazal-feller",
  "ayrila-bilen-frazal-feller",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sozonleri-ve-frazal-feller"
      sectionSlug="ayrila-bilen-frazal-feller"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Ayrıla bilən frazal fellərdə fel və particle{" "}
          <strong>obyektin araya girməsinə icazə verir</strong>. Bu bölmənin
          əsas qaydası — pronomlarla işləyəndə —{" "}
          <strong>ana dili danışanların qulağına dərhal çarpan</strong> bir səhv
          nöqtəsidir, ona görə diqqətlə öyrənilməlidir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.6.1</span>
              <h3 className="font-display text-xl text-foreground">
                İsim obyektlə: iki mövqe də düzgündür
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Obyekt isim olduqda, particle ya obyektdən əvvəl, ya sonra gələ
              bilər — hər ikisi eyni dərəcədə düzgündür.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Please turn off the projector after the meeting.",
                  az: "Zəhmət olmasa, iclasdan sonra proyektoru söndür.",
                },
                {
                  en: "Please turn the projector off after the meeting. (eyni məna)",
                  az: "Zəhmət olmasa, iclasdan sonra proyektoru söndür.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.6.2</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik qayda: əvəzliklə MƏCBURİ ayrılma
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Obyekt əvəzlik (it, them, him, her) olduqda,{" "}
              <strong>yalnız bir</strong> sıra düzgündür — əvəzlik felin və
              particle-in <strong>arasına</strong> gəlməlidir. Bu, ən çox
              pozulan, amma ən aydın eşidilən səhvdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Turn it off before you leave. (✗ Turn off it)",
                  az: "Getməzdən əvvəl onu söndür.",
                },
                {
                  en: "I've already sent them out. (✗ sent out them)",
                  az: "Onları artıq göndərmişəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.6.3</span>
              <h3 className="font-display text-xl text-foreground">
                Praktik meyar: fel+zərf birləşməsi adətən ayrıla bilir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sabit qayda olmasa da, faydalı bir eyristika: fel+{" "}
              <strong>zərf</strong> particle birləşmələri (sözönü yox) adətən
              ayrıla bilən qrupdadır.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "turn off/on",
                "pick up",
                "put off",
                "turn down",
                "throw away",
                "hand out",
                "fill in",
                "call off",
                "set up",
                "take off",
              ].map((v) => (
                <span
                  key={v}
                  className="font-mono text-sm border border-line px-2 py-1"
                >
                  {v}
                </span>
              ))}
            </div>
            <ExampleList
              examples={[
                {
                  en: "She filled in the application form carefully.",
                  az: "O, ərizə formasını diqqətlə doldurdu.",
                },
                {
                  en: "They set up a new department last year.",
                  az: "Onlar keçən il yeni şöbə qurdular.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.6.4</span>
              <h3 className="font-display text-xl text-foreground">
                Uzun/mürəkkəb obyektlər: particle-dən sonra üstünlük təşkil edir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Obyekt uzun bir söz birləşməsidirsə, cümlənin oxunaqlılığı üçün
              particle-dən <strong>sonra</strong> yerləşdirmək daha təbii
              səslənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We need to put off the quarterly review meeting scheduled for next Tuesday. (təbii)",
                  az: "Növbəti çərşənbə axşamına planlaşdırılan rüblük baxış iclasını təxirə salmalıyıq.",
                },
                {
                  en: "We need to put the quarterly review meeting scheduled for next Tuesday off. (qeyri-təbii, uzun)",
                  az: "(eyni məna, amma qeyri-təbii səslənir)",
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
            Azərbaycan dilində fel və onun "əlavəsi" (əgər varsa) bir söz kimi
            bitişik yazılır və heç vaxt aralarına başqa söz girmir. İngilis
            dilindəki bu "ayrıla bilmə" xüsusiyyəti — xüsusilə əvəzliklə məcburi
            ayrılma qaydası — Azərbaycan dilində paraleli olmayan, tamamilə yeni
            bir sintaktik davranışdır.
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
                wrong: "Please turn off it before leaving.",
                right: "Please turn it off before leaving.",
                az: "Getməzdən əvvəl onu söndür.",
              },
              {
                wrong: "She picked up them from the airport.",
                right: "She picked them up from the airport.",
                az: "O, onları hava limanından götürdü.",
              },
              {
                wrong: "We called off it at the last minute.",
                right: "We called it off at the last minute.",
                az: "Biz onu son anda ləğv etdik.",
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
          title="Məşq 1 — Əvəzliklə düzgün cümlə qur"
          items={[
            {
              prompt: "Turn off the lights. → (the lights = them)",
              answer: "Turn them off.",
              translation: "Onları söndür.",
            },
            {
              prompt: "I'll pick up your parents. → (your parents = them)",
              answer: "I'll pick them up.",
              translation: "Mən onları götürəcəm.",
            },
            {
              prompt: "Please fill in the form. → (the form = it)",
              answer: "Please fill it in.",
              translation: "Zəhmət olmasa, onu doldur.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "Can you turn on it?",
              answer: "Can you turn it on?",
              translation: "Onu aça bilərsənmi?",
            },
            {
              prompt: "We need to set up it before the client arrives.",
              answer: "We need to set it up before the client arrives.",
              translation: "Müştəri gəlməzdən əvvəl onu qurmalıyıq.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
