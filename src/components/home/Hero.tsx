import Link from 'next/link';
import Image from 'next/image';
import { CONTACTS, getWhatsAppBookingUrl } from '@/data/contacts';
import {
  Sparkles,
  ShieldCheck,
  Wifi,
  Utensils,
  ChevronRight,
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Award
} from 'lucide-react';

export default function Hero() {
  const whatsappUrl = getWhatsAppBookingUrl();

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Decorative Glow Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 via-slate-800 to-teal-500/20 border border-slate-700/80 rounded-full text-xs font-bold tracking-wide">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300">LUXORA & SORATH CO-LIVING</span>
            <span className="text-slate-500">•</span>
          </div>
        </div>

        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15]">
            Find Your Kind of Stay in{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-teal-300 bg-clip-text text-transparent">
              Ahmedabad
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Safe, hygienic and food-inclusive student & executive PGs across <strong>Navrangpura</strong> and <strong>Naranpura</strong>. Walking distance to Gujarat University, CEPT, and LD College/ CA Navkar Classes.
          </p>

          {/* Quick CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pgs"
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-luxora-900 font-extrabold text-sm rounded-2xl transition-all shadow-xl shadow-amber-400/20 flex items-center group active:scale-95"
            >
              <span>Explore All 7 PG Stays</span>
              <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-2xl transition-all shadow-xl shadow-emerald-600/20 flex items-center active:scale-95"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>WhatsApp PG</span>
            </a>

            <a
              href={`tel:${CONTACTS.primaryPhone}`}
              className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm rounded-2xl transition-all flex items-center active:scale-95"
            >
              <Phone className="w-4 h-4 mr-2 text-amber-400" />
              <span>{CONTACTS.primaryPhoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Dual Brand Split Showcase Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: LUXORA COLLECTION */}
          <div className="relative group bg-gradient-to-br from-luxora-950 via-slate-900 to-luxora-900 rounded-3xl p-7 sm:p-8 border border-amber-500/40 shadow-2xl transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 bg-white rounded-lg p-1 border border-amber-400">
                    <Image
                      src="/images/brand/luxora-logo.webp"
                      alt="Luxora Logo"
                      width={36}
                      height={36}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-amber-300 font-serif tracking-wider">
                      LUXORA PG
                    </h3>
                    <p className="text-[10px] text-amber-400/90 uppercase font-bold tracking-wider">
                      Luxury Boutique Co-Living
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex flex-col items-start text-amber-400 bg-amber-400/15 border border-amber-400/40 px-3 py-2 rounded-xl leading-tight shadow-xs">
                    <span className="text-xs sm:text-sm font-black mb-1">
                      Starting from
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold">
                      👧 Girls: ₹11,500/mo
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold">
                      👦 Boys: ₹15,000/mo
                    </span>
                  </span>
                </div>
              </div>

              {/* Special Differentiator Callout */}
              <div className="p-3 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold mb-5 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-amber-400 shrink-0" />
                <span>Includes ALL Core Amenities of Sorath, PLUS:</span>
              </div>

              {/* Inclusions checklist */}
              <div className="space-y-2.5 mb-6 text-xs text-slate-200">
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>4-Time Gourmet Meals:</strong> Breakfast, Lunch, Hot Evening Snacks & Dinner</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>100% Fully Air-Conditioned:</strong> Premium suites with attached private bath</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>100% Generator Power Backup:</strong> Uninterrupted power for exam study</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Fingerprint Biometric Entry:</strong> Keyless, high-security door locks</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Tokiz Cinema & Gaming:</strong> Private mini-theatre & quiet study lounge</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Prime Locations:</strong> Stadium Six Road (Boys 1) & Naranpura (Girls 1)</span>
                </div>
              </div>
            </div>

            <Link
              href="/pgs?brand=LUXORA"
              className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-luxora-950 font-black text-xs text-center transition-all flex items-center justify-center shadow-lg shadow-amber-400/20 active:scale-95"
            >
              <span>Explore Luxora Luxury PGs (from ₹11,500)</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Card 2: SORATH COLLECTION */}
          <div className="relative group bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-7 sm:p-8 border border-teal-500/40 shadow-2xl transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 bg-white rounded-lg p-1 border border-teal-400">
                    <Image
                      src="/images/brand/sorath-logo.svg"
                      alt="Sorath Logo"
                      width={36}
                      height={36}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-wide">
                      SORATH PG
                    </h3>
                    <p className="text-[10px] text-teal-400 uppercase font-bold tracking-wider">
                      Smart Budget & Highly Clean Stays
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-teal-300 bg-teal-400/15 border border-teal-400/40 px-3 py-1 rounded-full">
                    Starting from ₹8,500 / mo
                  </span>
                  <div className="text-[10px] text-slate-400 mt-1">👦Boys: ₹8.5k+ • 👧Girls: ₹9.5k+</div>
                </div>
              </div>

              {/* Tagline / Inclusions Header */}
              <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-bold mb-5 flex items-center">
                <ShieldCheck className="w-4 h-4 mr-2 text-teal-400 shrink-0" />
                <span>Complete Core Student Living Essentials Included:</span>
              </div>

              {/* Inclusions checklist */}
              <div className="space-y-2.5 mb-6 text-xs text-slate-200">
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>3-Time Homely Meals:</strong> Fresh Breakfast, Lunch & Hot Dinner</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>150 Mbps Fiber Wi-Fi:</strong> Dedicated dual-mesh line on every floor</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>24/7 CCTV & Security:</strong> Monitored premises with on-site caretaker</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Multi-Stage RO Water:</strong> Pure drinking water station on each floor</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Laundry & Daily Cleaning:</strong> Washing machines & daily room sweeping</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-teal-400 shrink-0 mt-0.5" />
                  <span><strong>Prime Hub:</strong> Vijay Cross Road & Pallavi Tower (5 PGs)</span>
                </div>
              </div>
            </div>

            <Link
              href="/pgs?brand=SORATH"
              className="w-full py-3.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-black text-xs text-center transition-all flex items-center justify-center shadow-lg shadow-teal-600/20 active:scale-95"
            >
              <span>Explore Sorath Budget PGs (from ₹8,500)</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
