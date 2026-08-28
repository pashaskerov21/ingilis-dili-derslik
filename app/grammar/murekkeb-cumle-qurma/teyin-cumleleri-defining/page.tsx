import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "murekkeb-cumle-qurma",
  "teyin-cumleleri-defining",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="murekkeb-cumle-qurma"
      sectionSlug="teyin-cumleleri-defining"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Təyin budaq cümlələri isim haqqında **vacib, ayırdedici** məlumat
          verir — bu məlumat olmasa, dinləyici hansı şəxs/əşyadan danışıldığını
          bilməz. Bu bölmə "defining" (məhdudlaşdıran) tipini əhatə edir —
          vergülsüz, isimlə sıx bağlı formanı.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.3.1</span>
              <h3 className="font-display text-xl text-foreground">
                Vacib məlumat, vergülsüz
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Budaq cümləni çıxarsan, cümlə mənasız/qeyri-müəyyən qalır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The employee who submitted the report left early.",
                  az: "Hesabatı təqdim edən işçi tez getdi.",
                },
                {
                  en: "These are the files that need urgent review.",
                  az: "Bunlar təcili baxış tələb edən fayllardır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.3.2</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas nisbi əvəzliklər
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">
                      Əvəzlik
                    </th>
                    <th className="p-2 font-display text-foreground">
                      İstinad
                    </th>
                  </tr>
                </thead>
                <tbody className="text-foreground font-mono">
                  <tr className="border-b border-line">
                    <td className="p-2">who</td>
                    <td className="p-2 font-body">şəxs</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">which</td>
                    <td className="p-2 font-body">əşya/heyvan</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">that</td>
                    <td className="p-2 font-body">şəxs VƏ əşya (informal)</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">whose</td>
                    <td className="p-2 font-body">sahiblik (şəxs və əşya)</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">where</td>
                    <td className="p-2 font-body">yer</td>
                  </tr>
                  <tr>
                    <td className="p-2">when</td>
                    <td className="p-2 font-body">zaman</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ExampleList
              examples={[
                {
                  en: "This is the office where we hold our client meetings.",
                  az: "Bu, müştəri iclaslarımızı keçirdiyimiz ofisdir.",
                },
                {
                  en: "That's the manager whose team won the award.",
                  az: "Bu, komandası mükafat qazanan menecerdir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.3.3</span>
              <h3 className="font-display text-xl text-foreground">
                "That" — who/which-in qeyri-rəsmi əvəzedicisi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Defining budaq cümlələrdə <em>that</em> hər ikisinin (şəxs/ əşya)
              əvəzinə işlənə bilər — bu, gündəlik danışıqda daha çox yayılıb,
              statistik olaraq who/which-dən tez-tez üstün tutulur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She's the developer that fixed the critical bug.",
                  az: "O, kritik xətanı düzəldən proqramçıdır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.3.4</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik qayda: subyekt kimi buraxıla bilməz, obyekt kimi bilər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əgər əvəzlik budaq cümlənin **subyektidirsə**, o, mütləq
              yazılmalıdır. Əgər **obyektdirsə**, tamamilə **buraxıla bilər**
              (buna "zero relative clause" deyilir).
            </p>
            <ExampleList
              examples={[
                {
                  en: "The candidate who interviewed yesterday got the job. (subyekt — buraxıla bilməz)",
                  az: "Dünən müsahibə verən namizəd işi aldı.",
                },
                {
                  en: "The candidate (who/that) we interviewed yesterday got the job. (obyekt — buraxıla bilər)",
                  az: "Dünən müsahibə etdiyimiz namizəd işi aldı.",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Praktik test: boşluqdan sonra başqa bir subyekt varmı? Varsa
              (yuxarıdakı "we" kimi), əvəzlik obyektdir, buraxıla bilər.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.3.5</span>
              <h3 className="font-display text-xl text-foreground">
                Sözönü ilə: formal (əvvəldə) vs informal (sonda)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Budaq cümlədə sözönü varsa, rəsmi üslubda əvəzlikdən əvvələ keçir
              (bu zaman "whom" tələb olunur), qeyri-rəsmi üslubda isə cümlənin
              sonunda qalır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She's the client with whom we signed the contract. (rəsmi)",
                  az: "O, müqavilə imzaladığımız müştəridir.",
                },
                {
                  en: "She's the client that we signed the contract with. (qeyri-rəsmi)",
                  az: "O, müqavilə imzaladığımız müştəridir.",
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
            Azərbaycan dilində təyin budaq cümləsi çox vaxt **feli sifət**
            (participle) ilə, isimdən **əvvəl** qurulur ("hesabatı təqdim edən
            işçi"). İngilis dilində isə əksinə, budaq cümlə isimdən **sonra**
            gəlir və ayrıca bağlayıcı əvəzlik (who/that) tələb edir — bu,
            cümlənin təşkilinin tərsinə çevrilməsi deməkdir və Azərbaycan dilli
            öyrənən üçün ilk baxışda ən çaşdırıcı struktur fərqlərindən biridir.
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
                wrong: "The manager which approved the budget is out today.",
                right: "The manager who approved the budget is out today.",
                az: "Büdcəni təsdiqləyən menecer bu gün yoxdur.",
              },
              {
                wrong: "This is the project that it caused the most delays.",
                right: "This is the project that caused the most delays.",
                az: "Bu, ən çox gecikməyə səbəb olan layihədir.",
              },
              {
                wrong:
                  "The report she wrote was excellent, and she submitted it late.",
                right:
                  "The report that she wrote was excellent, but she submitted it late.",
                az: "Onun yazdığı hesabat əla idi, amma gec təqdim etdi.",
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
          title="Məşq 1 — Uyğun nisbi əvəzliyi yaz"
          items={[
            {
              prompt: "This is the tool ___ helped us automate the process.",
              answer: "This is the tool that helped us automate the process.",
              translation: "Bu, prosesi avtomatlaşdırmağa kömək edən alətdir.",
            },
            {
              prompt: "I know the woman ___ car is parked outside.",
              answer: "I know the woman whose car is parked outside.",
              translation: "Bayırda maşını dayanan qadını tanıyıram.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Buraxıla bilirmi? (subyekt/obyekt)"
          items={[
            {
              prompt:
                "The email (that) I sent yesterday was never received. (obyekt)",
              answer: "The email I sent yesterday was never received.",
              translation: "Dünən göndərdiyim email heç vaxt alınmadı.",
            },
            {
              prompt:
                "The engineer who fixed the bug left the company. (subyekt — buraxıla bilməz)",
              answer: "The engineer who fixed the bug left the company.",
              translation: "Xətanı düzəldən mühəndis şirkəti tərk etdi.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
