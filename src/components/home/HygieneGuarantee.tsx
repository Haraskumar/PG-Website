import { ShieldCheck, Sparkles, Droplets, Utensils, CheckCircle2, Bug, WashingMachine } from 'lucide-react';

export default function HygieneGuarantee() {
  const hygienePillars = [
    {
      icon: <Sparkles className="w-5 h-5 text-amber-600" />,
      bg: 'bg-amber-100',
      border: 'border-amber-200',
      title: 'Daily Room Housekeeping',
      desc: 'All bedrooms, common corridors, study areas, and staircases are swept and mopped every single day by on-site housekeeping staff.'
    },
    {
      icon: <Droplets className="w-5 h-5 text-cyan-600" />,
      bg: 'bg-cyan-100',
      border: 'border-cyan-200',
      title: 'Disinfected Washrooms',
      desc: 'Attached and shared washrooms undergo deep scrubbing with anti-bacterial agents, keeping mirrors, geysers, and fittings spotless.'
    },
    {
      icon: <Utensils className="w-5 h-5 text-emerald-600" />,
      bg: 'bg-emerald-100',
      border: 'border-emerald-200',
      title: 'Sanitized Mess & Kitchen',
      desc: 'Stainless steel commercial cookware, filtered water vegetable washing, and strict kitchen hygiene standards supervised daily by management.'
    },
    {
      icon: <Droplets className="w-5 h-5 text-blue-600" />,
      bg: 'bg-blue-100',
      border: 'border-blue-200',
      title: 'Multi-Stage RO Drinking Water',
      desc: 'High-capacity RO + UV drinking water purification systems installed on every floor with regular filter changes and TDS monitoring.'
    },
    {
      icon: <Bug className="w-5 h-5 text-rose-600" />,
      bg: 'bg-rose-100',
      border: 'border-rose-200',
      title: 'Periodic Pest Control',
      desc: 'Scheduled anti-pest and anti-termite treatment across all room wardrobes, dorm spaces, and dining halls to maintain 100% insect-free living.'
    },
    {
      icon: <WashingMachine className="w-5 h-5 text-indigo-600" />,
      bg: 'bg-indigo-100',
      border: 'border-indigo-200',
      title: 'Washing Machines & Laundry',
      desc: 'Automatic washing machines and dedicated terrace drying zones ensure clean clothes, linens, and personal hygiene throughout the semester.'
    }
  ];

  return (
    <section className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-emerald-100 border border-emerald-300 rounded-full text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Health & Living Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hospital-Grade Hygiene & Daily Cleaning Guarantee
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Parents and residents trust Luxora & Sorath because we hold our facilities to strict sanitary protocols. Cleanliness is not an afterthought — it is maintained round-the-clock.
          </p>
        </div>

        {/* 6 Hygiene Pillars Grid with Distinct Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hygienePillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl bg-white border ${pillar.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${pillar.bg} flex items-center justify-center mb-5 shadow-sm`}>
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-bold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                <span>Standard across all 7 properties</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Want to inspect room hygiene in person?</div>
              <div className="text-xs text-slate-500">Walk into any of our properties today. Check washrooms, taste the food, and meet our housekeeping staff.</div>
            </div>
          </div>
          <a
            href="tel:+917069581011"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs shrink-0 transition-colors"
          >
            Schedule Free Inspection Visit
          </a>
        </div>

      </div>
    </section>
  );
}
