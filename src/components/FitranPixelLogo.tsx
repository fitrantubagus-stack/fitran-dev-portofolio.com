import React from 'react';

export interface FitranPixelLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'hero';
  variant?: 'transparent' | 'inline' | 'card' | 'badge';
  className?: string;
}

/**
 * 1. STANDALONE PIXEL MASCOT: TEAL BOT (Left Robot in Image 4)
 * Emerald/Teal 8-bit robot head with expressive eyes and mouth
 */
export const TealBot: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    shapeRendering="crispEdges"
    className={`shrink-0 ${className}`}
  >
    {/* Ears / Antennas */}
    <rect x="1" y="6" width="2" height="4" fill="#0D9488" />
    <rect x="13" y="6" width="2" height="4" fill="#0D9488" />
    {/* Head Outline / Base */}
    <rect x="3" y="4" width="10" height="10" fill="#0D9488" />
    <rect x="2" y="6" width="12" height="6" fill="#14B8A6" />
    {/* Eyes */}
    <rect x="5" y="7" width="2" height="2" fill="#0F172A" />
    <rect x="9" y="7" width="2" height="2" fill="#0F172A" />
    {/* Mouth */}
    <rect x="6" y="11" width="4" height="1" fill="#0F172A" />
  </svg>
);

/**
 * 2. STANDALONE PIXEL MASCOT: BLUE BOT (Top Robot in Image 4)
 * Royal blue 8-bit robot head peeking with white eyes
 */
export const BlueBot: React.FC<{ size?: number; className?: string }> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={Math.round(size * 0.75)}
    viewBox="0 0 16 12"
    shapeRendering="crispEdges"
    className={`shrink-0 ${className}`}
  >
    {/* Head Base */}
    <rect x="3" y="2" width="10" height="8" fill="#1D4ED8" />
    <rect x="2" y="4" width="12" height="6" fill="#2563EB" />
    {/* White Eyes */}
    <rect x="5" y="5" width="2" height="2" fill="#FFFFFF" />
    <rect x="9" y="5" width="2" height="2" fill="#FFFFFF" />
    {/* Pupils */}
    <rect x="6" y="6" width="1" height="1" fill="#0F172A" />
    <rect x="10" y="6" width="1" height="1" fill="#0F172A" />
  </svg>
);

/**
 * 3. STANDALONE PIXEL MASCOT: ORANGE BOT (Bottom-Right Robot in Image 4)
 * Energetic orange 8-bit robot head next to / under .dev
 */
export const OrangeBot: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={Math.round(size * 0.75)}
    viewBox="0 0 16 12"
    shapeRendering="crispEdges"
    className={`shrink-0 ${className}`}
  >
    {/* Ears */}
    <rect x="1" y="4" width="1" height="4" fill="#C2410C" />
    <rect x="14" y="4" width="1" height="4" fill="#C2410C" />
    {/* Head Base */}
    <rect x="2" y="2" width="12" height="10" fill="#EA580C" />
    <rect x="3" y="4" width="10" height="7" fill="#F97316" />
    {/* Eyes */}
    <rect x="5" y="5" width="2" height="2" fill="#0F172A" />
    <rect x="9" y="5" width="2" height="2" fill="#0F172A" />
  </svg>
);

/**
 * 4. COMPACT PIXEL EMBLEM (The 3 Bots as an App Icon / Avatar Stamp)
 */
export const FitranPixelIcon: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({
  size = 'md',
  className = '',
}) => {
  const dim = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  return (
    <div
      style={{ width: dim, height: dim }}
      className={`relative rounded-xl bg-zinc-950 dark:bg-black border border-zinc-800 shadow-md flex items-center justify-center select-none overflow-hidden ${className}`}
      title="fitran.dev official emblem"
    >
      <div className="relative flex items-center justify-center -space-x-1">
        <TealBot size={Math.round(dim * 0.44)} />
        <BlueBot size={Math.round(dim * 0.48)} className="relative -top-1" />
        <OrangeBot size={Math.round(dim * 0.42)} />
      </div>
    </div>
  );
};

