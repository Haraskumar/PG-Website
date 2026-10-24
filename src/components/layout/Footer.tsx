import Link from 'next/link';
import Image from 'next/image';
import { CONTACTS } from '@/data/contacts';
import { PROPERTIES } from '@/data/properties';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Clock,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Compass
} from 'lucide-react';

export default function Footer() {
  const luxoraProps = PROPERTIES.filter((p) => p.brand === 'LUXORA');
  const sorathProps = PROPERTIES.filter((p) => p.brand === 'SORATH');

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-20 sm:pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding & Call to Action Card */}
        <div className="bg-gradient-to-r from-slate-900 via-luxora-950 to-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl mb-12 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admissions Open for New Term</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Looking for the Perfect PG in Navrangpura or Naranpura?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
                Get zero-brokerage direct admissions, personalized room tours, and exact tariff details by reaching out to our central team today.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${CONTACTS.primaryPhone}`}
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-luxora-900 font-bold text-sm rounded-xl transition-all shadow-lg shadow-amber-400/20 flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </a>
              <a
                href={`https://wa.me/${CONTACTS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* 5-Column Grid with User-Requested Balanced Layout & Clear Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-8">
          
          {/* Col 1: Brands & About & Direct Contacts (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-xl p-1 border border-amber-400/40">
                <Image
                  src="/images/brand/luxora-logo.webp"
                  alt="Luxora Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl p-1 border border-teal-400/40">
                <Image
                  src="/images/brand/sorath-logo.svg"
                  alt="Sorath Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h4 className="text-white font-black tracking-wider text-base sm:text-lg">
                  LUXORA & SORATH
                </h4>
                <p className="text-xs text-amber-300 font-semibold tracking-wide">
                  Premium & Budget Co-Living Network Ahmedabad
                </p>
              </div>
            </div>

            {/* High-visibility Brand Description */}
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
              Managing 7 premium and budget-friendly PG properties across Navrangpura and Naranpura in Ahmedabad. Providing students and corporate professionals with safe, hygienic, food-inclusive stays with 150 Mbps Wi-Fi, biometric security, and prime university transit.
            </p>

            {/* Direct Contacts List with High Contrast */}
            <div className="space-y-2.5 pt-1">
              <a
                href={`tel:${CONTACTS.primaryPhone}`}
                className="flex items-center text-xs sm:text-sm text-slate-100 hover:text-amber-300 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-400/15 flex items-center justify-center mr-2.5 shrink-0 border border-amber-400/30 group-hover:bg-amber-400/25">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span>Primary: <strong className="text-white font-bold">{CONTACTS.primaryPhoneDisplay}</strong> ({CONTACTS.primaryContactName})</span>
              </a>
              <a
                href={`tel:${CONTACTS.secondaryPhone}`}
                className="flex items-center text-xs sm:text-sm text-slate-100 hover:text-teal-300 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-teal-400/15 flex items-center justify-center mr-2.5 shrink-0 border border-teal-400/30 group-hover:bg-teal-400/25">
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                </div>
                <span>Contact: <strong className="text-white font-bold">{CONTACTS.secondaryPhoneDisplay}</strong> ({CONTACTS.secondaryContactName})</span>
              </a>
              <a
                href={`mailto:${CONTACTS.email}`}
                className="flex items-center text-xs sm:text-sm text-slate-200 hover:text-amber-300 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-400/15 flex items-center justify-center mr-2.5 shrink-0 border border-amber-400/30">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span className="font-medium text-slate-200">{CONTACTS.email}</span>
              </a>
              <a
                href={CONTACTS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xs sm:text-sm text-slate-200 hover:text-pink-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-pink-400/15 flex items-center justify-center mr-2.5 shrink-0 border border-pink-400/30">
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                </div>
                <span>Instagram: <strong className="text-white">{CONTACTS.instagramHandle}</strong></span>
              </a>
            </div>
          </div>

          {/* Col 2: Luxora Collection */}
          <div>
            <h5 className="text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-3.5 flex items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 mr-2 shadow-xs shadow-amber-400/50" />
              Luxora Collection
            </h5>
            <ul className="space-y-3">
              {luxoraProps.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/pgs/${p.slug}`}
                    className="text-xs text-slate-300 hover:text-amber-400 transition-colors flex items-start group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 text-slate-500 group-hover:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-100 group-hover:text-amber-300 text-xs sm:text-sm">
                        {p.name}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">
                        {p.gender === 'BOYS' ? 'Boys PG' : 'Girls PG'} • {p.area}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
              <li className="pt-1.5">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                  <div className="text-amber-400 font-bold mb-1">Luxora Inclusions:</div>
                  4-Time Gourmet Meals • Full AC • Biometric • Home Cinema Lounge
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Sorath Collection */}
          <div>
            <h5 className="text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-3.5 flex items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 mr-2 shadow-xs shadow-teal-400/50" />
              Sorath Collection
            </h5>
            <ul className="space-y-3">
              {sorathProps.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/pgs/${p.slug}`}
                    className="text-xs text-slate-300 hover:text-teal-400 transition-colors flex items-start group"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 text-slate-500 group-hover:text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-slate-100 group-hover:text-teal-300 text-xs sm:text-sm">
                        {p.name}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">
                        {p.gender === 'BOYS' ? 'Boys PG' : 'Girls PG'} • {p.area}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Central Office & Hours */}
          <div>
            <h5 className="text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-3.5 flex items-center">
              <MapPin className="w-4 h-4 text-amber-400 mr-2" />
              Central Office Location
            </h5>
            <div className="text-xs sm:text-sm text-slate-300 space-y-3">
              <p className="leading-relaxed">
                <strong className="text-white font-bold">{CONTACTS.office.title}</strong><br />
                <span className="text-slate-300 text-xs sm:text-sm">{CONTACTS.office.address}, {CONTACTS.office.city} - {CONTACTS.office.pincode}</span>
              </p>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-amber-300/95 leading-snug">
                ℹ️ <strong>Note:</strong> Central management & admissions office. For individual PG locations, please visit each PG page.
              </div>
              <div className="flex items-center text-slate-300 text-xs">
                <Clock className="w-4 h-4 mr-2 text-teal-400 shrink-0" />
                <span>{CONTACTS.office.operatingHours}</span>
              </div>
              <a
                href={CONTACTS.office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-amber-300 hover:text-amber-200 rounded-lg border border-slate-700 font-bold text-xs transition-colors"
              >
                <span>View Office on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Middle Navigation Links: Moved from right side into the center space as requested */}
          <div className="lg:col-span-2 lg:col-start-3 md:col-span-2 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
            <h6 className="text-white font-bold text-xs uppercase tracking-wider mb-2.5 flex items-center">
              <Compass className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              <span>Quick Navigation Links</span>
            </h6>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                href="/"
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-amber-400 border border-slate-700/60 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/pgs"
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-amber-400 border border-slate-700/60 font-medium transition-colors"
              >
                All 7 PGs
              </Link>
              <Link
                href="/food-menu"
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-amber-400 border border-slate-700/60 font-medium transition-colors"
              >
                Food Menu
              </Link>
              <Link
                href="/gallery"
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-amber-400 border border-slate-700/60 font-medium transition-colors"
              >
                Photo Gallery
              </Link>
              <Link
                href="/ahmedabad-guide"
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-amber-300 hover:text-amber-200 border border-amber-400/40 font-bold transition-colors"
              >
                Ahmedabad Guide
              </Link>
              <Link
                href="/contact"
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-amber-400 border border-slate-700/60 font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>

        {/* Compact & Sleek Bottom Bar ("niche ki patti") */}
        <div className="py-2.5 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 border-t border-slate-800/80">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-slate-200 font-semibold">Luxora & Sorath PG Ahmedabad</strong>. Direct client portal with zero brokerage.
          </div>
          <div className="flex items-center space-x-3 text-slate-400 text-center sm:text-right">
            <span className="flex items-center text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1" />
              Verified Accommodations
            </span>
            <span>•</span>
            <span>Navrangpura & Naranpura</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
