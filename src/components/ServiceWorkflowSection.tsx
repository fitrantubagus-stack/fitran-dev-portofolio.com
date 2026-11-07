import React from 'react';
import {
  Workflow,
  MessageSquare,
} from 'lucide-react';
import { InteractiveIsometricPipeline } from './InteractiveIsometricPipeline';

interface ServiceWorkflowSectionProps {
  onWhatsAppInquiry: (topic?: string, budget?: string) => void;
  className?: string;
}

export const ServiceWorkflowSection: React.FC<ServiceWorkflowSectionProps> = ({
  onWhatsAppInquiry,
  className = '',
}) => {
  return (
    <section
      id="alur-rekayasa-eksekusi"
      className={`rounded-3xl bg-white dark:bg-[#111319] text-zinc-950 dark:text-white border border-zinc-200/90 dark:border-zinc-800 shadow-sm p-6 sm:p-10 lg:p-12 overflow-hidden relative select-none scroll-mt-28 ${className}`}
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6 sm:space-y-8">
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
              Setiap proyek dikerjakan melalui pipa rekayasa perangkat lunak 4 tahap yang transparan, terukur, dan diuji menyeluruh sebelum serah terima.
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

        {/* Full-Width Interactive 4-Stage Pipeline */}
        <div className="w-full">
          <InteractiveIsometricPipeline />
        </div>
      </div>
    </section>
  );
};
