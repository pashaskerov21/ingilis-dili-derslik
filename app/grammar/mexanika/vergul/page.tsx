import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import { ExampleList } from "@/components/lesson-blocks/ExamplePair";

export const metadata: Metadata = buildSectionMetadata("mexanika", "vergul");

export default function Page() {
  return (
    <LessonShell chapterSlug="mexanika" sectionSlug="vergul">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          Vergül — ingilis dilinin ən çox işlənən, amma ən çox səhv edilən durğu
          işarəsidir. Fəsil 9-da (FANBOYS, subordinativ bağlayıcılar, təyin
          cümlələri) bir çox vergül qaydasını görmüşük — bu bölmə onları **tam
          bir sistemə** birləşdirir və bir neçə yeni, praktik qaydanı əlavə
          edir.
        </p>

        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.3.1</span>
              <h3 className="font-display text-xl text-foreground">
                Giriş söz/ifadə/budaq cümlədən sonra
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Əsas cümlədən əvvəl gələn hər hansı giriş elementi (subordinativ
              budaq cümlə, sözönü birləşməsi, zərf, keçid sözü) vergüllə
              ayrılır. Çox qısa (3-4 sözdən az) girişlərdə vergül bəzən buraxıla
              bilər, amma qoymaq həmişə təhlükəsizdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "After the migration, all services returned to normal.",
                  az: "Köçürmədən sonra bütün xidmətlər normal vəziyyətə qayıtdı.",
                },
                {
                  en: "Fortunately, the backup restored everything.",
                  az: "Xoşbəxtlikdən, ehtiyat nüsxə hər şeyi bərpa etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.3.2</span>
              <h3 className="font-display text-xl text-foreground">
                Keçid sözləri cümlənin ORTASINDA: İKİ vergül
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>However, therefore, moreover</em> kimi sözlər cümlənin
              əvvəlində tək vergüllə, ortasında isə **hər iki tərəfdən**
              vergüllə ayrılır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Most of the findings, however, are still valid.",
                  az: "Tapıntıların əksəriyyəti, lakin, hələ də etibarlıdır.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.3.3</span>
              <h3 className="font-display text-xl text-foreground">
                Ara söz/appozisiya: cütlü vergül
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Cümlənin mənasını dəyişmədən çıxarıla bilən əlavə məlumat
              (appozisiya, ara söz) hər iki tərəfdən vergüllə əhatələnir — bu,
              9.4-dəki non-defining budaq cümlələrlə eyni məntiqin daha geniş
              tətbiqidir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "Our CTO, a former Google engineer, will lead the initiative.",
                  az: "Baş Texnologiya Direktorumuz, keçmiş Google mühəndisi, bu təşəbbüsə rəhbərlik edəcək.",
                },
                {
                  en: "The client, of course, expects a quick response.",
                  az: "Müştəri, əlbəttə, tez cavab gözləyir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.3.4</span>
              <h3 className="font-display text-xl text-foreground">
                Sadalama: 9.1.6-nın xatırladılması
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The kit includes a cable, an adapter, and a manual.",
                  az: "Dəst kabel, adapter və təlimatdan ibarətdir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.3.5</span>
              <h3 className="font-display text-xl text-foreground">
                Tarixlər: gün, ay, il arasında
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Tam formatlı tarixdə (ay+gün+il), hər hissədən sonra vergül
              qoyulur — ilin özündən sonra da, cümlə davam edərsə.
            </p>
            <ExampleList
              examples={[
                {
                  en: "On March 12, 2024, the company launched its first international office.",
                  az: "12 mart 2024-cü ildə şirkət ilk beynəlxalq ofisini açdı.",
                },
              ]}
            />
            <p className="text-sm text-muted">
              Diqqət: yalnız ay+il olduqda (vergülsüz) — "In March 2024" —
              vergül lazım deyil.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.3.6</span>
              <h3 className="font-display text-xl text-foreground">
                Ünvanlar: hər hissədən sonra
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "Our office is located at 45 Nizami Street, Baku, Azerbaijan.",
                  az: "Ofisimiz Bakı, Azərbaycan, Nizami küçəsi 45-də yerləşir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.3.7</span>
              <h3 className="font-display text-xl text-foreground">
                Birbaşa müraciət: addan əvvəl/sonra vergül
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "Sarah, can you review this before the call?",
                  az: "Sara, zəngdən əvvəl buna baxa bilərsənmi?",
                },
                {
                  en: "Let me know if you have questions, John.",
                  az: "Sualın varsa, mənə bildir, Con.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.3.8</span>
              <h3 className="font-display text-xl text-foreground">
                Titullar/dərəcələr: addan sonra vergüllə, Jr./Sr. istisna
              </h3>
            </div>
            <ExampleList
              examples={[
                {
                  en: "The report was reviewed by Sarah Lin, PhD.",
                  az: "Hesabat Sara Lin, PhD tərəfindən nəzərdən keçirilib.",
                },
                {
                  en: "We spoke with John Smith Jr. yesterday. (vergülsüz)",
                  az: "Dünən Con Smit Kiçiklə danışdıq.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">11.3.9</span>
              <h3 className="font-display text-xl text-foreground">
                Xatırlatma: "comma splice" (9.1.8) heç vaxt qəbul edilmir
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              İki müstəqil cümləni yalnız vergüllə birləşdirmək — bağlayıcı
              olmadan — hər zaman səhvdir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The demo failed, we had to reschedule. (✗ comma splice)",
                  az: "Nümayiş uğursuz oldu, cədvəli dəyişdirməli olduq.",
                },
                {
                  en: "The demo failed, so we had to reschedule.",
                  az: "Nümayiş uğursuz oldu, ona görə cədvəli dəyişdirməli olduq.",
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
            Azərbaycan dilində vergül qaydaları əsasən intonasiya fasilələrinə
            uyğunlaşdırılır və bir çox halda seçim sərbəstdir. İngilis dilində
            isə vergül — xüsusilə 11.3.2/11.3.3-dəki cütlü vergül qaydaları —
            **struktur baxımından məcburi**dir, sırf intonasiya deyil. Bu,
            Azərbaycan dilli öyrənən üçün vergülü "hiss ilə" deyil, "qaydaya
            görə" qoymaq vərdişini tələb edir.
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
                  "Most of the data however is still accurate. (yalnız bir vergül)",
                right: "Most of the data, however, is still accurate.",
                az: "Məlumatların əksəriyyəti, lakin, hələ də dəqiqdir.",
              },
              {
                wrong: "On March 12 2024 we signed the deal.",
                right: "On March 12, 2024, we signed the deal.",
                az: "12 mart 2024-cü ildə sazişi imzaladıq.",
              },
              {
                wrong: "The report was late we had to explain why.",
                right: "The report was late, so we had to explain why.",
                az: "Hesabat gecikdi, ona görə niyə olduğunu izah etməli olduq.",
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
          title="Məşq 1 — Vergülləri düzgün yerə qoy"
          items={[
            {
              prompt:
                "Our lead developer a former Amazon engineer joined last month.",
              answer:
                "Our lead developer, a former Amazon engineer, joined last month.",
              translation:
                "Baş proqramçımız, keçmiş Amazon mühəndisi, keçən ay qoşuldu.",
            },
            {
              prompt:
                "The proposal was strong nonetheless the client declined.",
              answer:
                "The proposal was strong; nonetheless, the client declined.",
              translation:
                "Təklif güclü idi, buna baxmayaraq, müştəri imtina etdi.",
            },
          ]}
        />

        <ExerciseList
          title="Məşq 2 — Səhvi tap və düzəlt"
          items={[
            {
              prompt: "David can you send me the file?",
              answer: "David, can you send me the file?",
              translation: "David, faylı mənə göndərə bilərsən?",
            },
            {
              prompt: "We met on June 5 2023 in London.",
              answer: "We met on June 5, 2023, in London.",
              translation: "5 iyun 2023-cü ildə Londonda görüşdük.",
            },
          ]}
        />
      </div>
    </LessonShell>
  );
}
