import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";

export const metadata: Metadata = buildSectionMetadata(
  "cumlenin-esaslari",
  "tesdiq-inkar-sual",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="cumlenin-esaslari"
      sectionSlug="tesdiq-inkar-sual"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          İngilis dilində təsdiq, inkar və sual formaları arasındakı keçid
          leksik dəyişiklik deyil, struktur əməliyyatdır: bu üç forma da eyni
          əsas cümlədən <strong>köməkçi felin</strong> (auxiliary verb) mövqeyi
          və mövcudluğu üzərində aparılan manipulyasiya ilə əldə olunur. Bu
          bölmədə izah olunan mexanizm zaman formalarından (tenses) asılı deyil
          — Present Simple-dan Past Perfect-ə qədər bütün zamanlarda eyni məntiq
          təkrarlanır.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.2.1</span>
              <h3 className="font-display text-xl text-foreground">
                Köməkçi fel anlayışı (Auxiliary Verb)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Köməkçi fel əsas felin mənasına heç bir təsir etmədən, cümləyə
              qrammatik funksiya (zaman, aspekt, inkar, sual) əlavə edir. Üç
              kateqoriyaya bölünür: <strong>be</strong> (davamlı və passiv
              formalar üçün), <strong>have</strong> (perfekt formalar üçün) və
              <strong> modal fellər</strong> (can, must, should, will, may,
              might, would, could). Bunların hər biri cümlədə artıq mövcuddursa,
              inkar və sual üçün əlavə heç nə tələb olunmur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The server is processing the request.",
                  az: "Server sorğunu emal edir.",
                },
                {
                  en: "The committee has approved the budget.",
                  az: "Komitə büdcəni təsdiqləyib.",
                },
                {
                  en: "The team must submit the report by Friday.",
                  az: "Komanda hesabatı cümə gününə qədər təqdim etməlidir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.2.2</span>
              <h3 className="font-display text-xl text-foreground">
                İnkar formasının qurulması
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İnkar düsturu sabitdir:{" "}
              <strong>Subject + köməkçi fel + not + əsas fel</strong>. Danışıq
              və qeyri-rəsmi yazıda köməkçi fel ilə
              <em> not</em> ixtisar formasında birləşir (isn&apos;t,
              haven&apos;t, can&apos;t), rəsmi yazıda isə tam forma üstünlük
              təşkil edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The proposal does not meet the requirements.",
                  az: "Təklif tələblərə cavab vermir.",
                },
                {
                  en: "The system has not received a response.",
                  az: "Sistem hələ cavab almayıb.",
                },
                {
                  en: "Employees should not share confidential data.",
                  az: "İşçilər məxfi məlumatı paylaşmamalıdırlar.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.2.3</span>
              <h3 className="font-display text-xl text-foreground">
                Sual formasının qurulması: Subyekt-köməkçi fel inversiyası
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəli/xeyr sualı köməkçi felin subyektdən əvvələ keçməsi
              (subject-auxiliary inversion) ilə qurulur. Əsas fel öz orijinal
              mövqeyini — köməkçi feldən sonra — saxlayır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Has the client confirmed the meeting?",
                  az: "Müştəri iclası təsdiqlədimi?",
                },
                {
                  en: "Can the department handle this volume?",
                  az: "Şöbə bu həcmin öhdəsindən gələ bilərmi?",
                },
                {
                  en: "Is the invoice ready for review?",
                  az: "Faktura baxış üçün hazırdırmı?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.2.4</span>
              <h3 className="font-display text-xl text-foreground">
                Do-support: köməkçi fel olmadıqda "do/does/did"-in tətbiqi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Cümlədə köməkçi fel mövcud olmadıqda (yəni fel sadə formada —
              Present Simple və ya Past Simple-dədirsə), ingilis dili qrammatik
              cəhətdən boş, semantik yükü olmayan <strong>do/does/did</strong>{" "}
              felini "ödünc" köməkçi kimi tətbiq edir. Bu addım atılanda əsas
              fel <strong>bazaya (infinitiv) qayıdır</strong> — şəxs və zaman
              markeri artıq köməkçi felin üzərinə keçdiyi üçün əsas felə ikinci
              dəfə əlavə olunmur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The company reports its earnings quarterly.",
                  az: "Şirkət gəlirlərini rüblük olaraq bildirir.",
                },
                {
                  en: "The company does not report its earnings quarterly.",
                  az: "Şirkət gəlirlərini rüblük bildirmir.",
                },
                {
                  en: "Does the company report its earnings quarterly?",
                  az: "Şirkət gəlirlərini rüblük bildirirmi?",
                },
                {
                  en: "The audit revealed several discrepancies.",
                  az: "Audit bir neçə uyğunsuzluq aşkar etdi.",
                },
                {
                  en: "Did the audit reveal several discrepancies?",
                  az: "Audit bir neçə uyğunsuzluq aşkar etdimi?",
                },
              ]}
            />
            <p className="text-foreground leading-relaxed">
              Diqqət: <em>does</em> və <em>did</em> özləri artıq şəxs/zaman
              məlumatını daşıdığı üçün, əsas felin üzərinə əlavə "-s" və ya
              "-ed" şəkilçisi qoyulmur. Bu, aşağıda "Tipik səhvlər" bölməsində
              ayrıca vurğulanır.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.2.5</span>
              <h3 className="font-display text-xl text-foreground">
                Wh-sualları: sual sözü ilə genişləndirilmiş struktur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Konkret məlumat tələb edən suallarda (what, where, when, why, how,
              which) sual sözü cümlənin əvvəlinə, köməkçi feldən də əvvələ
              yerləşir:{" "}
              <strong>Sual sözü + köməkçi fel + subyekt + əsas fel</strong>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Why did the deployment fail?",
                  az: "Yayım niyə uğursuz oldu?",
                },
                {
                  en: "How does the algorithm handle edge cases?",
                  az: "Alqoritm sərhəd hallarını necə idarə edir?",
                },
                {
                  en: "When will the results be published?",
                  az: "Nəticələr nə vaxt dərc olunacaq?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.2.6</span>
              <h3 className="font-display text-xl text-foreground">
                İstisna: subyektin özü sual sözü olduqda
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sual sözü (who, what, which) cümlənin subyektinə aid olduqda,
              inversiya baş vermir və do-support tələb olunmur — söz sırası adi
              təsdiq cümləsi ilə eynidir, sadəcə subyekt sual sözü ilə əvəz
              olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Who approved this transaction?",
                  az: "Bu əməliyyatı kim təsdiqlədi?",
                },
                {
                  en: "What caused the delay?",
                  az: "Gecikməyə nə səbəb oldu?",
                },
              ]}
            />
            <p className="text-foreground leading-relaxed">
              Müqayisə et: <em>Who did you call?</em> (obyekt sualı, do-support
              tələb olunur, çünki "you" subyektdir) ilə <em>Who called you?</em>{" "}
              (subyekt sualı, do-support tələb olunmur, çünki "who" özü
              subyektdir).
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.2.7</span>
              <h3 className="font-display text-xl text-foreground">
                Qısa cavablar (Short Answers)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəli/xeyr sualına cavab verərkən, əsas fel təkrarlanmır — yalnız
              köməkçi fel (əvvəlki sualda istifadə olunanla eyni) subyektlə
              birgə istifadə olunur. Tam cümlə ilə cavab vermək qrammatik
              cəhətdən düzgün olsa da, təbii nitqdə süni səslənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Has the report been submitted? — Yes, it has.",
                  az: "Hesabat təqdim olunubmu? — Bəli, olub.",
                },
                {
                  en: "Does the API support pagination? — No, it doesn't.",
                  az: "API səhifələməni dəstəkləyirmi? — Xeyr, dəstəkləmir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.2.8</span>
              <h3 className="font-display text-xl text-foreground">
                Mənfi suallar (Negative Questions)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İnkar forması sual quruluşu ilə birləşdirildikdə, cümlə adi
              məlumat sorğusu deyil, gözlənti, təəccüb və ya təsdiq axtarışı
              bildirir. Struktur: köməkçi felin ixtisar forması (isn&apos;t,
              doesn&apos;t, haven&apos;t) subyektdən əvvələ keçir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Isn't the deadline tomorrow?",
                  az: "Son tarix sabah deyilmi?",
                },
                {
                  en: "Doesn't this version fix the bug?",
                  az: "Bu versiya həmin xətanı düzəltmirmi?",
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
            Azərbaycan dilində sual forması morfoloji vasitə ilə —{" "}
            <em>-mı/ -mi/-mu/-mü</em> sual şəkilçisi ilə — yaradılır, sözlərin
            sırası dəyişmir. İngilis dilində isə heç bir sual şəkilçisi mövcud
            deyil; sual mənası yalnız köməkçi felin subyektdən əvvələ fiziki
            olaraq keçməsi ilə ifadə olunur. Bu tipoloji uyğunsuzluq Azərbaycan
            dilli öyrənənlərdə iki sistematik səhvə səbəb olur: (1) inversiyanın
            unudulması, (2) sadə fellərdə do-support-un buraxılması.
          </p>
          <div className="font-mono text-sm space-y-1 text-muted">
            <p>AZ: Sən hesabatı göndərdi-n-mi?</p>
            <p>EN: Did you send the report?</p>
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
                wrong: "You send the report?",
                right: "Did you send the report?",
                az: "Sən hesabatı göndərdinmi?",
              },
              {
                wrong: "She doesn't works remotely.",
                right: "She doesn't work remotely.",
                az: "O, uzaqdan işləmir.",
              },
              {
                wrong: "Not the client approved the draft.",
                right: "The client did not approve the draft.",
                az: "Müştəri layihəni təsdiqləmədi.",
              },
              {
                wrong: "What did happen?",
                right: "What happened?",
                az: "Nə baş verdi?",
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
          <p className="text-sm text-muted leading-relaxed">
            Sonuncu misal (<em>What did happen?</em>) 1.2.6-dakı istisnanın
            pozulmasıdır — "what" burada subyektdir, ona görə do-support tələb
            olunmur.
          </p>
        </section>

        {/* ---------- MƏŞQLƏR ---------- */}
        <section className="space-y-6">
          <ExerciseList
            title="Məşq 1 — Sual forması qur"
            items={[
              {
                prompt: "The client approved the invoice. → (bəli/xeyr sualı)",
                answer: "Did the client approve the invoice?",
                translation: "Müştəri hesab-fakturanı təsdiqlədimi?",
              },
              {
                prompt: "The system crashed. → (why ilə sual)",
                answer: "Why did the system crash?",
                translation: "Sistem niyə çökdü?",
              },
              {
                prompt: "Someone deleted the file. → (who ilə subyekt sualı)",
                answer: "Who deleted the file?",
                translation: "Faylı kim sildi?",
              },
              {
                prompt: "The team has finished testing. → (bəli/xeyr sualı)",
                answer: "Has the team finished testing?",
                translation: "Komanda testi bitiribmi?",
              },
            ]}
          />

          <ExerciseList
            title="Məşq 2 — Səhvi tap və düzəlt"
            items={[
              {
                prompt: "He don't understand the requirements.",
                answer: "He doesn't understand the requirements.",
                translation: "O, tələbləri başa düşmür.",
              },
              {
                prompt: "Where did the error happened?",
                answer: "Where did the error happen?",
                translation: "Səhv harada baş verdi?",
              },
              {
                prompt: "The manager not agreed with the plan.",
                answer: "The manager did not agree with the plan.",
                translation: "Menecer planla razılaşmadı.",
              },
            ]}
          />
        </section>
      </div>
    </LessonShell>
  );
}
