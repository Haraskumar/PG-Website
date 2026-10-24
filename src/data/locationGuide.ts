export interface CollegeLocation {
  id: string;
  name: string;
  shortName: string;
  category: 'University' | 'Engineering' | 'Commerce' | 'Arts & Science' | 'CA / Professional';
  address: string;
  area: string;
  landmark: string;
  image: string;
  description: string;
  targetKeywords: string[];
  distanceFromSorath: string; // From Vijay Cross Road branches
  travelTimeSorath: string;
  distanceFromLuxora: string; // From Stadium Six Road branch
  travelTimeLuxora: string;
  bestSuitedPGs: { name: string; slug: string; gender: 'BOYS' | 'GIRLS'; walkingMinutes: number }[];
  googleMapUrl: string;
  coursesPopular: string[];
}

export interface MetroStationInfo {
  id: string;
  name: string;
  line: 'Red Line (North-South)' | 'Blue Line (East-West)' | 'Interchange (North-South & East-West)';
  lineColor: string;
  distanceFromLuxora: string;
  distanceFromSorath: string;
  walkingMinutesLuxora: number;
  walkingMinutesSorath: number;
  keyConnectivity: string;
  image?: string;
  description: string;
}

export interface BrtsStopInfo {
  id: string;
  name: string;
  corridor: string;
  proximityToPG: string;
  frequency: string;
  highlight: string;
}

export interface CityAttraction {
  id: string;
  name: string;
  category: 'Riverfront' | 'Architecture & Heritage' | 'Shopping & Street Food' | 'Campus Landmark';
  distanceFromPGs: string;
  travelTime: string;
  image: string;
  description: string;
  whyVisit: string;
  googleMapUrl: string;
}

