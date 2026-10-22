import { Suspense } from 'react';
import { Metadata } from 'next';
import { PROPERTIES } from '@/data/properties';
import PropertyFilter from '@/components/property/PropertyFilter';
import { Building2, Sparkles, Shield } from 'lucide-react';
import { BrandType, GenderType } from '@/types/property';

export const metadata: Metadata = {
  title: 'Explore All 7 PG Accommodations in Navrangpura & Naranpura',
  description:
    'Compare 7 verified student and executive PGs in Ahmedabad. Filter by Luxora (Luxury) or Sorath (Budget), Boys or Girls, 2, 3, 4, 5 sharing, AC or Non-AC.',
};

interface PgsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function PgsFilterWrapper({ searchParams }: PgsPageProps) {
  const params = await searchParams;
  const brandParam = typeof params.brand === 'string' ? (params.brand.toUpperCase() as BrandType) : undefined;
  const genderParam = typeof params.gender === 'string' ? (params.gender.toUpperCase() as GenderType) : undefined;

  return (
    <PropertyFilter
      initialProperties={PROPERTIES}
      defaultBrand={brandParam}
      defaultGender={genderParam}
    />
  );
}

export default function PgsPage(props: PgsPageProps) {
  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-amber-100/80 border border-amber-300 rounded-full text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Complete Network Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Explore All 7 PG Stays
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Whether you are looking for ultra-luxury co-living with 4 meals and home cinema at <strong>Luxora</strong>, or clean, high-value student living from ₹8,500 at <strong>Sorath</strong>, find your ideal match below.
          </p>

          {/* Quick Stats Pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs font-bold">
            <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
              2 Luxora Luxury PGs
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm flex items-center">
              <Shield className="w-3.5 h-3.5 mr-1.5 text-teal-600" />
              5 Sorath Smart Budget PGs
            </span>
            <span className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 shadow-sm">
              5 Boys PGs
            </span>
            <span className="px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 shadow-sm">
              2 Girls PGs
            </span>
          </div>
        </div>

        {/* Dynamic Filter Section */}
        <Suspense fallback={<div className="text-center py-12 text-slate-500 font-medium">Loading accommodations...</div>}>
          <PgsFilterWrapper searchParams={props.searchParams} />
        </Suspense>

      </div>
    </div>
  );
}
