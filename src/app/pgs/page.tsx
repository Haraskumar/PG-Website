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
  alternates: {
    canonical: 'https://luxorasorathpg.com/pgs',
  },
  openGraph: {
    title: 'Explore All 7 PG Accommodations in Navrangpura & Naranpura',
    description:
      'Compare 7 verified student and executive PGs in Ahmedabad. Filter by Luxora (Luxury) or Sorath (Budget), Boys or Girls, 2, 3, 4, 5 sharing, AC or Non-AC.',
    url: 'https://luxorasorathpg.com/pgs',
    type: 'website',
  },
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
    <div className="min-h-screen theme-bg-gradient flex flex-col">
      {/* 1. High-Contrast Dark Luxury Catalog Header */}
      <section className="bg-slate-950 text-white py-14 sm:py-16 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-1/4 w-96 h-64 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-64 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-gradient-to-r from-amber-500/20 via-slate-800 to-teal-500/20 border border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300">Complete Network Directory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Explore All 7 PG Stays in{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-teal-300 bg-clip-text text-transparent">
              Ahmedabad
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Ultra-luxury co-living with 4 meals at <strong>Luxora</strong>, and smart budget student stays with 3 meals from ₹8,500 at <strong>Sorath</strong>.
          </p>

          {/* Quick Category Summary Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6 text-xs font-bold">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-amber-400/40 text-amber-300 shadow-sm flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              2 Luxora Luxury PGs
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-teal-400/40 text-teal-300 shadow-sm flex items-center">
              <Shield className="w-3.5 h-3.5 mr-1.5 text-teal-400" />
              5 Sorath Budget PGs
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-900/50 border border-blue-400/40 text-blue-300 shadow-sm">
              👦 5 Boys PGs
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-900/50 border border-rose-400/40 text-rose-300 shadow-sm">
              👧 2 Girls PGs
            </span>
          </div>
        </div>
      </section>

      {/* 2. Results & Sleek Flipkart Quick Filter Area */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <Suspense fallback={<div className="text-center py-12 text-slate-500 font-medium">Loading accommodations...</div>}>
          <PgsFilterWrapper searchParams={props.searchParams} />
        </Suspense>
      </section>
    </div>
  );
}
