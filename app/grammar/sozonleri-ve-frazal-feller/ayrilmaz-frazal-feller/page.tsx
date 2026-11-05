import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sozonleri-ve-frazal-feller",
  "ayrilmaz-frazal-feller",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sozonleri-ve-frazal-feller"
      sectionSlug="ayrilmaz-frazal-feller"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu qrupda fel və particle <strong>heç vaxt ayrıla bilmir</strong> —
          obyekt (isim və ya əvəzlik olmasından asılı olmayaraq) həmişə{" "}
          <strong>bütöv birləşmədən sonra</strong> gəlir. Bu, 7.6-dakı qaydanın
          tam əksidir, xüsusilə əvəzliklə.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.7.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas qayda: obyekt həmişə bütöv birləşmədən sonra
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "She looks after her elderly parents every weekend.",
                  az: "O, hər həftəsonu yaşlı valideynlərinə baxır.",
                },
                {
                  en: "I ran into an old colleague at the conference.",
                  az: "Konfransda köhnə bir həmkarımla təsadüfən qarşılaşdım.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.7.2</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik fərq: əvəzliklə də AYRILMIR (7.6-nın əksi)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, 7.6.2-dəki qaydanın tərs tərəfidir: əvəzlik burada da{" "}
              <strong>sondan gəlir</strong>, felin və particle-in arasına
              girmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She looks after him every weekend. (✗ looks him after)",
                  az: "O, ona hər həftəsonu baxır.",
                },
                {
                  en: "I ran into her yesterday. (✗ ran her into)",
                  az: "Onunla dünən təsadüfən qarşılaşdım.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.7.3</span>
              <h3 className="font-display text-xl text-foreground">
                Niyə ayrılmır: particle əslində sözönüdür, zərf yox
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Struktur baxımdan izah: 7.6-dakı ayrıla bilən fellərdə particle{" "}
              <strong>zərf</strong> rolundadır (turn off — "off" zərfdir). Bu
              qrupda isə eyni görünüşlü söz <strong>sözönü</strong> rolunu
              oynayır, sözönü isə öz obyektindən heç vaxt ayrılmır (bax:
              7.4-dəki sabit sözönü məntiqi).
            </p>
            <ExampleList
              examples={[
                {
                  en: "He turned off the light. (off = zərf, ayrıla bilir)",
                  az: "O, işığı söndürdü.",
                },
                {
                  en: "She looked after the children. (after = sözönü, ayrılmır)",
                  az: "O, uşaqlara baxdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.7.4</span>
              <h3 className="font-display text-xl text-foreground">
                Ən çox işlənən ayrılmayan frazal fellər
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "look after",
                "look at",
                "look for",
                "depend on",
                "wait for",
                "run into",
                "come across",
                "deal with",
                "get over",
                "go through",
                "believe in",
                "care for",
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
                  en: "We're still dealing with the aftermath of the outage.",
                  az: "Biz hələ də nasazlığın nəticələri ilə məşğuluq.",
                },
                {
                  en: "I came across an interesting article about this yesterday.",
                  az: "Dünən bu barədə maraqlı bir məqaləyə rast gəldim.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.7.5</span>
              <h3 className="font-display text-xl text-foreground">
                Praktik test: əvəzliklə yoxla
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bir frazal felin ayrıla bilib-bilmədiyini bilmirsənsə, obyekti
              əvəzliklə əvəz et və iki formanı qulaqla yoxla —{" "}
              <em>fel+particle+əvəzlik</em> təbii səslənirsə, ayrılmayandır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Look after it. (təbii → ayrılmayan) vs Look it after. (qeyri-təbii)",
                  az: "Ona bax.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.7.6</span>
              <h3 className="font-display text-xl text-foreground">
                Nadir istisna: məcburi ayrılan kiçik bir qrup
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Çox kiçik bir fel qrupu (məs. <em>do over</em>) əksinə —{" "}
              <strong>yalnız ayrılmış</strong> formada təbii səslənir. Bu, geniş
              yayılmış deyil, sadəcə istisna kimi qeyd olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I have to do the report over. (təbii)",
                  az: "Hesabatı yenidən etməliyəm.",
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
            Bu bölmə əslində Azərbaycan dilli öyrənən üçün 7.6-dan daha{" "}
            <strong>asandır</strong> — çünki heç bir ayrılma yoxdur, fel və
            particle həmişə bitişik qalır, bu, Azərbaycan dilindəki "fel +
            əlavə" bitişikliyinə daha yaxındır. Çətinlik yalnız{" "}
            <strong>hansı felin ayrıla bilən, hansının bilməyən</strong>{" "}
            olduğunu bilməkdədir — bu, hər fel üçün ayrıca öyrənilməli bir
            məlumatdır.
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
                wrong: "She looked the children after.",
                right: "She looked after the children.",
                az: "O, uşaqlara baxdı.",
              },
              {
                wrong: "I ran my old friend into at the store.",
                right: "I ran into my old friend at the store.",
                az: "Mağazada köhnə dostumla təsadüfən qarşılaşdım.",
              },
              {
                wrong: "We are dealing it with carefully.",
                right: "We are dealing with it carefully.",
                az: "Biz onu diqqətlə həll edirik.",
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
          title="Məşq 1 — Əvəzliklə cümlə qur"
          items={[
            {
              prompt: "Look after the dog. → (the dog = it)",
              answer: "Look after it.",
              translation: "Ona bax.",
            },
            {
              prompt: "I ran into my manager. → (my manager = him)",
              answer: "I ran into him.",
              translation: "Menecerimlə təsadüfən qarşılaşdım.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "We are waiting the results for.",
              answer: "We are waiting for the results.",
              translation: "Nəticələri gözləyirik.",
            },
            {
              prompt: "She looked the report at quickly.",
              answer: "She looked at the report quickly.",
              translation: "O, hesabata tez baxdı.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
