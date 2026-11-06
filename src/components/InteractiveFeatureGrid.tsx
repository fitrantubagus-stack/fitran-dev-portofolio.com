import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  Send,
  CheckCircle2,
  Cpu,
  Layers,
  Code2,
  ExternalLink,
  Bot,
  Zap,
  Target,
  FileCode2,
  Flame,
  Globe,
  Check,
} from 'lucide-react';

interface FeatureCardItem {
  id: string;
  badge?: string;
  badgeColor?: string;
  title: string;
  description: string;
  accentColor: string;
  ringColor: string;
  hoverBorder: string;
  href?: string;
  actionText: string;
  renderIllustration: (isHovered: boolean) => React.ReactNode;
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

  // Typewriter animation state for Card 2 (DesainPakeAI style)
  const [promptText, setPromptText] = useState('');
  const [promptIdx, setPromptIdx] = useState(0);
  const PROMPTS = [
    'Buatkan dashboard CRM tim sales |',
    'Rancang landing page produk kopi lokal |',
    'Bikin bot WhatsApp hitung ongkir otomatis |',
    'Desain portal membership dengan login Google |',
  ];

  useEffect(() => {
    const currentPrompt = PROMPTS[promptIdx];
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const tick = () => {
      if (!isDeleting) {
        charIndex++;
        setPromptText(currentPrompt.slice(0, charIndex));
        if (charIndex === currentPrompt.length) {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            tick();
          }, 2400);
          return;
        }
        timeoutId = setTimeout(tick, 45);
      } else {
        charIndex--;
        setPromptText(currentPrompt.slice(0, charIndex));
        if (charIndex === 0) {
          setPromptIdx((prev) => (prev + 1) % PROMPTS.length);
          return;
        }
        timeoutId = setTimeout(tick, 25);
      }
    };