export const COLLEGES_GUIDE: CollegeLocation[] = [
  {
    id: 'gujarat-university',
    name: 'Gujarat University (GU)',
    shortName: 'Gujarat University',
    category: 'University',
    address: 'Navrangpura, Ahmedabad, Gujarat 380009',
    area: 'Navrangpura / University Enclave',
    landmark: 'Near University Tower & Law Garden Area',
    image: '/images/guide/gujarat-university.jpg',
    description:
      'Gujarat University is the apex educational institution in Ahmedabad, sprawling across a lush 260-acre campus with over 300 affiliated colleges and departments including Sciences, Arts, Law, and Commerce.',
    targetKeywords: [
      'PG near Gujarat University Ahmedabad',
      'Boys PG near Gujarat University',
      'Girls PG near Gujarat University Navrangpura',
      'Gujarat University student accommodation'
    ],
    distanceFromSorath: '0.4 km',
    travelTimeSorath: '5 min walk',
    distanceFromLuxora: '1.8 km',
    travelTimeLuxora: '6 min drive',
    bestSuitedPGs: [
      { name: 'Sorath Boys PG 1 (Vijay Cross Rd)', slug: 'sorath-boys-1', gender: 'BOYS', walkingMinutes: 5 },
      { name: 'Sorath Girls PG 1 (Vijay Cross Rd)', slug: 'sorath-girls-1', gender: 'GIRLS', walkingMinutes: 5 },
      { name: 'Sorath Boys PG 4 (Memnagar / Vijay Char Rasta)', slug: 'sorath-boys-4', gender: 'BOYS', walkingMinutes: 8 },
      { name: 'Luxora Boys PG 1 (Stadium Six Rd)', slug: 'luxora-boys-1', gender: 'BOYS', walkingMinutes: 18 }
    ],
    googleMapUrl: 'https://maps.google.com/?q=Gujarat+University+Navrangpura+Ahmedabad',
    coursesPopular: ['M.Sc / B.Sc', 'Commerce & Law', 'Language Studies', 'MBA & MCA']
  },
  {
    id: 'ld-college',
    name: 'L.D. College of Engineering (LDCE)',
    shortName: 'LD College',
    category: 'Engineering',
    address: 'Opp. Gujarat University, Navrangpura, Ahmedabad, Gujarat 380015',
    area: 'Navrangpura',
    landmark: 'Opp. University Library, Near CEPT',
    image: '/images/guide/ld-college.jpg',
    description:
      'One of western India’s most prestigious state engineering institutions, LDCE is known for rigorous academics in Computer Engineering, Mechanical, Civil, Electrical, and Chemical disciplines.',
    targetKeywords: [
      'PG near LD College Ahmedabad',
      'Hostel near LD College of Engineering',
      'Boys PG near LD Engineering Navrangpura',
      'AC PG near LDCE Ahmedabad'
    ],
    distanceFromSorath: '1.0 km',
    travelTimeSorath: '8 min walk / 3 min bike',
    distanceFromLuxora: '2.1 km',
    travelTimeLuxora: '7 min drive',
    bestSuitedPGs: [
      { name: 'Sorath Boys PG 1 (Vijay Cross Rd)', slug: 'sorath-boys-1', gender: 'BOYS', walkingMinutes: 8 },
      { name: 'Sorath Girls PG 1 (Vijay Cross Rd)', slug: 'sorath-girls-1', gender: 'GIRLS', walkingMinutes: 8 },
      { name: 'Sorath Boys PG 2 & 3 (Memnagar Rd)', slug: 'sorath-boys-2', gender: 'BOYS', walkingMinutes: 10 },
      { name: 'Luxora Boys PG 1 (Stadium Six Rd)', slug: 'luxora-boys-1', gender: 'BOYS', walkingMinutes: 20 }
    ],
    googleMapUrl: 'https://maps.google.com/?q=LD+College+of+Engineering+Navrangpura+Ahmedabad',
    coursesPopular: ['B.Tech Computer Science', 'Mechanical Engineering', 'Civil Engineering', 'Chemical & IT']
  },
  {
    id: 'hl-college',
    name: 'H.L. College of Commerce (HLCC)',
    shortName: 'HL College',
    category: 'Commerce',
    address: 'HLIC Campus, SV Desai Road, Navrangpura, Ahmedabad, Gujarat 380009',
    area: 'Navrangpura',
    landmark: 'Near Commerce Six Road / Six Rasta',
    image: '/images/guide/hl-college.jpg',
    description:
      'The premier commerce college in Gujarat, churning out top-rank CA aspirants, financial analysts, and corporate leaders with vibrant campus culture and student societies.',
    targetKeywords: [
      'PG near HL College Navrangpura',
      'PG near HL College of Commerce',
      'Boys PG Commerce Six Road',
      'Girls PG near HL College Ahmedabad'
    ],
    distanceFromSorath: '0.6 km',
    travelTimeSorath: '6 min walk',
    distanceFromLuxora: '1.4 km',
    travelTimeLuxora: '5 min drive',
    bestSuitedPGs: [
      { name: 'Sorath Boys PG 1 (Vijay Cross Rd)', slug: 'sorath-boys-1', gender: 'BOYS', walkingMinutes: 6 },
      { name: 'Sorath Girls PG 1 (Vijay Cross Rd)', slug: 'sorath-girls-1', gender: 'GIRLS', walkingMinutes: 6 },
      { name: 'Luxora Boys PG 1 (Stadium Six Rd)', slug: 'luxora-boys-1', gender: 'BOYS', walkingMinutes: 14 }
    ],
    googleMapUrl: 'https://maps.google.com/?q=HL+College+of+Commerce+Navrangpura+Ahmedabad',
    coursesPopular: ['B.Com Honours', 'M.Com', 'BBA Finance', 'CA / CS Foundation']
  },
  {
    id: 'st-xaviers-college',
    name: "St. Xavier's College",
    shortName: "St. Xavier's",
    category: 'Arts & Science',
    address: 'Navrangpura, Ahmedabad, Gujarat 380009',
    area: 'Navrangpura',
    landmark: 'Near Xavier’s Corner, Swastik Cross Road',
    image: '/images/guide/st-xaviers-college.jpg',
    description:
      "Ahmedabad's landmark Jesuit arts and science college, accredited NAAC A+, celebrated for cutting-edge biotechnology, computer science, psychology, and liberal arts programs.",
    targetKeywords: [
      "PG near St. Xavier's College Ahmedabad",
      "Girls PG near Xavier's College Navrangpura",
      "Boys PG near St Xavier Ahmedabad",
      "Safe student PG near Xavier Corner"
    ],
    distanceFromSorath: '1.2 km',
    travelTimeSorath: '10 min walk / 4 min bike',
    distanceFromLuxora: '2.3 km',
    travelTimeLuxora: '8 min drive',
    bestSuitedPGs: [
      { name: 'Sorath Girls PG 1 (Vijay Cross Rd)', slug: 'sorath-girls-1', gender: 'GIRLS', walkingMinutes: 10 },
      { name: 'Sorath Boys PG 1 (Vijay Cross Rd)', slug: 'sorath-boys-1', gender: 'BOYS', walkingMinutes: 10 },
      { name: 'Luxora Girls PG 1 (Sardar Patel Colony)', slug: 'luxora-girls-1', gender: 'GIRLS', walkingMinutes: 20 }
    ],
    googleMapUrl: 'https://maps.google.com/?q=St+Xaviers+College+Navrangpura+Ahmedabad',
    coursesPopular: ['Biotechnology & Biochemistry', 'Psychology & English', 'B.Sc Physics & Maths', 'B.C.A.']
  },
  {
    id: 'navkar-institute',
    name: 'Navkar Institute (CA / CS / CMA Hub)',
    shortName: 'Navkar Institute',
    category: 'CA / Professional',
    address: 'Near Stadium Six Road & Commerce Six Road, Navrangpura, Ahmedabad, Gujarat 380009',
    area: 'Navrangpura / Stadium Six Road',
    landmark: 'Opp. Memnagar Fire Station / Stadium Six Road branches',
    image: '/images/guide/navkar-institute.jpg',
    description:
      'India’s legendary coaching academy for Chartered Accountancy (CA Foundation, Inter, Final), CS, CMA, and US CPA, hosting thousands of high-achieving commerce students.',
    targetKeywords: [
      'PG near Navkar Institute Ahmedabad',
      'CA Student PG Navrangpura',
      'Boys PG near Navkar Stadium Six Road',
      'Study friendly PG for CA students Ahmedabad'
    ],
    distanceFromSorath: '1.2 km',
    travelTimeSorath: '10 min walk / 4 min bike',
    distanceFromLuxora: '0.4 km',
    travelTimeLuxora: '4 min walk',
    bestSuitedPGs: [
      { name: 'Luxora Boys PG 1 (Stadium Six Rd)', slug: 'luxora-boys-1', gender: 'BOYS', walkingMinutes: 4 },
      { name: 'Sorath Boys PG 2, 3, 4 (Memnagar Fire Station)', slug: 'sorath-boys-2', gender: 'BOYS', walkingMinutes: 5 },
      { name: 'Sorath Girls PG 1 (Vijay Cross Rd)', slug: 'sorath-girls-1', gender: 'GIRLS', walkingMinutes: 10 }
    ],
    googleMapUrl: 'https://maps.google.com/?q=Navkar+Institute+Navrangpura+Ahmedabad',
    coursesPopular: ['CA Foundation & Inter', 'CA Final', 'CS Executive', 'US CPA & ACCA']
  }
];

