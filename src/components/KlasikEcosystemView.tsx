import React, { useState, useMemo, useEffect } from 'react';
import {
  KLASIK_SERVICES,
  KLASIK_SECURITY_LAYERS,
  KLASIK_LEARNING_CHAPTERS,
  KLASIK_LEARNING_TRACKS,
  KLASIK_KAMUS,
  KLASIK_TOOLS,
  KLASIK_BLOG_POSTS,
  ServicePackage,
  LearningChapter,
  LearningTrack,
  BlogPost,
  SecurityLayer,
  KamusTerm,
  ToolItem,
} from '../data/klasikEcosystemData';
import {
  PERSONAL_INFO,
  CERTIFICATES_DATA,
  CERTIFICATES_DRIVE_URL,
  PROJECTS_DATA,
} from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import { FitranMascot } from './FitranMascot';
import { MateriCoverBanner } from './MateriCoverBanner';
import { SekawanEnterpriseLayanan } from './SekawanEnterpriseLayanan';
import { SekawanWebSolutions } from './SekawanWebSolutions';
import { InteractiveFlipbook } from './InteractiveFlipbook';
import { MateriArticleVisual } from './MateriArticleVisuals';
import { FitranPixelLogo, FitranPixelIcon, TealBot, BlueBot, OrangeBot } from './FitranPixelLogo';
import { WebsiteKilatPromoPoster, CybersecurityOperationsPoster, MetaCapiPromoPoster } from './PromotionalShowcasePosters';
import { GoogleDeveloperLogo } from './GoogleDeveloperLogo';
import { SpotifyPlaylist } from './SpotifyPlaylist';
import { CertificateItem, ProjectItem, SectionId } from '../types';
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
  Copy,
  Wrench,
  TrendingUp,
  Download,
  FolderOpen,
} from 'lucide-react';

interface KlasikEcosystemViewProps {
  activePage?: SectionId;
  onNavigate?: (section: SectionId) => void;
  onOpenCV?: () => void;
  onSelectCertificate?: (cert: CertificateItem) => void;
  onSelectProject?: (project: ProjectItem) => void;
}

