import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  FileCode2,
  Lock,
  ArrowRight,
  Maximize2,
  Zap,
  Globe,
  Terminal,
} from 'lucide-react';

interface StageData {
  step: string;
  name: string;
  duration: string;
  badge: string;
  color: string;
  bgGlow: string;
  borderGlow: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  metrics: string;
}

const STAGES: StageData[] = [
  {
    step: '01',
    name: 'Discovery & Pemetaan Bisnis',
    duration: 'Hari ke-1',
    badge: 'SRS & Scope',
    color: '#3B82F6', // Blue
    bgGlow: 'rgba(59, 130, 246, 0.25)',
    borderGlow: 'border-blue-500/60 dark:border-blue-400/60',
    icon: SearchIcon,
    deliverables: ['Audit proses manual', 'Definisi KPI & target omset', 'Peta arsitektur fitur'],
    metrics: 'Scope 100% Terkunci',
  },
  {
    step: '02',
    name: 'Arsitektur & Prototipe Interaktif',
    duration: 'Hari ke 1-2',
    badge: 'Design & Stack',
    color: '#8B5CF6', // Purple
    bgGlow: 'rgba(139, 92, 246, 0.25)',
    borderGlow: 'border-purple-500/60 dark:border-purple-400/60',
    icon: Layers,
    deliverables: ['Desain UI/UX responsif', 'Skema database PostgreSQL', 'Wireframe siap coding'],
    metrics: 'High-Fidelity Proto',
  },
  {
    step: '03',
    name: 'Rekayasa Kode & Hardening Keamanan',
    duration: 'Hari ke 2-3',
    badge: 'Fullstack Dev',
    color: '#10B981', // Emerald
    bgGlow: 'rgba(16, 185, 129, 0.25)',
    borderGlow: 'border-emerald-500/60 dark:border-emerald-400/60',
    icon: ShieldCheck,
    deliverables: ['Next.js 15 & TS bersih', 'CAPI & WhatsApp API', 'Proteksi 5 Lapis VPS'],
    metrics: '<0.8s LCP · OWASP Top 10',
  },
  {
    step: '04',
    name: 'Uji Beban, Go-Live & Serah Terima',
    duration: 'Hari ke-4',
    badge: 'Production Ready',
    color: '#F59E0B', // Amber
    bgGlow: 'rgba(245, 158, 11, 0.25)',
    borderGlow: 'border-amber-500/60 dark:border-amber-400/60',
    icon: Rocket,
    deliverables: ['Lighthouse Score 100/100', '100% Hak Milik Source Code', 'Garansi Resmi 30 Hari'],
    metrics: 'SLA 99.9% Terjamin',
  },
];

function SearchIcon(props: { className?: string }) {
  return <FileCode2 {...props} />;
}

