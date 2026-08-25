import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";

export const metadata: Metadata = buildSectionMetadata(
  "cumlenin-esaslari",
  "to-be-feli",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="cumlenin-esaslari" sectionSlug="to-be-feli">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          <em>To be</em> ingilis dilinin ən çox işlənən və eyni zamanda ən
          çoxfunksiyalı felidir. O, ikili rol daşıyır: <strong>əsas fel</strong>{" "}
          kimi subyekti bir keyfiyyət, vəziyyət və ya kimliklə əlaqələndirir
          (linking verb), <strong>köməkçi fel</strong> kimi isə davamlı
          zamanların və passiv formanın qurulmasında iştirak edir (bax: Fəsil 4
          — Zamanlar, Fəsil 9 — Passiv növ). Bu bölmə yalnız birinci — əsas fel
          — funksiyasını əhatə edir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.3.1</span>
              <h3 className="font-display text-xl text-foreground">
                Formalar: am / is / are
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>To be</em> ingilis dilinin ən qeyri-müntəzəm (irregular)
              felidir — hazırkı zamanda üç fərqli forma alır, halbuki digər
              demək olar bütün fellər cəmi iki forma daşıyır (bax: 1.2.4).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">Şəxs</th>
                    <th className="p-2 font-display text-foreground">Forma</th>
                    <th className="p-2 font-display text-foreground">
                      Qısaldılmış
                    </th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  <tr className="border-b border-line">
                    <td className="p-2">I</td>
                    <td className="p-2 font-mono">am</td>
                    <td className="p-2 font-mono text-muted">I&apos;m</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">he / she / it</td>
                    <td className="p-2 font-mono">is</td>
                    <td className="p-2 font-mono text-muted">
                      he&apos;s / she&apos;s / it&apos;s
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">you / we / they</td>
                    <td className="p-2 font-mono">are</td>
                    <td className="p-2 font-mono text-muted">
                      you&apos;re / we&apos;re / they&apos;re
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.3.2</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas struktur: Subject + be + tamamlayıcı
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əsas fel kimi <em>to be</em>-dən sonra tamamlayıcı (complement)
              gəlir — bu, isim ifadəsi, sifət ifadəsi, yer/istiqamət bildirən
              söz birləşməsi ola bilər. Fərqli olaraq hərəkət fellərindən (work,
              write, run), <em>to be</em> heç bir hərəkəti təsvir etmir — yalnız
              subyekti tamamlayıcı ilə əlaqələndirir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The report is comprehensive.",
                  az: "Hesabat hərtərəflidir.",
                },
                {
                  en: "She is the project manager.",
                  az: "O, layihə menecerdir.",
                },
                {
                  en: "The servers are in the data center.",
                  az: "Serverlər data mərkəzindədir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.3.3</span>
              <h3 className="font-display text-xl text-foreground">
                İşlənmə sahələri
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>To be</em> aşağıdakı semantik kateqoriyaların hər birində
              istifadə olunur. Bu siyahı tam sayılır — ingilis dilində bu
              mənaların heç biri üçün ayrıca fel yoxdur, hamısı <em>be</em>{" "}
              üzərindən ifadə olunur.
            </p>

            <div className="space-y-5">
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Kimlik və peşə
                </p>
                <ExampleList
                  examples={[
                    {
                      en: "He is a senior developer.",
                      az: "O, baş proqramçıdır.",
                    },
                    {
                      en: "We are the finance department.",
                      az: "Biz maliyyə şöbəsiyik.",
                    },
                  ]}
                />
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Keyfiyyət və təsvir
                </p>
                <ExampleList
                  examples={[
                    {
                      en: "The interface is intuitive.",
                      az: "İnterfeys intuitivdir.",
                    },
                    {
                      en: "These requirements are unclear.",
                      az: "Bu tələblər aydın deyil.",
                    },
                  ]}
                />
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Vəziyyət və hiss
                </p>
                <ExampleList
                  examples={[
                    {
                      en: "The client is satisfied with the outcome.",
                      az: "Müştəri nəticədən razıdır.",
                    },
                    {
                      en: "The employees are concerned about the changes.",
                      az: "İşçilər dəyişikliklərdən narahatdırlar.",
                    },
                  ]}
                />
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Yer
                </p>
                <ExampleList
                  examples={[
                    {
                      en: "The headquarters is in Baku.",
                      az: "Baş ofis Bakıdadır.",
                    },
                    {
                      en: "The documents are in the shared folder.",
                      az: "Sənədlər ümumi qovluqdadır.",
                    },
                  ]}
                />
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Yaş
                </p>
                <ExampleList
                  examples={[
                    {
                      en: "The company is twelve years old.",
                      az: "Şirkət on iki yaşındadır.",
                    },
                    {
                      en: "He is thirty-four.",
                      az: "O, otuz dörd yaşındadır.",
                    },
                  ]}
                />
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Vaxt, tarix, hava
                </p>
                <ExampleList
                  examples={[
                    { en: "It is nine o'clock.", az: "Saat doqquzdur." },
                    { en: "It is Monday.", az: "Bazar ertəsidir." },
                    {
                      en: "It is unusually cold this week.",
                      az: "Bu həftə qeyri-adi soyuqdur.",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.3.4</span>
              <h3 className="font-display text-xl text-foreground">
                İnkar forması
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              1.2.1-də qeyd olunduğu kimi, <em>be</em> özü köməkçi fel statusuna
              malikdir; buna görə inkar üçün heç bir əlavə köməkçi (do/does)
              tələb olunmur — sadəcə <em>not</em> əlavə edilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The budget is not final.",
                  az: "Büdcə hələ yekun deyil.",
                },
                {
                  en: "The team members are not available today.",
                  az: "Komanda üzvləri bu gün əlçatan deyillər.",
                },
                {
                  en: "I am not the person responsible for this decision.",
                  az: "Bu qərara görə məsul şəxs mən deyiləm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.3.5</span>
              <h3 className="font-display text-xl text-foreground">
                Sual forması
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              1.2.3-dəki subyekt-köməkçi fel inversiyası burada da eyni şəkildə
              tətbiq olunur: <em>be</em> subyektdən əvvələ keçir.
            </p>
            <ExampleList
              examples={[
                { en: "Is the deployment ready?", az: "Yayım hazırdır?" },
                {
                  en: "Are these figures accurate?",
                  az: "Bu rəqəmlər dəqiqdir?",
                },
                {
                  en: "Am I missing something?",
                  az: "Mən nəyisə gözdən qaçırıram?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.3.6</span>
              <h3 className="font-display text-xl text-foreground">
                Qısa cavablar
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              1.2.7-dəki qaydaya uyğun olaraq, qısa cavabda əsas fel yenidən
              yazılmır — yalnız subyekt və <em>be</em> forması təkrarlanır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Is the server down? — Yes, it is.",
                  az: "Server işləmirmi? — Bəli, işləmir.",
                },
                {
                  en: "Are you the new hire? — No, I'm not.",
                  az: "Sən yeni işə götürülənsən? — Xeyr, deyiləm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.3.7</span>
              <h3 className="font-display text-xl text-foreground">
                Xüsusi hal: yaş ifadəsi — "be", "have" deyil
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bir çox dildə (o cümlədən Azərbaycan dilində) yaş "malik olmaq"
              məntiqi ilə ifadə olunur ("mənim iyirmi yaşım var"). İngilis
              dilində isə yaş <strong>identiklik</strong> kimi qəbul edilir və
              yalnız <em>be</em> ilə ifadə olunur — <em>have</em> ilə yaş
              bildirmək qrammatik səhvdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She is twenty-six years old.",
                  az: "Onun iyirmi altı yaşı var. (hərfi: O, iyirmi altı yaşındadır.)",
                },
                {
                  en: "The building is over a century old.",
                  az: "Bu bina bir əsrdən çox yaşındadır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.3.8</span>
              <h3 className="font-display text-xl text-foreground">
                Qısaldılmış formalar və registr
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Qısaldılmış formalar (I&apos;m, it&apos;s, they&apos;re) danışıq
              dilində və qeyri-rəsmi yazışmada normadır. Akademik və rəsmi
              yazıda isə (hesabat, elmi məqalə, iş yazışması) tam formalar
              üstünlük təşkil edir, çünki qısaldılmış formalar mətnin tonunu
              qeyri-rəsmiləşdirir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I'm ready to start. (qeyri-rəsmi)",
                  az: "Mən başlamağa hazıram.",
                },
                {
                  en: "I am prepared to proceed. (rəsmi)",
                  az: "Mən davam etməyə hazıram.",
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
            Azərbaycan dilində "olmaq" feli şəxs şəkilçisi kimi felin və ya
            isimin sonuna birləşir və çox vaxt müstəqil söz kimi görünmür
            ("proqramçı-yam", "hazır-san"). İngilis dilində isə <em>be</em>{" "}
            həmişə ayrı, müstəqil söz kimi yazılır və heç vaxt buraxılmır.
            İkinci fərq — yuxarıda 1.3.7-də göstərildiyi kimi — yaş ifadəsində
            istifadə olunan felin özüdür: Azərbaycan dilində "malik olmaq"
            (var), ingilis dilində isə "olmaq" (be) məntiqi işləyir.
          </p>
          <div className="font-mono text-sm space-y-1 text-muted">
            <p>AZ: Mən proqramçı-yam. → EN: I am a programmer.</p>
            <p>AZ: Onun 20 yaşı var. → EN: She is 20 years old.</p>
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
                wrong: "I 25 years old.",
                right: "I am 25 years old.",
                az: "Mən 25 yaşındayam.",
              },
              {
                wrong: "She have 30 years.",
                right: "She is 30 years old.",
                az: "Onun 30 yaşı var.",
              },
              {
                wrong: "The team are not is ready.",
                right: "The team is not ready.",
                az: "Komanda hazır deyil.",
              },
              {
                wrong: "Do you ready?",
                right: "Are you ready?",
                az: "Sən hazırsan?",
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
        <section className="space-y-6">
          <ExerciseList
            title="Məşq 1 — Uyğun formanı yaz"
            items={[
              {
                prompt: "The invoice ___ ready for approval.",
                answer: "is",
                translation: "Hesab-faktura təsdiq üçün hazırdır.",
              },
              {
                prompt: "___ you the person in charge of this account?",
                answer: "Are",
                translation: "Bu hesaba cavabdeh olan şəxs sizsiniz?",
              },
              {
                prompt: "The findings ___ not conclusive.",
                answer: "are",
                translation: "Nəticələr qəti deyil.",
              },
              {
                prompt: "He ___ thirty-one years old.",
                answer: "is",
                translation: "O, otuz bir yaşındadır.",
              },
            ]}
          />

          <ExerciseList
            title="Məşq 2 — Səhvi tap və düzəlt"
            items={[
              {
                prompt: "She have twenty-eight years.",
                answer: "She is twenty-eight years old.",
                translation: "O, iyirmi səkkiz yaşındadır.",
              },
              {
                prompt: "Do the servers online?",
                answer: "Are the servers online?",
                translation: "Serverlər onlayndır?",
              },
              {
                prompt: "The report are not finished.",
                answer: "The report is not finished.",
                translation: "Hesabat bitməyib.",
              },
            ]}
          />
        </section>
      </div>
    </LessonShell>
  );
}
