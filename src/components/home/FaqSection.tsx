'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { CONTACTS } from '@/data/contacts';
import { FAQS } from '@/data/faqs';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 theme-bg-gradient border-t border-white/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-amber-300" />
            <span>Admissions & Stay Guidelines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Frequently Asked Questions
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mt-2 font-medium">
            Quick answers about admission procedures, food timings, security, and room rules.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-amber-400 text-luxora-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 text-xs sm:text-base text-slate-600 leading-7 border-t border-slate-100 bg-slate-50/50">
                  {faq.a}
                </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-slate-900">Have a specific question not covered here?</div>
            <div className="text-xs text-slate-600 mt-0.5">Speak directly with management for personalized assistance.</div>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={`tel:${CONTACTS.primaryPhone}`}
              className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors flex items-center"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              Call PG
            </a>
            <a
              href={`https://wa.me/${CONTACTS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-500 transition-colors flex items-center"
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
