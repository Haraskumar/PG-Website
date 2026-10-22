'use client';

import { useState } from 'react';
import { PROPERTIES } from '@/data/properties';
import { MapPin, Navigation, Bus, School, Building, ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function TransitCalculator() {
  const [selectedPgId, setSelectedPgId] = useState(PROPERTIES[0].id);
  const selectedPg = PROPERTIES.find((p) => p.id === selectedPgId) || PROPERTIES[0];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>Prime Ahmedabad Student Connectivity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate Walking & Transit Times
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Every one of our 7 PG properties is strategically positioned in Navrangpura and Naranpura within quick walking or BRTS transit distance to Ahmedabad’s premier colleges and metro lines.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {PROPERTIES.map((pg) => {
            const isSelected = pg.id === selectedPgId;
            const isLuxora = pg.brand === 'LUXORA';
            return (
              <button
                key={pg.id}
                onClick={() => setSelectedPgId(pg.id)}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? isLuxora
                      ? 'bg-luxora-900 text-amber-300 shadow-md ring-2 ring-amber-400'
                      : 'bg-teal-700 text-white shadow-md ring-2 ring-teal-400'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
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

        {/* Selected PG Transit Display Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-1 space-y-4 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0">
            <div className="flex items-center space-x-2">
              <span className={`px-2.5 py-1 rounded-md text-[11px] font-extrabold tracking-wider uppercase ${selectedPg.brand === 'LUXORA' ? 'bg-amber-100 text-amber-800' : 'bg-teal-100 text-teal-800'}`}>
                {selectedPg.brand} Collection
              </span>
              <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${selectedPg.gender === 'BOYS' ? 'bg-blue-100 text-blue-700' : 'bg-rose-100 text-rose-700'}`}>
                {selectedPg.gender === 'BOYS' ? 'Boys Accommodations' : 'Girls Accommodations'}
              </span>
            </div>

            <h3 className="text-2xl font-black text-slate-900">{selectedPg.name}</h3>

            <div className="text-xs text-slate-500 flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{selectedPg.address}</span>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-700">
              <div className="font-bold text-slate-900 mb-1">Key Neighborhood Landmark:</div>
              {selectedPg.landmark}
            </div>

            <div className="pt-2">
              <Link
                href={`/pgs/${selectedPg.slug}`}
                className="inline-flex items-center px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all"
              >
                <span>View Full Property Details</span>
                <ChevronRight className="w-4 h-4 ml-1 text-amber-400" />
              </Link>
            </div>
          </div>

          {/* Right Landmarks Grid */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Commute Distance & Estimated Travel Time:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedPg.landmarks.map((landmark, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200/80 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 shadow-sm">
                      {landmark.category === 'college' && <School className="w-5 h-5 text-indigo-600" />}
                      {landmark.category === 'transit' && <Bus className="w-5 h-5 text-emerald-600" />}
                      {landmark.category === 'shopping' && <Building className="w-5 h-5 text-amber-600" />}
                      {landmark.category === 'hospital' && <ShieldCheck className="w-5 h-5 text-rose-600" />}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{landmark.name}</div>
                      <div className="text-xs text-slate-500 capitalize">{landmark.category} Landmark</div>
                    </div>
                  </div>

                  <div className="text-right shrink-0 pl-2">
                    <div className="text-sm font-black text-slate-900">{landmark.distanceKm}</div>
                    <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md mt-0.5">
                      {landmark.travelTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
