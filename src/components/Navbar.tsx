import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { FitranPixelLogo } from './FitranPixelLogo';
import {
  Menu,
  X,
  Moon,
  Sun,
  Home,
  UserCircle,
  LayoutGrid,
  Award,
  Globe,
  Terminal,
  Mail,
  Palette,
  Search,
  Briefcase,
  ChevronDown,
  MessageSquare,
  Bot,
  TrendingUp,
  Zap,
  BookOpen,
  ShoppingBag,
  MousePointerClick,
  AppWindow,
  Boxes,
  Target,
  Server,
  Building2,
  Code2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type DesignTheme = 'modern' | 'clipboard' | 'arcade';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId, customPath?: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  designTheme: DesignTheme;
  onChangeDesignTheme: (theme: DesignTheme) => void;
  onOpenCommandMenu?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  isDark,
  onToggleTheme,
  designTheme,
  onChangeDesignTheme,
  onOpenCommandMenu,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [belajarDropdownOpen, setBelajarDropdownOpen] = useState(false);
  const [layananDropdownOpen, setLayananDropdownOpen] = useState(false);
  const [wibTime, setWibTime] = useState('');
  const { language } = useLanguage();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setWibTime(now.toLocaleTimeString('en-GB', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setBelajarDropdownOpen(false);
      setLayananDropdownOpen(false);
      setThemeMenuOpen(false);
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const themePrefix =
    designTheme === 'modern'
      ? '/portofolio-me'
      : designTheme === 'clipboard'
      ? '/profesional'
      : '/corporation';

  const themes: { id: DesignTheme; name: string; path: string; icon: React.ReactNode }[] = [
    {
      id: 'modern',
      name: 'portofolio-me',
      path: '/portofolio-me',
      icon: <UserCircle className="w-4 h-4 text-cyan-500 shrink-0" />,
    },
    {
      id: 'clipboard',
      name: 'profesional',
      path: '/profesional',
      icon: <Briefcase className="w-4 h-4 text-indigo-500 shrink-0" />,
    },
    {
      id: 'arcade',
      name: 'corporation',
      path: '/corporation',
      icon: <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />,
    },
  ];

  // Default nav items for Theme 1 (Modern) & Theme 2 (Clipboard / Animasi)
  const defaultNavItems: { id: SectionId; label: string; path: string; icon: React.ReactNode }[] = [
    {
      id: 'about',
      label: 'About',
      path: `${themePrefix}/about-me`,
      icon: <UserCircle className="w-3.5 h-3.5" />,
    },
    {
      id: 'work',
      label: language === 'id' ? 'Proyek' : 'Work',
      path: `${themePrefix}/projects`,
      icon: <LayoutGrid className="w-3.5 h-3.5" />,
    },
    {
      id: 'certificates',
      label: language === 'id' ? 'Sertifikat' : 'Certs',
      path: `${themePrefix}/certificates`,
      icon: <Award className="w-3.5 h-3.5" />,
    },
    {
      id: 'ecosystem',
      label: language === 'id' ? 'Ekosistem' : 'Ecosystem',
      path: `${themePrefix}/ecosystem`,
      icon: <Globe className="w-3.5 h-3.5" />,
    },
    {
      id: 'craft-lab',
      label: 'CLI',
      path: `${themePrefix}/craft-lab`,
      icon: <Terminal className="w-3.5 h-3.5" />,
    },
    {
      id: 'contact',
      label: language === 'id' ? 'Kontak' : 'Contact',
      path: `${themePrefix}/contact`,
      icon: <Mail className="w-3.5 h-3.5" />,
    },
  ];

  const handleNavClick = (id: SectionId, e?: React.MouseEvent, customPath?: string) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onNavigate(id, customPath);
    setMobileMenuOpen(false);
    setBelajarDropdownOpen(false);
    setLayananDropdownOpen(false);
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(
      'https://wa.me/6282211993414?text=Halo%20Tubagus%20Fitran%2C%20saya%20tertarik%20untuk%20konsultasi%20layanan%20di%20fitran.dev',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full py-2.5 px-4 sm:px-8 transition-all pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* LEFT: Desktop fitran.dev Pixel Logo + Timezone Label (Theme 1 & 2 only) */}
        {designTheme !== 'arcade' && (
          <div className="hidden sm:flex items-center gap-3 text-xs font-sans font-medium text-zinc-700 dark:text-zinc-300 pointer-events-auto shrink-0">
            <a
              href={themePrefix}
              onClick={(e) => handleNavClick('home', e, themePrefix)}
              className="hidden lg:inline-flex items-center hover:opacity-85 hover:scale-105 transition-all cursor-pointer bg-transparent border-0 p-0"
              title="fitran.dev — Beranda"
            >
              <FitranPixelLogo size="sm" />
            </a>
            <span>Asia/Jakarta</span>
          </div>
        )}

        {/* ===================================================================== */}
        {/* CENTER NAVBAR: CONDITIONAL RENDERING BASED ON THEME                   */}
        {/* ===================================================================== */}
        <div className="mx-auto pointer-events-auto relative">
          {designTheme === 'arcade' ? (
            /* EXACT CORPORATION FLOATING NAVBAR (Interactive Multi-Page Hub) */
            <nav className="flex items-center gap-2 sm:gap-5 px-3 sm:px-5 py-2 rounded-full bg-white/95 dark:bg-[#111319]/95 border border-zinc-200/90 dark:border-zinc-800 shadow-[0_12px_36px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all">
              {/* Brand Logo & Name */}
              <a
                href={themePrefix}
                onClick={(e) => handleNavClick('home', e, themePrefix)}
                className="flex items-center hover:opacity-90 transition-opacity cursor-pointer shrink-0 pr-1"
                title="fitran.dev • Beranda Corporation"
              >
                <FitranPixelLogo size="sm" />
              </a>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-4 lg:gap-5 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-300">
                {/* Layanan with Webzoo-style Mega Dropdown */}
                <div className="relative">
                  <div className="flex items-center gap-0.5">
                    <a
                      href={`${themePrefix}/layanan`}
                      onClick={(e) => {
                        setLayananDropdownOpen(false);
                        handleNavClick('services', e, `${themePrefix}/layanan`);
                      }}
                      className={`hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer ${
                        activeSection === 'services' ? 'font-bold text-zinc-950 dark:text-white' : ''
                      }`}
                    >
                      <span>Layanan</span>
                    </a>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLayananDropdownOpen((prev) => !prev);
                        setBelajarDropdownOpen(false);
                      }}
                      className="p-1 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                      title="Buka menu katalog layanan"
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 opacity-70 transition-transform ${
                          layananDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Mega Menu Popover */}
                  <AnimatePresence>
                    {layananDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute -left-12 sm:-left-24 mt-2.5 w-[330px] sm:w-[580px] max-h-[80vh] overflow-y-auto p-4 sm:p-5 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-2xl z-50 text-xs"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800 mb-3">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1E3A8A] dark:text-blue-400">
                            Katalog Layanan &amp; Solusi Digital
                          </span>
                          <a
                            href={`${themePrefix}/layanan#katalog-lengkap`}
                            onClick={(e) => {
                              setLayananDropdownOpen(false);
                              handleNavClick('services', e, `${themePrefix}/layanan#katalog-lengkap`);
                            }}
                            className="text-[11px] font-mono text-blue-600 hover:underline font-bold cursor-pointer"
                          >
                            Buka Semua Layanan →
                          </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Column 1: Website */}
                          <div className="space-y-2">
                            <span className="text-[10px] font-mono font-black text-zinc-400 uppercase tracking-wider">
                              WEBSITE
                            </span>
                            <div className="space-y-1">
                              <a
                                href={`${themePrefix}/layanan?service=jasa-pembuatan-website#katalog-lengkap`}
                                onClick={(e) => {
                                  setLayananDropdownOpen(false);
                                  handleNavClick('services', e, `${themePrefix}/layanan?service=jasa-pembuatan-website#katalog-lengkap`);
                                }}
                                className="w-full text-left p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 flex items-start gap-2.5 transition-colors cursor-pointer group"
                              >
                                <Globe className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
                                    Jasa Pembuatan Website
                                  </p>
                                  <p className="text-[10px] text-zinc-500 line-clamp-1">
                                    Website kilat &lt;0.8s mudah dikelola
                                  </p>
                                </div>
                              </a>

                              <a
                                href={`${themePrefix}/layanan?service=jasa-pembuatan-website-custom#katalog-lengkap`}
                                onClick={(e) => {
                                  setLayananDropdownOpen(false);
                                  handleNavClick('services', e, `${themePrefix}/layanan?service=jasa-pembuatan-website-custom#katalog-lengkap`);
                                }}
                                className="w-full text-left p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 flex items-start gap-2.5 transition-colors cursor-pointer group"
                              >
                                <Code2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
                                    Website Custom &amp; Portal
                                  </p>
                                  <p className="text-[10px] text-zinc-500 line-clamp-1">
                                    Fitur khusus di luar batasan template
                                  </p>
                                </div>
                              </a>

                              <a
                                href={`${themePrefix}/layanan?service=website-korporat#katalog-lengkap`}
                                onClick={(e) => {
                                  setLayananDropdownOpen(false);
                                  handleNavClick('services', e, `${themePrefix}/layanan?service=website-korporat#katalog-lengkap`);
                                }}
                                className="w-full text-left p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 flex items-start gap-2.5 transition-colors cursor-pointer group"
                              >
                                <Building2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
                                    Website Korporat
                                  </p>
                                  <p className="text-[10px] text-zinc-500 line-clamp-1">
                                    Profil bisnis dua bahasa kredibel
                                  </p>
                                </div>
                              </a>

                              <a
                                href={`${themePrefix}/layanan?service=ecommerce-b2b#katalog-lengkap`}
                                onClick={(e) => {
                                  setLayananDropdownOpen(false);
                                  handleNavClick('services', e, `${themePrefix}/layanan?service=ecommerce-b2b#katalog-lengkap`);
                                }}
                                className="w-full text-left p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 flex items-start gap-2.5 transition-colors cursor-pointer group"
                              >
                                <ShoppingBag className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
                                    E-commerce &amp; B2B
                                  </p>
                                  <p className="text-[10px] text-zinc-500 line-clamp-1">
                                    Katalog harga grosir &amp; pesanan WhatsApp
                                  </p>
                                </div>
                              </a>

                              <a
                                href={`${themePrefix}/layanan?service=landing-page-kampanye#katalog-lengkap`}
                                onClick={(e) => {
                                  setLayananDropdownOpen(false);
                                  handleNavClick('services', e, `${themePrefix}/layanan?service=landing-page-kampanye#katalog-lengkap`);
                                }}
                                className="w-full text-left p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 flex items-start gap-2.5 transition-colors cursor-pointer group"
                              >
                                <MousePointerClick className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors leading-tight">
                                    Landing Page Kampanye
                                  </p>
                                  <p className="text-[10px] text-zinc-500 line-clamp-1">
                                    Halaman iklan dengan CAPI presisi
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>

                          {/* Column 2: Aplikasi & AI */}
                          <div className="space-y-2">
                            <span className="text-[10px] font-mono font-black text-zinc-400 uppercase tracking-wider">
                              APLIKASI &amp; AI
                            </span>
                            <div className="space-y-1">
                              <a
                                href={`${themePrefix}/layanan?service=aplikasi-custom#katalog-lengkap`}
                                onClick={(e) => {
                                  setLayananDropdownOpen(false);
                                  handleNavClick('services', e, `${themePrefix}/layanan?service=aplikasi-custom#katalog-lengkap`);
                                }}
                                className="w-full text-left p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 flex items-start gap-2.5 transition-colors cursor-pointer group"
                              >
                                <AppWindow className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 transition-colors leading-tight">
                                    Aplikasi Custom
                                  </p>
                                  <p className="text-[10px] text-zinc-500 line-clamp-1">
                                    Aplikasi web &amp; mobile proses bisnis
                                  </p>
                                </div>
                              </a>

                              <a
                                href={`${themePrefix}/layanan?service=whatsapp-ai-agent#katalog-lengkap`}
                                onClick={(e) => {
                                  setLayananDropdownOpen(false);
                                  handleNavClick('services', e, `${themePrefix}/layanan?service=whatsapp-ai-agent#katalog-lengkap`);
                                }}
                                className="w-full text-left p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 flex items-start gap-2.5 transition-colors cursor-pointer group"
                              >
                                <Bot className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 transition-colors leading-tight">
                                    WhatsApp AI Agent
                                  </p>
                                  <p className="text-[10px] text-zinc-500 line-clamp-1">
                                    Bot AI 24/7 SOP &amp; katalog perusahaan
                                  </p>
                                </div>
                              </a>

                              <a
                                href={`${themePrefix}/layanan?service=erp-crm-inventory#katalog-lengkap`}
                                onClick={(e) => {
                                  setLayananDropdownOpen(false);
                                  handleNavClick('services', e, `${themePrefix}/layanan?service=erp-crm-inventory#katalog-lengkap`);
                                }}
                                className="w-full text-left p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 flex items-start gap-2.5 transition-colors cursor-pointer group"
                              >
                                <Boxes className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 transition-colors leading-tight">
                                    ERP &amp; Inventori
                                  </p>
                                  <p className="text-[10px] text-zinc-500 line-clamp-1">
                                    Multi-gudang, PO &amp; laba rugi
                                  </p>
                                </div>
                              </a>

                              <a
                                href={`${themePrefix}/layanan?service=meta-capi-ads-tracking#katalog-lengkap`}
                                onClick={(e) => {
                                  setLayananDropdownOpen(false);
                                  handleNavClick('services', e, `${themePrefix}/layanan?service=meta-capi-ads-tracking#katalog-lengkap`);
                                }}
                                className="w-full text-left p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 flex items-start gap-2.5 transition-colors cursor-pointer group"
                              >
                                <Target className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 transition-colors leading-tight">
                                    Meta CAPI &amp; Google Ads
                                  </p>
                                  <p className="text-[10px] text-zinc-500 line-clamp-1">
                                    Tracking presisi kebal ad-blocker
                                  </p>
                                </div>
                              </a>

                              <a
                                href={`${themePrefix}/layanan?service=setup-cloud-vps-hardening#katalog-lengkap`}
                                onClick={(e) => {
                                  setLayananDropdownOpen(false);
                                  handleNavClick('services', e, `${themePrefix}/layanan?service=setup-cloud-vps-hardening#katalog-lengkap`);
                                }}
                                className="w-full text-left p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 flex items-start gap-2.5 transition-colors cursor-pointer group"
                              >
                                <Server className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-bold text-zinc-900 dark:text-white group-hover:text-amber-600 transition-colors leading-tight">
                                    Setup Cloud VPS
                                  </p>
                                  <p className="text-[10px] text-zinc-500 line-clamp-1">
                                    Server mandiri &amp; proteksi 5 lapis
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href={`${themePrefix}/certificates`}
                  onClick={(e) => handleNavClick('certificates', e, `${themePrefix}/certificates`)}
                  className={`hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer ${
                    activeSection === 'certificates' ? 'font-bold text-zinc-950 dark:text-white' : ''
                  }`}
                >
                  Sertifikat
                </a>

                {/* Belajar with Dropdown */}
                <div className="relative">
                  <div className="flex items-center gap-0.5">
                    <a
                      href={`${themePrefix}/belajar`}
                      onClick={(e) => {
                        setBelajarDropdownOpen(false);
                        handleNavClick('learning', e, `${themePrefix}/belajar`);
                      }}
                      className={`hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer ${
                        activeSection === 'learning' || activeSection === 'kamus'
                          ? 'font-bold text-zinc-950 dark:text-white'
                          : ''
                      }`}
                    >
                      <span>Belajar</span>
                    </a>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setBelajarDropdownOpen((prev) => !prev);
                        setLayananDropdownOpen(false);
                      }}
                      className="p-1 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
                      title="Buka kurikulum belajar"
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 opacity-70 transition-transform ${
                          belajarDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Dropdown Popover */}
                  <AnimatePresence>
                    {belajarDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 mt-2.5 w-68 p-2 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-2xl z-50 text-xs"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <p className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
                          Peta Belajar &amp; Kurikulum
                        </p>

                        <a
                          href={`${themePrefix}/belajar/ai`}
                          onClick={(e) => {
                            setBelajarDropdownOpen(false);
                            handleNavClick('learning', e, `${themePrefix}/belajar/ai`);
                          }}
                          className="w-full px-3 py-2.5 rounded-xl text-left hover:bg-zinc-100 dark:hover:bg-zinc-800/80 flex items-start gap-3 transition-colors cursor-pointer group"
                        >
                          <Bot className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-zinc-900 dark:text-white">AI untuk Bisnis</p>
                            <p className="text-[11px] text-zinc-400">8 Bab Fondasi, RAG &amp; WhatsApp Agent</p>
                          </div>
                        </a>

                        <a
                          href={`${themePrefix}/belajar/digital-marketing`}
                          onClick={(e) => {
                            setBelajarDropdownOpen(false);
                            handleNavClick('learning', e, `${themePrefix}/belajar/digital-marketing`);
                          }}
                          className="w-full px-3 py-2.5 rounded-xl text-left hover:bg-zinc-100 dark:hover:bg-zinc-800/80 flex items-start gap-3 transition-colors cursor-pointer group"
                        >
                          <TrendingUp className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-zinc-900 dark:text-white">Digital Marketing</p>
                            <p className="text-[11px] text-zinc-400">8 Bab Ads, GTM &amp; Conversions API</p>
                          </div>
                        </a>

                        <a
                          href={`${themePrefix}/belajar/vibe-coding`}
                          onClick={(e) => {
                            setBelajarDropdownOpen(false);
                            handleNavClick('learning', e, `${themePrefix}/belajar/vibe-coding`);
                          }}
                          className="w-full px-3 py-2.5 rounded-xl text-left hover:bg-zinc-100 dark:hover:bg-zinc-800/80 flex items-start gap-3 transition-colors cursor-pointer group"
                        >
                          <Zap className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-zinc-900 dark:text-white">Vibe Coding</p>
                            <p className="text-[11px] text-zinc-400">6 Bab Claude Code CLI &amp; Tooling</p>
                          </div>
                        </a>

                        <div className="border-t border-zinc-100 dark:border-zinc-800 my-1" />

                        <a
                          href={`${themePrefix}/kamus`}
                          onClick={(e) => {
                            setBelajarDropdownOpen(false);
                            handleNavClick('kamus', e, `${themePrefix}/kamus`);
                          }}
                          className="w-full px-3 py-2.5 rounded-xl text-left hover:bg-zinc-100 dark:hover:bg-zinc-800/80 flex items-start gap-3 transition-colors cursor-pointer group"
                        >
                          <BookOpen className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-zinc-900 dark:text-white">Kamus Istilah Digital</p>
                            <p className="text-[11px] text-zinc-400">40+ Istilah AI, Web &amp; Marketing</p>
                          </div>
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href={`${themePrefix}/blog`}
                  onClick={(e) => handleNavClick('blog', e, `${themePrefix}/blog`)}
                  className={`hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer ${
                    activeSection === 'blog' ? 'font-bold text-zinc-950 dark:text-white' : ''
                  }`}
                >
                  Blog
                </a>

                <a
                  href={`${themePrefix}/tools`}
                  onClick={(e) => handleNavClick('tools', e, `${themePrefix}/tools`)}
                  className={`hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer ${
                    activeSection === 'tools' ? 'font-bold text-zinc-950 dark:text-white' : ''
                  }`}
                >
                  Tools
                </a>

                <a
                  href={`${themePrefix}/about-me`}
                  onClick={(e) => handleNavClick('about', e, `${themePrefix}/about-me`)}
                  className={`hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer ${
                    activeSection === 'about' ? 'font-bold text-zinc-950 dark:text-white' : ''
                  }`}
                >
                  Tentang
                </a>
              </div>

              {/* Right Controls: Dark Mode Toggle + WhatsApp Konsultasi Button + Theme Switcher */}
              <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 pl-1">
                {/* Dark Mode Icon Button */}
                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
                  title="Ganti Mode Gelap / Terang"
                  aria-label="Toggle Theme"
                >
                  {isDark ? (
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                  ) : (
                    <Moon className="w-3.5 h-3.5 text-blue-600" />
                  )}
                </button>

                {/* WhatsApp Konsultasi Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0"
                  title="Konsultasi Langsung via WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="whitespace-nowrap">Konsultasi</span>
                </button>

                {/* Theme Selector (Strictly Icon + Exact Name) */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setThemeMenuOpen((prev) => !prev);
                    }}
                    className="px-2.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
                    title="Pilih Tema: portofolio-me, profesional, corporation"
                  >
                    <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span className="font-mono text-xs font-bold">corporation</span>
                    <ChevronDown className="w-3 h-3 opacity-60" />
                  </button>

                  <AnimatePresence>
                    {themeMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-48 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl p-1.5 z-50 text-xs"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <p className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
                          Pilih Tema
                        </p>
                        {themes.map((th) => (
                          <a
                            key={th.id}
                            href={th.path}
                            onClick={(e) => {
                              e.preventDefault();
                              onChangeDesignTheme(th.id);
                              setThemeMenuOpen(false);
                            }}
                            className={`w-full text-left px-2.5 py-2 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                              designTheme === th.id
                                ? 'bg-zinc-100 dark:bg-zinc-800 font-bold text-zinc-950 dark:text-white'
                                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/60'
                            }`}
                          >
                            {th.icon}
                            <span className="font-mono text-xs font-bold leading-none">{th.name}</span>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen(!mobileMenuOpen);
                  }}
                  className="md:hidden w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              </div>
            </nav>
          ) : (
            /* MINIMALIST FLOATING PILL NAVBAR FOR THEME 1 (portofolio-me) & THEME 2 (profesional) */
            <nav
              className={`flex items-center gap-0.5 sm:gap-1 px-2 py-1.5 rounded-full shadow-[0_6px_24px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all ${
                designTheme === 'clipboard'
                  ? 'bg-[#FFFDF9]/95 border-2 border-zinc-900 text-zinc-900 shadow-[4px_4px_0px_#1E3A8A]'
                  : 'bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/90 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200'
              }`}
            >
              <a
                href={themePrefix}
                onClick={(e) => handleNavClick('home', e, themePrefix)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                  activeSection === 'home'
                    ? designTheme === 'clipboard'
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-zinc-200/90 dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-2xs'
                    : 'hover:bg-zinc-100 dark:hover:bg-zinc-800/60 opacity-75 hover:opacity-100'
                }`}
                title={language === 'id' ? 'Beranda' : 'Home'}
                aria-label="Home"
              >
                <Home className="w-3.5 h-3.5" />
              </a>

              <span className="w-px h-4 bg-zinc-200 dark:bg-zinc-700/80 mx-0.5 shrink-0" />

              <div className="hidden md:flex items-center gap-0.5">
                {defaultNavItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.path}
                      onClick={(e) => handleNavClick(item.id, e, item.path)}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                        isActive
                          ? designTheme === 'clipboard'
                            ? 'bg-blue-600 text-white font-bold'
                            : 'bg-zinc-200/80 dark:bg-zinc-800 text-zinc-950 dark:text-white font-semibold'
                          : 'hover:bg-zinc-100/80 dark:hover:bg-zinc-800/50 opacity-85 hover:opacity-100'
                      }`}
                    >
                      <span className="opacity-80">{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>

              <span className="hidden md:inline-block w-px h-4 bg-zinc-200 dark:bg-zinc-700/80 mx-0.5 shrink-0" />

              {/* Theme Selector for Theme 1 & 2 */}
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setThemeMenuOpen((prev) => !prev);
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    designTheme === 'clipboard'
                      ? 'bg-amber-100 text-zinc-900 border border-zinc-900'
                      : 'bg-cyan-50 dark:bg-zinc-800 text-cyan-800 dark:text-cyan-300 border border-cyan-200/80 dark:border-zinc-700'
                  }`}
                  title="Pilih Tema Desain Website"
                >
                  {designTheme === 'modern' ? (
                    <UserCircle className="w-3.5 h-3.5" />
                  ) : (
                    <Briefcase className="w-3.5 h-3.5" />
                  )}
                  <span className="font-mono text-xs font-bold">
                    {designTheme === 'modern' ? 'portofolio-me' : 'profesional'}
                  </span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </button>

                <AnimatePresence>
                  {themeMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-48 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl p-1.5 z-50 text-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
                        Pilih Tema
                      </p>
                      {themes.map((th) => (
                        <a
                          key={th.id}
                          href={th.path}
                          onClick={(e) => {
                            e.preventDefault();
                            onChangeDesignTheme(th.id);
                            setThemeMenuOpen(false);
                          }}
                          className={`w-full text-left px-2.5 py-2 rounded-xl flex items-center gap-2.5 transition-colors cursor-pointer ${
                            designTheme === th.id
                              ? 'bg-zinc-100 dark:bg-zinc-800 font-bold text-zinc-950 dark:text-white'
                              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/60'
                          }`}
                        >
                          {th.icon}
                          <span className="font-mono text-xs font-bold leading-none">{th.name}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {onOpenCommandMenu && (
                <button
                  type="button"
                  onClick={onOpenCommandMenu}
                  className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
                  title="Quick Search (Ctrl+K)"
                  aria-label="Search"
                >
                  <Search className="w-3.5 h-3.5 opacity-75" />
                </button>
              )}

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="md:hidden w-7 h-7 rounded-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </nav>
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pointer-events-auto mt-2 max-w-sm mx-auto p-4 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-2xl text-xs space-y-3"
          >
            {designTheme === 'arcade' ? (
              <div className="space-y-1">
                {/* Mobile Official fitran.dev Pixel Brand */}
                <div className="flex items-center pb-2 mb-2 border-b border-zinc-100 dark:border-zinc-800">
                  <FitranPixelLogo size="xs" />
                </div>

                <a
                  href={themePrefix}
                  onClick={(e) => handleNavClick('home', e, themePrefix)}
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold"
                >
                  Beranda
                </a>
                <a
                  href={`${themePrefix}/layanan`}
                  onClick={(e) => handleNavClick('services', e, `${themePrefix}/layanan`)}
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold"
                >
                  Layanan (Mulai 500rb)
                </a>
                <a
                  href={`${themePrefix}/certificates`}
                  onClick={(e) => handleNavClick('certificates', e, `${themePrefix}/certificates`)}
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold text-[#1E3A8A] dark:text-blue-400"
                >
                  Sertifikat (36+ Terverifikasi)
                </a>
                <a
                  href={`${themePrefix}/belajar`}
                  onClick={(e) => handleNavClick('learning', e, `${themePrefix}/belajar`)}
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold"
                >
                  Belajar AI, Ads &amp; Vibe Coding
                </a>
                <a
                  href={`${themePrefix}/kamus`}
                  onClick={(e) => handleNavClick('kamus', e, `${themePrefix}/kamus`)}
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold"
                >
                  Kamus Istilah Digital
                </a>
                <a
                  href={`${themePrefix}/blog`}
                  onClick={(e) => handleNavClick('blog', e, `${themePrefix}/blog`)}
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold"
                >
                  Blog &amp; Tulisan Pilihan
                </a>
                <a
                  href={`${themePrefix}/tools`}
                  onClick={(e) => handleNavClick('tools', e, `${themePrefix}/tools`)}
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold"
                >
                  Tools yang Saya Pakai
                </a>
                <a
                  href={`${themePrefix}/about-me`}
                  onClick={(e) => handleNavClick('about', e, `${themePrefix}/about-me`)}
                  className="block w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold"
                >
                  Tentang Tubagus Fitran
                </a>
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full mt-2 py-2.5 px-3 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat via WhatsApp</span>
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                {defaultNavItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.path}
                    onClick={(e) => handleNavClick(item.id, e, item.path)}
                    className="w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium flex items-center gap-2"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
