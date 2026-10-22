import Link from 'next/link';
import { LUXORA_MEAL_INFO, SORATH_MEAL_INFO } from '@/data/food-menu';
import { Utensils, CheckCircle2, ChevronRight, Sparkles, Coffee, Shield } from 'lucide-react';

export default function FoodSection() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-amber-500/10 border border-amber-400/30 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>Homely Nutrition Included In Rent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Delicious, Hygienic & Unlimited Dining
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Say goodbye to outside tiffin problems. Every single meal is cooked daily in our clean kitchens with seasonal vegetables, pure spices, and RO drinking water.
          </p>
        </div>

        {/* Dual Brand Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Luxora Dining Card */}
          <div className="bg-gradient-to-br from-luxora-950 via-slate-900 to-slate-900 rounded-3xl p-8 border border-amber-400/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 bg-amber-400/20 border border-amber-400/40 text-amber-300 rounded-full text-xs font-bold">
                  <Sparkles className="w-3 h-3 mr-1" />
                  LUXORA DINING
                </span>
                <span className="text-xs font-semibold text-slate-400">4 Times Every Day</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{LUXORA_MEAL_INFO.title}</h3>
              <p className="text-xs text-amber-300/90 font-medium mb-6">
                Breakfast • Wholesome Lunch • Evening Hot Snacks & Tea • Grand Dinner
              </p>

              <div className="space-y-3 mb-8">
                {LUXORA_MEAL_INFO.highlights.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-start text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 mr-2.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Sample Day Preview */}
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 text-xs space-y-2 mb-6">
                <div className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                  Sample Day Highlights (Luxora):
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-400 font-semibold">Breakfast:</span> Poha / Upma with Green Chutney, Masala Tea & Fresh Milk
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-400 font-semibold">Evening Snack:</span> Hot Tea / Coffee with Vegetable Cutlets or Khaman
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-400 font-semibold">Dinner:</span> Paneer Butter Masala, Tawa Rotis, Jeera Rice & Dal Tadka
                </div>
              </div>
            </div>

            <Link
              href="/food-menu"
              className="py-3 px-4 bg-amber-400 hover:bg-amber-300 text-luxora-950 font-bold text-xs rounded-xl text-center transition-colors flex items-center justify-center"
            >
              <span>View Full Weekly 7-Day Menu</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Sorath Dining Card */}
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950/40 rounded-3xl p-8 border border-teal-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 bg-teal-500/20 border border-teal-400/40 text-teal-300 rounded-full text-xs font-bold">
                  <Shield className="w-3 h-3 mr-1" />
                  SORATH DINING
                </span>
                <span className="text-xs font-semibold text-slate-400">3 Times Every Day</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{SORATH_MEAL_INFO.title}</h3>
              <p className="text-xs text-teal-300/90 font-medium mb-6">
                Fresh Breakfast • Unlimited Lunch • Hot Home-Cooked Dinner
              </p>

              <div className="space-y-3 mb-8">
                {SORATH_MEAL_INFO.highlights.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-start text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 mr-2.5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Sample Day Preview */}
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 text-xs space-y-2 mb-6">
                <div className="text-teal-400 font-bold uppercase tracking-wider text-[11px]">
                  Sample Day Highlights (Sorath):
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-400 font-semibold">Breakfast:</span> Methi Thepla with Pickle, Fresh Curd & Masala Tea
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-400 font-semibold">Lunch:</span> Gujarati Dal, Steamed Rice, Sukhi Bhaji, Rotis & Chhaas
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-400 font-semibold">Dinner:</span> Sev Tameta Nu Shaak, Dal Fry, Steamed Rice & Hot Rotis
                </div>
              </div>
            </div>

            <Link
              href="/food-menu"
              className="py-3 px-4 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-xl text-center transition-colors flex items-center justify-center"
            >
              <span>View Full Weekly 7-Day Menu</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
