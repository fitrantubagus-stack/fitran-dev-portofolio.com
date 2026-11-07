import React, { useState, useEffect } from 'react';
import {
  Layers,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  FileCode2,
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
  desc?: string;
}

export interface CustomWorkflowStage {
  step: number | string;
  title: string;
  duration: string;
  desc: string;
}

interface InteractiveIsometricPipelineProps {
  stages?: CustomWorkflowStage[];
}

function SearchIcon(props: { className?: string }) {
  return <FileCode2 {...props} />;
}

const DEFAULT_STAGES: StageData[] = [
  {
    step: '01',
    name: 'Discovery & Pemetaan Bisnis',
    duration: 'Hari ke-1',
    badge: 'SRS & Scope',
    color: '#3B82F6', // Blue
    bgGlow: 'rgba(59, 130, 246, 0.22)',
    borderGlow: 'border-blue-500/70 dark:border-blue-400/70',
    icon: SearchIcon,
    deliverables: ['Audit proses manual', 'Definisi KPI & target omset', 'Peta arsitektur fitur'],
    metrics: 'Scope 100% Terkunci',
    desc: 'Pemetaan alur bisnis riil, perancangan skema data (ERD), dan penguncian spesifikasi fitur tanpa biaya tersembunyi.',
  },
  {
    step: '02',
    name: 'Arsitektur & Prototipe Interaktif',
    duration: 'Hari ke 1-2',
    badge: 'Design & Stack',
    color: '#8B5CF6', // Purple
    bgGlow: 'rgba(139, 92, 246, 0.22)',
    borderGlow: 'border-purple-500/70 dark:border-purple-400/70',
    icon: Layers,
    deliverables: ['Desain UI/UX responsif', 'Skema database PostgreSQL', 'Wireframe siap coding'],
    metrics: 'High-Fidelity Proto',
    desc: 'Penyusunan tata letak antarmuka responsif, struktur API modular, dan alur konversi yang nyaman di layar mobile maupun desktop.',
  },
  {
    step: '03',
    name: 'Rekayasa Kode & Hardening Keamanan',
    duration: 'Hari ke 2-3',
    badge: 'Fullstack Dev',
    color: '#10B981', // Emerald
    bgGlow: 'rgba(16, 185, 129, 0.22)',
    borderGlow: 'border-emerald-500/70 dark:border-emerald-400/70',
    icon: ShieldCheck,
    deliverables: ['Next.js 15 & TS bersih', 'CAPI & WhatsApp API', 'Proteksi 5 Lapis VPS'],
    metrics: '<0.8s LCP · OWASP Top 10',
    desc: 'Penulisan kode produksi berstandar industri, integrasi webhook WhatsApp/payment, serta perlindungan penuh terhadap SQLi/XSS.',
  },
  {
    step: '04',
    name: 'Uji Beban, Go-Live & Serah Terima',
    duration: 'Hari ke-4',
    badge: 'Production Ready',
    color: '#F59E0B', // Amber
    bgGlow: 'rgba(245, 158, 11, 0.22)',
    borderGlow: 'border-amber-500/70 dark:border-amber-400/70',
    icon: Rocket,
    deliverables: ['Lighthouse Score 100/100', '100% Hak Milik Source Code', 'Garansi Resmi 30 Hari'],
    metrics: 'SLA 99.9% Terjamin',
    desc: 'Pengujian performa beban nyata, rilis ke server produksi/Edge CDN, penyerahan 100% source code, dan pendampingan garansi.',
  },
];

