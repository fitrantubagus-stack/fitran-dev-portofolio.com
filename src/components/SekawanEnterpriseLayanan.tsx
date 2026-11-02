import React, { useState } from 'react';
import {
  Briefcase,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Clock,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Laptop,
  Smartphone,
  Server,
  Layers,
  ArrowRight,
  Check,
  Building2,
  Factory,
  Cpu,
  TrendingUp,
  HeartHandshake,
  Flame,
  CreditCard,
  Shield,
  FileCode2,
  Activity,
  Zap,
} from 'lucide-react';
import { FitranMascot } from './FitranMascot';

interface SekawanEnterpriseLayananProps {
  onWhatsAppInquiry: (serviceName?: string, budget?: string) => void;
  onNavigateHome: () => void;
}

interface CaseStudyItem {
  id: string;
  client: string;
  location: string;
  sector: string;
  sectorTag: string;
  tags: string[];
  title: string;
  summary: string;
  highlightMetric: string;
  curveColor: string; // solid accent color
  badgeColor: string;
  features: string[];
}

export const SekawanEnterpriseLayanan: React.FC<SekawanEnterpriseLayananProps> = ({
  onWhatsAppInquiry,
  onNavigateHome,
}) => {
  // Sector filter
  const [activeSector, setActiveSector] = useState<string>('Semua');

  // Interactive Calculator State
  const [calcPlatform, setCalcPlatform] = useState<string>('website');
  const [calcComplexity, setCalcComplexity] = useState<string>('standard');
  const [calcNeedAI, setCalcNeedAI] = useState<boolean>(false);
  const [calcNeedSecurity, setCalcNeedSecurity] = useState<boolean>(false);

  // Calculate rough estimate
  const calculatedEstimate = React.useMemo(() => {
    let base = 500000;
    if (calcPlatform === 'website') base = calcComplexity === 'kilat' ? 500000 : calcComplexity === 'standard' ? 1500000 : 3500000;
    if (calcPlatform === 'webapp') base = calcComplexity === 'kilat' ? 2500000 : calcComplexity === 'standard' ? 4500000 : 8500000;
    if (calcPlatform === 'mobile') base = calcComplexity === 'kilat' ? 4000000 : calcComplexity === 'standard' ? 7500000 : 14000000;
    if (calcNeedAI) base += 2000000;
    if (calcNeedSecurity) base += 1500000;
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(base);
  }, [calcPlatform, calcComplexity, calcNeedAI, calcNeedSecurity]);

  // Sectoral Case Studies directly inspired by Sekawan Media
  const CASE_STUDIES: CaseStudyItem[] = [
    {
      id: 'syngenta-kediri',
      client: 'Syngenta Kediri',
      location: 'Kediri, Jawa Timur',
      sector: 'Agrikultur & Agronomi',
      sectorTag: 'Agrikultur',
      tags: ['Agrikultur', 'Aplikasi Mobile', 'Aplikasi Web', 'Custom Solution'],
      title: 'Digitalisasi Distribusi Benih Pertanian & Field Agronomy Audit',
      summary:
        'Pengembangan sistem terintegrasi untuk mencatat riwayat pembenihan, audit kondisi lahan agronomi secara offline-first oleh field agronomist, serta sinkronisasi data distribusi benih ke distributor resmi.',
      highlightMetric: '99.4% Akurasi Audit Benih',
      curveColor: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200 border-emerald-300',
      features: [
        'Sinkronisasi offline-first untuk wilayah perkebunan minim sinyal',
        'Validasi batch number benih anti-pemalsuan',
        'Dashboard analitik performa panen per kabupaten',
        'Integrasi GPS stamping untuk verifikasi kunjungan lapangan',
      ],
    },
    {
      id: 'omron-manufacturing',
      client: 'PT OMRON Manufacturing of Indonesia',
      location: 'EJIP Industrial Park, Cikarang',
      sector: 'Manufaktur & Otomasi Pabrik',
      sectorTag: 'Manufaktur',
      tags: ['Manufaktur', 'Aplikasi Mobile', 'Aplikasi Web', 'Custom Solution'],
      title: 'Sistem Monitoring OEE Real-Time & Digital Shift Log Operator',
      summary:
        'Transformasi digital pencatatan lini produksi manual menjadi dashboard OEE (Overall Equipment Effectiveness) real-time dengan alert downtime mesin otomatis dan handover shift operator tanpa kertas.',
      highlightMetric: '-42% Waktu Downtime Tak Terjadwal',
      curveColor: 'bg-blue-50 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200 border-blue-300',
      features: [
        'Koneksi webhook sensor PLC lini perakitan komponen',
        'Notifikasi Telegram & WhatsApp untuk eskalasi teknisi',
        'Kalkulasi OEE otomatis (Availability, Performance, Quality)',
        'Audit trail kepatuhan standar keselamatan kerja ISO 9001',
      ],
    },
    {
      id: 'wahana-visi',
      client: 'Wahana Visi Indonesia / NGO Partner',
      location: 'Jakarta & Daerah 3T Indonesia',
      sector: 'Sosial & Kemanusiaan',
      sectorTag: 'Sosial / NGO',
      tags: ['Sosial / NGO', 'Aplikasi Web', 'Database Relasional', 'Reporting Engine'],
      title: 'Platform Transparansi Bantuan Anak & Logistik Tanggap Darurat',
      summary:
        'Sistem manajemen penerima manfaat program pendidikan dan bantuan bencana multi-provinsi dengan audit pelaporan donor transparan serta validasi NIK terenkripsi.',
      highlightMetric: '15.000+ Penerima Manfaat Terverifikasi',
      curveColor: 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200 border-amber-300',
      features: [
        'Pelacakan paket bantuan sembako dan modul belajar per desa',
        'Penyusunan laporan donor PDF instan sekali klik',
        'Enkripsi data pribadi anak (PII) tingkat militer',
        'Akses multi-role untuk relawan lapangan dan pengawas pusat',
      ],
    },
    {
      id: 'petrokimia-cilegon',
      client: 'Industrial Chemical Complex Cilegon',
      location: 'Cilegon, Banten',
      sector: 'Petrokimia & Energi Industri',
      sectorTag: 'Petrokimia',
      tags: ['Petrokimia', 'Sistem K3', 'Incident Tracking', 'Aplikasi Web'],
      title: 'Digital Electronic Permit to Work (e-PTW) & Hazard Audit K3',
      summary:
        'Penerapan izin kerja berbahaya (hot work, confined space, working at height) berbasis otorisasi berjenjang digital guna menegakkan zero-accident di lingkungan industri petrokimia Cilegon.',
      highlightMetric: 'Zero Fatal Incident & Audit A+',
      curveColor: 'bg-slate-100 dark:bg-slate-900 border-slate-300 dark:border-slate-700',
      badgeColor: 'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-400',
      features: [
        'Sign-off digital oleh Safety Officer dan Plant Manager',
        'Pemeriksaan gas detector terintegrasi log izin kerja',
        'Alarm otomatis ketika izin kerja melewati durasi shift',
        'Dashboard kepatuhan SMK3 & Kementerian Ketenagakerjaan',
      ],
    },
    {
      id: 'finansial-billing',
      client: 'FinansialKu & Multi-Channel Billing',
      location: 'Jakarta Selatan',
      sector: 'Fintech & Payment Aggregator',
      sectorTag: 'Finansial',
      tags: ['Finansial', 'Payment Gateway', 'High-Security API', 'Zero-Trust'],
      title: 'Otomasi Rekonsiliasi Transaksi & Tagihan WhatsApp Interaktif',
      summary:
        'Pipa pemrosesan mutasi perbankan multi-akun otomatis dengan kecerdasan pencocokan invoice, webhook pembayaran instan, dan pengiriman kwitansi berformat PDF aman via WhatsApp bot.',
      highlightMetric: '100% Otomatisasi Rekonsiliasi Harian',
      curveColor: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200 border-emerald-300',
      features: [
        'Pencocokan mutasi bank otomatis dalam hitungan detik',
        'Webhook callback terproteksi HMAC SHA-256 signature',
        'Generator invoice QRIS dinamis langsung bayar',
        'Enkripsi end-to-end data pelanggan dan nilai transaksi',
      ],
    },
  ];

  // 6 Transparent Service Packages
  const SERVICE_PACKAGES = [
    {
      id: 's1',
      code: 'SRV-01',
      title: 'Website Online Kilat',
      price: 'Mulai Rp 500.000',
      duration: '24 - 48 Jam Kerja',
      badge: 'Solusi Terjangkau',
      description: 'Landing page ultra-cepat untuk UMKM, profil pribadi, atau produk baru yang butuh live dalam waktu singkat.',
      scope: [
        '1 Halaman Utama Responsif & Desain Eksklusif',
        'Setup Domain & Gratis Hosting Selamanya di Vercel',
        'Tombol Order Langsung Terhubung ke WhatsApp',
        'Kecepatan Load di Bawah 0.8 Detik (Lighthouse 100)',
        'Full Source Code & Garansi 30 Hari',
      ],
      tech: ['Next.js / React', 'Tailwind CSS', 'Vercel Edge CDN'],
    },
    {
      id: 's2',
      code: 'SRV-02',
      title: 'Website Bisnis & Company Profile Premium',
      price: 'Mulai Rp 1.500.000',
      duration: '3 - 5 Hari Kerja',
      badge: 'Paling Populer',
      description: 'Website profesional multi-halaman untuk perusahaan atau agensi yang ingin meningkatkan kredibilitas di mata klien.',
      scope: [
        'Hingga 5 Halaman Lengkap (Tentang, Layanan, Portofolio, Kontak)',
        'Formulir Inquiry & Integrasi Google Maps Bisnis',
        'Optimasi SEO On-Page Lengkap (Schema Markup)',
        'Integrasi Google Analytics 4 (GA4) & Search Console',
        'Garansi Pemeliharaan Bug 60 Hari',
      ],
      tech: ['React / Vite / Next.js', 'Tailwind CSS', 'SEO Engine'],
    },
    {
      id: 's3',
      code: 'SRV-03',
      title: 'Aplikasi Web & Dashboard Admin Enterprise',
      price: 'Mulai Rp 3.500.000',
      duration: '1 - 2 Minggu',
      badge: 'Full-Stack Custom',
      description: 'Sistem operasional internal, manajemen inventori, kasir, atau portal klien dengan manajemen pengguna berbasis role.',
      scope: [
        'Database Relasional PostgreSQL / Supabase',
        'Autentikasi Aman Multi-Role (Admin, Operator, Klien)',
        'Fitur CRUD Lengkap & Export Laporan ke Excel / PDF',
        'Dashboard Grafik Real-Time & Audit Trail Log',
        'Dokumentasi API & Alih Pengetahuan Staf',
      ],
      tech: ['PostgreSQL', 'Node.js / Express', 'TypeScript', 'Tailwind'],
    },
    {
      id: 's4',
      code: 'SRV-04',
      title: 'AI Agent & Otomasi Alur Kerja Bisnis',
      price: 'Mulai Rp 2.500.000',
      duration: '5 - 7 Hari Kerja',
      badge: 'Kecerdasan Buatan',
      description: 'Agen AI cerdas yang mengotomasi operasional: customer service WhatsApp 24/7, perangkum dokumen, dan otomasi tugas repetitif.',
      scope: [
        'Integrasi Gemini 2.5 / OpenAI GPT via API',
        'Knowledge Base RAG dari Dokumen SOP / Katalog Internal',
        'Penyambungan ke WhatsApp Business API atau Telegram',
        'Proteksi Guardrails agar AI tidak menjawab di luar konteks',
        'Monitoring Penggunaan Token & Penghematan Biaya API',
      ],
      tech: ['Gemini API', 'LangChain / RAG', 'WhatsApp Cloud API', 'Python / TS'],
    },
    {
      id: 's5',
      code: 'SRV-05',
      title: 'Technical Marketing & CAPI Tracking',
      price: 'Mulai Rp 1.200.000',
      duration: '2 - 3 Hari Kerja',
      badge: 'ROI Iklan Naik',
      description: 'Setup pelacakan data presisi tinggi untuk Meta Ads dan Google Ads tanpa takut terblokir iOS 14 / adblocker.',
      scope: [
        'Setup Meta Conversions API (CAPI Server-Side)',
        'Implementasi Google Tag Manager (GTM) Server Container',
        'Deduplikasi Event Browser & Server (Event ID Match)',
        'Event Match Quality (EMQ) Score Minimal 8.0/10',
        'Audit Pelacakan Pembelian / Leads Bergaransi Presisi',
      ],
      tech: ['Meta CAPI', 'GTM Server-Side', 'Google Analytics 4', 'Cloudflare Workers'],
    },
    {
      id: 's6',
      code: 'SRV-06',
      title: 'Audit Keamanan Server & Hardening Zero-Trust',
      price: 'Mulai Rp 4.000.000',
      duration: '1 - 2 Minggu',
      badge: 'Enterprise Security',
      description: 'Audit kerentanan mendalam, proteksi firewall 5 lapis, mitigasi serangan DDoS, dan pengamanan kredensial server.',
      scope: [
        'Penetration Testing OWASP Top 10 (SQLi, XSS, CSRF)',
        'Penerapan 5-Lapis Pertahanan Arsitektur Fitran Dev',
        'Konfigurasi Cloudflare WAF & Rate Limiting Ketat',
        'Enkripsi SSL/TLS Grade A+ & Hardening Nginx/Docker',
        'Laporan Resmi Temuan Kerentanan & Sertifikat Audit',
      ],
      tech: ['Cloudflare Enterprise WAF', 'Docker Hardening', 'Fail2ban', 'TLS 1.3'],
    },
  ];

  // Filtered case studies
  const filteredCases = React.useMemo(() => {
    if (activeSector === 'Semua') return CASE_STUDIES;
    return CASE_STUDIES.filter((c) => c.tags.includes(activeSector) || c.sectorTag === activeSector);
  }, [activeSector]);

  return (
    <div className="space-y-16">
      {/* 1. TOP HEADER & VALUE PROPOSITION */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8 space-y-4">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500">
          <span className="hover:underline cursor-pointer" onClick={onNavigateHome}>
            Beranda
          </span>
          <span>/</span>
          <span className="text-[#1E3A8A] dark:text-blue-400 font-semibold">Layanan Enterprise</span>
        </nav>

        {/* Official Brand Watermark / Logo Pill */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1E3A8A] flex items-center justify-center text-white font-black text-xs shadow-sm">
            FD
          </div>
          <div>
            <p className="font-mono text-xs font-black tracking-tight text-zinc-900 dark:text-white">
              fitran<span className="text-emerald-500">.dev</span>
            </p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
              Enterprise Software House &amp; AI Engineering
            </p>
          </div>
        </div>

        <div className="max-w-4xl space-y-3 pt-2">
          <h1 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-tight">
            Solusi Rekayasa Perangkat Lunak, Otomasi AI &amp; Keamanan Skala Enterprise
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Menghadirkan standar pengembangan software sekelas industri manufaktur dan enterprise nasional—mulai dari
            landing page kilat Rp 500rb hingga sistem ERP custom, agen AI, dan integrasi data dengan jaminan 100% kepemilikan
            kode serta garansi pemeliharaan berstandar SLA.
          </p>
        </div>

        {/* 4 Enterprise Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60">
            <p className="text-xs font-mono font-bold text-[#1E3A8A] dark:text-blue-300">100% Source Code</p>
            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">Kepemilikan penuh tanpa lock-in</p>
          </div>
          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60">
            <p className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300">60-Day Bug Free SLA</p>
            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">Garansi pemeliharaan tertulis</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800">
            <p className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-200">&lt; 0.8s Super Cepat</p>
            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">Lighthouse 100 &amp; CDN Global</p>
          </div>
          <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60">
            <p className="text-xs font-mono font-bold text-[#1E3A8A] dark:text-blue-300">Zero-Trust Security</p>
            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">Proteksi server 5 lapis</p>
          </div>
        </div>
      </div>

      {/* 2. SECTORAL CASE STUDIES (SEKAWAN MEDIA STYLE) */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#1E3A8A] dark:text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Studi Kasus Sektoral &amp; Portofolio Industri</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
              Penerapan Sistem Nyata di Berbagai Sektor
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              Model penyelesaian sistem perangkat lunak yang dirancang khusus menjawab kompleksitas unik setiap sektor
              industri di Indonesia.
            </p>
          </div>

          {/* Sector Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {['Semua', 'Agrikultur', 'Manufaktur', 'Sosial / NGO', 'Petrokimia', 'Finansial'].map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeSector === sector
                    ? 'bg-[#1E3A8A] text-white shadow-xs'
                    : 'bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className={`p-6 sm:p-7 rounded-3xl border bg-white dark:bg-[#111319] shadow-sm flex flex-col justify-between space-y-6 transition-all hover:shadow-md ${cs.curveColor}`}
            >
              <div className="space-y-4">
                {/* Header: Client & Tags */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/60 dark:border-zinc-800 pb-3">
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-zinc-950 dark:text-white flex items-center gap-2">
                      <span>{cs.client}</span>
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono flex items-center gap-1 mt-0.5">
                      <span>{cs.location}</span>
                      <span>•</span>
                      <span className="font-bold text-zinc-700 dark:text-zinc-300">{cs.sector}</span>
                    </p>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold border ${cs.badgeColor}`}>
                    {cs.highlightMetric}
                  </span>
                </div>

                {/* Tags Pill Row (Matching Sekawan Media style: Agrikultur, Mobile, Web, Custom) */}
                <div className="flex flex-wrap gap-1.5">
                  {cs.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title & Summary */}
                <div className="space-y-2">
                  <h4 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white leading-snug">
                    {cs.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {cs.summary}
                  </p>
                </div>

                {/* Key Features Bullet Points */}
                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-mono uppercase tracking-wider font-bold text-zinc-700 dark:text-zinc-300">
                    Cakupan Rekayasa:
                  </p>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                    {cs.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500">Arsitektur Terverifikasi</span>
                <button
                  onClick={() => onWhatsAppInquiry(cs.title)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Konsultasi Solusi Ini</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. TRANSPARENT PACKAGES & SCOPES */}
      <div className="space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#1E3A8A] dark:text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Katalog Investasi &amp; Paket Pengerjaan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
            Biaya Transparan &amp; Rincian Deliverable
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
            Tidak ada biaya tersembunyi. Semua spesifikasi pengerjaan dituangkan dalam kontrak kerja resmi dengan
            rincian deliverable jelas dan garansi penuh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="p-6 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#1E3A8A] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950 text-[#1E3A8A] dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                    {pkg.code}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {pkg.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-lg text-zinc-950 dark:text-white leading-snug">{pkg.title}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{pkg.description}</p>
                </div>

                {/* Investment Box */}
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 space-y-1">
                  <p className="text-[11px] font-mono text-zinc-500">Estimasi Biaya Investasi:</p>
                  <p className="font-mono text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
                    {pkg.price}
                  </p>
                  <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 pt-1">
                    <Clock className="w-3 h-3" />
                    <span>Waktu Pengerjaan: {pkg.duration}</span>
                  </p>
                </div>

                {/* Scope items */}
                <div className="space-y-2 text-xs">
                  <p className="font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider font-mono text-[11px]">
                    Deliverable Termasuk:
                  </p>
                  <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400">
                    {pkg.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {pkg.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action WhatsApp Button */}
              <button
                onClick={() => onWhatsAppInquiry(pkg.title, pkg.price)}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Pesan Paket via WhatsApp</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 4. 5-PHASE ENGINEERING DEVELOPMENT WORKFLOW (SEKAWAN MEDIA STYLE) */}
      <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50 dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#1E3A8A] dark:text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Standard Operating Procedure (SOP)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
            Metodologi Rekayasa 5 Fase Menuju Go-Live
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
            Proses terstruktur yang menjamin ketepatan waktu, kejelasan spesifikasi, dan zero-surprise selama masa pengerjaan proyek Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              num: '01',
              title: 'Discovery & Scoping',
              desc: 'Analisis kebutuhan bisnis, alur proses eksisting, dan perumusan dokumen spesifikasi sistem (SRS) bebas biaya.',
              accent: 'border-blue-300 text-[#1E3A8A]',
            },
            {
              num: '02',
              title: 'Wireframing & UI/UX',
              desc: 'Penyusunan prototype interaktif Figma, pemilihan arsitektur basis data, dan persetujuan antarmuka pengguna.',
              accent: 'border-blue-400 text-blue-700',
            },
            {
              num: '03',
              title: 'Agile Coding Sprint',
              desc: 'Penulisan kode bersih modular (Next.js/React/Node.js), integrasi basis data, dan demo progres berkala.',
              accent: 'border-emerald-400 text-emerald-700',
            },
            {
              num: '04',
              title: 'Security & QA Testing',
              desc: 'Uji beban ekstrem, verifikasi keamanan OWASP Top 10, audit performa (<0.8s), dan User Acceptance Testing (UAT).',
              accent: 'border-amber-400 text-amber-700',
            },
            {
              num: '05',
              title: 'Go-Live & 60-Day SLA',
              desc: 'Migrasi server zero-downtime, penyerahan full source code repository, serta pendampingan garansi bebas bug 60 hari.',
              accent: 'border-emerald-500 text-emerald-800',
            },
          ].map((phase, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-white dark:bg-zinc-900 border ${phase.accent} space-y-2 flex flex-col justify-between`}
            >
              <div>
                <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">
                  FASE {phase.num}
                </span>
                <h4 className="font-bold text-sm text-zinc-950 dark:text-white mt-2">{phase.title}</h4>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. INTERACTIVE COST ESTIMATOR CALCULATOR */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111319] border border-blue-200 dark:border-blue-900 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Simulasi Anggaran Instan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white tracking-tight">
              Kalkulator Estimasi Biaya Proyek
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Pilih platform dan fitur yang Anda butuhkan untuk mendapatkan perkiraan investasi awal secara transparan.
            </p>
          </div>

          <div className="text-right p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900">
            <p className="text-[11px] font-mono text-zinc-500">Estimasi Investasi Awal:</p>
            <p className="font-mono text-2xl sm:text-3xl font-black text-[#1E3A8A] dark:text-blue-300">
              {calculatedEstimate}
            </p>
          </div>
        </div>

        {/* Options Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {/* Platform */}
          <div className="space-y-1.5">
            <label className="font-bold text-zinc-700 dark:text-zinc-300 font-mono">Platform Utama:</label>
            <select
              value={calcPlatform}
              onChange={(e) => setCalcPlatform(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold cursor-pointer"
            >
              <option value="website">Website / Landing Page</option>
              <option value="webapp">Aplikasi Web / Dashboard</option>
              <option value="mobile">Aplikasi Mobile (Flutter / PWA)</option>
            </select>
          </div>

          {/* Complexity */}
          <div className="space-y-1.5">
            <label className="font-bold text-zinc-700 dark:text-zinc-300 font-mono">Skala &amp; Kebutuhan:</label>
            <select
              value={calcComplexity}
              onChange={(e) => setCalcComplexity(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold cursor-pointer"
            >
              <option value="kilat">Paket Kilat / Sederhana (1-2 Hari)</option>
              <option value="standard">Paket Standar Bisnis (1 Minggu)</option>
              <option value="enterprise">Custom Enterprise (Multi-Modul)</option>
            </select>
          </div>

          {/* AI Toggle */}
          <div className="space-y-1.5">
            <label className="font-bold text-zinc-700 dark:text-zinc-300 font-mono">Fitur AI Agent / Chatbot:</label>
            <button
              type="button"
              onClick={() => setCalcNeedAI(!calcNeedAI)}
              className={`w-full p-2.5 rounded-xl border font-bold text-left flex items-center justify-between cursor-pointer ${
                calcNeedAI
                  ? 'bg-emerald-600 text-white border-emerald-700'
                  : 'bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              <span>{calcNeedAI ? 'Termasuk AI Agent (+2jt)' : 'Tanpa AI'}</span>
              <Check className={`w-4 h-4 ${calcNeedAI ? 'opacity-100' : 'opacity-20'}`} />
            </button>
          </div>

          {/* Security Toggle */}
          <div className="space-y-1.5">
            <label className="font-bold text-zinc-700 dark:text-zinc-300 font-mono">Audit Keamanan 5-Lapis:</label>
            <button
              type="button"
              onClick={() => setCalcNeedSecurity(!calcNeedSecurity)}
              className={`w-full p-2.5 rounded-xl border font-bold text-left flex items-center justify-between cursor-pointer ${
                calcNeedSecurity
                  ? 'bg-[#1E3A8A] text-white border-blue-900'
                  : 'bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              <span>{calcNeedSecurity ? 'Hardening Lengkap (+1.5jt)' : 'Keamanan Standar'}</span>
              <Check className={`w-4 h-4 ${calcNeedSecurity ? 'opacity-100' : 'opacity-20'}`} />
            </button>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 font-mono">
            *Estimasi dapat disesuaikan kembali setelah diskusi mendalam mengenai scope spesifik proyek.
          </p>
          <button
            onClick={() =>
              onWhatsAppInquiry(
                `Simulasi Estimasi: ${calcPlatform} (${calcComplexity}) ${calcNeedAI ? '+ AI' : ''} ${calcNeedSecurity ? '+ Security Hardening' : ''}`,
                calculatedEstimate
              )
            }
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Kirim Simulasi ke WhatsApp Tubagus Fitran</span>
          </button>
        </div>
      </div>
    </div>
  );
};