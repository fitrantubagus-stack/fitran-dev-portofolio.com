import React from 'react';

interface FitranPixelLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'hero';
  variant?: 'transparent' | 'inline' | 'card';
  className?: string;
}

export const FitranPixelLogo: React.FC<FitranPixelLogoProps> = ({
  size = 'sm',
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

  return (
    <div
      className={`inline-flex items-end relative select-none bg-transparent ${
        isHero ? 'pt-5' : isSm ? 'pt-3' : isXs ? 'pt-2' : 'pt-3.5'
      } ${className}`}
    >
      {/* Peeking Teal 8-Bit Mascot on Left */}
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

      {/* Peeking Blue 8-Bit Mascot on Top of Wordmark */}
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

      {/* Main Brand Wordmark: fitran */}
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

      {/* Peeking Orange 8-Bit Mascot on Right + .dev superscript */}
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
};
