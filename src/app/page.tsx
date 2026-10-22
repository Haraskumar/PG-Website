import Link from 'next/link';
import Hero from '@/components/home/Hero';
import MovingPhotoTicker from '@/components/home/MovingPhotoTicker';
import PropertyCard from '@/components/property/PropertyCard';
import HygieneGuarantee from '@/components/home/HygieneGuarantee';
import StatsBanner from '@/components/home/StatsBanner';
import TransitCalculator from '@/components/home/TransitCalculator';
import FoodSection from '@/components/home/FoodSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection';
import { PROPERTIES } from '@/data/properties';
import { CONTACTS, getWhatsAppBookingUrl } from '@/data/contacts';
import {
  Sparkles,
  ShieldCheck,
  Building2,
  ChevronRight,
  Phone,
  MessageCircle,
  Wifi,
  UtensilsCrossed,
  KeyRound,
  Tv,
  BadgeCheck
} from 'lucide-react';

export default function HomePage() {
  const featuredProperties = PROPERTIES.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Moving Photo Ticker */}
      <MovingPhotoTicker />

      {/* 3. Featured Accommodations */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-100 border border-amber-300 rounded-full text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Handpicked Premier Accommodations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Student & Executive PGs
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Tour our flagship locations in Navrangpura, Naranpura, and Vijay Cross Road.
              </p>
            </div>

            <Link
              href="/pgs"
              className="inline-flex items-center px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors self-start md:self-auto"
            >
              <span>Explore All 7 Properties</span>
              <ChevronRight className="w-4 h-4 ml-1.5 text-amber-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} featured />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/pgs"
              className="inline-flex items-center space-x-2 text-xs font-bold text-slate-600 hover:text-amber-600 transition-colors"
            >
              <span>Looking for specific sharing options or lower budget tiers?</span>
              <span className="underline font-extrabold text-slate-900">Use our instant filter →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Hygiene & Daily Cleaning Guarantee */}
      <HygieneGuarantee />

      <StatsBanner />

      {/* 5. Why Choose Luxora & Sorath Group */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-slate-100 rounded-full text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
              <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Standard of Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why 500+ Residents Choose Our Network
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Unlike unorganized brokers or distant agency hostels, our founders directly manage all 7 facilities with full accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 border-l-4 border-l-amber-400 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Homely 3 & 4 Time Food</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fresh ingredients cooked twice daily in modern commercial kitchens. Unlimited servings, morning tea, evening snacks, and festive weekend menus.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 border-l-4 border-l-blue-400 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">150 Mbps High-Speed Wi-Fi</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dedicated dual-mesh optical fiber lines on every floor. Perfect for uninterrupted Zoom lectures, coding environments, gaming, and HD streaming.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 border-l-4 border-l-emerald-400 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <KeyRound className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Biometric & CCTV Security</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fingerprint authentication on entrance doors, 24/7 CCTV continuous recording, on-site caretakers, and dedicated female wardens at girls’ properties.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 border-l-4 border-l-indigo-400 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Tv className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Mini Cinema & Study Lounges</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Luxora features private Tokiz / Mini Home Theatre rooms and pin-drop silent reading rooms for serious competitive exam preparation.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 border-l-4 border-l-teal-400 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Prime Navrangpura Hub</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Step outside directly onto Vijay Cross Road, Stadium Six Road, or Sardar Patel Colony. Walk to BRTS, Metro, and universities in minutes.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 border-l-4 border-l-rose-400 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Owner Admission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zero brokerage fees. Transparent agreements. Directly contact Dhaval Bhai and Babu Bhai for instant room selection and key handover.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Transit & College Proximity Calculator */}
      <TransitCalculator />

      {/* 5. Food & Dining Section */}
      <FoodSection />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. FAQs */}
      <FaqSection />

      {/* 8. Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-luxora-950 via-slate-950 to-luxora-950 text-white relative overflow-hidden border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Directly With Management</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black">
            Ready to Find Your New Home in Ahmedabad?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Rooms fill up quickly for college admissions terms. Reach out to Dhaval Bhai directly on WhatsApp or schedule an in-person walkthrough today.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-2xl transition-all shadow-xl shadow-emerald-600/30 flex items-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>WhatsApp Dhaval Bhai: +91 70695 81011</span>
            </a>

            <a
              href={`tel:${CONTACTS.primaryPhone}`}
              className="px-6 py-4 bg-amber-400 hover:bg-amber-300 text-luxora-950 font-extrabold text-sm rounded-2xl transition-all shadow-xl shadow-amber-400/20 flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Call For Admission</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
