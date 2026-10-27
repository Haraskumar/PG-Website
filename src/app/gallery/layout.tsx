import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Photo Gallery | Real Photos of 7 PGs in Ahmedabad',
  description:
    'Browse genuine verified photos of Luxora and Sorath PG properties in Navrangpura and Naranpura. Real bedrooms, attached washrooms, hygienic dining halls, and study lounges.',
  alternates: {
    canonical: 'https://luxorasorathpg.com/gallery',
  },
  openGraph: {
    title: 'Property Photo Gallery | Luxora & Sorath PG Ahmedabad',
    description: '100% verified photo gallery of student and executive PG rooms, dining halls, and amenities in Ahmedabad.',
    url: 'https://luxorasorathpg.com/gallery',
    type: 'website',
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
