import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ScrambleText } from './ScrambleText';
import { ScrollReveal } from './ScrollReveal';
import { DesignTheme } from './Navbar';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import {
  FolderGit2,
  ArrowUpRight,
  Layers,
  Sparkles,
} from 'lucide-react';

interface WorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  isHomePreview?: boolean;
  designTheme?: DesignTheme;
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

export const WorkSection: React.FC<WorkSectionProps> = ({
  onSelectProject,
  isHomePreview = false,
  designTheme = 'modern',
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'AI & Data' | 'Web & Mobile' | 'Frontend Engineering'>('all');
  const { t } = useLanguage();

  const displayedProjects = isHomePreview
    ? PROJECTS_DATA.slice(0, 3)
    : activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  const categories = [
    { id: 'all', label: t.projects.all },
    { id: 'AI & Data', label: t.projects.aiData },
    { id: 'Web & Mobile', label: t.projects.webApps },
    { id: 'Frontend Engineering', label: t.projects.frontend },
  ];

  const getLanguageColor = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'typescript':
        return 'bg-blue-500';
      case 'javascript':
        return 'bg-yellow-400';
      case 'react':
      case 'next.js':
        return 'bg-cyan-500';
      case 'python':
        return 'bg-emerald-500';
      case 'html5':
      case 'css3':
        return 'bg-orange-500';
      default:
        return 'bg-purple-500';
    }
  };

  // ===========================================================================
  // DESIGN 2: FULL ANIMASI DESAIN (Kinetic Motion Cards & Spotlight Grid)
  // ===========================================================================
  if (designTheme === 'clipboard') {
    return (
      <section
        id="work"
        className="w-full border-b border-indigo-500/20 bg-gradient-to-b from-white/90 via-indigo-50/40 to-white/90 dark:from-[#090D16] dark:via-[#0F172A] dark:to-[#090D16] py-14 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-indigo-200/80 dark:border-indigo-500/30">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-mono text-xs font-bold mb-2 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.projects.badge}</span>
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-950 dark:text-white tracking-tight">
                <ScrambleText text={t.projects.title} scrambleSpeed={20} />
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                {t.projects.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(cat.id as any)}
                  className={`px-4 py-2 rounded-xl transition-all cursor-pointer font-bold ${
                    activeFilter === cat.id
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md'
                      : 'border border-indigo-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {displayedProjects.map((project, idx) => (
              <ScrollReveal key={project.id} variant="fade-up" delay={(idx % 3) * 60}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                  className="group h-full flex flex-col justify-between p-6 rounded-3xl border-2 border-indigo-200/80 dark:border-indigo-500/30 bg-white/95 dark:bg-slate-900/90 hover:border-indigo-500 shadow-[0_12px_35px_rgba(79,70,229,0.08)] hover:shadow-[0_20px_45px_rgba(79,70,229,0.18)] transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400" />

                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3 pt-1">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                          <FolderGit2 className="w-4 h-4" />
                        </span>
                        <h3
                          onClick={() => onSelectProject(project)}
                          className="font-heading font-black text-base text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate cursor-pointer"
                        >
                          {project.name}
                        </h3>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 shrink-0">
                        {project.type === 'live' ? '● Live Web' : 'Case Study'}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-4">
                      {project.tagline}
                    </p>

                    {project.architectureHighlights && project.architectureHighlights.length > 0 && (
                      <div className="mb-4 p-3 rounded-2xl bg-indigo-50/70 dark:bg-slate-800/70 border border-indigo-100 dark:border-slate-700 font-mono text-[11px] text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <Layers className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{project.architectureHighlights[0]}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-indigo-100 dark:border-slate-800 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(project.technologies[0])}`} />
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        {project.technologies[0]}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-slate-700 hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        {t.projects.details}
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold hover:opacity-95 transition-opacity flex items-center gap-1 text-[11px] shadow-xs"
                        >
                          <span>{t.projects.liveDemo}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ===========================================================================
  // DESIGN 3: PROFESIONAL, ELEGAN & KLASIK (Classical Editorial Catalogue)
  // ===========================================================================
  if (designTheme === 'arcade') {
    return (
      <section
        id="work"
        className="w-full border-b-2 border-[#B48A3E]/50 bg-[#FAF7F0] dark:bg-[#111110] py-14"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b-2 border-[#141413] dark:border-[#B48A3E]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#855E1E] dark:text-[#D4AF37] font-bold mb-1">
                KATALOG ARSITEKTUR &amp; SISTEM PRODUKSI
              </p>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">
                {t.projects.title}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
                {t.projects.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id as any)}
                  className={`px-3.5 py-1.5 border transition-all cursor-pointer font-bold ${
                    activeFilter === cat.id
                      ? 'bg-[#1B2A4A] text-white border-[#B48A3E]'
                      : 'border-[#141413]/30 dark:border-[#B48A3E]/40 bg-white dark:bg-[#181816] text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {displayedProjects.map((project, idx) => (
              <ScrollReveal key={project.id} variant="fade-up" delay={(idx % 3) * 60}>
                <div className="group h-full flex flex-col justify-between p-6 bg-white dark:bg-[#181816] border border-[#141413]/30 dark:border-[#B48A3E]/40 hover:border-[#B48A3E] transition-all shadow-xs">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#141413]/15 dark:border-white/10 font-mono text-[11px]">
                      <span className="font-bold text-[#855E1E] dark:text-[#D4AF37]">
                        KARYA {ROMAN[idx] || idx + 1}
                      </span>
                      <span className="uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-semibold">
                        {project.type === 'live' ? 'PRODUKSI AKTIF' : 'STUDI KASUS'}
                      </span>
                    </div>

                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-heading font-black text-lg text-zinc-950 dark:text-white group-hover:text-[#855E1E] dark:group-hover:text-[#D4AF37] transition-colors cursor-pointer mb-2"
                    >
                      {project.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                      {project.tagline}
                    </p>

                    {project.architectureHighlights && project.architectureHighlights.length > 0 && (
                      <div className="mb-4 p-3 bg-[#FAF7F0] dark:bg-[#121210] border-l-2 border-[#B48A3E] font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
                        <span className="line-clamp-2">{project.architectureHighlights[0]}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#141413]/15 dark:border-white/10 flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-[#1B2A4A] dark:text-[#D4AF37]">
                      {project.technologies[0]}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-3 py-1.5 border border-[#141413]/30 dark:border-[#B48A3E]/40 text-zinc-800 dark:text-zinc-200 hover:bg-[#FAF7F0] dark:hover:bg-zinc-900 text-[11px] font-bold cursor-pointer"
                      >
                        {t.projects.details}
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-[#1B2A4A] text-white border border-[#B48A3E] font-bold flex items-center gap-1 text-[11px]"
                        >
                          <span>{t.projects.liveDemo}</span>
                          <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ===========================================================================
  // DESIGN 1 (DEFAULT): MODERN TECH BLUEPRINT
  // ===========================================================================
  return (
    <section id="work" className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#09090B]/70 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 font-mono text-xs mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.projects.badge}</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">
              <ScrambleText text={t.projects.title} scrambleSpeed={20} />
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold shadow-xs'
                    : 'border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 3 Columns on Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {displayedProjects.map((project, idx) => (
            <ScrollReveal key={project.id} variant="fade-up" delay={(idx % 3) * 60}>
              <div className="group h-full flex flex-col justify-between p-5 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#0D1117] hover:border-zinc-400 dark:hover:border-zinc-600 transition-all shadow-xs hover:shadow-lg">
                <div>
                  {/* Header: Repo Icon + Status Tag */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <FolderGit2 className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition-colors shrink-0" />
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="font-bold text-base text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate cursor-pointer"
                      >
                        {project.name}
                      </h3>
                    </div>

                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border shrink-0 ${
                        project.type === 'live'
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700'
                      }`}
                    >
                      {project.type === 'live' ? 'Live Web' : 'Case Study'}
                    </span>
                  </div>

                  {/* Tagline / Subtitle */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                    {project.tagline}
                  </p>

                  {/* Architecture Highlights Pill */}
                  {project.architectureHighlights && project.architectureHighlights.length > 0 && (
                    <div className="mb-4 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800/80 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 flex items-start gap-2">
                      <Layers className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{project.architectureHighlights[0]}</span>
                    </div>
                  )}
                </div>

                {/* Card Footer: Tech Dots + Actions */}
                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between font-mono text-xs">
                  {/* Primary Tech Dot */}
                  <div className="flex items-center gap-2 text-[11px] text-zinc-600 dark:text-zinc-400">
                    <span className={`w-2 h-2 rounded-full ${getLanguageColor(project.technologies[0])}`} />
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">{project.technologies[0]}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-[11px] font-medium cursor-pointer"
                    >
                      {t.projects.details}
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold hover:opacity-90 transition-opacity flex items-center gap-1 text-[11px] shadow-2xs"
                        title={t.projects.liveDemo}
                      >
                        <span>{t.projects.liveDemo}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
