import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import "./landingpage.css"; // homepage-specific styles modularized
import "./custom.css"; // shared animation utilities
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes'

// Minimal font setup: apply Plus Jakarta Sans globally
const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400','500','600','700']
});

export const metadata: Metadata = {
  title: "menuwire - Easy Order",
  description: "menuwire by MaoTek",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning className={fontSans.variable}>
      <body className="bg-body-1" style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif' }}>
        <ThemeProvider >
            <NextIntlClientProvider>
              {children}
            </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
