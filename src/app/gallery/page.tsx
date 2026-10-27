'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROPERTIES } from '@/data/properties';
import { Camera, Sparkles, ChevronRight, X, ChevronLeft } from 'lucide-react';

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  propertyName: string;
  propertySlug: string;
  brand: string;
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Collect all verified images across properties (Girls PGs and Luxora Boys only)
  const allImages: GalleryItem[] = PROPERTIES
    .filter((p) => p.gender === 'GIRLS' || (p.brand === 'LUXORA' && p.gender === 'BOYS'))
    .flatMap((p) =>
      p.images.map((img) => ({
        src: img.src,
        alt: img.alt,
        category: img.category,
        propertyName: p.name,
        propertySlug: p.slug,
        brand: p.brand,
      }))
    );

  const categories = [
    { key: 'ALL', label: 'All Photos' },
    { key: 'bedroom', label: '🛏️ Bedrooms' },
    { key: 'bathroom', label: '🚿 Washrooms' },
    { key: 'dining', label: '🍽️ Dining & Mess' },
    { key: 'common', label: '🛋️ Common & Study Lounge' },
    { key: 'terrace', label: '🌿 Rooftop Terrace' },
    { key: 'hero', label: '🏢 Facade & Entrance' },
  ];

  const filteredImages =
    selectedCategory === 'ALL'
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredImages.length
    );
  }, [filteredImages.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length
    );
  }, [filteredImages.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  const activeLightboxImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <div className="py-12 sm:py-16 theme-bg-gradient min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-amber-300" />
            <span>Verified Visual Tour</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Property Photo Gallery
          </h1>
          <p className="text-blue-100 text-sm sm:text-base mt-3 font-medium">
            100% genuine photographic records of our furnished rooms, attached washrooms, hygienic dining halls, and study spaces in Ahmedabad. Click any photo to expand.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => { setSelectedCategory(cat.key); setLightboxIndex(null); }}
              className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.key
                  ? 'bg-slate-900 text-amber-300 shadow-md scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Count */}
        <div className="text-center mb-6">
          <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3 h-3 inline mr-1 text-amber-500" />
            {filteredImages.length} photos • Click to expand
          </span>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(idx);
                }
              }}
              className="group wood-card-bg rounded-3xl overflow-hidden border-2 border-amber-900/25 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col text-left w-full cursor-pointer"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                  {img.brand}
                </div>
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white capitalize">
                  {img.category}
                </div>
                {/* Expand hint overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-[11px] font-bold text-slate-900 flex items-center space-x-1.5">
                    <Camera className="w-3.5 h-3.5" />
                    <span>View Full Size</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between wood-card-bg">
                <div>
                  <h3 className="text-sm font-black text-slate-950 mb-1">{img.propertyName}</h3>
                  <p className="text-xs text-slate-800 font-medium line-clamp-2 leading-relaxed">
                    {img.alt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-900/20 flex items-center justify-between">
                  <Link
                    href={`/pgs/${img.propertySlug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-black text-amber-950 hover:text-amber-800 flex items-center bg-white/70 px-3 py-1.5 rounded-lg border border-amber-900/15 shadow-2xs"
                  >
                    <span>View Property Details</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for upcoming photos */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 text-center max-w-2xl mx-auto">
          <h3 className="text-base font-bold text-slate-900">Visiting from outside Ahmedabad?</h3>
          <p className="text-xs text-slate-500 mt-1">
            Want to see live video walkthroughs or current vacant room videos? Connect directly with PG management on WhatsApp for video tours.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs rounded-xl transition-all"
            >
              <span>Contact Central Management</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {activeLightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-white">
            {(lightboxIndex ?? 0) + 1} / {filteredImages.length}
          </div>

          {/* Prev Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image Container */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] mx-4 sm:mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeLightboxImage.src}
              alt={activeLightboxImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Caption Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-6 px-6 text-center">
            <div className="text-white font-bold text-sm">{activeLightboxImage.propertyName}</div>
            <div className="text-slate-300 text-xs mt-1 capitalize">{activeLightboxImage.category} • {activeLightboxImage.brand}</div>
            <p className="text-slate-400 text-xs mt-1 max-w-lg mx-auto">{activeLightboxImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
