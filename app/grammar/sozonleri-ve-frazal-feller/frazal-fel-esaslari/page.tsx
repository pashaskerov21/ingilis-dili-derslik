import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sozonleri-ve-frazal-feller",
  "frazal-fel-esaslari",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sozonleri-ve-frazal-feller"
      sectionSlug="frazal-fel-esaslari"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Frazal fel — fel və bir və ya iki "particle" (adverb və/yaxud sözönü)
          birləşərək <strong>tək bir məna vahidi</strong> yaradır. Bu, ingilis
          dilinin ən çətin, amma ən işlək hissələrindən biridir, çünki mənanı
          çox vaxt tərkib hissələrindən çıxarmaq mümkün deyil.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.5.1</span>
              <h3 className="font-display text-xl text-foreground">
                Forma: fel + particle
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Particle görünüşcə sözönünə bənzəsə də, əslində zərf kimi işləyir
              — bəzi particle-lər (away, back, out, forward) heç vaxt sözönü
              kimi işlənmir, yalnız frazal fellərdə görünür.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The meeting has been called off.",
                  az: "İclas ləğv edilib.",
                },
                {
                  en: "Please give this document back to the client.",
                  az: "Zəhmət olmasa, bu sənədi müştəriyə qaytar.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.5.2</span>
              <h3 className="font-display text-xl text-foreground">
                Hərfi məna: tərkib hissələrdən aydın çıxarıla bilir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzi frazal fellərdə məna tərkib hissələrinin cəmindən birbaşa
              görünür.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She looked out the window during the meeting.",
                  az: "O, iclas zamanı pəncərədən bayıra baxdı.",
                },
                {
                  en: "He came back to the office after lunch.",
                  az: "O, nahar edəndən sonra ofisə qayıtdı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.5.3</span>
              <h3 className="font-display text-xl text-foreground">
                Məcazi məna: tərkib hissələrdən çıxarıla bilmir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ən çox işlənən frazal fellərin əksəriyyəti bu qrupdadır — məna
              "fel" və "particle"-in ayrı-ayrı mənalarına bağlı deyil,{" "}
              <strong>tamamilə yeni</strong> bir konsepti bildirir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We had to put off the launch due to the outage. (put off = təxirə salmaq)",
                  az: "Nasazlığa görə buraxılışı təxirə salmalı olduq.",
                },
                {
                  en: "The rumor turned out to be false. (turn out = məlum olmaq)",
                  az: "Söz-söhbətin yalan olduğu məlum oldu.",
                },
                {
                  en: "I can't figure out why the server keeps crashing. (figure out = başa düşmək)",
                  az: "Serverin niyə davamlı çökdüyünü başa düşə bilmirəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.5.4</span>
              <h3 className="font-display text-xl text-foreground">
                Bir frazal fel, bir neçə əlaqəsiz məna
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Eyni frazal fel kontekstdən asılı olaraq tamam fərqli mənalar
              daşıya bilər — düzgün mənanı yalnız kontekst müəyyən edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He didn't show up for the meeting. (show up = gəlmək)",
                  az: "O, iclasa gəlmədi.",
                },
                {
                  en: "Her mistake showed up the flaws in the whole plan. (show up = üzə çıxarmaq)",
                  az: "Onun səhvi bütün planın zəif nöqtələrini üzə çıxardı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.5.5</span>
              <h3 className="font-display text-xl text-foreground">
                Registr qeydi: rəsmi yazıda tək sözlü qarşılıq üstünlük təşkil
                edir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Frazal fellər əsasən gündəlik, qeyri-rəsmi danışıqda işlənir.
              Rəsmi/akademik yazıda çox vaxt latın kökənli tək sözlü qarşılığı
              üstün tutulur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "put off (gündəlik) → postpone (rəsmi)",
                  az: "təxirə salmaq",
                },
                {
                  en: "find out (gündəlik) → discover (rəsmi)",
                  az: "aşkar etmək",
                },
                {
                  en: "get together (gündəlik) → congregate (rəsmi)",
                  az: "toplaşmaq",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Diqqət: bu qarşılıqlar həmişə 100% eyni mənanı vermir — bəzən
              üslub baxımından fərq yaransa da, kontekstə görə seçim etmək
              lazımdır.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">7.5.6</span>
              <h3 className="font-display text-xl text-foreground">
                Növbəti bölmələrə körpü: struktur növləri
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Frazal fellər öz strukturuna görə üç kateqoriyaya bölünür —
              bunları növbəti üç bölmədə ayrıca öyrənəcəyik: ayrıla bilən (7.6),
              ayrılmayan (7.7) və keçişsiz/üç hissəli (7.8).
            </p>
          </div>
        </section>

        {/* ---------- MÜQAYİSƏ QUTUSU ---------- */}
        <aside className="border-l-2 border-accent bg-accent/5 p-5 space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Azərbaycan dili ilə struktur fərqi
          </h4>
          <p className="text-foreground leading-relaxed">
            Azərbaycan dilində fellə əlavə söz birləşərək tamamilə yeni məna
            yaratma naxışı bu qədər sistemli və geniş yayılmış deyil — yeni məna
            adətən tamam fərqli bir fel kökü ilə ifadə olunur. İngilis dilində
            isə eyni fel (turn, put, get, look) onlarla fərqli particle ilə
            birləşərək onlarla fərqli məna yarada bilir — bu, ingilis dilinin
            lüğət zənginliyinin əsas mənbələrindən biridir və Azərbaycan dilli
            öyrənən üçün tamamilə yeni bir öyrənmə strategiyası tələb edir
            (tək-tək söz əvəzinə, fel+particle "ailələrini" öyrənmək).
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
                  "We need to discover out why this happened. (frazal fel ilə tək söz qarışdırılıb)",
                right: "We need to find out why this happened.",
                az: "Bunun niyə baş verdiyini öyrənməliyik.",
              },
              {
                wrong: "The event was cancelled off.",
                right: "The event was called off.",
                az: "Tədbir ləğv edildi.",
              },
              {
                wrong: "I will postpone off the meeting.",
                right: "I will put off the meeting.",
                az: "İclası təxirə salacam.",
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
          title="Məşq 1 — Uyğun frazal feli seç"
          items={[
            {
              prompt:
                "The training session was ___ due to low attendance. (call off — ləğv edildi)",
              answer:
                "The training session was called off due to low attendance.",
              translation: "Az iştirak səbəbindən təlim ləğv edildi.",
            },
            {
              prompt:
                "It ___ that the invoice was sent to the wrong address. (turn out — məlum oldu)",
              answer:
                "It turned out that the invoice was sent to the wrong address.",
              translation: "Fakturanın yanlış ünvana göndərildiyi məlum oldu.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Rəsmi qarşılığı yaz"
          items={[
            {
              prompt: "put off → (rəsmi)",
              answer: "postpone",
              translation: "təxirə salmaq",
            },
            {
              prompt: "find out → (rəsmi)",
              answer: "discover",
              translation: "aşkar etmək",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
