import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { ProjectLogo } from './ProjectLogos';
import {
  X,
  ExternalLink,
  CheckCircle,
  Layers,
  Sparkles,
  Terminal,
  FileText,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-modal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80">
            <div className="flex items-center gap-3">
              <ProjectLogo id={project.id} size={36} />
              <div>
                <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-xs text-zinc-500">{project.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#18181B] dark:bg-white text-white dark:text-zinc-900 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                id="project-modal-close"
                onClick={onClose}
                aria-label="Close project modal"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Tagline & Overview */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {project.category}
                </span>
                <span className="text-xs text-zinc-400">•</span>
                <span className="text-xs font-medium text-zinc-500">
                  {project.type === 'live' ? 'Production Deployment' : 'Engineering Case Study'}
                </span>
              </div>
              <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-zinc-900 dark:text-white">
                {project.tagline}
              </h4>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-heading font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Key Capabilities & Features</span>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {project.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-heading font-bold text-sm">
                  <Layers className="w-4 h-4 text-blue-500" />
                  <span>Technical & Architectural Decisions</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 list-disc list-inside bg-zinc-50/50 dark:bg-zinc-800/40 p-4 rounded-xl border border-zinc-200/50 dark:border-zinc-700/40">
                  {project.architectureHighlights.map((arch, i) => (
                    <li key={i} className="leading-relaxed">
                      {arch}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div>
              <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-heading font-bold text-xs uppercase tracking-wider mb-2">
                <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                <span>Technologies & Frameworks</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-md text-xs font-mono font-medium border border-zinc-200/70 dark:border-zinc-700/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Context / Impact */}
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              <div className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5 mb-1">
                <FileText className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Impact & Context</span>
              </div>
              <p>{project.impactOrContext}</p>
            </div>
          </div>

          {/* Footer Call to Action */}
          {project.liveUrl && (
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#18181B] dark:bg-white text-white dark:text-zinc-900 rounded-xl text-xs sm:text-sm font-semibold hover:opacity-90 transition-all shadow-xs"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
