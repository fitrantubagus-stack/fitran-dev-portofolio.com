import React, { useState, useEffect, useCallback } from 'react';
import { CertificateItem, ProjectItem, SectionId } from './types';
import { Navbar, DesignTheme } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { GitHubContributionGraph } from './components/GitHubContributionGraph';
import { WorkSection } from './components/WorkSection';
import { CertificatesSection } from './components/CertificatesSection';
import { AboutSection } from './components/AboutSection';
import { ContactFooter } from './components/ContactFooter';
import { CertificateModal } from './components/CertificateModal';
import { ProjectModal } from './components/ProjectModal';
import { CommandMenu } from './components/CommandMenu';
import { ClaudeCodeTerminal3D } from './components/ClaudeCodeTerminal3D';
import { ScrollReveal } from './components/ScrollReveal';
import { CERTIFICATES_DATA } from './data/portfolioData';
import { LanguageProvider } from './context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ArrowRight } from 'lucide-react';

const SECTION_TO_PATH: Record<SectionId, string> = {
  home: '/',
  about: '/about-me',
  work: '/projects',
  certificates: '/certificates',
  ecosystem: '/ecosystem',
  'craft-lab': '/craft-lab',
  contact: '/contact',
};

const normalizeStr = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');

export default function App() {
  const [activeTab, setActiveTab] = useState<SectionId>('home');
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [designTheme, setDesignTheme] = useState<DesignTheme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('designTheme') as DesignTheme | null;
      if (saved === 'modern' || saved === 'clipboard' || saved === 'arcade') {
        return saved;
      }
    }
    return 'modern';
  });
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return false;
    }
    return false;
  });
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Sync dark class on <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Persist designTheme
  const handleChangeDesignTheme = (theme: DesignTheme) => {
    setDesignTheme(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('designTheme', theme);
    }
  };

  // Resolve pathname (and legacy hash if present) into activeTab or selectedCertificate
  const syncRouteFromLocation = useCallback(() => {
    if (typeof window === 'undefined') return;

    if (window.location.hash) {
      const legacyHash = window.location.hash.replace(/^#\/?/, '').trim();
      if (legacyHash) {
        window.history.replaceState(null, '', `/${legacyHash}`);
      } else {
        window.history.replaceState(null, '', window.location.pathname || '/');
      }
    }

    const rawPath = decodeURIComponent(window.location.pathname || '/').replace(/^\/+|\/+$/g, '');

    if (!rawPath || rawPath === 'home' || rawPath === 'overview' || rawPath === 'beranda') {
      setSelectedCertificate(null);
      setActiveTab('home');
      return;
    }

    const lowerPath = rawPath.toLowerCase();

    if (lowerPath === 'about-me' || lowerPath === 'about' || lowerPath === 'tentang') {
      setSelectedCertificate(null);
      setActiveTab('about');
      return;
    }
    if (lowerPath === 'projects' || lowerPath === 'work' || lowerPath === 'proyek') {
      setSelectedCertificate(null);
      setActiveTab('work');
      return;
    }
    if (
      lowerPath === 'certificates' ||
      lowerPath === 'credentials' ||
      lowerPath === 'sertifikat'
    ) {
      setSelectedCertificate(null);
      setActiveTab('certificates');
      return;
    }
    if (lowerPath === 'ecosystem' || lowerPath === 'ekosistem') {
      setSelectedCertificate(null);
      setActiveTab('ecosystem');
      return;
    }
    if (lowerPath === 'craft-lab' || lowerPath === 'cli' || lowerPath === 'fitran-cli') {
      setSelectedCertificate(null);
      setActiveTab('craft-lab');
      return;
    }
    if (lowerPath === 'contact' || lowerPath === 'kontak') {
      setSelectedCertificate(null);
      setActiveTab('contact');
      return;
    }

    const matchedCert = CERTIFICATES_DATA.find(
      (c) =>
        normalizeStr(c.title) === normalizeStr(rawPath) ||
        normalizeStr(c.id) === normalizeStr(rawPath)
    );

    if (matchedCert) {
      setSelectedCertificate(matchedCert);
      setActiveTab('certificates');
      return;
    }

    setSelectedCertificate(null);
    setActiveTab('home');
  }, []);

  useEffect(() => {
    syncRouteFromLocation();
    window.addEventListener('popstate', syncRouteFromLocation);
    return () => window.removeEventListener('popstate', syncRouteFromLocation);
  }, [syncRouteFromLocation]);

  useEffect(() => {
    const handleOpenMenu = () => setIsCommandMenuOpen(true);
    window.addEventListener('open-command-menu', handleOpenMenu);
    return () => window.removeEventListener('open-command-menu', handleOpenMenu);
  }, []);

  const handleNavigate = (sectionId: SectionId) => {
    setSelectedCertificate(null);
    setActiveTab(sectionId);
    const nextPath = SECTION_TO_PATH[sectionId] || '/';
    window.history.pushState(null, '', nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCertificate = (cert: CertificateItem) => {
    setSelectedCertificate(cert);
    setActiveTab('certificates');
    const cleanCertPath = `/${encodeURIComponent(cert.title).replace(/%20/g, ' ')}`;
    window.history.pushState(null, '', cleanCertPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseCertificate = () => {
    setSelectedCertificate(null);
    setActiveTab('certificates');
    window.history.pushState(null, '', '/certificates');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Root theme background styles for the 3 Website Design Themes
  const rootThemeClass =
    designTheme === 'clipboard'
      ? 'bg-[#2563EB] text-zinc-900 dark:text-zinc-100'
      : designTheme === 'arcade'
        ? 'bg-[#141109] text-zinc-100'
        : 'bg-[#FAFAFA] dark:bg-[#09090B] bg-dot-grid text-zinc-900 dark:text-zinc-100';

  const rootThemeInlineStyle: React.CSSProperties | undefined =
    designTheme === 'clipboard'
      ? {
          backgroundImage:
            'linear-gradient(90deg, rgba(255,255,255,0.14) 50%, transparent 50%), linear-gradient(rgba(255,255,255,0.14) 50%, transparent 50%)',
          backgroundSize: '36px 36px',
        }
      : designTheme === 'arcade'
        ? {
            backgroundImage:
              'radial-gradient(circle at 50% 0%, rgba(212, 160, 56, 0.22), transparent 65%), radial-gradient(#D4A038 0.75px, transparent 0.75px)',
            backgroundSize: '100% 100%, 28px 28px',
          }
        : undefined;

  const pageTransitionKey = selectedCertificate
    ? `cert-${selectedCertificate.id}`
    : `tab-${activeTab}-${designTheme}`;

  return (
    <LanguageProvider>
      <div
        style={rootThemeInlineStyle}
        className={`min-h-screen w-full max-w-full overflow-x-hidden transition-colors duration-300 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900 flex flex-col ${rootThemeClass}`}
      >
        {/* Minimalist Floating Pill Navbar */}
        <Navbar
          activeSection={activeTab}
          onNavigate={handleNavigate}
          isDark={isDark}
          onToggleTheme={() => setIsDark(!isDark)}
          designTheme={designTheme}
          onChangeDesignTheme={handleChangeDesignTheme}
          onOpenCommandMenu={() => setIsCommandMenuOpen(true)}
        />

        {/* Smooth GPU-Accelerated Page Transition + Scroll Reveal Content */}
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={pageTransitionKey}
              initial={{ opacity: 0, y: 18, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.99 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* DEDICATED CERTIFICATE PAGE (/<Certificate Title>) */}
              {selectedCertificate ? (
                <ScrollReveal variant="zoom-in">
                  <CertificateModal
                    cert={selectedCertificate}
                    allCerts={CERTIFICATES_DATA}
                    onClose={handleCloseCertificate}
                    onSelectCert={handleSelectCertificate}
                  />
                </ScrollReveal>
              ) : (
                <>
                  {/* PAGE 1: BERANDA (/) */}
                  {activeTab === 'home' && (
                    <div>
                      <ScrollReveal variant="fade-up">
                        <Hero
                          onNavigate={handleNavigate}
                          designTheme={designTheme}
                          onChangeDesignTheme={handleChangeDesignTheme}
                        />
                      </ScrollReveal>

                      <ScrollReveal variant="fade-up" delay={60}>
                        <LogoMarquee />
                      </ScrollReveal>

                      <ScrollReveal variant="zoom-in" delay={80}>
                        <section className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#09090B]/95 py-14">
                          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                              <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-900/60 bg-orange-50/70 dark:bg-orange-950/30 text-orange-800 dark:text-orange-300 font-mono text-xs mb-2">
                                  <Terminal className="w-3.5 h-3.5" />
                                  <span>Interactive 3D CLI Environment</span>
                                </div>
                                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">
                                  Fitran Code v2.1 • 3D Terminal
                                </h2>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
                                  A fully interactive, 3D perspective developer terminal inspired by the official Claude Code CLI interface. Type commands directly or tilt with your mouse cursor.
                                </p>
                              </div>

                              <button
                                onClick={() => handleNavigate('craft-lab')}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-semibold transition-colors cursor-pointer self-start md:self-auto"
                              >
                                <span>Open Full Lab (/craft-lab)</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <ClaudeCodeTerminal3D />
                          </div>
                        </section>
                      </ScrollReveal>

                      <ScrollReveal variant="fade-up" delay={60}>
                        <div className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-950/80 py-10">
                          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <GitHubContributionGraph />
                          </div>
                        </div>
                      </ScrollReveal>

                      <ScrollReveal variant="fade-up" delay={80}>
                        <WorkSection onSelectProject={(p) => setSelectedProject(p)} isHomePreview={true} />
                      </ScrollReveal>

                      <ScrollReveal variant="fade-up" delay={80}>
                        <CertificatesSection onSelectCert={handleSelectCertificate} />
                      </ScrollReveal>
                    </div>
                  )}

                  {/* PAGE 2: ABOUT ME (/about-me) */}
                  {activeTab === 'about' && (
                    <div>
                      <ScrollReveal variant="fade-up">
                        <Hero
                          onNavigate={handleNavigate}
                          designTheme={designTheme}
                          onChangeDesignTheme={handleChangeDesignTheme}
                        />
                      </ScrollReveal>
                      <ScrollReveal variant="fade-up" delay={50}>
                        <LogoMarquee />
                      </ScrollReveal>
                      <ScrollReveal variant="fade-up" delay={80}>
                        <AboutSection />
                      </ScrollReveal>
                      <ScrollReveal variant="fade-up" delay={100}>
                        <div className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-zinc-950/80 py-10">
                          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <GitHubContributionGraph />
                          </div>
                        </div>
                      </ScrollReveal>
                    </div>
                  )}

                  {/* PAGE 3: PROJECTS CATALOG (/projects) */}
                  {activeTab === 'work' && (
                    <ScrollReveal variant="fade-up">
                      <WorkSection onSelectProject={(p) => setSelectedProject(p)} />
                    </ScrollReveal>
                  )}

                  {/* PAGE 4: CERTIFICATES & LICENSES (/certificates) */}
                  {activeTab === 'certificates' && (
                    <ScrollReveal variant="fade-up">
                      <CertificatesSection onSelectCert={handleSelectCertificate} />
                    </ScrollReveal>
                  )}

                  {/* PAGE 5: ECOSYSTEM & COMMUNITY (/ecosystem) */}
                  {activeTab === 'ecosystem' && (
                    <ScrollReveal variant="fade-up">
                      <AboutSection />
                    </ScrollReveal>
                  )}

                  {/* PAGE 6: CRAFT LAB & FITRAN CLI (/craft-lab) */}
                  {activeTab === 'craft-lab' && (
                    <ScrollReveal variant="zoom-in">
                      <div className="py-10 bg-white/95 dark:bg-[#09090B]/95">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-900/60 bg-orange-50/70 dark:bg-orange-950/30 text-orange-800 dark:text-orange-300 font-mono text-xs mb-2">
                              <Terminal className="w-3.5 h-3.5" />
                              <span>Fitran Code v2.1 • Experimental Lab</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white font-heading tracking-tight">
                              Claude Code &amp; Antigravity CLI Developer Studio
                            </h1>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-3xl leading-relaxed font-mono">
                              Modeled after official developer terminal startup experiences: Claude Code 8-bit orange mascot with responsive eye-blinking, crescent moon &amp; stippled cloud pixel art, and Antigravity CLI rainbow pixel architecture with interactive command execution.
                            </p>
                          </div>
                        </div>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                          <ClaudeCodeTerminal3D />

                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                            {[
                              { cmd: 'projects', desc: 'Browse all live deployed applications and repos' },
                              { cmd: 'certs', desc: 'Inspect verified Google, AWS, Meta & Olympiad credentials' },
                              { cmd: 'about', desc: 'Read background, degree, and engineering focus' },
                              { cmd: 'contact', desc: 'Display direct email and social network links' },
                            ].map((item, idx) => (
                              <div
                                key={idx}
                                className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0D1117] font-mono text-xs"
                              >
                                <span className="font-bold text-orange-500">{item.cmd}</span>
                                <p className="text-zinc-500 dark:text-zinc-400 text-[11px] mt-1 font-sans">
                                  {item.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  )}

                  {/* PAGE 7: CONTACT (/contact) */}
                  {activeTab === 'contact' && <div className="py-2" />}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Full-Width Footer with 3D Interactive Phone & Collaboration Form */}
        <ScrollReveal variant="fade-up">
          <ContactFooter onNavigate={handleNavigate} />
        </ScrollReveal>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Command Launcher Dialog (Ctrl+K) */}
        <CommandMenu
          isOpen={isCommandMenuOpen}
          onClose={() => setIsCommandMenuOpen(false)}
          activeTab={activeTab}
          onSelectTab={(tab) => handleNavigate(tab as SectionId)}
          onSelectProject={(project) => setSelectedProject(project)}
          onSelectCert={handleSelectCertificate}
        />
      </div>
    </LanguageProvider>
  );
}
