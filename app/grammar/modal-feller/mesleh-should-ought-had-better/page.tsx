import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "modal-feller",
  "mesleh-should-ought-had-better",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="modal-feller"
      sectionSlug="mesleh-should-ought-had-better"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu üç forma "yaxşı fikirdir" mənasını versə də, aralarında{" "}
          <strong>registr</strong> (rəsmilik) və <strong>şiddət</strong> (nə
          qədər ciddi xəbərdarlıq) baxımından aydın fərqlər var — ən yumşaq
          tövsiyədən açıq xəbərdarlığa qədər bir spektr təşkil edirlər.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.5.1</span>
              <h3 className="font-display text-xl text-foreground">
                Should — ən çox işlənən, standart məsləhət
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "You should back up your files before the update.",
                  az: "Yeniləmədən əvvəl fayllarını ehtiyat nüsxələməlisən.",
                },
                {
                  en: "Should I mention this in the report?",
                  az: "Bunu hesabatda qeyd etməliyəmmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.5.2</span>
              <h3 className="font-display text-xl text-foreground">
                Ought to — eyni məna, daha rəsmi/az işlənən
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Mənası <em>should</em> ilə demək olar eynidir, amma bir qədər daha
              rəsmi, "mənəvi cəhətdən düzgün" tonu daşıyır. Sual və inkar
              formasında nadir işlənir — bu hallarda <em>should</em> üstünlük
              təşkil edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Companies ought to treat their employees fairly.",
                  az: "Şirkətlər işçilərinə ədalətli davranmalıdır.",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Diqqət: <em>ought</em>-dan sonra "to" tələb olunur (should-dan
              fərqli olaraq) — "you ought to go", "you should go" (to-suz).
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.5.3</span>
              <h3 className="font-display text-xl text-foreground">
                Had better — daha güclü, xəbərdarlıq tonu
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Had better</em> should/ought to-dan{" "}
              <strong>daha ciddi</strong> — əməl edilməzsə mənfi nəticə
              olacağını nəzərdə tutur. Danışıq dilində <em>'d better</em>{" "}
              şəklində qısaldılır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "You'd better fix this before the client notices.",
                  az: "Müştəri görməzdən əvvəl bunu düzəltsən yaxşı olar. (əks halda pis olacaq)",
                },
                {
                  en: "We'd better leave now, or we'll miss the flight.",
                  az: "İndi getsək yaxşı olar, yoxsa uçuşu qaçıracağıq.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ İnkar mövqeyinə diqqət: "not" "better"-dən ƏVVƏL gəlir —{" "}
              <em>had better not</em>, "had not better" deyil.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.5.4</span>
              <h3 className="font-display text-xl text-foreground">
                Sual formasında: yalnız "should" təbiidir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Ought to</em> və <em>had better</em> sual formasında demək
              olar heç işlənmir — məsləhət soruşarkən həmişə <em>should</em>{" "}
              istifadə olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Should we postpone the launch? (təbii)",
                  az: "Buraxılışı təxirə salmalıyıqmı?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.5.5</span>
              <h3 className="font-display text-xl text-foreground">
                Keçmişə aid: "should/ought to have + III forma" — peşmançılıq
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu struktur keçmişdə{" "}
              <strong>ideal olan, amma baş verməyən</strong> bir şeyi bildirir —
              peşmançılıq, tənqid və ya gözlənti pozulması mənasında (5.8-də
              daha ətraflı, digər keçmiş modallarla birgə).
            </p>
            <ExampleList
              examples={[
                {
                  en: "You should have backed up the database before the migration. (edilmədi, indi peşmandır)",
                  az: "Köçürmədən əvvəl verilənlər bazasını ehtiyat nüsxələməli idin.",
                },
                {
                  en: "We ought to have tested this more thoroughly. (rəsmi ton)",
                  az: "Bunu daha hərtərəfli test etməli idik.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ Yazıda "should of" YOX — bu, "should've"-nin səhv eşidilmiş
              formasıdır, düzgünü "should have".
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.5.6</span>
              <h3 className="font-display text-xl text-foreground">
                Digər funksiya: gözlənti/ehtimal (məsləhət deyil)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Should</em> həmişə məsləhət bildirmir — bəzən{" "}
              <strong>gözlənti/ehtimal</strong> mənasında da işlənir ("belə
              olması gözlənilir, amma 100% əmin deyiləm"). Bunu kontekst
              aydınlaşdırır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The package should arrive by Thursday. (gözlənti, məsləhət deyil)",
                  az: "Bağlama cümə axşamına qədər çatmalıdır. (gözlənilir)",
                },
                {
                  en: "She should be finished with the report by now. (ehtimal)",
                  az: "O, indiyə qədər hesabatı bitirmiş olmalıdır. (ehtimal olunur)",
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
            Azərbaycan dilində məsləhət "-malı/-məli" (getməlisən) və ya "yaxşı
            olar" kimi ifadələrlə verilir, amma bu üç ingilis formasının
            (should/ought to/had better) daşıdığı{" "}
            <strong>dəqiq registr pilləkəni</strong> (adi → rəsmi → xəbərdar
            edici) Azərbaycan dilində bu qədər sərt ayrılmır — çox vaxt tonlama
            və əlavə sözlərlə (yəqin, mütləq) ifadə olunur.
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
                wrong: "You should of told me earlier.",
                right: "You should have told me earlier.",
                az: "Mənə daha tez deməli idin.",
              },
              {
                wrong: "You had not better be late.",
                right: "You'd better not be late.",
                az: "Gecikməsən yaxşı olar.",
              },
              {
                wrong: "Ought you to help him?",
                right: "Should you help him?",
                az: "Ona kömək etməlisənmi?",
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
              prompt: "___ we start the meeting now, or wait for John? (sual)",
              answer: "Should we start the meeting now, or wait for John?",
              translation: "İclası indi başlayaq, yoxsa Conu gözləyək?",
            },
            {
              prompt:
                "You ___ leave now — the traffic is getting worse. (xəbərdarlıq, güclü)",
              answer: "You'd better leave now — the traffic is getting worse.",
              translation: "İndi getsən yaxşı olar — trafik pisləşir.",
            },
            {
              prompt:
                "I ___ (should) have reviewed the contract more carefully. (peşmançılıq)",
              answer: "I should have reviewed the contract more carefully.",
              translation: "Müqaviləni daha diqqətlə nəzərdən keçirməli idim.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "We should of called before visiting.",
              answer: "We should have called before visiting.",
              translation: "Ziyarətdən əvvəl zəng etməli idik.",
            },
            {
              prompt: "You had better to finish this today.",
              answer: "You had better finish this today.",
              translation: "Bunu bu gün bitirsən yaxşı olar.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
