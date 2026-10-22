'use client';

import { useState } from 'react';
import { PROPERTIES } from '@/data/properties';
import { CONTACTS, getWhatsAppDirectVisitUrl } from '@/data/contacts';
import { X, Phone, MessageCircle, Building2, Sparkles, CheckCircle2 } from 'lucide-react';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPropertySlug?: string;
}

export default function VisitModal({ isOpen, onClose, defaultPropertySlug }: VisitModalProps) {
  const [selectedProperty, setSelectedProperty] = useState(defaultPropertySlug || PROPERTIES[0].slug);
  const [name, setName] = useState('');
  const [userPhone, setUserPhone] = useState('');

  if (!isOpen) return null;

  const propertyObj = PROPERTIES.find((p) => p.slug === selectedProperty) || PROPERTIES[0];

  const handleWhatsAppSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const url = getWhatsAppDirectVisitUrl(propertyObj.name, name.trim(), userPhone.trim());
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 p-6 text-white relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-400/20 border border-amber-400/40 rounded-full text-amber-300 text-[11px] font-extrabold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zero Brokerage • Direct Owner</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            Schedule a PG Visit
          </h3>
          <p className="text-slate-300 text-xs mt-1">
            Tour the room, taste the food, check Wi-Fi speed. Free of charge!
          </p>
        </div>

        {/* Content Body */}
        <form onSubmit={handleWhatsAppSubmit} className="p-6 space-y-4 bg-slate-50">
          
          {/* Select Property */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Select PG Facility
            </label>
            <select
              value={selectedProperty}
              onChange={(e) => setSelectedProperty(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-xs font-bold bg-white text-slate-900 shadow-sm"
            >
              <optgroup label="Luxora Luxury Collection (Navrangpura & Naranpura)">
                {PROPERTIES.filter(p => p.brand === 'LUXORA').map(p => (
                  <option key={p.id} value={p.slug}>
                    {p.name} ({p.gender === 'BOYS' ? 'Boys' : 'Girls'} • {p.area})
                  </option>
                ))}
              </optgroup>
              <optgroup label="Sorath Smart Budget Collection (Vijay Cross Road)">
                {PROPERTIES.filter(p => p.brand === 'SORATH').map(p => (
                  <option key={p.id} value={p.slug}>
                    {p.name} ({p.gender === 'BOYS' ? 'Boys' : 'Girls'} • {p.area})
                  </option>
                ))}
              </optgroup>
            </select>
            <div className="text-[11px] text-slate-500 mt-1 flex items-center">
              <Building2 className="w-3 h-3 mr-1 text-amber-500 shrink-0" />
              <span className="truncate">{propertyObj.address}</span>
            </div>
          </div>

          {/* Quick Contact Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Aarav Patel"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 text-xs bg-white text-slate-900 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                WhatsApp No. <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 text-xs bg-white text-slate-900 shadow-sm"
              />
            </div>
          </div>

          {/* Key Inclusions Preview */}
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 space-y-1">
            <div className="font-bold flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
              <span>Instant Confirmation by Dhaval Bhai</span>
            </div>
            <p className="text-[11px] text-emerald-800">
              No long forms or waiting. Message directly to coordinate arrival time today!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all flex items-center justify-center shadow-lg shadow-emerald-600/30 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 mr-2 shrink-0" />
              <span>Connect on WhatsApp (1-Tap Schedule)</span>
            </button>

            <a
              href={`tel:${CONTACTS.primaryPhone}`}
              className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs transition-all flex items-center justify-center active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-amber-400 shrink-0" />
              <span>Call Dhaval Bhai Directly: {CONTACTS.primaryPhoneDisplay}</span>
            </a>
          </div>

        </form>

      </div>
    </div>
  );
}
