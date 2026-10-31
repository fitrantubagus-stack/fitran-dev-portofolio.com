import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import {
  Menu,
  X,
  Moon,
  Sun,
  Github,
  Clock,
  ExternalLink,
  Languages,
  Search,
  LayoutGrid,
  FolderGit2,
  Award,
  Globe,
  Terminal,
  User,
  Mail,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenCommandMenu?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  isDark,
  onToggleTheme,
  onOpenCommandMenu,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wibTime, setWibTime] = useState('');
  const { language, toggleLanguage, t } = useLanguage();

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
      setWibTime(now.toLocaleTimeString('en-GB', options) + ' WIB');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems: { id: SectionId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: t.nav.overview, icon: <LayoutGrid className="w-3.5 h-3.5" /> },
    { id: 'about', label: t.nav.about, icon: <User className="w-3.5 h-3.5" /> },
    { id: 'work', label: t.nav.projects, icon: <FolderGit2 className="w-3.5 h-3.5" /> },
    { id: 'certificates', label: t.nav.credentials, icon: <Award className="w-3.5 h-3.5" /> },
    { id: 'ecosystem', label: t.nav.ecosystem, icon: <Globe className="w-3.5 h-3.5" /> },
    { id: 'craft-lab', label: t.nav.craftLab, icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'contact', label: t.nav.contact, icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  const handleNavClick = (id: SectionId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/85 dark:bg-[#09090B]/85 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo (TF) + Timezone Pill */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all select-none"
            aria-label="Go to top"
            title={language === 'id' ? 'Tubagus Fitran (Kembali ke atas)' : 'Tubagus Fitran (Back to top)'}
          >
            <span className="font-mono text-xs font-black tracking-wider text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              TF
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
          </button>

          {/* Realtime WIB Digital Clock */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-emerald-500" />
            <span>Asia/Jakarta</span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{wibTime || '22:00 WIB'}</span>
          </div>
        </div>

        {/* Center Navigation Links (Full Width Desktop Tabs) */}
        <nav className="hidden lg:flex items-center gap-1.5 font-mono text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                  isActive
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                }`}
              >
                <span className={isActive ? 'text-emerald-400 dark:text-emerald-600' : 'text-zinc-400 dark:text-zinc-500'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Search, Language Switcher, Theme Switcher, GitHub & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Quick Command Launcher Button (Ctrl+K) */}
          {onOpenCommandMenu && (
            <button
              onClick={onOpenCommandMenu}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 font-mono text-xs transition-colors cursor-pointer"
              title="Quick Search & Commands (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-500 dark:text-zinc-400 text-[11px] hidden md:inline">Search...</span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-[10px] text-zinc-600 dark:text-zinc-400 font-mono font-semibold border border-zinc-300 dark:border-zinc-700">
                ⌘K
              </kbd>
            </button>
          )}

          {/* Bilingual Language Switcher Button (ID / EN) */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs transition-colors"
            title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            aria-label="Toggle language"
          >
            <Languages className="w-3.5 h-3.5 text-blue-500" />
            <span className="font-bold">{language.toUpperCase()}</span>
            <span className="text-[10px] text-zinc-400">({language === 'id' ? 'EN' : 'ID'})</span>
          </button>

          {/* GitHub Profile Button */}
          <a
            href={PERSONAL_INFO.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          {/* Theme Switcher Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-600" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090B] px-4 py-3"
          >
            <div className="flex flex-col gap-1 font-mono text-xs">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2.5 text-left px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-zinc-100 dark:bg-zinc-800 font-bold text-zinc-950 dark:text-white'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900'
                  }`}
                >
                  <span className={activeSection === item.id ? 'text-emerald-500' : 'text-zinc-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              ))}

              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-zinc-500 text-[11px]">
                <span>{wibTime}</span>
                <button
                  onClick={toggleLanguage}
                  className="font-bold text-blue-600 dark:text-blue-400 underline"
                >
                  {language === 'id' ? 'English Version' : 'Bahasa Indonesia'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
