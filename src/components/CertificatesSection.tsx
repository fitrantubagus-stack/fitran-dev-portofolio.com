import React, { useState } from 'react';
import { CertificateItem } from '../types';
import { CERTIFICATES_DATA, CERTIFICATES_DRIVE_URL, PERSONAL_INFO } from '../data/portfolioData';
import { ScrambleText } from './ScrambleText';
import { CertificatePreview } from './CertificatePreview';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { useTextStyle } from '../context/TextStyleContext';
import { DesignTheme } from './Navbar';
import { CertificateLogoMarquee } from './CertificateLogoMarquee';
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
  Sparkles,
  Landmark,
} from 'lucide-react';

interface CertificatesSectionProps {
  onSelectCert: (cert: CertificateItem) => void;
  designTheme?: DesignTheme;
}

const toRoman = (num: number): string => {
  const romans: [number, string][] = [
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  let result = '';
  let n = num;
  for (const [val, sym] of romans) {
    while (n >= val) {
      result += sym;
      n -= val;
    }
  }
  return result;
};

const getTargetUrl = (url?: string): string | undefined => {
  if (!url) return undefined;
  if (url.includes('/preview?') && url.includes('url=')) {
    try {
      const parsed = new URL(url);
      const target = parsed.searchParams.get('url');
      if (target) return target;
    } catch {
      // fallback
    }
  }
  return url;
};

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({
  onSelectCert,
  designTheme = 'modern',
}) => {
  const [selectedIssuer, setSelectedIssuer] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { t, language } = useLanguage();
  const { isCodingMode } = useTextStyle();

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

    if (
      cert.issuer === 'Anthropic' ||
      cert.issuer === 'Claude Academy' ||
      cert.title.toLowerCase().includes('claude')
    ) {
      return (
        <div className="inline-flex items-center gap-2 bg-white px-2.5 py-1 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] overflow-hidden">
          <img
            src="/official-claude-logo.png"
            alt="Claude"
            className="h-6 sm:h-7 w-auto object-contain scale-135"
          />
          <span className="w-0.5 h-4 bg-zinc-300" />
          <img
            src="/official-anthropic-logo.png"
            alt="Anthropic"
            className="h-5 sm:h-5.5 w-auto object-contain"
          />
          <span className="font-mono font-black text-[10px] text-zinc-900 uppercase tracking-wider">
            ANTHROPIC
          </span>
        </div>
      );
    }

    if (cert.issuer === 'Vercel') {
      return (
        <div className="inline-flex items-center gap-2 bg-white px-2.5 py-1 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] overflow-hidden">
          <img
            src="/official-vercel-logo.png"
            alt="Vercel"
            className="h-6 sm:h-7 w-auto object-contain scale-120"
          />
        </div>
      );
    }

    if (cert.issuer === 'Meta') {
      return (
        <div className="inline-flex items-center gap-2 bg-white px-2.5 py-1 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] overflow-hidden">
          <img
            src="/official-meta-logo.png"
            alt="Meta"
            className="h-6 sm:h-7 w-auto object-contain scale-125"
          />
          <span className="font-mono font-black text-[10px] text-[#0081FB] uppercase tracking-wider">
            BLUEPRINT
          </span>
        </div>
      );
    }

    if (
      cert.issuer === 'Google Skills' ||
      cert.issuerFullName.toLowerCase().includes('google cloud') ||
      cert.title.toLowerCase().includes('google cloud')
    ) {
      return (
        <div className="inline-flex items-center gap-2 bg-white px-2.5 py-1 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
          <img
            src="/official-google-cloud-logo.png"
            alt="Google Cloud"
            className="h-6 sm:h-7 w-auto object-contain"
          />
          <span className="w-0.5 h-4 bg-zinc-300" />
          <img
            src="/official-gcp-logo.png"
            alt="Google Cloud Platform"
            className="h-6 sm:h-7 w-auto object-contain"
          />
          <span className="font-mono font-black text-[10px] text-[#1E2265] uppercase tracking-wider">
            GOOGLE CLOUD
          </span>
        </div>
      );
    }

    if (cert.issuer === 'Perpusnas') {
      return (
        <div className="inline-flex items-center gap-2 bg-white px-2.5 py-1 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
          <img
            src="/official-perpusnas-press-logo.png"
            alt="Perpusnas Press"
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </div>
      );
    }

    if (cert.issuer === 'OSN') {
      return (
        <div className="inline-flex items-center gap-2 bg-white px-2.5 py-1 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
          <img
            src="/official-osn-logo.png"
            alt="Olimpiade Sains Nasional (OSN)"
            className="h-6 sm:h-7 w-auto object-contain"
          />
          <span className="font-mono font-black text-[10px] text-[#1E2265] uppercase tracking-wider">
            OSN NASIONAL
          </span>
        </div>
      );
    }

    if (cert.issuer === 'Belajar Era Digital') {
      return (
        <div className="inline-flex items-center gap-2 bg-white px-2.5 py-1 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
          <img
            src="/official-belajar-era-digital-logo.png"
            alt="Belajar Era Digital"
            className="h-6 sm:h-7 w-6 sm:w-7 rounded-md object-cover border border-black/20"
          />
          <span className="font-mono font-black text-[10px] text-[#053B50] uppercase tracking-wider">
            BELAJAR ERA DIGITAL
          </span>
        </div>
      );
    }

    if (cert.issuer === 'Indonesia Baik') {
      return (
        <div className="inline-flex items-center gap-2 bg-white px-2.5 py-1 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
          <img
            src="/official-sohib-logo.png"
            alt="SohIB Indonesia.go.id"
            className="h-6 sm:h-7 w-auto object-contain scale-115"
          />
          <span className="font-mono font-black text-[10px] text-[#0066A2] uppercase tracking-wider">
            SOHIB • INDONESIAGOID
          </span>
        </div>
      );
    }

    if (cert.issuer === 'Central Course') {
      return (
        <div className="inline-flex items-center gap-2 bg-white px-2.5 py-1 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
          <img
            src="/official-central-course-logo.png"
            alt="Central Course TOEFL"
            className="h-6 sm:h-7 w-auto object-contain"
          />
          <span className="font-mono font-black text-[10px] text-[#854D0E] uppercase tracking-wider">
            CENTRAL COURSE • TOEFL
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

    if (cert.issuer === 'Google') {
      return (
        <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-black uppercase tracking-wider bg-sky-100 text-blue-950 border-2 border-black shadow-[2px_2px_0px_#000]">
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

  const isAnimasi = designTheme === 'clipboard';
  const isKlasik = designTheme === 'arcade';

  return (
    <section
      id="certificates"
      className={`w-full py-14 relative overflow-hidden transition-colors duration-500 ${
        isAnimasi
          ? 'bg-gradient-to-br from-[#060913] via-[#0F172A] to-[#090D1C] text-white border-y-2 border-indigo-500/40'
          : isKlasik
          ? 'bg-[#F7F3E8] dark:bg-[#121110] text-zinc-900 dark:text-stone-100 border-y-2 border-[#B48A3E]'
          : 'border-y-4 border-black bg-[#FFFBEB] py-14'
      }`}
    >
      {/* Background Overlays per Theme */}
      {isAnimasi ? (
        <>
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none animate-pulse" />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(99,102,241,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,182,212,0.14) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />
        </>
      ) : isKlasik ? (
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(180,138,62,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(180,138,62,0.12) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      ) : (
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#1E2265 1.25px, transparent 1.25px)',
            backgroundSize: '22px 22px',
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION BANNER HEADER (Distinct for Modern, Animasi, Klasik) */}
        <div
          className={`relative overflow-hidden mb-8 transition-all ${
            isAnimasi
              ? 'bg-slate-900/90 backdrop-blur-xl text-white border-2 border-indigo-500/50 rounded-3xl p-6 sm:p-10 shadow-[0_0_45px_rgba(79,70,229,0.28)]'
              : isKlasik
              ? 'bg-[#FDFBF7] dark:bg-[#1A1816] text-zinc-900 dark:text-stone-100 border-2 border-[#B48A3E] rounded-none p-6 sm:p-10 shadow-md'
              : 'bg-gradient-to-br from-[#1E2265] via-blue-900 to-[#1E2265] text-white border-4 border-black rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_#000]'
          }`}
        >
          {isAnimasi && (
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500" />
          )}
          {isKlasik && (
            <div className="absolute inset-1.5 border border-[#B48A3E]/35 pointer-events-none" />
          )}
          {!isAnimasi && !isKlasik && (
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
                backgroundSize: '18px 18px',
              }}
            />
          )}

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 font-mono text-xs font-black uppercase tracking-wider mb-4 ${
                  isAnimasi
                    ? 'rounded-full bg-indigo-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                    : isKlasik
                    ? 'rounded-none bg-[#1C1917] text-[#E5C158] border border-[#B48A3E] tracking-[0.2em]'
                    : 'rounded-full bg-yellow-300 text-black border-2 border-black shadow-[3px_3px_0px_#000]'
                }`}
              >
                {isAnimasi ? (
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                ) : isKlasik ? (
                  <Landmark className="w-4 h-4 text-[#E5C158]" />
                ) : (
                  <Award className="w-4 h-4 stroke-[2.5]" />
                )}
                <span>{t.credentials.badge}</span>
              </div>

              {!isKlasik && isCodingMode && (
                <div className="font-mono text-xs text-yellow-200 flex items-center gap-1.5 mb-1.5 select-none">
                  <span className={isAnimasi ? 'text-cyan-400 font-bold' : 'text-pink-300 font-bold'}>
                    type
                  </span>
                  <span className="text-sky-300 font-bold">HonorArchive</span>
                  <span className="text-white">=</span>
                </div>
              )}

              <div
                className={
                  isAnimasi
                    ? 'inline-block bg-gradient-to-r from-indigo-950/90 via-slate-900 to-cyan-950/80 px-5 py-2.5 rounded-2xl border border-cyan-400/40 shadow-[0_0_25px_rgba(6,182,212,0.2)] mb-3'
                    : isKlasik
                    ? 'block border-b-2 border-[#B48A3E]/50 pb-3 mb-3'
                    : 'inline-block bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border-2 border-yellow-300/60 shadow-[4px_4px_0px_rgba(250,204,21,0.3)] mb-3'
                }
              >
                <h2
                  className={`font-heading font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight ${
                    isKlasik ? 'font-serif text-zinc-900 dark:text-stone-100' : 'text-white'
                  }`}
                >
                  <ScrambleText text={t.credentials.title} />
                </h2>
              </div>

              <p
                className={`text-sm sm:text-base font-medium max-w-2xl leading-relaxed ${
                  isAnimasi
                    ? 'text-slate-300'
                    : isKlasik
                    ? 'text-zinc-700 dark:text-stone-300 font-serif italic'
                    : 'text-blue-100'
                }`}
              >
                {t.credentials.subtitle}
              </p>
            </div>

            {/* Action Links: Google Skillshop Wallet + Google Drive */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={PERSONAL_INFO.socialLinks.googleSkillshopWallet}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs font-black uppercase tracking-wide transition-all ${
                  isAnimasi
                    ? 'rounded-xl border border-cyan-400/50 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:scale-105'
                    : isKlasik
                    ? 'rounded-none border-2 border-[#B48A3E] bg-[#1C1917] text-[#E5C158] hover:bg-[#B48A3E] hover:text-black'
                    : 'rounded-xl border-2 border-black bg-yellow-300 hover:bg-yellow-400 text-black shadow-[4px_4px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000]'
                }`}
              >
                <Wallet className="w-4 h-4 stroke-[2.5]" />
                <span>Accredible Wallet</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              <a
                href={CERTIFICATES_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs font-black uppercase tracking-wide transition-all ${
                  isAnimasi
                    ? 'rounded-xl border border-indigo-400/40 bg-slate-800/90 hover:bg-slate-700 text-cyan-300'
                    : isKlasik
                    ? 'rounded-none border-2 border-zinc-800 dark:border-stone-500 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-stone-100 hover:border-[#B48A3E]'
                    : 'rounded-xl border-2 border-black bg-white hover:bg-amber-50 text-[#1E2265] shadow-[4px_4px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000]'
                }`}
              >
                <FolderOpen className="w-4 h-4 stroke-[2.5]" />
                <span>{t.credentials.viewDrive}</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>

        {/* HORIZONTAL CONTINUOUS MOVING LOGO MARQUEE (MATCHING USER IMAGE 4) */}
        <div className="mb-8 p-4 sm:p-5 rounded-3xl bg-white/80 dark:bg-[#111319]/80 border-2 border-black/80 dark:border-zinc-800 shadow-[4px_4px_0px_#000] dark:shadow-none">
          <CertificateLogoMarquee
            title={language === 'id' ? 'Lembaga Penerbit & Ekosistem Terverifikasi' : 'Accredited Issuers & Global Ecosystems'}
            subtitle={language === 'id' ? 'Kredensial dan lisensi resmi dari mitra teknologi global' : 'Official credentials from global tech leaders'}
          />
        </div>

        {/* OFFICIAL DEVELOPER BADGES & MULTI-CLOUD LOGOS SHOWCASE BAR */}
        <div
          className={`p-5 sm:p-6 mb-8 transition-all ${
            isAnimasi
              ? 'bg-slate-900/85 backdrop-blur-xl border-2 border-indigo-500/40 rounded-3xl shadow-[0_12px_35px_rgba(79,70,229,0.2)]'
              : isKlasik
              ? 'bg-[#FDFBF7] dark:bg-[#1A1816] border-2 border-[#B48A3E] rounded-none shadow-sm'
              : 'bg-white border-3 border-black rounded-3xl shadow-[6px_6px_0px_#1E2265]'
          }`}
        >
          <div
            className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b-2 ${
              isAnimasi
                ? 'border-indigo-500/30'
                : isKlasik
                ? 'border-[#B48A3E]/30'
                : 'border-black/10'
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`px-2.5 py-1 font-mono text-[11px] font-black uppercase ${
                  isAnimasi
                    ? 'rounded-lg bg-indigo-500/20 text-cyan-300 border border-cyan-400/40'
                    : isKlasik
                    ? 'rounded-none bg-[#1C1917] text-[#E5C158] border border-[#B48A3E]'
                    : 'rounded-lg bg-[#1E2265] text-yellow-300 border border-black'
                }`}
              >
                RESMI &amp; TERVERIFIKASI
              </span>
              <h3
                className={`font-heading font-black text-sm sm:text-base ${
                  isAnimasi
                    ? 'text-white'
                    : isKlasik
                    ? 'font-serif text-zinc-900 dark:text-stone-100'
                    : 'text-zinc-950'
                }`}
              >
                {language === 'id'
                  ? 'Ekosistem Lisensi Resmi & Lencana Komunitas Pengembang'
                  : 'Official Cloud Ecosystems & Verified Developer Badges'}
              </h3>
            </div>
            <span
              className={`font-mono text-xs font-bold ${
                isAnimasi
                  ? 'text-cyan-300'
                  : isKlasik
                  ? 'text-[#856222] dark:text-[#E5C158]'
                  : 'text-zinc-600'
              }`}
            >
              {CERTIFICATES_DATA.length}{' '}
              {language === 'id' ? 'Dokumen & Lencana Aktif' : 'Active Credentials'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
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

            {/* 5. Official Google Cloud & Google Cloud Platform (GCP) Logos */}
            <a
              href="https://www.skills.google/public_profiles/19eb8264-5dd8-4e7c-a55e-f5e468ae6bcc/badges/26894567"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-2.5 p-3 rounded-2xl border-2 border-black bg-white hover:bg-sky-50 shadow-[3px_3px_0px_#000] transition-all"
            >
              <div className="flex items-center gap-2 shrink-0">
                <img
                  src="/official-google-cloud-logo.png"
                  alt="Google Cloud"
                  className="h-9 sm:h-10 w-auto object-contain group-hover:scale-110 transition-transform"
                />
                <span className="w-0.5 h-7 bg-zinc-300 shrink-0" />
                <img
                  src="/official-gcp-logo.png"
                  alt="Google Cloud Platform"
                  className="h-9 sm:h-10 w-auto object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="min-w-0 text-right">
                <p className="font-heading font-black text-xs text-zinc-950 leading-tight">
                  Google Cloud &amp; GCP
                </p>
                <p className="font-mono text-[10px] text-blue-700 font-bold mt-0.5">
                  Verified Cloud
                </p>
              </div>
            </a>

            {/* 6. Official Claude & Anthropic Logos */}
            <a
              href="https://academy.claude.com/verify/cd4bb5cc3b0fb83d807700bd5f41ba35"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-2.5 p-3 rounded-2xl border-2 border-black bg-white hover:bg-orange-50 shadow-[3px_3px_0px_#000] transition-all overflow-hidden"
            >
              <div className="flex items-center gap-2 shrink-0">
                <img
                  src="/official-claude-logo.png"
                  alt="Claude"
                  className="h-9 sm:h-10 w-auto object-contain scale-135 group-hover:scale-145 transition-transform"
                />
                <span className="w-0.5 h-7 bg-zinc-300 shrink-0" />
                <img
                  src="/official-anthropic-logo.png"
                  alt="Anthropic"
                  className="h-7 sm:h-8 w-auto object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="min-w-0 text-right">
                <p className="font-heading font-black text-xs text-zinc-950 leading-tight">
                  Claude &amp; Anthropic
                </p>
                <p className="font-mono text-[10px] text-orange-700 font-bold mt-0.5">
                  3× AI Certified
                </p>
              </div>
            </a>

            {/* 7. Official Vercel & Meta Logos */}
            <div className="flex items-center justify-between gap-2 p-3 rounded-2xl border-2 border-black bg-white shadow-[3px_3px_0px_#000] overflow-hidden">
              <div className="flex items-center gap-2 shrink-0">
                <img
                  src="/official-vercel-logo.png"
                  alt="Vercel"
                  className="h-8 sm:h-9 w-auto object-contain scale-115 shrink-0"
                />
                <span className="w-0.5 h-7 bg-zinc-300 shrink-0" />
                <img
                  src="/official-meta-logo.png"
                  alt="Meta"
                  className="h-8 sm:h-9 w-auto object-contain scale-125 shrink-0"
                />
              </div>
              <div className="min-w-0 text-right">
                <p className="font-heading font-black text-[11px] text-zinc-950 leading-tight">
                  Vercel &amp; Meta
                </p>
                <p className="font-mono text-[10px] text-[#0081FB] font-bold mt-0.5">
                  Next.js &amp; Blueprint
                </p>
              </div>
            </div>

            {/* 8. Dual AWS Official Logos */}
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

            {/* 9. Official Olimpiade Sains Nasional (OSN) Logo -> Clickable to Official News Link */}
            <a
              href="https://cilacap.pikiran-rakyat.com/nasional/pr-2396690049/deretan-sma-terbaik-di-kota-cilegon-yang-juara-pada-osn-sma-2023-selain-sman-2-krakatau-steel-ada-siapa-saja?page=all"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-2.5 p-3 rounded-2xl border-2 border-black bg-white hover:bg-blue-50 shadow-[3px_3px_0px_#000] transition-all overflow-hidden"
            >
              <img
                src="/official-osn-logo.png"
                alt="Olimpiade Sains Nasional (OSN)"
                className="h-11 sm:h-12 w-auto object-contain shrink-0 group-hover:scale-110 transition-transform"
              />
              <div className="min-w-0 text-right">
                <p className="font-heading font-black text-xs text-zinc-950 leading-tight">
                  OSN Nasional
                </p>
                <p className="font-mono text-[10px] text-blue-700 font-bold mt-0.5 inline-flex items-center gap-1">
                  <span>Peringkat 10 &amp; Prov.</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </p>
              </div>
            </a>

            {/* 10. Official Perpusnas Press Logo -> Clickable to Flipbook Page 293 */}
            <a
              href="https://press.perpusnas.go.id/files/flipbooks/1635/files/basic-html/page293.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-2.5 p-3 rounded-2xl border-2 border-black bg-white hover:bg-emerald-50 shadow-[3px_3px_0px_#000] transition-all overflow-hidden"
            >
              <img
                src="/official-perpusnas-press-logo.png"
                alt="Perpusnas Press"
                className="h-9 sm:h-10 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="min-w-0 text-right">
                <p className="font-heading font-black text-xs text-zinc-950 leading-tight">
                  Perpusnas Press
                </p>
                <p className="font-mono text-[10px] text-emerald-700 font-bold mt-0.5 inline-flex items-center gap-1">
                  <span>Flipbook Hal. 293</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </p>
              </div>
            </a>

            {/* 11. Official Belajar Era Digital Logo */}
            <div className="flex items-center justify-between gap-2.5 p-3 rounded-2xl border-2 border-black bg-white shadow-[3px_3px_0px_#000] overflow-hidden">
              <img
                src="/official-belajar-era-digital-logo.png"
                alt="Belajar Era Digital"
                className="h-10 sm:h-11 w-10 sm:w-11 rounded-lg object-cover border border-black/15 shrink-0"
              />
              <div className="min-w-0 text-right">
                <p className="font-heading font-black text-xs text-zinc-950 leading-tight">
                  Belajar Era Digital
                </p>
                <p className="font-mono text-[10px] text-[#053B50] font-bold mt-0.5">
                  4× Diklat Nasional
                </p>
              </div>
            </div>

            {/* 12. Official SohIB & Central Course (TOEFL 630) Logos */}
            <div className="flex items-center justify-between gap-2 p-3 rounded-2xl border-2 border-black bg-white shadow-[3px_3px_0px_#000] overflow-hidden">
              <div className="flex items-center gap-1.5 shrink-0">
                <img
                  src="/official-sohib-logo.png"
                  alt="SohIB Indonesia.go.id"
                  className="h-8 sm:h-9 w-auto object-contain shrink-0"
                />
                <span className="w-0.5 h-7 bg-zinc-300 shrink-0" />
                <img
                  src="/official-central-course-logo.png"
                  alt="Central Course TOEFL"
                  className="h-9 sm:h-10 w-auto object-contain shrink-0"
                />
              </div>
              <div className="min-w-0 text-right">
                <p className="font-heading font-black text-[11px] text-zinc-950 leading-tight">
                  SohIB &amp; TOEFL
                </p>
                <p className="font-mono text-[10px] text-sky-700 font-bold mt-0.5">
                  Skor 630 (C1)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FILTER TABS (Distinct per Theme) */}
        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs mb-8">
          {issuers.map((issuer) => {
            const isActive = selectedIssuer === issuer.id;
            return (
              <button
                key={issuer.id}
                onClick={() => setSelectedIssuer(issuer.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 font-black transition-all cursor-pointer ${
                  isAnimasi
                    ? isActive
                      ? 'rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white border border-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] -translate-y-0.5'
                      : 'rounded-2xl bg-slate-900/90 text-slate-300 border border-indigo-500/30 hover:border-cyan-400/50 hover:text-white'
                    : isKlasik
                    ? isActive
                      ? 'rounded-none bg-[#1C1917] text-[#E5C158] border-2 border-[#B48A3E] shadow-sm'
                      : 'rounded-none bg-[#FDFBF7] dark:bg-zinc-900 text-zinc-800 dark:text-stone-200 border border-[#B48A3E]/50 hover:border-[#B48A3E]'
                    : isActive
                    ? 'rounded-xl border-2 border-black bg-[#1E2265] text-yellow-300 shadow-[4px_4px_0px_#000] -translate-y-0.5'
                    : 'rounded-xl border-2 border-black bg-white text-zinc-900 hover:bg-yellow-100 shadow-[3px_3px_0px_#000]'
                }`}
              >
                {issuer.id === 'Google' && (
                  <span className="inline-flex items-center gap-1.5 bg-white px-1.5 py-0.5 rounded-md border border-black">
                    <img
                      src="/official-google-cloud-logo.png"
                      alt="Google Cloud"
                      className="h-4 w-auto object-contain"
                    />
                    <img
                      src="/official-gcp-logo.png"
                      alt="Google Cloud Platform"
                      className="h-4 w-auto object-contain"
                    />
                  </span>
                )}
                {issuer.id === 'CloudAI' && (
                  <span className="inline-flex items-center gap-1.5 bg-white px-1.5 py-0.5 rounded-md border border-black overflow-hidden">
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
                    <img
                      src="/official-claude-logo.png"
                      alt="Claude"
                      className="h-4 w-auto object-contain scale-135"
                    />
                    <img
                      src="/official-anthropic-logo.png"
                      alt="Anthropic"
                      className="h-3.5 w-auto object-contain"
                    />
                    <img
                      src="/official-vercel-logo.png"
                      alt="Vercel"
                      className="h-4 w-auto object-contain scale-115"
                    />
                    <img
                      src="/official-meta-logo.png"
                      alt="Meta"
                      className="h-4 w-auto object-contain scale-125"
                    />
                  </span>
                )}
                {issuer.id === 'Academic' && (
                  <span className="inline-flex items-center gap-1.5 bg-white px-1.5 py-0.5 rounded-md border border-black overflow-hidden">
                    <img
                      src="/official-osn-logo.png"
                      alt="OSN"
                      className="h-4 w-auto object-contain"
                    />
                    <img
                      src="/official-perpusnas-press-logo.png"
                      alt="Perpusnas Press"
                      className="h-3.5 w-auto object-contain"
                    />
                    <img
                      src="/official-belajar-era-digital-logo.png"
                      alt="Belajar Era Digital"
                      className="h-4 w-4 rounded-xs object-cover"
                    />
                    <img
                      src="/official-sohib-logo.png"
                      alt="SohIB"
                      className="h-4 w-auto object-contain scale-115"
                    />
                    <img
                      src="/official-central-course-logo.png"
                      alt="Central Course TOEFL"
                      className="h-4 w-auto object-contain"
                    />
                  </span>
                )}
                <span>{issuer.label}</span>
              </button>
            );
          })}
        </div>

        {/* CREDENTIALS GRID: Completely Distinct Card UI/UX per Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <ScrollReveal key={cert.id} variant="fade-up" delay={(index % 3) * 65}>
              <div
                onClick={() => onSelectCert(cert)}
                className={`group h-full flex flex-col justify-between p-5 transition-all cursor-pointer relative overflow-hidden ${
                  isAnimasi
                    ? 'rounded-3xl border-2 border-indigo-500/40 bg-slate-900/90 backdrop-blur-xl shadow-[0_12px_35px_rgba(79,70,229,0.2)] hover:border-cyan-400 hover:shadow-[0_18px_45px_rgba(6,182,212,0.32)] hover:-translate-y-2'
                    : isKlasik
                    ? 'rounded-none border-2 border-[#B48A3E] bg-[#FDFBF7] dark:bg-[#1A1816] shadow-sm hover:shadow-xl hover:-translate-y-1'
                    : 'rounded-3xl border-3 border-black bg-white shadow-[6px_6px_0px_#1E2265] hover:shadow-[8px_8px_0px_#000] hover:-translate-y-1'
                }`}
              >
                {/* Top Accent Bar */}
                <div
                  className={
                    isAnimasi
                      ? 'absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500'
                      : isKlasik
                      ? 'absolute top-0 left-0 right-0 h-1 bg-[#B48A3E]'
                      : 'absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1E2265] via-blue-700 to-yellow-400 border-b border-black'
                  }
                />

                <div className="pt-2">
                  {/* Card Top Number + Issuer Badge + Date */}
                  <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`px-2 h-7 font-mono text-xs font-black flex items-center justify-center ${
                          isAnimasi
                            ? 'rounded-lg bg-indigo-500/25 text-cyan-300 border border-cyan-400/40'
                            : isKlasik
                            ? 'rounded-none bg-[#1C1917] text-[#E5C158] border border-[#B48A3E] font-serif'
                            : 'w-7 rounded-lg bg-[#1E2265] text-white border-2 border-black shadow-[2px_2px_0px_#000]'
                        }`}
                      >
                        {isKlasik ? toRoman(index + 1) : `#${index + 1}`}
                      </span>
                      {renderIssuerLogo(cert)}
                    </div>

                    <span
                      className={`px-2.5 py-0.5 font-mono text-[11px] font-bold ${
                        isAnimasi
                          ? 'rounded-lg bg-slate-800 text-cyan-200 border border-indigo-500/30'
                          : isKlasik
                          ? 'rounded-none bg-[#F7F3E8] dark:bg-zinc-800 text-[#856222] dark:text-[#E5C158] border border-[#B48A3E]/50'
                          : 'rounded-lg bg-[#FFFBEB] border border-black text-zinc-800'
                      }`}
                    >
                      {cert.date}
                    </span>
                  </div>

                  {/* Visual Certificate / Badge Thumbnail on Card */}
                  <div
                    className={`w-full h-48 overflow-hidden mb-4 bg-white flex items-center justify-center p-2 relative transition-all ${
                      isAnimasi
                        ? 'rounded-2xl border-2 border-indigo-400/50 shadow-[0_0_25px_rgba(79,70,229,0.25)] group-hover:border-cyan-400'
                        : isKlasik
                        ? 'rounded-none border-2 border-[#B48A3E]/60'
                        : 'rounded-2xl border-2 border-black shadow-[3px_3px_0px_#1E2265] group-hover:shadow-[4px_4px_0px_#FACC15]'
                    }`}
                  >
                    <CertificatePreview cert={cert} size="compact" />
                  </div>

                  {/* Verified Match Status Pill */}
                  {cert.isVerifiedMatch && (
                    <div className="mb-2 flex items-center gap-1.5">
                      <span
                        className={`px-2.5 py-0.5 text-[10px] font-mono font-black ${
                          isAnimasi
                            ? 'rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
                            : isKlasik
                            ? 'rounded-none bg-[#1C1917] text-[#E5C158] border border-[#B48A3E]'
                            : 'rounded-md bg-yellow-300 text-black border-2 border-black shadow-[2px_2px_0px_#000]'
                        }`}
                      >
                        ✓ SESUAI DOKUMEN ASLI
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <div
                    className={`mb-2.5 p-2.5 transition-colors ${
                      isAnimasi
                        ? 'rounded-xl bg-slate-800/90 border border-indigo-500/40 text-white'
                        : isKlasik
                        ? 'rounded-none bg-[#F7F3E8] dark:bg-zinc-900 border-l-4 border-[#B48A3E] text-zinc-900 dark:text-stone-100'
                        : cert.isVerifiedMatch
                        ? 'rounded-xl border-2 border-black bg-[#1E2265] text-yellow-300 shadow-[3px_3px_0px_#000]'
                        : 'rounded-xl border-2 border-black bg-zinc-100 text-zinc-950'
                    }`}
                  >
                    <h3
                      className={`font-heading font-black text-sm sm:text-base leading-snug line-clamp-2 ${
                        isAnimasi
                          ? 'text-cyan-200'
                          : isKlasik
                          ? 'font-serif text-zinc-900 dark:text-stone-100'
                          : cert.isVerifiedMatch
                          ? 'text-yellow-300'
                          : 'text-zinc-950'
                      }`}
                    >
                      {cert.title}
                    </h3>
                  </div>

                  {/* Issuer Organization with Large Official Logos */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-md border border-black/15 shrink-0">
                      {cert.issuer === 'NVIDIA' && (
                        <img
                          src="/official-nvidia-logo.png"
                          alt="NVIDIA"
                          className="h-4 w-auto object-contain shrink-0"
                        />
                      )}
                      {cert.issuer === 'AWS' && (
                        <span className="inline-flex items-center gap-1 shrink-0">
                          <img
                            src="/official-aws-logo.png"
                            alt="AWS"
                            className="h-3.5 w-auto object-contain"
                          />
                          <img
                            src="/official-aws-skill-builder.png"
                            alt="AWS Skill Builder"
                            className="h-4 w-auto object-contain"
                          />
                        </span>
                      )}
                      {(cert.issuer === 'Anthropic' || cert.issuer === 'Claude Academy') && (
                        <span className="inline-flex items-center gap-1.5 shrink-0">
                          <img
                            src="/official-claude-logo.png"
                            alt="Claude"
                            className="h-4 w-auto object-contain scale-125"
                          />
                          <img
                            src="/official-anthropic-logo.png"
                            alt="Anthropic"
                            className="h-3.5 w-auto object-contain"
                          />
                        </span>
                      )}
                      {cert.issuer === 'Vercel' && (
                        <img
                          src="/official-vercel-logo.png"
                          alt="Vercel"
                          className="h-4 w-auto object-contain scale-115 shrink-0"
                        />
                      )}
                      {cert.issuer === 'Meta' && (
                        <img
                          src="/official-meta-logo.png"
                          alt="Meta"
                          className="h-4 w-auto object-contain scale-125 shrink-0"
                        />
                      )}
                      {(cert.issuer === 'Google Skills' ||
                        cert.issuerFullName.toLowerCase().includes('google cloud')) && (
                        <span className="inline-flex items-center gap-1 shrink-0">
                          <img
                            src="/official-google-cloud-logo.png"
                            alt="Google Cloud"
                            className="h-4 w-auto object-contain"
                          />
                          <img
                            src="/official-gcp-logo.png"
                            alt="Google Cloud Platform"
                            className="h-4 w-auto object-contain"
                          />
                        </span>
                      )}
                      {cert.issuer === 'Perpusnas' && (
                        <img
                          src="/official-perpusnas-press-logo.png"
                          alt="Perpusnas Press"
                          className="h-4 w-auto object-contain shrink-0"
                        />
                      )}
                      {cert.issuer === 'OSN' && (
                        <img
                          src="/official-osn-logo.png"
                          alt="Olimpiade Sains Nasional (OSN)"
                          className="h-4 w-auto object-contain shrink-0"
                        />
                      )}
                      {cert.issuer === 'Belajar Era Digital' && (
                        <img
                          src="/official-belajar-era-digital-logo.png"
                          alt="Belajar Era Digital"
                          className="h-4 w-4 rounded object-cover shrink-0"
                        />
                      )}
                      {cert.issuer === 'Indonesia Baik' && (
                        <img
                          src="/official-sohib-logo.png"
                          alt="SohIB Indonesia.go.id"
                          className="h-4 w-auto object-contain scale-115 shrink-0"
                        />
                      )}
                      {cert.issuer === 'Central Course' && (
                        <img
                          src="/official-central-course-logo.png"
                          alt="Central Course TOEFL"
                          className="h-4 w-auto object-contain shrink-0"
                        />
                      )}
                    </span>
                    <p
                      className={`font-mono text-[11px] font-bold line-clamp-1 ${
                        isAnimasi
                          ? 'text-indigo-200'
                          : isKlasik
                          ? 'text-[#856222] dark:text-[#E5C158]'
                          : 'text-[#1E2265]'
                      }`}
                    >
                      {cert.issuerFullName}
                    </p>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-xs font-medium leading-relaxed line-clamp-2 mb-4 ${
                      isAnimasi
                        ? 'text-slate-300'
                        : isKlasik
                        ? 'text-zinc-700 dark:text-stone-300'
                        : 'text-zinc-700'
                    }`}
                  >
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  {cert.skillsLearned && cert.skillsLearned.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.skillsLearned.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className={`px-2.5 py-0.5 font-mono text-[10px] font-bold ${
                            isAnimasi
                              ? 'rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-cyan-200'
                              : isKlasik
                              ? 'rounded-none bg-[#F7F3E8] dark:bg-zinc-800 border border-[#B48A3E]/50 text-zinc-800 dark:text-stone-200'
                              : 'rounded-lg bg-[#FFFBEB] border border-black text-zinc-900'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer: Dedicated Page URL Preview + Verify Button(s) */}
                <div
                  className={`pt-3 border-t-2 flex flex-wrap items-center justify-between gap-2 font-mono text-xs ${
                    isAnimasi
                      ? 'border-indigo-500/30'
                      : isKlasik
                      ? 'border-[#B48A3E]/30'
                      : 'border-black/15'
                  }`}
                >
                  {cert.certId ? (
                    <button
                      onClick={(e) => handleCopyId(e, cert.certId!)}
                      className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold transition-colors ${
                        isAnimasi
                          ? 'rounded-lg bg-slate-800 hover:bg-slate-700 border border-indigo-500/40 text-slate-200'
                          : isKlasik
                          ? 'rounded-none bg-[#F7F3E8] dark:bg-zinc-800 border border-[#B48A3E]/60 text-zinc-900 dark:text-stone-200'
                          : 'rounded-lg bg-zinc-100 hover:bg-yellow-200 border border-black text-zinc-900'
                      }`}
                      title="Salin ID Sertifikat"
                    >
                      {copiedId === cert.certId ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500">Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span className="truncate max-w-[95px]">{cert.certId}</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold ${
                        isAnimasi
                          ? 'text-cyan-300'
                          : isKlasik
                          ? 'text-[#856222] dark:text-[#E5C158]'
                          : 'text-[#1E2265]'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Halaman Detail</span>
                    </span>
                  )}

                  <div className="flex flex-wrap items-center gap-1.5">
                    {cert.verifyUrl && (
                      <a
                        href={getTargetUrl(cert.verifyUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`px-2.5 py-1.5 font-black flex items-center gap-1 text-[10px] transition-all ${
                          isAnimasi
                            ? 'rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white border border-cyan-300/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                            : isKlasik
                            ? 'rounded-none bg-[#1C1917] text-[#E5C158] border border-[#B48A3E] hover:bg-[#B48A3E] hover:text-black'
                            : 'rounded-xl bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black shadow-[2px_2px_0px_#000]'
                        }`}
                        title="Buka Link Verifikasi Resmi"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>{cert.verifyLabel || t.credentials.verify}</span>
                      </a>
                    )}

                    {cert.secondaryVerifyUrl && (
                      <a
                        href={getTargetUrl(cert.secondaryVerifyUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`px-2.5 py-1.5 font-black flex items-center gap-1 text-[10px] transition-all ${
                          isAnimasi
                            ? 'rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-400/40'
                            : isKlasik
                            ? 'rounded-none bg-white dark:bg-zinc-900 text-zinc-900 dark:text-stone-100 border border-[#B48A3E]'
                            : 'rounded-xl bg-sky-200 hover:bg-sky-300 text-black border-2 border-black shadow-[2px_2px_0px_#000]'
                        }`}
                        title="Buka Link Verifikasi Kedua"
                      >
                        <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                        <span>{cert.secondaryVerifyLabel || 'Link 2'}</span>
                      </a>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCert(cert);
                      }}
                      className={`px-2.5 py-1.5 font-black flex items-center gap-1 text-[10px] transition-all cursor-pointer ${
                        isAnimasi
                          ? 'rounded-xl bg-slate-800 hover:bg-indigo-950 text-white border border-indigo-400/40'
                          : isKlasik
                          ? 'rounded-none bg-[#B48A3E] text-black font-serif hover:bg-[#9A7330]'
                          : 'rounded-xl bg-[#1E2265] hover:bg-blue-950 text-white border-2 border-black shadow-[2px_2px_0px_#000]'
                      }`}
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