export const METRO_STATIONS_GUIDE: MetroStationInfo[] = [
  {
    id: 'commerce-six-road',
    name: 'Commerce Six Road Metro Station',
    line: 'Red Line (North-South)',
    lineColor: '#ef4444',
    distanceFromLuxora: '0.7 km',
    distanceFromSorath: '0.6 km',
    walkingMinutesLuxora: 7,
    walkingMinutesSorath: 6,
    keyConnectivity: 'Direct connection to Sabarmati, Motera Narendra Modi Stadium, and Gandhinagar link.',
    image: '/images/guide/ahmedabad-metro-station.jpg',
    description:
      'Located at the bustling Commerce Six Road junction. Perfect for students commuting to colleges or travelling towards the North-South corridor without encountering traffic.'
  },
  {
    id: 'sp-stadium',
    name: 'S.P. Stadium Metro Station',
    line: 'Red Line (North-South)',
    lineColor: '#ef4444',
    distanceFromLuxora: '0.2 km',
    distanceFromSorath: '1.4 km',
    walkingMinutesLuxora: 3,
    walkingMinutesSorath: 14,
    keyConnectivity: 'Direct 3-minute walk from Luxora Boys PG 1. Rapid transit to Motera, Gandhinagar, and Old High Court.',
    image: '/images/guide/ahmedabad-metro-train.jpg',
    description:
      'Situated right beside Sardar Patel Stadium and Madhur Complex. Luxora Boys PG 1 residents can walk to this platform in literally 180 seconds.'
  },
  {
    id: 'gujarat-university-metro',
    name: 'Gujarat University Metro Station',
    line: 'Blue Line (East-West)',
    lineColor: '#3b82f6',
    distanceFromLuxora: '1.9 km',
    distanceFromSorath: '0.8 km',
    walkingMinutesLuxora: 18,
    walkingMinutesSorath: 8,
    keyConnectivity: 'Direct connectivity to Thaltej, Vastrapur, Doordarshan Kendra, and Kalupur Railway Station.',
    image: '/images/guide/ahmedabad-metro-station.jpg',
    description:
      'Dedicated campus metro stop serving Gujarat University, LD College, and surrounding Vijay Cross Road PG communities.'
  },
  {
    id: 'old-high-court',
    name: 'Old High Court Interchange Station',
    line: 'Interchange (North-South & East-West)',
    lineColor: '#8b5cf6',
    distanceFromLuxora: '1.5 km',
    distanceFromSorath: '1.9 km',
    walkingMinutesLuxora: 15,
    walkingMinutesSorath: 18,
    keyConnectivity: 'Crucial interchange hub connecting North-South Line (APMC - Motera) and East-West Line (Thaltej - Vastral Gam).',
    image: '/images/guide/ahmedabad-metro-train.jpg',
    description:
      'The central cross-junction of Ahmedabad Metro rail, located near Income Tax Circle and Ashram Road. Enables seamless 1-ticket travel to any corner of the city.'
  }
];

