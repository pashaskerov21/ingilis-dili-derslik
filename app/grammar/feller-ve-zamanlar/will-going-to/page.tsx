import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "feller-ve-zamanlar",
  "will-going-to",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="feller-ve-zamanlar" sectionSlug="will-going-to">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          İngilis dilində gələcək üçün tək bir "gələcək zaman" forması yoxdur —
          bir neçə struktur var, hər biri fərqli{" "}
          <strong>niyyət, əminlik dərəcəsi və qərar anı</strong> bildirir. Bu
          bölmə ən çox işlənən ikisini — <em>will</em> və <em>going to</em> —
          müqayisə edir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.10.1</span>
              <h3 className="font-display text-xl text-foreground">Forma</h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "I will review the pull request tonight.",
                  az: "Bu gecə pull request-i nəzərdən keçirəcəm.",
                },
                {
                  en: "We are going to launch the beta next month.",
                  az: "Növbəti ay beta versiyasını buraxacağıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.10.2</span>
              <h3 className="font-display text-xl text-foreground">
                Qərar anı: spontan (will) vs əvvəlcədən planlaşdırılmış (going
                to)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ən əsas fərq: qərar <strong>nə vaxt verilib</strong>. Danışıq
              anında, ani qərar → <em>will</em>. Danışıqdan{" "}
              <strong>əvvəl</strong> artıq qərarlaşdırılmış niyyət →{" "}
              <em>going to</em>.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The server is down. — Don't worry, I'll restart it. (indi, ani qərar)",
                  az: "Server işləmir. — Narahat olma, mən onu yenidən başladacam.",
                },
                {
                  en: "I'm going to migrate the database this weekend. (əvvəlcədən planlaşdırılıb)",
                  az: "Bu həftəsonu verilənlər bazasını köçürəcəm. (artıq planlaşdırılıb)",
                },
              ]}
            />
            <p className="text-sm text-accent">
              ⚠ "I will migrate the database this weekend" desən, bu, sanki elə
              indi qərar verdiyin kimi eşidilər — əgər bu, əvvəlcədən
              planlaşdırılıbsa, "going to" daha dəqiqdir.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.10.3</span>
              <h3 className="font-display text-xl text-foreground">
                Proqnoz: fikir (will) vs indiki dəlil (going to)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Hər ikisi proqnoz üçün işlənə bilər, amma fərqli əsasla:{" "}
              <em>will</em> — şəxsi fikir/inam, əldə görünən dəlil yoxdur.{" "}
              <em>Going to</em> — hazırkı, gözlə görünən/hiss edilən dəlilə
              əsaslanır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I think this feature will be popular with users. (fikir, dəlilsiz)",
                  az: "Düşünürəm ki, bu funksiya istifadəçilər arasında populyar olacaq.",
                },
                {
                  en: "Look at the CPU usage — the server is going to crash. (dəlil: görürəm)",
                  az: "CPU istifadəsinə bax — server çökəcək. (indi göründüyü kimi)",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.10.4</span>
              <h3 className="font-display text-xl text-foreground">
                "Will"-ə xas sosial funksiyalar: vəd, təklif, hədə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Will</em>-in <em>going to</em>-da olmayan xüsusi rolları var —
              vəd vermək, kömək təklif etmək, hədə vurmaq. Bunlar "gələcək"
              mənasından çox, <strong>indiki niyyət/istəyi</strong> bildirir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I promise I'll get back to you by end of day. (vəd)",
                  az: "Söz verirəm, gün bitməzdən əvvəl sənə cavab verəcəm.",
                },
                {
                  en: "I'll help you debug this if you want. (təklif)",
                  az: "İstəsən, bunu debug etməkdə sənə kömək edərəm.",
                },
                {
                  en: "If this happens again, I'll escalate it to management. (hədə/xəbərdarlıq)",
                  az: "Bu yenə baş versə, məsələni rəhbərliyə çatdıracam.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.10.5</span>
              <h3 className="font-display text-xl text-foreground">
                Qeyd: "shall" — rəsmi, məhdud işlənmə
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Shall</em> müasir ingilis dilində nadir hallarda, əsasən
              Britaniya variantında, <em>I/we</em> ilə təklif vermək üçün
              işlənir. Proqnoz və ya plan üçün istifadə olunmur — bunun üçün
              will/going to kifayətdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Shall I book the meeting room for tomorrow?",
                  az: "Sabah üçün iclas otağını mən sifariş edim?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">4.10.6</span>
              <h3 className="font-display text-xl text-foreground">
                İncəlik: sərt qayda deyil, əminlik spektrindir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              "Planlaşdırılmışdırsa going to, spontandırsa will" qaydası faydalı
              başlanğıc nöqtəsidir, amma tam sərt deyil. Real danışıqda seçim
              daha çox <strong>"bu, nə qədər real və yaxın hiss olunur"</strong>{" "}
              sualına əsaslanır — <em>going to</em> hadisəni demək olar "artıq
              gördüyün" kimi təqdim edir, <em>will</em> isə daha uzaq, mücərrəd
              qalır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "I'll see you tomorrow. (gündəlik danışıqda plan olsa belə will işlənə bilər)",
                  az: "Sabah görüşərik.",
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
            Azərbaycan dilində gələcək zaman şəkilçisi (-acaq/-əcək) həm spontan
            qərarı, həm əvvəlcədən planı, həm də proqnozu eyni formada ifadə
            edir — "gedəcəm" istənilən kontekstdə işlənə bilər. İngilis dilində
            isə bu üç fərqli məna (qərar anı, əvvəlcədən niyyət, dəlilə
            əsaslanan proqnoz) leksik olaraq iki ayrı struktura (will/going to)
            bölünür. Bu, Azərbaycan dilli öyrənən üçün yeni bir qərar
            mexanizmidir.
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
                  "I will visit the dentist tomorrow. (əvvəlcədən planlaşdırılıb)",
                right: "I'm going to visit the dentist tomorrow.",
                az: "Sabah dişhəkiminə gedəcəm. (artıq təyin olunub)",
              },
              {
                wrong:
                  "Look at those clouds — I think it will rain. (görünən dəlil var)",
                right: "Look at those clouds — it's going to rain.",
                az: "O buludlara bax — yağış yağacaq.",
              },
              {
                wrong: "I'm going to help you with that! (indi, ani təklif)",
                right: "I'll help you with that!",
                az: "Bununla sənə kömək edərəm!",
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
          title="Məşq 1 — will yoxsa going to?"
          items={[
            {
              prompt: "The phone is ringing. — I ___ (answer) it. (ani qərar)",
              answer: "The phone is ringing. — I'll answer it.",
              translation: "Telefon zəng edir. — Mən cavab verərəm.",
            },
            {
              prompt:
                "We ___ (open) a new office in Ganja next year. (artıq planlaşdırılıb)",
              answer: "We are going to open a new office in Ganja next year.",
              translation: "Növbəti il Gəncədə yeni ofis açacağıq.",
            },
            {
              prompt: "Careful, that shelf ___ (fall)! (indi görünən dəlil)",
              answer: "Careful, that shelf is going to fall!",
              translation: "Ehtiyatlı ol, o rəf yıxılacaq!",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "I promise I am going to call you tonight. (vəd)",
              answer: "I promise I will call you tonight.",
              translation: "Söz verirəm, bu axşam sənə zəng edəcəm.",
            },
            {
              prompt:
                "We will move to the new office next Monday. (artıq razılaşdırılıb, imzalanıb)",
              answer: "We are going to move to the new office next Monday.",
              translation: "Növbəti bazar ertəsi yeni ofisə köçəcəyik.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
