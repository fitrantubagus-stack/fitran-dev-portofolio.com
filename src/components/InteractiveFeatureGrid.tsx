import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Cpu,
  Layers,
  Bot,
  Zap,
  Check,
  Play,
  Pause,
  RotateCcw,
  ShieldCheck,
  Send,
  Activity,
  QrCode,
  Server,
  Database,
  Lock,
  Workflow,
  Receipt,
  Truck,
  CreditCard,
  Wifi,
  Sparkles,
} from 'lucide-react';

interface FeatureCardItem {
  id: string;
  number: string;
  badge: string;
  badgeColor: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
  ringColor: string;
  hoverBorder: string;
  actionText: string;
  serviceQuery: string;
  renderIllustration: (
    isBoosted: boolean,
    boostPhase: number,
    progress: number,
    isHovered: boolean
  ) => React.ReactNode;
}

interface InteractiveFeatureGridProps {
  onSelectFeature?: (id: string) => void;
  className?: string;
}

export const InteractiveFeatureGrid: React.FC<InteractiveFeatureGridProps> = ({
  onSelectFeature,
  className = '',
}) => {
  // 9-second boost cycle per card as explicitly required by the user
  const BOOST_DURATION_MS = 9000;

  const [activeBoostIdx, setActiveBoostIdx] = useState<number>(0);
  const [boostProgress, setBoostProgress] = useState<number>(0); // 0 to 100
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Boost phase: 0 (0-3s, entry/setup), 1 (3-6s, processing/action), 2 (6-9s, result/verified)
  const boostPhase = Math.min(2, Math.floor((boostProgress / 100) * 3));
  const currentSeconds = ((boostProgress / 100) * 9).toFixed(1);

  const lastTimeRef = useRef<number>(performance.now());
  const reqIdRef = useRef<number | null>(null);

  // High-precision RAF loop with delta-time clamping to prevent background tab stutter
  useEffect(() => {
    lastTimeRef.current = performance.now();

    const loop = (now: number) => {
      const rawDelta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      // Clamp delta to 100ms so tab switching doesn't cause sudden time leaps
      const delta = Math.min(rawDelta, 100);

      if (!isPaused && hoveredCard === null) {
        setBoostProgress((prev) => {
          const step = (delta / BOOST_DURATION_MS) * 100;
          if (prev + step >= 100) {
            setActiveBoostIdx((current) => (current + 1) % 4);
            return 0;
          }
          return prev + step;
        });
      }

      reqIdRef.current = requestAnimationFrame(loop);
    };

    reqIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current);
      }
    };
  }, [isPaused, hoveredCard]);

  // Jump to specific card and restart its 9s boost cycle
  const handleSelectBoostCard = (index: number) => {
    setActiveBoostIdx(index);
    setBoostProgress(0);
  };

  const handleCardClick = (card: FeatureCardItem) => {
    if (onSelectFeature) {
      onSelectFeature(card.id);
      return;
    }

    if (typeof window !== 'undefined') {
      window.history.pushState(
        null,
        '',
        `/corporation/layanan?service=${card.serviceQuery}`
      );
      window.dispatchEvent(new Event('app-route-change'));
      window.dispatchEvent(new Event('locationchange'));
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const FEATURE_CARDS: FeatureCardItem[] = [
    // -------------------------------------------------------------------------
    // CARD 1: ARSITEKTUR FULLSTACK & WEBSITE KILAT (<0.8s LCP, 100% Hak Milik)
    // -------------------------------------------------------------------------
    {
      id: 'fullstack-kilat',
      number: '01',
      badge: '100% HAK MILIK',
      badgeColor: '#2563EB', // Blue
      title: 'Arsitektur Fullstack & Website Kilat',
      tagline: '<0.8s LCP · Next.js 15 & TS · 100% Hak Milik · Zero Sewa',
      description:
        'Rekayasa aplikasi web berkecepatan instan dengan waktu muat <0.8 detik. Seluruh source code, arsitektur data, dan lisensi 100% diserahkan penuh kepada Anda tanpa biaya sewa kode tahunan.',
      accentColor: '#3B82F6',
      ringColor: 'rgba(59, 130, 246, 0.32)',
      hoverBorder: 'border-blue-500 dark:border-blue-400',
      actionText: 'Konsultasi Website Kilat',
      serviceQuery: 'jasa-pembuatan-website-custom',
      renderIllustration: (isBoosted, phase, progress, isHovered) => {
        const isFanned = isBoosted ? phase >= 1 : isHovered;
        const isCompleted = isBoosted && phase === 2;

        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-3 select-none overflow-hidden">
            {/* Tech Blueprint Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#60a5fa_1.2px,transparent_1.2px)] [background-size:14px_14px] opacity-25 pointer-events-none" />

            {/* 3D Stacked Architecture Cards (Inspired by DANA Banking Card Stack) */}
            <div className="relative w-full max-w-[250px] h-32 flex items-center justify-center perspective-[1000px]">
              {/* Layer 3: Database ACID (Teal/Emerald) */}
              <div
                className={`absolute w-full rounded-2xl p-2.5 flex items-center justify-between text-[11px] font-mono shadow-sm transition-all duration-500 ${
                  isFanned
                    ? 'translate-y-11 scale-95 border-2 border-emerald-500/80 bg-gradient-to-r from-emerald-900 to-teal-900 text-emerald-100 z-10'
                    : 'translate-y-2 scale-90 border border-zinc-400 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 text-zinc-500 z-10'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PostgreSQL ACID + Redis</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/30 text-emerald-300 font-semibold">
                  Zero Lock-in
                </span>
              </div>

              {/* Layer 2: API Gateway & Edge (Indigo/Violet) */}
              <div
                className={`absolute w-full rounded-2xl p-2.5 flex items-center justify-between text-[11px] font-mono shadow-md transition-all duration-500 ${
                  isFanned
                    ? 'translate-y-1 scale-100 border-2 border-indigo-500/80 bg-gradient-to-r from-indigo-900 to-blue-900 text-indigo-100 z-20'
                    : 'translate-y-1 scale-95 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800/90 text-zinc-600 z-20'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Go / Node Edge Gateway</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/30 text-indigo-300 font-semibold">
                  12ms Latency
                </span>
              </div>

              {/* Layer 1: Frontend UI (Deep Blue Glass Card with Chip & Contactless Wave) */}
              <div
                className={`absolute w-full rounded-2xl p-3 flex flex-col justify-between text-[11px] font-mono shadow-xl transition-all duration-500 ${
                  isFanned
                    ? '-translate-y-9 scale-105 border-2 border-blue-400 bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB] text-white z-30 ring-4 ring-blue-500/25'
                    : 'translate-y-0 scale-100 border-2 border-blue-600/80 bg-gradient-to-br from-[#1E3A8A] to-[#1D4ED8] text-white z-30'
                }`}
              >
                {/* Card Top Strip: Chip + Contactless Wave */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {/* Metallic Dev Chip */}
                    <div className="w-6 h-4.5 rounded bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-600 p-0.5 flex flex-col justify-between shadow-xs">
                      <div className="h-0.5 bg-amber-700/60 rounded-full" />
                      <div className="h-0.5 bg-amber-700/60 rounded-full" />
                    </div>
                    <Wifi className="w-3.5 h-3.5 text-blue-200 rotate-90" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-white border border-white/20">
                    Next.js 15 · TS
                  </span>
                </div>

                {/* Card Center: Dev Digits & LCP Speed */}
                <div className="my-1.5 flex items-center justify-between">
                  <span className="text-[10px] tracking-widest font-mono text-blue-200">
                    4096 · 8820 · LCP &lt;0.8s
                  </span>
                  <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-300 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/40">
                    <Check className="w-2.5 h-2.5" />
                    <span>0.74s</span>
                  </div>
                </div>

                {/* Card Bottom: Ownership Stamping */}
                <div className="flex items-center justify-between text-[8px] uppercase tracking-wider text-blue-100">
                  <span>TUBAGUS FITRAN B.</span>
                  <span className="font-black text-amber-300">100% HAK MILIK</span>
                </div>
              </div>
            </div>

            {/* Completion Golden Badge */}
            <div className="mt-2.5 w-full flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
                <Layers className="w-3 h-3" />
                <span>Tanpa Sewa Kode Tahunan</span>
              </span>
              <span
                className={`px-2 py-0.5 rounded-full font-bold transition-all ${
                  isCompleted
                    ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 shadow-xs'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
                }`}
              >
                {isCompleted ? '✓ Source Code Milik Anda' : `Fase ${phase + 1}/3: Arsitektur`}
              </span>
            </div>
          </div>
        );
      },
    },

    // -------------------------------------------------------------------------
    // CARD 2: WHATSAPP AI AGENT CLOSING 24/7 (SOP, Hitung Ongkir, Kuitansi)
    // -------------------------------------------------------------------------
    {
      id: 'whatsapp-agent',
      number: '02',
      badge: 'AUTO CLOSING 24/7',
      badgeColor: '#10B981', // Emerald
      title: 'WhatsApp AI Agent Closing 24/7',
      tagline: 'SOP Guardrails · Hitung Ongkir Otomatis · Preview Invoice Digital',
      description:
        'Agent AI terlatih dengan guardrails SOP bisnis Anda. Menjawab calon pembeli instan, menghitung estimasi ongkir otomatis, dan menerbitkan kuitansi closing langsung ke CRM 24/7 tanpa henti.',
      accentColor: '#10B981',
      ringColor: 'rgba(16, 185, 129, 0.32)',
      hoverBorder: 'border-emerald-500 dark:border-emerald-400',
      actionText: 'Uji Coba AI Agent WhatsApp',
      serviceQuery: 'whatsapp-ai-agent',
      renderIllustration: (isBoosted, phase, progress, isHovered) => {
        const activeContact = isBoosted ? phase % 3 : isHovered ? 1 : 0;

        return (
          <div className="relative w-full h-full flex flex-col justify-between p-2.5 select-none overflow-hidden">
            {/* Top Contact Avatars (Inspired by DANA Kirim Cepat) */}
            <div className="flex items-center justify-between gap-1.5 pb-1.5 border-b border-zinc-200/70 dark:border-zinc-800">
              <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                <Bot className="w-3 h-3 text-emerald-500" />
                <span>Kirim Cepat / Leads</span>
              </span>
              <div className="flex items-center gap-1.5">
                {[
                  { name: 'Budi', role: 'Distributor Grosir', initial: 'BD', color: '#2563EB' },
                  { name: 'Siti', role: 'Brand Skincare', initial: 'ST', color: '#10B981' },
                  { name: 'Rian', role: 'Retailer Toko', initial: 'RN', color: '#F59E0B' },
                ].map((lead, idx) => (
                  <div
                    key={idx}
                    className={`relative w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold transition-all ${
                      activeContact === idx
                        ? 'text-white scale-110 ring-2 ring-emerald-400 shadow-xs'
                        : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300'
                    }`}
                    style={{ backgroundColor: activeContact === idx ? lead.color : undefined }}
                    title={`${lead.name} (${lead.role})`}
                  >
                    <span>{lead.initial}</span>
                    {activeContact === idx && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-white dark:border-zinc-900 animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Conversation Mockup */}
            <div className="space-y-1.5 my-1">
              {/* Customer Inquiry Bubble */}
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-xl rounded-tl-none bg-zinc-100 dark:bg-zinc-800/90 px-2.5 py-1 text-[10px] text-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-zinc-700 shadow-2xs">
                  <p className="line-clamp-1 font-medium">Berapa ongkir 5 box ke Surabaya + invoice?</p>
                </div>
              </div>

              {/* AI Agent Response with SOP Guardrails */}
              <div className="flex justify-end">
                <div className="max-w-[92%] rounded-xl rounded-tr-none bg-emerald-500/15 dark:bg-emerald-950/70 border border-emerald-500/40 px-2.5 py-1 text-[10px] text-emerald-950 dark:text-emerald-200 shadow-xs">
                  {phase === 0 ? (
                    <div className="flex items-center gap-1.5 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="font-mono text-[9px] text-emerald-600 dark:text-emerald-400">
                        Memverifikasi SOP & tarif ekspedisi...
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 font-medium">
                      <Truck className="w-3 h-3 text-emerald-600 shrink-0" />
                      <p className="line-clamp-1">JNE Reguler Rp 24.000 · Total Rp 4.524.000 ✓</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Digital Invoice Ticket (DANA Transaction Style) */}
            <div
              className={`flex items-center justify-between px-2.5 py-1 rounded-xl border text-[10px] font-mono transition-all duration-300 ${
                phase === 2
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-500 shadow-md scale-[1.02]'
                  : 'bg-zinc-50 dark:bg-zinc-900/90 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Receipt
                  className={`w-3.5 h-3.5 ${
                    phase === 2 ? 'text-amber-300' : 'text-emerald-600 dark:text-emerald-400'
                  }`}
                />
                <span className="font-bold">Kuitansi #INV-8821</span>
              </div>
              <span className="font-black flex items-center gap-1">
                <span>{phase === 2 ? 'Lunas Closing Otomatis ✓' : 'Siap Ditagihkan'}</span>
              </span>
            </div>
          </div>
        );
      },
    },

    // -------------------------------------------------------------------------
    // CARD 3: META CAPI & SERVER-SIDE TELEMETRY (QRIS Scan, Deduplikasi, EMQ 9.4+)
    // -------------------------------------------------------------------------
    {
      id: 'meta-capi-tracking',
      number: '03',
      badge: 'EMQ 9.8+ ACCURATE',
      badgeColor: '#EA580C', // Orange / Flame
      title: 'Meta CAPI & Server-Side Telemetry',
      tagline: 'QRIS Scan · Deduplikasi Hash · Kebal Ad-Blocker iOS 14+',
      description:
        'Infrastruktur pelacakan konversi langsung dari server VPS ke Meta Graph API. Menyelamatkan omset iklan dari blokade browser dengan skor EMQ 9.4+ dan deduplikasi data akurat.',
      accentColor: '#F97316',
      ringColor: 'rgba(249, 115, 22, 0.32)',
      hoverBorder: 'border-orange-500 dark:border-orange-400',
      actionText: 'Setup Meta CAPI & Tracking',
      serviceQuery: 'meta-capi-tracking',
      renderIllustration: (isBoosted, phase, progress, isHovered) => {
        return (
          <div className="relative w-full h-full flex items-center justify-between gap-2.5 p-3 select-none overflow-hidden">
            {/* Left: Dynamic QRIS Card with Continuous Laser Beam (DANA QRIS Inspiration) */}
            <div className="relative w-24 h-24 rounded-2xl border-2 border-orange-500/70 bg-white dark:bg-[#161B22] p-1.5 flex flex-col items-center justify-center shrink-0 shadow-md overflow-hidden">
              {/* QRIS Top Banner */}
              <div className="w-full flex items-center justify-between px-1 mb-1 border-b border-zinc-100 dark:border-zinc-800 pb-0.5">
                <span className="font-mono text-[8px] font-black tracking-wider text-[#E02424]">
                  QRIS
                </span>
                <span className="font-mono text-[7px] text-zinc-400">NATIONAL</span>
              </div>

              {/* QR Code Icon */}
              <QrCode className="w-13 h-13 text-zinc-900 dark:text-zinc-100" />

              {/* Continuous Glowing Laser Scan Line (animate-laser-sweep) */}
              <div className="absolute left-1 right-1 h-0.5 bg-orange-500 shadow-[0_0_10px_#f97316,0_0_4px_#ffffff] rounded-full animate-laser-sweep pointer-events-none" />

              <span className="font-mono text-[7px] font-bold text-orange-600 dark:text-orange-400 uppercase mt-0.5">
                CAPI SYNC
              </span>
            </div>

            {/* Right: Live Conversion Telemetry & Hash Deduplication */}
            <div className="flex-1 space-y-1.5">
              <div className="p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-900/70 font-mono text-[9px] shadow-2xs">
                <div className="text-zinc-400 text-[8px]">Hash Deduplikasi</div>
                <div className="font-black text-zinc-950 dark:text-white truncate">
                  sha256(event_id + fbclid)
                </div>
              </div>

              <div className="p-1.5 rounded-xl border border-orange-500/30 bg-orange-50/70 dark:bg-orange-950/40 font-mono text-[9px] flex items-center justify-between shadow-2xs">
                <span className="text-orange-800 dark:text-orange-300 font-semibold text-[8px]">
                  Skor EMQ
                </span>
                <span className="font-black text-orange-600 dark:text-orange-400">
                  {phase === 2 ? '9.8 / 10' : phase === 1 ? '9.6 / 10' : '9.4 / 10'}
                </span>
              </div>

              <div className="flex items-center gap-1 text-[8px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                <ShieldCheck className="w-3 h-3 shrink-0" />
                <span className="truncate">Kebal iOS 14.5+ Ad-Block</span>
              </div>
            </div>
          </div>
        );
      },
    },

    // -------------------------------------------------------------------------
    // CARD 4: CLOUD VPS HARDENING & ENGINE SPEED (SVG Speed Gauge Needle 100)
    // -------------------------------------------------------------------------
    {
      id: 'vps-hardening-speed',
      number: '04',
      badge: 'SPEED 100 · HARDENED',
      badgeColor: '#7C3AED', // Violet / Purple
      title: 'Cloud VPS Hardening & Engine Speed',
      tagline: '5 Lapis Keamanan · SVG Speed Needle 100 · n8n Self-Hosted',
      description:
        'Server mandiri tangguh dengan proteksi 5 lapis (Firewall UFW, Fail2ban, Zero-Trust VPN), jarum speedometer mengunci di skor 100/100, dan otomasi alur kerja n8n tanpa limitasi.',
      accentColor: '#8B5CF6',
      ringColor: 'rgba(139, 92, 246, 0.32)',
      hoverBorder: 'border-purple-500 dark:border-purple-400',
      actionText: 'Audit Keamanan & Kecepatan VPS',
      serviceQuery: 'setup-cloud-vps-hardening',
      renderIllustration: (isBoosted, phase, progress, isHovered) => {
        // Calculate speed score: 0-3s revs from 0 to 88, 3-6s climbs to 98, 6-9s locks at 100
        let speedScore = 100;
        if (isBoosted) {
          if (phase === 0) {
            speedScore = Math.min(88, Math.round((progress / 33.3) * 88));
          } else if (phase === 1) {
            speedScore = Math.min(98, 88 + Math.round(((progress - 33.3) / 33.3) * 10));
          } else {
            speedScore = 100;
          }
        } else if (isHovered) {
          speedScore = 100;
        } else {
          speedScore = 98;
        }

        // Speedometer Needle Angle Calculation:
        // Range: -90deg (0 speed, 9 o'clock) to +90deg (100 speed, 3 o'clock)
        const needleAngle = -90 + (speedScore / 100) * 180;

        return (
          <div className="relative w-full h-full flex flex-col justify-between p-2.5 select-none overflow-hidden">
            {/* Top Terminal Bar */}
            <div className="flex items-center justify-between pb-1 border-b border-zinc-200/70 dark:border-zinc-800">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-[9px] text-zinc-400 ml-1">vps.fitran.dev</span>
              </div>
              <span className="font-mono text-[8px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
                <Lock className="w-2.5 h-2.5" /> 5 Lapis UFW
              </span>
            </div>

            {/* Authentic SVG Speed Gauge with Dynamic Rotating Needle */}
            <div className="flex items-center justify-center my-0.5 relative">
              <svg
                viewBox="0 0 200 115"
                className="w-44 h-24 overflow-visible"
                aria-label={`Speedometer skor ${speedScore} dari 100`}
              >
                <defs>
                  {/* Gauge Arc Gradient */}
                  <linearGradient id="speedGaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>

                  {/* Needle Drop Shadow */}
                  <filter id="needleGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#8B5CF6" floodOpacity="0.4" />
                  </filter>
                </defs>

                {/* Background Semi-circle Arc Track (Radius = 65, Center = 100, 95) */}
                <path
                  d="M 35 95 A 65 65 0 0 1 165 95"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="text-zinc-200 dark:text-zinc-800"
                />

                {/* Active Colored Progress Arc (Circumference ~ 204.2) */}
                <path
                  d="M 35 95 A 65 65 0 0 1 165 95"
                  fill="none"
                  stroke="url(#speedGaugeGrad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="204.2"
                  strokeDashoffset={204.2 * (1 - speedScore / 100)}
                  className="transition-all duration-300 ease-out"
                />

                {/* Gauge Tick Markers: 0, 25, 50, 75, 100 */}
                <line x1="37" y1="95" x2="43" y2="95" stroke="#71717a" strokeWidth="1.5" />
                <line x1="54" y1="49" x2="59" y2="53" stroke="#71717a" strokeWidth="1.5" />
                <line x1="100" y1="30" x2="100" y2="36" stroke="#71717a" strokeWidth="1.5" />
                <line x1="146" y1="49" x2="141" y2="53" stroke="#71717a" strokeWidth="1.5" />
                <line x1="163" y1="95" x2="157" y2="95" stroke="#10b981" strokeWidth="2" />

                {/* Numerical Scale Labels */}
                <text x="32" y="108" fontSize="8" fontFamily="monospace" fill="#71717a" textAnchor="middle">0</text>
                <text x="100" y="24" fontSize="8" fontFamily="monospace" fill="#71717a" textAnchor="middle">50</text>
                <text x="168" y="108" fontSize="8" fontFamily="monospace" fill="#10b981" fontWeight="bold" textAnchor="middle">100</text>

                {/* Dynamic Rotating SVG Speedometer Needle */}
                <g
                  style={{
                    transform: `rotate(${needleAngle}deg)`,
                    transformOrigin: '100px 95px',
                    transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                  filter="url(#needleGlow)"
                >
                  {/* Needle Pointer */}
                  <polygon
                    points="97.5,95 100,34 102.5,95 100,102"
                    fill={speedScore >= 100 ? '#10B981' : '#8B5CF6'}
                  />
                  {/* Pivot Base Cap */}
                  <circle cx="100" cy="95" r="7" fill="#18181b" stroke="#8B5CF6" strokeWidth="2" />
                  <circle cx="100" cy="95" r="2.5" fill="#ffffff" />
                </g>

                {/* Digital Readout Inside Gauge */}
                <text
                  x="100"
                  y="82"
                  fontSize="18"
                  fontFamily="monospace"
                  fontWeight="900"
                  fill="currentColor"
                  textAnchor="middle"
                  className="text-zinc-950 dark:text-white"
                >
                  {speedScore}
                </text>
                <text
                  x="100"
                  y="112"
                  fontSize="7.5"
                  fontFamily="monospace"
                  fontWeight="bold"
                  fill="#10b981"
                  textAnchor="middle"
                >
                  LIGHTHOUSE 100/100
                </text>
              </svg>
            </div>

            {/* Bottom 3 Micro-Metrics Grid (UFW, n8n, LCP) */}
            <div className="grid grid-cols-3 gap-1 text-center font-mono">
              <div className="p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60">
                <div className="text-[7px] text-zinc-400">5 LAPIS UFW</div>
                <div className="text-[8.5px] font-bold text-purple-600 dark:text-purple-400">ACTIVE</div>
              </div>
              <div className="p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60">
                <div className="text-[7px] text-zinc-400">LCP SPEED</div>
                <div className="text-[8.5px] font-bold text-emerald-600 dark:text-emerald-400">&lt;0.8s</div>
              </div>
              <div className="p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60">
                <div className="text-[7px] text-zinc-400">N8N ENGINE</div>
                <div className="text-[8.5px] font-bold text-blue-600 dark:text-blue-400">SELF-HOST</div>
              </div>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <section className={`w-full select-none ${className}`}>
      {/* ===================================================================== */}
      {/* MASTER BOOST CONTROLLER HEADER (9 SECONDS / BOOST)                   */}
      {/* ===================================================================== */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-sm mb-6 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-900/60 text-[#1E3A8A] dark:text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>EKOSISTEM DIGITAL FITRAN.DEV</span>
              </span>

              {/* Real-time 9-Second Boost Indicator Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 font-mono text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  BOOST AKTIF: PILAR {FEATURE_CARDS[activeBoostIdx].number} · {currentSeconds}s /{' '}
                  {(BOOST_DURATION_MS / 1000).toFixed(1)}s
                </span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
              Eksplorasi 4 Pilar Solusi Rekayasa Cerdas
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
              Arsitektur teruji menggabungkan spesifikasi fullstack mandiri, AI agent otomatisasi WhatsApp 24/7, tracking server-side Meta CAPI kebal ad-blocker, dan kecepatan kilat LCP &lt;0.8s.
            </p>
          </div>

          {/* Interactive Boost Tabs & Pause Controller */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto shrink-0">
            {/* Quick Boost Pills */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              {FEATURE_CARDS.map((card, idx) => {
                const isActive = activeBoostIdx === idx;
                return (
                  <button
                    key={card.id}
                    onClick={() => handleSelectBoostCard(idx)}
                    className={`relative px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white dark:bg-[#161B22] text-zinc-950 dark:text-white shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    <span>{card.number}</span>
                    <span className="hidden sm:inline ml-1 font-sans font-semibold">
                      {card.id === 'fullstack-kilat'
                        ? 'Fullstack'
                        : card.id === 'whatsapp-agent'
                        ? 'AI Agent'
                        : card.id === 'meta-capi-tracking'
                        ? 'Meta CAPI'
                        : 'VPS Speed'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Pause / Play Toggle */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
              title={isPaused ? 'Lanjutkan Siklus Boost 9 Detik' : 'Jeda Siklus Boost'}
            >
              {isPaused ? <Play className="w-4 h-4 text-emerald-500" /> : <Pause className="w-4 h-4 text-zinc-500" />}
            </button>
          </div>
        </div>

        {/* Global Continuous 9-Second Boost Progress Bar */}
        <div className="w-full h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 via-orange-500 to-purple-500 transition-all duration-75 ease-linear rounded-full"
            style={{ width: `${boostProgress}%` }}
          />
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 4 FEATURE CARDS GRID (INNOVATIVE INTERACTIVE DOCK)                   */}
      {/* ===================================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURE_CARDS.map((card, idx) => {
          const isBoosted = activeBoostIdx === idx;
          const isHovered = hoveredCard === card.id;

          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              onMouseEnter={() => {
                setHoveredCard(card.id);
                setActiveBoostIdx(idx);
              }}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => {
                setActiveBoostIdx(idx);
              }}
              className={`group relative flex flex-col justify-between rounded-3xl border-2 p-5 sm:p-6 text-left transition-all duration-300 cursor-pointer bg-white dark:bg-[#111319] shadow-xs ${
                isBoosted || isHovered
                  ? `-translate-y-2 shadow-xl ${card.hoverBorder}`
                  : 'border-zinc-200/90 dark:border-zinc-800/90 hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
              style={{
                boxShadow:
                  isBoosted || isHovered
                    ? `0 20px 45px -15px ${card.ringColor}, 0 0 0 3px ${card.ringColor}`
                    : undefined,
              }}
            >
              {/* Individual Card Progress Bar on Top */}
              <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden rounded-t-3xl">
                <div
                  className="h-full transition-all duration-75 ease-linear"
                  style={{
                    backgroundColor: card.accentColor,
                    width: isBoosted ? `${boostProgress}%` : '0%',
                  }}
                />
              </div>

              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs font-black px-2.5 py-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200/60 dark:border-zinc-700">
                  PILAR {card.number}
                </span>

                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-xs"
                  style={{ backgroundColor: card.badgeColor }}
                >
                  {card.badge}
                </span>
              </div>

              {/* Interactive Illustration Canvas */}
              <div className="relative w-full aspect-[340/175] rounded-2xl overflow-hidden bg-zinc-50/80 dark:bg-[#0B0D13] border border-zinc-200/70 dark:border-zinc-800/80 mb-5 flex items-center justify-center">
                {card.renderIllustration(isBoosted, boostPhase, boostProgress, isHovered)}
              </div>

              {/* Title & Tagline & Description */}
              <div className="space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-zinc-950 dark:text-white leading-snug group-hover:text-[#1E3A8A] dark:group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-mono text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 mt-1">
                    {card.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-3 mt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-bold text-zinc-500 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                  <span className="text-[11px] font-mono flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: card.accentColor }}
                    />
                    <span>{card.actionText}</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
