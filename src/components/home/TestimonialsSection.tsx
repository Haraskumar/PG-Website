import { TESTIMONIALS } from '@/data/testimonials';
import { Star, Quote, Award } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Trusted By Students & Parents</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by 500+ Residents Across Ahmedabad
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Hear from students studying at CEPT, Gujarat University, LD College, and working professionals who call Luxora and Sorath their second home.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Brand Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                      t.brand === 'LUXORA'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-teal-100 text-teal-800'
                    }`}
                  >
                    {t.brand} PG
                  </span>
                </div>

                <Quote className="w-8 h-8 text-slate-200 mb-2" />

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                  <div className="text-[11px] font-semibold text-amber-600 mt-0.5">
                    {t.propertyName}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 font-medium text-right">
                  {t.stayDuration}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