export const BRTS_STOPS_GUIDE: BrtsStopInfo[] = [
  {
    id: 'vijay-cross-road-brts',
    name: 'Vijay Cross Road BRTS',
    corridor: 'Line 3 & 4 (RTO to Maninagar / University Circuit)',
    proximityToPG: '150 meters (2-min walk from Sorath Boys 1 & Girls 1)',
    frequency: 'Buses arrive every 2 to 4 minutes during peak hours',
    highlight: 'Dedicated air-conditioned Janmarg bus lane avoiding road signals completely.'
  },
  {
    id: 'memnagar-fire-station-brts',
    name: 'Memnagar Fire Station BRTS',
    corridor: 'Line 2 (University to Chandkheda & RTO)',
    proximityToPG: '80 meters (1-min walk from Sorath Boys 2, 3 & 4)',
    frequency: 'Buses arrive every 3 minutes',
    highlight: 'Direct boarding for Navkar Institute, Gujarat University, and Helmet Circle commute.'
  },
  {
    id: 'commerce-six-road-brts',
    name: 'Commerce Six Road BRTS',
    corridor: 'Line 4 (LDCE to Vasna & Ellisbridge)',
    proximityToPG: '500 meters from Stadium Six Road & Vijay Cross Road',
    frequency: 'Buses arrive every 3 to 5 minutes',
    highlight: 'Fast connection to HL College, LD College, and C.G. Road.'
  }
];

export const CITY_ATTRACTIONS_GUIDE: CityAttraction[] = [
  {
    id: 'sabarmati-riverfront',
    name: 'Sabarmati Riverfront Promenade',
    category: 'Riverfront',
    distanceFromPGs: '2.8 km',
    travelTime: '8 min drive / 15 min metro',
    image: '/images/guide/sabarmati-riverfront.jpg',
    description:
      'A world-class 11.5 km riverfront promenade with breezy pedestrian walkways, evening boating, lush event gardens, and open-air cafes along the Sabarmati River.',
    whyVisit: 'The go-to evening escape for students to jog, unwind with friends, or study outdoors with sunset river breeze.',
    googleMapUrl: 'https://maps.google.com/?q=Sabarmati+Riverfront+Ahmedabad'
  },
  {
    id: 'atal-bridge',
    name: 'Atal Pedestrian Bridge',
    category: 'Architecture & Heritage',
    distanceFromPGs: '3.2 km',
    travelTime: '10 min drive',
    image: '/images/guide/atal-bridge.jpg',
    description:
      'Ahmedabad’s iconic 300-meter architectural masterpiece connecting the East and West riverfront promenades, featuring vibrant illuminated LED canopy inspired by the International Kite Festival.',
    whyVisit: 'Top photography and Instagram hotspot with panoramic views of the riverfront skyline.',
    googleMapUrl: 'https://maps.google.com/?q=Atal+Pedestrian+Bridge+Ahmedabad'
  },
  {
    id: 'law-garden',
    name: 'Law Garden Night Market & Khau Gali',
    category: 'Shopping & Street Food',
    distanceFromPGs: '2.1 km',
    travelTime: '7 min drive / 12 min bike',
    image: '/images/guide/law-garden.jpg',
    description:
      'The buzzing cultural heartbeat of Navrangpura! Famous for vibrant traditional handicrafts, mirror-work jackets, and the legendary Khau Gali street food haven serving pav bhaji, kulfi, dosas, and fresh juices.',
    whyVisit: 'The ultimate late-night hangout for hostelers and PG residents craving authentic Gujarati treats after late-night study sessions.',
    googleMapUrl: 'https://maps.google.com/?q=Law+Garden+Night+Market+Ahmedabad'
  },
  {
    id: 'iim-ahmedabad',
    name: 'IIM Ahmedabad Heritage Campus & Vastrapur',
    category: 'Campus Landmark',
    distanceFromPGs: '2.4 km',
    travelTime: '7 min drive',
    image: '/images/guide/iim-ahmedabad.jpg',
    description:
      'Designed by legendary master architect Louis Kahn, IIM-A features monumental red-brick geometric arches and courtyards. Surrounded by lively student cafes, bookstores, and Vastrapur Lake.',
    whyVisit: 'Inspiring academic ambiance, coffee shops, and peaceful walking pathways just minutes from Vijay Cross Road.',
    googleMapUrl: 'https://maps.google.com/?q=IIM+Ahmedabad+Vastrapur'
  }
];

