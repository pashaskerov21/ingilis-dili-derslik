import type { Metadata } from "next";
import LessonShell from "@/components/LessonShell";
import { buildSectionMetadata } from "@/lib/grammar-data";

export const metadata: Metadata = buildSectionMetadata("mexanika", "xulase");

export default function Page() {
  return (
    <LessonShell chapterSlug="mexanika" sectionSlug="xulase">
      <div className="space-y-8">
        <p className="text-base leading-relaxed text-muted">
          4 bölmənin ən əsas qaydaları — sürətli təkrar üçün. Ətraflı izah və
          daha çox nümunə üçün uyğun bölməyə qayıt.
        </p>

        <div className="divide-y divide-line border-y border-line">
          {/* 11.1 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                11.1
              </span>
              <h3 className="font-display text-lg text-foreground">
                Böyük hərflər
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Cümlə əvvəli · "I" · xüsusi isimlər (mövqedən asılı olmadan)
              </code>
              <p className="text-sm text-foreground">
                Titullar addan əvvəl→böyük, sonra/ümumi→kiçik.
                Günlər/aylar→böyük, mövsümlər→kiçik.
              </p>
            </div>
          </div>

          {/* 11.2 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                11.2
              </span>
              <h3 className="font-display text-lg text-foreground">Apostrof</h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Tək isim+'s · Cəm(-s)+' · Cəm(qeyri-müntəzəm)+'s
              </code>
              <p className="text-sm text-accent">
                ⚠ Sadə cəmdə apostrof QADAĞAN (greengrocer's). Mülkiyyət
                əvəzlikləri heç vaxt apostrof almır.
              </p>
            </div>
          </div>

          {/* 11.3 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                11.3
              </span>
              <h3 className="font-display text-lg text-foreground">
                Vergül qaydaları
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Giriş ifadədən sonra · however/therefore ortada→İKİ vergül Ara
                söz→cütlü vergül · Tarix/ünvan: hər hissədən sonra
              </code>
              <p className="text-sm text-accent">
                ⚠ Comma splice (bağlayıcısız iki müstəqil cümlə) həmişə səhvdir.
              </p>
            </div>
          </div>

          {/* 11.4 */}
          <div className="py-5 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-accent shrink-0">
                11.4
              </span>
              <h3 className="font-display text-lg text-foreground">
                Digər durğu işarələri
              </h3>
            </div>
            <div className="pl-9 space-y-2">
              <code className="block bg-accent/5 border border-line px-3 py-2 font-mono text-sm text-foreground">
                Nöqtəli vergül: bağlayıcısız 2 müstəqil cümlə İki nöqtə: TAM
                cümlədən sonra siyahı/izah
              </code>
              <p className="text-sm text-foreground">
                Dırnaq: yalnız birbaşa sitat. Defis (birləşdirir) vs Tire
                (ayırır/vurğulayır).
              </p>
            </div>
          </div>
        </div>
      </div>
    </LessonShell>
  );
}
