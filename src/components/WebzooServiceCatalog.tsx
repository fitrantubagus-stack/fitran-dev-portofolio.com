import React, { useState, useMemo, useEffect, useCallback } from 'react';
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
  Flame,
  Store,
  Utensils,
  Stethoscope,
  HeartHandshake,
  Users,
  Factory,
  Truck,
  Percent,
} from 'lucide-react';
import { ALL_SERVICES_CATALOG, SubServiceItem } from '../data/servicesCatalogData';
import { INDUSTRY_SEGMENTS_DATA, IndustrySegment } from '../data/industrySegmentsData';
import { ServiceDetailView, getCanvaGraphicForService } from './ServiceDetailView';
import { ServicePosterVisual } from './ServicePosterVisual';
import { IndustrySegmentView } from './IndustrySegmentView';
import { AutopilotJuaraView } from './AutopilotJuaraView';
import { InteractiveFlipbook } from './InteractiveFlipbook';
import { SekawanWebSolutions } from './SekawanWebSolutions';
import { CertificateLogoMarquee } from './CertificateLogoMarquee';
import { SaaSSolutionsShowcase } from './SaaSSolutionsShowcase';
import { ServiceWorkflowSection } from './ServiceWorkflowSection';

interface WebzooServiceCatalogProps {
  onWhatsAppInquiry: (serviceName?: string, budget?: string) => void;
  onNavigateHome: () => void;
  initialServiceId?: string | null;
  themePrefix?: string;
}

