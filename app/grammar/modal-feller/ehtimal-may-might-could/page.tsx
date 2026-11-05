import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "modal-feller",
  "ehtimal-may-might-could",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="modal-feller"
      sectionSlug="ehtimal-may-might-could"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu bölmə bir faktın <strong>doğru olma ehtimalını</strong> (yəqinlik,
          yoxsa şübhə) ifadə edən modal fellərə həsr olunub. Diqqət: bu,
          5.1-dəki bacarıq və ya 5.2-dəki icazə mənasından fərqli — burada
          söhbət "nə edə bilər" deyil, "doğru ola bilər mi" sualındandır.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.6.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas forma və məna: "bəlkə də doğrudur"
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "She may be in a meeting right now.",
                  az: "O, hazırda iclasda ola bilər.",
                },
                {
                  en: "The client might change the requirements again.",
                  az: "Müştəri tələbləri yenidən dəyişdirə bilər.",
                },
                {
                  en: "Prices could go up next quarter.",
                  az: "Qiymətlər növbəti rübdə qalxa bilər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.6.2</span>
              <h3 className="font-display text-xl text-foreground">
                Əminlik dərəcəsi: nüans, sərt sərhəd deyil
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ənənəvi olaraq <em>may</em> bir qədər daha çox əminlik bildirir,{" "}
              <em>might</em> isə bir az daha şübhəli/ehtiyatlı çalar daşıyır.
              Lakin bu fərq çox incədir və ana dili danışanların özləri arasında
              da razılaşma yoxdur — praktik olaraq üçü də (may/might/could)
              demək olar bir-birinin yerinə keçə bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He may know Sarah's number. (bir qədər əmin)",
                  az: "O, Saranın nömrəsini bilə bilər.",
                },
                {
                  en: "He might know Sarah's number. (bir az daha şübhəli)",
                  az: "O, bəlkə Saranın nömrəsini bilir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.6.3</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik qayda: inkarda "might not/may not" ≠ "can't/couldn't"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ən vacib fərqdir: zəif inkar ehtimal ("bəlkə doğru deyil")
              üçün <strong>might not/may not</strong> işlədilir.{" "}
              <strong>Can't/couldn't</strong> isə tam fərqli, çox{" "}
              <strong>güclü</strong> bir mənanı — "demək olar ki qeyri-
              mümkündür" — bildirir. Bunları qarışdırmaq mesajın gücünü tamamilə
              dəyişir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She might not be aware of the change. (bəlkə xəbəri yoxdur — zəif ehtimal)",
                  az: "Onun dəyişiklikdən xəbəri olmaya bilər.",
                },
                {
                  en: "She can't be aware of the change — we only decided this an hour ago. (qeyri-mümkündür — güclü inam)",
                  az: "Onun xəbəri ola bilməz — biz bunu bir saat əvvəl qərara aldıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.6.4</span>
              <h3 className="font-display text-xl text-foreground">
                "Can" vs "could": ümumi həqiqət vs konkret vəziyyət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ehtimal mənasında <em>can</em> daha çox{" "}
              <strong>ümumi, hər zaman doğru</strong> bir imkanı bildirir.{" "}
              <em>Could</em> isə <strong>konkret bir vəziyyətə</strong> aid,
              daha az əmin bir ehtimalı ifadə edir — həm də gələcək ehtimal üçün{" "}
              <em>can</em> deyil, <em>could</em> işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Server outages can happen without warning. (ümumi, hər zaman doğru)",
                  az: "Server nasazlıqları xəbərdarlıqsız baş verə bilər.",
                },
                {
                  en: "This project could be a great opportunity for the team. (konkret, gələcək ehtimal)",
                  az: "Bu layihə komanda üçün əla fürsət ola bilər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.6.5</span>
              <h3 className="font-display text-xl text-foreground">
                Sual formasında: birbaşa may/might işlənmir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>May/might</em> ehtimal sualı yaratmaq üçün{" "}
              <strong>birbaşa</strong> işlənmir — bunun əvəzinə "Do you
              think...?" kimi dolayı struktur işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Do you think she might be running late? (✗ Might she be running late?)",
                  az: "Fikrincə, o gecikə bilərmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.6.6</span>
              <h3 className="font-display text-xl text-foreground">
                Əminlik spektri — ümumi xülasə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bütün modal fellər əminlik dərəcəsinə görə bir spektr təşkil edir
              — bu, 5.7-də (must/can't ilə güclü nəticə) davam edəcək.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">
                      Əminlik
                    </th>
                    <th className="p-2 font-display text-foreground">Forma</th>
                  </tr>
                </thead>
                <tbody className="text-foreground font-mono">
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">~95% (müsbət)</td>
                    <td className="p-2">must (5.7)</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">&lt;50%</td>
                    <td className="p-2">may / might / could</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-body">~95% (mənfi)</td>
                    <td className="p-2">can't / couldn't (5.7)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ---------- MÜQAYİSƏ QUTUSU ---------- */}
        <aside className="border-l-2 border-accent bg-accent/5 p-5 space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Azərbaycan dili ilə struktur fərqi
          </h4>
          <p className="text-foreground leading-relaxed">
            Azərbaycan dilində ehtimal "bəlkə", "ola bilər", "yəqin ki" kimi
            ayrıca zərflərlə ifadə olunur, fel formasının özü dəyişmir. İngilis
            dilində isə ehtimal bilavasitə <strong>modal felin özündə</strong>{" "}
            kodlanır — bu, həm daha yığcam, həm də (5.6.3-dəki kimi) inkar
            formasında əminlik dərəcəsinin qəfil dəyişməsinə səbəb olan bir
            sistemdir.
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
                  "She can't be at the meeting — I'm not sure. (zəif ehtimal üçün can't səhvdir)",
                right: "She might not be at the meeting.",
                az: "O, iclasda olmaya bilər.",
              },
              {
                wrong: "Might she come to the party? (birbaşa sual)",
                right: "Do you think she might come to the party?",
                az: "Fikrincə, o məclisə gələ bilərmi?",
              },
              {
                wrong:
                  "This mistake can happen next time too. (konkret gələcək ehtimal üçün can yox)",
                right: "This mistake could happen next time too.",
                az: "Bu səhv növbəti dəfə də baş verə bilər.",
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
          title="Məşq 1 — Uyğun modal feli seç"
          items={[
            {
              prompt: "It ___ rain later — the sky looks dark. (zəif ehtimal)",
              answer: "It might rain later — the sky looks dark.",
              translation: "Sonra yağış yağa bilər — səma tutqun görünür.",
            },
            {
              prompt: "___ you think the deal ___ fall through? (dolayı sual)",
              answer: "Do you think the deal might fall through?",
              translation: "Fikrincə, sövdələşmə pozula bilərmi?",
            },
            {
              prompt: "Delays ___ happen during peak season. (ümumi həqiqət)",
              answer: "Delays can happen during peak season.",
              translation:
                "Ən çox yüklənmə mövsümündə gecikmələr baş verə bilər.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt:
                "He can't be busy — I'm just guessing. (zəif ehtimal üçün can't səhvdir)",
              answer: "He might not be busy.",
              translation: "O, məşğul olmaya bilər.",
            },
            {
              prompt: "May she be at home right now? (birbaşa sual)",
              answer: "Do you think she might be at home right now?",
              translation: "Fikrincə, o indi evdə ola bilərmi?",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