    timeoutId = setTimeout(tick, 300);
    return () => clearTimeout(timeoutId);
  }, [promptIdx]);

  // Active AI Model switch state for Card 3 (AndalAI style)
  const [activeModelIdx, setActiveModelIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModelIdx((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const FEATURE_CARDS: FeatureCardItem[] = [
    // -------------------------------------------------------------------------
    // CARD 1: BIKIN PLAN (PRD & Arsitektur)
    // -------------------------------------------------------------------------
    {
      id: 'plan',
      badge: 'UPDATE BARU',
      badgeColor: '#F97316', // Orange
      title: 'Bikin Plan',
      description:
        'Dari ide jadi PRD teknis, spec fitur, dan arsitektur data yang siap dieksekusi dengan standar rekayasa modern.',
      accentColor: '#10B981', // Emerald
      ringColor: 'rgba(16, 185, 129, 0.25)',
      hoverBorder: 'border-emerald-500 dark:border-emerald-400',
      actionText: 'Konsultasi Perencanaan',
      renderIllustration: (isHovered) => (
        <div className="relative w-full h-full flex items-center justify-center p-3 select-none">
          {/* Subtle Blueprint Dot Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#475569_1.2px,transparent_1.2px)] [background-size:14px_14px] opacity-40 pointer-events-none" />

          {/* Left: Radiant Lightbulb with Signal Waves */}
          <div className="relative z-10 flex items-center gap-3 w-full max-w-[280px]">
            <div className="relative flex items-center justify-center shrink-0">
              <div
                className={`w-11 h-11 rounded-2xl border-2 border-emerald-500/60 dark:border-emerald-400/60 bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center shadow-sm transition-transform duration-300 ${
                  isHovered ? 'scale-110 rotate-[-4deg]' : ''
                }`}
              >
                {/* Custom lightbulb icon with M letter inside */}
                <div className="w-5 h-5 rounded-full border border-emerald-600 dark:border-emerald-400 flex items-center justify-center text-[9px] font-black font-mono text-emerald-700 dark:text-emerald-300">
                  FD
                </div>
              </div>

              {/* Radiation Rays / Chevron Signal */}
              <div className="absolute -right-3 flex flex-col gap-0.5 opacity-70">
                <span className="w-1.5 h-0.5 bg-emerald-500 rounded-full" />
                <span className="w-2 h-0.5 bg-emerald-500 rounded-full" />
                <span className="w-1.5 h-0.5 bg-emerald-500 rounded-full" />
              </div>
            </div>

            {/* Right: PRD Document Box with Clean Skeleton Lines */}
            <div
              className={`flex-1 rounded-xl border-2 border-zinc-400/70 dark:border-zinc-600 bg-white dark:bg-[#161B22] p-2.5 shadow-sm transition-all duration-300 ${
                isHovered ? 'translate-x-1 border-emerald-500' : ''
              }`}
            >
              <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-700 pb-1 mb-1.5">
                <span className="font-mono text-[10px] font-extrabold tracking-wider text-zinc-800 dark:text-zinc-200">
                  PRD v2.6
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              <div className="space-y-1">
                <div className="h-1.5 w-4/5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <div className="h-1.5 w-3/5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                <div className="flex items-center gap-1.5 pt-0.5">
                  <span className="w-2 h-2 rounded-sm border border-emerald-500 bg-emerald-500/20 flex items-center justify-center text-[7px] text-emerald-600 font-bold">
                    ✓
                  </span>
                  <span className="h-1.5 w-1/2 rounded-full bg-emerald-400/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // -------------------------------------------------------------------------
    // CARD 2: DESAINPAKEAI (Interactive Canvas & Live Typewriter)
    // -------------------------------------------------------------------------
    {
      id: 'desainpakeai',
      badge: 'CANVAS AI',
      badgeColor: '#8B5CF6', // Purple
      title: 'DesainPakeAI',
      description:
        'Rancang tampilan website dan aplikasi bersama AI, dari ide core bisnis sampai prototipe interaktif siap produksi.',
      accentColor: '#8B5CF6',
      ringColor: 'rgba(139, 92, 246, 0.25)',
      hoverBorder: 'border-purple-500 dark:border-purple-400',
      actionText: 'Buka Desain & Prototipe',
      renderIllustration: (isHovered) => (
        <div className="relative w-full h-full flex items-center justify-center p-3 select-none">
          {/* Subtle Dot Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#475569_1.2px,transparent_1.2px)] [background-size:14px_14px] opacity-40 pointer-events-none" />

          {/* Browser / Canvas Window Frame */}
          <div
            className={`relative z-10 w-full max-w-[280px] rounded-xl border-2 border-zinc-400/80 dark:border-zinc-600 bg-white dark:bg-[#161B22] p-2.5 shadow-sm transition-all duration-300 ${
              isHovered ? 'scale-[1.02] border-purple-500' : ''
            }`}
          >
            {/* Header: Window Dots & Canvas Label */}
            <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-zinc-100 dark:border-zinc-800">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <span className="font-mono text-[9px] font-bold text-zinc-400 ml-1">Canvas fitran.dev</span>
            </div>

            {/* Interactive Prompt Input Bar with Live Typing Text */}
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-purple-400/60 dark:border-purple-500/60 bg-purple-50/50 dark:bg-purple-950/30 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 animate-pulse" />
              <span className="font-mono text-[11px] text-zinc-800 dark:text-zinc-200 font-medium truncate flex-1">
                {promptText}
              </span>
              <button
                type="button"
                className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs hover:scale-110 transition-transform"
                title="Kirim Prompt"
              >
                <ArrowRight className="w-2.5 h-2.5 rotate-[-90deg]" />
              </button>
            </div>
          </div>
        </div>
      ),
    },

    // -------------------------------------------------------------------------
    // CARD 3: ANDALAI & TRACKING (Multi-Model Badges & CAPI)
    // -------------------------------------------------------------------------
    {
      id: 'andalai',
      badge: 'EMQ 9.4+',
      badgeColor: '#EA580C', // Dark Orange / Red-Orange
      title: 'AndalAI & Tracking',
      description:
        'AI Agent WhatsApp 24/7 dan tracking server-side Meta CAPI kebal ad-blocker untuk closing otomatis dan atribusi omset akurat.',
      accentColor: '#F97316',
      ringColor: 'rgba(249, 115, 22, 0.25)',
      hoverBorder: 'border-orange-500 dark:border-orange-400',
      actionText: 'Pelajari Sistem AI & CAPI',
      renderIllustration: (isHovered) => (
        <div className="relative w-full h-full flex items-center justify-center p-3 select-none">
          {/* Subtle Dot Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#475569_1.2px,transparent_1.2px)] [background-size:14px_14px] opacity-40 pointer-events-none" />

          {/* Dock of 4 AI & Telemetry Badges with Active Glowing Ring */}
          <div className="relative z-10 flex items-center justify-center gap-2.5 w-full max-w-[280px]">
            {[
              { label: 'Claude', symbol: '✳', desc: 'Opus & Sonnet' },
              { label: 'CAPI', symbol: '◎', desc: 'Server Meta' },
              { label: 'Agent', symbol: '✦', desc: 'WhatsApp 24/7' },
              { label: 'n8n', symbol: '∿', desc: 'Otomasi Data' },
            ].map((model, idx) => {
              const isActive = activeModelIdx === idx;
              return (
                <div
                  key={idx}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border-2 flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    isActive
                      ? 'border-orange-500 bg-orange-500/15 text-orange-600 dark:text-orange-400 shadow-sm scale-110 ring-2 ring-orange-400/30'
                      : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-[#161B22] text-zinc-500 dark:text-zinc-400'
                  }`}
                  title={`${model.label} — ${model.desc}`}
                >
                  <span className="font-mono text-base">{model.symbol}</span>
                </div>
              );
            })}
          </div>
        </div>
      ),
    },

    // -------------------------------------------------------------------------
    // CARD 4: TEMPLATE & CODEBASE (Dashboard Wireframe & 100% Hak Milik)
    // -------------------------------------------------------------------------
    {
      id: 'template',
      badge: '100% HAK MILIK',
      badgeColor: '#2563EB', // Blue
      title: 'Template & Codebase',
      description:
        'Gunakan kerangka codebase teruji untuk bikin aplikasi cepat, irit kuota token, performa <0.8s, dan siap rilis produksi.',
      accentColor: '#3B82F6',
      ringColor: 'rgba(59, 130, 246, 0.25)',
      hoverBorder: 'border-blue-500 dark:border-blue-400',
      actionText: 'Lihat Arsitektur Codebase',
      renderIllustration: (isHovered) => (
        <div className="relative w-full h-full flex items-center justify-center p-3 select-none">
          {/* Subtle Dot Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#475569_1.2px,transparent_1.2px)] [background-size:14px_14px] opacity-40 pointer-events-none" />

          {/* Full Skeleton Dashboard Window */}
          <div
            className={`relative z-10 w-full max-w-[280px] rounded-xl border-2 border-zinc-400/80 dark:border-zinc-600 bg-white dark:bg-[#161B22] p-2 shadow-sm transition-all duration-300 ${
              isHovered ? 'scale-[1.02] border-blue-500' : ''
            }`}
          >
            {/* Window Top Controls */}
            <div className="flex items-center gap-1 pb-1.5 mb-1.5 border-b border-zinc-100 dark:border-zinc-800">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <span className="font-mono text-[8px] font-bold text-emerald-600 dark:text-emerald-400 ml-auto flex items-center gap-0.5">
                <Check className="w-2.5 h-2.5" /> &lt;0.8s LCP
              </span>
            </div>

            {/* Dashboard Inner Grid: Left Sidebar + Right Dual Cards */}
            <div className="grid grid-cols-12 gap-1.5">
              {/* Left Nav Strip */}
              <div className="col-span-3 rounded-md border border-dashed border-zinc-300 dark:border-zinc-700 p-1 space-y-1">
                <div className="w-full h-1.5 rounded-sm bg-zinc-300 dark:bg-zinc-700" />
                <div className="w-full h-1.5 rounded-sm bg-zinc-200 dark:bg-zinc-800" />
                <div className="w-full h-1.5 rounded-sm bg-blue-400/50" />
              </div>

              {/* Right Content Area: 2 Cards */}
              <div className="col-span-9 grid grid-cols-2 gap-1.5">
                <div className="rounded-md border border-dashed border-zinc-300 dark:border-zinc-700 p-1.5 flex flex-col justify-between">
                  <span className="h-1 w-8 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="font-mono text-[9px] font-black text-blue-600 dark:text-blue-400">100/100</span>
                </div>
                <div className="rounded-md border border-dashed border-zinc-300 dark:border-zinc-700 p-1.5 flex flex-col justify-between">
                  <span className="h-1 w-6 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="font-mono text-[9px] font-black text-emerald-600 dark:text-emerald-400">PROD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleCardClick = (card: FeatureCardItem) => {
    if (onSelectFeature) {
      onSelectFeature(card.id);
      return;
    }

    // Default intelligent routing
    if (typeof window !== 'undefined') {
      if (card.id === 'plan') {
        window.history.pushState(null, '', '/corporation/layanan?service=jasa-pembuatan-website-custom');
      } else if (card.id === 'desainpakeai') {
        window.history.pushState(null, '', '/corporation/layanan?service=jasa-pembuatan-website');
      } else if (card.id === 'andalai') {
        window.history.pushState(null, '', '/corporation/layanan?service=whatsapp-ai-agent');
      } else if (card.id === 'template') {
        window.history.pushState(null, '', '/corporation/layanan?service=setup-cloud-vps-hardening');
      }
      window.dispatchEvent(new Event('app-route-change'));
      window.dispatchEvent(new Event('locationchange'));
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className={`w-full select-none ${className}`}>
      {/* Top Header Label */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-[#1E3A8A] dark:text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>FITUR EKOSISTEM DIGITAL FITRAN.DEV</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
            Eksplorasi 4 Pilar Solusi Cerdas
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl leading-relaxed">
            Pola desain interaktif line-art yang menggabungkan perencanaan arsitektur, canvas AI, model tracking cerdas, dan kerangka codebase siap rilis.
          </p>
        </div>

        <span className="font-mono text-xs text-zinc-400 hidden sm:inline">
          Inspirasi: ngodingpakeai • desainpakeai • eda
        </span>
      </div>

      {/* 4 Feature Cards Grid (Exact Style of Screenshot 1) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURE_CARDS.map((card) => {
          const isHovered = hoveredCard === card.id;

          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative flex flex-col justify-between rounded-2xl border-2 p-5 sm:p-6 text-left transition-all duration-200 cursor-pointer bg-white dark:bg-[#111319] shadow-xs ${
                isHovered
                  ? `-translate-y-1.5 shadow-xl ${card.hoverBorder}`
                  : 'border-zinc-200/90 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
              style={{
                boxShadow: isHovered
                  ? `0 20px 40px -15px ${card.ringColor}, 0 0 0 3px ${card.ringColor}`
                  : undefined,
              }}
            >
              {/* Top Right Pill Badge (Like UPDATE BARU in Screenshot 1) */}
              {card.badge && (
                <span
                  className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-xs z-20"
                  style={{ backgroundColor: card.badgeColor || card.accentColor }}
                >
                  {card.badge}
                </span>
              )}

              {/* Wireframe Illustration Canvas Container */}
              <div className="relative w-full aspect-[344/160] rounded-xl overflow-hidden bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/80 mb-5 flex items-center justify-center">
                {card.renderIllustration(isHovered)}
              </div>

              {/* Title & Description */}
              <div className="space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-zinc-950 dark:text-white leading-snug group-hover:text-[#1E3A8A] dark:group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Micro Action */}
                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-bold text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  <span className="text-[11px] font-mono">{card.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
