import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "mexanika",
  "diger-durgu-isareleri",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="mexanika" sectionSlug="diger-durgu-isareleri">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu, **bütün qrammatika modulunun son bölməsidir**. Nöqtəli vergül, iki
          nöqtə, dırnaq işarələri və defis/tire — bunlar gündəlik danışıqda az
          işlənir, amma yazılı, xüsusilə rəsmi mətndə mətnin dəqiqliyini və
          peşəkarlığını göstərən vasitələrdir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.4.1</span>
              <h3 className="font-display text-xl text-foreground">
                Nöqtəli vergül: iki müstəqil cümləni bağlayıcısız birləşdirir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              9.1-dəki FANBOYS bağlayıcılarından **istifadə etmədən**, iki məna
              cəhətdən sıx bağlı müstəqil cümləni birləşdirmək üçün. Hər iki
              tərəf tam cümlə olmalıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The client approved the design; production begins next week.",
                  az: "Müştəri dizaynı təsdiqlədi; istehsal növbəti həftə başlayır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.4.2</span>
              <h3 className="font-display text-xl text-foreground">
                Nöqtəli vergül + keçid sözü: 11.3.2-nin daha dəqiq forması
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>However, therefore, moreover</em> ilə iki müstəqil cümlə
              birləşəndə — nöqtəli vergül **əvvəl**, vergül **sonra** gəlir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The budget was tight; however, we still met the deadline.",
                  az: "Büdcə məhdud idi; lakin, son tarixə hələ də çatdıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.4.3</span>
              <h3 className="font-display text-xl text-foreground">
                Nöqtəli vergül: mürəkkəb siyahılarda (daxili vergüllər olduqda)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Siyahının özündəki elementlərdə artıq vergül varsa, elementləri
              bir-birindən ayırmaq üçün adi vergül əvəzinə nöqtəli vergül
              işlədilir — qarışıqlığın qarşısını alır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The panel included Sarah Lin, CTO; Ahmad Rahimov, CFO; and Elena Petrova, COO.",
                  az: "Panelə Sara Lin, Baş Texnologiya Direktoru; Əhməd Rəhimov, Baş Maliyyə Direktoru; və Elena Petrova, Baş Əməliyyat Direktoru daxil idi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.4.4</span>
              <h3 className="font-display text-xl text-foreground">
                İki nöqtə: siyahı/izahı təqdim edir, TAM cümlədən sonra
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İki nöqtədən əvvəlki hissə **tam, müstəqil cümlə** olmalıdır — əks
              halda iki nöqtə lazımsızdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The kit includes three items: a cable, an adapter, and a case.",
                  az: "Dəst üç əşyadan ibarətdir: kabel, adapter və çanta.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "The kit includes: a cable, an adapter..." — səhvdir, çünki
              "includes"-dən əvvəlki hissə tam cümlə deyil.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.4.5</span>
              <h3 className="font-display text-xl text-foreground">
                İki nöqtə: ikinci cümlə birincini izah edir
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The reason was simple: the vendor missed the deadline.",
                  az: "Səbəb sadə idi: təchizatçı son tarixi qaçırdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.4.6</span>
              <h3 className="font-display text-xl text-foreground">
                Dırnaq işarələri: birbaşa sitat, dolayı sitatda YOX
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              9.9-10-dakı dolayı nitqi xatırla — dolayı nitqdə dırnaq işarəsi
              işlənmir, yalnız birbaşa sitatda.
            </p>
            <ExampleList
              examples={[
                {
                  en: 'The manager said, "The deadline has been extended." (birbaşa)',
                  az: 'Menecer dedi: "Son tarix uzadılıb."',
                },
                {
                  en: "The manager said that the deadline had been extended. (dolayı — dırnaqsız)",
                  az: "Menecer son tarixin uzadıldığını söylədi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.4.7</span>
              <h3 className="font-display text-xl text-foreground">
                Sitat daxilində sitat: tək dırnaq işarəsi
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "She said, \"He told me to 'wait until Monday,' but I couldn't.\"",
                  az: "O dedi: \"O, mənə 'bazar ertəsinə qədər gözlə' dedi, amma bacarmadım.\"",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.4.8</span>
              <h3 className="font-display text-xl text-foreground">
                Defis: mürəkkəb sözləri/sifətləri birləşdirir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Defis (-) qısadır, iki sözü **bitişdirir**, boşluqsuz yazılır —
              xüsusilə isimdən əvvəl gələn mürəkkəb sifətlərdə.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This is a well-designed interface.",
                  az: "Bu, yaxşı dizayn edilmiş interfeysdir.",
                },
                {
                  en: "We need a data-driven approach.",
                  az: "Bizə data əsaslı yanaşma lazımdır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.4.9</span>
              <h3 className="font-display text-xl text-foreground">
                Tire (dash): vurğu/ara söz üçün, defisdən uzun
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Em dash (—) sözləri **ayırır** (defis kimi birləşdirmir),
              vergüldən daha güclü vurğu yaradır. Cüt halda parenteza kimi
              işlənə bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The results were clear — we needed a new approach.",
                  az: "Nəticələr aydın idi — bizə yeni yanaşma lazım idi.",
                },
                {
                  en: "Our lead engineer — who joined just last month — already fixed the bug.",
                  az: "Baş mühəndisimiz — cəmi keçən ay qoşulub — artıq xətanı düzəltdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.4.10</span>
              <h3 className="font-display text-xl text-foreground">
                En dash: aralıq bildirmək üçün
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              En dash (–), defisdən bir az uzun, ədəd/tarix aralıqlarında
              işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The project ran from 2021–2023.",
                  az: "Layihə 2021–2023-cü illər arasında davam etdi.",
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
            Azərbaycan dilində dırnaq işarəsi kimi «...» simvolları işlənir,
            ingilis dilində isə " " (düz dırnaq) standartdır. Nöqtəli vergül isə
            hər iki dildə nisbətən nadir işlənir, amma ingilis akademik/işgüzar
            yazıda Azərbaycan dilinə nisbətən bir qədər daha çox rast gəlinir —
            xüsusilə mürəkkəb siyahılarda (11.4.3).
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
                  "The team includes: a designer, a developer, and a tester. (tam cümlə deyil)",
                right:
                  "The team includes a designer, a developer, and a tester.",
                az: "Komandaya dizayner, proqramçı və testçi daxildir.",
              },
              {
                wrong:
                  'He said that he "would finish it by Friday." (dolayı nitqdə dırnaq lazımsızdır, amma bəzən qismən sitat üçün qəbul edilir — burada tam dolayı olduğu üçün)',
                right: "He said that he would finish it by Friday.",
                az: "O, cüməyə qədər bitirəcəyini söylədi.",
              },
              {
                wrong: "This is a well designed system. (defis unudulub)",
                right: "This is a well-designed system.",
                az: "Bu, yaxşı dizayn edilmiş sistemdir.",
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
          title="Məşq 1 — Uyğun durğu işarəsini seç"
          items={[
            {
              prompt:
                "The proposal was rejected ___ the client wanted more customization. (iki müstəqil cümlə, bağlayıcısız)",
              answer:
                "The proposal was rejected; the client wanted more customization.",
              translation:
                "Təklif rədd edildi; müştəri daha çox fərdiləşdirmə istəyirdi.",
            },
            {
              prompt: "We need one thing above all ___ trust. (izah)",
              answer: "We need one thing above all: trust.",
              translation: "Bizə hər şeydən çox bir şey lazımdır: etibar.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt:
                "Our top priorities are: speed, quality, and cost. (tam cümlə deyil)",
              answer: "Our top priorities are speed, quality, and cost.",
              translation:
                "Bizim əsas prioritetlərimiz sürət, keyfiyyət və maliyyətdir.",
            },
            {
              prompt: "This is a well known issue.",
              answer: "This is a well-known issue.",
              translation: "Bu, yaxşı bilinən bir problemdir.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
