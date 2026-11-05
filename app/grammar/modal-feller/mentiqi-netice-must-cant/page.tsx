import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "modal-feller",
  "mentiqi-netice-must-cant",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="modal-feller"
      sectionSlug="mentiqi-netice-must-cant"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu bölmə 5.6-dakı ehtimal spektrinin ən yüksək (və ən aşağı) ucunu
          tamamlayır — dəlilə əsaslanan, demək olar{" "}
          <strong>tam əminliyə</strong> yaxın nəticə çıxarma. Diqqət: bu{" "}
          <em>must</em> 5.3-dəki öhdəlik mənasından fərqli bir funksiyadır —
          burada söhbət "etməlisən"dən deyil, "belə olmalıdır (məntiqi nəticəyə
          görə)"dən gedir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.7.1</span>
              <h3 className="font-display text-xl text-foreground">
                Must — güclü müsbət nəticə (~95% əminlik)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əlimizdə olan dəlilə əsasən, başqa məntiqi izah{" "}
              <strong>demək olar yoxdur</strong>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The lights are on — she must be home.",
                  az: "İşıqlar yanır — o, evdə olmalıdır.",
                },
                {
                  en: "He must know the answer; he's been studying this for years.",
                  az: "O, cavabı bilməlidir; illərdir bunu öyrənir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.7.2</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik qayda: "must"-un mənfi qarşılığı "mustn't" DEYİL,
                "can't"dır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ən vacib və ən çox səhv edilən qaydadır: nəticə çıxararkən,{" "}
              <em>must</em>-un inkarı <strong>mustn't</strong> deyil (bu, yalnız
              5.4-dəki qadağa mənasında mövcuddur) —{" "}
              <strong>can't/cannot</strong> istifadə olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "That can't be true — I just spoke to him five minutes ago. (✗ mustn't be true)",
                  az: "Bu doğru ola bilməz — mən onunla beş dəqiqə əvvəl danışdım.",
                },
                {
                  en: "She can't be at work — I saw her car at home. (✗ mustn't be)",
                  az: "O, işdə ola bilməz — maşınını evdə gördüm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.7.3</span>
              <h3 className="font-display text-xl text-foreground">
                Keçmişə aid nəticə: must have / can't have + III forma
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Keçmişdə baş vermiş bir hadisə haqqında indiki dəlilə əsasən
              nəticə çıxararkən — <em>have</em> əlavə olunur, əsas fel Past
              Participle formasına keçir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The lights are off — they must have left already.",
                  az: "İşıqlar sönüb — onlar artıq getmiş olmalıdır.",
                },
                {
                  en: "He can't have finished the report — he only started an hour ago.",
                  az: "O, hesabatı bitirmiş ola bilməz — cəmi bir saat əvvəl başlamışdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.7.4</span>
              <h3 className="font-display text-xl text-foreground">
                "Must not have" — mənfi nəticə (baş verməyib)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Diqqət: bu, 5.7.2-dəki "mustn't" (qadağa) ilə{" "}
              <strong>eyni şey deyil</strong> — burada tam forma "must not have"
              istifadə olunur və bu, "yəqin ki baş verməyib" mənasını verir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The car is still dirty — he must not have washed it yet.",
                  az: "Maşın hələ də kirlidir — o, deyəsən hələ yumamışdır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.7.5</span>
              <h3 className="font-display text-xl text-foreground">
                Bütöv əminlik spektri (5.6-nın tamamlanması)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">
                      Əminlik
                    </th>
                    <th className="p-2 font-display text-foreground">İndiki</th>
                    <th className="p-2 font-display text-foreground">Keçmiş</th>
                  </tr>
                </thead>
                <tbody className="text-foreground font-mono">
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">~95% (müsbət)</td>
                    <td className="p-2">must</td>
                    <td className="p-2">must have + III</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-body">&lt;50%</td>
                    <td className="p-2">may/might/could</td>
                    <td className="p-2">may/might/could have + III</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-body">~95% (mənfi)</td>
                    <td className="p-2">can't</td>
                    <td className="p-2">can't/couldn't have + III</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ExampleList
              examples={[
                {
                  en: "She might have missed the train — that would explain the delay. (<50%, keçmiş)",
                  az: "O, qatarı qaçırmış ola bilər — bu, gecikməni izah edərdi.",
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
            Azərbaycan dilində güclü nəticə çıxarma "olmalıdır", "yəqin ki" kimi
            ifadələrlə göstərilir, mənfi tərəfi isə eyni "olmalıdır" sözünün
            inkarı ilə ("ola bilməz") ifadə olunur — simmetrik bir sistemdir.
            İngilis dilində isə bu simmetriya{" "}
            <strong>qrammatik cəhətdən pozulur</strong> — müsbət tərəfdə{" "}
            <em>must</em>, mənfi tərəfdə isə tamam fərqli bir söz (
            <em>can't</em>) işlənir. Bu asimmetriya, Azərbaycan dilli öyrənən
            üçün ən gözlənilməz struktur "sıçrayışlarından" biridir.
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
                wrong: "That mustn't be correct — the numbers don't add up.",
                right: "That can't be correct — the numbers don't add up.",
                az: "Bu, doğru ola bilməz — rəqəmlər uyğun gəlmir.",
              },
              {
                wrong: "He mustn't have seen the email yet.",
                right:
                  "He can't have seen the email yet. / He must not have seen the email yet.",
                az: "O, hələ emaili görməmiş olmalıdır.",
              },
              {
                wrong: "She must knows the answer.",
                right: "She must know the answer.",
                az: "O, cavabı bilməlidir. (fel bazada qalır)",
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
          title="Məşq 1 — must yoxsa can't?"
          items={[
            {
              prompt: "The office is empty — everyone ___ have left already.",
              answer: "The office is empty — everyone must have left already.",
              translation: "Ofis boşdur — hamı artıq getmiş olmalıdır.",
            },
            {
              prompt:
                "He ___ be the manager — he's only been here a week. (qeyri-mümkün)",
              answer: "He can't be the manager — he's only been here a week.",
              translation:
                "O, menecer ola bilməz — cəmi bir həftədir buradadır.",
            },
            {
              prompt: "This ___ be the wrong address — no one is answering.",
              answer: "This must be the wrong address — no one is answering.",
              translation: "Bu, yanlış ünvan olmalıdır — heç kim cavab vermir.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "That mustn't be right — check the calculation again.",
              answer: "That can't be right — check the calculation again.",
              translation: "Bu, doğru ola bilməz — hesablamanı yenidən yoxla.",
            },
            {
              prompt: "She mustn't have received the invitation.",
              answer:
                "She can't have received the invitation. / She must not have received the invitation.",
              translation: "O, dəvəti almamış olmalıdır.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
