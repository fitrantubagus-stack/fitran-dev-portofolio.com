import React, { useState } from 'react';
import { X, Download, ExternalLink, FileText, MapPin, Phone, Mail, Globe, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'formatted' | 'pdf'>('formatted');

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border-3 border-black bg-white dark:bg-[#0D1117] shadow-[8px_8px_0px_#1E2265] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-[#1E2265] text-white border-b-2 border-black shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-yellow-300 text-black border border-black">
              <FileText className="w-4 h-4 stroke-[2.5]" />
            </span>
            <div>
              <h3 className="font-heading font-black text-sm sm:text-base text-white leading-tight">
                Curriculum Vitae — Tubagus Fitran Badruttamam
              </h3>
              <p className="font-mono text-[10px] text-yellow-200">
                Dokumen CV Resmi Terverifikasi • Data Engineering &amp; Backend Development
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* View Mode Toggle */}
            <div className="inline-flex rounded-xl bg-black/30 p-0.5 border border-white/20 font-mono text-[11px]">
              <button
                type="button"
                onClick={() => setViewMode('formatted')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer font-bold ${
                  viewMode === 'formatted'
                    ? 'bg-yellow-300 text-black'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Tampilan Dokumen
              </button>
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer font-bold ${
                  viewMode === 'pdf'
                    ? 'bg-yellow-300 text-black'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                PDF Asli
              </button>
            </div>

            {/* Download Official PDF */}
            <a
              href="/CV-Tubagus-Fitran-Badruttamam.pdf"
              download="CV-Tubagus-Fitran-Badruttamam.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black font-mono text-xs font-black shadow-[2px_2px_0px_#000] transition-all"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Unduh CV (PDF)</span>
            </a>

            {/* Open in New Tab */}
            <a
              href="/CV-Tubagus-Fitran-Badruttamam.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white hover:bg-zinc-100 text-[#1E2265] border-2 border-black font-mono text-xs font-bold shadow-[2px_2px_0px_#000] transition-all"
              title="Buka PDF di Tab Baru"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white border-2 border-black shadow-[2px_2px_0px_#000] transition-colors cursor-pointer"
              aria-label="Tutup CV"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto bg-zinc-100 dark:bg-zinc-950 p-4 sm:p-8">
          {viewMode === 'pdf' ? (
            <div className="w-full h-[72vh] bg-white rounded-2xl border-2 border-black overflow-hidden shadow-inner">
              <iframe
                src="/CV-Tubagus-Fitran-Badruttamam.pdf"
                title="CV Tubagus Fitran Badruttamam"
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            /* Exact High-Resolution Interactive Reproduction of the Official Uploaded CV */
            <div className="max-w-3xl mx-auto bg-white text-zinc-900 rounded-2xl border-2 border-zinc-300 shadow-lg p-6 sm:p-10 font-sans">
              {/* CV Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b-2 border-[#1E2265]/20">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-28 h-32 object-cover rounded-lg border-2 border-[#1E2265]/30 shadow-xs shrink-0"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h1 className="font-heading font-black text-2xl sm:text-3xl text-[#1E2265] tracking-tight uppercase">
                    TUBAGUS FITRAN BADRUTTAMAM
                  </h1>
                  <div className="mt-3 space-y-1.5 text-xs sm:text-sm text-zinc-700">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <MapPin className="w-4 h-4 text-[#1E2265] shrink-0" />
                      <span className="font-bold w-16 inline-block">Address:</span>
                      <span>Cilegon, Banten</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <Phone className="w-4 h-4 text-[#1E2265] shrink-0" />
                      <span className="font-bold w-16 inline-block">Phone:</span>
                      <span>+62 813-9865-0118</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <Mail className="w-4 h-4 text-[#1E2265] shrink-0" />
                      <span className="font-bold w-16 inline-block">Email:</span>
                      <span>fitrantubagus@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <Globe className="w-4 h-4 text-[#1E2265] shrink-0" />
                      <span className="font-bold w-16 inline-block">Profile:</span>
                      <a
                        href="https://me.developers.google.com/u/108601218527303855788"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline break-all"
                      >
                        https://me.developers.google.com/u/108601218527303855788
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1. PROFESSIONAL SUMMARY */}
              <div className="mt-6">
                <h2 className="font-heading font-extrabold text-sm sm:text-base text-[#1E2265] uppercase tracking-wider border-b-2 border-[#1E2265]/40 pb-1 mb-3">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify">
                  &ldquo;Mahasiswa yang berfokus pada Data Engineering dan Backend Development, mengintegrasikan keahlian teknis dengan fondasi kuat dalam pemodelan matematika, analisis ekonomi, serta kecakapan penulisan teknis dan akademis. Berpengalaman dalam merancang dan mengeksplorasi arsitektur sistem, pengelolaan basis data real-time, integrasi API, serta pembuatan antarmuka produk digital berbasis user-centered design. Terbiasa mengimplementasikan teknologi kecerdasan buatan (AI) dan otomatisasi digital untuk mengoptimalkan efisiensi sistem serta alur pemrosesan data. Didukung oleh kemampuan analitis kuantitatif, pemahaman logika bisnis dan efisiensi sumber daya, serta literasi komunikasi yang matang, mampu memecahkan tantangan logika kompleks, menjembatani struktur data teknis dengan kebutuhan strategis bisnis, dan mendokumentasikan gagasan serta solusi secara profesional dan terstruktur.&rdquo;
                </p>
              </div>

              {/* 2. SKILL EXPERIENCE */}
              <div className="mt-6">
                <h2 className="font-heading font-extrabold text-sm sm:text-base text-[#1E2265] uppercase tracking-wider border-b-2 border-[#1E2265]/40 pb-1 mb-3">
                  SKILL EXPERIENCE
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                    <h3 className="font-bold text-zinc-900 mb-2">Backend &amp; Data Engineering</h3>
                    <ul className="list-disc list-inside space-y-1 text-zinc-700 text-xs">
                      <li>Data Engineering Concepts</li>
                      <li>Google Maps Platform APIs</li>
                      <li>Firebase Studio Developer</li>
                      <li>Real-time Database Architecture</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                    <h3 className="font-bold text-zinc-900 mb-2">AI &amp; Cloud Ecosystem</h3>
                    <ul className="list-disc list-inside space-y-1 text-zinc-700 text-xs">
                      <li>AI Integration (Gemini AI, Microsoft Copilot, Claude AI)</li>
                      <li>Huawei AI Foundations &amp; AWS Cloud</li>
                      <li>Cloud &amp; GPU Computing (Google Cloud x NVIDIA)</li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                    <h3 className="font-bold text-zinc-900 mb-2">Analytical &amp; Business Logic</h3>
                    <ul className="list-disc list-inside space-y-1 text-zinc-700 text-xs">
                      <li>Mathematical Modeling</li>
                      <li>Economic Analysis</li>
                      <li>Quantitative Logic</li>
                      <li>Analytical Problem Solving</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. BADGE DEVELOPER & ORGANIZATION EXPERIENCE */}
              <div className="mt-6">
                <h2 className="font-heading font-extrabold text-sm sm:text-base text-[#1E2265] uppercase tracking-wider border-b-2 border-[#1E2265]/40 pb-1 mb-3">
                  BADGE DEVELOPER &amp; ORGANIZATION EXPERIENCE
                </h2>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-xs sm:text-sm text-zinc-900">
                    Google Developer Program — Data Engineer &amp; Backend Developer Member
                  </h3>
                  <span className="font-mono text-xs font-bold text-[#1E2265]">
                    2024 – Sekarang
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  <li>
                    <strong className="text-zinc-900">Google Maps Platform Innovators:</strong> Terpilih dalam program inovator global untuk mengeksplorasi dan mengimplementasikan integrasi API geospatial, optimasi data lokasi, serta arsitektur backend berbasis lokasi.
                  </li>
                  <li>
                    <strong className="text-zinc-900">Firebase Studio Developer:</strong> Merancang dan menguji fondasi backend, manajemen basis data real-time, serta otomatisasi alur data (data pipeline) pada aplikasi.
                  </li>
                  <li>
                    <strong className="text-zinc-900">Google Cloud &amp; NVIDIA Community:</strong> Aktif mempelajari dan mengeksplorasi arsitektur komputasi awan (cloud computing), pemrosesan data skala besar, serta integrasi akselerasi GPU/AI.
                  </li>
                  <li>
                    <strong className="text-zinc-900">Google Developer Groups (GDG) on Campus (BINUS University &amp; Universitas Brawijaya):</strong> Berpartisipasi aktif dalam sesi teknis, workshop, dan kolaborasi pengembang lintas kampus mengenai tren backend engineering dan teknologi Google.
                  </li>
                </ul>
              </div>

              {/* 4. PROFESSIONAL CERTIFICATIONS & PUBLICATIONS AWARDS */}
              <div className="mt-6">
                <h2 className="font-heading font-extrabold text-sm sm:text-base text-[#1E2265] uppercase tracking-wider border-b-2 border-[#1E2265]/40 pb-1 mb-3">
                  PROFESSIONAL CERTIFICATIONS &amp; PUBLICATIONS AWARDS
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900">Google UX Design Professional Certificate</strong> — Coursera / Google (Desember 2024)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900">Gemini Certified Educator</strong> — Google for Education (Mei 2026) — Sertifikasi pemanfaatan dan efisiensi teknologi Generative AI.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900">Essential Google Cloud Infrastructure: Foundation &amp; AWS Data Engineering</strong> — Google Cloud Skills Boost &amp; AWS Skill Builder (2026).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900">AI Basic: Overview of AI (CRA Training Program)</strong> — Huawei Talent (Maret 2025) — Sertifikasi dasar pemrosesan data, logika algoritma, dan arsitektur AI.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900">Introduction to Microsoft 365 Copilot</strong> — Microsoft (Februari 2026) &amp; <strong className="text-zinc-900">Anthropic Claude Academy</strong> (2026).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900">Penulis Naskah Karya Terpilih — Perpusnas Press - HUT ke-46 Perpusnas RI (Mei 2026):</strong> Terpilih menulis naskah buku nasional berjudul: <em>&ldquo;Gawai dalam Genggaman, Dunia dalam Kebutaan: Menciptakan Produktivitas Positif Melalui Jendela Digital Perpusnas&rdquo;</em> (Diterbitkan resmi oleh Perpusnas Press).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-zinc-900">Peringkat 10 Olimpiade Sains Nasional (OSN) SMA Tingkat Kota Cilegon &amp; Peserta OSN Tingkat Provinsi Banten</strong> — Mata Pelajaran Geografi (Dinas Pendidikan dan Kebudayaan Provinsi Banten, 2023) &amp; <strong className="text-zinc-900">TOEFL Prediction Test Skor 630</strong> (Central Course, 2026).
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
