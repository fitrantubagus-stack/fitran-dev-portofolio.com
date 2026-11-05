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
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Phone,
  Maximize2,
  Zap,
  TrendingUp,
  Flame,
  Check,
  Gauge,
  Layers,
  Database,
  Lock,
} from 'lucide-react';

export interface ServicePosterConfig {
  id: string;
  title: string;
  category: string;
  badge: string;
  highlightStat: string;
  highlightLabel: string;
  themeGradient: string;
  borderAccent: string;
  textAccent: string;
  bgGlow: string;
  icon: React.ReactNode;
  features: string[];
}

export const SERVICE_POSTERS_DATA: Record<string, ServicePosterConfig> = {
  'jasa-pembuatan-website': {
    id: 'jasa-pembuatan-website',
    title: 'Jasa Pembuatan Website Kilat',
    category: 'WEBSITE DEVELOPMENT',
    badge: 'CORE WEB VITALS <0.8s',
    highlightStat: '<0.8s LCP',
    highlightLabel: 'Loading Kilat Google',
    themeGradient: 'from-[#0B1E3D] via-[#0D2A54] to-[#0A3D73]',
    borderAccent: 'border-cyan-500/40',
    textAccent: 'text-cyan-400',
    bgGlow: 'bg-cyan-500/15',
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
    features: ['100% Hak Milik Source Code', 'Desain Modern Responsif', 'SEO On-Page & Schema Data'],
  },
  'jasa-pembuatan-website-custom': {
    id: 'jasa-pembuatan-website-custom',
    title: 'Website Custom & Portal Khusus',
    category: 'CUSTOM WEB ARCHITECTURE',
    badge: 'MODULAR TAILORED SYSTEM',
    highlightStat: '100% Kustom',
    highlightLabel: 'Bebas Batasan Template',
    themeGradient: 'from-[#1A103C] via-[#241355] to-[#3B1975]',
    borderAccent: 'border-indigo-500/40',
    textAccent: 'text-indigo-300',
    bgGlow: 'bg-indigo-500/15',
    icon: <Code2 className="w-8 h-8 text-indigo-300" />,
    features: ['Database PostgreSQL Kustom', 'Arsitektur Next.js & TypeScript', 'Dashboard Kelola Admin Eksklusif'],
  },
  'website-korporat': {
    id: 'website-korporat',
    title: 'Website Korporat & Holding',
    category: 'ENTERPRISE PROFILE',
    badge: 'DUAL LANGUAGE & KREDIBEL',
    highlightStat: 'Grade A+',
    highlightLabel: 'Kredibilitas Investor',
    themeGradient: 'from-[#0A192F] via-[#10243E] to-[#1E3A5F]',
    borderAccent: 'border-blue-400/40',
    textAccent: 'text-blue-300',
    bgGlow: 'bg-blue-400/15',
    icon: <Building2 className="w-8 h-8 text-blue-300" />,
    features: ['Profil Dua Bahasa (ID & EN)', 'Kepatuhan Standar Perusahaan', 'Integrasi Email Domain Resmi'],
  },
  'ecommerce-b2b': {
    id: 'ecommerce-b2b',
    title: 'E-Commerce B2B & Katalog Grosir',
    category: 'WHOLESALE COMMERCE',
    badge: '0% BIAYA MARKETPLACE',
    highlightStat: '0% Potongan',
    highlightLabel: 'Hemat Margin Penjualan',
    themeGradient: 'from-[#062828] via-[#093D3B] to-[#0E5953]',
    borderAccent: 'border-emerald-400/40',
    textAccent: 'text-emerald-300',
    bgGlow: 'bg-emerald-400/15',
    icon: <ShoppingBag className="w-8 h-8 text-emerald-300" />,
    features: ['Harga Grosir Bertingkat', 'Hitung Ongkir Otomatis Ekspedisi', 'Checkout WhatsApp Format Rapi'],
  },
  'landing-page-kampanye': {
    id: 'landing-page-kampanye',
    title: 'Landing Page Iklan Berkonversi',
    category: 'PERFORMANCE MARKETING',
    badge: 'CAPI & HIGH ROI',
    highlightStat: '+340% ROI',
    highlightLabel: 'Konversi Iklan Maksimal',
    themeGradient: 'from-[#2B0E1E] via-[#43142B] to-[#5C1B3A]',
    borderAccent: 'border-rose-500/40',
    textAccent: 'text-rose-300',
    bgGlow: 'bg-rose-500/15',
    icon: <Target className="w-8 h-8 text-rose-300" />,
    features: ['Kebal Ad-Blocker CAPI', 'Copywriting Berdaya Konversi', 'Split Testing Cepat Tanpa Lag'],
  },
  'aplikasi-custom': {
    id: 'aplikasi-custom',
    title: 'Pengembangan Aplikasi Web Kustom',
    category: 'FULLSTACK SOFTWARE',
    badge: 'SCALABLE SAAS ARCHITECTURE',
    highlightStat: '99.9% Uptime',
    highlightLabel: 'Infrastruktur Tangguh',
    themeGradient: 'from-[#121829] via-[#1A233D] to-[#253256]',
    borderAccent: 'border-sky-400/40',
    textAccent: 'text-sky-300',
    bgGlow: 'bg-sky-400/15',
    icon: <AppWindow className="w-8 h-8 text-sky-300" />,
    features: ['Arsitektur REST & GraphQL API', 'Otorisasi Multi-Role RBAC', 'Database Terenkripsi Penuh'],
  },
  'sistem-internal-portal': {
    id: 'sistem-internal-portal',
    title: 'Portal Internal & Operasional',
    category: 'OPERATIONAL ERP',
    badge: 'EFFICIENCY & CONTROL',
    highlightStat: 'Otomatis',
    highlightLabel: 'Pangkas Dokumen Kertas',
    themeGradient: 'from-[#0C1F2E] via-[#132E42] to-[#1C425E]',
    borderAccent: 'border-teal-400/40',
    textAccent: 'text-teal-300',
    bgGlow: 'bg-teal-400/15',
    icon: <Monitor className="w-8 h-8 text-teal-300" />,
    features: ['Sistem Manajemen Karyawan', 'Approval Alur Kerja Berjenjang', 'Audit Log Aktivitas Lengkap'],
  },
  'aplikasi-mobile': {
    id: 'aplikasi-mobile',
    title: 'Pengembangan Aplikasi Mobile',
    category: 'CROSS-PLATFORM FLUTTER',
    badge: 'IOS & ANDROID 120 FPS',
    highlightStat: '120 FPS',
    highlightLabel: 'Animasi Super Halus',
    themeGradient: 'from-[#210D38] via-[#321355] to-[#491B7D]',
    borderAccent: 'border-purple-400/40',
    textAccent: 'text-purple-300',
    bgGlow: 'bg-purple-400/15',
    icon: <Smartphone className="w-8 h-8 text-purple-300" />,
    features: ['Satu Basis Kode untuk 2 Platform', 'Mode Offline Sinkronisasi Lokal', 'Biometrik Face ID / Touch ID'],
  },
  'erp-crm-inventory': {
    id: 'erp-crm-inventory',
    title: 'Sistem ERP & Inventori Gudang',
    category: 'SUPPLY CHAIN & LOGISTICS',
    badge: 'MULTI-GUDANG & REAL-TIME',
    highlightStat: 'Real-time',
    highlightLabel: 'Audit Stok & Laba Rugi',
    themeGradient: 'from-[#0A2624] via-[#0E3D39] to-[#145650]',
    borderAccent: 'border-emerald-500/40',
    textAccent: 'text-emerald-300',
    bgGlow: 'bg-emerald-500/15',
    icon: <Boxes className="w-8 h-8 text-emerald-300" />,
    features: ['Laporan Laba/Rugi Otomatis', 'Barcode Scanner Terintegrasi', 'Peringatan Stok Minimum'],
  },
  'integrasi-sistem-api': {
    id: 'integrasi-sistem-api',
    title: 'Integrasi Sistem & Middleware API',
    category: 'DATA PIPELINE & SYNC',
    badge: 'ZERO DATA LOSS',
    highlightStat: '<15ms Latency',
    highlightLabel: 'Sinkronisasi Super Cepat',
    themeGradient: 'from-[#191924] via-[#242536] to-[#35364E]',
    borderAccent: 'border-amber-400/40',
    textAccent: 'text-amber-300',
    bgGlow: 'bg-amber-400/15',
    icon: <Cable className="w-8 h-8 text-amber-300" />,
    features: ['Koneksi Payment Gateway & POS', 'Webhook Real-time Handshake', 'Mekanisme Retry Otomatis'],
  },
  'dashboard-bi': {
    id: 'dashboard-bi',
    title: 'Dashboard Business Intelligence',
    category: 'EXECUTIVE TELEMETRY',
    badge: 'DATA-DRIVEN DECISIONS',
    highlightStat: '100% Akurat',
    highlightLabel: 'Ringkasan Eksekutif',
    themeGradient: 'from-[#0D1F38] via-[#132C4F] to-[#1C3E6E]',
    borderAccent: 'border-blue-400/40',
    textAccent: 'text-blue-300',
    bgGlow: 'bg-blue-400/15',
    icon: <LayoutDashboard className="w-8 h-8 text-blue-300" />,
    features: ['Grafik Interaktif Multi-Metrik', 'Ekspor Laporan PDF & Excel 1 Klik', 'Telemetri Omset & Retensi'],
  },
  'whatsapp-ai-agent': {
    id: 'whatsapp-ai-agent',
    title: 'WhatsApp AI Agent & Customer Care',
    category: 'CONVERSATIONAL AI',
    badge: 'RESPON 24/7 SOP PERUSAHAAN',
    highlightStat: '24/7 Aktif',
    highlightLabel: 'Respon Kilat Otomatis',
    themeGradient: 'from-[#05261F] via-[#093C31] to-[#0E5445]',
    borderAccent: 'border-emerald-400/40',
    textAccent: 'text-emerald-300',
    bgGlow: 'bg-emerald-400/15',
    icon: <Bot className="w-8 h-8 text-emerald-300" />,
    features: ['Hafal Seluruh Katalog & SOP', 'Bisa Kirim Invoice & Rekening', 'Eskalasi Mulus ke Admin Manusia'],
  },
  'meta-capi-ads-tracking': {
    id: 'meta-capi-ads-tracking',
    title: 'Meta Conversions API & Ads Tracking',
    category: 'SERVER-SIDE TRACKING',
    badge: 'EMQ SCORE 8.5+ TERVERIFIKASI',
    highlightStat: '9.4 / 10',
    highlightLabel: 'Event Match Quality EMQ',
    themeGradient: 'from-[#2B0E33] via-[#3E144A] to-[#551C66]',
    borderAccent: 'border-fuchsia-400/40',
    textAccent: 'text-fuchsia-300',
    bgGlow: 'bg-fuchsia-400/15',
    icon: <Target className="w-8 h-8 text-fuchsia-300" />,
    features: ['Kebal iOS 14+ & Ad-Blocker', 'Deduplikasi ID Acara 100%', 'Atribusi Omset Iklan Akurat'],
  },
  'jasa-seo-performa-web': {
    id: 'jasa-seo-performa-web',
    title: 'Audit SEO Teknis & Core Web Vitals',
    category: 'SEARCH ENGINE OPTIMIZATION',
    badge: 'GOOGLE TOP RANKING',
    highlightStat: 'Skor 100',
    highlightLabel: 'Google PageSpeed Index',
    themeGradient: 'from-[#241A08] via-[#38280B] to-[#523B0F]',
    borderAccent: 'border-amber-400/40',
    textAccent: 'text-amber-300',
    bgGlow: 'bg-amber-400/15',
    icon: <Search className="w-8 h-8 text-amber-300" />,
    features: ['Optimasi Schema JSON-LD', 'Audit Sitemap & Robot.txt Bersih', 'Perbaikan Kompresi Next-Gen'],
  },
  'setup-cloud-vps-hardening': {
    id: 'setup-cloud-vps-hardening',
    title: 'Setup Cloud VPS & Linux Hardening',
    category: 'INFRASTRUCTURE & SECURITY',
    badge: '5-LAPIS PERLINDUNGAN KEBAL HACK',
    highlightStat: 'TLS 1.3 A+',
    highlightLabel: 'Enkripsi & Firewall Aktif',
    themeGradient: 'from-[#0C1E2B] via-[#122B3D] to-[#1A3D57]',
    borderAccent: 'border-cyan-400/40',
    textAccent: 'text-cyan-300',
    bgGlow: 'bg-cyan-400/15',
    icon: <Server className="w-8 h-8 text-cyan-300" />,
    features: ['SSH Ed25519 & Port Non-Standar', 'Fail2ban Pertahanan Brute-Force', 'Backup Otomatis Terenkripsi S3'],
  },
  'otomasi-workflow-n8n': {
    id: 'otomasi-workflow-n8n',
    title: 'Otomasi Alur Kerja n8n Self-Hosted',
    category: 'BUSINESS PROCESS AUTOMATION',
    badge: 'HEMAT BIAYA ZAPIER',
    highlightStat: '100% Otomatis',
    highlightLabel: 'Tanpa Biaya Per-Task',
    themeGradient: 'from-[#2E1608] via-[#45220B] to-[#61300E]',
    borderAccent: 'border-orange-400/40',
    textAccent: 'text-orange-300',
    bgGlow: 'bg-orange-400/15',
    icon: <Workflow className="w-8 h-8 text-orange-300" />,
    features: ['Integrasi Google Sheet & WA', 'Webhook Transaksi Real-time', 'Self-Hosted di VPS Sendiri'],
  },
  autopilot: {
    id: 'autopilot',
    title: 'Sistem Bisnis Digital Autopilot Juara',
    category: 'INOVASI SPESIAL 2026',
    badge: 'FORMULA DUCOK & PUCOK',
    highlightStat: '24/7 Closing',
    highlightLabel: 'Mesin Penjual Otomatis',
    themeGradient: 'from-[#1A2E05] via-[#2B4A09] to-[#3F6B0D]',
    borderAccent: 'border-lime-400/50',
    textAccent: 'text-lime-300',
    bgGlow: 'bg-lime-400/20',
    icon: <Flame className="w-8 h-8 text-lime-400" />,
    features: ['AI WhatsApp Closing Otomatis', '0% Potongan Komisi Ojol', '100% Hak Milik Selamanya'],
  },
};

