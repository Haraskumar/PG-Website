import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Central Admissions Office | Luxora & Sorath PG Ahmedabad',
  description:
    'Contact Luxora & Sorath PG management directly. Zero brokerage admissions, in-person property tours, and room bookings across 7 Ahmedabad PG branches. Phone & WhatsApp active 7 days.',
  alternates: {
    canonical: 'https://luxorasorathpg.com/contact',
  },
  openGraph: {
    title: 'Contact Central Admissions Office | Luxora & Sorath PG Ahmedabad',
    description:
      'Speak directly with property management with zero intermediary fees. Visit our central office or connect on WhatsApp instantly.',
    url: 'https://luxorasorathpg.com/contact',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
