import React, { useState } from 'react';

interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  accentColor: string;
  hoverBorder: string;
  serviceQuery: string;
  badgeText?: string;
  renderSchematic: (isHovered: boolean) => React.ReactNode;
}

interface InteractiveFeatureGridProps {
  onSelectFeature?: (id: string) => void;
  className?: string;
}

export const InteractiveFeatureGrid: React.FC<InteractiveFeatureGridProps> = ({
  onSelectFeature,
  className = '',
}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCardClick = (card: FeatureCardItem) => {
    if (onSelectFeature) {
      onSelectFeature(card.id);
    } else if (typeof window !== 'undefined') {
      const p = window.location.pathname.toLowerCase();
      const prefix = p.startsWith('/portofolio-me')
        ? '/portofolio-me'
        : p.startsWith('/profesional')
        ? '/profesional'
        : '/corporation';
      window.history.pushState(
        null,
        '',
        `${prefix}/layanan?service=${card.serviceQuery}`
      );
      window.dispatchEvent(new Event('app-route-change'));
      window.dispatchEvent(new Event('locationchange'));
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const FEATURE_CARDS: FeatureCardItem[] = [
    // -------------------------------------------------------------------------
    // CARD 1: WEB & SISTEM KILAT (<0.8s LCP, 100% HAK MILIK)
    // Original Schematic: Modular Browser Wireframe + Speed Gauge Arc Locking 99+
    // -------------------------------------------------------------------------
    {
      id: 'fullstack-kilat',
      title: 'Web & Sistem Kilat',
      description:
        'Bangun website dan aplikasi kustom dengan kecepatan muat <0.8 detik. 100% source code jadi hak milik penuh tanpa sewa bulanan.',
      accentColor: '#2563EB',
      hoverBorder: 'hover:border-blue-500/80 dark:hover:border-blue-400/80',
      serviceQuery: 'jasa-pembuatan-website',
      badgeText: '<0.8s LCP',
      renderSchematic: (isHovered) => (
        <svg
          viewBox="0 0 260 130"
          className="w-full h-full overflow-visible select-none"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid-card-1" width="16" height="16" patternUnits="userSpaceOnUse">
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
          <rect x="8" y="6" width="244" height="118" rx="12" fill="url(#grid-card-1)" />

          {/* Left: Clean Browser Architecture Frame */}
          <g
            className="transition-transform duration-500 ease-out"
            style={{ transform: isHovered ? 'translateY(-2px)' : 'translateY(0px)' }}
          >
            <rect
              x="22"
              y="22"
              width="126"
              height="86"
              rx="8"
              className="fill-white dark:fill-[#151923] stroke-zinc-700 dark:stroke-zinc-300"
              strokeWidth="1.75"
            />
            {/* Browser Top Bar */}
            <line
              x1="22"
              y1="36"
              x2="148"
              y2="36"
              className="stroke-zinc-300 dark:stroke-zinc-700"
              strokeWidth="1.2"
            />
            <circle cx="31" cy="29" r="2" fill="#EF4444" />
            <circle cx="38" cy="29" r="2" fill="#F59E0B" />
            <circle cx="45" cy="29" r="2" fill="#10B981" />
            <rect
              x="54"
              y="26.5"
              width="58"
              height="5"
              rx="2.5"
              className="fill-zinc-200 dark:fill-zinc-700"
            />

            {/* Animated UI Layout Blocks Inside Browser */}
            <rect
              x="30"
              y="43"
              width="72"
              height="10"
              rx="3"
              className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="1.3"
            >
              <animate
                attributeName="width"
                values="58;76;58"
                dur="4s"
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="30"
              y="58"
              width="50"
              height="18"
              rx="3"
              className="fill-zinc-100 dark:fill-zinc-800 stroke-zinc-400 dark:stroke-zinc-600"
              strokeWidth="1.2"
            />
            <rect
              x="86"
              y="58"
              width="52"
              height="18"
              rx="3"
              className="fill-blue-50 dark:fill-blue-950/60 stroke-blue-500/70"
              strokeWidth="1.2"
            />
            {/* Bottom Code Ownership Bar */}
            <rect
              x="30"
              y="82"
              width="108"
              height="16"
              rx="4"
              className="fill-emerald-500/10 stroke-emerald-500/60"
              strokeWidth="1.2"
            />
            <circle cx="39" cy="90" r="3.5" fill="#10B981" />
            <path
              d="M 37.3 90 L 38.6 91.4 L 41 88.6"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="47" y="88" width="54" height="4" rx="2" fill="#10B981" opacity="0.75" />
          </g>

          {/* Animated Connection Line */}
          <path
            d="M 148 65 L 172 65"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1.75"
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

          {/* Right: Floating Speed Score Node */}
          <g
            className="transition-transform duration-500 ease-out"
            style={{ transform: isHovered ? 'scale(1.06)' : 'scale(1)', transformOrigin: '206px 65px' }}
          >
            <rect
              x="170"
              y="31"
              width="72"
              height="68"
              rx="12"
              className="fill-white dark:fill-[#151923] stroke-zinc-700 dark:stroke-zinc-300"
              strokeWidth="1.75"
            />
            {/* Speedometer Arc */}
            <path
              d="M 184 72 A 22 22 0 0 1 228 72"
              fill="none"
              className="stroke-zinc-200 dark:stroke-zinc-700"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M 184 72 A 22 22 0 0 1 228 72"
              fill="none"
              stroke="#10B981"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeDasharray="69"
              strokeDashoffset="6"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="22;4;22"
                dur="3.6s"
                repeatCount="indefinite"
              />
            </path>
            <text
              x="206"
              y="72"
              textAnchor="middle"
              className="fill-zinc-900 dark:fill-white font-mono text-[13px] font-black"
            >
              100
            </text>
            <text
              x="206"
              y="88"
              textAnchor="middle"
              className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[8.5px] font-bold"
            >
              SPEED
            </text>
          </g>
        </svg>
      ),
    },

    // -------------------------------------------------------------------------
    // CARD 2: AI WHATSAPP 24/7
    // Original Schematic: Incoming Chat Bubble -> AI SOP Brain -> Auto Invoice
    // -------------------------------------------------------------------------
    {
      id: 'whatsapp-agent',
      title: 'AI WhatsApp 24/7',
      description:
        'Agent AI cerdas berpanduan SOP bisnis yang membalas chat instan, cek ongkir otomatis, dan menerbitkan invoice closing 24 jam.',
      accentColor: '#10B981',
      hoverBorder: 'hover:border-emerald-500/80 dark:hover:border-emerald-400/80',
      serviceQuery: 'whatsapp-ai-agent',
      renderSchematic: (isHovered) => (
        <svg
          viewBox="0 0 260 130"
          className="w-full h-full overflow-visible select-none"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid-card-2" width="16" height="16" patternUnits="userSpaceOnUse">
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
          <rect x="8" y="6" width="244" height="118" rx="12" fill="url(#grid-card-2)" />

          {/* Left: Incoming Customer Chat Bubble */}
          <g
            className="transition-transform duration-500"
            style={{ transform: isHovered ? 'translateX(2px)' : 'translateX(0px)' }}
          >
            <rect
              x="16"
              y="36"
              width="66"
              height="44"
              rx="9"
              className="fill-white dark:fill-[#151923] stroke-zinc-700 dark:stroke-zinc-300"
              strokeWidth="1.75"
            />
            <circle cx="28" cy="50" r="4" fill="#10B981" />
            <rect
              x="36"
              y="47"
              width="36"
              height="4.5"
              rx="2"
              className="fill-zinc-700 dark:fill-zinc-300"
            />
            <rect
              x="24"
              y="58"
              width="48"
              height="4"
              rx="2"
              className="fill-zinc-300 dark:fill-zinc-600"
            >
              <animate
                attributeName="width"
                values="28;48;28"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="24"
              y="66"
              width="34"
              height="4"
              rx="2"
              className="fill-emerald-500/60"
            />
          </g>

          {/* Animated Signal Line 1 */}
          <line
            x1="82"
            y1="58"
            x2="106"
            y2="58"
            stroke="#10B981"
            strokeWidth="1.75"
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

          {/* Center: AI SOP Guardrail Node */}
          <g
            className="transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
              transformOrigin: '130px 58px',
            }}
          >
            <circle
              cx="130"
              cy="58"
              r="26"
              className="fill-emerald-500/10 stroke-emerald-500/40"
              strokeWidth="1.2"
            >
              <animate attributeName="r" values="24;28;24" dur="3s" repeatCount="indefinite" />
            </circle>
            <rect
              x="110"
              y="38"
              width="40"
              height="40"
              rx="11"
              className="fill-white dark:fill-[#151923] stroke-emerald-600 dark:stroke-emerald-400"
              strokeWidth="2"
            />
            <text
              x="130"
              y="56"
              textAnchor="middle"
              className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[11px] font-black"
            >
              AI
            </text>
            <text
              x="130"
              y="68"
              textAnchor="middle"
              className="fill-zinc-500 dark:fill-zinc-400 font-mono text-[7.5px] font-bold"
            >
              24/7
            </text>
          </g>

          {/* Animated Signal Line 2 */}
          <line
            x1="154"
            y1="58"
            x2="176"
            y2="58"
            stroke="#10B981"
            strokeWidth="1.75"
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

          {/* Right: Automated Closing Invoice Card */}
          <g
            className="transition-transform duration-500"
            style={{ transform: isHovered ? 'translateY(-3px)' : 'translateY(0px)' }}
          >
            <rect
              x="176"
              y="26"
              width="68"
              height="68"
              rx="9"
              className="fill-white dark:fill-[#151923] stroke-zinc-700 dark:stroke-zinc-300"
              strokeWidth="1.75"
            />
            <rect
              x="184"
              y="34"
              width="34"
              height="10"
              rx="3"
              className="fill-emerald-500/15"
            />
            <text
              x="201"
              y="41.5"
              textAnchor="middle"
              className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[7.5px] font-black"
            >
              INVOICE
            </text>
            <rect
              x="184"
              y="50"
              width="50"
              height="4"
              rx="2"
              className="fill-zinc-300 dark:fill-zinc-700"
            />
            <rect
              x="184"
              y="58"
              width="38"
              height="4"
              rx="2"
              className="fill-zinc-300 dark:fill-zinc-700"
            />
            <rect
              x="184"
              y="70"
              width="52"
              height="15"
              rx="4"
              fill="#10B981"
            />
            <text
              x="210"
              y="80"
              textAnchor="middle"
              className="fill-white font-mono text-[8px] font-black"
            >
              ✓ CLOSING
            </text>
          </g>
        </svg>
      ),
    },

    // -------------------------------------------------------------------------
    // CARD 3: META CAPI ANTI-BLOKIR
    // Original Schematic: Dual-Path Telemetry (Blocked Browser vs Server CAPI Pipe)
    // -------------------------------------------------------------------------
    {
      id: 'meta-capi-telemetry',
      title: 'Meta CAPI Anti-Blokir',
      description:
        'Pelacakan konversi sisi server yang menembus ad-blocker & iOS 14+. Data iklan tercatat akurat dengan skor EMQ 9.8+.',
      accentColor: '#EA580C',
      hoverBorder: 'hover:border-orange-500/80 dark:hover:border-orange-400/80',
      serviceQuery: 'meta-capi-ads-tracking',
      renderSchematic: (isHovered) => (
        <svg
          viewBox="0 0 260 130"
          className="w-full h-full overflow-visible select-none"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid-card-3" width="16" height="16" patternUnits="userSpaceOnUse">
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
          <rect x="8" y="6" width="244" height="118" rx="12" fill="url(#grid-card-3)" />

          {/* Left: Event Source Node */}
          <rect
            x="18"
            y="42"
            width="52"
            height="46"
            rx="9"
            className="fill-white dark:fill-[#151923] stroke-zinc-700 dark:stroke-zinc-300"
            strokeWidth="1.75"
          />
          <rect x="26" y="51" width="36" height="5" rx="2.5" className="fill-orange-500" />
          <rect
            x="26"
            y="61"
            width="26"
            height="4"
            rx="2"
            className="fill-zinc-300 dark:fill-zinc-600"
          />
          <text
            x="44"
            y="78"
            textAnchor="middle"
            className="fill-zinc-500 dark:fill-zinc-400 font-mono text-[7.5px] font-bold"
          >
            EVENT
          </text>

          {/* Upper Path: Standard Browser Pixel (Blocked by AdBlocker X) */}
          <path
            d="M 70 53 C 95 32, 118 32, 136 32"
            fill="none"
            className="stroke-zinc-300 dark:stroke-zinc-700"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <circle
            cx="144"
            cy="32"
            r="9"
            className="fill-rose-50 dark:fill-rose-950/80 stroke-rose-400"
            strokeWidth="1.4"
          />
          <path
            d="M 141 29 L 147 35 M 147 29 L 141 35"
            stroke="#F43F5E"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Lower Path: Server-Side CAPI Bypass Pipe (Active Glowing Flow) */}
          <path
            d="M 70 76 C 102 96, 148 96, 182 74"
            fill="none"
            stroke="#EA580C"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Flowing Telemetry Packet */}
          <circle r="4" fill="#EA580C">
            <animateMotion
              dur="2.2s"
              repeatCount="indefinite"
              path="M 70 76 C 102 96, 148 96, 182 74"
            />
          </circle>

          {/* Server CAPI Pill on Lower Path */}
          <rect
            x="104"
            y="80"
            width="50"
            height="18"
            rx="9"
            className="fill-white dark:fill-[#151923] stroke-orange-500"
            strokeWidth="1.5"
          />
          <text
            x="129"
            y="91.5"
            textAnchor="middle"
            className="fill-orange-600 dark:fill-orange-400 font-mono text-[8px] font-black"
          >
            CAPI
          </text>

          {/* Right: Verified Conversion Attribution Node */}
          <g
            className="transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.06)' : 'scale(1)',
              transformOrigin: '212px 64px',
            }}
          >
            <rect
              x="182"
              y="34"
              width="62"
              height="60"
              rx="11"
              className="fill-white dark:fill-[#151923] stroke-zinc-700 dark:stroke-zinc-300"
              strokeWidth="1.75"
            />
            <rect
              x="190"
              y="42"
              width="46"
              height="14"
              rx="4"
              className="fill-orange-500/15"
            />
            <text
              x="213"
              y="51.5"
              textAnchor="middle"
              className="fill-orange-600 dark:fill-orange-400 font-mono text-[8px] font-black"
            >
              EMQ 9.8
            </text>
            <circle cx="213" cy="74" r="10" className="fill-emerald-500/15 stroke-emerald-500" strokeWidth="1.5" />
            <path
              d="M 209 74 L 212 77 L 217.5 71"
              fill="none"
              stroke="#10B981"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
    },

    // -------------------------------------------------------------------------
    // CARD 4: CLOUD VPS KEBAL HACK
    // Original Schematic: 5-Layer Hexagonal Shield + Protected Server Rack Core
    // -------------------------------------------------------------------------
    {
      id: 'vps-hardening-speed',
      title: 'Cloud VPS Kebal Hack',
      description:
        'Server Linux mandiri dengan 5 lapis proteksi (Firewall UFW, Fail2ban, SSH Key, Zero-Trust) dan otomasi n8n tanpa batas.',
      accentColor: '#7C3AED',
      hoverBorder: 'hover:border-purple-500/80 dark:hover:border-purple-400/80',
      serviceQuery: 'setup-cloud-vps-hardening',
      renderSchematic: (isHovered) => (
        <svg
          viewBox="0 0 260 130"
          className="w-full h-full overflow-visible select-none"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid-card-4" width="16" height="16" patternUnits="userSpaceOnUse">
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
          <rect x="8" y="6" width="244" height="118" rx="12" fill="url(#grid-card-4)" />

          {/* Outer Protective Perimeter Ring */}
          <circle
            cx="130"
            cy="65"
            r="46"
            fill="none"
            className="stroke-purple-500/35 dark:stroke-purple-400/35"
            strokeWidth="1.5"
            strokeDasharray="5 4"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 130 65"
              to="360 130 65"
              dur="18s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Left & Right Security Layer Tags */}
          <g>
            <rect
              x="20"
              y="32"
              width="52"
              height="22"
              rx="6"
              className="fill-white dark:fill-[#151923] stroke-zinc-600 dark:stroke-zinc-400"
              strokeWidth="1.4"
            />
            <text
              x="46"
              y="46"
              textAnchor="middle"
              className="fill-zinc-800 dark:fill-zinc-200 font-mono text-[8.5px] font-black"
            >
              UFW 5X
            </text>

            <rect
              x="20"
              y="76"
              width="52"
              height="22"
              rx="6"
              className="fill-white dark:fill-[#151923] stroke-zinc-600 dark:stroke-zinc-400"
              strokeWidth="1.4"
            />
            <text
              x="46"
              y="90"
              textAnchor="middle"
              className="fill-purple-600 dark:fill-purple-400 font-mono text-[8.5px] font-black"
            >
              SSH KEY
            </text>

            <rect
              x="188"
              y="32"
              width="52"
              height="22"
              rx="6"
              className="fill-white dark:fill-[#151923] stroke-zinc-600 dark:stroke-zinc-400"
              strokeWidth="1.4"
            />
            <text
              x="214"
              y="46"
              textAnchor="middle"
              className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[8.5px] font-black"
            >
              TLS 1.3
            </text>

            <rect
              x="188"
              y="76"
              width="52"
              height="22"
              rx="6"
              className="fill-white dark:fill-[#151923] stroke-zinc-600 dark:stroke-zinc-400"
              strokeWidth="1.4"
            />
            <text
              x="214"
              y="90"
              textAnchor="middle"
              className="fill-zinc-800 dark:fill-zinc-200 font-mono text-[8.5px] font-black"
            >
              FAIL2BAN
            </text>
          </g>

          {/* Connector Lines to Center Shield */}
          <line x1="72" y1="43" x2="96" y2="54" stroke="#8B5CF6" strokeWidth="1.3" strokeDasharray="2 2" />
          <line x1="72" y1="87" x2="96" y2="76" stroke="#8B5CF6" strokeWidth="1.3" strokeDasharray="2 2" />
          <line x1="188" y1="43" x2="164" y2="54" stroke="#10B981" strokeWidth="1.3" strokeDasharray="2 2" />
          <line x1="188" y1="87" x2="164" y2="76" stroke="#10B981" strokeWidth="1.3" strokeDasharray="2 2" />

          {/* Center: Hardened Server Shield Core */}
          <g
            className="transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.08)' : 'scale(1)',
              transformOrigin: '130px 65px',
            }}
          >
            <path
              d="M 130 27 L 160 39 L 160 66 C 160 85, 146 98, 130 104 C 114 98, 100 85, 100 66 L 100 39 Z"
              className="fill-white dark:fill-[#151923] stroke-purple-600 dark:stroke-purple-400"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Server Blades Inside Shield */}
            <rect
              x="114"
              y="47"
              width="32"
              height="9"
              rx="2.5"
              className="fill-zinc-100 dark:fill-zinc-800 stroke-zinc-400 dark:stroke-zinc-600"
              strokeWidth="1"
            />
            <circle cx="120" cy="51.5" r="1.8" fill="#10B981" />
            <rect
              x="114"
              y="60"
              width="32"
              height="9"
              rx="2.5"
              className="fill-zinc-100 dark:fill-zinc-800 stroke-zinc-400 dark:stroke-zinc-600"
              strokeWidth="1"
            />
            <circle cx="120" cy="64.5" r="1.8" fill="#10B981" />
            {/* Verified Lock Dot at Bottom of Shield */}
            <circle cx="130" cy="82" r="7" fill="#10B981" />
            <path
              d="M 127 82 L 129.2 84.2 L 133.5 79.8"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section className={`w-full ${className}`}>
      {/* Clean, Minimal Section Header */}
      <div className="mb-6 text-center max-w-2xl mx-auto space-y-1.5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-600 dark:text-orange-400 text-[11px] font-mono font-bold">
          <span>✦ 4 PILAR EKOSISTEM FITRAN.DEV</span>
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
          Solusi Digital Siap Pakai untuk Skala Bisnis
        </h2>
      </div>

      {/* 4 Simple, Proportional Cards Grid (Clean Vector Schematic + Title + Description) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURE_CARDS.map((card) => {
          const isHovered = hoveredCard === card.id;

          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative flex flex-col justify-between rounded-2xl border bg-white dark:bg-[#111319] p-5 text-left transition-all duration-300 cursor-pointer border-zinc-200/90 dark:border-zinc-800/90 shadow-xs hover:shadow-lg hover:-translate-y-1 ${card.hoverBorder}`}
            >
              {/* Optional subtle pill on first card */}
              {card.badgeText && (
                <span className="absolute top-3.5 right-3.5 z-10 px-2.5 py-0.5 rounded-full bg-orange-500 text-white font-mono text-[10px] font-bold tracking-wide shadow-2xs">
                  {card.badgeText}
                </span>
              )}

              {/* 1. Open Vector Schematic Canvas */}
              <div className="relative w-full h-36 sm:h-40 mb-3 flex items-center justify-center overflow-hidden">
                {card.renderSchematic(isHovered)}
              </div>

              {/* 2. Clean 1-Line Title & 2-3 Line Description */}
              <div className="space-y-1.5">
                <h3 className="font-heading text-base sm:text-lg font-extrabold text-zinc-950 dark:text-white leading-snug group-hover:text-[#1E3A8A] dark:group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
