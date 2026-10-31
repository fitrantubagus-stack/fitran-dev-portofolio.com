import React, { useEffect, useState } from 'react';
import { CertificateItem } from '../types';
import { CERTIFICATES_DRIVE_URL } from '../data/portfolioData';
import { CertificatePreview } from './CertificatePreview';
import { DesignTheme } from './Navbar';
import { GoogleDeveloperLogo } from './GoogleDeveloperLogo';
import { motion } from 'motion/react';
import {
  ArrowLeft,
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
  Link2,
  UserCheck,
  FileCheck2,
  Sparkles,
} from 'lucide-react';

interface CertificateModalProps {
  cert: CertificateItem | null;
  allCerts: CertificateItem[];
  onClose: () => void;
  onSelectCert: (cert: CertificateItem) => void;
  designTheme?: DesignTheme;
}

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

export const CertificateModal: React.FC<CertificateModalProps> = ({
  cert,
  allCerts,
  onClose,
  onSelectCert,
  designTheme = 'modern',
}) => {
  const [copiedId, setCopiedId] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

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
      window.addEventListener('keydown', handleKeyDown);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return () => {
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

  const copyPageUrl = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  const renderPartnerLogoContent = () => {
    if (cert.issuer === 'AWS') {
      return (
        <div className="flex items-center gap-3">
          <img
            src="/official-aws-logo.png"
            alt="AWS"
            className="h-10 sm:h-12 w-auto object-contain"
          />
          <span className="w-0.5 h-10 bg-zinc-300" />
          <img
            src="/official-aws-skill-builder.png"
            alt="AWS Skill Builder"
            className="h-12 sm:h-14 w-auto object-contain scale-115"
          />
        </div>
      );
    }
    if (cert.issuer === 'NVIDIA' || cert.title.toUpperCase().includes('NVIDIA')) {
      return (
        <div className="flex items-center gap-3">
          <img
            src="/official-nvidia-logo.png"
            alt="NVIDIA"
            className="h-12 sm:h-14 w-auto object-contain"
          />
          <div className="pr-2">
            <p className="font-heading font-black text-sm text-[#1E2265]">NVIDIA</p>
            <p className="font-mono text-[10px] font-bold text-zinc-600">Official Partner</p>
          </div>
        </div>
      );
    }
    if (
      cert.issuer === 'Anthropic' ||
      cert.issuer === 'Claude Academy' ||
      cert.title.toLowerCase().includes('claude')
    ) {
      return (
        <div className="flex items-center gap-3">
          <img
            src="/official-claude-logo.png"
            alt="Claude"
            className="h-11 sm:h-13 w-auto object-contain scale-135"
          />
          <span className="w-0.5 h-10 bg-zinc-300" />
          <img
            src="/official-anthropic-logo.png"
            alt="Anthropic"
            className="h-9 sm:h-11 w-auto object-contain"
          />
        </div>
      );
    }
    if (cert.issuer === 'Vercel') {
      return (
        <div className="flex items-center gap-3 px-1">
          <img
            src="/official-vercel-logo.png"
            alt="Vercel"
            className="h-11 sm:h-13 w-auto object-contain scale-120"
          />
        </div>
      );
    }
    if (
      cert.issuer === 'Google Skills' ||
      cert.issuerFullName.toLowerCase().includes('google cloud') ||
      cert.title.toLowerCase().includes('google cloud')
    ) {
      return (
        <div className="flex items-center gap-3">
          <img
            src="/official-google-cloud-logo.png"
            alt="Google Cloud"
            className="h-11 sm:h-13 w-auto object-contain"
          />
          <span className="w-0.5 h-10 bg-zinc-300" />
          <img
            src="/official-gcp-logo.png"
            alt="Google Cloud Platform"
            className="h-11 sm:h-13 w-auto object-contain"
          />
        </div>
      );
    }
    if (cert.issuer === 'Perpusnas') {
      return (
        <div className="flex items-center gap-3 px-1">
          <img
            src="/official-perpusnas-press-logo.png"
            alt="Perpusnas Press"
            className="h-11 sm:h-13 w-auto object-contain"
          />
        </div>
      );
    }
    if (cert.issuer === 'OSN') {
      return (
        <div className="flex items-center gap-3 px-1">
          <img
            src="/official-osn-logo.png"
            alt="Olimpiade Sains Nasional (OSN)"
            className="h-12 sm:h-14 w-auto object-contain"
          />
          <div className="pr-1">
            <p className="font-heading font-black text-sm text-[#1E2265]">OSN 2023</p>
            <p className="font-mono text-[10px] font-bold text-zinc-600">Provinsi Banten</p>
          </div>
        </div>
      );
    }
    if (cert.issuer === 'Belajar Era Digital') {
      return (
        <div className="flex items-center gap-3 px-1">
          <img
            src="/official-belajar-era-digital-logo.png"
            alt="Belajar Era Digital"
            className="h-12 sm:h-14 w-12 sm:w-14 rounded-xl object-cover border border-black/15"
          />
          <div className="pr-1">
            <p className="font-heading font-black text-sm text-[#053B50]">Belajar Era Digital</p>
            <p className="font-mono text-[10px] font-bold text-zinc-600">Diklat Nasional</p>
          </div>
        </div>
      );
    }
    if (cert.issuer === 'Indonesia Baik') {
      return (
        <div className="flex items-center gap-3 px-1">
          <img
            src="/official-sohib-logo.png"
            alt="SohIB Indonesia.go.id"
            className="h-12 sm:h-14 w-auto object-contain scale-115"
          />
        </div>
      );
    }
    if (cert.issuer === 'Central Course') {
      return (
        <div className="flex items-center gap-3 px-1">
          <img
            src="/official-central-course-logo.png"
            alt="Central Course TOEFL"
            className="h-12 sm:h-14 w-auto object-contain"
          />
          <div className="pr-1">
            <p className="font-heading font-black text-sm text-[#854D0E]">Central Course</p>
            <p className="font-mono text-[10px] font-bold text-zinc-600">TOEFL Score 630</p>
          </div>
        </div>
      );
    }
    if (cert.issuer === 'Google') {
      return (
        <div className="flex items-center gap-2.5 px-2">
          <GoogleDeveloperLogo size={28} />
          <div>
            <p className="font-heading font-black text-sm text-[#1E2265]">Google</p>
            <p className="font-mono text-[10px] font-bold text-zinc-600">Official Credential</p>
          </div>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2.5 px-2">
        <Award className="w-8 h-8 text-[#1E2265] stroke-[2.5]" />
        <div>
          <p className="font-heading font-black text-sm text-[#1E2265]">{cert.issuer}</p>
          <p className="font-mono text-[10px] font-bold text-zinc-600">Verified Credential</p>
        </div>
      </div>
    );
  };

  // ===========================================================================
  // DESIGN 2: FULL ANIMASI DESAIN (Cyber-Holographic Motion Dossier UI/UX)
  // ===========================================================================
  if (designTheme === 'clipboard') {
    return (
      <section className="w-full min-h-screen bg-gradient-to-br from-[#060913] via-[#0F172A] to-[#090D1C] text-white py-8 sm:py-12 relative overflow-hidden">
        {/* Animated Floating Aurora Orbs */}
        <motion.div
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-indigo-600/25 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0], scale: [1, 0.9, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Animated Top Navigation Bar */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6"
          >
            <motion.button
              whileHover={{ scale: 1.04, x: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-indigo-600/20 hover:bg-indigo-600/35 text-indigo-200 border border-indigo-400/40 font-mono text-xs font-bold backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.2)] cursor-pointer self-start"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Daftar Sertifikat</span>
            </motion.button>

            <div className="flex flex-wrap items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={copyPageUrl}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/80 border border-indigo-500/40 font-mono text-xs font-bold text-cyan-300 backdrop-blur-md cursor-pointer"
              >
                <Link2 className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate max-w-[220px] sm:max-w-[340px]">/{cert.title}</span>
                {copiedUrl ? (
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
                    Tersalin!
                  </span>
                ) : (
                  <Copy className="w-3 h-3 opacity-70" />
                )}
              </motion.button>

              <div className="inline-flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1.5 rounded-2xl border border-indigo-500/40 font-mono text-xs text-indigo-200">
                <button
                  onClick={handlePrev}
                  className="p-1 rounded-lg hover:bg-indigo-500/30 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-bold px-1.5">
                  {currentIndex + 1} / {allCerts.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-1 rounded-lg hover:bg-indigo-500/30 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Animated Holographic Header Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="rounded-3xl bg-gradient-to-r from-indigo-950/90 via-slate-900/90 to-cyan-950/80 border-2 border-indigo-500/50 p-6 sm:p-8 shadow-[0_0_45px_rgba(79,70,229,0.28)] backdrop-blur-xl relative overflow-hidden mb-8"
          >
            {/* Animated Top Laser Line */}
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="
                absolute top-0 left-0 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent
              "
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/25 text-cyan-300 border border-cyan-400/40 font-mono text-xs font-bold uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>HOLOGRAPHIC CREDENTIAL #{currentIndex + 1}</span>
                  </span>

                  {cert.isVerifiedMatch && (
                    <motion.span
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 font-mono text-xs font-bold uppercase"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>✓ SESUAI DOKUMEN ASLI</span>
                    </motion.span>
                  )}
                </div>

                <h1 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight bg-gradient-to-r from-white via-cyan-200 to-indigo-200 bg-clip-text text-transparent">
                  {cert.title}
                </h1>

                <p className="font-mono text-xs sm:text-sm text-indigo-200">
                  Diterbitkan Resmi Oleh: <span className="text-cyan-300 font-bold">{cert.issuerFullName}</span> • {cert.date}
                </p>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-white text-zinc-900 p-4 rounded-2xl border-2 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.35)] flex items-center gap-3 self-start lg:self-center shrink-0"
              >
                {renderPartnerLogoContent()}
              </motion.div>
            </div>
          </motion.div>

          {/* Animated 2-Column Bento Dossier */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-8 space-y-6"
            >
              <div className="bg-slate-900/90 border-2 border-indigo-500/40 rounded-3xl p-4 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-indigo-500/25 font-mono text-xs">
                  <span className="font-bold text-cyan-300 uppercase">
                    ⚡ PRATINJAU DOKUMEN SERTIFIKAT &amp; LENCANA RESMI
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 font-bold text-indigo-200">
                    Resolusi Tinggi
                  </span>
                </div>
                <div className="bg-white rounded-2xl p-3">
                  <CertificatePreview cert={cert} size="full" />
                </div>
              </div>

              <div className="bg-slate-900/90 border border-indigo-500/35 rounded-3xl p-6 sm:p-8 space-y-5 backdrop-blur-xl">
                <div>
                  <h2 className="font-heading font-black text-lg sm:text-xl text-cyan-300 mb-2">
                    Deskripsi &amp; Kompetensi
                  </h2>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {cert.skillsLearned && cert.skillsLearned.length > 0 && (
                  <div className="pt-4 border-t border-indigo-500/20">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-300 mb-3">
                      Keahlian &amp; Kurikulum Teknis:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cert.skillsLearned.map((skill, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.07, y: -2 }}
                          className="px-3.5 py-1.5 rounded-xl bg-indigo-950/80 text-cyan-200 font-mono text-xs font-bold border border-indigo-400/40"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.16 }}
              className="lg:col-span-4 space-y-6"
            >
              <div className="bg-slate-900/90 border-2 border-indigo-500/40 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] space-y-4 backdrop-blur-xl">
                <div className="pb-3 border-b border-indigo-500/30 flex items-center justify-between">
                  <h3 className="font-heading font-black text-base text-cyan-300 uppercase">
                    Data Registrasi Resmi
                  </h3>
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                </div>

                <div className="p-3.5 rounded-2xl bg-indigo-950/50 border border-indigo-500/30">
                  <div className="flex items-center gap-2 text-indigo-300 font-mono text-[11px] font-bold uppercase">
                    <UserCheck className="w-4 h-4 text-cyan-400" />
                    <span>Penerima Sertifikat</span>
                  </div>
                  <p className="font-heading font-bold text-sm sm:text-base text-white mt-1">
                    Tubagus Fitran Badruttamam
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-indigo-950/50 border border-indigo-500/30">
                  <div className="flex items-center gap-2 text-indigo-300 font-mono text-[11px] font-bold uppercase">
                    <Building className="w-4 h-4 text-cyan-400" />
                    <span>Lembaga Penerbit</span>
                  </div>
                  <p className="font-heading font-bold text-sm text-white mt-1">
                    {cert.issuerFullName}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-indigo-950/50 border border-indigo-500/30">
                  <div className="flex items-center gap-2 text-indigo-300 font-mono text-[11px] font-bold uppercase">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>Tanggal Penerbitan</span>
                  </div>
                  <p className="font-mono font-bold text-sm text-white mt-1">{cert.date}</p>
                </div>

                {cert.certId && (
                  <div className="p-3.5 rounded-2xl bg-indigo-950/50 border border-indigo-500/30">
                    <span className="font-mono text-[11px] font-bold uppercase text-indigo-300 block mb-1">
                      Nomor / ID Sertifikat
                    </span>
                    <div className="flex items-center justify-between gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-indigo-500/40 font-mono text-xs font-bold">
                      <span className="truncate text-cyan-200">{cert.certId}</span>
                      <button
                        onClick={copyCertId}
                        className="px-2 py-1 rounded-lg bg-cyan-400 text-slate-950 text-[10px] font-black cursor-pointer"
                      >
                        {copiedId ? 'Tersalin!' : 'Salin'}
                      </button>
                    </div>
                  </div>
                )}

                <div className="pt-2 space-y-3 font-mono text-xs">
                  {cert.verifyUrl && (
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      href={getTargetUrl(cert.verifyUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-black uppercase shadow-lg transition-all"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>{cert.verifyLabel || 'Verifikasi Kredensial Resmi'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  )}

                  {cert.secondaryVerifyUrl && (
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      href={getTargetUrl(cert.secondaryVerifyUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-400 text-slate-950 font-black uppercase shadow-lg transition-all"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>{cert.secondaryVerifyLabel || 'Verifikasi Kedua'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  )}

                  <a
                    href={CERTIFICATES_DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-indigo-400/40 font-bold uppercase transition-all"
                  >
                    <FolderOpen className="w-4 h-4" />
                    <span>Buka Arsip Google Drive</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // ===========================================================================
  // DESIGN 3: PROFESIONAL, ELEGAN & KLASIK (Classical Archive Dossier UI/UX)
  // ===========================================================================
  if (designTheme === 'arcade') {
    return (
      <section className="w-full min-h-screen bg-[#F7F3E8] dark:bg-[#121110] text-[#141413] dark:text-[#F5F2EB] py-8 sm:py-12 border-b-2 border-[#B48A3E]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Classical Masthead Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-8 border-b-2 border-[#141413] dark:border-[#B48A3E]">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1B2A4A] text-white border border-[#B48A3E] font-mono text-xs uppercase tracking-wider font-bold cursor-pointer self-start"
            >
              <ArrowLeft className="w-4 h-4 text-[#D4AF37]" />
              <span>Kembali ke Katalog Sertifikat</span>
            </button>

            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <button
                onClick={copyPageUrl}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-white dark:bg-[#181816] border border-[#141413]/40 dark:border-[#B48A3E]/50 text-[#1B2A4A] dark:text-[#D4AF37] font-bold cursor-pointer"
              >
                <Link2 className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate max-w-[220px] sm:max-w-[340px]">/{cert.title}</span>
                {copiedUrl ? <span>(Tersalin)</span> : <Copy className="w-3 h-3 opacity-70" />}
              </button>

              <div className="inline-flex items-center gap-1.5 bg-white dark:bg-[#181816] px-2.5 py-1.5 border border-[#141413]/40 dark:border-[#B48A3E]/50">
                <button onClick={handlePrev} className="p-1 hover:text-[#B48A3E] cursor-pointer">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-bold px-1.5">
                  DOKUMEN {currentIndex + 1} / {allCerts.length}
                </span>
                <button onClick={handleNext} className="p-1 hover:text-[#B48A3E] cursor-pointer">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Classical Double-Ruled Header Frame */}
          <div className="bg-white dark:bg-[#181816] border-2 border-[#B48A3E] p-1.5 mb-8 shadow-xs">
            <div className="border border-[#141413]/25 dark:border-[#B48A3E]/40 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2.5 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#855E1E] dark:text-[#D4AF37] font-bold">
                  <span>ARSIP KREDENSIAL RESMI • NO. {currentIndex + 1}</span>
                  {cert.isVerifiedMatch && (
                    <span className="px-2.5 py-0.5 bg-[#FAF7F0] dark:bg-zinc-900 border border-[#B48A3E] text-[#1B2A4A] dark:text-[#D4AF37]">
                      ✓ TERVERIFIKASI DOKUMEN ASLI
                    </span>
                  )}
                </div>

                <h1 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-zinc-950 dark:text-white tracking-tight leading-tight">
                  {cert.title}
                </h1>

                <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                  Lembaga Penerbit: <strong className="text-[#1B2A4A] dark:text-[#D4AF37]">{cert.issuerFullName}</strong> • {cert.date}
                </p>
              </div>

              <div className="bg-white text-zinc-900 p-4 border-2 border-[#B48A3E] flex items-center gap-3 self-start lg:self-center shrink-0">
                {renderPartnerLogoContent()}
              </div>
            </div>
          </div>

          {/* Classical 2-Column Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white dark:bg-[#181816] border-2 border-[#B48A3E] p-4 sm:p-8">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#141413]/20 dark:border-[#B48A3E]/30 font-mono text-xs">
                  <span className="font-bold text-[#855E1E] dark:text-[#D4AF37] uppercase tracking-wider">
                    FAKTA &amp; SALINAN DOKUMEN SERTIFIKAT
                  </span>
                  <span className="uppercase text-zinc-500">Arsip Resolusi Tinggi</span>
                </div>
                <CertificatePreview cert={cert} size="full" />
              </div>

              <div className="bg-white dark:bg-[#181816] border border-[#141413]/30 dark:border-[#B48A3E]/40 p-6 sm:p-8 space-y-5">
                <div>
                  <h2 className="font-heading font-black text-lg sm:text-xl text-[#1B2A4A] dark:text-[#D4AF37] uppercase tracking-wide border-b border-[#B48A3E]/40 pb-2 mb-3">
                    Ringkasan Kompetensi &amp; Kurikulum
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify">
                    {cert.description}
                  </p>
                </div>

                {cert.skillsLearned && cert.skillsLearned.length > 0 && (
                  <div className="pt-4 border-t border-[#141413]/15 dark:border-white/10">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] mb-3">
                      Bidang Studi &amp; Keahlian:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cert.skillsLearned.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3.5 py-1.5 bg-[#FAF7F0] dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 font-mono text-xs font-semibold border border-[#B48A3E]/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white dark:bg-[#181816] border-2 border-[#B48A3E] p-6 space-y-4">
                <div className="pb-3 border-b-2 border-[#141413] dark:border-[#B48A3E] flex items-center justify-between">
                  <h3 className="font-heading font-black text-sm uppercase tracking-wider text-zinc-950 dark:text-white">
                    METRIK REGISTRASI RESMI
                  </h3>
                  <ShieldCheck className="w-5 h-5 text-[#855E1E] dark:text-[#D4AF37]" />
                </div>

                <div className="p-3.5 bg-[#FAF7F0] dark:bg-zinc-900 border border-[#141413]/20 dark:border-[#B48A3E]/30">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] font-bold block">
                    Penerima Sertifikat
                  </span>
                  <p className="font-heading font-bold text-sm sm:text-base text-zinc-950 dark:text-white mt-1">
                    Tubagus Fitran Badruttamam
                  </p>
                </div>

                <div className="p-3.5 bg-[#FAF7F0] dark:bg-zinc-900 border border-[#141413]/20 dark:border-[#B48A3E]/30">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] font-bold block">
                    Lembaga Penerbit
                  </span>
                  <p className="font-heading font-bold text-sm text-zinc-950 dark:text-white mt-1">
                    {cert.issuerFullName}
                  </p>
                </div>

                <div className="p-3.5 bg-[#FAF7F0] dark:bg-zinc-900 border border-[#141413]/20 dark:border-[#B48A3E]/30">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] font-bold block">
                    Tanggal Penerbitan
                  </span>
                  <p className="font-mono font-bold text-sm text-zinc-950 dark:text-white mt-1">
                    {cert.date}
                  </p>
                </div>

                {cert.certId && (
                  <div className="p-3.5 bg-[#FAF7F0] dark:bg-zinc-900 border border-[#141413]/20 dark:border-[#B48A3E]/30">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] font-bold block mb-1">
                      Nomor / ID Sertifikat
                    </span>
                    <div className="flex items-center justify-between gap-2 bg-white dark:bg-zinc-950 px-3 py-2 border border-[#B48A3E]/50 font-mono text-xs font-bold">
                      <span className="truncate">{cert.certId}</span>
                      <button
                        onClick={copyCertId}
                        className="px-2 py-0.5 bg-[#1B2A4A] text-white text-[10px] cursor-pointer"
                      >
                        {copiedId ? 'Tersalin' : 'Salin'}
                      </button>
                    </div>
                  </div>
                )}

                <div className="pt-2 space-y-2.5 font-mono text-xs">
                  {cert.verifyUrl && (
                    <a
                      href={getTargetUrl(cert.verifyUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#1B2A4A] hover:bg-[#121D33] text-white border border-[#B48A3E] font-bold uppercase tracking-wider transition-colors"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                      <span>{cert.verifyLabel || 'Verifikasi Kredensial Resmi'}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </a>
                  )}

                  {cert.secondaryVerifyUrl && (
                    <a
                      href={getTargetUrl(cert.secondaryVerifyUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#FAF7F0] dark:bg-zinc-900 hover:bg-[#B48A3E]/20 text-[#1B2A4A] dark:text-[#D4AF37] border border-[#B48A3E] font-bold uppercase tracking-wider transition-colors"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>{cert.secondaryVerifyLabel || 'Verifikasi Kedua'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={CERTIFICATES_DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white dark:bg-zinc-900 hover:bg-zinc-100 text-zinc-800 dark:text-zinc-200 border border-[#141413]/30 dark:border-zinc-700 font-bold uppercase tracking-wider transition-colors"
                  >
                    <FolderOpen className="w-4 h-4" />
                    <span>Buka Arsip Google Drive</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ===========================================================================
  // DESIGN 1 (DEFAULT): MODERN TECH & NEO-BRUTALIST BULAKAN
  // ===========================================================================
  return (
    <section className="w-full min-h-screen bg-[#FFFBEB] border-b-4 border-black py-8 sm:py-12 relative overflow-hidden">
      {/* Formal Dot-Grid Pattern (Kelurahan Bulakan /pelayanan Aesthetic) */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1E2265 1.25px, transparent 1.25px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TOP NAVIGATION & URL BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-yellow-300 text-zinc-950 border-2 border-black font-mono text-xs font-black shadow-[4px_4px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000] transition-all cursor-pointer self-start"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Kembali ke Daftar Sertifikat</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            {/* Clean Dedicated Page Path Indicator */}
            <button
              onClick={copyPageUrl}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-amber-50 border-2 border-black font-mono text-xs font-bold text-[#1E2265] shadow-[3px_3px_0px_#000] transition-all cursor-pointer"
              title="Salin URL Halaman Sertifikat Ini"
            >
              <Link2 className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate max-w-[220px] sm:max-w-[340px]">/{cert.title}</span>
              {copiedUrl ? (
                <span className="px-1.5 py-0.5 rounded bg-emerald-200 text-emerald-950 text-[10px] font-black border border-black">
                  Tersalin!
                </span>
              ) : (
                <Copy className="w-3 h-3 opacity-70" />
              )}
            </button>

            {/* Prev / Next Controls */}
            <div className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_#000] font-mono text-xs">
              <button
                onClick={handlePrev}
                className="p-1 rounded-lg hover:bg-yellow-300 text-black font-black transition-colors cursor-pointer"
                title="Sertifikat Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>
              <span className="font-black text-zinc-900 px-1.5">
                {currentIndex + 1} / {allCerts.length}
              </span>
              <button
                onClick={handleNext}
                className="p-1 rounded-lg hover:bg-yellow-300 text-black font-black transition-colors cursor-pointer"
                title="Sertifikat Berikutnya"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* FORMAL ROYAL NAVY HEADER BANNER */}
        <div className="bg-gradient-to-br from-[#1E2265] via-blue-900 to-[#1E2265] text-white border-4 border-black rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#000] relative overflow-hidden mb-8">
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
              backgroundSize: '18px 18px',
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-300 text-black border-2 border-black font-mono text-xs font-black uppercase shadow-[3px_3px_0px_#000]">
                  <FileCheck2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>DOKUMEN SERTIFIKASI #{currentIndex + 1}</span>
                </span>

                {cert.isVerifiedMatch && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-300 text-black border-2 border-black font-mono text-xs font-black uppercase shadow-[3px_3px_0px_#000]">
                    <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>✓ SESUAI DOKUMEN ASLI</span>
                  </span>
                )}
              </div>

              <h1
                className={`font-heading font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight ${
                  cert.isVerifiedMatch ? 'text-yellow-300' : 'text-white'
                }`}
              >
                {cert.title}
              </h1>

              <p className="font-mono text-xs sm:text-sm text-blue-100 font-bold">
                Diterbitkan Resmi Oleh: <span className="text-yellow-300">{cert.issuerFullName}</span> • {cert.date}
              </p>
            </div>

            {/* Right Partner Logo Box on Banner */}
            <div className="bg-white text-zinc-900 p-4 rounded-2xl border-3 border-black shadow-[5px_5px_0px_#FACC15] flex items-center gap-3 self-start lg:self-center shrink-0 overflow-hidden">
              {renderPartnerLogoContent()}
            </div>
          </div>
        </div>

        {/* MAIN 2-COLUMN FORMAL DOSSIER LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN (8 Cols): High-Resolution Certificate Preview & Competencies */}
          <div className="lg:col-span-8 space-y-6">
            {/* Certificate Visual Frame (Pure White Background, Bold Black Border, Navy Shadow) */}
            <div className="bg-white border-4 border-black rounded-3xl p-4 sm:p-8 shadow-[8px_8px_0px_#1E2265]">
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-black/10 font-mono text-xs">
                <span className="font-black text-[#1E2265] uppercase">
                  PRATINJAU DOKUMEN SERTIFIKAT &amp; LENCANA RESMI
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#FFFBEB] border border-black font-bold text-zinc-800">
                  Resolusi Tinggi
                </span>
              </div>

              <CertificatePreview cert={cert} size="full" />
            </div>

            {/* Detailed Description & Verified Skills Card */}
            <div className="bg-white border-3 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_#000] space-y-5">
              <div>
                <h2 className="font-heading font-black text-lg sm:text-xl text-[#1E2265] mb-2">
                  Deskripsi &amp; Validasi Kompetensi
                </h2>
                <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-medium">
                  {cert.description}
                </p>
              </div>

              {cert.skillsLearned && cert.skillsLearned.length > 0 && (
                <div className="pt-4 border-t-2 border-black/10">
                  <h3 className="font-mono text-xs font-black uppercase tracking-wider text-zinc-600 mb-3">
                    Keahlian &amp; Kurikulum Teknis yang Dikuasai:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cert.skillsLearned.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-xl bg-[#FFFBEB] text-zinc-950 font-mono text-xs font-black border-2 border-black shadow-[2px_2px_0px_#000]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN (4 Cols): Official Registry Metadata & Verification Actions */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border-3 border-black rounded-3xl p-6 shadow-[6px_6px_0px_#1E2265] space-y-4">
              <div className="pb-3 border-b-2 border-black flex items-center justify-between">
                <h3 className="font-heading font-black text-base text-[#1E2265] uppercase">
                  Data Registrasi Resmi
                </h3>
                <ShieldCheck className="w-5 h-5 text-[#1E2265] stroke-[2.5]" />
              </div>

              {/* Recipient */}
              <div className="p-3.5 rounded-2xl bg-[#FFFBEB] border-2 border-black">
                <div className="flex items-center gap-2 text-zinc-600 font-mono text-[11px] font-bold uppercase">
                  <UserCheck className="w-4 h-4 text-[#1E2265]" />
                  <span>Penerima Sertifikat</span>
                </div>
                <p className="font-heading font-black text-sm sm:text-base text-zinc-950 mt-1">
                  Tubagus Fitran Badruttamam
                </p>
              </div>

              {/* Issuer */}
              <div className="p-3.5 rounded-2xl bg-[#FFFBEB] border-2 border-black">
                <div className="flex items-center gap-2 text-zinc-600 font-mono text-[11px] font-bold uppercase">
                  <Building className="w-4 h-4 text-[#1E2265]" />
                  <span>Lembaga Penerbit</span>
                </div>
                <p className="font-heading font-black text-sm text-zinc-950 mt-1">
                  {cert.issuerFullName}
                </p>
              </div>

              {/* Issue Date */}
              <div className="p-3.5 rounded-2xl bg-[#FFFBEB] border-2 border-black">
                <div className="flex items-center gap-2 text-zinc-600 font-mono text-[11px] font-bold uppercase">
                  <Calendar className="w-4 h-4 text-[#1E2265]" />
                  <span>Tanggal Penerbitan</span>
                </div>
                <p className="font-mono font-black text-sm text-zinc-950 mt-1">{cert.date}</p>
              </div>

              {/* Credential ID */}
              {cert.certId && (
                <div className="p-3.5 rounded-2xl bg-[#FFFBEB] border-2 border-black">
                  <span className="font-mono text-[11px] font-bold uppercase text-zinc-600 block mb-1">
                    Nomor / ID Sertifikat
                  </span>
                  <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border-2 border-black font-mono text-xs font-black">
                    <span className="truncate text-zinc-950">{cert.certId}</span>
                    <button
                      onClick={copyCertId}
                      className="px-2 py-1 rounded-lg bg-yellow-300 hover:bg-yellow-400 border border-black text-black text-[10px] font-black cursor-pointer"
                    >
                      {copiedId ? 'Tersalin!' : 'Salin'}
                    </button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 space-y-3 font-mono text-xs">
                {cert.verifyUrl && (
                  <a
                    href={getTargetUrl(cert.verifyUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black font-black uppercase shadow-[4px_4px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000] transition-all"
                  >
                    <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                    <span>{cert.verifyLabel || 'Verifikasi Kredensial Resmi'}</span>
                    <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                )}

                {cert.secondaryVerifyUrl && (
                  <a
                    href={getTargetUrl(cert.secondaryVerifyUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-300 hover:bg-emerald-400 text-black border-2 border-black font-black uppercase shadow-[4px_4px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000] transition-all"
                  >
                    <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                    <span>{cert.secondaryVerifyLabel || 'Verifikasi Kedua'}</span>
                    <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                )}

                <a
                  href={CERTIFICATES_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1E2265] hover:bg-blue-950 text-white border-2 border-black font-black uppercase shadow-[4px_4px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000] transition-all"
                >
                  <FolderOpen className="w-4 h-4 stroke-[2.5]" />
                  <span>Buka Arsip Google Drive</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
