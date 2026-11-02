import React, { useState } from 'react';
import { ToolLogo } from './ToolLogo';
import { Sparkles } from 'lucide-react';

interface ShowcaseTool {
  name: string;
  role: string;
  category: string;
  description: string;
}

const SHOWCASE_DECK: ShowcaseTool[] = [
  {
    name: 'Claude 3.7 Sonnet',
    role: 'Reasoning AI Core',
    category: 'AI & LLMs',
    description: 'Penalaran arsitektur sistem kompleks, pemanggilan tool API otomatis, dan refactoring kode.',
  },
  {
    name: 'Next.js & React',
    role: 'Fullstack Framework',
    category: 'Frontend & Web',
    description: 'Server-Side Rendering (SSR) & Static Generation untuk kecepatan muat instan di bawah 0.8 detik.',
  },
  {
    name: 'TypeScript',
    role: 'Type-Safe Guard',
    category: 'Frontend & Web',
    description: 'Validasi tipe statis menyeluruh untuk mencegah runtime crash di server produksi.',
  },
  {
    name: 'Tailwind CSS',
    role: 'Design System',
    category: 'Frontend & Web',
    description: 'Styling responsif presisi, ringan, dan zero-bloat CSS untuk mobile & desktop.',
  },
  {
    name: 'n8n & Webhooks',
    role: 'Automation Engine',
    category: 'Automation',
    description: 'Menghubungkan alur bisnis WhatsApp, CRM, dan database tanpa biaya langganan mahal.',
  },
  {
    name: 'PostgreSQL & Supabase',
    role: 'Relational Database',
    category: 'Backend & Data',
    description: 'Penyimpanan terenkripsi dengan integritas data tinggi dan query terparameter anti-SQLi.',
  },
  {
    name: 'Docker Engine',
    role: 'Containerization',
    category: 'Cloud & DevOps',
    description: 'Isolasi layanan aplikasi produksi agar berjalan identik di lokal maupun cloud VPS.',
  },
  {
    name: 'Tailscale & WireGuard',
    role: 'Zero-Trust Mesh',
    category: 'Security',
    description: 'Mengunci port SSH dari internet publik menggunakan private encrypted mesh tunnel.',
  },
  {
    name: 'Meta CAPI',
    role: 'Server-Side Tracking',
    category: 'Marketing',
    description: 'Memulihkan 30% data transaksi iklan yang hilang akibat adblocker via backend webhook.',
  },
  {
    name: 'Cloudflare',
    role: 'Edge CDN & WAF',
    category: 'Cloud Security',
    description: 'Proteksi DDoS global, mitigasi bot jahat, dan cache aset di 300+ data center dunia.',
  },
];

export const InteractiveToolsShowcase: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // If hovering, show hovered tool; otherwise show clicked/selected or default 0
  const displayIndex = hoveredIndex !== null ? hoveredIndex : (selectedIndex !== null ? selectedIndex : 0);
  const activeTool = SHOWCASE_DECK[displayIndex];

  return (
    <div className="space-y-6 select-none">
      {/* Subtitle Header ala eka-revandi.vercel.app */}
      <div className="text-center space-y-1">
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
          Senjata harian untuk ngiklan, otomasi, dan bikin produk digital.
        </p>
      </div>

      {/* 3D FANNED DECK CAROUSEL (Directly matching media_1793606391923_72e2508b.png) */}
      <div
        onMouseLeave={() => setHoveredIndex(null)}
        className="relative py-12 px-4 flex items-center justify-center overflow-x-auto min-h-[220px]"
      >
        {/* The Card Fan Deck */}
        <div className="flex items-center justify-center -space-x-4 sm:-space-x-6 py-4 px-6">
          {SHOWCASE_DECK.map((tool, idx) => {
            const isHovered = hoveredIndex === idx;
            const isElevated = isHovered;

            // Calculate rotational tilt offset relative to center or active card
            const baseCenter = hoveredIndex !== null ? hoveredIndex : 4.5;
            const offsetFromCenter = idx - baseCenter;
            const rotateDeg = isElevated ? 0 : offsetFromCenter * 3;
            const translateY = isElevated ? -16 : Math.abs(offsetFromCenter) * 2;
            const zIndex = isElevated ? 40 : 20 - Math.round(Math.abs(offsetFromCenter));

            return (
              <div
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                onMouseEnter={() => setHoveredIndex(idx)}
                style={{
                  transform: `translateY(${translateY}px) rotate(${rotateDeg}deg)`,
                  zIndex,
                }}
                className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-2xl bg-white dark:bg-[#161B22] border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center shadow-md hover:shadow-2xl ${
                  isElevated
                    ? 'border-[#1E3A8A] dark:border-blue-500 ring-2 ring-[#1E3A8A]/30 scale-110 shadow-2xl'
                    : 'border-zinc-200/90 dark:border-zinc-800 opacity-90 hover:opacity-100 hover:scale-105'
                }`}
                title={tool.name}
              >
                {/* TOOLTIP ANCHORED DIRECTLY ABOVE THIS SPECIFIC CARD */}
                {isHovered && (
                  <div className="absolute -top-12 sm:-top-14 left-1/2 -translate-x-1/2 z-50 pointer-events-none whitespace-nowrap animate-in fade-in zoom-in-95 duration-150">
                    <div className="relative px-3 py-1.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold text-xs shadow-xl flex items-center gap-1.5 border border-zinc-700 dark:border-zinc-200">
                      <span>{tool.name}</span>
                      <span className="text-[10px] font-mono text-emerald-400 dark:text-emerald-600 font-semibold">
                        · {tool.role}
                      </span>
                      {/* Tooltip caret down triangle */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-zinc-900 dark:bg-white rotate-45 border-r border-b border-zinc-700 dark:border-zinc-200" />
                    </div>
                  </div>
                )}

                <div className="p-2 flex items-center justify-center">
                  <ToolLogo name={tool.name} size={36} className="transition-transform group-hover:scale-110" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Tool Highlight Information Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shrink-0">
            <ToolLogo name={activeTool.name} size={28} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-extrabold text-sm sm:text-base text-zinc-950 dark:text-white">
                {activeTool.name}
              </h4>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                {activeTool.role}
              </span>
            </div>
            <p className="text-xs text-zinc-500 mt-0.5">{activeTool.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0 text-xs font-mono text-zinc-400">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span>Toolkit Produksi fitran.dev</span>
        </div>
      </div>
    </div>
  );
};
