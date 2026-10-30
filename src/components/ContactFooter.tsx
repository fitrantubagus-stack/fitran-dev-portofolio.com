import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SectionId } from '../types';
import { GoogleDeveloperLogo } from './GoogleDeveloperLogo';
import { VibeCodingComputer } from './VibeCodingComputer';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowUp,
  Github,
  Linkedin,
  Instagram,
  Copy,
  Check,
  FolderOpen,
  Mail,
  Heart,
} from 'lucide-react';

interface ContactFooterProps {
  onNavigate: (section: SectionId) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090B] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3D Vibe Coding Desktop Workstation (360° Rotatable) */}
        <VibeCodingComputer className="mb-10" />

        {/* Availability & Direct Connect Callout Card */}
        <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-gradient-to-r from-zinc-50 via-white to-zinc-50 dark:from-[#0D1117] dark:via-zinc-900/60 dark:to-[#0D1117] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <span className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <Mail className="w-6 h-6" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="font-heading font-bold text-lg sm:text-xl text-zinc-950 dark:text-white">
                  {t.footer.readyToBuild}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
                {t.footer.getInTouch}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-mono text-xs font-semibold flex items-center gap-2 transition-all shadow-xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
                  <span>{t.hero.emailCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Social Links & Meta Footer */}
        <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 dark:hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] flex items-center gap-1.5 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.socialLinks.googleDev}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 flex items-center gap-1.5 transition-colors"
            >
              <GoogleDeveloperLogo size={14} />
              <span>Google Developer</span>
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 flex items-center gap-1.5 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-center sm:text-right">
            <span>© 2026 Tubagus Fitran Badruttamam.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-zinc-400">{t.footer.designedWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
