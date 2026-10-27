import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  GraduationCap,
  Train,
  Bus,
  MapPin,
  Clock,
  ExternalLink,
  MessageCircle,
  Phone,
  Sparkles,
  Shield,
  Compass,
  ArrowRight,
  CheckCircle2,
  Navigation,
  School,
  Building2,
  Coffee
} from 'lucide-react';
import {
  COLLEGES_GUIDE,
  METRO_STATIONS_GUIDE,
  BRTS_STOPS_GUIDE,
  CITY_ATTRACTIONS_GUIDE,
  DISTANCE_MATRIX
} from '@/data/locationGuide';
import { CONTACTS } from '@/data/contacts';

export const metadata: Metadata = {
  title: 'PG Near Colleges in Navrangpura, Ahmedabad | Luxora & Sorath Stays',
  description:
    'Looking for a PG near Gujarat University, LD College, HL College, St. Xavier’s College, or Navkar Institute? Explore Luxora & Sorath PG options around Navrangpura with verified distances, Metro, and BRTS transit.',
  keywords: [
    'PG near Gujarat University Ahmedabad',
    'PG near LD College Ahmedabad',
    'PG near HL College Navrangpura',
    'PG near St. Xavier’s College Ahmedabad',
    'PG near Navkar Institute Ahmedabad',
    'PG near Metro Station in Navrangpura',
    'Boys PG near Vijay Cross Road',
    'Girls PG Navrangpura Ahmedabad',
    'Student accommodation Navrangpura'
  ],
  alternates: {
    canonical: 'https://pg-website-orpin.vercel.app/ahmedabad-guide'
  },
  openGraph: {
    title: 'Explore Ahmedabad: Colleges, Metro & Nearby Places | Luxora & Sorath',
    description:
      'Verified PG accommodations for students near Gujarat University, LD College, HL College, Navkar Institute, Metro and BRTS connectivity.',
    url: 'https://pg-website-orpin.vercel.app/ahmedabad-guide',
    type: 'website'
  }
};

