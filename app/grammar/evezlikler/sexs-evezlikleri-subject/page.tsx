import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "evezlikler",
  "sexs-evezlikleri-subject",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="evezlikler"
      sectionSlug="sexs-evezlikleri-subject"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Subyekt əvəzlikləri cümlədə hərəkəti icra edən şəxs və ya əşyanı
          bildirir, felindən əvvəl gəlir. Bunlar isimlərin təkrarını önləyən ən
          əsas vasitədir, amma ingilis dilində bir neçə özünəməxsus qrammatik
          davranışa malikdirlər.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.1.1</span>
              <h3 className="font-display text-xl text-foreground">
                Siyahı və əsas funksiya
              </h3>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {["I", "you", "he", "she", "it", "we", "they"].map((p) => (
                <span
                  key={p}
                  className="font-mono text-sm text-foreground border border-line px-2 py-1 text-center"
                >
                  {p}
                </span>
              ))}
            </div>
            <ExampleList
              examples={[
                {
                  en: "I reviewed the contract yesterday.",
                  az: "Mən müqaviləni dünən nəzərdən keçirdim.",
                },
                {
                  en: "They approved the budget last week.",
                  az: "Onlar keçən həftə büdcəni təsdiqlədilər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.1.2</span>
              <h3 className="font-display text-xl text-foreground">
                "You" və "it" — subyekt və obyekt formaları eynidir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              3.2-də görəcəyin kimi, əksər şəxs əvəzliklərinin subyekt və obyekt
              üçün <strong>ayrı forması</strong> var (I/me, he/him). Lakin{" "}
              <em>you</em> və <em>it</em> istisnadır — hər iki funksiya üçün
              eyni forma işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "You approved this yourself. (subyekt)",
                  az: "Sən bunu özün təsdiqlədin.",
                },
                {
                  en: "I already told you. (obyekt, forma dəyişmir)",
                  az: "Mən artıq sənə demişdim.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.1.3</span>
              <h3 className="font-display text-xl text-foreground">
                Mürəkkəb subyektlərdə sıra və seçim: "X and I"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Başqa şəxslə birgə subyekt yaradarkən iki qayda var: (1) nəzakət
              konvensiyasına görə özündən danışan şəxs <strong>sonda</strong>{" "}
              qeyd olunur; (2) subyekt mövqeyində olduğu üçün <em>I</em>{" "}
              (subyekt forması) işlədilir, danışıq dilində tez-tez eşidilən{" "}
              <em>me</em> forması rəsmi qaydaya görə səhvdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "My colleague and I finished the report early.",
                  az: "Həmkarım və mən hesabatı vaxtından əvvəl bitirdik.",
                },
                {
                  en: "Sarah and I disagreed on the approach. (✗ Me and Sarah)",
                  az: "Sara ilə mən yanaşma barədə razılaşmadıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.1.4</span>
              <h3 className="font-display text-xl text-foreground">
                "Be" felindən sonra: rəsmi qayda və danışıq norması
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Rəsmi qrammatika qaydasına görə, <em>be</em> felindən sonra
              (linking verb, subyekti təkrar təyin edir) subyekt forması
              işlədilməlidir. Lakin bu qayda müasir danışıq dilində demək olar
              tərk edilib — <em>"It's me"</em> tam normal və qəbul edilən
              formadır, <em>"It is I"</em> isə yalnız çox rəsmi/ ədəbi
              kontekstdə eşidilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "It's me — I sent you the email. (təbii, standart)",
                  az: "Bu mənəm — sənə email göndərən.",
                },
                {
                  en: "It is I who am responsible. (çox rəsmi, nadir)",
                  az: "Məsul olan mənəm. (çox rəsmi)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.1.5</span>
              <h3 className="font-display text-xl text-foreground">
                Cinsi bilinməyəndə: cəm forması "they"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Şəxsin cinsi bilinmədikdə və ya vurğulanmaq istənmədikdə, müasir
              standart ingilis dilində tək şəxs üçün <strong>they</strong>{" "}
              işlədilir (cəm fel forması ilə) — bu, "he or she" kimi ağır
              konstruksiyanın təbii əvəzidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Someone left their laptop in the meeting room. Can you tell them?",
                  az: "Kimsə iclas otağında noutbukunu unudub. Ona xəbər verə bilərsən?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.1.6</span>
              <h3 className="font-display text-xl text-foreground">
                "It" — mücərrəd/qeyri-insan istinad və "boş" subyekt
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>It</em> təkcə əşyaya deyil, artıq 1.3 və 1.4-də tanış olduğun
              kimi hava, vaxt və mövcudluq strukturlarında da{" "}
              <strong>qrammatik, mənasız subyekt</strong> kimi çıxış edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "It's almost midnight — we should wrap up.",
                  az: "Demək olar gecə yarısıdır — yekunlaşdırmalıyıq.",
                },
                {
                  en: "It seems the client changed their mind.",
                  az: "Deyəsən, müştəri fikrini dəyişib.",
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
            Azərbaycan dilində "sən" (yaxın/qeyri-rəsmi) və "siz" (hörmət/cəm)
            ayrı-ayrı sözlərdir — nəzakət səviyyəsi əvəzliyin özündə görünür.
            İngilis dilində isə <em>you</em> universal bir sözdür: həm tək, həm
            cəm, həm yaxın, həm rəsmi münasibətdə eyni cür işlədilir — nəzakət
            başqa vasitələrlə (please, could you) ifadə olunur. Bu, Azərbaycan
            dilli öyrənən üçün ilk baxışdan qəribə görünə bilər, çünki ana dildə
            bu fərq avtomatikdir.
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
                wrong: "Me and my brother started a business.",
                right: "My brother and I started a business.",
                az: "Qardaşımla mən bir biznes başlatdıq.",
              },
              {
                wrong: "Her and I agreed on the terms.",
                right: "She and I agreed on the terms.",
                az: "O və mən şərtlərlə razılaşdıq.",
              },
              {
                wrong: "Us are ready to proceed.",
                right: "We are ready to proceed.",
                az: "Biz davam etməyə hazırıq.",
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
          title="Məşq 1 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "Me and Sarah reviewed the file together.",
              answer: "Sarah and I reviewed the file together.",
              translation: "Sara ilə mən faylı birlikdə nəzərdən keçirdik.",
            },
            {
              prompt: "Him and his team finished early.",
              answer: "He and his team finished early.",
              translation: "O və komandası tez bitirdi.",
            },
            {
              prompt: "Us need to discuss the budget.",
              answer: "We need to discuss the budget.",
              translation: "Biz büdcəni müzakirə etməliyik.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Uyğun əvəzliyi seç"
          items={[
            {
              prompt: "___ approved the design last week. (they/them)",
              answer: "They approved the design last week.",
              translation: "Onlar keçən həftə dizaynı təsdiqlədilər.",
            },
            {
              prompt: "Someone forgot ___ badge at reception.",
              answer: "Someone forgot their badge at reception.",
              translation: "Kimsə qeydiyyatda vəsiqəsini unudub.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
