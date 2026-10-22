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
            <span className="text-slate-300">Direct Owner Admissions • 0 Brokerage</span>
          </div>
        </div>

        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15]">
            Live Smarter, Eat Better & Focus More in{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-teal-300 bg-clip-text text-transparent">
              Ahmedabad’s Prime PGs
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            7 verified student and executive co-living stays across <strong>Navrangpura</strong> and <strong>Naranpura</strong>. High-speed 150 Mbps Wi-Fi, chef-prepared meals (3 & 4 times), round-the-clock security, and immediate college transit.
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
              <span>WhatsApp Dhaval Bhai</span>
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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: LUXORA COLLECTION */}
          <div className="relative group bg-gradient-to-br from-luxora-950 via-slate-900 to-luxora-900 rounded-3xl p-8 border border-amber-500/40 shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 bg-white rounded-lg p-1 border border-amber-400">
                    <Image
                      src="/images/brand/luxora-logo.svg"
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
                    <p className="text-[10px] text-amber-400/80 uppercase font-semibold">
                      Luxury Co-Living
                    </p>
                  </div>
                </div>
                <span className="text-xs font-black text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full">
                  From ₹12k – ₹20k
                </span>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Premium student & executive suites. Featuring 100% AC accommodation, 4-time dining, private mini-theatre / tokiz, silent study room, and fingerprint biometric locks.
              </p>

              {/* Inclusions checklist */}
              <div className="space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-amber-400 shrink-0" />
                  <span><strong>4-Time Meals:</strong> Breakfast, Lunch, Evening Snacks & Dinner</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-amber-400 shrink-0" />
                  <span><strong>Entertainment:</strong> Home Cinema / Tokiz & Gaming Zone</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-amber-400 shrink-0" />
                  <span><strong>Security:</strong> Biometric Fingerprint Entry & CCTV</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-amber-400 shrink-0" />
                  <span><strong>Locations:</strong> Navrangpura (Boys 1) & Naranpura (Girls 1)</span>
                </div>
              </div>
            </div>

            <Link
              href="/pgs"
              className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-luxora-950 font-black text-xs text-center transition-all flex items-center justify-center shadow-lg shadow-amber-400/20 active:scale-95"
            >
              <span>Explore All 7 Properties (View Luxora & Sorath)</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Card 2: SORATH COLLECTION */}
          <div className="relative group bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 rounded-3xl p-8 border border-teal-500/40 shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between">
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
                    <p className="text-[10px] text-teal-400 uppercase font-semibold">
                      Smart Budget Stays
                    </p>
                  </div>
                </div>
                <span className="text-xs font-black text-teal-300 bg-teal-400/10 border border-teal-400/30 px-3 py-1 rounded-full">
                  From ₹8.5k – ₹14k
                </span>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Clean, budget-conscious, highly hygienic co-living right on Vijay Cross Road. Includes 3 wholesome home-cooked meals, 150 Mbps Wi-Fi, lift access, and round-the-clock safety.
              </p>

              {/* Inclusions checklist */}
              <div className="space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-teal-400 shrink-0" />
                  <span><strong>3-Time Meals:</strong> Breakfast, Lunch & Dinner Included</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-teal-400 shrink-0" />
                  <span><strong>Room Tiers:</strong> Both AC and Non-AC Configurations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-teal-400 shrink-0" />
                  <span><strong>Wi-Fi:</strong> 150 Mbps Optical Fiber with zero lag</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-teal-400 shrink-0" />
                  <span><strong>Locations:</strong> Vijay Cross Road & Pallavi Tower 1 (5 PGs)</span>
                </div>
              </div>
            </div>

            <Link
              href="/pgs"
              className="w-full py-3.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-black text-xs text-center transition-all flex items-center justify-center shadow-lg shadow-teal-600/20 active:scale-95"
            >
              <span>Explore All 7 Properties (View Sorath & Luxora)</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

        </div>

        {/* Feature Badges Grid */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Utensils className="w-6 h-6 mx-auto mb-2 text-amber-400" />
            <div className="text-lg font-black text-white">4 & 3 Meals</div>
            <div className="text-xs text-slate-400">Nutritious Home Cooking</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Wifi className="w-6 h-6 mx-auto mb-2 text-blue-400" />
            <div className="text-lg font-black text-white">150 Mbps Wi-Fi</div>
            <div className="text-xs text-slate-400">Fiber Optic Coverage</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <ShieldCheck className="w-6 h-6 mx-auto mb-2 text-emerald-400" />
            <div className="text-lg font-black text-white">24/7 Security</div>
            <div className="text-xs text-slate-400">CCTV & Biometric Entry</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <MapPin className="w-6 h-6 mx-auto mb-2 text-rose-400" />
            <div className="text-lg font-black text-white">7 Prime PGs</div>
            <div className="text-xs text-slate-400">Near Colleges & Metro</div>
          </div>
        </div>

      </div>
    </section>
  );
}
