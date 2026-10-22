export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g. "CEPT University Student", "Software Engineer at SG Highway", "Parent"
  propertyId: string;
  propertyName: string;
  brand: 'LUXORA' | 'SORATH';
  rating: number; // 5
  text: string;
  stayDuration: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aarav Mehta',
    role: 'CEPT Architecture Student',
    propertyId: 'luxora-boys-1',
    propertyName: 'Luxora Boys PG 1',
    brand: 'LUXORA',
    rating: 5,
    text: 'Luxora Boys PG 1 on Stadium Six Road is unlike any regular PG in Ahmedabad. The 150 Mbps Wi-Fi never drops even when working on heavy CAD renders, and the 4-time food with evening snacks saves so much time. Having the quiet study room and home theatre is a big bonus.',
    stayDuration: 'Staying since 1.5 years'
  },
  {
    id: '2',
    name: 'Pooja Trivedi (Parent)',
    role: 'Mother of Resident Student',
    propertyId: 'luxora-girls-1',
    propertyName: 'Luxora Girls PG 1',
    brand: 'LUXORA',
    rating: 5,
    text: 'As a parent sending my daughter from Surat to Ahmedabad for higher studies, security was my #1 concern. Luxora Girls PG in Naranpura gives me complete peace of mind. Biometric fingerprint entry, 24/7 CCTV, and warden care are exceptional.',
    stayDuration: 'Resident parent'
  },
  {
    id: '3',
    name: 'Keval Patel',
    role: 'Gujarat University M.Com Student',
    propertyId: 'sorath-boys-1',
    propertyName: 'Sorath Boys PG 1',
    brand: 'SORATH',
    rating: 5,
    text: 'Sorath Boys PG 1 at Ajay Center is right on Vijay Cross Road. I walk to Gujarat University in under 10 minutes. At ₹8,500 to ₹10,000 with 3 hot meals included, it is the best value student PG in Navrangpura. Clean washrooms and fast internet!',
    stayDuration: 'Staying since 8 months'
  },
  {
    id: '4',
    name: 'Riddhi Shah',
    role: 'Chartered Accountant Aspirant',
    propertyId: 'sorath-girls-1',
    propertyName: 'Sorath Girls PG 1',
    brand: 'SORATH',
    rating: 5,
    text: 'Located right beside Maharaja Palace on Vijay Cross Road, Sorath Girls PG 1 is very quiet and peaceful for studying. The lift makes daily movement effortless, the food is hygienic and homely, and the caretaker is very supportive.',
    stayDuration: 'Staying since 1 year'
  },
  {
    id: '5',
    name: 'Hardik Solanki',
    role: 'Tech Executive (C.G. Road)',
    propertyId: 'sorath-boys-3',
    propertyName: 'Sorath Boys PG 3',
    brand: 'SORATH',
    rating: 5,
    text: 'I stayed at Pallavi Tower for over a year while working in Navrangpura. Clean rooms, reliable power, washing machine, and hot water every morning. The management (Dhaval Bhai & Babu Bhai) are always responsive on WhatsApp.',
    stayDuration: 'Staying since 14 months'
  }
];
