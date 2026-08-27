import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "feller-ve-zamanlar",
  "past-continuous",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="feller-ve-zamanlar" sectionSlug="past-continuous">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Past Continuous keçmişdə <strong>müəyyən bir anda davam edən</strong>{" "}
          hərəkəti təsvir edir — Past Simple-ın (4.6) bitmiş, nöqtəvi
          hadisələrindən fərqli olaraq, burada hərəkət həmin andan{" "}
          <strong>əvvəl başlayıb, sonra da davam edib</strong>. Bu fərq xüsusilə
          iki zaman birgə işlənəndə həlledici əhəmiyyət kəsb edir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.7.1</span>
              <h3 className="font-display text-xl text-foreground">
                Forma: was/were + fel-ing
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "We were finalizing the contract when the client called.",
                  az: "Müştəri zəng edəndə müqaviləni yekunlaşdırırdıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.7.2</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 1 — Kəsilən hərəkət (uzun + qısa)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ən klassik istifadə: uzun, davam edən hərəkət (Continuous) — daha
              qısa, kəsici hərəkət (Past Simple) tərəfindən yarımçıq kəsilir.{" "}
              <em>When</em> adətən qısa, kəsici hərəkəti təqdim edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I was reviewing the budget when the power went out.",
                  az: "İşıq gedəndə büdcəni nəzərdən keçirirdim.",
                },
                {
                  en: "She was presenting her findings when someone interrupted with a question.",
                  az: "O, tapıntılarını təqdim edərkən kimsə sualla sözünü kəsdi.",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Diqqət: "was reviewing" hərəkətinin işıq getməzdən əvvəl başladığı
              və (naməlum) davam edib-etmədiyi nəzərdə tutulur — Past Simple-dan
              fərqli olaraq bitmə anı vurğulanmır.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.7.3</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 2 — Paralel hərəkətlər: "while"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İki hərəkət eyni vaxt kəsimində, bir-birini kəsmədən, paralel
              davam edəndə hər ikisi Continuous formada olur. Bu, "when" ilə
              deyil, <em>while/as</em> ilə işarələnir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "While I was preparing the slides, she was collecting the data.",
                  az: "Mən slaydları hazırlayarkən, o məlumat toplayırdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.7.4</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 3 — Fon təsviri (povest daxilində)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Hekayə və ya hesabatda "səhnəni qurmaq", ətraf mühiti təsvir etmək
              üçün — əsas hadisə (adətən Past Simple) bu fonun üzərində baş
              verir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "It was raining heavily, and the office was unusually quiet when the news arrived.",
                  az: "Şiddətli yağış yağırdı və xəbər gələndə ofis qeyri-adi dərəcədə sakit idi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.7.5</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 4 — Keçmişdə müvəqqəti vəziyyət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              4.2.3-ün ("indi müvəqqəti") keçmiş qarşılığı — o dövrdə müvəqqəti,
              sonradan dəyişmiş vəziyyət.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I was working part-time while I finished my degree.",
                  az: "Təhsilimi bitirən müddətdə yarımştat işləyirdim.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.7.6</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 5 — "Always" ilə keçmiş narazılıq
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              4.2.6-dakı eyni "always + Continuous = şikayət" məntiqi keçmiş
              zamana da köçürülür.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He was always arriving late to our morning stand-ups.",
                  az: "O, hər zaman səhər stand-up-larımıza gec gəlirdi. (narazılıq)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.7.7</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik fərq: konkret vaxt "bölür" yoxsa "kəsir"?
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Eyni konkret vaxt ifadəsi (at 6 PM) iki tamam fərqli struktur
              yaradır: Past Simple ilə hərəkət{" "}
              <strong>həmin anda başlayıb</strong> (və ya bütövlükdə baş verib);
              Past Continuous ilə hərəkət həmin andan{" "}
              <strong>əvvəl artıq davam edirdi</strong>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "At 6 PM, I called the client. (zəng məhz saat 6-da başladı)",
                  az: "Saat 6-da müştəriyə zəng etdim.",
                },
                {
                  en: "At 6 PM, I was calling the client. (zəng artıq davam edirdi, saat 6 sadəcə bir nöqtədir)",
                  az: "Saat 6-da müştəriyə zəng edirdim. (artıq danışırdım)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.7.8</span>
              <h3 className="font-display text-xl text-foreground">
                Məhdudiyyət: stative fellər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              4.3-dəki qayda keçmiş zamanda da tam qüvvədədir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I knew the answer immediately. (✗ was knowing)",
                  az: "Cavabı dərhal bilirdim.",
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
            Azərbaycan dilində nəqli keçmiş ("edirdi" formaları) davam edən
            keçmiş hərəkəti bildirə bilir, bu, Past Continuous-a nisbətən yaxın
            bir konsept təqdim edir. Əsas çətinlik isə 4.7.2/4.7.3-də olduğu
            kimi,{" "}
            <strong>
              iki fərqli keçmiş zamanın (Simple/ Continuous) eyni cümlədə birgə,
              konkret rolla
            </strong>{" "}
            (kəsən/kəsilən, paralel) işlənməsidir — bu qədər sistemli bir ayrım
            Azərbaycan dilində yoxdur.
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
                wrong: "I read the report when she called.",
                right: "I was reading the report when she called.",
                az: "O zəng edəndə hesabatı oxuyurdum. (kəsilən hərəkət)",
              },
              {
                wrong: "While I was cook dinner, he was setting the table.",
                right: "While I was cooking dinner, he was setting the table.",
                az: "Mən şam yeməyi bişirərkən, o, süfrə açırdı.",
              },
              {
                wrong: "He was knowing the answer before I asked.",
                right: "He knew the answer before I asked.",
                az: "Mən soruşmazdan əvvəl o, cavabı bilirdi.",
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
                "We ___ (discuss) the proposal when the fire alarm ___ (go) off.",
              answer:
                "We were discussing the proposal when the fire alarm went off.",
              translation:
                "Yanğın həyəcan siqnalı çalanda təklifi müzakirə edirdik.",
            },
            {
              prompt:
                "While she ___ (write) the report, he ___ (check) the figures.",
              answer:
                "While she was writing the report, he was checking the figures.",
              translation: "O hesabatı yazarkən, digəri rəqəmləri yoxlayırdı.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Past Simple yoxsa Past Continuous?"
          items={[
            {
              prompt:
                "At 9 AM, the meeting (started/was starting). (məhz o anda başladı)",
              answer: "At 9 AM, the meeting started.",
              translation: "Saat 9-da iclas başladı.",
            },
            {
              prompt:
                "At 9 AM, we (had/were having) the meeting. (artıq davam edirdi)",
              answer: "At 9 AM, we were having the meeting.",
              translation: "Saat 9-da iclas artıq davam edirdi.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
