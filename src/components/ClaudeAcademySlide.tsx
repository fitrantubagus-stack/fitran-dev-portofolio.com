import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Code2,
  Sparkles,
  BookOpen,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  Copy,
  Check,
} from 'lucide-react';

interface ClaudeAcademySlideProps {
  chapterTitle?: string;
  subchapterTitle?: string;
  subchapterNum?: string;
  trackId?: string;
  practiceSnippet?: string;
  mistakes?: string;
  explanation?: string;
}

export const ClaudeAcademySlide: React.FC<ClaudeAcademySlideProps> = ({
  chapterTitle = 'Fondasi Rekayasa Perangkat Lunak',
  subchapterTitle = 'Standar Kode Bersih & Pola Produksi',
  subchapterNum = '01',
  trackId = 'ai',
  practiceSnippet,
  mistakes,
  explanation,
}) => {
  const [activeTab, setActiveTab] = useState<'pattern' | 'antipattern' | 'checklist'>('pattern');
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    if (!practiceSnippet) return;
    navigator.clipboard?.writeText(practiceSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const trackBadgeLabel =
    trackId === 'ai'
      ? 'FITRAN AI ACADEMY'
      : trackId === 'digital-marketing'
      ? 'GROWTH & TRACKING ACADEMY'
      : 'VIBE CODING & ARCHITECTURE';

  return (
    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0E1117] shadow-lg overflow-hidden space-y-6 p-6 sm:p-8">
      {/* 1. ACADEMY HEADER BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 text-white flex items-center justify-center font-black text-xs shadow-sm">
            CA
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
                {trackBadgeLabel}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-mono text-[9px] font-bold">
                CLAUDE ACADEMY STYLE
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-medium">Metodologi Belajar Interaktif untuk Pemula hingga Mahir</p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs text-zinc-500">
          <BookOpen className="w-4 h-4 text-amber-600" />
          <span>Modul {subchapterNum}</span>
        </div>
      </div>

      {/* 2. EDITORIAL 16:9 VISUAL SHOWCASE (UNOBSTRUCTED, CAPTION UNDERNEATH) */}
      <div className="rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-sm flex flex-col">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#F7F5F0] dark:bg-[#151922] overflow-hidden flex items-center justify-center">
          <img
            src="/claude-academy-learning-hub.png"
            alt="Claude Academy Editorial Learning Illustration"
            className="w-full h-full object-cover object-center transition-transform hover:scale-102 duration-700"
            loading="lazy"
          />
        </div>

        {/* Clean caption bar placed UNDERNEATH the photo so it NEVER covers or obstructs the image */}
        <div className="p-4 bg-white dark:bg-[#12151D] border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono font-bold">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
            <span>Standar Rekayasa Web &amp; Arsitektur AI Terverifikasi</span>
          </div>
          <span className="text-[11px] text-zinc-500 font-normal">
            Buku Panduan Belajar fitran.dev • Terstruktur, Bebas Istilah Rumit
          </span>
        </div>
      </div>

      {/* 3. CLAUDE ACADEMY 3-PANEL CONCEPT CARDS (✓, ✕, ?) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Pola Terbaik (Best Practice) */}
        <div
          onClick={() => setActiveTab('pattern')}
          className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
            activeTab === 'pattern'
              ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 ring-2 ring-emerald-400/20 shadow-sm'
              : 'bg-zinc-50/60 dark:bg-zinc-900/40 border-zinc-200/80 dark:border-zinc-800 hover:border-emerald-300'
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-mono text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-400">
                Pola Dianjurkan
              </span>
            </div>
            <h4 className="font-bold text-sm text-zinc-950 dark:text-white leading-snug">
              Arsitektur Bersih &amp; Teruji
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              Memisahkan logika bisnis, alur komunikasi data, dan tampilan agar kode mudah dirawat dan bebas dari bug tak terduga.
            </p>
          </div>
          <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
            <span>Standar Produksi</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Card 2: Anti-Pattern / Jebakan (Pitfall) */}
        <div
          onClick={() => setActiveTab('antipattern')}
          className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
            activeTab === 'antipattern'
              ? 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-300 dark:border-rose-700 ring-2 ring-rose-400/20 shadow-sm'
              : 'bg-zinc-50/60 dark:bg-zinc-900/40 border-zinc-200/80 dark:border-zinc-800 hover:border-rose-300'
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center shadow-xs">
                <XCircle className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-mono text-[10px] font-black uppercase text-rose-700 dark:text-rose-400">
                Jebakan Pemula
              </span>
            </div>
            <h4 className="font-bold text-sm text-zinc-950 dark:text-white leading-snug">
              Anti-Pattern yang Dihindari
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              {mistakes
                ? mistakes.slice(0, 110) + '...'
                : 'Menggabungkan logika API langsung di tampilan atau hardcode credential tanpa env variable aman.'}
            </p>
          </div>
          <div className="text-[11px] font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1">
            <span>Hindari Kesalahan Ini</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Card 3: Deep Dive / Pertanyaan Kritis */}
        <div
          onClick={() => setActiveTab('checklist')}
          className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
            activeTab === 'checklist'
              ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-300 dark:border-indigo-700 ring-2 ring-indigo-400/20 shadow-sm'
              : 'bg-zinc-50/60 dark:bg-zinc-900/40 border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-300'
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                <HelpCircle className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-mono text-[10px] font-black uppercase text-indigo-700 dark:text-indigo-400">
                Audit Kritis
              </span>
            </div>
            <h4 className="font-bold text-sm text-zinc-950 dark:text-white leading-snug">
              Uji Kelayakan Produksi
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              3 pertanyaan kunci: Apakah sistem punya fallback saat down? Apakah data terenkripsi? Apakah log telemetri aktif?
            </p>
          </div>
          <div className="text-[11px] font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1">
            <span>Buka Checklist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* 4. INTERACTIVE CODE / SCHEMAS PLAYGROUND (CLAUDE ACADEMY TERMINAL STYLE) */}
      {practiceSnippet && (
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#0B0F19] overflow-hidden shadow-inner text-xs">
          <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-zinc-400 font-mono text-[11px]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-zinc-200 font-bold">{subchapterTitle} — Kode &amp; Prompt Referensi</span>
            </div>
            <button
              onClick={handleCopy}
              className="px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[10px] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Snippet</span>
                </>
              )}
            </button>
          </div>
          <div className="p-4 text-zinc-200 font-mono text-xs overflow-x-auto leading-relaxed max-h-72">
            <pre className="whitespace-pre-wrap">{practiceSnippet}</pre>
          </div>
        </div>
      )}
    </div>
  );
};
