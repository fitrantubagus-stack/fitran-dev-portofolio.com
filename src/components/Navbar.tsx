import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { useLanguage } from '../context/LanguageContext';
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
  const [wibTime, setWibTime] = useState('');
  const { language, toggleLanguage } = useLanguage();

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

  // Compact single-word labels so the minimalist floating pill NEVER wraps or clips
  const navItems: { id: SectionId; label: string; icon: React.ReactNode }[] = [
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
      name: '1. Modern Cyan',
      desc: 'Minimalist Clean Glow (Eka Style)',
      dotClass: 'bg-cyan-400',
    },
    {
      id: 'clipboard',
      name: '2. Pixel Clipboard',
      desc: 'Scrapbook & Grid Note (Amru Style)',
      dotClass: 'bg-blue-600',
    },
    {
      id: 'arcade',
      name: '3. Gold Arcade',
      desc: 'Retro Gold Cyber 2025 (Kanoen Style)',
      dotClass: 'bg-amber-400',
    },
  ];

  const handleNavClick = (id: SectionId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full py-2.5 px-4 sm:px-8 transition-all pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* LEFT: Minimalist Timezone Label (matches Eka Revandi reference) */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-sans font-medium text-zinc-700 dark:text-zinc-300 pointer-events-auto shrink-0">
          <span>Asia/Jakarta</span>
        </div>

        {/* CENTER: Minimalist Floating Pill Navigation Dock */}
        <div className="mx-auto pointer-events-auto relative">
          <nav
            className={`flex items-center gap-0.5 sm:gap-1 px-2 py-1.5 rounded-full shadow-[0_6px_24px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all ${
              designTheme === 'clipboard'
                ? 'bg-[#FFFDF9]/95 border-2 border-zinc-900 text-zinc-900 shadow-[4px_4px_0px_#1E3A8A]'
                : designTheme === 'arcade'
                  ? 'bg-[#251E10]/95 border border-[#D4A038]/70 text-[#FDE68A] shadow-[0_6px_24px_rgba(212,160,56,0.2)]'
                  : 'bg-white/95 dark:bg-zinc-900/95 border border-zinc-200/90 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200'
            }`}
          >
            {/* Home Icon Circular Pill */}
            <button
              onClick={() => handleNavClick('home')}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                activeSection === 'home'
                  ? designTheme === 'arcade'
                    ? 'bg-[#D4A038] text-black font-bold shadow-xs'
                    : designTheme === 'clipboard'
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-zinc-200/90 dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-2xs'
                  : 'hover:bg-zinc-100 dark:hover:bg-zinc-800/60 opacity-75 hover:opacity-100'
              }`}
              title={language === 'id' ? 'Beranda' : 'Home'}
              aria-label="Home"
            >
              <Home className="w-3.5 h-3.5" />
            </button>

            {/* Subtle Vertical Divider */}
            <span className="w-px h-4 bg-zinc-200 dark:bg-zinc-700/80 mx-0.5 shrink-0" />

            {/* Desktop Compact Single-Line Links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? designTheme === 'arcade'
                          ? 'bg-[#D4A038] text-black font-bold shadow-2xs'
                          : designTheme === 'clipboard'
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

            {/* Subtle Vertical Divider */}
            <span className="hidden md:inline-block w-px h-4 bg-zinc-200 dark:bg-zinc-700/80 mx-0.5 shrink-0" />

            {/* 3-Theme Design Switcher Button */}
            <div className="relative">
              <button
                onClick={() => setThemeMenuOpen((prev) => !prev)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  designTheme === 'arcade'
                    ? 'bg-[#D4A038]/20 text-[#FDE68A] border border-[#D4A038]/50'
                    : designTheme === 'clipboard'
                      ? 'bg-amber-100 text-zinc-900 border border-zinc-900'
                      : 'bg-cyan-50 dark:bg-zinc-800 text-cyan-800 dark:text-cyan-300 border border-cyan-200/80 dark:border-zinc-700'
                }`}
                title="Ganti Tema Desain Website (3 Tema)"
              >
                <Palette className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {designTheme === 'modern'
                    ? 'Modern'
                    : designTheme === 'clipboard'
                      ? 'Clipboard'
                      : 'Arcade'}
                </span>
              </button>

              {/* 3-Theme Dropdown Popover */}
              <AnimatePresence>
                {themeMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl p-1.5 z-50 text-xs"
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

            {/* Quick Search (Ctrl+K) Icon */}
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

            {/* Compact Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded-full text-[11px] font-mono font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
              title="Ganti Bahasa (ID / EN)"
            >
              {language.toUpperCase()}
            </button>

            {/* Theme Dark/Light Icon Button */}
            <button
              onClick={onToggleTheme}
              className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-7 h-7 rounded-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </nav>

          {/* Mobile Compact Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                className="md:hidden absolute left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl p-2 z-50"
              >
                <div className="grid grid-cols-2 gap-1 text-xs font-medium">
                  <button
                    onClick={() => handleNavClick('home')}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-left ${
                      activeSection === 'home'
                        ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-bold'
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Beranda</span>
                  </button>
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-left ${
                        activeSection === item.id
                          ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-bold'
                          : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT: Minimalist Live Clock (matches Eka Revandi reference) */}
        <div className="hidden sm:flex items-center text-xs font-sans font-medium text-zinc-700 dark:text-zinc-300 tabular-nums pointer-events-auto shrink-0">
          <span>{wibTime || '16:30:00'}</span>
        </div>
      </div>
    </header>
  );
};
