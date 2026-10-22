'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, CheckCircle2, ChevronRight, Eye } from 'lucide-react';

interface TickerPhoto {
  src: string;
  title: string;
  tag: string;
  property: string;
}

const TICKER_PHOTOS: TickerPhoto[] = [
  {
    src: '/images/pgs/luxora-boys-1/luxora-boys-1-bedroom-01.webp',
    title: 'Luxury 2-Sharing AC Suite',
    tag: 'Luxora Boys 1',
    property: 'Stadium Six Road'
  },
  {
    src: '/images/pgs/luxora-girls-1/luxora-girls-1-hero.webp',
    title: 'Gated Residence & Facade',
    tag: 'Luxora Girls 1',
    property: 'SP Statue Circle, Naranpura'
  },
  {
    src: '/images/pgs/luxora-boys-1/luxora-boys-1-dining-mess-01.webp',
    title: 'Commercial Kitchen & Mess',
    tag: '4-Time Dining',
    property: 'Fresh Daily Cooking'
  },
  {
    src: '/images/pgs/sorath-girls-1/sorath-girls-1-bedroom-01.webp',
    title: 'Smart Budget Female Dorm',
    tag: 'Sorath Girls 1',
    property: 'Beside Maharaja Palace'
  },
  {
    src: '/images/pgs/sorath-boys-1/sorath-boys-1-bedroom-01.webp',
    title: 'Student Room with Study Desk',
    tag: 'Sorath Boys 1',
    property: 'Ajay Center, Vijay XR'
  },
  {
    src: '/images/pgs/luxora-girls-1/luxora-girls-1-terrace-01.webp',
    title: 'Rooftop Lounge & Sky Terrace',
    tag: 'Open Spaces',
    property: 'Naranpura Colony'
  },
  {
    src: '/images/pgs/luxora-boys-1/luxora-boys-1-bathroom-01.webp',
    title: 'Sanitized Bath with Geyser',
    tag: 'Hygiene Standard',
    property: 'Deep Cleaned Daily'
  },
  {
    src: '/images/pgs/sorath-boys-3/sorath-boys-3-bedroom-01.webp',
    title: 'Spacious 3-Sharing Room',
    tag: 'Sorath Boys 3',
    property: 'Pallavi Tower 1'
  }
];

export default function MovingPhotoTicker() {
  return (
    <section className="py-12 bg-slate-900 border-y border-slate-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-400/20 border border-amber-400/30 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>100% Verified Physical Tour Records</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Living Spaces, Sanitized Mess & Resident Amenities
          </h3>
        </div>

        <Link
          href="/gallery"
          className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs border border-slate-700 transition-colors self-start sm:self-auto shrink-0"
        >
          <Eye className="w-3.5 h-3.5 mr-1.5" />
          <span>Open Full Photo Gallery</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      {/* Infinite Smooth Moving Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee py-2 flex gap-5">
          {/* Loop twice for seamless infinite ticker */}
          {[...TICKER_PHOTOS, ...TICKER_PHOTOS].map((photo, index) => (
            <div
              key={index}
              className="relative w-72 sm:w-80 h-52 sm:h-56 rounded-2xl overflow-hidden shrink-0 group border border-slate-800 shadow-xl bg-slate-950 transition-transform duration-300 hover:scale-[1.03]"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="320px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
              
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-400 text-slate-950 shadow-md uppercase tracking-wider">
                  {photo.tag}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                <div className="text-sm font-extrabold text-white drop-shadow">
                  {photo.title}
                </div>
                <div className="text-[11px] text-amber-300/90 font-medium mt-0.5">
                  📍 {photo.property}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
