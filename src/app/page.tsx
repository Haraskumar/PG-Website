import Link from 'next/link';
import WelcomePopupModal from '@/components/home/WelcomePopupModal';
import Hero from '@/components/home/Hero';
import MovingPhotoTicker from '@/components/home/MovingPhotoTicker';
import PropertyCard from '@/components/property/PropertyCard';
import StatsBanner from '@/components/home/StatsBanner';
import TransitCalculator from '@/components/home/TransitCalculator';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection';
import { PROPERTIES } from '@/data/properties';
import { CONTACTS, getWhatsAppBookingUrl } from '@/data/contacts';
import {
  Sparkles,
  ChevronRight,
  Phone,
  MessageCircle,
} from 'lucide-react';

export default function HomePage() {
  // Luxora collection first, then Sorath collection (both Boys & Girls options)
  const featuredProperties = [
    PROPERTIES.find((p) => p.id === 'luxora-boys-1') || PROPERTIES[0],
    PROPERTIES.find((p) => p.id === 'luxora-girls-1') || PROPERTIES[1],
    PROPERTIES.find((p) => p.id === 'sorath-boys-1') || PROPERTIES[2],
    PROPERTIES.find((p) => p.id === 'sorath-girls-1') || PROPERTIES[6],
  ];

  return (
    <div className="flex flex-col">
      {/* Client Entrance Welcome Modal (2.5s Auto-Dismiss with Dual Collection Contrast) */}
      <WelcomePopupModal />

      {/* 1. Hero Section with Student Hook & Dual Brand Comparison */}
      <Hero />

      {/* 2. Motion Photo Ticker Gallery */}
      <MovingPhotoTicker />

      {/* 3. 400+ Residents Trust Strip */}
      <StatsBanner />

      {/* 4. Featured Accommodations (Luxora First, then Sorath) */}
      <section className="py-20 theme-bg-gradient border-b border-white/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Verified Accommodations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
                Featured Student & Executive PGs
              </h2>
              <p className="text-blue-100 text-sm sm:text-base mt-2 font-medium">
                Flagship locations in Navrangpura, Naranpura, and Vijay Cross Road.
              </p>
            </div>

            <Link
              href="/pgs"
              className="inline-flex items-center px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs transition-colors self-start md:self-auto shadow-xl border border-white/10"
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
              className="inline-flex items-center space-x-2 text-xs font-bold text-blue-100 hover:text-white transition-colors bg-slate-950/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
            >
              <span>Looking for specific sharing options or lower budget tiers?</span>
              <span className="underline font-extrabold text-white">Use our instant filter →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Interactive 7 PG Locations Map & Commute Times */}
      <TransitCalculator />

      {/* 6. Testimonials & Resident Reviews */}
      <TestimonialsSection />

      {/* 7. Essential FAQs */}
      <FaqSection />

      {/* 8. Bottom Admissions CTA Banner */}
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
