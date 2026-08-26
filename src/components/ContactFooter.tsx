import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BrandIcon } from './BrandIcon';
import { SectionId } from '../types';
import { TechStackTerminal } from './TechStackTerminal';
import {
  ArrowUp,
  MapPin,
  Sparkles,
} from 'lucide-react';

interface ContactFooterProps {
  onNavigate: (section: SectionId) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="bg-zinc-900 text-white pt-16 pb-12 border-t border-zinc-800 relative overflow-hidden"
    >
      {/* Background accent glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Main CTA Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between pb-12 border-b border-zinc-800">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Let's Build Something Together</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Open to collaboration, freelance & engineering opportunities.
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
              Whether you are architecting a new web product, exploring industrial AI systems, or looking for a high-output self-driven engineer to join your technical team.
            </p>
          </div>

          {/* Interactive Typed Code Template Box */}
          <div className="lg:col-span-5 w-full">
            <TechStackTerminal />
            <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-400 px-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Cilegon, Banten, Indonesia (GMT+7)</span>
              </div>
              <span className="text-zinc-500 font-mono">v2.4.0 • Node v20+</span>
            </div>
          </div>
        </div>

        {/* Social Platforms Row with signature Grayscale-to-Color hover */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
          <div className="flex items-center gap-4">
            <span className="text-xs text-zinc-400 font-medium mr-1">Connect on:</span>

            {/* GitHub */}
            <a
              id="social-github-link"
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700/60 hover:border-zinc-500 transition-all transform hover:-translate-y-0.5"
              title="GitHub Profile"
            >
              <BrandIcon name="github" size={18} className="text-white" />
              <span className="text-xs font-semibold text-zinc-300 group-hover:text-white">
                GitHub
              </span>
            </a>

            {/* LinkedIn */}
            <a
              id="social-linkedin-link"
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700/60 hover:border-zinc-500 transition-all transform hover:-translate-y-0.5"
              title="LinkedIn Profile"
            >
              <BrandIcon name="linkedin" size={18} />
              <span className="text-xs font-semibold text-zinc-300 group-hover:text-white">
                LinkedIn
              </span>
            </a>

            {/* Instagram */}
            <a
              id="social-instagram-link"
              href={PERSONAL_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700/60 hover:border-zinc-500 transition-all transform hover:-translate-y-0.5"
              title="Instagram Profile"
            >
              <BrandIcon name="instagram" size={18} />
              <span className="text-xs font-semibold text-zinc-300 group-hover:text-white">
                Instagram
              </span>
            </a>

            {/* Google Drive Certificates */}
            <a
              id="social-drive-certs-link"
              href={PERSONAL_INFO.socialLinks.certificatesDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-950/40 hover:bg-blue-900/60 border border-blue-800/60 hover:border-blue-500 transition-all transform hover:-translate-y-0.5"
              title="Google Drive Folder (All Certificates)"
            >
              <span className="text-blue-400 font-bold text-xs">Drive</span>
              <span className="text-xs font-semibold text-blue-200 group-hover:text-white">
                Certificates
              </span>
            </a>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors"
            >
              About
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('work')}
              className="hover:text-white transition-colors"
            >
              Work
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('certificates')}
              className="hover:text-white transition-colors"
            >
              Certificates
            </button>
          </div>
        </div>

        {/* Bottom copyright line & Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-800/80 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Tubagus Fitran Badruttamam. Designed with typography-first precision.</p>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
