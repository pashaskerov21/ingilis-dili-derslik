import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "cumlenin-esaslari",
  "emr-cumleleri",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="cumlenin-esaslari" sectionSlug="emr-cumleleri">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Əmr cümləsi ingilis dilinin ən sadə struktur formasıdır — subyekt
          görünmür, fel bazasında (infinitiv, "to"-suz) qalır. Sadəliyinə
          baxmayaraq, bu struktur güclü <strong>registr həssaslığı</strong>{" "}
          daşıyır: eyni qrammatik forma kontekstdən asılı olaraq əmr, xahiş,
          məsləhət, xəbərdarlıq və ya dəvət kimi qəbul oluna bilər.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.5.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas forma: subyektsiz, fel bazada
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Cümlə birbaşa felin baza formasından (base form) başlayır. Subyekt
              yazılmır, çünki müraciət ünvanı ("you") kontekstdən aydındır və
              qrammatik cəhətdən nəzərdə tutulur.
            </p>
            <ExampleList
              examples={[
                { en: "Close the door.", az: "Qapını bağla." },
                {
                  en: "Submit the report by Friday.",
                  az: "Hesabatı cümə gününə qədər təqdim et.",
                },
                { en: "Take a seat.", az: "Otur." },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.5.2</span>
              <h3 className="font-display text-xl text-foreground">
                İnkar forması: Do not / Don't
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              1.2.4-dəki do-support qaydasına uyğun olaraq, əmr cümləsinin
              inkarı üçün də köməkçi <em>do</em> tələb olunur — <em>be</em>{" "}
              felindən fərqli olaraq, əmr cümləsində "not" birbaşa əsas felə
              əlavə oluna bilməz. Tam forma (<em>do not</em>) daha rəsmi,
              qısaldılmış forma (<em>don't</em>) daha çox danışıqda işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Do not share this document externally.",
                  az: "Bu sənədi kənara paylaşma.",
                },
                {
                  en: "Don't forget to save your work.",
                  az: "İşini yadda saxlamağı unutma.",
                },
                {
                  en: "Don't be late for the meeting.",
                  az: "İclasa gecikmə. (to be feli ilə də eyni qayda)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.5.3</span>
              <h3 className="font-display text-xl text-foreground">
                Subyektin görünən forması: vurğu və ünvanlama
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Subyekt normalda görünməsə də, iki halda aşkar yazıla bilər: (1){" "}
              <em>you</em> vurğu/kontrast üçün əlavə olunanda — bu, çox kəskin
              və bəzən qaba səslənir; (2) qeyri-müəyyən ünvan (
              <em>someone, everybody, nobody</em>) danışıqda konkret şəxsi
              çağırmaq üçün.
            </p>
            <ExampleList
              examples={[
                {
                  en: "You be quiet — I'm speaking.",
                  az: "Sən sus — mən danışıram. (kəskin, kontrast bildirir)",
                },
                {
                  en: "Somebody call the technician.",
                  az: "Kimsə texniki mütəxəssisi çağırsın.",
                },
                { en: "Everybody stay calm.", az: "Hamı sakit qalsın." },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.5.4</span>
              <h3 className="font-display text-xl text-foreground">
                Emphatic "do": nəzakət və israr üçün
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Diqqət — bu, 1.2.4-dəki qrammatik do-support deyil (çünki əmr
              cümləsi artıq təsdiq formasında köməkçi felə ehtiyac duymur). Bura
              əlavə olunan <em>do</em> semantik yük daşıyır: cümləni daha{" "}
              <strong>nəzakətli, təkidli və ya rəsmi</strong> edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Do sit down and make yourself comfortable.",
                  az: "Buyurun oturun, rahat olun.",
                },
                {
                  en: "Do let us know if you have any questions.",
                  az: "Sualınız olarsa, xahiş edirik bizə bildirin.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.5.5</span>
              <h3 className="font-display text-xl text-foreground">
                Let / Let's — birinci və üçüncü şəxs üçün əmr
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Adi əmr forması yalnız ikinci şəxsə (you) aiddir. Birinci şəxs cəm
              (biz) və üçüncü şəxs (o/onlar) üçün əmr/təklif <em>let</em>{" "}
              vasitəsilə qurulur. <em>Let's</em> (let us-un qısaldılmışı) təklif
              bildirir, tam forma <em>let us</em> daha rəsmidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Let's schedule the call for tomorrow.",
                  az: "Zəngi sabaha planlaşdıraq.",
                },
                {
                  en: "Let us begin by reviewing last week's progress.",
                  az: "Keçən həftənin irəliləyişini nəzərdən keçirməklə başlayaq.",
                },
                {
                  en: "Let him finish his explanation first.",
                  az: "Qoy əvvəlcə o, izahını bitirsin.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.5.6</span>
              <h3 className="font-display text-xl text-foreground">
                Registr: əmr cümləsi nə vaxt qeyri-nəzakətlidir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Çılpaq əmr forması (<em>please</em> və ya yumşaldıcı söz olmadan)
              yaxın münasibətlərdən (ailə, dostlar) kənarda çox vaxt{" "}
              <strong>qaba/təhqiramiz</strong> qəbul edilir. Bununla belə,
              müəyyən kontekstlərdə tam təbii və gözlənilən formadır:
              xəbərdarlıqlar, təkliflər, yazılı təlimatlar, istiqamət göstərmə,
              resept və istifadə təlimatları.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Mind the gap.",
                  az: "Boşluğa diqqət et. (xəbərdarlıq — təbii)",
                },
                {
                  en: "Turn left after the traffic light.",
                  az: "İşıqforadan sonra sola dön. (istiqamət — təbii)",
                },
                {
                  en: "Press this button in case of emergency.",
                  az: "Təcili hal olduqda bu düyməni basın. (təlimat — təbii)",
                },
                {
                  en: "Have some more coffee.",
                  az: "Bir az da qəhvə iç. (dəvət — təbii)",
                },
              ]}
            />
            <p className="text-foreground leading-relaxed">
              Adi iş münasibətində birbaşa sorğu üçün isə çılpaq əmr formasını
              yumşaltmaq lazımdır — bu, ayrıca "Nəzakət formaları" mövzusunda
              dərinləşəcək, amma əsas prinsip budur:
            </p>
            <ExampleList
              examples={[
                {
                  en: "Give me the file. (birbaşa — çox kəskin)",
                  az: "Faylı mənə ver.",
                },
                {
                  en: "Could you send me the file, please? (nəzakətli)",
                  az: "Xahiş edirəm, faylı mənə göndərə bilərsinizmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.5.7</span>
              <h3 className="font-display text-xl text-foreground">
                Sual əlavəsi ilə yumşaltma (tag)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əmr cümləsinin sonuna kiçik bir sual əlavə etmək onu daha az
              kateqorik göstərir — tam qayda "Sual əlavələri" (question tags)
              fəslində veriləcək, burada yalnız əmrlə əlaqəli işlənməsi qeyd
              olunur.
            </p>
            <ExampleList
              examples={[
                { en: "Close the door, will you?", az: "Qapını bağla, olar?" },
                {
                  en: "Let's take a break, shall we?",
                  az: "Bir fasilə verək, necə olar?",
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
            Azərbaycan dilində əmr forması felin özünə şəxs şəkilçisi əlavə
            etməklə qurulur və bu şəkilçi eyni zamanda{" "}
            <strong>nəzakət səviyyəsini</strong> göstərir — "sən" üçün bir forma
            (bağla), "siz" (hörmət/cəm) üçün başqa forma (bağlayın). İngilis
            dilində isə əmr forması nəzakət səviyyəsindən asılı olmayaraq{" "}
            <strong>tamamilə eynidir</strong> — nəzakət yalnız əlavə sözlərlə
            (please, could you) ifadə olunur, felin öz formasında əks olunmur.
            Digər fərq inkarda görünür: Azərbaycan dilində inkar felin daxilində
            şəkilçi ilə (bağla-**ma**), ingilis dilində isə ayrı, xarici bir
            sözlə (**don't** close) ifadə olunur.
          </p>
          <div className="font-mono text-sm space-y-1 text-muted">
            <p>AZ: Bağla / Bağlayın → EN: Close (hər ikisi üçün eyni)</p>
            <p>AZ: Bağlama → EN: Don't close</p>
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
                wrong: "You to close the door.",
                right: "Close the door.",
                az: "Qapını bağla.",
              },
              {
                wrong: "Not close the window.",
                right: "Don't close the window.",
                az: "Pəncərəni bağlama.",
              },
              {
                wrong: "Let's to schedule a call.",
                right: "Let's schedule a call.",
                az: "Zəng planlaşdıraq.",
              },
              {
                wrong: "Closes the door, please.",
                right: "Close the door, please.",
                az: "Zəhmət olmasa, qapını bağla.",
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
          title="Məşq 1 — Düzgün əmr forması qur"
          items={[
            {
              prompt: "(you / send / the report) → əmr forması",
              answer: "Send the report.",
              translation: "Hesabatı göndər.",
            },
            {
              prompt: "(inkar: you / forget / the deadline)",
              answer: "Don't forget the deadline.",
              translation: "Son tarixi unutma.",
            },
            {
              prompt: "(təklif: we / start / the meeting)",
              answer: "Let's start the meeting.",
              translation: "İclası başlayaq.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "You to submit the form today.",
              answer: "Submit the form today.",
              translation: "Formu bu gün təqdim et.",
            },
            {
              prompt: "Not open the door.",
              answer: "Don't open the door.",
              translation: "Qapını açma.",
            },
            {
              prompt: "Let's to review the numbers.",
              answer: "Let's review the numbers.",
              translation: "Rəqəmləri nəzərdən keçirək.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
