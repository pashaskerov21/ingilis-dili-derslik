import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "feller-ve-zamanlar",
  "present-continuous",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="feller-ve-zamanlar"
      sectionSlug="present-continuous"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Present Continuous "hazırda baş verən hərəkət" kimi tanınsa da,
          əslində beş fərqli funksiyaya malikdir — bunlardan ikisi hətta{" "}
          <strong>gələcəyə</strong> aiddir (4.1.5-dəki Present Simple-ın gələcək
          funksiyasından fərqli bir formada). Bu bölmə hər birini ayrıca izah
          edir və 4.1-lə olan kəskin sərhədləri göstərir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.2.1</span>
              <h3 className="font-display text-xl text-foreground">
                Forma: am/is/are + fel-ing
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead>
                  <tr className="border-b border-line text-left">
                    <th className="p-2 font-display text-foreground">
                      Orfoqrafiya qaydası
                    </th>
                    <th className="p-2 font-display text-foreground">Nümunə</th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  <tr className="border-b border-line">
                    <td className="p-2">Əksəriyyət: +ing</td>
                    <td className="p-2 font-mono">work → working</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">Səssiz "e" düşür</td>
                    <td className="p-2 font-mono">write → writing</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="p-2">
                      CVC (bir vurğulu heca) — son samit ikiləşir
                    </td>
                    <td className="p-2 font-mono">
                      run → running, stop → stopping
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">-ie → -y</td>
                    <td className="p-2 font-mono">lie → lying, die → dying</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The team is testing the new release right now.",
                  az: "Komanda hazırda yeni buraxılışı test edir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.2.2</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 1 — Hazırda, danışıq anında baş verən hərəkət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ən əsas, "klassik" funksiya — məhz bu anda davam edən hərəkət.
              "Now, right now, at the moment" kimi zaman ifadələri ilə tanınır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I'm reviewing your document at the moment.",
                  az: "Hazırda sənin sənədini nəzərdən keçirirəm.",
                },
                {
                  en: "Please wait — she's speaking with a client right now.",
                  az: "Zəhmət olmasa gözlə — o, hazırda müştəri ilə danışır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.2.3</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 2 — Müvəqqəti vəziyyət (Present Simple-la təzad)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Müəyyən müddət üçün doğru olan, amma{" "}
              <strong>daimi olmayan</strong> vəziyyət. Bu, 4.1.4-dəki "daimi
              fakt" funksiyasının birbaşa əksidir — eyni fel, fərqli zamanla
              tamam fərqli məna verir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She lives in Baku. (daimi, Present Simple)",
                  az: "O, Bakıda yaşayır. (daimi)",
                },
                {
                  en: "She's living in a rented flat while her apartment is renovated. (müvəqqəti, Present Continuous)",
                  az: "Onun mənzili təmir olunan müddətdə kirayə mənzildə yaşayır.",
                },
                {
                  en: "I'm working from the branch office this week.",
                  az: "Bu həftə filial ofisindən işləyirəm. (yalnız bu həftə üçün)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.2.4</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 3 — Şəxsi gələcək razılaşma (4.1.5-dən fərqi)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Present Continuous gələcək plan bildirəndə, bu, 4.1.5-dəki
              rəsmi/dəyişməz cədvəldən fərqli olaraq,{" "}
              <strong>şəxsi, artıq razılaşdırılmış niyyəti</strong> bildirir.
              Fərq: <em>"The train leaves at 9"</em> (rəsmi cədvəl, Simple) ilə{" "}
              <em>"I'm meeting the client at 9"</em> (şəxsi razılaşma,
              Continuous) arasındakı incəliyə diqqət et.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We're launching the new feature next Monday.",
                  az: "Yeni funksiyanı növbəti bazar ertəsi buraxırıq.",
                },
                {
                  en: "I'm meeting the investors tomorrow afternoon.",
                  az: "Sabah günorta investorlarla görüşürəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.2.5</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 4 — Tədricən dəyişən, inkişaf edən vəziyyət
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Zamanla dəyişən, inkişaf edən tendensiyaları bildirmək üçün —
              adətən "get, become, rise, grow, improve" kimi dəyişikliyi özündə
              daşıyan fellərlə.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The market is shifting toward subscription-based pricing.",
                  az: "Bazar abunə əsaslı qiymətləndirməyə doğru sürüşür.",
                },
                {
                  en: "More companies are adopting remote work policies.",
                  az: "Daha çox şirkət uzaqdan iş siyasətlərini qəbul edir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.2.6</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya 5 — "Always/constantly/forever" ilə narazılıq tonu
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bu, ən qeyri-adi funksiyadır: Present Continuous{" "}
              <em>always/constantly/forever</em> ilə birləşəndə, təkrarlanan
              hərəkəti (adətən Present Simple-a aid mövzu) emosional{" "}
              <strong>narazılıq və ya təəccüb</strong> tonu ilə təsvir edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He's always interrupting me during meetings.",
                  az: "O, iclaslar zamanı həmişə sözümü kəsir. (narazılıq)",
                },
                {
                  en: "She's constantly changing her mind at the last minute.",
                  az: "O, son anda daim fikrini dəyişir. (narazılıq)",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Müqayisə et: "He always interrupts me" (Present Simple — sadəcə
              fakt, neytral) ilə "He's always interrupting me" (Present
              Continuous — şikayət, emosional) arasındakı ton fərqinə.
            </p>
          </div>
        </section>

        {/* ---------- MÜQAYİSƏ QUTUSU ---------- */}
        <aside className="border-l-2 border-accent bg-accent/5 p-5 space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Azərbaycan dili ilə struktur fərqi
          </h4>
          <p className="text-foreground leading-relaxed">
            4.1-də qeyd etdiyimiz kimi, Azərbaycan dilində eyni indiki zaman
            forması (-ır/-ir) həm adəti, həm "indi baş verəni" bildirə bilir.
            İngilis dilində isə bu iki zaman arasındakı sərhəd — 4.1.4 (daimi)
            ilə 4.2.3 (müvəqqəti) arasında — çox aydın seçilməlidir, çünki eyni
            fel fərqli zamanla tamamilə fərqli məna verə bilər (bax: 4.2.3-dəki
            "lives" / "is living" müqayisəsi).
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
                wrong: "I am go to the office now.",
                right: "I am going to the office now.",
                az: "Mən indi ofisə gedirəm.",
              },
              {
                wrong: "She is runing the report.",
                right: "She is running the report.",
                az: "O, hesabatı işə salır. (CVC qaydası — 'n' ikiləşir)",
              },
              {
                wrong:
                  "He works on a big project this month. (müvəqqəti mənada)",
                right: "He is working on a big project this month.",
                az: "O, bu ay böyük bir layihə üzərində işləyir.",
              },
              {
                wrong:
                  "The train is leaving at 9 tomorrow. (rəsmi cədvəl — Simple lazımdır)",
                right: "The train leaves at 9 tomorrow.",
                az: "Qatar sabah saat 9-da yola düşür.",
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
              prompt: "We ___ (prepare) the presentation right now.",
              answer: "We are preparing the presentation right now.",
              translation: "Biz hazırda təqdimatı hazırlayırıq.",
            },
            {
              prompt:
                "I ___ (stay) at a hotel until my apartment is ready. (müvəqqəti)",
              answer: "I am staying at a hotel until my apartment is ready.",
              translation: "Mənzilim hazır olana qədər otelda qalıram.",
            },
            {
              prompt:
                "They ___ always ___ (complain) about the schedule. (narazılıq)",
              answer: "They are always complaining about the schedule.",
              translation: "Onlar həmişə cədvəldən şikayət edirlər.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Present Simple yoxsa Present Continuous?"
          items={[
            {
              prompt:
                "The company (operate/is operating) in three countries. (daimi fakt)",
              answer: "The company operates in three countries.",
              translation: "Şirkət üç ölkədə fəaliyyət göstərir.",
            },
            {
              prompt:
                "I (meet/am meeting) the supplier tomorrow morning. (şəxsi razılaşma)",
              answer: "I am meeting the supplier tomorrow morning.",
              translation: "Sabah səhər təchizatçı ilə görüşürəm.",
            },
            {
              prompt:
                "The seminar (starts/is starting) at 10 sharp. (rəsmi cədvəl)",
              answer: "The seminar starts at 10 sharp.",
              translation: "Seminar dəqiq saat 10-da başlayır.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
