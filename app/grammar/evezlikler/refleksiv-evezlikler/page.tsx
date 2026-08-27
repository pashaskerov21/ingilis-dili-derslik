import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "evezlikler",
  "refleksiv-evezlikler",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="evezlikler" sectionSlug="refleksiv-evezlikler">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Refleksiv əvəzliklər (-self/-selves ilə bitən) hərəkətin icraçısı ilə
          onun təsir etdiyi şəxsin <strong>eyni olduğunu</strong> göstərir. Bu
          bölmə iki fərqli funksiyanı (əsl refleksiv və vurğulayıcı/emphatic) və
          ingilis dilinin bir çox dildən fərqli olaraq refleksivi{" "}
          <strong>tələb etmədiyi</strong> fellər qrupunu əhatə edir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.4.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas forma və funksiya
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                "myself",
                "yourself",
                "himself",
                "herself",
                "itself",
                "ourselves",
                "yourselves",
                "themselves",
              ].map((p) => (
                <span
                  key={p}
                  className="font-mono text-sm text-foreground border border-line px-2 py-1 text-center"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="text-foreground leading-relaxed">
              Subyekt və obyekt eyni şəxsə aid olduqda işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He accidentally cut himself while fixing the shelf.",
                  az: "O, rəfi düzəldərkən təsadüfən özünü kəsdi.",
                },
                {
                  en: "The new hires introduced themselves to the team.",
                  az: "Yeni işçilər özlərini komandaya təqdim etdilər.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.4.2</span>
              <h3 className="font-display text-xl text-foreground">
                Sözönü obyekti kimi (subyektə istinadla)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sözönündən sonra da refleksiv işlənə bilər, əgər istinad subyektin
              özünədirsə.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She bought a gift for herself after the promotion.",
                  az: "O, vəzifə artımından sonra özünə hədiyyə aldı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.4.3</span>
              <h3 className="font-display text-xl text-foreground">
                "By + refleksiv" — "tək, köməksiz" mənasında sabit ifadə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>By myself/yourself/themselves</em> "başqasının köməyi olmadan,
              tək" mənasını verir — bu, sadə refleksiv mənadan fərqli,
              özünəməxsus bir ifadədir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I finished the entire project by myself.",
                  az: "Layihənin hamısını tək (köməksiz) bitirdim.",
                },
                {
                  en: "She prefers to travel by herself.",
                  az: "O, tək səyahət etməyi üstün tutur.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.4.4</span>
              <h3 className="font-display text-xl text-foreground">
                Vurğulayıcı (emphatic) işlənmə — fərqli funksiya
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Refleksiv əvəzlik subyekt/obyekt eyniliyi olmadan da işlənə bilər
              — bu zaman "başqası deyil, məhz bu şəxs" mənasını vurğulayır. İki
              mövqedə gələ bilər: isimdən <strong>dərhal sonra</strong> (rəsmi),
              və ya cümlənin <strong>sonunda</strong> (gündəlik danışıqda daha
              çox).
            </p>
            <ExampleList
              examples={[
                {
                  en: "The director himself approved the proposal.",
                  az: "Direktorun özü təklifi təsdiqlədi. (isimdən sonra, rəsmi)",
                },
                {
                  en: "She'll present the results herself.",
                  az: "O, nəticələri özü təqdim edəcək. (cümlə sonunda, təbii)",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Fərq: "He got promoted." (sadəcə fakt) ilə "He got himself
              promoted." (məhz öz səyi ilə, vurğu) arasındakı incəliyə diqqət
              et.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.4.5</span>
              <h3 className="font-display text-xl text-foreground">
                Vacib istisna: refleksiv TƏLƏB ETMƏYƏN fellər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bir çox dildən fərqli olaraq, ingilis dilində gündəlik hərəkətləri
              bildirən fellər (geyinmək, oyanmaq, oturmaq, qırxınmaq, yuyunmaq){" "}
              <strong>refleksiv əvəzliksiz</strong> işlənir — refleksiv əlavə
              etmək təbii səslənməz.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                "wash",
                "dress",
                "shave",
                "wake up",
                "get up",
                "sit down",
                "stand up",
                "relax",
                "concentrate",
              ].map((v) => (
                <span
                  key={v}
                  className="font-mono text-sm text-foreground border border-line px-2 py-1 text-center"
                >
                  {v}
                </span>
              ))}
            </div>
            <ExampleList
              examples={[
                {
                  en: "He gets up at six every morning. (✗ gets himself up)",
                  az: "O, hər səhər saat altıda oyanır.",
                },
                {
                  en: "Please sit down and make yourself comfortable. (✗ sit yourself down)",
                  az: "Zəhmət olmasa, oturun və rahat olun.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.4.6</span>
              <h3 className="font-display text-xl text-foreground">
                İş yazışmasında ən çox rast gəlinən səhv: "myself" I/me əvəzinə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              "Daha rəsmi" görünmək istəyi ilə, insanlar tez-tez mürəkkəb
              subyekt/obyektlərdə (X and myself) <em>myself</em>-i <em>I</em> və
              ya <em>me</em> əvəzinə səhvən işlədirlər. Bu, heç vaxt düzgün
              deyil — refleksiv əvəzlik yalnız cümlədə artıq subyekt kimi "I"
              olduqda istifadə oluna bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Please contact John or me with any questions. (✗ or myself)",
                  az: "Hər hansı sualla Con və ya mənimlə əlaqə saxlayın.",
                },
                {
                  en: "Sarah and I will handle the onboarding. (✗ Sarah and myself)",
                  az: "Sara və mən işə qəbulu idarə edəcəyik.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">3.4.7</span>
              <h3 className="font-display text-xl text-foreground">
                Qeyri-standart formalar: "hisself", "theirselves" yoxdur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bəzi ləhcələrdə eşidilsə də, standart ingilis dilində bu formalar
              mövcud deyil — düzgün formalar <em>himself</em> və{" "}
              <em>themselves</em>-dir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He taught himself how to code. (✗ hisself)",
                  az: "O, kodlamağı özü öyrəndi.",
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
            Azərbaycan dilində gündəlik hərəkətlər çox vaxt felin özündə
            (məsələn "geyinmək" — "geymək"dən fərqli müstəqil söz kimi) və ya
            ayrıca refleksiv formasız ifadə olunur, amma bəzi kontekstdə "özünü"
            sözü əlavə edilə bilər ("özünü göstərdi"). İngilis dilində isə
            3.4.5-dəki fellər qrupu üçün refleksiv <strong>heç vaxt</strong>{" "}
            əlavə olunmur — bu, universal bir qayda deyil, konkret fellər
            siyahısıdır, ona görə əzbərlənməlidir.
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
                wrong: "Please send the file to John or myself.",
                right: "Please send the file to John or me.",
                az: "Zəhmət olmasa, faylı Cona və ya mənə göndər.",
              },
              {
                wrong: "He washed himself and got dressed himself.",
                right: "He washed and got dressed.",
                az: "O, yuyundu və geyindi.",
              },
              {
                wrong: "The boy hurt hisself while playing.",
                right: "The boy hurt himself while playing.",
                az: "Oğlan oynayarkən özünü yaraladı.",
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
          title="Məşq 1 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "Feel free to contact Sarah or myself.",
              answer: "Feel free to contact Sarah or me.",
              translation: "Sara ilə və ya mənimlə əlaqə saxlaya bilərsiniz.",
            },
            {
              prompt: "She dressed herself quickly and left.",
              answer: "She dressed quickly and left.",
              translation: "O, tez geyindi və getdi.",
            },
            {
              prompt: "They blamed theirselves for the delay.",
              answer: "They blamed themselves for the delay.",
              translation: "Onlar gecikməyə görə özlərini günahlandırdılar.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Uyğun refleksiv əvəzliyi yaz"
          items={[
            {
              prompt: "I taught ___ how to use the software. (I)",
              answer: "I taught myself how to use the software.",
              translation: "Proqramı istifadə etməyi özüm öyrəndim.",
            },
            {
              prompt: "The CEO ___ announced the merger. (he)",
              answer: "The CEO himself announced the merger.",
              translation: "İcraçı direktorun özü birləşməni elan etdi.",
            },
            {
              prompt: "We finished the report by ___. (we)",
              answer: "We finished the report by ourselves.",
              translation: "Hesabatı özümüz (köməksiz) bitirdik.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
