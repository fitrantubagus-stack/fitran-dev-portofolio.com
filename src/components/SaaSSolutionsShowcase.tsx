import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, Bot, CheckCircle2, Flame } from 'lucide-react';

interface SaaSSolutionsShowcaseProps {
  onWhatsAppInquiry: (serviceName?: string, budget?: string) => void;
  className?: string;
  mode?: 'cards-only' | 'pricing-only' | 'full';
}

export const SaaSSolutionsShowcase: React.FC<SaaSSolutionsShowcaseProps> = ({
  onWhatsAppInquiry,
  className = '',
  mode = 'full',
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const LAYANAN_SCHEMATIC_CARDS = [
    {
      id: 'erd-database-architecture',
      badge: 'ARSITEKTUR DATA',
      title: 'Perancangan Skema Database & API Modular',
      description:
        'Pemetaan relasi tabel PostgreSQL (ERD), indeks performa tinggi, dan kontrak REST API yang rapi sebelum proses coding dimulai.',
      hoverBorder: 'hover:border-indigo-500/80 dark:hover:border-indigo-400/80',
      topic: 'Konsultasi Perancangan Database & Arsitektur Sistem',
      renderSchematic: (isHovered: boolean) => (
        <svg
          viewBox="0 0 340 135"
          className="w-full h-full overflow-visible select-none"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid-layanan-1" width="16" height="16" patternUnits="userSpaceOnUse">
              <path
                d="M 16 0 L 0 0 0 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="2 2"
                className="text-zinc-200/90 dark:text-zinc-800/90"
              />
            </pattern>
          </defs>
          <rect x="8" y="6" width="324" height="123" rx="12" fill="url(#grid-layanan-1)" />

          {/* Left Table: USERS (PK) */}
          <g
            className="transition-transform duration-500"
            style={{ transform: isHovered ? 'translateY(-2px)' : 'translateY(0px)' }}
          >
            <rect
              x="22"
              y="26"
              width="82"
              height="78"
              rx="8"
              className="fill-white dark:fill-[#151923] stroke-zinc-700 dark:stroke-zinc-300"
              strokeWidth="1.75"
            />
            <rect
              x="22"
              y="26"
              width="82"
              height="18"
              rx="8"
              className="fill-indigo-500/15"
            />
            <text
              x="63"
              y="38"
              textAnchor="middle"
              className="fill-indigo-600 dark:fill-indigo-400 font-mono text-[8.5px] font-black"
            >
              TBL_CLIENT
            </text>
            <circle cx="33" cy="54" r="3" fill="#6366F1" />
            <rect x="41" y="52" width="52" height="4" rx="2" className="fill-zinc-700 dark:fill-zinc-300" />
            <circle cx="33" cy="67" r="2.5" className="fill-zinc-400" />
            <rect x="41" y="65" width="44" height="4" rx="2" className="fill-zinc-300 dark:fill-zinc-600" />
            <circle cx="33" cy="80" r="2.5" className="fill-zinc-400" />
            <rect x="41" y="78" width="36" height="4" rx="2" className="fill-zinc-300 dark:fill-zinc-600" />
          </g>

          {/* Animated Relational Connectors (1-to-Many) */}
          <path
            d="M 104 54 C 122 54, 122 44, 138 44"
            fill="none"
            stroke="#6366F1"
            strokeWidth="1.8"
            strokeDasharray="3 3"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="12"
              to="0"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M 104 67 C 122 67, 122 92, 138 92"
            fill="none"
            stroke="#10B981"
            strokeWidth="1.8"
            strokeDasharray="3 3"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="12"
              to="0"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </path>

          {/* Center Table: ORDERS (FK) */}
          <g
            className="transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transformOrigin: '178px 65px',
            }}
          >
            <rect
              x="138"
              y="22"
              width="82"
              height="38"
              rx="8"
              className="fill-white dark:fill-[#151923] stroke-indigo-500"
              strokeWidth="1.75"
            />
            <text
              x="179"
              y="36"
              textAnchor="middle"
              className="fill-indigo-600 dark:fill-indigo-400 font-mono text-[8px] font-black"
            >
              TBL_ORDERS
            </text>
            <rect x="148" y="43" width="62" height="4" rx="2" className="fill-zinc-400 dark:fill-zinc-500" />
            <rect x="148" y="50" width="44" height="4" rx="2" className="fill-indigo-500/60" />

            <rect
              x="138"
              y="72"
              width="82"
              height="38"
              rx="8"
              className="fill-white dark:fill-[#151923] stroke-emerald-500"
              strokeWidth="1.75"
            />
            <text
              x="179"
              y="86"
              textAnchor="middle"
              className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[8px] font-black"
            >
              TBL_STOCK
            </text>
            <rect x="148" y="93" width="62" height="4" rx="2" className="fill-zinc-400 dark:fill-zinc-500" />
            <rect x="148" y="100" width="48" height="4" rx="2" className="fill-emerald-500/60" />
          </g>

          {/* Right Connectors to ACID / API Contract Node */}
          <path d="M 220 41 L 248 58" fill="none" stroke="#6366F1" strokeWidth="1.6" />
          <path d="M 220 91 L 248 74" fill="none" stroke="#10B981" strokeWidth="1.6" />

          {/* Right Node: ACID Verified Badge */}
          <g
            className="transition-transform duration-500"
            style={{
              transform: isHovered ? 'translateX(2px)' : 'translateX(0px)',
            }}
          >
            <rect
              x="248"
              y="38"
              width="68"
              height="56"
              rx="10"
              className="fill-white dark:fill-[#151923] stroke-zinc-700 dark:stroke-zinc-300"
              strokeWidth="1.75"
            />
            <circle cx="282" cy="56" r="9" className="fill-emerald-500/15 stroke-emerald-500" strokeWidth="1.5" />
            <path
              d="M 278.5 56 L 281 58.5 L 286 53.5"
              fill="none"
              stroke="#10B981"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="282"
              y="79"
              textAnchor="middle"
              className="fill-zinc-900 dark:fill-white font-mono text-[8.5px] font-black"
            >
              ACID SAFE
            </text>
          </g>
        </svg>
      ),
    },
    {
      id: 'webhook-payment-orchestration',
      badge: 'OTOMASI TRANSAKSI',
      title: 'Integrasi Payment QRIS, Kurir & Multi-AI',
      description:
        'Orkestrasi pembayaran otomatis (QRIS/Virtual Account), hitung tarif kurir instan, dan sinkronisasi multi-model AI dalam satu ekosistem.',
      hoverBorder: 'hover:border-teal-500/80 dark:hover:border-teal-400/80',
      topic: 'Konsultasi Integrasi Payment Gateway & Otomasi Bisnis',
      renderSchematic: (isHovered: boolean) => (
        <svg
          viewBox="0 0 340 135"
          className="w-full h-full overflow-visible select-none"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid-layanan-2" width="16" height="16" patternUnits="userSpaceOnUse">
              <path
                d="M 16 0 L 0 0 0 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="2 2"
                className="text-zinc-200/90 dark:text-zinc-800/90"
              />
            </pattern>
          </defs>
          <rect x="8" y="6" width="324" height="123" rx="12" fill="url(#grid-layanan-2)" />

          {/* Left: Checkout Trigger */}
          <rect
            x="22"
            y="42"
            width="68"
            height="50"
            rx="9"
            className="fill-white dark:fill-[#151923] stroke-zinc-700 dark:stroke-zinc-300"
            strokeWidth="1.75"
          />
          <rect x="32" y="52" width="48" height="6" rx="3" className="fill-teal-500" />
          <rect x="32" y="63" width="34" height="4" rx="2" className="fill-zinc-300 dark:fill-zinc-600" />
          <text
            x="56"
            y="81"
            textAnchor="middle"
            className="fill-zinc-600 dark:fill-zinc-400 font-mono text-[8px] font-black"
          >
            ORDER IN
          </text>

          {/* Animated Input Stream */}
          <line
            x1="90"
            y1="67"
            x2="134"
            y2="67"
            stroke="#14B8A6"
            strokeWidth="2"
            strokeDasharray="3 3"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="12"
              to="0"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </line>

          {/* Center: Webhook Router Hub */}
          <g
            className="transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.07)' : 'scale(1)',
              transformOrigin: '162px 67px',
            }}
          >
            <circle cx="162" cy="67" r="28" className="fill-teal-500/10 stroke-teal-500/40" strokeWidth="1.2">
              <animate attributeName="r" values="25;30;25" dur="3s" repeatCount="indefinite" />
            </circle>
            <rect
              x="140"
              y="45"
              width="44"
              height="44"
              rx="12"
              className="fill-white dark:fill-[#151923] stroke-teal-600 dark:stroke-teal-400"
              strokeWidth="2"
            />
            <text
              x="162"
              y="65"
              textAnchor="middle"
              className="fill-teal-600 dark:fill-teal-400 font-mono text-[9.5px] font-black"
            >
              API
            </text>
            <text
              x="162"
              y="76"
              textAnchor="middle"
              className="fill-zinc-500 dark:fill-zinc-400 font-mono text-[7px] font-bold"
            >
              ROUTER
            </text>
          </g>

          {/* 3 Output Branches to QRIS, Logistics, and CRM */}
          <path d="M 184 55 L 236 33" fill="none" stroke="#14B8A6" strokeWidth="1.6" strokeDasharray="3 3">
            <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.1s" repeatCount="indefinite" />
          </path>
          <path d="M 184 67 L 236 67" fill="none" stroke="#3B82F6" strokeWidth="1.6" strokeDasharray="3 3">
            <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.1s" repeatCount="indefinite" />
          </path>
          <path d="M 184 79 L 236 101" fill="none" stroke="#F59E0B" strokeWidth="1.6" strokeDasharray="3 3">
            <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.1s" repeatCount="indefinite" />
          </path>

          {/* Right Nodes */}
          <g
            className="transition-transform duration-500"
            style={{ transform: isHovered ? 'translateX(3px)' : 'translateX(0px)' }}
          >
            <rect
              x="236"
              y="20"
              width="80"
              height="25"
              rx="6"
              className="fill-white dark:fill-[#151923] stroke-teal-500/80"
              strokeWidth="1.5"
            />
            <circle cx="248" cy="32.5" r="3" fill="#10B981" />
            <text x="281" y="35.5" textAnchor="middle" className="fill-zinc-900 dark:fill-white font-mono text-[8px] font-black">
              QRIS LUNAS
            </text>

            <rect
              x="236"
              y="54.5"
              width="80"
              height="25"
              rx="6"
              className="fill-white dark:fill-[#151923] stroke-blue-500/80"
              strokeWidth="1.5"
            />
            <circle cx="248" cy="67" r="3" fill="#3B82F6" />
            <text x="281" y="70" textAnchor="middle" className="fill-zinc-900 dark:fill-white font-mono text-[8px] font-black">
              RESI KURIR
            </text>

            <rect
              x="236"
              y="89"
              width="80"
              height="25"
              rx="6"
              className="fill-white dark:fill-[#151923] stroke-amber-500/80"
              strokeWidth="1.5"
            />
            <circle cx="248" cy="101.5" r="3" fill="#F59E0B" />
            <text x="281" y="104.5" textAnchor="middle" className="fill-zinc-900 dark:fill-white font-mono text-[8px] font-black">
              NOTIF WA
            </text>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className={`space-y-14 select-none ${className}`}>
      {/* ========================================================================= */}
      {/* 1. 2-CARD SIMPLE VECTOR SCHEMATIC SHOWCASE FOR /LAYANAN                   */}
      {/* ========================================================================= */}
      {mode !== 'pricing-only' && (
        <div className="space-y-5">
          <div className="max-w-2xl space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-900/60 text-orange-700 dark:text-orange-400 font-mono text-[11px] font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span>FONDASI TEKNIS &amp; OTOMASI SISTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
              Arsitektur Terstruktur dari Database hingga Transaksi
            </h2>
          </div>

          {/* 2 Simple Animated Schematic Cards (Distinct to /layanan) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LAYANAN_SCHEMATIC_CARDS.map((card) => {
              const isHovered = hoveredId === card.id;
              return (
                <div
                  key={card.id}
                  onClick={() => onWhatsAppInquiry(card.topic)}
                  onMouseEnter={() => setHoveredId(card.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group relative flex flex-col justify-between rounded-2xl border bg-white dark:bg-[#111319] p-5 sm:p-6 text-left transition-all duration-300 cursor-pointer border-zinc-200/90 dark:border-zinc-800/90 shadow-xs hover:shadow-lg hover:-translate-y-1 ${card.hoverBorder}`}
                >
                  {/* Open Vector Schematic Canvas */}
                  <div className="relative w-full h-36 sm:h-40 mb-3 flex items-center justify-center overflow-hidden">
                    {card.renderSchematic(isHovered)}
                  </div>

                  {/* Title, Badge & Concise Description */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-heading text-base sm:text-lg font-extrabold text-zinc-950 dark:text-white leading-snug group-hover:text-[#1E3A8A] dark:group-hover:text-blue-400 transition-colors">
                        {card.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-[10px] font-bold shrink-0">
                        {card.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. SAAS PRICING TABLE                                                     */}
      {/* ========================================================================= */}
      {mode !== 'cards-only' && (
      <div id="pricing-plans" className="space-y-6 pt-2">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 font-mono text-[11px] font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Transparansi Biaya &amp; Paket Investasi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
            Pilihan Paket yang Jelas &amp; Masuk Akal
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Tanpa biaya tersembunyi. Dapatkan website performa tinggi, sistem otomasi, atau solusi bundle lengkap dengan garansi resmi.
          </p>
        </div>

        {/* 3 Pricing Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch pt-2">
          {/* PLAN 1: STARTER */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <h3 className="font-extrabold text-lg text-zinc-950 dark:text-white">Starter</h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-black text-zinc-950 dark:text-white">Rp 2.5jt</span>
                  <span className="text-xs text-zinc-500 font-mono">/proyek</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-zinc-400 line-through">Rp 3.5jt</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400">
                    28% OFF
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mt-2">
                  Buat yang mulai serius validasi ide &amp; dapat cuan secepat kilat.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                {[
                  'Landing page kilat (<0.8 detik respons)',
                  'Form WhatsApp Click-to-Chat otomatis',
                  'Desain mobile-first & responsive',
                  'Setup Google Analytics 4 & Meta Pixel',
                  'Gratis Domain (.com/.id) & Cloudflare 1 Tahun',
                  'Penyerahan Source Code & Panduan Edit Video',
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onWhatsAppInquiry('Paket Starter Website Kilat', 'Rp 2.5jt')}
              className="w-full py-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-950 dark:text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Pilih Paket Starter
            </button>
          </div>

          {/* PLAN 2: PRO */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <h3 className="font-extrabold text-lg text-zinc-950 dark:text-white">Pro Scaleup</h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-black text-zinc-950 dark:text-white">Rp 5.5jt</span>
                  <span className="text-xs text-zinc-500 font-mono">/proyek</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-zinc-400 line-through">Rp 8.0jt</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400">
                    31% OFF
                  </span>
                </div>
                <p className="text-xs text-zinc-700 dark:text-zinc-300 mt-2 font-normal">
                  Unlimited skala bisnis dengan database PostgreSQL &amp; dashboard.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                {[
                  'Semua fitur pada Paket Starter',
                  'Fullstack Next.js 15 + Database PostgreSQL',
                  'Dashboard Admin / CMS Pengelolaan Data',
                  'Server-Side CAPI Tracking (Anti-Adblocker 100%)',
                  'Notifikasi WhatsApp Pesanan ke Owner & Customer',
                  'Chat langsung dengan Tubagus Fitran untuk bantuan',
                  'Garansi Maintenance & SLA Bugfix 90 Hari',
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onWhatsAppInquiry('Paket Pro Scaleup', 'Rp 5.5jt')}
              className="w-full py-3 rounded-2xl bg-[#1E3A8A] hover:bg-blue-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-md"
            >
              Pilih Paket Pro
            </button>
          </div>

          {/* PLAN 3: BUNDLE PRO + AI AGENT */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#111319] border-2 border-orange-500 ring-2 ring-orange-500/20 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-linear-to-r from-orange-500 to-amber-500 text-white font-mono text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span># Paling Worth</span>
              </span>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-100 dark:bg-orange-950 flex items-center justify-center text-orange-600 font-black text-xs">
                    FD
                  </div>
                  <span className="text-zinc-400 font-bold text-xs">+</span>
                  <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-purple-600 font-black text-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-black text-lg text-zinc-950 dark:text-white mt-2">
                  Bundle Pro + AI Agent
                </h3>

                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-black text-zinc-950 dark:text-white">Rp 9.9jt</span>
                  <span className="text-xs text-zinc-500 font-mono">/paket solusi</span>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-zinc-400 line-through">Rp 14.5jt</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400">
                    32% OFF
                  </span>
                </div>

                <p className="text-xs text-zinc-500 mt-2">
                  Dari rencana ke desain &amp; otomasi AI, dua kekuatan besar dalam satu paket investasi.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                {[
                  'Semua fitur pada Paket Pro Scaleup',
                  'AI WhatsApp Customer Care 24/7 (RAG SOP Bisnis)',
                  'Auto-follow up prospek & reminder tagihan',
                  'Infrastruktur Zero-Trust Cloudflare + Docker VPS',
                  'Setup Google Tag Manager + Meta CAPI Backend',
                  'Aktivasi AI Agent & integrasi ke nomor WhatsApp resmi',
                  'Dedicated Priority Support via WhatsApp Pribadi Tubagus Fitran',
                  'Garansi Performa & Update Rutin 6 Bulan Penuh',
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-800 dark:text-zinc-200 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onWhatsAppInquiry('Bundle Pro + AI Agent (# Paling Worth)', 'Rp 9.9jt')}
              className="w-full py-3.5 rounded-2xl bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs transition-all cursor-pointer shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2"
            >
              <span>Ambil Promo Bundle Worth It</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};
