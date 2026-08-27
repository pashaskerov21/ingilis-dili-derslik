import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "evezlikler",
  "qarsiliqli-evezlikler",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="evezlikler" sectionSlug="qarsiliqli-evezlikler">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Qarşılıqlı əvəzliklər iki və ya daha çox şəxsin{" "}
          <strong>bir-birinə qarşılıqlı</strong> təsir etdiyi hərəkəti bildirir
          — A, B-yə edir və eyni zamanda B, A-ya edir. Bu, 3.4-dəki refleksiv
          əvəzliklərlə tez-tez qarışdırılır, amma məna baxımından tamam
          fərqlidir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.5.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas forma və məna: qarşılıqlı hərəkət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İki qarşılıqlı əvəzlik var: <strong>each other</strong> və{" "}
              <strong>one another</strong>. "Peter and Mary helped each other" =
              Peter Mary-ə kömək etdi VƏ Mary Peter-ə kömək etdi.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The two departments consulted each other before finalizing the plan.",
                  az: "İki şöbə planı yekunlaşdırmazdan əvvəl bir-biri ilə məsləhətləşdi.",
                },
                {
                  en: "The founders have known one another since college.",
                  az: "Təsisçilər kollecdən bəri bir-birini tanıyırlar.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.5.2</span>
              <h3 className="font-display text-xl text-foreground">
                "Each other" vs "one another": ənənəvi fərq və müasir istifadə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ənənəvi qayda: <em>each other</em> — iki nəfər/əşya üçün,{" "}
              <em>one another</em> — üç və ya daha çox üçün. Lakin müasir
              ingilis dilində bu fərq demək olar aradan qalxıb — hər ikisi
              bir-birinin əvəzinə işlədilə bilər. <em>One another</em> bir qədər
              daha <strong>rəsmi</strong> səslənir, <em>each other</em> isə həm
              danışıqda, həm yazıda daha çox işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "All five team members support each other during crunch time. (ənənəvi qaydaya görə 'one another' gözlənilərdi, amma bu tam qəbul edilir)",
                  az: "Bütün beş komanda üzvü sıxlaşdırılmış vaxtlarda bir-birini dəstəkləyir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.5.3</span>
              <h3 className="font-display text-xl text-foreground">
                Qrammatik məhdudiyyət: cümlənin subyekti ola bilməz
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Qarşılıqlı əvəzlik yalnız felin və ya sözönünün{" "}
              <strong>obyekti</strong> kimi çıxış edir — heç vaxt subyekt
              mövqeyində gəlmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "They rely on each other for support. (obyekt — düzgün)",
                  az: "Onlar dəstək üçün bir-birinə güvənirlər.",
                },
                {
                  en: "✗ Each other rely on them. (subyekt — qeyri-mümkün struktur)",
                  az: "(bu struktur ingilis dilində mövcud deyil)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.5.4</span>
              <h3 className="font-display text-xl text-foreground">
                Sözönü ilə birgə işlənmə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Qarşılıqlı əvəzlik adi isim kimi sözönündən sonra gələ bilər —
              sözönünün seçimi felin özünün adi idarəçiliyinə uyğun olur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The two managers spoke to each other about the merger.",
                  az: "İki menecer birləşmə haqqında bir-biri ilə danışdı.",
                },
                {
                  en: "They were angry with one another after the disagreement.",
                  az: "Onlar fikir ayrılığından sonra bir-birindən əsəbiləşmişdilər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.5.5</span>
              <h3 className="font-display text-xl text-foreground">
                Mülkiyyət forması: each other's / one another's
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Mülkiyyət bildirmək üçün 's əlavə olunur. Diqqət: qarşılıqlı
              əvəzlik məna baxımından iki/çox şəxsə aid olsa da, qrammatik
              cəhətdən <strong>tək</strong> vahid kimi qəbul edilir — buna görə
              apostrof HƏMİŞƏ "s"-dən <strong>əvvəl</strong> gəlir, "each
              others'" kimi cəm forması yoxdur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The two companies reviewed each other's proposals.",
                  az: "İki şirkət bir-birinin təkliflərini nəzərdən keçirdi.",
                },
                {
                  en: "The students often study in one another's homes.",
                  az: "Tələbələr tez-tez bir-birinin evində oxuyurlar.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "each others' proposals" — səhvdir, apostrof "s"-dən sonra gedə
              bilməz.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.5.6</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik fərq: qarşılıqlı (reciprocal) vs refleksiv
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              3.4-dəki refleksiv əvəzliklərlə səthi baxışda bənzəsə də, məna tam
              fərqlidir: <strong>refleksiv</strong> — hər kəs özünə edir;{" "}
              <strong>qarşılıqlı</strong> — bir-birinə edir. Bu fərqi
              qarışdırmaq cümlənin mənasını tamamilə dəyişir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The two colleagues blamed themselves for the error. (hər biri özünü günahlandırdı)",
                  az: "İki həmkar səhv üçün özlərini günahlandırdı.",
                },
                {
                  en: "The two colleagues blamed each other for the error. (biri digərini günahlandırdı, qarşılıqlı)",
                  az: "İki həmkar səhv üçün bir-birini günahlandırdı.",
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
            Azərbaycan dilində qarşılıqlı hərəkət "bir-birini/bir-birinə"
            ifadəsi ilə bildirilir, bu, struktur baxımından ingilis dilinin
            "each other"-inə kifayət qədər yaxındır. Əsas fərq{" "}
            <strong>mülkiyyət formasındadır</strong> — Azərbaycan dilində
            "bir-birinin" tək bir formadır, dəyişmir, İngilis dilində isə
            apostrofun düzgün yerini (each other'<strong>s</strong>) bilmək
            tələb olunur, çünki bu, Azərbaycan dilində olmayan bir yazı
            qaydasıdır.
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
                wrong: "They reviewed each others reports.",
                right: "They reviewed each other's reports.",
                az: "Onlar bir-birinin hesabatlarını nəzərdən keçirdilər.",
              },
              {
                wrong: "Each other help the new employees.",
                right: "The employees help each other.",
                az: "İşçilər bir-birinə kömək edir. (each other subyekt ola bilməz)",
              },
              {
                wrong:
                  "They blamed each other for their own mistakes. (hər biri öz səhvi üçün özünü günahlandırdı halında)",
                right: "They blamed themselves for their own mistakes.",
                az: "Onlar öz səhvləri üçün özlərini günahlandırdılar.",
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
          title="Məşq 1 — each other yoxsa themselves?"
          items={[
            {
              prompt:
                "The two teams congratulated ___ after the match. (qarşılıqlı)",
              answer: "The two teams congratulated each other after the match.",
              translation: "İki komanda matçdan sonra bir-birini təbrik etdi.",
            },
            {
              prompt:
                "The children hurt ___ while playing alone. (hər biri özünü)",
              answer: "The children hurt themselves while playing alone.",
              translation: "Uşaqlar tək oynayarkən özlərini yaraladılar.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "We respect each others opinions.",
              answer: "We respect each other's opinions.",
              translation: "Biz bir-birimizin fikirlərinə hörmət edirik.",
            },
            {
              prompt: "Each other should support the new intern.",
              answer:
                "The team should support each other in helping the new intern.",
              translation:
                "Komanda yeni stajçıya kömək etməkdə bir-birini dəstəkləməlidir.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
