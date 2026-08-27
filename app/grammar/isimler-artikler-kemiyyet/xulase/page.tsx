import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";

export const metadata: Metadata = buildSectionMetadata(
  "isimler-artikler-kemiyyet",
  "xulase",
);

export default function Page() {
  return (
    <LessonShell chapterSlug="isimler-artikler-kemiyyet" sectionSlug="xulase">
      <div className="space-y-8">
        <p className="text-base leading-relaxed text-muted">
          8 bölmənin ən əsas qaydaları — sürətli təkrar üçün. Ətraflı izah və
          daha çox nümunə üçün uyğun bölməyə qayıt.
        </p>

        <div className="divide-y divide-line border-y border-line">
          {/* 2.1 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                2.1
              </span>
              <h3 className="font-display text-lg text-foreground">
                Sayıla bilən / bilməyən isimlər
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                countable: a/an + tək, ədəd, many, how many uncountable: much,
                how much, HƏMİŞƏ tək fel
              </code>
              <p className="text-sm text-foreground">
                Sabit istisnalar: information, advice, furniture, news,
                equipment, homework — bunlar AZ-da cəm ala bilir, EN-də yox.
              </p>
              <p className="text-sm text-accent">
                ⚠ "informations", "advices", "furnitures" — heç biri düzgün
                deyil.
              </p>
            </div>
          </div>

          {/* 2.2 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                2.2
              </span>
              <h3 className="font-display text-lg text-foreground">
                Cəm isimlərin düzəldilməsi
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground space-y-1">
                <span className="block">
                  -s (əsas) · -s/-sh/-ch/-x/-z → -es
                </span>
                <span className="block">
                  samit+y → -ies · -f/-fe → -ves (istisnalarla)
                </span>
              </code>
              <p className="text-sm text-foreground">
                Qeyri-müntəzəm: man→men, child→children, person→people.
                Dəyişməyən: sheep, fish. Yalnız cəm: news (tək fel!), scissors.
              </p>
              <p className="text-sm text-accent">
                ⚠ "The news are" deyil, "The news is".
              </p>
            </div>
          </div>

          {/* 2.3 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                2.3
              </span>
              <h3 className="font-display text-lg text-foreground">a / an</h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                samit SƏSİ → a · sait SƏSİ → an (hərf yox, səs həlledicidir)
              </code>
              <p className="text-sm text-foreground">
                an hour (h səssiz) · a university (u → /juː/) · an MBA (M →
                /em/)
              </p>
              <p className="text-sm text-accent">
                ⚠ Yalnız TƏK sayıla bilən isimlə — cəm/uncountable ilə yox.
              </p>
            </div>
          </div>

          {/* 2.4 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                2.4
              </span>
              <h3 className="font-display text-lg text-foreground">the</h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground space-y-1">
                <span className="block">
                  2-ci qeyddə · kontekstdən aydın · of/təyin cümləsi ilə
                </span>
                <span className="block">
                  superlativ/sıra say · tək obyekt (the sun) · onilliklər
                </span>
              </code>
              <p className="text-sm text-foreground">
                Tələffüz: samitdən əvvəl /ðə/, saitdən əvvəl /ði/.
              </p>
              <p className="text-sm text-accent">
                ⚠ "She was first person" deyil, "the first person".
              </p>
            </div>
          </div>

          {/* 2.5 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                2.5
              </span>
              <h3 className="font-display text-lg text-foreground">
                Artiklsiz işlənmə (Ø)
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground space-y-1">
                <span className="block">
                  ümumi cəm/uncountable · xüsusi isim · yemək/idman/fən
                </span>
              </code>
              <p className="text-sm text-foreground">
                İstisna: çaylar/okeanlar/dağlar + cəm ölkə adları → the (the
                Netherlands, the Pacific).
              </p>
              <p className="text-sm text-accent">
                ⚠ "at school" (şagird kimi) ≠ "at the school" (bina, ziyarətçi
                kimi) — EN-ə xas, AZ-da paraleli yoxdur.
              </p>
            </div>
          </div>

          {/* 2.6 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                2.6
              </span>
              <h3 className="font-display text-lg text-foreground">
                Mülkiyyət halı ('s)
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground space-y-1">
                <span className="block">
                  tək isim + 's · cəm (-s bitən) + ' (yalnız apostrof)
                </span>
                <span className="block">
                  qeyri-müntəzəm cəm (children) + 's
                </span>
              </code>
              <p className="text-sm text-foreground">
                'S bütöv söz birləşməsinin SONUNA bağlanır: "the Head of
                Marketing's decision".
              </p>
              <p className="text-sm text-accent">
                ⚠ its (mülkiyyət) ≠ it's (it is/has) — apostrof yalnız ikincidə.
              </p>
            </div>
          </div>

          {/* 2.7 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                2.7
              </span>
              <h3 className="font-display text-lg text-foreground">
                Kəmiyyət I: some/any/much/many/enough
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground space-y-1">
                <span className="block">some → təsdiq · any → inkar/sual</span>
                <span className="block">
                  much + uncountable · many + cəm (əsasən inkar/sual/rəsmi)
                </span>
                <span className="block">
                  a few/a little (müsbət) ≠ few/little (mənfi)
                </span>
              </code>
              <p className="text-sm text-foreground">
                enough — determinativ, əvəzlik VƏ zərf (sifətdən sonra: "fast
                enough").
              </p>
              <p className="text-sm text-accent">
                ⚠ "few friends" (demək olar heç kim) ≠ "a few friends" (bir neçə
                var) — ton tamam fərqlidir.
              </p>
            </div>
          </div>

          {/* 2.8 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                2.8
              </span>
              <h3 className="font-display text-lg text-foreground">
                Kəmiyyət II: every/each/all/most/no/none
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground space-y-1">
                <span className="block">
                  every (bütöv, rutin) vs each (hər üzv ayrıca, "each of the
                  three")
                </span>
                <span className="block">
                  all + cəm/uncountable · most = əksəriyyət · no/none = özü
                  mənfi
                </span>
              </code>
              <p className="text-sm text-foreground">
                each isimsiz işlənə bilir ("Each has..."), every bilmir
                (əvəzinə: everyone). each sona da keçə bilir: "$10 each".
              </p>
              <p className="text-sm text-accent">
                ⚠ "All the tests didn't pass" qeyri-müəyyəndir — dəqiqlik üçün
                "None passed" və ya "Not all passed" işlət.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LessonShell>
  );
}
