import React, { useState } from 'react';
import {
  Code2,
  Cpu,
  Layout,
  Database,
  Layers,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  Globe,
  Workflow,
  HelpCircle,
  ExternalLink,
  Award,
  BookOpen,
} from 'lucide-react';
import { CERTIFICATES_DRIVE_URL } from '../data/portfolioData';

interface AboutMeDetailedSectionProps {
  onWhatsAppInquiry: (topic?: string) => void;
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  themePrefix?: string;
}

export const AboutMeDetailedSection: React.FC<AboutMeDetailedSectionProps> = ({
  onWhatsAppInquiry,
  onNavigateHome,
  onNavigateServices,
}) => {
  const [activeRoleTab, setActiveRoleTab] = useState<string>('ai-engineer');
  const [isSchematicHovered, setIsSchematicHovered] = useState<boolean>(false);

  const ENGINEERING_ROLES = [
    {
      id: 'ai-engineer',
      title: 'AI Engineer',
      shortDesc: 'Merancang autonomous agent, RAG SOP privat & integrasi LLM tanpa halusinasi.',
      badge: 'Spesialisasi Inti',
      badgeColor:
        'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      activeTabClass:
        'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-500/20',
      inactiveIconColor: 'text-purple-600 dark:text-purple-400',
      iconBoxClass:
        'bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800/60 text-purple-600 dark:text-purple-400',
      calloutBoxClass:
        'bg-purple-50/70 dark:bg-purple-950/35 border-purple-200/80 dark:border-purple-900/60',
      calloutTitleClass: 'text-purple-900 dark:text-purple-300',
      calloutIconClass: 'text-purple-600 dark:text-purple-400',
      ctaBtnClass: 'bg-purple-600 hover:bg-purple-700 text-white',
      IconComponent: Cpu,
      whatIsIt: 'Apa sih sebenarnya AI Engineer itu?',
      whatIsItAnswer:
        'AI Engineer bukan sekadar orang yang bisa mengetik prompt di ChatGPT. AI Engineer adalah perekayasa software yang mengintegrasikan model kecerdasan buatan (LLM seperti Claude, OpenAI, Gemini) ke dalam proses bisnis riil dengan akurasi terukur, keamanan data terjamin, dan tanpa halusinasi.',
      keyPillars: [
        {
          title: 'Retrieval-Augmented Generation (RAG)',
          desc: 'Menghubungkan AI ke basis dokumen privat (SOP, PDF penawaran, database inventori). AI hanya merespons berdasarkan fakta terverifikasi (ground truth), bukan asumsi bebas.',
        },
        {
          title: 'Autonomous Agents & Function Calling',
          desc: 'Membekali model AI dengan kemampuan mengekusi perintah riil melalui API: cek stok gudang, hitung kalkulasi diskon grosir, generate quotation PDF, hingga sinkronisasi data ke CRM.',
        },
        {
          title: 'Prompt Hardening & Anti-Jailbreak',
          desc: 'Membangun guardrails proteksi agar agent tidak dapat dimanipulasi pengguna untuk mengubah harga, membocorkan system prompt, atau menyimpang dari batasan operasional bisnis.',
        },
        {
          title: 'Deployment WhatsApp & Web Cepat',
          desc: 'Menghubungkan agent ke WhatsApp Business API dan widget web dengan waktu respons di bawah 1.8 detik dan biaya token teroptimasi.',
        },
      ],
      techStack: [
        'LangChain / LlamaIndex',
        'Claude Sonnet API',
        'OpenAI Function Calling',
        'Gemini Pro',
        'pgvector (Vector DB)',
        'WhatsApp Cloud API',
      ],
    },
    {
      id: 'software-engineer',
      title: 'Software Engineer',
      shortDesc: 'Arsitektur sistem tangguh, prinsip SOLID, kode modular, dan keandalan jangka panjang.',
      badge: 'Fondasi Sistem',
      badgeColor:
        'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      activeTabClass:
        'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20',
      inactiveIconColor: 'text-blue-600 dark:text-blue-400',
      iconBoxClass:
        'bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800/60 text-blue-600 dark:text-blue-400',
      calloutBoxClass:
        'bg-blue-50/70 dark:bg-blue-950/35 border-blue-200/80 dark:border-blue-900/60',
      calloutTitleClass: 'text-blue-900 dark:text-blue-300',
      calloutIconClass: 'text-blue-600 dark:text-blue-400',
      ctaBtnClass: 'bg-blue-600 hover:bg-blue-700 text-white',
      IconComponent: Code2,
      whatIsIt: 'Apa peran Software Engineer?',
      whatIsItAnswer:
        'Software Engineer memastikan seluruh sistem dirancang dengan prinsip rekayasa yang matang, bukan sekadar "yang penting jalan". Fokus pada struktur kode yang mudah dipelihara, minim bug, dan siap berkembang seiring pertumbuhan bisnis Anda.',
      keyPillars: [
        {
          title: 'Clean Architecture & SOLID',
          desc: 'Memisahkan logika bisnis dari antarmuka visual dan database, sehingga perubahan teknologi di masa depan tidak merusak sistem yang sudah berjalan.',
        },
        {
          title: 'Testing & Quality Assurance',
          desc: 'Penerapan unit testing dan integration test otomatis untuk menjamin tidak terjadi regresi atau error saat penambahan fitur baru.',
        },
        {
          title: 'Skalabilitas & Efisiensi Memori',
          desc: 'Optimalisasi alur data dan struktur data algoritma agar aplikasi mampu melayani ribuan pengunjung bersamaan tanpa penurunan performa.',
        },
        {
          title: '100% Kepemilikan Source Code',
          desc: 'Seluruh baris kode ditulis rapi, terdokumentasi, dan diserahterimakan seutuhnya ke akun GitHub milik klien tanpa ikatan sewa.',
        },
      ],
      techStack: ['TypeScript', 'Node.js', 'Clean Architecture', 'Git / GitHub CI/CD', 'Docker', 'Vitest'],
    },
    {
      id: 'frontend-engineer',
      title: 'Frontend Engineer',
      shortDesc: 'Antarmuka super cepat <0.8s, responsive di semua gadget, dan aksesibilitas WCAG.',
      badge: 'Antarmuka Visual',
      badgeColor:
        'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      activeTabClass:
        'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/20',
      inactiveIconColor: 'text-emerald-600 dark:text-emerald-400',
      iconBoxClass:
        'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400',
      calloutBoxClass:
        'bg-emerald-50/70 dark:bg-emerald-950/35 border-emerald-200/80 dark:border-emerald-900/60',
      calloutTitleClass: 'text-emerald-900 dark:text-emerald-300',
      calloutIconClass: 'text-emerald-600 dark:text-emerald-400',
      ctaBtnClass: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      IconComponent: Layout,
      whatIsIt: 'Apa keunggulan Frontend Engineering modern?',
      whatIsItAnswer:
        'Frontend Engineer bukan sekadar menyusun layout, melainkan mengoptimalkan pengalaman interaksi setiap milidetik pengunjung. Memastikan tampilan tidak hanya memikat, tetapi juga secepat kilat dan ramah konversi penjualan.',
      keyPillars: [
        {
          title: 'Kecepatan Render Ekstrem (<0.8 Detik)',
          desc: 'Optimasi skor Google Lighthouse 100/100, kompresi gambar modern AVIF/WebP, code-splitting, dan penghapusan render-blocking assets.',
        },
        {
          title: 'Fluid Responsive Mobile-First',
          desc: 'Tampilan presisi dan proporsional dari ponsel compact (360px) hingga layar desktop 4K tanpa elemen yang terpotong atau tumpang tindih.',
        },
        {
          title: 'Aksesibilitas & Standar WCAG',
          desc: 'Kontras warna terbaca jelas di mode terang maupun gelap, semantic HTML terstruktur untuk navigasi keyboard, dan ramah pembaca layar (screen reader).',
        },
        {
          title: 'Animasi Halus 60/120 FPS',
          desc: 'Interaksi mikro yang responsif dan elegan menggunakan hardware acceleration tanpa membebani baterai perangkat pengguna.',
        },
      ],
      techStack: ['React 19', 'Next.js 15', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'TypeScript'],
    },
    {
      id: 'backend-engineer',
      title: 'Backend Engineer',
      shortDesc: 'Database PostgreSQL ACID-safe, API berkecepatan tinggi, dan hardening server 5 lapis.',
      badge: 'Mesin & Keamanan',
      badgeColor:
        'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      activeTabClass:
        'bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-500/20',
      inactiveIconColor: 'text-amber-600 dark:text-amber-400',
      iconBoxClass:
        'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800/60 text-amber-600 dark:text-amber-400',
      calloutBoxClass:
        'bg-amber-50/70 dark:bg-amber-950/35 border-amber-200/80 dark:border-amber-900/60',
      calloutTitleClass: 'text-amber-900 dark:text-amber-300',
      calloutIconClass: 'text-amber-600 dark:text-amber-400',
      ctaBtnClass: 'bg-amber-600 hover:bg-amber-700 text-white',
      IconComponent: Database,
      whatIsIt: 'Apa tugas Backend Engineer?',
      whatIsItAnswer:
        'Backend Engineer adalah perancang fondasi logika, pengelola integritas data transaksi bisnis, serta benteng keamanan server yang beroperasi tanpa henti di belakang layar.',
      keyPillars: [
        {
          title: 'Database Relasional PostgreSQL',
          desc: 'Perancangan skema data ternormalisasi, ACID-compliant untuk keamanan transaksi keuangan/grosir, dan query indexing presisi tinggi.',
        },
        {
          title: '5 Lapisan Hardening Server Linux',
          desc: 'Penerapan firewall UFW ketat, proteksi serangan brute-force Fail2ban, akses SSH Key Only (disable root password), dan enkripsi TLS 1.3 strict.',
        },
        {
          title: 'High-Throughput REST & Webhooks',
          desc: 'Pengembangan endpoint API yang mampu merespons dalam puluhan milidetik dengan rate-limiting andal pencegah serangan denial-of-service.',
        },
        {
          title: 'Kepatuhan OWASP Top 10',
          desc: 'Sanitasi input anti-SQL Injection, parameter binding, proteksi Cross-Site Scripting (XSS), dan manajemen session aman.',
        },
      ],
      techStack: ['PostgreSQL 16', 'Express / Fastify', 'Linux Ubuntu LTS', 'Redis Cache', 'Prisma / Drizzle ORM', 'UFW & Fail2ban'],
    },
    {
      id: 'fullstack-developer',
      title: 'Full Stack Web Developer',
      shortDesc: 'Menjembatani visual hingga infrastruktur cloud, payment gateway, dan Meta CAPI terpadu.',
      badge: 'Solusi End-to-End',
      badgeColor:
        'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
      activeTabClass:
        'bg-cyan-600 text-white border-cyan-600 shadow-md shadow-cyan-500/20',
      inactiveIconColor: 'text-cyan-600 dark:text-cyan-400',
      iconBoxClass:
        'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800/60 text-cyan-600 dark:text-cyan-400',
      calloutBoxClass:
        'bg-cyan-50/70 dark:bg-cyan-950/35 border-cyan-200/80 dark:border-cyan-900/60',
      calloutTitleClass: 'text-cyan-900 dark:text-cyan-300',
      calloutIconClass: 'text-cyan-600 dark:text-cyan-400',
      ctaBtnClass: 'bg-cyan-600 hover:bg-cyan-700 text-white',
      IconComponent: Layers,
      whatIsIt: 'Mengapa butuh Full Stack Web Developer?',
      whatIsItAnswer:
        'Full Stack Developer mengintegrasikan seluruh komponen menjadi satu kesatuan produk yang siap menghasilkan omzet: mulai dari tombol visual di ponsel klien, logika server, basis data, hingga tracking iklan Meta CAPI yang kebal ad-blocker.',
      keyPillars: [
        {
          title: 'Pengiriman Sistem Utuh Siap Pakai',
          desc: 'Membangun aplikasi bisnis dari nol hingga siap diluncurkan ke pasar tanpa ketergantungan pada banyak vendor terpisah.',
        },
        {
          title: 'Technical Marketing & Atribusi Iklan',
          desc: 'Pemasangan Meta Conversions API (CAPI) dan Google Analytics 4 server-side untuk memastikan data transaksi pembelian tercatat 100%.',
        },
        {
          title: 'Integrasi Ekosistem Lengkap',
          desc: 'Menghubungkan aplikasi web dengan sistem pembayaran instan (QRIS / Midtrans), kurir logistik otomatis, dan WhatsApp bot notifikasi.',
        },
        {
          title: 'Deploy ke Edge CDN Global',
          desc: 'Hosting di jaringan global Vercel / Cloudflare edge network, memastikan website terbuka cepat dari kota manapun di seluruh dunia.',
        },
      ],
      techStack: ['Next.js App Router', 'PostgreSQL', 'Meta CAPI', 'Vercel Edge', 'Midtrans Gateway', 'GTM Server-Side'],
    },
  ];

  const currentRole = ENGINEERING_ROLES.find((r) => r.id === activeRoleTab) || ENGINEERING_ROLES[0];
  const CurrentRoleIcon = currentRole.IconComponent;

  return (
    <div className="space-y-12 animate-fade-in">
      {/* 1. TOP BREADCRUMB & HEADER */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5">
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-2">
          <button onClick={onNavigateHome} className="hover:underline cursor-pointer">
            Beranda
          </button>
          <span>/</span>
          <span className="text-[#1E3A8A] dark:text-blue-400 font-semibold">Tentang Tubagus Fitran</span>
        </nav>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
              Profil Rekayasa &amp; Kapabilitas Engineering
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1 max-w-3xl font-normal leading-relaxed">
              Mengenal lebih dalam keahlian software engineer, AI engineer, frontend, backend, hingga full stack developer yang menopang seluruh solusi Fitran Dev.
            </p>
          </div>

          <button
            onClick={() => onWhatsAppInquiry('Konsultasi Kebutuhan Software & AI Engineering')}
            className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Diskusi Langsung via WhatsApp</span>
          </button>
        </div>
      </div>

      {/* 2. PROFILE HERO & AUTHENTIC PHOTO OF TUBAGUS FITRAN BADRUTTAMAM */}
      <div className="rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* SISI KIRI: Bio & Identity Statement */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-[#1E3A8A] dark:text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider">
                Fullstack Developer &amp; AI Engineer
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[10px] font-mono font-bold">
                ✓ Available for Projects
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white leading-tight">
                Tubagus Fitran Badruttamam
              </h2>
              <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
                Cilegon, Banten, Indonesia · Mahasiswa S1 Teknik Informatika (Universitas Muhammadiyah Banten)
              </p>
            </div>

            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              Saya memadukan kedisiplinan rekayasa perangkat lunak modern (clean code, SOLID, keamanan berlapis) dengan akselerasi model kecerdasan buatan (autonomous agent &amp; RAG SOP). Tujuan saya jelas: membantu pemilik bisnis memiliki infrastruktur digital independen, berkecepatan tinggi, dan 100% hak milik kode tanpa biaya sewa lisensi tahunan tersembunyi.
            </p>

            {/* Verified Achievements Pill Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-zinc-700 dark:text-zinc-300">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-medium">Google Developer Program (Verified ID)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-medium">2× Medali Emas Sains Nasional (Grade A+)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                <BookOpen className="w-4 h-4 text-cyan-500 shrink-0" />
                <span className="font-medium">Penulis Buku Resmi Perpusnas RI</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="font-medium">5 Lapisan Keamanan Server &amp; OWASP Top 10</span>
              </div>
            </div>
          </div>

          {/* SISI KANAN: Authentic Portrait of Tubagus Fitran Badruttamam */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-md bg-zinc-50 dark:bg-zinc-900">
              {/* Top Chrome Header */}
              <div className="px-3.5 py-2.5 bg-zinc-100 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-1.5 text-zinc-700 dark:text-zinc-300 font-bold">tubagus-fitran.dev</span>
                </div>
                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  ● Verified Profile
                </span>
              </div>

              {/* Real Portrait of Tubagus Fitran Badruttamam */}
              <div className="relative overflow-hidden bg-gradient-to-b from-zinc-200/80 via-zinc-100 to-zinc-200 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-950 flex items-end justify-center">
                <img
                  src="/tubagus-fitran-avatar.jpg"
                  alt="Tubagus Fitran Badruttamam - Software & AI Engineer"
                  className="w-full aspect-square max-h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#1E3A8A] border border-white/60 flex items-center justify-center font-mono text-xs font-black text-white shadow-sm shrink-0">
                      FD
                    </div>
                    <div>
                      <p className="font-bold text-xs sm:text-sm leading-tight">
                        Tubagus Fitran Badruttamam
                      </p>
                      <p className="text-[10px] text-zinc-200 font-mono">
                        Fullstack Developer &amp; AI Engineer
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-[10px] font-mono font-bold text-white shadow-xs shrink-0">
                    Verified
                  </span>
                </div>
              </div>

              {/* Quick Info Footer */}
              <div className="p-3 bg-white dark:bg-zinc-900 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Cilegon, Indonesia</span>
                </span>
                <a
                  href={CERTIFICATES_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E3A8A] dark:text-blue-400 font-bold hover:underline flex items-center gap-1 text-[11px]"
                >
                  <span>36+ Sertifikat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2.5 1 KARTU ANIMASI SKEMA VEKTOR KHUSUS /TENTANG (END-TO-END ENGINEERING BRIDGE) */}
      <div
        onClick={onNavigateServices}
        onMouseEnter={() => setIsSchematicHovered(true)}
        onMouseLeave={() => setIsSchematicHovered(false)}
        className="group relative rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 hover:border-blue-500/80 dark:hover:border-blue-400/80 bg-white dark:bg-[#111319] p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer select-none"
      >
        {/* Open Vector Schematic Canvas (1 Wide Card for /tentang) */}
        <div className="relative w-full h-32 sm:h-40 mb-3 flex items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 460 116"
            className="w-full h-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <pattern id="grid-tentang-1" width="16" height="16" patternUnits="userSpaceOnUse">
                <path
                  d="M 16 0 L 0 0 0 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.6"
                  strokeDasharray="2 2"
                  className="text-zinc-200/90 dark:text-zinc-800/90"
                />
              </pattern>
            </defs>
            <rect x="6" y="6" width="448" height="104" rx="12" fill="url(#grid-tentang-1)" />

            {/* Node 1: Frontend <0.8s */}
            <g
              className="transition-transform duration-500"
              style={{ transform: isSchematicHovered ? 'translateY(-2px)' : 'translateY(0px)' }}
            >
              <rect
                x="16"
                y="24"
                width="92"
                height="68"
                rx="10"
                className="fill-white dark:fill-[#151923] stroke-emerald-500"
                strokeWidth="1.75"
              />
              <rect x="24" y="33" width="76" height="14" rx="4" className="fill-emerald-500/15" />
              <text
                x="62"
                y="43"
                textAnchor="middle"
                className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[9.5px] font-black"
              >
                FRONTEND
              </text>
              <rect x="26" y="54" width="72" height="4.5" rx="2" className="fill-zinc-300 dark:fill-zinc-600" />
              <text
                x="62"
                y="79"
                textAnchor="middle"
                className="fill-zinc-800 dark:fill-zinc-200 font-mono text-[10.5px] font-black"
              >
                &lt;0.8s UI
              </text>
            </g>

            {/* Connector 1 -> 2 */}
            <line
              x1="108"
              y1="58"
              x2="134"
              y2="58"
              stroke="#10B981"
              strokeWidth="2"
              strokeDasharray="4 3"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="14"
                to="0"
                dur="1s"
                repeatCount="indefinite"
              />
            </line>

            {/* Node 2: AI Agent & RAG Core */}
            <g
              className="transition-transform duration-500"
              style={{
                transform: isSchematicHovered ? 'scale(1.04)' : 'scale(1)',
                transformOrigin: '180px 58px',
              }}
            >
              <rect
                x="134"
                y="24"
                width="92"
                height="68"
                rx="10"
                className="fill-white dark:fill-[#151923] stroke-purple-500"
                strokeWidth="1.75"
              />
              <rect x="142" y="33" width="76" height="14" rx="4" className="fill-purple-500/15" />
              <text
                x="180"
                y="43"
                textAnchor="middle"
                className="fill-purple-600 dark:fill-purple-400 font-mono text-[9.5px] font-black"
              >
                AI ENGINE
              </text>
              <rect x="144" y="54" width="72" height="4.5" rx="2" className="fill-zinc-300 dark:fill-zinc-600" />
              <text
                x="180"
                y="79"
                textAnchor="middle"
                className="fill-zinc-800 dark:fill-zinc-200 font-mono text-[10.5px] font-black"
              >
                RAG &amp; AGENT
              </text>
            </g>

            {/* Connector 2 -> 3 */}
            <line
              x1="226"
              y1="58"
              x2="252"
              y2="58"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeDasharray="4 3"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="14"
                to="0"
                dur="1s"
                repeatCount="indefinite"
              />
            </line>

            {/* Node 3: Hardened Backend & DB */}
            <g
              className="transition-transform duration-500"
              style={{ transform: isSchematicHovered ? 'translateY(-2px)' : 'translateY(0px)' }}
            >
              <rect
                x="252"
                y="24"
                width="92"
                height="68"
                rx="10"
                className="fill-white dark:fill-[#151923] stroke-amber-500"
                strokeWidth="1.75"
              />
              <rect x="260" y="33" width="76" height="14" rx="4" className="fill-amber-500/15" />
              <text
                x="298"
                y="43"
                textAnchor="middle"
                className="fill-amber-600 dark:fill-amber-400 font-mono text-[9.5px] font-black"
              >
                BACKEND
              </text>
              <rect x="262" y="54" width="72" height="4.5" rx="2" className="fill-zinc-300 dark:fill-zinc-600" />
              <text
                x="298"
                y="79"
                textAnchor="middle"
                className="fill-zinc-800 dark:fill-zinc-200 font-mono text-[10.5px] font-black"
              >
                5X SECURITY
              </text>
            </g>

            {/* Connector 3 -> 4 */}
            <line
              x1="344"
              y1="58"
              x2="368"
              y2="58"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeDasharray="4 3"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="14"
                to="0"
                dur="1s"
                repeatCount="indefinite"
              />
            </line>

            {/* Node 4: 100% Source Code Handover */}
            <g
              className="transition-transform duration-500"
              style={{
                transform: isSchematicHovered ? 'scale(1.05)' : 'scale(1)',
                transformOrigin: '406px 58px',
              }}
            >
              <rect
                x="368"
                y="24"
                width="76"
                height="68"
                rx="10"
                className="fill-white dark:fill-[#151923] stroke-blue-600 dark:stroke-blue-400"
                strokeWidth="2"
              />
              <circle cx="406" cy="46" r="10" fill="#10B981" />
              <path
                d="M 402 46 L 405 49 L 411 43"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="406"
                y="77"
                textAnchor="middle"
                className="fill-zinc-900 dark:fill-white font-mono text-[10px] font-black"
              >
                FULL CODE
              </text>
            </g>
          </svg>
        </div>

        {/* Title, Badge & Concise Description */}
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-heading text-base sm:text-lg font-extrabold text-zinc-950 dark:text-white leading-snug group-hover:text-[#1E3A8A] dark:group-hover:text-blue-400 transition-colors">
              Sinergi 5 Peran Rekayasa dalam Satu Ekosistem Utuh
            </h3>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-700 dark:text-blue-300 font-mono text-[10px] font-bold uppercase shrink-0">
              100% HAK MILIK KLIEN
            </span>
          </div>
          <p className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Mulai dari antarmuka web &lt;0.8 detik, integrasi AI agent WhatsApp, keamanan server 5 lapis, hingga serah terima 100% source code ke repositori bisnis Anda.
          </p>
        </div>
      </div>

      {/* 3. INTERACTIVE 5 ENGINEERING ROLES EXPLORATION (HARMONIOUS ROLE COLORS, ZERO COLOR CLASH) */}
      <div className="space-y-6 pt-2">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#1E3A8A] dark:text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>KAPABILITAS 5 PERAN UTAMA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
            Penjelasan Mendalam 5 Peran Rekayasa Saya
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal">
            Pilih peran di bawah ini untuk melihat apa yang saya kerjakan, standar teknis, serta implementasi nyatanya untuk bisnis Anda:
          </p>
        </div>

        {/* Role Navigation Tabs — Each Role Uses Its Own Harmonious Active Color + Crisp White Active Icon */}
        <div className="flex flex-wrap items-center gap-2.5 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          {ENGINEERING_ROLES.map((role) => {
            const isActive = activeRoleTab === role.id;
            const RoleIcon = role.IconComponent;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRoleTab(role.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? role.activeTabClass
                    : 'bg-white dark:bg-[#111319] border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                <RoleIcon
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    isActive ? 'text-white' : role.inactiveIconColor
                  }`}
                />
                <span>{role.title}</span>
              </button>
            );
          })}
        </div>

        {/* Role Detailed Deep-Dive Card */}
        <div className="rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 p-6 sm:p-10 shadow-sm space-y-8">
          {/* Header Role */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-5">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${currentRole.iconBoxClass}`}
                >
                  <CurrentRoleIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
                    {currentRole.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono">{currentRole.shortDesc}</p>
                </div>
              </div>
            </div>

            <span
              className={`px-3 py-1 rounded-full font-mono text-[11px] font-bold border uppercase tracking-wider self-start sm:self-auto ${currentRole.badgeColor}`}
            >
              {currentRole.badge}
            </span>
          </div>

          {/* Deep Explanation Box: "Apa sih ... itu?" (Matches Role Theme Color) */}
          <div className={`p-5 sm:p-6 rounded-2xl border space-y-2 ${currentRole.calloutBoxClass}`}>
            <h4 className={`font-bold text-sm flex items-center gap-2 ${currentRole.calloutTitleClass}`}>
              <HelpCircle className={`w-4 h-4 shrink-0 ${currentRole.calloutIconClass}`} />
              <span>{currentRole.whatIsIt}</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              {currentRole.whatIsItAnswer}
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">
              STANDAR REKAYASA &amp; IMPLEMENTASI NYATA
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentRole.keyPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800 space-y-2 transition-colors"
                >
                  <div className="flex items-center gap-2 text-zinc-950 dark:text-white font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal pl-6">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Row */}
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-bold text-zinc-500 block">Stack &amp; Tool Utama:</span>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {currentRole.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700 font-mono text-[11px] font-semibold text-zinc-800 dark:text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onWhatsAppInquiry(`Konsultasi Layanan Terkait ${currentRole.title}`)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0 shadow-xs ${currentRole.ctaBtnClass}`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Gunakan Keahlian Ini</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. GROUNDED CTA BANNER */}
      <div className="p-6 sm:p-10 rounded-3xl bg-linear-to-r from-blue-50/80 via-sky-50/50 to-emerald-50/80 dark:from-zinc-900 dark:via-[#111319] dark:to-zinc-900 border border-blue-200 dark:border-blue-900 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-blue-400">
            KOLABORASI &amp; PROYEK
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white">
            Siap Membangun Solusi Digital Bersama Tubagus Fitran?
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            Dari pembuatan website kilat &lt;0.8s, WhatsApp AI agent otomatis, hingga perancangan aplikasi kustom skala bisnis. Dapatkan konsultasi arsitektur gratis tanpa komitmen.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => onWhatsAppInquiry('Diskusi Proyek Digital Baru')}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat via WhatsApp</span>
          </button>
          <button
            onClick={onNavigateServices}
            className="px-5 py-3 rounded-xl bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 font-bold text-xs hover:bg-zinc-50 transition-colors cursor-pointer"
          >
            Lihat 16 Katalog Layanan
          </button>
        </div>
      </div>
    </div>
  );
};
