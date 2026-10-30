import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS_DATA, CERTIFICATES_DATA, CERTIFICATES_DRIVE_URL } from '../data/portfolioData';
import { ProjectItem, CertificateItem } from '../types';
import {
  Search,
  X,
  FileCode,
  Award,
  ExternalLink,
  Laptop,
  Globe,
  ArrowRight,
  FolderOpen,
  Layers,
  Terminal,
} from 'lucide-react';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onSelectProject?: (project: ProjectItem) => void;
  onSelectCert?: (cert: CertificateItem) => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({
  isOpen,
  onClose,
  activeTab,
  onSelectTab,
  onSelectProject,
  onSelectCert,
}) => {
  const { language, setLanguage } = useLanguage();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          const event = new CustomEvent('open-command-menu');
          window.dispatchEvent(event);
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tabs = [
    { id: 'overview', label: language === 'id' ? 'Ringkasan & Hero' : 'Overview & Hero', icon: Laptop },
    { id: 'projects', label: language === 'id' ? 'Katalog Proyek Rekayasa' : 'Engineering Projects Catalog', icon: FileCode },
    { id: 'credentials', label: language === 'id' ? 'Sertifikat & Penghargaan' : 'Credentials & Awards', icon: Award },
    { id: 'ecosystem', label: language === 'id' ? 'Ekosistem & Dampak Sosial' : 'Ecosystem & Impact', icon: Layers },
    { id: 'craft-lab', label: language === 'id' ? 'Fitran CLI & Interactive Lab' : 'Fitran CLI & Interactive Lab', icon: Terminal },
  ];

  const filteredTabs = tabs.filter((t) =>
    t.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = PROJECTS_DATA.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.tagline.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some((tech) => tech.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 4);

  const filteredCerts = CERTIFICATES_DATA.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.issuer.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 4);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#0D1117] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-200 dark:border-zinc-800">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'id' ? 'Cari halaman, proyek, sertifikat, atau aksi... (Ctrl+K)' : 'Search pages, projects, certs, or actions... (Ctrl+K)'}
            className="w-full bg-transparent text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-4">
          {/* Navigation Pages */}
          {filteredTabs.length > 0 && (
            <div>
              <p className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {language === 'id' ? 'Halaman & Tampilan' : 'Pages & Views'}
              </p>
              <div className="space-y-1">
                {filteredTabs.map((t) => {
                  const Icon = t.icon;
                  const isActive = activeTab === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        onSelectTab(t.id);
                        onClose();
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-semibold'
                          : 'hover:bg-zinc-100 dark:hover:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-zinc-400" />
                        <span>{t.label}</span>
                      </div>
                      {isActive ? (
                        <span className="text-[10px] font-mono bg-blue-100 dark:bg-blue-900/60 px-2 py-0.5 rounded">
                          Active
                        </span>
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-400 opacity-60" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div>
            <p className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              {language === 'id' ? 'Aksi Cepat' : 'Quick Actions'}
            </p>
            <div className="space-y-1">
              <button
                onClick={() => {
                  setLanguage(language === 'id' ? 'en' : 'id');
                  onClose();
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span>
                    {language === 'id' ? 'Ubah Bahasa ke English' : 'Switch Language to Bahasa Indonesia'}
                  </span>
                </div>
                <span className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                  {language}
                </span>
              </button>

              <a
                href={CERTIFICATES_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <FolderOpen className="w-4 h-4 text-amber-500" />
                  <span>Google Drive Portfolio Folder</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <p className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {language === 'id' ? 'Proyek Unggulan' : 'Featured Projects'}
              </p>
              <div className="space-y-1">
                {filteredProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      if (onSelectProject) onSelectProject(p);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer"
                  >
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-white">{p.name}</p>
                      <p className="text-[11px] text-zinc-500 line-clamp-1">{p.tagline}</p>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-400 shrink-0 ml-2">
                      {p.type}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Credentials */}
          {filteredCerts.length > 0 && (
            <div>
              <p className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {language === 'id' ? 'Sertifikat & Akreditasi' : 'Credentials & Accreditations'}
              </p>
              <div className="space-y-1">
                {filteredCerts.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      if (onSelectCert) onSelectCert(c);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer"
                  >
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-white">{c.title}</p>
                      <p className="text-[11px] text-zinc-500">{c.issuerFullName}</p>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 shrink-0 ml-2">
                      {c.issuer}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <span>Navigation: <kbd className="bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">↑</kbd> <kbd className="bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">↓</kbd></span>
            <span>Select: <kbd className="bg-zinc-200 dark:bg-zinc-800 px-1 py-0.5 rounded">↵</kbd></span>
          </div>
          <span>Tubagus Fitran Badruttamam</span>
        </div>
      </div>
    </div>
  );
};
