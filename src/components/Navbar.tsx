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
  ShieldCheck,
  Compass,
  BookOpen,
  FileText,
  ChevronDown,
  Wrench,
  MessageSquare,
  Bot,
  TrendingUp,
  Zap,
  Cpu,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type DesignTheme = 'modern' | 'clipboard' | 'arcade';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
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
      setThemeMenuOpen(false);
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  // Default nav items for Theme 1 (Modern) & Theme 2 (Clipboard / Animasi)
  const defaultNavItems: { id: SectionId; label: string; icon: React.ReactNode }[] = [
    {
      id: 'about',
      label: 'About',
      icon: <UserCircle className="w-3.5 h-3.5" />,
    },
    {
      id: 'work',
      label: language === 'id' ? 'Proyek' : 'Work',
      icon: <LayoutGrid className="w-3.5 h-3.5" />,
    },
    {
      id: 'certificates',
      label: language === 'id' ? 'Sertifikat' : 'Certs',
      icon: <Award className="w-3.5 h-3.5" />,
    },
    {
      id: 'ecosystem',
      label: language === 'id' ? 'Ekosistem' : 'Ecosystem',
      icon: <Globe className="w-3.5 h-3.5" />,
    },
    {
      id: 'craft-lab',
      label: 'CLI',
      icon: <Terminal className="w-3.5 h-3.5" />,
    },
    {
      id: 'contact',
      label: language === 'id' ? 'Kontak' : 'Contact',
      icon: <Mail className="w-3.5 h-3.5" />,
    },
  ];

  const themes: { id: DesignTheme; name: string; desc: string; dotClass: string }[] = [
    {
      id: 'modern',
      name: '1. Modern Tech',
      desc: 'Clean Blueprint & Isometric 3D (Default)',
      dotClass: 'bg-cyan-400',
    },
    {
      id: 'clipboard',
      name: '2. Full Animasi Desain',
      desc: 'Interactive Kinetic Bento & Motion UI/UX',
      dotClass: 'bg-indigo-500',
    },
    {
      id: 'arcade',
      name: '3. Fikran Dev Concept',
      desc: 'Ekosistem Multi-Halaman: Layanan 500k & Studio Belajar',
      dotClass: 'bg-[#8A0F14]',
    },
  ];

  const handleNavClick = (id: SectionId, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    onNavigate(id);
    setMobileMenuOpen(false);
    setBelajarDropdownOpen(false);
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
            <button
              type="button"
              onClick={(e) => handleNavClick('home', e)}
              className="hidden lg:inline-flex items-center hover:opacity-85 hover:scale-105 transition-all cursor-pointer bg-transparent border-0 p-0"
              title="fitran.dev — Beranda"
            >
              <FitranPixelLogo size="sm" />
            </button>
            <span>Asia/Jakarta</span>
          </div>
        )}

        {/* ===================================================================== */}
        {/* CENTER NAVBAR: CONDITIONAL RENDERING BASED ON THEME                   */}
        {/* ===================================================================== */}
        <div className="mx-auto pointer-events-auto relative">
          {designTheme === 'arcade' ? (
            /* EXACT FIKRAN DEV FLOATING NAVBAR (Matches Attached Screenshot) */
            <nav className="flex items-center gap-2 sm:gap-5 px-3 sm:px-5 py-2 rounded-full bg-white/95 dark:bg-[#111319]/95 border border-zinc-200/90 dark:border-zinc-800 shadow-[0_12px_36px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all">
              {/* Brand Logo & Name */}
              <button
                onClick={(e) => handleNavClick('home', e)}
                className="flex items-center gap-2 text-zinc-900 dark:text-white font-extrabold text-sm sm:text-base hover:opacity-90 transition-opacity cursor-pointer shrink-0 pr-1"
                title="Fitran Dev • Beranda"
              >
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#8A0F14] to-[#C91A23] flex items-center justify-center text-white text-[10px] font-black shadow-xs shrink-0">
                  FD
                </div>
                <span className="tracking-tight whitespace-nowrap">Fitran Dev</span>
              </button>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-4 lg:gap-5 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-300">
                <button
                  onClick={(e) => handleNavClick('services', e)}
                  className={`hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer ${
                    activeSection === 'services' ? 'font-bold text-zinc-950 dark:text-white' : ''
                  }`}
                >
                  Layanan
                </button>

                <button
                  onClick={(e) => handleNavClick('certificates', e)}
                  className={`hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer ${
                    activeSection === 'certificates' ? 'font-bold text-zinc-950 dark:text-white' : ''
                  }`}
                >
                  Sertifikat
                </button>

                {/* Belajar with Dropdown */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setBelajarDropdownOpen((prev) => !prev);
                    }}
                    className={`flex items-center gap-1 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer ${
                      activeSection === 'learning' || activeSection === 'kamus'
                        ? 'font-bold text-zinc-950 dark:text-white'
                        : ''
                    }`}
                  >
                    <span>Belajar</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 opacity-70 transition-transform ${
                        belajarDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

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

                        <button
                          onClick={(e) => {
                            window.history.pushState(null, '', '/belajar/ai');
                            handleNavClick('learning', e);
                          }}
                          className="w-full px-3 py-2.5 rounded-xl text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/80 flex items-start gap-3 transition-colors cursor-pointer group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950/60 border border-purple-200/80 dark:border-purple-800/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <Bot className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="font-bold text-zinc-900 dark:text-white">AI untuk Bisnis</p>
                            <p className="text-[11px] text-zinc-400">8 Bab Fondasi, RAG &amp; WhatsApp Agent</p>
                          </div>
                        </button>

                        <button
                          onClick={(e) => {
                            window.history.pushState(null, '', '/belajar/digital-marketing');
                            handleNavClick('learning', e);
                          }}
                          className="w-full px-3 py-2.5 rounded-xl text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/80 flex items-start gap-3 transition-colors cursor-pointer group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-200/80 dark:border-cyan-800/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <TrendingUp className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                          </div>
                          <div>
                            <p className="font-bold text-zinc-900 dark:text-white">Digital Marketing</p>
                            <p className="text-[11px] text-zinc-400">8 Bab Ads, GTM &amp; Conversions API</p>
                          </div>
                        </button>

                        <button
                          onClick={(e) => {
                            window.history.pushState(null, '', '/belajar/vibe-coding');
                            handleNavClick('learning', e);
                          }}
                          className="w-full px-3 py-2.5 rounded-xl text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/80 flex items-start gap-3 transition-colors cursor-pointer group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-800/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                          </div>
                          <div>
                            <p className="font-bold text-zinc-900 dark:text-white">Vibe Coding</p>
                            <p className="text-[11px] text-zinc-400">6 Bab Claude Code CLI &amp; Tooling</p>
                          </div>
                        </button>

                        <div className="border-t border-zinc-100 dark:border-zinc-800 my-1" />

                        <button
                          onClick={(e) => handleNavClick('kamus', e)}
                          className="w-full px-3 py-2.5 rounded-xl text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/80 flex items-start gap-3 transition-colors cursor-pointer group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                            <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <div>
                            <p className="font-bold text-zinc-900 dark:text-white">Kamus Istilah Digital</p>
                            <p className="text-[11px] text-zinc-400">40+ Istilah AI, Web &amp; Marketing</p>
                          </div>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={(e) => handleNavClick('blog', e)}
                  className={`hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer ${
                    activeSection === 'blog' ? 'font-bold text-zinc-950 dark:text-white' : ''
                  }`}
                >
                  Blog
                </button>

                <button
                  onClick={(e) => handleNavClick('tools', e)}
                  className={`hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer ${
                    activeSection === 'tools' ? 'font-bold text-zinc-950 dark:text-white' : ''
                  }`}
                >
                  Tools
                </button>

                <button
                  onClick={(e) => handleNavClick('about', e)}
                  className={`hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer ${
                    activeSection === 'about' ? 'font-bold text-zinc-950 dark:text-white' : ''
                  }`}
                >
                  Tentang
                </button>
              </div>

              {/* Right Controls: Dark Mode Toggle + WhatsApp Konsultasi Button */}
              <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 pl-1">
                {/* Dark Mode Icon Button */}
                <button
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

                {/* WhatsApp Konsultasi Button (Exact Dark-Red / Burgundy Pill in Screenshot) */}
                <button
                  onClick={handleWhatsAppClick}
                  className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#8A0F14] hover:bg-[#6E0B0F] text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0"
                  title="Konsultasi Langsung via WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="whitespace-nowrap">Konsultasi</span>
                </button>

                {/* 3-Theme Switcher Icon Button */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setThemeMenuOpen((prev) => !prev);
                    }}
                    className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
                    title="Pilih 3 Tema Desain Web"
                  >
                    <Palette className="w-3.5 h-3.5 text-[#8A0F14] dark:text-red-400" />
                  </button>

                  <AnimatePresence>
                    {themeMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl p-1.5 z-50 text-xs"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <p className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
                          Pilih 3 Tema Desain Web
                        </p>
                        {themes.map((th) => (
                          <button
                            key={th.id}
                            onClick={() => {
                              onChangeDesignTheme(th.id);
                              setThemeMenuOpen(false);
                            }}
                            className={`w-full text-left px-2.5 py-2 rounded-xl flex items-start gap-2.5 transition-colors cursor-pointer ${
                              designTheme === th.id
                                ? 'bg-zinc-100 dark:bg-zinc-800 font-bold text-zinc-950 dark:text-white'
                                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/60'
                            }`}
                          >
                            <span className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${th.dotClass}`} />
                            <div>
                              <p className="leading-tight">{th.name}</p>
                              <p className="text-[10px] text-zinc-400 font-normal mt-0.5">{th.desc}</p>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Menu Toggle */}
                <button
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
            /* DEFAULT MINIMALIST FLOATING PILL NAVBAR FOR THEME 1 & 2 (UNTOUCHED) */
            <nav
              className={`flex items-center gap-0.5 sm:gap-1 px-2 py-1.5 rounded-full shadow-[0_6px_24px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all ${
                designTheme === 'clipboard'
                  ? 'bg-[#FFFDF9]/95 border-2 border-zinc-900 text-zinc-900 shadow-[4px_4px_0px_#1E3A8A]'
                  : 'bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/90 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200'
              }`}
            >
              <button
                onClick={(e) => handleNavClick('home', e)}
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
              </button>

              <span className="w-px h-4 bg-zinc-200 dark:bg-zinc-700/80 mx-0.5 shrink-0" />

              <div className="hidden md:flex items-center gap-0.5">
                {defaultNavItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={(e) => handleNavClick(item.id, e)}
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
                    </button>
                  );
                })}
              </div>

              <span className="hidden md:inline-block w-px h-4 bg-zinc-200 dark:bg-zinc-700/80 mx-0.5 shrink-0" />

              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setThemeMenuOpen((prev) => !prev);
                  }}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    designTheme === 'clipboard'
                      ? 'bg-amber-100 text-zinc-900 border border-zinc-900'
                      : 'bg-cyan-50 dark:bg-zinc-800 text-cyan-800 dark:text-cyan-300 border border-cyan-200/80 dark:border-zinc-700'
                  }`}
                  title="Ganti Tema Desain Website (3 Tema)"
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">
                    {designTheme === 'modern' ? 'Modern' : 'Animasi'}
                  </span>
                </button>

                <AnimatePresence>
                  {themeMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl p-1.5 z-50 text-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
                        Pilih 3 Tema Desain Web
                      </p>
                      {themes.map((th) => (
                        <button
                          key={th.id}
                          onClick={() => {
                            onChangeDesignTheme(th.id);
                            setThemeMenuOpen(false);
                          }}
                          className={`w-full text-left px-2.5 py-2 rounded-xl flex items-start gap-2.5 transition-colors cursor-pointer ${
                            designTheme === th.id
                              ? 'bg-zinc-100 dark:bg-zinc-800 font-bold text-zinc-950 dark:text-white'
                              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/60'
                          }`}
                        >
                          <span className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${th.dotClass}`} />
                          <div>
                            <p className="leading-tight">{th.name}</p>
                            <p className="text-[10px] text-zinc-400 font-normal mt-0.5">{th.desc}</p>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {onOpenCommandMenu && (
                <button
                  onClick={onOpenCommandMenu}
                  className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
                  title="Quick Search (Ctrl+K)"
                  aria-label="Search"
                >
                  <Search className="w-3.5 h-3.5 opacity-75" />
                </button>
              )}

              <button
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

      {/* Mobile Drawer Menu for Theme 3 */}
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
                <button
                  onClick={(e) => handleNavClick('home', e)}
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold"
                >
                  Beranda
                </button>
                <button
                  onClick={(e) => handleNavClick('services', e)}
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold"
                >
                  Layanan (Mulai 500rb)
                </button>
                <button
                  onClick={(e) => handleNavClick('certificates', e)}
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold text-[#8A0F14] dark:text-red-400"
                >
                  Sertifikat (36+ Terverifikasi)
                </button>
                <button
                  onClick={(e) => handleNavClick('learning', e)}
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold"
                >
                  Belajar AI, Ads &amp; Vibe Coding
                </button>
                <button
                  onClick={(e) => handleNavClick('kamus', e)}
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold"
                >
                  Kamus Istilah Digital
                </button>
                <button
                  onClick={(e) => handleNavClick('blog', e)}
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold"
                >
                  Blog &amp; Tulisan Pilihan
                </button>
                <button
                  onClick={(e) => handleNavClick('tools', e)}
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold"
                >
                  Tools yang Saya Pakai
                </button>
                <button
                  onClick={(e) => handleNavClick('about', e)}
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold"
                >
                  Tentang Tubagus Fitran
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full mt-2 py-2.5 px-3 rounded-xl bg-[#8A0F14] text-white font-bold text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat via WhatsApp</span>
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                {defaultNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className="w-full text-left py-2 px-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium flex items-center gap-2"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
