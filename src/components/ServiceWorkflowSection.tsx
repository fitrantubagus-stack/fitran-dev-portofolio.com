import React from 'react';
import {
  Workflow,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Zap,
  Cpu,
  Globe,
  Lock,
} from 'lucide-react';

interface ServiceWorkflowSectionProps {
  onWhatsAppInquiry: (topic?: string, budget?: string) => void;
  className?: string;
}

export const ServiceWorkflowSection: React.FC<ServiceWorkflowSectionProps> = ({
  onWhatsAppInquiry,
  className = '',
}) => {
  const WORKFLOW_STEPS = [
    {
      step: '01',
      title: 'Discovery & Blueprint',
      duration: 'Hari ke-1',
      desc: 'Pemetaan proses bisnis riil, perancangan diagram relasi data (ERD), dan penentuan spesifikasi arsitektur tanpa biaya vendor berlebih.',
      icon: <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    },
    {
      step: '02',
      title: 'UI/UX & Prototyping',
      duration: 'Hari ke 1-2',
      desc: 'Penyusunan tata letak responsif, copywriting penawaran persuasif, dan alur interaksi pengguna yang teruji ramah konversi.',
      icon: <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
    },
    {
      step: '03',
      title: 'Fullstack & Integrasi AI',
      duration: 'Hari ke 2-3',
      desc: 'Penulisan kode bersih berstandar industri (Next.js / Vite / Flutter), integrasi AI agent WhatsApp, dan koneksi database PostgreSQL.',
      icon: <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      step: '04',
      title: 'Hardening & Audit 100/100',
      duration: 'Hari ke-3',
      desc: 'Pengujian 5 lapisan keamanan, sanitasi anti-SQLi/XSS, proteksi TLS 1.3, serta verifikasi skor Google Lighthouse 100/100.',
      icon: <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
    },
    {
      step: '05',
      title: 'Edge Launch & Handover',
      duration: 'Hari ke-4',
      desc: 'Deploy ke global edge CDN (Vercel / Cloudflare), penyerahan 100% full source code ke GitHub Anda, dan garansi resmi 30 hari.',
      icon: <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    },
  ];

  return (
    <section className={`rounded-3xl bg-white dark:bg-[#111319] text-zinc-950 dark:text-white border border-zinc-200/90 dark:border-zinc-800 shadow-sm p-6 sm:p-10 lg:p-12 overflow-hidden relative select-none ${className}`}>
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8 sm:space-y-10">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-zinc-100 dark:border-zinc-800 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-[#1E3A8A] dark:text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>ROADMAP &amp; STANDAR PENGERJAAN RESMI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
              Alur Rekayasa &amp; Eksekusi Transformasi Digital
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              Setiap proyek dikerjakan melalui pipa rekayasa perangkat lunak terstruktur. Transparan, terukur, dan diuji menyeluruh sebelum serah terima.
            </p>
          </div>

          <button
            onClick={() => onWhatsAppInquiry('Konsultasi Alur Pengerjaan Transformasi Digital')}
            className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer shrink-0 self-start lg:self-auto"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Mulai Konsultasi Alur Proyek</span>
          </button>
        </div>

        {/* Compact, Non-Black High-Tech Workflow Diagram Visual Showcase */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 shadow-md relative group">
          <div className="px-4 py-2.5 bg-zinc-100 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-zinc-700/80 flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-zinc-800 dark:text-zinc-200 font-bold">Fitran Dev Engineering Pipeline • High-Performance Standard</span>
            </div>
            <span className="hidden sm:inline text-emerald-600 dark:text-emerald-400 text-[11px] font-bold">ISO-Grade Security &amp; OWASP Top 10</span>
          </div>

          <div className="relative overflow-hidden bg-zinc-950">
            <img
              src="/digital-transformation-workflow.jpg"
              alt="Infografis Diagram 3D Alur Pengerjaan Layanan dan Transformasi Digital Fitran Dev"
              className="w-full max-h-56 sm:max-h-72 object-cover object-center group-hover:scale-101 transition-transform duration-500"
              loading="lazy"
            />

            {/* Bottom floating summary banner on the image */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-700/80 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
              <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-[11px]">
                  <strong>Jaminan Kualitas:</strong> 100% Hak Milik Source Code, Bebas Sewa Tahunan, dan Garansi Resmi 30 Hari.
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500 dark:text-zinc-400 shrink-0">
                <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-emerald-600 dark:text-emerald-400 font-bold">&lt;0.8s LCP</span>
                <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-blue-600 dark:text-blue-400 font-bold">Lighthouse 100</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Stage Interactive Workflow Cards Grid (Clean, Non-Black) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-2">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800 hover:border-blue-400/60 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-[#1E3A8A] dark:text-blue-400">
                    TAHAP {step.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
                    {step.duration}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <div className="w-7 h-7 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shrink-0 shadow-2xs">
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-zinc-950 dark:text-white leading-snug">
                    {step.title}
                  </h4>
                </div>

                <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800 flex items-center justify-between text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                <span>Terverifikasi SLA</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
