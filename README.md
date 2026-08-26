# English

Sıfırdan ingilis dili öyrənmək üçün **offline işləyə bilən** veb-tətbiq (gələcəkdə PWA).
Proqramçılar və ümumiyyətlə özünütəhsil edənlər üçün: addım-addım qrammatika kurikulumu,
səviyələr üzrə lüğət və mətnlər, təkrar testləri.

> Hazırda layihə **skelet mərhələsindədir** — struktur və konfiqurasiya var, məzmun/komponent yoxdur.

## Başlamaq

```bash
npm install
npm run dev
```

Sonra brauzerdə [http://localhost:3000](http://localhost:3000) ünvanını aç.

## Skriptlər

| Əmr | Təsvir |
| --- | --- |
| `npm run dev` | Development serveri |
| `npm run build` | Statik export (`out/` qovluğuna) |
| `npm run preview` | Build olunmuş `out/` qovluğuna statik baxış |
| `npm run typecheck` | TypeScript yoxlaması |
| `npm run icons` | `public/icon.svg`-dən favicon/PNG-ləri yenidən yaradır |

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS 3
- `next/font/google` ilə self-host edilən fontlar (offline üçün)
- `output: 'export'` — tam statik build

## Struktur

```
app/
  layout.tsx        # root layout (fontlar + metadata)
  page.tsx          # ana səhifə (hələ boş)
  globals.css       # tipoqrafiya, focus-visible, reduced-motion
  grammar/          # qrammatika: 11 qrup, hər qrupun bölmələri (səviyəsiz, ardıcıl)
  vocabulary/       # lüğət: [level] — A1–C2
  reading/          # mətnlər: [level] — A1–C2
  practice/         # testlər və qarışıq təkrar
components/         # UI komponentləri
data/               # kontent faylları (qrammatika, sözlər, mətnlər, suallar)
lib/                # types və utils
public/             # ikonlar, manifest
```

## Dizayn tokenləri

Tailwind `theme.extend.colors` içində:

| Ad | Dəyər | İstifadə |
| --- | --- | --- |
| `paper` | `#FAFAF8` | isti-boz kağız fonu |
| `ink` | `#111111` | əsas mətn (xalis qara deyil) |
| `line` | `#E4E2DC` | incə sərhədlər/ayırıcılar |
| `muted` | `#6B6A64` | ikinci dərəcəli mətn |
| `accent` | `#2F3E4E` | sakit tünd göy-boz aksent, focus halqası |

Fontlar (CSS variable → Tailwind):

- `font-serif` → **Fraunces** (`--font-serif`) — başlıqlar
- `font-sans` → **Inter** (`--font-sans`) — mətn
- `font-mono` → **JetBrains Mono** (`--font-mono`) — etiketlər/kod

Hər üçü `latin` + `latin-ext` subset ilə yüklənir ki, Azərbaycan hərfləri (ə, ı, ö, ü, ş, ç, ğ) düzgün göstərilsin.

## İkonlar

`public/icon.svg` əsas mənbədir. `favicon.ico`, `apple-touch-icon.png` və `icon-512.png`
ondan generasiya olunub (`scripts/generate-icons.mjs`).

## Növbəti addımlar

- [ ] `data/` içində kontent modelləri və faylları
- [ ] `lib/types.ts` — Grammar / Vocabulary / Reading / Question tipləri
- [ ] Səhifələr və komponentlər
- [ ] `next-pwa` ilə offline dəstəyi
