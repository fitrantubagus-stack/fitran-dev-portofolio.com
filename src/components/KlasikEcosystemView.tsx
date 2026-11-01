import React, { useState, useMemo } from 'react';
import {
  KLASIK_SERVICES,
  KLASIK_SECURITY_LAYERS,
  KLASIK_LEARNING_CHAPTERS,
  KLASIK_KAMUS,
  KLASIK_BLOG_POSTS,
  ServicePackage,
  LearningChapter,
  BlogPost,
  SecurityLayer,
  KamusTerm,
} from '../data/klasikEcosystemData';
import {
  PERSONAL_INFO,
  CERTIFICATES_DATA,
  PROJECTS_DATA,
  HIGHLIGHTS_METRICS,
  CERTIFICATES_DRIVE_URL,
} from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import { GoogleDeveloperLogo } from './GoogleDeveloperLogo';
import { SpotifyPlaylist } from './SpotifyPlaylist';
import { CertificateItem, ProjectItem } from '../types';
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  HelpCircle,
  Layers,
  Mail,
  MessageSquare,
  Search,
  Sparkles,
  Terminal,
  X,
  ArrowRight,
  ShieldCheck,
  Clock,
  Compass,
  Lock,
  Server,
  Cpu,
  Database,
  Tag,
  Zap,
  Check,
  ChevronDown,
  PhoneCall,
  Activity,
  AlertCircle,
  Shield,
  Smartphone,
  Share2,
} from 'lucide-react';

interface KlasikEcosystemViewProps {
  onOpenCV?: () => void;
  onSelectCertificate?: (cert: CertificateItem) => void;
  onSelectProject?: (project: ProjectItem) => void;
}