export const KlasikEcosystemView: React.FC<KlasikEcosystemViewProps> = ({
  activePage = 'home',
  onNavigate,
  onOpenCV,
  onSelectCertificate,
  onSelectProject,
}) => {
  // Navigation helper
  const navigateTo = (page: SectionId) => {
    if (onNavigate) {
      onNavigate(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // State
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  // Seamless Article Navigation (Full-page, NEVER a floating popup modal)
  const openArticle = (post: BlogPost) => {
    setSelectedArticle(post);
    navigateTo('blog');
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', '/blog/' + post.slug);
    }
  };

  const [selectedService, setSelectedService] = useState<ServicePackage | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Belajar Studio States
  const [activeTrackId, setActiveTrackId] = useState<'ai' | 'digital-marketing' | 'vibe-coding'>('ai');
  const [activeChapterId, setActiveChapterId] = useState<string>('ai-00');
  const [activeSubchapterId, setActiveSubchapterId] = useState<string>('ai-00-1');
  const [materiSearch, setMateriSearch] = useState<string>('');
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({ 'ai-00': true, 'mkt-00': true, 'vc-00': true });

    // Synchronize document.title dynamically
  useEffect(() => {
    if (selectedArticle) {
      document.title = `${selectedArticle.title} — fitran.dev`;
    }
  }, [selectedArticle]);

  useEffect(() => {
    if (activePage === 'learning') {
      const ch = KLASIK_LEARNING_CHAPTERS.find((c) => c.id === activeChapterId);
      const sub = ch?.subchapters.find((s) => s.id === activeSubchapterId);
      if (sub && ch) {
        document.title = `${sub.title} | Belajar ${ch.title} — fitran.dev`;
      }
    }
  }, [activePage, activeChapterId, activeSubchapterId]);

  // Sync track, chapter, hash, and blog articles with URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullUrl = (window.location.pathname + window.location.hash).toLowerCase();
      const path = window.location.pathname.toLowerCase();

      // Sync blog article from URL slug (e.g. /blog/cara-membuat-mvp-dan-menentukan-fitur)
      if (path.startsWith('/blog/') || path.startsWith('/artikel/')) {
        const slug = path.replace(/^\/(blog|artikel)\/?/, '').trim();
        if (slug) {
          const found = KLASIK_BLOG_POSTS.find((p) => p.slug === slug || p.id === slug);
          if (found) {
            setSelectedArticle(found);
          }
        }
      }

      // Sync learning track from path or query
      if (fullUrl.includes('digital-marketing') || fullUrl.includes('meta-') || fullUrl.includes('google-') || fullUrl.includes('tracking-')) {
        setActiveTrackId('digital-marketing');
      } else if (fullUrl.includes('vibe-coding') || fullUrl.includes('vc-')) {
        setActiveTrackId('vibe-coding');
      } else if (fullUrl.includes('ai')) {
        setActiveTrackId('ai');
      }

      // Sync learning subchapter from URL hash (e.g. #/ai-00-1 or #ai-00-1)
      const rawHash = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
      if (rawHash) {
        for (const ch of KLASIK_LEARNING_CHAPTERS) {
          const matchedSub = ch.subchapters.find(
            (s) => s.id.toLowerCase() === rawHash || rawHash.includes(s.id.toLowerCase())
          );
          if (matchedSub) {
            setActiveTrackId(ch.trackId);
            setActiveChapterId(ch.id);
            setActiveSubchapterId(matchedSub.id);
            setOpenChapters((prev) => ({ ...prev, [ch.id]: true }));
            break;
          } else if (ch.id.toLowerCase() === rawHash || rawHash.includes(ch.id.toLowerCase())) {
            setActiveTrackId(ch.trackId);
            setActiveChapterId(ch.id);
            setActiveSubchapterId(ch.subchapters[0].id);
            setOpenChapters((prev) => ({ ...prev, [ch.id]: true }));
            break;
          }
        }
      }
    }
  }, [activePage]);

  // Filter States
  const [serviceFilter, setServiceFilter] = useState<string>('Semua');
  const [kamusSearch, setKamusSearch] = useState<string>('');
  const [kamusCategory, setKamusCategory] = useState<string>('Semua');
  const [toolsCategory, setToolsCategory] = useState<string>('Semua');
  const [blogFilter, setBlogFilter] = useState<string>('Semua');

  // Certificate Showcase States in Home & Dedicated Certificates Page
  const [certIssuerFilter, setCertIssuerFilter] = useState<'all' | 'Google' | 'CloudAI' | 'Competitions' | 'Academic'>('all');
  const [certSearch, setCertSearch] = useState<string>('');
  const [copiedCertId, setCopiedCertId] = useState<string | null>(null);

  // Flipbook and Sekawan Media View States
  const [showHomeFlipbook, setShowHomeFlipbook] = useState<boolean>(false);
  const [learningViewMode, setLearningViewMode] = useState<'studio' | 'flipbook'>('studio');

  const handleCopyCertId = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedCertId(id);
    setToastMessage(`ID Kredensial "${id}" berhasil disalin!`);
    setTimeout(() => setCopiedCertId(null), 2500);
  };

  const filteredCerts = useMemo(() => {
    return CERTIFICATES_DATA.filter((cert) => {
      if (certSearch) {
        const q = certSearch.toLowerCase();
        const match =
          cert.title.toLowerCase().includes(q) ||
          cert.issuer.toLowerCase().includes(q) ||
          (cert.credentialId && cert.credentialId.toLowerCase().includes(q));
        if (!match) return false;
      }
      if (certIssuerFilter === 'all') return true;
      if (certIssuerFilter === 'Google')
        return (
          cert.issuer === 'Google' ||
          cert.issuer === 'Google Skills' ||
          cert.issuer === 'Google Developer Program'
        );
      if (certIssuerFilter === 'CloudAI')
        return (
          cert.issuer === 'AWS' ||
          cert.issuer === 'NVIDIA' ||
          cert.issuer === 'Meta' ||
          cert.issuer === 'Vercel' ||
          cert.issuer === 'Anthropic' ||
          cert.issuer === 'Claude Academy' ||
          cert.issuer === 'Dicoding'
        );
      if (certIssuerFilter === 'Competitions')
        return (
          cert.title.toLowerCase().includes('medali') ||
          cert.title.toLowerCase().includes('gold') ||
          cert.title.toLowerCase().includes('kshpi') ||
          cert.title.toLowerCase().includes('oshsp') ||
          cert.title.toLowerCase().includes('osn') ||
          cert.title.toLowerCase().includes('posi')
        );
      if (certIssuerFilter === 'Academic')
        return (
          cert.category === 'academic' ||
          cert.category === 'publications' ||
          cert.issuer === 'Perpustakaan Nasional RI' ||
          cert.issuer === 'Central Course' ||
          cert.issuer === 'Belajar Era Digital' ||
          cert.issuer === 'Indonesia Baik'
        );
      return true;
    });
  }, [certIssuerFilter, certSearch]);

  // Issuer badge helper
  const renderCertBadge = (cert: CertificateItem) => {
    if (cert.issuer === 'AWS') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-300 font-mono text-[11px] font-bold">
          <img src="/official-aws-logo.png" alt="AWS" className="h-3.5 w-auto object-contain" />
          <span>AWS Skill Builder</span>
        </span>
      );
    }
    if (cert.issuer === 'NVIDIA' || cert.title.toUpperCase().includes('NVIDIA')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-mono text-[11px] font-bold">
          <img src="/official-nvidia-logo.png" alt="NVIDIA" className="h-3.5 w-auto object-contain" />
          <span>NVIDIA DLI</span>
        </span>
      );
    }
    if (cert.issuer === 'Anthropic' || cert.issuer === 'Claude Academy' || cert.title.toLowerCase().includes('claude')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/60 text-orange-800 dark:text-orange-300 font-mono text-[11px] font-bold">
          <img src="/official-claude-logo.png" alt="Claude" className="h-3.5 w-auto object-contain" />
          <span>Claude Academy</span>
        </span>
      );
    }
    if (cert.issuer === 'Google' || cert.issuer === 'Google Skills' || cert.issuer === 'Google Developer Program') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-blue-800 dark:text-blue-300 font-mono text-[11px] font-bold">
          <GoogleDeveloperLogo size={13} />
          <span>Google Developer</span>
        </span>
      );
    }
    if (cert.issuer === 'Meta') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900/60 text-sky-800 dark:text-sky-300 font-mono text-[11px] font-bold">
          <img src="/official-meta-logo.png" alt="Meta" className="h-3.5 w-auto object-contain" />
          <span>Meta Blueprint</span>
        </span>
      );
    }
    if (cert.title.toLowerCase().includes('gold') || cert.title.toLowerCase().includes('medali')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-900/60 text-yellow-900 dark:text-yellow-300 font-mono text-[11px] font-bold">
          <Award className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-400" />
          <span>Medali Emas Sains</span>
        </span>
      );
    }
    if (cert.issuer === 'Perpustakaan Nasional RI' || cert.category === 'publications') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-900/60 text-cyan-800 dark:text-cyan-300 font-mono text-[11px] font-bold">
          <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>Perpusnas RI</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-mono text-[11px] font-bold">
        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" />
        <span>{cert.issuer}</span>
      </span>
    );
  };

  // FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Auto-toast dismiss
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Track & Chapter resolution for Belajar
  const currentTrackChapters = useMemo(() => {
    return KLASIK_LEARNING_CHAPTERS.filter((c) => c.trackId === activeTrackId);
  }, [activeTrackId]);

  const activeChapter = useMemo(() => {
    return (
      currentTrackChapters.find((c) => c.id === activeChapterId) ||
      currentTrackChapters[0] ||
      KLASIK_LEARNING_CHAPTERS[0]
    );
  }, [currentTrackChapters, activeChapterId]);

  const activeSubchapter = useMemo(() => {
    return (
      activeChapter.subchapters.find((s) => s.id === activeSubchapterId) ||
      activeChapter.subchapters[0]
    );
  }, [activeChapter, activeSubchapterId]);

  // Filtering Chapters based on search
  const filteredChapters = useMemo(() => {
    if (!materiSearch) return currentTrackChapters;
    return currentTrackChapters.filter(
      (c) =>
        c.title.toLowerCase().includes(materiSearch.toLowerCase()) ||
        c.summary.toLowerCase().includes(materiSearch.toLowerCase()) ||
        c.subchapters.some((s) => s.title.toLowerCase().includes(materiSearch.toLowerCase()))
    );
  }, [currentTrackChapters, materiSearch]);

  // Toggle chapter accordion
  const toggleChapter = (chapterId: string) => {
    setOpenChapters((prev) => ({ ...prev, [chapterId]: !prev[chapterId] }));
  };

  // Handle select subchapter with URL hash update
  const handleSelectSubchapter = (chapter: LearningChapter, sub: SubchapterItem) => {
    setActiveChapterId(chapter.id);
    setActiveSubchapterId(sub.id);
    setOpenChapters((prev) => ({ ...prev, [chapter.id]: true }));
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `/belajar/${chapter.trackId}#/${sub.id}`);
    }
  };

  const allCurrentSubchapters = useMemo(() => {
    return currentTrackChapters.flatMap((ch) =>
      ch.subchapters.map((sub) => ({ chapter: ch, sub }))
    );
  }, [currentTrackChapters]);

  const currentSubIndex = useMemo(() => {
    return allCurrentSubchapters.findIndex(
      (item) => item.sub.id === activeSubchapter.id && item.chapter.id === activeChapter.id
    );
  }, [allCurrentSubchapters, activeSubchapter, activeChapter]);

  const prevSubItem = currentSubIndex > 0 ? allCurrentSubchapters[currentSubIndex - 1] : null;
  const nextSubItem =
    currentSubIndex >= 0 && currentSubIndex < allCurrentSubchapters.length - 1
      ? allCurrentSubchapters[currentSubIndex + 1]
      : null;

  // WhatsApp consultation triggers
  const handleWhatsAppConsultation = (serviceName?: string, price?: string) => {
    const text = serviceName
      ? `Halo Tubagus Fitran, saya membaca portofolio fitran.dev dan ingin konsultasi mengenai layanan: ${serviceName}${price ? ` (${price})` : ''}. Boleh minta info slot pengerjaan dan estimasi langkah awalnya?`
      : `Halo Tubagus Fitran, saya membaca materi & portofolio di fitran.dev dan ingin berdiskusi mengenai proyek sistem digital / website / AI agent untuk bisnis saya.`;
    const url = `https://wa.me/6282211993414?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Copy Markdown handler
  const handleCopyMarkdown = () => {
    const md = `# ${activeChapter.code}: ${activeChapter.title}\n\n**Untuk Siapa:** ${activeChapter.audience}\n\n${activeChapter.summary}\n\n## ${activeSubchapter.num}: ${activeSubchapter.title}\n\n### Masalah di Lapangan:\n${activeSubchapter.situation}\n\n### Penjelasan Arsitektur:\n${activeSubchapter.explanation}\n\n### Praktik Implementasi:\n${activeSubchapter.practice}\n\n### Kesalahan Umum:\n${activeSubchapter.mistakes}\n\n### Checklist:\n${activeSubchapter.checklist.map((c) => `- [x] ${c}`).join('\n')}\n\n---\nSumber: fitran.dev (Tubagus Fitran Badruttamam)`;
    navigator.clipboard.writeText(md);
    setToastMessage('Dokumentasi Markdown berhasil disalin ke clipboard!');
  };

  // Open in AI assistants
  const handleOpenChatGPT = () => {
    const query = encodeURIComponent(
      `Saya sedang mempelajari materi dari fitran.dev (${activeChapter.title} - ${activeSubchapter.title}). Tolong jelaskan lebih dalam dan berikan contoh penerapannya:\n\n${activeSubchapter.explanation}`
    );
    window.open(`https://chatgpt.com/?q=${query}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenClaude = () => {
    const query = encodeURIComponent(
      `Saya sedang mempelajari materi dari fitran.dev (${activeChapter.title} - ${activeSubchapter.title}). Tolong analisa arsitektur dan berikan rekomendasi teknis:\n\n${activeSubchapter.explanation}`
    );
    window.open(`https://claude.ai/new?q=${query}`, '_blank', 'noopener,noreferrer');
  };

  // Filtering Kamus
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

  // Filtering Tools
  const filteredTools = useMemo(() => {
    if (toolsCategory === 'Semua') return KLASIK_TOOLS;
    return KLASIK_TOOLS.filter((t) => t.category === toolsCategory);
  }, [toolsCategory]);

  // Filtering Services
  const filteredServices = useMemo(() => {
    if (serviceFilter === 'Semua') return KLASIK_SERVICES;
    return KLASIK_SERVICES.filter((s) => s.category === serviceFilter);
  }, [serviceFilter]);

  const FAQ_ITEMS = [
    {
      q: 'Apa bedanya AI agent dengan automation biasa?',
      a: 'Automation menjalankan alur yang sudah pasti, misalnya form masuk, data dicatat ke CRM, lalu notifikasi dikirim. AI agent dipakai ketika pekerjaan butuh konteks, sumber pengetahuan dokumen bisnis (RAG), dan batas tindakan yang jelas, dan keputusan penting tetap kembali ke manusia.',
    },
    {
      q: 'Apakah semua langkah bisnis perlu AI?',
      a: 'Tidak. Trigger, validasi email/telepon, routing, dan notifikasi sering jauh lebih baik dijalankan dengan aturan deterministik yang pasti dan gratis. AI dipakai pada langkah yang benar-benar membutuhkan pembacaan teks natural atau keputusan dengan kriteria pemeriksaan.',
    },
    {
      q: 'Berapa biaya minimum pembuatan website?',
      a: 'Biaya dimulai dari Rp 500.000 untuk paket Website Online Kilat (1 halaman responsif, tombol WhatsApp leads, SSL HTTPS aktif, dan gratis hosting cloud). Untuk website bisnis perusahaan berkisar Rp 1.500.000, dan aplikasi dashboard internal kustom mulai Rp 3.500.000.',
    },
    {
      q: 'Ada kontrak minimum atau biaya langganan bulanan?',
      a: 'Tidak ada biaya tersembunyi. Pekerjaan pembuatan website dan aplikasi bersifat sekali jadi (one-off). Setelah serah terima, seluruh source code, domain, dan akses akun hosting 100% milik Anda tanpa kewajiban sewa kode bulanan.',
    },
    {
      q: 'Berapa lama sampai website atau AI agent selesai dikerjakan?',
      a: 'Website Kilat: 1 - 2 hari kerja. Website Perusahaan: 3 - 5 hari kerja. WhatsApp AI Agent: 3 - 5 hari kerja. Aplikasi Web Dashboard: 7 - 14 hari kerja. Seluruh jadwal disepakati tertulis di awal sebelum pengerjaan dimulai.',
    },
    {
      q: 'Saya belum punya website, apakah bisa langsung pasang WhatsApp AI atau iklan?',
      a: 'Bisa, namun memiliki landing page resmi yang cepat (< 1 detik) dan terpasang Meta CAPI akan melipatgandakan tingkat kepercayaan pembeli dan menghasilkan data konversi yang jauh lebih murah.',
    },
    {
      q: 'Bisa ambil sebagian layanan saja, misalnya cuma pasang Meta CAPI atau VPS?',
      a: 'Tentu bisa. Anda bisa memesan paket Setup VPS Hardening (Rp 750.000) atau Setup Meta Conversions API (Rp 650.000) saja sesuai kebutuhan spesifik sistem Anda saat ini.',
    },
    {
      q: 'Bagaimana standar keamanan yang diterapkan pada setiap proyek?',
      a: 'Saya menerapkan 5 Lapisan Keamanan Terstruktur: Enkripsi TLS 1.3 Strict, Hardening Server Linux (SSH Key Only, UFW, Fail2ban), Sanitasi Input Anti-SQLi & XSS, AI Prompt Sandboxing, dan Pencadangan Terenkripsi Harian (Disaster Recovery).',
    },
  ];

  return (
    <div className="w-full bg-[#FAFAFC] dark:bg-[#0A0B0F] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-[#1E3A8A] selection:text-white transition-colors duration-300">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-medium text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 1: BERANDA LENGKAP (HOME VIEW - ELEVATED INNOVATION ARCHITECTURE)    */}
      {/* ========================================================================= */}
      {activePage === 'home' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-20 sm:space-y-28">
          {/* 1. HERO SECTION - 2-COLUMN SPLIT WITH EXECUTIVE HUD & OFFICIAL AVATAR */}
          <section className="pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* SISI KIRI (Col 7) */}
              <div className="lg:col-span-7 space-y-6">
                {/* Live Availability Pill */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 font-mono text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>TERBUKA UNTUK PROYEK &amp; KONSULTASI · CILEGON, INDONESIA</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-[11px] font-bold">
                    <GoogleDeveloperLogo size={12} />
                    <span>Google Dev Program</span>
                  </div>
                </div>

                {/* Big Hero Title */}
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 dark:text-white leading-[1.08]">
                    Fullstack Developer <br />
                    <span className="text-[#1E3A8A] dark:text-blue-400">&amp; AI Engineer</span>
                  </h1>
                  <p className="text-lg sm:text-xl font-medium text-zinc-800 dark:text-zinc-200 max-w-2xl leading-relaxed">
                    Merancang AI agent &amp; automation, aplikasi web performa tinggi (<span className="text-[#1E3A8A] dark:text-blue-400 font-bold">&lt;0.8s</span>), sistem keamanan server 5 lapis, serta technical marketing (Meta CAPI &amp; Google Ads).
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                  Tubagus Fitran Badruttamam adalah Fullstack Developer dan AI Engineer dari Cilegon, Indonesia (Mahasiswa S1 Informatika Universitas Muhammadiyah Banten). Fitran Dev menyediakan jasa website kilat, AI agent dan automation terintegrasi, dengan kepemilikan source code 100% milik klien tanpa biaya sewa kode tersembunyi.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => handleWhatsAppConsultation()}
                    className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer group"
                  >
                    <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    <span>Chat via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => navigateTo('services')}
                    className="px-6 py-3 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 shadow-xs"
                  >
                    <Briefcase className="w-4 h-4 text-zinc-500" />
                    <span>Lihat 8 Layanan (Mulai 500rb)</span>
                  </button>

                  <a
                    href="#sertifikat-showcase"
                    className="px-5 py-3 rounded-full bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700/80 text-zinc-700 dark:text-zinc-300 font-semibold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2"
                  >
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>36+ Sertifikasi &amp; Lisensi</span>
                  </a>
                </div>

                {/* Tech Ecosystem Quick Badges */}
                <div className="pt-2 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 mr-1">Ecosystem:</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                    <GoogleDeveloperLogo size={12} /> Google Cloud
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                    <img src="/official-aws-logo.png" alt="AWS" className="h-3 w-auto object-contain" /> AWS AI
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                    <img src="/official-nvidia-logo.png" alt="NVIDIA" className="h-3 w-auto object-contain" /> NVIDIA DLI
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                    <img src="/official-claude-logo.png" alt="Claude" className="h-3 w-auto object-contain" /> Claude AI
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                    <img src="/official-meta-logo.png" alt="Meta" className="h-3 w-auto object-contain" /> Meta CAPI
                  </span>
                </div>
              </div>

              {/* SISI KANAN (Col 5) - Executive Profile & Systems HUD Card */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-xl space-y-5 relative overflow-hidden">
                  {/* Decorative subtle ambient accent */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/15 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Profile Card Header */}
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="relative shrink-0">
                      <img
                        src="/tubagus-fitran-avatar.jpg"
                        alt="Tubagus Fitran Badruttamam"
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#1E3A8A]/40 shadow-md"
                      />
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-[#111319] rounded-full" title="Online & Aktif" />
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-[10px] font-bold">
                        <GoogleDeveloperLogo size={11} />
                        <span>Google Developer Program</span>
                      </div>
                      <h2 className="font-extrabold text-base sm:text-lg text-zinc-950 dark:text-white truncate">
                        Tubagus Fitran Badruttamam
                      </h2>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono truncate">
                        S1 Informatika · Univ. Muhammadiyah Banten
                      </p>
                      <p className="text-[11px] text-zinc-400 flex items-center gap-1">
                        <Compass className="w-3 h-3 text-[#1E3A8A] dark:text-blue-400" /> Cilegon, Provinsi Banten
                      </p>
                    </div>
                  </div>

                  {/* 4-Stat Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2.5 relative z-10 pt-1">
                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 text-center">
                      <p className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white font-mono">36+</p>
                      <p className="text-[11px] text-zinc-500 font-medium">Lisensi &amp; Sertifikat</p>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 text-center">
                      <p className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 font-mono">2×</p>
                      <p className="text-[11px] text-zinc-500 font-medium">Medali Emas Sains</p>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 text-center">
                      <p className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">&lt;0.8s</p>
                      <p className="text-[11px] text-zinc-500 font-medium">Lighthouse Speed</p>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 text-center">
                      <p className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">100%</p>
                      <p className="text-[11px] text-zinc-500 font-medium">Hak Milik Source Code</p>
                    </div>
                  </div>

                  {/* Quick Action Links inside card */}
                  <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 space-y-2 relative z-10">
                    <button
                      onClick={onOpenCV}
                      className="w-full py-2.5 px-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Buka Curriculum Vitae Resmi (PDF)</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <a
                        href={PERSONAL_INFO.socialLinks.googleSkillshopWallet}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>Skillshop Wallet</span>
                        <ExternalLink className="w-3 h-3 text-zinc-400" />
                      </a>
                      <a
                        href={CERTIFICATES_DRIVE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>Google Drive</span>
                        <ExternalLink className="w-3 h-3 text-zinc-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. OFFICIAL PARTNERSHIP & BADGE STRIP */}
          <section className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 sm:gap-6 text-xs text-zinc-500 font-medium">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-zinc-400">Afiliasi &amp; Lisensi Resmi:</span>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <span className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <GoogleDeveloperLogo size={14} /> Google Developer Program
                </span>
                <span className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <img src="/official-aws-logo.png" alt="AWS" className="h-3.5 w-auto object-contain" /> AWS Skill Builder
                </span>
                <span className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <img src="/official-nvidia-logo.png" alt="NVIDIA" className="h-3.5 w-auto object-contain" /> NVIDIA DLI
                </span>
                <span className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <img src="/official-claude-logo.png" alt="Claude" className="h-3.5 w-auto object-contain" /> Anthropic Claude
                </span>
                <span className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <Award className="w-4 h-4 text-amber-500" /> 2× Medali Emas Sains
                </span>
                <span className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors">
                  <BookOpen className="w-4 h-4 text-cyan-500" /> Perpusnas RI Press
                </span>
              </div>
            </div>
          </section>

          {/* 3. KAPABILITAS */}
          <section className="space-y-6">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-blue-400 mb-1">
                KAPABILITAS
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                AI agent dan automation, didukung engineering serta technical marketing.
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-3xl">
                Fokus pada alur kerja berbasis AI; pengembangan web/aplikasi dan technical marketing mendukung scope sesuai kebutuhan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* 01 Full-Stack Development */}
              <div className="p-7 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-4 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs font-bold text-zinc-400">01 FULL-STACK DEVELOPMENT</p>
                  <Code2 className="w-4 h-4 text-blue-500" />
                </div>
                <h3 className="font-bold text-xl text-zinc-950 dark:text-white">Pengembangan web &amp; aplikasi</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Membangun website, web app, dashboard, dan integrasi yang mengikuti proses bisnis Anda.
                </p>
                <ul className="text-xs text-zinc-700 dark:text-zinc-300 space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Landing page cepat dan ringan (&lt;1s load)</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Website bisnis &amp; company profile</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Dashboard dan portal internal klien</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Integrasi API dan sistem yang sudah ada</li>
                </ul>
              </div>

              {/* 02 AI Engineering */}
              <div className="p-7 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-4 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs font-bold text-zinc-400">02 AI ENGINEERING</p>
                  <Cpu className="w-4 h-4 text-purple-500" />
                </div>
                <h3 className="font-bold text-xl text-zinc-950 dark:text-white">AI agent &amp; automation</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Merancang agent dan alur kerja yang membantu tim menangani pekerjaan berulang dengan lebih konsisten.
                </p>
                <ul className="text-xs text-zinc-700 dark:text-zinc-300 space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-500 shrink-0" /> Agent AI untuk balas chat &amp; kualifikasi leads</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-500 shrink-0" /> Alur kerja otomatis antar tools (Make/n8n)</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-500 shrink-0" /> Integrasi data dan CRM</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-500 shrink-0" /> Laporan terjadwal tanpa disusun manual</li>
                </ul>
              </div>

              {/* 03 Digital Marketing & Security */}
              <div className="p-7 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-4 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs font-bold text-zinc-400">03 DIGITAL MARKETING &amp; KEAMANAN</p>
                  <ShieldCheck className="w-4 h-4 text-cyan-500" />
                </div>
                <h3 className="font-bold text-xl text-zinc-950 dark:text-white">Pemasaran digital &amp; keamanan server</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Menghubungkan landing page, tracking server-side, dan pertahanan server Linux agar sistem kokoh dan terukur.
                </p>
                <ul className="text-xs text-zinc-700 dark:text-zinc-300 space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-500 shrink-0" /> Meta Conversions API (CAPI) &amp; Google Ads</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-500 shrink-0" /> Hardening VPS Linux (UFW, Fail2ban, SSH Key)</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-500 shrink-0" /> Tracking, atribusi, dan pelaporan konversi</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-500 shrink-0" /> 5 Lapisan Keamanan sistem berstandar tinggi</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. LAYANAN (8 ITEMS GRID - MULAI 500RB) */}
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-blue-400 mb-1">
                  LAYANAN RESMI
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                  Aplikasi, AI, otomasi, dan pemasaran digital untuk bisnis.
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Seluruh layanan bersifat sekali jadi (one-off) dengan kepemilikan 100% kode di tangan Anda tanpa biaya sewa tersembunyi.
                </p>
              </div>
              <button
                onClick={() => navigateTo('services')}
                className="text-xs font-bold text-[#1E3A8A] dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer shrink-0"
              >
                <span>Buka Detail Seluruh 8 Layanan</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {KLASIK_SERVICES.map((s) => (
                <div
                  key={s.id}
                  onClick={() => navigateTo('services')}
                  className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-[#1E3A8A]/60 dark:hover:border-blue-500/60 transition-all shadow-xs flex flex-col justify-between cursor-pointer group relative overflow-hidden"
                >
                  {s.badge && (
                    <span className="absolute top-3 right-3 font-mono text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                      {s.badge}
                    </span>
                  )}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-zinc-400 group-hover:text-[#1E3A8A] dark:text-blue-400 dark:group-hover:text-red-400">
                        {s.code}
                      </span>
                    </div>
                    <div className="pt-1">
                      <span className="font-mono text-xs font-black text-emerald-600 dark:text-emerald-400">
                        {s.price}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-zinc-950 dark:text-white group-hover:text-[#1E3A8A] dark:text-blue-400 dark:group-hover:text-red-400 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                      {s.tagline}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-[#1E3A8A] dark:text-blue-400 font-semibold">
                    <span>Lihat Scope &amp; SLA</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROMOTIONAL SHOWCASE 1: WEBSITE KILAT 24 JAM Rp 500.000 */}
          <WebsiteKilatPromoPoster onWhatsAppInquiry={handleWhatsAppConsultation} />

          {/* 5. CYBERSECURITY OPERATIONS CENTER & HARDENING POSTER (REPLACING BARE CARD WITH HIGH-TECH SHOWCASE) */}
          <CybersecurityOperationsPoster onWhatsAppInquiry={handleWhatsAppConsultation} />

          {/* PROMOTIONAL SHOWCASE 2: META CAPI & TRACKING */}
          <MetaCapiPromoPoster onWhatsAppInquiry={handleWhatsAppConsultation} />

          {/* SEKAWAN MEDIA WEB SOLUTIONS (4 PILLARS & INTERACTIVE BENTO GRID) */}
          <section className="space-y-6 pt-4">
            <SekawanWebSolutions
              onWhatsAppInquiry={handleWhatsAppConsultation}
              onOpenFlipbook={() => setShowHomeFlipbook((prev) => !prev)}
            />

            {showHomeFlipbook && (
              <div className="pt-4 animate-fade-in" id="home-flipbook-viewer">
                <InteractiveFlipbook
                  initialSpreadIndex={0}
                  onClose={() => setShowHomeFlipbook(false)}
                />
              </div>
            )}
          </section>

          {/* 6. SERTIFIKAT, KOMPETISI & LISENSI RESMI (LENGKAP 36+ SERTIFIKAT!) */}
          <section id="sertifikat-showcase" className="space-y-6 pt-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-blue-400 mb-1">
                  KREDENSIAL &amp; LISENSI RESMI
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                  Sertifikasi Global, Olimpiade Sains &amp; Rekayasa.
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
                  Kompilasi 36+ lisensi resmi dari Google Cloud, AWS, NVIDIA, Anthropic, medali emas kompetisi sains nasional, serta pengakuan Perpustakaan Nasional RI.
                </p>
              </div>

              {/* External credentials links */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={CERTIFICATES_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Buka Google Drive Lengkap</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3">
              {[
                { id: 'all', label: `Semua (${CERTIFICATES_DATA.length})` },
                { id: 'Google', label: 'Google & Google Cloud' },
                { id: 'CloudAI', label: 'AWS & NVIDIA AI' },
                { id: 'Competitions', label: 'Olimpiade & Medali Emas' },
                { id: 'Academic', label: 'Akademik & Literasi' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCertIssuerFilter(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    certIssuerFilter === tab.id
                      ? 'bg-[#1E3A8A] text-white shadow-xs font-bold'
                      : 'bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCerts.slice(0, 9).map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => onSelectCertificate && onSelectCertificate(cert)}
                  className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-[#1E3A8A]/50 dark:hover:border-blue-500/50 transition-all shadow-xs flex flex-col justify-between group cursor-pointer space-y-3"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      {renderCertBadge(cert)}
                      <span className="font-mono text-[10px] text-zinc-400">{cert.issueDate}</span>
                    </div>

                    <h3 className="font-bold text-sm text-zinc-950 dark:text-white group-hover:text-[#1E3A8A] dark:text-blue-400 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                      {cert.description}
                    </p>

                    {cert.credentialId && (
                      <div
                        onClick={(e) => handleCopyCertId(e, cert.credentialId!)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-[10px] font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
                        title="Klik untuk menyalin ID"
                      >
                        <Copy className="w-3 h-3" />
                        <span className="truncate max-w-[170px]">ID: {cert.credentialId}</span>
                        {copiedCertId === cert.credentialId && (
                          <span className="text-emerald-500 font-bold ml-1">Tersalin!</span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] font-semibold text-[#1E3A8A] dark:text-blue-400">
                    <span>Lihat Bukti Kredensial</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Button to show all certs */}
            {filteredCerts.length > 9 && (
              <div className="text-center pt-2">
                <button
                  onClick={() => {
                    if (onSelectCertificate && filteredCerts[0]) {
                      onSelectCertificate(filteredCerts[0]);
                    }
                  }}
                  className="px-6 py-2.5 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-xs font-bold text-zinc-800 dark:text-zinc-200 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Buka Seluruh {filteredCerts.length} Kredensial di Katalog Detail</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </section>

          {/* 7. PORTOFOLIO PROYEK REKAYASA NYATA */}
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-blue-400 mb-1">
                  KARYA REKAYASA NYATA
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                  Aplikasi &amp; Sistem yang Telah Dirancang.
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
                  Produk perangkat lunak riil yang sudah live di Vercel dan digunakan untuk operasional industri, layanan ibadah harian, serta platform analitik.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROJECTS_DATA.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className="p-6 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-[#1E3A8A]/60 dark:hover:border-blue-500/60 transition-all shadow-sm flex flex-col justify-between group cursor-pointer space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 font-mono text-[10px] font-bold text-zinc-700 dark:text-zinc-300">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Live Deployment</span>
                      </span>
                    </div>

                    <h3 className="font-extrabold text-lg text-zinc-950 dark:text-white group-hover:text-[#1E3A8A] dark:text-blue-400 dark:group-hover:text-red-400 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-[10px] font-mono text-zinc-600 dark:text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1E3A8A] dark:text-blue-400 flex items-center gap-1">
                      <span>Eksplorasi Arsitektur</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        title="Buka Live Web"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 8. CARA KERJA (4 LANGKAH) */}
          <section className="space-y-6">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-blue-400 mb-1">
                CARA KERJA
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Yang terjadi setelah Anda kirim konteks.
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
                Empat langkah untuk menerjemahkan kebutuhan bisnis menjadi scope kerja yang jelas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  code: '01',
                  time: 'AWAL',
                  title: 'Pahami konteks',
                  desc: 'Ceritakan target bisnis, proses kerja, atau sistem yang ingin dibangun. Saya petakan masalah dan ukuran keberhasilannya.',
                },
                {
                  code: '02',
                  time: 'SETELAH BRIEF',
                  title: 'Prioritas & scope',
                  desc: 'Saya usulkan pendekatan, prioritas, perkiraan waktu, dan biaya berdasarkan kebutuhan yang sudah dibahas.',
                },
                {
                  code: '03',
                  time: 'SESUAI SCOPE',
                  title: 'Pengerjaan',
                  desc: 'Pembangunan aplikasi, konfigurasi AI agent, otomasi, tracking, atau kampanye dikerjakan sesuai ruang lingkup yang disepakati.',
                },
                {
                  code: '04',
                  time: 'BERKALA',
                  title: 'Review & iterasi',
                  desc: 'Hasil ditinjau bersama agar Anda tahu apa yang sudah berjalan, apa yang perlu diperbaiki, dan keputusan berikutnya.',
                },
              ].map((step, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-zinc-300 dark:text-zinc-700">{step.code}</span>
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-zinc-950 dark:text-white">{step.title}</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 9. BELAJAR TEASER SECTION */}
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-blue-400 mb-1">
                  STUDIO BELAJAR
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                  Materi yang biasanya disimpan agency.
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  22 bab kurikulum sistematis dengan studi kasus implementasi nyata, kode arsitektur, dan checklist produksi.
                </p>
              </div>
              <button
                onClick={() => navigateTo('learning')}
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer shrink-0"
              >
                Buka Peta Belajar Lengkap
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                onClick={() => {
                  setActiveTrackId('ai');
                  navigateTo('learning');
                }}
                className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/60 transition-all cursor-pointer group space-y-2"
              >
                <p className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400">PILAR 01 · 8 BAB</p>
                <h3 className="font-bold text-base text-zinc-950 dark:text-white group-hover:text-purple-600 transition-colors">
                  AI untuk Bisnis
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Fondasi LLM, prompt engineering, RAG knowledge base, hingga WhatsApp AI Agent produksi.
                </p>
              </div>

              <div
                onClick={() => {
                  setActiveTrackId('digital-marketing');
                  navigateTo('learning');
                }}
                className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/60 transition-all cursor-pointer group space-y-2"
              >
                <p className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">PILAR 02 · 8 BAB</p>
                <h3 className="font-bold text-base text-zinc-950 dark:text-white group-hover:text-cyan-600 transition-colors">
                  Meta Ads &amp; Google Ads
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Cara kerja lelang, struktur akun, creative testing, keyword intent, dan optimasi mingguan.
                </p>
              </div>

              <div
                onClick={() => {
                  setActiveTrackId('digital-marketing');
                  navigateTo('learning');
                }}
                className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/60 transition-all cursor-pointer group space-y-2"
              >
                <p className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">PILAR 03 · 8 BAB</p>
                <h3 className="font-bold text-base text-zinc-950 dark:text-white group-hover:text-emerald-600 transition-colors">
                  Tracking &amp; CAPI
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Pixel, GTM, GA4, Meta Conversions API (CAPI), dan cara membaca atribusi konversi.
                </p>
              </div>

              <div
                onClick={() => navigateTo('kamus')}
                className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/60 transition-all cursor-pointer group space-y-2"
              >
                <p className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">REFERENSI · 40+ ISTILAH</p>
                <h3 className="font-bold text-base text-zinc-950 dark:text-white group-hover:text-amber-600 transition-colors">
                  Kamus Istilah Digital
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Arti CPA, ROAS, CAPI, AI agent, RAG, dan istilah lain dalam bahasa yang wajar dan lugas.
                </p>
              </div>
            </div>
          </section>

          {/* 10. TOOLS YANG SAYA PAKAI */}
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  TOOLS
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                  Tools yang saya pakai.
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Senjata harian untuk ngiklan, otomasi, dan bikin produk digital.
                </p>
              </div>
              <button
                onClick={() => navigateTo('tools')}
                className="text-xs font-bold text-[#1E3A8A] dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Lihat Seluruh Toolkit</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {KLASIK_TOOLS.slice(0, 12).map((t, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-center space-y-1">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                    {t.badge || 'Tech'}
                  </span>
                  <p className="font-bold text-xs text-zinc-900 dark:text-white mt-1">{t.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 11. BLOG (TULISAN PILIHAN) */}
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  BLOG
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                  Tulisan pilihan.
                </h2>
              </div>
              <button
                onClick={() => navigateTo('blog')}
                className="text-xs font-bold text-[#1E3A8A] dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Lihat Semua Tulisan</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {KLASIK_BLOG_POSTS.map((p) => (
                <div
                  key={p.id}
                  onClick={() => openArticle(p)}
                  className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-[#1E3A8A]/50 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                      <span>{p.date}</span>
                      <span>•</span>
                      <span className="text-emerald-600 dark:text-emerald-400">{p.category}</span>
                    </div>
                    <h3 className="font-bold text-base text-zinc-950 dark:text-white group-hover:text-[#1E3A8A] dark:text-blue-400 dark:group-hover:text-red-400 transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <div className="pt-3 mt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-[#1E3A8A] dark:text-blue-400">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 12. KOMUNITAS & AFILIASI RESMI */}
          <section className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-blue-400 mb-1">
                KOMUNITAS &amp; LISENSI RESMI
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Terverifikasi di Ekosistem Pengembang Global
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl leading-relaxed">
                Aktif dalam forum riset teknologi, Google Developer Groups (GDG) on Campus, Maps Innovators, serta peraih 2× Medali Emas Olimpiade Sains Nasional dan Penulis Buku Perpustakaan Nasional RI.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 flex items-center gap-3">
                <GoogleDeveloperLogo size={24} />
                <div>
                  <p className="font-bold text-xs text-zinc-900 dark:text-white">Google Developer Program</p>
                  <p className="text-[11px] text-zinc-500">Verified Member</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-500" />
                <div>
                  <p className="font-bold text-xs text-zinc-900 dark:text-white">2× Medali Emas Sains</p>
                  <p className="text-[11px] text-zinc-500">Matematika &amp; Sejarah (Grade A+)</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-cyan-600" />
                <div>
                  <p className="font-bold text-xs text-zinc-900 dark:text-white">Penulis Perpusnas RI</p>
                  <p className="text-[11px] text-zinc-500">HUT ke-46 Perpustakaan Nasional</p>
                </div>
              </div>
            </div>
          </section>

          {/* 13. PERTANYAAN (FAQ) */}
          <section className="space-y-6">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1">
                PERTANYAAN
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Yang paling sering ditanyakan.
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                Kalau pertanyaan Anda tidak ada di sini, tanyakan langsung lewat WhatsApp.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-bold text-sm text-zinc-900 dark:text-white">{item.q}</span>
                      <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isOpen ? 'rotate-180 text-[#1E3A8A] dark:text-blue-400' : ''}`} />
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

          {/* 14. TENTANG SAYA TEASER */}
          <section className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              TENTANG SAYA
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white">
              Fullstack Developer &amp; AI Engineer dari Cilegon, Indonesia.
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Fitran Dev adalah wadah tempat saya, Tubagus Fitran Badruttamam, bekerja sebagai Fullstack Developer dan AI Engineer dari Cilegon, Indonesia. Saya membangun aplikasi, AI agent, automation, dan sistem digital untuk membantu bisnis bekerja lebih rapi—termasuk fondasi website kilat, sistem keamanan 5 lapis, tracking server-side, dan pemasaran digital terukur saat dibutuhkan.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-2">
              <span>✓ 3+ tahun pengalaman rekayasa perangkat lunak</span>
              <span>✓ Berbasis di Cilegon, Banten (Remote Ready)</span>
              <span>✓ 100% Kepemilikan Source Code Klien</span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => navigateTo('about')}
                className="text-xs font-bold text-[#1E3A8A] dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Baca Profil Rekayasa Selengkapnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* 15. SIAP MULAI? (CTA BANNER) */}
          <section className="p-8 sm:p-12 rounded-3xl bg-zinc-950 dark:bg-[#141720] text-white text-center space-y-5 border border-zinc-800">
            <span className="font-mono text-xs font-bold text-[#E02424] uppercase tracking-widest">
              SIAP MULAI?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Mari bicarakan aplikasi atau sistem digital Anda.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Mulai dari kebutuhan proyek. Ceritakan pekerjaan, kendala, dan hasil yang ingin Anda capai.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleWhatsAppConsultation()}
                className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-lg flex items-center gap-2 mx-auto cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Mulai Diskusi Proyek via WhatsApp</span>
              </button>
            </div>
          </section>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW: DEDICATED CERTIFICATES CATALOG (/certificates)                     */}
      {/* ========================================================================= */}
      {activePage === 'certificates' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fade-in">
          {/* Official Credentials Mascot Highlight Banner */}
          <div className="p-6 rounded-3xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#1E3A8A] flex items-center justify-center text-white text-[10px] font-black">FD</div>
                <span className="font-mono text-xs font-bold text-[#1E3A8A] dark:text-blue-300">fitran.dev Official Credentials</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white">Kredensial Resmi Standar Global</h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-xl">
                Terverifikasi resmi dari Google Cloud & Developer Program, AWS, NVIDIA Deep Learning Institute, Anthropic Claude, Meta, serta 2× Medali Emas Sains Nasional.
              </p>
            </div>
            <FitranMascot variant="security" size="md" className="shrink-0" />
          </div>

          {/* Top Breadcrumb & Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-1">
                <span className="hover:underline cursor-pointer" onClick={() => navigateTo('home')}>Beranda</span>
                <span>/</span>
                <span className="text-[#1E3A8A] dark:text-blue-400 font-semibold">Sertifikat &amp; Kredensial Resmi</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                36+ Kredensial &amp; Sertifikasi Terverifikasi
              </h1>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
                Seluruh sertifikasi kompetensi industri dan akademik resmi yang diraih Tubagus Fitran Badruttamam. Meliputi Google Cloud &amp; Developer Program, AWS Skill Builder, NVIDIA Deep Learning Institute, Claude / Anthropic, Meta Blueprint, Medali Emas Sains KSHPI/POSI, dan Perpustakaan Nasional RI. Dilengkapi ID kredensial terverifikasi dan tautan validasi online resmi.
              </p>
            </div>

            {/* External Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={CERTIFICATES_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#111319] hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <FolderOpen className="w-4 h-4 text-amber-500" />
                <span>Google Drive Sertifikat</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              {onOpenCV && (
                <button
                  onClick={onOpenCV}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh CV Lengkap</span>
                </button>
              )}
            </div>
          </div>

          {/* Metric Highlights Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <p className="text-[11px] font-mono uppercase text-zinc-400">Total Kredensial</p>
              <p className="text-2xl sm:text-3xl font-black font-mono text-zinc-950 dark:text-white mt-1">36+</p>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-0.5">Terverifikasi 100%</p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <p className="text-[11px] font-mono uppercase text-zinc-400">Kompetisi Sains</p>
              <p className="text-2xl sm:text-3xl font-black font-mono text-yellow-600 dark:text-yellow-400 mt-1">2×</p>
              <p className="text-[11px] text-zinc-500 mt-0.5">Medali Emas Grade A+</p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <p className="text-[11px] font-mono uppercase text-zinc-400">Vendor Cloud Utama</p>
              <p className="text-2xl sm:text-3xl font-black font-mono text-blue-600 dark:text-blue-400 mt-1">4</p>
              <p className="text-[11px] text-zinc-500 mt-0.5">Google, AWS, NVIDIA, Meta</p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <p className="text-[11px] font-mono uppercase text-zinc-400">Publikasi Resmi</p>
              <p className="text-2xl sm:text-3xl font-black font-mono text-purple-600 dark:text-purple-400 mt-1">1</p>
              <p className="text-[11px] text-zinc-500 mt-0.5">Buku Perpusnas RI</p>
            </div>
          </div>

          {/* Filter Controls & Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800">
            {/* Issuer Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: 'Semua (36+)' },
                { id: 'Google', label: 'Google Cloud & Dev' },
                { id: 'CloudAI', label: 'AWS & Cloud AI' },
                { id: 'Competitions', label: 'Medali Sains' },
                { id: 'Academic', label: 'Akademik & Perpusnas' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCertIssuerFilter(tab.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    certIssuerFilter === tab.id
                      ? 'bg-[#1E3A8A] text-white shadow-xs'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Cari nama, penerbit, ID..."
                value={certSearch}
                onChange={(e) => setCertSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs focus:outline-hidden focus:border-[#1E3A8A]"
              />
              {certSearch && (
                <button
                  onClick={() => setCertSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-[#1E3A8A]/60 transition-all group"
              >
                <div className="space-y-3">
                  {/* Issuer Badge & Date */}
                  <div className="flex items-center justify-between gap-2">
                    {renderCertBadge(cert)}
                    <span className="text-[11px] font-mono text-zinc-400 shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  {/* Cert Title */}
                  <h3 className="font-bold text-sm text-zinc-950 dark:text-white group-hover:text-[#1E3A8A] dark:text-blue-400 dark:group-hover:text-red-400 transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer Name */}
                  <p className="text-xs text-zinc-500">
                    Penerbit Resmi: <span className="font-medium text-zinc-700 dark:text-zinc-300">{cert.issuer}</span>
                  </p>

                  {/* Credential ID with Copy */}
                  {cert.credentialId && (
                    <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-[11px] font-mono">
                      <span className="text-zinc-400 truncate max-w-[170px]" title={cert.credentialId}>
                        ID: {cert.credentialId}
                      </span>
                      <button
                        onClick={(e) => handleCopyCertId(e, cert.credentialId || '')}
                        className="flex items-center gap-1 text-[10px] text-zinc-600 dark:text-zinc-300 hover:text-[#1E3A8A] dark:text-blue-400 dark:hover:text-blue-400 font-bold ml-2 shrink-0 cursor-pointer"
                        title="Salin ID Kredensial"
                      >
                        {copiedCertId === cert.credentialId ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-500">Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Salin</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectCertificate && onSelectCertificate(cert)}
                    className="py-1.5 px-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Award className="w-3.5 h-3.5 text-[#1E3A8A] dark:text-blue-400" />
                    <span>Lihat Sertifikat</span>
                  </button>

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-3 rounded-lg text-zinc-500 hover:text-[#1E3A8A] dark:text-blue-400 dark:hover:text-blue-400 text-xs font-medium flex items-center gap-1 transition-colors"
                      title="Buka Halaman Verifikasi Resmi Penerbit"
                    >
                      <span>Verifikasi</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-zinc-400">Arsip Terbitan</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredCerts.length === 0 && (
            <div className="p-12 text-center rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-3">
              <AlertCircle className="w-8 h-8 text-zinc-400 mx-auto" />
              <p className="font-bold text-sm text-zinc-900 dark:text-white">Tidak ada sertifikat yang cocok dengan pencarian.</p>
              <button
                onClick={() => { setCertSearch(''); setCertIssuerFilter('all'); }}
                className="text-xs text-[#1E3A8A] dark:text-blue-400 font-bold hover:underline cursor-pointer"
              >
                Reset Pencarian
              </button>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW: DEDICATED PROJECTS PORTFOLIO (/projects)                           */}
      {/* ========================================================================= */}
      {activePage === 'work' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fade-in">
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5">
            <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-1">
              <span className="hover:underline cursor-pointer" onClick={() => navigateTo('home')}>Beranda</span>
              <span>/</span>
              <span className="text-[#1E3A8A] dark:text-blue-400 font-semibold">Proyek Rekayasa</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white">
              Portofolio Proyek &amp; Rekayasa Sistem
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              Perangkat lunak nyata yang dirancang dengan standar performa tinggi, aman dari ancaman siber, dan terdeploy aktif di cloud produksi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS_DATA.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject && onSelectProject(project)}
                className="p-6 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-[#1E3A8A]/60 dark:hover:border-blue-500/60 transition-all shadow-sm flex flex-col justify-between group cursor-pointer space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 font-mono text-[10px] font-bold text-zinc-700 dark:text-zinc-300">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Live Deployment</span>
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg text-zinc-950 dark:text-white group-hover:text-[#1E3A8A] dark:text-blue-400 dark:group-hover:text-red-400 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-[10px] font-mono text-zinc-600 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1E3A8A] dark:text-blue-400 flex items-center gap-1">
                    <span>Lihat Detail Arsitektur</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                      title="Buka Live Web"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 2: DEDICATED BELAJAR DOCUMENTATION STUDIO (ALA FIKRAN.DEV/BELAJAR)   */}
      {/* ========================================================================= */}
      {activePage === 'learning' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          {/* Top Breadcrumb & Title */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-1" aria-label="Breadcrumb">
                <span className="hover:underline cursor-pointer" onClick={() => navigateTo('home')}>Beranda</span>
                <span>/</span>
                <span className="hover:underline cursor-pointer" onClick={() => navigateTo('learning')}>Belajar</span>
                <span>/</span>
                <span className="text-[#1E3A8A] dark:text-blue-400 font-semibold uppercase">{activeTrackId}</span>
              </nav>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white">
                {activeChapter.title}
              </h1>
            </div>

            {/* View Mode Toggle: Studio vs Flipbook */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold">
                <button
                  onClick={() => setLearningViewMode('studio')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    learningViewMode === 'studio'
                      ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white shadow-xs font-bold'
                      : 'text-zinc-500 hover:text-zinc-950 dark:hover:text-white'
                  }`}
                >
                  Studio Dokumentasi
                </button>
                <button
                  onClick={() => setLearningViewMode('flipbook')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                    learningViewMode === 'flipbook'
                      ? 'bg-amber-600 text-white shadow-xs font-bold'
                      : 'text-zinc-500 hover:text-amber-700 dark:hover:text-amber-400'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Mode Buku 3D (Flipbook)</span>
                </button>
              </div>

              {/* Track Switcher Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-400 hidden sm:inline">Pilih Topik:</span>
                <div className="relative">
                  <select
                    value={activeTrackId}
                    onChange={(e) => {
                      const t = e.target.value as 'ai' | 'digital-marketing' | 'vibe-coding';
                      setActiveTrackId(t);
                      const firstChapter = KLASIK_LEARNING_CHAPTERS.find((c) => c.trackId === t);
                      if (firstChapter) {
                        setActiveChapterId(firstChapter.id);
                        setActiveSubchapterId(firstChapter.subchapters[0].id);
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-white dark:bg-[#111319] border border-zinc-300 dark:border-zinc-700 text-xs font-bold text-zinc-900 dark:text-white cursor-pointer focus:outline-hidden focus:border-[#1E3A8A]"
                  >
                    <option value="ai">AI untuk Bisnis (8 Bab Studio)</option>
                    <option value="digital-marketing">Digital Marketing &amp; CAPI (8 Bab)</option>
                    <option value="vibe-coding">Vibe Coding &amp; Tooling (6 Bab)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* RENDER BASED ON VIEW MODE */}
          {learningViewMode === 'flipbook' ? (
            <div className="space-y-6 animate-fade-in">
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-serif font-bold text-amber-900 dark:text-amber-200">
                    Mode Membaca Buku Fisik 3D Interaktif (Animasi Lembar Kertas &amp; Meja Kayu)
                  </span>
                </div>
                <button
                  onClick={() => setLearningViewMode('studio')}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 cursor-pointer self-start sm:self-auto"
                >
                  Kembali ke Studio Dokumentasi
                </button>
              </div>

              <InteractiveFlipbook initialSpreadIndex={0} />
            </div>
          ) : (
          /* 3-COLUMN DOCUMENTATION STUDIO (Matches media_1793550777405_70e0ce2c.png) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* COLUMN 1: LEFT SIDEBAR (Search + Chapter Accordion) */}
            <div className="lg:col-span-3 space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Cari materi..."
                  value={materiSearch}
                  onChange={(e) => setMateriSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 rounded-xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-xs focus:outline-hidden focus:border-[#1E3A8A]"
                />
              </div>

              {/* Chapters Accordion Tree */}
              <div className="space-y-1.5 text-xs">
                {filteredChapters.map((chapter) => {
                  const isCurrentChapter = chapter.id === activeChapter.id;
                  const isOpen = openChapters[chapter.id] || isCurrentChapter;

                  return (
                    <div key={chapter.id} className="rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden bg-white dark:bg-[#111319]">
                      <button
                        onClick={() => {
                          setActiveChapterId(chapter.id);
                          setActiveSubchapterId(chapter.subchapters[0].id);
                          toggleChapter(chapter.id);
                        }}
                        className={`w-full p-3 text-left flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                          isCurrentChapter
                            ? 'bg-zinc-100 dark:bg-zinc-800/90 font-bold text-zinc-950 dark:text-white'
                            : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isCurrentChapter ? 'bg-[#1E3A8A]' : 'bg-zinc-300 dark:bg-zinc-700'}`} />
                          <span className="truncate">{chapter.title}</span>
                        </div>
                        <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Subchapters */}
                      {isOpen && (
                        <div className="px-3 pb-2 pt-1 space-y-1 border-t border-zinc-100 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/40">
                          {chapter.subchapters.map((sub) => {
                            const isSubActive = sub.id === activeSubchapter.id && isCurrentChapter;
                            return (
                              <button
                                key={sub.id}
                                onClick={() => handleSelectSubchapter(chapter, sub)}
                                className={`w-full text-left py-1.5 px-2.5 rounded-lg text-[11px] transition-all cursor-pointer flex items-center gap-2 ${
                                  isSubActive
                                    ? 'bg-[#1E3A8A] text-white font-bold shadow-xs'
                                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800'
                                }`}
                              >
                                <span className="font-mono text-[10px] opacity-75">{sub.num}</span>
                                <span className="truncate">{sub.title}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* COLUMN 2: CENTER READING AREA */}
            <div className="lg:col-span-6 space-y-6 bg-white dark:bg-[#111319] p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <MateriCoverBanner
                title={activeSubchapter?.title || activeChapter.title}
                category={activeTrackId === 'ai' ? 'AI UNTUK BISNIS' : activeTrackId === 'digital-marketing' ? 'DIGITAL MARKETING' : 'VIBE CODING'}
                readTime="5 MENIT BACA"
                mascotVariant={activeTrackId === 'ai' ? 'idea' : activeTrackId === 'digital-marketing' ? 'rocket' : 'code'}
                className="mb-6"
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white">
                  {activeChapter.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  {activeChapter.summary}
                </p>
              </div>

              {/* SECTION: Untuk siapa bab ini */}
              <div id="untuk-siapa" className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <h3 className="font-bold text-base text-zinc-950 dark:text-white">
                  Untuk siapa bab ini
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {activeChapter.audience}
                </p>
              </div>

              {/* SECTION: Intinya (Callout Box) */}
              <div id="intinya" className="p-4 sm:p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-[#1E3A8A] dark:text-blue-400">
                  Intinya
                </h4>
                <ul className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1E3A8A] dark:text-blue-400 font-bold">—</span>
                    <span>AI bukan tujuan akhir; fokus pada penghematan waktu dan proses yang sudah jelas tolok ukur suksesnya.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1E3A8A] dark:text-blue-400 font-bold">—</span>
                    <span>Pilihlah solusi paling sederhana: gunakan otomasi deterministik untuk alur kaku, gunakan agent jika butuh keputusan kontekstual.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1E3A8A] dark:text-blue-400 font-bold">—</span>
                    <span>Pastikan ada batasan wewenang (guardrails) dan jalur eskalasi aman ke staf manusia.</span>
                  </li>
                </ul>
              </div>

              {/* SECTION: Subbab Content */}
              <div id="subbab" className="space-y-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div>
                  <span className="font-mono text-xs font-bold text-[#1E3A8A] dark:text-blue-400">
                    SUBBAB {activeSubchapter.num}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white mt-1">
                    {activeSubchapter.title}
                  </h3>
                </div>

                {/* Masalah Riil */}
                <div className="space-y-1.5">
                  <p className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400">
                    Masalah Riil di Lapangan:
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {activeSubchapter.situation}
                  </p>
                </div>

                {/* Penjelasan Arsitektur */}
                <div className="space-y-1.5">
                  <p className="font-mono text-xs font-bold text-zinc-500">
                    Penjelasan Logika &amp; Arsitektur:
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                    {activeSubchapter.explanation}
                  </p>
                </div>

                {/* Praktik Kode / Prompt */}
                <div id="praktik" className="space-y-1.5">
                  <p className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Praktik Implementasi:
                  </p>
                  <div className="p-4 rounded-xl bg-zinc-950 text-zinc-200 font-mono text-xs leading-relaxed overflow-x-auto border border-zinc-800 shadow-inner">
                    <pre className="whitespace-pre-wrap">{activeSubchapter.practice}</pre>
                  </div>
                </div>

                {/* Kesalahan Fatal */}
                <div id="kesalahan" className="p-4 rounded-xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 space-y-1">
                  <p className="font-mono text-xs font-bold text-rose-800 dark:text-rose-400">
                    Kesalahan Fatal yang Sering Terjadi:
                  </p>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {activeSubchapter.mistakes}
                  </p>
                </div>

                {/* Checklist Kesiapan */}
                <div id="checklist" className="space-y-2 pt-2">
                  <p className="font-mono text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                    Checklist Verifikasi:
                  </p>
                  <div className="space-y-1.5">
                    {activeSubchapter.checklist.map((item, idx) => (
                      <label key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-xs cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-[#1E3A8A] dark:text-blue-400 focus:ring-[#1E3A8A]" />
                        <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Next / Previous Subchapter Navigation Buttons (Ala Fikran Dev) */}
                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {prevSubItem ? (
                    <button
                      onClick={() => handleSelectSubchapter(prevSubItem.chapter, prevSubItem.sub)}
                      className="w-full sm:w-auto p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[#1E3A8A] bg-zinc-50 dark:bg-zinc-900/60 text-left transition-all cursor-pointer group"
                    >
                      <span className="block text-[10px] font-mono uppercase text-zinc-400 group-hover:text-[#1E3A8A] dark:text-blue-400">
                        ← Bab Sebelumnya
                      </span>
                      <span className="text-xs font-bold text-zinc-950 dark:text-white line-clamp-1">
                        {prevSubItem.sub.num} {prevSubItem.sub.title}
                      </span>
                    </button>
                  ) : <div />}

                  {nextSubItem && (
                    <button
                      onClick={() => handleSelectSubchapter(nextSubItem.chapter, nextSubItem.sub)}
                      className="w-full sm:w-auto p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[#1E3A8A] bg-zinc-50 dark:bg-zinc-900/60 text-right transition-all cursor-pointer group ml-auto"
                    >
                      <span className="block text-[10px] font-mono uppercase text-zinc-400 group-hover:text-[#1E3A8A] dark:text-blue-400">
                        Bab Berikutnya →
                      </span>
                      <span className="text-xs font-bold text-zinc-950 dark:text-white line-clamp-1">
                        {nextSubItem.sub.num} {nextSubItem.sub.title}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* COLUMN 3: RIGHT SIDEBAR (Actions + Table of Contents + Related Service) */}
            <div className="lg:col-span-3 space-y-6">
              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={handleCopyMarkdown}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Markdown</span>
                </button>

                <button
                  onClick={handleOpenChatGPT}
                  className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-[#111319] hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold text-xs flex items-center justify-between px-4 transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Open in ChatGPT</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </button>

                <button
                  onClick={handleOpenClaude}
                  className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-[#111319] hover:bg-zinc-50 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold text-xs flex items-center justify-between px-4 transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span>Open in Claude</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </button>
              </div>

              {/* Table of Contents (DI HALAMAN INI) */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-2 text-xs">
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  DI HALAMAN INI
                </p>
                <div className="space-y-1.5 text-zinc-600 dark:text-zinc-400">
                  <a href="#untuk-siapa" className="block hover:text-[#1E3A8A] dark:text-blue-400 dark:hover:text-blue-400 transition-colors">
                    Untuk siapa bab ini
                  </a>
                  <a href="#intinya" className="block hover:text-[#1E3A8A] dark:text-blue-400 dark:hover:text-blue-400 transition-colors">
                    Intinya
                  </a>
                  <a href="#subbab" className="block hover:text-[#1E3A8A] dark:text-blue-400 dark:hover:text-blue-400 transition-colors">
                    Subbab &amp; Materi
                  </a>
                  <a href="#praktik" className="block hover:text-[#1E3A8A] dark:text-blue-400 dark:hover:text-blue-400 transition-colors">
                    Praktik Implementasi
                  </a>
                  <a href="#kesalahan" className="block hover:text-[#1E3A8A] dark:text-blue-400 dark:hover:text-blue-400 transition-colors">
                    Kesalahan Fatal
                  </a>
                  <a href="#checklist" className="block hover:text-[#1E3A8A] dark:text-blue-400 dark:hover:text-blue-400 transition-colors">
                    Checklist Verifikasi
                  </a>
                </div>
              </div>

              {/* Layanan Terkait CTA */}
              <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2 text-xs">
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-blue-400">
                  LAYANAN TERKAIT →
                </p>
                <p className="font-bold text-zinc-900 dark:text-white">
                  {activeTrackId === 'ai'
                    ? 'WhatsApp AI Agent & Customer Care'
                    : activeTrackId === 'digital-marketing'
                      ? 'Setup Meta Conversions API (CAPI)'
                      : 'Setup Cloud VPS & Hardening Server'}
                </p>
                <p className="text-[11px] text-zinc-500 leading-snug">
                  {activeTrackId === 'ai'
                    ? 'Implementasi bot 24/7 terhubung dokumen SOP bisnis Anda.'
                    : activeTrackId === 'digital-marketing'
                      ? 'Tracking akurat kebal ad-blocker dengan skor EMQ 8.5+.'
                      : 'Server mandiri hemat biaya dengan Zero-Trust VPN.'}
                </p>
                <button
                  onClick={() => handleWhatsAppConsultation(
                    activeTrackId === 'ai'
                      ? 'WhatsApp AI Agent'
                      : activeTrackId === 'digital-marketing'
                        ? 'Meta Conversions API'
                        : 'Setup Cloud VPS'
                  )}
                  className="w-full mt-1 py-1.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold text-[11px] hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Konsultasi Layanan Ini
                </button>
              </div>
            </div>
          </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 3: DEDICATED LAYANAN KATALOG (SERVICES VIEW)                        */}
      {/* ========================================================================= */}
      {activePage === 'services' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <SekawanEnterpriseLayanan
            onWhatsAppInquiry={handleWhatsAppConsultation}
            onNavigateHome={() => navigateTo('home')}
          />
        </div>
      )}

      {/* VIEW 4: DEDICATED TOOLS YANG SAYA PAKAI (TOOLS VIEW)                      */}
      {/* ========================================================================= */}
      {activePage === 'tools' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
          {/* Tools Mascot Banner */}
          <div className="p-6 rounded-3xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#1E3A8A] flex items-center justify-center text-white text-[10px] font-black">FD</div>
                <span className="font-mono text-xs font-bold text-[#1E3A8A] dark:text-blue-300">fitran.dev DevStack Toolkit</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white">Daftar Toolkit & Stack Rekayasa Teruji</h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-xl">
                Semua tool dan framework yang saya gunakan sehari-hari untuk merancang AI agent, aplikasi web performa tinggi, dan technical marketing.
              </p>
            </div>
            <FitranMascot variant="code" size="md" className="shrink-0" />
          </div>
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5">
            <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-1">
              <span className="hover:underline cursor-pointer" onClick={() => navigateTo('home')}>Beranda</span>
              <span>/</span>
              <span className="text-[#1E3A8A] dark:text-blue-400 font-semibold">Tools</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white">
              Tools yang Saya Gunakan Sehari-hari
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              Senjata harian untuk ngiklan, otomasi, rekayasa fullstack, dan pembangunan produk digital berkecepatan tinggi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {['Semua', 'Frontend & Web', 'AI & LLMs', 'Backend & Data', 'Cloud & Security', 'Marketing & Analytics'].map((cat) => (
              <button
                key={cat}
                onClick={() => setToolsCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  toolsCategory === cat
                    ? 'bg-[#1E3A8A] text-white shadow-xs'
                    : 'bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTools.map((tool, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    {tool.category}
                  </span>
                  {tool.badge && (
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-lg text-zinc-950 dark:text-white">{tool.name}</h3>
                <p className="text-xs text-zinc-500 font-medium">{tool.tagline}</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 5: DEDICATED KAMUS ISTILAH DIGITAL & AI (GLOSSARY VIEW)              */}
      {/* ========================================================================= */}
      {activePage === 'kamus' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
          {/* Kamus Mascot Banner */}
          <div className="p-6 rounded-3xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#1E3A8A] flex items-center justify-center text-white text-[10px] font-black">FD</div>
                <span className="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-300">fitran.dev Glossary Hub</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white">Kamus Istilah Digital & AI Tanpa Jargon</h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-xl">
                Definisi lugas dan analogi praktis untuk para pelaku bisnis agar paham teknologi AI, Ads, dan Web secara mendalam.
              </p>
            </div>
            <FitranMascot variant="idea" size="md" className="shrink-0" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-5">
            <div>
              <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-1">
                <span className="hover:underline cursor-pointer" onClick={() => navigateTo('home')}>Beranda</span>
                <span>/</span>
                <span className="text-[#1E3A8A] dark:text-blue-400 font-semibold">Kamus</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white">
                Kamus Istilah Digital, AI &amp; Marketing
              </h1>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
                Definisi lugas istilah teknis tanpa jargon yang membingungkan, lengkap dengan implikasi praktis untuk bisnis Anda.
              </p>
            </div>

            {/* Live Search */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Cari istilah (e.g. AI Agent, RAG, CAPI)..."
                value={kamusSearch}
                onChange={(e) => setKamusSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-[#111319] border border-zinc-300 dark:border-zinc-700 text-xs focus:outline-hidden focus:border-[#1E3A8A]"
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

          <div className="flex flex-wrap items-center gap-2">
            {['Semua', 'AI & Machine Learning', 'Web & Arsitektur', 'Cloud & DevOps', 'Keamanan & Tracking'].map((cat) => (
              <button
                key={cat}
                onClick={() => setKamusCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  kamusCategory === cat
                    ? 'bg-[#1E3A8A] text-white shadow-xs'
                    : 'bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredKamus.map((term, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-3 shadow-xs flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-zinc-950 dark:text-white">{term.term}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                      {term.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{term.definition}</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-[11px] text-emerald-800 dark:text-emerald-300">
                  <span className="font-bold font-mono">Tip Praktis: </span>
                  <span>{term.practicalTip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 6: DEDICATED BLOG (FULL-PAGE EDITORIAL ALA FIKRAN.DEV/BLOG)           */}
      {/* ========================================================================= */}
      {activePage === 'blog' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {selectedArticle ? (
            /* DEDICATED FULL-PAGE ARTICLE READING VIEW (MATCHING FIKRAN.DEV/BLOG/<SLUG>) */
            <article className="space-y-8 animate-fade-in max-w-4xl mx-auto">
              {/* Illustrated Official Cover Banner */}
              <MateriCoverBanner
                title={selectedArticle.title}
                category={selectedArticle.category.toUpperCase()}
                readTime={selectedArticle.readTime.toUpperCase()}
                mascotVariant={
                  selectedArticle.slug === 'apa-itu-ai-agent'
                    ? 'robot'
                    : selectedArticle.slug === 'biaya-pembuatan-website'
                    ? 'speed'
                    : selectedArticle.slug === 'cara-tracking-konversi-meta-ads'
                    ? 'security'
                    : 'code'
                }
                className="mb-2"
              />
              {/* Back to Blog Button + Breadcrumb */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    if (typeof window !== 'undefined') {
                      window.history.pushState(null, '', '/blog');
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-[#1E3A8A] dark:text-blue-400 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  <span>Kembali ke Semua Artikel</span>
                </button>

                <nav className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="hover:underline cursor-pointer" onClick={() => navigateTo('home')}>Beranda</span>
                  <span>/</span>
                  <span
                    className="hover:underline cursor-pointer"
                    onClick={() => {
                      setSelectedArticle(null);
                      if (typeof window !== 'undefined') window.history.pushState(null, '', '/blog');
                    }}
                  >
                    Blog
                  </span>
                  <span>/</span>
                  <span className="text-[#1E3A8A] dark:text-blue-400 font-semibold truncate max-w-[200px]">{selectedArticle.title}</span>
                </nav>
              </div>

              {/* Article Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500">
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-[#1E3A8A] dark:text-blue-400 font-bold">
                    {selectedArticle.category}
                  </span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-tight">
                  {selectedArticle.title}
                </h1>

                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {selectedArticle.excerpt}
                </p>

                {/* Author Info Bar + Share Controls (Strictly Engineering Byline, Zero Large Portrait) */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 px-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#1E3A8A] border border-blue-400/40 flex items-center justify-center text-white text-xs font-black font-mono shadow-xs shrink-0">
                      FD
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="font-bold text-xs text-zinc-950 dark:text-white">Tubagus Fitran Badruttamam</p>
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                      <p className="text-[11px] text-zinc-400">Fullstack Developer &amp; AI Engineer · Cilegon</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          navigator.clipboard.writeText(window.location.href);
                          setToastMessage('Link artikel berhasil disalin!');
                        }
                      }}
                      className="px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#111319] hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      title="Salin Tautan Artikel"
                    >
                      <Copy className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Salin Link</span>
                    </button>

                    <button
                      onClick={() => handleWhatsAppConsultation(selectedArticle.title)}
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Diskusi</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Reading Body */}
              <div className="space-y-8 text-zinc-800 dark:text-zinc-200 leading-relaxed text-sm sm:text-base">
                {/* Intro */}
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {selectedArticle.content.intro}
                </p>

                {/* DEDICATED TECHNICAL MATERI VISUAL & INFOGRAPHIC (DOMAIN, HOSTING, SSL, ARCHITECTURE) */}
                <MateriArticleVisual
                  slug={selectedArticle.slug}
                  onConsultation={handleWhatsAppConsultation}
                />

                {/* PRINSIP UTAMA / KEY TAKEAWAYS (Matching Fikran Dev Callout) */}
                <div className="p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/60 space-y-3">
                  <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Prinsip Utama (Core Principles)</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    {selectedArticle.content.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Content Sections */}
                {selectedArticle.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight">
                      {sec.heading}
                    </h2>
                    <p className="text-zinc-700 dark:text-zinc-300 whitespace-pre-line leading-relaxed text-sm sm:text-base">
                      {sec.body}
                    </p>
                    {sec.codeSnippet && (
                      <div className="p-4 rounded-xl bg-zinc-950 text-zinc-200 font-mono text-xs leading-relaxed overflow-x-auto border border-zinc-800 shadow-inner">
                        <pre className="whitespace-pre-wrap">{sec.codeSnippet}</pre>
                      </div>
                    )}
                  </div>
                ))}

                {/* MoSCoW Framework Matrix Highlight Box (if MVP article) */}
                {selectedArticle.slug === 'cara-membuat-mvp-dan-menentukan-fitur' && (
                  <div className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
                      <p className="font-mono text-xs font-bold text-[#1E3A8A] dark:text-blue-400 uppercase tracking-wider">
                        Matriks Prioritisasi Fitur MVP (MoSCoW)
                      </p>
                      <span className="text-[11px] font-mono text-zinc-400">Kerangka Kerja Validasi Kilat</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-1">
                        <span className="font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase">1. MUST HAVE</span>
                        <p className="font-bold text-zinc-900 dark:text-white">Alur Kritis Transaksi</p>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400">Landing page profil, tombol WhatsApp deal, bukti portofolio, dan nomor rekening transfer.</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 space-y-1">
                        <span className="font-mono text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase">2. SHOULD HAVE</span>
                        <p className="font-bold text-zinc-900 dark:text-white">Dikerjakan Manual Dulu</p>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400">Kalkulator estimasi harga &amp; formulir tanya jawab (cukup jawab langsung lewat chat manual).</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-1">
                        <span className="font-mono text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase">3. COULD HAVE</span>
                        <p className="font-bold text-zinc-900 dark:text-white">Pemanis Opsional</p>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400">Generator invoice PDF otomatis, dark mode switcher, animasi 3D interaktif.</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-1">
                        <span className="font-mono text-[10px] font-bold text-rose-700 dark:text-rose-400 uppercase">4. WON'T HAVE</span>
                        <p className="font-bold text-zinc-900 dark:text-white">Tolak untuk Rilis 1.0</p>
                        <p className="text-[11px] text-zinc-600 dark:text-zinc-400">Sistem multi-tenant SaaS, integrasi gateway internasional dengan escrow, sistem afiliasi bertingkat.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Conclusion Callout */}
                <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Kesimpulan &amp; Langkah Nyata:
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                    {selectedArticle.content.conclusion}
                  </p>
                </div>

                {/* Author Bio Card (End of Article) */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                  <div className="shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-linear-to-br from-[#1E3A8A] to-[#0D1F4D] border-2 border-blue-400/40 flex flex-col items-center justify-center text-white shadow-md">
                      <span className="font-mono text-xl sm:text-2xl font-black tracking-tight">FD</span>
                      <span className="text-[9px] font-mono font-bold text-emerald-400">ENGINEER</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <h3 className="font-bold text-base text-zinc-950 dark:text-white">Tubagus Fitran Badruttamam</h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                        Google Dev Verified
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Fullstack Developer &amp; AI Engineer dari Cilegon, Indonesia. Membantu UMKM dan bisnis berkembang dengan website cepat kilat mulai 500rb, sistem AI Agent WhatsApp, dan pelacakan iklan server-side presisi.
                    </p>
                    <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                      <button
                        onClick={() => handleWhatsAppConsultation(selectedArticle.title)}
                        className="py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Konsultasi Proyek Bersama Tubagus</span>
                      </button>
                      <button
                        onClick={() => navigateTo('services')}
                        className="py-2 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold text-xs transition-colors cursor-pointer"
                      >
                        Lihat Daftar Layanan
                      </button>
                    </div>
                  </div>
                </div>

                {/* Related Articles Carousel / Grid */}
                <div className="pt-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-zinc-950 dark:text-white">Artikel Pilihan Lainnya</h3>
                    <button
                      onClick={() => {
                        setSelectedArticle(null);
                        if (typeof window !== 'undefined') window.history.pushState(null, '', '/blog');
                      }}
                      className="text-xs text-[#1E3A8A] dark:text-blue-400 font-bold hover:underline cursor-pointer"
                    >
                      Lihat Semua Artikel →
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {KLASIK_BLOG_POSTS.filter((p) => p.id !== selectedArticle.id).slice(0, 2).map((post) => (
                      <div
                        key={post.id}
                        onClick={() => {
                          setSelectedArticle(post);
                          if (typeof window !== 'undefined') {
                            window.history.pushState(null, '', '/blog/' + post.slug);
                          }
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="p-5 rounded-xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 hover:border-[#1E3A8A]/50 cursor-pointer transition-all space-y-2 group"
                      >
                        <span className="text-[10px] font-mono text-zinc-400 uppercase">{post.category} · {post.readTime}</span>
                        <h4 className="font-bold text-sm text-zinc-950 dark:text-white group-hover:text-[#1E3A8A] dark:text-blue-400 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-zinc-500 line-clamp-2">{post.excerpt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ) : (
            /* BLOG LISTING VIEW */
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5">
                <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-1">
                  <span className="hover:underline cursor-pointer" onClick={() => navigateTo('home')}>Beranda</span>
                  <span>/</span>
                  <span className="text-[#1E3A8A] dark:text-blue-400 font-semibold">Blog</span>
                </nav>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white">
                  Tulisan Pilihan seputar AI, Web &amp; Keamanan
                </h1>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
                  Catatan arsitektur dan pengalaman lapangan mengenai implementasi teknologi nyata untuk bisnis.
                </p>
              </div>

              {/* Category Filter Chips */}
              <div className="flex flex-wrap items-center gap-2">
                {['Semua', 'Web Engineering', 'AI & Agents', 'Cloud & DevOps', 'Keamanan & Arsitektur'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setBlogFilter(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      blogFilter === cat
                        ? 'bg-[#1E3A8A] text-white shadow-xs'
                        : 'bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {KLASIK_BLOG_POSTS.filter((p) => blogFilter === 'Semua' || p.category === blogFilter).map((post) => (
                  <div
                    key={post.id}
                    onClick={() => {
                      setSelectedArticle(post);
                      if (typeof window !== 'undefined') {
                        window.history.pushState(null, '', '/blog/' + post.slug);
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between cursor-pointer group hover:border-[#1E3A8A]/50 transition-all"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                        <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                          {post.category}
                        </span>
                        <span>{post.date} • {post.readTime}</span>
                      </div>
                      <h3 className="font-bold text-lg text-zinc-950 dark:text-white group-hover:text-[#1E3A8A] dark:text-blue-400 dark:group-hover:text-red-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-[#1E3A8A] dark:text-blue-400">
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 7: DEDICATED ABOUT TENTANG SAYA (ALA FIKRAN.DEV/ABOUT)               */}
      {/* ========================================================================= */}
      {activePage === 'about' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
          {/* About Mascot Banner */}
          <div className="p-6 rounded-3xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#1E3A8A] flex items-center justify-center text-white text-[10px] font-black">FD</div>
                <span className="font-mono text-xs font-bold text-[#1E3A8A] dark:text-blue-300">fitran.dev Engineer Profile</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white">Tubagus Fitran Badruttamam</h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-xl">
                Fullstack Developer & AI Engineer dari Cilegon, Indonesia. Membangun software terukur dengan komitmen 100% kepemilikan source code milik klien.
              </p>
            </div>
            <FitranMascot variant="bot" size="md" className="shrink-0" />
          </div>
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5">
            <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-1">
              <span className="hover:underline cursor-pointer" onClick={() => navigateTo('home')}>Beranda</span>
              <span>/</span>
              <span className="text-[#1E3A8A] dark:text-blue-400 font-semibold">Tubagus Fitran Badruttamam</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white">
              Tubagus Fitran Badruttamam
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Fullstack Developer &amp; AI Engineer dari Cilegon, Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-4">
                <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
                  Fokus pada AI agent dan automation
                </h2>
                <p>
                  Saya membantu bisnis merapikan proses operasional dan layanan pelanggan melalui AI agent dan otomasi. Pekerjaan ini didukung oleh fondasi rekayasa perangkat lunak (fullstack development) dan technical marketing saat dibutuhkan.
                </p>
                <p>
                  Prinsip kerja saya sederhana: mulai dari konteks nyata dan batas pekerjaan yang disepakati tertulis. Saya tidak menawarkan AI untuk hal yang cukup diselesaikan dengan aturan pasti.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-4">
                <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
                  Engineering sebagai fondasi
                </h2>
                <p>
                  Sebagai mahasiswa S1 Teknik Informatika di Universitas Muhammadiyah Banten dengan fokus Data &amp; Backend, setiap baris kode dibangun dengan standar tinggi: waktu muat di bawah 1 detik, 5 lapisan keamanan terstruktur, dan kepemilikan kode sumber 100% milik Anda tanpa vendor lock-in.
                </p>
              </div>

              {/* 4 Prinsip Rekayasa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-1">
                  <span className="font-mono text-xs font-bold text-[#1E3A8A] dark:text-blue-400">01 KECEPATAN</span>
                  <p className="font-bold text-xs text-zinc-900 dark:text-white">Render &lt; 1 Detik (PageSpeed 95+)</p>
                  <p className="text-[11px] text-zinc-500">Setiap milidetik dihemat demi kenyamanan pengunjung.</p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-1">
                  <span className="font-mono text-xs font-bold text-[#1E3A8A] dark:text-blue-400">02 KEAMANAN</span>
                  <p className="font-bold text-xs text-zinc-900 dark:text-white">5 Lapisan Keamanan Aktif</p>
                  <p className="text-[11px] text-zinc-500">TLS 1.3, Zero-Trust VPS, sanitasi anti-SQLi &amp; anti-XSS.</p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-1">
                  <span className="font-mono text-xs font-bold text-[#1E3A8A] dark:text-blue-400">03 TRANSPARANSI</span>
                  <p className="font-bold text-xs text-zinc-900 dark:text-white">Harga Pasti Mulai 500rb</p>
                  <p className="text-[11px] text-zinc-500">Tidak ada biaya tersembunyi di tengah jalan.</p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-1">
                  <span className="font-mono text-xs font-bold text-[#1E3A8A] dark:text-blue-400">04 OWNERSHIP</span>
                  <p className="font-bold text-xs text-zinc-900 dark:text-white">100% Hak Milik Klien</p>
                  <p className="text-[11px] text-zinc-500">Kode sumber dan akses domain sepenuhnya milik Anda.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 text-center space-y-4">
                <div className="flex justify-center">
                  <ProfileAvatar size="hero" showBadge={true} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-zinc-950 dark:text-white">Tubagus Fitran Badruttamam</h3>
                  <p className="text-xs text-zinc-500">Cilegon, Banten · Remote Ready</p>
                </div>
                <button
                  onClick={() => handleWhatsAppConsultation()}
                  className="w-full py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat via WhatsApp</span>
                </button>
              </div>

              {/* Verified Badges */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 space-y-3 text-xs">
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  AFILIASI &amp; KREDENSIAL
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-zinc-900 dark:text-white">✓ Google Developer Program (Verified ID)</p>
                  <p className="font-semibold text-zinc-900 dark:text-white">✓ GDG on Campus &amp; Maps Innovators</p>
                  <p className="font-semibold text-zinc-900 dark:text-white">✓ 2× Medali Emas Sains Nasional (Grade A+)</p>
                  <p className="font-semibold text-zinc-900 dark:text-white">✓ Penulis Terpilih Buku Perpusnas RI</p>
                </div>
                <div className="pt-2">
                  <a
                    href={CERTIFICATES_DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 font-bold text-[11px] hover:opacity-80 transition-opacity"
                  >
                    Buka Google Drive Sertifikat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* COMMON FOOTER (ALA FIKRAN.DEV)                                            */}
      {/* ========================================================================= */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16 py-12 text-xs text-zinc-500 dark:text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FitranPixelLogo size="sm" />
              <span>—</span>
              <span>Fullstack Developer &amp; AI Engineer</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
              <button onClick={() => navigateTo('home')} className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Beranda</button>
              <button onClick={() => navigateTo('services')} className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Layanan</button>
              <button onClick={() => navigateTo('learning')} className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Belajar</button>
              <button onClick={() => navigateTo('kamus')} className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Kamus</button>
              <button onClick={() => navigateTo('tools')} className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Tools</button>
              <button onClick={() => navigateTo('blog')} className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Blog</button>
              <button onClick={() => navigateTo('about')} className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Tentang</button>
              <button onClick={() => handleWhatsAppConsultation()} className="text-[#1E3A8A] dark:text-blue-400 font-bold hover:underline cursor-pointer">Konsultasi</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400 border-t border-zinc-100 dark:border-zinc-800/60 pt-4">
            <p>© {new Date().getFullYear()} fitran.dev • Hak cipta dilindungi undang-undang.</p>
            <p>Dibangun dengan performa tinggi &amp; 5 Lapisan Keamanan Terstruktur.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
