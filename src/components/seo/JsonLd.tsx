import { PROPERTIES } from '@/data/properties';
import { CONTACTS } from '@/data/contacts';
import { FAQS } from '@/data/faqs';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Luxora & Sorath PG Accommodations Ahmedabad',
    url: 'https://luxorasorathpg.com',
    logo: 'https://luxorasorathpg.com/images/brand/luxora-logo.svg',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: CONTACTS.primaryPhone,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Gujarati', 'Hindi']
      }
    ],
    sameAs: [CONTACTS.instagram]
  };

  const localBusinesses = PROPERTIES.map((pg) => ({
    '@context': 'https://schema.org',
    '@type': 'Hostel',
    name: pg.name,
    description: pg.overview,
    url: `https://luxorasorathpg.com/pgs/${pg.slug}`,
    telephone: CONTACTS.primaryPhone,
    priceRange: pg.priceRangeDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: pg.address,
      addressLocality: pg.area,
      addressRegion: 'Gujarat',
      postalCode: pg.pincode,
      addressCountry: 'IN'
    },
    amenityFeature: pg.amenities.map((amenity) => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity,
      value: true
    }))
  }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {localBusinesses.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
