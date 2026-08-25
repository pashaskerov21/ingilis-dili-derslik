'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

/**
 * Tema kontekstini bütün tətbiqə paylayır.
 * attribute="class" → <html> elementinə "light" və ya "dark" class-ı qoyulur.
 * Defolt tünddür; CSS-də də class olmayan hal tünd sayılır, ona görə ilk
 * render ilə hidrasiya arasında rəng sıçrayışı olmur.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      themes={['light', 'dark']}
    >
      {children}
    </NextThemeProvider>
  );
}
