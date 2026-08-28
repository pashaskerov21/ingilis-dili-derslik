import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "murekkeb-cumle-qurma",
  "teyin-cumleleri-xetalar-qisaltma",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="murekkeb-cumle-qurma"
      sectionSlug="teyin-cumleleri-xetalar-qisaltma"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bu, təyin budaq cümlələri (9.3-9.4) üzrə üçlüyün son bölməsidir — iki
          hissədən ibarətdir: budaq cümlələri **qısaltmaq** (iştirakçı formasına
          salmaq) və ən çox rast gəlinən **səhvləri** sistemli şəkildə gözdən
          keçirmək.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.5.1</span>
              <h3 className="font-display text-xl text-foreground">
                Qısaltma qaydası: yalnız SUBYEKT olan əvəzliklərlə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Budaq cümləni iştirakçı formasına salmaq yalnız əvəzlik{" "}
              **subyekt** olduqda mümkündür — 9.3.4-dəki eyni sual burada da
              həlledici rol oynayır.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.5.2</span>
              <h3 className="font-display text-xl text-foreground">
                Üsul 1 — "be" felli: əvəzlik+be tamamilə düşür
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The employees who are responsible for onboarding attended the training. → The employees responsible for onboarding attended the training.",
                  az: "İşə qəbula cavabdeh olan işçilər təlimə qatıldı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.5.3</span>
              <h3 className="font-display text-xl text-foreground">
                Üsul 2 — Aktiv fel: əvəzlik düşür, fel -ing olur
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The team that manages client relationships is expanding. → The team managing client relationships is expanding.",
                  az: "Müştəri əlaqələrini idarə edən komanda genişlənir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.5.4</span>
              <h3 className="font-display text-xl text-foreground">
                Üsul 3 — Passiv fel: əvəzlik+be düşür, III forma qalır
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The documents that were submitted yesterday are under review. → The documents submitted yesterday are under review.",
                  az: "Dünən təqdim olunan sənədlər nəzərdən keçirilir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.5.5</span>
              <h3 className="font-display text-xl text-foreground">
                Qısaltma qadağan: əvəzlik obyekt olduqda, whose/when/where ilə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əvəzlik **obyektdirsə**, qısaltma mümkün deyil (bunun əvəzinə
              9.3.4-dəki adi buraxma qaydası tətbiq olunur, iştirakçı forması
              yox). Eyni şəkildə, <em>whose, when, where</em> ilə qurulan budaq
              cümlələr də qısaldılmır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The people who they are inviting all live locally. (✗ qısaldıla bilməz — 'who' obyektdir)",
                  az: "Dəvət etdikləri insanlar hamısı yerli sakinlərdir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.5.6</span>
              <h3 className="font-display text-xl text-foreground">
                Ən çox rast gəlinən səhv 1: "what" — "that/which" əvəzinə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>What</em> heç vaxt təyin budaq cümləsində istifadə olunmur —
              bu, geniş yayılmış, amma standart ingilis dilində qeyri-düzgün bir
              formadır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This is the report that caused the confusion. (✗ the report what caused)",
                  az: "Bu, çaşqınlığa səbəb olan hesabatdır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.5.7</span>
              <h3 className="font-display text-xl text-foreground">
                Ən çox rast gəlinən səhv 2: artıq əvəzlik təkrarı
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Nisbi əvəzlik artıq subyekt/obyekt rolunu daşıdığı üçün, budaq
              cümlə daxilində eyni şəxsə **ikinci dəfə** adi əvəzlik (he/she/it)
              əlavə olunmamalıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She's the manager who called me yesterday. (✗ who she called me)",
                  az: "O, mənə dünən zəng edən menecerdir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.5.8</span>
              <h3 className="font-display text-xl text-foreground">
                Ən çox rast gəlinən səhv 3: şəxs/əşya əvəzliyinin qarışdırılması
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The client who signed the contract confirmed the terms. (✗ which — şəxsdir)",
                  az: "Müqaviləni imzalayan müştəri şərtləri təsdiqlədi.",
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
            9.5.7-dəki "artıq əvəzlik təkrarı" səhvi Azərbaycan dilli öyrənən
            üçün xüsusilə təbiidir, çünki Azərbaycan dilində bənzər
            konstruksiyalarda ("menecer, o mənə zəng etdi") əvəzlik təbii
            şəkildə görünür. İngilis dilində isə nisbi əvəzlik özü artıq bu rolu
            daşıdığı üçün, ikinci əvəzlik **artıqdır** və qrammatik səhv
            sayılır.
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
                wrong: "This is the tool what we use every day.",
                right: "This is the tool that we use every day.",
                az: "Bu, hər gün istifadə etdiyimiz alətdir.",
              },
              {
                wrong: "The employee who he finished the project got a bonus.",
                right: "The employee who finished the project got a bonus.",
                az: "Layihəni bitirən işçi mükafat aldı.",
              },
              {
                wrong:
                  "The company which founded the app is growing fast. (şəxsə aid deyil, düzgündür əslində, amma nümunə üçün: The founder who started the app...)",
                right:
                  "The founder who started the app is growing the business fast.",
                az: "Tətbiqi quran təsisçi biznesi sürətlə böyüdür.",
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
          title="Məşq 1 — Budaq cümləni qısalt"
          items={[
            {
              prompt:
                "The staff who are working on the migration need extra support.",
              answer: "The staff working on the migration need extra support.",
              translation:
                "Köçürmə üzərində işləyən heyət əlavə dəstəyə ehtiyac duyur.",
            },
            {
              prompt: "The invoice that was sent last week hasn't been paid.",
              answer: "The invoice sent last week hasn't been paid.",
              translation: "Keçən həftə göndərilən faktura ödənilməyib.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "This is the laptop what I bought last month.",
              answer: "This is the laptop that I bought last month.",
              translation: "Bu, keçən ay aldığım noutbukdur.",
            },
            {
              prompt:
                "The client who she called yesterday confirmed the order.",
              answer: "The client who called yesterday confirmed the order.",
              translation: "Dünən zəng edən müştəri sifarişi təsdiqlədi.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
