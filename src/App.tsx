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
import { CVModal } from './components/CVModal';
import { CommandMenu } from './components/CommandMenu';
import { ClaudeCodeTerminal3D } from './components/ClaudeCodeTerminal3D';
import { ScrollReveal } from './components/ScrollReveal';
import { SpotifyPlaylist } from './components/SpotifyPlaylist';
import { KlasikEcosystemView } from './components/KlasikEcosystemView';
import { CERTIFICATES_DATA, getCertPreviewPath } from './data/portfolioData';
import { LanguageProvider } from './context/LanguageContext';
import { TextStyleProvider } from './context/TextStyleContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ArrowRight } from 'lucide-react';

export const THEME_PREFIXES: Record<DesignTheme, string> = {
  modern: '/portofolio-me',
  clipboard: '/profesional',
  arcade: '/corporation',
};

export const SECTION_SUBPATHS: Record<SectionId, string> = {
  home: '',
  about: 'about-me',
  work: 'projects',
  certificates: 'certificates',
  ecosystem: 'ecosystem',
  'craft-lab': 'craft-lab',
  contact: 'contact',
  services: 'layanan',
  security: 'keamanan',
  learning: 'belajar',
  blog: 'blog',
  tools: 'tools',
  kamus: 'kamus',
};

export function getRoutePath(section: SectionId, theme: DesignTheme): string {
  const prefix = THEME_PREFIXES[theme] || '/corporation';
  const sub = SECTION_SUBPATHS[section];
  if (!sub) return prefix;
  return `${prefix}/${sub}`;
}

const normalizeStr = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');

