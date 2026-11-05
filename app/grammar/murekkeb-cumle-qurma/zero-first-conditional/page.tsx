import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "murekkeb-cumle-qurma",
  "zero-first-conditional",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="murekkeb-cumle-qurma"
      sectionSlug="zero-first-conditional"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Şərt cümlələri (Conditionals) iki hissədən ibarətdir — şərt bildirən
          hissə (if-budaq cümləsi) və nəticə bildirən hissə. Bu bölmə ilk iki
          tipi əhatə edir: **həmişə doğru olan** (sıfır) və **real, mümkün
          gələcək** (birinci) şərtlər.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.6.1</span>
              <h3 className="font-display text-xl text-foreground">
                Sıfır şərt: If + Present Simple, Present Simple
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ümumi həqiqətlər, elmi faktlar, həmişə doğru olan qaydalar üçün.
              Bu tipdə <em>if</em>-i <em>when</em> ilə əvəz etmək mənanı
              dəyişmir — çünki nəticə həmişə baş verir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If you heat water to 100 degrees, it boils. (= When you heat...)",
                  az: "Suyu 100 dərəcəyə qədər qızdırsan, qaynayır.",
                },
                {
                  en: "If the server receives too many requests, it slows down.",
                  az: "Server çox sayda sorğu alarsa, yavaşıyır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.6.2</span>
              <h3 className="font-display text-xl text-foreground">
                Birinci şərt: If + Present Simple, will + bazafel
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Real, gerçəkləşməsi mümkün olan gələcək şərt üçün.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If the client approves the budget, we will start next week.",
                  az: "Müştəri büdcəni təsdiqləsə, növbəti həftə başlayacağıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.6.3</span>
              <h3 className="font-display text-xl text-foreground">
                Ən vacib xatırlatma: if-budaq cümləsində "will" YOX
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              4.1.7-də ilk dəfə gördüyün qayda burada mərkəzi əhəmiyyət kəsb
              edir — hər iki şərt tipində, "if"-dən sonrakı hissə həmişə Present
              Simple-da qalır, "will" heç vaxt gəlmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If she finishes early, she will help with the review. (✗ if she will finish)",
                  az: "O, tez bitirsə, baxışda kömək edəcək.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.6.4</span>
              <h3 className="font-display text-xl text-foreground">
                Nəticə hissəsi: "will"-dən başqa alternativlər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Birinci şərtdə nəticə həmişə "will" deyil — modal fel və ya əmr
              cümləsi (1.5) də ola bilər, əminlik dərəcəsinə görə.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If the tests pass, we might deploy today. (ehtimal)",
                  az: "Testlər keçərsə, bəlkə bu gün yayımlayarıq.",
                },
                {
                  en: "If you have questions, you should contact support. (məsləhət)",
                  az: "Sualın varsa, dəstəklə əlaqə saxlamalısan.",
                },
                {
                  en: "If the alarm goes off, leave the building immediately. (əmr)",
                  az: "Həyəcan siqnalı çalarsa, dərhal binadan çıx.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.6.5</span>
              <h3 className="font-display text-xl text-foreground">
                Digər şərt bağlayıcıları: unless, as long as, provided that
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Unless</em> = "if...not" (əgər...olmasa).{" "}
              <em>As long as/provided that</em> = "yalnız bu şərtlə".
            </p>
            <ExampleList
              examples={[
                {
                  en: "We won't proceed unless the client confirms the scope. (= if the client doesn't confirm)",
                  az: "Müştəri əhatəni təsdiqləməzsə, davam etməyəcəyik.",
                },
                {
                  en: "You can work remotely as long as you attend the weekly sync.",
                  az: "Həftəlik görüşə qatılsan, uzaqdan işləyə bilərsən.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.6.6</span>
              <h3 className="font-display text-xl text-foreground">
                "In case" — "if"-dən fərqli məntiq: ehtiyat tədbiri
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>In case</em> hərəkətin **şərtdən asılı olduğunu** deyil,
              **ehtiyat tədbiri** olduğunu bildirir — hərəkət hər halda baş
              verir, sadəcə gələcək ehtimala hazırlıqdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I'll bring a backup laptop in case mine crashes. (ehtiyat — noutbuku hər halda gətirirəm)",
                  az: "Öz noutbukum çökərsə deyə, ehtiyat noutbuk gətirəcəm.",
                },
                {
                  en: "I'll bring a backup laptop if mine crashes. (şərt — yalnız çökərsə gətirəcəm, indi yox)",
                  az: "Öz noutbukum çökərsə, ehtiyat noutbuk gətirəcəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.6.7</span>
              <h3 className="font-display text-xl text-foreground">
                Vergül qaydası: if-cümləsi əvvəldə → vergül
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              9.2.3-dəki subordinativ bağlayıcı qaydasının eynisi — mövqeyə
              bağlıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "If the invoice is late, we charge a penalty fee.",
                  az: "Faktura gecikərsə, cərimə tutulur.",
                },
                {
                  en: "We charge a penalty fee if the invoice is late. (vergülsüz)",
                  az: "Faktura gecikərsə, cərimə tutulur.",
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
            Azərbaycan dilində şərt cümləsi feilin özündə şərt şəkilçisi ilə
            ("-sa/-sə") qurulur, nəticə hissəsi isə sərbəst zaman formalarında
            ola bilər. İngilis dilində isə 9.6.3-dəki qayda — şərt hissəsində
            HEÇ VAXT gələcək zaman işlədilməməsi — bir çox dildən (o cümlədən
            Azərbaycan dilindən, burada gələcək zamanın hər iki hissədə
            işlənməsi təbii ola bilər) fərqli, sərt bir qaydadır.
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
                wrong: "If it will rain, we will cancel the event.",
                right: "If it rains, we will cancel the event.",
                az: "Yağış yağarsa, tədbiri ləğv edəcəyik.",
              },
              {
                wrong: "Unless you won't confirm, we can't proceed.",
                right: "Unless you confirm, we can't proceed.",
                az: "Sən təsdiqləməsən, biz davam edə bilmərik.",
              },
              {
                wrong:
                  "If water heats to 100 degrees, it will boil. (sıfır şərt, will lazım deyil)",
                right: "If water heats to 100 degrees, it boils.",
                az: "Su 100 dərəcəyə qədər qızarsa, qaynayır.",
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
          title="Məşq 1 — Uyğun formanı yaz"
          items={[
            {
              prompt:
                "If we ___ (miss) the deadline, the client will be upset.",
              answer: "If we miss the deadline, the client will be upset.",
              translation: "Son tarixi qaçırsaq, müştəri narahat olacaq.",
            },
            {
              prompt:
                "Ice ___ (melt) if the temperature rises above zero. (sıfır şərt)",
              answer: "Ice melts if the temperature rises above zero.",
              translation: "Temperatur sıfırdan yuxarı qalxarsa, buz əriyir.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "If she will call, tell her I'm in a meeting.",
              answer: "If she calls, tell her I'm in a meeting.",
              translation: "O zəng edərsə, iclasda olduğumu de.",
            },
            {
              prompt: "You won't get paid unless you won't submit the invoice.",
              answer: "You won't get paid unless you submit the invoice.",
              translation: "Fakturanı təqdim etməsən, ödəniş almayacaqsan.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
