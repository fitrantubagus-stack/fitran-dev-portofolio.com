import React, { useState } from 'react';
import { IndustrySegment, INDUSTRY_SEGMENTS_DATA } from '../data/industrySegmentsData';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  HelpCircle,
  Layers,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Zap,
  TrendingUp,
  Percent,
  UserX,
  QrCode,
  ShoppingBag,
  CalendarCheck,
  Database,
  CreditCard,
  Truck,
  Boxes,
  Share2,
  BadgePercent,
  Calculator,
  ShieldAlert,
  Search,
  FileSpreadsheet,
  Award,
  FileText,
  FileX,
  Building2,
  UserCheck,
  Calendar,
  BookOpen,
  IdCard,
  Megaphone,
  Activity,
  FileCheck,
  HeartHandshake,
  Users,
  CalendarX,
  MapPin,
  Lock,
  Store,
  MessageCircle,
  ShieldX,
  DollarSign,
  Smartphone,
} from 'lucide-react';

interface IndustrySegmentViewProps {
  segment: IndustrySegment;
  onWhatsAppInquiry: (serviceName?: string, budget?: string) => void;
  onNavigateBack: () => void;
  onSelectSegment: (slug: string) => void;
  themePrefix?: string;
}

export const IndustrySegmentView: React.FC<IndustrySegmentViewProps> = ({
  segment,
  onWhatsAppInquiry,
  onNavigateBack,
  onSelectSegment,
  themePrefix = '/corporation',
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Helper to dynamically render vector icons
  const renderVectorIcon = (name: string, className = 'w-5 h-5') => {
    switch (name) {
      case 'Percent':
      case 'BadgePercent':
        return <Percent className={className} />;
      case 'Clock':
        return <Clock className={className} />;
      case 'UserX':
        return <UserX className={className} />;
      case 'PhoneCall':
        return <PhoneCall className={className} />;
      case 'QrCode':
        return <QrCode className={className} />;
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'CalendarCheck':
        return <CalendarCheck className={className} />;
      case 'Database':
        return <Database className={className} />;
      case 'CreditCard':
        return <CreditCard className={className} />;
      case 'Truck':
        return <Truck className={className} />;
      case 'Boxes':
        return <Boxes className={className} />;
      case 'Share2':
        return <Share2 className={className} />;
      case 'Calculator':
        return <Calculator className={className} />;
      case 'ShieldAlert':
      case 'ShieldX':
        return <ShieldAlert className={className} />;
      case 'Search':
        return <Search className={className} />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className={className} />;
      case 'Award':
        return <Award className={className} />;
      case 'FileText':
      case 'FileX':
        return <FileText className={className} />;
      case 'Building2':
        return <Building2 className={className} />;
      case 'UserCheck':
        return <UserCheck className={className} />;
      case 'Calendar':
        return <Calendar className={className} />;
      case 'BookOpen':
        return <BookOpen className={className} />;
      case 'IdCard':
        return <IdCard className={className} />;
      case 'Megaphone':
        return <Megaphone className={className} />;
      case 'Activity':
        return <Activity className={className} />;
      case 'FileCheck':
        return <FileCheck className={className} />;
      case 'HeartHandshake':
        return <HeartHandshake className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'CalendarX':
        return <CalendarX className={className} />;
      case 'MapPin':
        return <MapPin className={className} />;
      case 'Lock':
        return <Lock className={className} />;
      case 'Store':
        return <Store className={className} />;
      case 'MessageCircle':
        return <MessageCircle className={className} />;
      case 'DollarSign':
        return <DollarSign className={className} />;
      case 'Smartphone':
        return <Smartphone className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const allSegmentsList = [
    { slug: 'bisnis-kuliner', label: 'Bisnis Kuliner (F&B)' },
    { slug: 'retail-lokal', label: 'Retail & Toko Online' },
    { slug: 'manufaktur-b2b', label: 'Manufaktur & B2B' },
    { slug: 'komunitas', label: 'Komunitas & Asosiasi' },
    { slug: 'yayasan', label: 'Yayasan & Filantropi' },
    { slug: 'klinik-kesehatan', label: 'Klinik & Kesehatan' },
    { slug: 'umkm', label: 'Sentra UMKM Juara' },
  ];

  return (
    <div className="space-y-14 animate-fade-in pb-16">
      {/* ========================================================================= */}
      {/* 1. TOP BREADCRUMB & BACK BUTTON                                           */}
      {/* ========================================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <button
          onClick={onNavigateBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-[#1E3A8A] dark:hover:text-blue-400 transition-colors cursor-pointer group"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Semua Layanan</span>
        </button>

        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <a href={`${themePrefix}`} className="hover:underline">Beranda</a>
          <span>/</span>
          <a href={`${themePrefix}/layanan`} className="hover:underline">Layanan</a>
          <span>/</span>
          <span className="text-[#1E3A8A] dark:text-blue-400 font-bold">{segment.categoryBadge}</span>
        </nav>
      </div>

      {/* ========================================================================= */}
      {/* 2. INDUSTRY SEGMENT QUICK SWITCHER TABS                                   */}
      {/* ========================================================================= */}
      <div className="space-y-2">
        <span className="text-[11px] font-mono uppercase font-bold text-zinc-500 dark:text-zinc-400 block">
          Pilih Segmen Industri:
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {allSegmentsList.map((item) => {
            const isActive = item.slug === segment.slug;
            return (
              <button
                key={item.slug}
                onClick={() => onSelectSegment(item.slug)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1E3A8A] text-white shadow-xs'
                    : 'bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <a
            href={`${themePrefix}/layanan/autopilot`}
            className="px-3.5 py-1.5 rounded-full text-xs font-black bg-lime-400 text-black border border-lime-500 hover:bg-lime-300 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            <span>Inovasi Autopilot</span>
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. HERO: DEDICATED INDUSTRY SHOWCASE (WITH NATURAL AUTHENTIC PHOTO)       */}
      {/* ========================================================================= */}
      <div className="rounded-3xl bg-linear-to-br from-[#0B3B82] via-[#0F4C81] to-[#1E3A8A] text-white p-6 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
        {/* Ambient subtle glow */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: Copywriting & High Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{segment.categoryBadge}</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-mono font-semibold">
                {segment.targetSubtitle}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[42px] font-black text-white tracking-tight leading-[1.16]">
              {segment.title}
            </h1>

            <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed max-w-xl">
              {segment.summary}
            </p>

            {/* ROI Highlight Card */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-start gap-4 max-w-xl">
              <div className="w-12 h-12 rounded-xl bg-white text-[#0B3B82] flex items-center justify-center font-black font-mono text-base shrink-0 shadow-xs">
                {segment.roiHighlight.stat}
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-mono font-bold text-blue-200 uppercase tracking-wide">
                  {segment.roiHighlight.label}
                </span>
                <p className="text-xs text-white/90 leading-relaxed font-normal">
                  {segment.roiHighlight.explanation}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() =>
                  onWhatsAppInquiry(`Halo mas Fitran, saya ingin konsultasi pembuatan solusi website untuk ${segment.title}!`)
                }
                className="px-6 py-3.5 rounded-2xl bg-white text-[#0B3B82] font-black text-xs sm:text-sm flex items-center gap-2.5 shadow-lg hover:bg-blue-50 transition-all cursor-pointer group"
              >
                <PhoneCall className="w-4 h-4 text-[#0B3B82]" />
                <span>Konsultasi Proyek Ini Gratis</span>
                <ArrowRight className="w-4 h-4 text-[#0B3B82] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#paket-investasi"
                className="px-5 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Lihat Paket &amp; Investasi</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Real authentic user photo (Zero text inside image) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white">
              <img
                src={segment.heroPhoto}
                alt={segment.photoAlt}
                loading="lazy"
                decoding="async"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold mb-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Solusi Terverifikasi</span>
                </div>
                <p className="text-xs text-zinc-200 font-normal">
                  {segment.heroTagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. PAIN POINTS VS SOLUTIONS (TANTANGAN BISNIS & JALAN KELUAR)             */}
      {/* ========================================================================= */}
      <div className="space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-mono text-xs font-bold uppercase">
            <span>Tantangan Lapangan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white">
            Masalah yang Sering Menghambat Pertumbuhan
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Kendala operasional dan finansial nyata yang dialami pelaku industri sebelum beralih ke sistem mandiri.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {segment.painPoints.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-red-200/80 dark:border-red-900/40 space-y-3 shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center">
                {renderVectorIcon(item.iconName, 'w-5 h-5')}
              </div>
              <h3 className="font-bold text-sm text-zinc-950 dark:text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. DEDICATED SOLUTIONS WITH MEASURABLE METRICS                            */}
      {/* ========================================================================= */}
      <div className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-mono text-xs font-bold uppercase">
            <span>Solusi Rekayasa Fitran Dev</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white">
            Transformasi Digital Terukur untuk Hasil Nyata
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Setiap fitur dibangun dengan metrik keberhasilan yang jelas dan berdampak langsung pada operasional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {segment.solutions.map((sol, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-[#1E3A8A] dark:hover:border-blue-500 shadow-xs hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-[#1E3A8A] dark:text-blue-400 flex items-center justify-center shadow-xs">
                  {renderVectorIcon(sol.iconName, 'w-6 h-6')}
                </div>
                <h3 className="font-bold text-base text-zinc-950 dark:text-white leading-snug">
                  {sol.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {sol.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800">
                <span className="text-[10px] font-mono uppercase text-zinc-400 block font-bold">Dampak Terukur:</span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 leading-tight block mt-0.5">
                  ✓ {sol.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. KEY FEATURES & WORKFLOW ROADMAP                                        */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left: Key Features Bento */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-xl font-black text-zinc-950 dark:text-white">
            Fitur Kunci yang Tersemat di Sistem Anda
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {segment.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-[10px] font-bold uppercase">
                    {feat.tag}
                  </span>
                  {renderVectorIcon(feat.iconName, 'w-4 h-4 text-[#1E3A8A] dark:text-blue-400')}
                </div>
                <h4 className="font-bold text-sm text-zinc-950 dark:text-white leading-snug">
                  {feat.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 4-Step Engineering Pipeline */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-xl font-black text-zinc-950 dark:text-white">
            Tahapan Pengerjaan Terstruktur (SLA Jelas)
          </h3>
          <div className="space-y-3">
            {segment.workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 flex items-start gap-4 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white font-mono font-black text-sm flex items-center justify-center shrink-0">
                  {step.step}
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-sm text-zinc-950 dark:text-white truncate">
                      {step.title}
                    </h4>
                    <span className="font-mono text-[11px] font-bold text-blue-600 dark:text-blue-400 shrink-0">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 7. DELIVERABLES & TECH STACK BADGES                                      */}
      {/* ========================================================================= */}
      <div className="p-6 sm:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div>
            <h3 className="text-lg font-black text-zinc-950 dark:text-white">
              Deliverable Resmi yang Anda Terima
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Semua kepemilikan kode, domain, panduan operasional, dan garansi resmi diserahterimakan seutuhnya.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
            <span className="text-zinc-400 font-bold">Tech:</span>
            {segment.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {segment.deliverables.map((group, idx) => (
            <div key={idx} className="space-y-3">
              <span className="font-mono text-xs font-bold text-[#1E3A8A] dark:text-blue-400 uppercase tracking-wider block">
                {group.title}
              </span>
              <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                {group.items.map((it, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 8. TRANSPARENT PRICING TIERS                                              */}
      {/* ========================================================================= */}
      <div id="paket-investasi" className="space-y-6 pt-6 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-bold uppercase">
            <span>Paket Investasi &amp; Harga Transparan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white">
            Pilih Skema Paling Sesuai Tahapan Usaha Anda
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Biaya pasti, tanpa biaya tersembunyi, dan 100% hak milik penuh tanpa langganan wajib.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segment.pricingTiers.map((tier, idx) => {
            const isPopular = idx === 1;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111319] border ${
                  isPopular
                    ? 'border-[#1E3A8A] dark:border-blue-500 ring-2 ring-blue-500/20 shadow-xl'
                    : 'border-zinc-200 dark:border-zinc-800 shadow-xs'
                } flex flex-col justify-between space-y-6 relative overflow-hidden`}
              >
                {isPopular && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-[#1E3A8A] text-white font-mono text-[10px] font-black uppercase rounded-bl-xl">
                    Paling Diminati
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    {tier.badge && (
                      <span className="text-[10px] font-mono font-bold uppercase text-blue-600 dark:text-blue-400 block mb-1">
                        {tier.badge}
                      </span>
                    )}
                    <h3 className="text-xl font-black text-zinc-950 dark:text-white leading-snug">
                      {tier.name}
                    </h3>
                  </div>

                  <div className="pt-1">
                    <span className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white font-mono">
                      {tier.price}
                    </span>
                    <span className="text-xs text-zinc-500 block">Investasi awal siap pakai</span>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 space-y-2 text-xs">
                    {tier.features.map((f, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() =>
                    onWhatsAppInquiry(
                      `Halo mas Fitran, saya ingin memesan ${tier.name} seharga ${tier.price} untuk ${segment.title}!`
                    )
                  }
                  className={`w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    isPopular
                      ? 'bg-[#1E3A8A] hover:bg-blue-900 text-white shadow-md'
                      : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-950 dark:text-white'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{tier.ctaText}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 9. INTERACTIVE FAQ ACCORDION                                              */}
      {/* ========================================================================= */}
      <div className="space-y-4 pt-4 max-w-3xl mx-auto">
        <h3 className="text-xl font-black text-zinc-950 dark:text-white text-center">
          Pertanyaan Seputar {segment.title}
        </h3>

        <div className="space-y-3">
          {segment.faq.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 overflow-hidden"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 hover:text-[#1E3A8A] dark:hover:text-blue-400 cursor-pointer"
              >
                <span>{item.q}</span>
                <ChevronRight
                  className={`w-4 h-4 text-zinc-400 transition-transform ${
                    activeFaq === idx ? 'rotate-90 text-[#1E3A8A] dark:text-blue-400' : ''
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-4 pb-4 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/60 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 10. BOTTOM CONSULTATION BANNER                                            */}
      {/* ========================================================================= */}
      <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-br from-zinc-900 to-black text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-zinc-800">
        <div className="space-y-2 text-center sm:text-left">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-[10px] font-bold uppercase">
            Konsultasi Gratis
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-white">
            Punya Kebutuhan Khusus untuk Usaha Anda?
          </h4>
          <p className="text-xs text-zinc-400 max-w-xl">
            Ceritakan spesifikasi unik Anda. Kami siap merancang arsitektur kustom yang pas dengan alur kerja tim Anda.
          </p>
        </div>

        <button
          onClick={() =>
            onWhatsAppInquiry(`Halo mas Fitran, saya ingin konsultasi kebutuhan kustom untuk segmen ${segment.title}!`)
          }
          className="px-6 py-3.5 rounded-2xl bg-white text-zinc-950 font-black text-xs sm:text-sm flex items-center gap-2 hover:bg-zinc-100 transition-all shadow-lg shrink-0 cursor-pointer"
        >
          <PhoneCall className="w-4 h-4 text-emerald-600" />
          <span>Hubungi via WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
