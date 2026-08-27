import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "evezlikler",
  "obyekt-evezlikleri",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="evezlikler" sectionSlug="obyekt-evezlikleri">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Obyekt əvəzlikləri felin təsir etdiyi və ya sözönünün aid olduğu
          şəxs/əşyanı bildirir. 3.1-dən fərqli olaraq, bu əvəzliklərin çoxu{" "}
          <strong>fərqli, ayrıca forma</strong> daşıyır (I → me, he → him), və
          mövqeyə görə (birbaşa obyekt, dolayı obyekt, sözönü obyekti) fərqli
          sıralama qaydalarına tabedir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.2.1</span>
              <h3 className="font-display text-xl text-foreground">
                Siyahı və birbaşa obyekt (direct object)
              </h3>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {["me", "you", "him", "her", "it", "us", "them"].map((p) => (
                <span
                  key={p}
                  className="font-mono text-sm text-foreground border border-line px-2 py-1 text-center"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="text-foreground leading-relaxed">
              Birbaşa obyekt — felin hərəkətinin birbaşa təsir etdiyi şəxs/əşya,
              adətən felin dərhal ardınca gəlir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The manager praised her in front of the team.",
                  az: "Menecer onu komandanın qarşısında tərifllədi.",
                },
                {
                  en: "We haven't seen them since the merger.",
                  az: "Birləşmədən bəri onları görməmişik.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.2.2</span>
              <h3 className="font-display text-xl text-foreground">
                Dolayı obyekt (indirect object) — iki mövqe
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              1.1.3-də tanış olduğun ikiqat obyektli fellərlə (give, send, show,
              offer) obyekt əvəzliyi iki yerdə dura bilər: (1) birbaşa obyektdən{" "}
              <strong>əvvəl</strong>, sözönüsüz; (2) birbaşa obyektdən{" "}
              <strong>sonra</strong>, <em>to/for</em> ilə.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She sent me the invoice this morning.",
                  az: "O, mənə bu səhər fakturanı göndərdi.",
                },
                {
                  en: "She sent the invoice to me this morning. (eyni məna)",
                  az: "O, bu səhər fakturanı mənə göndərdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.2.3</span>
              <h3 className="font-display text-xl text-foreground">
                Hər iki obyekt əvəzlik olduqda: sözönü forması üstünlük təşkil
                edir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Həm dolayı, həm birbaşa obyekt eyni anda əvəzliklə ifadə
              olunduqda, iki əvəzliyi ard-arda düzmək (xüsusilə Amerikan
              ingiliscəsində) qeyri-təbii səslənir. Bu halda <em>to/for</em>{" "}
              konstruksiyası daha təbii və üstün seçimdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Can you pass it to me? (təbii)",
                  az: "Onu mənə uzada bilərsən?",
                },
                {
                  en: "Can you pass me it? (bəzi ləhcələrdə mümkün, amma az işlək)",
                  az: "Onu mənə uzada bilərsən?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.2.4</span>
              <h3 className="font-display text-xl text-foreground">
                Sözönü obyekti (object of preposition)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sözönündən (about, with, for, to, from...) sonra gələn əvəzlik
              həmişə obyekt formasında olur — bu, fellə əlaqəsi olmasa belə
              keçərlidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This decision doesn't affect us directly.",
                  az: "Bu qərar bizə birbaşa təsir etmir.",
                },
                {
                  en: "Is this report from him or from the finance team?",
                  az: "Bu hesabat ondan, yoxsa maliyyə komandasındandır?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.2.5</span>
              <h3 className="font-display text-xl text-foreground">
                Qısa cavablarda: obyekt forması norma kimi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              3.1.4-də gördüyümüz kimi, gündəlik danışıqda tam cümlə əvəzinə tək
              əvəzliklə cavab verərkən, formal qaydadan asılı olmayaraq{" "}
              <strong>obyekt forması</strong> işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Who's responsible for this? — Him. (informal, təbii)",
                  az: "Buna kim məsuldur? — O.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.2.6</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik qeyri-müəyyənlik: müqayisədə "than" ilə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ən diqqətli olunmalı incəlikdir: <em>than</em>-dan sonra
              subyekt (I/he/she) və ya obyekt (me/him/her) forması işlətmək
              cümlənin <strong>mənasını dəyişir</strong>. Subyekt forması gizli
              felin təkrarlandığını göstərir; obyekt forması isə adətən
              müqayisənin özünün obyekti kimi oxunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I trust him more than she. (= more than she trusts him)",
                  az: "Mən ona daha çox etibar edirəm, nəinki o (ona etibar edir).",
                },
                {
                  en: "I trust him more than her. (= more than I trust her)",
                  az: "Mən ona daha çox etibar edirəm, nəinki ona (başqasına).",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ Qeyri-müəyyənliyi aradan qaldırmaq üçün, xüsusilə yazıda, gizli
              feli tam yazmaq daha təhlükəsizdir: "I trust him more than she
              does."
            </p>
          </div>
        </section>

        {/* ---------- MÜQAYİSƏ QUTUSU ---------- */}
        <aside className="border-l-2 border-accent bg-accent/5 p-5 space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Azərbaycan dili ilə struktur fərqi
          </h4>
          <p className="text-foreground leading-relaxed">
            Azərbaycan dilində əvəzliyin rolu (subyekt/obyekt) əsasən hal
            şəkilçiləri ilə göstərilir, əvəzliyin özü demək olar dəyişmir ("mən"
            → "mən-i", "mən-ə"). İngilis dilində isə bir qrup əvəzlikdə (I/me,
            he/him, she/her, we/us, they/them) rol dəyişəndə{" "}
            <strong>sözün özü tamamilə dəyişir</strong> — bu, şəkilçi əlavə etmə
            vərdişindən fərqli, əzbər bilinməli ayrı sözlər cütüdür.
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
                wrong: "This is between you and I.",
                right: "This is between you and me.",
                az: "Bu, sənlə mənim aramdadır. (sözönündən sonra həmişə obyekt forması)",
              },
              {
                wrong: "She gave the report to I.",
                right: "She gave the report to me.",
                az: "O, hesabatı mənə verdi.",
              },
              {
                wrong: "Give it to they.",
                right: "Give it to them.",
                az: "Onu onlara ver.",
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
              prompt: "This decision is just between you and I.",
              answer: "This decision is just between you and me.",
              translation: "Bu qərar sadəcə sənlə mənim aramdadır.",
            },
            {
              prompt: "Please send the file to she.",
              answer: "Please send the file to her.",
              translation: "Zəhmət olmasa, faylı ona göndər.",
            },
            {
              prompt: "The award was given to they last year.",
              answer: "The award was given to them last year.",
              translation: "Mükafat keçən il onlara verildi.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Uyğun əvəzliyi yaz"
          items={[
            {
              prompt: "Can you help ___? (I)",
              answer: "Can you help me?",
              translation: "Mənə kömək edə bilərsən?",
            },
            {
              prompt: "We invited ___ to the meeting. (they)",
              answer: "We invited them to the meeting.",
              translation: "Biz onları iclasa dəvət etdik.",
            },
            {
              prompt: "This message is from ___. (she)",
              answer: "This message is from her.",
              translation: "Bu mesaj ondandır.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
