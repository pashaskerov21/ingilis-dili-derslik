import type { Config } from 'tailwindcss';

/** CSS dəyişənini Tailwind rəngi kimi istifadə et (şəffaflıq dəstəyi ilə). */
const token = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

const config: Config = {
  // Defolt tünd tema class-sız işləyir; .light class-ı açıq temaya keçirir.
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantik adlar — tema ilə avtomatik dəyişir
        background: token('background'),
        foreground: token('foreground'),
        // Bir az fərqlənən səthlər (qeyd qutuları, kartlar)
        surface: token('surface'),
        // İncə ayırıcı xətlər / sərhədlər
        line: token('line'),
        // İkinci dərəcəli mətn
        muted: token('muted'),
        // Sakit, neytral aksent
        accent: token('accent'),

        // Köhnə adlar — geriyə uyğunluq üçün semantik tokenlərə bağlıdır
        paper: token('background'),
        ink: token('foreground'),
      },
      fontFamily: {
        // Başlıqlar üçün xarakterli serif
        serif: ['var(--font-serif)', 'var(--font-sans)', 'Georgia', 'serif'],
        display: ['var(--font-serif)', 'var(--font-sans)', 'Georgia', 'serif'],
        // Əsas mətn
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        body: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        // Etiketlər / kod / ingiliscə nümunələr
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
