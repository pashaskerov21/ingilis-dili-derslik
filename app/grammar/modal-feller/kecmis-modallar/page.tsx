import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "modal-feller",
  "kecmis-modallar",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="modal-feller" sectionSlug="kecmis-modallar">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu bölmə fəslin ən vacib **birləşdirici** hissəsidir. İndiyə qədər
          fərqli bölmələrdə (5.5, 5.7, 5.4) ayrı-ayrı gördüyün{" "}
          <strong>modal + have + III forma</strong> strukturunu bir yerə
          toplayır — eyni qrammatik forma, <strong>altı fərqli məna</strong>.
          Doğru modalı seçmək bacarığı bu bölmənin əsas məqsədidir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.8.1</span>
              <h3 className="font-display text-xl text-foreground">
                Bir struktur, altı məna
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Formanın özü sabitdir: <em>modal + have + Past Participle</em>.
              Fərqi yalnız <strong>hansı modalın seçildiyi</strong> yaradır —
              hər biri fərqli bir kommunikativ funksiyaya xidmət edir.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.8.2</span>
              <h3 className="font-display text-xl text-foreground">
                Should have / shouldn't have — tənqid, peşmançılıq (5.5-in
                davamı)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Keçmişdə <strong>düzgün olan, amma baş verməyən</strong> bir
              hərəkəti bildirir — həm öz-özünə tənqid, həm başqasına tənqid ola
              bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: "You should have told me you'd be late — I waited for an hour.",
                  az: "Mənə gecikəcəyini deməli idin — bir saat gözlədim.",
                },
                {
                  en: "We shouldn't have skipped the code review.",
                  az: "Kod baxışını buraxmamalı idik.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.8.3</span>
              <h3 className="font-display text-xl text-foreground">
                Could have / couldn't have — istifadə edilməmiş imkan
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Should have</em>-dən fərqli olaraq, <em>could have</em>{" "}
              hərəkətin "düzgün" olub-olmamasını mühakimə etmir — sadəcə{" "}
              <strong>mümkün olduğunu, amma seçilmədiyini</strong> bildirir.
              Diqqət — bunu 5.7.3-dəki "couldn't have" (məntiqi qeyri-
              mümkünlük) ilə qarışdırma, bura fərqli kontekstdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We could have taken the earlier flight, but we decided to relax first. (seçim var idi, mühakimə yoxdur)",
                  az: "Daha erkən uçuşu seçə bilərdik, amma əvvəlcə dincəlməyi seçdik.",
                },
                {
                  en: "You could have called to let me know. (yumşaq tənqid — bu, imkan var idi, istifadə olunmadı)",
                  az: "Mənə bildirmək üçün zəng edə bilərdin.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.8.4</span>
              <h3 className="font-display text-xl text-foreground">
                Would have — hipotetik nəticə (Şərti cümlələrə körpü)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Keçmişdə gerçəkləşməmiş bir <strong>şərtin nəticəsini</strong>{" "}
              bildirir — 4.8.6-da qısaca toxunulan Third Conditional-ın əsas
              elementi.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If we had tested this earlier, we would have caught the bug.",
                  az: "Bunu daha tez test etsəydik, xətanı tapardıq.",
                },
                {
                  en: "I would have called, but I lost your number. (niyyət var idi, amma mane oldu)",
                  az: "Zəng edərdim, amma nömrəni itirmişdim.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.8.5</span>
              <h3 className="font-display text-xl text-foreground">
                Must have / can't have — nəticə çıxarma (5.7-nin yeri)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu ikisi digərlərindən fərqlənir — mühakimə (should) və ya imkan
              (could) deyil, <strong>dəlilə əsaslanan nəticədir</strong>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She must have left early — her desk is empty.",
                  az: "O, tez getmiş olmalıdır — masası boşdur.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.8.6</span>
              <h3 className="font-display text-xl text-foreground">
                Needn't have — lazımsız hərəkət (edildi, sonradan lazımsız
                çıxdı)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              5.4.5-də tanış olduğun forma — hərəkət <strong>edilib</strong>,
              amma sonradan bunun lazımsız olduğu məlum olub.
            </p>
            <ExampleList
              examples={[
                {
                  en: "You needn't have brought an umbrella — the forecast was wrong.",
                  az: "Çətir gətirməyinə ehtiyac yox imiş — proqnoz səhv çıxdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.8.7</span>
              <h3 className="font-display text-xl text-foreground">
                Yekun müqayisə cədvəli
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">Forma</th>
                    <th className="p-2 font-display text-foreground">Məna</th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">should have</td>
                    <td className="p-2">
                      tənqid/peşmançılıq — düzgün olan baş vermədi
                    </td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">could have</td>
                    <td className="p-2">
                      imkan var idi, seçilmədi (mühakiməsiz)
                    </td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">would have</td>
                    <td className="p-2">
                      hipotetik nəticə/niyyət, şərtdən asılı
                    </td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">must have</td>
                    <td className="p-2">güclü müsbət nəticə (dəlilə əsasən)</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">can't have</td>
                    <td className="p-2">güclü mənfi nəticə (qeyri-mümkün)</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">needn't have</td>
                    <td className="p-2">edildi, amma lazımsız imiş</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ExampleList
              examples={[
                {
                  en: "I should have saved the file. / I could have saved it earlier. / I would have saved it, but the app crashed.",
                  az: "Faylı saxlamalı idim. / Faylı daha tez saxlaya bilərdim. / Saxlayardım, amma tətbiq çöküb.",
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
            Azərbaycan dilində keçmişə aid peşmançılıq, imkan və hipotetik
            nəticə çox vaxt eyni konstruksiya ilə ("etməli idim", "edə
            bilərdim") ifadə olunur, kontekst bunları ayırır. İngilis dilində
            isə hər bir məna <strong>fərqli, xüsusi bir modal felə</strong>{" "}
            bağlıdır — bu, Azərbaycan dilli öyrənən üçün "hansı sözü seçim"
            sualının "hansı məntiqi ötürmək istəyirəm" sualına çevrildiyi ən sıx
            qərar nöqtəsidir.
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
                  "I should have been a millionaire if I had invested earlier. (hipotetik — would lazımdır)",
                right:
                  "I would have been a millionaire if I had invested earlier.",
                az: "Daha tez investisiya etsəydim, milyonçu olardım.",
              },
              {
                wrong:
                  "I could have been more patient with my children. (peşmançılıq — should lazımdır)",
                right: "I should have been more patient with my children.",
                az: "Uşaqlarımla daha səbrli olmalı idim.",
              },
              {
                wrong:
                  "She should have missed the train — that explains the delay. (nəticə çıxarma — must lazımdır)",
                right:
                  "She must have missed the train — that explains the delay.",
                az: "O, qatarı qaçırmış olmalıdır — bu, gecikməni izah edir.",
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
          title="Məşq 1 — Uyğun modalı seç"
          items={[
            {
              prompt:
                "We ___ have booked earlier — now everything is sold out. (peşmançılıq)",
              answer:
                "We should have booked earlier — now everything is sold out.",
              translation:
                "Daha tez sifariş verməli idik — indi hər şey satılıb.",
            },
            {
              prompt:
                "He ___ have taken a taxi, but he chose to walk. (imkan var idi)",
              answer: "He could have taken a taxi, but he chose to walk.",
              translation: "O, taksi tuta bilərdi, amma piyada getməyi seçdi.",
            },
            {
              prompt:
                "I ___ have finished on time, but the printer broke down. (niyyət var idi, mane oldu)",
              answer:
                "I would have finished on time, but the printer broke down.",
              translation: "Vaxtında bitirərdim, amma printer sıradan çıxdı.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt:
                "You could have apologized — that would have been the right thing to do. (düzgünlük mühakiməsi — should lazımdır)",
              answer:
                "You should have apologized — that would have been the right thing to do.",
              translation: "Üzr istəməli idin — bu, düzgün olardı.",
            },
            {
              prompt:
                "The office is dark — everyone should have gone home. (nəticə çıxarma)",
              answer: "The office is dark — everyone must have gone home.",
              translation: "Ofis qaranlıqdır — hamı evə getmiş olmalıdır.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
