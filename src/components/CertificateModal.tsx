import React, { useEffect, useState } from 'react';
import { CertificateItem } from '../types';
import { CERTIFICATES_DRIVE_URL } from '../data/portfolioData';
import { CertificatePreview } from './CertificatePreview';
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
} from 'lucide-react';

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
            <div className="bg-white text-zinc-900 p-4 rounded-2xl border-3 border-black shadow-[5px_5px_0px_#FACC15] flex items-center gap-3 self-start lg:self-center shrink-0">
              {cert.issuer === 'AWS' ? (
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
              ) : cert.issuer === 'NVIDIA' || cert.title.toUpperCase().includes('NVIDIA') ? (
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
              ) : (
                <div className="flex items-center gap-2.5 px-2">
                  <Award className="w-8 h-8 text-[#1E2265] stroke-[2.5]" />
                  <div>
                    <p className="font-heading font-black text-sm text-[#1E2265]">{cert.issuer}</p>
                    <p className="font-mono text-[10px] font-bold text-zinc-600">Verified Credential</p>
                  </div>
                </div>
              )}
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
                  PRATINJAU DOKUMEN SERTIFIKAT & LENCANA RESMI
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
                  Deskripsi & Validasi Kompetensi
                </h2>
                <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-medium">
                  {cert.description}
                </p>
              </div>

              {cert.skillsLearned && cert.skillsLearned.length > 0 && (
                <div className="pt-4 border-t-2 border-black/10">
                  <h3 className="font-mono text-xs font-black uppercase tracking-wider text-zinc-600 mb-3">
                    Keahlian & Kurikulum Teknis yang Dikuasai:
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
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black font-black uppercase shadow-[4px_4px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000] transition-all"
                  >
                    <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                    <span>Verifikasi Kredensial Resmi</span>
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
