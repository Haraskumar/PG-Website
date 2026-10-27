import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Cinzel } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';
import JsonLd from '@/components/seo/JsonLd';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://luxorasorathpg.com'),
  title: {
    default: 'Luxora & Sorath PG Ahmedabad | Luxury & Budget Co-Living in Navrangpura',
    template: '%s | Luxora & Sorath PG Ahmedabad',
  },
  description:
    'Ahmedabad’s premier co-living portal across 7 locations. Luxora Luxury PG & Sorath Smart Budget PG in Navrangpura & Naranpura. 150 Mbps Wi-Fi, 4 & 3 meals included, AC rooms, biometric safety, zero brokerage direct admission.',
  keywords: [
    'PG in Navrangpura Ahmedabad',
    'Boys PG near Gujarat University',
    'Girls PG in Naranpura',
    'Luxora Boys PG',
    'Luxora Girls PG',
    'Sorath Boys PG Vijay Cross Road',
    'Sorath Girls PG Ahmedabad',
    'Best PG in Ahmedabad with food',
    'AC PG near CEPT University',
    'Luxury PG Ahmedabad',
    'Budget PG Ahmedabad',
  ],
  authors: [{ name: 'Luxora & Sorath Management Group' }],
  creator: 'Luxora & Sorath PG',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://luxorasorathpg.com',
    siteName: 'Luxora & Sorath PG Ahmedabad',
    title: 'Luxora & Sorath PG Ahmedabad | Best Student & Executive Accommodations',
    description:
      '7 premier PG stays in Navrangpura & Naranpura. 150 Mbps Wi-Fi, 4 & 3 meals included, AC suites, biometric security, zero brokerage direct admissions.',
    images: [
      {
        url: '/images/brand/luxora-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Luxora and Sorath PG Accommodations Ahmedabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxora & Sorath PG Ahmedabad',
    description: 'Premier student and executive co-living stays in Navrangpura and Naranpura Ahmedabad.',
    images: ['/images/brand/luxora-logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${cinzel.variable}`}>
      <body className="min-h-screen flex flex-col font-sans theme-bg-gradient text-slate-900 antialiased selection:bg-amber-400 selection:text-slate-950">
        <JsonLd />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