export const WebzooServiceCatalog: React.FC<WebzooServiceCatalogProps> = ({
  onWhatsAppInquiry,
  onNavigateHome,
  initialServiceId = null,
  themePrefix,
}) => {
  // Synchronous State Lazy Initializers (prevents flash & preserves exact sub-page on F5 refresh)
  const [isAutopilotActive, setIsAutopilotActive] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname.toLowerCase();
    const params = new URLSearchParams(window.location.search);
    return (
      path.endsWith('/layanan/autopilot') ||
      path.includes('/autopilot') ||
      params.get('service') === 'autopilot' ||
      params.get('segment') === 'autopilot'
    );
  });

  const [selectedSegmentSlug, setSelectedSegmentSlug] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    const path = window.location.pathname.toLowerCase();
    const params = new URLSearchParams(window.location.search);
    const segmentParam = (params.get('segment') || '').trim().toLowerCase();
    const segmentKeys = Object.keys(INDUSTRY_SEGMENTS_DATA);
    return (
      segmentKeys.find(
        (slug) =>
          path.endsWith(`/layanan/${slug}`) ||
          path.endsWith(`/${slug}`) ||
          path.includes(`/layanan/${slug}`) ||
          segmentParam === slug
      ) || null
    );
  });

  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(() => {
    if (initialServiceId) return initialServiceId;
    if (typeof window === 'undefined') return null;
    const path = window.location.pathname.toLowerCase();
    if (
      path.includes('autopilot') ||
      Object.keys(INDUSTRY_SEGMENTS_DATA).some((s) => path.includes(s))
    ) {
      return null;
    }
    const params = new URLSearchParams(window.location.search);
    const serviceParam = (params.get('service') || '').trim().toLowerCase();
    if (serviceParam) {
      const match = ALL_SERVICES_CATALOG.find(
        (s) =>
          s.id.toLowerCase() === serviceParam ||
          s.id.toLowerCase().replace(/-/g, '') === serviceParam.replace(/-/g, '') ||
          s.id.toLowerCase().includes(serviceParam) ||
          serviceParam.includes(s.id.toLowerCase()) ||
          s.category.toLowerCase() === serviceParam
      );
      return match ? match.id : null;
    }
    return null;
  });

  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('semua');
  const [showFlipbook, setShowFlipbook] = useState<boolean>(false);

  // Derive theme prefix safely
  const currentPrefix = useMemo(() => {
    if (themePrefix) return themePrefix;
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.toLowerCase();
      if (p.startsWith('/corporation')) return '/corporation';
      if (p.startsWith('/portofolio-me')) return '/portofolio-me';
      if (p.startsWith('/profesional')) return '/profesional';
    }
    return '/corporation';
  }, [themePrefix]);

  // Sync initial service from query parameter & handle #katalog-lengkap anchor jump
  const syncServiceFromUrl = useCallback(() => {
    if (typeof window === 'undefined') return;
    const path = window.location.pathname.toLowerCase();
    const params = new URLSearchParams(window.location.search);
    const serviceParam = (params.get('service') || '').trim().toLowerCase();
    const segmentParam = (params.get('segment') || '').trim().toLowerCase();

    // Check autopilot route
    if (
      path.endsWith('/layanan/autopilot') ||
      path.includes('/autopilot') ||
      serviceParam === 'autopilot' ||
      segmentParam === 'autopilot'
    ) {
      setIsAutopilotActive(true);
      setSelectedSegmentSlug(null);
      setSelectedServiceId(null);
      return;
    } else {
      setIsAutopilotActive(false);
    }

    // Check dedicated industry segments route
    const segmentKeys = Object.keys(INDUSTRY_SEGMENTS_DATA);
    const matchedSegment = segmentKeys.find(
      (slug) =>
        path.endsWith(`/layanan/${slug}`) ||
        path.endsWith(`/${slug}`) ||
        path.includes(`/layanan/${slug}`) ||
        segmentParam === slug
    );

    if (matchedSegment) {
      setSelectedSegmentSlug(matchedSegment);
      setSelectedServiceId(null);
      return;
    } else {
      setSelectedSegmentSlug(null);
    }

    if (serviceParam) {
      const match = ALL_SERVICES_CATALOG.find(
        (s) =>
          s.id.toLowerCase() === serviceParam ||
          s.id.toLowerCase().replace(/-/g, '') === serviceParam.replace(/-/g, '') ||
          s.id.toLowerCase().includes(serviceParam) ||
          serviceParam.includes(s.id.toLowerCase()) ||
          s.category.toLowerCase() === serviceParam
      );
      if (match) {
        setSelectedServiceId(match.id);
      }
    } else {
      setSelectedServiceId(null);
    }

    if (window.location.hash === '#katalog-lengkap') {
      setTimeout(() => {
        const el = document.getElementById('katalog-lengkap');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, []);

  useEffect(() => {
    syncServiceFromUrl();
    window.addEventListener('popstate', syncServiceFromUrl);
    window.addEventListener('app-route-change', syncServiceFromUrl);
    return () => {
      window.removeEventListener('popstate', syncServiceFromUrl);
      window.removeEventListener('app-route-change', syncServiceFromUrl);
    };
  }, [syncServiceFromUrl]);

  // Back to main catalog view
  const handleBackToCatalog = () => {
    setSelectedServiceId(null);
    setSelectedSegmentSlug(null);
    setIsAutopilotActive(false);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `${currentPrefix}/layanan`);
      window.dispatchEvent(new Event('app-route-change'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch segment
  const handleSelectSegment = (slug: string) => {
    setSelectedSegmentSlug(slug);
    setIsAutopilotActive(false);
    setSelectedServiceId(null);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `${currentPrefix}/layanan/${slug}`);
      window.dispatchEvent(new Event('app-route-change'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open autopilot
  const handleOpenAutopilot = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsAutopilotActive(true);
    setSelectedSegmentSlug(null);
    setSelectedServiceId(null);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `${currentPrefix}/layanan/autopilot`);
      window.dispatchEvent(new Event('app-route-change'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  // Reusable 16-Solution Catalog Grid Component
  const renderCatalogSection = (
    title = 'Pilih Solusi yang Sesuai dengan Kebutuhan Bisnis Anda',
    subtitle = 'Setiap solusi dikerjakan dengan standar arsitektur industri, deliverable jelas, kode bersih, dan garansi resmi. Klik kartu untuk melihat rincian alur kerja lengkap.'
  ) => (
    <div id="katalog-lengkap" className="space-y-8 pt-4 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#1E3A8A] dark:text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Katalog Solusi Lengkap 16 Layanan Digital</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
            {title}
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'semua', label: 'Semua Solusi (16)' },
            { id: 'website', label: 'Website (5)' },
            { id: 'aplikasi', label: 'Aplikasi (6)' },
            { id: 'marketing', label: 'AI & Marketing (3)' },
            { id: 'infrastruktur', label: 'Infrastruktur (2)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategoryFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategoryFilter === tab.id
                  ? 'bg-[#1E3A8A] text-white shadow-md'
                  : 'bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* SPACIOUS, BALANCED 3-COLUMN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((srv) => {
          const categoryBadgeColor =
            srv.category === 'website'
              ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900/60'
              : srv.category === 'aplikasi'
              ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/60'
              : srv.category === 'marketing'
              ? 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-900/60'
              : 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-900/60';

          const isCurrentlyActive = selectedServiceId === srv.id;

          return (
            <a
              key={srv.id}
              href={`${currentPrefix}/layanan?service=${srv.id}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedServiceId(srv.id);
                setSelectedSegmentSlug(null);
                setIsAutopilotActive(false);
                if (typeof window !== 'undefined') {
                  window.history.pushState(null, '', `${currentPrefix}/layanan?service=${srv.id}`);
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`p-6 rounded-3xl bg-white dark:bg-[#111319] border ${
                isCurrentlyActive
                  ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-lg'
                  : 'border-zinc-200/90 dark:border-zinc-800 hover:border-[#1E3A8A] dark:hover:border-blue-500 shadow-xs hover:shadow-xl'
              } transition-all cursor-pointer group flex flex-col justify-between space-y-5`}
            >
              <div className="space-y-4">
                {/* Distinct Branded Service Poster (Unobstructed, fitran.dev official, click-to-lightbox) */}
                <ServicePosterVisual serviceId={srv.id} category={srv.category} />

                {/* Top Bar: Icon + Category Badge + Terverifikasi */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-center text-[#1E3A8A] dark:text-blue-400 group-hover:scale-105 transition-transform shadow-xs">
                    {renderCatalogIcon(srv.iconName, 'w-6 h-6 stroke-[2.2]')}
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-mono text-[9px] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                      Terverifikasi
                    </span>
                    <span className={`px-2.5 py-1 rounded-full font-mono text-[10px] font-bold border uppercase tracking-wider ${categoryBadgeColor}`}>
                      {srv.category}
                    </span>
                    {srv.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-mono text-[9px] font-bold">
                        {srv.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-black text-lg text-zinc-950 dark:text-white group-hover:text-[#1E3A8A] dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 mt-1.5 leading-relaxed font-normal">
                    {srv.tagline}
                  </p>
                </div>

                {/* Deliverables Checklist (2 bullets) */}
                <div className="space-y-1.5 pt-1 text-xs">
                  {srv.deliverables?.slice(0, 2).map((sec, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1 font-medium">{sec.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer: Price & CTA */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase block">Investasi Mulai</span>
                  <span className="font-extrabold text-xs sm:text-sm text-zinc-950 dark:text-white font-mono">
                    {srv.price}
                  </span>
                </div>

                <span className="text-xs font-bold text-[#1E3A8A] dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Lihat Rincian</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );

  // =========================================================================
  // VIEW A: DEDICATED INOVASI AUTOPILOT JUARA
  // =========================================================================
  if (isAutopilotActive) {
    return (
      <AutopilotJuaraView
        onWhatsAppInquiry={onWhatsAppInquiry}
        onNavigateBack={handleBackToCatalog}
        themePrefix={currentPrefix}
      />
    );
  }

  // =========================================================================
  // VIEW B: DEDICATED INDUSTRY SEGMENTS (KULINER, RETAIL, B2B, KOMUNITAS, YAYASAN, KLINIK, UMKM)
  // =========================================================================
  if (selectedSegmentSlug && INDUSTRY_SEGMENTS_DATA[selectedSegmentSlug]) {
    return (
      <IndustrySegmentView
        segment={INDUSTRY_SEGMENTS_DATA[selectedSegmentSlug]}
        onWhatsAppInquiry={onWhatsAppInquiry}
        onNavigateBack={handleBackToCatalog}
        onSelectSegment={handleSelectSegment}
        themePrefix={currentPrefix}
      />
    );
  }

  // =========================================================================
  // VIEW C: DEDICATED 16-SUB-SERVICE DETAIL VIEW
  // =========================================================================
  if (selectedService) {
    return (
      <div className="space-y-16 animate-fade-in">
        <ServiceDetailView
          service={selectedService}
          onBack={handleBackToCatalog}
          onWhatsAppInquiry={onWhatsAppInquiry}
          themePrefix={currentPrefix}
        />

        {/* 16-SOLUTION CATALOG GRID BENEATH DETAIL VIEW */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
          {renderCatalogSection(
            'Jelajahi 15 Solusi Digital Lainnya',
            'Bandingkan alur kerja, spesifikasi teknis, dan estimasi waktu untuk solusi bisnis lainnya. Klik kartu untuk membuka detail solusi.'
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW D: DEFAULT OVERVIEW (SERVICES HOMEPAGE HUB)
  // =========================================================================
  const industrySegmentCards = [
    {
      slug: 'bisnis-kuliner',
      title: 'Bisnis Kuliner & F&B',
      desc: 'Resto, Kafe, Cloud Kitchen. Pesan delivery mandiri ke WA, menu QR meja, 0% komisi ojol.',
      badge: 'F&B & Kafe',
      icon: Utensils,
      color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200',
    },
    {
      slug: 'retail-lokal',
      title: 'Retail & Toko Online',
      desc: 'Toko Fashion, Distro, Gadget. Hitung ongkir otomatis JNE/SiCepat & checkout WA rapi.',
      badge: 'Retail Online',
      icon: Store,
      color: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-blue-200',
    },
    {
      slug: 'manufaktur-b2b',
      title: 'Manufaktur & B2B',
      desc: 'Pabrik & Supplier Grosir. Portofolio ISO, formulir RFQ tender & download datasheet teknis.',
      badge: 'Pabrik & B2B',
      icon: Factory,
      color: 'text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 border-zinc-200',
    },
    {
      slug: 'komunitas',
      title: 'Komunitas & Asosiasi',
      desc: 'Klub Hobi & Profesi. Portal registrasi mandiri, KTA digital ber-QR Code & iuran QRIS.',
      badge: 'Komunitas',
      icon: Users,
      color: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 border-purple-200',
    },
    {
      slug: 'yayasan',
      title: 'Yayasan & Filantropi',
      desc: 'Panti, Pesantren & Lembaga Sosial. Donasi QRIS instan, 3D flipbook laporan tahunan.',
      badge: 'Sosial & Amal',
      icon: HeartHandshake,
      color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200',
    },
    {
      slug: 'klinik-kesehatan',
      title: 'Klinik & Dokter Gigi',
      desc: 'Klinik Pratama & Medis. Jadwal dokter real-time, booking online & pengingat WA H-1.',
      badge: 'Medis & Dental',
      icon: Stethoscope,
      color: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border-teal-200',
    },
    {
      slug: 'umkm',
      title: 'UMKM Indonesia',
      desc: 'Usaha Mikro & Menengah Seluruh Indonesia. Go Digital dari nol, website kilat <0.8s, Maps terverifikasi.',
      badge: 'UMKM Indonesia',
      icon: ShoppingBag,
      color: 'text-lime-700 dark:text-lime-400 bg-lime-50 dark:bg-lime-950/60 border-lime-200',
    },
  ];

  return (
    <div className="space-y-16 animate-fade-in">
      {/* ========================================================================= */}
      {/* 1. WEBZOO-STYLE ROYAL BLUE HERO                                           */}
      {/* ========================================================================= */}
      <div className="rounded-3xl bg-linear-to-br from-[#0B3B82] via-[#0F4C81] to-[#1E3A8A] text-white p-6 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
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

          {/* Right Column: Interactive Live Growth Comparison Card */}
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
                <line x1="160" y1="10" x2="160" y2="110" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                <path
                  d="M 10 90 L 50 85 L 90 92 L 130 88 L 160 86"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 160 86 L 190 65 L 220 58 L 260 38 L 305 18"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
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
      {/* 1.5 CERTIFICATE & PARTNER LOGO MARQUEE                                    */}
      {/* ========================================================================= */}
      <div className="py-2">
        <CertificateLogoMarquee
          title="EKOSISTEM & LISENSI RESMI TERVERIFIKASI"
          subtitle="Teknologi dan kredensial resmi Google, AWS, Meta, NVIDIA, Perpusnas, dan Anthropic"
        />
      </div>

      {/* ========================================================================= */}
      {/* 1.6 2 KARTU ANIMASI SKEMA VEKTOR KHUSUS /LAYANAN                          */}
      {/* ========================================================================= */}
      <SaaSSolutionsShowcase onWhatsAppInquiry={onWhatsAppInquiry} mode="cards-only" />

      {/* ========================================================================= */}
      {/* 1.8 HIGH-TECH 3D WORKFLOW & ROADMAP INFOGRAPHIC SHOWCASE                   */}
      {/* ========================================================================= */}
      <ServiceWorkflowSection onWhatsAppInquiry={onWhatsAppInquiry} />

      {/* ========================================================================= */}
      {/* 1.9 INOVASI SPESIAL: SISTEM BISNIS AUTOPILOT JUARA (DUCOK & PUCOK STYLE)  */}
      {/* ========================================================================= */}
      <div className="rounded-3xl bg-linear-to-br from-[#84CC16] via-[#65A30D] to-[#4D7C0F] text-slate-950 p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-yellow-300/20 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-lime-400 font-mono text-xs font-black">
                <Flame className="w-3.5 h-3.5 fill-lime-400" />
                <span>INOVASI SPESIAL 2026</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/90 text-lime-950 font-mono text-xs font-black">
                Formula Ducok &amp; Pucok Juara
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              Sistem Bisnis Digital Autopilot Juara: Penjualan Masuk Otomatis Tanpa Bikin Pusing!
            </h2>

            <p className="text-xs sm:text-sm text-slate-900/90 font-medium leading-relaxed max-w-2xl">
              Integrasi cerdas website kilat, AI Customer Service WhatsApp 24 jam nonstop yang memahami katalog Anda, serta sistem pesanan mandiri tanpa potongan komisi ojol 20-30%. Beli sekali, 100% jadi hak milik Anda selamanya.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={handleOpenAutopilot}
                className="px-5 py-3 rounded-2xl bg-black hover:bg-zinc-900 text-lime-300 font-black text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer transition-all shadow-md"
              >
                <span>Buka Halaman Autopilot Juara</span>
                <ArrowRight className="w-4 h-4 text-lime-400" />
              </button>

              <span className="text-xs font-bold text-slate-950">
                ✓ 24/7 AI Closing • ✓ 0% Fee Marketplace • ✓ 100% Hak Milik
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl bg-white/90 backdrop-blur-md p-5 border border-white/80 space-y-3 shadow-md">
            <span className="text-[10px] font-mono uppercase font-bold text-lime-800 block">Efisiensi Riil</span>
            <div className="font-mono text-2xl font-black text-slate-950">~105 Jam / Bln</div>
            <p className="text-xs text-slate-700">
              Waktu yang diselamatkan dari kelelahan membalas ratusan chat manual setiap hari.
            </p>
            <div className="pt-2 border-t border-lime-200 flex items-center justify-between text-xs font-bold text-lime-900">
              <span>Status Sistem:</span>
              <span className="flex items-center gap-1 text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Siap Diintegrasikan</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1.95 SOLUSI KHUSUS SESUAI SEGMEN INDUSTRI & UMKM                           */}
      {/* ========================================================================= */}
      <div className="space-y-6 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#1E3A8A] dark:text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
              <Store className="w-3.5 h-3.5" />
              <span>Solusi Spesifik 7 Segmen Bidang Usaha</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white">
              Pilih Halaman Khusus Sesuai Bidang Industri Anda
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              Setiap industri memiliki alur kerja unik. Klik kartu di bawah untuk membuka halaman solusi mendalam yang dirancang presisi untuk model bisnis Anda.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {industrySegmentCards.map((seg) => {
            const Icon = seg.icon;
            return (
              <a
                key={seg.slug}
                href={`${currentPrefix}/layanan/${seg.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectSegment(seg.slug);
                }}
                className="p-5 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 hover:border-[#1E3A8A] dark:hover:border-blue-500 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between space-y-4 cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${seg.color} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {seg.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-zinc-950 dark:text-white group-hover:text-[#1E3A8A] dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {seg.title}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed font-normal">
                      {seg.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-[#1E3A8A] dark:text-blue-400">
                  <span>Buka Halaman Khusus</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. SPACIOUS BALANCED 3-COLUMN SERVICES CATALOG (16 SOLUSI DIGITAL)        */}
      {/* ========================================================================= */}
      {renderCatalogSection(
        'Pilih Solusi yang Sesuai dengan Kebutuhan Bisnis Anda',
        'Setiap solusi dikerjakan dengan standar arsitektur industri, deliverable jelas, kode bersih, dan garansi resmi. Klik kartu untuk melihat rincian alur kerja lengkap.'
      )}

      {/* ========================================================================= */}
      {/* 2.5 SAAS PRICING TABLE                                                    */}
      {/* ========================================================================= */}
      <SaaSSolutionsShowcase onWhatsAppInquiry={onWhatsAppInquiry} mode="pricing-only" />

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
