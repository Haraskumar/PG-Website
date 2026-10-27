import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, MapPin, Bus, GraduationCap, CheckCircle2, Coffee, Shield, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Student Life & Navrangpura Area Guide | Ahmedabad Co-Living Tips',
  description:
    'A complete student guide for moving to Navrangpura and Naranpura in Ahmedabad. Transit options (Metro & BRTS), top universities (CEPT, Gujarat Univ), packing checklist, and food guide.',
};

export default function GuidePage() {
  return (
    <div className="py-12 sm:py-16 theme-bg-gradient min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-cyan-200" />
            <span>Ahmedabad Student Handbook</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Navrangpura Student Life & Area Guide
          </h1>
          <p className="text-blue-100 text-sm sm:text-base mt-3 font-medium">
            Moving to Ahmedabad for your education or job? Here is everything you need to know about navigating the city, choosing your PG, and enjoying student life.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-md text-slate-700 leading-relaxed text-sm">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-indigo-600 font-black text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Location Profile</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900">
              Why Navrangpura is Ahmedabad’s #1 Student Hub
            </h2>
            <p>
              Navrangpura is widely recognized as the educational beating heart of Ahmedabad. Home to Gujarat University, CEPT University, LD College of Engineering, and premier institutes like Ahmedabad University and HL College, the area is saturated with student cafes, quiet reading libraries, xerox centers, and stationery markets.
            </p>
            <p>
              By residing at <strong>Luxora Boys PG 1 (Stadium Six Road)</strong> or any of our <strong>Sorath PG branches on Vijay Cross Road</strong>, students save up to 2 hours of daily commuting time that would otherwise be wasted in city traffic.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-emerald-600 font-black text-xs uppercase tracking-wider">
              <Bus className="w-4 h-4" />
              <span>Commuting & Transit</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900">
              Getting Around: Ahmedabad Metro & BRTS Connectivity
            </h2>
            <p>
              Ahmedabad features one of India’s most robust bus rapid transit systems (Janmarg BRTS) alongside the newly expanded Ahmedabad Metro:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Janmarg BRTS</h4>
                <p className="text-xs text-slate-600">
                  Vijay Cross Road and Memnagar Fire Station BRTS corridors provide air-conditioned, dedicated-lane buses arriving every 3 minutes.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-sm mb-1">Ahmedabad Metro</h4>
                <p className="text-xs text-slate-600">
                  Stadium Metro Station (North-South corridor) is a 5-minute walk from Luxora Boys PG 1, connecting you to Gandhinagar, Motera, and Old Ahmedabad.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-amber-600 font-black text-xs uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>What To Look For in a PG</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900">
              5 Things Every Student Must Check Before Booking a PG
            </h2>
            <div className="space-y-3 pt-2">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-3 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">1. Food Reliability:</strong> Ensure meals are cooked on-premise rather than cold third-party tiffins. All Luxora and Sorath PGs operate in-house kitchens.
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-3 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">2. Optical Fiber Wi-Fi:</strong> Low-cost hostels share a single weak connection. Our properties run dedicated 150 Mbps dual-mesh routers.
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-3 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">3. Verification & Biometric Safety:</strong> Check for CCTV coverage, biometric fingerprint locks, and female warden oversight.
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-3 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">4. Laundry & Cleanliness:</strong> Access to automatic washing machines and daily room sanitization makes college life hassle-free.
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 mr-3 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">5. Zero Brokerage Direct Admissions:</strong> Never pay hefty commission fees to brokers. Book directly with PG management.
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4: Call to action */}
          <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-amber-300">Ready to Book Your Room?</h3>
              <p className="text-xs text-slate-300">
                Explore our 7 properties in Navrangpura & Naranpura or talk to management.
              </p>
            </div>
            <Link
              href="/pgs"
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all shrink-0"
            >
              Explore All 7 PGs
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
