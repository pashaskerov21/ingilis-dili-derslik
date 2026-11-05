import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "murekkeb-cumle-qurma",
  "koordinativ-baglayicilar",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="murekkeb-cumle-qurma"
      sectionSlug="koordinativ-baglayicilar"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Koordinativ bağlayıcılar iki **bərabər əhəmiyyətli** elementi (söz,
          söz birləşməsi və ya tam cümlə) birləşdirir. Yeddi bağlayıcı var — ilk
          hərflərindən <strong>FANBOYS</strong> abbreviaturası yaranır. Bu
          bölmənin əsas çətinliyi bağlayıcıların özündə deyil, **vergül
          qoyub-qoymamaq** qərarındadır.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.1.1</span>
              <h3 className="font-display text-xl text-foreground">
                Yeddi bağlayıcı: FANBOYS
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">
                      Bağlayıcı
                    </th>
                    <th className="p-2 font-display text-foreground">Məna</th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">for</td>
                    <td className="p-2">səbəb (because — rəsmi/ədəbi)</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">and</td>
                    <td className="p-2">əlavə etmə</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">nor</td>
                    <td className="p-2">ikinci mənfi (neither ilə birgə)</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">but</td>
                    <td className="p-2">ziddiyyət</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">or</td>
                    <td className="p-2">seçim</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2 font-mono">yet</td>
                    <td className="p-2">
                      ziddiyyət (but-a bənzər, daha güclü)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-mono">so</td>
                    <td className="p-2">nəticə</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The client approved the design, so we can begin production.",
                  az: "Müştəri dizaynı təsdiqlədi, ona görə istehsala başlaya bilərik.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.1.2</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas vergül qaydası: iki MÜSTƏQİL cümlə birləşəndə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Vergül YALNIZ bağlayıcı iki <strong>müstəqil cümləni</strong> (hər
              biri təkbaşına cümlə kimi dayana bilən) birləşdirəndə qoyulur.
              Test: bağlayıcını çıxarıb hər iki tərəfi ayrıca oxu — hər ikisi
              tam cümlədirmi?
            </p>
            <ExampleList
              examples={[
                {
                  en: "The report was late, but the client didn't complain.",
                  az: "Hesabat gecikdi, amma müştəri şikayət etmədi.",
                },
                {
                  en: "We reviewed the contract, and we signed it the same day.",
                  az: "Müqaviləni nəzərdən keçirdik və eyni gün imzaladıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.1.3</span>
              <h3 className="font-display text-xl text-foreground">
                Vergülsüz: söz/söz birləşməsi birləşəndə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bağlayıcı tam cümlə deyil, sadəcə isim/sifət/fel kimi tək
              elementləri birləşdirirsə, vergül lazım deyil.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She manages the budget and the timeline. (iki isim)",
                  az: "O, büdcəni və vaxt cədvəlini idarə edir.",
                },
                {
                  en: "The proposal is short but comprehensive. (iki sifət)",
                  az: "Təklif qısa, amma hərtərəflidir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.1.4</span>
              <h3 className="font-display text-xl text-foreground">
                Vergülsüz: eyni subyektin iki hərəkəti (compound predicate)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Diqqət — subyekt eynidirsə, sadəcə iki fel birləşdirilirsə, bu,
              iki müstəqil cümlə deyil (ikinci hissədə subyekt yoxdur) — vergül
              qoyulmur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She reviewed the proposal and sent it to the client. (✗ vergüllə)",
                  az: "O, təklifi nəzərdən keçirdi və müştəriyə göndərdi.",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ Müqayisə et 9.1.2 ilə: "She reviewed it, and she sent it to the
              client" — burada ikinci "she" var, iki müstəqil cümlədir, vergül
              lazımdır.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.1.5</span>
              <h3 className="font-display text-xl text-foreground">
                "Nor" — inversiya tələb edir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Nor</em> ikinci mənfi ideyanı bağlayanda, ondan sonra 8.1-dəki
              sual inversiyası (köməkçi + subyekt) tətbiq olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She didn't approve the budget, nor did she explain why. (✗ nor she did explain)",
                  az: "O, büdcəni təsdiqləmədi, nə də səbəbini izah etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.1.6</span>
              <h3 className="font-display text-xl text-foreground">
                Sadalamada: Oxford vergülü
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Üç və ya daha çox element sadalanarkən, sonuncu elementdən əvvəl
              vergül qoyulub-qoyulmaması **üslub seçimidir** (Oxford/serial
              comma) — hər iki forma qəbul edilir, amma mətn boyu ardıcıl olmaq
              vacibdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We need a designer, a developer, and a project manager. (Oxford vergülü ilə)",
                  az: "Bizə dizayner, proqramçı və layihə meneceri lazımdır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.1.7</span>
              <h3 className="font-display text-xl text-foreground">
                "For" vs "because": registr fərqi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>For</em> "because" mənasında işlənə bilər, amma daha
              rəsmi/ədəbidir və — subordinativ bağlayıcı olan "because"-dən
              fərqli olaraq (9.2-də görəcəyik) — cümləni
              <strong> başlada bilməz</strong>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We postponed the launch, for the results weren't ready. (rəsmi)",
                  az: "Buraxılışı təxirə saldıq, çünki nəticələr hazır deyildi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.1.8</span>
              <h3 className="font-display text-xl text-foreground">
                Xəbərdarlıq: "comma splice" səhvi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İki müstəqil cümləni **yalnız vergüllə**, bağlayıcı olmadan
              birləşdirmək — geniş yayılmış, amma qrammatik cəhətdən səhv bir
              konstruksiyadır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The meeting ran late, we missed lunch. (✗ comma splice)",
                  az: "İclas uzandı, nahar edə bilmədik.",
                },
                {
                  en: "The meeting ran late, so we missed lunch. (düzgün)",
                  az: "İclas uzandı, ona görə nahar edə bilmədik.",
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
            Azərbaycan dilində "və", "amma", "ya" kimi bağlayıcılardan əvvəl
            vergül qoyulması bu qədər sərt qaydaya tabe deyil, çox vaxt üslub
            məsələsidir. İngilis dilində isə 9.1.2/9.1.3-dəki "müstəqil
            cümlə/söz" ayrımı **məcburi** bir qrammatik qaydadır — bu,
            Azərbaycan dilli öyrənən üçün yeni bir qərar mexanizmidir, çünki
            səhv vergül qoyma (və ya qoymama) rəsmi yazıda səhv sayılır.
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
                  "She reviewed the proposal, and sent it. (subyekt təkrarlanmır)",
                right: "She reviewed the proposal and sent it.",
                az: "O, təklifi nəzərdən keçirdi və göndərdi.",
              },
              {
                wrong:
                  "The report was late but the client was patient. (iki müstəqil cümlə, vergül lazımdır)",
                right: "The report was late, but the client was patient.",
                az: "Hesabat gecikdi, amma müştəri səbirli idi.",
              },
              {
                wrong: "She didn't call, nor she texted.",
                right: "She didn't call, nor did she text.",
                az: "O, nə zəng etdi, nə də mesaj yazdı.",
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
          title="Məşq 1 — Vergül lazımdırmı?"
          items={[
            {
              prompt:
                "We finished the audit ___ submitted the results the same day. (eyni subyekt)",
              answer:
                "We finished the audit and submitted the results the same day.",
              translation:
                "Auditi bitirdik və nəticələri eyni gün təqdim etdik.",
            },
            {
              prompt:
                "The client called twice ___ we still haven't reached an agreement. (iki müstəqil cümlə)",
              answer:
                "The client called twice, but we still haven't reached an agreement.",
              translation:
                "Müştəri iki dəfə zəng etdi, amma hələ razılığa gəlməmişik.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "The system crashed, we lost some data.",
              answer: "The system crashed, and we lost some data.",
              translation: "Sistem çökdü və biz bəzi məlumatları itirdik.",
            },
            {
              prompt: "He isn't available today, nor he will be tomorrow.",
              answer: "He isn't available today, nor will he be tomorrow.",
              translation: "O, bu gün əlçatan deyil, sabah da olmayacaq.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
