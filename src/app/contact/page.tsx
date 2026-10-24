'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CONTACTS, getWhatsAppBookingUrl } from '@/data/contacts';
import { PROPERTIES } from '@/data/properties';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  MessageCircle,
  ExternalLink,
  Building2,
  Send,
  CheckCircle,
  ShieldCheck
} from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPg, setSelectedPg] = useState(PROPERTIES[0].name);
  const [sharingPreference, setSharingPreference] = useState('2 Sharing');
  const [messageText, setMessageText] = useState('');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query =
      `Hello Dhaval Bhai! New Inquiry from Website:\n\n` +
      `👤 *Name:* ${name || 'Prospective Resident'}\n` +
      `📞 *Phone:* ${phone || 'Provided via WhatsApp'}\n` +
      `🏢 *Interested PG:* ${selectedPg}\n` +
      `🛏️ *Sharing Preference:* ${sharingPreference}\n` +
      (messageText ? `💬 *Message:* ${messageText}\n` : '') +
      `\nPlease share availability and arrange a visit.`;

    const url = `https://wa.me/${CONTACTS.whatsappNumber}?text=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen theme-bg-gradient">
      
      {/* Dark Hero Banner */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-64 h-32 bg-amber-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-64 h-32 bg-teal-500/8 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-amber-400/15 border border-amber-400/30 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider mb-5">
            <Building2 className="w-3.5 h-3.5" />
            <span>Central Management & Direct Admissions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Talk to Us Directly
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Speak directly with property owners with zero intermediary fees. No agents, no brokerage — visit our central office or connect on WhatsApp instantly.
          </p>
          {/* Trust pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <span className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full flex items-center">
              <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
              Zero Brokerage Fee
            </span>
            <span className="bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
              Direct Owner Admission
            </span>
            <span className="bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full flex items-center">
              ⚡ Instant Room Confirmation
            </span>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 2-Column Main Contact Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          
          {/* Left Column: Central Office & Contact Cards */}
          <div className="space-y-6">
            
            {/* Office Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-[11px] font-black text-amber-600 uppercase tracking-wider">
                    Central Headquarters
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">
                    {CONTACTS.office.title}
                  </h3>
                </div>
                <div className="p-3 bg-amber-50 rounded-2xl text-amber-600">
                  <Building2 className="w-6 h-6" />
                </div>
              </div>

              {/* Office Photos Preview */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="relative h-40 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900">
                  <Image
                    src="/images/office/office-front.jpg"
                    alt="Sorath and Luxora central office entrance"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-0.5 rounded text-[10px] text-white">
                    Office Entrance
                  </div>
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900">
                  <Image
                    src="/images/office/office-building.jpg"
                    alt="Pallavi Tower Memnagar Fire Station building facade"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-0.5 rounded text-[10px] text-white">
                    Pallavi Tower Facade
                  </div>
                </div>
              </div>

              {/* Office Details */}
              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2.5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Address:</strong> {CONTACTS.office.address}, {CONTACTS.office.city} - {CONTACTS.office.pincode}
                    <div className="text-slate-500 text-[11px] mt-0.5">
                      Landmark: {CONTACTS.office.landmark}
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2.5 text-teal-600 shrink-0" />
                  <div>
                    <strong className="text-slate-900">Walk-in Hours:</strong> {CONTACTS.office.operatingHours}
                  </div>
                </div>
              </div>

              {/* Map CTA */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex gap-3">
                <a
                  href={CONTACTS.office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl text-center transition-colors flex items-center justify-center"
                >
                  <MapPin className="w-3.5 h-3.5 mr-2 text-amber-400" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-1.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Direct Phone & Social Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Dhaval Bhai Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                    Primary Contact & Admissions
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 mt-1">
                    {CONTACTS.primaryContactName}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    For room availability & site tours
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <a
                    href={`tel:${CONTACTS.primaryPhone}`}
                    className="flex items-center text-xs font-bold text-slate-900 hover:text-amber-600"
                  >
                    <Phone className="w-3.5 h-3.5 mr-2 text-amber-500" />
                    <span>{CONTACTS.primaryPhoneDisplay}</span>
                  </a>
                  <a
                    href={`https://wa.me/${CONTACTS.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-2 text-emerald-600" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Babu Bhai Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-teal-600 uppercase tracking-wider">
                    Operations & Facilities
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 mt-1">
                    {CONTACTS.secondaryContactName}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    For facility logistics & maintenance
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <a
                    href={`tel:${CONTACTS.secondaryPhone}`}
                    className="flex items-center text-xs font-bold text-slate-900 hover:text-teal-600"
                  >
                    <Phone className="w-3.5 h-3.5 mr-2 text-teal-500" />
                    <span>{CONTACTS.secondaryPhoneDisplay}</span>
                  </a>
                  <a
                    href={CONTACTS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs font-bold text-pink-700 hover:text-pink-800"
                  >
                    <Instagram className="w-3.5 h-3.5 mr-2 text-pink-500" />
                    <span>{CONTACTS.instagramHandle}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Instant WhatsApp Lead Inquiry Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Direct Zero-Brokerage Inquiries</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Send an Admission Inquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Fill this quick form to connect directly with Dhaval Bhai on WhatsApp with your exact property preference.
              </p>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Priyanshu Dave"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Contact Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred PG Property
                  </label>
                  <select
                    value={selectedPg}
                    onChange={(e) => setSelectedPg(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  >
                    {PROPERTIES.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.gender === 'BOYS' ? 'Boys' : 'Girls'} • {p.area})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Sharing
                  </label>
                  <select
                    value={sharingPreference}
                    onChange={(e) => setSharingPreference(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold bg-slate-50 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  >
                    <option value="2 Sharing">2 Sharing Room</option>
                    <option value="3 Sharing">3 Sharing Room</option>
                    <option value="4 Sharing">4 Sharing Room</option>
                    <option value="5 Sharing">5 Sharing Room</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Message or College Name (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Looking for AC room near Gujarat University starting next Monday..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wide transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Inquiry to Dhaval Bhai</span>
                </button>
              </form>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 text-[11px] text-slate-400 text-center">
              🔒 Direct submission • No third-party data sharing • Instant response
            </div>
          </div>

        </div>

        {/* Directory of All 7 Branch Locations */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <h3 className="text-2xl font-black text-slate-900 mb-2">
            Complete Directory of All 7 PG Branches
          </h3>
          <p className="text-xs text-slate-500 mb-8">
            Click on any branch address to open the exact location in Google Maps or view the property page.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPERTIES.map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${p.brand === 'LUXORA' ? 'bg-amber-100 text-amber-800' : 'bg-teal-100 text-teal-800'}`}>
                      {p.brand}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${p.gender === 'BOYS' ? 'bg-blue-100 text-blue-700' : 'bg-rose-100 text-rose-700'}`}>
                      {p.gender === 'BOYS' ? 'Boys' : 'Girls'}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 mb-1">{p.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2">{p.address}</p>
                  <p className="text-[11px] text-slate-500">Landmark: {p.landmark}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <a
                    href={p.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-amber-600 hover:text-amber-700 flex items-center"
                  >
                    <span>Google Map</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  <a
                    href={`/pgs/${p.slug}`}
                    className="text-[11px] font-bold text-slate-800 hover:text-slate-950"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
