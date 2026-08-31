import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "qabaqcil-struktur-formalari",
  "passiv-noev-esaslari",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="qabaqcil-struktur-formalari"
      sectionSlug="passiv-noev-esaslari"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Passiv növ diqqəti hərəkəti **icra edəndən** hərəkəti **qəbul edənə**
          yönəldir. Bu, ayrıca bir zaman deyil — istənilən zamanda (Present
          Simple-dan Future Perfect-ə qədər) həm aktiv, həm passiv forma
          mövcuddur. Əsas düstur sadədir: **be + III forma** — dəyişən yalnız
          "be" felinin özüdür.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.1.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas transformasiya
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Aktiv cümlədəki **obyekt** passiv cümlədə **subyektə** çevrilir.
              Əsl icraçı (agent) isə "by" ilə sona keçir və ya tamamilə
              buraxılır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The team reviews the code every day. (aktiv)",
                  az: "Komanda hər gün kodu nəzərdən keçirir.",
                },
                {
                  en: "The code is reviewed every day (by the team). (passiv)",
                  az: "Kod hər gün (komanda tərəfindən) nəzərdən keçirilir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.1.2</span>
              <h3 className="font-display text-xl text-foreground">
                Bütün zamanlarda passiv — tam cədvəl
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">Zaman</th>
                    <th className="p-2 font-display text-foreground">
                      Passiv nümunə
                    </th>
                  </tr>
                </thead>
                <tbody className="text-foreground font-mono">
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Present Simple</td>
                    <td className="p-2">The report is sent weekly.</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Present Continuous</td>
                    <td className="p-2">The report is being reviewed.</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Present Perfect</td>
                    <td className="p-2">The report has been sent.</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Past Simple</td>
                    <td className="p-2">The report was sent yesterday.</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Past Continuous</td>
                    <td className="p-2">The report was being reviewed.</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Past Perfect</td>
                    <td className="p-2">The report had been sent.</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">Future Simple</td>
                    <td className="p-2">The report will be sent.</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-body">Modal</td>
                    <td className="p-2">The report must be sent today.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-foreground">
              Diqqət et: yalnız **"be" forması** dəyişir (is/was/has been/ will
              be), Past Participle (sent) hər zaman **eyni** qalır.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.1.3</span>
              <h3 className="font-display text-xl text-foreground">
                Nə vaxt passiv işlədilir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Passiv, icraçı **naməlum, önəmsiz və ya aydın** olduqda, yaxud
              diqqət hərəkətin özünə/nəticəsinə yönəldiyi zaman işlədilir —
              elmi, texniki və rəsmi mətnlərdə xüsusilə çox rast gəlinir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "My laptop was stolen last night. (icraçı naməlum)",
                  az: "Noutbukum dünən gecə oğurlandı.",
                },
                {
                  en: "The samples are analyzed before publication. (diqqət nəticədə, icraçı önəmsiz)",
                  az: "Nümunələr dərcdən əvvəl analiz edilir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.1.4</span>
              <h3 className="font-display text-xl text-foreground">
                "By" ifadəsi: könüllü, yalnız vacib olduqda
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              "By + icraçı" yalnız icraçı **vacib və ya gözlənilməz** olduqda
              əlavə olunur. Naməlum/aydın/önəmsiz olduqda tamamilə buraxılır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The bridge was designed by a local engineer. (vacib, maraqlı məlumat)",
                  az: "Körpü yerli mühəndis tərəfindən layihələndirilib.",
                },
                {
                  en: "My wallet was stolen. (✗ by someone — lazımsız, aydındır)",
                  az: "Pul kisəm oğurlandı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.1.5</span>
              <h3 className="font-display text-xl text-foreground">
                Məhdudiyyət: obyektsiz (keçişsiz) fellər passivləşmir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Obyekt qəbul etməyən fellər (arrive, happen, occur, sleep, exist)
              passiv formaya keçə bilməz — çünki "qəbul edən" tərəf yoxdur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The delay happened yesterday. (✗ was happened)",
                  az: "Gecikmə dünən baş verdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.1.6</span>
              <h3 className="font-display text-xl text-foreground">
                Modal fellə passiv: modal + be (bazada) + III forma
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Modal fellə birgə passiv qurarkən, "be" **həmişə bazaformada**
              qalır — "being" və ya "been" deyil.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This issue must be resolved before the release. (✗ must been/being resolved)",
                  az: "Bu problem buraxılışdan əvvəl həll edilməlidir.",
                },
                {
                  en: "The data can be accessed from any device.",
                  az: "Məlumata istənilən cihazdan giriş əldə edilə bilər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.1.7</span>
              <h3 className="font-display text-xl text-foreground">
                Qeyri-rəsmi alternativ: "get-passive"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Danışıq dilində <em>be</em> əvəzinə <em>get</em> ilə passiv qurmaq
              mümkündür — daha canlı, gündəlik bir ton verir. Rəsmi yazıda
              "be-passive" üstünlük təşkil edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Our proposal got rejected. (qeyri-rəsmi) / Our proposal was rejected. (rəsmi)",
                  az: "Təklifimiz rədd edildi.",
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
            Azərbaycan dilində passiv (məchul) növ felin özünə şəkilçi
            (-ıl/-il/-ul/-ül) əlavə etməklə qurulur ("yazılır", "göndərilir") —
            bir sözdə. İngilis dilində isə passiv **iki söz** (be + III forma)
            tələb edir və bu iki sözün hər ikisi düzgün formalaşmalıdır — bu,
            Azərbaycan dilli öyrənən üçün struktur baxımdan daha "ağır" bir
            konstruksiyadır.
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
                wrong: "The report send every Friday.",
                right: "The report is sent every Friday.",
                az: "Hesabat hər cümə göndərilir.",
              },
              {
                wrong: "This task must being finished today.",
                right: "This task must be finished today.",
                az: "Bu tapşırıq bu gün bitirilməlidir.",
              },
              {
                wrong: "The accident was happened near the office.",
                right: "The accident happened near the office.",
                az: "Qəza ofisin yaxınlığında baş verdi.",
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
          title="Məşq 1 — Passivə çevir"
          items={[
            {
              prompt: "The company launched the product last year. →",
              answer: "The product was launched by the company last year.",
              translation: "Məhsul keçən il şirkət tərəfindən buraxıldı.",
            },
            {
              prompt: "They will announce the results tomorrow. →",
              answer: "The results will be announced tomorrow.",
              translation: "Nəticələr sabah elan olunacaq.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "The invoice must sent before Friday.",
              answer: "The invoice must be sent before Friday.",
              translation: "Faktura cüməyə qədər göndərilməlidir.",
            },
            {
              prompt: "The meeting was arrived late. (arrive keçişsizdir)",
              answer: "The meeting started late.",
              translation: "İclas gec başladı.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
