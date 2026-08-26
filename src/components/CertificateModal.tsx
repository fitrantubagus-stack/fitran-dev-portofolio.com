import React, { useEffect, useState } from 'react';
import { CertificateItem } from '../types';
import { CERTIFICATES_DRIVE_URL } from '../data/portfolioData';
import { CertificatePreview } from './CertificatePreview';
import {
  X,
  ExternalLink,
  Copy,
  Check,
  Award,
  Calendar,
  Building,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CertificateModalProps {
  cert: CertificateItem | null;
  allCerts: CertificateItem[];
  onClose: () => void;
  onSelectCert: (cert: CertificateItem) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  cert,
  allCerts,
  onClose,
  onSelectCert,
}) => {
  const [copiedId, setCopiedId] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && cert) {
        handleNext();
      } else if (e.key === 'ArrowLeft' && cert) {
        handlePrev();
      }
    };

    if (cert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert]);

  if (!cert) return null;

  const currentIndex = allCerts.findIndex((c) => c.id === cert.id);
  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectCert(allCerts[currentIndex - 1]);
    } else {
      onSelectCert(allCerts[allCerts.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < allCerts.length - 1) {
      onSelectCert(allCerts[currentIndex + 1]);
    } else {
      onSelectCert(allCerts[0]);
    }
  };

  const copyCertId = () => {
    if (cert.certId) {
      navigator.clipboard.writeText(cert.certId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div
        id="certificate-modal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/70">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                {cert.category.toUpperCase().replace('-', ' & ')}
              </span>
              {cert.featured && (
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                  <Award className="w-3 h-3" />
                  Featured Highlight
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                id="modal-prev-btn"
                onClick={handlePrev}
                aria-label="Previous certificate"
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                title="Previous (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-zinc-400 font-mono">
                {currentIndex + 1} / {allCerts.length}
              </span>
              <button
                id="modal-next-btn"
                onClick={handleNext}
                aria-label="Next certificate"
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                title="Next (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-700 mx-1"></div>
              <button
                id="modal-close-btn"
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                title="Close (Escape)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
            {/* Visual Certificate Graphic */}
            <div className="rounded-xl overflow-hidden shadow-md max-w-3xl mx-auto w-full">
              <CertificatePreview cert={cert} size="full" />
            </div>

            {/* Metadata & Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-zinc-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {cert.skillsLearned && cert.skillsLearned.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                      Verified Competencies & Domains
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsLearned.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-md text-xs font-medium border border-zinc-200/60 dark:border-zinc-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Info Card */}
              <div className="bg-zinc-50 dark:bg-zinc-800/60 p-4 rounded-xl border border-zinc-200/70 dark:border-zinc-700/50 space-y-3.5 text-xs">
                <div className="flex items-start gap-2 text-zinc-600 dark:text-zinc-300">
                  <Building className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-400 block text-[10px]">Issuer</span>
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {cert.issuerFullName}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-zinc-600 dark:text-zinc-300">
                  <Calendar className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-400 block text-[10px]">Issue Date</span>
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {cert.date}
                    </span>
                    {cert.validUntil && (
                      <span className="text-[10px] text-zinc-500 block">
                        Valid until: {cert.validUntil}
                      </span>
                    )}
                  </div>
                </div>

                {cert.certId && (
                  <div className="flex items-start gap-2 text-zinc-600 dark:text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div className="w-full">
                      <span className="text-zinc-400 block text-[10px]">Certificate ID</span>
                      <div className="flex items-center justify-between gap-1 mt-0.5 bg-white dark:bg-zinc-900 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700 font-mono text-[11px]">
                        <span className="truncate text-zinc-800 dark:text-zinc-200">
                          {cert.certId}
                        </span>
                        <button
                          onClick={copyCertId}
                          className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white p-0.5"
                          title="Copy Certificate ID"
                        >
                          {copiedId ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-2 space-y-2">
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-[#18181B] hover:bg-zinc-800 text-white rounded-lg font-medium text-xs shadow-xs transition-colors"
                    >
                      <span>Verify Public Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={CERTIFICATES_DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded-lg font-semibold text-xs transition-colors"
                  >
                    <FolderOpen className="w-3.5 h-3.5" />
                    <span>Buka Google Drive Lengkap</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
