import React from 'react';
import { BrandIcon, BrandIconName } from './BrandIcon';
import { ShieldCheck, Award, ExternalLink } from 'lucide-react';

interface PartnerIssuer {
  name: string;
  role: string;
  iconName?: BrandIconName;
  customLogo?: string;
  badge: string;
  link?: string;
}

const PARTNER_ISSUERS: PartnerIssuer[] = [
  {
    name: 'Google Cloud Platform',
    role: 'Cloud Engineering & AI',
    iconName: 'google-cloud',
    badge: 'Certified',
  },
  {
    name: 'Amazon Web Services (AWS)',
    role: 'Cloud Architecture & DevOps',
    iconName: 'aws',
    badge: 'Skill Builder',
  },
  {
    name: 'Google Developer Groups',
    role: 'Global Developer Community',
    iconName: 'gdg-campus',
    badge: 'Member',
  },
  {
    name: 'Dicoding Indonesia',
    role: 'Google Authorized Partner',
    iconName: 'google-dev',
    badge: 'Graduated',
  },
  {
    name: 'Meta Blueprint',
    role: 'Server-Side Conversions CAPI',
    iconName: 'meta',
    badge: 'Accredited',
  },
  {
    name: 'NVIDIA Deep Learning Institute',
    role: 'Computer Vision & GenAI',
    iconName: 'nvidia',
    badge: 'DLI Certified',
  },
  {
    name: 'Perpustakaan Nasional RI',
    role: 'Karya Ilmiah & Publikasi Resmi',
    iconName: 'perpusnas',
    badge: 'Penulis Buku',
  },
  {
    name: 'Anthropic Claude',
    role: 'AI Reasoning & LLM Prompting',
    iconName: 'claude-anthropic',
    badge: 'Developer',
  },
  {
    name: 'Puspresnas Kemendikbudristek',
    role: 'Olimpiade Sains Nasional',
    iconName: 'osn',
    badge: '2x Medali Emas',
  },
  {
    name: 'Google Developers',
    role: 'Web, Maps & Firebase Platform',
    iconName: 'google',
    badge: 'Innovator',
  },
];

export const CertificateLogoMarquee: React.FC<{
  title?: string;
  subtitle?: string;
  className?: string;
}> = ({
  title = 'Lembaga Penerbit & Ekosistem Terverifikasi',
  subtitle = 'Sertifikat dan kredensial resmi yang diakui secara global dan nasional',
  className = '',
}) => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...PARTNER_ISSUERS, ...PARTNER_ISSUERS];

  return (
    <div className={`space-y-4 overflow-hidden select-none ${className}`}>
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
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

      {/* Marquee Ribbon Container */}
      <div className="relative py-2 overflow-hidden">
        {/* Left & Right Edge Gradient Fades for ultra smooth transition */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-linear-to-r from-[#FAFAFA] dark:from-[#09090B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-linear-to-l from-[#FAFAFA] dark:from-[#09090B] to-transparent z-10 pointer-events-none" />

        {/* Moving Ribbon */}
        <div className="flex items-center gap-4 w-max animate-marquee pause-on-hover">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="px-4 py-3 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-blue-500/60 transition-all flex items-center gap-3.5 shrink-0 group cursor-default"
            >
              <div className="w-9 h-9 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {partner.iconName ? (
                  <BrandIcon name={partner.iconName} size={22} colored={true} />
                ) : (
                  <Award className="w-5 h-5 text-blue-600" />
                )}
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
      </div>
    </div>
  );
};
