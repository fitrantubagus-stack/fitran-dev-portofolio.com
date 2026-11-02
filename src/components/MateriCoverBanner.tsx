import React from 'react';
import { FitranMascot, MascotVariant } from './FitranMascot';

interface MateriCoverBannerProps {
  title: string;
  category?: string;
  readTime?: string;
  mascotVariant?: MascotVariant;
  className?: string;
}

export const MateriCoverBanner: React.FC<MateriCoverBannerProps> = ({
  title,
  category = 'TEKNIS',
  readTime = '5 MENIT BACA',
  mascotVariant = 'idea',
  className = '',
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-linear-to-br from-[#1E3A8A] via-[#1d4ed8] to-[#059669] text-white border-2 border-blue-400/40 shadow-xl p-6 sm:p-8 flex flex-col justify-between min-h-[200px] sm:min-h-[220px] select-none ${className}`}
    >
      {/* Background Curved Graphic Ring (Clean solid styling inspired by Sekawan Media) */}
      <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full border-[18px] border-white/10 pointer-events-none" />
      <div className="absolute right-16 -bottom-16 w-48 h-48 rounded-full border-[12px] border-emerald-300/15 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 pointer-events-none" />

      {/* Top Header: Official fitran.dev Logo Mark + Category Pill */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
        {/* Official Brand Watermark: FD fitran.dev */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-white text-[#1E3A8A] flex items-center justify-center text-[10px] font-black tracking-tight shadow-xs">
            FD
          </div>
          <span className="font-mono text-xs font-black tracking-tight text-white">
            fitran<span className="text-emerald-300">.dev</span>
          </span>
        </div>

        {/* Category Pill */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white font-mono text-[10px] font-bold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
          <span>{category}</span>
        </span>
      </div>

      {/* Center & Right: Title + Mascot Graphic */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center my-3">
        <div className="md:col-span-8 space-y-1">
          <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-snug">
            {title}
          </h2>
        </div>

        {/* Mascot Graphic on Right */}
        <div className="md:col-span-4 flex justify-end items-center pr-2">
          <FitranMascot variant={mascotVariant} size="md" className="scale-110 sm:scale-125" />
        </div>
      </div>

      {/* Bottom Footer: Reading Time Tag */}
      <div className="relative z-10 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span className="font-bold tracking-wider text-emerald-400">{readTime}</span>
        <span className="text-zinc-500 text-[10px]">Dokumentasi Resmi fitran.dev</span>
      </div>
    </div>
  );
};
