import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sifet-ve-zerfler",
  "gradable-qeyri-gradable-guclendiriciler",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sifet-ve-zerfler"
      sectionSlug="gradable-qeyri-gradable-guclendiriciler"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Bütün sifətlər eyni tipdə deyil — bəziləri <strong>dərəcə</strong>{" "}
          qəbul edir (bir az soyuq, çox soyuq), bəziləri isə artıq{" "}
          <strong>ekstremal və ya mütləq</strong> bir mənanı daşıyır və
          dərəcələndirilə bilməz. Bu fərq, sifətdən əvvəl hansı gücləndiricinin
          (very, absolutely, completely) işlənəcəyini müəyyən edir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.7.1</span>
              <h3 className="font-display text-xl text-foreground">
                Dərəcələnən sifətlər: very/quite/extremely ilə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əksər sifətlər dərəcələnən qrupdadır — müxtəlif səviyyələrdə ola
              bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This report is very detailed.",
                  az: "Bu hesabat çox ətraflıdır.",
                },
                {
                  en: "The client seemed extremely satisfied with the outcome.",
                  az: "Müştəri nəticədən çox razı görünürdü.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.7.2</span>
              <h3 className="font-display text-xl text-foreground">
                Dərəcələnməyən — ekstremal sifətlər: artıq "çox" mənasını
                daşıyır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzi sifətlər öz mənasında artıq "çox" ideyasını ehtiva edir
              (freezing = çox soyuq, exhausted = çox yorğun, huge = çox böyük).
              Bunlarla <em>very</em> işlətmək məntiqsizdir — əvəzinə{" "}
              <em>absolutely, completely, totally, utterly</em> işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "After the deadline crunch, the whole team was absolutely exhausted. (✗ very exhausted)",
                  az: "Son tarix təzyiqindən sonra bütün komanda tamamilə yorulmuşdu.",
                },
                {
                  en: "The client's reaction was absolutely furious. (✗ very furious)",
                  az: "Müştərinin reaksiyası tamamilə qəzəbli idi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.7.3</span>
              <h3 className="font-display text-xl text-foreground">
                Dərəcələnməyən — mütləq sifətlər: binar, aralıq yoxdur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu qrup sifətlər ya tamamilə doğrudur, ya heç doğru deyil — aralıq
              dərəcə mövcud deyil (perfect, dead, unique, impossible, full,
              empty, married). Eyni gücləndiricilər (absolutely, completely)
              işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This solution is absolutely impossible to implement with the current budget. (✗ very impossible)",
                  az: "Bu həlli mövcud büdcə ilə tətbiq etmək tamamilə mümkün deyil.",
                },
                {
                  en: "The database is completely full. (✗ very full)",
                  az: "Verilənlər bazası tamamilə doludur.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.7.4</span>
              <h3 className="font-display text-xl text-foreground">
                Praktik test: "a bit X" məntiqli səslənirmi?
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sifəti "a bit" və ya "very" ilə sınamaq — əgər təbii səslənirsə,
              dərəcələnən; qeyri-təbii/qəribə səslənirsə, dərəcələnməyəndir.
            </p>
            <ExampleList
              examples={[
                { en: "a bit cold — təbii (dərəcələnən)", az: "bir az soyuq" },
                {
                  en: "a bit dead — qeyri-təbii (dərəcələnməyən)",
                  az: "(bu, mənasız səslənir)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.7.5</span>
              <h3 className="font-display text-xl text-foreground">
                Comparative/superlativlə (6.4/6.5) uyğunsuzluq
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Mütləq sifətlər (bax: 6.7.3) rəsmi qaydaya görə comparative/
              superlativ formaya keçmir — məntiqi cəhətdən "daha mükəmməl" və ya
              "ən unikal" ziddiyyətlidir (unique = tək, artıq "ən"dir). Danışıq
              dilində eşidilsə də, rəsmi yazıda qaçınılmalıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This design is unique. (✗ more unique — rəsmi qaydaya görə)",
                  az: "Bu dizayn unikaldır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.7.6</span>
              <h3 className="font-display text-xl text-foreground">
                Kritik incəlik: "quite" sifətin növünə görə MƏNASINI dəyişir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ən qabaqcıl nüansdır: <em>quite</em> dərəcələnən sifətlə
              "kifayət qədər, orta" mənasını verir, dərəcələnməyən sifətlə isə{" "}
              <strong>"tamamilə"</strong> mənasına keçir — eyni söz, sifətin
              tipinə görə tam fərqli güc daşıyır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The presentation was quite good. (= kifayət qədər yaxşı, orta-yüksək, dərəcələnən)",
                  az: "Təqdimat kifayət qədər yaxşı idi.",
                },
                {
                  en: "The presentation was quite amazing. (= tamamilə möhtəşəm, dərəcələnməyən)",
                  az: "Təqdimat tamamilə möhtəşəm idi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">6.7.7</span>
              <h3 className="font-display text-xl text-foreground">
                Təhlükəsiz seçim: "really" hər iki qrupla işlənir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əmin olmadıqda, <em>really</em> hər iki sifət tipi ilə problemsiz
              işlənir — bu, ən çevik gücləndiricidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This is really good. / This is really amazing. (hər ikisi düzgün)",
                  az: "Bu, həqiqətən yaxşıdır. / Bu, həqiqətən möhtəşəmdir.",
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
            Azərbaycan dilində "çox" sözü demək olar universal işlənir — "çox
            soyuq" da, "çox mükəmməl" də təbii səslənir, gücləndirici seçimi
            sifətin növündən asılı deyil. İngilis dilində isə bu seçim
            (very/absolutely) sifətin qradasiya olub-olmamasına bağlıdır — bu,
            Azərbaycan dilində olmayan əlavə bir qərar qatıdır.
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
                wrong: "The results were very perfect.",
                right: "The results were absolutely perfect.",
                az: "Nəticələr tamamilə mükəmməl idi.",
              },
              {
                wrong: "I'm very starving after the long flight.",
                right: "I'm absolutely starving after the long flight.",
                az: "Uzun uçuşdan sonra tamamilə acam.",
              },
              {
                wrong: "The room was very freezing.",
                right: "The room was absolutely freezing.",
                az: "Otaq tamamilə soyuq idi.",
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
          title="Məşq 1 — very yoxsa absolutely?"
          items={[
            {
              prompt: "This box is ___ tiny. (ekstremal sifət)",
              answer: "This box is absolutely tiny.",
              translation: "Bu qutu tamamilə balacadır.",
            },
            {
              prompt: "The weather today is ___ cold. (dərəcələnən)",
              answer: "The weather today is very cold.",
              translation: "Bu gün hava çox soyuqdur.",
            },
            {
              prompt:
                "The instructions were ___ impossible to follow. (mütləq)",
              answer: "The instructions were absolutely impossible to follow.",
              translation: "Təlimatlara əməl etmək tamamilə mümkünsüz idi.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "I was very amazed by the presentation.",
              answer: "I was absolutely amazed by the presentation.",
              translation: "Təqdimatdan tamamilə heyrətə gəldim.",
            },
            {
              prompt: "The glass is very empty.",
              answer: "The glass is completely empty.",
              translation: "Stəkan tamamilə boşdur.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
