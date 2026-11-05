import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "murekkeb-cumle-qurma",
  "dolayi-nitq-sual-emr",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="murekkeb-cumle-qurma"
      sectionSlug="dolayi-nitq-sual-emr"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Fəsil 9-un son bölməsi. 9.9-da bəyanatları nəql etməyi öyrənmişik —
          suallar və əmrlər isə **tamamilə fərqli struktur** tələb edir, çünki
          original forma (sual inversiyası, əmr forması) dolayı nitqdə qala
          bilmir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.10.1</span>
              <h3 className="font-display text-xl text-foreground">
                Bəli/xeyr sualı: asked + if/whether + TƏSDİQ söz sırası
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              8.4-dəki dolayı sual qaydası burada da tam tətbiq olunur —
              inversiya itir, backshift (9.9.2) isə normal tətbiq olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: '"Are you ready?" → He asked if I was ready. (✗ asked was I ready)',
                  az: '"Sən hazırsan?" → O, hazır olub-olmadığımı soruşdu.',
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.10.2</span>
              <h3 className="font-display text-xl text-foreground">
                Wh-sualı: asked + sual sözü + TƏSDİQ söz sırası
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sual sözü qalır, amma do-support tamamilə itir (8.4.3-dəki eyni
              qayda).
            </p>
            <ExampleList
              examples={[
                {
                  en: '"Where do you live?" → She asked me where I lived. (✗ asked where did I live)',
                  az: '"Sən harda yaşayırsan?" → O, məndən harda yaşadığımı soruşdu.',
                },
                {
                  en: '"What time will you arrive?" → He asked what time I would arrive.',
                  az: "O, saat neçədə çatacağımı soruşdu.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.10.3</span>
              <h3 className="font-display text-xl text-foreground">
                Əmr: tell/order + obyekt + to-infinitiv
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Diqqət — burada 9.9-dakı **backshift qaydası tamamilə fərqlidir**:
              əmr forması birbaşa infinitivə çevrilir, zaman geriyə sürüşməsi
              baş vermir.
            </p>
            <ExampleList
              examples={[
                {
                  en: '"Close the door." → She told me to close the door.',
                  az: '"Qapını bağla." → O, mənə qapını bağlamağı dedi.',
                },
                {
                  en: '"Submit the report by Friday." → The manager told us to submit the report by Friday.',
                  az: "Menecer bizə hesabatı cüməyə qədər təqdim etməyi tapşırdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.10.4</span>
              <h3 className="font-display text-xl text-foreground">
                Xahiş: ask/beg + obyekt + to-infinitiv, "please" düşür
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Nəzakətli xahişlər (please, could you) eyni struktura keçir, amma{" "}
              <em>tell</em> əvəzinə <em>ask</em> işlədilir — seçim orijinal
              ifadənin tonuna (əmr/xahiş) bağlıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: '"Could you help me, please?" → She asked me to help her.',
                  az: '"Zəhmət olmasa, mənə kömək edərsiniz?" → O, məndən kömək etməyimi xahiş etdi.',
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.10.5</span>
              <h3 className="font-display text-xl text-foreground">
                İnkar əmr/xahiş: not + to-infinitiv
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: '"Don\'t be late." → He told me not to be late.',
                  az: '"Gecikmə." → O, mənə gecikməməyimi dedi.',
                },
                {
                  en: '"Don\'t touch the equipment." → The technician warned us not to touch the equipment.',
                  az: "Texniki mütəxəssis bizə avadanlığa toxunmamağı xəbərdar etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.10.6</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik ayrım: "ask" iki tamam fərqli struktur daşıyır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Eyni fel <em>ask</em> — sual nəql edərkən{" "}
              <em>if/whether/ wh-söz + cümlə</em> tələb edir (9.10.1-9.10.2),
              xahiş nəql edərkən isə <em>obyekt + to-infinitiv</em> (9.10.4).
              Bunları qarışdırmaq geniş yayılmış bir səhvdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He asked if I was ready. (sual — if+cümlə)",
                  az: "O, hazır olub-olmadığımı soruşdu.",
                },
                {
                  en: "He asked me to be ready by five. (xahiş — obyekt+infinitiv)",
                  az: "O, məndən saat beşə hazır olmağımı xahiş etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.10.7</span>
              <h3 className="font-display text-xl text-foreground">
                Frazal fellərlə: particle infinitivə bitişik qalır
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: '"Hurry up!" → She told them to hurry up.',
                  az: '"Tələs!" → O, onlara tələsmələrini dedi.',
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.10.8</span>
              <h3 className="font-display text-xl text-foreground">
                "Must" → "had to", "mustn't" DƏYİŞMİR
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              5.3.3-dəki qrammatik boşluq burada da özünü göstərir — öhdəlik
              mənasında "must" nəql edilərkən "had to" olur, amma qadağa
              mənasında "mustn't" olduğu kimi qalır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "\"You mustn't share this.\" → She said I mustn't share it.",
                  az: '"Bunu paylaşma." → O, bunu paylaşmamalı olduğumu söylədi.',
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
            Azərbaycan dilində əmr nəql edilərkən çox vaxt "dedi ki, qapını
            bağla" kimi, əmrin özünü demək olar dəyişdirmədən saxlamaq
            mümkündür. İngilis dilində isə əmr **məcburi olaraq** infinitiv
            formasına (to + fel) çevrilir — bu, Azərbaycan dilində olmayan
            struktur transformasiyasıdır və bu bölmənin əsas çətinliyini təşkil
            edir.
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
                wrong: "He asked me what did I want.",
                right: "He asked me what I wanted.",
                az: "O, məndən nə istədiyimi soruşdu.",
              },
              {
                wrong: "She said me to wait.",
                right: "She told me to wait. / She asked me to wait.",
                az: "O, mənə gözləməyimi dedi.",
              },
              {
                wrong: "He told me if I was coming.",
                right: "He asked me if I was coming.",
                az: "O, gəlib-gəlmədiyimi soruşdu.",
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
          title="Məşq 1 — Dolayı nitqə çevir"
          items={[
            {
              prompt: '"Do you have the report?" she asked. →',
              answer: "She asked if I had the report.",
              translation: "O, hesabatın məndə olub-olmadığını soruşdu.",
            },
            {
              prompt: '"Send me the invoice." he said. →',
              answer: "He told me to send him the invoice.",
              translation: "O, mənə fakturanı ona göndərməyimi dedi.",
            },
            {
              prompt: '"Please don\'t be late." she said. →',
              answer: "She asked me not to be late.",
              translation: "O, məndən gecikməməyimi xahiş etdi.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "She asked where did I work.",
              answer: "She asked where I worked.",
              translation: "O, harda işlədiyimi soruşdu.",
            },
            {
              prompt: "He said me to close the window.",
              answer: "He told me to close the window.",
              translation: "O, mənə pəncərəni bağlamağı dedi.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
