import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ScrambleText } from './ScrambleText';
import { useLanguage } from '../context/LanguageContext';
import {
  FolderGit2,
  ExternalLink,
  ArrowUpRight,
  GitBranch,
  Layers,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface WorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  isHomePreview?: boolean;
}

export const WorkSection: React.FC<WorkSectionProps> = ({
  onSelectProject,
  isHomePreview = false,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'AI & Data' | 'Web & Mobile' | 'Frontend Engineering'>('all');
  const { t, language } = useLanguage();

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
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between p-5 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#0D1117] hover:border-zinc-400 dark:hover:border-zinc-600 transition-all shadow-xs hover:shadow-lg"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};