export default function AhmedabadGuidePage() {
  // Structured Schema for Google Rich Snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://pg-website-orpin.vercel.app/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Ahmedabad Student & Location Guide',
            item: 'https://pg-website-orpin.vercel.app/ahmedabad-guide'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Which PG is closest to Gujarat University?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sorath Boys PG 1 and Sorath Girls PG 1 on Vijay Cross Road are located just 400 meters (a 5-minute walk) from Gujarat University campus.'
            }
          },
          {
            '@type': 'Question',
            name: 'Which PG is nearest to LD College of Engineering?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sorath Boys PG 1, 2, 3 and Sorath Girls PG 1 are situated within 1.0 km (8-minute walk or 3-minute bicycle ride) of LD College of Engineering.'
            }
          },
          {
            '@type': 'Question',
            name: 'Which PG is closest to Navkar Institute for CA students?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Luxora Boys PG 1 at Stadium Six Road is just 400 meters (4-minute walk) from Navkar Institute, and Sorath Boys PG 2, 3, 4 are right next to the Memnagar Fire Station branch.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are there Metro stations near Luxora and Sorath PGs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Luxora Boys PG 1 is a 3-minute walk (200m) from S.P. Stadium Metro Station (Red Line). Sorath branches are 6 minutes from Commerce Six Road Metro Station and 8 minutes from Gujarat University Metro Station.'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen theme-bg-gradient pb-20">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-20 text-center px-4 sm:px-6 lg:px-8 border-b border-white/15">
        <div className="max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/40 shadow-lg">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Ahmedabad Student & Campus Location Guide</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
            Explore Ahmedabad: <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-transparent">
              Colleges, Metro & Prime PG Locations
            </span>
          </h1>

          <p className="text-amber-100/90 text-sm sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
            Planning your studies in Ahmedabad? Discover premier co-living accommodations by{' '}
            <strong className="text-amber-300 font-bold">LUXORA</strong> and{' '}
            <strong className="text-teal-300 font-bold">SORATH</strong> situated within 3 to 10 minutes of
            Gujarat University, LD College, HL College, St. Xavier’s, Navkar Institute, and direct
            Metro/BRTS transit corridors.
          </p>

          {/* Quick Jump Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold">
            <a
              href="#colleges"
              className="px-4 py-2.5 rounded-xl bg-slate-900/85 hover:bg-slate-900 text-white shadow-lg border border-white/20 hover:border-amber-400/60 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center"
            >
              <GraduationCap className="w-4 h-4 mr-2 text-amber-400" />
              <span>Colleges & Coaching</span>
            </a>
            <a
              href="#metro"
              className="px-4 py-2.5 rounded-xl bg-slate-900/85 hover:bg-slate-900 text-white shadow-lg border border-white/20 hover:border-rose-400/60 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center"
            >
              <Train className="w-4 h-4 mr-2 text-rose-400" />
              <span>Metro Rail</span>
            </a>
            <a
              href="#brts"
              className="px-4 py-2.5 rounded-xl bg-slate-900/85 hover:bg-slate-900 text-white shadow-lg border border-white/20 hover:border-teal-400/60 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center"
            >
              <Bus className="w-4 h-4 mr-2 text-teal-400" />
              <span>Janmarg BRTS</span>
            </a>
            <a
              href="#attractions"
              className="px-4 py-2.5 rounded-xl bg-slate-900/85 hover:bg-slate-900 text-white shadow-lg border border-white/20 hover:border-cyan-400/60 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center"
            >
              <Coffee className="w-4 h-4 mr-2 text-cyan-400" />
              <span>City Hangouts</span>
            </a>
            <a
              href="#distance-matrix"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center"
            >
              <Navigation className="w-4 h-4 mr-2 text-slate-950" />
              <span>Distance Matrix Table</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-20">
        
        {/* ============================================================== */}
        {/* SECTION 01: COLLEGES & COACHING HUBS                          */}
        {/* ============================================================== */}
        <section id="colleges" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/15 pb-4">
            <div>
              <div className="flex items-center space-x-2 text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                <School className="w-4 h-4" />
                <span>Section 01 • Educational Hubs</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1 drop-shadow-sm">
                Find a PG Near Your College or Institute
              </h2>
              <p className="text-amber-100/80 text-sm mt-1">
                Save hours of daily traffic. Live within easy walking or cycling distance of premier institutions.
              </p>
            </div>
            <Link
              href="/pgs"
              className="inline-flex items-center text-xs font-bold text-amber-300 bg-slate-900/80 hover:bg-slate-900 border border-amber-400/40 px-4 py-2.5 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span>View All 7 PG Stays</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          {/* College Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {COLLEGES_GUIDE.map((col) => (
              <div
                key={col.id}
                className="wood-card-bg rounded-3xl overflow-hidden border-2 border-amber-300/80 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div>
                  {/* College Photo Header */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={col.image}
                      alt={`${col.name} Campus in Navrangpura Ahmedabad`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full border border-amber-400/30">
                      {col.category}
                    </div>

                    {/* Verified Proximity Tag */}
                    <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md text-amber-300 text-[11px] font-extrabold px-3 py-1 rounded-full border border-amber-400/40 shadow-sm flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>Prime Location Hub</span>
                    </div>

                    {/* College Title inside overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-lg sm:text-xl font-extrabold tracking-tight drop-shadow-sm">
                        {col.name}
                      </h3>
                      <p className="text-xs text-slate-200 flex items-center mt-0.5">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400 shrink-0" />
                        {col.area}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      {col.description}
                    </p>

                    {/* Strategic Central Proximity Banner */}
                    <div className="p-3.5 rounded-2xl bg-white/90 border border-amber-300/70 shadow-xs flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-bold shadow-xs">
                        <Compass className="w-4 h-4 text-slate-950" />
                      </div>
                      <div>
                        <div className="text-[11px] font-extrabold text-amber-950 uppercase tracking-wide">
                          Strategic Central Proximity
                        </div>
                        <p className="text-xs text-slate-700 font-medium leading-snug">
                          Located just minutes from Luxora &amp; Sorath central campuses — zero traffic hassles &amp; effortless daily walk.
                        </p>
                      </div>
                    </div>

                    {/* Popular Courses Pills */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider">
                        Popular Academic Programs:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {col.coursesPopular.map((c, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-bold bg-amber-900/10 text-amber-950 border border-amber-900/15 px-2.5 py-0.5 rounded-lg"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-4 bg-amber-950/10 border-t border-amber-300/50 flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={col.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-amber-300 hover:text-amber-200 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                    <span>View Map Directions</span>
                  </a>

                  <a
                    href={`https://wa.me/${CONTACTS.whatsappNumber}?text=Hi,%20I%20am%20studying%20at%20${encodeURIComponent(col.name)}%20and%20looking%20for%20a%20PG%20near%20campus.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                    <span>Enquire for {col.shortName}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 02: METRO CONNECTIVITY                                */}
        {/* ============================================================== */}
        <section id="metro" className="scroll-mt-24 space-y-8">
          <div className="border-b border-white/15 pb-4">
            <div className="flex items-center space-x-2 text-rose-400 font-extrabold text-xs uppercase tracking-wider">
              <Train className="w-4 h-4" />
              <span>Section 02 • Ahmedabad Metro Rail</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1 drop-shadow-sm">
              Rapid Metro Connectivity Across Ahmedabad
            </h2>
            <p className="text-amber-100/80 text-sm mt-1">
              Travel across the twin cities without traffic jams. AC metro stations within minutes of our doors.
            </p>
          </div>

          {/* 2 Featured Metro Showcase Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-xl border border-white/10 group">
              <Image
                src="/images/guide/ahmedabad-metro-train.jpg"
                alt="Ahmedabad Metro Rail Red Line elevated train"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold bg-rose-600 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  North-South Corridor (Red Line)
                </span>
                <h4 className="text-base sm:text-lg font-bold mt-1.5 drop-shadow-sm">
                  Direct connection from Stadium &amp; Commerce Six Road to Motera &amp; Gandhinagar
                </h4>
              </div>
            </div>

            <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-xl border border-white/10 group">
              <Image
                src="/images/guide/ahmedabad-metro-station.jpg"
                alt="Ahmedabad Metro modern station concourse and platforms"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold bg-blue-600 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  East-West Corridor (Blue Line)
                </span>
                <h4 className="text-base sm:text-lg font-bold mt-1.5 drop-shadow-sm">
                  Direct link from Gujarat University to Kalupur Railway Station &amp; Thaltej
                </h4>
              </div>
            </div>
          </div>

          {/* 4 Metro Stations Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {METRO_STATIONS_GUIDE.map((st) => (
              <div
                key={st.id}
                className="wood-card-bg p-5 rounded-2xl border-2 border-amber-300/70 shadow-md flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-extrabold px-2.5 py-1 rounded-md text-white shadow-xs"
                      style={{ backgroundColor: st.lineColor }}
                    >
                      {st.line}
                    </span>
                    <Train className="w-4 h-4 text-slate-700" />
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                    {st.name}
                  </h3>

                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {st.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-300/60 text-xs text-slate-800 font-semibold flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Direct access from Luxora &amp; Sorath branches</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 03: JANMARG BRTS TRANSIT                              */}
        {/* ============================================================== */}
        <section id="brts" className="scroll-mt-24 space-y-8">
          <div className="border-b border-white/15 pb-4">
            <div className="flex items-center space-x-2 text-teal-300 font-extrabold text-xs uppercase tracking-wider">
              <Bus className="w-4 h-4" />
              <span>Section 03 • Janmarg BRTS Network</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1 drop-shadow-sm">
              Janmarg BRTS: Dedicated Bus Corridors at Your Doorstep
            </h2>
            <p className="text-teal-100/90 text-sm mt-1">
              Air-conditioned transit buses with dedicated signal-free tracks, arriving every 2 to 4 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Real BRTS Photo */}
            <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-xl border border-white/10 group">
              <Image
                src="/images/guide/janmarg-brts-bus.jpg"
                alt="Ahmedabad Janmarg BRTS air-conditioned bus on dedicated lane"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold bg-teal-600 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Sustainable Transit Award Winner
                </span>
                <p className="text-xs text-slate-200 mt-1.5 font-medium drop-shadow-sm">
                  Janmarg carries 1.5+ lakh passengers daily across 160+ AC bus stations.
                </p>
              </div>
            </div>

            {/* Right: BRTS Stop Details */}
            <div className="lg:col-span-7 space-y-4">
              {BRTS_STOPS_GUIDE.map((stop) => (
                <div
                  key={stop.id}
                  className="wood-card-bg p-5 rounded-2xl border-2 border-amber-300/70 shadow-md space-y-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-extrabold text-slate-900 text-base">
                      {stop.name}
                    </h4>
                    <span className="text-[11px] font-extrabold text-amber-300 bg-slate-900/90 px-3 py-1 rounded-full border border-amber-400/30">
                      {stop.proximityToPG}
                    </span>
                  </div>
                  <div className="text-xs text-slate-800 font-medium">
                    <strong className="text-slate-950 font-bold">Corridor:</strong> {stop.corridor}
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong className="text-slate-950 font-bold">Frequency:</strong> {stop.frequency}
                  </div>
                  <div className="text-xs text-emerald-800 font-bold pt-1 flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                    <span>{stop.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 04: CITY HANGOUTS & PLACES NEARBY                     */}
        {/* ============================================================== */}
        <section id="attractions" className="scroll-mt-24 space-y-8">
          <div className="border-b border-white/15 pb-4">
            <div className="flex items-center space-x-2 text-cyan-300 font-extrabold text-xs uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Section 04 • Beyond College &amp; Academics</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1 drop-shadow-sm">
              Explore Ahmedabad: Student Hangouts &amp; Landmarks
            </h2>
            <p className="text-amber-100/80 text-sm mt-1">
              From peaceful evening walks at Sabarmati Riverfront to shopping and street food at Law Garden.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CITY_ATTRACTIONS_GUIDE.map((att) => (
              <div
                key={att.id}
                className="wood-card-bg rounded-3xl overflow-hidden border-2 border-amber-300/70 shadow-lg flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={att.image}
                      alt={att.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5 bg-slate-900/90 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-400/30">
                      {att.category}
                    </div>
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <h4 className="font-bold text-sm leading-tight drop-shadow-sm">
                        {att.name}
                      </h4>
                      <p className="text-[11px] text-slate-200 flex items-center mt-0.5">
                        <Clock className="w-3 h-3 mr-1 text-amber-400" />
                        {att.travelTime} ({att.distanceFromPGs})
                      </p>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <p className="text-xs text-slate-800 leading-relaxed font-medium">
                      {att.description}
                    </p>
                    <div className="p-2.5 rounded-xl bg-white/90 border border-amber-300/60 text-[11px] text-slate-800">
                      <strong className="text-indigo-950 font-bold">Student Favorite:</strong> {att.whyVisit}
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-amber-950/10 border-t border-amber-300/50 text-center">
                  <a
                    href={att.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-amber-300 hover:text-amber-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 px-3.5 py-2 rounded-xl transition-colors shadow-xs"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-1.5 text-amber-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 05: DISTANCE MATRIX TABLE                             */}
        {/* ============================================================== */}
        <section id="distance-matrix" className="scroll-mt-24 space-y-6">
          <div className="border-b border-white/15 pb-4">
            <div className="flex items-center space-x-2 text-amber-300 font-extrabold text-xs uppercase tracking-wider">
              <Navigation className="w-4 h-4" />
              <span>Section 05 • Distance &amp; Commute Comparison</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1 drop-shadow-sm">
              PG Properties vs. Colleges &amp; Transit Matrix
            </h2>
            <p className="text-amber-100/80 text-sm mt-1">
              Verified individual commute distances so you can pick the exact property best suited to your college.
            </p>
          </div>

          <div className="wood-card-bg rounded-3xl p-4 sm:p-6 border-2 border-amber-300/80 shadow-2xl overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b-2 border-amber-400 text-slate-950 font-black bg-amber-950/5">
                  <th className="py-3 px-3">PG Property &amp; Area</th>
                  <th className="py-3 px-2">Gujarat Univ</th>
                  <th className="py-3 px-2">LD College</th>
                  <th className="py-3 px-2">HL College</th>
                  <th className="py-3 px-2">St. Xavier’s</th>
                  <th className="py-3 px-2">Navkar Inst</th>
                  <th className="py-3 px-3">Nearest Metro Station</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-300/50 text-slate-800 font-medium">
                {DISTANCE_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-100/40 transition-colors">
                    <td className="py-3 px-3">
                      <strong className="text-slate-950 font-extrabold">{row.pgName}</strong>
                      <div className="text-[11px] text-slate-600">{row.area}</div>
                    </td>
                    <td className="py-3 px-2">{row.guDist}</td>
                    <td className="py-3 px-2">{row.ldDist}</td>
                    <td className="py-3 px-2">{row.hlDist}</td>
                    <td className="py-3 px-2">{row.xavierDist}</td>
                    <td className="py-3 px-2">
                      <strong className="text-amber-900 font-bold">{row.navkarDist}</strong>
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-900">
                      {row.nearestMetro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ============================================================== */}
        {/* FINAL CONVERSION CALL TO ACTION                               */}
        {/* ============================================================== */}
        <section className="wood-card-bg rounded-3xl p-8 sm:p-12 border-2 border-amber-400/80 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/40 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Ready to Book Your Stay?</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Schedule a Free PG Visit or Talk to Admissions
          </h3>

          <p className="text-slate-700 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Rooms fill up quickly ahead of the university admission cycles. Contact our central office
            to check current room availability, inspect food quality, or reserve your AC bed.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${CONTACTS.whatsappNumber}?text=Hi,%20I%20am%20exploring%20PG%20options%20near%20colleges%20in%20Ahmedabad%20and%20would%20like%20to%20check%20availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span>Instant WhatsApp Enquiry</span>
            </a>

            <a
              href={`tel:${CONTACTS.primaryPhone}`}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-sm shadow-md flex items-center transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 mr-2 text-amber-400" />
              <span>Call Admissions: {CONTACTS.primaryPhoneDisplay}</span>
            </a>

            <Link
              href="/pgs"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-slate-900 border border-amber-300 font-bold text-sm shadow-sm flex items-center transition-all active:scale-95"
            >
              <span>Explore All 7 PGs</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
