import React from 'react';

interface FitranPixelLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  variant?: 'card' | 'inline';
  className?: string;
}

export const FitranPixelLogo: React.FC<FitranPixelLogoProps> = ({
  size = 'md',
  variant = 'inline',
  className = '',
}) => {
  const isHero = size === 'hero';
  const isSm = size === 'sm';

  const content = (
    <div
      className={`inline-flex items-end relative select-none ${
        isHero ? 'pt-5' : isSm ? 'pt-2.5' : 'pt-4'
      }`}
    >
      {/* Peeking Teal 8-Bit Mascot on Left */}
      <svg
        width={isHero ? 30 : isSm ? 18 : 26}
        height={isHero ? 30 : isSm ? 18 : 26}
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
        className="-mr-1.5 mb-1 shrink-0"
      >
        <rect x="3" y="4" width="10" height="10" fill="#0D9488" />
        <rect x="2" y="6" width="12" height="6" fill="#14B8A6" />
        <rect x="5" y="7" width="2" height="2" fill="#0F172A" />
        <rect x="9" y="7" width="2" height="2" fill="#0F172A" />
        <rect x="6" y="10" width="4" height="1" fill="#0F172A" />
      </svg>

      {/* Peeking Blue 8-Bit Mascot on Top of Wordmark */}
      <svg
        width={isHero ? 32 : isSm ? 20 : 28}
        height={isHero ? 22 : isSm ? 14 : 20}
        viewBox="0 0 16 12"
        shapeRendering="crispEdges"
        className={`absolute pointer-events-none ${
          isHero ? '-top-0.5 left-16' : isSm ? '-top-0.5 left-9' : '-top-0.5 left-14'
        }`}
      >
        <rect x="3" y="2" width="10" height="8" fill="#2563EB" />
        <rect x="2" y="4" width="12" height="6" fill="#3B82F6" />
        <rect x="5" y="5" width="2" height="2" fill="#FFFFFF" />
        <rect x="9" y="5" width="2" height="2" fill="#FFFFFF" />
        <rect x="6" y="6" width="1" height="1" fill="#0F172A" />
        <rect x="10" y="6" width="1" height="1" fill="#0F172A" />
      </svg>

      <span
        className={`font-heading font-black tracking-tight leading-none ${
          isHero
            ? 'text-4xl xl:text-[42px]'
            : isSm
            ? 'text-xl'
            : 'text-3xl sm:text-4xl'
        } ${
          variant === 'card'
            ? 'text-zinc-950'
            : 'text-zinc-950 dark:text-white'
        }`}
      >
        fitran
      </span>

      {/* Peeking Orange 8-Bit Mascot on Right + .dev superscript */}
      <div className="flex flex-col items-start ml-0.5">
        <span
          className={`font-mono font-black leading-none mb-0.5 ${
            isHero ? 'text-xs' : isSm ? 'text-[9px]' : 'text-xs'
          } ${
            variant === 'card'
              ? 'text-zinc-900'
              : 'text-zinc-900 dark:text-yellow-300'
          }`}
        >
          .dev
        </span>
        <svg
          width={isHero ? 26 : isSm ? 16 : 24}
          height={isHero ? 20 : isSm ? 12 : 18}
          viewBox="0 0 16 12"
          shapeRendering="crispEdges"
        >
          <rect x="2" y="2" width="12" height="10" fill="#EA580C" />
          <rect x="1" y="4" width="14" height="8" fill="#F97316" />
          <rect x="5" y="5" width="2" height="2" fill="#0F172A" />
          <rect x="10" y="5" width="2" height="2" fill="#0F172A" />
        </svg>
      </div>
    </div>
  );

  if (variant === 'card') {
    return (
      <div
        className={`rounded-2xl border-2 border-[#1E2265] dark:border-indigo-400/60 bg-[#EDE6D3] px-4 py-3 shadow-[4px_4px_0px_#1E2265] flex items-center justify-center shrink-0 ${className}`}
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      >
        {content}
      </div>
    );
  }

  return <div className={`inline-flex items-center shrink-0 ${className}`}>{content}</div>;
};
