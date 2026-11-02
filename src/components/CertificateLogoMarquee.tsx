import React from 'react';
import { BrandIcon, BrandIconName } from './BrandIcon';
import { ShieldCheck, Award } from 'lucide-react';

interface PartnerIssuer {
  name: string;
  role: string;
  iconName: BrandIconName;
  badge: string;
}

// ROW 1: Global Cloud, AI & Tech Giants (Moving Left)
const ROW_1_ISSUERS: PartnerIssuer[] = [
  {
    name: 'Google Developers',
    role: 'Web & AI Platform',
    iconName: 'google',
    badge: 'Official',
  },
  {
    name: 'Amazon',
    role: 'Global Cloud Infrastructure',
    iconName: 'amazon',
    badge: 'Enterprise',
  },
  {
    name: 'AWS & Skill Builder',
    role: 'Cloud Architecture & DevOps',
    iconName: 'aws',
    badge: 'Skill Builder',
  },
  {
    name: 'Meta Blueprint',
    role: 'Server-Side Conversions CAPI',
    iconName: 'meta',
    badge: 'Accredited',
  },
  {
    name: 'Anthropic Claude',
    role: 'AI Reasoning & LLM Prompting',
    iconName: 'claude-anthropic',
    badge: 'Developer',
  },
  {
    name: 'NVIDIA Deep Learning',
    role: 'Computer Vision & GenAI',
    iconName: 'nvidia',
    badge: 'DLI Certified',
  },
  {
    name: 'Vercel Platform',
    role: 'Next.js Edge Deployment',
    iconName: 'vercel',
    badge: 'Production',
  },
];

// ROW 2: Developer Communities, Authorized Academies & National Institutions (Moving Right)
const ROW_2_ISSUERS: PartnerIssuer[] = [
  {
    name: 'Google Developer Groups',
    role: 'GDG on Campus Community',
    iconName: 'gdg-campus',
    badge: 'Member',
  },
  {
    name: 'Dicoding Indonesia',
    role: 'Google Authorized Academy',
    iconName: 'dicoding',
    badge: 'Graduated',
  },
  {
    name: 'Google Cloud Platform',
    role: 'Cloud Engineering & Vertex AI',
    iconName: 'google-cloud',
    badge: 'Certified',
  },
  {
    name: 'Perpustakaan Nasional RI',
    role: 'Karya Tulis Ilmiah Resmi',
    iconName: 'perpusnas',
    badge: 'Penulis Buku',
  },
  {
    name: 'OSN Puspresnas',
    role: 'Kemendikbudristek RI',
    iconName: 'osn',
    badge: '2x Medali Emas',
  },
  {
    name: 'Belajar Era Digital',
    role: 'Transformasi Teknologi',
    iconName: 'belajar-era-digital',
    badge: '4x Bersertifikat',
  },
  {
    name: 'Central Course (TOEFL 630)',
    role: 'Kecakapan Bahasa Internasional',
    iconName: 'central-course',
    badge: 'Skor 630',
  },
];

export const CertificateLogoMarquee: React.FC<{
  title?: string;
  subtitle?: string;
  className?: string;
}> = ({
  title = 'Lembaga Penerbit & Ekosistem Terverifikasi',
  subtitle = 'Kredensial dan sertifikasi resmi dari ekosistem teknologi dunia & nasional',
  className = '',
}) => {
  // Seamless loop duplicates
  const row1Items = [...ROW_1_ISSUERS, ...ROW_1_ISSUERS, ...ROW_1_ISSUERS];
  const row2Items = [...ROW_2_ISSUERS, ...ROW_2_ISSUERS, ...ROW_2_ISSUERS];

  return (
    <div className={`space-y-4 overflow-hidden select-none ${className}`}>
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
            {title}
          </span>
        </div>
        <p className="text-[11px] font-mono text-zinc-500">
          Geser ke samping otomatis · Hover untuk pause
        </p>
      </div>

      {/* Dual Horizontal Marquee Container */}
      <div className="relative space-y-3 py-1 overflow-hidden">
        {/* Left & Right Edge Gradient Fades for ultra smooth conveyor fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-linear-to-r from-[#FAFAFA] dark:from-[#09090B] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-linear-to-l from-[#FAFAFA] dark:from-[#09090B] to-transparent z-20 pointer-events-none" />

        {/* TRACK 1: MOVING LEFT */}
        <div className="flex items-center gap-4 w-max animate-marquee pause-on-hover">
          {row1Items.map((partner, index) => (
            <div
              key={`row1-${partner.name}-${index}`}
              className="h-14 px-4 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-blue-500/60 transition-all flex items-center gap-3 shrink-0 group cursor-default"
            >
              <div className="h-9 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <BrandIcon name={partner.iconName} size={26} colored={true} />
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
                    {partner.name}
                  </h4>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/60 whitespace-nowrap">
                    {partner.badge}
                  </span>
                </div>
                <p className="text-[10px] text-zinc-500 whitespace-nowrap">
                  {partner.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TRACK 2: MOVING RIGHT (REVERSE) */}
        <div className="flex items-center gap-4 w-max animate-marquee-reverse pause-on-hover">
          {row2Items.map((partner, index) => (
            <div
              key={`row2-${partner.name}-${index}`}
              className="h-14 px-4 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-blue-500/60 transition-all flex items-center gap-3 shrink-0 group cursor-default"
            >
              <div className="h-9 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <BrandIcon name={partner.iconName} size={26} colored={true} />
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
                    {partner.name}
                  </h4>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/60 whitespace-nowrap">
                    {partner.badge}
                  </span>
                </div>
                <p className="text-[10px] text-zinc-500 whitespace-nowrap">
                  {partner.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
