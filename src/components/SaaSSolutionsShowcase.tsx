import React, { useState } from 'react';
import {
  Sparkles,
  Check,
  ArrowRight,
  Bot,
  Zap,
  Code2,
  Cpu,
  Layers,
  Layout,
  Terminal,
  FileCode,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  MessageSquare,
  ChevronRight,
  TrendingUp,
  Clock,
  Download,
  Flame,
  Star,
} from 'lucide-react';
import { ToolLogo } from './ToolLogo';

interface SaaSSolutionsShowcaseProps {
  onWhatsAppInquiry: (serviceName?: string, budget?: string) => void;
  className?: string;
}

export const SaaSSolutionsShowcase: React.FC<SaaSSolutionsShowcaseProps> = ({
  onWhatsAppInquiry,
  className = '',
}) => {
  // Model selector state for AndalAI card
  const [selectedModel, setSelectedModel] = useState<'claude' | 'deepseek' | 'gpt4' | 'gemini'>('claude');
  
  // Interactive plan step toggle for Bikin Plan card
  const [activePlanStep, setActivePlanStep] = useState<number>(2);

  const AI_MODELS = {
    claude: {
      name: 'Claude 3.7 Sonnet',
      company: 'Anthropic',
      role: 'Reasoning & Architecture',
      badge: 'Extended Thinking',
      description: 'Penalaran arsitektur sistem tingkat tinggi, refactoring kode bebas bug, dan API design.',
      score: '98.5% Benchmark Reasoning',
    },
    deepseek: {
      name: 'DeepSeek R1',
      company: 'DeepSeek',
      role: 'Algorithmic Verification',
      badge: 'Open Weights Math',
      description: 'Verifikasi logika bisnis, optimasi kompleksitas query SQL, dan kalkulasi data berat.',
      score: '96.8% Algorithmic Logic',
    },
    gpt4: {
      name: 'GPT-4o Omnimodal',
      company: 'OpenAI',
      role: 'Vision & Multimodal',
      badge: 'Multimodal Master',
      description: 'Ekstraksi dokumen, analisis mockup UI visual, dan pemrosesan multi-format teks & media.',
      score: '95.2% Vision Accuracy',
    },
    gemini: {
      name: 'Gemini 2.0 Flash',
      company: 'Google',
      role: 'Ultra Low-Latency',
      badge: 'Sub-300ms Speed',
      description: 'Kecepatan inferensi instan untuk WhatsApp Bot 24/7 dan otomasi event-driven webhook.',
      score: '<280ms First Token',
    },
  };

  return (
    <div className={`space-y-16 select-none ${className}`}>
      {/* ========================================================================= */}
      {/* 1. SAAS INTERACTIVE BENTO GRID (MATCHING NGODINGPAKEAI.COM INTERACTION)   */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-900/60 text-orange-700 dark:text-orange-400 font-mono text-[11px] font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span>Rekayasa Produk Digital Modern ala SaaS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
            Alat &amp; Alur Kerja Terintegrasi untuk Eksekusi Kilat
          </h2>
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
            Dari perencanaan PRD terstruktur, UI canvas responsif, hingga orkestrasi multi-model AI terbaik untuk membangun sistem bisnis yang tangguh dan siap scale.
          </p>
        </div>

        {/* 4-Card SaaS Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* BENTO 1: BIKIN PLAN & PRD (Span 7) - Matches Image 3 "Bikin Plan" */}
          <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all relative overflow-hidden bg-dot-grid">
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500 text-white font-mono text-[10px] font-black uppercase tracking-wider shadow-xs">
                  <Sparkles className="w-3 h-3" />
                  <span>UPDATE BARU</span>
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  Sprint Planning Engine
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
                  Bikin PRD, Arsitektur Database &amp; Task Lebih Terstruktur
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 mt-1 leading-relaxed font-normal">
                  Tidak ada lagi spekulasi liar. Semua spesifikasi teknis, skema relasi data, dan integrasi API dipetakan sebelum coding dimulai.
                </p>
              </div>

              {/* Interactive Step Timeline Cards */}
              <div className="space-y-2 pt-2">
                {[
                  {
                    step: 1,
                    title: '1. Analisis Kebutuhan Bisnis & Scope PRD',
                    desc: 'Definisi metrik kunci, persona pembeli, dan alur konversi utama.',
                    done: true,
                  },
                  {
                    step: 2,
                    title: '2. Perancangan Skema PostgreSQL & API Contract',
                    desc: 'Relasi foreign keys, indeks performa, dan autentikasi aman JWT.',
                    done: true,
                  },
                  {
                    step: 3,
                    title: '3. Integrasi AI Agent WhatsApp & Webhook Hub',
                    desc: 'RAG retrieval knowledge base produk & auto dispatch tiket customer.',
                    done: activePlanStep >= 2,
                  },
                  {
                    step: 4,
                    title: '4. Testing, CAPI Tracking & Deployment ke Cloudflare',
                    desc: 'Uji beban latency <0.8 detik, verifikasi event purchase, dan live launch.',
                    done: activePlanStep >= 3,
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    onClick={() => setActivePlanStep(item.step)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                      item.step === activePlanStep
                        ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-500 shadow-xs'
                        : 'bg-white/80 dark:bg-zinc-900/60 border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                        item.done
                          ? 'bg-emerald-500 text-white'
                          : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      {item.done ? <Check className="w-3.5 h-3.5" /> : item.step}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-zinc-950 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action Strip */}
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs mt-4">
              <span className="font-mono text-zinc-500 text-[11px] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Format Standar Markdown &amp; PDF</span>
              </span>
              <button
                onClick={() => onWhatsAppInquiry('Konsultasi Perencanaan PRD & Arsitektur')}
                className="px-3.5 py-1.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold text-xs flex items-center gap-1.5 hover:bg-blue-600 transition-colors cursor-pointer"
              >
                <span>Mulai Konsultasi Plan</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* BENTO 2: MULTI-MODEL AI ENGINE (Span 5) - Matches Image 3 "AndalAI" */}
          <div className="lg:col-span-5 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                  <Bot className="w-3 h-3" />
                  <span>AndalAI Multi-Model Engine</span>
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {AI_MODELS[selectedModel].score}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-zinc-950 dark:text-white tracking-tight">
                  Pilih AI Terbaik Sesuai Karakter Masalah
                </h3>
                <p className="text-xs text-zinc-700 dark:text-zinc-300 mt-1 leading-relaxed font-normal">
                  Tidak bergantung pada satu vendor. Kami mengorkestrasi model terkuat di kelasnya untuk efisiensi biaya dan performa maksimal.
                </p>
              </div>

              {/* Model Selector Tabs */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {(Object.keys(AI_MODELS) as Array<keyof typeof AI_MODELS>).map((key) => {
                  const m = AI_MODELS[key];
                  const isSelected = selectedModel === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedModel(key)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 shadow-xs'
                          : 'bg-zinc-50/60 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-zinc-900 dark:text-white">
                          {m.name.split(' ')[0]}
                        </span>
                        {isSelected && <Zap className="w-3 h-3 text-blue-600 fill-blue-600" />}
                      </div>
                      <p className="text-[10px] font-mono text-zinc-500 mt-0.5 truncate">{m.role}</p>
                    </button>
                  );
                })}
              </div>

              {/* Active Model Specification Box */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-xs text-zinc-950 dark:text-white">
                    {AI_MODELS[selectedModel].name}
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {AI_MODELS[selectedModel].badge}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {AI_MODELS[selectedModel].description}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
              <span>Latency: &lt; 400ms</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold">Zero Data Leak Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. SAAS PRICING TABLE (MATCHING NGODINGPAKEAI.COM WITH # PALING WORTH)    */}
      {/* ========================================================================= */}
      <div id="pricing-plans" className="space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 font-mono text-[11px] font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Transparansi Biaya &amp; Paket Investasi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
            Pilihan Paket yang Jelas &amp; Masuk Akal
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Tanpa biaya tersembunyi. Dapatkan website performa tinggi, sistem otomasi, atau solusi bundle lengkap dengan garansi resmi.
          </p>
        </div>

        {/* 3 Pricing Columns - Matching Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch pt-2">
          {/* PLAN 1: STARTER */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <h3 className="font-extrabold text-lg text-zinc-950 dark:text-white">Starter</h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-black text-zinc-950 dark:text-white">Rp 2.5jt</span>
                  <span className="text-xs text-zinc-500 font-mono">/proyek</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-zinc-400 line-through">Rp 3.5jt</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400">
                    28% OFF
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mt-2">
                  Buat yang mulai serius validasi ide &amp; dapat cuan secepat kilat.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                {[
                  'Landing page kilat (<0.8 detik respons)',
                  'Form WhatsApp Click-to-Chat otomatis',
                  'Desain mobile-first & responsive',
                  'Setup Google Analytics 4 & Meta Pixel',
                  'Gratis Domain (.com/.id) & Cloudflare 1 Tahun',
                  'Penyerahan Source Code & Panduan Edit Video',
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onWhatsAppInquiry('Paket Starter Website Kilat', 'Rp 2.5jt')}
              className="w-full py-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-950 dark:text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Pilih Paket Starter
            </button>
          </div>

          {/* PLAN 2: PRO */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <h3 className="font-extrabold text-lg text-zinc-950 dark:text-white">Pro Scaleup</h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-black text-zinc-950 dark:text-white">Rp 5.5jt</span>
                  <span className="text-xs text-zinc-500 font-mono">/proyek</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-zinc-400 line-through">Rp 8.0jt</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400">
                    31% OFF
                  </span>
                </div>
                <p className="text-xs text-zinc-700 dark:text-zinc-300 mt-2 font-normal">
                  Unlimited skala bisnis dengan database PostgreSQL &amp; dashboard.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                {[
                  'Semua fitur pada Paket Starter',
                  'Fullstack Next.js 15 + Database PostgreSQL',
                  'Dashboard Admin / CMS Pengelolaan Data',
                  'Server-Side CAPI Tracking (Anti-Adblocker 100%)',
                  'Notifikasi WhatsApp Pesanan ke Owner & Customer',
                  'Chat langsung dengan Tubagus Fitran untuk bantuan',
                  'Garansi Maintenance & SLA Bugfix 90 Hari',
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onWhatsAppInquiry('Paket Pro Scaleup', 'Rp 5.5jt')}
              className="w-full py-3 rounded-2xl bg-[#1E3A8A] hover:bg-blue-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-md"
            >
              Pilih Paket Pro
            </button>
          </div>

          {/* PLAN 3: BUNDLE PRO + AI AGENT (MATCHES # Paling Worth BADGE FROM IMAGE 2) */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#111319] border-2 border-orange-500 ring-2 ring-orange-500/20 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            {/* # Paling Worth Pill Badge at top right */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-linear-to-r from-orange-500 to-amber-500 text-white font-mono text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span># Paling Worth</span>
              </span>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-100 dark:bg-orange-950 flex items-center justify-center text-orange-600 font-black text-xs">
                    FD
                  </div>
                  <span className="text-zinc-400 font-bold text-xs">+</span>
                  <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-purple-600 font-black text-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-black text-lg text-zinc-950 dark:text-white mt-2">
                  Bundle Pro + AI Agent
                </h3>

                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-black text-zinc-950 dark:text-white">Rp 9.9jt</span>
                  <span className="text-xs text-zinc-500 font-mono">/paket solusi</span>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-zinc-400 line-through">Rp 14.5jt</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400">
                    32% OFF
                  </span>
                </div>

                <p className="text-xs text-zinc-500 mt-2">
                  Dari rencana ke desain &amp; otomasi AI, dua kekuatan besar dalam satu paket investasi.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                {[
                  'Semua fitur pada Paket Pro Scaleup',
                  'AI WhatsApp Customer Care 24/7 (RAG SOP Bisnis)',
                  'Auto-follow up prospek & reminder tagihan',
                  'Infrastruktur Zero-Trust Cloudflare + Docker VPS',
                  'Setup Google Tag Manager + Meta CAPI Backend',
                  'Aktivasi AI Agent & integrasi ke nomor WhatsApp resmi',
                  'Dedicated Priority Support via WhatsApp Pribadi Tubagus Fitran',
                  'Garansi Performa & Update Rutin 6 Bulan Penuh',
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-800 dark:text-zinc-200 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onWhatsAppInquiry('Bundle Pro + AI Agent (# Paling Worth)', 'Rp 9.9jt')}
              className="w-full py-3.5 rounded-2xl bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs transition-all cursor-pointer shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2"
            >
              <span>Ambil Promo Bundle Worth It</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
