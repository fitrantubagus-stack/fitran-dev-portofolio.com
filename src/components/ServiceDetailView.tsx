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
  Terminal,
  Activity,
  CheckCircle2,
  Users,
  Cpu,
  Database,
} from 'lucide-react';
import { SubServiceItem } from '../data/servicesCatalogData';
import { ServicePosterVisual } from './ServicePosterVisual';

interface ServiceDetailViewProps {
  service: SubServiceItem;
  onBack: () => void;
  onWhatsAppInquiry: (serviceName?: string, budget?: string) => void;
  themePrefix?: string;
}

export const getCanvaGraphicForService = (id: string, category: string): string => {
  if (id.includes('whatsapp') || id.includes('ai')) return '/canva-service-ai-agent.png';
  if (id.includes('ecommerce') || id.includes('b2b') || id.includes('grosir')) return '/canva-service-ecommerce.png';
  if (id.includes('erp') || id.includes('inventori') || id.includes('inventory') || id.includes('dashboard')) return '/canva-service-erp.png';
  if (id.includes('vps') || id.includes('cloud') || id.includes('server') || id.includes('n8n')) return '/canva-service-cloud-vps.png';
  if (id.includes('landing') || id.includes('kampanye') || id.includes('capi') || id.includes('ads') || id.includes('seo')) return '/canva-service-landing-page.png';
  if (id.includes('autopilot')) return '/canva-service-autopilot.png';
  return '/canva-service-website.png';
};

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onBack,
  onWhatsAppInquiry,
  themePrefix = '/corporation',
}) => {
  // Defensive fallbacks in case service is undefined or partially loaded
  if (!service) {
    return (
      <div id="katalog-lengkap" className="p-8 text-center space-y-4">
        <p className="text-zinc-600 dark:text-zinc-400">Layanan tidak ditemukan atau sedang diperbarui.</p>
        <a
          href={`${themePrefix}/layanan`}
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs inline-block"
        >
          Kembali ke Katalog
        </a>
      </div>
    );
  }

  const standardFeatures = service.standardFeatures || [];
  const deliverables = service.deliverables || [];
  const workflow = service.workflow || [];
  const techStack = service.techStack || [];
  const faqs = service.faqs || [];
  const featurePills = service.featurePills || [
    { iconName: 'ShieldCheck', label: 'Keamanan Grade A+' },
    { iconName: 'Gauge', label: 'Performa Tinggi' },
    { iconName: 'Lock', label: '100% Hak Milik' },
    { iconName: 'Globe', label: 'Cloud Infrastructure' },
  ];

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
      case 'Terminal':
        return <Terminal className={className} />;
      case 'Lock':
        return <Lock className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Database':
        return <Database className={className} />;
      case 'Zap':
        return <Zap className={className} />;
      case 'Users':
        return <Users className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  // Render contextual mockup based on service.mockupType
  const renderVisualMockup = () => {
    const type = service.mockupType || 'website';

    if (type === 'terminal') {
      return (
        <div className="rounded-2xl bg-[#0B0F19] border border-zinc-700/80 p-4 shadow-xl text-zinc-100 font-mono text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <span className="text-[10px] text-zinc-400">fitran@vps-prod: ~ (ssh ed25519)</span>
          </div>

          <div className="space-y-2 text-[11px] leading-relaxed text-zinc-300">
            <div>
              <span className="text-emerald-400 font-bold">fitran@vps-prod:~$</span>{' '}
              <span className="text-white">sudo ufw status verbose</span>
            </div>
            <div className="text-zinc-400 pl-2 border-l-2 border-emerald-500/50 space-y-0.5">
              <p>Status: <span className="text-emerald-400 font-bold">active</span> (Default: deny incoming)</p>
              <p>2222/tcp (SSH Ed25519) <span className="text-emerald-400">ALLOW IN</span></p>
              <p>443/tcp (HTTPS TLS 1.3) <span className="text-emerald-400">ALLOW IN</span></p>
            </div>

            <div>
              <span className="text-emerald-400 font-bold">fitran@vps-prod:~$</span>{' '}
              <span className="text-white">fail2ban-client status sshd</span>
            </div>
            <div className="text-zinc-400 pl-2 border-l-2 border-blue-500/50 space-y-0.5">
              <p>Jail: sshd | Filter: 0 failed</p>
              <p>Actions: <span className="text-emerald-400 font-bold">14 IP banned</span> (Auto-Defense active)</p>
            </div>

            <div>
              <span className="text-emerald-400 font-bold">fitran@vps-prod:~$</span>{' '}
              <span className="text-white">borg info /backup/s3/repo</span>
            </div>
            <div className="text-zinc-400 pl-2 border-l-2 border-purple-500/50">
              <p>Last snapshot: <span className="text-purple-300">03:00 WIB (Encrypted, Verified)</span></p>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'ai') {
      return (
        <div className="rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden text-xs">
          {/* WhatsApp Header */}
          <div className="bg-[#075E54] text-white p-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                <Bot className="w-4 h-4 text-emerald-200" />
              </div>
              <div>
                <div className="font-bold text-xs flex items-center gap-1">
                  <span>Fitran AI Business Care</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                </div>
                <div className="text-[10px] text-emerald-100/80">Online 24/7 • Responsif Kilat</div>
              </div>
            </div>
            <div className="px-2 py-0.5 rounded bg-emerald-700/80 text-[10px] font-mono">Meta Verified</div>
          </div>

          {/* WhatsApp Chat Bubbles */}
          <div className="p-4 space-y-3 bg-[#EFEAE2] dark:bg-zinc-900/90 min-h-[200px]">
            {/* Customer Bubble */}
            <div className="flex justify-end">
              <div className="max-w-[85%] bg-[#E7FFDB] dark:bg-emerald-950 text-zinc-900 dark:text-zinc-100 p-3 rounded-2xl rounded-tr-none shadow-xs space-y-1">
                <p className="text-[11px] leading-relaxed">
                  Halo kak! Kami distributor, mau tanya apakah sistem web grosir bisa langsung kalkulasi harga bertingkat dan unduh RFQ PDF?
                </p>
                <div className="text-[9px] text-zinc-400 text-right">14:02 ✓✓</div>
              </div>
            </div>

            {/* AI Assistant Bubble */}
            <div className="flex justify-start">
              <div className="max-w-[85%] bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 p-3 rounded-2xl rounded-tl-none shadow-xs space-y-1.5 border border-zinc-200/50 dark:border-zinc-700">
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  <Bot className="w-3 h-3" />
                  <span>AI Agent • RAG SOP Verified</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Halo Bapak! Tentu bisa sekali. Sistem E-Commerce B2B kami dilengkapi fitur Tiered Pricing otomatis (misal: 100 unit @ Rp 45.000, 500 unit @ Rp 38.000). Calon pembeli juga dapat mengunduh dokumen penawaran harga resmi (Quotation PDF) dalam 1 klik sebelum persetujuan direksi.
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-zinc-100 dark:border-zinc-700 text-[9px] text-zinc-400">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">[Dokumen SOP v2.1]</span>
                  <span>14:02 (1.8s)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'ecommerce') {
      return (
        <div className="rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-4 shadow-xl space-y-3.5 text-xs">
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2.5">
            <div>
              <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400 font-bold block">KATALOG B2B GROSIR</span>
              <span className="font-bold text-zinc-900 dark:text-white">Baja Ringan Profil C75 (SKU: MAT-092)</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">
              MOQ: 50 Btg
            </span>
          </div>

          {/* Tiered Pricing Table */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <div className="grid grid-cols-3 bg-zinc-50 dark:bg-zinc-900 p-2 font-mono text-[10px] font-bold text-zinc-500">
              <span>Tier Kuantitas</span>
              <span className="text-center">Harga / Unit</span>
              <span className="text-right">Diskon</span>
            </div>
            <div className="divide-y divide-zinc-100 dark:divide-zinc-800 text-[11px]">
              <div className="grid grid-cols-3 p-2">
                <span>1 - 49 Batang</span>
                <span className="text-center font-mono">Rp 55.000</span>
                <span className="text-right text-zinc-400">-</span>
              </div>
              <div className="grid grid-cols-3 p-2 bg-blue-50/50 dark:bg-blue-950/30">
                <span className="font-bold text-blue-700 dark:text-blue-300">50 - 199 Batang</span>
                <span className="text-center font-mono font-bold text-blue-700 dark:text-blue-300">Rp 48.000</span>
                <span className="text-right font-bold text-emerald-600">Hemat 12%</span>
              </div>
              <div className="grid grid-cols-3 p-2">
                <span className="font-bold text-emerald-700 dark:text-emerald-300">≥ 200 Batang</span>
                <span className="text-center font-mono font-bold text-emerald-700 dark:text-emerald-300">Rp 42.000</span>
                <span className="text-right font-bold text-emerald-600">Grosir Pabrik</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px]">
            <div>
              <span className="text-zinc-500 block text-[10px]">Simulasi Order: 250 Batang</span>
              <span className="font-black text-zinc-900 dark:text-white font-mono">Rp 10.500.000 (Tier 3)</span>
            </div>
            <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-bold text-[10px] flex items-center gap-1">
              <span>Unduh RFQ PDF</span>
            </span>
          </div>
        </div>
      );
    }

    if (type === 'database') {
      return (
        <div className="rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-4 shadow-xl space-y-3 text-xs">
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
            <div className="flex items-center gap-1.5">
              <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="font-mono text-[10px] font-bold text-zinc-700 dark:text-zinc-300">
                PostgreSQL 16 • Connection Pool (42/100)
              </span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono text-[9px] font-bold">
              ACID Safe
            </span>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden font-mono text-[10px]">
            <div className="grid grid-cols-4 bg-zinc-50 dark:bg-zinc-900 p-2 font-bold text-zinc-500">
              <span>ID Transaksi</span>
              <span>SKU Barang</span>
              <span>Gudang</span>
              <span className="text-right">Approval</span>
            </div>
            <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
              <div className="grid grid-cols-4 p-2">
                <span className="text-blue-600 font-bold">TRX-8941</span>
                <span>Baja C75 (+500)</span>
                <span>Cikarang</span>
                <span className="text-right text-emerald-600 font-bold">Approved</span>
              </div>
              <div className="grid grid-cols-4 p-2 bg-zinc-50/50 dark:bg-zinc-900/50">
                <span className="text-blue-600 font-bold">TRX-8942</span>
                <span>Baut M8 (-120)</span>
                <span>Surabaya</span>
                <span className="text-right text-amber-600 font-bold">Pending</span>
              </div>
              <div className="grid grid-cols-4 p-2">
                <span className="text-blue-600 font-bold">TRX-8943</span>
                <span>Semen 50kg (+1K)</span>
                <span>Medan</span>
                <span className="text-right text-emerald-600 font-bold">Approved</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-zinc-500 flex items-center justify-between pt-1">
            <span>Audit Trail Log: Recorded</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold">AES-256 Encrypted</span>
          </div>
        </div>
      );
    }

    if (type === 'analytics') {
      return (
        <div className="rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-4 shadow-xl space-y-3.5 text-xs">
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
            <div className="flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-emerald-500" />
              <span className="font-mono text-[10px] font-bold text-zinc-700 dark:text-zinc-300">
                Server-Side Telemetry Gateway
              </span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono text-[9px] font-bold">
              Live Feed
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-400 block">Event Match Quality</span>
              <span className="text-lg font-black text-emerald-600 font-mono">9.4 / 10</span>
              <span className="text-[9px] text-zinc-500 block">Rating: Excellent</span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-400 block">Deduplication Rate</span>
              <span className="text-lg font-black text-blue-600 font-mono">100.0%</span>
              <span className="text-[9px] text-zinc-500 block">Zero Double Count</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-[#0B0F19] text-zinc-300 font-mono text-[10px] space-y-1">
            <p className="text-emerald-400">[200 OK] Purchase (ID: ev_948201) -&gt; Meta Graph API v20.0 (14ms)</p>
            <p className="text-blue-400">[200 OK] Lead (ID: ev_948202) -&gt; Telegram Webhook Dispatched</p>
          </div>
        </div>
      );
    }

    if (type === 'mobile') {
      return (
        <div className="max-w-[280px] mx-auto rounded-3xl bg-zinc-950 border-4 border-zinc-800 p-3 shadow-2xl text-white text-xs space-y-3">
          {/* Phone Speaker Notch */}
          <div className="flex justify-center">
            <div className="w-16 h-3 rounded-full bg-zinc-800" />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 px-1">
            <span>09:41</span>
            <span>5G • 100%</span>
          </div>

          <div className="p-3 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-700 space-y-1.5">
            <span className="text-[9px] font-mono bg-white/20 px-2 py-0.5 rounded text-white font-bold">
              Flutter 120 FPS
            </span>
            <h4 className="font-bold text-xs">Aplikasi Mobile Klien</h4>
            <p className="text-[10px] text-blue-100">Tersinkronisasi otomatis dengan server cloud.</p>
          </div>

          <div className="space-y-1.5">
            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between text-[10px]">
              <span>SQLite Cache Lokal</span>
              <span className="text-emerald-400 font-bold">Aktif Offline</span>
            </div>
            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between text-[10px]">
              <span>Biometric Login</span>
              <span className="text-blue-400 font-bold">Face ID / Touch ID</span>
            </div>
          </div>
        </div>
      );
    }

    // Default: 'website'
    return (
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
              <span className="text-[10px] font-mono text-zinc-700 dark:text-zinc-300 font-bold">&lt;0.8s LCP</span>
            </div>
            <div className="h-14 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
              <span className="text-[10px] font-mono text-emerald-600 font-bold">100% PageSpeed</span>
            </div>
            <div className="h-14 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
              <span className="text-[10px] font-mono text-blue-600 font-bold">SSL TLS 1.3</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="katalog-lengkap" className="space-y-12 animate-fade-in scroll-mt-24">
      {/* 1. TOP BREADCRUMB & BACK ACTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-5">
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500">
          <a
            href={`${themePrefix}`}
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="hover:underline cursor-pointer"
          >
            Beranda
          </a>
          <span>/</span>
          <a
            href={`${themePrefix}/layanan`}
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="hover:underline cursor-pointer"
          >
            Layanan
          </a>
          <span>/</span>
          <span className="text-[#1E3A8A] dark:text-blue-400 font-semibold">{service.categoryLabel}</span>
          <span>/</span>
          <span className="text-zinc-950 dark:text-white font-bold truncate max-w-xs">{service.title}</span>
        </nav>

        <a
          href={`${themePrefix}/layanan`}
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-[#111319] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-bold text-zinc-800 dark:text-zinc-200 transition-all cursor-pointer self-start sm:self-auto"
        >
          <ChevronLeft className="w-4 h-4 text-zinc-500" />
          <span>Kembali ke Semua Layanan</span>
        </a>
      </div>

      {/* 2. SUB-SERVICE HERO SECTION */}
      <div className="p-6 sm:p-12 rounded-3xl bg-linear-to-br from-blue-900 via-[#1E3A8A] to-[#0A2540] text-white shadow-xl relative overflow-hidden">
        {/* Background glow circle */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 sm:space-y-5 relative z-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
              {renderIcon(service.iconName, 'w-3.5 h-3.5 text-blue-200')}
              <span>{service.categoryLabel}</span>
            </span>

            {service.badge && (
              <span className="px-3 py-1 rounded-full bg-emerald-500/25 text-emerald-200 border border-emerald-400/40 font-mono text-[11px] font-bold">
                {service.badge}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-sm sm:text-lg text-blue-100 leading-relaxed font-medium">
            {service.tagline}
          </p>

          <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed pt-1">
            {service.overview}
          </p>

          {/* Price & Duration HUD */}
          <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-[10px] font-mono uppercase text-blue-200 block">Estimasi Investasi</span>
              <span className="text-base sm:text-lg font-black text-white">{service.price}</span>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-[10px] font-mono uppercase text-blue-200 block">Estimasi Waktu</span>
              <span className="text-base sm:text-lg font-black text-white flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-300" />
                <span>{service.duration}</span>
              </span>
            </div>

            <button
              onClick={() => onWhatsAppInquiry(service.title, service.price)}
              className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:shadow-emerald-500/25 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konsultasi Layanan Ini via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. SECTION: FITUR UNGGULAN & SPESIFIKASI KHUSUS LAYANAN INI */}
      <div className="space-y-6 pt-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
            {service.featureSectionTitle || 'Standar Rekayasa Arsitektur & Keunggulan Utama'}
          </h2>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1 max-w-2xl font-normal">
            {service.featureSectionSubtitle || 'Semua fitur ini sudah termasuk di setiap proyek, tanpa biaya tambahan.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 6 Distinct Feature Cards with clean vector icons */}
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
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 mt-1.5 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Tailored Official fitran.dev Service Poster & Live Interactive Prototype */}
          <div className="lg:col-span-5 space-y-5">
            {/* Official Branded Service Poster (Unobstructed, click-to-enlarge lightbox) */}
            <div className="space-y-2">
              <ServicePosterVisual serviceId={service.id} category={service.category} className="aspect-[16/10] sm:aspect-[16/10] shadow-lg" />
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900/90 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>Solusi Terverifikasi • 100% Hak Milik</span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                  fitran.dev Official
                </span>
              </div>
            </div>

            {/* Interactive Functional Prototype Preview */}
            <div className="p-6 rounded-3xl bg-linear-to-b from-blue-50/70 via-sky-50/50 to-white dark:from-zinc-900 dark:via-zinc-900/90 dark:to-[#111319] border border-blue-200 dark:border-zinc-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-200/80 dark:border-zinc-800">
                <span className="font-mono text-[11px] font-bold uppercase text-zinc-500">Live Interactive Prototype</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              {renderVisualMockup()}

              {/* Dynamic Feature Pills Under Mockup */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {featurePills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 shadow-2xs"
                  >
                    {renderIcon(pill.iconName, 'w-3.5 h-3.5 text-blue-600 dark:text-blue-400')}
                    <span>{pill.label}</span>
                  </span>
                ))}
              </div>
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
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1 max-w-2xl font-normal">
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

              <ul className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                {sec.items?.map((it, i) => (
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
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1 max-w-2xl font-normal">
            Proses kerja transparan dengan progres harian yang dapat Anda pantau setiap saat.
          </p>
        </div>

        {/* Visual Workflow Infographic Banner (Compact, Non-Black) */}
        <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-sm relative group max-w-4xl mx-auto">
          <div className="px-3.5 py-2 bg-zinc-100 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-zinc-700/80 flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Pipeline Rekayasa Arsitektur Sistem</span>
            </span>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Tahap 1 s/d 4 Terverifikasi SLA</span>
          </div>
          <div className="relative overflow-hidden bg-zinc-950">
            <img
              src="/engineering-workflow-real.jpg"
              alt="Dokumentasi Riil Kolaborasi Tim Rekayasa Perangkat Lunak dan Perencanaan Arsitektur Digital Fitran Dev"
              className="w-full max-h-52 sm:max-h-64 object-cover object-center group-hover:scale-101 transition-transform duration-500"
              loading="lazy"
            />
          </div>
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
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">
                  {stage.duration}
                </span>
              </div>
              <h4 className="font-bold text-sm text-zinc-950 dark:text-white">{stage.title}</h4>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. TEKNOLOGI STACK */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-zinc-950 dark:text-white">Teknologi &amp; Framework yang Digunakan:</h4>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 font-normal">Standar industri global, bukan software usang atau plugin rentan.</p>
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
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1 max-w-2xl font-normal">
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
              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed pl-6 font-normal">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 8. BOTTOM GROUNDED ACTION BANNER */}
      <div className="p-6 sm:p-10 rounded-3xl bg-linear-to-r from-blue-50/90 via-sky-50/70 to-emerald-50/90 dark:from-zinc-900 dark:via-[#111319] dark:to-zinc-900 border-2 border-blue-200 dark:border-blue-900 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 max-w-xl">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-blue-400">
            KONSULTASI TANPA KOMITMEN
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white">
            Siap Membangun {service.title} untuk Bisnis Anda?
          </h3>
          <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
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
          <a
            href={`${themePrefix}/layanan`}
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="px-5 py-3 rounded-xl bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 font-bold text-xs hover:bg-zinc-50 transition-colors cursor-pointer"
          >
            Lihat Layanan Lainnya
          </a>
        </div>
      </div>
    </div>
  );
};