export const InteractiveIsometricPipeline: React.FC<InteractiveIsometricPipelineProps> = ({
  stages,
}) => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const resolvedStages: StageData[] = React.useMemo(() => {
    if (!stages || stages.length === 0) return DEFAULT_STAGES;
    return DEFAULT_STAGES.map((def, idx) => {
      const custom = stages[idx];
      if (!custom) return def;
      const stepStr = String(custom.step).padStart(2, '0');
      return {
        ...def,
        step: stepStr,
        name: custom.title || def.name,
        duration: custom.duration || def.duration,
        desc: custom.desc || def.desc,
      };
    });
  }, [stages]);

  // Auto-progress stages every 3.2 seconds if not actively hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % resolvedStages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isHovered, resolvedStages.length]);

  const currentStage = resolvedStages[activeStage] || resolvedStages[0];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-[#0B0D13] shadow-sm select-none transition-all duration-300"
    >
      {/* Top Header Bar */}
      <div className="px-4 sm:px-6 py-3 bg-zinc-50 dark:bg-zinc-900/90 border-b border-zinc-200/80 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="font-bold text-zinc-900 dark:text-zinc-100">
            Pipeline Rekayasa Arsitektur Sistem
          </span>
          <span className="hidden md:inline px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
            4-Stage Interactive Blueprint
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold hidden sm:inline">
            Tahap {activeStage + 1} dari {resolvedStages.length} Aktif
          </span>
          <span className="px-2.5 py-0.5 rounded-md bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] font-bold">
            Klik / Pilih Tahap
          </span>
        </div>
      </div>

      {/* Main Interactive Stage Canvas */}
      <div className="relative p-5 sm:p-7 flex flex-col justify-between overflow-hidden bg-dot-grid space-y-5">
        {/* Ambient Backlight Glow that shifts with active stage color */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-15 dark:opacity-25 blur-3xl"
          style={{
            background: `radial-gradient(circle at 50% 35%, ${currentStage.color}, transparent 68%)`,
          }}
        />

        {/* Animated Vector Schematic Pipeline Bar (Open, Unclipped SVG) */}
        <div className="relative z-10 w-full rounded-xl bg-zinc-50/90 dark:bg-[#111520]/90 border border-zinc-200/80 dark:border-zinc-800/80 px-3 py-2.5">
          <svg
            viewBox="0 0 420 58"
            className="w-full h-12 sm:h-14 overflow-visible"
            role="img"
            aria-label="Skema 4 tahap pengerjaan sistem"
          >
            {/* Base Connecting Track */}
            <line
              x1="55"
              y1="26"
              x2="364"
              y2="26"
              stroke="currentColor"
              className="text-zinc-200 dark:text-zinc-800"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Animated Progress Line */}
            <line
              x1="55"
              y1="26"
              x2={55 + activeStage * 103}
              y2="26"
              stroke={currentStage.color}
              strokeWidth="3.5"
              strokeLinecap="round"
              className="transition-all duration-500"
            />
            {/* Animated Flowing Dashed Signal */}
            <line
              x1="55"
              y1="26"
              x2="364"
              y2="26"
              stroke={currentStage.color}
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeOpacity="0.55"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="28;0"
                dur="1.6s"
                repeatCount="indefinite"
              />
            </line>

            {resolvedStages.map((st, idx) => {
              const cx = 55 + idx * 103;
              const isNodeActive = idx === activeStage;
              const isNodePassed = idx <= activeStage;
              return (
                <g
                  key={st.step}
                  onClick={() => setActiveStage(idx)}
                  className="cursor-pointer"
                >
                  {isNodeActive && (
                    <circle
                      cx={cx}
                      cy="26"
                      r="19"
                      fill={st.color}
                      fillOpacity="0.16"
                    >
                      <animate
                        attributeName="r"
                        values="16;21;16"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                  <circle
                    cx={cx}
                    cy="26"
                    r="13.5"
                    fill={isNodeActive ? st.color : isNodePassed ? '#0F172A' : '#F8FAFC'}
                    stroke={isNodePassed ? st.color : '#94A3B8'}
                    strokeWidth={isNodeActive ? '2.8' : '2'}
                  />
                  <text
                    x={cx}
                    y="30"
                    textAnchor="middle"
                    fill={isNodeActive || isNodePassed ? '#FFFFFF' : '#475569'}
                    fontSize="10.5"
                    fontWeight="800"
                    fontFamily="monospace"
                  >
                    {st.step}
                  </text>
                  <text
                    x={cx}
                    y="52"
                    textAnchor="middle"
                    fill={isNodeActive ? st.color : '#64748B'}
                    fontSize="9.5"
                    fontWeight="700"
                    fontFamily="monospace"
                  >
                    {st.badge}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* 4 Interactive Stage Cards (Full-Width Responsive Grid — Zero Truncation & Unsquashed Icons) */}
        <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resolvedStages.map((stage, idx) => {
            const isActive = idx === activeStage;
            const IconComponent = stage.icon;

            return (
              <div
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                onMouseEnter={() => setActiveStage(idx)}
                className={`group relative p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 ${
                  isActive
                    ? `shadow-md bg-white dark:bg-[#131722] ${stage.borderGlow}`
                    : 'bg-zinc-50/80 dark:bg-zinc-900/60 border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
                style={{
                  boxShadow: isActive ? `0 10px 26px -10px ${stage.bgGlow}` : undefined,
                }}
              >
                <div className="space-y-3">
                  {/* Card Top Meta: Step Pill + Duration */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`font-mono text-[11px] font-black px-2.5 py-0.5 rounded-lg transition-colors shrink-0 ${
                        isActive
                          ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950'
                          : 'bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                      }`}
                    >
                      TAHAP {stage.step}
                    </span>

                    <span className="font-mono text-[10px] font-bold text-zinc-500 dark:text-zinc-400 shrink-0">
                      {stage.duration}
                    </span>
                  </div>

                  {/* Icon + Full Stage Title (shrink-0 prevents squashed rocket icon, no truncate) */}
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-transform duration-300 ${
                        isActive
                          ? 'shadow-xs'
                          : 'bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700'
                      }`}
                      style={{
                        backgroundColor: isActive ? stage.color : undefined,
                        color: isActive ? '#ffffff' : undefined,
                      }}
                    >
                      <IconComponent
                        className={`w-5 h-5 shrink-0 ${
                          isActive
                            ? 'text-white'
                            : 'text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white'
                        }`}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4
                        className={`text-xs sm:text-[13px] font-bold leading-snug transition-colors ${
                          isActive
                            ? 'text-zinc-950 dark:text-white'
                            : 'text-zinc-800 dark:text-zinc-200'
                        }`}
                      >
                        {stage.name}
                      </h4>
                      <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 block mt-0.5">
                        {stage.badge}
                      </span>
                    </div>
                  </div>

                  {/* Concise Description */}
                  {stage.desc && (
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {stage.desc}
                    </p>
                  )}
                </div>

                {/* Key SLA Metric Footer (Full visibility without ellipsis) */}
                <div className="pt-2.5 border-t border-zinc-200/70 dark:border-zinc-800/80 flex items-center justify-between gap-2 text-[10px] font-mono font-bold">
                  <span
                    className="leading-tight"
                    style={{ color: isActive ? stage.color : undefined }}
                  >
                    {stage.metrics}
                  </span>
                  <CheckCircle2
                    className={`w-3.5 h-3.5 shrink-0 transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-40 text-zinc-400'
                    }`}
                    style={{ color: isActive ? stage.color : undefined }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Stage Detail Panel (Interactive Output of Selected Stage) */}
        <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-[#11141C] border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: currentStage.color }}
              />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                Fokus Eksekusi Tahap {currentStage.step}: {currentStage.name}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
              {currentStage.deliverables.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 font-mono text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200 shadow-2xs">
              Target SLA: {currentStage.metrics}
            </span>
          </div>
        </div>
      </div>

      {/* Clean Bottom Guarantee Bar */}
      <div className="px-4 sm:px-6 py-3 bg-zinc-100/90 dark:bg-zinc-900/90 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
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
