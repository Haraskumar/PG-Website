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
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  const luxoraProps = PROPERTIES.filter((p) => p.brand === 'LUXORA');
  const sorathProps = PROPERTIES.filter((p) => p.brand === 'SORATH');

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding & Call to Action Card */}
        <div className="bg-gradient-to-r from-slate-900 via-luxora-950 to-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl mb-16 relative overflow-hidden">
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
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
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

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brands & About (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
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
                <h4 className="text-white font-extrabold tracking-wider text-base">
                  LUXORA & SORATH
                </h4>
                <p className="text-xs text-amber-400 font-medium">
                  Premium & Budget Co-Living Network Ahmedabad
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Managing 7 premium and budget-friendly PG properties across Navrangpura and Naranpura in Ahmedabad. Providing students and corporate professionals with safe, hygienic, food-inclusive stays with 150 Mbps Wi-Fi, biometric security, and prime university transit.
            </p>

            {/* Direct Contacts List */}
            <div className="space-y-2.5 pt-2">
              <a
                href={`tel:${CONTACTS.primaryPhone}`}
                className="flex items-center text-sm text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-amber-400 shrink-0" />
                <span>Primary: <strong>{CONTACTS.primaryPhoneDisplay}</strong> ({CONTACTS.primaryContactName})</span>
              </a>
              <a
                href={`tel:${CONTACTS.secondaryPhone}`}
                className="flex items-center text-sm text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-teal-400 shrink-0" />
                <span>Contact: <strong>{CONTACTS.secondaryPhoneDisplay}</strong> ({CONTACTS.secondaryContactName})</span>
              </a>
              <a
                href={`mailto:${CONTACTS.email}`}
                className="flex items-center text-sm text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-amber-400 shrink-0" />
                <span>{CONTACTS.email}</span>
              </a>
              <a
                href={CONTACTS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-slate-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4 mr-2 text-pink-400 shrink-0" />
                <span>Instagram: <strong>{CONTACTS.instagramHandle}</strong></span>
              </a>
            </div>
          </div>

          {/* Col 2: Luxora Collection */}
          <div>
            <h5 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-400 mr-2" />
              Luxora Collection
            </h5>
            <ul className="space-y-3">
              {luxoraProps.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/pgs/${p.slug}`}
                    className="text-xs text-slate-400 hover:text-amber-400 transition-colors flex items-start group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-600 group-hover:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-300 group-hover:text-amber-400">
                        {p.name}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {p.gender === 'BOYS' ? 'Boys PG' : 'Girls PG'} • {p.area}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                  <div className="text-amber-400 font-semibold mb-1">Luxora Inclusions:</div>
                  4-Time Gourmet Meals • Full AC • Biometric • Home Cinema Lounge
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Sorath Collection */}
          <div>
            <h5 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-teal-400 mr-2" />
              Sorath Collection
            </h5>
            <ul className="space-y-3">
              {sorathProps.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/pgs/${p.slug}`}
                    className="text-xs text-slate-400 hover:text-teal-400 transition-colors flex items-start group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-600 group-hover:text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-300 group-hover:text-teal-400">
                        {p.name}
                      </div>
                      <div className="text-[11px] text-slate-500">
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
            <h5 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center">
              <MapPin className="w-4 h-4 text-amber-400 mr-2" />
              Central Office Location
            </h5>
            <div className="text-xs text-slate-400 space-y-3">
              <p className="leading-relaxed">
                <strong className="text-slate-200">{CONTACTS.office.title}</strong><br />
                {CONTACTS.office.address}, {CONTACTS.office.city} - {CONTACTS.office.pincode}
              </p>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-amber-300/90 leading-tight">
                ℹ️ <strong>Note:</strong> This is our central management & admissions office. For individual PG property locations, please visit each PG page.
              </div>
              <div className="flex items-center text-slate-400">
                <Clock className="w-3.5 h-3.5 mr-2 text-teal-400 shrink-0" />
                <span>{CONTACTS.office.operatingHours}</span>
              </div>
              <a
                href={CONTACTS.office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 bg-slate-900 hover:bg-slate-800 text-amber-400 rounded-lg border border-slate-800 font-semibold text-xs transition-colors"
              >
                <span>View Central Office on Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-1.5" />
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-900">
              <h6 className="text-slate-300 font-semibold text-xs mb-2">Navigation Links</h6>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <Link href="/" className="hover:text-amber-400 font-medium">Home</Link>
                <span>•</span>
                <Link href="/pgs" className="hover:text-amber-400 font-medium">All 7 PGs</Link>
                <span>•</span>
                <Link href="/food-menu" className="hover:text-amber-400 font-medium">Food Menu</Link>
                <span>•</span>
                <Link href="/gallery" className="hover:text-amber-400 font-medium">Gallery</Link>
                <span>•</span>
                <Link href="/guide" className="hover:text-amber-400 font-medium">Area Guide</Link>
                <span>•</span>
                <Link href="/contact" className="hover:text-amber-400 font-medium">Contact Us</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Local SEO Keywords */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Luxora & Sorath PG Ahmedabad. All rights reserved. Direct client portal with zero brokerage.
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 mr-1" />
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
