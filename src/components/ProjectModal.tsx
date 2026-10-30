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
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 12 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
            <div className="flex items-center gap-3">
              <ProjectLogo id={project.id} size={32} />
              <div>
                <h3 className="font-mono font-bold text-base text-zinc-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-[11px] font-mono text-zinc-500">{project.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-mono text-xs font-bold hover:opacity-90 transition-opacity"
                >
                  <span>LIVE SITE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                id="project-modal-close"
                onClick={onClose}
                aria-label="Close project modal"
                className="p-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-7 overflow-y-auto space-y-5 font-mono text-xs">
            {/* Tagline & Overview */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-[10px]">
                  {project.category.toUpperCase()}
                </span>
                <span className="text-zinc-400">•</span>
                <span className="text-[11px] text-zinc-500">
                  {project.type === 'live' ? 'PRODUCTION READY' : 'CASE STUDY'}
                </span>
              </div>
              <h4 className="font-bold text-lg sm:text-xl text-zinc-900 dark:text-white">
                {project.tagline}
              </h4>
              <p className="text-zinc-600 dark:text-zinc-300 mt-2.5 leading-relaxed font-sans text-sm">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Key Capabilities & Features</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {project.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5 text-blue-500" />
                  <span>Architecture & Engineering Decisions</span>
                </div>
                <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400 list-disc list-inside p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40">
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
              <div className="flex items-center gap-1.5 text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-wider mb-2">
                <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                <span>Technologies & Stack</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono border border-zinc-300 dark:border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Context / Impact */}
            <div className="p-3 border border-amber-400/40 bg-amber-50/20 dark:bg-amber-950/20 text-zinc-700 dark:text-zinc-300">
              <div className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5 mb-1">
                <FileText className="w-3.5 h-3.5 text-amber-600" />
                <span>Impact & Context</span>
              </div>
              <p>{project.impactOrContext}</p>
            </div>
          </div>

          {/* Footer Call to Action */}
          {project.liveUrl && (
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex justify-end font-mono">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-xs hover:opacity-90 transition-opacity"
              >
                <span>[ LAUNCH LIVE APPLICATION ]</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