export const DISTANCE_MATRIX = [
  {
    pgName: 'Luxora Boys PG 1',
    area: 'Stadium Six Rd, Navrangpura',
    guDist: '1.8 km (6 min)',
    ldDist: '2.1 km (7 min)',
    hlDist: '1.4 km (5 min)',
    xavierDist: '2.3 km (8 min)',
    navkarDist: '0.4 km (4 min walk)',
    nearestMetro: 'Stadium Metro (200m / 3 min walk)',
    nearestBrts: 'Commerce Six Rd (500m)'
  },
  {
    pgName: 'Luxora Girls PG 1',
    area: 'Sardar Patel Colony, Naranpura',
    guDist: '2.6 km (8 min)',
    ldDist: '2.9 km (9 min)',
    hlDist: '2.2 km (7 min)',
    xavierDist: '2.5 km (8 min)',
    navkarDist: '1.5 km (5 min)',
    nearestMetro: 'AEC / Stadium Metro (600m)',
    nearestBrts: 'Naranpura BRTS (400m)'
  },
  {
    pgName: 'Sorath Boys PG 1',
    area: 'Vijay Cross Rd, Navrangpura',
    guDist: '0.4 km (5 min walk)',
    ldDist: '1.0 km (8 min walk)',
    hlDist: '0.6 km (6 min walk)',
    xavierDist: '1.2 km (10 min walk)',
    navkarDist: '1.2 km (10 min walk)',
    nearestMetro: 'GU Metro (800m) / Commerce (600m)',
    nearestBrts: 'Vijay Cross Rd BRTS (150m / 2 min walk)'
  },
  {
    pgName: 'Sorath Boys PG 2 & 3',
    area: 'Memnagar Fire Station, Navrangpura',
    guDist: '0.7 km (7 min walk)',
    ldDist: '1.2 km (10 min walk)',
    hlDist: '0.9 km (8 min walk)',
    xavierDist: '1.5 km (12 min walk)',
    navkarDist: '0.6 km (5 min walk)',
    nearestMetro: 'Commerce Six Rd (800m)',
    nearestBrts: 'Memnagar Fire Station (80m / 1 min walk)'
  },
  {
    pgName: 'Sorath Boys PG 4',
    area: 'Pallavi Tower, Vijay Char Rasta',
    guDist: '0.7 km (7 min walk)',
    ldDist: '1.2 km (10 min walk)',
    hlDist: '0.9 km (8 min walk)',
    xavierDist: '1.5 km (12 min walk)',
    navkarDist: '0.6 km (5 min walk)',
    nearestMetro: 'Commerce Six Rd (800m)',
    nearestBrts: 'Memnagar Fire Station (80m)'
  },
  {
    pgName: 'Sorath Girls PG 1',
    area: 'Beside Maharaja Palace, Vijay Cross Rd',
    guDist: '0.4 km (5 min walk)',
    ldDist: '1.0 km (8 min walk)',
    hlDist: '0.6 km (6 min walk)',
    xavierDist: '1.2 km (10 min walk)',
    navkarDist: '1.2 km (10 min walk)',
    nearestMetro: 'GU Metro (800m) / Commerce (600m)',
    nearestBrts: 'Vijay Cross Rd BRTS (150m / 2 min walk)'
  }
];
