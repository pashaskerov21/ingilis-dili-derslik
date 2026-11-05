import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "modal-feller",
  "zeruret-yoxlugu-qadaga",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="modal-feller"
      sectionSlug="zeruret-yoxlugu-qadaga"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu bölmə fəslin ən <strong>vacib məna qarşıdurmasını</strong> ehtiva
          edir — iki forma səthi baxışda oxşar görünür (ikisi də "must/have
          to"-nun inkarı kimi görünür), amma mənaları{" "}
          <strong>tamamilə əks</strong> qütblərdədir. Bu fərqi başa düşməmək
          ciddi anlaşılmazlığa səbəb ola bilər.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.4.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas qarşıdurma: qadağa (mustn't) vs zərurət yoxluğu (don't have
                to)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <strong>Mustn't</strong> — bunu etmək qadağandır, qəti şəkildə yol
              verilmir. <strong>Don't have to / don't need to</strong> — bunu
              etmək məcburi deyil, amma istəsən edə bilərsən (sərbəst seçim).
            </p>
            <ExampleList
              examples={[
                {
                  en: "You mustn't share the client's data with third parties. (qadağan, qanunsuzdur)",
                  az: "Müştərinin məlumatını üçüncü tərəflərlə paylaşmaq olmaz.",
                },
                {
                  en: "You don't have to attend the optional session. (istəsən get, istəməsən getmə)",
                  az: "İxtiyari sessiyaya qatılmaq məcburi deyil.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ Bu, ən çox səhv edilən qaydadır: "you mustn't come" (gəlmə,
              qadağandır) ilə "you don't have to come" (gəlməyə bilərsən, seçim
              sənindir) — tamam fərqli mesajlardır.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.4.2</span>
              <h3 className="font-display text-xl text-foreground">
                "Needn't" — "don't have to"-ya alternativ, eyni məna
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Needn't</em> (need not) zərurət yoxluğunu bildirmək üçün{" "}
              <em>don't have to/don't need to</em> ilə demək olar eyni mənanı
              verir, bir qədər daha Britaniya ingiliscəsinə xasdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "You needn't worry about the deadline — we have extra time.",
                  az: "Son tarix barədə narahat olmağa ehtiyac yoxdur — əlavə vaxtımız var.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.4.3</span>
              <h3 className="font-display text-xl text-foreground">
                Yumşaldılmış qadağa: "shouldn't" ilə fərq
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Mustn't</em> qəti qadağa bildirir. <em>Shouldn't</em> (5.5-də
              ətraflı) isə eyni struktur mövqedə olsa da, əslində{" "}
              <strong>tövsiyə/məsləhət</strong> səviyyəsindədir — qadağan yox,
              sadəcə "yaxşı fikir deyil".
            </p>
            <ExampleList
              examples={[
                {
                  en: "You mustn't run in the server room. (qəti qayda, təhlükəsizlik)",
                  az: "Server otağında qaçmaq olmaz. (qəti qayda)",
                },
                {
                  en: "You shouldn't skip the code review. (tövsiyə, məsləhət)",
                  az: "Kod baxışını buraxmamaq daha yaxşı olar. (məsləhət)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.4.4</span>
              <h3 className="font-display text-xl text-foreground">
                Rəsmi elanlar və qaydalarda
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Must/mustn't</em> rəsmi lövhələrdə, qanun və qaydalarda
              tez-tez rast gəlinir — qısa, birbaşa, şəxssiz ton yaradır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Visitors must sign in at reception.",
                  az: "Ziyarətçilər qeydiyyatda qeydiyyatdan keçməlidir.",
                },
                {
                  en: "Employees must not remove company equipment without approval.",
                  az: "İşçilər təsdiqsiz şirkət avadanlığını çıxara bilməzlər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.4.5</span>
              <h3 className="font-display text-xl text-foreground">
                Qabaqcıl incəlik: "needn't have + III forma" vs "didn't need to"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Keçmişdə lazımsız bir hərəkət haqqında danışarkən, iki forma
              arasında əhəmiyyətli fərq var:{" "}
              <strong>needn't have + III forma</strong> — hərəkət{" "}
              <strong>edildi</strong>, amma sonradan məlum oldu ki, lazım
              deyilmiş (peşmançılıq/təəccüb tonu).{" "}
              <strong>Didn't need to</strong> — sadəcə lazım deyildi (edilib-
              edilmədiyi ya bilinmir, ya da edilmədiyi nəzərdə tutulur).
            </p>
            <ExampleList
              examples={[
                {
                  en: "I needn't have printed these documents — the meeting moved online. (çap etdim, sonra bunun boş yerə olduğu məlum oldu)",
                  az: "Bu sənədləri çap etməyimə ehtiyac yox imiş — iclas onlayn keçirildi.",
                },
                {
                  en: "I didn't need to print the documents because the meeting was online. (çap etmədim, çünki lazım deyildi)",
                  az: "Sənədləri çap etməyə ehtiyac yox idi, çünki iclas onlayn idi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.4.6</span>
              <h3 className="font-display text-xl text-foreground">
                Keçmiş qadağa: "mustn't"-un birbaşa keçmiş forması yoxdur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              5.3.3-dəki "must"-un qrammatik boşluğu qadağa mənasında da davam
              edir — keçmiş qadağanı ifadə etmək üçün{" "}
              <em>wasn't/weren't allowed to</em> və ya <em>couldn't</em>{" "}
              işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We weren't allowed to use personal devices on the network. (✗ we mustn't have used)",
                  az: "Şəbəkədə şəxsi cihazlardan istifadə etməyə icazəmiz yox idi.",
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
            Azərbaycan dilində "etməli deyilsən" ifadəsi kontekstdən asılı
            olaraq həm "qadağandır", həm "məcburi deyil" mənasında işlənə bilər
            — dil özü bu iki mənanı ayrı leksik vasitələrlə həmişə ayırmır, çox
            vaxt intonasiya və kontekst araya girir. İngilis dilində isə bu iki
            məna <strong>leksik cəhətdən qəti şəkildə ayrılır</strong> (mustn't
            ≠ don't have to) — bu, Azərbaycan dilli öyrənən üçün ən çox
            anlaşılmazlıq yaradan struktur fərqlərindən biridir.
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
                  "You mustn't come to the party if you don't want to. (qadağan yox, sərbəst seçim nəzərdə tutulur)",
                right:
                  "You don't have to come to the party if you don't want to.",
                az: "İstəməsən, məclisə gəlməyə bilərsən.",
              },
              {
                wrong:
                  "We don't have to enter this area — it's restricted. (əslində qadağandır)",
                right: "We mustn't enter this area — it's restricted.",
                az: "Bu sahəyə girmək olmaz — qadağandır.",
              },
              {
                wrong:
                  "She mustn't have finished the report yesterday. (keçmiş qadağa forması səhvdir)",
                right: "She wasn't allowed to submit the report late.",
                az: "Ona hesabatı gec təqdim etməyə icazə verilmirdi.",
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
          title="Məşq 1 — mustn't yoxsa don't have to?"
          items={[
            {
              prompt: "You ___ smoke inside the building. (qadağan)",
              answer: "You mustn't smoke inside the building.",
              translation: "Binada siqaret çəkmək olmaz.",
            },
            {
              prompt:
                "You ___ bring your own laptop — we'll provide one. (məcburi deyil)",
              answer:
                "You don't have to bring your own laptop — we'll provide one.",
              translation:
                "Öz noutbukunu gətirmək məcburi deyil — biz təmin edəcəyik.",
            },
            {
              prompt:
                "Employees ___ share their passwords with anyone. (qadağan)",
              answer: "Employees mustn't share their passwords with anyone.",
              translation: "İşçilər şifrələrini heç kimlə paylaşmamalıdır.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "You mustn't wait for me if you're in a hurry.",
              answer: "You don't have to wait for me if you're in a hurry.",
              translation: "Tələsiksənsə, məni gözləməyə bilərsən.",
            },
            {
              prompt:
                "We don't have to walk on the grass here — it's protected.",
              answer: "We mustn't walk on the grass here — it's protected.",
              translation: "Burada ot üzərində gəzmək olmaz — qorunur.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
