'use client';

import { useState } from 'react';
import { CONTACTS, getWhatsAppBookingUrl } from '@/data/contacts';
import { Phone, MessageCircle, CalendarCheck, Sparkles, Zap } from 'lucide-react';
import VisitModal from '@/components/ui/VisitModal';

interface FloatingContactProps {
  currentPropertySlug?: string;
  currentPropertyName?: string;
}

export default function FloatingContact({ currentPropertySlug, currentPropertyName }: FloatingContactProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const whatsappUrl = getWhatsAppBookingUrl(currentPropertyName);

  return (
    <>
      {/* Desktop Floating Action Desk with Motion & Animations */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end space-y-3">
        
        {/* Animated Tooltip Capsule */}
        <div className="bg-slate-900/95 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full shadow-xl border border-slate-700/80 flex items-center space-x-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-slate-200">Admissions Desk Active</span>
          <span className="text-amber-400">•</span>
          <span className="text-amber-300 font-bold">Zero Brokerage</span>
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center space-x-3">
          
          {/* 1. Moving Quick Call Pill */}
          <a
            href={`tel:${CONTACTS.primaryPhone}`}
            className="flex items-center space-x-2 bg-slate-900/90 hover:bg-slate-900 text-amber-300 border border-amber-400/50 px-4 py-3 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 text-xs font-bold animate-float"
            title="Call Dhaval Bhai for instant room inquiry"
          >
            <Phone className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Call {CONTACTS.primaryPhoneDisplay}</span>
          </a>

          {/* 2. Fast Visit Booking Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-3 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 text-xs font-black"
          >
            <CalendarCheck className="w-4 h-4 text-slate-950" />
            <span>Book Visit</span>
          </button>

          {/* 3. Radar-Pulsing WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 radar-pulse-emerald"
            aria-label="Chat on WhatsApp"
            title="Chat directly on WhatsApp"
          >
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 text-slate-950 rounded-full text-[9px] font-black flex items-center justify-center border-2 border-white">
              1
            </span>
            <MessageCircle className="w-7 h-7" />
          </a>

        </div>
      </div>

      {/* Mobile Sticky Bottom Action Bar with Animated Elements */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-3 shadow-2xl flex items-center justify-between gap-2">
        <a
          href={`tel:${CONTACTS.primaryPhone}`}
          className="flex-1 flex items-center justify-center py-2.5 px-2 bg-slate-900 border border-slate-700 text-amber-300 rounded-xl text-xs font-bold active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 mr-1 text-amber-400 animate-pulse" />
          <span>Call Desk</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center py-2.5 px-2 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-600/40 active:scale-95 transition-transform radar-pulse-emerald"
        >
          <MessageCircle className="w-4 h-4 mr-1" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => setModalOpen(true)}
          className="flex-1 flex items-center justify-center py-2.5 px-2 bg-amber-400 text-slate-950 rounded-xl text-xs font-black shadow-md shadow-amber-400/40 active:scale-95 transition-transform"
        >
          <CalendarCheck className="w-4 h-4 mr-1 text-slate-950" />
          <span>Book Visit</span>
        </button>
      </div>

      {/* Booking Visit Modal */}
      <VisitModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPropertySlug={currentPropertySlug}
      />
    </>
  );
}
