import { Property } from '@/types/property';

export const PROPERTIES: Property[] = [
  // 1. LUXORA BOYS PG 1
  {
    id: 'luxora-boys-1',
    slug: 'luxora-boys-1',
    name: 'Luxora Boys PG 1',
    brand: 'LUXORA',
    gender: 'BOYS',
    badgeTagline: 'Luxury Boutique Living for Students & Executives',
    priceRangeDisplay: '₹15,000 – ₹20,000 / mo',
    minPrice: 15000,
    maxPrice: 20000,
    address: '3rd Floor, Madhur Complex, Stadium Six Road, Navrangpura',
    area: 'Navrangpura / Stadium Six Road',
    city: 'Ahmedabad',
    pincode: '380009',
    landmark: 'Opp. Gwalia Sweets & Flexi Business Hub',
    mapUrl: 'https://maps.app.goo.gl/oRsKZLpbpNvRKCg48?g_st=iw',
    embedMapQuery: 'Madhur+Complex+Stadium+Six+Road+Navrangpura+Ahmedabad',
    mapCoordinates: { lat: 23.0375, lng: 72.5565 },
    overview: 'Luxora Boys PG 1 is an ultra-premium co-living space located at Stadium Six Road, Navrangpura. Designed for ambitious university students and working executives, it features boutique fully furnished AC suites, high-speed 150 Mbps fiber internet, fingerprint biometric security, private theatre/entertainment zone, dedicated quiet study halls, and 4-time chef-prepared wholesome meals.',
    highlights: [
      'Prime location at Stadium Six Road (Opp. Gwalia Sweets)',
      '4-time gourmet dining (Breakfast, Lunch, Evening Snacks & Dinner)',
      'High-speed 150 Mbps Wi-Fi with dual mesh routers',
      'Mini Home Theatre / Tokiz lounge & dedicated quiet study zone',
      'Biometric fingerprint door access & 24/7 CCTV surveillance',
      'Elevator, 100% power generator backup & daily professional housekeeping'
    ],
    pros: [
      '3-minute walk (200m) to Stadium Metro Station',
      '4-time gourmet daily dining with hot evening snacks & tea',
      'In-house private mini-theatre / Tokiz room for weekend movies',
      'Pin-drop silent study room for CEPT & competitive exam prep',
      'Fingerprint biometric locks on main doors with 24/7 CCTV',
      '100% generator power backup with zero power interruption'
    ],
    hygieneFeatures: [
      'Daily professional bedroom sweeping & mopping by housekeeping staff',
      'Hospital-grade washroom scrubbing with anti-bacterial agents',
      'Multi-stage commercial RO water plant with weekly TDS meter tests',
      'Stainless-steel commercial mess with fresh daily vegetable sourcing',
      'Quarterly anti-termite and pest control across all resident rooms'
    ],
    mealsIncluded: '4-Time Daily Dining: Breakfast, Lunch, Evening Snack & Dinner',
    foodMenuHighlights: [
      { meal: 'Breakfast', items: 'Poha / Upma / Methi Thepla with Green Chutney, Masala Tea & Fresh Milk' },
      { meal: 'Lunch', items: 'Gujarati Dal, Steamed Basmati Rice, Seasonal Sabzi, Hot Phulka Rotis, Papad & Buttermilk' },
      { meal: 'Evening Snack', items: 'Hot Tea / Coffee with Vegetable Cutlets, Khaman Dhokla or Pakodas' },
      { meal: 'Dinner', items: 'Paneer Butter Masala / Veg Korma, Dal Tadka, Jeera Rice, Hot Chapati & Salad' }
    ],
    roomOptions: [
      {
        sharing: 2,
        sharingLabel: '2 Sharing Luxury Suite',
        type: 'AC',
        priceMonthly: 20000,
        priceDisplay: '₹20,000 / mo',
        notes: 'Spacious AC room with attached private bath, personal teak wardrobe & study desks',
        image: '/images/pgs/luxora-boys-1/luxora-boys-1-bedroom-01.webp'
      },
      {
        sharing: 3,
        sharingLabel: '3 Sharing Premium Room',
        type: 'AC',
        priceMonthly: 18000,
        priceDisplay: '₹18,000 / mo',
        notes: 'Air-conditioned room with personalized lockable wardrobes & study lights',
        image: '/images/pgs/luxora-boys-1/luxora-boys-1-bedroom-luxury-02.webp'
      },
      {
        sharing: 4,
        sharingLabel: '4 Sharing Executive Room',
        type: 'AC',
        priceMonthly: 16000,
        priceDisplay: '₹16,000 / mo',
        notes: 'Comfortable AC room with individual storage & ergonomic study chairs',
        image: '/images/pgs/luxora-boys-1/luxora-boys-1-bedroom-luxury-01.webp'
      },
      {
        sharing: 5,
        sharingLabel: '5 Sharing Club Room',
        type: 'AC',
        priceMonthly: 15000,
        priceDisplay: '₹15,000 / mo',
        notes: 'Economical luxury sharing with complete AC, attached washroom & daily cleaning',
        image: '/images/pgs/luxora-boys-1/luxora-boys-1-bedroom-02.webp'
      }
    ],
    amenities: [
      '4-Time Fresh Meals',
      '100% AC Accommodation',
      '150 Mbps Fiber Wi-Fi',
      'Fingerprint Biometric Entry',
      '24/7 Security & CCTV',
      'RO Drinking Water Station',
      'Laundry & Washing Machines',
      'Home Theatre / Tokiz Room',
      'Silent Study Lounge',
      'Game Zone & Table Games',
      'Dedicated Reserved Parking',
      'Generator Power Back-up',
      'Automatic Lift',
      'Geyser & High-Flow Showers',
      'Ironing Station',
      'Advanced Fire Safety',
      'Attached Washrooms',
      'Open Sky Terrace'
    ],
    landmarks: [
      { name: 'Stadium Metro Station', category: 'transit', distanceKm: '0.2 km', travelTime: '2 min walk' },
      { name: 'Gujarat University', category: 'college', distanceKm: '1.8 km', travelTime: '6 min drive' },
      { name: 'CEPT University', category: 'college', distanceKm: '1.4 km', travelTime: '5 min drive' },
      { name: 'LD College of Engineering', category: 'college', distanceKm: '2.1 km', travelTime: '7 min drive' },
      { name: 'Navrangpura Bus Stand', category: 'transit', distanceKm: '0.8 km', travelTime: '3 min drive' },
      { name: 'C.G. Road Shopping District', category: 'shopping', distanceKm: '0.9 km', travelTime: '4 min drive' }
    ],
    hasActualPhotos: true,
    images: [
      {
        src: '/images/pgs/luxora-boys-1/luxora-boys-1-hero.webp',
        alt: 'Luxora Boys PG 1 Exterior facade with official signage at Stadium Six Road Navrangpura',
        category: 'hero',
        isHero: true
      },
      {
        src: '/images/pgs/luxora-boys-1/luxora-boys-1-bedroom-luxury-01.webp',
        alt: 'Luxora Boys PG 1 Executive Luxury Air-Conditioned Suite with teak wooden beds',
        category: 'bedroom'
      },
      {
        src: '/images/pgs/luxora-boys-1/luxora-boys-1-bedroom-luxury-02.webp',
        alt: 'Luxora Boys PG 1 Premium Air-Conditioned Bedroom with window and study desks',
        category: 'bedroom'
      },
      {
        src: '/images/pgs/luxora-boys-1/luxora-boys-1-corridor-01.webp',
        alt: 'Luxora Boys PG 1 Modern Luxury Corridor with Keyless Biometric Doors',
        category: 'common'
      },
      {
        src: '/images/pgs/luxora-boys-1/luxora-boys-1-bedroom-01.webp',
        alt: 'Luxora Boys PG 1 2-sharing luxury bedroom with AC and study table',
        category: 'bedroom'
      },
      {
        src: '/images/pgs/luxora-boys-1/luxora-boys-1-bedroom-02.webp',
        alt: 'Luxora Boys PG 1 3-sharing air-conditioned spacious bedroom',
        category: 'bedroom'
      },
      {
        src: '/images/pgs/luxora-boys-1/luxora-boys-1-bathroom-01.webp',
        alt: 'Luxora Boys PG 1 clean attached washroom with modern geyser and fittings',
        category: 'bathroom'
      },
      {
        src: '/images/pgs/luxora-boys-1/luxora-boys-1-dining-mess-01.webp',
        alt: 'Luxora Boys PG 1 hygienic cafeteria and dining hall',
        category: 'dining'
      },
      {
        src: '/images/pgs/luxora-boys-1/luxora-boys-1-common-area-01.webp',
        alt: 'Luxora Boys PG 1 resident common lounge, study area and games zone',
        category: 'common'
      }
    ],
    branchReviews: [
      {
        name: 'Aarav Mehta',
        role: 'CEPT Architecture Student',
        rating: 5,
        text: 'Luxora Boys PG 1 on Stadium Six Road is unlike any regular PG in Ahmedabad. The 150 Mbps Wi-Fi never drops even when working on heavy CAD renders, and the 4-time food with evening snacks saves so much time. Having the quiet study room and home theatre is a big bonus.',
        stayDuration: 'Staying since 1.5 years'
      },
      {
        name: 'Rohan Sharma',
        role: 'LD College Engineering Final Year',
        rating: 5,
        text: 'The biometric access gives total security, and the staff is genuinely polite. The metro is just 5 minutes walk away so commuting across Ahmedabad is effortless.',
        stayDuration: 'Resident for 11 months'
      },
      {
        name: 'Dr. Ashok Patel (Parent)',
        role: 'Father of Medical Resident',
        rating: 5,
        text: 'Clean food, quiet environment, zero nuisance, and Dhaval Bhai handles everything directly with accountability. Highly recommended.',
        stayDuration: 'Resident parent'
      }
    ],
    seo: {
      metaTitle: 'Luxora Boys PG 1 Navrangpura Ahmedabad | Luxury AC PG with 4 Meals',
      metaDescription: 'Experience luxury student & corporate living at Luxora Boys PG 1 on Stadium Six Road, Navrangpura. 150 Mbps Wi-Fi, 4 meals, biometric security & AC rooms.',
      keywords: ['Luxora Boys PG Navrangpura', 'Luxury Boys PG Ahmedabad', 'AC PG near Gujarat University', 'PG Stadium Six Road', 'Best Boys PG Ahmedabad']
    }
  },

  // 2. LUXORA GIRLS PG 1
  {
    id: 'luxora-girls-1',
    slug: 'luxora-girls-1',
    name: 'Luxora Girls PG 1',
    brand: 'LUXORA',
    gender: 'GIRLS',
    badgeTagline: 'Ultra-Secure, Luxury Co-Living for Female Students & Professionals',
    priceRangeDisplay: '₹12,000 – ₹20,000 / mo',
    minPrice: 12000,
    maxPrice: 20000,
    address: 'Sardar Patel Statue Circle, opp. Lifecare Hospital, Sardar Patel Colony, Sundar Nagar, Naranpura',
    area: 'Naranpura / Sardar Patel Colony',
    city: 'Ahmedabad',
    pincode: '380013',
    landmark: 'Opp. Lifecare Hospital, SP Statue Circle',
    mapUrl: 'https://share.google/VHZdGOuRaTluqKWWB',
    embedMapQuery: 'Sardar+Patel+Statue+Circle+Lifecare+Hospital+Naranpura+Ahmedabad',
    mapCoordinates: { lat: 23.0538, lng: 72.5542 },
    overview: 'Luxora Girls PG 1 sets the gold standard for women’s accommodation in Ahmedabad. Located right opposite Lifecare Hospital at Sardar Patel Statue Circle in Naranpura, this facility combines 360-degree biometric and CCTV security, dedicated female wardens, 4-time hygienic nutrition, serene private study zones, and fully air-conditioned designer rooms.',
    highlights: [
      'Gated residential colony location with 24/7 dedicated female security',
      'Directly opposite Lifecare Hospital & Sardar Patel Statue Circle',
      '4-time freshly prepared home-style food (Breakfast, Lunch, Evening Snack, Dinner)',
      'Fingerprint biometric entry locks & complete CCTV coverage',
      'Attached modern washrooms, high-speed Wi-Fi & silent reading spaces',
      'Open terrace garden & recreational indoor spaces'
    ],
    pros: [
      'Gated residential colony directly opposite Lifecare Hospital',
      '24/7 dedicated female wardens & fingerprint biometric access',
      '4-time nutritious dining with evening hot snacks & milk',
      'Private open-sky rooftop terrace garden for evening relaxation',
      'Air-conditioned silent reading hall and study pods',
      'Immediate 4-minute walk to Naranpura BRTS bus corridor'
    ],
    hygieneFeatures: [
      'Daily in-room housekeeping and floor mopping by verified female staff',
      'Spotless attached washrooms with hot water geysers and daily sanitization',
      'Multi-stage RO drinking water purification with daily quality checks',
      'Clean commercial kitchen with fresh vegetable sourcing and zero cold tiffins',
      'Regular pest control and anti-microbial room treatments'
    ],
    mealsIncluded: '4-Time Daily Dining: Breakfast, Lunch, Evening Snack & Dinner',
    foodMenuHighlights: [
      { meal: 'Breakfast', items: 'Methi Thepla with Pickle, Poha, Curd, Bournvita & Masala Tea' },
      { meal: 'Lunch', items: 'Gujarati Kadhi, Khichdi, Bataka Nu Shaak, Phulka Rotis, Salad & Fresh Chhaas' },
      { meal: 'Evening Snack', items: 'Fresh Tea/Coffee with Veg Sandwiches, Samosa or Biscuits' },
      { meal: 'Dinner', items: 'Mix Veg Korma / Sev Tameta, Dal Fry, Steamed Basmati Rice & Soft Hot Phulkas' }
    ],
    roomOptions: [
      {
        sharing: 2,
        sharingLabel: '2 Sharing Deluxe Suite',
        type: 'AC',
        priceMonthly: 20000,
        priceDisplay: '₹20,000 / mo',
        notes: 'Premium 2-bed suite with attached washroom, private wardrobes, AC & study desk',
        image: '/images/pgs/luxora-girls-1/luxora-girls-1-bedroom-01.webp'
      },
      {
        sharing: 3,
        sharingLabel: '3 Sharing Comfort Room',
        type: 'AC',
        priceMonthly: 16000,
        priceDisplay: '₹16,000 / mo',
        notes: 'Air-conditioned 3-bed room with individual study lamps & storage',
        image: '/images/pgs/luxora-girls-1/luxora-girls-1-bedroom-03.webp'
      },
      {
        sharing: 4,
        sharingLabel: '4 Sharing Classic Room',
        type: 'AC',
        priceMonthly: 14000,
        priceDisplay: '₹14,000 / mo',
        notes: 'Spacious 4-sharing setup with personal lockers & attached bath',
        image: '/images/pgs/luxora-boys-1/luxora-boys-1-bedroom-luxury-01.webp'
      },
      {
        sharing: 5,
        sharingLabel: '5 Sharing Value Room',
        type: 'AC',
        priceMonthly: 12000,
        priceDisplay: '₹12,000 / mo',
        notes: 'Best-in-class value luxury option with AC and 4 meals included',
        image: '/images/pgs/luxora-girls-1/luxora-girls-1-bedroom-02.webp'
      }
    ],
    amenities: [
      '4-Time Fresh Meals',
      '100% AC Accommodation',
      '150 Mbps Fiber Wi-Fi',
      'Female Warden & 24/7 Security',
      'Fingerprint Biometric Entry',
      'CCTV Surveillance Throughout',
      'RO Drinking Water Station',
      'Automated Laundry & Iron',
      'Silent Study Lounge',
      'Game & Social Lounge',
      'Generator Power Backup',
      'High-Speed Passenger Lift',
      'Attached Washrooms with Geysers',
      'Open Sky Rooftop Terrace',
      'Fire Safety Compliance',
      'Two-Wheeler Covered Parking'
    ],
    landmarks: [
      { name: 'Lifecare Hospital (Opposite)', category: 'hospital', distanceKm: '0.05 km', travelTime: '1 min walk' },
      { name: 'Naranpura BRTS Bus Stop', category: 'transit', distanceKm: '0.3 km', travelTime: '4 min walk' },
      { name: 'Gujarat University Campus', category: 'college', distanceKm: '2.4 km', travelTime: '7 min drive' },
      { name: 'Mount Carmel School / College', category: 'college', distanceKm: '2.8 km', travelTime: '8 min drive' },
      { name: 'Usmanpura Metro Station', category: 'transit', distanceKm: '1.6 km', travelTime: '5 min drive' },
      { name: 'Navrangpura Commercial Hub', category: 'shopping', distanceKm: '1.9 km', travelTime: '6 min drive' }
    ],
    hasActualPhotos: true,
    images: [
      {
        src: '/images/pgs/luxora-girls-1/luxora-girls-1-hero.webp',
        alt: 'Luxora Girls PG 1 Exterior facade at Sardar Patel Statue Circle Naranpura',
        category: 'hero',
        isHero: true
      },
      {
        src: '/images/pgs/luxora-girls-1/luxora-girls-1-bedroom-01.webp',
        alt: 'Luxora Girls PG 1 2-sharing air-conditioned bedroom with pristine beds',
        category: 'bedroom'
      },
      {
        src: '/images/pgs/luxora-girls-1/luxora-girls-1-bedroom-02.webp',
        alt: 'Luxora Girls PG 1 multi-sharing room with private wardrobes',
        category: 'bedroom'
      },
      {
        src: '/images/pgs/luxora-girls-1/luxora-girls-1-bathroom-01.webp',
        alt: 'Luxora Girls PG 1 sparkling clean attached washroom with geyser',
        category: 'bathroom'
      },
      {
        src: '/images/pgs/luxora-girls-1/luxora-girls-1-terrace-01.webp',
        alt: 'Luxora Girls PG 1 panoramic rooftop terrace and garden view',
        category: 'terrace'
      },
      {
        src: '/images/pgs/luxora-girls-1/luxora-girls-1-common-area-01.webp',
        alt: 'Luxora Girls PG 1 common reception, warden station and study space',
        category: 'common'
      }
    ],
    branchReviews: [
      {
        name: 'Pooja Trivedi (Parent)',
        role: 'Mother of Resident Student',
        rating: 5,
        text: 'As a parent sending my daughter from Surat to Ahmedabad for higher studies, security was my #1 concern. Luxora Girls PG in Naranpura gives me complete peace of mind. Biometric fingerprint entry, 24/7 CCTV, and female warden care are exceptional.',
        stayDuration: 'Resident parent'
      },
      {
        name: 'Ananya Deshmukh',
        role: 'Gujarat University M.Sc Student',
        rating: 5,
        text: 'Very quiet and peaceful atmosphere. The terrace is great for evening walks, rooms are large with good ventilation, and food is genuinely homely.',
        stayDuration: 'Staying since 1 year'
      }
    ],
    seo: {
      metaTitle: 'Luxora Girls PG 1 Naranpura Ahmedabad | Safe Luxury PG for Women',
      metaDescription: 'Safest luxury girls PG in Naranpura near Sardar Patel Statue Circle. 4 meals, biometric security, AC rooms, 150 Mbps Wi-Fi, near Gujarat University.',
      keywords: ['Luxora Girls PG Naranpura', 'Safe Girls PG Ahmedabad', 'Luxury PG for women Ahmedabad', 'Girls PG near Gujarat University', 'PG opposite Lifecare Hospital']
    }
  },

  // 3. SORATH BOYS PG 1
  {
    id: 'sorath-boys-1',
    slug: 'sorath-boys-1',
    name: 'Sorath Boys PG 1',
    brand: 'SORATH',
    gender: 'BOYS',
    badgeTagline: 'Clean, Smart & Budget-Friendly Boys PG at Ajay Center',
    priceRangeDisplay: '₹8,500 – ₹10,500 / mo',
    minPrice: 8500,
    maxPrice: 10500,
    address: 'Ajay Center, Vijay Cross Rd, Panna Park Society, Sarvottam Nagar Society, Navrangpura',
    area: 'Navrangpura / Vijay Cross Road',
    city: 'Ahmedabad',
    pincode: '380009',
    landmark: 'Ajay Center, Vijay Cross Road',
    mapUrl: 'https://www.google.com/maps/place/Sorath+Boys+Pg/data=!4m7!3m6!1s0x395e854bdaa13459:0x4f09129a7da70896!8m2!3d23.0435268!4d72.551469!16s%2Fg%2F11nr8xwh7p!19sChIJWTSh2kuFXjkRlginfZoSCU8?authuser=0&hl=en&g_ep=EgoyMDI2MTAxOC4wIJJjKgBIAVAD&rclk=1',
    embedMapQuery: 'Ajay+Center+Vijay+Cross+Road+Navrangpura+Ahmedabad',
    mapCoordinates: { lat: 23.0435, lng: 72.5515 },
    overview: 'Sorath Boys PG 1 is located at Ajay Center on Vijay Cross Road in Navrangpura — the epicenter of student life in Ahmedabad. Walking distance to Gujarat University, CEPT, and the BRTS transit network, it provides budget-conscious students with high standards of cleanliness, 3 nutritious home-style meals, 150 Mbps Wi-Fi, and 24-hour security.',
    highlights: [
      'Epicenter location: Vijay Cross Road (walking distance to colleges)',
      '3-time nutritious Gujarati/North Indian meals (Breakfast, Lunch, Dinner)',
      'Both AC and Non-AC room options to suit every budget',
      'High-speed 150 Mbps Wi-Fi for academic studies & coding',
      '24-Hour security guard, CCTV, lift access & daily housekeeping',
      'Washing machine, laundry area & pure RO drinking water'
    ],
    pros: [
      'Epicenter location directly at Ajay Center on Vijay Cross Road',
      'Walk to Gujarat University & CEPT in under 10 minutes',
      'Budget tariffs starting from only ₹8,500/month with 3 meals included',
      'Both AC and Non-AC room tiers to fit every student budget',
      'Super-fast 150 Mbps Wi-Fi for academic lectures and coding',
      'Elevator access and round-the-clock caretaker supervision'
    ],
    hygieneFeatures: [
      'Daily morning room sweeping and garbage disposal',
      'Sanitized washrooms with regular disinfectant cleaning',
      'High-capacity RO drinking water station on every floor',
      'In-house clean kitchen with fresh daily groceries'
    ],
    mealsIncluded: '3-Time Wholesome Meals: Breakfast, Lunch & Dinner',
    foodMenuHighlights: [
      { meal: 'Breakfast', items: 'Poha with Sev / Methi Thepla with Pickle & Hot Masala Tea' },
      { meal: 'Lunch', items: 'Gujarati Dal, Steamed Rice, Seasonal Sabzi, Hot Rotis & Chhaas' },
      { meal: 'Dinner', items: 'Sev Tameta Nu Shaak / Aloo Matar, Dal Tadka, Steamed Rice & Hot Phulkas' }
    ],
    roomOptions: [
      {
        sharing: 5,
        sharingLabel: '5 Sharing Non-AC',
        type: 'NON_AC',
        priceMonthly: 8500,
        priceDisplay: '₹8,500 / mo',
        notes: 'Budget-friendly Non-AC room with individual cot, mattress & locker',
        image: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-05.webp'
      },
      {
        sharing: 4,
        sharingLabel: '4 Sharing Non-AC',
        type: 'NON_AC',
        priceMonthly: 9000,
        priceDisplay: '₹9,000 / mo',
        notes: 'Well-ventilated room with ample natural lighting & personal wardrobe',
        image: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-06.webp'
      },
      {
        sharing: 5,
        sharingLabel: '5 Sharing AC',
        type: 'AC',
        priceMonthly: 9500,
        priceDisplay: '₹9,500 / mo',
        notes: 'Affordable air-conditioned room with 3 meals & Wi-Fi',
        image: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-01.webp'
      },
      {
        sharing: 4,
        sharingLabel: '4 Sharing AC',
        type: 'AC',
        priceMonthly: 9500,
        priceDisplay: '₹9,500 / mo',
        notes: 'Comfortable air-conditioned sharing with attached washroom access',
        image: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-04.webp'
      },
      {
        sharing: 2,
        sharingLabel: '2 Sharing AC Room',
        type: 'AC',
        priceMonthly: 10000,
        priceDisplay: '₹10,000 / mo',
        notes: 'Semi-private 2-sharing room with air conditioner & study table',
        image: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-02.webp'
      },
      {
        sharing: 3,
        sharingLabel: '3 Sharing Deluxe AC',
        type: 'AC',
        priceMonthly: 10500,
        priceDisplay: '₹10,500 / mo',
        notes: 'Top-tier 3-sharing AC room with premium ventilation and wardrobes',
        image: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-03.webp'
      }
    ],
    amenities: [
      '3-Time Wholesome Meals',
      'AC & Non-AC Room Choices',
      '150 Mbps High-Speed Wi-Fi',
      '24/7 Security & CCTV',
      'RO Clean Drinking Water',
      'Washing Machine & Laundry',
      'Two-Wheeler Parking',
      'Modern Lift Access',
      'Hot Water Geyser & Showers',
      'Steam Iron Facility',
      'Fire Safety Equipment',
      'Daily Room Housekeeping'
    ],
    landmarks: [
      { name: 'Vijay Cross Road BRTS', category: 'transit', distanceKm: '0.1 km', travelTime: '2 min walk' },
      { name: 'Gujarat University', category: 'college', distanceKm: '0.9 km', travelTime: '10 min walk' },
      { name: 'CEPT University', category: 'college', distanceKm: '1.1 km', travelTime: '12 min walk' },
      { name: 'LD College of Engineering', category: 'college', distanceKm: '1.4 km', travelTime: '5 min drive' },
      { name: 'Navrangpura Metro Station', category: 'transit', distanceKm: '1.2 km', travelTime: '4 min drive' },
      { name: 'Ahmedabad One Mall (Alpha One)', category: 'shopping', distanceKm: '2.5 km', travelTime: '8 min drive' }
    ],
    hasActualPhotos: true,
    images: [
      {
        src: '/images/pgs/sorath-boys-1/sorath-boys-1-hero.webp',
        alt: 'Sorath Boys PG 1 Exterior entrance at Ajay Center Vijay Cross Road',
        category: 'hero',
        isHero: true
      },
      {
        src: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-01.webp',
        alt: 'Sorath Boys PG 1 neat and spacious bedroom with individual study desks',
        category: 'bedroom'
      },
      {
        src: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-02.webp',
        alt: 'Sorath Boys PG 1 room setup with cupboards and clean bedding',
        category: 'bedroom'
      },
      {
        src: '/images/pgs/sorath-boys-1/sorath-boys-1-common-area-01.webp',
        alt: 'Sorath Boys PG 1 common foyer and entrance reception',
        category: 'common'
      }
    ],
    branchReviews: [
      {
        name: 'Keval Patel',
        role: 'Gujarat University M.Com Student',
        rating: 5,
        text: 'Sorath Boys PG 1 at Ajay Center is right on Vijay Cross Road. I walk to Gujarat University in under 10 minutes. At ₹8,500 to ₹10,000 with 3 hot meals included, it is the best value student PG in Navrangpura. Clean washrooms and fast internet!',
        stayDuration: 'Staying since 8 months'
      },
      {
        name: 'Vivek Joshi',
        role: 'CA Foundation Student',
        rating: 5,
        text: 'Great crowd of focused students. Vijay Cross Road BRTS is just outside the gate so coaching transit is instant.',
        stayDuration: 'Resident for 6 months'
      }
    ],
    seo: {
      metaTitle: 'Sorath Boys PG 1 Vijay Cross Road Navrangpura | Budget PG Ahmedabad',
      metaDescription: 'Affordable, clean Boys PG at Ajay Center, Vijay Cross Road. 3 meals, AC/Non-AC, 150 Mbps Wi-Fi, walking distance to Gujarat University & CEPT.',
      keywords: ['Sorath Boys PG Vijay Cross Road', 'Budget PG Navrangpura', 'Boys PG near CEPT Ahmedabad', 'PG near Gujarat University', 'Sorath PG Ahmedabad']
    }
  },

  // 4. SORATH BOYS PG 2
  {
    id: 'sorath-boys-2',
    slug: 'sorath-boys-2',
    name: 'Sorath Boys PG 2',
    brand: 'SORATH',
    gender: 'BOYS',
    badgeTagline: 'Convenient Living Near Memnagar Fire Station',
    priceRangeDisplay: '₹8,500 – ₹10,000 / mo',
    minPrice: 8500,
    maxPrice: 10000,
    address: 'Pallavi Tower 1, Memnagar Fire Station Vijay Char Rasta, Navrangpura',
    area: 'Navrangpura / Memnagar Road',
    city: 'Ahmedabad',
    pincode: '380009',
    landmark: 'Memnagar Fire Station, Pallavi Tower 1',
    mapUrl: 'https://maps.app.goo.gl/LULdgp6zebYxpPvi8?g_st=iw',
    embedMapQuery: 'Pallavi+Tower+1+Memnagar+Fire+Station+Navrangpura+Ahmedabad',
    mapCoordinates: { lat: 23.0448, lng: 72.5488 },
    overview: 'Sorath Boys PG 2 is situated inside the well-known Pallavi Tower 1 near Memnagar Fire Station at Vijay Char Rasta. Enjoy seamless access to public transport, library clusters, and dining joints, backed by 3 home-cooked meals every day, 150 Mbps high-speed internet, and dedicated facility supervision.',
    highlights: [
      'Strategic location at Pallavi Tower 1 near Memnagar Fire Station',
      '3-time home-style wholesome meals included in monthly rent',
      'AC & Non-AC sharing configurations starting from ₹8,500/mo',
      '150 Mbps optical fiber Wi-Fi throughout all rooms',
      '24/7 on-site caretaker, CCTV surveillance & secure parking',
      'RO water purification, automatic lift & washing machine'
    ],
    pros: [
      'Prime Pallavi Tower 1 location near Memnagar Fire Station BRTS',
      '3 hot wholesome meals included every single day with zero meal cutoffs',
      'Non-AC & AC sharing tiers starting from just ₹8,500/month',
      'Dedicated covered parking and automatic high-speed lift',
      '150 Mbps optical fiber Wi-Fi for studies and remote work'
    ],
    hygieneFeatures: [
      'Daily morning room sweeping and tidying',
      'Sanitized washrooms with geyser facilities and regular cleaning',
      'RO drinking water filtration unit with certified filters'
    ],
    mealsIncluded: '3-Time Wholesome Meals: Breakfast, Lunch & Dinner',
    foodMenuHighlights: [
      { meal: 'Breakfast', items: 'Hot Poha / Upma / Thepla with Masala Tea' },
      { meal: 'Lunch', items: 'Homely Gujarati Dal, Rice, Fresh Sabzi & Hot Phulka Rotis' },
      { meal: 'Dinner', items: 'Dal Fry, Jeera Rice, Vegetable Curry & Phulkas' }
    ],
    roomOptions: [
      {
        sharing: 5,
        sharingLabel: '5 Sharing Non-AC',
        type: 'NON_AC',
        priceMonthly: 8500,
        priceDisplay: '₹8,500 / mo',
        notes: 'Economical Non-AC room with individual bed, mattress and locker',
        image: '/images/pgs/sorath-boys-3/sorath-boys-3-bedroom-01.webp'
      },
      {
        sharing: 4,
        sharingLabel: '4 Sharing Non-AC',
        type: 'NON_AC',
        priceMonthly: 9000,
        priceDisplay: '₹9,000 / mo',
        notes: 'Spacious Non-AC room with dedicated wardrobes',
        image: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-01.webp'
      },
      {
        sharing: 2,
        sharingLabel: '2 Sharing Non-AC',
        type: 'NON_AC',
        priceMonthly: 9000,
        priceDisplay: '₹9,000 / mo',
        notes: 'Cozy 2-sharing room offering quiet study environment',
        image: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-02.webp'
      },
      {
        sharing: 3,
        sharingLabel: '3 Sharing AC Room',
        type: 'AC',
        priceMonthly: 10000,
        priceDisplay: '₹10,000 / mo',
        notes: 'Air-conditioned 3-sharing room with modern cooling',
        image: '/images/pgs/sorath-boys-3/sorath-boys-3-bedroom-01.webp'
      }
    ],
    amenities: [
      '3-Time Wholesome Meals',
      'AC & Non-AC Rooms',
      '150 Mbps High-Speed Wi-Fi',
      '24/7 Security Guard & CCTV',
      'RO Drinking Water',
      'Washing Machine & Laundry Space',
      'Covered Parking',
      'High-Speed Lift',
      'Geyser & Modern Washrooms',
      'Iron Facility',
      'Fire Safety Compliance'
    ],
    landmarks: [
      { name: 'Memnagar Fire Station BRTS', category: 'transit', distanceKm: '0.15 km', travelTime: '2 min walk' },
      { name: 'Vijay Cross Road', category: 'transit', distanceKm: '0.4 km', travelTime: '5 min walk' },
      { name: 'Gujarat University', category: 'college', distanceKm: '1.2 km', travelTime: '4 min drive' },
      { name: 'HL College of Commerce', category: 'college', distanceKm: '1.5 km', travelTime: '5 min drive' },
      { name: 'Ahmedabad One Mall', category: 'shopping', distanceKm: '2.0 km', travelTime: '6 min drive' }
    ],
    hasActualPhotos: true,
    images: [
      {
        src: '/images/pgs/sorath-boys-3/sorath-boys-3-hero.webp',
        alt: 'Sorath Boys PG 2 Pallavi Tower building facade',
        category: 'hero',
        isHero: true
      },
      {
        src: '/images/pgs/sorath-boys-3/sorath-boys-3-bedroom-01.webp',
        alt: 'Sorath Boys PG 2 comfortable bedroom with beds and study table',
        category: 'bedroom'
      },
      {
        src: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-02.webp',
        alt: 'Sorath Boys PG 2 clean room setup with lockers',
        category: 'bedroom'
      },
      {
        src: '/images/pgs/sorath-boys-3/sorath-boys-3-bathroom-01.webp',
        alt: 'Sorath Boys PG 2 clean bathroom with geyser',
        category: 'bathroom'
      }
    ],
    branchReviews: [
      {
        name: 'Bhavin Vaghela',
        role: 'HL College of Commerce Student',
        rating: 5,
        text: 'Very peaceful PG in Pallavi Tower. Food is fresh and always served hot. Dhaval Bhai responds immediately to any maintenance request.',
        stayDuration: 'Resident for 7 months'
      },
      {
        name: 'Nikhil Parmar',
        role: 'IT Professional (Navrangpura)',
        rating: 5,
        text: 'Best budget living near Vijay Char Rasta. Clean cots, fast internet, and zero hidden charges.',
        stayDuration: 'Resident for 9 months'
      }
    ],
    seo: {
      metaTitle: 'Sorath Boys PG 2 Pallavi Tower Navrangpura | Affordable Boys PG',
      metaDescription: 'Affordable boys PG at Pallavi Tower 1, Memnagar Fire Station Vijay Char Rasta. 3 meals, AC/Non-AC rooms, 150 Mbps Wi-Fi, near Vijay Cross Road.',
      keywords: ['Sorath Boys PG 2', 'PG Pallavi Tower Memnagar', 'Boys PG Vijay Char Rasta', 'Affordable PG Navrangpura']
    }
  },

  // 5. SORATH BOYS PG 3
  {
    id: 'sorath-boys-3',
    slug: 'sorath-boys-3',
    name: 'Sorath Boys PG 3',
    brand: 'SORATH',
    gender: 'BOYS',
    badgeTagline: 'Comfortable Student & Working Men Co-Living at Pallavi Tower',
    priceRangeDisplay: '₹8,500 – ₹10,500 / mo',
    minPrice: 8500,
    maxPrice: 10500,
    address: 'Pallavi Tower 1, Memnagar Fire Station Vijay Char Rasta, Navrangpura',
    area: 'Navrangpura / Memnagar Road',
    city: 'Ahmedabad',
    pincode: '380009',
    landmark: 'Pallavi Tower 1, Memnagar Fire Station',
    mapUrl: 'https://maps.app.goo.gl/LULdgp6zebYxpPvi8?g_st=iw',
    embedMapQuery: 'Pallavi+Tower+1+Memnagar+Fire+Station+Navrangpura+Ahmedabad',
    mapCoordinates: { lat: 23.0449, lng: 72.5489 },
    overview: 'Sorath Boys PG 3 delivers an optimal balance between affordability and comfort. Situated at Pallavi Tower 1, this unit offers multiple 3-sharing and 4-sharing room options with varied room tiers (Standard and Deluxe), allowing residents to choose the exact setup that fits their lifestyle and monthly budget.',
    highlights: [
      'Versatile room tiers with Standard & Deluxe room layouts',
      '3-time freshly cooked hygienic meals prepared in clean kitchen',
      'Super-fast 150 Mbps fiber internet for uninterrupted studies',
      'Walking distance to coaching centers, reading libraries & BRTS',
      'Round-the-clock security, CCTV monitoring & clean washrooms',
      'Elevator access, laundry washing machine & RO water filter'
    ],
    pros: [
      'Pallavi Tower 1 location with Standard and Deluxe room tiers',
      'Deluxe options with attached washroom and extra ventilation',
      '3-time home-style meals with unlimited rotis & sabzi',
      'Direct elevator access to all resident floors',
      'Surrounded by student libraries and reading halls'
    ],
    hygieneFeatures: [
      'Daily professional floor cleaning',
      'Sanitized washrooms with geysers',
      'RO pure water dispenser'
    ],
    mealsIncluded: '3-Time Wholesome Meals: Breakfast, Lunch & Dinner',
    foodMenuHighlights: [
      { meal: 'Breakfast', items: 'Thepla, Poha, Curd & Hot Morning Tea' },
      { meal: 'Lunch', items: 'Gujarati Dal-Rice, Seasonal Vegetable, Rotis & Buttermilk' },
      { meal: 'Dinner', items: 'Kadhi-Khichdi / Dal Tadka, Sabzi & Soft Phulkas' }
    ],
    roomOptions: [
      {
        sharing: 5,
        sharingLabel: '5 Sharing Non-AC Standard',
        type: 'NON_AC',
        priceMonthly: 8500,
        priceDisplay: '₹8,500 / mo',
        notes: 'Value-packed 5-sharing non-AC accommodation',
        image: '/images/pgs/sorath-boys-3/sorath-boys-3-bedroom-01.webp'
      },
      {
        sharing: 4,
        sharingLabel: '4 Sharing Non-AC Classic',
        type: 'NON_AC',
        priceMonthly: 9000,
        priceDisplay: '₹9,000 / mo',
        notes: 'Spacious 4-sharing non-AC room with natural breeze',
        image: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-02.webp'
      },
      {
        sharing: 4,
        sharingLabel: '4 Sharing AC Room',
        type: 'AC',
        priceMonthly: 9000,
        priceDisplay: '₹9,000 / mo',
        notes: 'Special value 4-sharing AC room with quiet study vibe',
        image: '/images/pgs/sorath-boys-3/sorath-boys-3-bedroom-01.webp'
      },
      {
        sharing: 3,
        sharingLabel: '3 Sharing Non-AC (Tier A)',
        type: 'NON_AC',
        priceMonthly: 9500,
        priceDisplay: '₹9,500 / mo',
        notes: 'Standard 3-sharing non-AC with individual lockers',
        image: '/images/pgs/sorath-boys-3/sorath-boys-3-bedroom-01.webp'
      },
      {
        sharing: 3,
        sharingLabel: '3 Sharing Non-AC (Deluxe)',
        type: 'NON_AC',
        priceMonthly: 10000,
        priceDisplay: '₹10,000 / mo',
        notes: 'Deluxe large 3-sharing room with extra wardrobe space',
        image: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-01.webp'
      },
      {
        sharing: 3,
        sharingLabel: '3 Sharing AC (Standard)',
        type: 'AC',
        priceMonthly: 9500,
        priceDisplay: '₹9,500 / mo',
        notes: 'Affordable 3-sharing AC room tier',
        image: '/images/pgs/sorath-boys-3/sorath-boys-3-bedroom-01.webp'
      },
      {
        sharing: 3,
        sharingLabel: '3 Sharing AC (Deluxe)',
        type: 'AC',
        priceMonthly: 10500,
        priceDisplay: '₹10,500 / mo',
        notes: 'Top-floor 3-sharing AC suite with attached washroom & balcony',
        image: '/images/pgs/sorath-boys-3/sorath-boys-3-bedroom-01.webp'
      }
    ],
    amenities: [
      '3-Time Wholesome Meals',
      'AC & Non-AC Room Tiers',
      '150 Mbps High-Speed Wi-Fi',
      '24/7 Security & CCTV',
      'RO Clean Drinking Water',
      'Washing Machine & Laundry',
      'Vehicle Parking',
      'Lift Service',
      'Geyser in Washrooms',
      'Iron Facility',
      'Fire Safety Equipment'
    ],
    landmarks: [
      { name: 'Memnagar Fire Station BRTS', category: 'transit', distanceKm: '0.15 km', travelTime: '2 min walk' },
      { name: 'Vijay Cross Road', category: 'transit', distanceKm: '0.4 km', travelTime: '5 min walk' },
      { name: 'Gujarat University', category: 'college', distanceKm: '1.2 km', travelTime: '4 min drive' },
      { name: 'CEPT University', category: 'college', distanceKm: '1.5 km', travelTime: '5 min drive' },
      { name: 'Subhash Bridge RTO Circle', category: 'transit', distanceKm: '3.8 km', travelTime: '10 min drive' }
    ],
    hasActualPhotos: true,
    images: [
      {
        src: '/images/pgs/sorath-boys-3/sorath-boys-3-hero.webp',
        alt: 'Sorath Boys PG 3 Room setup at Pallavi Tower 1',
        category: 'hero',
        isHero: true
      },
      {
        src: '/images/pgs/sorath-boys-3/sorath-boys-3-bedroom-01.webp',
        alt: 'Sorath Boys PG 3 clean 3-sharing bedroom with wardrobes and cot',
        category: 'bedroom'
      },
      {
        src: '/images/pgs/sorath-boys-3/sorath-boys-3-bathroom-01.webp',
        alt: 'Sorath Boys PG 3 hygienic bathroom with geyser heater',
        category: 'bathroom'
      }
    ],
    branchReviews: [
      {
        name: 'Hardik Solanki',
        role: 'Tech Executive (C.G. Road)',
        rating: 5,
        text: 'I stayed at Pallavi Tower for over a year while working in Navrangpura. Clean rooms, reliable power, washing machine, and hot water every morning. The management (Dhaval Bhai & Babu Bhai) are always responsive on WhatsApp.',
        stayDuration: 'Staying since 14 months'
      }
    ],
    seo: {
      metaTitle: 'Sorath Boys PG 3 Navrangpura Ahmedabad | AC & Non-AC Student PG',
      metaDescription: 'Clean student & corporate PG at Pallavi Tower 1, Vijay Char Rasta. 3 meals included, 150 Mbps Wi-Fi, flexible 3 and 4 sharing AC/Non-AC options.',
      keywords: ['Sorath Boys PG 3', 'PG in Pallavi Tower Ahmedabad', 'Student PG Vijay Cross Road', 'PG near CEPT University']
    }
  },

  // 6. SORATH BOYS PG 4
  {
    id: 'sorath-boys-4',
    slug: 'sorath-boys-4',
    name: 'Sorath Boys PG 4',
    brand: 'SORATH',
    gender: 'BOYS',
    badgeTagline: 'Affordable & High-Value Student Stays at Pallavi Tower',
    priceRangeDisplay: '₹8,500 – ₹9,500 / mo',
    minPrice: 8500,
    maxPrice: 9500,
    address: 'Pallavi Tower 1, Memnagar Fire Station Vijay Char Rasta, Navrangpura',
    area: 'Navrangpura / Memnagar Road',
    city: 'Ahmedabad',
    pincode: '380009',
    landmark: 'Pallavi Tower 1, Memnagar Fire Station',
    mapUrl: 'https://maps.app.goo.gl/LULdgp6zebYxpPvi8?g_st=iw',
    embedMapQuery: 'Pallavi+Tower+1+Memnagar+Fire+Station+Navrangpura+Ahmedabad',
    mapCoordinates: { lat: 23.0450, lng: 72.5490 },
    overview: 'Sorath Boys PG 4 is designed specifically for students who prioritize strict budget control without sacrificing meal nutrition, safety, or cleanliness. Providing 3 wholesome meals every single day and blazing-fast 150 Mbps Wi-Fi, this property is situated right at Pallavi Tower 1 near Vijay Char Rasta.',
    highlights: [
      'Unmatched budget rates starting from just ₹8,500/month',
      '3 nutritious home-style meals included with zero meal cutoffs',
      '150 Mbps high-speed internet included in rent',
      'Immediate access to Memnagar Fire Station BRTS & transit',
      '24/7 CCTV surveillance, security caretaker & clean washrooms',
      'RO drinking water, daily housekeeping & laundry facilities'
    ],
    pros: [
      'Unmatched budget value starting at ₹8,500/month with 3 meals included',
      'Corner layout rooms with excellent natural air circulation',
      'Super-fast 150 Mbps optical fiber internet included in rent',
      '2 minutes walk to Memnagar Fire Station BRTS bus stand',
      'Laundry washing machine and RO water provided free of charge'
    ],
    hygieneFeatures: [
      'Daily room housekeeping',
      'Clean washrooms and timely garbage disposal',
      'RO treated water station'
    ],
    mealsIncluded: '3-Time Wholesome Meals: Breakfast, Lunch & Dinner',
    foodMenuHighlights: [
      { meal: 'Breakfast', items: 'Poha with Sev / Thepla & Tea' },
      { meal: 'Lunch', items: 'Dal, Rice, Sabzi & Hot Phulka Rotis' },
      { meal: 'Dinner', items: 'Fresh Vegetable Sabzi, Dal Tadka, Steamed Rice & Rotis' }
    ],
    roomOptions: [
      {
        sharing: 5,
        sharingLabel: '5 Sharing Non-AC (Layout A)',
        type: 'NON_AC',
        priceMonthly: 8500,
        priceDisplay: '₹8,500 / mo',
        notes: 'Value-oriented 5-sharing room with individual storage',
        image: '/images/pgs/sorath-boys-3/sorath-boys-3-bedroom-01.webp'
      },
      {
        sharing: 5,
        sharingLabel: '5 Sharing Non-AC (Layout B)',
        type: 'NON_AC',
        priceMonthly: 8500,
        priceDisplay: '₹8,500 / mo',
        notes: 'Spacious corner layout 5-sharing setup',
        image: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-01.webp'
      },
      {
        sharing: 3,
        sharingLabel: '3 Sharing Non-AC Room',
        type: 'NON_AC',
        priceMonthly: 9500,
        priceDisplay: '₹9,500 / mo',
        notes: 'Quiet 3-sharing room designed for study focus',
        image: '/images/pgs/sorath-boys-3/sorath-boys-3-bedroom-01.webp'
      }
    ],
    amenities: [
      '3-Time Wholesome Meals',
      '150 Mbps Fiber Wi-Fi',
      '24/7 Security & CCTV',
      'RO Clean Drinking Water',
      'Washing Machine & Laundry Area',
      'Two-Wheeler Parking',
      'Elevator / Lift',
      'Geyser & Water Heaters',
      'Iron Facility',
      'Fire Safety Equipment',
      'Daily Housekeeping'
    ],
    landmarks: [
      { name: 'Memnagar Fire Station BRTS', category: 'transit', distanceKm: '0.15 km', travelTime: '2 min walk' },
      { name: 'Vijay Cross Road', category: 'transit', distanceKm: '0.4 km', travelTime: '5 min walk' },
      { name: 'Gujarat University', category: 'college', distanceKm: '1.2 km', travelTime: '4 min drive' },
      { name: 'St. Xavier’s College', category: 'college', distanceKm: '2.2 km', travelTime: '7 min drive' }
    ],
    hasActualPhotos: true,
    images: [
      {
        src: '/images/pgs/sorath-boys-3/sorath-boys-3-hero.webp',
        alt: 'Sorath Boys PG 4 Pallavi Tower 1 co-living spaces',
        category: 'hero',
        isHero: true
      },
      {
        src: '/images/pgs/sorath-boys-3/sorath-boys-3-bedroom-01.webp',
        alt: 'Sorath Boys PG 4 student bedroom with individual storage',
        category: 'bedroom'
      },
      {
        src: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-01.webp',
        alt: 'Sorath Boys PG 4 airy room layout',
        category: 'bedroom'
      }
    ],
    branchReviews: [
      {
        name: 'Chirag Dave',
        role: 'Gujarat University Student',
        rating: 5,
        text: 'At 8,500 with 3 meals included, it cannot be beaten in Navrangpura. Safe, hygienic, and right by BRTS.',
        stayDuration: 'Staying since 5 months'
      }
    ],
    seo: {
      metaTitle: 'Sorath Boys PG 4 Navrangpura Ahmedabad | Budget Student Accommodation',
      metaDescription: 'Super affordable boys PG in Navrangpura Ahmedabad from ₹8,500/mo. Includes 3 meals, 150 Mbps Wi-Fi, lift, security, near Vijay Cross Road.',
      keywords: ['Sorath Boys PG 4', 'Low budget PG Navrangpura', 'Boys PG Ahmedabad 8500', 'Student hostel Vijay Char Rasta']
    }
  },

  // 7. SORATH GIRLS PG 1
  {
    id: 'sorath-girls-1',
    slug: 'sorath-girls-1',
    name: 'Sorath Girls PG 1',
    brand: 'SORATH',
    gender: 'GIRLS',
    badgeTagline: 'Safe, Peaceful & Budget-Friendly Girls Co-Living Beside Maharaja Palace',
    priceRangeDisplay: '₹9,500 – ₹14,000 / mo',
    minPrice: 9500,
    maxPrice: 14000,
    address: '01, Sorath PG, beside Maharaja Palace, Vijay Cross Road, Navrangpura',
    area: 'Navrangpura / Vijay Cross Road',
    city: 'Ahmedabad',
    pincode: '380009',
    landmark: 'Beside Maharaja Palace, Vijay Cross Road',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=23.040778,72.547222',
    embedMapQuery: 'Maharaja+Palace+Vijay+Cross+Road+Navrangpura+Ahmedabad',
    mapCoordinates: { lat: 23.0408, lng: 72.5472 },
    overview: 'Sorath Girls PG 1 offers girls studying or working in Ahmedabad a safe, highly hygienic, and family-trusted living environment right beside Maharaja Palace on Vijay Cross Road. With both economical Non-AC and fully air-conditioned rooms (including dedicated lift access options), 3 home-style meals, and 24/7 CCTV surveillance, female residents enjoy comfort with total peace of mind.',
    highlights: [
      'Prime, safe location beside Maharaja Palace on Vijay Cross Road',
      '3-time nutritious, hygienic home-style meals prepared daily',
      'Flexible room options: Non-AC from ₹9,500 and AC up to ₹14,000',
      'Options with dedicated lift access for ease of mobility',
      'Female-friendly gated security, 24/7 CCTV & caretaker presence',
      'High-speed 150 Mbps Wi-Fi, laundry facilities & geyser-equipped baths'
    ],
    pros: [
      'Prime, ultra-safe location beside Maharaja Palace on Vijay Cross Road',
      'Walking distance to Gujarat University (800m) & CEPT (1.0 km)',
      'Direct automatic lift access for upper floor rooms',
      '24/7 CCTV surveillance and female caretaker supervision',
      '3 wholesome home-cooked meals every day included in rent',
      'Both budget Non-AC and cool AC room choices available'
    ],
    hygieneFeatures: [
      'Daily room sweeping, mopping, and waste clearance',
      'Clean washrooms with hot water geysers and daily sanitization',
      'Pure RO drinking water dispenser on site',
      'Hygienic kitchen with all-female mess staff'
    ],
    mealsIncluded: '3-Time Wholesome Meals: Breakfast, Lunch & Dinner',
    foodMenuHighlights: [
      { meal: 'Breakfast', items: 'Methi Thepla with Pickle, Poha, Curd & Masala Tea' },
      { meal: 'Lunch', items: 'Gujarati Dal, Steamed Rice, Ringan/Bataka Nu Shaak, Hot Rotis & Chhaas' },
      { meal: 'Dinner', items: 'Sev Tameta / Aloo Matar, Dal Tadka, Jeera Rice & Soft Phulkas' }
    ],
    roomOptions: [
      {
        sharing: 4,
        sharingLabel: '4 Sharing Non-AC',
        type: 'NON_AC',
        priceMonthly: 9500,
        priceDisplay: '₹9,500 / mo',
        notes: 'Well-ventilated 4-bed non-AC room with individual study and locker space',
        image: '/images/pgs/sorath-girls-1/sorath-girls-1-bedroom-01.webp'
      },
      {
        sharing: 3,
        sharingLabel: '3 Sharing Non-AC',
        type: 'NON_AC',
        priceMonthly: 9500,
        priceDisplay: '₹9,500 / mo',
        notes: 'Comfortable 3-bed non-AC room with natural lighting',
        image: '/images/pgs/sorath-girls-1/sorath-girls-1-bedroom-02.webp'
      },
      {
        sharing: 4,
        sharingLabel: '4 Sharing AC (Standard)',
        type: 'AC',
        priceMonthly: 11500,
        priceDisplay: '₹11,500 / mo',
        notes: 'Air-conditioned 4-sharing room with modern cooling',
        image: '/images/pgs/sorath-girls-1/sorath-girls-1-bedroom-03.webp'
      },
      {
        sharing: 4,
        sharingLabel: '4 Sharing AC (Lift Access)',
        type: 'AC',
        priceMonthly: 12500,
        priceDisplay: '₹12,500 / mo',
        notes: 'Upper-floor AC room with direct automatic lift access',
        image: '/images/pgs/sorath-girls-1/sorath-girls-1-bedroom-01.webp'
      },
      {
        sharing: 2,
        sharingLabel: '2 Sharing AC Suite',
        type: 'AC',
        priceMonthly: 14000,
        priceDisplay: '₹14,000 / mo',
        notes: 'Semi-private 2-sharing air-conditioned suite with attached bath',
        image: '/images/pgs/sorath-girls-1/sorath-girls-1-bedroom-02.webp'
      }
    ],
    amenities: [
      '3-Time Wholesome Meals',
      'AC & Non-AC Room Options',
      '150 Mbps High-Speed Wi-Fi',
      'Female Security & CCTV 24/7',
      'RO Clean Drinking Water',
      'Washing Machine & Laundry',
      'Safe Two-Wheeler Parking',
      'Automatic Lift Access',
      'Geysers in All Washrooms',
      'Steam Iron Facility',
      'Fire Safety Compliance',
      'Daily Cleaning & Sanitization'
    ],
    landmarks: [
      { name: 'Vijay Cross Road BRTS', category: 'transit', distanceKm: '0.2 km', travelTime: '3 min walk' },
      { name: 'Gujarat University', category: 'college', distanceKm: '0.8 km', travelTime: '9 min walk' },
      { name: 'CEPT University', category: 'college', distanceKm: '1.0 km', travelTime: '11 min walk' },
      { name: 'LD College of Engineering', category: 'college', distanceKm: '1.3 km', travelTime: '4 min drive' },
      { name: 'Navrangpura Metro Station', category: 'transit', distanceKm: '1.1 km', travelTime: '4 min drive' },
      { name: 'Maharaja Palace Landmark', category: 'shopping', distanceKm: '0.05 km', travelTime: '1 min walk' }
    ],
    hasActualPhotos: true,
    images: [
      {
        src: '/images/pgs/sorath-girls-1/sorath-girls-1-hero.webp',
        alt: 'Sorath Girls PG 1 Exterior facade beside Maharaja Palace Vijay Cross Road',
        category: 'hero',
        isHero: true
      },
      {
        src: '/images/pgs/sorath-girls-1/sorath-girls-1-bedroom-01.webp',
        alt: 'Sorath Girls PG 1 neat and comfortable bedroom with sturdy beds',
        category: 'bedroom'
      },
      {
        src: '/images/pgs/sorath-girls-1/sorath-girls-1-bedroom-02.webp',
        alt: 'Sorath Girls PG 1 study area and tidy room setup',
        category: 'bedroom'
      },
      {
        src: '/images/pgs/sorath-girls-1/sorath-girls-1-bedroom-03.webp',
        alt: 'Sorath Girls PG 1 wardrobe and ventilation overview',
        category: 'bedroom'
      }
    ],
    branchReviews: [
      {
        name: 'Riddhi Shah',
        role: 'Chartered Accountant Aspirant',
        rating: 5,
        text: 'Located right beside Maharaja Palace on Vijay Cross Road, Sorath Girls PG 1 is very quiet and peaceful for studying. The lift makes daily movement effortless, the food is hygienic and homely, and the caretaker is very supportive.',
        stayDuration: 'Staying since 1 year'
      },
      {
        name: 'Megha Dave',
        role: 'CEPT Urban Design Student',
        rating: 5,
        text: 'Walking to CEPT in 10 minutes saves my day. Safe gated building, good crowd of girls, and reliable Wi-Fi.',
        stayDuration: 'Staying since 8 months'
      }
    ],
    seo: {
      metaTitle: 'Sorath Girls PG 1 Vijay Cross Road Ahmedabad | Safe Budget Girls PG',
      metaDescription: 'Trusted, secure and budget-friendly Girls PG beside Maharaja Palace, Vijay Cross Road. 3 meals, AC/Non-AC, lift, 150 Mbps Wi-Fi, near Gujarat University.',
      keywords: ['Sorath Girls PG Navrangpura', 'Girls PG Vijay Cross Road', 'Budget Girls PG Ahmedabad', 'Safe Girls PG near CEPT', 'Girls Hostel Maharaja Palace']
    }
  }
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}

export function getPropertiesByBrand(brand: 'LUXORA' | 'SORATH'): Property[] {
  return PROPERTIES.filter((p) => p.brand === brand);
}

export function getPropertiesByGender(gender: 'BOYS' | 'GIRLS'): Property[] {
  return PROPERTIES.filter((p) => p.gender === gender);
}