interface ServicePosterVisualProps {
  serviceId: string;
  category?: string;
  onClick?: () => void;
  className?: string;
}

export const ServicePosterVisual: React.FC<ServicePosterVisualProps> = ({
  serviceId,
  category = 'website',
  onClick,
  className = '',
}) => {
  const config =
    SERVICE_POSTERS_DATA[serviceId] ||
    SERVICE_POSTERS_DATA['jasa-pembuatan-website'];

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    } else {
      // Trigger global image lightbox modal
      window.dispatchEvent(
        new CustomEvent('open-image-lightbox', {
          detail: {
            src: `/canva-service-${getPosterAssetSlug(serviceId)}.png`,
            title: `Poster Resmi Fitran Dev — ${config.title}`,
            alt: config.title,
          },
        })
      );
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden border ${config.borderAccent} bg-linear-to-br ${config.themeGradient} p-4 sm:p-5 flex flex-col justify-between text-white shadow-md hover:shadow-xl transition-all cursor-pointer group select-none ${className}`}
    >
      {/* Ambient Radial Glow */}
      <div
        className={`absolute -top-12 -right-12 w-48 h-48 rounded-full ${config.bgGlow} blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700`}
      />
      <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/30 pointer-events-none" />

      {/* TOP HEADER: Official Logo + Category Pill */}
      <div className="relative z-10 flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-md bg-white text-[#0B1E3D] flex items-center justify-center font-black text-[10px] shadow-xs">
            FD
          </div>
          <span className="font-mono text-xs font-black tracking-tight text-white">
            fitran<span className="text-emerald-400">.dev</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-mono text-[9px] font-bold tracking-wider uppercase">
            {config.badge}
          </span>
          <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black transition-colors">
            <Maximize2 className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* CENTER: Main Title & Distinct Service Motif */}
      <div className="relative z-10 grid grid-cols-12 gap-3 items-center my-auto py-1">
        <div className="col-span-8 space-y-1">
          <span className={`font-mono text-[10px] font-bold uppercase tracking-wider block ${config.textAccent}`}>
            {config.category}
          </span>
          <h3 className="font-black text-sm sm:text-base text-white leading-snug tracking-tight line-clamp-2">
            {config.title}
          </h3>
          <div className="flex items-center gap-2 pt-1">
            <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white font-mono text-xs font-black">
              {config.highlightStat}
            </span>
            <span className="text-[10px] text-white/80 font-medium">
              {config.highlightLabel}
            </span>
          </div>
        </div>

        {/* Distinct Vector 3D Graphic Container */}
        <div className="col-span-4 flex justify-end">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
            {config.icon}
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER: Official Contact Details (Email & Phone) */}
      <div className="relative z-10 pt-2 border-t border-white/10 flex flex-wrap items-center justify-between text-[10px] font-mono text-white/90">
        <span className="flex items-center gap-1 hover:text-emerald-300 transition-colors">
          <Mail className="w-3 h-3 text-emerald-400" />
          <span>fitranbadrttmamtb@gmail.com</span>
        </span>
        <span className="flex items-center gap-1 hover:text-emerald-300 transition-colors">
          <Phone className="w-3 h-3 text-emerald-400" />
          <span>087722100276</span>
        </span>
      </div>
    </div>
  );
};

export function getPosterAssetSlug(serviceId: string): string {
  if (serviceId.includes('whatsapp') || serviceId.includes('ai')) return 'ai-agent';
  if (serviceId.includes('ecommerce') || serviceId.includes('b2b') || serviceId.includes('grosir')) return 'ecommerce';
  if (serviceId.includes('erp') || serviceId.includes('inventori') || serviceId.includes('inventory')) return 'erp';
  if (serviceId.includes('vps') || serviceId.includes('server') || serviceId.includes('cloud')) return 'cloud-vps';
  if (serviceId.includes('landing') || serviceId.includes('kampanye') || serviceId.includes('capi') || serviceId.includes('ads')) return 'landing-page';
  if (serviceId.includes('autopilot')) return 'autopilot';
  return 'website';
}
