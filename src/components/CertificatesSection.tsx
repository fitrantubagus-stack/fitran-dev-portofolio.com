import React, { useState } from 'react';
import { CertificateItem } from '../types';
import { CERTIFICATES_DATA, CERTIFICATES_DRIVE_URL, PERSONAL_INFO } from '../data/portfolioData';
import { ScrambleText } from './ScrambleText';
import { CertificatePreview } from './CertificatePreview';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import {
  ExternalLink,
  ShieldCheck,
  FolderOpen,
  Copy,
  Check,
  Award,
  Wallet,
  FileText,
  ArrowUpRight,
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
    if (selectedIssuer === 'Google')
      return (
        cert.issuer === 'Google' ||
        cert.issuer === 'Google Skills' ||
        cert.issuer === 'Google Developer Program'
      );
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
    if (selectedIssuer === 'Academic')
      return cert.category === 'academic' || cert.category === 'publications';
    return true;
  });

  const handleCopyId = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderIssuerLogo = (cert: CertificateItem) => {
    if (cert.issuer === 'AWS') {
      return (
        <div className="inline-flex items-center gap-2 bg-white px-2.5 py-1 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
          <img
            src="/official-aws-logo.png"
            alt="AWS"
            className="h-5 sm:h-6 w-auto object-contain"
          />
          <span className="w-0.5 h-4 bg-zinc-300" />
          <img
            src="/official-aws-skill-builder.png"
            alt="AWS Skill Builder"
            className="h-7 sm:h-8 w-auto object-contain scale-115"
          />
          <span className="font-mono font-black text-[11px] text-zinc-900 uppercase tracking-wider">
            AWS
          </span>
        </div>
      );
    }

    if (cert.issuer === 'NVIDIA' || cert.title.toUpperCase().includes('NVIDIA')) {
      return (
        <div className="inline-flex items-center gap-2 bg-white px-2.5 py-1 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
          <img
            src="/official-nvidia-logo.png"
            alt="NVIDIA"
            className="h-6 sm:h-7 w-auto object-contain scale-110"
          />
          <span className="font-mono font-black text-[11px] text-[#1E2265] uppercase tracking-wider">
            NVIDIA
          </span>
        </div>
      );
    }

    if (cert.issuer === 'Google Developer Program') {
      return (
        <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-black uppercase tracking-wider bg-blue-100 text-[#1E2265] border-2 border-black shadow-[2px_2px_0px_#000]">
          GOOGLE DEV PROGRAM
        </span>
      );
    }

    if (cert.issuer === 'Google' || cert.issuer === 'Google Skills') {
      return (
        <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-black uppercase tracking-wider bg-sky-100 text-blue-950 border-2 border-black shadow-[2px_2px_0px_#000]">
          {cert.issuer}
        </span>
      );
    }

    if (cert.issuer === 'Anthropic' || cert.issuer === 'Claude Academy') {
      return (
        <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-black uppercase tracking-wider bg-amber-100 text-amber-950 border-2 border-black shadow-[2px_2px_0px_#000]">
          {cert.issuer}
        </span>
      );
    }

    return (
      <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-black uppercase tracking-wider bg-purple-100 text-purple-950 border-2 border-black shadow-[2px_2px_0px_#000]">
        {cert.issuer}
      </span>
    );
  };

  return (
    <section
      id="certificates"
      className="w-full border-y-4 border-black bg-[#FFFBEB] py-14 relative overflow-hidden"
    >
      {/* Subtle Formal Dot Pattern Overlay (Inspired by kelurahanbulakan.web.id/pelayanan) */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1E2265 1.25px, transparent 1.25px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* FORMAL ROYAL NAVY BANNER HEADER (Kelurahan Bulakan Pelayanan Aesthetic) */}
        <div className="bg-gradient-to-br from-[#1E2265] via-blue-900 to-[#1E2265] text-white border-4 border-black rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_#000] relative overflow-hidden mb-8">
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
              backgroundSize: '18px 18px',
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-300 text-black border-2 border-black font-mono text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_#000] mb-4">
                <Award className="w-4 h-4 stroke-[2.5]" />
                <span>{t.credentials.badge}</span>
              </div>

              <div className="font-mono text-xs text-yellow-200 flex items-center gap-1.5 mb-1.5 select-none">
                <span className="text-pink-300 font-bold">type</span>
                <span className="text-sky-300 font-bold">OfficialCredentialsRegistry</span>
                <span className="text-white">=</span>
              </div>

              <div className="inline-block bg-zinc-950/90 px-4 py-2 rounded-2xl border-2 border-black shadow-[4px_4px_0px_#FACC15] mb-3">
                <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                  <ScrambleText text={t.credentials.title} />
                </h2>
              </div>

              <p className="text-sm sm:text-base text-blue-100 font-medium max-w-2xl leading-relaxed">
                {t.credentials.subtitle}
              </p>
            </div>

            {/* Action Links: Google Skillshop Wallet + Google Drive */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={PERSONAL_INFO.socialLinks.googleSkillshopWallet}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-black bg-yellow-300 hover:bg-yellow-400 text-black font-mono text-xs font-black uppercase tracking-wide shadow-[4px_4px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000] transition-all"
              >
                <Wallet className="w-4 h-4 stroke-[2.5]" />
                <span>Accredible Wallet</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              <a
                href={CERTIFICATES_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-black bg-white hover:bg-amber-50 text-[#1E2265] font-mono text-xs font-black uppercase tracking-wide shadow-[4px_4px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000] transition-all"
              >
                <FolderOpen className="w-4 h-4 stroke-[2.5]" />
                <span>{t.credentials.viewDrive}</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>

        {/* OFFICIAL DEVELOPER BADGES & MULTI-CLOUD LOGOS SHOWCASE BAR */}
        <div className="bg-white border-3 border-black rounded-3xl p-5 sm:p-6 shadow-[6px_6px_0px_#1E2265] mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b-2 border-black/10">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-[#1E2265] text-yellow-300 font-mono text-[11px] font-black uppercase border border-black">
                RESMI & TERVERIFIKASI
              </span>
              <h3 className="font-heading font-black text-sm sm:text-base text-zinc-950">
                {language === 'id'
                  ? 'Ekosistem Lisensi Resmi & Lencana Komunitas Pengembang'
                  : 'Official Cloud Ecosystems & Verified Developer Badges'}
              </h3>
            </div>
            <span className="font-mono text-xs font-bold text-zinc-600">
              {CERTIFICATES_DATA.length}{' '}
              {language === 'id' ? 'Dokumen & Lencana Aktif' : 'Active Credentials'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {/* 1. GDG on Campus Member */}
            <a
              href="https://me.developers.google.com/badges/community/gdg/GDGoC/member"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-3 rounded-2xl border-2 border-black bg-[#FFFBEB] hover:bg-yellow-100/80 shadow-[3px_3px_0px_#000] transition-all"
            >
              <img
                src="/certificates/badge-gdg-campus-member.svg"
                alt="GDG on Campus"
                className="w-14 h-14 object-contain shrink-0 group-hover:scale-110 transition-transform"
              />
              <div className="min-w-0">
                <p className="font-heading font-black text-xs text-zinc-950 leading-tight">
                  GDG on Campus
                </p>
                <p className="font-mono text-[10px] text-blue-800 font-bold mt-0.5 flex items-center gap-1">
                  <span>Official Member</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </p>
              </div>
            </a>

            {/* 2. Firebase Studio */}
            <a
              href="https://me.developers.google.com/badges/community/firebasestudio/firebase-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-3 rounded-2xl border-2 border-black bg-[#FFFBEB] hover:bg-amber-100/80 shadow-[3px_3px_0px_#000] transition-all"
            >
              <img
                src="/certificates/badge-firebase-studio.svg"
                alt="Firebase Studio"
                className="w-14 h-14 object-contain shrink-0 group-hover:scale-110 transition-transform"
              />
              <div className="min-w-0">
                <p className="font-heading font-black text-xs text-zinc-950 leading-tight">
                  Firebase Studio
                </p>
                <p className="font-mono text-[10px] text-amber-800 font-bold mt-0.5 flex items-center gap-1">
                  <span>Verified Badge</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </p>
              </div>
            </a>

            {/* 3. NVIDIA Developer */}
            <a
              href="https://me.developers.google.com/badges/nvidia-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 p-3 rounded-2xl border-2 border-black bg-white hover:bg-emerald-50 shadow-[3px_3px_0px_#000] transition-all"
            >
              <img
                src="/certificates/badge-nvidia-developer.svg"
                alt="NVIDIA Developer Badge"
                className="w-12 h-12 object-contain shrink-0 group-hover:scale-110 transition-transform"
              />
              <div className="min-w-0">
                <img
                  src="/official-nvidia-logo.png"
                  alt="NVIDIA"
                  className="h-6 w-auto object-contain mb-0.5"
                />
                <p className="font-mono text-[10px] text-emerald-800 font-black flex items-center gap-1">
                  <span>NVIDIA Developer</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </p>
              </div>
            </a>

            {/* 4. Google Maps Platform Innovators */}
            <a
              href="https://me.developers.google.com/badges/community/innovators/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-3 rounded-2xl border-2 border-black bg-[#FFFBEB] hover:bg-red-50 shadow-[3px_3px_0px_#000] transition-all"
            >
              <img
                src="/certificates/badge-google-maps-innovators.svg"
                alt="Google Maps Innovators"
                className="w-14 h-14 object-contain shrink-0 group-hover:scale-110 transition-transform"
              />
              <div className="min-w-0">
                <p className="font-heading font-black text-xs text-zinc-950 leading-tight">
                  Maps Innovators
                </p>
                <p className="font-mono text-[10px] text-red-700 font-bold mt-0.5 flex items-center gap-1">
                  <span>Innovator Member</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </p>
              </div>
            </a>

            {/* 5. Dual AWS Official Logos */}
            <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl border-2 border-black bg-white shadow-[3px_3px_0px_#000]">
              <img
                src="/official-aws-logo.png"
                alt="Amazon Web Services"
                className="h-8 sm:h-9 w-auto object-contain shrink-0"
              />
              <span className="w-0.5 h-8 bg-zinc-300 shrink-0" />
              <img
                src="/official-aws-skill-builder.png"
                alt="AWS Skill Builder"
                className="h-11 sm:h-12 w-auto object-contain scale-115 shrink-0"
              />
            </div>
          </div>
        </div>

        {/* FILTER TABS (Formal Neo-Brutalist Buttons) */}
        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs mb-8">
          {issuers.map((issuer) => {
            const isActive = selectedIssuer === issuer.id;
            return (
              <button
                key={issuer.id}
                onClick={() => setSelectedIssuer(issuer.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-black font-black transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1E2265] text-yellow-300 shadow-[4px_4px_0px_#000] -translate-y-0.5'
                    : 'bg-white text-zinc-900 hover:bg-yellow-100 shadow-[3px_3px_0px_#000]'
                }`}
              >
                {issuer.id === 'CloudAI' && (
                  <span className="inline-flex items-center gap-1.5 bg-white px-1.5 py-0.5 rounded-md border border-black">
                    <img
                      src="/official-aws-logo.png"
                      alt="AWS"
                      className="h-3.5 w-auto object-contain"
                    />
                    <img
                      src="/official-aws-skill-builder.png"
                      alt="AWS Skill Builder"
                      className="h-4 w-auto object-contain scale-125"
                    />
                    <img
                      src="/official-nvidia-logo.png"
                      alt="NVIDIA"
                      className="h-4 w-auto object-contain"
                    />
                  </span>
                )}
                <span>{issuer.label}</span>
              </button>
            );
          })}
        </div>

        {/* CREDENTIALS GRID: Formal White Cards with Navy Offset Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <ScrollReveal key={cert.id} variant="fade-up" delay={(index % 3) * 65}>
            <div
              onClick={() => onSelectCert(cert)}
              className="group h-full flex flex-col justify-between p-5 rounded-3xl border-3 border-black bg-white shadow-[6px_6px_0px_#1E2265] hover:shadow-[8px_8px_0px_#000] hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1E2265] via-blue-700 to-yellow-400 border-b border-black" />

              <div className="pt-2">
                {/* Card Top Number + Issuer Badge + Date */}
                <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-lg bg-[#1E2265] text-white border-2 border-black font-mono text-xs font-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
                      #{index + 1}
                    </span>
                    {renderIssuerLogo(cert)}
                  </div>

                  <span className="px-2.5 py-0.5 rounded-lg bg-[#FFFBEB] border border-black font-mono text-[11px] font-bold text-zinc-800">
                    {cert.date}
                  </span>
                </div>

                {/* Visual Certificate / Badge Thumbnail on Card (PURE LIGHT BACKGROUND, NO BLACK BARS) */}
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 bg-white border-2 border-black flex items-center justify-center p-2 relative shadow-[3px_3px_0px_#1E2265] group-hover:shadow-[4px_4px_0px_#FACC15] transition-all">
                  <CertificatePreview cert={cert} size="compact" />
                </div>

                {/* Verified Match Status Pill */}
                {cert.isVerifiedMatch && (
                  <div className="mb-2 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-black bg-yellow-300 text-black border-2 border-black shadow-[2px_2px_0px_#000]">
                      ✓ SESUAI DOKUMEN ASLI
                    </span>
                  </div>
                )}

                {/* Title (Yellow Text on Royal Navy Pill when Verified Match, as requested) */}
                <div
                  className={`mb-2.5 rounded-xl p-2.5 border-2 border-black transition-colors ${
                    cert.isVerifiedMatch
                      ? 'bg-[#1E2265] text-yellow-300 shadow-[3px_3px_0px_#000]'
                      : 'bg-zinc-100 text-zinc-950'
                  }`}
                >
                  <h3
                    className={`font-heading font-black text-sm sm:text-base leading-snug line-clamp-2 ${
                      cert.isVerifiedMatch ? 'text-yellow-300' : 'text-zinc-950'
                    }`}
                  >
                    {cert.title}
                  </h3>
                </div>

                {/* Issuer Organization with Large NVIDIA / Dual AWS Logos if applicable */}
                <div className="flex items-center gap-2 mb-2.5">
                  {cert.issuer === 'NVIDIA' && (
                    <img
                      src="/official-nvidia-logo.png"
                      alt="NVIDIA"
                      className="h-5 w-auto object-contain shrink-0"
                    />
                  )}
                  {cert.issuer === 'AWS' && (
                    <span className="inline-flex items-center gap-1 shrink-0">
                      <img
                        src="/official-aws-logo.png"
                        alt="AWS"
                        className="h-4 w-auto object-contain"
                      />
                      <img
                        src="/official-aws-skill-builder.png"
                        alt="AWS Skill Builder"
                        className="h-5 w-auto object-contain"
                      />
                    </span>
                  )}
                  <p className="font-mono text-[11px] font-bold text-[#1E2265] line-clamp-1">
                    {cert.issuerFullName}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-700 font-medium leading-relaxed line-clamp-2 mb-4">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                {cert.skillsLearned && cert.skillsLearned.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skillsLearned.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-lg bg-[#FFFBEB] border border-black font-mono text-[10px] font-bold text-zinc-900"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer: Dedicated Page URL Preview + Verify Button */}
              <div className="pt-3 border-t-2 border-black/15 flex items-center justify-between gap-2 font-mono text-xs">
                {cert.certId ? (
                  <button
                    onClick={(e) => handleCopyId(e, cert.certId!)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-100 hover:bg-yellow-200 border border-black text-[11px] font-bold text-zinc-900 transition-colors"
                    title="Salin ID Sertifikat"
                  >
                    {copiedId === cert.certId ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <span className="text-emerald-800">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="truncate max-w-[105px]">{cert.certId}</span>
                      </>
                    )}
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1E2265]">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Halaman Detail</span>
                  </span>
                )}

                <div className="flex items-center gap-1.5">
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1.5 rounded-xl bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black font-black flex items-center gap-1 text-[11px] shadow-[2px_2px_0px_#000] transition-all"
                      title="Buka Link Verifikasi Resmi"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>{t.credentials.verify}</span>
                    </a>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCert(cert);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-[#1E2265] hover:bg-blue-950 text-white border-2 border-black font-black flex items-center gap-1 text-[11px] shadow-[2px_2px_0px_#000] transition-all cursor-pointer"
                    title={`Buka halaman /${cert.title}`}
                  >
                    <span>Buka</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
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
