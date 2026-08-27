import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "isimler-artikler-kemiyyet",
  "artikl-the",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="isimler-artikler-kemiyyet"
      sectionSlug="artikl-the"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          <em>The</em> — danışan və dinləyicinin hər ikisinin{" "}
          <strong>hansı konkret şeydən söhbət getdiyini bildiyi</strong> zaman
          istifadə olunur. 2.3-dən fərqli olaraq, <em>the</em> həm tək, həm cəm,
          həm də sayıla bilməyən isimlərlə işlənə bilir — məhdudiyyət ismin
          sayına deyil, onun <strong>müəyyənlik statusuna</strong> aiddir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.4.1</span>
              <h3 className="font-display text-xl text-foreground">
                İkinci dəfə qeyd olunma qaydası
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ən əsas və ən tez-tez rast gəlinən nümunə: bir isim mətndə{" "}
              <strong>ilk dəfə</strong> <em>a/an</em> ilə təqdim olunur,{" "}
              <strong>növbəti</strong> istinadlarda isə artıq müəyyən sayıldığı
              üçün <em>the</em> ilə işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We received a proposal yesterday. The proposal looks promising.",
                  az: "Dünən bir təklif aldıq. Təklif ümidverici görünür.",
                },
                {
                  en: "There is a bug in the login flow. The bug affects all users.",
                  az: "Giriş prosesində bir xəta var. Xəta bütün istifadəçilərə təsir edir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.4.2</span>
              <h3 className="font-display text-xl text-foreground">
                Kontekstdən aydın müəyyənlik (ilk qeyddən əvvəl belə)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İsim heç vaxt açıq şəkildə qeyd olunmasa belə, situasiyadan
              aydındırsa (yalnız bir dənəsi mövcuddursa) birbaşa <em>the</em>{" "}
              ilə işlənə bilər — buna görə "ilk dəfə = a/an" qaydası mütləq
              deyil, yalnız ümumi meyildir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Can you turn off the lights before you leave?",
                  az: "Getməzdən əvvəl işıqları söndürə bilərsən? (otaqda bir dəst işıq var)",
                },
                {
                  en: "I need to talk to the manager.",
                  az: "Menecerlə danışmalıyam. (bu şöbədə bir menecer var)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.4.3</span>
              <h3 className="font-display text-xl text-foreground">
                Konkretləşdirici əlavələr: of-birləşməsi və təyin cümləsi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İsimdən sonra gələn <em>of</em>-birləşməsi və ya təyin (relative)
              cümləsi ismi avtomatik müəyyən edir — çünki bu əlavə artıq "hansı"
              sualına cavab verir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The director of the finance department approved the request.",
                  az: "Maliyyə şöbəsinin direktoru sorğunu təsdiqlədi.",
                },
                {
                  en: "The file that you sent yesterday is corrupted.",
                  az: "Dünən göndərdiyin fayl zədələnib.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.4.4</span>
              <h3 className="font-display text-xl text-foreground">
                Dünyada tək olan obyektlər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Təbiətdə və ya ümumi bilgidə yalnız bir nümunəsi olan varlıqlar
              həmişə <em>the</em> ilə işlənir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The internet has changed how businesses operate.",
                  az: "İnternet biznesin idarə olunma tərzini dəyişdi.",
                },
                {
                  en: "The sun sets earlier in winter.",
                  az: "Qışda günəş daha tez batır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.4.5</span>
              <h3 className="font-display text-xl text-foreground">
                Superlativ və sıra saylarla məcburi işlənmə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ən yüksək/ən aşağı dərəcəni bildirən sifətlər (superlative) və
              sıra sayları (first, second, last) mütləq <em>the</em> tələb edir
              — çünki bunlar öz təbiətinə görə tək bir elementi müəyyənləşdirir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "This is the most efficient solution we've found.",
                  az: "Bu, tapdığımız ən effektiv həlldir.",
                },
                {
                  en: "She was the first candidate to respond.",
                  az: "O, cavab verən ilk namizəd idi.",
                },
                {
                  en: "That was the last update this quarter.",
                  az: "Bu, bu rübün son yeniləməsi idi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.4.6</span>
              <h3 className="font-display text-xl text-foreground">
                Onilliklər və tarixi dövrlər
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The company was founded in the 1990s.",
                  az: "Şirkət 1990-cı illərdə yaradılıb.",
                },
                {
                  en: "This design reflects the trends of the early 2000s.",
                  az: "Bu dizayn 2000-ci illərin əvvəlinin tendensiyalarını əks etdirir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.4.7</span>
              <h3 className="font-display text-xl text-foreground">
                "The + sifət" — bütöv bir qrup insan
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Müəyyən sifətlər <em>the</em> ilə birləşərək, cəm isim əlavə
              etmədən, bütöv bir sosial qrupu bildirir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The unemployed face significant challenges in this economy.",
                  az: "İşsizlər bu iqtisadiyyatda ciddi çətinliklərlə üzləşirlər.",
                },
                {
                  en: "Policies should protect the vulnerable.",
                  az: "Siyasətlər həssas qrupları qorumalıdır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">2.4.8</span>
              <h3 className="font-display text-xl text-foreground">
                Tələffüz: /ðə/ və /ði/
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              2.3-dəki a/an qaydasına paralel olaraq, <em>the</em>-nin özü də
              növbəti sözün səsindən asılı olaraq fərqli tələffüz olunur — samit
              səsdən əvvəl <strong>/ðə/</strong>, sait səsdən əvvəl{" "}
              <strong>/ði/</strong>. Yazılışı dəyişmir, yalnız tələffüz.
            </p>
            <ExampleList
              examples={[
                {
                  en: "the project (/ðə/) — the update (/ði/)",
                  az: "layihə — yeniləmə",
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
            Azərbaycan dilində ayrıca artikl sözü yoxdur, lakin müəyyənlik
            anlayışı tamamilə yad deyil — o, fərqli bir mexanizmlə, təsirlik hal
            şəkilçisi (-i/-ı/-u/-ü) vasitəsilə ifadə olunur: "kitab oxudum"
            (qeyri-müəyyən, hər hansı kitab) ilə "kitab-ı oxudum" (müəyyən,
            konkret kitab) arasındakı fərq buna bənzəyir. Fərq ondadır ki,
            Azərbaycan dilində bu, ismin özünə bitişən bir şəkilçidir, ingilis
            dilində isə ayrı, müstəqil bir sözdür (the).
          </p>
          <div className="font-mono text-sm space-y-1 text-muted">
            <p>AZ: Hesabatı oxudum. (-ı şəkilçisi → müəyyənlik)</p>
            <p>EN: I read the report. (the → müəyyənlik)</p>
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
                wrong: "Internet has changed everything.",
                right: "The internet has changed everything.",
                az: "İnternet hər şeyi dəyişdi.",
              },
              {
                wrong: "She was first person to arrive.",
                right: "She was the first person to arrive.",
                az: "O, gəlmiş ilk şəxs idi.",
              },
              {
                wrong: "Director of sales approved the plan.",
                right: "The director of sales approved the plan.",
                az: "Satış direktoru planı təsdiqlədi.",
              },
              {
                wrong: "This is best option available.",
                right: "This is the best option available.",
                az: "Bu, mövcud ən yaxşı seçimdir.",
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
          title="Məşq 1 — 'the' lazımdırmı? (əlavə et və ya boş burax)"
          items={[
            {
              prompt: "___ CEO announced ___ new strategy yesterday.",
              answer: "The CEO announced the new strategy yesterday.",
              translation: "Baş direktor dünən yeni strategiyanı elan etdi.",
            },
            {
              prompt: "She is ___ most talented developer on our team.",
              answer: "She is the most talented developer on our team.",
              translation: "O, komandamızdakı ən istedadlı proqramçıdır.",
            },
            {
              prompt:
                "We launched ___ product last year. ___ product became very popular.",
              answer:
                "We launched a product last year. The product became very popular.",
              translation:
                "Keçən il bir məhsul buraxdıq. Məhsul çox populyar oldu.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "Manager of this branch resigned.",
              answer: "The manager of this branch resigned.",
              translation: "Bu filialın meneceri istefa verdi.",
            },
            {
              prompt: "This was last meeting of the year.",
              answer: "This was the last meeting of the year.",
              translation: "Bu, ilin son iclası idi.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
