import { Metadata } from 'next';
import Image from 'next/image';
import { LUXORA_MEAL_INFO, SORATH_MEAL_INFO } from '@/data/food-menu';
import { Utensils, CheckCircle2, Sparkles, Shield, Clock, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Food & Dining Menu | 4-Time & 3-Time Wholesome Meals Included',
  description:
    'Explore the 7-day weekly food schedule for Luxora PG (4 times daily) and Sorath PG (3 times daily) in Ahmedabad. Fresh, hygienic, and unlimited Gujarati & North Indian meals.',
  alternates: {
    canonical: 'https://luxora11.in/food-menu',
  },
  openGraph: {
    title: 'Food & Dining Menu | 4-Time & 3-Time Wholesome Meals Included',
    description:
      'Explore the 7-day weekly food schedule for Luxora PG (4 times daily) and Sorath PG (3 times daily) in Ahmedabad. Fresh, hygienic, and unlimited Gujarati & North Indian meals.',
    url: 'https://luxora11.in/food-menu',
    type: 'website',
  },
};

export default function FoodMenuPage() {
  return (
    <div className="min-h-screen theme-bg-gradient">

      {/* Dark Hero Banner */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-40 bg-amber-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-40 bg-teal-500/8 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-amber-400/15 border border-amber-400/30 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider mb-5">
            <Utensils className="w-3.5 h-3.5" />
            <span>Nutritious Home Dining — Included in Rent</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Food & Dining Experience
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Healthy living starts with clean, consistent food. All meals are prepared by in-house cooks using fresh ingredients, pure RO water, and balanced spices — served hot every single day.
          </p>

          {/* Quick Stats Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <div className="flex items-center space-x-2 bg-white/8 border border-white/10 px-4 py-2 rounded-full text-xs font-bold text-white">
              <span className="text-amber-400">✦</span>
              <span>Luxora: 4 Meals / Day</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/8 border border-white/10 px-4 py-2 rounded-full text-xs font-bold text-white">
              <span className="text-teal-400">✦</span>
              <span>Sorath: 3 Meals / Day</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/8 border border-white/10 px-4 py-2 rounded-full text-xs font-bold text-white">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Hot & Fresh — Every Day</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/8 border border-white/10 px-4 py-2 rounded-full text-xs font-bold text-white">
              <span>🫙</span>
              <span>Unlimited Servings</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Brand Comparison Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Luxora Card */}
            <div className="bg-gradient-to-br from-luxora-950 via-slate-900 to-luxora-900 rounded-3xl p-8 text-white border border-amber-400/30 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-bold border border-amber-400/40">
                  LUXORA DINING
                </span>
                <span className="text-xs text-amber-400 font-bold">4 Times A Day</span>
              </div>
              <h2 className="text-2xl font-black">{LUXORA_MEAL_INFO.title}</h2>
              <p className="text-xs text-slate-300 mt-2 mb-6">
                Included in monthly rent across <strong>Luxora Boys PG 1</strong> and <strong>Luxora Girls PG 1</strong>.
              </p>
              <div className="space-y-2.5">
                {LUXORA_MEAL_INFO.highlights.map((h, i) => (
                  <div key={i} className="flex items-start text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-amber-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sorath Card */}
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 rounded-3xl p-8 text-white border border-teal-500/30 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-bold border border-teal-400/40">
                  SORATH DINING
                </span>
                <span className="text-xs text-teal-400 font-bold">3 Times A Day</span>
              </div>
              <h2 className="text-2xl font-black">{SORATH_MEAL_INFO.title}</h2>
              <p className="text-xs text-slate-300 mt-2 mb-6">
                Included in monthly rent across all 5 <strong>Sorath PG</strong> properties.
              </p>
              <div className="space-y-2.5">
                {SORATH_MEAL_INFO.highlights.map((h, i) => (
                  <div key={i} className="flex items-start text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-teal-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 1. LUXORA 7-Day Weekly Menu Table */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-amber-100 rounded-xl text-amber-700">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Luxora PG: Complete 7-Day Gourmet Menu
                  </h3>
                  <p className="text-xs text-slate-500">
                    Breakfast • Wholesome Lunch • Evening Hot Snack & Tea • Delicious Dinner
                  </p>
                </div>
              </div>

              <a
                href="/images/food-menu/luxora-gourmet-menu.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-amber-900 bg-amber-100/80 hover:bg-amber-100 px-3.5 py-2 rounded-xl border border-amber-300 transition-colors shrink-0"
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                <span>View Full Menu Card</span>
              </a>
            </div>

            {/* Official Visual Menu Card Image */}
            <div className="mb-8 rounded-2xl overflow-hidden border border-amber-300/60 shadow-sm bg-slate-950/5 group relative">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[550px]">
                <Image
                  src="/images/food-menu/luxora-gourmet-menu.webp"
                  alt="Luxora PG Complete 7-Day Gourmet Menu - Breakfast, Lunch, Evening Snack & Tea, Dinner"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-3 bg-amber-50/90 border-t border-amber-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-slate-700">
                  📋 Official 7-Day Gourmet Menu Schedule (Nutritious, Homely & Freshly Prepared)
                </span>
                <a
                  href="/images/food-menu/luxora-gourmet-menu.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-800 hover:text-amber-950 underline"
                >
                  Click to open high-resolution image ↗
                </a>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-amber-50 text-slate-700 uppercase font-black tracking-wider">
                    <th className="py-3.5 px-4 rounded-l-xl">Day</th>
                    <th className="py-3.5 px-4">Breakfast</th>
                    <th className="py-3.5 px-4">Lunch</th>
                    <th className="py-3.5 px-4">Evening Snack & Tea</th>
                    <th className="py-3.5 px-4 rounded-r-xl">Dinner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {LUXORA_MEAL_INFO.schedule.map((item, idx) => (
                    <tr key={idx} className={`hover:bg-amber-50/40 transition-colors ${idx % 2 === 0 ? '' : 'bg-slate-50/50'}`}>
                      <td className="py-4 px-4 font-extrabold text-slate-900 whitespace-nowrap">
                        {item.day}
                      </td>
                      <td className="py-4 px-4 leading-relaxed">{item.breakfast}</td>
                      <td className="py-4 px-4 leading-relaxed">{item.lunch}</td>
                      <td className="py-4 px-4 leading-relaxed text-amber-700 font-semibold">{item.eveningSnack}</td>
                      <td className="py-4 px-4 leading-relaxed">{item.dinner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. SORATH 7-Day Weekly Menu Table */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 bg-teal-100 rounded-xl text-teal-700">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  Sorath PG: Complete 7-Day Student Menu
                </h3>
                <p className="text-xs text-slate-500">
                  Morning Breakfast • Unlimited Afternoon Lunch • Hot Evening Dinner
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-teal-50 text-slate-700 uppercase font-black tracking-wider">
                    <th className="py-3.5 px-4 rounded-l-xl">Day</th>
                    <th className="py-3.5 px-4">Breakfast</th>
                    <th className="py-3.5 px-4">Lunch</th>
                    <th className="py-3.5 px-4 rounded-r-xl">Dinner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {SORATH_MEAL_INFO.schedule.map((item, idx) => (
                    <tr key={idx} className={`hover:bg-teal-50/40 transition-colors ${idx % 2 === 0 ? '' : 'bg-slate-50/50'}`}>
                      <td className="py-4 px-4 font-extrabold text-slate-900 whitespace-nowrap">
                        {item.day}
                      </td>
                      <td className="py-4 px-4 leading-relaxed">{item.breakfast}</td>
                      <td className="py-4 px-4 leading-relaxed">{item.lunch}</td>
                      <td className="py-4 px-4 leading-relaxed">{item.dinner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
