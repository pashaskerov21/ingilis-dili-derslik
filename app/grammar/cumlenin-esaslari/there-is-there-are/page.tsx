import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "cumlenin-esaslari",
  "there-is-there-are",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="cumlenin-esaslari"
      sectionSlug="there-is-there-are"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          <em>There is / there are</em> — bir şeyin mövcudluğunu və ya varlığını
          ilk dəfə bildirmək üçün istifadə olunan struktur. Bu konstruksiyada{" "}
          <em>there</em> qrammatik subyekt mövqeyini tutur, lakin real məna
          daşımır — buna görə dilçilikdə <strong>"dummy subject"</strong> (boş
          subyekt) adlanır. Felin şəxs forması isə <em>there</em>-dan deyil,
          ondan sonra gələn həqiqi isimdən asılıdır.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.4.1</span>
              <h3 className="font-display text-xl text-foreground">
                Existential "there" və adverb "there" arasındakı fərq
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, öyrənənlərin ən çox qarışdırdığı məqamdır: <em>there</em> sözü
              ingilis dilində İKİ tamam fərqli funksiya daşıyır. Existential
              (mövcudluq bildirən) <em>there</em>-in heç bir yer mənası yoxdur —
              sadəcə struktur elementidir. Adverb <em>there</em> isə "orada"
              mənasını verir, konkret yerə işarə edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "There is a problem with the invoice. (existential — mövcudluq)",
                  az: "Fakturada bir problem var.",
                },
                {
                  en: "The invoice is there, on the desk. (adverb — yer)",
                  az: "Faktura oradadır, masanın üstündə.",
                },
                {
                  en: "There is a meeting room upstairs. (existential)",
                  az: "Yuxarıda bir iclas otağı var.",
                },
                {
                  en: "Put the documents there. (adverb)",
                  az: "Sənədləri oraya qoy.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.4.2</span>
              <h3 className="font-display text-xl text-foreground">
                Fel isimlə uzlaşır, "there" ilə yox
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Struktur tərsinə çevrilmiş kimi görünsə də (əslində "three people
              are there" formasının inversiyasıdır), qrammatik qayda aydındır:
              fel formasını <em>there</em>-dan sonra gələn isim müəyyən edir —
              tək/saya bilməyən isimlə <strong>is</strong>, cəm isimlə{" "}
              <strong>are</strong>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "There is a laptop on the desk.",
                  az: "Masada bir noutbuk var.",
                },
                {
                  en: "There are three laptops on the desk.",
                  az: "Masada üç noutbuk var.",
                },
                {
                  en: "There is water in the bottle.",
                  az: "Butulkada su var. (saya bilməyən isim — tək fel)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.4.3</span>
              <h3 className="font-display text-xl text-foreground">
                Qeyri-müəyyən isimlə işlənmə — yeni məlumatın təqdimatı
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Existential <em>there</em> əsasən <strong>yeni məlumatı</strong>{" "}
              təqdim etmək üçün istifadə olunur, ona görə adətən qeyri-müəyyən
              isim ifadələri ilə (a/an, some, any, a number, one...) işlənir.
              Artıq bilinən, müəyyən isimlə (the, xüsusi isim) işlənməsi
              qeyri-təbii səslənir — çünki əgər isim artıq müəyyəndirsə, onun
              mövcudluğunu "elan etməyə" ehtiyac yoxdur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "There is a letter on your desk.",
                  az: "Masanda bir məktub var.",
                },
                {
                  en: "There is a new policy regarding remote work.",
                  az: "Uzaqdan iş ilə bağlı yeni bir siyasət var.",
                },
              ]}
            />
            <p className="text-foreground leading-relaxed">
              Müqayisə et: <em>The letter is on your desk</em> — burada "the
              letter" artıq müəyyəndir (söhbətdə əvvəl keçib), ona görə
              existential <em>there</em> əvəzinə sadə subyekt-fel strukturu
              işlənir.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.4.4</span>
              <h3 className="font-display text-xl text-foreground">
                İnkar forması
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              1.3.4-dəki qaydaya uyğun olaraq, <em>is/are</em> özü köməkçi
              rolunu daşıdığı üçün sadəcə <em>not</em> əlavə olunur.
              Qeyri-müəyyən kontekstdə inkarda adətən <em>any</em> istifadə
              olunur (bax: Fəsil 2 — Kəmiyyət göstəriciləri).
            </p>
            <ExampleList
              examples={[
                {
                  en: "There isn't any coffee left in the kitchen.",
                  az: "Mətbəxdə heç qəhvə qalmayıb.",
                },
                {
                  en: "There aren't any open positions at the moment.",
                  az: "Hazırda heç bir açıq vakansiya yoxdur.",
                },
                {
                  en: "There is no simple solution to this problem.",
                  az: "Bu problemin sadə həlli yoxdur. (no = not any)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.4.5</span>
              <h3 className="font-display text-xl text-foreground">
                Sual forması
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Subyekt-köməkçi fel inversiyası (1.2.3) burada da eynilə tətbiq
              olunur: <em>is/are</em> <em>there</em>-dan əvvələ keçir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Is there a problem with the server?",
                  az: "Serverdə problem var?",
                },
                {
                  en: "Are there any updates on the project?",
                  az: "Layihə ilə bağlı hər hansı yenilik var?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.4.6</span>
              <h3 className="font-display text-xl text-foreground">
                Qısa cavablar
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "Is there a meeting today? — Yes, there is.",
                  az: "Bu gün iclas var? — Bəli, var.",
                },
                {
                  en: "Are there any messages? — No, there aren't.",
                  az: "Hər hansı mesaj var? — Xeyr, yoxdur.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.4.7</span>
              <h3 className="font-display text-xl text-foreground">
                Kəmiyyət sualları: How many / How much + is/are there
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Miqdarı soruşmaq üçün existential <em>there</em> quruluşu sual
              sözü ilə birləşir: saya bilən cəm isimlə{" "}
              <strong>How many... are there?</strong>, saya bilməyən isimlə{" "}
              <strong>How much... is there?</strong>
            </p>
            <ExampleList
              examples={[
                {
                  en: "How many employees are there in this department?",
                  az: "Bu şöbədə neçə işçi var?",
                },
                {
                  en: "How much time is there before the deadline?",
                  az: "Son tarixə qədər nə qədər vaxt var?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.4.8</span>
              <h3 className="font-display text-xl text-foreground">
                Digər zamanlarda və modal fellərlə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Struktur yalnız hazırkı zamana məxsus deyil — istənilən zamanda və
              modal fellə işlənə bilər, yalnız <em>be</em> hissəsi dəyişir,
              <em> there</em> sabit qalır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "There was a delay yesterday.",
                  az: "Dünən gecikmə oldu.",
                },
                {
                  en: "There have been several complaints this month.",
                  az: "Bu ay bir neçə şikayət olub.",
                },
                {
                  en: "There will be a review next week.",
                  az: "Növbəti həftə bir baxış olacaq.",
                },
                {
                  en: "There might be a better approach.",
                  az: "Daha yaxşı bir yanaşma ola bilər.",
                },
                {
                  en: "There must be a reason for this delay.",
                  az: "Bu gecikmənin bir səbəbi olmalıdır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.4.9</span>
              <h3 className="font-display text-xl text-foreground">
                Registr qeydi: "there's" cəm isimlə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Danışıq dilində və qeyri-rəsmi yazıda <em>there's</em> tez-tez cəm
              isimlə də işlədilir, baxmayaraq ki bu qrammatik cəhətdən
              <em> there are</em> tələb edir. Rəsmi yazıda və imtahanlarda bu,
              səhv sayılır — həmişə <em>there are</em> istifadə olunmalıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "There's three people waiting. (qeyri-rəsmi, geniş yayılmış)",
                  az: "Üç nəfər gözləyir.",
                },
                {
                  en: "There are three people waiting. (rəsmi/düzgün)",
                  az: "Üç nəfər gözləyir.",
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
            Azərbaycan dilində "var/yoxdur" mövcudluğu bildirmək üçün kifayət
            edir və heç bir "boş subyekt"ə ehtiyac yoxdur — isim özü subyekt
            rolunu oynayır, fel isə cümlənin sonuna gəlir. İngilis dili isə
            subyektsiz cümləyə icazə vermədiyi üçün (bax: 1.1), süni bir subyekt
            (<em>there</em>) yaratmağa məcburdur. Bu, Azərbaycan dilli
            öyrənənlər üçün ən çətin adaptasiya nöqtələrindən biridir, çünki ana
            dildə bu cür "boş" söz mövcud deyil.
          </p>
          <div className="font-mono text-sm space-y-1 text-muted">
            <p>AZ: Masada bir noutbuk var. (subyekt: noutbuk, fel sonda)</p>
            <p>
              EN: There is a laptop on the table. (subyekt: there, fel əvvəldə)
            </p>
          </div>
        </aside>

        {/* ---------- SƏHV CƏDVƏLİ ---------- */}
        <section className="space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Tipik struktur səhvləri
          </h4>
          <div className="space-y-3">
            {[
              {
                wrong: "There is three chairs in the room.",
                right: "There are three chairs in the room.",
                az: "Otaqda üç stul var.",
              },
              {
                wrong: "Is a meeting today?",
                right: "Is there a meeting today?",
                az: "Bu gün iclas var?",
              },
              {
                wrong: "There not is any coffee.",
                right: "There isn't any coffee.",
                az: "Heç qəhvə yoxdur.",
              },
              {
                wrong: "How many employees there are?",
                right: "How many employees are there?",
                az: "Neçə işçi var?",
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
          title="Məşq 1 — Uyğun formanı yaz (is / are)"
          items={[
            {
              prompt: "There ___ a message for you.",
              answer: "There is a message for you.",
              translation: "Sənin üçün bir mesaj var.",
            },
            {
              prompt: "There ___ many people here.",
              answer: "There are many people here.",
              translation: "Burada çox adam var.",
            },
            {
              prompt: "How many rooms ___ there in the office?",
              answer: "How many rooms are there in the office?",
              translation: "Ofisdə neçə otaq var?",
            },
            {
              prompt: "There ___ n't any bread left.",
              answer: "There isn't any bread left.",
              translation: "Heç çörək qalmayıb.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "There is two cats in the yard.",
              answer: "There are two cats in the yard.",
              translation: "Həyətdə iki pişik var.",
            },
            {
              prompt: "Are a solution to this problem?",
              answer: "Is there a solution to this problem?",
              translation: "Bu problemin həlli varmı?",
            },
            {
              prompt: "There not are any errors in the report.",
              answer: "There aren't any errors in the report.",
              translation: "Hesabatda heç bir xəta yoxdur.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
