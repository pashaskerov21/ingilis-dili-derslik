import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "sual-formalari",
  "dolayi-suallar",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="sual-formalari" sectionSlug="dolayi-suallar">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Dolayı sual — birbaşa sualı daha nəzakətli, formal bir "qabıq"
          daxilinə yerləşdirmək. Bu bölmənin əsas, ən vacib qaydası:{" "}
          <strong>daxildəki sualın söz sırası dəyişmir</strong> — 8.1-8.3-də
          öyrəndiyin bütün inversiya qaydaları burada{" "}
          <strong>ləğv olunur</strong>.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.4.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas qayda: söz sırası təsdiq cümləsi kimi qalır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Nə qədər "sual" hiss olunsa da, daxili hissə{" "}
              <strong>subyekt + fel</strong> sırasında qalır, köməkçi fel
              subyektdən əvvələ keçmir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Could you tell me where the nearest ATM is? (✗ where is the nearest ATM)",
                  az: "Ən yaxın bankomatın harda olduğunu deyə bilərsinizmi?",
                },
                {
                  en: "Do you know what time the store opens? (✗ what time does the store open)",
                  az: "Mağazanın saat neçədə açıldığını bilirsənmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.4.2</span>
              <h3 className="font-display text-xl text-foreground">
                Bəli/xeyr sualları: "if/whether" əlavə olunur
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əgər əsl sual bəli/xeyr sualıdırsa (wh-sözü yoxdursa), dolayı
              formada <em>if</em> və ya <em>whether</em> əlavə edilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I wonder if she has received the invoice yet.",
                  az: "Görəsən, o, fakturanı artıq alıb ya yox.",
                },
                {
                  en: "Do you know whether the meeting has been rescheduled?",
                  az: "İclasın yenidən planlaşdırılıb-planlaşdırılmadığını bilirsənmi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.4.3</span>
              <h3 className="font-display text-xl text-foreground">
                Present/Past Simple-da: do-support tamamilə itir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              1.2.4-dəki do-support köməkçi feli dolayı sualda tamamilə yoxa
              çıxır — əsas fel öz təsdiq formasına (şəxs/zaman şəkilçisi ilə)
              qayıdır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "What does he want? → Do you know what he wants? (does itdi, indi 'wants')",
                  az: "O, nə istəyir? → Onun nə istədiyini bilirsənmi?",
                },
                {
                  en: "Where did she go? → I have no idea where she went.",
                  az: "O, hara getdi? → Onun hara getdiyi barədə heç bir fikrim yoxdur.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.4.4</span>
              <h3 className="font-display text-xl text-foreground">
                Digər zamanlarda: köməkçi qalır, amma sıra dəyişir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Continuous/Perfect zamanlarda köməkçi fel felin öz strukturunun
              hissəsi olduğu üçün yoxa çıxmır, amma öz yerini (subyektdən sonra)
              tutur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "What is he doing? → Do you know what he is doing?",
                  az: "O, nə edir? → Onun nə etdiyini bilirsənmi?",
                },
                {
                  en: "Has she left? → I'm not sure whether she has left.",
                  az: "O, getdimi? → Onun gedib-getmədiyindən əmin deyiləm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.4.5</span>
              <h3 className="font-display text-xl text-foreground">
                Tez-tez işlənən giriş ifadələri
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Could you tell me...",
                "Do you know...",
                "I wonder...",
                "I'm not sure...",
                "I'd like to know...",
                "Do you have any idea...",
              ].map((v) => (
                <span
                  key={v}
                  className="font-mono text-sm border border-line px-2 py-1"
                >
                  {v}
                </span>
              ))}
            </div>
            <ExampleList
              examples={[
                {
                  en: "I'd like to know why the shipment was delayed.",
                  az: "Göndərmənin niyə gecikdiyini bilmək istərdim.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.4.6</span>
              <h3 className="font-display text-xl text-foreground">
                Durğu işarəsi: cümlənin bütövünə bağlıdır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əgər giriş hissəsi özü sual formasındadırsa (Could you...?), sual
              işarəsi qoyulur. Əgər bütöv cümlə əslində bir bəyanatdırsa (I
              don't know...), nöqtə qoyulur.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Could you tell me what time it is? (giriş özü sualdır → ?)",
                  az: "Saat neçə olduğunu deyə bilərsinizmi?",
                },
                {
                  en: "I don't know what time it is. (bütöv cümlə bəyanatdır → .)",
                  az: "Saat neçə olduğunu bilmirəm.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">8.4.7</span>
              <h3 className="font-display text-xl text-foreground">
                Funksiya: nəzakət və isim funksiyalı budaq cümlə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Dolayı sual həm nəzakət vasitəsi (yad adamlarla, rəsmi
              kontekstdə), həm də qrammatik cəhətdən{" "}
              <strong>isim funksiyalı budaq cümlə</strong> kimi çıxış edə bilər
              — cümlənin subyekti də ola bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Where he keeps the backup files is still unclear. (subyekt kimi)",
                  az: "Ehtiyat faylları harada saxladığı hələ də aydın deyil.",
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
            Azərbaycan dilində dolayı sual üçün söz sırası dəyişməsi tələb
            olunmur, çünki birbaşa sualda da söz sırası dəyişmirdi (Azərbaycan
            dilində sual şəkilçi/intonasiya ilə qurulur, 1.2-də gördüyümüz
            kimi). İngilis dilində isə "geri qaytarma" (birbaşa sualın
            inversiyasını ləğv etmək) prosesi Azərbaycan dilli öyrənən üçün
            əlavə bir addımdır — birbaşa sualı düzgün qurmağı öyrəndikdən sonra,
            indi onu "geri döndərməyi" öyrənmək lazımdır.
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
                wrong: "Can you tell me where is the station?",
                right: "Can you tell me where the station is?",
                az: "Stansiyanın harada olduğunu deyə bilərsinizmi?",
              },
              {
                wrong: "I don't know does he work here.",
                right: "I don't know if he works here.",
                az: "Onun burada işləyib-işləmədiyini bilmirəm.",
              },
              {
                wrong: "Do you know what time does the flight leave?",
                right: "Do you know what time the flight leaves?",
                az: "Uçuşun saat neçədə getdiyini bilirsənmi?",
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
          title="Məşq 1 — Dolayı suala çevir"
          items={[
            {
              prompt: "Where is the meeting room? → Could you tell me...",
              answer: "Could you tell me where the meeting room is?",
              translation: "İclas otağının harda olduğunu deyə bilərsinizmi?",
            },
            {
              prompt: "Does she speak French? → I'm not sure...",
              answer: "I'm not sure if she speaks French.",
              translation:
                "Onun fransızca danışıb-danışmadığından əmin deyiləm.",
            },
            {
              prompt: "What did he say? → I don't remember...",
              answer: "I don't remember what he said.",
              translation: "Onun nə dediyini xatırlamıram.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "Do you know where does he live?",
              answer: "Do you know where he lives?",
              translation: "Onun harda yaşadığını bilirsənmi?",
            },
            {
              prompt: "I wonder is she coming to the party.",
              answer: "I wonder if she is coming to the party.",
              translation: "Görəsən, o, məclisə gələcəkmi.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
