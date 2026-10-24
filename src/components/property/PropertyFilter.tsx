'use client';

import { useState, useMemo } from 'react';
import { Property, BrandType, GenderType } from '@/types/property';
import PropertyCard from './PropertyCard';
import { Filter, Sparkles, Shield, RotateCcw, Building2 } from 'lucide-react';

interface PropertyFilterProps {
  initialProperties: Property[];
  defaultBrand?: BrandType;
  defaultGender?: GenderType;
}

export default function PropertyFilter({
  initialProperties,
  defaultBrand,
  defaultGender,
}: PropertyFilterProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>(defaultBrand || 'ALL');
  const [selectedGender, setSelectedGender] = useState<string>(defaultGender || 'ALL');
  const [selectedSharing, setSelectedSharing] = useState<string>('ALL');
  const [selectedType, setSelectedType] = useState<string>('ALL'); // ALL, AC, NON_AC

  const filteredProperties = useMemo(() => {
    return initialProperties.filter((property) => {
      // Brand filter
      if (selectedBrand !== 'ALL' && property.brand !== selectedBrand) {
        return false;
      }
      // Gender filter
      if (selectedGender !== 'ALL' && property.gender !== selectedGender) {
        return false;
      }
      // Sharing filter
      if (selectedSharing !== 'ALL') {
        const targetSharing = parseInt(selectedSharing, 10);
        const hasSharing = property.roomOptions.some((r) => r.sharing === targetSharing);
        if (!hasSharing) return false;
      }
      // AC vs Non-AC filter
      if (selectedType !== 'ALL') {
        if (selectedType === 'AC') {
          const hasAC = property.roomOptions.some((r) => r.type === 'AC' || r.type === 'ALL_AC');
          if (!hasAC) return false;
        } else if (selectedType === 'NON_AC') {
          const hasNonAC = property.roomOptions.some((r) => r.type === 'NON_AC');
          if (!hasNonAC) return false;
        }
      }
      return true;
    });
  }, [initialProperties, selectedBrand, selectedGender, selectedSharing, selectedType]);

  const resetFilters = () => {
    setSelectedBrand('ALL');
    setSelectedGender('ALL');
    setSelectedSharing('ALL');
    setSelectedType('ALL');
  };

  const isFiltered =
    selectedBrand !== 'ALL' ||
    selectedGender !== 'ALL' ||
    selectedSharing !== 'ALL' ||
    selectedType !== 'ALL';

  return (
    <div className="space-y-6">
      {/* Sleek Flipkart-Style Quick Filter Bar */}
      <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* Quick Filter Pill Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                setSelectedBrand('ALL');
                setSelectedGender('ALL');
                setSelectedType('ALL');
                setSelectedSharing('ALL');
              }}
              className={`py-2 px-3.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                !isFiltered
                  ? 'bg-slate-900 text-white shadow-md ring-2 ring-slate-800'
                  : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
              }`}
            >
              All Stays ({initialProperties.length})
            </button>

            {/* Boys PG Pill */}
            <button
              onClick={() => setSelectedGender(selectedGender === 'BOYS' ? 'ALL' : 'BOYS')}
              className={`py-2 px-3.5 rounded-full text-xs font-bold transition-all flex items-center cursor-pointer ${
                selectedGender === 'BOYS'
                  ? 'bg-blue-700 text-white shadow-md ring-2 ring-blue-500'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-blue-500 hover:text-blue-700'
              }`}
            >
              <span className="mr-1.5">👦</span>
              <span>Boys PG (5)</span>
            </button>

            {/* Girls PG Pill */}
            <button
              onClick={() => setSelectedGender(selectedGender === 'GIRLS' ? 'ALL' : 'GIRLS')}
              className={`py-2 px-3.5 rounded-full text-xs font-bold transition-all flex items-center cursor-pointer ${
                selectedGender === 'GIRLS'
                  ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md ring-2 ring-rose-400'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-rose-400 hover:text-rose-600'
              }`}
            >
              <span className="mr-1.5">👧</span>
              <span>Girls PG (2)</span>
            </button>

            {/* Luxora Collection Pill */}
            <button
              onClick={() => setSelectedBrand(selectedBrand === 'LUXORA' ? 'ALL' : 'LUXORA')}
              className={`py-2 px-3.5 rounded-full text-xs font-bold transition-all flex items-center cursor-pointer ${
                selectedBrand === 'LUXORA'
                  ? 'bg-luxora-900 text-amber-300 shadow-md ring-2 ring-amber-400'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-amber-400 hover:text-luxora-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
              <span>Luxora Luxury (2)</span>
            </button>

            {/* Sorath Collection Pill */}
            <button
              onClick={() => setSelectedBrand(selectedBrand === 'SORATH' ? 'ALL' : 'SORATH')}
              className={`py-2 px-3.5 rounded-full text-xs font-bold transition-all flex items-center cursor-pointer ${
                selectedBrand === 'SORATH'
                  ? 'bg-teal-700 text-white shadow-md ring-2 ring-teal-400'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-teal-500 hover:text-teal-700'
              }`}
            >
              <Shield className="w-3.5 h-3.5 mr-1.5 text-teal-500" />
              <span>Sorath Budget (5)</span>
            </button>

            {/* AC Only Pill */}
            <button
              onClick={() => setSelectedType(selectedType === 'AC' ? 'ALL' : 'AC')}
              className={`py-2 px-3.5 rounded-full text-xs font-bold transition-all flex items-center cursor-pointer ${
                selectedType === 'AC'
                  ? 'bg-cyan-700 text-white shadow-md ring-2 ring-cyan-400'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-cyan-500 hover:text-cyan-700'
              }`}
            >
              <span className="mr-1">❄️</span>
              <span>AC Only</span>
            </button>

            {/* Sharing Dropdown Pill */}
            <select
              value={selectedSharing}
              onChange={(e) => setSelectedSharing(e.target.value)}
              className="py-2 px-3 rounded-full text-xs font-bold border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer shadow-sm"
              aria-label="Filter by room sharing"
            >
              <option value="ALL">🛏️ Any Sharing</option>
              <option value="2">2-Sharing</option>
              <option value="3">3-Sharing</option>
              <option value="4">4-Sharing</option>
              <option value="5">5-Sharing</option>
            </select>
          </div>

          {/* Right Status & Reset */}
          <div className="flex items-center space-x-2.5 ml-auto">
            <span className="text-xs font-extrabold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
              Showing <strong>{filteredProperties.length}</strong> of {initialProperties.length} PGs
            </span>
            {isFiltered && (
              <button
                onClick={resetFilters}
                className="py-1.5 px-3 rounded-full text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 hover:bg-rose-100 flex items-center transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3 mr-1" />
                Reset
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Grid of Results */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
          <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-600">
            <Building2 className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-slate-800">No PGs Match Your Specific Filter</h4>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            Try adjusting your sharing tier or cooling filter, or reset all filters to view our full collection of 7 properties.
          </p>
          <button
            onClick={resetFilters}
            className="mt-5 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-luxora-900 font-bold text-xs rounded-xl transition-all"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
