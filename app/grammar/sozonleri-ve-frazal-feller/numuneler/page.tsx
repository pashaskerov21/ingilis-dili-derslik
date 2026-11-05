import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sozonleri-ve-frazal-feller",
  "numuneler",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="sozonleri-ve-frazal-feller"
      sectionSlug="numuneler"
    >
      <div className="space-y-12">
        <p className="text-base leading-relaxed text-muted">
          Hər bölməyə aid, dərslərdə görülməyən yeni nümunələr — sadəcə oxu,
          qaydanı real cümlələrdə tanı.
        </p>

        {/* 7.1 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">7.1</span>
            <h3 className="font-display text-lg text-foreground">
              Yer sözönləri
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The invoice number is printed at the top of the page.",
                az: "Faktura nömrəsi səhifənin yuxarısında çap olunub.",
              },
              {
                en: "Our new branch is in the industrial district.",
                az: "Yeni filialımız sənaye rayonundadır.",
              },
              {
                en: "She left her badge on the reception counter.",
                az: "O, vəsiqəsini qeydiyyat masasında qoyub getdi.",
              },
            ]}
          />
        </section>

        {/* 7.2 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">7.2</span>
            <h3 className="font-display text-lg text-foreground">
              Zaman sözönləri
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The proposal must be finalized by Thursday.",
                az: "Təklif cümə axşamına qədər yekunlaşdırılmalıdır.",
              },
              {
                en: "She's been managing this account since last spring.",
                az: "O, keçən bahardan bəri bu hesabı idarə edir.",
              },
              {
                en: "We usually review budgets in the fourth quarter.",
                az: "Biz adətən büdcələri dördüncü rübdə nəzərdən keçiririk.",
              },
            ]}
          />
        </section>

        {/* 7.3 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">7.3</span>
            <h3 className="font-display text-lg text-foreground">
              İstiqamət/hərəkət sözönləri
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The courier walked into the wrong building by mistake.",
                az: "Kuryer səhvən yanlış binaya girdi.",
              },
              {
                en: "The delivery truck drove past our warehouse twice.",
                az: "Çatdırılma maşını anbarımızın yanından iki dəfə keçdi.",
              },
            ]}
          />
        </section>

        {/* 7.4 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">7.4</span>
            <h3 className="font-display text-lg text-foreground">
              Fellə sabit sözönləri
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The board insisted on reviewing the contract again.",
                az: "İdarə heyəti müqaviləni yenidən nəzərdən keçirməkdə israr etdi.",
              },
              {
                en: "This decision affects everyone who works in the department.",
                az: "Bu qərar şöbədə işləyən hər kəsə təsir edir.",
              },
            ]}
          />
        </section>

        {/* 7.5 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">7.5</span>
            <h3 className="font-display text-lg text-foreground">
              Frazal fellərin əsasları
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The negotiations broke down after two hours.",
                az: "İki saatdan sonra danışıqlar pozuldu.",
              },
              {
                en: "It seems the shipment was held up at customs.",
                az: "Deyəsən, göndərmə gömrükdə saxlanılıb.",
              },
            ]}
          />
        </section>

        {/* 7.6 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">7.6</span>
            <h3 className="font-display text-lg text-foreground">
              Ayrıla bilən frazal fellər
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "Can you print the contract out before the signing?",
                az: "İmzalamadan əvvəl müqaviləni çap edə bilərsənmi?",
              },
              {
                en: "I'll email you the file — check it over when you can.",
                az: "Faylı sənə email edəcəm — vaxtın olanda ona bax.",
              },
            ]}
          />
        </section>

        {/* 7.7 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">7.7</span>
            <h3 className="font-display text-lg text-foreground">
              Ayrılmayan frazal fellər
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "We're going through the applications one by one.",
                az: "Müraciətləri bir-bir nəzərdən keçiririk.",
              },
              {
                en: "I completely go along with your proposal.",
                az: "Sənin təklifinlə tamamilə razıyam.",
              },
            ]}
          />
        </section>

        {/* 7.8 */}
        <section className="space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent">7.8</span>
            <h3 className="font-display text-lg text-foreground">
              Keçişsiz/üç hissəli frazal fellər
            </h3>
          </div>
          <ExampleList
            examples={[
              {
                en: "The old server finally gave out last night.",
                az: "Köhnə server nəhayət dünən gecə sıradan çıxdı.",
              },
              {
                en: "We need to come up with a backup plan by tomorrow.",
                az: "Sabaha qədər ehtiyat plan hazırlamalıyıq.",
              },
            ]}
          />
        </section>
      </div>
    </LessonShell>
  );
}