export const KlasikEcosystemView: React.FC<KlasikEcosystemViewProps> = ({
  onOpenCV,
  onSelectCertificate,
  onSelectProject,
}) => {
  // Modal states
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(null);

  // Learning curriculum state
  const [activeChapterId, setActiveChapterId] = useState<string>('ai-00');
  const [activeSubchapterId, setActiveSubchapterId] = useState<string>('ai-00-1');

  // Filter states
  const [serviceCategoryFilter, setServiceCategoryFilter] = useState<string>('Semua');
  const [kamusSearch, setKamusSearch] = useState<string>('');
  const [kamusCategory, setKamusCategory] = useState<string>('Semua');
  const [blogFilter, setBlogFilter] = useState<string>('Semua');

  // Interactive FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Active chapter and subchapter resolution
  const activeChapter =
    KLASIK_LEARNING_CHAPTERS.find((c) => c.id === activeChapterId) || KLASIK_LEARNING_CHAPTERS[0];
  const activeSubchapter =
    activeChapter.subchapters.find((s) => s.id === activeSubchapterId) ||
    activeChapter.subchapters[0];

  // Filtering services
  const serviceCategories = ['Semua', 'Website Online', 'Aplikasi & Dashboard', 'AI & Otomasi', 'Infrastruktur Cloud', 'Keamanan & Tracking'];
  const filteredServices = useMemo(() => {
    if (serviceCategoryFilter === 'Semua') return KLASIK_SERVICES;
    return KLASIK_SERVICES.filter((s) => s.category === serviceCategoryFilter);
  }, [serviceCategoryFilter]);

  // Filtering Kamus
  const kamusCategories = ['Semua', 'AI & Machine Learning', 'Web & Arsitektur', 'Cloud & DevOps', 'Keamanan & Tracking'];
  const filteredKamus = useMemo(() => {
    return KLASIK_KAMUS.filter((k) => {
      const matchSearch =
        k.term.toLowerCase().includes(kamusSearch.toLowerCase()) ||
        k.definition.toLowerCase().includes(kamusSearch.toLowerCase()) ||
        k.practicalTip.toLowerCase().includes(kamusSearch.toLowerCase());
      const matchCat = kamusCategory === 'Semua' || k.category === kamusCategory;
      return matchSearch && matchCat;
    });
  }, [kamusSearch, kamusCategory]);

  // WhatsApp consultation triggers
  const handleWhatsAppConsultation = (serviceName?: string, price?: string) => {
    const text = serviceName
      ? `Halo Tubagus Fitran, saya membaca portofolio fitran.dev dan ingin konsultasi paket layanan: ${serviceName}${price ? ` (${price})` : ''}. Boleh minta info estimasi waktu & langkah awalnya?`
      : `Halo Tubagus Fitran, saya membaca portofolio & materi di fitran.dev dan ingin mendiskusikan kebutuhan sistem digital / website / AI agent untuk bisnis saya.`;
    const url = `https://wa.me/6282211993414?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderSecurityIcon = (icon: string) => {
    switch (icon) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const FAQ_ITEMS = [
    {
      q: 'Berapa biaya minimal untuk membuat website online?',
      a: 'Biaya mulai dari Rp 500.000 untuk paket Website Online Kilat (1 halaman responsif, tombol WhatsApp leads, SSL HTTPS aktif, dan gratis hosting cloud). Untuk website multi-halaman perusahaan berkisar Rp 1.500.000, dan aplikasi dashboard custom mulai Rp 3.500.000.',
    },
    {
      q: 'Apakah ada biaya langganan bulanan atau biaya tersembunyi?',
      a: 'Tidak ada biaya tersembunyi. Pekerjaan bersifat sekali jadi (one-off). Setelah serah terima, seluruh source code, akses domain, dan hosting menjadi 100% milik Anda. Untuk hosting gratis via Vercel/Cloudflare, Anda tidak perlu bayar biaya server bulanan untuk lalu lintas standar.',
    },
    {
      q: 'Apa bedanya WhatsApp AI Agent dengan chatbot biasa?',
      a: 'Chatbot biasa hanya mencocokkan kata kunci kaku (jika salah ketik, bot bingung). AI Agent membaca konteks kalimat bahasa Indonesia yang bervariasi menggunakan LLM cerdas, mengambil data dari dokumen SOP/katalog bisnis Anda (RAG), memiliki guardrails agar tidak berhalusinasi, serta otomatis mengalihkan obrolan ke staf manusia jika pelanggan butuh bantuan khusus.',
    },
    {
      q: 'Bagaimana standar keamanan yang diterapkan pada website & aplikasi?',
      a: 'Saya menerapkan 5 Lapisan Keamanan Terstruktur: Enkripsi TLS 1.3 Strict & Cloudflare Anti-DDoS, Hardening Server Linux (SSH Key Only, UFW Firewall, Fail2ban), Sanitasi Input Anti-SQLi & XSS, Guardrails Sandboxing untuk AI, dan Pencadangan Terenkripsi Harian (Disaster Recovery).',
    },
    {
      q: 'Berapa lama proses pengerjaan dari awal hingga online?',
      a: 'Website Kilat: 1 - 2 hari kerja. Website Perusahaan: 3 - 5 hari kerja. WhatsApp AI Agent: 3 - 5 hari kerja. Aplikasi Web Dashboard: 7 - 14 hari kerja. Estimasi disepakati secara tertulis di awal sebelum pengerjaan dimulai.',
    },
    {
      q: 'Bagaimana cara memulai konsultasi?',
      a: 'Cukup klik tombol Konsultasi WhatsApp di website ini. Ceritakan kebutuhan, kendala saat ini, atau contoh referensi yang Anda inginkan. Saya akan menganalisis dan memberikan rekomendasi solusi teknis beserta estimasi waktu yang transparan.',
    },
  ];

  return (
    <div className="w-full bg-[#FAFAFC] dark:bg-[#090A0F] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      {/* ========================================================================= */}
      {/* 1. STICKY SUB-BAR ANCHOR NAVIGATION (ALA FIKRAN.DEV ECOSYSTEM)             */}
      {/* ========================================================================= */}
      <div className="sticky top-16 z-40 w-full bg-white/85 dark:bg-[#0B0D13]/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3 overflow-x-auto scrollbar-none text-xs">
          <div className="flex items-center gap-1.5 shrink-0 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-zinc-900 dark:text-white">Ekosistem Fikran.dev</span>
            <span className="text-zinc-400 hidden sm:inline">•</span>
            <span className="text-zinc-500 dark:text-zinc-400 hidden sm:inline">Konsep Lengkap &amp; Terstruktur</span>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {[
              { id: 'layanan', label: 'Layanan 500k', icon: <Briefcase className="w-3.5 h-3.5" /> },
              { id: 'keamanan', label: 'Keamanan 5 Lapis', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
              { id: 'alur-kerja', label: 'Cara Kerja', icon: <Layers className="w-3.5 h-3.5" /> },
              { id: 'belajar', label: 'Pusat Belajar', icon: <Compass className="w-3.5 h-3.5" /> },
              { id: 'kamus', label: 'Kamus', icon: <BookOpen className="w-3.5 h-3.5" /> },
              { id: 'blog', label: 'Blog', icon: <FileText className="w-3.5 h-3.5" /> },
              { id: 'tentang', label: 'Tentang Saya', icon: <GraduationCap className="w-3.5 h-3.5" /> },
              { id: 'faq', label: 'FAQ', icon: <HelpCircle className="w-3.5 h-3.5" /> },
            ].map((anchor) => (
              <button
                key={anchor.id}
                onClick={() => scrollToAnchor(anchor.id)}
                className="px-2.5 py-1 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-all cursor-pointer font-medium whitespace-nowrap flex items-center gap-1.5 text-[11px]"
              >
                {anchor.icon}
                <span>{anchor.label}</span>
              </button>
            ))}

            <button
              onClick={() => handleWhatsAppConsultation()}
              className="ml-2 px-3 py-1 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all cursor-pointer whitespace-nowrap text-[11px] flex items-center gap-1 shadow-xs"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
        {/* ========================================================================= */}
        {/* 2. HERO SECTION (ALA FIKRAN.DEV & FIKRAN.DEV/ABOUT)                      */}
        {/* ========================================================================= */}
        <section id="beranda" className="pt-2">
          {/* Breadcrumb ala fikran.dev/about */}
          <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-6" aria-label="Breadcrumb">
            <span className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Beranda
            </span>
            <span className="text-zinc-400">/</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Tubagus Fitran Badruttamam
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading & Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>TERSEDIA UNTUK PROYEK BARU • MULAI RP 500.000</span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
                  Fullstack Developer <br />
                  <span className="text-emerald-600 dark:text-emerald-400">&amp; AI Engineer.</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal max-w-2xl">
                  Saya merancang aplikasi web kilat performa tinggi, AI agent WhatsApp yang terhubung langsung dengan proses bisnis Anda, serta arsitektur server dengan 5 lapisan keamanan terstruktur.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => handleWhatsAppConsultation()}
                  className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                  <span>Konsultasi WhatsApp Langsung</span>
                </button>

                <button
                  onClick={() => scrollToAnchor('layanan')}
                  className="px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-sm transition-all cursor-pointer flex items-center gap-2 shadow-2xs"
                >
                  <Briefcase className="w-4 h-4 text-zinc-500" />
                  <span>Paket Layanan (500rb)</span>
                </button>

                {onOpenCV && (
                  <button
                    onClick={onOpenCV}
                    className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white font-medium text-xs transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Curriculum Vitae (PDF)</span>
                  </button>
                )}
              </div>

              {/* Fast Stats Row */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">Kecepatan Render</p>
                  <p className="font-bold text-zinc-950 dark:text-white font-mono text-sm">&lt; 1.0 Detik (95+)</p>
                </div>
                <div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">Sistem Keamanan</p>
                  <p className="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-sm">5 Lapisan Teruji</p>
                </div>
                <div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">Pusat Belajar</p>
                  <p className="font-bold text-zinc-950 dark:text-white font-mono text-sm">Roadmap 4 Pilar</p>
                </div>
                <div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">Akses &amp; Lisensi</p>
                  <p className="font-bold text-zinc-950 dark:text-white font-mono text-sm">100% Hak Klien</p>
                </div>
              </div>
            </div>

            {/* Right Column: Profile Card (Inspired by fikran.dev/about) */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <ProfileAvatar size="hero" showBadge={true} />
                    <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-zinc-950 dark:text-white">
                      Tubagus Fitran Badruttamam
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Cilegon, Banten, Indonesia (Remote Ready)
                    </p>
                    <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[11px] font-mono font-medium text-zinc-700 dark:text-zinc-300">
                      <GoogleDeveloperLogo size={12} />
                      <span>Verified Google Developer</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs border-t border-zinc-100 dark:border-zinc-800 pt-4">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-zinc-900 dark:text-white">Universitas Muhammadiyah Banten</p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">S1 Teknik Informatika • Fokus Arsitektur Data &amp; Backend</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-zinc-900 dark:text-white">2× Medali Emas Sains Nasional</p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">Olimpiade Matematika &amp; Sejarah Nasional (Grade A+)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <BookOpen className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-zinc-900 dark:text-white">Penulis Terpilih Perpusnas RI</p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">Kompilasi Resmi HUT ke-46 Perpustakaan Nasional RI</p>
                    </div>
                  </div>
                </div>

                {/* Quick WhatsApp Card Trigger */}
                <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <button
                    onClick={() => handleWhatsAppConsultation()}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Mulai Diskusi Kebutuhan via WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. TIGA PILAR UTAMA (INSPIRED BY FIKRAN.DEV HOME)                         */}
        {/* ========================================================================= */}
        <section id="pilar" className="space-y-6">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              Kapabilitas Inti
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              AI Agent, Otomasi &amp; Fullstack Engineering untuk Bisnis.
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              Fokus pada penyelesaian masalah nyata operasional dan penjualan, bukan sekadar menampilkan teknologi tanpa dampak terukur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-md">
                  01
                </span>
                <Globe className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="font-bold text-lg text-zinc-950 dark:text-white">Pengembangan Web &amp; Aplikasi</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Membangun landing page cepat, website profil bisnis, portal klien, dan dashboard internal yang responsif dan mudah dikelola tanpa ketergantungan agensi.
              </p>
              <ul className="text-[11px] text-zinc-500 dark:text-zinc-400 space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Website Online Kilat mulai Rp 500rb</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Skor Google PageSpeed 95+</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> 100% Source Code &amp; Kepemilikan Klien</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 transition-all shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 px-2.5 py-1 rounded-md">
                  02
                </span>
                <Cpu className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="font-bold text-lg text-zinc-950 dark:text-white">AI Agent &amp; Otomasi Alur Kerja</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Menghubungkan WhatsApp bisnis, formulir web, dan spreadsheet dengan AI cerdas yang memahami konteks bisnis dan memiliki batasan eskalasi aman ke manusia.
              </p>
              <ul className="text-[11px] text-zinc-500 dark:text-zinc-400 space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-500 shrink-0" /> WhatsApp AI Agent respons 24/7</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-500 shrink-0" /> Guardrail ketat anti-halusinasi</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-purple-500 shrink-0" /> Integrasi otomatisasi n8n &amp; Make</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 transition-all shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-2.5 py-1 rounded-md">
                  03
                </span>
                <ShieldCheck className="w-5 h-5 text-zinc-400" />
              </div>
              <h3 className="font-bold text-lg text-zinc-950 dark:text-white">Keamanan Terstruktur &amp; Tracking</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Infrastruktur terlindungi dengan 5 lapisan keamanan sistem (SSL/TLS 1.3, Zero-Trust VPS, sanitasi data anti-SQLi) serta tracking Meta CAPI yang kebal ad-blocker.
              </p>
              <ul className="text-[11px] text-zinc-500 dark:text-zinc-400 space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-cyan-500 shrink-0" /> Setup VPS Hardening mulai Rp 750rb</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-cyan-500 shrink-0" /> Meta Conversions API (CAPI) 100% akurat</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-cyan-500 shrink-0" /> Backup otomatis harian terenkripsi</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. KATALOG LAYANAN RESMI DENGAN HARGA RINCI (MULAI 500 RIBUAN)           */}
        {/* ========================================================================= */}
        <section id="layanan" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold mb-2">
                <Tag className="w-3.5 h-3.5" />
                <span>HARGA TRANSPARAN TANPA BIAYA TERSEMBUNYI</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Katalog Layanan &amp; Rincian Investasi
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
                Dimulai dari Rp 500.000 untuk website online kilat. Cocok untuk UMKM, profesional mandiri, agensi, hingga aplikasi operasional perusahaan.
              </p>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              {serviceCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setServiceCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    serviceCategoryFilter === cat
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold'
                      : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/60 transition-all shadow-xs flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {service.code}
                    </span>
                    {service.badge && (
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-zinc-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Pricing Box */}
                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/80">
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Investasi Pengerjaan:</p>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="font-mono text-2xl font-black text-zinc-950 dark:text-white">
                        {service.price}
                      </span>
                      {service.originalPrice && (
                        <span className="font-mono text-xs text-zinc-400 line-through">
                          {service.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-500" />
                      <span>Estimasi: {service.duration}</span>
                    </p>
                  </div>

                  {/* Scope Highlights Preview */}
                  <div className="space-y-2 pt-1 text-xs">
                    <p className="font-semibold text-zinc-800 dark:text-zinc-200 text-[11px] uppercase tracking-wider font-mono">
                      Cakupan Pekerjaan Termasuk:
                    </p>
                    <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400 text-xs">
                      {service.scope.slice(0, 4).map((sc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{sc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-2.5 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Rincian Scope &amp; Spesifikasi Lengkap</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppConsultation(service.title, service.price)}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Pesan Layanan Ini via WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. ARSITEKTUR SISTEM KEAMANAN TERSTRUKTUR (5 LAPISAN PERTAHANAN)           */}
        {/* ========================================================================= */}
        <section id="keamanan" className="space-y-6">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SISTEM KEAMANAN TERSTRUKTUR • STANDAR PRODUKSI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              5 Lapisan Keamanan Website &amp; Infrastruktur Digital
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              Keamanan bukanlah fitur tambahan, melainkan pondasi wajib sejak baris kode pertama ditulis. Setiap proyek diproteksi dengan 5 tingkat perlindungan aktif.
            </p>
          </div>

          {/* 5 Layer Visual Stack Cards */}
          <div className="space-y-4">
            {KLASIK_SECURITY_LAYERS.map((layer, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all shadow-xs"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700 shrink-0">
                      {renderSecurityIcon(layer.icon)}
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                        {layer.level}
                      </span>
                      <h3 className="font-bold text-lg text-zinc-950 dark:text-white mt-0.5">
                        {layer.title}
                      </h3>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 max-w-3xl leading-relaxed">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  {layer.measures.map((measure, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 flex items-start gap-2 text-zinc-700 dark:text-zinc-300"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-snug">{measure}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 16 Parameter Security Audit Checklist Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
              <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Daftar Parameter Audit Keamanan Sebelum Rilis (Production Ready Checklist)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-zinc-700 dark:text-zinc-300">
              {[
                'Enkripsi TLS 1.3 Strict & HSTS',
                'Anti-SQL Injection via ORM/Prepared',
                'Proteksi XSS & Sanitasi HTML',
                'CSRF Token & SameSite Cookies',
                'Firewall UFW & Port SSH Tertutup',
                'Fail2ban Anti-Brute-Force',
                'Zero-Trust Tailscale Private Mesh',
                'Enkripsi Password Bcrypt + Salt',
                'AI Prompt Sandboxing & Guardrails',
                'Filter Data Sensitif (PII Sensor)',
                'Human Escalation Triggers for Bot',
                'Auto Backup Harian AES-256 S3',
                'Core Web Vitals LCP < 1.0 Detik',
                'Content Security Policy (CSP)',
                'Sitemap XML & Robots.txt Aman',
                '100% Source Code Hak Klien',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-md bg-white/80 dark:bg-zinc-900/80 border border-emerald-100 dark:border-emerald-900/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. ALUR CARA KERJA (INSPIRED BY FIKRAN.DEV: YANG TERJADI SETELAH BRIEF)   */}
        {/* ========================================================================= */}
        <section id="alur-kerja" className="space-y-6">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              Transparansi Kolaborasi
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              Yang Terjadi Setelah Anda Mengirim Konteks Proyek
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              Empat tahap terstruktur untuk menerjemahkan kebutuhan bisnis Anda menjadi sistem perangkat lunak yang andal dan selesai tepat waktu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                step: 'AWAL',
                title: 'Pahami Konteks & Masalah',
                desc: 'Ceritakan target bisnis, alur operasional saat ini, atau contoh tampilan yang diinginkan. Saya memetakan masalah inti dan ukuran keberhasilannya.',
              },
              {
                num: '02',
                step: 'SETELAH BRIEF',
                title: 'Prioritas & Scope Tertulis',
                desc: 'Saya usulkan pendekatan teknis, estimasi durasi, dan daftar deliverables yang disepakati bersama secara tertulis tanpa biaya terselubung.',
              },
              {
                num: '03',
                step: 'PENGERJAAN',
                title: 'Coding, Keamanan & Staging',
                desc: 'Pembangunan website/sistem dilakukan dengan pengujian performa <1s, penerapan 5 lapisan keamanan, dan tautan preview staging untuk Anda cek.',
              },
              {
                num: '04',
                step: 'PENYELESAIAN',
                title: 'Review, Rilis & Serah Terima 100%',
                desc: 'Testing akhir bersama, deployment ke domain utama Anda, serta penyerahan hak akses repositori kode dan panduan pengelolaan mandiri.',
              },
            ].map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 transition-all shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-zinc-300 dark:text-zinc-700">
                    {st.num}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
                    {st.step}
                  </span>
                </div>
                <h3 className="font-bold text-base text-zinc-950 dark:text-white">
                  {st.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. PUSAT BELAJAR & KURIKULUM AI / WEB (LEBIH LENGKAP DARI FIKRAN.DEV)     */}
        {/* ========================================================================= */}
        <section id="belajar" className="space-y-6">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 font-mono text-xs font-bold mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>DOKUMENTASI &amp; MATERI PRAKTIK REKAYASA SISTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              Pusat Belajar AI, Arsitektur Web &amp; Keamanan Sistem
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              Kurikulum terstruktur yang merinci alur kerja nyata: dari pemahaman AI Agent, pencegahan halusinasi, sanitasi database, hingga hardening server cloud.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Chapter List */}
            <div className="lg:col-span-4 space-y-2">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 px-1 mb-2">
                Daftar Bab Kurikulum ({KLASIK_LEARNING_CHAPTERS.length} Bab)
              </p>

              <div className="space-y-2">
                {KLASIK_LEARNING_CHAPTERS.map((ch) => {
                  const isActive = ch.id === activeChapterId;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => {
                        setActiveChapterId(ch.id);
                        setActiveSubchapterId(ch.subchapters[0].id);
                      }}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isActive
                          ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border-zinc-900 dark:border-white shadow-md'
                          : 'bg-white dark:bg-[#111319] border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600'
                      }`}
                    >
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded shrink-0 ${
                        isActive
                          ? 'bg-emerald-500 text-white dark:bg-emerald-600 dark:text-white'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                      }`}>
                        {ch.code}
                      </span>
                      <div className="min-w-0">
                        <p className="font-bold text-xs leading-snug line-clamp-1">{ch.title}</p>
                        <p className={`text-[11px] mt-0.5 line-clamp-1 ${isActive ? 'text-zinc-300 dark:text-zinc-700' : 'text-zinc-400'}`}>
                          {ch.kicker}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Active Chapter Detail Reader */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6">
              <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {activeChapter.code} • {activeChapter.kicker}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    Target: {activeChapter.audience}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white">
                  {activeChapter.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                  {activeChapter.summary}
                </p>
              </div>

              {/* Subchapter Selector Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-3">
                {activeChapter.subchapters.map((sub) => {
                  const isSubActive = sub.id === activeSubchapterId;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => setActiveSubchapterId(sub.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSubActive
                          ? 'bg-emerald-600 text-white font-bold shadow-xs'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                      }`}
                    >
                      <span>{sub.num}</span>
                      <span className="line-clamp-1">{sub.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Deep Subchapter Content */}
              <div className="space-y-5 text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-base text-zinc-950 dark:text-white mb-2">
                    {activeSubchapter.num} {activeSubchapter.title}
                  </h4>
                </div>

                {/* Situation / Real Case */}
                <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 space-y-1">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                    Masalah Riil di Lapangan:
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-xs">
                    {activeSubchapter.situation}
                  </p>
                </div>

                {/* Explanation */}
                <div className="space-y-2">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Penjelasan Konsep &amp; Logika Arsitektur:
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {activeSubchapter.explanation}
                  </p>
                </div>

                {/* Code / Implementation Practice */}
                <div className="space-y-2">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Praktik Implementasi:
                  </p>
                  <div className="p-4 rounded-xl bg-zinc-950 text-zinc-200 font-mono text-xs leading-relaxed overflow-x-auto border border-zinc-800 shadow-inner">
                    <pre className="whitespace-pre-wrap">{activeSubchapter.practice}</pre>
                  </div>
                </div>

                {/* Common Mistakes */}
                <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/50 space-y-1">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-400">
                    Kesalahan Fatal yang Sering Terjadi:
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-xs">
                    {activeSubchapter.mistakes}
                  </p>
                </div>

                {/* Checklist */}
                <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                    Checklist Verifikasi:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeSubchapter.checklist.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="text-zinc-700 dark:text-zinc-300 text-[11px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. KAMUS ISTILAH DIGITAL & AI (SEARCHABLE GLOSSARY)                       */}
        {/* ========================================================================= */}
        <section id="kamus" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 font-mono text-xs font-bold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>GLOSARIUM TEKNOLOGI BISNIS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Kamus Istilah Digital, AI &amp; Web
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
                Penjelasan lugas istilah teknis tanpa jargon yang membingungkan, lengkap dengan implikasi praktis bagi keputusan bisnis Anda.
              </p>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Cari istilah (e.g. AI Agent, RAG, Webhook)..."
                value={kamusSearch}
                onChange={(e) => setKamusSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-xs focus:outline-hidden focus:border-emerald-500 transition-colors"
              />
              {kamusSearch && (
                <button
                  onClick={() => setKamusSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            {kamusCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setKamusCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  kamusCategory === cat
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Terms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredKamus.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/40 transition-all shadow-xs space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-sm text-zinc-950 dark:text-white">
                      {item.term}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.definition}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 text-[11px] text-emerald-800 dark:text-emerald-300">
                  <span className="font-bold font-mono">Tip Praktis: </span>
                  <span>{item.practicalTip}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. TOOLS YANG SAYA PAKAI (STACK HARIAN RESMI)                             */}
        {/* ========================================================================= */}
        <section id="tools" className="space-y-6">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1">
              Toolkit Harian
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              Teknologi &amp; Tools yang Saya Gunakan
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              Kombinasi teknologi modern untuk menjamin sistem berjalan cepat, aman, dan hemat biaya infrastruktur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-2">
              <p className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">FRONTEND &amp; WEB</p>
              <p className="font-bold text-sm text-zinc-950 dark:text-white">Next.js, Astro, React, Tailwind CSS, TypeScript</p>
              <p className="text-[11px] text-zinc-500">Menghasilkan website ultra-cepat dengan skor PageSpeed 95+ dan SEO terstruktur.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-2">
              <p className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400">AI &amp; AGENT WORKFLOW</p>
              <p className="font-bold text-sm text-zinc-950 dark:text-white">Claude 3.7 Sonnet, Gemini Flash, OpenAI, n8n, LangChain</p>
              <p className="text-[11px] text-zinc-500">Membangun bot cerdas berkemampuan RAG dengan guardrails keamanan anti-halusinasi.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-2">
              <p className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">BACKEND &amp; DATABASE</p>
              <p className="font-bold text-sm text-zinc-950 dark:text-white">Node.js, Python FastAPI, PostgreSQL, Supabase, Prisma</p>
              <p className="text-[11px] text-zinc-500">Skema relasional bersih, query berparameter anti-SQLi, dan API RESTful terstruktur.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-2">
              <p className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">CLOUD &amp; SECURITY</p>
              <p className="font-bold text-sm text-zinc-950 dark:text-white">Ubuntu Linux, Docker, Cloudflare WAF, Tailscale, Caddy</p>
              <p className="text-[11px] text-zinc-500">Isolasi Zero-Trust, sertifikat SSL Let\'s Encrypt otomatis, dan backup terenkripsi.</p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. TULISAN PILIHAN & BLOG TEKNIS (READER MODAL SUPPORT)                  */}
        {/* ========================================================================= */}
        <section id="blog" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                Catatan Teknis &amp; Praktik Nyata
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Tulisan Pilihan seputar AI, Web &amp; Keamanan
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
                Artikel mendalam tentang bagaimana teknologi diterapkan pada skenario bisnis yang sesungguhnya.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {['Semua', 'Web Engineering', 'AI & Agents', 'Cloud & DevOps', 'Keamanan & Arsitektur'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setBlogFilter(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    blogFilter === cat
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(blogFilter === 'Semua'
              ? KLASIK_BLOG_POSTS
              : KLASIK_BLOG_POSTS.filter((p) => p.category === blogFilter)
            ).map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedArticle(post)}
                className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/60 transition-all shadow-xs flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                      {post.category}
                    </span>
                    <span>{post.date} • {post.readTime}</span>
                  </div>

                  <h3 className="font-bold text-lg text-zinc-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. TENTANG TUBAGUS FITRAN BADRUTTAMAM (KONSEP FIKRAN.DEV/ABOUT)          */}
        {/* ========================================================================= */}
        <section id="tentang" className="space-y-8">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              Profil Rekayasa &amp; Nilai Kerja
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              Tentang Tubagus Fitran Badruttamam
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              Latar belakang, dedikasi rekayasa perangkat lunak, serta prinsip kerja yang saya pegang teguh dalam setiap kolaborasi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <p>
                  Saya adalah seorang Fullstack Developer dan AI Engineer yang berbasis di Cilegon, Banten. Fokus saya adalah merancang sistem digital yang bekerja cepat, memiliki arsitektur keamanan terstruktur, dan memecahkan hambatan operasional nyata.
                </p>
                <p>
                  Sebagai mahasiswa S1 Teknik Informatika di Universitas Muhammadiyah Banten dengan peminatan Data &amp; Backend, saya memadukan pemahaman teori komputasi yang kuat dengan pengalaman praktis membangun produk berbasis cloud dan AI model modern.
                </p>
                <p>
                  Di luar pemrograman, saya adalah peraih 2× Medali Emas Olimpiade Sains Nasional (Matematika &amp; Sejarah Nasional, Grade A+) serta penulis terpilih yang karyanya diterbitkan secara resmi oleh Perpustakaan Nasional Republik Indonesia (Perpusnas RI). Kedisiplinan analitis dari kompetisi sains ini saya bawa ke dalam penulisan arsitektur kode: rapi, terukur, dan terdokumentasi.
                </p>
              </div>

              {/* 4 Core Engineering Principles ala fikran.dev/about */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">PRINSIP 01</span>
                  <h4 className="font-bold text-sm text-zinc-950 dark:text-white">Kecepatan &amp; Skor 95+</h4>
                  <p className="text-xs text-zinc-500">Setiap milidetik berharga. Website dioptimasi agar memuat instan di bawah 1 detik demi kenyamanan pengunjung.</p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">PRINSIP 02</span>
                  <h4 className="font-bold text-sm text-zinc-950 dark:text-white">Keamanan Default Aktif</h4>
                  <p className="text-xs text-zinc-500">Mulai dari SSL TLS 1.3, sanitasi data anti-SQLi, hingga private network Tailscale diterapkan sejak awal.</p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">PRINSIP 03</span>
                  <h4 className="font-bold text-sm text-zinc-950 dark:text-white">Harga Transparan</h4>
                  <p className="text-xs text-zinc-500">Paket layanan jelas dimulai dari Rp 500 ribuan. Tidak ada biaya jebakan atau tagihan rahasia di tengah jalan.</p>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">PRINSIP 04</span>
                  <h4 className="font-bold text-sm text-zinc-950 dark:text-white">100% Kepemilikan Anda</h4>
                  <p className="text-xs text-zinc-500">Source code, domain, dan akses hosting diserahkan sepenuhnya tanpa ketergantungan sewa kode agensi.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Credentials & Community */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
                <h3 className="font-bold text-sm text-zinc-950 dark:text-white uppercase tracking-wider font-mono">
                  Afiliasi &amp; Kredensial Resmi
                </h3>

                <div className="space-y-3 text-xs">
                  <a
                    href={PERSONAL_INFO.socialLinks.googleDev}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between hover:border-emerald-500 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <GoogleDeveloperLogo size={18} />
                      <div>
                        <p className="font-bold text-zinc-900 dark:text-white">Google Developer Program</p>
                        <p className="text-[11px] text-zinc-500">Verified Member ID: 114674061805908955688</p>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  </a>

                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-zinc-900 dark:text-white">GDG on Campus &amp; Maps Innovators</p>
                      <p className="text-[11px] text-zinc-500">Komunitas Pengembang Google &amp; Google Maps Platform</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-zinc-900 dark:text-white">NVIDIA &amp; AWS Certified Knowledge</p>
                      <p className="text-[11px] text-zinc-500">NVIDIA Developer Program &amp; AWS Cloud Practitioner</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={CERTIFICATES_DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Award className="w-4 h-4" />
                    <span>Lihat Seluruh Sertifikat &amp; Bukti Lisensi</span>
                  </a>
                </div>
              </div>

              {/* Spotify Coding Playlist Integration */}
              <SpotifyPlaylist designTheme="arcade" />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 12. FAQ (YANG PALING SERING DITANYAKAN)                                    */}
        {/* ========================================================================= */}
        <section id="faq" className="space-y-6">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              Tanya Jawab Terbuka
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              Yang Paling Sering Ditanyakan
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              Jawaban lugas seputar proses pengerjaan, biaya, keamanan, dan kepemilikan aset.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-sm text-zinc-900 dark:text-white">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-500' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/60">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 13. BOTTOM CALL TO ACTION & CONTACT BANNER (ALA FIKRAN.DEV)                */}
        {/* ========================================================================= */}
        <section id="kontak" className="p-8 sm:p-12 rounded-3xl bg-zinc-900 dark:bg-[#111319] text-white border border-zinc-800 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial from-emerald-500/10 to-transparent pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest">
              MULAI PROYEK ANDA HARI INI
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Mari Bicarakan Aplikasi, AI Agent, atau Website Anda.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Ceritakan kebutuhan bisnis Anda. Saya akan menganalisis dan memberikan usulan solusi teknis beserta rincian estimasi biaya yang masuk akal dan transparan.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10 pt-2">
            <button
              onClick={() => handleWhatsAppConsultation()}
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Mulai Diskusi via WhatsApp</span>
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-5 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-sm transition-all border border-zinc-700 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Kirim Email Resmi</span>
            </a>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 14. AUTHENTIC FOOTER (ALA FIKRAN.DEV)                                     */}
        {/* ========================================================================= */}
        <footer className="pt-8 pb-12 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-zinc-900 dark:text-white">fitran.dev</span>
              <span>—</span>
              <span>Tubagus Fitran Badruttamam</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <button onClick={() => scrollToAnchor('layanan')} className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Layanan</button>
              <button onClick={() => scrollToAnchor('keamanan')} className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Keamanan</button>
              <button onClick={() => scrollToAnchor('belajar')} className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Belajar</button>
              <button onClick={() => scrollToAnchor('kamus')} className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Kamus</button>
              <button onClick={() => scrollToAnchor('blog')} className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Blog</button>
              <button onClick={() => scrollToAnchor('tentang')} className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Tentang</button>
              <button onClick={() => handleWhatsAppConsultation()} className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline cursor-pointer">Konsultasi</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400 border-t border-zinc-100 dark:border-zinc-800/60 pt-4">
            <p>© {new Date().getFullYear()} fitran.dev • Hak cipta dilindungi undang-undang.</p>
            <p>Dibangun dengan Next/React, TypeScript &amp; 5 Lapisan Keamanan Terstruktur.</p>
          </div>
        </footer>
      </div>

      {/* ========================================================================= */}
      {/* 15. MODAL DETAIL LAYANAN (SERVICE INQUIRY MODAL)                          */}
      {/* ========================================================================= */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
                  {selectedService.code} • {selectedService.category}
                </span>
                {selectedService.badge && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    {selectedService.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white">
                {selectedService.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                {selectedService.description}
              </p>
            </div>

            {/* Price & Timeline Grid */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-zinc-400 font-mono">Biaya Investasi:</p>
                <p className="text-2xl font-black font-mono text-zinc-950 dark:text-white mt-0.5">
                  {selectedService.price}
                </p>
                {selectedService.originalPrice && (
                  <p className="text-xs font-mono text-zinc-400 line-through">
                    {selectedService.originalPrice}
                  </p>
                )}
              </div>
              <div>
                <p className="text-xs text-zinc-400 font-mono">Estimasi Pengerjaan:</p>
                <p className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedService.duration}</span>
                </p>
                <p className="text-[11px] text-zinc-500 mt-0.5">Disepakati tertulis di awal</p>
              </div>
            </div>

            {/* Scope Breakdown */}
            <div className="space-y-2 text-xs">
              <p className="font-bold text-zinc-900 dark:text-white uppercase font-mono tracking-wider">
                Cakupan Fitur &amp; Pekerjaan:
              </p>
              <ul className="space-y-2">
                {selectedService.scope.map((sc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{sc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="space-y-2 text-xs border-t border-zinc-100 dark:border-zinc-800 pt-4">
              <p className="font-bold text-zinc-900 dark:text-white uppercase font-mono tracking-wider">
                Hasil Serah Terima (Deliverables):
              </p>
              <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400">
                {selectedService.deliverables.map((del, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security Highlights */}
            <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-xs space-y-1.5">
              <p className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Standar Keamanan Bawaan:</span>
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] text-emerald-900 dark:text-emerald-200">
                {selectedService.securityHighlights.map((sh, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-white/80 dark:bg-zinc-900/80 border border-emerald-200/50 dark:border-emerald-900/40">
                    ✓ {sh}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  handleWhatsAppConsultation(selectedService.title, selectedService.price);
                  setSelectedService(null);
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Pesan Paket Ini Langsung via WhatsApp</span>
              </button>

              <button
                onClick={() => setSelectedService(null)}
                className="py-3 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold text-xs transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 16. MODAL READER ARTIKEL BLOG LENGKAP (ARTICLE READER MODAL)             */}
      {/* ========================================================================= */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 p-6 sm:p-10 shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold">
                  {selectedArticle.category}
                </span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white leading-tight">
                {selectedArticle.title}
              </h2>
            </div>

            {/* Intro */}
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              {selectedArticle.content.intro}
            </p>

            {/* Key Takeaways */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-2">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Poin Kunci (Key Takeaways):
              </p>
              <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                {selectedArticle.content.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            <div className="space-y-6 pt-2">
              {selectedArticle.content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="font-bold text-lg text-zinc-950 dark:text-white">
                    {sec.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                    {sec.body}
                  </p>
                  {sec.codeSnippet && (
                    <div className="p-4 rounded-xl bg-zinc-950 text-emerald-400 font-mono text-xs leading-relaxed overflow-x-auto border border-zinc-800 my-3">
                      <pre className="whitespace-pre-wrap">{sec.codeSnippet}</pre>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/50 space-y-1">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                Kesimpulan:
              </p>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {selectedArticle.content.conclusion}
              </p>
            </div>

            {/* Footer buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <button
                onClick={() => handleWhatsAppConsultation(selectedArticle.title)}
                className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Diskusikan Topik Ini via WhatsApp</span>
              </button>

              <button
                onClick={() => setSelectedArticle(null)}
                className="py-2.5 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold text-xs transition-colors"
              >
                Tutup Artikel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
