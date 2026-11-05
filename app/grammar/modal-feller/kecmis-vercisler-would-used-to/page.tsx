import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "modal-feller",
  "kecmis-vercisler-would-used-to",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="modal-feller"
      sectionSlug="kecmis-vercisler-would-used-to"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Fəslin son bölməsi — keçmişdə müntəzəm olan, indi isə artıq doğru
          olmayan vəziyyət və hərəkətləri bildirən iki forma. Səthi baxışda
          bənzər görünsələr də, <em>would</em>-un{" "}
          <strong>ciddi bir məhdudiyyəti</strong> var ki, bu, ən çox gözdən
          qaçırılan qaydadır.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.10.1</span>
              <h3 className="font-display text-xl text-foreground">
                Used to — həm hərəkət, həm vəziyyət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Used to</em> universal formadır — həm təkrarlanan hərəkətləri,
              həm də daimi olmuş, indi artıq doğru olmayan vəziyyətləri (stative
              fellərlə, bax: 4.3) bildirə bilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I used to play chess every weekend. (hərəkət)",
                  az: "Hər həftəsonu şahmat oynayardım.",
                },
                {
                  en: "We used to live in a small apartment before moving here. (vəziyyət)",
                  az: "Bura köçməzdən əvvəl kiçik bir mənzildə yaşayırdıq.",
                },
                {
                  en: "She used to believe in that theory, but not anymore. (stative fel — believe)",
                  az: "O, əvvəllər bu nəzəriyyəyə inanırdı, amma artıq yox.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.10.2</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik məhdudiyyət: "would" YALNIZ hərəkətlə, vəziyyətlə YOX
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Would</em> təkrarlanan hərəkətləri bildirə bilir, amma{" "}
              <strong>stative fellərlə (bax: 4.3) heç vaxt işlənmir</strong> —
              bu, "used to"-dan fərqli, sərt bir qaydadır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Every summer, we would visit our grandparents' farm. (hərəkət — düzgün)",
                  az: "Hər yay babamgilin fermasına gedirdik.",
                },
                {
                  en: "She would own a small bakery in her hometown. (✗ — 'own' stative fel, would işlənmir)",
                  az: "(bu cümlə səhvdir — 'used to own' olmalıdır)",
                },
                {
                  en: "She used to own a small bakery in her hometown. (düzgün)",
                  az: "O, doğma şəhərində kiçik bir çörəkxanaya sahib idi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.10.3</span>
              <h3 className="font-display text-xl text-foreground">
                İnkar/sual: "used to" ilə, "would" ilə nadir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Used to</em>-nun inkar/sual forması <em>did/didn't</em> ilə
              qurulur — diqqət, bu zaman "used" "use" olur ("d" düşür).{" "}
              <em>Would</em> bu mənada demək olar heç vaxt inkar/sualda
              işlənmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Did you use to play an instrument as a child?",
                  az: "Uşaqkən hər hansı alət çalırdın?",
                },
                {
                  en: "I didn't use to enjoy reading, but now I love it.",
                  az: "Əvvəllər oxumaqdan həzz almırdım, amma indi bunu sevirəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.10.4</span>
              <h3 className="font-display text-xl text-foreground">
                Nəql üslubu: "used to" mövzunu açır, "would" davam etdirir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Təbii nəqletmədə tipik naxış: <em>used to</em> ilə mövzu/kontekst
              ilk dəfə təqdim olunur, sonra <em>would</em> ilə eyni dövrə aid
              əlavə detallar verilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I used to spend summers at my aunt's house. We would wake up early and pick fruit from the garden.",
                  az: "Yayları xalamgildə keçirirdim. Erkən oyanıb bağdan meyvə yığardıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.10.5</span>
              <h3 className="font-display text-xl text-foreground">
                Neytral alternativ: Past Simple
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Past Simple (4.6) həmişə alternativ kimi işlənə bilər, amma{" "}
              <strong>təkrarı və "artıq doğru deyil" kontrastını</strong> used
              to/would qədər aydın vurğulamır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We went to the same beach every summer. (neytral)",
                  az: "Hər yay eyni çimərliyə gedirdik.",
                },
                {
                  en: "We used to go to the same beach every summer. (aydın kontrast — indi getmirik)",
                  az: "Hər yay eyni çimərliyə gedirdik. (artıq getmirik)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.10.6</span>
              <h3 className="font-display text-xl text-foreground">
                Qarışdırılan forma: "be/get used to + -ing" — tam fərqli məna
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Diqqət — bu, tamam ayrı bir strukturdur: <em>be/get used to</em>{" "}
              "alışmaq, öyrəşmək" mənasını verir, keçmiş vərdişlə əlaqəsi
              yoxdur. Bu, ayrıca mövzuda dərinləşəcək, burada yalnız səthi
              qarışıqlığın qarşısını almaq üçün qeyd olunur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I used to work night shifts. (keçmiş vərdiş — artıq etmirəm)",
                  az: "Əvvəllər gecə növbələrində işləyirdim.",
                },
                {
                  en: "I'm used to working night shifts. (indi alışmışam — hazırda edirəm)",
                  az: "Gecə növbələrində işləməyə öyrəşmişəm. (indi də edirəm)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.10.7</span>
              <h3 className="font-display text-xl text-foreground">
                Tək hadisə üçün: nə used to, nə would
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əgər hərəkət yalnız <strong>bir dəfə</strong> baş veribsə (təkrar
              deyil), Past Simple məcburidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I went to Egypt in 2014. (✗ I used to go / I would go — tək dəfəlik hadisə)",
                  az: "2014-cü ildə Misirə getdim.",
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
            Azərbaycan dilində keçmiş vərdiş bitmiş keçmiş zamanla ("gedirdik",
            "yaşayırdıq") ifadə olunur, həm hərəkət, həm vəziyyət üçün eyni
            formada. İngilis dilində "used to" bu universallığa bənzəsə də,{" "}
            <em>would</em>-un stative fellərlə işlənməmə qaydası tamamilə yad
            bir məhdudiyyətdir — bu, Azərbaycan dilli öyrənən üçün ehtiyatlı
            olunmalı yeganə əsl "tələ" nöqtəsidir bu mövzuda.
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
                  "She would know the answer to everything when she was young.",
                right:
                  "She used to know the answer to everything when she was young.",
                az: "O, gənc olanda hər şeyin cavabını bilirdi.",
              },
              {
                wrong: "I use to play football every day.",
                right: "I used to play football every day.",
                az: "Hər gün futbol oynayırdım.",
              },
              {
                wrong: "Did you used to live here?",
                right: "Did you use to live here?",
                az: "Əvvəllər burda yaşayırdınmı?",
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
          title="Məşq 1 — used to yoxsa would?"
          items={[
            {
              prompt:
                "When I was a child, I ___ (be) afraid of the dark. (vəziyyət — stative)",
              answer: "When I was a child, I used to be afraid of the dark.",
              translation: "Uşaqkən qaranlıqdan qorxurdum.",
            },
            {
              prompt:
                "Every evening, my grandmother ___ (tell) us stories. (hərəkət)",
              answer: "Every evening, my grandmother would tell us stories.",
              translation: "Hər axşam nənəm bizə nağıl danışardı.",
            },
            {
              prompt:
                "He ___ (own) three cars, but he sold them all. (sahiblik — stative)",
              answer: "He used to own three cars, but he sold them all.",
              translation: "Onun üç maşını var idi, amma hamısını satdı.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "She would live in Paris for five years in her twenties.",
              answer:
                "She used to live in Paris for five years in her twenties.",
              translation: "O, iyirmili yaşlarında beş il Parisdə yaşadı.",
            },
            {
              prompt: "Did you used to smoke?",
              answer: "Did you use to smoke?",
              translation: "Əvvəllər siqaret çəkirdinmi?",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
