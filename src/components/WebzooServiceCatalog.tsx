import React, { useState, useMemo } from 'react';
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
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Check,
  Clock,
  ShieldCheck,
  MessageSquare,
  ChevronRight,
  TrendingUp,
  Layers,
  Calendar,
  Lock,
  Cpu,
  Database,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { ALL_SERVICES_CATALOG, SubServiceItem } from '../data/servicesCatalogData';
import { ServiceDetailView } from './ServiceDetailView';
import { InteractiveFlipbook } from './InteractiveFlipbook';
import { SekawanWebSolutions } from './SekawanWebSolutions';

interface WebzooServiceCatalogProps {
  onWhatsAppInquiry: (serviceName?: string, budget?: string) => void;
  onNavigateHome: () => void;
  initialServiceId?: string | null;
}

export const WebzooServiceCatalog: React.FC<WebzooServiceCatalogProps> = ({
  onWhatsAppInquiry,
  onNavigateHome,
  initialServiceId = null,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(initialServiceId);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('semua');
  const [showFlipbook, setShowFlipbook] = useState<boolean>(false);

  // Active sub-service object
  const selectedService = useMemo(() => {
    if (!selectedServiceId) return null;
    return ALL_SERVICES_CATALOG.find((s) => s.id === selectedServiceId) || null;
  }, [selectedServiceId]);

  // Filtered services
  const filteredServices = useMemo(() => {
    if (activeCategoryFilter === 'semua') return ALL_SERVICES_CATALOG;
    return ALL_SERVICES_CATALOG.filter((s) => s.category === activeCategoryFilter);
  }, [activeCategoryFilter]);

  // Grouped services by category for multi-column mega catalog (Matching Image 2)
  const websiteServices = useMemo(() => ALL_SERVICES_CATALOG.filter((s) => s.category === 'website'), []);
  const aplikasiServices = useMemo(() => ALL_SERVICES_CATALOG.filter((s) => s.category === 'aplikasi'), []);
  const marketingServices = useMemo(() => ALL_SERVICES_CATALOG.filter((s) => s.category === 'marketing'), []);
  const infrastrukturServices = useMemo(() => ALL_SERVICES_CATALOG.filter((s) => s.category === 'infrastruktur'), []);

  // Helper for Lucide icons
  const renderCatalogIcon = (name: string, className = 'w-5 h-5') => {
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
      default:
        return <Sparkles className={className} />;
    }
  };

  // If a specific sub-service is selected, render the dedicated detail page (Matching Image 3)
  if (selectedService) {
    return (
      <ServiceDetailView
        service={selectedService}
        onBack={() => {
          setSelectedServiceId(null);
          if (typeof window !== 'undefined') {
            window.history.pushState(null, '', '/layanan');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onWhatsAppInquiry={onWhatsAppInquiry}
      />
    );
  }

  return (
    <div className="space-y-16 animate-fade-in">
      {/* ========================================================================= */}
      {/* 1. WEBZOO-STYLE ROYAL BLUE HERO (EXACT MATCH TO USER IMAGE 1)             */}
      {/* ========================================================================= */}
      <div className="rounded-3xl bg-linear-to-br from-[#0B3B82] via-[#0F4C81] to-[#1E3A8A] text-white p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
        {/* Subtle background radial glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: Bold Copywriting & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Jasa Pembuatan Website, AI Agent &amp; Aplikasi</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[44px] font-black text-white tracking-tight leading-[1.15]">
              Anda Fokus Akselerasi Bisnis, Kami Bangun Infrastruktur Digitalnya
            </h1>

            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal max-w-xl">
              Sampaikan rencana bisnis Anda di sesi konsultasi gratis. Biarkan tim kami mengeksekusi pembuatan website cepat kilat, AI agent WhatsApp cerdas, dan integrasi sistem andal untuk memastikan performa tetap optimal jangka panjang.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onWhatsAppInquiry('Konsultasi Solusi Infrastruktur Digital')}
                className="px-6 py-3.5 rounded-2xl bg-white text-[#0B3B82] font-black text-xs sm:text-sm flex items-center gap-2.5 shadow-lg hover:bg-blue-50 transition-all cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-[#0B3B82]" />
                <span>Jadwalkan Konsultasi Gratis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#katalog-lengkap"
                className="px-5 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Lihat Portofolio &amp; Layanan</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Live Growth Comparison Card (Exact match to Image 1) */}
          <div className="lg:col-span-5 rounded-2xl bg-white text-zinc-950 p-6 sm:p-7 shadow-2xl border border-white/80 space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-zinc-900 leading-snug">
                  Setelah website &amp; sistem baru berjalan
                </h3>
                <p className="text-xs text-zinc-500">Pertumbuhan calon pelanggan &amp; konversi riil</p>
              </div>
            </div>

            {/* Rising Line Chart Graph with Pulsing Peak Dot */}
            <div className="relative pt-2 pb-1">
              <svg viewBox="0 0 320 120" className="w-full h-28 overflow-visible">
                {/* Dotted threshold divider */}
                <line x1="160" y1="10" x2="160" y2="110" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                
                {/* Before line (flat & low) */}
                <path
                  d="M 10 90 L 50 85 L 90 92 L 130 88 L 160 86"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* After line (surging upwards to high conversion) */}
                <path
                  d="M 160 86 L 190 65 L 220 58 L 260 38 L 305 18"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Glowing peak dot */}
                <circle cx="305" cy="18" r="6" fill="#EF4444" className="animate-ping opacity-75" />
                <circle cx="305" cy="18" r="5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
              </svg>

              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-zinc-400 px-2 pt-1 border-b border-zinc-100 pb-2">
                <span>Sebelum</span>
                <span className="text-blue-600 font-extrabold">Sesudah</span>
                <span className="text-[10px] text-zinc-400">Ilustrasi</span>
              </div>
            </div>

            {/* Feature Comparison Table */}
            <div className="space-y-2.5 text-xs">
              <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block">SEBELUM</span>
                  <span className="text-zinc-600 line-through">Desain pasaran lambat</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-blue-600 font-bold block">SESUDAH</span>
                  <span className="font-bold text-zinc-900 flex items-center gap-1 justify-end">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Sesuai proses bisnis (&lt;0.8s)</span>
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block">SEBELUM</span>
                  <span className="text-zinc-600 line-through">Data prospek tidak terlacak</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-blue-600 font-bold block">SESUDAH</span>
                  <span className="font-bold text-zinc-900 flex items-center gap-1 justify-end">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Tercatat CAPI &amp; GA4</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Tech Logos Bar */}
            <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span className="font-bold text-zinc-700">Tech Stack:</span>
              <span className="text-zinc-500">PostgreSQL • Redis • Docker • Cloudflare</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MULTI-COLUMN MEGA CATALOG MENU (EXACT MATCH TO USER IMAGE 2)            */}
      {/* ========================================================================= */}
      <div id="katalog-lengkap" className="space-y-8 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#1E3A8A] dark:text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Katalog Solusi Lengkap 16 Layanan</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
              Pilih Solusi yang Sesuai dengan Kebutuhan Bisnis Anda
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              Klik setiap layanan untuk melihat rincian spesifikasi, fitur bawaan, deliverable resmi, dan alur pengerjaan lengkap.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'semua', label: 'Semua Solusi' },
              { id: 'website', label: 'Website (5)' },
              { id: 'aplikasi', label: 'Aplikasi (6)' },
              { id: 'marketing', label: 'AI & Marketing (3)' },
              { id: 'infrastruktur', label: 'Infrastruktur (2)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategoryFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategoryFilter === tab.id
                    ? 'bg-[#1E3A8A] text-white shadow-xs'
                    : 'bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-COLUMN MEGA GRID (MATCHING IMAGE 2 EXACT STRUCTURE) */}
        {activeCategoryFilter === 'semua' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {/* COLUMN 1: WEBSITE */}
            <div className="space-y-4 p-5 rounded-3xl bg-zinc-50/70 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                <Globe className="w-4 h-4 text-blue-600" />
                <h3 className="font-mono text-xs font-black uppercase tracking-wider text-zinc-950 dark:text-white">
                  WEBSITE
                </h3>
              </div>

              <div className="space-y-3">
                {websiteServices.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => {
                      setSelectedServiceId(srv.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-3.5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group space-y-1.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                        {renderCatalogIcon(srv.iconName, 'w-3.5 h-3.5')}
                      </div>
                      <h4 className="font-bold text-xs text-zinc-950 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
                        {srv.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-zinc-500 line-clamp-2 leading-relaxed">
                      {srv.tagline}
                    </p>
                    <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-blue-700 dark:text-blue-300 font-bold">
                      <span>{srv.price}</span>
                      <span className="group-hover:translate-x-1 transition-transform">Detail →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 2: APLIKASI */}
            <div className="space-y-4 p-5 rounded-3xl bg-zinc-50/70 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                <AppWindow className="w-4 h-4 text-emerald-600" />
                <h3 className="font-mono text-xs font-black uppercase tracking-wider text-zinc-950 dark:text-white">
                  APLIKASI
                </h3>
              </div>

              <div className="space-y-3">
                {aplikasiServices.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => {
                      setSelectedServiceId(srv.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-3.5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group space-y-1.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                        {renderCatalogIcon(srv.iconName, 'w-3.5 h-3.5')}
                      </div>
                      <h4 className="font-bold text-xs text-zinc-950 dark:text-white group-hover:text-emerald-600 transition-colors leading-tight">
                        {srv.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-zinc-500 line-clamp-2 leading-relaxed">
                      {srv.tagline}
                    </p>
                    <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-emerald-700 dark:text-emerald-300 font-bold">
                      <span>{srv.price}</span>
                      <span className="group-hover:translate-x-1 transition-transform">Detail →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 3: DIGITAL MARKETING & AI */}
            <div className="space-y-4 p-5 rounded-3xl bg-zinc-50/70 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                <Bot className="w-4 h-4 text-purple-600" />
                <h3 className="font-mono text-xs font-black uppercase tracking-wider text-zinc-950 dark:text-white">
                  AI &amp; MARKETING
                </h3>
              </div>

              <div className="space-y-3">
                {marketingServices.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => {
                      setSelectedServiceId(srv.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-3.5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 hover:border-purple-500 hover:shadow-md transition-all cursor-pointer group space-y-1.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-900/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                        {renderCatalogIcon(srv.iconName, 'w-3.5 h-3.5')}
                      </div>
                      <h4 className="font-bold text-xs text-zinc-950 dark:text-white group-hover:text-purple-600 transition-colors leading-tight">
                        {srv.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-zinc-500 line-clamp-2 leading-relaxed">
                      {srv.tagline}
                    </p>
                    <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-purple-700 dark:text-purple-300 font-bold">
                      <span>{srv.price}</span>
                      <span className="group-hover:translate-x-1 transition-transform">Detail →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 4: INFRASTRUKTUR & CLOUD */}
            <div className="space-y-4 p-5 rounded-3xl bg-zinc-50/70 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                <Server className="w-4 h-4 text-amber-600" />
                <h3 className="font-mono text-xs font-black uppercase tracking-wider text-zinc-950 dark:text-white">
                  INFRASTRUKTUR
                </h3>
              </div>

              <div className="space-y-3">
                {infrastrukturServices.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => {
                      setSelectedServiceId(srv.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-3.5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 hover:border-amber-500 hover:shadow-md transition-all cursor-pointer group space-y-1.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900/60 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                        {renderCatalogIcon(srv.iconName, 'w-3.5 h-3.5')}
                      </div>
                      <h4 className="font-bold text-xs text-zinc-950 dark:text-white group-hover:text-amber-600 transition-colors leading-tight">
                        {srv.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-zinc-500 line-clamp-2 leading-relaxed">
                      {srv.tagline}
                    </p>
                    <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-amber-700 dark:text-amber-300 font-bold">
                      <span>{srv.price}</span>
                      <span className="group-hover:translate-x-1 transition-transform">Detail →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Filtered Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                onClick={() => {
                  setSelectedServiceId(srv.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-6 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-[#1E3A8A] shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {renderCatalogIcon(srv.iconName, 'w-5 h-5')}
                    </div>
                    {srv.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-[#1E3A8A] dark:text-blue-300 font-mono text-[10px] font-bold">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-zinc-950 dark:text-white group-hover:text-[#1E3A8A] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                      {srv.tagline}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
                  <span className="font-bold text-zinc-900 dark:text-white font-mono">{srv.price}</span>
                  <span className="text-[#1E3A8A] dark:text-blue-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Lihat Rincian</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3D INTERACTIVE FLIPBOOK EXPANDED VIEW */}
      {showFlipbook && (
        <div className="pt-2 animate-fade-in">
          <InteractiveFlipbook onClose={() => setShowFlipbook(false)} />
        </div>
      )}

      {/* SEKAWAN MEDIA WEB SOLUTIONS & INTERACTIVE BENTO GRID */}
      <SekawanWebSolutions
        onWhatsAppInquiry={onWhatsAppInquiry}
        onOpenFlipbook={() => {
          setShowFlipbook(true);
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }}
      />
    </div>
  );
};
