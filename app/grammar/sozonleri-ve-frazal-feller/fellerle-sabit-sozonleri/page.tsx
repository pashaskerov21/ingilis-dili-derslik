import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sozonleri-ve-frazal-feller",
  "fellerle-sabit-sozonleri",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sozonleri-ve-frazal-feller"
      sectionSlug="fellerle-sabit-sozonleri"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bəzi fellər həmişə <strong>eyni sözönü ilə</strong> işlənir — seçim
          çox vaxt heç bir məntiqi qaydaya tabe olmur, sadəcə{" "}
          <strong>əzbərlənməli sabit birləşmədir</strong> (collocation). Bu,
          ingilis dilinin ən çox əzbər tələb edən sahələrindən biridir, çünki
          hər fel öz "tərəfdaşını" seçib.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.4.1</span>
              <h3 className="font-display text-xl text-foreground">
                Konsept: fel sözönünə "möhtacdır"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu birləşmələr — prepositional verb adlanır — obyektdən əvvəl
              mütləq həmin sözönünü tələb edir, başqası ilə əvəz oluna bilməz.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Success depends on careful planning. (✗ depends of/from)",
                  az: "Uğur diqqətli planlaşdırmadan asılıdır.",
                },
                {
                  en: "Please listen to the instructions carefully. (✗ listen the instructions)",
                  az: "Zəhmət olmasa, təlimatları diqqətlə dinlə.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.4.2</span>
              <h3 className="font-display text-xl text-foreground">
                Sözönünə görə qruplaşdırılmış siyahı
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əzbərləməyi asanlaşdırmaq üçün fellər sözönünə görə qruplaşdırılıb
              — təsadüfi siyahı əvəzinə naxış kimi yadda saxla.
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  + to
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "listen to",
                    "belong to",
                    "respond to",
                    "apply to",
                    "refer to",
                    "object to",
                  ].map((v) => (
                    <span
                      key={v}
                      className="font-mono text-sm border border-line px-2 py-1"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  + for
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "wait for",
                    "apply for",
                    "account for",
                    "apologize for",
                    "ask for",
                    "search for",
                  ].map((v) => (
                    <span
                      key={v}
                      className="font-mono text-sm border border-line px-2 py-1"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  + on
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "depend on",
                    "rely on",
                    "insist on",
                    "concentrate on",
                    "focus on",
                    "count on",
                  ].map((v) => (
                    <span
                      key={v}
                      className="font-mono text-sm border border-line px-2 py-1"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  + about
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "worry about",
                    "talk about",
                    "think about",
                    "complain about",
                    "care about",
                  ].map((v) => (
                    <span
                      key={v}
                      className="font-mono text-sm border border-line px-2 py-1"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  + in
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "believe in",
                    "succeed in",
                    "participate in",
                    "specialize in",
                    "invest in",
                  ].map((v) => (
                    <span
                      key={v}
                      className="font-mono text-sm border border-line px-2 py-1"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  + with
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "deal with",
                    "cope with",
                    "agree with (şəxs)",
                    "compete with",
                  ].map((v) => (
                    <span
                      key={v}
                      className="font-mono text-sm border border-line px-2 py-1"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  + of
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "consist of",
                    "approve of",
                    "remind ... of",
                    "die of",
                    "think of",
                  ].map((v) => (
                    <span
                      key={v}
                      className="font-mono text-sm border border-line px-2 py-1"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <ExampleList
              examples={[
                {
                  en: "Our success depends on how well we plan the launch.",
                  az: "Uğurumuz buraxılışı nə qədər yaxşı planlaşdırdığımızdan asılıdır.",
                },
                {
                  en: "The proposal consists of three main sections.",
                  az: "Təklif üç əsas bölmədən ibarətdir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.4.3</span>
              <h3 className="font-display text-xl text-foreground">
                Sözönü mənanı dəyişir: "agree with" vs "agree on/about"
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Eyni fel fərqli sözönü ilə fərqli obyekt növü tələb edir —{" "}
              <em>agree with</em> şəxslə, <em>agree on/about</em> mövzu/ qərarla
              işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I agree with you on this point. (şəxs + mövzu birgə)",
                  az: "Bu məsələdə səninlə razıyam.",
                },
                {
                  en: "We couldn't agree on a final price. (mövzu/qərar)",
                  az: "Yekun qiymət barədə razılığa gələ bilmədik.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.4.4</span>
              <h3 className="font-display text-xl text-foreground">
                Sifət + sözönü — eyni məntiq, əlaqəli struktur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Fellərə əlavə olaraq, bir çox sifət də sabit sözönü tələb edir —
              bunlar bura sıx bağlıdır və eyni əzbər prinsipinə tabedir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She's interested in machine learning.",
                  az: "O, maşın öyrənməsi ilə maraqlanır.",
                },
                {
                  en: "He's afraid of public speaking.",
                  az: "O, ictimai çıxışdan qorxur.",
                },
                {
                  en: "This approach is similar to the one we used before.",
                  az: "Bu yanaşma əvvəl istifadə etdiyimizə bənzəyir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.4.5</span>
              <h3 className="font-display text-xl text-foreground">
                Sözönündən sonra: gerund (-ing), infinitiv YOX
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sözönündən sonra fel gəlirsə, bu, həmişə{" "}
              <strong>-ing formasında</strong> olmalıdır — sözönü yalnız
              isim/isim funksiyalı sözlə işlənə bilər, "to + infinitiv" ilə yox
              (ayrıca fəsildə dərinləşəcək).
            </p>
            <ExampleList
              examples={[
                {
                  en: "We look forward to hearing from you. (✗ to hear)",
                  az: "Sizdən eşitməyi səbirsizliklə gözləyirik.",
                },
                {
                  en: "She's good at solving complex problems.",
                  az: "O, mürəkkəb problemləri həll etməkdə mahirdir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.4.6</span>
              <h3 className="font-display text-xl text-foreground">
                Fərqi: bu, frazal fel deyil (7.5-ə körpü)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu bölmədəki birləşmələr (prepositional verbs) frazal fellərdən
              fərqli olaraq <strong>hərfi mənasını saxlayır</strong> və obyekt
              həmişə sözönündən <strong>dərhal sonra</strong> gəlir, heç vaxt
              ayrıla bilmir. Növbəti bölmələrdə göndəcəyimiz frazal fellər isə
              çox vaxt <strong>məcazi məna</strong> daşıyır və bəziləri ayrıla
              bilir.
            </p>
          </div>
        </section>

        {/* ---------- MÜQAYİSƏ QUTUSU ---------- */}
        <aside className="border-l-2 border-accent bg-accent/5 p-5 space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Azərbaycan dili ilə struktur fərqi
          </h4>
          <p className="text-foreground leading-relaxed">
            Azərbaycan dilində fellə "sözönü" əlaqəsi əvəzinə hal şəkilçiləri
            istifadə olunur (kimə, kimdən, kimlə) və bu, felin özünə bağlı
            olmadan, isimin roluna görə seçilir. İngilis dilində isə sözönü{" "}
            <strong>felin özünə bağlıdır</strong> — bu, tərcümə edərkən
            Azərbaycan dilli öyrənənin ən çox səhv etdiyi sahələrdən biridir,
            çünki ana dildəki hal məntiqini ingilis sözönlərinə tərcümə etmək
            çox vaxt yanlış nəticə verir.
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
                wrong: "This depends of the situation.",
                right: "This depends on the situation.",
                az: "Bu, vəziyyətdən asılıdır.",
              },
              {
                wrong: "We are waiting the results.",
                right: "We are waiting for the results.",
                az: "Nəticələri gözləyirik.",
              },
              {
                wrong: "I look forward to hear from you.",
                right: "I look forward to hearing from you.",
                az: "Sizdən eşitməyi gözləyirəm.",
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
          title="Məşq 1 — Uyğun sözönünü yaz"
          items={[
            {
              prompt: "The final decision depends ___ the client's approval.",
              answer: "The final decision depends on the client's approval.",
              translation: "Yekun qərar müştərinin təsdiqindən asılıdır.",
            },
            {
              prompt: "She's responsible ___ managing the entire budget.",
              answer: "She's responsible for managing the entire budget.",
              translation: "O, bütün büdcəni idarə etməkdən məsuldur.",
            },
            {
              prompt: "We're really looking forward ___ meeting you in person.",
              answer: "We're really looking forward to meeting you in person.",
              translation: "Sizinlə şəxsən görüşməyi səbirsizliklə gözləyirik.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "He apologized for be late.",
              answer: "He apologized for being late.",
              translation: "O, gecikdiyi üçün üzr istədi.",
            },
            {
              prompt: "This proposal consists in three parts.",
              answer: "This proposal consists of three parts.",
              translation: "Bu təklif üç hissədən ibarətdir.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
