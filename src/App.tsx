import React, { useState, useEffect } from 'react';
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

  // Sync hash to activeTab on mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'projects' || hash === 'work') setActiveTab('work');
      else if (hash === 'credentials' || hash === 'certificates') setActiveTab('certificates');
      else if (hash === 'ecosystem' || hash === 'about') setActiveTab('ecosystem');
      else if (hash === 'craft-lab' || hash === 'cli') setActiveTab('craft-lab');
      else if (hash === 'home' || hash === 'overview' || !hash) setActiveTab('home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Listen for custom event from CommandMenu or other triggers
  useEffect(() => {
    const handleOpenMenu = () => setIsCommandMenuOpen(true);
    window.addEventListener('open-command-menu', handleOpenMenu);
    return () => window.removeEventListener('open-command-menu', handleOpenMenu);
  }, []);

  const handleNavigate = (sectionId: SectionId) => {
    setActiveTab(sectionId);
    // Update hash cleanly without reload
    const hashMap: Record<SectionId, string> = {
      home: '#overview',
      work: '#projects',
      certificates: '#credentials',
      ecosystem: '#ecosystem',
      'craft-lab': '#craft-lab',
      about: '#ecosystem',
      contact: '#contact',
    };
    window.history.replaceState(null, '', hashMap[sectionId] || '#');
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

        {/* Dynamic Multi-Page Tab Content */}
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          {/* TAB 1: OVERVIEW & HERO */}
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
                      <span>Open Full Lab</span>
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

              {/* 6. Featured Credentials Teaser */}
              <CertificatesSection onSelectCert={(c) => setSelectedCertificate(c)} />
            </div>
          )}

          {/* TAB 2: PROJECTS CATALOG */}
          {activeTab === 'work' && (
            <div className="animate-in fade-in duration-200">
              <WorkSection onSelectProject={(p) => setSelectedProject(p)} />
            </div>
          )}

          {/* TAB 3: CREDENTIALS & AWARDS */}
          {activeTab === 'certificates' && (
            <div className="animate-in fade-in duration-200">
              <CertificatesSection onSelectCert={(c) => setSelectedCertificate(c)} />
            </div>
          )}

          {/* TAB 4: ECOSYSTEM & COMMUNITY */}
          {activeTab === 'ecosystem' && (
            <div className="animate-in fade-in duration-200">
              <AboutSection />
            </div>
          )}

          {/* TAB 5: CRAFT LAB & FITRAN CLI */}
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
        </main>

        {/* Full-Width Footer with Vibe Coding Laptop */}
        <ContactFooter onNavigate={handleNavigate} />

        {/* Interactive Modals */}
        <CertificateModal
          cert={selectedCertificate}
          allCerts={CERTIFICATES_DATA}
          onClose={() => setSelectedCertificate(null)}
          onSelectCert={(c) => setSelectedCertificate(c)}
        />

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
          onSelectCert={(cert) => setSelectedCertificate(cert)}
        />
      </div>
    </LanguageProvider>
  );
}