/**
 * 5. FULL OFFICIAL BRAND LOGO (Matches Attached User Image 4 with 100% Precision)
 * Teal robot on left + bold "fitran" + Blue robot on top + ".dev" with Orange robot
 */
export const FitranPixelLogo: React.FC<FitranPixelLogoProps> = ({
  size = 'sm',
  variant = 'transparent',
  className = '',
}) => {
  const isHero = size === 'hero' || size === 'lg';
  const isSm = size === 'sm';
  const isXs = size === 'xs';

  const tealSize = isHero ? 28 : isSm ? 19 : isXs ? 15 : 23;
  const blueW = isHero ? 30 : isSm ? 21 : isXs ? 16 : 25;
  const blueH = isHero ? 20 : isSm ? 14 : isXs ? 11 : 17;
  const orangeW = isHero ? 24 : isSm ? 17 : isXs ? 13 : 21;
  const orangeH = isHero ? 19 : isSm ? 13 : isXs ? 10 : 16;

  const content = (
    <div
      className={`inline-flex items-end relative select-none bg-transparent ${
        isHero ? 'pt-5' : isSm ? 'pt-3' : isXs ? 'pt-2' : 'pt-3.5'
      } ${className}`}
    >
      {/* 1. Teal 8-Bit Mascot on Left */}
      <svg
        width={tealSize}
        height={tealSize}
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
        className="-mr-1 mb-0.5 shrink-0"
      >
        <rect x="3" y="4" width="10" height="10" fill="#0D9488" />
        <rect x="2" y="6" width="12" height="6" fill="#14B8A6" />
        <rect x="5" y="7" width="2" height="2" fill="#0F172A" />
        <rect x="9" y="7" width="2" height="2" fill="#0F172A" />
        <rect x="6" y="10" width="4" height="1" fill="#0F172A" />
      </svg>

      {/* 2. Blue 8-Bit Mascot Peeking on Top of Wordmark */}
      <svg
        width={blueW}
        height={blueH}
        viewBox="0 0 16 12"
        shapeRendering="crispEdges"
        className={`absolute pointer-events-none ${
          isHero
            ? '-top-0.5 left-14'
            : isSm
            ? '-top-0.5 left-9'
            : isXs
            ? '-top-0.5 left-7'
            : '-top-0.5 left-11'
        }`}
      >
        <rect x="3" y="2" width="10" height="8" fill="#2563EB" />
        <rect x="2" y="4" width="12" height="6" fill="#3B82F6" />
        <rect x="5" y="5" width="2" height="2" fill="#FFFFFF" />
        <rect x="9" y="5" width="2" height="2" fill="#FFFFFF" />
        <rect x="6" y="6" width="1" height="1" fill="#0F172A" />
        <rect x="10" y="6" width="1" height="1" fill="#0F172A" />
      </svg>

      {/* 3. Main Brand Wordmark: fitran */}
      <span
        className={`font-heading font-black tracking-tight leading-none text-zinc-950 dark:text-white ${
          isHero
            ? 'text-4xl'
            : isSm
            ? 'text-2xl'
            : isXs
            ? 'text-lg'
            : 'text-3xl'
        }`}
      >
        fitran
      </span>

      {/* 4. Orange 8-Bit Mascot on Right + .dev superscript */}
      <div className="flex flex-col items-start ml-0.5">
        <span
          className={`font-mono font-black leading-none mb-0.5 text-zinc-800 dark:text-zinc-200 ${
            isHero ? 'text-xs' : isSm ? 'text-[10px]' : isXs ? 'text-[8px]' : 'text-xs'
          }`}
        >
          .dev
        </span>
        <svg
          width={orangeW}
          height={orangeH}
          viewBox="0 0 16 12"
          shapeRendering="crispEdges"
          className="shrink-0"
        >
          <rect x="2" y="2" width="12" height="10" fill="#EA580C" />
          <rect x="1" y="4" width="14" height="8" fill="#F97316" />
          <rect x="5" y="5" width="2" height="2" fill="#0F172A" />
          <rect x="10" y="5" width="2" height="2" fill="#0F172A" />
        </svg>
      </div>
    </div>
  );

  if (variant === 'badge') {
    return (
      <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-xs">
        {content}
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      </div>
    );
  }

  return content;
};
