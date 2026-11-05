import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sozonleri-ve-frazal-feller",
  "yer-sozonleri",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sozonleri-ve-frazal-feller"
      sectionSlug="yer-sozonleri"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          <em>In, on, at</em> — üç sözönü, üç fərqli **fəza məntiqi**. Bu seçim
          ümumidən konkretə doğru bir "piramida" kimi düşünülə bilər:{" "}
          <strong>in</strong> — geniş, bağlı sahə; <strong>on</strong> —
          səth/xətt; <strong>at</strong> — dəqiq nöqtə. Amma bu sistemin bir
          sıra əzbərlənməli sabit istisnası da var.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.1.1</span>
              <h3 className="font-display text-xl text-foreground">
                "In" — geniş, bağlı sahə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Konteynerlər, otaqlar, şəhərlər, ölkələr — hər şey "içində" olan
              geniş sahələr üçün.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The documents are in the top drawer.",
                  az: "Sənədlər yuxarı siyirmədədir.",
                },
                {
                  en: "Our headquarters is in Baku.",
                  az: "Baş ofisimiz Bakıdadır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.1.2</span>
              <h3 className="font-display text-xl text-foreground">
                "On" — səth və ya xətt
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Toxunan səthlər, mərtəbələr, küçələr (xətt kimi düşünülür).
            </p>
            <ExampleList
              examples={[
                {
                  en: "The invoice is on your desk.",
                  az: "Faktura sənin masandadır.",
                },
                {
                  en: "The office is on the fifth floor.",
                  az: "Ofis beşinci mərtəbədədir.",
                },
                {
                  en: "The shop is on Nizami Street.",
                  az: "Mağaza Nizami küçəsindədir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.1.3</span>
              <h3 className="font-display text-xl text-foreground">
                "At" — dəqiq nöqtə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Konkret bir nöqtə, ünvan, görüş yeri — sahənin ölçüsü deyil,{" "}
              <strong>funksiyası/mövqeyi</strong> vacibdir.
            </p>
            <ExampleList
              examples={[
                { en: "Let's meet at the entrance.", az: "Girişdə görüşək." },
                {
                  en: "She works at a law firm downtown.",
                  az: "O, şəhər mərkəzində bir hüquq şirkətində işləyir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.1.4</span>
              <h3 className="font-display text-xl text-foreground">
                Üç səviyyəli iyerarxiya — eyni yer, üç fərqli fokus
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Eyni məkan haqqında danışarkən, təfərrüat səviyyəsi seçimi müəyyən
              edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I work at Company X, on Fitzgerald Street, in the city center.",
                  az: "Mən X şirkətində, Fitzgerald küçəsində, şəhər mərkəzində işləyirəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.1.5</span>
              <h3 className="font-display text-xl text-foreground">
                İstisna: "in bed/hospital/prison" — funksiya üçün "in"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, "on"un gözlənildiyi yerdə (üzərində olma) "in"in işlənməsidir
              — çünki diqqət institusiyanın{" "}
              <strong>əsl funksiyasındadır</strong> (bax: 2.5.6-dakı
              institusional isim məntiqi ilə əlaqəli).
            </p>
            <ExampleList
              examples={[
                {
                  en: "He's still in bed. (✗ on bed)",
                  az: "O, hələ yataqdadır.",
                },
                {
                  en: "She's in hospital after the surgery.",
                  az: "O, əməliyyatdan sonra xəstəxanadadır.",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Müqayisə et: "on the sofa/floor/chair" — bunlar üzərində oturulan
              adi mebeldir, funksional institusiya deyil.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.1.6</span>
              <h3 className="font-display text-xl text-foreground">
                Qrup fəaliyyətləri: "at" — parti, konsert, tədbir
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "I saw her at the conference last month.",
                  az: "Onu keçən ay konfransda gördüm.",
                },
                {
                  en: "We were at a networking event yesterday.",
                  az: "Dünən bir networking tədbirində idik.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.1.7</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik incəlik: eyni isimlə "at" ilə "in" fərqli məna
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>At the office</em> — iş yeri, funksional mövqe olaraq (ofisdə
              deyil, "işdə" mənasında ola bilər). <em>In the office</em> —
              fiziki olaraq otağın içində.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She's at the office today. (iş yerində, ümumi)",
                  az: "O, bu gün işdədir.",
                },
                {
                  en: "She's in the office right now — I can see her through the window.",
                  az: "O, indi ofisin içindədir — pəncərədən görürəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.1.8</span>
              <h3 className="font-display text-xl text-foreground">
                Nəqliyyat istisnası: "on" böyük/ictimai, "in" kiçik/qapalı
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İctimai və ya minmə/enmə mümkün olan nəqliyyat vasitələri (bus,
              train, plane, bicycle) — <em>on</em>. Şəxsi, qapalı nəqliyyat
              (car, taxi) — <em>in</em>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We discussed the plan on the train.",
                  az: "Planı qatarda müzakirə etdik.",
                },
                {
                  en: "She called me from the car. (in the car)",
                  az: "O, mənə maşından zəng etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.1.9</span>
              <h3 className="font-display text-xl text-foreground">
                "Arrive in" vs "arrive at" (heç vaxt "arrive to")
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Arrive in</em> — şəhər, ölkə, geniş sahə üçün.{" "}
              <em>Arrive at</em> — konkret bina, ünvan, nöqtə üçün.{" "}
              <em>Arrive to</em> qrammatik cəhətdən yanlışdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We arrived in Istanbul early in the morning.",
                  az: "Səhər tezdən İstanbula çatdıq.",
                },
                {
                  en: "We arrived at the hotel around noon. (✗ arrived to the hotel)",
                  az: "Günorta yaxın otelə çatdıq.",
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
            Azərbaycan dilində yer bildirmək üçün əsasən lokativ hal şəkilçisi
            (-da/-də) işlədilir, bu, in/on/at arasındakı üçlü ayrımı ehtiva
            etmir ("masada" — həm "on the table", həm "at the table" ola bilər,
            kontekstdən asılı). İngilis dilində isə bu üç fərqli sözönü — fəza
            məntiqinə görə — ayrıca seçilməlidir, bu, Azərbaycan dilli öyrənən
            üçün tamamilə yeni bir qərar qatıdır.
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
                wrong: "The meeting is at the third floor.",
                right: "The meeting is on the third floor.",
                az: "İclas üçüncü mərtəbədədir.",
              },
              {
                wrong: "He is on bed with a fever.",
                right: "He is in bed with a fever.",
                az: "O, hərarətlə yatağdadır.",
              },
              {
                wrong: "We arrived to the airport late.",
                right: "We arrived at the airport late.",
                az: "Hava limanına gec çatdıq.",
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
          title="Məşq 1 — in / on / at seç"
          items={[
            {
              prompt: "The keys are ___ the kitchen counter.",
              answer: "The keys are on the kitchen counter.",
              translation: "Açarlar mətbəx dəzgahındadır.",
            },
            {
              prompt: "We landed ___ Paris after a long flight.",
              answer: "We landed in Paris after a long flight.",
              translation: "Uzun uçuşdan sonra Parisə endik.",
            },
            {
              prompt: "She's waiting ___ the reception desk.",
              answer: "She's waiting at the reception desk.",
              translation: "O, qeydiyyat masasında gözləyir.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "The report is in the second page.",
              answer: "The report is on the second page.",
              translation: "Hesabat ikinci səhifədədir.",
            },
            {
              prompt: "She was on hospital for a week.",
              answer: "She was in hospital for a week.",
              translation: "O, bir həftə xəstəxanada idi.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
