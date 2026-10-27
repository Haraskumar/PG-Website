'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CONTACTS } from '@/data/contacts';
import { Phone, MessageCircle, Menu, X, Sparkles, Shield, ChevronDown, Compass } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionDropdownOpen, setCollectionDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top micro bar for quick contacts */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-amber-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Ahmedabad’s Top-Rated Student & Executive Co-Living
            </span>
            <span className="hidden md:inline text-slate-400">
              Navrangpura • Naranpura • Vijay Cross Road
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href={`tel:${CONTACTS.primaryPhone}`}
              className="hover:text-amber-400 flex items-center transition-colors"
            >
              <Phone className="w-3 h-3 mr-1 text-amber-400" />
              {CONTACTS.primaryPhoneDisplay} ({'Call at PG'})
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`https://wa.me/${CONTACTS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 flex items-center transition-colors"
            >
              <MessageCircle className="w-3 h-3 mr-1 text-emerald-400" />
              WhatsApp Instant Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Dual Brand Logos */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Luxora Vector Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-amber-300/60 shadow-sm bg-white p-0.5">
                <Image
                  src="/images/brand/luxora-logo.webp"
                  alt="Luxora PG Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs font-serif tracking-widest text-luxora-900 font-bold uppercase leading-tight">
                  LUXORA
                </div>
                <div className="text-[10px] font-semibold text-luxora-500 uppercase tracking-wider">
                  Luxury PG
                </div>
              </div>
            </div>

            <span className="text-slate-300 font-light text-xl">|</span>

            {/* Sorath Vector Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-teal-300/60 shadow-sm bg-white p-0.5">
                <Image
                  src="/images/brand/sorath-logo.svg"
                  alt="Sorath PG Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs font-sans tracking-wider text-slate-900 font-extrabold uppercase leading-tight">
                  SORATH
                </div>
                <div className="text-[10px] font-semibold text-teal-600 uppercase tracking-wider">
                  Smart Budget
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg transition-colors"
            >
              Home
            </Link>

            <Link
              href="/pgs"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg transition-colors"
            >
              All 7 PGs
            </Link>

            {/* Brand Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCollectionDropdownOpen(true)}
              onMouseLeave={() => setCollectionDropdownOpen(false)}
            >
              <button
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg flex items-center transition-colors"
                onClick={() => setCollectionDropdownOpen(!collectionDropdownOpen)}
                aria-expanded={collectionDropdownOpen}
                aria-haspopup="true"
              >
                Our Brands
                <ChevronDown className="w-4 h-4 ml-1 text-slate-400" />
              </button>

              {collectionDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    href="/pgs?brand=LUXORA"
                    onClick={() => setCollectionDropdownOpen(false)}
                    className="flex items-start p-3 rounded-lg hover:bg-amber-50/70 transition-colors group"
                  >
                    <div className="p-2 bg-luxora-900 text-luxora-400 rounded-lg mr-3">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-luxora-900 group-hover:text-luxora-600">
                        Luxora Collection
                      </div>
                      <div className="text-xs text-slate-500">
                        Luxury AC suites with 4-time dining & home theatre
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/pgs?brand=SORATH"
                    onClick={() => setCollectionDropdownOpen(false)}
                    className="flex items-start p-3 rounded-lg hover:bg-teal-50/70 transition-colors group mt-1"
                  >
                    <div className="p-2 bg-teal-600 text-white rounded-lg mr-3">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-teal-700">
                        Sorath Collection
                      </div>
                      <div className="text-xs text-slate-500">
                        Budget-friendly, hygienic stays with 3 meals
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/food-menu"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg transition-colors"
            >
              Food & Dining
            </Link>

            <Link
              href="/gallery"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg transition-colors"
            >
              Photo Gallery
            </Link>

            <Link
              href="/ahmedabad-guide"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg transition-colors flex items-center"
            >
              <Compass className="w-3.5 h-3.5 mr-1 text-amber-500" />
              Ahmedabad Guide
            </Link>

            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg transition-colors"
            >
              Office & Contact
            </Link>
          </nav>

          {/* Action Call & WhatsApp CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${CONTACTS.primaryPhone}`}
              className="inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-bold text-luxora-900 bg-amber-400 hover:bg-amber-300 transition-all shadow-sm shadow-amber-400/20 active:scale-95"
            >
              <Phone className="w-4 h-4 mr-2 text-luxora-900" />
              Call PG / Enquiry
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            Home
          </Link>
          <Link
            href="/pgs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            Explore All 7 PGs
          </Link>
          <div className="pl-3 pr-2 py-2 bg-amber-50/70 rounded-lg space-y-1">
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
              Collections
            </div>
            <Link
              href="/pgs?brand=LUXORA"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-luxora-900 py-1"
            >
              ✦ Luxora Luxury Collection (Navrangpura & Naranpura)
            </Link>
            <Link
              href="/pgs?brand=SORATH"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-teal-800 py-1"
            >
              ✦ Sorath Smart Budget Collection (Vijay Cross Road)
            </Link>
          </div>
          <Link
            href="/food-menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            Food & Dining Menu
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            Photo Gallery
          </Link>
          <Link
            href="/ahmedabad-guide"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            <Compass className="w-4 h-4 mr-2 text-amber-500" />
            Ahmedabad & Colleges Guide
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100"
          >
            Office Address & Contacts
          </Link>

          <div className="pt-4 border-t border-slate-100 space-y-2">
            <a
              href={`tel:${CONTACTS.primaryPhone}`}
              className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-amber-400 text-luxora-900 font-bold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call {CONTACTS.primaryContactName}: {CONTACTS.primaryPhoneDisplay}
            </a>
            <a
              href={`https://wa.me/${CONTACTS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Direct Chat
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
