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
  const [minPrice, setMinPrice] = useState<number>(8500);
  const [maxPrice, setMaxPrice] = useState<number>(20000);

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
      // Price range filter
      const propertyMinPrice = property.minPrice ?? 8500;
      const propertyMaxPrice = property.maxPrice ?? 20000;
      if (propertyMaxPrice < minPrice || propertyMinPrice > maxPrice) return false;
      return true;
    });
  }, [initialProperties, selectedBrand, selectedGender, selectedSharing, selectedType, minPrice, maxPrice]);

  const resetFilters = () => {
    setSelectedBrand('ALL');
    setSelectedGender('ALL');
    setSelectedSharing('ALL');
    setSelectedType('ALL');
    setMinPrice(8500);
    setMaxPrice(20000);
  };

  const isFiltered =
    selectedBrand !== 'ALL' ||
    selectedGender !== 'ALL' ||
    selectedSharing !== 'ALL' ||
    selectedType !== 'ALL' ||
    minPrice > 8500 ||
    maxPrice < 20000;

  return (
    <div className="space-y-8">
      {/* Filter Control Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600">
              <Filter className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Filter PG Accommodations</h3>
              <p className="text-xs text-slate-500">
                Explore by luxury tier, gender segregation, sharing configuration, or cooling
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
              Showing <strong>{filteredProperties.length}</strong> of {initialProperties.length} PGs
            </span>
            {isFiltered && (
              <button
                onClick={resetFilters}
                className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center bg-rose-50 px-3 py-1.5 rounded-full transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Filter Toggles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          
          {/* Brand Toggle */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
              Brand Collection
            </label>
            <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                onClick={() => setSelectedBrand('ALL')}
                className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all ${
                  selectedBrand === 'ALL'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Brands
              </button>
              <button
                onClick={() => setSelectedBrand('LUXORA')}
                className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center ${
                  selectedBrand === 'LUXORA'
                    ? 'bg-luxora-900 text-amber-300 shadow-sm'
                    : 'text-slate-600 hover:text-luxora-900'
                }`}
              >
                <Sparkles className="w-3 h-3 mr-1 text-amber-400" />
                Luxora
              </button>
              <button
                onClick={() => setSelectedBrand('SORATH')}
                className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center ${
                  selectedBrand === 'SORATH'
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-teal-700'
                }`}
              >
                <Shield className="w-3 h-3 mr-1 text-teal-300" />
                Sorath
              </button>
            </div>
          </div>

          {/* Gender Toggle */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
              Gender Category
            </label>
            <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                onClick={() => setSelectedGender('ALL')}
                className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all ${
                  selectedGender === 'ALL'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedGender('BOYS')}
                className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all ${
                  selectedGender === 'BOYS'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                👦 Boys PG
              </button>
              <button
                onClick={() => setSelectedGender('GIRLS')}
                className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all ${
                  selectedGender === 'GIRLS'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-rose-600'
                }`}
              >
                👧 Girls PG
              </button>
            </div>
          </div>

          {/* Sharing Configuration */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
              Sharing Preference
            </label>
            <select
              value={selectedSharing}
              onChange={(e) => setSelectedSharing(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            >
              <option value="ALL">Any Sharing (2, 3, 4, 5)</option>
              <option value="2">2 Sharing Only</option>
              <option value="3">3 Sharing Only</option>
              <option value="4">4 Sharing Only</option>
              <option value="5">5 Sharing Only</option>
            </select>
          </div>

          {/* AC / Non-AC Cooling */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
              Room Cooling
            </label>
            <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200">
              <button
                onClick={() => setSelectedType('ALL')}
                className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all ${
                  selectedType === 'ALL'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedType('AC')}
                className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all ${
                  selectedType === 'AC'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-cyan-700'
                }`}
              >
                ❄️ AC Only
              </button>
              <button
                onClick={() => setSelectedType('NON_AC')}
                className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-lg transition-all ${
                  selectedType === 'NON_AC'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-emerald-700'
                }`}
              >
                💨 Non-AC
              </button>
            </div>
          </div>

        </div>

        {/* Price Range Slider */}
        <div className="pt-6 border-t border-slate-100 mt-6">
          <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
            Monthly Budget Range: <span className="text-amber-600">₹{minPrice.toLocaleString('en-IN')} – ₹{maxPrice.toLocaleString('en-IN')}</span>
          </label>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap">₹8,500</span>
            <div className="flex-1 relative">
              <input
                type="range"
                min={8500}
                max={20000}
                step={500}
                value={minPrice}
                onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 500))}
                className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-amber-500"
              />
              <input
                type="range"
                min={8500}
                max={20000}
                step={500}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 500))}
                className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-teal-500 mt-2"
              />
            </div>
            <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap">₹20,000</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Use both sliders to narrow the monthly rent range. Top slider = minimum, bottom slider = maximum.</p>
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
