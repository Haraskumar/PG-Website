'use client';

import { useState } from 'react';
import { PROPERTIES } from '@/data/properties';
import { MapPin, Navigation, Bus, School, Building, ShieldCheck, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function TransitCalculator() {
  const [selectedPgId, setSelectedPgId] = useState(PROPERTIES[0].id);
  const selectedPg = PROPERTIES.find((p) => p.id === selectedPgId) || PROPERTIES[0];

  const cleanQuery = (selectedPg.embedMapQuery || `${selectedPg.name} ${selectedPg.address} Ahmedabad`).replace(/\+/g, ' ');
  const embedUrl =
    selectedPg.embedMapUrl ||
    `https://maps.google.com/maps?q=${encodeURIComponent(cleanQuery)}&hl=en&z=16&output=embed`;

  return (
    <section className="py-20 theme-bg-gradient border-b border-white/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Navigation className="w-3.5 h-3.5 text-cyan-200" />
            <span>Interactive Locations Map</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Explore All 7 PG Locations on the Map
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mt-2 font-medium">
            Select any PG below to view its exact location pin in Navrangpura or Naranpura and check walking and transit times to your college.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {PROPERTIES.map((pg) => {
            const isSelected = pg.id === selectedPgId;
            const isLuxora = pg.brand === 'LUXORA';
            return (
              <button
                key={pg.id}
                onClick={() => setSelectedPgId(pg.id)}
                className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer shadow-sm ${
                  isSelected
                    ? isLuxora
                      ? 'bg-luxora-900 text-amber-300 shadow-lg ring-2 ring-amber-400'
                      : 'bg-teal-700 text-white shadow-lg ring-2 ring-teal-400'
                    : 'bg-white/95 text-slate-800 border border-white/40 hover:bg-white backdrop-blur-sm'
                }`}
              >
                <span>{pg.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${pg.gender === 'BOYS' ? 'bg-blue-100 text-blue-800' : 'bg-rose-100 text-rose-800'}`}>
                  {pg.gender === 'BOYS' ? 'Boys' : 'Girls'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected PG Transit & Map Display Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Top: Interactive Google Map Embed (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
              <iframe
                title={`Map location for ${selectedPg.name}`}
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating verified badge */}
              <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg border border-slate-700 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{selectedPg.name} Verified Location</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="text-xs text-slate-500 flex items-center">
                <MapPin className="w-4 h-4 mr-1.5 text-amber-500 shrink-0" />
                <span>{selectedPg.address}</span>
              </div>

              <a
                href={selectedPg.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-amber-300 text-xs font-bold rounded-lg transition-colors shrink-0"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Right: Key Proximities & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className={`px-2.5 py-1 rounded-md text-[11px] font-extrabold tracking-wider uppercase ${selectedPg.brand === 'LUXORA' ? 'bg-amber-100 text-amber-800' : 'bg-teal-100 text-teal-800'}`}>
                  {selectedPg.brand} Collection
                </span>
                <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${selectedPg.gender === 'BOYS' ? 'bg-blue-100 text-blue-700' : 'bg-rose-100 text-rose-700'}`}>
                  {selectedPg.gender === 'BOYS' ? 'Boys PG' : 'Girls PG'}
                </span>
              </div>

              <span className="text-xs font-bold text-slate-500">
                Landmark: <strong className="text-slate-800">{selectedPg.landmark}</strong>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900">{selectedPg.name}</h3>

            <div className="pt-1">
              <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2.5">
                Commute Distance to Major Colleges & Transit:
              </h4>

              <div className="space-y-2">
                {selectedPg.landmarks.slice(0, 4).map((landmark, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200/80 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 shadow-sm">
                        {landmark.category === 'college' && <School className="w-4 h-4 text-indigo-600" />}
                        {landmark.category === 'transit' && <Bus className="w-4 h-4 text-emerald-600" />}
                        {landmark.category === 'shopping' && <Building className="w-4 h-4 text-amber-600" />}
                        {landmark.category === 'hospital' && <ShieldCheck className="w-4 h-4 text-rose-600" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{landmark.name}</div>
                        <div className="text-[10px] text-slate-600 font-medium capitalize">{landmark.category} Landmark</div>
                      </div>
                    </div>

                    <div className="text-right shrink-0 pl-2">
                      <div className="text-xs font-extrabold text-slate-900">{landmark.distanceKm}</div>
                      <div className="text-[10px] font-semibold text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded mt-0.5">
                        {landmark.travelTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`/pgs/${selectedPg.slug}`}
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all"
              >
                <span>View Full {selectedPg.name} Rooms & Photos</span>
                <ChevronRight className="w-4 h-4 ml-1.5 text-amber-400" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
