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
    <section className={`rounded-3xl bg-zinc-950 text-white border border-blue-900/50 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden relative select-none ${className}`}>
      {/* Background Tech Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8 sm:space-y-10">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-zinc-800 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5 text-blue-400" />
              <span>ROADMAP &amp; STANDAR PENGERJAAN RESMI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Alur Rekayasa &amp; Eksekusi Transformasi Digital
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              Setiap proyek dikerjakan melalui pipa rekayasa perangkat lunak terstruktur. Transparan, terukur, dan diuji menyeluruh sebelum serah terima.
            </p>
          </div>

          <button
            onClick={() => onWhatsAppInquiry('Konsultasi Alur Pengerjaan Transformasi Digital')}
            className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all cursor-pointer shrink-0 self-start lg:self-auto"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Mulai Konsultasi Alur Proyek</span>
          </button>
        </div>

        {/* Big High-Tech Workflow Diagram Visual Showcase */}
        <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/90 shadow-2xl relative group">
          <div className="p-3 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-zinc-200 font-bold">Fitran Dev Engineering Pipeline • v3.8 High-Performance Standard</span>
            </div>
            <span className="hidden sm:inline text-emerald-400 text-[11px]">ISO-Grade Security &amp; OWASP Top 10 Compliant</span>
          </div>

          <div className="relative overflow-hidden bg-black/60">
            <img
              src="/digital-transformation-workflow.jpg"
              alt="Infografis Diagram 3D Alur Pengerjaan Layanan dan Transformasi Digital Fitran Dev"
              className="w-full h-auto object-cover group-hover:scale-101 transition-transform duration-500"
              loading="lazy"
            />

            {/* Bottom floating summary banner on the image */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 text-zinc-300">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  <strong>Jaminan Kualitas Mutlak:</strong> 100% Hak Milik Source Code, Bebas Biaya Sewa Tahunan, dan Garansi Bug-Free 30 Hari.
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400 shrink-0">
                <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-emerald-400">0.4s LCP</span>
                <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-blue-400">Lighthouse 100</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Stage Interactive Workflow Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-2">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-blue-500/60 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-blue-400">
                    TAHAP {step.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
                    {step.duration}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <div className="w-7 h-7 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-white leading-snug">
                    {step.title}
                  </h4>
                </div>

                <p className="text-[11px] text-zinc-400 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                <span>Terverifikasi SLA</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
