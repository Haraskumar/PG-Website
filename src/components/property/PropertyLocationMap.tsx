'use client';

import { useState } from 'react';
import { Property } from '@/types/property';
import {
  MapPin,
  ExternalLink,
  Navigation,
  Bus,
  School,
  Building,
  ShieldCheck,
  Check,
  Copy
} from 'lucide-react';

interface PropertyLocationMapProps {
  property: Property;
}

export default function PropertyLocationMap({ property }: PropertyLocationMapProps) {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(`${property.address}, ${property.city} - ${property.pincode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Safe Google Maps Embed URL centered on property embed query
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    property.embedMapQuery || `${property.name} ${property.address} Ahmedabad`
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-amber-800 text-[11px] font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Exact Branch Location & Landmark Pins</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Location & Neighborhood Connectivity
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Pinpoint location for <strong>{property.name}</strong>. Central office details are in the footer.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={copyAddress}
            className="inline-flex items-center px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
                <span>Copy Address</span>
              </>
            )}
          </button>

          <a
            href={property.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 text-xs font-bold transition-colors shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 ml-1 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Address Card */}
      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center shrink-0 text-sm mt-0.5 shadow-sm">
            📍
          </div>
          <div>
            <div className="text-xs font-extrabold text-amber-950 uppercase tracking-wide">
              Physical Property Address
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
              {property.address}, {property.city} - {property.pincode}
            </div>
            <div className="text-[11px] text-amber-800 font-medium mt-0.5">
              Landmark: <strong>{property.landmark}</strong>
            </div>
          </div>
        </div>

        <a
          href={property.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shrink-0 text-center transition-all shadow-sm"
        >
          Get Driving Directions
        </a>
      </div>

      {/* Interactive Google Map Embed */}
      <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
        <iframe
          title={`Map location for ${property.name}`}
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />

        {/* Floating PG Pin Pill on top of Map */}
        <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-lg border border-slate-700 flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{property.name} Verified Pin</span>
        </div>
      </div>

      {/* Nearby Important Landmarks Grid */}
      <div>
        <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-3">
          Key Transit, University & Commercial Proximities:
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {property.landmarks.map((landmark, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 shadow-sm">
                  {landmark.category === 'college' && <School className="w-4 h-4 text-indigo-600" />}
                  {landmark.category === 'transit' && <Bus className="w-4 h-4 text-emerald-600" />}
                  {landmark.category === 'shopping' && <Building className="w-4 h-4 text-amber-600" />}
                  {landmark.category === 'hospital' && <ShieldCheck className="w-4 h-4 text-rose-600" />}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{landmark.name}</div>
                  <div className="text-[10px] text-slate-400 capitalize">{landmark.category}</div>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-extrabold text-slate-900 block">{landmark.distanceKm}</span>
                <span className="text-[10px] text-emerald-700 font-bold">{landmark.travelTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
