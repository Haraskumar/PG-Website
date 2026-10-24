import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { PROPERTIES, getPropertyBySlug } from '@/data/properties';
import { CONTACTS, getWhatsAppBookingUrl } from '@/data/contacts';
import PropertyLocationMap from '@/components/property/PropertyLocationMap';
import {
  MapPin,
  Utensils,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Phone,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  Zap,
  Star,
  Quote
} from 'lucide-react';

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: 'Property Not Found | Luxora & Sorath PG',
    };
  }

  return {
    title: property.seo.metaTitle,
    description: property.seo.metaDescription,
    keywords: property.seo.keywords,
    openGraph: {
      title: property.seo.metaTitle,
      description: property.seo.metaDescription,
      url: `https://luxorasorathpg.com/pgs/${property.slug}`,
      images: property.images.length > 0 ? [{ url: property.images[0].src }] : undefined,
    },
  };
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const isLuxora = property.brand === 'LUXORA';
  const isBoys = property.gender === 'BOYS';
  const primaryHero = property.images.find((img) => img.isHero) || property.images[0];
  const generalWhatsappUrl = getWhatsAppBookingUrl(property.name);

  return (
    <div className="theme-bg-gradient min-h-screen pb-24">
      
      {/* 1. Breadcrumbs & Top Bar */}
      <div
        className={
          isBoys
            ? 'bg-slate-950 border-b border-slate-800'
            : 'bg-slate-950 border-b border-rose-950/80'
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center space-x-2 text-xs font-medium overflow-x-auto whitespace-nowrap">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/pgs" className="text-slate-400 hover:text-white transition-colors">All 7 PGs</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className={isBoys ? 'text-blue-400 font-bold' : 'text-rose-300 font-bold'}>
              {property.name}
            </span>
          </nav>
        </div>
      </div>

      {/* 2. Property Header Banner - High Contrast Boys vs Girls */}
      <div
        className={`relative py-8 overflow-hidden ${
          isBoys
            ? 'bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white border-b-4 border-blue-600'
            : 'bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950 text-white border-b-4 border-rose-500'
        }`}
      >
        {/* Ambient Glow */}
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 ${
            isBoys ? 'bg-blue-500' : 'bg-rose-500'
          }`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {isLuxora ? (
                  <span className="inline-flex items-center px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-black tracking-wide border border-amber-400/50 backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-400" />
                    LUXORA LUXURY COLLECTION
                  </span>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-black tracking-wide border border-teal-400/50 backdrop-blur-sm">
                    <Zap className="w-3.5 h-3.5 mr-1 text-teal-300" />
                    SORATH SMART BUDGET COLLECTION
                  </span>
                )}

                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold shadow-sm ${
                    isBoys
                      ? 'bg-blue-600 text-white border border-blue-400/40'
                      : 'bg-gradient-to-r from-rose-500 to-pink-600 text-white border border-rose-300/40'
                  }`}
                >
                  {isBoys ? '👦 Boys Only Residence' : '👧 Girls Only Residence'}
                </span>

                {isBoys ? (
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-bold flex items-center backdrop-blur-sm">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                    Verified Facility • Zero Brokerage
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-rose-500/20 text-rose-200 border border-rose-400/30 rounded-full text-xs font-bold flex items-center backdrop-blur-sm">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1 text-rose-300" />
                    Dedicated Female Warden • 360° CCTV Safety
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {property.name}
              </h1>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300 mt-2">
                <span className="flex items-center text-slate-200 font-medium">
                  <MapPin className={`w-4 h-4 mr-1 shrink-0 ${isBoys ? 'text-blue-400' : 'text-rose-400'}`} />
                  {property.address}
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-slate-300">
                  Landmark: <strong className={isBoys ? 'text-blue-300' : 'text-rose-300'}>{property.landmark}</strong>
                </span>
              </div>
            </div>

            {/* Price & Primary Action Box */}
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-5 rounded-2xl shadow-xl backdrop-blur-md border-2 ${
                isBoys
                  ? 'bg-slate-900/90 border-blue-500/40'
                  : 'bg-slate-900/90 border-rose-500/40'
              }`}
            >
              <div>
                <div
                  className={`text-[11px] font-extrabold uppercase tracking-wider ${
                    isBoys ? 'text-blue-300' : 'text-rose-300'
                  }`}
                >
                  Monthly Tariff Range
                </div>
                <div
                  className={`text-2xl sm:text-3xl font-black ${
                    isBoys ? 'text-amber-400' : 'text-rose-300'
                  }`}
                >
                  {property.priceRangeDisplay}
                </div>
                <div className="text-[11px] text-emerald-400 font-bold">
                  Includes {property.mealsIncluded.split(':')[0]} & 150 Mbps Wi-Fi
                </div>
              </div>

              <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs text-center transition-all flex items-center justify-center shadow-lg shadow-emerald-600/30 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 mr-1.5" />
                  <span>WhatsApp Dhaval Bhai</span>
                </a>
                <a
                  href={`tel:${CONTACTS.primaryPhone}`}
                  className={`flex-1 sm:flex-none px-4 py-2.5 font-bold text-xs text-center rounded-xl transition-colors flex items-center justify-center active:scale-95 shadow-md ${
                    isBoys
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-700/30'
                      : 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-700/30'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-white" />
                  <span>Call: {CONTACTS.primaryPhoneDisplay}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Photo Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Primary Hero Large Image */}
          <div
            className={`md:col-span-2 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg bg-slate-900 border-2 ${
              isBoys ? 'border-slate-300' : 'border-rose-200'
            }`}
          >
            <Image
              src={primaryHero.src}
              alt={primaryHero.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-white">
              Exterior / Entrance View
            </div>
          </div>

          {/* Side Gallery Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {property.images.slice(1, 3).map((img, idx) => (
              <div
                key={idx}
                className={`relative h-38 sm:h-46 rounded-2xl overflow-hidden shadow-sm bg-slate-900 border-2 ${
                  isBoys ? 'border-slate-300' : 'border-rose-200'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-medium text-slate-200 capitalize">
                  {img.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Main Content Body: Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column (2 Cols): Room Options, Pros, Hygiene, Amenities, Food, Map, Reviews */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* 1. ROOM SHARING TIERS WITH DEDICATED ROOM IMAGES & RENT */}
            <div
              className={`rounded-3xl p-6 sm:p-8 shadow-md border-2 ${
                isBoys
                  ? 'bg-white border-slate-300/80'
                  : 'bg-white border-rose-200'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-2 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Room Sharing Configurations & Monthly Tariff
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Select your preferred room type. Each option includes meals, 150 Mbps Wi-Fi, and daily housekeeping.
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 self-start sm:self-auto ${
                    isBoys ? 'bg-blue-100 text-blue-900' : 'bg-rose-100 text-rose-900'
                  }`}
                >
                  {property.roomOptions.length} Sharing Tiers
                </span>
              </div>

              {/* Room Cards Grid with Photos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.roomOptions.map((room, idx) => {
                  const roomWhatsappUrl = getWhatsAppBookingUrl(property.name, room.sharingLabel);
                  const roomImg = room.image || primaryHero.src;

                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl ${
                        isBoys
                          ? 'border-slate-200 bg-white hover:border-blue-600'
                          : 'border-rose-200/90 bg-gradient-to-b from-rose-50/40 via-white to-white hover:border-rose-500'
                      }`}
                    >
                      {/* Room Photo Preview */}
                      <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                        <Image
                          src={roomImg}
                          alt={`${room.sharingLabel} at ${property.name}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 350px"
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-slate-950/80 text-white backdrop-blur-sm">
                            {room.sharing} Beds
                          </span>
                          <span
                            className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                              room.type === 'AC' || room.type === 'ALL_AC'
                                ? 'bg-cyan-500 text-white'
                                : 'bg-emerald-600 text-white'
                            }`}
                          >
                            {room.type === 'AC' || room.type === 'ALL_AC' ? '❄️ AC Included' : '💨 Non-AC'}
                          </span>
                        </div>

                        <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-lg text-white font-black text-sm">
                          {room.priceDisplay}
                        </div>
                      </div>

                      {/* Room Details Body */}
                      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-base">
                            {room.sharingLabel}
                          </h4>
                          {room.notes && (
                            <p className="text-xs text-slate-600 font-medium mt-1">
                              {room.notes}
                            </p>
                          )}
                          <div className="text-[11px] text-slate-500 mt-2 space-y-0.5">
                            <div>✓ {property.mealsIncluded.split(':')[0]} Included</div>
                            <div>✓ 150 Mbps Wi-Fi & Electricity Backup</div>
                            <div>✓ Individual Lockable Wardrobe & Study Light</div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
                          <div>
                            <div
                              className={`text-sm font-black ${
                                isBoys ? 'text-blue-900' : 'text-rose-950'
                              }`}
                            >
                              {room.priceDisplay}
                            </div>
                            <div className="text-[10px] text-emerald-700 font-bold">Zero Brokerage</div>
                          </div>

                          <a
                            href={roomWhatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-4 py-2 rounded-xl text-white font-bold text-xs transition-colors flex items-center shadow-md ${
                              isBoys
                                ? 'bg-blue-700 hover:bg-blue-800 shadow-blue-700/20'
                                : 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-rose-500/20'
                            }`}
                          >
                            <MessageCircle className="w-3.5 h-3.5 mr-1" />
                            <span>Book Room</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className={`mt-4 p-3.5 rounded-xl text-xs flex items-center border ${
                  isBoys
                    ? 'bg-blue-50/70 border-blue-200/80 text-blue-950'
                    : 'bg-rose-50/70 border-rose-200/80 text-rose-950'
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 mr-2 shrink-0 ${
                    isBoys ? 'text-blue-700' : 'text-rose-600'
                  }`}
                />
                <span>
                  Room tariffs vary according to floor level, balcony access, and private washroom configurations. Contact management directly to pick your exact room number.
                </span>
              </div>
            </div>

            {/* 2. PROS & DISTINCT COMPETITIVE ADVANTAGES */}
            <div
              className={`rounded-3xl p-6 sm:p-8 shadow-md space-y-6 border-2 ${
                isBoys
                  ? 'bg-white border-slate-200/90'
                  : 'bg-white border-rose-200/80'
              }`}
            >
              <div
                className={`flex items-center space-x-2 font-black text-xs uppercase tracking-wider ${
                  isBoys ? 'text-blue-700' : 'text-rose-600'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Why Choose This Property</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Key Advantages of {property.name}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {property.pros.map((pro, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl flex items-start space-x-3 border ${
                      isBoys
                        ? 'bg-blue-50/60 border-blue-200/80'
                        : 'bg-rose-50/60 border-rose-200/80'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg text-white font-black flex items-center justify-center text-xs shrink-0 mt-0.5 ${
                        isBoys ? 'bg-blue-600' : 'bg-gradient-to-r from-rose-500 to-pink-600'
                      }`}
                    >
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      {pro}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. CLEANING & HYGIENE MAINTENANCE STANDARDS */}
            <div
              className={`rounded-3xl p-6 sm:p-8 shadow-md space-y-5 border-2 ${
                isBoys
                  ? 'bg-white border-slate-200/90'
                  : 'bg-white border-rose-200/70'
              }`}
            >
              <div className="flex items-center space-x-2 text-emerald-600 font-black text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Hygiene & Cleanliness Protocol</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Hospital-Grade Sanitization Standards
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We know that clean washrooms, germ-free kitchens, and fresh drinking water are non-negotiable for students and parents. Here is how {property.name} maintains cleanliness:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {property.hygieneFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200/80 flex items-start text-xs font-semibold text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. DAILY FOOD MENU & DINING BREAKDOWN */}
            <div
              className={`rounded-3xl p-6 sm:p-8 shadow-md space-y-6 border-2 ${
                isBoys
                  ? 'bg-white border-slate-200/90'
                  : 'bg-white border-rose-200/70'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <div
                    className={`flex items-center space-x-2 font-black text-xs uppercase tracking-wider ${
                      isBoys ? 'text-blue-700' : 'text-rose-600'
                    }`}
                  >
                    <Utensils className="w-4 h-4" />
                    <span>In-House Mess Dining</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    Daily Food Menu ({property.mealsIncluded.split(':')[0]})
                  </h3>
                </div>
                <Link
                  href="/food-menu"
                  className={`text-xs font-bold flex items-center ${
                    isBoys ? 'text-blue-700 hover:text-blue-800' : 'text-rose-600 hover:text-rose-700'
                  }`}
                >
                  <span>Full 7-Day Menu</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.foodMenuHighlights.map((meal, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-colors ${
                      isBoys
                        ? 'bg-slate-50 border-slate-200 hover:border-blue-300'
                        : 'bg-rose-50/40 border-rose-200/80 hover:border-rose-400'
                    }`}
                  >
                    <div
                      className={`text-xs font-extrabold uppercase tracking-wider mb-1 ${
                        isBoys ? 'text-blue-700' : 'text-rose-600'
                      }`}
                    >
                      {meal.meal}
                    </div>
                    <div className="text-xs text-slate-800 font-medium leading-relaxed">
                      {meal.items}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. 100% AMENITY CHECKLIST */}
            <div
              className={`rounded-3xl p-6 sm:p-8 shadow-md border-2 ${
                isBoys
                  ? 'bg-white border-slate-200/90'
                  : 'bg-white border-rose-200/70'
              }`}
            >
              <h3 className="text-xl font-black text-slate-900 mb-2">Amenities Covered Under Rent</h3>
              <p className="text-xs text-slate-500 mb-6">
                All facilities listed below are provided to every resident without hidden surcharges.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border flex items-center text-xs font-semibold text-slate-800 ${
                      isBoys
                        ? 'bg-slate-50 border-slate-200/80'
                        : 'bg-rose-50/30 border-rose-200/70'
                    }`}
                  >
                    <CheckCircle2
                      className={`w-4 h-4 mr-2 shrink-0 ${
                        isBoys ? 'text-blue-600' : 'text-rose-500'
                      }`}
                    />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. INTERACTIVE EXACT PROPERTY LOCATION & TRANSIT MAP */}
            <PropertyLocationMap property={property} />

            {/* 7. VERIFIED RESIDENT REVIEWS (2-3 AUTHENTIC REVIEWS) */}
            <div
              className={`rounded-3xl p-6 sm:p-8 shadow-md space-y-6 border-2 ${
                isBoys
                  ? 'bg-white border-slate-200/90'
                  : 'bg-white border-rose-200/70'
              }`}
            >
              <div
                className={`flex items-center space-x-2 font-black text-xs uppercase tracking-wider ${
                  isBoys ? 'text-blue-700' : 'text-rose-600'
                }`}
              >
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>Verified Resident Testimonials</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                What Residents & Parents Say About {property.name}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.branchReviews.map((review, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl flex flex-col justify-between border transition-colors ${
                      isBoys
                        ? 'bg-slate-50 border-slate-200/90 hover:border-blue-300'
                        : 'bg-rose-50/30 border-rose-200 hover:border-rose-300'
                    }`}
                  >
                    <div>
                      <div className="flex text-amber-400 mb-2">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-slate-300 mb-1.5" />
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200">
                      <div className="text-xs font-bold text-slate-900">{review.name}</div>
                      <div className="text-[11px] text-slate-500">{review.role}</div>
                      <div
                        className={`text-[10px] font-semibold mt-0.5 ${
                          isBoys ? 'text-blue-700' : 'text-rose-600'
                        }`}
                      >
                        {review.stayDuration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Sidebar with Location, Manager Contact, & Fast Walkthrough Booking */}
          <div className="space-y-6">
            
            {/* Management Direct Contact Card */}
            <div
              className={`rounded-3xl p-6 shadow-md sticky top-28 space-y-6 border-2 ${
                isBoys
                  ? 'bg-white border-slate-200'
                  : 'bg-white border-rose-200'
              }`}
            >
              
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <div
                  className={`w-12 h-12 rounded-2xl text-white font-black flex items-center justify-center text-lg shadow-sm ${
                    isBoys ? 'bg-blue-700' : 'bg-gradient-to-r from-rose-500 to-pink-600'
                  }`}
                >
                  DB
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">
                    {CONTACTS.primaryContactName}
                  </h4>
                  <p
                    className={`text-xs font-semibold ${
                      isBoys ? 'text-blue-700' : 'text-rose-600'
                    }`}
                  >
                    Central PG Admission Head
                  </p>
                  <p className="text-[10px] text-emerald-700 font-bold">
                    ● Direct Owner (0 Brokerage)
                  </p>
                </div>
              </div>

              {/* Direct Calling & WhatsApp */}
              <div className="space-y-2.5">
                <a
                  href={`tel:${CONTACTS.primaryPhone}`}
                  className={`w-full flex items-center justify-center px-4 py-3 rounded-xl font-bold text-xs transition-colors shadow-sm ${
                    isBoys
                      ? 'bg-slate-900 hover:bg-blue-900 text-white'
                      : 'bg-rose-950 hover:bg-rose-900 text-white'
                  }`}
                >
                  <Phone className="w-4 h-4 mr-2 text-amber-400" />
                  <span>Call {CONTACTS.primaryPhoneDisplay}</span>
                </a>

                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md shadow-emerald-600/20"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>WhatsApp Inquire Room</span>
                </a>
              </div>

              {/* Specific Property Address Highlight */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Property Address:
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {property.address}, {property.city} - {property.pincode}
                </p>
                <div className="text-[11px] text-slate-500">
                  Landmark: <strong>{property.landmark}</strong>
                </div>

                <a
                  href={property.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition-colors flex items-center justify-center"
                >
                  <MapPin
                    className={`w-3.5 h-3.5 mr-1.5 ${
                      isBoys ? 'text-blue-600' : 'text-rose-500'
                    }`}
                  />
                  <span>Open Property in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-1.5 text-slate-400" />
                </a>
              </div>

              {/* Central Office Distinct Note */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <div className="font-bold text-slate-900">Central Management Office:</div>
                <div>{CONTACTS.office.address}</div>
                <div>Manager: {CONTACTS.secondaryPhoneDisplay} ({CONTACTS.secondaryContactName})</div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