export function resolveRouteFromWindow(): {
  tab: SectionId;
  cert: CertificateItem | null;
  theme?: DesignTheme;
} {
  if (typeof window === 'undefined') {
    return { tab: 'home', cert: null };
  }

  let rawPath = decodeURIComponent(window.location.pathname || '/').replace(/^\/+|\/+$/g, '');

  // Only fall back to hash if rawPath is empty (never overwrite /layanan with #katalog-lengkap!)
  if (!rawPath && window.location.hash) {
    const legacyHash = window.location.hash.replace(/^#\/?/, '').trim();
    if (legacyHash) {
      rawPath = decodeURIComponent(legacyHash).replace(/^\/+|\/+$/g, '');
    }
  }

  let detectedTheme: DesignTheme | undefined = undefined;
  let pathWithoutTheme = rawPath;

  const lower = rawPath.toLowerCase();
  if (lower === 'corporation' || lower.startsWith('corporation/')) {
    detectedTheme = 'arcade';
    pathWithoutTheme = rawPath.replace(/^corporation\/?/i, '');
  } else if (lower === 'portofolio-me' || lower.startsWith('portofolio-me/')) {
    detectedTheme = 'modern';
    pathWithoutTheme = rawPath.replace(/^portofolio-me\/?/i, '');
  } else if (lower === 'profesional' || lower.startsWith('profesional/')) {
    detectedTheme = 'clipboard';
    pathWithoutTheme = rawPath.replace(/^profesional\/?/i, '');
  }

  if (!pathWithoutTheme || pathWithoutTheme === 'home' || pathWithoutTheme === 'overview' || pathWithoutTheme === 'beranda') {
    return { tab: 'home', cert: null, theme: detectedTheme };
  }

  const lowerPath = pathWithoutTheme.toLowerCase();

  if (lowerPath === 'about-me' || lowerPath === 'about' || lowerPath === 'tentang') {
    return { tab: 'about', cert: null, theme: detectedTheme };
  }
  if (lowerPath === 'projects' || lowerPath === 'work' || lowerPath === 'proyek') {
    return { tab: 'work', cert: null, theme: detectedTheme };
  }
  if (
    lowerPath === 'certificates' ||
    lowerPath.startsWith('certificates/') ||
    lowerPath === 'credentials' ||
    lowerPath === 'sertifikat' ||
    lowerPath.startsWith('sertifikat/')
  ) {
    return { tab: 'certificates', cert: null, theme: detectedTheme };
  }
  if (lowerPath === 'ecosystem' || lowerPath === 'ekosistem') {
    return { tab: 'ecosystem', cert: null, theme: detectedTheme };
  }
  if (lowerPath === 'craft-lab' || lowerPath === 'cli' || lowerPath === 'fitran-cli') {
    return { tab: 'craft-lab', cert: null, theme: detectedTheme };
  }
  if (lowerPath === 'contact' || lowerPath === 'kontak') {
    return { tab: 'contact', cert: null, theme: detectedTheme };
  }
  if (lowerPath === 'services' || lowerPath === 'layanan' || lowerPath.startsWith('layanan')) {
    return { tab: 'services', cert: null, theme: detectedTheme };
  }
  if (lowerPath === 'security' || lowerPath === 'keamanan') {
    return { tab: 'security', cert: null, theme: detectedTheme };
  }
  if (lowerPath === 'learning' || lowerPath.startsWith('belajar')) {
    return { tab: 'learning', cert: null, theme: detectedTheme };
  }
  if (
    lowerPath === 'blog' ||
    lowerPath.startsWith('blog/') ||
    lowerPath === 'artikel' ||
    lowerPath.startsWith('artikel/')
  ) {
    return { tab: 'blog', cert: null, theme: detectedTheme };
  }
  if (lowerPath === 'tools' || lowerPath === 'alat') {
    return { tab: 'tools', cert: null, theme: detectedTheme };
  }
  if (lowerPath === 'kamus' || lowerPath === 'glossary') {
    return { tab: 'kamus', cert: null, theme: detectedTheme };
  }

  if (lowerPath === 'preview') {
    const params = new URLSearchParams(window.location.search);
    const titleParam = params.get('title') || '';
    const urlParam = params.get('url') || '';

    const matchedCert = CERTIFICATES_DATA.find((c) => {
      if (titleParam && normalizeStr(c.title) === normalizeStr(titleParam)) return true;
      if (urlParam && c.verifyUrl && (c.verifyUrl.includes(encodeURIComponent(urlParam)) || c.verifyUrl.includes(urlParam))) return true;
      return false;
    });

    if (matchedCert) {
      return { tab: 'certificates', cert: matchedCert, theme: detectedTheme };
    }
    return { tab: 'certificates', cert: null, theme: detectedTheme };
  }

  const matchedCert = CERTIFICATES_DATA.find(
    (c) =>
      normalizeStr(c.title) === normalizeStr(pathWithoutTheme) ||
      normalizeStr(c.id) === normalizeStr(pathWithoutTheme)
  );

  if (matchedCert) {
    return { tab: 'certificates', cert: matchedCert, theme: detectedTheme };
  }

  return { tab: 'home', cert: null, theme: detectedTheme };
}

export default function App() {
  const [activeTab, setActiveTab] = useState<SectionId>(() => resolveRouteFromWindow().tab);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [designTheme, setDesignTheme] = useState<DesignTheme>(() => {
    const route = resolveRouteFromWindow();
    if (route.theme) return route.theme;
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('designTheme') as DesignTheme | null;
      if (saved === 'modern' || saved === 'clipboard' || saved === 'arcade') {
        return saved;
      }
    }
    return 'arcade'; // Corporation theme
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
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(
    () => resolveRouteFromWindow().cert
  );
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

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

  // Persist designTheme & sync URL prefix
  const handleChangeDesignTheme = (theme: DesignTheme) => {
    setDesignTheme(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('designTheme', theme);
      const nextPath = getRoutePath(activeTab, theme);
      window.history.pushState(null, '', nextPath);
    }
  };

  // Dynamic document.title synchronization (fixes tab title desync)
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (selectedCertificate) {
      document.title = `${selectedCertificate.title} — Sertifikat Resmi fitran.dev`;
      return;
    }
    switch (activeTab) {
      case 'certificates':
        document.title = '36+ Sertifikat & Kredensial Resmi — fitran.dev';
        break;
      case 'services':
        if (typeof window !== 'undefined') {
          const p = window.location.pathname.toLowerCase();
          if (p.includes('autopilot')) {
            document.title = 'Sistem Bisnis Digital Autopilot Juara — fitran.dev';
          } else if (p.includes('bisnis-kuliner')) {
            document.title = 'Solusi Digital Bisnis Kuliner & F&B — fitran.dev';
          } else if (p.includes('retail-lokal')) {
            document.title = 'Solusi Toko Online Retail Lokal — fitran.dev';
          } else if (p.includes('manufaktur-b2b')) {
            document.title = 'Solusi Portal Manufaktur B2B & RFQ — fitran.dev';
          } else if (p.includes('komunitas')) {
            document.title = 'Website & Portal Keanggotaan Komunitas — fitran.dev';
          } else if (p.includes('yayasan')) {
            document.title = 'Portal Donasi & Laporan Akuntabel Yayasan — fitran.dev';
          } else if (p.includes('klinik-kesehatan')) {
            document.title = 'Website & Sistem Booking Janji Temu Klinik — fitran.dev';
          } else if (p.includes('umkm')) {
            document.title = 'Solusi Go Digital Sentra UMKM Juara — fitran.dev';
          } else {
            document.title = 'Layanan & Solusi Digital Perusahaan — fitran.dev';
          }
        } else {
          document.title = 'Layanan & Solusi Digital Perusahaan — fitran.dev';
        }
        break;
      case 'learning':
        document.title = 'Studio Belajar AI, Ads & Vibe Coding — fitran.dev';
        break;
      case 'blog':
        document.title = 'Blog Rekayasa Web, AI & Keamanan — fitran.dev';
        break;
      case 'work':
        document.title = 'Portofolio Proyek Rekayasa Sistem — fitran.dev';
        break;
      case 'tools':
        document.title = 'Tools & Toolkit Harian — fitran.dev';
        break;
      case 'kamus':
        document.title = 'Kamus Istilah Digital & AI — fitran.dev';
        break;
      case 'about':
        document.title = 'Tentang Tubagus Fitran Badruttamam — fitran.dev';
        break;
      default:
        document.title = 'fitran.dev — Tubagus Fitran Badruttamam | Fullstack Developer & AI Engineer';
        break;
    }
  }, [activeTab, selectedCertificate]);

  // Resolve pathname into activeTab, theme and selectedCertificate
  const syncRouteFromLocation = useCallback(() => {
    const resolved = resolveRouteFromWindow();
    setSelectedCertificate(resolved.cert);
    setActiveTab(resolved.tab);
    if (resolved.theme && resolved.theme !== designTheme) {
      setDesignTheme(resolved.theme);
      if (typeof window !== 'undefined') {
        localStorage.setItem('designTheme', resolved.theme);
      }
    }
  }, [designTheme]);

  useEffect(() => {
    window.addEventListener('popstate', syncRouteFromLocation);
    return () => window.removeEventListener('popstate', syncRouteFromLocation);
  }, [syncRouteFromLocation]);

  useEffect(() => {
    const handleOpenMenu = () => setIsCommandMenuOpen(true);
    window.addEventListener('open-command-menu', handleOpenMenu);
    return () => window.removeEventListener('open-command-menu', handleOpenMenu);
  }, []);

  const handleNavigate = (sectionId: SectionId, customPath?: string) => {
    setSelectedCertificate(null);
    setActiveTab(sectionId);
    const nextPath = customPath || getRoutePath(sectionId, designTheme);
    window.history.pushState(null, '', nextPath);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('app-route-change'));
    }

    if (nextPath.includes('#')) {
      const hash = nextPath.split('#')[1];
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 120);
      return;
    }

    if (designTheme === 'arcade') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleSelectCertificate = (cert: CertificateItem) => {
    setSelectedCertificate(cert);
    setActiveTab('certificates');
    const longCertPath = getCertPreviewPath(cert);
    window.history.pushState(null, '', longCertPath);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleCloseCertificate = () => {
    setSelectedCertificate(null);
    setActiveTab('certificates');
    window.history.pushState(null, '', '/certificates');
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  // Root theme background styles for the 3 Website Design Themes
  const rootThemeClass =
    designTheme === 'clipboard'
      ? 'bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#E0E7FF] dark:from-[#070913] dark:via-[#0F172A] dark:to-[#090D16] text-slate-900 dark:text-slate-100'
      : designTheme === 'arcade'
        ? 'bg-[#FAFAFB] dark:bg-[#0B0D12] text-zinc-900 dark:text-zinc-100'
        : 'bg-[#FAFAFA] dark:bg-[#09090B] bg-dot-grid text-zinc-900 dark:text-zinc-100';

  const rootThemeInlineStyle: React.CSSProperties | undefined =
    designTheme === 'clipboard'
      ? {
          backgroundImage:
            'radial-gradient(rgba(79, 70, 229, 0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }
      : undefined;

  const pageTransitionKey = selectedCertificate
    ? `cert-${selectedCertificate.id}`
    : `tab-${activeTab}-${designTheme}`;

  return (
    <LanguageProvider>
      <TextStyleProvider>
        <div
        style={rootThemeInlineStyle}
        className={`min-h-screen w-full max-w-full transition-colors duration-300 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900 flex flex-col ${rootThemeClass}`}
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
        <main className="flex-1 w-full max-w-full">
          <ErrorBoundary onReset={() => handleNavigate('home')}>
            <div key={pageTransitionKey} className="animate-page-enter">
              {/* DEDICATED CERTIFICATE PAGE (/<Certificate Title>) */}
              {selectedCertificate ? (
                <CertificateModal
                  cert={selectedCertificate}
                  allCerts={CERTIFICATES_DATA}
                  onClose={handleCloseCertificate}
                  onSelectCert={handleSelectCertificate}
                  designTheme={designTheme}
                />
              ) : designTheme === 'arcade' ||
                activeTab === 'services' ||
                activeTab === 'learning' ||
                activeTab === 'blog' ||
                activeTab === 'tools' ||
                activeTab === 'kamus' ||
                activeTab === 'security' ? (
                <KlasikEcosystemView
                  activePage={activeTab}
                  onNavigate={handleNavigate}
                  onOpenCV={() => setIsCVModalOpen(true)}
                  onSelectCertificate={handleSelectCertificate}
                  onSelectProject={(p) => setSelectedProject(p)}
                  designTheme={designTheme}
                />
              ) : (
                <>
                  {/* PAGE 1: BERANDA (/) */}
                  {activeTab === 'home' && (
                    <div>
                      <Hero
                        onNavigate={handleNavigate}
                        designTheme={designTheme}
                        onChangeDesignTheme={handleChangeDesignTheme}
                        onOpenCV={() => setIsCVModalOpen(true)}
                      />

                      <ScrollReveal variant="fade-up" delay={40}>
                        <LogoMarquee />
                      </ScrollReveal>

                      <ScrollReveal variant="zoom-in" delay={60}>
                        <section className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#09090B]/95 py-14">
                          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                              <div>
                                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">
                                  Terminal Interaktif: Eksplorasi Kode &amp; Profil Fitran
                                </h2>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl leading-relaxed">
                                  Ini adalah terminal code untuk mengetahui informasi tentang saya. Silakan pilih opsi yang tersedia atau ketik langsung di terminal — sistem akan menganalisis pertanyaan, melalui proses coding/tool use, dan menyajikan jawaban teks lengkap seperti Claude Code CLI asli.
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

                      <ScrollReveal variant="fade-up" delay={60}>
                        <SpotifyPlaylist designTheme={designTheme} />
                      </ScrollReveal>

                      <WorkSection
                        onSelectProject={(p) => setSelectedProject(p)}
                        designTheme={designTheme}
                      />

                      <CertificatesSection
                        onSelectCert={handleSelectCertificate}
                        designTheme={designTheme}
                      />
                    </div>
                  )}

                  {/* PAGE 2: ABOUT ME (/about-me) */}
                  {activeTab === 'about' && (
                    <div>
                      <Hero
                        onNavigate={handleNavigate}
                        designTheme={designTheme}
                        onChangeDesignTheme={handleChangeDesignTheme}
                        onOpenCV={() => setIsCVModalOpen(true)}
                      />
                      <ScrollReveal variant="fade-up" delay={50}>
                        <LogoMarquee />
                      </ScrollReveal>
                      <AboutSection designTheme={designTheme} />
                      <ScrollReveal variant="fade-up" delay={80}>
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
                    <WorkSection
                      onSelectProject={(p) => setSelectedProject(p)}
                      designTheme={designTheme}
                    />
                  )}

                  {/* PAGE 4: CERTIFICATES & LICENSES (/certificates) */}
                  {activeTab === 'certificates' && (
                    <CertificatesSection
                      onSelectCert={handleSelectCertificate}
                      designTheme={designTheme}
                    />
                  )}

                  {/* PAGE 5: ECOSYSTEM & COMMUNITY (/ecosystem) */}
                  {activeTab === 'ecosystem' && (
                    <AboutSection designTheme={designTheme} />
                  )}

                  {/* PAGE 6: CRAFT LAB & FITRAN CLI (/craft-lab) */}
                  {activeTab === 'craft-lab' && (
                    <ScrollReveal variant="zoom-in">
                      <div className="py-10 bg-white/95 dark:bg-[#09090B]/95">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white font-heading tracking-tight">
                              Terminal Interaktif: Eksplorasi Kode &amp; Profil Fitran
                            </h1>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-3xl leading-relaxed font-mono">
                              Ini adalah terminal code untuk mengetahui informasi tentang saya. Silakan pilih atau ketik perintah: sistem akan menganalisis, melalui proses codingan internal, hingga menghasilkan jawaban teks yang lengkap selayaknya Claude Code asli.
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
            </div>
          </ErrorBoundary>
        </main>

        {/* Full-Width Footer with 3D Interactive Phone & Collaboration Form */}
        {designTheme !== 'arcade' && (
          <ContactFooter
            onNavigate={handleNavigate}
            onOpenCV={() => setIsCVModalOpen(true)}
            designTheme={designTheme}
          />
        )}

        {/* Official CV Viewer & PDF Download Modal */}
        <CVModal
          isOpen={isCVModalOpen}
          onClose={() => setIsCVModalOpen(false)}
        />

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
      </TextStyleProvider>
    </LanguageProvider>
  );
}
