import React from 'react';
import { BrandIcon, BrandIconName } from './BrandIcon';

interface MarqueeItem {
  id: string;
  name: string;
  badge?: string;
  icon: BrandIconName;
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  { id: 'gdp', name: 'Google Developer Program', badge: 'Verified', icon: 'google-dev' },
  { id: 'gcp', name: 'Google Cloud Platform', badge: 'Certified', icon: 'gcp' },
  { id: 'gcloud', name: 'Google Cloud', badge: 'Certified', icon: 'google-cloud' },
  { id: 'claude', name: 'Claude AI', badge: 'Certified', icon: 'claude' },
  { id: 'anthropic', name: 'Anthropic', badge: 'Certified', icon: 'anthropic' },
  { id: 'vercel', name: 'Vercel', badge: 'Certified', icon: 'vercel' },
  { id: 'aws', name: 'Amazon Web Services', badge: 'Certified', icon: 'aws' },
  { id: 'nvidia', name: 'NVIDIA DLI', badge: 'Certified', icon: 'nvidia' },
  { id: 'osn', name: 'Olimpiade Sains Nasional (OSN)', badge: 'Peringkat 10', icon: 'osn' },
  { id: 'perpusnas', name: 'Perpusnas Press', badge: 'Published Author', icon: 'perpusnas' },
  { id: 'sohib', name: 'SohIB Indonesia.go.id', badge: 'Kemkomdigi RI', icon: 'sohib' },
  { id: 'bed', name: 'Belajar Era Digital', badge: '4× Certified', icon: 'belajar-era-digital' },
  { id: 'maps', name: 'Google Maps Platform', badge: 'Innovators', icon: 'google-maps-innovators' },
  { id: 'firebase', name: 'Firebase Studio', badge: 'Developer', icon: 'firebase-developer' },
  { id: 'meta', name: 'Meta Blueprint', badge: 'Certified', icon: 'meta' },
  { id: 'sman1', name: 'SMA Negeri 1 Cilegon', badge: 'Alumni', icon: 'sman1-cilegon' },
  { id: 'umb', name: 'Univ. Muhammadiyah Banten', badge: 'Informatics', icon: 'um-banten' },
  { id: 'ts', name: 'TypeScript', badge: 'Proficient', icon: 'typescript' },
  { id: 'next', name: 'Next.js', badge: 'Fullstack', icon: 'nextjs' },
  { id: 'react', name: 'React 19', badge: 'UI', icon: 'react' },
  { id: 'tailwind', name: 'Tailwind CSS', badge: 'Architecture', icon: 'tailwind' },
  { id: 'python', name: 'Python', badge: 'AI / Scripts', icon: 'python' },
];

export const LogoMarquee: React.FC = () => {
  const duplicatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full overflow-hidden border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 py-3 relative group">
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white dark:from-[#09090B] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white dark:from-[#09090B] to-transparent z-10" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0D1117] hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors shadow-2xs select-none"
          >
            <BrandIcon name={item.icon} size={18} />
            <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
              {item.name}
            </span>
            {item.badge && (
              <span className="px-2 py-0.5 rounded-full font-mono text-[9px] uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
