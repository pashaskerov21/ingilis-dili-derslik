import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "feller-ve-zamanlar",
  "present-simple",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="feller-ve-zamanlar" sectionSlug="present-simple">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Present Simple ingilis dilinin ən çox işlənən zamanlarından biridir,
          amma adından ("indiki sadə") aldanma — bu zaman{" "}
          <strong>indi baş verən</strong> hərəkəti demək olar heç vaxt
          bildirmir. Əvəzinə, altı fərqli funksiyası var: adət, ümumi həqiqət,
          cədvəl, təlimat, gələcək (müəyyən şərtlərdə) və povestləşdirmə. Bu
          bölmə hər birini ayrıca izah edir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.1.1</span>
              <h3 className="font-display text-xl text-foreground">
                Forma: bazafel + (-s/-es üçüncü şəxsdə)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Fel demək olar dəyişmir — yalnız <em>he/she/it</em> ilə (üçüncü
              şəxs tək) sona -s əlavə olunur. Şəkilçinin dəqiq forması 2.2-dəki
              cəm isim qaydalarının eynisidir (spelling baxımından):
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">Qayda</th>
                    <th className="p-2 font-display text-foreground">Nümunə</th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  <tr className="border-b border-line">
                    <td className="p-2">Əksəriyyət: +s</td>
                    <td className="p-2 font-mono">work → works</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">-ch/-sh/-s/-x/-z/-o: +es</td>
                    <td className="p-2 font-mono">
                      watch → watches, go → goes
                    </td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">samit+y → -ies</td>
                    <td className="p-2 font-mono">study → studies</td>
                  </tr>
                  <tr>
                    <td className="p-2">Qeyri-müntəzəm</td>
                    <td className="p-2 font-mono">do → does, have → has</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The system processes payments automatically.",
                  az: "Sistem ödənişləri avtomatik emal edir.",
                },
                {
                  en: "She manages the entire customer support team.",
                  az: "O, bütün müştəri dəstəyi komandasını idarə edir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.1.2</span>
              <h3 className="font-display text-xl text-foreground">
                İnkar və sual: do/does-support
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              1.2.4-də öyrəndiyin qayda birbaşa tətbiq olunur: köməkçi fel
              yoxdur, ona görə <em>do/does</em> ödünc alınır, əsas fel bazaya
              qayıdır (üçüncü şəxsdəki "-s" köməkçi felin üzərinə keçir).
            </p>
            <ExampleList
              examples={[
                {
                  en: "The invoice doesn't match the purchase order.",
                  az: "Faktura sifariş ilə uyğun gəlmir.",
                },
                {
                  en: "Does the contract cover international shipping?",
                  az: "Müqavilə beynəlxalq daşınmanı əhatə edirmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.1.3</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 1 — Adət və rutin
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Müntəzəm təkrarlanan hərəkət. Tezlik zərfləri (always, usually,
              often, sometimes, rarely, never — bax: 1.1.4) subyekt və felin
              arasına yerləşir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The team reviews the backlog every Monday morning.",
                  az: "Komanda hər bazar ertəsi səhəri backlog-u nəzərdən keçirir.",
                },
                {
                  en: "I usually check my emails before starting any task.",
                  az: "Mən adətən hər hansı tapşırığa başlamazdan əvvəl emaillərimi yoxlayıram.",
                },
                {
                  en: "She rarely misses a deadline.",
                  az: "O, nadir hallarda son tarixi qaçırır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.1.4</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 2 — Ümumi həqiqət və daimi vəziyyət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Həmişə doğru sayılan faktlar, elmi həqiqətlər və ya uzunmüddətli,
              daimi vəziyyətlər (iş yeri, yaşayış yeri, sahib olma).
            </p>
            <ExampleList
              examples={[
                {
                  en: "Water boils at 100 degrees Celsius at sea level.",
                  az: "Su dəniz səviyyəsində 100 dərəcədə qaynayır.",
                },
                {
                  en: "The company operates in twelve countries.",
                  az: "Şirkət on iki ölkədə fəaliyyət göstərir.",
                },
                {
                  en: "He works as a data analyst for a logistics firm.",
                  az: "O, logistika şirkətində data analitiki kimi işləyir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.1.5</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 3 — Cədvəl və rəsmi proqram (GƏLƏCƏK məna!)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ən gözlənilməz funksiyadır: rəsmi cədvəl, nəqliyyat vaxtı,
              proqram bildirən cümlələrdə Present Simple **gələcək** hadisəni
              bildirir — çünki bu, dəyişməz, "faktlaşdırılmış" plan kimi qəbul
              edilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The flight departs at 6:45 tomorrow morning.",
                  az: "Uçuş sabah səhər saat 6:45-də yola düşür.",
                },
                {
                  en: "The quarterly report is due next Friday.",
                  az: "Rüblük hesabatın təhvil tarixi növbəti cümədir.",
                },
                {
                  en: "The new policy takes effect on January 1st.",
                  az: "Yeni siyasət 1 yanvardan qüvvəyə minir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.1.6</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 4 — Təlimat və istiqamət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Addım-addım təlimat verərkən (əmr cümləsinin (1.5) alternativi
              kimi, daha az birbaşa) Present Simple işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "First, you open the settings menu and select 'Backup'.",
                  az: "Əvvəlcə tənzimləmələr menyusunu açırsan və 'Backup' seçirsən.",
                },
                {
                  en: "You turn left at the second traffic light and the office is on your right.",
                  az: "İkinci işıqforadan sola dönürsən, ofis sağ tərəfdə olacaq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.1.7</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 5 — Kritik qayda: zaman/şərt budaq cümləsində gələcək
                əvəzinə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ən çox səhv edilən qaydadır:{" "}
              <em>when, before, as soon as, after, if, unless</em> kimi
              bağlayıcılarla başlayan budaq cümlədə — hətta əsas cümlə gələcəyə
              aid olsa belə — Present Simple işlədilir, "will" DEYİL.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I'll send you the file as soon as I finish it. (✗ as soon as I will finish)",
                  az: "Bitirən kimi faylı sənə göndərəcəm.",
                },
                {
                  en: "We won't proceed unless the client confirms the budget. (✗ unless the client will confirm)",
                  az: "Müştəri büdcəni təsdiqləməsə, davam etməyəcəyik.",
                },
                {
                  en: "Call me when you arrive at the office. (✗ when you will arrive)",
                  az: "Ofisə çatanda mənə zəng et.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.1.8</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 6 — Canlı povest: idman reportajı, lətifə, hekayə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Danışıq zamanı baş verən hərəkəti daha canlı, dramatik təsvir
              etmək üçün (idman reportajı, lətifə danışarkən, keçmiş hadisəni
              "indiki kimi" nəql edərkən) Present Simple işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "So the manager walks in, looks at the screen, and immediately asks for an explanation.",
                  az: "Beləliklə menecer içəri girir, ekrana baxır və dərhal izahat tələb edir. (lətifə/hekayə tərzi)",
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
            Azərbaycan dilində indiki zaman (-ır/-ir şəkilçisi) həm adət, həm də
            HAZIRDA baş verən hərəkəti bildirə bilir ("O, hər gün işləyir" VƏ
            "O, indi işləyir" — ikisi də oxşar formada). İngilis dilində isə bu
            iki məna qəti şəkildə ayrılır: adət/rutin → Present Simple, hazırda
            baş verən → Present Continuous (4.2). Bu fərqi qarışdırmaq
            Azərbaycan dilli öyrənənlərin ən çox etdiyi struktur səhvidir.
          </p>
          <div className="font-mono text-sm space-y-1 text-muted">
            <p>AZ: O, hər gün işləyir. / O, indi işləyir. (oxşar forma)</p>
            <p>EN: He works every day. / He is working now. (fərqli zaman)</p>
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
                wrong: "She work in marketing.",
                right: "She works in marketing.",
                az: "O, marketinqdə işləyir.",
              },
              {
                wrong: "I will call you when I will arrive.",
                right: "I will call you when I arrive.",
                az: "Çatanda sənə zəng edəcəm.",
              },
              {
                wrong: "The company don't offer refunds.",
                right: "The company doesn't offer refunds.",
                az: "Şirkət geri qaytarma təklif etmir.",
              },
              {
                wrong:
                  "I am understanding the issue now. (stative — 4.3-də ətraflı)",
                right: "I understand the issue now.",
                az: "İndi problemi başa düşürəm.",
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
              prompt: "The store ___ (open) at nine every day.",
              answer: "The store opens at nine every day.",
              translation: "Mağaza hər gün saat doqquzda açılır.",
            },
            {
              prompt: "She ___ not (agree) with the new policy.",
              answer: "She does not agree with the new policy.",
              translation: "O, yeni siyasətlə razılaşmır.",
            },
            {
              prompt:
                "I'll let you know as soon as I ___ (hear) back from them.",
              answer: "I'll let you know as soon as I hear back from them.",
              translation: "Onlardan cavab alan kimi sənə xəbər verəcəm.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "He don't check his messages regularly.",
              answer: "He doesn't check his messages regularly.",
              translation: "O, mesajlarını müntəzəm yoxlamır.",
            },
            {
              prompt: "We will start the meeting when everyone will arrive.",
              answer: "We will start the meeting when everyone arrives.",
              translation: "Hamı gələndə iclası başlayacağıq.",
            },
            {
              prompt: "The train leave at 8 PM tomorrow.",
              answer: "The train leaves at 8 PM tomorrow.",
              translation: "Qatar sabah axşam saat 8-də yola düşür.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
