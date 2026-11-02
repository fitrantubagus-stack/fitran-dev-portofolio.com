import React from 'react';
import {
  Globe,
  Code2,
  Building2,
  ShoppingBag,
  MousePointerClick,
  AppWindow,
  Monitor,
  Smartphone,
  Boxes,
  Cable,
  LayoutDashboard,
  Bot,
  Target,
  Search,
  Server,
  Workflow,
  Languages,
  LayoutGrid,
  ShieldCheck,
  Gauge,
  Zap,
  Check,
  ArrowRight,
  ChevronLeft,
  MessageSquare,
  Clock,
  Sparkles,
  Lock,
  Calendar,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { SubServiceItem } from '../data/servicesCatalogData';

interface ServiceDetailViewProps {
  service: SubServiceItem;
  onBack: () => void;
  onWhatsAppInquiry: (serviceName?: string, budget?: string) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onBack,
  onWhatsAppInquiry,
}) => {
  // Defensive fallbacks in case service is undefined or partially loaded
  if (!service) {
    return (
      <div id="katalog-lengkap" className="p-8 text-center space-y-4">
        <p className="text-zinc-600 dark:text-zinc-400">Layanan tidak ditemukan atau sedang diperbarui.</p>
        <button
          onClick={onBack}
          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
        >
          Kembali ke Katalog
        </button>
      </div>
    );
  }

  const standardFeatures = service.standardFeatures || [];
  const deliverables = service.deliverables || [];
  const workflow = service.workflow || [];
  const techStack = service.techStack || [];
  const faqs = service.faqs || [];

  // Helper to render icon based on name
  const renderIcon = (name: string, className = 'w-5 h-5') => {
    switch (name) {
      case 'Globe':
        return <Globe className={className} />;
      case 'Code2':
        return <Code2 className={className} />;
      case 'Building2':
        return <Building2 className={className} />;
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'MousePointerClick':
        return <MousePointerClick className={className} />;
      case 'AppWindow':
        return <AppWindow className={className} />;
      case 'Monitor':
        return <Monitor className={className} />;
      case 'Smartphone':
        return <Smartphone className={className} />;
      case 'Boxes':
        return <Boxes className={className} />;
      case 'Cable':
        return <Cable className={className} />;
      case 'LayoutDashboard':
        return <LayoutDashboard className={className} />;
      case 'Bot':
        return <Bot className={className} />;
      case 'Target':
        return <Target className={className} />;
      case 'Search':
        return <Search className={className} />;
      case 'Server':
        return <Server className={className} />;
      case 'Workflow':
        return <Workflow className={className} />;
      case 'Gauge':
        return <Gauge className={className} />;
      case 'Languages':
        return <Languages className={className} />;
      case 'LayoutGrid':
        return <LayoutGrid className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <div id="katalog-lengkap" className="space-y-12 animate-fade-in scroll-mt-24">
      {/* 1. TOP BREADCRUMB & BACK ACTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-5">
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500">
          <span className="hover:underline cursor-pointer" onClick={onBack}>
            Beranda
          </span>
          <span>/</span>
          <span className="hover:underline cursor-pointer" onClick={onBack}>
            Layanan
          </span>
          <span>/</span>
          <span className="text-[#1E3A8A] dark:text-blue-400 font-semibold">{service.categoryLabel}</span>
          <span>/</span>
          <span className="text-zinc-950 dark:text-white font-bold truncate max-w-xs">{service.title}</span>
        </nav>

        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-[#111319] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-bold text-zinc-800 dark:text-zinc-200 transition-all cursor-pointer self-start sm:self-auto"
        >
          <ChevronLeft className="w-4 h-4 text-zinc-500" />
          <span>Kembali ke Semua Layanan</span>
        </button>
      </div>

      {/* 2. SUB-SERVICE HERO SECTION */}
      <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-br from-blue-900 via-[#1E3A8A] to-[#0A2540] text-white shadow-xl relative overflow-hidden">
        {/* Background glow circle */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-5 relative z-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
              {renderIcon(service.iconName, 'w-3.5 h-3.5 text-blue-300')}
              <span>{service.categoryLabel}</span>
            </span>

            {service.badge && (
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-mono text-[11px] font-bold">
                {service.badge}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal">
            {service.tagline}
          </p>

          <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed pt-1">
            {service.overview}
          </p>

          {/* Price & Duration HUD */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <div className="px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-[10px] font-mono uppercase text-blue-200 block">Estimasi Investasi</span>
              <span className="text-lg font-black text-white">{service.price}</span>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-[10px] font-mono uppercase text-blue-200 block">Estimasi Waktu</span>
              <span className="text-lg font-black text-white flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-300" />
                <span>{service.duration}</span>
              </span>
            </div>

            <button
              onClick={() => onWhatsAppInquiry(service.title, service.price)}
              className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm flex items-center gap-2 shadow-lg hover:shadow-emerald-500/25 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konsultasi Layanan Ini via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. SECTION: YANG SELALU ADA DI SETIAP SOLUSI BUATAN KAMI (EXACT MATCH TO USER IMAGE 3) */}
      <div className="space-y-6 pt-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
            Yang selalu ada di setiap website &amp; solusi buatan kami
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
            Semua ini sudah termasuk di setiap proyek, tanpa biaya tambahan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 6 Standard Feature Cards with clean vector icons */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {standardFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-xs space-y-3 hover:border-blue-400/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-[#1E3A8A] dark:text-blue-300 shrink-0">
                  {renderIcon(feat.iconName, 'w-5 h-5 text-blue-600 dark:text-blue-400')}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-zinc-950 dark:text-white leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Webzoo-style Mockup Illustration with Feature Pills (Matches Image 3) */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-linear-to-b from-blue-50/70 via-sky-50/50 to-white dark:from-zinc-900 dark:via-zinc-900/90 dark:to-[#111319] border border-blue-200 dark:border-zinc-800 shadow-sm space-y-5">
            {/* Browser Frame Header */}
            <div className="rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-4 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono text-zinc-500">
                  https://{service.id}.fitran.dev
                </div>
              </div>

              {/* Wireframe Mockup Lines */}
              <div className="space-y-2.5 py-2">
                <div className="h-4 bg-blue-600 rounded-md w-3/4" />
                <div className="h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-md w-full" />
                <div className="h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-md w-5/6" />

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="h-14 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    <span className="text-[10px] font-mono text-zinc-400 font-bold">&lt;0.8s</span>
                  </div>
                  <div className="h-14 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    <span className="text-[10px] font-mono text-emerald-600 font-bold">100% SLA</span>
                  </div>
                  <div className="h-14 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    <span className="text-[10px] font-mono text-blue-600 font-bold">SSL A+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Badges Under Mockup (Exact match to Image 3 pill row) */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 shadow-2xs">
                <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                <span>Cepat di ponsel</span>
              </span>

              <span className="px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 shadow-2xs">
                <Search className="w-3.5 h-3.5 text-blue-600" />
                <span>SEO teknis</span>
              </span>

              <span className="px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 shadow-2xs">
                <Lock className="w-3.5 h-3.5 text-blue-600" />
                <span>SSL dan backup</span>
              </span>

              <span className="px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>Indonesia dan Inggris</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MODUL & CAKUPAN DELIVERABLES LENGKAP */}
      <div className="space-y-6 pt-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
            Rincian Deliverables &amp; Spesifikasi Teknis
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
            Semua komponen yang Anda terima tertulis jelas dalam kontrak kerja tanpa biaya siluman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliverables.map((sec, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-4"
            >
              <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-3">
                <span className="w-6 h-6 rounded-md bg-[#1E3A8A] text-white flex items-center justify-center font-mono text-xs font-bold">
                  {idx + 1}
                </span>
                <h3 className="font-bold text-base text-zinc-950 dark:text-white">{sec.title}</h3>
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                {sec.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 5. WORKFLOW & TAHAP PENGERJAAN */}
      <div className="space-y-6 pt-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
            Alur Pengerjaan 4 Tahap Terstruktur
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
            Proses kerja transparan dengan progres harian yang dapat Anda pantau setiap saat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workflow.map((stage) => (
            <div
              key={stage.step}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 space-y-3 relative"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#1E3A8A] dark:text-blue-400">
                  Tahap 0{stage.step}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {stage.duration}
                </span>
              </div>
              <h4 className="font-bold text-sm text-zinc-950 dark:text-white">{stage.title}</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. TEKNOLOGI STACK */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-zinc-950 dark:text-white">Teknologi &amp; Framework yang Digunakan:</h4>
          <p className="text-xs text-zinc-500 mt-0.5">Standar industri global, bukan software usang atau plugin rentan.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 7. FAQ KHUSUS LAYANAN INI */}
      <div className="space-y-4 pt-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
            Jawaban lugas seputar proses pengerjaan, kepemilikan kode, dan garansi.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-2"
            >
              <h4 className="font-bold text-sm text-zinc-950 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{faq.question}</span>
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 8. BOTTOM GROUNDED ACTION BANNER */}
      <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-r from-blue-50/90 via-sky-50/70 to-emerald-50/90 dark:from-zinc-900 dark:via-[#111319] dark:to-zinc-900 border-2 border-blue-200 dark:border-blue-900 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 max-w-xl">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-blue-400">
            KONSULTASI TANPA KOMITMEN
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white">
            Siap Membangun {service.title} untuk Bisnis Anda?
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Diskusikan kebutuhan spesifik Anda langsung dengan Tubagus Fitran. Dapatkan estimasi durasi dan solusi arsitektur terbaik secara gratis.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => onWhatsAppInquiry(service.title, service.price)}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat WhatsApp Sekarang</span>
          </button>
          <button
            onClick={onBack}
            className="px-5 py-3 rounded-xl bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 font-bold text-xs hover:bg-zinc-50 transition-colors cursor-pointer"
          >
            Lihat Layanan Lainnya
          </button>
        </div>
      </div>
    </div>
  );
};
