import React, { useState } from 'react';
import { CertificateItem } from '../types';
import { CERTIFICATES_DATA, CERTIFICATES_DRIVE_URL, PERSONAL_INFO } from '../data/portfolioData';
import { ScrambleText } from './ScrambleText';
import { useLanguage } from '../context/LanguageContext';
import {
  ExternalLink,
  ShieldCheck,
  FolderOpen,
  Copy,
  Check,
  Award,
  Wallet,
} from 'lucide-react';

interface CertificatesSectionProps {
  onSelectCert: (cert: CertificateItem) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onSelectCert }) => {
  const [selectedIssuer, setSelectedIssuer] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { t, language } = useLanguage();

  const issuers = [
    { id: 'all', label: t.credentials.all },
    { id: 'Google', label: t.credentials.googleEcosystem },
    { id: 'CloudAI', label: t.credentials.cloudAi },
    { id: 'Academic', label: t.credentials.academic },
  ];

  const filteredCerts = CERTIFICATES_DATA.filter((cert) => {
    if (selectedIssuer === 'all') return true;
    if (selectedIssuer === 'Google') return cert.issuer === 'Google' || cert.issuer === 'Google Skills';
    if (selectedIssuer === 'CloudAI')
      return (
        cert.issuer === 'AWS' ||
        cert.issuer === 'NVIDIA' ||
        cert.issuer === 'Meta' ||
        cert.issuer === 'Vercel' ||
        cert.issuer === 'Anthropic' ||
        cert.issuer === 'Claude Academy' ||
        cert.issuer === 'Dicoding'
      );
    if (selectedIssuer === 'Academic') return cert.category === 'academic' || cert.category === 'publications';
    return true;
  });

  const handleCopyId = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getIssuerBadgeClass = (issuer: string) => {
    switch (issuer) {
      case 'Anthropic':
      case 'Claude Academy':
        return 'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-800/80';
      case 'Dicoding':
        return 'bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border-sky-300 dark:border-sky-800/80';
      case 'Belajar Era Digital':
        return 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800/80';
      case 'Indonesia Baik':
        return 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-800/80';
      case 'AWS':
        return 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800/80';
      case 'Google':
      case 'Google Skills':
        return 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-800/80';
      case 'NVIDIA':
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800/80';
      case 'Meta':
        return 'bg-sky-50 dark:bg-sky-950/40 text-[#0081FB] border-sky-300 dark:border-sky-800/80';
      case 'Vercel':
        return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700';
      default:
        return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700';
    }
  };

  return (
    <section id="certificates" className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-[#09090B]/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title & Action Links */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/70 dark:bg-blue-950/30 text-blue-800 dark:text-blue-300 font-mono text-xs mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>{t.credentials.badge}</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">
              <ScrambleText text={t.credentials.title} scrambleSpeed={20} />
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              {t.credentials.subtitle}
            </p>
          </div>

          {/* Action Links: Google Skillshop Wallet + Google Drive */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={PERSONAL_INFO.socialLinks.googleSkillshopWallet}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-mono text-xs font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors shadow-2xs"
            >
              <Wallet className="w-3.5 h-3.5" />
              <span>Skillshop Wallet</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a
              href={CERTIFICATES_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-mono text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-2xs"
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span>{t.credentials.viewDrive}</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 font-mono text-xs mt-6 mb-8">
          {issuers.map((issuer) => (
            <button
              key={issuer.id}
              onClick={() => setSelectedIssuer(issuer.id)}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                selectedIssuer === issuer.id
                  ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold shadow-xs'
                  : 'border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              {issuer.label}
            </button>
          ))}
        </div>

        {/* Credentials Grid: 3 Columns on Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onSelectCert(cert)}
              className="group flex flex-col justify-between p-5 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#0D1117] hover:border-zinc-400 dark:hover:border-zinc-600 transition-all shadow-xs hover:shadow-lg cursor-pointer"
            >
              <div>
                {/* Issuer Badge + Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${getIssuerBadgeClass(
                        cert.issuer
                      )}`}
                    >
                      {cert.issuer}
                    </span>
                    {cert.isVerifiedMatch && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-yellow-400/15 text-yellow-600 dark:text-yellow-400 border border-yellow-500/40">
                        SESUAI
                      </span>
                    )}
                  </div>

                  <span className="font-mono text-[11px] text-zinc-400">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-bold text-sm sm:text-base leading-snug line-clamp-2 mb-2 transition-colors ${
                    cert.isVerifiedMatch
                      ? 'text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-500 dark:group-hover:text-yellow-300'
                      : 'text-zinc-950 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                  }`}
                >
                  {cert.isVerifiedMatch && (
                    <span
                      className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-1.5 align-middle animate-pulse"
                      title="Sesuai PDF"
                    />
                  )}
                  {cert.title}
                </h3>

                {/* Issuer Organization */}
                <p className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mb-3">
                  {cert.issuerFullName}
                </p>

                {/* Description */}
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                {cert.skillsLearned && cert.skillsLearned.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skillsLearned.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 font-mono text-[10px] text-zinc-600 dark:text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer: Cert ID + Verification Link */}
              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between font-mono text-xs">
                {/* Cert ID if available */}
                {cert.certId ? (
                  <button
                    onClick={(e) => handleCopyId(e, cert.certId!)}
                    className="flex items-center gap-1 text-[11px] text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                    title="Click to copy credential ID"
                  >
                    {copiedId === cert.certId ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="truncate max-w-[120px]">{cert.certId}</span>
                      </>
                    )}
                  </button>
                ) : (
                  <span className="text-[11px] text-zinc-400">Verified Issuer</span>
                )}

                {/* Verify Button */}
                <div className="flex items-center gap-1.5">
                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/60 font-semibold flex items-center gap-1 text-[11px] transition-colors"
                    >
                      <ShieldCheck className="w-3 h-3" />
                      <span>{t.credentials.verify}</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onSelectCert(cert)}
                      className="px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-[11px] font-medium"
                    >
                      {t.credentials.viewDetails}
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
