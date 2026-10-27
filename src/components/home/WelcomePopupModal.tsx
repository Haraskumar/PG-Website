'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { X, Sparkles, MapPin } from 'lucide-react';

const AUTO_DISMISS_MS = 6000; // 6 seconds auto-dismiss

export default function WelcomePopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(100);

  const startTimeRef = useRef<number | null>(null);
  const remainingTimeRef = useRef<number>(AUTO_DISMISS_MS);
  const animationFrameRef = useRef<number | null>(null);

  const closePopup = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      try {
        sessionStorage.setItem('has_seen_welcome_popup', 'true');
      } catch {
        // Safe fallback
      }
    }, 250);
  }, []);

  // Initial mount trigger (300ms delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      startTimeRef.current = performance.now();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // 2.5s Countdown Engine with Pause-on-Touch / Hover
  useEffect(() => {
    if (!isOpen || isClosing) return;

    if (isPaused) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    startTimeRef.current = performance.now();
    const duration = remainingTimeRef.current;

    const tick = (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const currentRemaining = Math.max(0, duration - elapsed);
      const pct = (currentRemaining / AUTO_DISMISS_MS) * 100;

      setProgress(pct);

      if (currentRemaining <= 0) {
        closePopup();
      } else {
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (startTimeRef.current) {
        const elapsed = performance.now() - startTimeRef.current;
        remainingTimeRef.current = Math.max(0, duration - elapsed);
      }
    };
  }, [isOpen, isClosing, isPaused, closePopup]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Two Collections. Your Kind of Stay."
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Backdrop with tap-outside dismiss */}
      <div
        onClick={closePopup}
        className="absolute inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
      />

      {/* Main Wood-land Card (Expanded size, zero blue border wrapper) */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className={`relative w-full max-w-lg sm:max-w-xl wood-card-bg rounded-3xl shadow-2xl border-2 border-amber-900/25 p-6 sm:p-8 overflow-hidden transition-all duration-300 z-10 flex flex-col space-y-4 ${
          isClosing ? 'scale-95 translate-y-3' : 'scale-100 translate-y-0 animate-in fade-in zoom-in-95'
        }`}
      >
        {/* Header Row */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-950 text-amber-300 text-xs font-black uppercase tracking-wider mb-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>FEATURED STAYS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight">
              Two Collections. Your Kind of Stay.
            </h2>
          </div>

          <button
            onClick={closePopup}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-slate-950/15 hover:bg-slate-950/25 text-slate-900 flex items-center justify-center transition-colors shrink-0 cursor-pointer shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subtitle Message */}
        <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
          Discover comfortable PG options with essential amenities to suit your lifestyle and budget.
        </p>

        {/* Highlighted Dual Collections (Prominent & Larger font sizing) */}
        <div className="space-y-3 pt-1">
          {/* 1. LUXORA (Gold Treatment) */}
          <Link
            href="/pgs?brand=LUXORA"
            onClick={closePopup}
            className="flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/75 hover:bg-white/90 backdrop-blur-xs border border-amber-900/20 shadow-xs transition-transform hover:scale-[1.01]"
          >
            <div className="flex items-center space-x-2.5 min-w-0">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shrink-0 shadow-xs">
                👑 LUXORA
              </span>
              <span className="text-sm sm:text-base font-black text-amber-950 truncate">
                Premium Living Experience
              </span>
            </div>
              <span className="flex flex-col text-xs sm:text-sm font-bold text-amber-900 shrink-0 leading-tight">
              <span>👧 ₹11500/mo</span>
              <span>👦 ₹15000/mo</span>
            </span>
          </Link>

          {/* 2. SORATH (Royal Blue Treatment) */}
          <Link
            href="/pgs?brand=SORATH"
            onClick={closePopup}
            className="flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/75 hover:bg-white/90 backdrop-blur-xs border border-blue-900/20 shadow-xs transition-transform hover:scale-[1.01]"
          >
            <div className="flex items-center space-x-2.5 min-w-0">
              <span className="px-3 py-1 rounded-full bg-blue-700 text-white font-black text-xs uppercase tracking-wider shrink-0 shadow-xs">
                🛡️ SORATH
              </span>
              <span className="text-sm sm:text-base font-black text-blue-950 truncate">
                Smart, Budget-Friendly Stays
              </span>
            </div>
            <span className="text-sm sm:text-base font-black text-blue-900 shrink-0">
              ₹8,500/mo
            </span>
          </Link>
        </div>

        {/* Location & Neighborhood Highlights (2 Clean Lines) */}
        <div className="space-y-1.5 pt-1">
          {/* Line 1: Primary Universities & Colleges */}
          <div className="flex items-center text-xs sm:text-sm text-slate-900 font-bold space-x-2">
            <MapPin className="w-4 h-4 text-amber-800 shrink-0" />
            <span className="line-clamp-1">
              Navrangpura • Near Gujarat Univ, CEPT, LD College &amp; CA Navkar
            </span>
          </div>

          {/* Line 2: Student Everyday Facilities */}
          <div className="flex items-center text-xs sm:text-sm text-slate-800 font-semibold space-x-2 pl-0.5">
            <span className="text-amber-800 font-black">✓</span>
            <span className="line-clamp-1">
              Near BRTS/Metro • In Market • Nearby Library/Gyms
            </span>
          </div>
        </div>

        {/* 2.5s Auto-Dismiss Micro-Countdown Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-amber-950/15 overflow-hidden">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-blue-600 transition-all duration-75 ease-linear"
          />
        </div>
      </div>
    </div>
  );
}
