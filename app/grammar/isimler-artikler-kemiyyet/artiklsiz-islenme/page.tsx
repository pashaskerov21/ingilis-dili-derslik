import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "isimler-artikler-kemiyyet",
  "artiklsiz-islenme",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="isimler-artikler-kemiyyet"
      sectionSlug="artiklsiz-islenme"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          İndiyə qədər iki artikl (a/an, the) öyrənildi — bu bölmə isə{" "}
          <strong>heç bir artiklin işlənmədiyi</strong> halları əhatə edir. Bu,
          "boşluq" deyil, öz qaydaları olan müstəqil bir kateqoriyadır:
          dilçilikdə buna <em>zero article</em> (Ø) deyilir. Diqqət: bu bölmə
          yalnız cəm və sayıla bilməyən isimlərə aid deyil — TƏK sayıla bilən
          isim demək olar HEÇ VAXT artiklsiz qala bilməz (bax: 2.5.8).
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.5.1</span>
              <h3 className="font-display text-xl text-foreground">
                Ümumi ifadələr: cəm sayıla bilən isimlər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bir kateqoriyanın bütün nümunələri haqqında ümumi fikir
              söyləyərkən (konkret alt-qrup deyil), cəm isim heç bir artiklə
              ehtiyac duymur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Deadlines motivate people to work efficiently.",
                  az: "Son tarixlər insanları səmərəli işləməyə həvəsləndirir.",
                },
                {
                  en: "Startups often fail due to poor cash flow management.",
                  az: "Startaplar tez-tez zəif pul vəsaiti idarəçiliyi ucbatından uğursuz olur.",
                },
              ]}
            />
            <p className="text-foreground leading-relaxed">
              Müqayisə et 2.4.1 ilə: əgər eyni isim konkret bir qrupa aiddirsə,{" "}
              <em>the</em> qayıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The startups we invested in last year are growing fast.",
                  az: "Keçən il investisiya etdiyimiz startaplar sürətlə böyüyür.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.5.2</span>
              <h3 className="font-display text-xl text-foreground">
                Ümumi ifadələr: sayıla bilməyən isimlər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Eyni prinsip sayıla bilməyən isimlərə də aiddir — konsepsiya kimi,
              ümumi mənada işlədikdə artikl işlənmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Experience matters more than certification in this field.",
                  az: "Bu sahədə təcrübə sertifikatdan daha vacibdir.",
                },
                {
                  en: "Trust is difficult to rebuild once it's broken.",
                  az: "Bir dəfə qırılan etimadı bərpa etmək çətindir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.5.3</span>
              <h3 className="font-display text-xl text-foreground">
                Xüsusi isimlər: insan, şirkət, dil, əksər ölkə/şəhər adları
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Xüsusi isimlər öz-özlüyündə müəyyəndir, ona görə əlavə artiklə
              ehtiyac duymur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Sarah joined Microsoft last year.",
                  az: "Sara keçən il Microsoft-a qoşuldu.",
                },
                {
                  en: "The company expanded into Germany and Japan.",
                  az: "Şirkət Almaniya və Yaponiyaya genişləndi.",
                },
                {
                  en: "The documentation is available in French and Spanish.",
                  az: "Sənədləşmə fransız və ispan dillərində mövcuddur.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.5.4</span>
              <h3 className="font-display text-xl text-foreground">
                İstisna: coğrafi adlarda "the" tələb edən qruplar
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              2.5.3-ün əksinə, bir qrup coğrafi ad — çaylar, okeanlar, dağ
              silsilələri və{" "}
              <strong>
                cəm və ya söz-birləşməsi formasında olan ölkə adları
              </strong>{" "}
              — həmişə <em>the</em> ilə işlənir. Bu, əzbər bilinməli sabit
              istisnadır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The company's headquarters is based in the Netherlands.",
                  az: "Şirkətin baş ofisi Niderlandda yerləşir.",
                },
                {
                  en: "Their servers are located near the Pacific coastline.",
                  az: "Onların serverləri Sakit okean sahilinə yaxın yerləşir.",
                },
                {
                  en: "Talks with the United States are ongoing.",
                  az: "ABŞ ilə danışıqlar davam edir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.5.5</span>
              <h3 className="font-display text-xl text-foreground">
                Sabit ifadələr: yeməklər, idman, elm sahələri
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Gündəlik yemək adları, idman növləri və akademik fənlər ümumi
              mənada işlədildikdə artiklsiz qalır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We usually discuss priorities over breakfast.",
                  az: "Biz adətən prioritetləri səhər yeməyi zamanı müzakirə edirik.",
                },
                {
                  en: "He plays chess competitively.",
                  az: "O, peşəkar şəkildə şahmat oynayır.",
                },
                {
                  en: "She studied computer science at university.",
                  az: "O, universitetdə komputer elmləri oxudu.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.5.6</span>
              <h3 className="font-display text-xl text-foreground">
                İnstitusional isimlər: funksiya vs. bina (ən incə qayda)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>School, university, hospital, prison, church, work</em> kimi
              sözlər özəl bir ikili davranış nümayiş etdirir: müəssisənin{" "}
              <strong>məqsədəuyğun funksiyasında</strong> (şagird kimi oxumaq,
              xəstə kimi müalicə olunmaq) iştirak edildikdə artiklsiz işlənir;
              həmin binaya sadəcə <strong>fiziki obyekt kimi</strong> istinad
              edildikdə (ziyarətçi, işçi, tikinti kimi) <em>the</em> tələb
              olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She is at university this semester. (tələbə kimi)",
                  az: "O, bu semestr universitetdədir. (təhsil alır)",
                },
                {
                  en: "I need to visit the university to drop off a form. (bina)",
                  az: "Formanı təhvil vermək üçün universitetə getməliyəm. (bina kimi)",
                },
                {
                  en: "He is in prison for fraud. (məhbus kimi)",
                  az: "O, fırıldaqçılığa görə həbsdədir.",
                },
                {
                  en: "The journalist visited the prison to interview staff. (bina)",
                  az: "Jurnalist işçilərlə müsahibə üçün həbsxananı ziyarət etdi.",
                },
                {
                  en: "I go to work at nine. (funksiya)",
                  az: "Mən saat doqquzda işə gedirəm.",
                },
                {
                  en: "The work on this project starts tomorrow. (konkret iş, isim mənasında)",
                  az: "Bu layihə üzrə iş sabah başlayır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.5.7</span>
              <h3 className="font-display text-xl text-foreground">
                Telegrafik registr: başlıqlar, təlimatlar, interfeys mətnləri
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Qısalıq tələb edən janrlarda (qəzet başlıqları, xəbərdarlıq
              işarələri, texniki təlimatlar, proqram interfeysi) artikllər çox
              vaxt buraxılır — bu, qrammatik səhv deyil, janrın öz registridir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Insert card.",
                  az: "Kartı daxil edin. (bankomat mətni)",
                },
                { en: "Error: file not found.", az: "Xəta: fayl tapılmadı." },
                {
                  en: "Company announces new policy.",
                  az: "Şirkət yeni siyasət elan edir. (qəzet başlığı)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.5.8</span>
              <h3 className="font-display text-xl text-foreground">
                Xəbərdarlıq: tək sayıla bilən isim heç vaxt tək qala bilməz
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu bölmənin bütün nümunələri cəm və ya sayıla bilməyən isimlərə
              aiddir. Tək sayıla bilən isim isə (2.5.7-dəki telegrafik registr
              istisna olmaqla) həmişə bir müəyyənedici (a/an, the, my, this və
              s.) tələb edir — artiklsiz tək isim adi cümlədə qrammatik səhvdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I have a meeting at three. (✗ I have meeting)",
                  az: "Saat üçdə bir iclasım var.",
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
            Ümumi ifadələrdə (2.5.1, 2.5.2) Azərbaycan dili ilə ingilis dili
            arasında əslində uyğunluq var — hər ikisi ümumi mənada əlavə işarə
            tələb etmir ("İnsanlar dəyişikliyə müqavimət göstərir" = "People
            resist change"). Əsl çətinlik 2.5.6-dakı institusional qaydadır —
            Azərbaycan dilində "məktəbdə oxumaq" ilə "məktəbə getmək" (bina
            kimi) arasında artiklə bağlı fərq yoxdur, hər ikisi eyni cür
            deyilir. Bu, tamamilə yeni, ana dildə paraleli olmayan bir fərqdir
            və ayrıca diqqətlə öyrənilməlidir.
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
                wrong: "I love the music in general.",
                right: "I love music in general.",
                az: "Mən ümumiyyətlə musiqini sevirəm.",
              },
              {
                wrong: "She lives in the France.",
                right: "She lives in France.",
                az: "O, Fransada yaşayır.",
              },
              {
                wrong: "He studies the computer science.",
                right: "He studies computer science.",
                az: "O, komputer elmləri oxuyur.",
              },
              {
                wrong: "Their office is in the Germany.",
                right: "Their office is in Germany.",
                az: "Onların ofisi Almaniyadadır.",
              },
              {
                wrong: "I have meeting at three.",
                right: "I have a meeting at three.",
                az: "Saat üçdə iclasım var.",
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
          title="Məşq 1 — Artikl lazımdırmı? (a/an, the, yoxsa heç biri)"
          items={[
            {
              prompt: "___ honesty is essential in ___ business.",
              answer: "Honesty is essential in business.",
              translation: "Dürüstlük biznesdə vacibdir.",
            },
            {
              prompt: "He was educated at ___ Harvard University.",
              answer: "He was educated at Harvard University.",
              translation: "O, Harvard Universitetində təhsil alıb.",
            },
            {
              prompt: "She is in ___ hospital after the surgery. (xəstə kimi)",
              answer: "She is in hospital after the surgery.",
              translation: "O, əməliyyatdan sonra xəstəxanadadır.",
            },
            {
              prompt: "The nurse works at ___ hospital downtown. (bina)",
              answer: "The nurse works at the hospital downtown.",
              translation:
                "Tibb bacısı şəhər mərkəzindəki xəstəxanada işləyir.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "He plays the football every weekend.",
              answer: "He plays football every weekend.",
              translation: "O, hər həftəsonu futbol oynayır.",
            },
            {
              prompt: "Their factory is located in the China.",
              answer: "Their factory is located in China.",
              translation: "Onların zavodu Çindədir.",
            },
            {
              prompt: "I need send report by five.",
              answer: "I need to send a report by five.",
              translation: "Saat beşə qədər hesabat göndərməliyəm.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
