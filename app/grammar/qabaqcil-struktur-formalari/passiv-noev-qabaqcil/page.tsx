import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "qabaqcil-struktur-formalari",
  "passiv-noev-qabaqcil",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="qabaqcil-struktur-formalari"
      sectionSlug="passiv-noev-qabaqcil"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          10.1-dəki əsasların üzərinə üç qabaqcıl struktur əlavə edirik: iki
          obyektli fellərin passivi, **rəsmi hesabat strukturları** (it is said
          that...) və **causative** (have/get something done) — bunların hər
          biri real, professional mətnlərdə tez-tez rast gəlinir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.2.1</span>
              <h3 className="font-display text-xl text-foreground">
                İki obyektli fellər: hər ikisi subyekt ola bilər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              3.2.2-də tanış olduğun ikiqat obyektli fellərlə (give, send,
              show), **hər iki obyekt** passiv subyektə çevrilə bilər — seçim
              vurğulamaq istədiyin şeyə bağlıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The manager gave each employee a bonus. (aktiv)",
                  az: "Menecer hər işçiyə mükafat verdi.",
                },
                {
                  en: "Each employee was given a bonus. (dolayı obyekt → subyekt)",
                  az: "Hər işçiyə mükafat verildi.",
                },
                {
                  en: "A bonus was given to each employee. (birbaşa obyekt → subyekt)",
                  az: "Mükafat hər işçiyə verildi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.2.2</span>
              <h3 className="font-display text-xl text-foreground">
                Şəxssiz hesabat strukturu: "It is said that..."
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ümumi fikir/inam bildirilən, mənbəyi konkretləşdirilməyən rəsmi
              ifadə — <em>say, believe, think, know, report</em> kimi fellərlə.
            </p>
            <ExampleList
              examples={[
                {
                  en: "It is believed that the merger will be finalized by year-end.",
                  az: "İnanılır ki, birləşmə il sonunadək yekunlaşacaq.",
                },
                {
                  en: "It is reported that the company plans to expand overseas.",
                  az: "Bildirilir ki, şirkət xaricə genişlənmə planlaşdırır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.2.3</span>
              <h3 className="font-display text-xl text-foreground">
                Şəxsli hesabat strukturu: Subyekt + is/was + hesabat feli + to
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Eyni məna, alternativ, daha yığcam struktur — konkret şəxs subyekt
              kimi başlayır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The CEO is said to be considering early retirement.",
                  az: "Deyilənə görə, İcraçı Direktor erkən təqaüdə çıxmağı düşünür.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.2.4</span>
              <h3 className="font-display text-xl text-foreground">
                Keçmişə istinadla: to have + III forma
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əgər hesabat edilən hərəkət artıq keçmişdə baş veribsə, struktura
              "to have + III forma" əlavə olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She is believed to have left the company last month.",
                  az: "İnanılır ki, o, keçən ay şirkəti tərk edib.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.2.5</span>
              <h3 className="font-display text-xl text-foreground">
                Causative — Funksiya 1: başqasına iş "sifariş vermək"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Have/get + obyekt + III forma</em> — sən özün deyil, **başqası
              sənin üçün** həmin işi görür.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We had the office repainted last week. (özümüz boyamadıq, sifariş verdik)",
                  az: "Keçən həftə ofisi boyatdırdıq.",
                },
                {
                  en: "I'm getting my laptop repaired tomorrow.",
                  az: "Sabah noutbukumu təmir etdirirəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.2.6</span>
              <h3 className="font-display text-xl text-foreground">
                Causative — Funksiya 2: başına gələn (adətən xoşagəlməz) hadisə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Eyni struktur, fərqli məna — **sənin nəzarətindən kənar**, adətən
              xoşagəlməz bir şey sənə/əşyana baş verib.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We had our presentation interrupted by a fire drill.",
                  az: "Təqdimatımız yanğın təlimi ilə kəsildi.",
                },
                {
                  en: "She had her laptop stolen at the airport.",
                  az: "Onun noutbuku hava limanında oğurlandı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.2.7</span>
              <h3 className="font-display text-xl text-foreground">
                Have vs get: registr fərqi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Have</em> daha neytral/rəsmi, <em>get</em> daha qeyri-rəsmi,
              bəzən "çətinliklə həyata keçirmək" mənasını vurğulayır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We finally got the contract signed after weeks of back-and-forth.",
                  az: "Həftələrlə davam edən yazışmalardan sonra nəhayət müqaviləni imzalatdıq.",
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
            Causative struktur (have/get something done) Azərbaycan dilinə
            tərcümə edərkən çox vaxt "-dır" mənsubiyyət şəkilçisi ilə ifadə
            olunur ("saçımı kəsdirdim" = "I had my hair cut") — bu, konseptual
            olaraq yaxındır. Amma ingilis dilində struktur **iki söz** (have/get
            + III forma) tələb edir, Azərbaycan dilində isə bir şəkilçi kifayət
            edir — bu, Azərbaycan dilli öyrənən üçün strukturu "genişləndirmək"
            tələb edən bir vərdişdir.
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
                  "I had cut my hair yesterday. (özün kəsdinmi, yoxsa kəsdirdinmi — qeyri-müəyyən)",
                right: "I had my hair cut yesterday.",
                az: "Dünən saçımı kəsdirdim.",
              },
              {
                wrong: "It is say that the deal will close soon.",
                right: "It is said that the deal will close soon.",
                az: "Deyilənə görə, sövdələşmə tezliklə bağlanacaq.",
              },
              {
                wrong: "She is believed leave the company. (to have unudulub)",
                right: "She is believed to have left the company.",
                az: "İnanılır ki, o, şirkəti tərk edib.",
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
              prompt: "We ___ (have) the server upgraded last week.",
              answer: "We had the server upgraded last week.",
              translation: "Keçən həftə serveri yenilətdirdik.",
            },
            {
              prompt: "He ___ (be believed to) have resigned quietly.",
              answer: "He is believed to have resigned quietly.",
              translation: "İnanılır ki, o, səssizcə istefa verib.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "It is thinks that the plan will succeed.",
              answer: "It is thought that the plan will succeed.",
              translation: "Düşünülür ki, plan uğurlu olacaq.",
            },
            {
              prompt: "I had my phone stole at the station.",
              answer: "I had my phone stolen at the station.",
              translation: "Telefonum stansiyada oğurlandı.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
