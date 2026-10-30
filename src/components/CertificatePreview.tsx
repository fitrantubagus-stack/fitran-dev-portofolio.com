import React from 'react';
import { CertificateItem } from '../types';
import { CertificateQRCode } from './CertificateQRCode';

interface CertificatePreviewProps {
  cert: CertificateItem;
  size?: 'compact' | 'full';
}

export const CertificatePreview: React.FC<CertificatePreviewProps> = ({
  cert,
  size = 'compact',
}) => {
  const isFull = size === 'full';

  // --------------------------------------------------------------------------
  // High-Resolution Official Extracted Certificate Images
  // --------------------------------------------------------------------------
  const availableCertImages = new Set([
    'cert-meta-blueprint.png',
    'cert-vercel-nextjs.jpg',
    'cert-vercel-nextjs.png',
    'cert-oshsp-2024.jpg',
    'cert-oshsp-2024.png',
    'cert-oshsp-2024-filled.png',
    'cert-perpusnas-46th.png',
    'award-kshpi-2024.png',
    'cert-aws-api-gateway.png',
    'cert-aws-iam.png',
    'cert-aws-responsible-ai.png',
    'cert-aws-bedrock-guardrails.png',
    'cert-aws-data-engineering.png',
    'cert-aws-security-bedrock.png',
    'cert-nvidia-dsx-air.png',
    'cert-nvidia-cvt.png',
    'cert-nvidia-netq.png',
    'cert-claude-capabilities-limitations.png',
    'cert-claude-101.png',
    'cert-claude-platform-101.png',
    'cert-dicoding-microsoft-fabric.png',
    'cert-google-gemini-educator.png',
    'cert-google-gemini.png',
    'cert-google-ads-display.png',
    'cert-google-ga4-read-reports.png',
    'cert-google-campaign-manager-360.png',
    'cert-google-analytics-individual.png',
    'cert-google-ads-apps.png',
    'cert-google-wallet-1.png',
    'cert-google-wallet-2.png',
    'cert-sohib-bercerita.png',
    'cert-bed-gamifikasi.png',
    'cert-bed-literasi-numerasi.png',
    'cert-bed-komunitas-belajar.png',
  ]);

  const [imgError, setImgError] = React.useState(false);
  const directImageUrl =
    cert.customImageFilename && availableCertImages.has(cert.customImageFilename)
      ? `/certificates/${cert.customImageFilename}`
      : null;

  if (directImageUrl && !imgError) {
    return (
      <div
        className={`w-full bg-[#0D1117] rounded-xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800 flex items-center justify-center relative shadow-sm ${
          isFull ? 'p-2 sm:p-4 bg-zinc-950/40 min-h-[360px]' : 'aspect-[4/3] p-1.5'
        }`}
      >
        <img
          src={directImageUrl}
          alt={cert.title}
          className={`w-full h-full object-contain rounded-lg ${isFull ? 'max-h-[70vh]' : ''}`}
          loading="lazy"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 0A. Meta Blueprint (Official Meta Platforms Accreditation)
  // --------------------------------------------------------------------------
  if (cert.issuer === 'Meta') {
    return (
      <div
        className={`w-full aspect-[4/3] bg-white text-zinc-900 border border-zinc-200/90 dark:border-zinc-700 rounded-xl overflow-hidden shadow-sm relative flex flex-col justify-between select-none ${
          isFull ? 'p-8 sm:p-12 md:p-14' : 'p-4 sm:p-5'
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 120 40" className={isFull ? 'w-24 sm:w-28 h-auto' : 'w-16 h-auto'}>
              <path
                d="M19.2 12.8c-2.3 0-4.3 1.1-5.6 2.8-1.3-1.7-3.3-2.8-5.6-2.8C3.6 12.8 0 16.7 0 21.6c0 6.6 6 12 13.6 12 4.4 0 8.3-2.1 10.7-5.3 2.4 3.2 6.3 5.3 10.7 5.3 7.6 0 13.6-5.4 13.6-12 0-4.9-3.6-8.8-8-8.8-2.3 0-4.3 1.1-5.6 2.8-1.3-1.7-3.3-2.8-5.6-2.8-2.3 0-4.3 1.1-5.6 2.8-1.3-1.7-3.3-2.8-5.6-2.8zm-5.6 14.8c-3.8 0-6.9-3.2-6.9-7.2s3.1-7.2 6.9-7.2c2.8 0 5.2 1.7 6.3 4.2-.3.9-.5 1.9-.5 3s.2 2.1.5 3c-1.1 2.5-3.5 4.2-6.3 4.2zm21.3 0c-2.8 0-5.2-1.7-6.3-4.2.3-.9.5-1.9.5-3s-.2-2.1-.5-3c1.1-2.5 3.5-4.2 6.3-4.2 3.8 0 6.9 3.2 6.9 7.2s-3.1 7.2-6.9 7.2z"
                fill="#0081FB"
              />
              <text x="52" y="27" fontSize="16" fontWeight="bold" fontFamily="sans-serif" fill="#1C2B33">
                Meta
              </text>
            </svg>
            <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-sky-50 text-[#0081FB] border border-sky-200">
              Blueprint
            </span>
          </div>
          <span className="font-mono text-[9px] sm:text-[11px] text-zinc-500">Official Certificate</span>
        </div>

        <div className="my-auto py-2 sm:py-4 space-y-2">
          <p className="font-mono text-[9px] sm:text-xs text-zinc-500 uppercase tracking-widest">
            Course Completion
          </p>
          <h3
            className={`font-sans font-black text-zinc-900 tracking-tight leading-snug ${
              isFull ? 'text-2xl sm:text-3xl' : 'text-xs sm:text-sm'
            }`}
          >
            {cert.title}
          </h3>
          <p className="font-sans text-[10px] sm:text-xs text-zinc-600">
            Awarded to <span className="font-bold text-zinc-900">Tubagus Fitran Badruttamam</span>
          </p>
        </div>

        <div className="flex items-end justify-between pt-2 border-t border-zinc-100 text-[9px] sm:text-xs text-zinc-500 font-mono">
          <div>
            <p className="text-zinc-400">Date Completed</p>
            <p className="font-semibold text-zinc-800">{cert.date}</p>
          </div>
          <div className="text-right">
            <span className="text-[#0081FB] font-bold">Meta Certified</span>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 0B. Vercel (Next.js App Router Fundamentals)
  // --------------------------------------------------------------------------
  if (cert.issuer === 'Vercel') {
    return (
      <div
        className={`w-full aspect-[4/3] bg-black text-white border border-zinc-800 rounded-xl overflow-hidden shadow-sm relative flex flex-col justify-between select-none ${
          isFull ? 'p-8 sm:p-12 md:p-14' : 'p-4 sm:p-5'
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 115 100" className={isFull ? 'w-6 h-6' : 'w-4 h-4'}>
              <polygon points="57.5,0 115,100 0,100" fill="#FFFFFF" />
            </svg>
            <span className="font-sans font-bold tracking-tight text-sm">▲ Vercel</span>
          </div>
          <span className="font-mono text-[9px] sm:text-[11px] text-zinc-400">Next.js Certified</span>
        </div>

        <div className="my-auto py-2 sm:py-4 space-y-2">
          <p className="font-mono text-[9px] sm:text-xs text-zinc-400 uppercase tracking-widest">
            Certificate of Achievement
          </p>
          <h3
            className={`font-sans font-extrabold text-white tracking-tight leading-snug ${
              isFull ? 'text-2xl sm:text-3xl' : 'text-xs sm:text-sm'
            }`}
          >
            {cert.title}
          </h3>
          <p className="font-sans text-[10px] sm:text-xs text-zinc-300">
            Awarded to <span className="font-bold text-white">Tubagus Fitran Badruttamam</span>
          </p>
        </div>

        <div className="flex items-end justify-between pt-2 border-t border-zinc-800 text-[9px] sm:text-xs text-zinc-400 font-mono">
          <div>
            <p className="text-zinc-500">Issued by</p>
            <p className="font-semibold text-zinc-200">Guillermo Rauch, CEO</p>
          </div>
          <div className="text-right">
            <span className="text-emerald-400 font-bold font-mono">VERIFIED</span>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 1. AWS Training & Certification (Responsible AI & Bedrock Guardrails)
  // --------------------------------------------------------------------------
  if (cert.issuer === 'AWS') {
    const isBedrock = cert.id === 'aws-bedrock-guardrails';
    return (
      <div
        className={`w-full aspect-[4/3] bg-[#FFFFFF] text-zinc-900 border border-zinc-200/90 dark:border-zinc-700 rounded-xl overflow-hidden shadow-sm relative flex flex-col justify-between select-none ${
          isBedrock ? 'bg-gradient-to-br from-[#EEF8F6] via-[#FFFFFF] to-[#F5F3FF]' : 'bg-[#FFFFFF]'
        } ${isFull ? 'p-8 sm:p-12 md:p-14' : 'p-4 sm:p-5'}`}
      >
        {/* Header */}
        <div className="space-y-0.5">
          <p className={`font-sans font-bold text-zinc-900 tracking-tight leading-tight ${isFull ? 'text-lg sm:text-xl md:text-2xl' : 'text-xs sm:text-sm'}`}>
            AWS Training &amp; Certification
          </p>
          <p className={`font-sans text-zinc-800 leading-tight ${isFull ? 'text-base sm:text-lg' : 'text-[11px] sm:text-xs'}`}>
            Completion Certificate
          </p>
        </div>

        {/* Certificate Title */}
        <div className="my-auto py-2 sm:py-4 space-y-1.5 sm:space-y-2.5">
          <h3
            className={`font-sans font-extrabold text-zinc-900 leading-tight tracking-tight ${
              isFull ? 'text-2xl sm:text-3xl md:text-4xl max-w-2xl' : 'text-xs sm:text-sm font-bold line-clamp-2'
            }`}
          >
            {cert.title}
          </h3>
          <p className={`font-sans text-zinc-700 ${isFull ? 'text-sm sm:text-base pt-0.5' : 'text-[9px] sm:text-[10px]'}`}>
            Completed: August 07, 2026
          </p>

          <div className="pt-1.5 sm:pt-3">
            <p className={`text-zinc-600 font-normal ${isFull ? 'text-sm' : 'text-[9px] sm:text-[10px]'}`}>
              Awarded to
            </p>
            <p
              className={`font-sans font-bold text-zinc-900 tracking-tight ${
                isFull ? 'text-xl sm:text-2xl md:text-3xl mt-0.5' : 'text-xs sm:text-sm font-extrabold'
              }`}
            >
              Tubagus Fitran Badruttamam
            </p>
          </div>
        </div>

        {/* Footer: Signature on left, AWS Logo on right */}
        <div className="flex items-end justify-between pt-2 border-t border-transparent">
          <div>
            <svg
              viewBox="0 0 160 45"
              className={isFull ? 'w-28 sm:w-36 md:w-40 h-auto mb-1 text-zinc-800' : 'w-16 sm:w-20 h-auto text-zinc-800'}
            >
              <path
                d="M10,32 Q25,12 40,28 T70,24 T100,26 T130,22 Q145,28 155,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M20,18 Q35,8 55,20 T85,16 T115,22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <p className={`font-sans font-medium text-zinc-900 leading-tight ${isFull ? 'text-sm sm:text-base font-semibold' : 'text-[9px] sm:text-[10px] font-bold'}`}>
              Michelle Vaz
            </p>
            <p className={`font-sans text-zinc-600 leading-tight ${isFull ? 'text-xs' : 'text-[8px] sm:text-[9px]'}`}>
              Director, AWS Training &amp; Certification
            </p>
          </div>

          {/* AWS Logo with curve */}
          <div className="text-zinc-900 shrink-0">
            <svg
              viewBox="0 0 100 60"
              className={isFull ? 'w-20 sm:w-28 h-auto' : 'w-12 sm:w-14 h-auto'}
              fill="currentColor"
            >
              <text x="50" y="32" textAnchor="middle" fontSize="30" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1">
                aws
              </text>
              <path
                d="M16,42 Q50,56 84,42"
                fill="none"
                stroke="#232F3E"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <polygon points="86,40 82,49 76,43" fill="#232F3E" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 2. NVIDIA Deep Learning Institute (DSX Air & CVT Fundamentals)
  // --------------------------------------------------------------------------
  if (cert.issuer === 'NVIDIA') {
    return (
      <div
        className={`w-full aspect-[4/3] bg-[#FFFFFF] text-zinc-900 border border-zinc-200/90 dark:border-zinc-700 rounded-xl overflow-hidden shadow-sm relative flex select-none`}
      >
        {/* Solid Lime Green Left Bar */}
        <div className="w-3 sm:w-4 md:w-5 bg-[#76B900] shrink-0"></div>

        <div className={`flex-1 flex flex-col justify-between ${isFull ? 'p-8 sm:p-12 md:p-14' : 'p-4 sm:p-5'}`}>
          {/* Top Left: NVIDIA Logo + Certificate of Completion */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2">
              {/* NVIDIA Logo SVG */}
              <svg viewBox="0 0 120 28" className={isFull ? 'h-6 sm:h-8 w-auto' : 'h-4 sm:h-5 w-auto'}>
                {/* Green Claw/Eye Symbol */}
                <path
                  d="M14,4 C6,4 0,10 0,18 C0,24 5,28 11,28 C19,28 24,20 24,18 C24,18 20,22 14,22 C9,22 6,19 6,16 C6,11 11,9 15,9 C19,9 23,12 23,12 C23,12 19,4 14,4 Z"
                  fill="#76B900"
                />
                <text x="32" y="21" fontSize="18" fontWeight="900" fontFamily="sans-serif" fill="#000000" letterSpacing="-0.5">
                  NVIDIA.
                </text>
              </svg>
            </div>
            <h4 className={`font-sans font-bold text-zinc-900 tracking-tight ${isFull ? 'text-lg sm:text-xl md:text-2xl' : 'text-xs sm:text-sm'}`}>
              Certificate of Completion
            </h4>
          </div>

          {/* Middle: Recipient & Course Title */}
          <div className="my-auto py-2 sm:py-3 space-y-1 sm:space-y-2">
            <p className={`font-sans text-zinc-600 ${isFull ? 'text-sm sm:text-base' : 'text-[9px] sm:text-[10px]'}`}>
              This certificate is awarded to
            </p>
            <p
              className={`font-sans font-extrabold text-zinc-900 tracking-tight ${
                isFull ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xs sm:text-sm font-bold'
              }`}
            >
              Tubagus Fitran Badruttamam
            </p>
            <p className={`font-sans text-zinc-800 leading-snug ${isFull ? 'text-base sm:text-lg md:text-xl pt-0.5' : 'text-[11px] sm:text-xs font-medium'}`}>
              for successfully completing <span className="font-bold text-zinc-900">{cert.title}</span>
            </p>
          </div>

          {/* Footer: Signature on left, Issue Date on right */}
          <div className="flex items-end justify-between pt-2 border-t border-zinc-300">
            <div>
              <svg
                viewBox="0 0 140 36"
                className={isFull ? 'w-24 sm:w-32 md:w-36 h-auto mb-1 text-zinc-800' : 'w-14 sm:w-18 h-auto text-zinc-800'}
              >
                <path
                  d="M5,24 Q20,6 35,22 T65,18 T95,20 T125,16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              <p className={`font-sans font-medium text-zinc-900 leading-tight ${isFull ? 'text-xs sm:text-sm font-semibold' : 'text-[9px] sm:text-[10px] font-bold'}`}>
                Heidi Castagna
              </p>
              <p className={`font-sans text-zinc-600 leading-tight ${isFull ? 'text-[11px] sm:text-xs' : 'text-[8px] sm:text-[9px]'}`}>
                VP, Global Education Services and Field Enablement
              </p>
            </div>

            <div className="text-right font-sans">
              <p className={`text-zinc-500 leading-tight ${isFull ? 'text-xs' : 'text-[8px] sm:text-[9px]'}`}>Issue Date:</p>
              <p className={`font-semibold text-zinc-900 leading-tight ${isFull ? 'text-xs sm:text-sm' : 'text-[9px] sm:text-[10px]'}`}>
                Aug 08, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 3. OSHSP 2024 National Gold Medal (Piagam Penghargaan Matematika)
  // --------------------------------------------------------------------------
  if (cert.issuer === 'OSHSP') {
    return (
      <div
        className={`w-full aspect-[4/3] bg-[#FAFAFA] text-zinc-900 border-2 border-red-500/80 rounded-xl overflow-hidden shadow-sm relative flex flex-col justify-between select-none ${
          isFull ? 'p-6 sm:p-10 md:p-12' : 'p-3 sm:p-4'
        }`}
      >
        {/* Top Right Red & Gold Diagonal Geometric Shapes */}
        <div className="absolute top-0 right-0 w-28 sm:w-48 md:w-56 h-28 sm:h-48 md:h-56 pointer-events-none overflow-hidden">
          <polygon points="60,0 220,0 220,160" fill="#DC2626" />
          <polygon points="120,0 220,0 220,100" fill="#991B1B" />
          <polygon points="170,0 220,0 220,50" fill="#F59E0B" />
          <path d="M0,0 L220,220" stroke="#F59E0B" strokeWidth="3" />
        </div>

        {/* Bottom Left Red & Gold Diagonal Shapes */}
        <div className="absolute bottom-0 left-0 w-28 sm:w-48 md:w-56 h-28 sm:h-48 md:h-56 pointer-events-none overflow-hidden">
          <polygon points="0,60 0,220 160,220" fill="#DC2626" />
          <polygon points="0,120 0,220 100,220" fill="#991B1B" />
          <polygon points="0,170 0,220 50,220" fill="#F59E0B" />
          <path d="M0,0 L220,220" stroke="#F59E0B" strokeWidth="3" />
        </div>

        {/* Top Left Winner Rosette Medal Badge */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            {/* Rosette outer ring */}
            <div className={`rounded-full bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 p-1 shadow-md border-2 border-red-600 flex items-center justify-center ${isFull ? 'w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20' : 'w-8 h-8 sm:w-10 sm:h-10'}`}>
              <div className="w-full h-full rounded-full bg-linear-to-b from-amber-300 to-amber-600 flex flex-col items-center justify-center text-center text-zinc-900 border border-yellow-100 p-0.5">
                <span className={`font-sans font-bold leading-none ${isFull ? 'text-[8px] sm:text-[9px]' : 'text-[5px]'}`}>The Winner</span>
                <span className={`font-sans font-black tracking-wider leading-none text-red-950 my-0.5 ${isFull ? 'text-[10px] sm:text-xs md:text-sm' : 'text-[6px]'}`}>OSHSP</span>
                <span className={`font-sans font-extrabold leading-none ${isFull ? 'text-[8px] sm:text-[9px]' : 'text-[5px]'}`}>2024</span>
              </div>
            </div>
          </div>
          {/* Red and Gold Ribbon tails */}
          <div className="flex gap-1 -mt-1">
            <div className={`bg-red-600 border-r border-amber-300 ${isFull ? 'w-2 h-5 sm:w-2.5 sm:h-6' : 'w-1 h-2.5'}`}></div>
            <div className={`bg-red-700 border-l border-amber-300 ${isFull ? 'w-2 h-5 sm:w-2.5 sm:h-6' : 'w-1 h-2.5'}`}></div>
          </div>
        </div>

        {/* Center Main Header */}
        <div className="text-center pt-1 sm:pt-2 pl-10 pr-10 sm:pl-20 sm:pr-20">
          <h2 className={`font-sans font-black tracking-wide text-[#DC2626] uppercase ${isFull ? 'text-xl sm:text-3xl md:text-4xl' : 'text-xs sm:text-sm'}`}>
            PIAGAM PENGHARGAAN
          </h2>
          <h3 className={`font-sans font-black text-zinc-900 tracking-tight mt-0.5 uppercase ${isFull ? 'text-xs sm:text-base md:text-lg' : 'text-[9px] sm:text-[10px]'}`}>
            OLIMPIADE SAINS HARI SUMPAH PEMUDA 2024
          </h3>
          <p className={`font-sans font-bold text-zinc-800 mt-0.5 ${isFull ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px]'}`}>
            No : 593/01/OSHSP/2024
          </p>
        </div>

        {/* Subtitle & Table */}
        <div className="my-auto py-1 sm:py-2 px-1 sm:px-4">
          <p className={`text-zinc-600 text-center leading-tight font-sans ${isFull ? 'text-xs sm:text-sm mb-2' : 'text-[7px] sm:text-[8px] mb-1'}`}>
            Olimpiade Siswa (@olimpiadesiswa.id) dibawah naungan CV. Divya Cahaya Prestasi dengan nomor izin AHU-0057943-AH.01.14 Tahun 2021, Memberikan Penghargaan kepada:
          </p>

          {/* Dotted Key-Value Table */}
          <div className={`bg-white/90 border border-zinc-200/80 rounded-lg p-2 sm:p-3 font-sans shadow-2xs space-y-0.5 sm:space-y-1 ${isFull ? 'text-xs sm:text-sm' : 'text-[7.5px] sm:text-[8.5px]'}`}>
            {[
              { label: 'Nama', value: 'TUBAGUS FITRAN BADRUTTAMAM' },
              { label: 'Asal Instansi', value: 'UNIVERSITAS MUHAMMADIYAH BANTEN' },
              { label: 'Provinsi', value: 'BANTEN' },
              { label: 'Bidang', value: 'MATEMATIKA' },
              { label: 'Tingkat', value: 'MAHASISWA' },
              { label: 'Jenjang', value: 'PERGURUAN TINGGI' },
              { label: 'Predikat', value: 'PERAIH MEDALI EMAS' },
              { label: 'Nilai', value: 'A+' },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-1 items-baseline">
                <span className="col-span-4 text-zinc-600 font-medium">{row.label}</span>
                <span className="col-span-8 font-bold text-zinc-900">: {row.value}</span>
              </div>
            ))}
          </div>

          <p className={`text-zinc-600 text-center leading-tight font-sans mt-1 sm:mt-1.5 ${isFull ? 'text-xs' : 'text-[7px] sm:text-[8px]'}`}>
            Atas Prestasinya pada kegiatan Olimpiade Sains Hari Sumpah Pemuda 2024 Tingkat Nasional yang diadakan pada tanggal 25–27 Oktober 2024
          </p>
        </div>

        {/* Footer: Balikpapan Date, QR code on left, Stamp & Signatory on right */}
        <div className="flex items-end justify-between pt-1 px-1 sm:px-4">
          <div className="flex items-center gap-1.5">
            <CertificateQRCode size={isFull ? 44 : 22} />
          </div>

          <div className="text-right font-sans">
            <p className={`text-zinc-600 font-medium ${isFull ? 'text-xs' : 'text-[7px] sm:text-[8px]'}`}>
              Balikpapan, 30 Oktober 2024
            </p>
            {/* Signature & Seal representation */}
            <div className="my-0.5 inline-flex items-center gap-1.5">
              <div className={`rounded-full border border-blue-600 text-blue-700 font-serif font-black flex items-center justify-center ${isFull ? 'w-8 h-8 text-[7px]' : 'w-4 h-4 text-[4px]'}`}>
                SEAL
              </div>
              <svg viewBox="0 0 100 28" className={isFull ? 'w-18 h-auto text-zinc-900' : 'w-10 h-auto text-zinc-900'}>
                <path d="M5,20 Q30,4 60,18 T95,14" fill="none" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </div>
            <p className={`font-bold text-zinc-900 leading-tight underline ${isFull ? 'text-xs sm:text-sm' : 'text-[8px]'}`}>
              Suleman Tappi, S.Si., M.T.
            </p>
            <p className={`text-zinc-600 leading-tight ${isFull ? 'text-[10px]' : 'text-[7px]'}`}>
              Direktur CV. Divya Cahaya Prestasi
            </p>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 4. KSHPI 2024 National Gold Medal (Piagam Penghargaan Sejarah)
  // --------------------------------------------------------------------------
  if (cert.issuer === 'KSHPI') {
    return (
      <div
        className={`w-full aspect-[4/3] bg-[#FFFFFF] text-zinc-900 border-2 border-red-600/70 rounded-xl overflow-hidden shadow-sm relative flex flex-col justify-between select-none ${
          isFull ? 'p-6 sm:p-10 md:p-12' : 'p-3 sm:p-4'
        }`}
      >
        {/* Top Right Polygonal Low-Poly Crystal Facets */}
        <div className="absolute top-0 right-0 w-32 sm:w-52 md:w-60 h-32 sm:h-52 md:h-60 pointer-events-none overflow-hidden">
          <polygon points="80,0 240,0 240,160 160,80" fill="#DC2626" />
          <polygon points="160,80 240,160 240,240 120,180" fill="#B91C1C" />
          <polygon points="80,0 160,80 120,180 40,60" fill="#EF4444" />
          <polygon points="40,60 120,180 240,240 0,240" fill="#F87171" opacity="0.4" />
        </div>

        {/* Bottom Left Classical Filigree Flourish */}
        <div className="absolute bottom-0 left-0 w-20 sm:w-36 md:w-40 h-20 sm:h-36 md:h-40 pointer-events-none text-red-700/80 p-2">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2">
            <path d="M10,90 Q10,50 50,50 Q90,50 90,10" />
            <circle cx="20" cy="80" r="8" />
            <circle cx="35" cy="65" r="6" />
            <circle cx="50" cy="50" r="5" />
            <circle cx="65" cy="35" r="6" />
            <circle cx="80" cy="20" r="8" />
          </svg>
        </div>

        {/* Top Left Winner Rosette Medal Badge */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            <div className={`rounded-full bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 p-1 shadow-md border-2 border-red-800 flex items-center justify-center ${isFull ? 'w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20' : 'w-8 h-8 sm:w-10 sm:h-10'}`}>
              <div className="w-full h-full rounded-full bg-linear-to-b from-amber-300 to-amber-700 flex flex-col items-center justify-center text-center text-zinc-900 border border-yellow-100 p-0.5">
                <span className={`font-sans font-bold leading-none ${isFull ? 'text-[8px] sm:text-[9px]' : 'text-[5px]'}`}>The Winner</span>
                <span className={`font-sans font-black tracking-wider leading-none text-red-950 my-0.5 ${isFull ? 'text-[10px] sm:text-xs md:text-sm' : 'text-[6px]'}`}>KSHPI</span>
                <span className={`font-sans font-extrabold leading-none ${isFull ? 'text-[8px] sm:text-[9px]' : 'text-[5px]'}`}>2024</span>
              </div>
            </div>
          </div>
          {/* Dark Red Ribbon tails */}
          <div className="flex gap-1 -mt-1">
            <div className={`bg-red-800 border-r border-amber-300 ${isFull ? 'w-2 h-5 sm:w-2.5 sm:h-6' : 'w-1 h-2.5'}`}></div>
            <div className={`bg-red-900 border-l border-amber-300 ${isFull ? 'w-2 h-5 sm:w-2.5 sm:h-6' : 'w-1 h-2.5'}`}></div>
          </div>
        </div>

        {/* Center Main Header */}
        <div className="text-center pt-1 sm:pt-2 pl-10 pr-10 sm:pl-20 sm:pr-20">
          <h2 className={`font-sans font-black tracking-wide text-zinc-900 uppercase ${isFull ? 'text-xl sm:text-3xl md:text-4xl' : 'text-xs sm:text-sm'}`}>
            PIAGAM PENGHARGAAN
          </h2>
          <h3 className={`font-sans font-black text-red-700 tracking-tight mt-0.5 uppercase ${isFull ? 'text-xs sm:text-base md:text-lg' : 'text-[9px] sm:text-[10px]'}`}>
            KOMPETISI SAINS HARI PAHLAWAN INDONESIA
          </h3>
          <p className={`font-sans font-bold text-zinc-800 mt-0.5 ${isFull ? 'text-xs sm:text-sm' : 'text-[8px] sm:text-[9px]'}`}>
            No : 1/01/KSHPI /2024
          </p>
        </div>

        {/* Subtitle & Table */}
        <div className="my-auto py-1 sm:py-2 px-1 sm:px-4">
          <p className={`text-zinc-600 text-center leading-tight font-sans ${isFull ? 'text-xs sm:text-sm mb-2' : 'text-[7px] sm:text-[8px] mb-1'}`}>
            Kompetisi Siswa (@kompetisisiswa.id) dibawah naungan PT. Eka Edukasi Utama dengan nomor izin AHU-0122241 AH.01.11.TAHUN 2022, Memberikan Penghargaan kepada:
          </p>

          {/* Dotted Key-Value Table */}
          <div className={`bg-white/90 border border-zinc-200/80 rounded-lg p-2 sm:p-3 font-sans shadow-2xs space-y-0.5 sm:space-y-1 ${isFull ? 'text-xs sm:text-sm' : 'text-[7.5px] sm:text-[8.5px]'}`}>
            {[
              { label: 'Nama', value: 'TUBAGUS FITRAN BADRUTTAMAM' },
              { label: 'Asal Instansi', value: 'UNIVERSITAS MUHAMMADIYAH BANTEN' },
              { label: 'Provinsi', value: 'BANTEN' },
              { label: 'Bidang', value: 'SEJARAH' },
              { label: 'Tingkat', value: 'MAHASISWA' },
              { label: 'Jenjang', value: 'PERGURUAN TINGGI' },
              { label: 'Predikat', value: 'PERAIH MEDALI EMAS' },
              { label: 'Nilai', value: 'A+' },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-1 items-baseline">
                <span className="col-span-4 text-zinc-600 font-medium">{row.label}</span>
                <span className="col-span-8 font-bold text-zinc-900">: {row.value}</span>
              </div>
            ))}
          </div>

          <p className={`text-zinc-600 text-center leading-tight font-sans mt-1 sm:mt-1.5 ${isFull ? 'text-xs' : 'text-[7px] sm:text-[8px]'}`}>
            Atas Prestasinya pada kegiatan Kompetisi Sains Hari Pahlawan Indonesia yang diadakan pada tanggal 25–28 November 2024 Tingkat Nasional
          </p>
        </div>

        {/* Footer: Balikpapan Date, QR code on left, Stamp & Signatory on right */}
        <div className="flex items-end justify-between pt-1 px-1 sm:px-4">
          <div className="flex items-center gap-1.5">
            <CertificateQRCode size={isFull ? 44 : 22} />
          </div>

          <div className="text-right font-sans">
            <p className={`text-zinc-600 font-medium ${isFull ? 'text-xs' : 'text-[7px] sm:text-[8px]'}`}>
              Balikpapan, 30 November 2024
            </p>
            {/* Signature & Seal */}
            <div className="my-0.5 inline-flex items-center gap-1.5">
              <div className={`rounded-full border border-blue-700 text-blue-800 font-serif font-black flex items-center justify-center ${isFull ? 'w-8 h-8 text-[7px]' : 'w-4 h-4 text-[4px]'}`}>
                SEAL
              </div>
              <svg viewBox="0 0 100 28" className={isFull ? 'w-18 h-auto text-zinc-900' : 'w-10 h-auto text-zinc-900'}>
                <path d="M5,15 Q25,2 55,22 T95,12" fill="none" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </div>
            <p className={`font-bold text-zinc-900 leading-tight underline ${isFull ? 'text-xs sm:text-sm' : 'text-[8px]'}`}>
              Dipl. Ing Ranjiv Maulana
            </p>
            <p className={`text-zinc-600 leading-tight ${isFull ? 'text-[10px]' : 'text-[7px]'}`}>
              Direktur PT. Eka Edukasi Utama
            </p>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 5. Google Analytics & Campaign Manager 360 Certifications
  // --------------------------------------------------------------------------
  if (cert.issuer === 'Google') {
    const isCampaignManager = cert.id === 'google-campaign-manager-360';
    const badgeTextTop = isCampaignManager ? 'CAMPAIGN MANAGER 360' : 'GOOGLE ANALYTICS';
    const certTitle = isCampaignManager
      ? 'Ujian Sertifikasi Campaign Manager 360'
      : 'Sertifikasi Google Analytics';

    return (
      <div
        className={`w-full aspect-[4/3] bg-[#FFFFFF] text-zinc-900 border border-zinc-300 rounded-xl overflow-hidden shadow-sm relative flex flex-col justify-between select-none ${
          isFull ? 'p-6 sm:p-10 md:p-12' : 'p-3 sm:p-4'
        }`}
      >
        {/* Crisp Inner Grey Border Box */}
        <div className="absolute inset-1.5 sm:inset-3 border border-zinc-300 pointer-events-none rounded-lg"></div>

        {/* Top Centered Circular Google Certification Badge */}
        <div className="flex flex-col items-center pt-1 sm:pt-2">
          <div className="relative flex items-center justify-center">
            {/* Dotted border circle with Arc text */}
            <svg
              viewBox="0 0 160 160"
              className={isFull ? 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28' : 'w-12 h-12 sm:w-14 sm:h-14'}
            >
              <defs>
                <path id={`certArcTop-${cert.id}`} d="M 22,80 A 58,58 0 1,1 138,80" fill="none" />
                <path id={`certArcBottom-${cert.id}`} d="M 138,80 A 58,58 0 0,1 22,80" fill="none" />
              </defs>

              {/* Dotted Outer Circle */}
              <circle cx="80" cy="80" r="74" fill="none" stroke="#71717A" strokeWidth="1.8" strokeDasharray="3.5 3.5" />

              {/* Arc Text Top */}
              <text fontSize="10.5" fontWeight="bold" fill="#52525B" fontFamily="sans-serif" letterSpacing="1">
                <textPath href={`#certArcTop-${cert.id}`} startOffset="50%" textAnchor="middle">
                  {badgeTextTop}
                </textPath>
              </text>

              {/* Arc Text Bottom */}
              <text fontSize="11" fontWeight="bold" fill="#52525B" fontFamily="sans-serif" letterSpacing="1.2">
                <textPath href={`#certArcBottom-${cert.id}`} startOffset="50%" textAnchor="middle">
                  CERTIFIED
                </textPath>
              </text>

              {/* Google 4-Color Ring */}
              <g transform="translate(80, 80) scale(0.68)">
                {/* Red Quarter (Top Left) */}
                <path d="M 0,-50 A 50,50 0 0,0 -50,0 L -34,0 A 34,34 0 0,1 0,-34 Z" fill="#EA4335" />
                {/* Blue Quarter (Top Right) */}
                <path d="M 0,-50 A 50,50 0 0,1 50,0 L 34,0 A 34,34 0 0,0 0,-34 Z" fill="#4285F4" />
                {/* Yellow Quarter (Bottom Left) */}
                <path d="M -50,0 A 50,50 0 0,0 0,50 L 0,34 A 34,34 0 0,1 -34,0 Z" fill="#FBBC05" />
                {/* Green Quarter (Bottom Right) */}
                <path d="M 0,50 A 50,50 0 0,0 50,0 L 34,0 A 34,34 0 0,1 0,34 Z" fill="#34A853" />

                {/* Center Icon */}
                {isCampaignManager ? (
                  /* Campaign Manager 360 Target / Bullseye icon */
                  <g>
                    <circle cx="0" cy="0" r="18" fill="#4285F4" />
                    <circle cx="0" cy="0" r="11" fill="#FFFFFF" />
                    <circle cx="0" cy="0" r="5" fill="#4285F4" />
                  </g>
                ) : (
                  /* Google Analytics Orange Bar Chart icon */
                  <g transform="translate(-16, -18)">
                    <rect x="6" y="16" width="6" height="20" rx="3" fill="#F9AB00" />
                    <rect x="15" y="6" width="6" height="30" rx="3" fill="#E37400" />
                    <circle cx="3" cy="33" r="3" fill="#F9AB00" />
                  </g>
                )}
              </g>
            </svg>
          </div>
        </div>

        {/* Center Main Text */}
        <div className="my-auto py-1 sm:py-2 text-center space-y-1 sm:space-y-2">
          <p className={`font-sans text-zinc-600 ${isFull ? 'text-sm sm:text-base md:text-lg' : 'text-[9px] sm:text-[10px]'}`}>
            Dengan ini dinyatakan bahwa
          </p>
          <h2
            className={`font-sans font-extrabold text-zinc-900 tracking-tight ${
              isFull ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xs sm:text-sm font-bold'
            }`}
          >
            Tubagus Fitran
          </h2>
          <p className={`font-sans text-zinc-600 ${isFull ? 'text-xs sm:text-sm md:text-base pt-0.5' : 'text-[9px] sm:text-[10px]'}`}>
            Berhasil lulus dan mendapatkan sertifikasi untuk
          </p>
          <h3
            className={`font-sans font-bold text-zinc-900 tracking-tight ${
              isFull ? 'text-base sm:text-xl md:text-2xl pt-0.5' : 'text-[11px] sm:text-xs'
            }`}
          >
            {certTitle}
          </h3>
        </div>

        {/* Footer: Details on left, QR on right */}
        <div className="flex items-end justify-between pt-1 px-1 sm:px-3 z-10">
          <div className="space-y-0.5 font-sans">
            <p className={`text-zinc-600 ${isFull ? 'text-xs' : 'text-[7.5px] sm:text-[8.5px]'}`}>
              Tanggal Terbit: 8 Agustus 2026
            </p>
            <p className={`text-zinc-600 ${isFull ? 'text-xs' : 'text-[7.5px] sm:text-[8.5px]'}`}>
              Tanggal Berakhir: 8 Agustus 2027
            </p>
            <p className={`text-zinc-800 font-mono font-medium ${isFull ? 'text-xs' : 'text-[7.5px] sm:text-[8.5px]'}`}>
              ID Sertifikat: {cert.certId || (isCampaignManager ? '191000751' : '190978287')}
            </p>
          </div>

          <div>
            <CertificateQRCode size={isFull ? 44 : 22} />
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 6. Perpustakaan Nasional RI (Perpusnas Press)
  // --------------------------------------------------------------------------
  if (cert.issuer === 'Perpusnas') {
    return (
      <div
        className={`w-full aspect-[4/3] bg-[#FFFFFF] text-zinc-900 border-2 border-teal-600/50 rounded-xl overflow-hidden shadow-sm relative flex flex-col justify-between select-none ${
          isFull ? 'p-6 sm:p-10 md:p-12' : 'p-3 sm:p-4'
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#0F766E]"></div>

        <div className="flex items-start justify-between gap-2 pt-1">
          <div>
            <p className="text-[10px] sm:text-xs font-black text-teal-900 tracking-wide">
              PERPUSTAKAAN NASIONAL REPUBLIK INDONESIA
            </p>
            <p className="text-[8px] sm:text-[10px] text-zinc-500 font-medium">
              Perpusnas Press — Buku Bunga Rampai HUT Ke-46
            </p>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-black bg-teal-50 text-teal-800 border border-teal-300">
            KARYA TERPILIH
          </span>
        </div>

        <div className="my-auto py-1 sm:py-2 text-center">
          <p className="text-[9px] sm:text-xs text-zinc-400 font-medium">Sertifikat Penghargaan Diberikan Kepada:</p>
          <p className={`font-sans font-extrabold text-zinc-900 mt-0.5 ${isFull ? 'text-xl sm:text-2xl md:text-3xl' : 'text-xs sm:text-sm'}`}>
            Tubagus Fitran Badruttamam
          </p>
          <p className="text-[8.5px] sm:text-xs text-zinc-500 mt-0.5">
            Atas terpilihnya karya naskah esai dalam penerbitan resmi Perpusnas Press:
          </p>
          <p className={`font-serif italic text-teal-900 font-bold mt-1 px-2 leading-relaxed ${isFull ? 'text-sm sm:text-base md:text-lg' : 'text-[10px] sm:text-xs line-clamp-2'}`}>
            "Gawai dalam Genggaman, Dunia dalam Kebutaan: Menciptakan Produktivitas Positif Melalui Jendela Digital Perpusnas"
          </p>
        </div>

        <div className="flex items-end justify-between pt-1.5 border-t border-zinc-200 text-[8px] sm:text-[10px] text-zinc-600">
          <div>
            <p className="font-bold text-zinc-900">Joko Santoso</p>
            <p className="text-zinc-500 text-[8px]">Sekretaris Utama Perpustakaan Nasional RI</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-teal-800 font-bold">No: HMP.05/674/2026</p>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 7. Google Cloud Skills & Academic fallback
  // --------------------------------------------------------------------------
  return (
    <div
      className={`w-full aspect-[4/3] bg-[#FFFFFF] text-zinc-900 border border-zinc-200 rounded-xl overflow-hidden shadow-sm relative flex flex-col justify-between select-none ${
        isFull ? 'p-6 sm:p-10 md:p-12' : 'p-3 sm:p-4'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] sm:text-xs font-bold text-zinc-900">{cert.issuerFullName}</p>
          <p className="text-[8px] sm:text-[10px] text-zinc-500">{cert.date}</p>
        </div>
        <span className="px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded text-[9px] sm:text-[10px] font-semibold">
          {cert.category.toUpperCase()}
        </span>
      </div>

      <div className="my-auto py-1 sm:py-2">
        <h4 className={`font-sans font-bold text-zinc-900 ${isFull ? 'text-lg sm:text-xl' : 'text-xs sm:text-sm font-bold'}`}>
          {cert.title}
        </h4>
        <p className="text-[10px] sm:text-xs text-zinc-600 mt-1 line-clamp-2">{cert.description}</p>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-zinc-100 text-[9px] sm:text-xs text-zinc-500">
        <span className="font-medium text-zinc-800">Recipient: Tubagus Fitran Badruttamam</span>
        <CertificateQRCode size={20} />
      </div>
    </div>
  );
};
