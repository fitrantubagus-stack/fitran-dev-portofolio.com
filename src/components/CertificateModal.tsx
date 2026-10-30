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
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto font-mono text-xs"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 12 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white dark:bg-[#09090B] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold text-[10px]">
                [{cert.category.toUpperCase().replace('-', ' & ')}]
              </span>
              {cert.featured && (
                <span className="flex items-center gap-1 px-2 py-0.5 font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 text-[10px]">
                  <Award className="w-3 h-3" />
                  HIGHLIGHT
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                id="modal-prev-btn"
                onClick={handlePrev}
                aria-label="Previous certificate"
                className="p-1 border border-zinc-300 dark:border-zinc-700 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                title="Previous (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-zinc-400">
                {currentIndex + 1} / {allCerts.length}
              </span>
              <button
                id="modal-next-btn"
                onClick={handleNext}
                aria-label="Next certificate"
                className="p-1 border border-zinc-300 dark:border-zinc-700 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                title="Next (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="w-px h-4 bg-zinc-300 dark:border-zinc-700 mx-1"></div>
              <button
                id="modal-close-btn"
                onClick={onClose}
                aria-label="Close modal"
                className="p-1 border border-zinc-300 dark:border-zinc-700 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                title="Close (Escape)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-5 sm:p-7 overflow-y-auto space-y-5">
            {/* Visual Certificate Graphic */}
            <div className="border border-zinc-300 dark:border-zinc-700 shadow-xs max-w-3xl mx-auto w-full">
              <CertificatePreview cert={cert} size="full" />
            </div>

            {/* Metadata & Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-3 border-t border-zinc-200 dark:border-zinc-800">
              <div className="md:col-span-2 space-y-3">
                <div>
                  <h3
                    className={`font-bold text-base sm:text-lg ${
                      cert.isVerifiedMatch
                        ? 'text-yellow-600 dark:text-yellow-400'
                        : 'text-zinc-900 dark:text-white'
                    }`}
                  >
                    {cert.isVerifiedMatch && (
                      <span className="inline-block px-2 py-0.5 mr-2 rounded text-xs font-mono font-bold bg-yellow-400/20 text-yellow-600 dark:text-yellow-400 border border-yellow-500/40">
                        ✓ Sesuai PDF
                      </span>
                    )}
                    {cert.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed font-sans">
                    {cert.description}
                  </p>
                </div>

                {cert.skillsLearned && cert.skillsLearned.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Verified Competencies & Domains
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skillsLearned.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs border border-zinc-300 dark:border-zinc-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Info Card */}
              <div className="bg-zinc-50 dark:bg-zinc-900 p-4 border border-zinc-300 dark:border-zinc-800 space-y-3 text-xs">
                <div className="flex items-start gap-2 text-zinc-600 dark:text-zinc-300">
                  <Building className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase">Issuer</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">
                      {cert.issuerFullName}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-zinc-600 dark:text-zinc-300">
                  <Calendar className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase">Issue Date</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {cert.certId && (
                  <div className="flex items-start gap-2 text-zinc-600 dark:text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                    <div className="w-full">
                      <span className="text-zinc-400 block text-[10px] uppercase">Certificate ID</span>
                      <div className="flex items-center justify-between gap-1 mt-0.5 bg-white dark:bg-zinc-950 px-2 py-1 border border-zinc-300 dark:border-zinc-700 text-[11px]">
                        <span className="truncate text-zinc-800 dark:text-zinc-200">
                          {cert.certId}
                        </span>
                        <button
                          onClick={copyCertId}
                          className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white p-0.5"
                          title="Copy Certificate ID"
                        >
                          {copiedId ? (
                            <Check className="w-3 h-3 text-emerald-600" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-2 space-y-1.5">
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-xs hover:opacity-90 transition-opacity"
                    >
                      <span>[ VERIFY PUBLIC RECORD ]</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <a
                    href={CERTIFICATES_DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800 font-bold text-xs transition-colors"
                  >
                    <FolderOpen className="w-3 h-3" />
                    <span>[ GOOGLE DRIVE ARCHIVE ]</span>
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
