export type BrandType = 'LUXORA' | 'SORATH';
export type GenderType = 'BOYS' | 'GIRLS';

export interface RoomOption {
  sharing: number; // 2, 3, 4, 5
  sharingLabel: string; // e.g. "2 Sharing", "3 Sharing Deluxe"
  type: 'AC' | 'NON_AC' | 'ALL_AC';
  priceMonthly: number; // in INR
  priceDisplay: string; // e.g. "₹20,000 / mo"
  notes?: string; // e.g. "Attached Washroom & Balcony" or "Lift Access"
  image?: string; // photo representing this sharing type
}

export interface LandmarkDistance {
  name: string;
  category: 'transit' | 'college' | 'hospital' | 'shopping';
  distanceKm: string;
  travelTime: string;
}

export interface PropertyImage {
  src: string;
  alt: string;
  category: 'hero' | 'bedroom' | 'bathroom' | 'dining' | 'common' | 'terrace' | 'exterior';
  isHero?: boolean;
}

export interface BranchReview {
  name: string;
  role: string;
  rating: number;
  text: string;
  stayDuration: string;
}

export interface Property {
  id: string; // e.g. "luxora-boys-1"
  slug: string;
  name: string;
  brand: BrandType;
  gender: GenderType;
  badgeTagline: string;
  priceRangeDisplay: string; // e.g. "₹15,000 – ₹20,000 / mo"
  minPrice: number;
  maxPrice: number;
  address: string;
  area: string;
  city: string;
  pincode: string;
  landmark: string;
  mapUrl: string;
  embedMapQuery: string;
  embedMapUrl?: string;
  mapCoordinates?: { lat: number; lng: number };
  overview: string;
  highlights: string[];
  pros: string[]; // Distinct USPs/Pros of this specific PG
  hygieneFeatures: string[]; // Sanitization & cleaning standards
  mealsIncluded: string; // "4-Time Gourmet Meals" or "3-Time Hygienic Home-Style Meals"
  foodMenuHighlights: { meal: string; items: string }[];
  roomOptions: RoomOption[];
  amenities: string[];
  landmarks: LandmarkDistance[];
  images: PropertyImage[];
  hasActualPhotos: boolean;
  branchReviews: BranchReview[]; // 2-3 genuine reviews for this PG
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}
