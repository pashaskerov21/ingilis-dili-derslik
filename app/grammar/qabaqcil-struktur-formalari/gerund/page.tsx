import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "qabaqcil-struktur-formalari",
  "gerund",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="qabaqcil-struktur-formalari" sectionSlug="gerund">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Gerund — felin -ing forması, amma **isim kimi** işlənir. Bu, Present
          Continuous-dakı (4.2) eyni -ing şəkilçisi olsa da, funksiyası tamamilə
          fərqlidir: gerund hərəkəti təsvir etmir, hərəkəti bir **konsept/isim**
          kimi təqdim edir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.3.1</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 1 — Cümlənin subyekti
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Gerund subyekt olduqda, fel həmişə **tək** formada olur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Managing a remote team requires strong communication skills.",
                  az: "Uzaqdan komandanı idarə etmək güclü ünsiyyət bacarığı tələb edir.",
                },
                {
                  en: "Debugging this took longer than expected.",
                  az: "Bunu debug etmək gözlədiyimizdən uzun çəkdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.3.2</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 2 — Cümlənin obyekti
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzi fellərdən sonra (enjoy, avoid, suggest, finish, mind) — hansı
              fellərin gerund tələb etdiyi 10.5-də tam siyahı ilə veriləcək.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We finished reviewing the proposal this morning.",
                  az: "Bu səhər təklifi nəzərdən keçirməyi bitirdik.",
                },
                {
                  en: "She suggested rescheduling the call.",
                  az: "O, zəngi yenidən planlaşdırmağı təklif etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.3.3</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 3 — Sözönündən sonra (7.4.5-in tam qaydası)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              7.4.5-də ilk dəfə gördüyün qayda burada tam formalaşır: sözönündən
              sonra fel gəlirsə, **həmişə gerund** — heç vaxt infinitiv.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I'm thinking of switching vendors.",
                  az: "Təchizatçını dəyişməyi düşünürəm.",
                },
                {
                  en: "He left without saying goodbye.",
                  az: "O, sağollaşmadan getdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.3.4</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 4 — Subyekt tamamlayıcısı ("be"-dən sonra)
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "My biggest challenge right now is finding qualified candidates.",
                  az: "İndi ən böyük çətinliyim ixtisaslı namizəd tapmaqdır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.3.5</span>
              <h3 className="font-display text-xl text-foreground">
                İnkar forması: "not" gerunddan əvvəl
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "Not meeting the deadline could cost us the contract.",
                  az: "Son tarixə çatmamaq bizə müqaviləyə başa gələ bilər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.3.6</span>
              <h3 className="font-display text-xl text-foreground">
                Qabaqcıl qayda: gerunddan əvvəl mülkiyyət forması
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Gerund kimin/nəyin "hərəkət etdiyini" göstərmək lazım gələndə,
              rəsmi qaydaya görə həmin isim/əvəzlik **mülkiyyət formasında**
              olmalıdır (3.3-dəki mülkiyyət sifəti). Qeyri- rəsmi danışıqda adi
              obyekt forması da tez-tez eşidilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We appreciate your responding so quickly. (rəsmi)",
                  az: "Bu qədər tez cavab verdiyinizə görə minnətdarıq.",
                },
                {
                  en: "We appreciate you responding so quickly. (qeyri-rəsmi)",
                  az: "Bu qədər tez cavab verdiyinə görə minnətdarıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.3.7</span>
              <h3 className="font-display text-xl text-foreground">
                Mülkiyyət forması aydınlığa xidmət edə bilər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzən mülkiyyət forması sadəcə rəsmilik deyil, **mənanı
              aydınlaşdırır** — kimin hərəkət etdiyini dəqiqləşdirir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We were surprised at John's leaving so suddenly. (aydın — John gedən idi)",
                  az: "Conun bu qədər qəfil getməsinə təəccübləndik.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">10.3.8</span>
              <h3 className="font-display text-xl text-foreground">
                Sabit ifadələr: gerund məcburi
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "have difficulty",
                "have trouble",
                "have a hard time",
                "spend time",
                "spend money",
                "be busy",
              ].map((v) => (
                <span
                  key={v}
                  className="font-mono text-sm border border-line px-2 py-1"
                >
                  {v} + -ing
                </span>
              ))}
            </div>
            <ExampleList
              examples={[
                {
                  en: "We had trouble accessing the shared drive this morning.",
                  az: "Bu səhər ümumi diskə giriş əldə etməkdə çətinlik çəkdik.",
                },
                {
                  en: "She spent hours preparing the presentation.",
                  az: "O, təqdimatı hazırlamağa saatlarla vaxt sərf etdi.",
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
            Azərbaycan dilində fel isim kimi işlədilərkən məsdər forması
            (-maq/-mək) istifadə olunur ("idarə etmək çətindir"). İngilis
            dilində isə eyni funksiya üçün **iki** rəqib forma (gerund və
            infinitiv, 10.4-də görəcəyik) mövcuddur, seçim isə heç bir universal
            qaydaya deyil, felin özünə görə dəyişir — bu, 10.5-də dərinləşəcək
            əsas çətinlikdir.
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
                wrong: "I'm interested in to learn more about this.",
                right: "I'm interested in learning more about this.",
                az: "Bu barədə daha çox öyrənməkdə maraqlıyam.",
              },
              {
                wrong: "She finished to write the report.",
                right: "She finished writing the report.",
                az: "O, hesabatı yazmağı bitirdi.",
              },
              {
                wrong: "Manage a team require patience.",
                right: "Managing a team requires patience.",
                az: "Komandanı idarə etmək səbir tələb edir.",
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
              prompt:
                "___ (Delay) the launch would disappoint the client. (subyekt)",
              answer: "Delaying the launch would disappoint the client.",
              translation: "Buraxılışı gecikdirmək müştərini məyus edərdi.",
            },
            {
              prompt: "He apologized for ___ (be) late.",
              answer: "He apologized for being late.",
              translation: "O, gecikdiyi üçün üzr istədi.",
            },
            {
              prompt: "We spent the whole afternoon ___ (debug) the issue.",
              answer: "We spent the whole afternoon debugging the issue.",
              translation: "Bütün günorta problemi debug etməyə sərf etdik.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "She is good at to solve complex problems.",
              answer: "She is good at solving complex problems.",
              translation: "O, mürəkkəb problemləri həll etməkdə mahirdir.",
            },
            {
              prompt: "We enjoy to work with this client.",
              answer: "We enjoy working with this client.",
              translation: "Biz bu müştəri ilə işləməkdən zövq alırıq.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
