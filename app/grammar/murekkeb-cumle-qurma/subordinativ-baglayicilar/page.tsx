import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata(
  "murekkeb-cumle-qurma",
  "subordinativ-baglayicilar",
);

export default function Page() {
  return (
    <LessonShell
      chapterSlug="murekkeb-cumle-qurma"
      sectionSlug="subordinativ-baglayicilar"
    >
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          9.1-dəki koordinativ bağlayıcılardan fərqli olaraq, subordinativ
          bağlayıcılar iki cümləni **bərabər** deyil, **asılı** münasibətdə
          birləşdirir — biri müstəqil (əsas fikir), digəri **asılı** (tək başına
          dayana bilməz) olur.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.2.1</span>
              <h3 className="font-display text-xl text-foreground">
                Konsept: asılı budaq cümlə tək başına dayana bilməz
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Subordinativ bağlayıcı ilə başlayan hissə, ayrı cümlə kimi
              yazılsa, natamam görünür.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Because the client changed the requirements, we had to redesign the interface.",
                  az: "Müştəri tələbləri dəyişdiyi üçün interfeysi yenidən dizayn etməli olduq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.2.2</span>
              <h3 className="font-display text-xl text-foreground">
                Kateqoriyalar üzrə əsas bağlayıcılar
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Zaman
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "after",
                    "before",
                    "when",
                    "while",
                    "as",
                    "since",
                    "until",
                    "once",
                    "as soon as",
                  ].map((v) => (
                    <span
                      key={v}
                      className="font-mono text-sm border border-line px-2 py-1"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Səbəb
                </p>
                <div className="flex flex-wrap gap-2">
                  {["because", "since", "as", "so that"].map((v) => (
                    <span
                      key={v}
                      className="font-mono text-sm border border-line px-2 py-1"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Şərt
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "if",
                    "unless",
                    "provided that",
                    "in case",
                    "as long as",
                  ].map((v) => (
                    <span
                      key={v}
                      className="font-mono text-sm border border-line px-2 py-1"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-display text-base text-foreground mb-2">
                  Ziddiyyət
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "although",
                    "though",
                    "even though",
                    "whereas",
                    "while",
                  ].map((v) => (
                    <span
                      key={v}
                      className="font-mono text-sm border border-line px-2 py-1"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <ExampleList
              examples={[
                {
                  en: "Although the budget was tight, the team delivered on time.",
                  az: "Büdcə məhdud olsa da, komanda vaxtında təhvil verdi.",
                },
                {
                  en: "We'll proceed unless the client raises further concerns.",
                  az: "Müştəri əlavə narahatlıq bildirməzsə, davam edəcəyik.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.2.3</span>
              <h3 className="font-display text-xl text-foreground">
                Vergül qaydası: mövqeyə bağlıdır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Budaq cümlə **əvvəldə** gələndə — vergül **məcburidir**. Budaq
              cümlə **sonda** gələndə — adətən vergül **lazım deyil**.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Because the server crashed, we lost an hour of work. (əvvəldə, vergüllə)",
                  az: "Server çökdüyü üçün bir saatlıq işimizi itirdik.",
                },
                {
                  en: "We lost an hour of work because the server crashed. (sonda, vergülsüz)",
                  az: "Server çökdüyü üçün bir saatlıq işimizi itirdik.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.2.4</span>
              <h3 className="font-display text-xl text-foreground">
                İstisna: ziddiyyət bağlayıcıları sonda da vergül saxlaya bilər
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Whereas</em> kimi güclü ziddiyyət bildirən bağlayıcılar,
              cümlənin sonunda olsa belə, aydınlıq üçün vergül tələb edə bilər.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Our team prefers async updates, whereas theirs relies on daily calls.",
                  az: "Bizim komanda asinxron yeniləmələri üstün tutur, onların komandası isə gündəlik zənglərə güvənir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.2.5</span>
              <h3 className="font-display text-xl text-foreground">
                "Because" vs "because of": budaq cümlə vs isim ifadəsi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Because</em> tam budaq cümlə (subyekt+fel) qəbul edir. Yalnız
              isim ifadəsi gəlirsə, <em>because of</em> (sözönü) işlədilir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "We delayed the launch because the tests failed. (budaq cümlə)",
                  az: "Testlər uğursuz olduğu üçün buraxılışı təxirə saldıq.",
                },
                {
                  en: "We delayed the launch because of the failed tests. (isim ifadəsi)",
                  az: "Uğursuz testlərə görə buraxılışı təxirə saldıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.2.6</span>
              <h3 className="font-display text-xl text-foreground">
                "Because/since/as" — səbəbdə üçlük, incə fərq
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Üçü də səbəb bildirir. <em>Because</em> ən neytral, ən çox
              işlənən. <em>Since/as</em> adətən artıq **bilinən/açıq** bir
              səbəbi xatırladarkən işlədilir, bir az daha rəsmi.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Since the office is closed today, we're working remotely.",
                  az: "Ofis bu gün bağlı olduğu üçün uzaqdan işləyirik.",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Diqqət: <em>since</em> həm də zaman bağlayıcısıdır (4.4.5) —
              kontekst hansı mənada işləndiyini göstərir.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">9.2.7</span>
              <h3 className="font-display text-xl text-foreground">
                Comma splice-dan fərqi: subordinativ bağlayıcı özü bağlayıcıdır
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              9.1.8-dəki "comma splice" problemi burada yaranmır — çünki
              subordinativ bağlayıcı budaq cümləni artıq **asılı** etdiyi üçün,
              vergül təkbaşına iki müstəqil fikri "yapışdırmır".
            </p>
          </div>
        </section>

        {/* ---------- MÜQAYİSƏ QUTUSU ---------- */}
        <aside className="border-l-2 border-accent bg-accent/5 p-5 space-y-3">
          <h4 className="font-display text-lg text-foreground">
            Azərbaycan dili ilə struktur fərqi
          </h4>
          <p className="text-foreground leading-relaxed">
            Azərbaycan dilində səbəb/şərt budaq cümlələri çox vaxt fel
            formasının özündə (feli bağlama: "-dığı üçün", "-sa") ifadə olunur,
            ayrıca bağlayıcı söz tələb olunmadan. İngilis dilində isə bu
            münasibətlər həmişə **ayrı bir bağlayıcı sözlə** (because, although,
            if) ifadə olunur — bu, Azərbaycan dilli öyrənən üçün "gizli"
            qrammatik mənanı **açıq sözə** çevirmək tələb edən bir vərdişdir.
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
                wrong: "Although the deadline was tight we finished on time.",
                right: "Although the deadline was tight, we finished on time.",
                az: "Son tarix sıx olsa da, vaxtında bitirdik.",
              },
              {
                wrong:
                  "We postponed the meeting because of the client requested it.",
                right:
                  "We postponed the meeting because the client requested it.",
                az: "Müştəri xahiş etdiyi üçün iclası təxirə saldıq.",
              },
              {
                wrong: "Unless you will confirm, we won't proceed.",
                right: "Unless you confirm, we won't proceed.",
                az: "Sən təsdiq etməsən, biz davam etməyəcəyik.",
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
          title="Məşq 1 — Vergül lazımdırmı?"
          items={[
            {
              prompt:
                "Before you submit the form ___ double-check the details.",
              answer: "Before you submit the form, double-check the details.",
              translation:
                "Formu təqdim etməzdən əvvəl detalları yenidən yoxla.",
            },
            {
              prompt:
                "We'll launch the product once testing is complete ___ (sonda, vergülsüz)",
              answer: "We'll launch the product once testing is complete.",
              translation: "Test bitəndən sonra məhsulu buraxacağıq.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "Since the update failed we rolled it back.",
              answer: "Since the update failed, we rolled it back.",
              translation: "Yenilənmə uğursuz olduğu üçün onu geri qaytardıq.",
            },
            {
              prompt: "We stayed late because of we had to finish the report.",
              answer: "We stayed late because we had to finish the report.",
              translation: "Hesabatı bitirməli olduğumuz üçün gec qaldıq.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
