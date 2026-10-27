import { CONTACTS } from '@/data/contacts';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Luxora & Sorath PG Accommodations Ahmedabad',
    url: 'https://luxorasorathpg.com',
    logo: 'https://luxorasorathpg.com/images/brand/luxora-logo.webp',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: CONTACTS.primaryPhone,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Gujarati', 'Hindi'],
      },
    ],
    sameAs: [CONTACTS.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
