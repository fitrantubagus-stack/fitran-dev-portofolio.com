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
  Maximize2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Bot,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';

interface ClaudeAcademySlideProps {
  chapterTitle?: string;
  subchapterTitle?: string;
  subchapterNum?: string;
  trackId?: string;
  practiceSnippet?: string;
  mistakes?: string;
  explanation?: string;
  checklist?: string[];
  situation?: string;
}

export const ClaudeAcademySlide: React.FC<ClaudeAcademySlideProps> = ({
  chapterTitle = 'Fondasi Rekayasa Perangkat Lunak',
  subchapterTitle = 'Standar Kode Bersih & Pola Produksi',
  subchapterNum = '01',
  trackId = 'ai',
  practiceSnippet,
  mistakes,
  explanation,
  checklist = [],
  situation,
}) => {
  const [activeTab, setActiveTab] = useState<'pattern' | 'antipattern' | 'checklist'>('pattern');
  const [copied, setCopied] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const handleCopy = () => {
    if (!practiceSnippet) return;
    navigator.clipboard?.writeText(practiceSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const trackBadgeLabel =
    trackId === 'ai'
      ? 'FITRAN AI ACADEMY'
      : trackId === 'digital-marketing'
      ? 'GROWTH & TRACKING ACADEMY'
      : 'VIBE CODING & ARCHITECTURE';

  // Dynamic visual banner configuration based on track and chapter
  const renderDynamicVisual = () => {
    const isAi = trackId === 'ai';
    const isMarketing = trackId === 'digital-marketing';

    const handleVisualClick = () => {
      window.dispatchEvent(
        new CustomEvent('open-image-lightbox', {
          detail: {
            src: '/claude-academy-learning-hub.png',
            title: `Buku Panduan Modul ${subchapterNum} — ${subchapterTitle}`,
            alt: chapterTitle,
          },
        })
      );
    };

    if (isAi) {
      return (
        <div
          onClick={handleVisualClick}
          className="relative w-full min-h-[280px] bg-gradient-to-br from-[#121826] via-[#1A2234] to-[#251B38] p-6 sm:p-8 flex flex-col justify-between text-white cursor-pointer group rounded-2xl overflow-hidden select-none"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Tag & Maximize Pill */}
          <div className="relative z-10 flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-400/30 text-amber-300 font-mono text-[11px] font-bold tracking-wider uppercase">
                ALUR KNOWLEDGE &amp; AI AGENT
              </span>
              <span className="text-xs font-mono text-zinc-300 hidden sm:inline">
                SOP Bisnis → Guardrails → WhatsApp Real-Time
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors">
              <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Perbesar Visual</span>
            </div>
          </div>

          {/* Center Graphic: Spacious Interactive Flow Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-2">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 hover:border-amber-400/40 transition-colors">
              <div className="flex items-center justify-between text-[11px] font-mono text-amber-400 font-bold">
                <span>01. DATA BISNIS</span>
                <Bot className="w-4 h-4" />
              </div>
              <p className="text-sm font-bold text-white">Dokumen &amp; SOP Perusahaan</p>
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                Buku katalog produk, daftar harga grosir, jam operasional, dan aturan resmi toko.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-amber-500/40 backdrop-blur-md space-y-2 shadow-sm hover:border-amber-400 transition-colors">
              <div className="flex items-center justify-between text-[11px] font-mono text-amber-300 font-bold">
                <span>02. FILTER PENGAMAN</span>
                <ShieldCheck className="w-4 h-4 text-amber-400" />
              </div>
              <p className="text-sm font-bold text-white">Guardrails &amp; Validasi</p>
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                Mencegah bot menjawab ngawur dan menolak pertanyaan di luar lingkup bisnis Anda.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-emerald-500/40 backdrop-blur-md space-y-2 hover:border-emerald-400 transition-colors">
              <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 font-bold">
                <span>03. JAWABAN AKURAT</span>
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-sm font-bold text-white">Respon Sopan &amp; Tepat</p>
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                Pelanggan puas, otomatis hitung tarif ekspedisi dan kirim rincian kuitansi closing.
              </p>
            </div>
          </div>

          {/* Bottom Footer Details */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-zinc-300 border-t border-white/10 pt-3 mt-4">
            <span>Standar Modul: {subchapterTitle}</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Teruji di Lapangan
            </span>
          </div>
        </div>
      );
    }

    if (isMarketing) {
      return (
        <div
          onClick={handleVisualClick}
          className="relative w-full min-h-[280px] bg-gradient-to-br from-[#0D1F38] via-[#102B4E] to-[#1F193D] p-6 sm:p-8 flex flex-col justify-between text-white cursor-pointer group rounded-2xl overflow-hidden select-none"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

          {/* Top Tag & Maximize Pill */}
          <div className="relative z-10 flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-mono text-[11px] font-bold tracking-wider uppercase">
                SERVER-SIDE TRACKING &amp; CAPI
              </span>
              <span className="text-xs font-mono text-zinc-300 hidden sm:inline">
                Browser Pixel + Server Handshake (EMQ 9.8)
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors">
              <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Perbesar Visual</span>
            </div>
          </div>

          {/* Center Graphic */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-2">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 hover:border-cyan-400/40 transition-colors">
              <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 font-bold">
                <span>01. PENGUNJUNG WEB</span>
                <TrendingUp className="w-4 h-4" />
              </div>
              <p className="text-sm font-bold text-white">Aktivitas &amp; Klik Beli</p>
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                Pengunjung membuka produk, memasukkan ke keranjang, atau menyelesaikan checkout.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-cyan-500/40 backdrop-blur-md space-y-2 shadow-sm hover:border-cyan-400 transition-colors">
              <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300 font-bold">
                <span>02. JALUR DUA ARAH</span>
                <Layers className="w-4 h-4 text-cyan-400" />
              </div>
              <p className="text-sm font-bold text-white">Browser + Server CAPI</p>
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                Data dikirim melalui server mandiri berdedikasi, 100% kebal ad-blocker iOS 14+.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-emerald-500/40 backdrop-blur-md space-y-2 hover:border-emerald-400 transition-colors">
              <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 font-bold">
                <span>03. ATRIBUSI IKLAN</span>
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-sm font-bold text-white">ROAS &amp; Omset Akurat</p>
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                Algoritma iklan belajar cepat dengan sinyal presisi, menurunkan biaya iklan hingga 40%.
              </p>
            </div>
          </div>

          {/* Bottom Footer Details */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-zinc-300 border-t border-white/10 pt-3 mt-4">
            <span>Standar Modul: {subchapterTitle}</span>
            <span className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Skor EMQ 9.8+ Terjamin
            </span>
          </div>
        </div>
      );
    }

    // Fallback: Vibe Coding & Clean Architecture
    return (
      <div
        onClick={handleVisualClick}
        className="relative w-full min-h-[280px] bg-gradient-to-br from-[#0F231D] via-[#133027] to-[#1C4538] p-6 sm:p-8 flex flex-col justify-between text-white cursor-pointer group rounded-2xl overflow-hidden select-none"
      >
        {/* Ambient Glow */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

        {/* Top Tag & Maximize Pill */}
        <div className="relative z-10 flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-mono text-[11px] font-bold tracking-wider uppercase">
              VIBE CODING &amp; HIGH-SPEED PROTOTYPING
            </span>
            <span className="text-xs font-mono text-zinc-300 hidden sm:inline">
              Prompt Arsitektural → Audit Mandiri → Deploy Kilat
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors">
            <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Perbesar Visual</span>
          </div>
        </div>

        {/* Center Graphic */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 my-auto py-2">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 hover:border-emerald-400/40 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 font-bold">
              <span>01. RANCANG SPESIFIKASI</span>
              <Terminal className="w-4 h-4" />
            </div>
            <p className="text-sm font-bold text-white">Arahan Spesifik &amp; Jelas</p>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              Menjelaskan alur data dan kebutuhan fitur dengan bahasa sederhana tanpa ambiguitas.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-emerald-500/40 backdrop-blur-md space-y-2 shadow-sm hover:border-emerald-400 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-emerald-300 font-bold">
              <span>02. REKAYASA KODE</span>
              <Code2 className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-sm font-bold text-white">Claude Code CLI Helper</p>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              Menulis kode bersih, memasang komponen modular, tanpa file sampah atau duplikasi.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-teal-500/40 backdrop-blur-md space-y-2 hover:border-teal-400 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-teal-400 font-bold">
              <span>03. UJI OTOMATIS</span>
              <ShieldCheck className="w-4 h-4 text-teal-400" />
            </div>
            <p className="text-sm font-bold text-white">Siap Tayang ke Publik</p>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              Bebas error kompilasi, kecepatan load di bawah 1 detik, dan 100% siap dipakai pelanggan.
            </p>
          </div>
        </div>

        {/* Bottom Footer Details */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-zinc-300 border-t border-white/10 pt-3 mt-4">
          <span>Standar Modul: {subchapterTitle}</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1.5">
            <Check className="w-4 h-4" /> Bebas Istilah Rumit
          </span>
        </div>
      </div>
    );
  };

  // Dynamic Card 1: Pola Terbaik
  const patternTitle = `Langkah Teruji: ${subchapterTitle.split(':')[0]}`;
  const patternDesc = explanation
    ? explanation.slice(0, 140) + '...'
    : 'Menerapkan cara kerja yang sudah terbukti di lapangan agar sistem stabil, tidak mudah error saat ramai, dan mudah diperbaiki di masa depan.';

  // Dynamic Card 2: Jebakan Pemula
  const mistakeText = mistakes || 'Mengabaikan pengujian awal atau langsung pasang tanpa mengecek apakah sistem siap menghadapi kondisi pelanggan sebenarnya.';
  const mistakeDesc = mistakeText.length > 140 ? mistakeText.slice(0, 140) + '...' : mistakeText;

  // Dynamic Card 3: Checklist
  const checklistCount = checklist.length > 0 ? checklist.length : 3;

  return (
    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0E1117] shadow-lg overflow-hidden space-y-8 sm:space-y-10 p-6 sm:p-8">
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

      {/* 2. DYNAMIC TOPIC-BASED VISUAL SHOWCASE (UNOBSTRUCTED, CAPTION UNDERNEATH) */}
      <div className="rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-sm flex flex-col">
        {renderDynamicVisual()}

        {/* Clean caption bar placed UNDERNEATH the visual so it NEVER covers or obstructs the image */}
        <div className="p-4 bg-white dark:bg-[#12151D] border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono font-bold">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
            <span>Standar Rekayasa Web &amp; Arsitektur AI Terverifikasi</span>
          </div>
          <span className="text-[11px] text-zinc-500 font-normal">
            Buku Panduan Belajar fitran.dev • Terstruktur, Mudah Dipahami Pemula
          </span>
        </div>
      </div>

      {/* 3. CLAUDE ACADEMY 3-PANEL CONCEPT CARDS (✓, ✕, ?) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-2">
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
              {patternTitle}
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              {patternDesc}
            </p>
          </div>
          <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 pt-1">
            <span>Buka Pola Ini</span>
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
              Kesalahan yang Harus Dihindari
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              {mistakeDesc}
            </p>
          </div>
          <div className="text-[11px] font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1 pt-1">
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
              Checklist Uji Lapangan
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              {checklistCount} poin kunci pemeriksaan: Pastikan sistem berjalan mulus sebelum diperkenalkan ke calon pembeli.
            </p>
          </div>
          <div className="text-[11px] font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1 pt-1">
            <span>Buka Checklist ({checklistCount})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* 4. DYNAMIC INTERACTIVE DETAIL PANEL BASED ON SELECTED TAB */}
      {activeTab === 'pattern' && (
        <div className="space-y-4 animate-fade-in">
          {situation && (
            <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex items-start gap-3">
              <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs">
                <p className="font-bold text-zinc-900 dark:text-white">Situasi di Lapangan:</p>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{situation}</p>
              </div>
            </div>
          )}

          {practiceSnippet && (
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#0B0F19] overflow-hidden shadow-inner text-xs">
              <div className="px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-zinc-400 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-zinc-200 font-bold">{subchapterTitle} — Panduan Kode &amp; Prompt Praktis</span>
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
      )}

      {activeTab === 'antipattern' && (
        <div className="p-5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 space-y-3 text-xs animate-fade-in">
          <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-mono uppercase tracking-wider text-[11px]">Bedah Kesalahan &amp; Cara Mengatasinya</span>
          </div>
          <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed text-sm">
            {mistakes || 'Banyak pemula terburu-buru meluncurkan sistem tanpa pengujian di perangkat yang berbeda atau mengabaikan perlindungan kata sandi.'}
          </p>
          <div className="pt-2 border-t border-rose-200 dark:border-rose-900/40 flex items-center justify-between text-[11px] text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold text-rose-700 dark:text-rose-400">Solusi fitran.dev:</span>
            <span>Gunakan standar pengujian bertahap sebelum merilis ke publik.</span>
          </div>
        </div>
      )}

      {activeTab === 'checklist' && (
        <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60 space-y-3 text-xs animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-mono uppercase tracking-wider text-[11px]">Daftar Periksa Kelayakan Produksi</span>
            </div>
            <span className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400 font-bold">
              {Object.values(checkedItems).filter(Boolean).length} / {checklist.length || 3} Terverifikasi
            </span>
          </div>

          <div className="space-y-2 pt-1">
            {(checklist.length > 0
              ? checklist
              : [
                  'Semua fitur utama sudah diuji pada smartphone dan laptop.',
                  'Waktu muat halaman cepat (di bawah 1 detik) tanpa gambar pecah.',
                  'Data kontak, nomor WhatsApp, dan nomor rekening sudah benar 100%.',
                ]
            ).map((item, idx) => {
              const isDone = !!checkedItems[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                    isDone
                      ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200'
                      : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-indigo-300'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isDone
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-zinc-400 dark:border-zinc-600'
                    }`}
                  >
                    {isDone && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className={`text-xs leading-relaxed ${isDone ? 'line-through opacity-80' : ''}`}>
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
