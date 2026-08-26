import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectLogo } from './ProjectLogos';
import {
  ExternalLink,
  Layers,
  ArrowRight,
  Sparkles,
  Code,
  Eye,
  CheckCircle,
  FileText,
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

  const displayedProjects = isHomePreview
    ? PROJECTS_DATA.slice(0, 3)
    : activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'AI & Data', label: 'AI & Industrial Systems' },
    { id: 'Web & Mobile', label: 'Web Applications' },
    { id: 'Frontend Engineering', label: 'Client Engineering' },
  ];

  return (
    <section
      id={isHomePreview ? 'featured-work' : 'work'}
      className="py-16 sm:py-24 border-b border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-zinc-500" />
              <span>{isHomePreview ? 'Featured Work' : 'Engineering Portfolio'}</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white">
              {isHomePreview ? 'Featured Shipped Projects' : 'Selected Works & Case Studies'}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
              Real shipped applications and high-impact industrial prototypes — demonstrating full lifecycle execution from UX architecture to cloud deployment.
            </p>
          </div>

          {!isHomePreview && (
            <div className="flex flex-wrap gap-1.5 bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl border border-zinc-200/70 dark:border-zinc-800 self-start md:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeFilter === cat.id
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs font-semibold'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group flex flex-col justify-between bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-5 sm:p-6 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              {/* Top Header inside Card */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <ProjectLogo id={project.id} size={48} />
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {project.category}
                    </span>
                    {project.type === 'live' && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Live
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mt-1">
                  {project.tagline}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2.5 line-clamp-3 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Technologies & Actions */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 rounded text-[10px] font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-zinc-400 text-[10px] font-mono">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    id={`view-study-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white py-1.5 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </button>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#18181B] dark:bg-white text-white dark:text-zinc-900 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                    >
                      <span>Prototype Deliverable</span>
                    </button>
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
