import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sifet-ve-zerfler",
  "sifetlerin-sirasi",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="sifet-ve-zerfler" sectionSlug="sifetlerin-sirasi">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bir neçə sifət eyni isimdən əvvəl gəldikdə, onların sırası{" "}
          <strong>sərbəst deyil</strong> — ingilis dilində sabit, gözlənilən bir
          ardıcıllıq var. Bu qayda o qədər dərin köklənib ki, ana dili
          danışanlar onu şüurlu şəkildə bilmir, sadəcə "səhv sıra" səhv
          səslənir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.1.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas sıra: OSASCOMP
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Müəyyənedicilərdən (a/the/my — bax: Fəsil 2) sonra, sifətlər
              aşağıdakı ardıcıllıqla düzülür — ən subyektivdən ən obyektivə
              doğru.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">Sıra</th>
                    <th className="p-2 font-display text-foreground">
                      Kateqoriya
                    </th>
                    <th className="p-2 font-display text-foreground">
                      Nümunə sözlər
                    </th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">O</td>
                    <td className="p-2">Opinion (rəy)</td>
                    <td className="p-2 text-muted">
                      amazing, terrible, lovely
                    </td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">S</td>
                    <td className="p-2">Size (ölçü)</td>
                    <td className="p-2 text-muted">small, huge, tiny</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">A</td>
                    <td className="p-2">Age (yaş)</td>
                    <td className="p-2 text-muted">ancient, new, young</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">S</td>
                    <td className="p-2">Shape (forma)</td>
                    <td className="p-2 text-muted">round, square, oblong</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">C</td>
                    <td className="p-2">Colour (rəng)</td>
                    <td className="p-2 text-muted">red, pale, bright</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">O</td>
                    <td className="p-2">Origin (mənşə)</td>
                    <td className="p-2 text-muted">Italian, Turkish, lunar</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">M</td>
                    <td className="p-2">Material (material)</td>
                    <td className="p-2 text-muted">wooden, cotton, metallic</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">P</td>
                    <td className="p-2">Purpose (təyinat)</td>
                    <td className="p-2 text-muted">
                      sleeping (bag), racing (car)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ExampleList
              examples={[
                {
                  en: "She bought a beautiful small antique Italian wooden chair.",
                  az: "O, gözəl, kiçik, antik, italyan, taxta bir stul aldı.",
                },
                {
                  en: "This is a lovely round red French dinner plate.",
                  az: "Bu, gözəl, dairəvi, qırmızı, fransız nahar boşqabıdır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.1.2</span>
              <h3 className="font-display text-xl text-foreground">
                Rəy sifəti həmişə birincidir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ən sadə, praktik qayda: subyektiv fikir bildirən sifət (rəy),
              obyektiv fakt bildirən sifətlərdən (ölçü, yaş, rəng və s.) həmişə{" "}
              <strong>əvvəl</strong> gəlir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "They live in an amazing modern apartment. (✗ a modern amazing apartment)",
                  az: "Onlar möhtəşəm, müasir bir mənzildə yaşayırlar.",
                },
                {
                  en: "She's a talented young architect.",
                  az: "O, istedadlı, gənc bir memardır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.1.3</span>
              <h3 className="font-display text-xl text-foreground">
                Vacib ayrım: kumulyativ vs koordinativ sifətlər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              OSASCOMP qaydası yalnız <strong>kumulyativ sifətlərə</strong>{" "}
              (birlikdə, tədricən ismi konkretləşdirən, fərqli kateqoriyalardan
              olan sifətlər) aiddir. <strong>Koordinativ sifətlər</strong> isə
              eyni kateqoriyadan olan, bir-birindən <strong>müstəqil</strong>{" "}
              sifətlərdir — bunlar vergüllə ayrılır və sırası dəyişdirilə bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: "a small round table (kumulyativ — vergülsüz, sıra sabit)",
                  az: "kiçik, dairəvi masa",
                },
                {
                  en: "a tired, hungry, frustrated employee (koordinativ — hamısı eyni kateqoriyadan, hiss/vəziyyət)",
                  az: "yorğun, ac, məyus bir işçi",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Praktik test: sifətlərin arasına "and" qoya bilirsənsə və ya
              sırasını dəyişə bilirsənsə (məna dəyişmədən) — koordinativdir,
              vergül lazımdır. Əks halda — kumulyativdir, vergülsüz, sabit
              sırada.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.1.4</span>
              <h3 className="font-display text-xl text-foreground">
                İki rəng sifəti: vergül yox, "and" ilə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Xüsusi bir hal: iki rəng sifəti birlikdə işlədikdə, vergül deyil,{" "}
              <em>and</em> bağlayıcısı ilə birləşdirilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She was wearing a black and white dress.",
                  az: "O, qara-ağ don geyinmişdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.1.5</span>
              <h3 className="font-display text-xl text-foreground">
                Praktik qeyd: real dildə nadir hallarda 2-3-dən çox sifət
                yığılır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Yuxarıdakı tam-8-kateqoriyalı nümunələr nəzəri baxımdan doğrudur,
              amma real danışıq və yazıda demək olar heç vaxt 4-5-dən çox sifət
              eyni isim üçün yığılmır — bu, qaydanı yadda saxlamaq üçün, əsasən
              2-3 sifətlik kombinasiyalarda işlək olur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "a comfortable leather office chair (opinion + material + purpose)",
                  az: "rahat, dəri, ofis stulu",
                },
                {
                  en: "an old wooden Turkish door (age + material + origin)",
                  az: "köhnə, taxta, türk qapısı",
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
            Azərbaycan dilində bir neçə sifət işlədilməsi tez-tez rast gəlinmir
            və sırası nisbətən sərbəstdir, semantik ağırlıq önəmlidir, qəti bir
            qrammatik sıra tələb olunmur. İngilis dilində isə bu,{" "}
            <strong>tam gözlənilən, sabit bir sistemdir</strong> — səhv sıra
            qrammatik cəhətdən "səhv" sayılmasa da, ana dili danışan üçün dərhal
            qeyri-təbii səslənir.
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
                wrong: "a red big car",
                right: "a big red car",
                az: "böyük, qırmızı maşın (ölçü rəngdən əvvəl)",
              },
              {
                wrong: "a wooden old table",
                right: "an old wooden table",
                az: "köhnə, taxta masa (yaş materialdan əvvəl)",
              },
              {
                wrong: "a modern amazing building",
                right: "an amazing modern building",
                az: "möhtəşəm, müasir bina (rəy hər zaman birinci)",
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
          title="Məşq 1 — Düzgün sıraya sal"
          items={[
            {
              prompt: "old / French / a / bottle / wine",
              answer: "an old French wine bottle",
              translation: "köhnə, fransız şərab şüşəsi",
            },
            {
              prompt: "small / round / a / table / wooden",
              answer: "a small round wooden table",
              translation: "kiçik, dairəvi, taxta masa",
            },
            {
              prompt: "leather / black / a / jacket",
              answer: "a black leather jacket",
              translation: "qara, dəri gödəkçə",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "a plastic small ornament",
              answer: "a small plastic ornament",
              translation: "kiçik, plastik bəzək əşyası",
            },
            {
              prompt: "a Turkish beautiful rug",
              answer: "a beautiful Turkish rug",
              translation: "gözəl, türk xalçası",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
