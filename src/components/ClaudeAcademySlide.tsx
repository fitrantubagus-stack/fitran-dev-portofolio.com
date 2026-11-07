import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface ClaudeAcademySlideProps {
  chapterTitle?: string;
  subchapterTitle?: string;
  subchapterNum?: string;
  trackId?: string;
  practiceSnippet?: string;
  mistakes?: string;
  explanation?: string;
  checklist?: string[];
  situation?: string;
}

export const ClaudeAcademySlide: React.FC<ClaudeAcademySlideProps> = ({
  subchapterNum = '01',
  trackId = 'ai',
  checklist = [],
}) => {
  const [hoveredCard, setHoveredCard] = useState<'pattern' | 'audit' | null>(null);

  const scrollToSection = (sectionId: string) => {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const trackConfig =
    trackId === 'digital-marketing'
      ? {
          badgeLabel: 'GROWTH & TRACKING ACADEMY',
          leftNodeTag: 'EVENT PIXEL',
          rightNodeTag: 'EMQ 9.8+',
          card1Title: 'Pola Atribusi & Server Telemetry',
          card1Desc:
            'Alur pengiriman sinyal konversi tervalidasi dari browser dan server agar data iklan akurat 100%.',
          filterTag: 'DEDUP',
          guardTag: 'SHA256',
          card2Title: 'Mitigasi Kebocoran & Audit Tracking',
          card2Desc: `Cegah duplikasi event dan pastikan ${checklist.length || 3} poin verifikasi GTM/CAPI lolos uji sebelum kampanye jalan.`,
        }
      : trackId === 'vibe-coding'
      ? {
          badgeLabel: 'VIBE CODING & ARCHITECTURE',
          leftNodeTag: 'SPEC PRD',
          rightNodeTag: 'PROD READY',
          card1Title: 'Pola Arsitektur & Kontrak Kode',
          card1Desc:
            'Susun spesifikasi fitur, skema tipe data, dan modularitas komponen sebelum dieksekusi AI coding agent.',
          filterTag: 'OWASP',
          guardTag: 'LINT OK',
          card2Title: 'Mitigasi Regresi & Checklist Rilis',
          card2Desc: `Hindari celah keamanan dan pastikan ${checklist.length || 3} poin kelayakan produksi terpenuhi sebelum deploy.`,
        }
      : {
          badgeLabel: 'FITRAN AI ACADEMY',
          leftNodeTag: 'RAG SOP',
          rightNodeTag: 'AKURAT',
          card1Title: 'Pola Dianjurkan & Praktik Implementasi',
          card1Desc:
            'Alur kerja AI terstruktur berbasis dokumen SOP bisnis agar respons akurat tanpa halusinasi.',
          filterTag: 'FILTER',
          guardTag: 'GUARD',
          card2Title: 'Mitigasi Jebakan & Checklist Uji',
          card2Desc: `Hindari kesalahan umum implementasi dan pastikan ${checklist.length || 3} poin kesiapan lapangan terpenuhi.`,
        };

  return (
    <div className="space-y-3.5 select-none">
      {/* Compact Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-700 dark:text-amber-400 font-mono text-[10px] font-black uppercase tracking-wider">
            {trackConfig.badgeLabel} · MODUL {subchapterNum}
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
          <BookOpen className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>2 Skema Inti Materi</span>
        </span>
      </div>

      {/* 2 Simple, Proportional Vector Schematic Cards Inside Materi (/belajar = 2 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* CARD MATERI 1: POLA IMPLEMENTASI TERUJI */}
        <div
          onClick={() => scrollToSection('praktik')}
          onMouseEnter={() => setHoveredCard('pattern')}
          onMouseLeave={() => setHoveredCard(null)}
          className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 hover:border-emerald-500/80 dark:hover:border-emerald-400/80 bg-zinc-50/60 dark:bg-[#151923] p-4 sm:p-5 text-left transition-all duration-300 cursor-pointer shadow-2xs hover:shadow-md hover:-translate-y-0.5"
        >
          {/* Open Vector Schematic 1 */}
          <div className="relative w-full h-32 sm:h-36 mb-3 flex items-center justify-center overflow-hidden">
            <svg
              viewBox="0 0 260 116"
              className="w-full h-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <pattern id="grid-belajar-1" width="14" height="14" patternUnits="userSpaceOnUse">
                  <path
                    d="M 14 0 L 0 0 0 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.6"
                    strokeDasharray="2 2"
                    className="text-zinc-200/90 dark:text-zinc-800/90"
                  />
                </pattern>
              </defs>
              <rect x="6" y="6" width="248" height="104" rx="10" fill="url(#grid-belajar-1)" />

              {/* Left Node: Context / Input Spec */}
              <g
                className="transition-transform duration-500"
                style={{
                  transform: hoveredCard === 'pattern' ? 'translateY(-2px)' : 'translateY(0px)',
                }}
              >
                <rect
                  x="16"
                  y="28"
                  width="68"
                  height="60"
                  rx="8"
                  className="fill-white dark:fill-[#0E1117] stroke-zinc-700 dark:stroke-zinc-300"
                  strokeWidth="1.6"
                />
                <text
                  x="50"
                  y="43"
                  textAnchor="middle"
                  className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[8.5px] font-black"
                >
                  {trackConfig.leftNodeTag}
                </text>
                <rect x="25" y="51" width="50" height="4" rx="2" className="fill-zinc-400 dark:fill-zinc-500" />
                <rect x="25" y="60" width="38" height="4" rx="2" className="fill-emerald-500/70" />
                <rect x="25" y="69" width="44" height="4" rx="2" className="fill-zinc-300 dark:fill-zinc-600" />
              </g>

              {/* Animated Flow Line 1 */}
              <line
                x1="84"
                y1="58"
                x2="110"
                y2="58"
                stroke="#10B981"
                strokeWidth="1.8"
                strokeDasharray="3 3"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="12"
                  to="0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </line>

              {/* Center Node: Validation Gate */}
              <circle
                cx="130"
                cy="58"
                r="19"
                className="fill-white dark:fill-[#0E1117] stroke-emerald-500"
                strokeWidth="1.8"
              />
              <path
                d="M 124 58 L 128.5 62.5 L 137 53.5"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Animated Flow Line 2 */}
              <line
                x1="149"
                y1="58"
                x2="176"
                y2="58"
                stroke="#10B981"
                strokeWidth="1.8"
                strokeDasharray="3 3"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="12"
                  to="0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </line>

              {/* Right Node: Stable Production Output */}
              <g
                className="transition-transform duration-500"
                style={{
                  transform: hoveredCard === 'pattern' ? 'scale(1.05)' : 'scale(1)',
                  transformOrigin: '210px 58px',
                }}
              >
                <rect
                  x="176"
                  y="28"
                  width="68"
                  height="60"
                  rx="8"
                  className="fill-white dark:fill-[#0E1117] stroke-emerald-600 dark:stroke-emerald-400"
                  strokeWidth="1.75"
                />
                <rect x="184" y="37" width="52" height="15" rx="4" fill="#10B981" />
                <text
                  x="210"
                  y="47"
                  textAnchor="middle"
                  className="fill-white font-mono text-[8px] font-black"
                >
                  {trackConfig.rightNodeTag}
                </text>
                <path
                  d="M 186 73 L 196 67 L 206 70 L 220 60 L 234 58"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-heading font-extrabold text-sm sm:text-base text-zinc-950 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {trackConfig.card1Title}
              </h4>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-mono text-[9px] font-bold uppercase shrink-0">
                Praktik
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              {trackConfig.card1Desc}
            </p>
          </div>
        </div>

        {/* CARD MATERI 2: MITIGASI JEBAKAN & CHECKLIST VERIFIKASI */}
        <div
          onClick={() => scrollToSection('kesalahan')}
          onMouseEnter={() => setHoveredCard('audit')}
          onMouseLeave={() => setHoveredCard(null)}
          className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 hover:border-amber-500/80 dark:hover:border-amber-400/80 bg-zinc-50/60 dark:bg-[#151923] p-4 sm:p-5 text-left transition-all duration-300 cursor-pointer shadow-2xs hover:shadow-md hover:-translate-y-0.5"
        >
          {/* Open Vector Schematic 2 */}
          <div className="relative w-full h-32 sm:h-36 mb-3 flex items-center justify-center overflow-hidden">
            <svg
              viewBox="0 0 260 116"
              className="w-full h-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <pattern id="grid-belajar-2" width="14" height="14" patternUnits="userSpaceOnUse">
                  <path
                    d="M 14 0 L 0 0 0 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.6"
                    strokeDasharray="2 2"
                    className="text-zinc-200/90 dark:text-zinc-800/90"
                  />
                </pattern>
              </defs>
              <rect x="6" y="6" width="248" height="104" rx="10" fill="url(#grid-belajar-2)" />

              {/* Left: Erratic Anomaly Wave */}
              <path
                d="M 18 58 L 32 58 L 40 36 L 48 80 L 56 44 L 64 70 L 74 58 L 96 58"
                fill="none"
                stroke="#F43F5E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Center: Circuit Breaker Filter Shield */}
              <g
                className="transition-transform duration-500"
                style={{
                  transform: hoveredCard === 'audit' ? 'scale(1.06)' : 'scale(1)',
                  transformOrigin: '122px 58px',
                }}
              >
                <rect
                  x="96"
                  y="28"
                  width="52"
                  height="60"
                  rx="10"
                  className="fill-white dark:fill-[#0E1117] stroke-amber-500"
                  strokeWidth="2"
                />
                <text
                  x="122"
                  y="50"
                  textAnchor="middle"
                  className="fill-amber-600 dark:fill-amber-400 font-mono text-[8.5px] font-black"
                >
                  {trackConfig.filterTag}
                </text>
                <rect
                  x="105"
                  y="59"
                  width="34"
                  height="15"
                  rx="4"
                  className="fill-amber-500/15"
                />
                <text
                  x="122"
                  y="69"
                  textAnchor="middle"
                  className="fill-amber-700 dark:fill-amber-300 font-mono text-[7.5px] font-bold"
                >
                  {trackConfig.guardTag}
                </text>
              </g>

              {/* Smooth Stabilized Wave to Right Checklist */}
              <line
                x1="148"
                y1="58"
                x2="174"
                y2="58"
                stroke="#10B981"
                strokeWidth="2"
                strokeDasharray="3 3"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="12"
                  to="0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </line>

              {/* Right: Verified Audit Checklist Box */}
              <rect
                x="174"
                y="26"
                width="68"
                height="64"
                rx="9"
                className="fill-white dark:fill-[#0E1117] stroke-zinc-700 dark:stroke-zinc-300"
                strokeWidth="1.6"
              />
              {[40, 58, 76].map((cy, idx) => (
                <g key={idx}>
                  <circle cx="187" cy={cy} r="4.5" fill="#10B981" />
                  <path
                    d={`M 185 ${cy} L 186.5 ${cy + 1.5} L 189.5 ${cy - 1.5}`}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <rect
                    x="196"
                    y={cy - 2}
                    width="36"
                    height="4"
                    rx="2"
                    className="fill-zinc-600 dark:fill-zinc-300"
                  />
                </g>
              ))}
            </svg>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-heading font-extrabold text-sm sm:text-base text-zinc-950 dark:text-white leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {trackConfig.card2Title}
              </h4>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 font-mono text-[9px] font-bold uppercase shrink-0">
                Checklist
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              {trackConfig.card2Desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
