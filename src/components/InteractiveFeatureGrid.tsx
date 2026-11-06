import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Code2,
  ExternalLink,
  Bot,
  Zap,
  Target,
  FileCode2,
  Globe,
  Check,
  TrendingUp,
  Activity,
  ShieldCheck,
  Server,
  Play,
  Pause,
  RotateCcw,
  QrCode,
  Lock,
  Lightbulb,
  CheckSquare,
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
    phase: number,
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
  const [activeBoostIdx, setActiveBoostIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [boostProgress, setBoostProgress] = useState<number>(0);

  // Typewriter state for Card 2
  const [typedPrompt, setTypedPrompt] = useState<string>('');
  const [promptStep, setPromptStep] = useState<number>(0);
  const PROMPTS = [
    'Berapa ongkir 5 box ke Surabaya?',
    'Katalog harga grosir kain batik?',
    'Minta rincian invoice dan rekening?',
  ];

  // 9-Second Boost Engine via requestAnimationFrame with performance.now()
  const TOTAL_CYCLE_MS = 9000;
  const cycleStartRef = useRef<number>(performance.now());
  const lastTimeRef = useRef<number>(performance.now());

  useEffect(() => {
    cycleStartRef.current = performance.now();
  }, [activeBoostIdx]);

  useEffect(() => {
    let animId: number;

    const tick = (now: number) => {
      const delta = Math.min(100, now - lastTimeRef.current);
      lastTimeRef.current = now;

      if (!isPaused && hoveredCard === null) {
        const elapsed = (now - cycleStartRef.current) % TOTAL_CYCLE_MS;
        const pct = Math.min(100, (elapsed / TOTAL_CYCLE_MS) * 100);
        setBoostProgress(pct);

        if (elapsed < delta * 1.5 && pct < 5) {
          // cycle completed
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, hoveredCard]);

  // Handle stage advances every 9 seconds
  useEffect(() => {
    if (isPaused || hoveredCard !== null) return;
    const timer = setInterval(() => {
      setActiveBoostIdx((prev) => (prev + 1) % 4);
    }, TOTAL_CYCLE_MS);
    return () => clearInterval(timer);
  }, [isPaused, hoveredCard]);

  // Typewriter effect for WhatsApp Prompt
  useEffect(() => {
    const fullText = PROMPTS[promptStep % PROMPTS.length];
    let charIdx = 0;
    let timer: NodeJS.Timeout;

    const typeChar = () => {
      if (charIdx <= fullText.length) {
        setTypedPrompt(fullText.slice(0, charIdx));
        charIdx++;
        timer = setTimeout(typeChar, 45);
      } else {
        timer = setTimeout(() => {
          setPromptStep((prev) => (prev + 1) % PROMPTS.length);
        }, 3000);
      }
    };

    timer = setTimeout(typeChar, 300);
    return () => clearTimeout(timer);
  }, [promptStep]);

  // Phase computation: 0 = 0-3s, 1 = 3-6s, 2 = 6-9s
  const boostPhase = boostProgress < 33.3 ? 0 : boostProgress < 66.6 ? 1 : 2;

  const handleCardClick = (card: FeatureCardItem) => {
    if (onSelectFeature) {
      onSelectFeature(card.id);
    } else if (typeof window !== 'undefined') {
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
    // CARD 1: ARSITEKTUR FULLSTACK & WEBSITE KILAT (<0.8s LCP)
    // Inspired by ngodingpakeai.com (Idea Bulb -> Arrow -> Clean PRD / Specs Checklist)
    // -------------------------------------------------------------------------
    {
      id: 'fullstack-kilat',
      number: '01',
      badge: '100% HAK MILIK',
      badgeColor: '#2563EB',
      title: 'Arsitektur Fullstack & Website Kilat',
      tagline: '<0.8s LCP · Next.js 15 & TS · 100% Hak Milik · Zero Sewa',
      description:
        'Rekayasa aplikasi web berkecepatan instan dengan waktu muat <0.8 detik. Seluruh source code dan arsitektur diserahkan penuh tanpa biaya sewa kode tahunan.',
      accentColor: '#3B82F6',
      ringColor: 'rgba(59, 130, 246, 0.28)',
      hoverBorder: 'border-blue-500 dark:border-blue-400',
      actionText: 'Konsultasi Website Kilat',
      serviceQuery: 'jasa-pembuatan-website-custom',
      renderIllustration: (isBoosted, phase, progress, isHovered) => {
        const active = isBoosted || isHovered;
        return (
          <div className="relative w-full h-full flex items-center justify-between gap-3 p-4 select-none">
            {/* Left: Glowing Blueprint / Idea Bulb */}
            <div className="flex flex-col items-center justify-center shrink-0 w-20">
              <div
                className={`relative w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${
                  active
                    ? 'border-blue-500 bg-blue-500/15 shadow-lg shadow-blue-500/20 scale-105'
                    : 'border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800'
                }`}
              >
                <Lightbulb
                  className={`w-6 h-6 transition-colors duration-300 ${
                    active ? 'text-blue-500' : 'text-zinc-400'
                  }`}
                />
                {active && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
                )}
              </div>
              <span className="font-mono text-[9px] font-bold text-zinc-500 dark:text-zinc-400 mt-1.5 text-center leading-tight">
                Blueprint Kilat
              </span>
            </div>

            {/* Middle: Dynamic Arrow / Circuit Connector */}
            <div className="flex-1 flex items-center justify-center relative">
              <div className="w-full h-0.5 bg-zinc-300 dark:bg-zinc-700 relative">
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 transition-all duration-300 ${
                    active ? 'opacity-100 scale-100 animate-pulse' : 'opacity-40 scale-75'
                  }`}
                  style={{
                    left: active ? `${Math.min(90, Math.max(10, progress))}%` : '50%',
                  }}
                />
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-blue-500 absolute -right-1" />
            </div>

            {/* Right: Clean Architecture Specs Card (ngodingpakeai PRD Style) */}
            <div
              className={`w-40 sm:w-44 rounded-xl border-2 p-2.5 transition-all duration-500 bg-white dark:bg-[#131722] shadow-xs ${
                active ? 'border-blue-500/80 shadow-md scale-[1.02]' : 'border-zinc-300 dark:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-zinc-100 dark:border-zinc-800">
                <span className="font-mono text-[10px] font-black text-blue-600 dark:text-blue-400">
                  SPECS 100%
                </span>
                <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold">
                  &lt;0.8s LCP
                </span>
              </div>

              {/* 3 Verified Task Items with Animated Checkmarks */}
              <div className="space-y-1.5">
                {[
                  { label: 'Next.js 15 & TS Modular', done: true },
                  { label: 'Lighthouse Score 100', done: active },
                  { label: '100% Hak Milik Client', done: active && phase >= 1 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[9px] font-mono">
                    <CheckCircle2
                      className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                        item.done ? 'text-emerald-500' : 'text-zinc-300 dark:text-zinc-600'
                      }`}
                    />
                    <span
                      className={`truncate ${
                        item.done
                          ? 'text-zinc-900 dark:text-zinc-100 font-bold'
                          : 'text-zinc-400 dark:text-zinc-500'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      },
    },

    // -------------------------------------------------------------------------
    // CARD 2: WHATSAPP AI AGENT CLOSING 24/7
    // Inspired by ngodingpakeai.com (Canvas Prompt Bar -> Generated Live UI)
    // -------------------------------------------------------------------------
    {
      id: 'whatsapp-agent',
      number: '02',
      badge: 'AUTO CLOSING 24/7',
      badgeColor: '#10B981',
      title: 'WhatsApp AI Agent Closing 24/7',
      tagline: 'SOP Guardrails · Hitung Ongkir Otomatis · Invoice Closing Digital',
      description:
        'Agent AI terlatih dengan guardrails SOP bisnis. Menjawab calon pembeli instan, menghitung tarif ongkir otomatis, dan menerbitkan kuitansi closing 24 jam nonstop.',
      accentColor: '#10B981',
      ringColor: 'rgba(16, 185, 129, 0.28)',
      hoverBorder: 'border-emerald-500 dark:border-emerald-400',
      actionText: 'Uji Coba AI Agent WhatsApp',
      serviceQuery: 'whatsapp-ai-agent',
      renderIllustration: (isBoosted, phase, progress, isHovered) => {
        const active = isBoosted || isHovered;
        return (
          <div className="relative w-full h-full flex flex-col justify-between p-3.5 select-none">
            {/* Top Device / App Bar */}
            <div className="flex items-center justify-between pb-1.5 border-b border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[9px] font-bold text-zinc-800 dark:text-zinc-200">
                  WhatsApp AI Assistant
                </span>
              </div>
              <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold">
                Online 24/7
              </span>
            </div>

            {/* Interactive Prompt / Message Input Bar (ngodingpakeai Style) */}
            <div className="px-2.5 py-2 rounded-xl border border-emerald-500/40 bg-emerald-50/60 dark:bg-emerald-950/30 flex items-center gap-2 shadow-2xs">
              <Bot className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <p className="font-mono text-[10px] text-zinc-900 dark:text-zinc-100 font-medium truncate flex-1">
                {typedPrompt}
                <span className="inline-block w-1.5 h-3 bg-emerald-500 ml-0.5 animate-pulse align-middle" />
              </p>
            </div>

            {/* Generated Response & Digital Invoice Ticket */}
            <div className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#131722] flex items-center justify-between shadow-xs">
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-1 font-mono text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>SOP Terverifikasi · JNE Rp 24.000</span>
                </div>
                <p className="font-mono text-[8px] text-zinc-400 truncate">
                  Invoice #INV-8821 Terbit Otomatis
                </p>
              </div>

              <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white font-mono text-[8px] font-bold shrink-0">
                Lunas Closing
              </span>
            </div>
          </div>
        );
      },
    },

    // -------------------------------------------------------------------------
    // CARD 3: META CAPI & SERVER-SIDE TELEMETRY
    // Crisp QRIS Laser Scan + Server-Side Bypass + EMQ 9.8+
    // -------------------------------------------------------------------------
    {
      id: 'meta-capi-telemetry',
      number: '03',
      badge: 'EMQ 9.8+ ACCURATE',
      badgeColor: '#EA580C',
      title: 'Meta CAPI & Server-Side Telemetry',
      tagline: 'QRIS Scan · Deduplikasi Hash · Kebal Ad-Blocker iOS 14+',
      description:
        'Infrastruktur pelacakan konversi sisi server kebal ad-blocker dan proteksi privasi iOS. Sinkronisasi ganda browser dan server menghasilkan skor EMQ 9.8+ terjamin.',
      accentColor: '#EA580C',
      ringColor: 'rgba(234, 88, 12, 0.28)',
      hoverBorder: 'border-orange-500 dark:border-orange-400',
      actionText: 'Setup Server-Side CAPI',
      serviceQuery: 'meta-capi-google-ads-tracking',
      renderIllustration: (isBoosted, phase, progress, isHovered) => {
        const active = isBoosted || isHovered;
        return (
          <div className="relative w-full h-full flex items-center justify-between gap-3 p-3.5 select-none">
            {/* Left: QRIS Card with Glowing Laser Sweep */}
            <div className="relative w-28 sm:w-32 h-28 rounded-xl border-2 border-orange-500/70 bg-white dark:bg-[#131722] p-2 flex flex-col items-center justify-between shadow-sm overflow-hidden shrink-0">
              {/* Laser Scan Line */}
              <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_8px_#f97316] animate-laser-sweep z-20 pointer-events-none" />

              <div className="w-full flex items-center justify-between text-[7px] font-mono font-black text-orange-600 dark:text-orange-400 border-b border-zinc-100 dark:border-zinc-800 pb-0.5">
                <span>QRIS TELEMETRI</span>
                <span>CAPI 2.0</span>
              </div>

              {/* QR Pattern Representation */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-zinc-50 dark:bg-zinc-900 rounded-md my-auto">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-[2px] transition-colors duration-300 ${
                      i % 3 === 0
                        ? 'bg-orange-500'
                        : i % 2 === 0
                        ? 'bg-zinc-800 dark:bg-zinc-200'
                        : 'bg-zinc-300 dark:bg-zinc-700'
                    }`}
                  />
                ))}
              </div>

              <span className="font-mono text-[7px] text-zinc-400 font-bold uppercase">
                sha256(event_id)
              </span>
            </div>

            {/* Right: Server-Side Telemetry Output Box */}
            <div className="flex-1 space-y-2 min-w-0">
              <div className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#131722] shadow-2xs">
                <div className="text-[8px] font-mono text-zinc-400">Server Deduplikasi</div>
                <div className="font-mono text-[10px] font-black text-orange-600 dark:text-orange-400 truncate">
                  fbclid + user_data
                </div>
              </div>

              <div className="p-2 rounded-xl border border-orange-500/30 bg-orange-50/70 dark:bg-orange-950/30 flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold text-orange-800 dark:text-orange-300">
                  Skor EMQ
                </span>
                <span className="font-mono text-[11px] font-black text-orange-600 dark:text-orange-400">
                  9.8 / 10
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[8px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                <span className="truncate">Kebal iOS 14+ Ad-Blocker</span>
              </div>
            </div>
          </div>
        );
      },
    },

    // -------------------------------------------------------------------------
    // CARD 4: CLOUD VPS HARDENING & ENGINE SPEED (SVG Tachometer Needle)
    // -------------------------------------------------------------------------
    {
      id: 'vps-hardening-speed',
      number: '04',
      badge: 'SPEED 100 · HARDENED',
      badgeColor: '#7C3AED',
      title: 'Cloud VPS Hardening & Engine Speed',
      tagline: '5 Lapis Keamanan · SVG Speed Needle 100 · n8n Self-Hosted',
      description:
        'Server mandiri tangguh dengan proteksi 5 lapis (Firewall UFW, Fail2ban, Zero-Trust VPN), jarum speedometer mengunci di skor 100/100, dan otomasi alur kerja n8n tanpa limitasi.',
      accentColor: '#8B5CF6',
      ringColor: 'rgba(139, 92, 246, 0.28)',
      hoverBorder: 'border-purple-500 dark:border-purple-400',
      actionText: 'Audit Keamanan & Kecepatan VPS',
      serviceQuery: 'setup-cloud-vps-hardening',
      renderIllustration: (isBoosted, phase, progress, isHovered) => {
        const active = isBoosted || isHovered;
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

        // Needle rotation: -90deg (0) to +90deg (100)
        const needleAngle = -90 + (speedScore / 100) * 180;

        return (
          <div className="relative w-full h-full flex flex-col justify-between p-3.5 select-none">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-1 border-b border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-[9px] text-zinc-400 ml-1">vps.fitran.dev</span>
              </div>
              <span className="font-mono text-[8px] text-emerald-600 dark:text-emerald-400 font-bold">
                5 Lapis UFW
              </span>
            </div>

            {/* Real SVG Tachometer Dial with Dynamic Needle */}
            <div className="relative flex flex-col items-center justify-center my-auto">
              <svg viewBox="0 0 160 85" className="w-36 h-20 overflow-visible">
                <defs>
                  <linearGradient id="vpsSpeedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>

                {/* Track Arc Background */}
                <path
                  d="M 20 80 A 60 60 0 0 1 140 80"
                  fill="none"
                  stroke="currentColor"
                  className="text-zinc-200 dark:text-zinc-800"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                {/* Active Score Arc */}
                <path
                  d="M 20 80 A 60 60 0 0 1 140 80"
                  fill="none"
                  stroke="url(#vpsSpeedGrad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="188.5"
                  strokeDashoffset={188.5 - (speedScore / 100) * 188.5}
                  className="transition-all duration-300 ease-out"
                />

                {/* Dial Center Pivot */}
                <circle cx="80" cy="80" r="5" fill="#8B5CF6" className="shadow-xs" />
                <circle cx="80" cy="80" r="2" fill="#FFFFFF" />

                {/* Rotating Physical Needle */}
                <g
                  style={{
                    transformOrigin: '80px 80px',
                    transform: `rotate(${needleAngle}deg)`,
                    transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  <polygon points="78,80 82,80 80.8,24 79.2,24" fill="#8B5CF6" />
                </g>

                {/* Dial Ticks */}
                <text x="18" y="93" className="fill-zinc-400 font-mono text-[7px]">
                  0
                </text>
                <text x="76" y="16" className="fill-zinc-400 font-mono text-[7px]">
                  50
                </text>
                <text x="135" y="93" className="fill-emerald-500 font-mono text-[7px] font-bold">
                  100
                </text>
              </svg>

              {/* Digital Score Output */}
              <div className="text-center -mt-2">
                <span className="font-mono text-sm font-black text-zinc-950 dark:text-white">
                  {speedScore} / 100
                </span>
                <span className="text-[8px] font-mono text-emerald-600 dark:text-emerald-400 ml-1 font-bold">
                  Lighthouse Max
                </span>
              </div>
            </div>

            {/* Bottom 5 Security Shields Strip */}
            <div className="flex items-center justify-between text-[8px] font-mono text-zinc-500 dark:text-zinc-400 pt-1 border-t border-zinc-100 dark:border-zinc-800">
              <span className="flex items-center gap-1 font-bold text-purple-600 dark:text-purple-400">
                <Lock className="w-2.5 h-2.5" /> Zero-Trust VPN
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                ✓ Bebas Biaya SaaS
              </span>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <section className={`w-full ${className}`}>
      {/* Section Header with Timeline Progress Bar */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>4 PILAR TEKNOLOGI &amp; ARSITEKTUR DIGITAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white font-heading tracking-tight">
            Standar Rekayasa Web &amp; AI fitran.dev
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl font-normal">
            Bukan sekadar template siap pakai. Setiap produk dibangun dengan fondasi kode bersih,
            tracking presisi kebal ad-blocker, dan otomasi AI 24/7.
          </p>
        </div>

        {/* Global Boost Timeline Controller (9 Detik) */}
        <div className="flex items-center gap-3 bg-zinc-100/80 dark:bg-zinc-800/80 p-2 rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 self-start sm:self-auto shrink-0 shadow-2xs">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
            title={isPaused ? 'Lanjutkan Animasi (Auto-Play)' : 'Jeda Animasi (Pause)'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            {FEATURE_CARDS.map((c, i) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveBoostIdx(i);
                  setBoostProgress(0);
                }}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer font-bold ${
                  activeBoostIdx === i
                    ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-xs'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4 Cards Grid — Spacious, Roomy, Zero Text Cutoff */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
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
              {/* Individual Card Top Progress Bar */}
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

              {/* Roomy Illustration Canvas (Fixed generous height, NO aspect-ratio squeeze) */}
              <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-zinc-50/90 dark:bg-[#0B0D13] border border-zinc-200/80 dark:border-zinc-800/80 mb-5 flex items-center justify-center">
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
