import React, { useState } from 'react';
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
} from 'lucide-react';

interface KlasikEcosystemViewProps {
  onOpenCV?: () => void;
  onSelectCertificate?: (cert: CertificateItem) => void;
  onSelectProject?: (project: ProjectItem) => void;
}

type KlasikTab = 'overview' | 'services' | 'security' | 'learning' | 'blog' | 'credentials' | 'contact';

export const KlasikEcosystemView: React.FC<KlasikEcosystemViewProps> = ({
  onOpenCV,
  onSelectCertificate,
  onSelectProject,
}) => {
  const [activeTab, setActiveTab] = useState<KlasikTab>('overview');
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(null);
  const [activeChapterId, setActiveChapterId] = useState<string>('ai-00');
  const [activeSubchapterId, setActiveSubchapterId] = useState<string>('ai-00-1');
  const [blogFilter, setBlogFilter] = useState<string>('Semua');
  const [serviceCategoryFilter, setServiceCategoryFilter] = useState<string>('Semua');
  const [kamusSearch, setKamusSearch] = useState<string>('');

  const activeChapter =
    KLASIK_LEARNING_CHAPTERS.find((c) => c.id === activeChapterId) || KLASIK_LEARNING_CHAPTERS[0];
  const activeSubchapter =
    activeChapter.subchapters.find((s) => s.id === activeSubchapterId) ||
    activeChapter.subchapters[0];

  const filteredBlogPosts =
    blogFilter === 'Semua'
      ? KLASIK_BLOG_POSTS
      : KLASIK_BLOG_POSTS.filter((p) => p.category === blogFilter);

  const filteredServices =
    serviceCategoryFilter === 'Semua'
      ? KLASIK_SERVICES
      : KLASIK_SERVICES.filter((s) => s.category === serviceCategoryFilter);

  const filteredKamus = KLASIK_KAMUS.filter(
    (k) =>
      k.term.toLowerCase().includes(kamusSearch.toLowerCase()) ||
      k.definition.toLowerCase().includes(kamusSearch.toLowerCase())
  );

  const handleWhatsAppConsultation = (serviceName?: string, price?: string) => {
    const text = serviceName
      ? `Halo Tubagus Fitran, saya tertarik untuk mendiskusikan kebutuhan layanan: ${serviceName}${price ? ` (${price})` : ''}. Boleh minta info ketersediaan slot pengerjaan dan detail scope-nya?`
      : `Halo Tubagus Fitran, saya membaca portofolio & materi di fitran.dev dan ingin berdiskusi mengenai proyek rekayasa software / AI / website online.`;
    const url = `https://wa.me/6282211993414?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderSecurityIcon = (icon: string) => {
    switch (icon) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#855E1E] dark:text-[#D4AF37]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#855E1E] dark:text-[#D4AF37]" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-[#855E1E] dark:text-[#D4AF37]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#855E1E] dark:text-[#D4AF37]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#855E1E] dark:text-[#D4AF37]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#855E1E] dark:text-[#D4AF37]" />;
    }
  };

  return (
    <div className="w-full bg-[#FAF7F0] dark:bg-[#111110] text-[#141413] dark:text-[#F5F2EB] font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* ========================================================================= */}
        {/* 1. CLASSICAL EDITORIAL MASTHEAD (DOSSIER EKSEKUTIF)                       */}
        {/* ========================================================================= */}
        <header className="border-b-2 border-[#141413] dark:border-[#B48A3E]/70 pb-5 mb-8">
          {/* Top metadata strip */}
          <div className="border-y border-[#141413]/30 dark:border-[#B48A3E]/30 py-2 mb-4 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono tracking-widest uppercase text-[#855E1E] dark:text-[#D4AF37]">
            <div className="flex items-center gap-2">
              <span className="font-bold">DOSSIER EKSEKUTIF</span>
              <span>•</span>
              <span>CILEGON, BANTEN, ID</span>
              <span>•</span>
              <span className="text-zinc-600 dark:text-zinc-400">REKAYASA WEB &amp; SISTEM AI</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={PERSONAL_INFO.socialLinks.googleDev}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:underline font-bold"
              >
                <GoogleDeveloperLogo size={14} />
                <span>Verified Google Developer</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              {onOpenCV && (
                <button
                  onClick={onOpenCV}
                  className="inline-flex items-center gap-1 font-bold text-[#1B2A4A] dark:text-[#D4AF37] hover:underline cursor-pointer"
                >
                  <FileText className="w-3 h-3" />
                  <span>Curriculum Vitae (PDF)</span>
                </button>
              )}
            </div>
          </div>

          {/* Main Title Banner */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#855E1E] dark:text-[#D4AF37] font-semibold mb-1">
                fitran.dev • Portofolio, Layanan Rekayasa &amp; Pusat Belajar
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-zinc-950 dark:text-white">
                Tubagus Fitran Badruttamam
              </h1>
              <p className="text-sm sm:text-base font-serif italic text-zinc-700 dark:text-zinc-300 mt-1 max-w-3xl">
                Insinyur Perangkat Lunak, Peneliti Sistem Berbasis AI &amp; Perancang Infrastruktur Cloud Mandiri.
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="border border-[#B48A3E]/50 bg-white/70 dark:bg-[#181816]/70 px-4 py-2.5 rounded-none text-xs font-mono shrink-0 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold mb-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>LAYANAN DIBUKA • MULAI RP 500.000</span>
              </div>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                Website Online Kilat • Sistem Keamanan Terstruktur
              </p>
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* 2. KLASIK SUB-NAVIGATION                                                  */}
        {/* ========================================================================= */}
        <nav className="mb-8 border-y-2 border-[#141413] dark:border-[#B48A3E]/60 bg-[#F4EFE6] dark:bg-[#171614] overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-start sm:justify-center divide-x divide-[#141413]/20 dark:divide-[#B48A3E]/30 text-xs sm:text-sm font-serif">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 sm:px-6 py-3 font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shrink-0 ${
                activeTab === 'overview'
                  ? 'bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110]'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 text-zinc-800 dark:text-zinc-200'
              }`}
            >
              <span>🏛️ Beranda Dossier</span>
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 sm:px-6 py-3 font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shrink-0 ${
                activeTab === 'services'
                  ? 'bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110]'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 text-zinc-800 dark:text-zinc-200'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Layanan &amp; Harga ({KLASIK_SERVICES.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`px-4 sm:px-6 py-3 font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shrink-0 ${
                activeTab === 'security'
                  ? 'bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110]'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 text-zinc-800 dark:text-zinc-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Sistem Keamanan ({KLASIK_SECURITY_LAYERS.length} Lapisan)</span>
            </button>

            <button
              onClick={() => setActiveTab('learning')}
              className={`px-4 sm:px-6 py-3 font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shrink-0 ${
                activeTab === 'learning'
                  ? 'bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110]'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 text-zinc-800 dark:text-zinc-200'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Pusat Belajar AI &amp; Web</span>
            </button>

            <button
              onClick={() => setActiveTab('blog')}
              className={`px-4 sm:px-6 py-3 font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shrink-0 ${
                activeTab === 'blog'
                  ? 'bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110]'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 text-zinc-800 dark:text-zinc-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog ({KLASIK_BLOG_POSTS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('credentials')}
              className={`px-4 sm:px-6 py-3 font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shrink-0 ${
                activeTab === 'credentials'
                  ? 'bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110]'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 text-zinc-800 dark:text-zinc-200'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Kredensial ({CERTIFICATES_DATA.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('contact')}
              className={`px-4 sm:px-6 py-3 font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shrink-0 ${
                activeTab === 'contact'
                  ? 'bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110]'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 text-zinc-800 dark:text-zinc-200'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Konsultasi</span>
            </button>
          </div>
        </nav>

        {/* ========================================================================= */}
        {/* TAB 1: OVERVIEW (BERANDA DOSSIER & KONSEP FIKRAN.DEV/ABOUT)               */}
        {/* ========================================================================= */}
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-fade-in">
            {/* Top Grid: Portrait + Academic & Bio */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Portrait */}
              <div className="lg:col-span-4 p-6 bg-white dark:bg-[#181816] border border-[#141413]/25 dark:border-[#B48A3E]/40 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="p-3 border-2 border-[#B48A3E] bg-[#FAF7F0] dark:bg-[#141413] flex flex-col items-center mb-4">
                    <ProfileAvatar size="hero" showBadge={true} />
                  </div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-center text-[#855E1E] dark:text-[#D4AF37] font-bold mb-4">
                    POTRET RESMI • TERVERIFIKASI 2026
                  </p>

                  <div className="space-y-3 text-xs border-t border-[#141413]/15 dark:border-white/10 pt-4">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-[#855E1E] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-zinc-900 dark:text-white">
                          Universitas Muhammadiyah Banten
                        </p>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                          S1 Informatika • Data &amp; Backend
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-[#855E1E] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-zinc-900 dark:text-white">
                          2× Medali Emas Sains Nasional
                        </p>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                          Matematika &amp; Sejarah Nasional (Grade A+)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <BookOpen className="w-4 h-4 text-[#855E1E] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-zinc-900 dark:text-white">
                          Penulis Terpilih Perpusnas RI
                        </p>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                          Kompilasi Resmi HUT ke-46 Perpustakaan Nasional
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#141413]/15 dark:border-white/10">
                  <button
                    onClick={() => handleWhatsAppConsultation()}
                    className="w-full py-2.5 px-4 bg-[#141413] hover:bg-zinc-800 text-white dark:bg-[#B48A3E] dark:hover:bg-[#9E772F] dark:text-[#111110] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Mulai Konsultasi WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Statement, Pricing Banner & 4 Engineering Principles */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                <div className="p-6 sm:p-8 bg-white dark:bg-[#181816] border border-[#141413]/25 dark:border-[#B48A3E]/40 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#855E1E]/10 dark:bg-[#D4AF37]/15 text-[#855E1E] dark:text-[#D4AF37] font-mono text-[11px] font-bold uppercase tracking-widest">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>PRINSIP REKAYASA &amp; NILAI TAMBAH</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      Paket Website Mulai Rp 500.000
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-zinc-950 dark:text-white mb-4">
                    Website Cepat Online, Arsitektur Keamanan Terstruktur &amp; Otomasi AI Terkendali.
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 font-serif">
                    {PERSONAL_INFO.bio}
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-serif mt-3">
                    Setiap website dan sistem yang saya bangun mengedepankan 4 standar: kecepatan muat di bawah 1 detik, struktur keamanan multi-layer, transparansi harga yang jelas tanpa biaya tersembunyi, dan kepemilikan source code 100% milik Anda.
                  </p>
                </div>

                {/* 4 Engineering Principles (Inspired by fikran.dev/about) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-white dark:bg-[#181816] border border-[#141413]/20 dark:border-white/10">
                    <div className="w-7 h-7 border border-[#B48A3E] flex items-center justify-center text-[#855E1E] dark:text-[#D4AF37] mb-2 font-mono text-xs font-bold">
                      01
                    </div>
                    <h3 className="font-serif font-bold text-sm text-zinc-950 dark:text-white">
                      Kecepatan &amp; Skor 95+
                    </h3>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 font-serif">
                      Loading instan di bawah 1 detik. Setiap millisecond dihemat demi konversi pengunjung.
                    </p>
                  </div>

                  <div className="p-4 bg-white dark:bg-[#181816] border border-[#141413]/20 dark:border-white/10">
                    <div className="w-7 h-7 border border-[#B48A3E] flex items-center justify-center text-[#855E1E] dark:text-[#D4AF37] mb-2 font-mono text-xs font-bold">
                      02
                    </div>
                    <h3 className="font-serif font-bold text-sm text-zinc-950 dark:text-white">
                      Keamanan Terstruktur
                    </h3>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 font-serif">
                      Enkripsi TLS 1.3, sanitasi data anti-SQLi/XSS, dan isolasi server Zero-Trust WireGuard.
                    </p>
                  </div>

                  <div className="p-4 bg-white dark:bg-[#181816] border border-[#141413]/20 dark:border-white/10">
                    <div className="w-7 h-7 border border-[#B48A3E] flex items-center justify-center text-[#855E1E] dark:text-[#D4AF37] mb-2 font-mono text-xs font-bold">
                      03
                    </div>
                    <h3 className="font-serif font-bold text-sm text-zinc-950 dark:text-white">
                      Harga Transparan
                    </h3>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 font-serif">
                      Paket jelas dimulai dari Rp 500 ribuan. Tidak ada biaya jebakan di tengah pengerjaan.
                    </p>
                  </div>

                  <div className="p-4 bg-white dark:bg-[#181816] border border-[#141413]/20 dark:border-white/10">
                    <div className="w-7 h-7 border border-[#B48A3E] flex items-center justify-center text-[#855E1E] dark:text-[#D4AF37] mb-2 font-mono text-xs font-bold">
                      04
                    </div>
                    <h3 className="font-serif font-bold text-sm text-zinc-950 dark:text-white">
                      Ownership Penuh
                    </h3>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 font-serif">
                      Source code, domain, dan akses hosting 100% milik Anda tanpa ketergantungan sewa kode.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Spotify Coding Playlist */}
            <SpotifyPlaylist designTheme="arcade" />

            {/* 4 Structured Steps of Work (Inspired by fikran.dev/about: Cara Kerja) */}
            <div className="p-6 sm:p-8 bg-[#F4EFE6] dark:bg-[#171614] border-2 border-[#141413]/30 dark:border-[#B48A3E]/40">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] mb-2">
                <Layers className="w-4 h-4" />
                <span>ALUR KERJA TERSTRUKTUR (CARA KERJA)</span>
              </div>
              <h3 className="font-serif font-bold text-xl text-zinc-950 dark:text-white mb-4">
                4 Tahap Pengerjaan Proyek dari Perumusan Hingga Serah Terima
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-serif">
                <div className="p-4 bg-white dark:bg-[#1E1D1B] border border-[#141413]/20 dark:border-white/10">
                  <p className="font-mono font-bold text-[#855E1E] dark:text-[#D4AF37] mb-1">
                    TAHAP 01
                  </p>
                  <p className="font-bold text-zinc-900 dark:text-white mb-1">
                    Audit &amp; Spesifikasi Scope
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Diskusi mendalam untuk memetakan tujuan bisnis, target audiens, dan batas fitur yang disepakati tertulis.
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-[#1E1D1B] border border-[#141413]/20 dark:border-white/10">
                  <p className="font-mono font-bold text-[#855E1E] dark:text-[#D4AF37] mb-1">
                    TAHAP 02
                  </p>
                  <p className="font-bold text-zinc-900 dark:text-white mb-1">
                    Desain UI/UX &amp; Arsitektur
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Perancangan antarmuka berkelas yang selaras dengan kenyamanan pengguna HP dan laptop sebelum penulisan kode.
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-[#1E1D1B] border border-[#141413]/20 dark:border-white/10">
                  <p className="font-mono font-bold text-[#855E1E] dark:text-[#D4AF37] mb-1">
                    TAHAP 03
                  </p>
                  <p className="font-bold text-zinc-900 dark:text-white mb-1">
                    Coding &amp; Hardening Keamanan
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Implementasi kode bersih, pengujian Core Web Vitals, sanitasi form, dan setup sertifikat SSL HTTPS.
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-[#1E1D1B] border border-[#141413]/20 dark:border-white/10">
                  <p className="font-mono font-bold text-[#855E1E] dark:text-[#D4AF37] mb-1">
                    TAHAP 04
                  </p>
                  <p className="font-bold text-zinc-900 dark:text-white mb-1">
                    Go-Live &amp; Serah Terima Penuh
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Peluncuran ke domain online, penyerahan akses repository, dokumentasi panduan, dan garansi pemeliharaan.
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Services Preview with Pricing */}
            <div className="border-t-2 border-[#141413]/30 dark:border-[#B48A3E]/40 pt-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] font-bold">
                    KATALOG LAYANAN &amp; ESTIMASI HARGA
                  </p>
                  <h3 className="text-2xl font-serif font-black text-zinc-950 dark:text-white">
                    Pilihan Paket Website &amp; Solusi Rekayasa
                  </h3>
                </div>
                <button
                  onClick={() => setActiveTab('services')}
                  className="font-mono text-xs font-bold text-[#855E1E] dark:text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Lihat Seluruh Layanan ({KLASIK_SERVICES.length})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {KLASIK_SERVICES.slice(0, 3).map((srv) => (
                  <div
                    key={srv.id}
                    className="p-6 bg-white dark:bg-[#181816] border-2 border-[#141413]/25 dark:border-[#B48A3E]/40 flex flex-col justify-between hover:shadow-md transition-shadow relative"
                  >
                    {srv.badge && (
                      <span className="absolute -top-3 right-4 px-2.5 py-0.5 bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110] font-mono text-[10px] font-bold uppercase tracking-wider">
                        {srv.badge}
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[11px] text-[#855E1E] dark:text-[#D4AF37] font-bold">
                        <span>{srv.code}</span>
                        <span>{srv.category}</span>
                      </div>

                      <h4 className="font-serif font-bold text-xl text-zinc-950 dark:text-white mb-1">
                        {srv.title}
                      </h4>

                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="font-mono font-black text-2xl text-emerald-700 dark:text-emerald-400">
                          {srv.price}
                        </span>
                        {srv.originalPrice && (
                          <span className="font-mono text-xs text-zinc-400 line-through">
                            {srv.originalPrice}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4 font-serif">
                        {srv.description}
                      </p>

                      <div className="space-y-1.5 border-t border-[#141413]/10 dark:border-white/10 pt-3 text-[11px] text-zinc-700 dark:text-zinc-300">
                        {srv.scope.slice(0, 3).map((sc, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{sc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#141413]/10 dark:border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-zinc-500">
                        ⏱️ {srv.duration}
                      </span>
                      <button
                        onClick={() => setSelectedService(srv)}
                        className="text-xs font-mono font-bold text-[#855E1E] dark:text-[#D4AF37] hover:underline cursor-pointer"
                      >
                        Detail &amp; Request →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: SERVICES (KATALOG SELURUH LAYANAN & RINCIAN HARGA)                */}
        {/* ========================================================================= */}
        {activeTab === 'services' && (
          <div className="space-y-8 animate-fade-in">
            <div className="border-b border-[#141413]/20 dark:border-[#B48A3E]/30 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] font-bold">
                  KATALOG LAYANAN RESMI &amp; ESTIMASI HARGA
                </p>
                <h2 className="text-3xl font-serif font-black text-zinc-950 dark:text-white mt-1">
                  Pilihan Paket Website Online, Sistem Web &amp; AI
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-serif max-w-3xl mt-2">
                  Transparansi harga mulai dari Rp 500 ribuan. Dikerjakan dengan arsitektur keamanan terstruktur, jaminan skor PageSpeed 95+, dan source code 100% milik Anda.
                </p>
              </div>

              {/* Filter Category */}
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {['Semua', 'Website Online', 'Aplikasi & Dashboard', 'AI & Otomasi', 'Infrastruktur Cloud', 'Keamanan & Tracking'].map(
                  (cat) => (
                    <button
                      key={cat}
                      onClick={() => setServiceCategoryFilter(cat)}
                      className={`px-3 py-1 border transition-colors cursor-pointer ${
                        serviceCategoryFilter === cat
                          ? 'bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110] border-[#141413] dark:border-[#B48A3E] font-bold'
                          : 'bg-white dark:bg-[#181816] text-zinc-700 dark:text-zinc-300 border-[#141413]/20 dark:border-white/10 hover:border-[#B48A3E]'
                      }`}
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredServices.map((srv) => (
                <div
                  key={srv.id}
                  className="p-6 sm:p-8 bg-white dark:bg-[#181816] border-2 border-[#141413]/25 dark:border-[#B48A3E]/40 shadow-xs flex flex-col justify-between relative"
                >
                  {srv.badge && (
                    <span className="absolute -top-3.5 right-6 px-3 py-1 bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110] font-mono text-xs font-bold uppercase tracking-wider shadow-sm">
                      {srv.badge}
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-2 font-mono text-xs text-[#855E1E] dark:text-[#D4AF37] font-bold mb-2">
                      <span className="px-2.5 py-1 bg-[#855E1E]/10 dark:bg-[#D4AF37]/15">
                        {srv.code} • {srv.category}
                      </span>
                      <span className="text-zinc-500 font-normal">⏱️ {srv.duration}</span>
                    </div>

                    <h3 className="text-2xl font-serif font-black text-zinc-950 dark:text-white mt-2 mb-2">
                      {srv.title}
                    </h3>

                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="font-mono font-black text-3xl text-emerald-700 dark:text-emerald-400">
                        {srv.price}
                      </span>
                      {srv.originalPrice && (
                        <span className="font-mono text-sm text-zinc-400 line-through">
                          {srv.originalPrice}
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-mono text-[#855E1E] dark:text-[#D4AF37] italic mb-3">
                      "{srv.tagline}"
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-serif leading-relaxed mb-5">
                      {srv.description}
                    </p>

                    {/* Scope */}
                    <div className="border-t border-[#141413]/10 dark:border-white/10 pt-4 mb-4">
                      <p className="font-mono text-[11px] font-bold tracking-wider uppercase text-zinc-900 dark:text-zinc-100 mb-2">
                        Ruang Lingkup Pekerjaan (Scope):
                      </p>
                      <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-serif">
                        {srv.scope.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Security Highlights */}
                    <div className="border-t border-[#141413]/10 dark:border-white/10 pt-3 mb-4">
                      <p className="font-mono text-[11px] font-bold tracking-wider uppercase text-[#855E1E] dark:text-[#D4AF37] mb-1.5 flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        <span>Proteksi Keamanan Termasuk:</span>
                      </p>
                      <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 font-serif">
                        {srv.securityHighlights.map((sec, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-600 dark:text-emerald-400">🛡️</span>
                            <span>{sec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="border-t border-[#141413]/10 dark:border-white/10 pt-3 mb-4">
                      <p className="font-mono text-[11px] font-bold tracking-wider uppercase text-zinc-900 dark:text-zinc-100 mb-1.5">
                        Output Yang Diserahkan:
                      </p>
                      <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 font-serif">
                        {srv.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#855E1E] dark:text-[#D4AF37]">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 mb-4">
                      {srv.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-[#FAF7F0] dark:bg-[#111110] border border-[#141413]/15 dark:border-white/10 text-[10px] font-mono text-zinc-600 dark:text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-[#141413]/15 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <p className="text-[11px] text-zinc-500 font-serif italic max-w-xs">
                      Cocok untuk: {srv.idealFor}
                    </p>
                    <button
                      onClick={() => handleWhatsAppConsultation(srv.title, srv.price)}
                      className="px-4 py-2 bg-[#141413] hover:bg-zinc-800 text-white dark:bg-[#B48A3E] dark:hover:bg-[#9E772F] dark:text-[#111110] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Pesan / Konsultasi</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: STRUCTURED SECURITY SYSTEM (SISTEM KEAMANAN TERSTRUKTUR)           */}
        {/* ========================================================================= */}
        {activeTab === 'security' && (
          <div className="space-y-8 animate-fade-in font-serif">
            <div className="border-b border-[#141413]/20 dark:border-[#B48A3E]/30 pb-4">
              <p className="font-mono text-xs uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] font-bold">
                ARSITEKTUR PERTAHANAN MULTI-LAYER
              </p>
              <h2 className="text-3xl font-serif font-black text-zinc-950 dark:text-white mt-1">
                Sistem Keamanan Terstruktur &amp; Teruji
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-3xl mt-2 leading-relaxed">
                Keamanan bukan sekadar fitur tambahan, melainkan pondasi utama di setiap baris kode dan konfigurasi server. Berikut adalah 5 lapisan proteksi sistem yang diterapkan pada setiap proyek yang saya tangani.
              </p>
            </div>

            <div className="space-y-6">
              {KLASIK_SECURITY_LAYERS.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 bg-white dark:bg-[#181816] border-2 border-[#141413]/25 dark:border-[#B48A3E]/40 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 border-b border-[#141413]/10 dark:border-white/10 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-[#B48A3E] bg-[#FAF7F0] dark:bg-[#111110]">
                        {renderSecurityIcon(sec.icon)}
                      </div>
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37]">
                          {sec.level}
                        </span>
                        <h3 className="text-xl font-serif font-bold text-zinc-950 dark:text-white">
                          {sec.title}
                        </h3>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-bold">
                      AKTIF SECARA DEFAULT
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                    {sec.description}
                  </p>

                  <div className="p-4 bg-[#FAF7F0] dark:bg-[#111110] border border-[#141413]/15 dark:border-white/10">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-2">
                      Langkah &amp; Mekanisme Konkret:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      {sec.measures.map((m, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Guarantee Box */}
            <div className="p-6 bg-emerald-500/10 border-2 border-emerald-600/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif font-bold text-lg text-zinc-950 dark:text-white">
                  Ingin Melakukan Audit Keamanan pada Website yang Sudah Berjalan?
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1">
                  Saya menyediakan jasa audit celah keamanan web, perbaikan sertifikat SSL, penutupan port server rentan, dan mitigasi spam form.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppConsultation('Audit Keamanan Web')}
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer transition-colors"
              >
                Konsultasi Audit Keamanan
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: LEARNING & CURRICULUM (PUSAT BELAJAR & MATERI AI)                 */}
        {/* ========================================================================= */}
        {activeTab === 'learning' && (
          <div className="space-y-10 animate-fade-in">
            {/* Header */}
            <div className="border-b border-[#141413]/20 dark:border-[#B48A3E]/30 pb-4">
              <p className="font-mono text-xs uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] font-bold">
                ARSIP PEMBELAJARAN INTERAKTIF TERPERINCI
              </p>
              <h2 className="text-3xl font-serif font-black text-zinc-950 dark:text-white mt-1">
                Pusat Belajar AI &amp; Rekayasa Workflow Bisnis
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-serif max-w-3xl mt-2">
                Kurikulum terstruktur yang jauh lebih lengkap, membedah implementasi AI dari fondasi, formula prompt 4 bagian, context injection, otomasi alur kerja, hingga AI Agent otonom dengan guardrails.
              </p>
            </div>

            {/* 90-Days Learning Roadmap Overview */}
            <div className="p-6 bg-[#F4EFE6] dark:bg-[#171614] border-2 border-[#141413]/30 dark:border-[#B48A3E]/40">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] mb-2">
                <Compass className="w-4 h-4" />
                <span>PETA JALAN IMPLEMENTASI 90 HARI</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-zinc-950 dark:text-white mb-4">
                Urutan Rasional dari Fondasi Masalah Hingga Skala Mandiri
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-serif">
                <div className="p-4 bg-white dark:bg-[#1E1D1B] border border-[#141413]/20 dark:border-white/10">
                  <p className="font-mono font-bold text-[#855E1E] dark:text-[#D4AF37] mb-1">
                    HARI 1 - 14
                  </p>
                  <p className="font-bold text-zinc-900 dark:text-white mb-1">
                    Petakan Proses Berulang
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Identifikasi 1 pekerjaan repetitif yang menyita jam kerja tim. Susun profil bisnis 1 halaman.
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-[#1E1D1B] border border-[#141413]/20 dark:border-white/10">
                  <p className="font-mono font-bold text-[#855E1E] dark:text-[#D4AF37] mb-1">
                    HARI 15 - 30
                  </p>
                  <p className="font-bold text-zinc-900 dark:text-white mb-1">
                    Prompting &amp; Context Injection
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Beri konteks bisnis nyata, terapkan formula prompt 4 bagian, dan uji konsistensi output awal.
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-[#1E1D1B] border border-[#141413]/20 dark:border-white/10">
                  <p className="font-mono font-bold text-[#855E1E] dark:text-[#D4AF37] mb-1">
                    HARI 31 - 60
                  </p>
                  <p className="font-bold text-zinc-900 dark:text-white mb-1">
                    Otomasi Trigger &amp; Human Approval
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Hubungkan webhook form/chat ke model AI, sertakan notifikasi persetujuan staf sebelum data diposting.
                  </p>
                </div>

                <div className="p-4 bg-white dark:bg-[#1E1D1B] border border-[#141413]/20 dark:border-white/10">
                  <p className="font-mono font-bold text-[#855E1E] dark:text-[#D4AF37] mb-1">
                    HARI 61 - 90
                  </p>
                  <p className="font-bold text-zinc-900 dark:text-white mb-1">
                    Tata Kelola &amp; Evaluasi Efisiensi
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Audit log keamanan, kunci data sensitif, dan ukur jam kerja nyata yang berhasil dihemat per minggu.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Chapter Selector & Detail Viewer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column (4 cols): Chapter List */}
              <div className="lg:col-span-4 space-y-2">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                  Daftar Bab Kurikulum:
                </p>
                {KLASIK_LEARNING_CHAPTERS.map((chap) => (
                  <button
                    key={chap.id}
                    onClick={() => {
                      setActiveChapterId(chap.id);
                      if (chap.subchapters.length > 0) {
                        setActiveSubchapterId(chap.subchapters[0].id);
                      }
                    }}
                    className={`w-full text-left p-4 border transition-all cursor-pointer flex flex-col gap-1 ${
                      activeChapterId === chap.id
                        ? 'bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110] border-[#141413] dark:border-[#B48A3E] shadow-sm'
                        : 'bg-white dark:bg-[#181816] text-zinc-900 dark:text-zinc-200 border-[#141413]/20 dark:border-white/10 hover:border-[#B48A3E]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono opacity-80">
                      <span>{chap.code}</span>
                      <span>{chap.subchapters.length} Subbab</span>
                    </div>
                    <p className="font-serif font-bold text-sm line-clamp-1">{chap.title}</p>
                    <p className="text-[11px] opacity-75 line-clamp-1 font-serif">{chap.kicker}</p>
                  </button>
                ))}
              </div>

              {/* Right Column (8 cols): Chapter Content Viewer */}
              <div className="lg:col-span-8 p-6 sm:p-8 bg-white dark:bg-[#181816] border-2 border-[#141413]/25 dark:border-[#B48A3E]/40 shadow-xs">
                {/* Active Chapter Header */}
                <div className="border-b border-[#141413]/20 dark:border-white/10 pb-5 mb-6">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#855E1E] dark:text-[#D4AF37] font-bold mb-1">
                    <span>{activeChapter.code}</span>
                    <span>•</span>
                    <span>{activeChapter.kicker}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-black text-zinc-950 dark:text-white mb-2">
                    {activeChapter.title}
                  </h3>
                  <p className="text-sm font-serif leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {activeChapter.summary}
                  </p>
                  <p className="text-xs font-mono text-zinc-500 mt-3">
                    Target Pembaca: {activeChapter.audience}
                  </p>
                </div>

                {/* Subchapter Selector Tabs */}
                {activeChapter.subchapters.length > 1 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeChapter.subchapters.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setActiveSubchapterId(sub.id)}
                        className={`px-3 py-1.5 text-xs font-mono font-bold tracking-wider uppercase border transition-colors cursor-pointer ${
                          activeSubchapterId === sub.id
                            ? 'bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110] border-[#141413] dark:border-[#B48A3E]'
                            : 'bg-[#FAF7F0] dark:bg-[#111110] text-zinc-800 dark:text-zinc-300 border-[#141413]/20 dark:border-white/10 hover:border-[#B48A3E]'
                        }`}
                      >
                        {sub.num} {sub.title}
                      </button>
                    ))}
                  </div>
                )}

                {/* Subchapter Deep Content */}
                <div className="space-y-6 font-serif">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-zinc-950 dark:text-white flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-[#855E1E] dark:text-[#D4AF37]">
                        [{activeSubchapter.num}]
                      </span>
                      <span>{activeSubchapter.title}</span>
                    </h4>
                  </div>

                  {/* Situation Card */}
                  <div className="p-4 bg-amber-500/10 border-l-4 border-amber-600 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                    <p className="font-mono font-bold text-amber-800 dark:text-amber-300 uppercase text-[11px] mb-1">
                      Situasi Nyata di Lapangan:
                    </p>
                    <p className="leading-relaxed">{activeSubchapter.situation}</p>
                  </div>

                  {/* Explanation */}
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1.5">
                      Penjelasan &amp; Prinsip Dasar:
                    </p>
                    <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200 whitespace-pre-line">
                      {activeSubchapter.explanation}
                    </p>
                  </div>

                  {/* Practice */}
                  <div className="p-4 bg-emerald-500/10 border-l-4 border-emerald-600 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                    <p className="font-mono font-bold text-emerald-800 dark:text-emerald-300 uppercase text-[11px] mb-1">
                      Cara Mempraktikkan Hari Ini:
                    </p>
                    <p className="leading-relaxed">{activeSubchapter.practice}</p>
                  </div>

                  {/* Common Mistakes */}
                  <div className="p-4 bg-rose-500/10 border-l-4 border-rose-600 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                    <p className="font-mono font-bold text-rose-800 dark:text-rose-300 uppercase text-[11px] mb-1">
                      Kesalahan yang Sering Terjadi:
                    </p>
                    <p className="leading-relaxed">{activeSubchapter.mistakes}</p>
                  </div>

                  {/* Checklist */}
                  <div className="border-t border-[#141413]/10 dark:border-white/10 pt-4">
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Checklist Mini Kesiapan:</span>
                    </p>
                    <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                      {activeSubchapter.checklist.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-mono text-[#855E1E] dark:text-[#D4AF37] font-bold">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Kamus Istilah Digital & AI (Glossary) */}
            <div className="border-t-2 border-[#141413]/30 dark:border-[#B48A3E]/40 pt-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] font-bold">
                    GLOSARIUM REKAYASA &amp; AI
                  </p>
                  <h3 className="text-2xl font-serif font-black text-zinc-950 dark:text-white">
                    Kamus Istilah Digital &amp; Arsitektur
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-serif mt-1">
                    Definisi ringkas tanpa jargon berbelit beserta tips praktis penerapannya.
                  </p>
                </div>

                {/* Search input */}
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Cari istilah (MCP, RAG...)"
                    value={kamusSearch}
                    onChange={(e) => setKamusSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 bg-white dark:bg-[#181816] border border-[#141413]/25 dark:border-white/10 text-xs font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-[#B48A3E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredKamus.map((k) => (
                  <div
                    key={k.term}
                    className="p-4 bg-white dark:bg-[#181816] border border-[#141413]/20 dark:border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#855E1E] dark:text-[#D4AF37] font-bold block mb-1">
                        {k.category}
                      </span>
                      <h4 className="font-serif font-bold text-base text-zinc-950 dark:text-white mb-2">
                        {k.term}
                      </h4>
                      <p className="text-xs text-zinc-700 dark:text-zinc-300 font-serif leading-relaxed mb-3">
                        {k.definition}
                      </p>
                    </div>
                    <div className="border-t border-[#141413]/10 dark:border-white/10 pt-2 text-[11px] font-mono text-zinc-500 italic">
                      💡 {k.practicalTip}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: BLOG & TECHNICAL ARTICLES                                          */}
        {/* ========================================================================= */}
        {activeTab === 'blog' && (
          <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div className="border-b border-[#141413]/20 dark:border-[#B48A3E]/30 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] font-bold">
                  ARTIKEL &amp; WAWASAN TEKNIS
                </p>
                <h2 className="text-3xl font-serif font-black text-zinc-950 dark:text-white mt-1">
                  Arsip Catatan Rekayasa Perangkat Lunak
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-serif max-w-2xl mt-2">
                  Dokumentasi studi kasus, pertimbangan arsitektur sistem, dan evaluasi teknologi dari pengerjaan proyek nyata.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {['Semua', 'Web Engineering', 'AI & Agents', 'Cloud & DevOps', 'Keamanan & Arsitektur'].map(
                  (cat) => (
                    <button
                      key={cat}
                      onClick={() => setBlogFilter(cat)}
                      className={`px-3 py-1 border transition-colors cursor-pointer ${
                        blogFilter === cat
                          ? 'bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110] border-[#141413] dark:border-[#B48A3E] font-bold'
                          : 'bg-white dark:bg-[#181816] text-zinc-700 dark:text-zinc-300 border-[#141413]/20 dark:border-white/10 hover:border-[#B48A3E]'
                      }`}
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredBlogPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedArticle(post)}
                  className="p-6 sm:p-8 bg-white dark:bg-[#181816] border-2 border-[#141413]/25 dark:border-[#B48A3E]/40 hover:border-[#B48A3E] transition-all cursor-pointer group shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#855E1E] dark:text-[#D4AF37] font-bold mb-2">
                      <span className="px-2 py-0.5 bg-[#855E1E]/10 dark:bg-[#D4AF37]/15">
                        {post.category}
                      </span>
                      <span className="text-zinc-500 font-normal">
                        {post.date} • {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-black text-zinc-950 dark:text-white group-hover:text-[#B48A3E] transition-colors mt-2 mb-3 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-serif leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="space-y-1.5 border-t border-[#141413]/10 dark:border-white/10 pt-3">
                      <p className="font-mono text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                        Poin Inti:
                      </p>
                      {post.content.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                        <p
                          key={idx}
                          className="text-xs text-zinc-700 dark:text-zinc-300 font-serif line-clamp-1 flex items-start gap-1.5"
                        >
                          <span className="text-[#855E1E] dark:text-[#D4AF37]">✦</span>
                          <span>{takeaway}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#141413]/10 dark:border-white/10 flex items-center justify-between font-mono text-xs font-bold text-[#855E1E] dark:text-[#D4AF37]">
                    <span>Baca Artikel Penuh</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: CREDENTIALS & PORTFOLIO (PRESTASI & KREDENSIAL RESMI)              */}
        {/* ========================================================================= */}
        {activeTab === 'credentials' && (
          <div className="space-y-10 animate-fade-in">
            {/* Header */}
            <div className="border-b border-[#141413]/20 dark:border-[#B48A3E]/30 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] font-bold">
                  PRESTASI &amp; KREDENSIAL TERVERIFIKASI
                </p>
                <h2 className="text-3xl font-serif font-black text-zinc-950 dark:text-white mt-1">
                  Arsip Sertifikasi, Kompetisi Sains &amp; Publikasi
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-serif max-w-2xl mt-2">
                  Total {CERTIFICATES_DATA.length} dokumen kredensial resmi dari Google Cloud, AWS, NVIDIA, Claude AI, serta medali kompetisi akademik nasional.
                </p>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs">
                <a
                  href={PERSONAL_INFO.socialLinks.googleSkillshopWallet}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-black text-white dark:bg-[#B48A3E] dark:text-black font-bold uppercase tracking-wider flex items-center gap-1.5"
                >
                  <span>Accredible Wallet</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={CERTIFICATES_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 border border-[#141413]/30 dark:border-white/20 hover:border-[#B48A3E] font-bold uppercase tracking-wider flex items-center gap-1.5"
                >
                  <span>Google Drive Lengkap</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Highlights Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {HIGHLIGHTS_METRICS.map((m) => (
                <div
                  key={m.id}
                  className="p-5 bg-white dark:bg-[#181816] border border-[#141413]/25 dark:border-[#B48A3E]/30 shadow-xs"
                >
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] font-bold block mb-1">
                    {m.badge}
                  </span>
                  <h4 className="font-serif font-black text-xl text-zinc-950 dark:text-white">
                    {m.value}
                  </h4>
                  <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-1">
                    {m.labelId || m.label}
                  </p>
                  <p className="text-[11px] text-zinc-500 font-serif mt-1">
                    {m.subtext}
                  </p>
                </div>
              ))}
            </div>

            {/* Certificates Grid */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-zinc-950 dark:text-white">
                Daftar Dokumen Kredensial Pilihan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CERTIFICATES_DATA.slice(0, 12).map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => onSelectCertificate?.(cert)}
                    className="p-5 bg-white dark:bg-[#181816] border border-[#141413]/20 dark:border-[#B48A3E]/30 hover:border-[#B48A3E] transition-all cursor-pointer flex flex-col justify-between group shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#855E1E] dark:text-[#D4AF37] font-bold mb-2">
                        <span className="px-2 py-0.5 bg-[#855E1E]/10 dark:bg-[#D4AF37]/15">
                          {cert.issuer}
                        </span>
                        <span className="text-zinc-500">{cert.date}</span>
                      </div>
                      <h4 className="font-serif font-bold text-base text-zinc-950 dark:text-white group-hover:text-[#B48A3E] transition-colors mb-2 line-clamp-2">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-serif line-clamp-3">
                        {cert.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#141413]/10 dark:border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#855E1E] dark:text-[#D4AF37]">
                      <span>Buka Verifikasi Dokumen</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 7: CONTACT & CONSULTATION                                             */}
        {/* ========================================================================= */}
        {activeTab === 'contact' && (
          <div className="max-w-3xl mx-auto p-6 sm:p-10 bg-white dark:bg-[#181816] border-2 border-[#141413]/30 dark:border-[#B48A3E]/40 shadow-md animate-fade-in space-y-8 font-serif">
            <div className="border-b border-[#141413]/20 dark:border-white/10 pb-5 text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37]">
                SALURAN KOMUNIKASI RESMI
              </span>
              <h2 className="text-3xl font-serif font-black text-zinc-950 dark:text-white mt-1">
                Diskusikan Kebutuhan Proyek &amp; Rekayasa
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl mx-auto">
                Silakan hubungi saya untuk pembuatan website online mulai Rp 500rb, audit keamanan web, implementasi AI Agent WhatsApp, atau pengembangan sistem aplikasi kustom.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="p-5 bg-[#FAF7F0] dark:bg-[#111110] border border-[#141413]/20 dark:border-white/10">
                <p className="font-mono text-xs uppercase tracking-wider text-[#855E1E] dark:text-[#D4AF37] font-bold mb-1">
                  Surat Elektronik (Email)
                </p>
                <p className="font-bold text-zinc-900 dark:text-white text-base">
                  {PERSONAL_INFO.email}
                </p>
                <p className="text-xs text-zinc-500 mt-2">
                  Untuk proposal resmi, invoice, NDA, atau penawaran kerja sama institusional.
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-bold text-[#855E1E] dark:text-[#D4AF37] hover:underline"
                >
                  <span>Kirim Email Langsung</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-5 bg-[#FAF7F0] dark:bg-[#111110] border border-[#141413]/20 dark:border-white/10">
                <p className="font-mono text-xs uppercase tracking-wider text-[#855E1E] dark:text-[#D4AF37] font-bold mb-1">
                  Pesan Instan (WhatsApp)
                </p>
                <p className="font-bold text-zinc-900 dark:text-white text-base">
                  +62 822-1199-3414
                </p>
                <p className="text-xs text-zinc-500 mt-2">
                  Respon tercepat untuk konsultasi awal, penawaran harga, dan diskusi teknis.
                </p>
                <button
                  onClick={() => handleWhatsAppConsultation()}
                  className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-bold text-[#855E1E] dark:text-[#D4AF37] hover:underline cursor-pointer"
                >
                  <span>Chat WhatsApp Sekarang</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="border-t border-[#141413]/15 dark:border-white/10 pt-6 text-center text-xs text-zinc-500 font-mono">
              Lokasi: {PERSONAL_INFO.location} • Zona Waktu: {PERSONAL_INFO.timezone}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. MODAL: FULL ARTICLE READER MODAL                                       */}
        {/* ========================================================================= */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
            <div className="bg-[#FAF7F0] dark:bg-[#141413] text-[#141413] dark:text-[#F5F2EB] w-full max-w-3xl max-h-[90vh] overflow-y-auto border-2 border-[#141413] dark:border-[#B48A3E] p-6 sm:p-10 shadow-2xl relative font-serif">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-black dark:hover:text-white cursor-pointer"
                title="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-[#141413]/20 dark:border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2 font-mono text-xs text-[#855E1E] dark:text-[#D4AF37] font-bold mb-2">
                  <span>{selectedArticle.category}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-black text-zinc-950 dark:text-white leading-tight">
                  {selectedArticle.title}
                </h2>
                <p className="font-mono text-xs text-zinc-500 mt-2">
                  Oleh: Tubagus Fitran Badruttamam (Software Engineer)
                </p>
              </div>

              {/* Takeaways Box */}
              <div className="p-4 bg-white dark:bg-[#1E1D1B] border border-[#141413]/20 dark:border-white/10 mb-6">
                <p className="font-mono text-xs uppercase font-bold text-[#855E1E] dark:text-[#D4AF37] tracking-wider mb-2">
                  Ringkasan Eksekutif (Key Takeaways):
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                  {selectedArticle.content.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#855E1E] dark:text-[#D4AF37] font-bold">✦</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Body */}
              <div className="space-y-6 text-sm sm:text-base leading-relaxed text-zinc-800 dark:text-zinc-200">
                <p className="italic text-zinc-600 dark:text-zinc-400 border-l-2 border-[#B48A3E] pl-4">
                  {selectedArticle.content.intro}
                </p>

                {selectedArticle.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-lg font-serif font-bold text-zinc-950 dark:text-white pt-2">
                      {sec.heading}
                    </h3>
                    <p className="whitespace-pre-line leading-relaxed">{sec.body}</p>
                  </div>
                ))}

                <div className="border-t border-[#141413]/10 dark:border-white/10 pt-6 mt-8">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] mb-2">
                    Kesimpulan &amp; Catatan Penutup
                  </h4>
                  <p className="text-sm italic">{selectedArticle.content.conclusion}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t-2 border-[#141413]/20 dark:border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 border border-[#141413]/30 dark:border-white/20 font-mono text-xs font-bold uppercase cursor-pointer hover:bg-black/5 dark:hover:bg-white/5"
                >
                  Tutup Bacaan
                </button>
                <button
                  onClick={() => handleWhatsAppConsultation(selectedArticle.title)}
                  className="px-4 py-2 bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Diskusikan Topik Ini</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. MODAL: SERVICE DETAIL & SCOPE MODAL                                    */}
        {/* ========================================================================= */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
            <div className="bg-[#FAF7F0] dark:bg-[#141413] text-[#141413] dark:text-[#F5F2EB] w-full max-w-2xl max-h-[90vh] overflow-y-auto border-2 border-[#141413] dark:border-[#B48A3E] p-6 sm:p-8 shadow-2xl relative font-serif">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-black dark:hover:text-white cursor-pointer"
                title="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-[#141413]/20 dark:border-white/10 pb-4 mb-4">
                <span className="font-mono text-xs font-bold text-[#855E1E] dark:text-[#D4AF37]">
                  {selectedService.code} • {selectedService.category}
                </span>
                <h3 className="text-2xl font-serif font-black text-zinc-950 dark:text-white mt-1">
                  {selectedService.title}
                </h3>
                <div className="flex items-baseline gap-3 mt-1.5">
                  <span className="font-mono font-black text-2xl text-emerald-700 dark:text-emerald-400">
                    {selectedService.price}
                  </span>
                  {selectedService.originalPrice && (
                    <span className="font-mono text-xs text-zinc-400 line-through">
                      {selectedService.originalPrice}
                    </span>
                  )}
                  <span className="text-xs text-zinc-500">⏱️ {selectedService.duration}</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <p className="leading-relaxed">{selectedService.description}</p>

                <div className="p-4 bg-white dark:bg-[#1E1D1B] border border-[#141413]/20 dark:border-white/10">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-2">
                    Detail Ruang Lingkup (Scope):
                  </p>
                  <ul className="space-y-1.5 font-serif">
                    {selectedService.scope.map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-emerald-500/10 border border-emerald-600/30">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-1.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Sistem Keamanan Termasuk:</span>
                  </p>
                  <ul className="space-y-1 font-serif text-xs">
                    {selectedService.securityHighlights.map((sec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 dark:text-emerald-400">🛡️</span>
                        <span>{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-1">
                    Output Yang Anda Dapatkan:
                  </p>
                  <ul className="space-y-1 font-serif">
                    {selectedService.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#855E1E] dark:text-[#D4AF37]">✦</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-[#141413]/15 dark:border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 border border-[#141413]/30 dark:border-white/20 font-mono text-xs font-bold uppercase cursor-pointer"
                >
                  Tutup
                </button>
                <button
                  onClick={() => handleWhatsAppConsultation(selectedService.title, selectedService.price)}
                  className="px-5 py-2.5 bg-[#141413] text-white dark:bg-[#B48A3E] dark:text-[#111110] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Ajukan Penawaran WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
