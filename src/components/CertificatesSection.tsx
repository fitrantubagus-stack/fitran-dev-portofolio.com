import React, { useState } from 'react';
import { CertificateCategory, CertificateItem } from '../types';
import { CERTIFICATES_DATA, CERTIFICATES_DRIVE_URL } from '../data/portfolioData';
import { CertificatePreview } from './CertificatePreview';
import { BrandIcon } from './BrandIcon';
import {
  Award,
  ExternalLink,
  Sparkles,
  Eye,
  CheckCircle2,
  Calendar,
  BookOpen,
  Filter,
  Medal,
  FolderOpen,
} from 'lucide-react';

interface CertificatesSectionProps {
  onSelectCert: (cert: CertificateItem) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onSelectCert }) => {
  const [activeTab, setActiveTab] = useState<CertificateCategory>('all');

  const featuredHighlights = CERTIFICATES_DATA.filter((c) => c.featured);

  const filteredCerts =
    activeTab === 'all'
      ? CERTIFICATES_DATA
      : CERTIFICATES_DATA.filter((c) => c.category === activeTab);

  const tabs: { id: CertificateCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Credentials', count: CERTIFICATES_DATA.length },
    {
      id: 'cloud-ai',
      label: 'Cloud & AI',
      count: CERTIFICATES_DATA.filter((c) => c.category === 'cloud-ai').length,
    },
    {
      id: 'marketing',
      label: 'Marketing & Analytics',
      count: CERTIFICATES_DATA.filter((c) => c.category === 'marketing').length,
    },
    {
      id: 'academic',
      label: 'Academic Competitions',
      count: CERTIFICATES_DATA.filter((c) => c.category === 'academic').length,
    },
    {
      id: 'publications',
      label: 'Publications & Community',
      count: CERTIFICATES_DATA.filter((c) => c.category === 'publications').length,
    },
  ];

  return (
    <section
      id="certificates"
      className="py-16 sm:py-24 border-b border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-zinc-500" />
              <span>Verifiable Certifications & Honors</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white">
              Certificates & Achievements
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
              An extensive portfolio of verified technical credentials across AWS, NVIDIA, Google Cloud,
              along with national academic competition gold medals and a published national essay.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <a
              href={CERTIFICATES_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FolderOpen className="w-4 h-4" />
              <span>Lihat Seluruh Sertifikat di Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
            </a>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-3 py-2 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60">
              <span>{CERTIFICATES_DATA.length} Total Verified Credentials</span>
            </div>
          </div>
        </div>

        {/* PROMINENT TOP HIGHLIGHTS ROW (3 Strongest Differentiators) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Signature National Highlights</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredHighlights.map((cert) => (
              <div
                key={cert.id}
                id={`highlight-card-${cert.id}`}
                onClick={() => onSelectCert(cert)}
                className="group relative bg-linear-to-b from-amber-50/40 via-white to-amber-50/20 dark:from-zinc-900 dark:via-zinc-900/90 dark:to-zinc-900/70 border-2 border-amber-400/70 dark:border-amber-500/40 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-amber-500 dark:hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                {/* Glow pill badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-500 text-white shadow-xs">
                    {cert.highlightType === 'gold-medal' ? (
                      <>
                        <Medal className="w-3 h-3" />
                        <span>NATIONAL GOLD MEDAL</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-3 h-3" />
                        <span>PUBLISHED AUTHOR</span>
                      </>
                    )}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-zinc-400">
                    {cert.date}
                  </span>
                </div>

                {/* Certificate mini visual container */}
                <div className="my-2 rounded-lg overflow-hidden border border-amber-200/60 dark:border-zinc-700/60 shadow-xs pointer-events-none group-hover:scale-[1.02] transition-transform">
                  <CertificatePreview cert={cert} size="compact" />
                </div>

                <div className="mt-4 pt-3 border-t border-amber-200/50 dark:border-zinc-800 flex items-center justify-between text-xs">
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors">
                    View Full Certificate & Details
                  </span>
                  <Eye className="w-4 h-4 text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Filter className="w-4 h-4 text-zinc-400 mr-1" />
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`cert-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#18181B] dark:bg-white text-white dark:text-zinc-900 font-semibold shadow-xs'
                    : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {tab.label}{' '}
                <span
                  className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${
                    activeTab === tab.id
                      ? 'bg-zinc-700 dark:bg-zinc-200 text-white dark:text-zinc-900'
                      : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                id={`cert-card-${cert.id}`}
                onClick={() => onSelectCert(cert)}
                className="group flex flex-col justify-between bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-5 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                {/* Visual Thumbnail */}
                <div className="rounded-xl overflow-hidden mb-4 border border-zinc-100 dark:border-zinc-800 pointer-events-none group-hover:shadow-xs transition-shadow">
                  <CertificatePreview cert={cert} size="compact" />
                </div>

                {/* Details */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      {cert.issuerFullName}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">{cert.date}</span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer details */}
                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
                  <span className="text-zinc-600 dark:text-zinc-400 font-medium group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                    Inspect credential details
                  </span>
                  {cert.verifyUrl ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                      <span>Verified</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  ) : (
                    <span className="text-[11px] text-zinc-400">Click to view</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Full Archive Google Drive Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-linear-to-r from-blue-50 via-indigo-50/40 to-emerald-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900 border-2 border-blue-200/80 dark:border-blue-900/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-white dark:bg-zinc-800 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 shadow-xs shrink-0">
                <FolderOpen className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-base sm:text-lg text-zinc-900 dark:text-white">
                  Ingin melihat seluruh sertifikat dan berkas aslinya?
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                  Akses seluruh berkas PDF, piagam kejuaraan beresolusi tinggi, dan lembar verifikasi resmi secara lengkap di folder Google Drive kami.
                </p>
              </div>
            </div>

            <a
              href={CERTIFICATES_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#18181B] dark:bg-white text-white dark:text-zinc-900 rounded-xl font-semibold text-xs sm:text-sm shadow-md hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shrink-0 w-full md:w-auto"
            >
              <span>Buka Google Drive Lengkap</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
