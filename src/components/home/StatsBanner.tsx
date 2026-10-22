'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  emoji: string;
}

const STATS: Stat[] = [
  { value: 500, suffix: '+', label: 'Happy Residents', emoji: '😊' },
  { value: 7, suffix: '', label: 'PG Properties', emoji: '🏠' },
  { value: 5, suffix: '+', label: 'Years Operating', emoji: '🗓️' },
  { value: 1500, suffix: '+', label: 'Meals Served Daily', emoji: '🍽️' },
  { value: 150, suffix: ' Mbps', label: 'Dedicated Wi-Fi Speed', emoji: '⚡' },
  { value: 0, suffix: '', label: 'Brokerage Fees', emoji: '✅' },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (target === 0) { setCount(0); return; }

    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [active, target]);

  if (target === 0) return <span>Zero</span>;
  return <span>{count.toLocaleString('en-IN')}{suffix}</span>;
}

export default function StatsBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-y border-slate-800 relative overflow-hidden"
    >
      {/* Subtle background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            Trusted by Students, Parents & Professionals Across Ahmedabad
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="text-center group"
            >
              <div className="text-3xl mb-1">{stat.emoji}</div>
              <div className="text-2xl sm:text-3xl font-black text-white tabular-nums">
                <CountUp target={stat.value} suffix={stat.suffix} active={active} />
              </div>
              <div className="text-xs text-slate-400 font-semibold mt-1 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
