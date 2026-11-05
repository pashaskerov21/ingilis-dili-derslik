import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "mexanika",
  "boyuk-herfler",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="mexanika" sectionSlug="boyuk-herfler">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Böyük hərf qaydaları səthi baxışda sadə görünür ("cümlə əvvəli, xüsusi
          isim"), amma real yazıda bir neçə **incə istisna** var — xüsusilə
          titullar, ailə terminləri və dırnaq işarəsi ilə birgə işlənmə.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.1.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas qayda: cümlənin ilk sözü, "I" əvəzliyi
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The meeting starts at nine. I will send the agenda beforehand.",
                  az: "İclas saat doqquzda başlayır. Mən əvvəlcədən gündəliyi göndərəcəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.1.2</span>
              <h3 className="font-display text-xl text-foreground">
                Xüsusi isimlər: HƏMİŞƏ böyük hərflə, mövqedən asılı olmadan
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Şəxs adları, yer adları, təşkilat adları, millət/dil adları və
              bunlardan törəyən sifətlər — cümlədə harada olursa olsun.
            </p>
            <ExampleList
              examples={[
                {
                  en: "She works for Microsoft in Baku and speaks fluent Turkish.",
                  az: "O, Microsoft-da Bakıda işləyir və səlis türkcə danışır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.1.3</span>
              <h3 className="font-display text-xl text-foreground">
                Titullar: adla birgə böyük, tək/ümumi işlənəndə kiçik
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Vəzifə/titul adın **qabağında** gələndə böyük hərflə, adın
              **sonrasında** və ya ümumi isimin özü kimi işlədikdə kiçik hərflə
              yazılır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We spoke with President Aliyev about the initiative. (adla birgə)",
                  az: "Biz Prezident Əliyevlə bu təşəbbüs barədə danışdıq.",
                },
                {
                  en: "The president approved the initiative. (ümumi isim kimi)",
                  az: "Prezident təşəbbüsü təsdiqlədi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.1.4</span>
              <h3 className="font-display text-xl text-foreground">
                Ailə terminləri: müraciət kimi böyük, adi isim kimi kiçik
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "Can you help me, Mom? (müraciət, ad kimi)",
                  az: "Mənə kömək edə bilərsən, Ana?",
                },
                {
                  en: "My mom helped me with the report. (adi isim)",
                  az: "Anam hesabatda mənə kömək etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.1.5</span>
              <h3 className="font-display text-xl text-foreground">
                Günlər, aylar, bayramlar — böyük; mövsümlər — kiçik
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The report is due on Monday, before the end of March.",
                  az: "Hesabatın təhvil müddəti bazar ertəsi, mart bitməzdən əvvəldir.",
                },
                {
                  en: "We usually slow down a bit in the summer. (mövsüm — kiçik)",
                  az: "Yayda adətən bir az yavaşıyırıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.1.6</span>
              <h3 className="font-display text-xl text-foreground">
                "The" xüsusi isimdən əvvəl: adətən kiçik hərf
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İstisna: "the" rəsmi adın **ayrılmaz** hissəsidirsə, böyük yazıla
              bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We visited the Grand Canyon last summer.",
                  az: "Keçən yay Grand Canyon-a getdik.",
                },
                {
                  en: "The company is based in The Hague. (istisna — rəsmi adın hissəsi)",
                  az: "Şirkət The Hague-da yerləşir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.1.7</span>
              <h3 className="font-display text-xl text-foreground">
                İki nöqtədən sonra: tam cümlədirsə böyük, siyahı/frazadırsa
                kiçik
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "One thing is clear: The client wants a faster turnaround. (tam cümlə → böyük)",
                  az: "Bir şey aydındır: Müştəri daha sürətli nəticə istəyir.",
                },
                {
                  en: "We need three things: budget, time, and approval. (siyahı → kiçik)",
                  az: "Üç şeyə ehtiyacımız var: büdcə, vaxt və təsdiq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.1.8</span>
              <h3 className="font-display text-xl text-foreground">
                Dırnaq daxilində sitat: tam cümlədirsə böyük
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: 'She said, "The deadline has been extended." (tam sitat → böyük)',
                  az: 'O dedi: "Son tarix uzadılıb."',
                },
                {
                  en: 'She mentioned that the deadline had been "extended by a week." (fraqment → kiçik)',
                  az: 'O, son tarixin "bir həftə uzadıldığını" qeyd etdi.',
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.1.9</span>
              <h3 className="font-display text-xl text-foreground">
                Fənn/sahə adları: ümumi halda kiçik, dil adı olduqda böyük
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Akademik fənn adları (economics, biology) adətən kiçik hərflə
              yazılır — istisna, dil adı ilə üst-üstə düşən fənlər (English,
              French).
            </p>
            <ExampleList
              examples={[
                {
                  en: "She studies economics and computer science.",
                  az: "O, iqtisadiyyat və komputer elmləri oxuyur.",
                },
                {
                  en: "He also studies English literature. (dil adı — böyük)",
                  az: "O, həmçinin ingilis ədəbiyyatı oxuyur.",
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
            Azərbaycan dilində böyük hərf qaydaları ingilis dili ilə əsasən
            üst-üstə düşür (cümlə əvvəli, xüsusi isim), amma bir fərq
            diqqətəlayiqdir: Azərbaycan dilində ay və gün adları **kiçik**
            hərflə yazılır ("bazar ertəsi", "yanvar"), ingilis dilində isə
            bunlar **həmişə böyük** hərflə (Monday, January) — bu, ən çox
            unudulan fərqlərdən biridir.
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
                wrong: "The meeting is on monday in january.",
                right: "The meeting is on Monday in January.",
                az: "İclas bazar ertəsi, yanvarda keçiriləcək.",
              },
              {
                wrong: "we spoke to president lincoln about it.",
                right: "We spoke to President Lincoln about it.",
                az: "Biz bu barədə Prezident Linkolnla danışdıq.",
              },
              {
                wrong:
                  "She studies English and Economics. (economics dil deyil)",
                right: "She studies English and economics.",
                az: "O, ingilis dili və iqtisadiyyat oxuyur.",
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
          title="Məşq 1 — Düzgün böyük hərflərlə yenidən yaz"
          items={[
            {
              prompt:
                "we will meet on friday to discuss the microsoft contract.",
              answer:
                "We will meet on Friday to discuss the Microsoft contract.",
              translation:
                "Cümə günü Microsoft müqaviləsini müzakirə etmək üçün görüşəcəyik.",
            },
            {
              prompt: 'my mom said, "the package arrived this morning."',
              answer: 'My mom said, "The package arrived this morning."',
              translation: 'Anam dedi: "Bağlama bu səhər çatdı."',
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "The Ceo announced the news in December.",
              answer: "The CEO announced the news in December.",
              translation: "İcraçı Direktor xəbəri dekabrda elan etdi.",
            },
            {
              prompt:
                'She said that the results were "Better than expected." (fraqment, böyük olmamalıdır)',
              answer: 'She said that the results were "better than expected."',
              translation:
                'O, nəticələrin "gözlənildiyindən yaxşı" olduğunu söylədi.',
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