export const InteractiveIsometricPipeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [pulsePos, setPulsePos] = useState<number>(0);

  // Auto-progress stages every 3 seconds if not actively hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Pulse flow animation along pipeline
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulsePos((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 40);
    return () => clearInterval(pulseInterval);
  }, []);

  const currentStage = STAGES[activeStage];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-[#0B0D13] shadow-md select-none transition-all duration-300"
    >
      {/* Top Header Bar */}
      <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900/90 border-b border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-zinc-900 dark:text-zinc-100">
            Pipeline Rekayasa Arsitektur Sistem
          </span>
          <span className="hidden md:inline px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
            Live Interactive 3D Stage
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-zinc-500 font-bold hidden sm:inline">
            Tahap {activeStage + 1} dari 4 Aktif
          </span>
          <span className="px-2 py-0.5 rounded-md bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] font-bold">
            Hover untuk Interaksi
          </span>
        </div>
      </div>

      {/* Main Interactive Stage Canvas */}
      <div className="relative p-6 sm:p-8 min-h-[340px] flex flex-col justify-between overflow-hidden bg-dot-grid">
        {/* Ambient Backlight Glow that shifts with active stage color */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-20 dark:opacity-30 blur-3xl"
          style={{
            background: `radial-gradient(circle at 50% 40%, ${currentStage.color}, transparent 65%)`,
          }}
        />

        {/* Isometric 3D Stage Visual (Modeled after EDA high-tech floating layers) */}
        <div className="relative z-10 w-full max-w-3xl mx-auto py-4">
          {/* Top Connecting Pipeline Circuit Line */}
          <div className="relative w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-8 overflow-hidden">
            <div
              className="absolute top-0 bottom-0 w-32 rounded-full transition-all duration-75 blur-xs"
              style={{
                background: `linear-gradient(90deg, transparent, ${currentStage.color}, transparent)`,
                left: `${pulsePos}%`,
                transform: 'translateX(-50%)',
              }}
            />
          </div>

          {/* 4 Interactive Stage Pillars (Floating Isometric Deck) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
            {STAGES.map((stage, idx) => {
              const isActive = idx === activeStage;
              const IconComponent = stage.icon;

              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStage(idx)}
                  onMouseEnter={() => setActiveStage(idx)}
                  className={`group relative p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? `scale-[1.03] -translate-y-1.5 shadow-lg bg-white dark:bg-[#131722] ${stage.borderGlow}`
                      : 'bg-zinc-50/70 dark:bg-zinc-900/50 border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 opacity-85 hover:opacity-100'
                  }`}
                  style={{
                    boxShadow: isActive ? `0 12px 30px -10px ${stage.bgGlow}` : undefined,
                  }}
                >
                  {/* Floating Pillar Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono text-xs font-black px-2 py-0.5 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950'
                          : 'bg-zinc-200/70 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      TAHAP {stage.step}
                    </span>

                    <span className="font-mono text-[10px] font-bold text-zinc-500 dark:text-zinc-400">
                      {stage.duration}
                    </span>
                  </div>

                  {/* Icon & Luminous 3D Glass Platform */}
                  <div className="my-2 flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 ${
                        isActive ? 'scale-110 shadow-sm' : ''
                      }`}
                      style={{
                        backgroundColor: isActive ? stage.color : undefined,
                        color: isActive ? '#ffffff' : undefined,
                      }}
                    >
                      <IconComponent
                        className={`w-5 h-5 ${
                          isActive
                            ? 'text-white'
                            : 'text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200'
                        }`}
                      />
                    </div>

                    <div className="min-w-0">
                      <p
                        className={`text-xs font-bold leading-tight truncate transition-colors ${
                          isActive
                            ? 'text-zinc-950 dark:text-white'
                            : 'text-zinc-700 dark:text-zinc-300'
                        }`}
                      >
                        {stage.name}
                      </p>
                      <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                        {stage.badge}
                      </span>
                    </div>
                  </div>

                  {/* Key SLA Metric Chip */}
                  <div className="pt-2.5 mt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[10px] font-mono font-semibold">
                    <span
                      className="truncate"
                      style={{ color: isActive ? stage.color : undefined }}
                    >
                      {stage.metrics}
                    </span>
                    {isActive && <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: stage.color }} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Stage Detail Panel (Interactive Output of Selected Stage) */}
        <div className="relative z-10 mt-5 p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-[#11141C] border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: currentStage.color }}
              />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                Fokus Eksekusi: {currentStage.name}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600 dark:text-zinc-300">
              {currentStage.deliverables.map((item, i) => (
                <span key={i} className="flex items-center gap-1 font-mono text-[11px]">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200 shadow-2xs">
              SLA: {currentStage.metrics}
            </span>
          </div>
        </div>
      </div>

      {/* Clean Bottom Guarantee Bar */}
      <div className="px-4 py-3 bg-zinc-100/90 dark:bg-zinc-900/90 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="text-xs">
            <strong>Jaminan Kualitas:</strong> 100% Hak Milik Source Code, Bebas Biaya Sewa Tahunan, dan Garansi Resmi 30 Hari.
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500 dark:text-zinc-400 shrink-0">
          <span className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-emerald-600 dark:text-emerald-400 font-bold">
            &lt;0.8s LCP
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-blue-600 dark:text-blue-400 font-bold">
            Lighthouse 100
          </span>
        </div>
      </div>
    </div>
  );
};
