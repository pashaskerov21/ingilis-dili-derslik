import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "modal-feller",
  "istek-teklif-vede-will-would",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="modal-feller"
      sectionSlug="istek-teklif-vede-will-would"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          4.10-da will/going to arasındakı fərqi öyrənmişdik. Bu bölmə isə{" "}
          <em>will</em>-in daha sosial, şəxsiyyətlərarası funksiyalarını
          (istəklilik, təklif, vəd) və onun keçmiş (would) və rəsmi (shall)
          qarşılıqlarını dərinləşdirir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.9.1</span>
              <h3 className="font-display text-xl text-foreground">
                Will — istəklilik, təklif, vəd (4.10.4-ün dərinləşməsi)
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "I'll carry that for you — it looks heavy. (təklif)",
                  az: "Bunu sənin üçün daşıyaram — ağır görünür.",
                },
                {
                  en: "I'll always support this team, no matter what. (vəd)",
                  az: "Bu komandanı nə olursa olsun həmişə dəstəkləyəcəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.9.2</span>
              <h3 className="font-display text-xl text-foreground">
                Vurğulanan "will" — israr
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Tələffüzdə vurğulanan <em>will</em>, kiminsə{" "}
              <strong>təkidlə davam etdiyi</strong> bir davranışı bildirə bilir
              — bu, gələcək deyil, xarakter xüsusiyyəti haqqında.
            </p>
            <ExampleList
              examples={[
                {
                  en: "He WILL interrupt people, no matter how many times we ask him not to.",
                  az: "O, nə qədər xahiş etsək də, insanların sözünü kəsməkdə davam edir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.9.3</span>
              <h3 className="font-display text-xl text-foreground">
                Would — istəkliliyin keçmişi (adətən inkar formada)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Will</em>-in istəklilik funksiyası keçmişə köçürüləndə{" "}
              <em>would</em> olur — bu, ən çox <strong>inkar</strong> formada
              (kimsə nəyisə etmək istəmədi) rast gəlinir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I asked him to help, but he wouldn't listen.",
                  az: "Ondan kömək istədim, amma o, qulaq asmaq istəmədi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.9.4</span>
              <h3 className="font-display text-xl text-foreground">
                Would — xahişlərdə "will"-dən daha nəzakətli
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              5.2-dəki nəzakət spektrinə bənzər şəkildə, <em>would</em> xahiş
              edərkən <em>will</em>-dən daha rəsmi/nəzakətli alternativdir.{" "}
              <em>Would you mind + -ing</em> xüsusilə nəzakətli sabit bir
              strukturdur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Would you send me the updated file when you get a chance?",
                  az: "Fürsət tapanda mənə yenilənmiş faylı göndərərsənmi?",
                },
                {
                  en: "Would you mind closing the window? It's a bit cold.",
                  az: "Pəncərəni bağlamağınıza etirazınız olarmı? Bir az soyuqdur.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.9.5</span>
              <h3 className="font-display text-xl text-foreground">
                Would — dolayı, yumşaldılmış fikir bildirmə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Advise, imagine, recommend, say, suggest, think</em> kimi
              fellərlə birgə işlədildikdə, <em>would</em> fikri daha{" "}
              <strong>yumşaq, birbaşa olmayan</strong> şəkildə təqdim edir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I would suggest reviewing the contract before signing.",
                  az: "İmzalamazdan əvvəl müqaviləni nəzərdən keçirməyi məsləhət görərdim.",
                },
                {
                  en: "I would imagine the client will want changes.",
                  az: "Güman edirəm ki, müştəri dəyişiklik istəyəcək.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.9.6</span>
              <h3 className="font-display text-xl text-foreground">
                Shall — I/we ilə təklif və məsləhət soruşma
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Shall I/we</em> yalnız <strong>birinci şəxslə</strong> (I, we)
              işlənir, təklif vermək və ya məsləhət soruşmaq üçün — bu,
              Britaniya ingiliscəsində daha çox işlənən, formal bir vasitədir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Shall I book the conference room for tomorrow?",
                  az: "Sabah üçün konfrans otağını mən sifariş edim?",
                },
                {
                  en: "Shall we start the presentation now?",
                  az: "Təqdimatı indi başlayaq?",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "Shall" you/he/she/they ilə bu mənada işlənmir — yalnız I/we ilə
              məhdudlaşır.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">5.9.7</span>
              <h3 className="font-display text-xl text-foreground">
                Rəsmi/hüquqi sənədlərdə "shall" — öhdəlik
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Müqavilə, qanun və rəsmi sənədlərdə <em>shall</em> — subyektdən
              asılı olmayaraq — güclü öhdəlik bildirmək üçün işlənir (bax:
              5.3-dəki must-a bənzər funksiya, amma xüsusi hüquqi registr).
            </p>
            <ExampleList
              examples={[
                {
                  en: "The tenant shall notify the landlord within 30 days.",
                  az: "Kirayənişin ev sahibinə 30 gün ərzində bildiriş verməlidir.",
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
            Azərbaycan dilində təklif, vəd və xahiş nəzakəti fel formasında
            deyil, əlavə sözlərlə (istəyirsənmi, ola bilərmi) ifadə olunur.
            İngilis dilində isə <em>will/would/shall</em> arasındakı seçim
            birbaşa nəzakət və rəsmilik dərəcəsini kodlaşdırır — bu, üçüncü
            dəfədir ki (5.2, 5.5-dən sonra) bu naxışı görürük: ingilis dilində
            nəzakət çox vaxt <strong>hansı köməkçi felin seçildiyi</strong> ilə
            ifadə olunur.
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
                wrong: "Shall you help me with this? (shall you ilə işlənmir)",
                right: "Will you help me with this?",
                az: "Buna kömək edərsənmi?",
              },
              {
                wrong: "I asked her, but she didn't wanted to answer.",
                right: "I asked her, but she wouldn't answer.",
                az: "Ondan soruşdum, amma o, cavab vermək istəmədi.",
              },
              {
                wrong: "Would you mind to close the door?",
                right: "Would you mind closing the door?",
                az: "Qapını bağlamağınıza etirazınız olarmı?",
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
          title="Məşq 1 — Uyğun modal feli seç"
          items={[
            {
              prompt: "___ I open a window? It's warm in here. (təklif, I ilə)",
              answer: "Shall I open a window? It's warm in here.",
              translation: "Pəncərəni mən açım? Burda isti oldu.",
            },
            {
              prompt: "___ you mind waiting a few minutes? (nəzakətli xahiş)",
              answer: "Would you mind waiting a few minutes?",
              translation: "Bir neçə dəqiqə gözləməyinizə etirazınız olarmı?",
            },
            {
              prompt:
                "I tried to explain, but he ___ listen. (keçmiş istəməmə)",
              answer: "I tried to explain, but he wouldn't listen.",
              translation:
                "İzah etməyə çalışdım, amma o, qulaq asmaq istəmədi.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "Shall he join us for lunch? (shall he ilə işlənmir)",
              answer: "Will he join us for lunch?",
              translation: "O, bizimlə nahara qoşulacaqmı?",
            },
            {
              prompt: "Would you mind to help me carry this?",
              answer: "Would you mind helping me carry this?",
              translation: "Bunu daşımağa kömək etməyinizə etirazınız olarmı?",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
