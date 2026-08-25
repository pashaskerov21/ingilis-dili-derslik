import { ExampleList } from "@/components/lesson-blocks/ExamplePair";
import { ExerciseList } from "@/components/lesson-blocks/Exercise";
import LessonShell from "@/components/LessonShell";

export default function Page() {
  return (
    <LessonShell chapterSlug="cumlenin-esaslari" sectionSlug="soz-sirasi">
      <div className="space-y-12">
        <p className="text-lg leading-relaxed text-foreground">
          İngilis dilində söz sırası morfoloji sərbəstliyi əvəz edən struktur
          vasitəsidir: hallanma demək olar mövcud olmadığından, bir sözün
          cümlədəki funksiyası (subyekt, obyekt, təyinedici) yalnız onun
          yerləşdiyi mövqe ilə müəyyən olunur. Bu bölmədə təsvir olunan qaydalar
          ardıcıl xarakter daşıyır — hər bir sonrakı fəsildəki struktur
          (zamanlar, sual formaları, tabeli cümlələr) bu əsas üzərində qurulur.
        </p>

        {/* ---------- QAYDALAR ---------- */}
        <section className="space-y-10">
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.1.1</span>
              <h3 className="font-display text-xl text-foreground">
                Əsas model: Subject – Verb – Object
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Sadə təsdiq cümləsində sabit ardıcıllıq gözlənilir: əvvəl hərəkəti
              icra edən element (subject), ardınca hərəkətin özü (verb), sonra
              isə hərəkətin təsir etdiyi element (object).
            </p>
            <ExampleList
              examples={[
                {
                  en: "The committee reviewed the proposal.",
                  az: "Komitə təklifi nəzərdən keçirdi.",
                },
                {
                  en: "Researchers discovered an unexpected pattern in the data.",
                  az: "Tədqiqatçılar məlumatlarda gözlənilməz bir naxış aşkar etdilər.",
                },
                {
                  en: "The system processes thousands of requests per second.",
                  az: "Sistem saniyədə minlərlə sorğunu emal edir.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.1.2</span>
              <h3 className="font-display text-xl text-foreground">
                Modelin inkar və sual formalarında saxlanması
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Köməkçi felin daxil olması (bax: 1.2) subject–verb ardıcıllığını
              pozmur; köməkçi fel əlavə olunur, əsas struktur dəyişməz qalır.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The engineers did not deploy the update on schedule.",
                  az: "Mühəndislər yenilənməni cədvəl üzrə tətbiq etmədilər.",
                },
                {
                  en: "Did the client approve the final draft?",
                  az: "Müştəri son variantı təsdiqlədimi?",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.1.3</span>
              <h3 className="font-display text-xl text-foreground">
                İkiqat obyektli fellər: dolayı və birbaşa obyekt sırası
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>Give, send, show, offer, tell</em> kimi fellər iki obyekt
              götürə bilər. Standart sıra: Subject + Verb + Dolayı obyekt (kimə)
              + Birbaşa obyekt (nəyi). Alternativ formada dolayı obyekt{" "}
              <em>to/for</em> ilə cümlənin sonuna keçir.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The manager sent the client a detailed report.",
                  az: "Menecer müştəriyə ətraflı hesabat göndərdi.",
                },
                {
                  en: "The manager sent a detailed report to the client.",
                  az: "Menecer ətraflı hesabatı müştəriyə göndərdi.",
                },
                {
                  en: "The board offered the candidate a permanent position.",
                  az: "İdarə heyəti namizədə daimi vəzifə təklif etdi.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.1.4</span>
              <h3 className="font-display text-xl text-foreground">
                Tezlik zərflərinin mövqeyi (frequency adverbs)
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              <em>always, usually, often, rarely, never</em> kimi zərflər
              cümlənin əvvəlinə və ya sonuna deyil,{" "}
              <strong>orta mövqeyə</strong> yerləşir: adi fellərdən əvvəl, lakin{" "}
              <em>to be</em> felindən və köməkçi fellərdən sonra.
            </p>
            <ExampleList
              examples={[
                {
                  en: "The department rarely postpones important decisions.",
                  az: "Şöbə vacib qərarları nadir hallarda təxirə salır.",
                },
                {
                  en: "She is usually available before noon.",
                  az: "O, adətən günortaya qədər əlçatandır.",
                },
                {
                  en: "They have never missed a deadline.",
                  az: "Onlar heç vaxt son tarixi buraxmayıblar.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.1.5</span>
              <h3 className="font-display text-xl text-foreground">
                Tərzi, yeri və zamanı bildirən zərflərin sırası
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Bir cümlədə bir neçə zərf birləşməsi olduqda, qəbul edilmiş
              ardıcıllıq belədir: <strong>Tərz → Yer → Zaman</strong> (Manner →
              Place → Time).
            </p>
            <ExampleList
              examples={[
                {
                  en: "The team presented the results confidently at the conference yesterday.",
                  az: "Komanda dünən konfransda nəticələri əminliklə təqdim etdi.",
                },
                {
                  en: "She completed the assignment carefully in the office this morning.",
                  az: "O, bu gün səhər ofisdə tapşırığı diqqətlə tamamladı.",
                },
              ]}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent">1.1.6</span>
              <h3 className="font-display text-xl text-foreground">
                Təyinedicinin (sifətin) mövqeyi
              </h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Təyinedici sifət təyin etdiyi isimdən əvvəl yerləşir. Bir neçə
              sifət eyni anda işləndikdə, qəbul edilmiş sıra: rəy → ölçü → yaş →
              forma → rəng → mənşə → material → təyinat.
            </p>
            <ExampleList
              examples={[
                {
                  en: "a reliable legacy system",
                  az: "etibarlı köhnə sistem",
                },
                {
                  en: "a large rectangular conference table",
                  az: "böyük düzbucaqlı konfrans masası",
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
            Azərbaycan dili SOV (Subject–Object–Verb) tipli dildir — fel
            cümlənin sonunda yerləşir və sözlərin sırası dəyişsə belə hallanma
            sayəsində məna qorunur. İngilis dili isə SVO tipli, analitik dildir:
            hallanma olmadığından, məna yalnız sabit söz sırası ilə qorunur. Bu
            tipoloji fərq aşağıdakı sxemdə görünür:
          </p>
          <div className="font-mono text-sm space-y-1 text-muted">
            <p>AZ: Komitə (S) təklifi (O) nəzərdən keçirdi (V).</p>
            <p>EN: The committee (S) reviewed (V) the proposal (O).</p>
          </div>
          <p className="text-foreground leading-relaxed">
            Nəticə etibarilə, Azərbaycan dilində qrammatik cəhətdən düzgün olan
            söz sırası dəyişkənliyi ingilis dilinə birbaşa daşındıqda struktur
            səhvinə səbəb olur.
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
                wrong: "The department the proposal reviewed.",
                right: "The department reviewed the proposal.",
                az: "Şöbə təklifi nəzərdən keçirdi.",
              },
              {
                wrong: "The manager the client a report sent.",
                right: "The manager sent the client a report.",
                az: "Menecer müştəriyə hesabat göndərdi.",
              },
              {
                wrong: "Always the team meets on Monday.",
                right: "The team always meets on Monday.",
                az: "Komanda həmişə bazar ertəsi görüşür.",
              },
              {
                wrong: "A conference large table",
                right: "A large conference table",
                az: "Böyük konfrans masası",
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
        <section className="space-y-6">
          <ExerciseList
            title="Məşq 1 — Düzgün sıraya sal"
            items={[
              {
                prompt: "results / the / presented / researchers / the",
                answer: "The researchers presented the results.",
                translation: "Tədqiqatçılar nəticələri təqdim etdilər.",
              },
              {
                prompt: "report / detailed / sent / a / client / the / manager",
                answer: "The manager sent the client a detailed report.",
                translation: "Menecer müştəriyə ətraflı hesabat göndərdi.",
              },
              {
                prompt: "meets / always / team / the / Monday / on",
                answer: "The team always meets on Monday.",
                translation: "Komanda həmişə bazar ertəsi görüşür.",
              },
              {
                prompt: "system / large / legacy / reliable / a",
                answer: "a reliable large legacy system",
                translation: "etibarlı böyük köhnə sistem",
              },
            ]}
          />

          <ExerciseList
            title="Məşq 2 — Səhvi tap və düzəlt"
            items={[
              {
                prompt: "The board the candidate offered a position.",
                answer: "The board offered the candidate a position.",
                translation: "İdarə heyəti namizədə vəzifə təklif etdi.",
              },
              {
                prompt: "Never the department misses a deadline.",
                answer: "The department never misses a deadline.",
                translation: "Şöbə heç vaxt son tarixi buraxmır.",
              },
              {
                prompt: "A table conference large.",
                answer: "A large conference table.",
                translation: "Böyük konfrans masası.",
              },
            ]}
          />
        </section>
      </div>
    </LessonShell>
  );
}
