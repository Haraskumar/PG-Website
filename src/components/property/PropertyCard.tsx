import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/types/property';
import { CONTACTS, getWhatsAppBookingUrl } from '@/data/contacts';
import {
  MapPin,
  Utensils,
  Wifi,
  Wind,
  ShieldCheck,
  ChevronRight,
  MessageCircle,
  Camera,
  Sparkles,
  Zap
} from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export default function PropertyCard({ property, featured }: PropertyCardProps) {
  const isLuxora = property.brand === 'LUXORA';
  const isBoys = property.gender === 'BOYS';
  const primaryHero = property.images.find((img) => img.isHero) || property.images[0];
  const whatsappUrl = getWhatsAppBookingUrl(property.name);

  return (
    <div
      className={`group rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl flex flex-col wood-card-bg ${
        isBoys
          ? 'border-amber-900/30 hover:border-blue-600 hover:shadow-blue-900/15'
          : 'border-amber-900/30 hover:border-rose-500 hover:shadow-rose-900/15'
      } ${featured ? (isLuxora ? 'ring-2 ring-amber-400' : isBoys ? 'ring-2 ring-blue-500' : 'ring-2 ring-rose-400') : ''}`}
    >
      {/* Image / Fallback Section */}
      <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-900">
        {property.hasActualPhotos && primaryHero ? (
          <Image
            src={primaryHero.src}
            alt={primaryHero.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 p-6 flex flex-col items-center justify-center text-center text-white">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-400/30 flex items-center justify-center mb-3 text-teal-300">
              <Camera className="w-7 h-7" />
            </div>
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-[11px] font-bold tracking-wider uppercase mb-2">
              New Facility
            </span>
            <h4 className="text-base font-bold text-white">Admissions Open — Photos Coming Soon</h4>
            <p className="text-xs text-slate-300 mt-1 max-w-xs">
              Physical site visits and room selection currently active daily.
            </p>
          </div>
        )}

        {/* Gradient Overlay for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          {/* Brand Badge */}
          {isLuxora ? (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-luxora-900 via-slate-900 to-luxora-900 text-amber-300 border border-amber-400/60 shadow-lg tracking-wide">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-400" />
              LUXORA LUXURY
            </span>
          ) : (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-teal-800/95 text-white backdrop-blur-md border border-teal-400/60 shadow-md tracking-wide">
              <Zap className="w-3.5 h-3.5 mr-1 text-teal-300" />
              SORATH BUDGET
            </span>
          )}

          {/* Gender Badge with Heavy/Light Contrast */}
          {isBoys ? (
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-black bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg tracking-wider border border-blue-400/50">
              👦 BOYS PG
            </span>
          ) : (
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-black bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg tracking-wider border border-rose-300/50">
              👧 GIRLS PG
            </span>
          )}
        </div>

        {/* Bottom Image Strip: Starting Price */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between text-white">
          <div>
            <div className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
              Monthly Tariff
            </div>
            <div className={`text-xl sm:text-2xl font-black drop-shadow ${isLuxora ? 'text-amber-300' : 'text-teal-300'}`}>
              {property.priceRangeDisplay}
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm text-[11px] font-bold text-slate-200 border border-white/10">
              {property.roomOptions.length} Room Tiers
            </span>
          </div>
        </div>
      </div>

      {/* Body Details on Wood-Land Background */}
      <div className="p-6 flex-1 flex flex-col justify-between wood-card-bg">
        <div>
          {/* Title & Location */}
          <div className="mb-3">
            <Link href={`/pgs/${property.slug}`}>
              <h3 className={`text-xl font-black transition-colors line-clamp-1 ${
                isBoys ? 'text-slate-950 group-hover:text-blue-800' : 'text-slate-950 group-hover:text-rose-700'
              }`}>
                {property.name}
              </h3>
            </Link>
            <p className="flex items-center text-xs text-slate-800 font-semibold mt-1">
              <MapPin className={`w-3.5 h-3.5 mr-1 shrink-0 ${isBoys ? 'text-blue-700' : 'text-rose-600'}`} />
              <span className="line-clamp-1">{property.address}</span>
            </p>
          </div>

          {/* Tagline / Landmark Highlight */}
          <div className={`text-xs font-bold rounded-xl p-2.5 mb-4 flex items-center shadow-2xs backdrop-blur-xs ${
            isBoys
              ? 'bg-white/80 border border-blue-900/20 text-slate-900'
              : 'bg-white/80 border border-rose-900/20 text-rose-950'
          }`}>
            <ShieldCheck className={`w-4 h-4 mr-2 shrink-0 ${isBoys ? 'text-blue-700' : 'text-rose-600'}`} />
            <span className="line-clamp-1">Landmark: {property.landmark}</span>
          </div>

          {/* Amenity Badges Row */}
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-900 mb-3">
            <div className="flex items-center p-2 rounded-lg bg-white/80 backdrop-blur-xs border border-amber-900/15 shadow-2xs">
              <Utensils className={`w-3.5 h-3.5 mr-2 shrink-0 ${isLuxora ? 'text-amber-700' : 'text-teal-700'}`} />
              <span className="truncate font-bold">{isLuxora ? '4 Meals Daily' : '3 Meals Daily'}</span>
            </div>
            <div className="flex items-center p-2 rounded-lg bg-white/80 backdrop-blur-xs border border-amber-900/15 shadow-2xs">
              <Wifi className={`w-3.5 h-3.5 mr-2 shrink-0 ${isBoys ? 'text-blue-700' : 'text-rose-600'}`} />
              <span className="truncate font-bold">150 Mbps Wi-Fi</span>
            </div>
            <div className="flex items-center p-2 rounded-lg bg-white/80 backdrop-blur-xs border border-amber-900/15 shadow-2xs">
              <Wind className="w-3.5 h-3.5 mr-2 text-cyan-700 shrink-0" />
              <span className="truncate font-bold">{isLuxora ? '100% AC Rooms' : 'AC & Non-AC'}</span>
            </div>
            <div className="flex items-center p-2 rounded-lg bg-white/80 backdrop-blur-xs border border-amber-900/15 shadow-2xs">
              <ShieldCheck className={`w-3.5 h-3.5 mr-2 shrink-0 ${isBoys ? 'text-blue-700' : 'text-rose-600'}`} />
              <span className="truncate font-bold">{isLuxora ? 'Biometric + CCTV' : '24/7 Security'}</span>
            </div>
          </div>

          {/* Hygiene / Gender Guarantee Pill */}
          <div className={`flex items-center text-[11px] font-black px-2.5 py-1.5 rounded-lg mb-4 bg-white/85 border shadow-2xs backdrop-blur-xs ${
            isBoys
              ? 'text-slate-900 border-emerald-800/30'
              : 'text-rose-950 border-rose-800/30'
          }`}>
            <ShieldCheck className={`w-3.5 h-3.5 mr-1.5 shrink-0 ${isBoys ? 'text-emerald-700' : 'text-rose-600'}`} />
            <span className="truncate">
              {isBoys
                ? 'Daily Housekeeping • Multi-Stage RO Drinking Water'
                : 'Dedicated Female Warden • 360° CCTV Security'}
            </span>
          </div>

          {/* Sharing Options Available */}
          <div className="mb-4">
            <div className="text-[11px] font-black text-slate-800 uppercase tracking-wider mb-1.5">
              Available Configurations:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {Array.from(new Set(property.roomOptions.map((r) => r.sharing))).sort().map((sharing) => (
                <span
                  key={sharing}
                  className="px-2.5 py-1 rounded-md text-[11px] font-black bg-white/85 text-slate-900 border border-amber-900/20 shadow-2xs"
                >
                  {sharing} Sharing
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-amber-900/20 flex items-center gap-2">
          <Link
            href={`/pgs/${property.slug}`}
            className="flex-1 py-2.5 px-3 rounded-xl text-white font-black text-xs text-center transition-all flex items-center justify-center shadow-md active:scale-95 bg-slate-950 hover:bg-slate-800 border border-white/10"
          >
            <span>View Rooms & Rates</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center justify-center shrink-0 shadow-md"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
