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
      className={`group bg-white rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-2xl flex flex-col ${
        isLuxora
          ? 'border-amber-200/80 hover:border-amber-400'
          : 'border-slate-200 hover:border-teal-400'
      } ${featured ? (isLuxora ? 'ring-2 ring-amber-400/50' : 'ring-2 ring-teal-400/50') : ''}`}
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
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          {/* Brand Badge */}
          {isLuxora ? (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-luxora-900 to-slate-900 text-amber-300 border border-amber-400/40 shadow-md">
              <Sparkles className="w-3 h-3 mr-1 text-amber-400" />
              LUXORA LUXURY
            </span>
          ) : (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-teal-700/90 text-white backdrop-blur-md border border-teal-400/40 shadow-md">
              <Zap className="w-3 h-3 mr-1 text-teal-300" />
              SORATH SMART BUDGET
            </span>
          )}

          {/* Gender Badge */}
          {isBoys ? (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-600/90 text-white backdrop-blur-md shadow-md">
              👦 Boys PG
            </span>
          ) : (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-rose-600/90 text-white backdrop-blur-md shadow-md">
              👧 Girls PG
            </span>
          )}
        </div>

        {/* Bottom Image Strip: Starting Price */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between text-white">
          <div>
            <div className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
              Monthly Tariff
            </div>
            <div className="text-xl sm:text-2xl font-black text-amber-300 drop-shadow">
              {property.priceRangeDisplay}
            </div>
          </div>
          <div className="text-right">
            <span className="inline-block px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-[11px] font-semibold text-slate-200">
              {property.roomOptions.length} Room Tiers
            </span>
          </div>
        </div>
      </div>

      {/* Body Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Location */}
          <div className="mb-3">
            <Link href={`/pgs/${property.slug}`}>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                {property.name}
              </h3>
            </Link>
            <p className="flex items-center text-xs text-slate-500 mt-1">
              <MapPin className="w-3.5 h-3.5 mr-1 text-amber-500 shrink-0" />
              <span className="line-clamp-1">{property.address}</span>
            </p>
          </div>

          {/* Tagline / Landmark Highlight */}
          <div className="text-xs font-medium text-slate-600 bg-slate-50 rounded-xl p-2.5 mb-4 border border-slate-100 flex items-center">
            <ShieldCheck className="w-4 h-4 mr-2 text-emerald-600 shrink-0" />
            <span className="line-clamp-1">Landmark: {property.landmark}</span>
          </div>

          {/* Amenity Badges Row */}
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-3">
            <div className="flex items-center p-2 rounded-lg bg-slate-50">
              <Utensils className="w-3.5 h-3.5 mr-2 text-amber-600 shrink-0" />
              <span className="truncate">{isLuxora ? '4 Meals Daily' : '3 Meals Daily'}</span>
            </div>
            <div className="flex items-center p-2 rounded-lg bg-slate-50">
              <Wifi className="w-3.5 h-3.5 mr-2 text-blue-600 shrink-0" />
              <span className="truncate">150 Mbps Wi-Fi</span>
            </div>
            <div className="flex items-center p-2 rounded-lg bg-slate-50">
              <Wind className="w-3.5 h-3.5 mr-2 text-cyan-600 shrink-0" />
              <span className="truncate">{isLuxora ? '100% AC Rooms' : 'AC & Non-AC'}</span>
            </div>
            <div className="flex items-center p-2 rounded-lg bg-slate-50">
              <ShieldCheck className="w-3.5 h-3.5 mr-2 text-emerald-600 shrink-0" />
              <span className="truncate">{isLuxora ? 'Biometric + CCTV' : '24/7 Security'}</span>
            </div>
          </div>

          {/* Hygiene Guarantee Pill */}
          <div className="flex items-center text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-lg mb-4">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-600 shrink-0" />
            <span className="truncate">Daily Room Cleaning • 100% Pure RO Water</span>
          </div>

          {/* Sharing Options Available */}
          <div className="mb-4">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Available Configurations:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {Array.from(new Set(property.roomOptions.map((r) => r.sharing))).sort().map((sharing) => (
                <span
                  key={sharing}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {sharing} Sharing
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
          <Link
            href={`/pgs/${property.slug}`}
            className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs text-center transition-colors flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950"
          >
            <span>View Rooms & Rates</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors flex items-center justify-center shrink-0"
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
