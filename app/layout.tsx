import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ServiceWorkerRegister } from '@/components/service-worker-register';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

// latin-ext subset Azərbaycan hərfləri (ə, ı, ö, ü, ş, ç, ğ) üçün vacibdir.
const serif = Fraunces({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-mono',
  display: 'swap',
});

const title = 'English — Sıfırdan İngilis Dili';
const description =
  'Sıfırdan ingilis dili öyrənmək üçün offline işləyən tətbiq: addım-addım qrammatika kurikulumu, səviyələr üzrə lüğət və mətnlər, təkrar testləri. Proqramçılar və özünütəhsil edənlər üçün.';

export const metadata: Metadata = {
  title,
  description,
  applicationName: 'English',
  manifest: '/manifest.json',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }, { url: '/favicon.ico' }],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title,
    description,
    siteName: 'English',
    locale: 'az_AZ',
    type: 'website',
  },
};

export const viewport: Viewport = {
  // Defolt tema tünd olduğu üçün brauzer UI-ı da tünd başlayır.
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#121212' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: next-themes <html> class-ını client-də əlavə edir.
    <html
      lang="az"
      suppressHydrationWarning
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="min-h-dvh bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <ServiceWorkerRegister />
          {/* Səhifə keçidində scroll-u yuxarı qaytarır. */}
          <ScrollToTop />
          {/* Bütün səhifələr üçün ortaq oxunaqlı sütun eni. */}
          <div className="mx-auto w-full max-w-2xl px-5 py-10 transition-colors duration-300 sm:px-6 sm:py-14">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
