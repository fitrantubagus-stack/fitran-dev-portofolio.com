import React, { useState, useEffect, useCallback } from 'react';
import { CertificateItem, ProjectItem, SectionId } from './types';
import { Navbar } from './components/Navbar';
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
import { CERTIFICATES_DATA } from './data/portfolioData';
import { LanguageProvider } from './context/LanguageContext';
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
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
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

  // Resolve pathname (and legacy hash if present) into activeTab or selectedCertificate
  const syncRouteFromLocation = useCallback(() => {
    if (typeof window === 'undefined') return;

    // If user visited a legacy hash URL like /#craft-lab, convert it cleanly to /craft-lab without '#'
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

    // Check if the path matches any certificate title or ID (e.g. "/Data Engineering on AWS - Foundations")
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

    // Default fallback
    setSelectedCertificate(null);
    setActiveTab('home');
  }, []);

  useEffect(() => {
    syncRouteFromLocation();
    window.addEventListener('popstate', syncRouteFromLocation);
    return () => window.removeEventListener('popstate', syncRouteFromLocation);
  }, [syncRouteFromLocation]);

  // Listen for custom event from CommandMenu or other triggers
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
    // Set clean URL path to /<Certificate Title> without '#'
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

  return (
    <LanguageProvider>
      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FAFAFA] dark:bg-[#09090B] bg-dot-grid text-zinc-900 dark:text-zinc-100 transition-colors duration-200 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900 flex flex-col">
        {/* Full-width Sticky Navbar */}
        <Navbar
          activeSection={activeTab}
          onNavigate={handleNavigate}
          isDark={isDark}
          onToggleTheme={() => setIsDark(!isDark)}
          onOpenCommandMenu={() => setIsCommandMenuOpen(true)}
        />

        {/* Dynamic Multi-Page Content */}
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          {/* DEDICATED CERTIFICATE PAGE (/<Certificate Title>) */}
          {selectedCertificate ? (
            <div className="animate-in fade-in duration-200">
              <CertificateModal
                cert={selectedCertificate}
                allCerts={CERTIFICATES_DATA}
                onClose={handleCloseCertificate}
                onSelectCert={handleSelectCertificate}
              />
            </div>
          ) : (
            <>
              {/* PAGE 1: BERANDA (/) */}
              {activeTab === 'home' && (
                <div className="animate-in fade-in duration-200">
                  {/* 1. Full-Width Hero with ScrambleText & Interactive 3D Isometric "TF" Monogram */}
                  <Hero onNavigate={handleNavigate} />

                  {/* 2. Full-Bleed Infinite Running Logo Marquee (AWS, Google Dev, UMBanten, Meta, Vercel, NVIDIA) */}
                  <LogoMarquee />

                  {/* 3. Interactive Claude Code 3D Terminal Showcase */}
                  <section className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090B] py-14">
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

                      {/* 3D Perspective CLI Window */}
                      <ClaudeCodeTerminal3D />
                    </div>
                  </section>

                  {/* 4. GitHub Contribution Heatmap Matrix */}
                  <div className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <GitHubContributionGraph />
                    </div>
                  </div>

                  {/* 5. Featured Projects Showcase */}
                  <WorkSection onSelectProject={(p) => setSelectedProject(p)} isHomePreview={true} />

                  {/* 6. Featured Credentials Registry */}
                  <CertificatesSection onSelectCert={handleSelectCertificate} />
                </div>
              )}

              {/* PAGE 2: ABOUT ME (/about-me) */}
              {activeTab === 'about' && (
                <div className="animate-in fade-in duration-200">
                  <Hero onNavigate={handleNavigate} />
                  <LogoMarquee />
                  <AboutSection />
                  <div className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <GitHubContributionGraph />
                    </div>
                  </div>
                </div>
              )}

              {/* PAGE 3: PROJECTS CATALOG (/projects) */}
              {activeTab === 'work' && (
                <div className="animate-in fade-in duration-200">
                  <WorkSection onSelectProject={(p) => setSelectedProject(p)} />
                </div>
              )}

              {/* PAGE 4: CERTIFICATES & LICENSES (/certificates) */}
              {activeTab === 'certificates' && (
                <div className="animate-in fade-in duration-200">
                  <CertificatesSection onSelectCert={handleSelectCertificate} />
                </div>
              )}

              {/* PAGE 5: ECOSYSTEM & COMMUNITY (/ecosystem) */}
              {activeTab === 'ecosystem' && (
                <div className="animate-in fade-in duration-200">
                  <AboutSection />
                </div>
              )}

              {/* PAGE 6: CRAFT LAB & FITRAN CLI (/craft-lab) */}
              {activeTab === 'craft-lab' && (
                <div className="animate-in fade-in duration-200 py-10">
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
                    {/* 3D CLI Terminal */}
                    <ClaudeCodeTerminal3D />

                    {/* Quick commands documentation */}
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
              )}

              {/* PAGE 7: CONTACT (/contact) */}
              {activeTab === 'contact' && (
                <div className="animate-in fade-in duration-200 py-4" />
              )}
            </>
          )}
        </main>

        {/* Full-Width Footer with Collaboration Form & Vibe Coding Laptop */}
        <ContactFooter onNavigate={handleNavigate} />

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Shadcn-inspired Command Launcher Dialog (Ctrl+K) */}
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
