import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sifet-ve-zerfler",
  "zerf-novleri-ve-yeri",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sifet-ve-zerfler"
      sectionSlug="zerf-novleri-ve-yeri"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Zərflər mənasına görə fərqli kateqoriyalara bölünür, və hər
          kateqoriyanın cümlədə <strong>öz sabit yeri</strong> var. Bir neçə
          zərf eyni cümlədə birləşəndə, onlar da (sifətlər kimi — bax: 6.1)
          müəyyən bir sıraya tabe olur.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.3.1</span>
              <h3 className="font-display text-xl text-foreground">
                Tərz zərfləri (Manner) — necə?
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Adətən fel+obyektdən <strong>sonra</strong> (son mövqe) gəlir.
              Bəzi qısa tərz zərfləri (well, badly, hard, fast) heç vaxt orta
              mövqedə (felin öz içində) işlənmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She explained the process clearly.",
                  az: "O, prosesi aydın şəkildə izah etdi.",
                },
                {
                  en: "He works hard every day. (✗ He hard works)",
                  az: "O, hər gün çox çalışır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.3.2</span>
              <h3 className="font-display text-xl text-foreground">
                Yer zərfləri (Place) — harada?
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Adətən felin və ya obyektin <strong>sonrasında</strong> gəlir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We looked everywhere for the missing invoice.",
                  az: "İtmiş faktura üçün hər yerə baxdıq.",
                },
                {
                  en: "They built the new warehouse nearby.",
                  az: "Onlar yeni anbarı yaxınlıqda tikdilər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.3.3</span>
              <h3 className="font-display text-xl text-foreground">
                Zaman zərfləri (Time) — nə vaxt?
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Dəqiq zaman ifadələri adətən cümlənin <strong>sonuna</strong>{" "}
              gəlir (vurğu üçün əvvələ də keçə bilər). Qeyri-dəqiq zaman
              zərfləri isə (recently, already, lately) köməkçi fellə əsas fel
              arasına — <strong>orta mövqeyə</strong> keçir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We signed the contract yesterday. (dəqiq — son mövqe)",
                  az: "Müqaviləni dünən imzaladıq.",
                },
                {
                  en: "Tomorrow, we'll finalize the budget. (vurğu üçün əvvəl)",
                  az: "Sabah büdcəni yekunlaşdıracağıq.",
                },
                {
                  en: "We have recently updated the policy. (qeyri-dəqiq — orta mövqe)",
                  az: "Biz siyasəti bu yaxınlarda yenilədik.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.3.4</span>
              <h3 className="font-display text-xl text-foreground">
                Tezlik zərfləri (Frequency) — 1.1.4-ün dərinləşməsi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Orta mövqedə: adi fellərdən <strong>əvvəl</strong>, <em>be</em>{" "}
              felindən və köməkçi fellərdən <strong>sonra</strong>. Bir neçəsi
              (sometimes, usually, normally) həm də cümlənin əvvəlinə keçə
              bilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I always double-check the invoices before sending them.",
                  az: "Göndərmədən əvvəl həmişə fakturaları yenidən yoxlayıram.",
                },
                {
                  en: "She is usually the first to arrive.",
                  az: "O, adətən ilk gələndir.",
                },
                {
                  en: "Sometimes, the system logs us out automatically.",
                  az: "Bəzən sistem bizi avtomatik çıxarır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.3.5</span>
              <h3 className="font-display text-xl text-foreground">
                Bir neçə zərf birlikdə: Tərz → Yer → Tezlik → Zaman
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              1.1.5-də tanış olduğun sıra qaydasının tam versiyası. Diqqət:
              hərəkət (istiqamət) feli olduqda sıra dəyişir — Yer, Tərz, Zaman.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She spoke confidently at the conference last week. (tərz+yer+zaman)",
                  az: "O, keçən həftə konfransda əminliklə danışdı.",
                },
                {
                  en: "He goes to the office by train every day. (yer+tərz, istiqamət feli)",
                  az: "O, hər gün qatarla ofisə gedir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.3.6</span>
              <h3 className="font-display text-xl text-foreground">
                Qızıl qayda: fel və obyekt heç vaxt ayrılmır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ən çox pozulan qaydadır: zərf felin{" "}
              <strong>birbaşa obyektindən əvvələ</strong> girə bilməz —
              obyektdən sonra gəlməlidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She speaks English fluently. (✗ speaks fluently English)",
                  az: "O, ingiliscə səlis danışır.",
                },
                {
                  en: "I like this proposal a lot. (✗ I like a lot this proposal)",
                  az: "Bu təklifi çox bəyənirəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.3.7</span>
              <h3 className="font-display text-xl text-foreground">
                Cümlə zərfləri: münasibət/rəy, əvvəldə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Danışanın bütöv cümləyə olan münasibətini bildirən zərflər
              (actually, obviously, fortunately, surprisingly) adətən cümlənin{" "}
              <strong>əvvəlinə</strong> gəlir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Fortunately, the backup restored all the data.",
                  az: "Xoşbəxtlikdən, ehtiyat nüsxə bütün məlumatları bərpa etdi.",
                },
                {
                  en: "Obviously, we can't guarantee the exact date.",
                  az: "Aydındır ki, dəqiq tarixi zəmanət edə bilmərik.",
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
            Azərbaycan dilində zərflər cümlə daxilində nisbətən sərbəst yerləşə
            bilər, söz sırası dəyişsə də məna əsasən qorunur. İngilis dilində
            isə — 1.1-dəki əsas SVO qaydasının davamı olaraq —{" "}
            <strong>hər zərf növünün öz sabit yeri var</strong> və bu yerin
            pozulması (xüsusilə 6.3.6-dakı fel-obyekt ayrılması) qrammatik
            cəhətdən səhv sayılır.
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
                wrong: "She speaks fluently three languages.",
                right: "She speaks three languages fluently.",
                az: "O, üç dildə səlis danışır.",
              },
              {
                wrong: "I like very much this design.",
                right: "I like this design very much.",
                az: "Bu dizaynı çox bəyənirəm.",
              },
              {
                wrong: "Always she arrives on time.",
                right: "She always arrives on time.",
                az: "O, həmişə vaxtında gəlir.",
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
          title="Məşq 1 — Düzgün sıraya sal"
          items={[
            {
              prompt: "meeting / carefully / She / the / prepared / for",
              answer: "She prepared carefully for the meeting.",
              translation: "O, iclas üçün diqqətlə hazırlaşdı.",
            },
            {
              prompt: "office / every day / walks / He / to / the",
              answer: "He walks to the office every day.",
              translation: "O, hər gün ofisə piyada gedir.",
            },
            {
              prompt: "always / the / on time / team / delivers / The",
              answer: "The team always delivers on time.",
              translation: "Komanda həmişə vaxtında təhvil verir.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "He reads quickly the reports every morning.",
              answer: "He reads the reports quickly every morning.",
              translation: "O, hər səhər hesabatları tez oxuyur.",
            },
            {
              prompt: "We appreciate a lot your feedback.",
              answer: "We appreciate your feedback a lot.",
              translation: "Rəyinizi çox qiymətləndiririk.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
