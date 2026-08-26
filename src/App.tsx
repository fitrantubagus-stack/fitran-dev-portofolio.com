import React, { useState, useEffect } from 'react';
import { CertificateItem, ProjectItem, SectionId } from './types';
import { CERTIFICATES_DATA } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WorkSection } from './components/WorkSection';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactFooter } from './components/ContactFooter';
import { CertificateModal } from './components/CertificateModal';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
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

  // Section Observer for active nav highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], footer[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-[#0C0D0E] text-[#121212] dark:text-[#E4E4E7] transition-colors duration-300">
      {/* Top Persistent Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero & High-Impact Credentials Strip */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. Selected Work / Projects */}
        <WorkSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 3. About, Education, Experience & Google Dev Card */}
        <AboutSection />

        {/* 4. Certificates & Achievements */}
        <CertificatesSection onSelectCert={(c) => setSelectedCertificate(c)} />
      </main>

      {/* Persistent Footer with Signature Grayscale-to-Color Social Links */}
      <ContactFooter onNavigate={handleNavigate} />

      {/* Interactive Lightbox / Modal for Certificates */}
      <CertificateModal
        cert={selectedCertificate}
        allCerts={CERTIFICATES_DATA}
        onClose={() => setSelectedCertificate(null)}
        onSelectCert={(c) => setSelectedCertificate(c)}
      />

      {/* Case Study & Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
