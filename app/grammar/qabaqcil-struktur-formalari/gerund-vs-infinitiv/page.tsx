import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "qabaqcil-struktur-formalari",
  "gerund-vs-infinitiv",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="qabaqcil-struktur-formalari"
      sectionSlug="gerund-vs-infinitiv"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu, 10.3 və 10.4-ü birləşdirən **əsas çətinlikdir**: hansı fel hansını
          tələb edir? Sabit qayda yoxdur — hər fel əzbərlənməlidir. Amma dörd
          kateqoriyaya bölündükdə, bu, xaotik yığından strukturlu bir sistemə
          çevrilir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.5.1</span>
              <h3 className="font-display text-xl text-foreground">
                Kateqoriya 1 — Yalnız gerund
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "enjoy",
                "avoid",
                "suggest",
                "finish",
                "mind",
                "admit",
                "consider",
                "deny",
                "imagine",
                "practice",
                "risk",
                "keep",
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
                  en: "We're considering hiring an additional QA engineer.",
                  az: "Əlavə QA mühəndisi işə götürməyi düşünürük.",
                },
                {
                  en: "He denied making the change without approval.",
                  az: "O, təsdiqsiz dəyişiklik etdiyini inkar etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.5.2</span>
              <h3 className="font-display text-xl text-foreground">
                Kateqoriya 2 — Yalnız infinitiv
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "want",
                "decide",
                "hope",
                "plan",
                "agree",
                "promise",
                "refuse",
                "offer",
                "manage",
                "afford",
                "learn",
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
                  en: "The vendor refused to lower the price.",
                  az: "Təchizatçı qiyməti aşağı salmaqdan imtina etdi.",
                },
                {
                  en: "We managed to fix the issue before the demo.",
                  az: "Nümayişdən əvvəl problemi düzəltməyi bacardıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.5.3</span>
              <h3 className="font-display text-xl text-foreground">
                Kateqoriya 3 — Hər ikisi, məna dəyişmir
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "like",
                "love",
                "hate",
                "prefer",
                "begin",
                "start",
                "continue",
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
                  en: "She likes reviewing code before merging. / She likes to review code before merging.",
                  az: "O, birləşdirmədən əvvəl kodu nəzərdən keçirməyi sevir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.5.4</span>
              <h3 className="font-display text-xl text-foreground">
                Kateqoriya 4 — Hər ikisi, MƏNA TAMAMİLƏ DƏYİŞİR
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ən vacib qrupdur — eyni fel, iki fərqli forma, iki **tamam
              fərqli** məna. Ümumi naxış: **gerund = keçmiş/təcrübə**,
              **infinitiv = gələcək/niyyət**.
            </p>

            <div className="space-y-4">
              <div className="border-l-2 border-line pl-4">
                <p className="text-sm text-muted mb-1">stop</p>
                <ExampleList
                  examples={[
                    {
                      en: "He stopped smoking last year. (vərdişi tərk etdi)",
                      az: "O, keçən il siqareti tərk etdi.",
                    },
                    {
                      en: "He stopped to smoke on his way to the meeting. (fasilə verdi, bir iş üçün)",
                      az: "O, iclasa gedərkən siqaret çəkmək üçün dayandı.",
                    },
                  ]}
                />
              </div>
              <div className="border-l-2 border-line pl-4">
                <p className="text-sm text-muted mb-1">remember</p>
                <ExampleList
                  examples={[
                    {
                      en: "I remember signing the contract. (xatirə — artıq baş verib)",
                      az: "Müqaviləni imzaladığımı xatırlayıram.",
                    },
                    {
                      en: "Please remember to sign the contract. (unutma, hələ ediləcək)",
                      az: "Zəhmət olmasa, müqaviləni imzalamağı unutma.",
                    },
                  ]}
                />
              </div>
              <div className="border-l-2 border-line pl-4">
                <p className="text-sm text-muted mb-1">forget</p>
                <ExampleList
                  examples={[
                    {
                      en: "I'll never forget presenting to the board for the first time. (xatirə)",
                      az: "İdarə heyəti qarşısında ilk dəfə təqdimat etməyimi heç unutmayacam.",
                    },
                    {
                      en: "He forgot to submit the invoice on time. (etməli idi, unutdu)",
                      az: "O, fakturanı vaxtında təqdim etməyi unutdu.",
                    },
                  ]}
                />
              </div>
              <div className="border-l-2 border-line pl-4">
                <p className="text-sm text-muted mb-1">try</p>
                <ExampleList
                  examples={[
                    {
                      en: "Try restarting the router if the connection drops. (sınaq/eksperiment)",
                      az: "Bağlantı kəsilsə, routerı yenidən başlatmağı sına.",
                    },
                    {
                      en: "We tried to reach the client all afternoon. (səy, uğur qeyri-müəyyən)",
                      az: "Biz bütün günorta müştəri ilə əlaqə saxlamağa çalışdıq.",
                    },
                  ]}
                />
              </div>
              <div className="border-l-2 border-line pl-4">
                <p className="text-sm text-muted mb-1">regret</p>
                <ExampleList
                  examples={[
                    {
                      en: "We regret to inform you that your application was unsuccessful. (rəsmi, pis xəbər elanı)",
                      az: "Təəssüf ki, müraciətinizin uğursuz olduğunu bildiririk.",
                    },
                    {
                      en: "I regret not backing up the files earlier. (keçmiş qərara peşmançılıq)",
                      az: "Faylları daha tez ehtiyat nüsxələmədiyimə görə peşmanam.",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.5.5</span>
              <h3 className="font-display text-xl text-foreground">
                Bonus: "need" + gerund = passiv məna
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Subyekt bir əşyadırsa, <em>need + gerund</em> passiv bir mənanı
              ("edilməlidir") daşıya bilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This report needs updating. (= needs to be updated)",
                  az: "Bu hesabat yenilənməlidir.",
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
            Azərbaycan dilində "dayandım siqaret çəkmək üçün" və "siqareti tərk
            etdim" tamam fərqli fellərlə (dayanmaq, tərk etmək) ifadə olunur —
            heç bir qarışıqlıq riski yoxdur. İngilis dilində isə eyni fel (stop)
            forması dəyişməklə (gerund/infinitiv) bu iki fərqli mənanı verir —
            bu, Azərbaycan dilli öyrənən üçün ən "sıx" məna sıxlığı yaradan
            qrammatik nöqtələrdən biridir.
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
                  "He stopped to smoke five years ago. (tərk etmə mənasında — gerund lazımdır)",
                right: "He stopped smoking five years ago.",
                az: "O, beş il əvvəl siqareti tərk etdi.",
              },
              {
                wrong:
                  "I remember to visit Paris as a child. (xatirə mənasında — gerund lazımdır)",
                right: "I remember visiting Paris as a child.",
                az: "Uşaqkən Parisə getdiyimi xatırlayıram.",
              },
              {
                wrong: "We enjoy to work with this team.",
                right: "We enjoy working with this team.",
                az: "Bu komanda ilə işləməkdən zövq alırıq.",
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
                "Did you remember ___ (send) the invoice? (vəzifə, gələcək)",
              answer: "Did you remember to send the invoice?",
              translation: "Fakturanı göndərməyi xatırladınmı?",
            },
            {
              prompt:
                "I remember ___ (meet) her at the conference last year. (xatirə)",
              answer: "I remember meeting her at the conference last year.",
              translation: "Onu keçən il konfransda gördüyümü xatırlayıram.",
            },
            {
              prompt:
                "We stopped ___ (check) the traffic before leaving. (fasilə verdik, bir iş üçün)",
              answer: "We stopped to check the traffic before leaving.",
              translation: "Getməzdən əvvəl trafiki yoxlamaq üçün dayandıq.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt:
                "We regret informing you that the position has been filled. (rəsmi elan — infinitive lazımdır)",
              answer:
                "We regret to inform you that the position has been filled.",
              translation: "Təəssüf ki, vəzifənin doldurulduğunu bildiririk.",
            },
            {
              prompt:
                "Try to restart your computer if it freezes. (sınaq/tövsiyə — gerund daha uyğundur)",
              answer: "Try restarting your computer if it freezes.",
              translation: "Kompüter donarsa, onu yenidən başlatmağı sına.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
