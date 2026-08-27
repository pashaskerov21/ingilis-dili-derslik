import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "feller-ve-zamanlar",
  "stative-feller",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="feller-ve-zamanlar" sectionSlug="stative-feller">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          4.2-də "davam edən hərəkət" prinsipini öyrəndik. Lakin bir qrup fel bu
          prinsipə tabe olmur — çünki onlar hərəkəti deyil,{" "}
          <strong>vəziyyəti, halı</strong> bildirir, halbuki hal "davam edir"
          demək məntiqsizdir (hal sadəcə mövcuddur). Bu fellər — olsalar belə —
          Continuous formasında demək olar heç vaxt işlənmir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.3.1</span>
              <h3 className="font-display text-xl text-foreground">
                Kateqoriyalar və siyahı
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Mental vəziyyət
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "know",
                    "believe",
                    "understand",
                    "remember",
                    "forget",
                    "realize",
                    "suppose",
                  ].map((v) => (
                    <span
                      key={v}
                      className="font-mono text-sm border border-line px-2 py-1"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Hiss və emosiya
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "love",
                    "like",
                    "hate",
                    "prefer",
                    "want",
                    "need",
                    "fear",
                  ].map((v) => (
                    <span
                      key={v}
                      className="font-mono text-sm border border-line px-2 py-1"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Sahiblik
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "have (sahiblik mənasında)",
                    "own",
                    "belong",
                    "possess",
                  ].map((v) => (
                    <span
                      key={v}
                      className="font-mono text-sm border border-line px-2 py-1"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Duyğu/qavrayış
                </p>
                <div className="flex flex-wrap gap-2">
                  {["see", "hear", "smell", "taste", "seem", "appear"].map(
                    (v) => (
                      <span
                        key={v}
                        className="font-mono text-sm border border-line px-2 py-1"
                      >
                        {v}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
            <ExampleList
              examples={[
                {
                  en: "I understand your concern about the timeline.",
                  az: "Vaxt cədvəli ilə bağlı narahatlığını başa düşürəm.",
                },
                {
                  en: "This proposal belongs to the marketing department.",
                  az: "Bu təklif marketinq şöbəsinə aiddir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.3.2</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas qayda: "indi" mənasında belə Simple işlədilir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Hətta danışıq anına aid olsa belə (4.2.2-nin "indi" funksiyası
              gözlənilə bilər), stative fellər Continuous formaya keçmir —
              sadəcə Present Simple işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I know exactly what you mean. (✗ I am knowing)",
                  az: "Nə demək istədiyini tam başa düşürəm.",
                },
                {
                  en: "She doesn't like this approach. (✗ isn't liking)",
                  az: "O, bu yanaşmanı bəyənmir.",
                },
                {
                  en: "This bag belongs to my colleague. (✗ is belonging)",
                  az: "Bu çanta həmkarıma aiddir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.3.3</span>
              <h3 className="font-display text-xl text-foreground">
                Praktik test: "Nə baş verdi?" sualı
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bir felin stative olub-olmadığını yoxlamaq üçün sadə üsul: ona "Nə
              baş verdi?" sualını ver. Cavab tapa bilirsənsə — dinamik (hərəkət)
              felidir. Cavab tapa bilmirsənsə — stative-dir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He ran to catch the bus. — What happened? He ran. (dinamik)",
                  az: "O, avtobusu tutmaq üçün qaçdı.",
                },
                {
                  en: "I know the answer. — What happened? (cavab yoxdur — stative)",
                  az: "Mən cavabı bilirəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.3.4</span>
              <h3 className="font-display text-xl text-foreground">
                Qarışıq fellər: eyni söz, mənaya görə stative VƏ dinamik
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ən çətin hissə budur: bir çox fel mənasından asılı olaraq{" "}
              <strong>həm</strong> stative, <strong>həm</strong> dinamik ola
              bilər. Continuous forma yalnız dinamik mənada düzgündür.
            </p>
            <div className="space-y-3">
              <div className="border-l-2 border-line pl-4">
                <p className="text-sm text-muted mb-1">think</p>
                <ExampleList
                  examples={[
                    {
                      en: "I think this plan will work. (fikir — stative)",
                      az: "Düşünürəm ki, bu plan işləyəcək.",
                    },
                    {
                      en: "I'm thinking about switching vendors. (proses — dinamik)",
                      az: "Təchizatçını dəyişməyi düşünürəm. (proses gedir)",
                    },
                  ]}
                />
              </div>
              <div className="border-l-2 border-line pl-4">
                <p className="text-sm text-muted mb-1">have</p>
                <ExampleList
                  examples={[
                    {
                      en: "The company has three offices. (sahiblik — stative)",
                      az: "Şirkətin üç ofisi var.",
                    },
                    {
                      en: "We're having a meeting about the budget. (fəaliyyət — dinamik)",
                      az: "Büdcə haqqında iclas keçiririk.",
                    },
                  ]}
                />
              </div>
              <div className="border-l-2 border-line pl-4">
                <p className="text-sm text-muted mb-1">see</p>
                <ExampleList
                  examples={[
                    {
                      en: "I see what you mean. (dərk etmək — stative)",
                      az: "Nə demək istədiyini anlayıram.",
                    },
                    {
                      en: "I'm seeing the client this afternoon. (görüşmək — dinamik)",
                      az: "Bu gün günorta müştəri ilə görüşürəm.",
                    },
                  ]}
                />
              </div>
              <div className="border-l-2 border-line pl-4">
                <p className="text-sm text-muted mb-1">taste</p>
                <ExampleList
                  examples={[
                    {
                      en: "This sauce tastes too salty. (xüsusiyyət — stative)",
                      az: "Bu sous çox duzludur.",
                    },
                    {
                      en: "The chef is tasting the sauce before serving. (fəaliyyət — dinamik)",
                      az: "Şef təqdim etməzdən əvvəl sousu dadır.",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.3.5</span>
              <h3 className="font-display text-xl text-foreground">
                İstisnalar: "feel" və "look" ilə çeviklik
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzi stative fellər (xüsusilə <em>feel</em> və <em>look</em>) tam
              məna dəyişikliyi olmadan belə Continuous formada işlənə bilər —
              bu, əksər digər stative fellər üçün keçərli deyil.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I'm feeling much better today. (həm 'I feel' də düzgün olardı)",
                  az: "Bu gün özümü xeyli yaxşı hiss edirəm.",
                },
                {
                  en: "The project is looking promising so far.",
                  az: "Layihə hələlik ümidverici görünür.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.3.6</span>
              <h3 className="font-display text-xl text-foreground">
                Qeyri-rəsmi/reklam üslubu: "I'm loving it"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Müasir danışıq dilində və reklamlarda ("I'm loving it") stative
              fellər bəzən vurğu üçün Continuous formada eşidilir. Bu,{" "}
              <strong>standart, rəsmi qrammatika deyil</strong> — işgüzar yazıda
              və imtahanlarda bundan qaçınılmalıdır.
            </p>
          </div>
        </section>

        {/* ---------- MÜQAYİSƏ QUTUSU ---------- */}
        <aside className="border-l-2 border-accent bg-accent/5 p-5 space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Azərbaycan dili ilə struktur fərqi
          </h4>
          <p className="text-foreground leading-relaxed">
            Azərbaycan dilində "bilirəm", "sevirəm", "istəyirəm" kimi fellər
            qrammatik cəhətdən adi fellərdən fərqlənmir — heç bir xüsusi
            "stative" kateqoriyası yoxdur. Buna görə Azərbaycan dilli öyrənən
            üçün "niyə 'I am knowing' səhvdir, amma 'I am working' düzgündür"
            sualı təbii yaranır — cavab budur ki, ingilis dili hərəkəti
            (dəyişən, prosesi olan) haldan (sabit, mövcud olan) qrammatik
            cəhətdən ayırır, Azərbaycan dilində isə bu ayrım fel formasında əks
            olunmur.
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
                wrong: "I am understanding the issue now.",
                right: "I understand the issue now.",
                az: "İndi problemi başa düşürəm.",
              },
              {
                wrong: "She is wanting more information.",
                right: "She wants more information.",
                az: "O, daha çox məlumat istəyir.",
              },
              {
                wrong: "This car is belonging to the company.",
                right: "This car belongs to the company.",
                az: "Bu maşın şirkətə aiddir.",
              },
              {
                wrong: "We are knowing the risks involved.",
                right: "We know the risks involved.",
                az: "Biz mövcud riskləri bilirik.",
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
              prompt: "I ___ (not / believe) his explanation.",
              answer: "I don't believe his explanation.",
              translation: "Onun izahına inanmıram.",
            },
            {
              prompt:
                "We ___ (have) a meeting right now. (fəaliyyət mənasında)",
              answer: "We are having a meeting right now.",
              translation: "Hazırda iclas keçiririk.",
            },
            {
              prompt: "This solution ___ (seem) reasonable.",
              answer: "This solution seems reasonable.",
              translation: "Bu həll ağlabatan görünür.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "I am not understanding your point.",
              answer: "I don't understand your point.",
              translation: "Fikrini başa düşmürəm.",
            },
            {
              prompt: "He is having a house in Baku. (sahiblik)",
              answer: "He has a house in Baku.",
              translation: "Onun Bakıda evi var.",
            },
            {
              prompt: "She is knowing the answer already.",
              answer: "She already knows the answer.",
              translation: "O, artıq cavabı bilir.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
