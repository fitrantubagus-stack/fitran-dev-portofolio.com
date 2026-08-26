import React from 'react';

interface ProjectLogoProps {
  id: string;
  className?: string;
  size?: number;
}

export const ProjectLogo: React.FC<ProjectLogoProps> = ({
  id,
  className = '',
  size = 44,
}) => {
  const containerClasses =
    'relative flex items-center justify-center rounded-xl p-2.5 overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-md';

  switch (id) {
    case 'plantpulse':
      return (
        <div
          style={{ width: size, height: size }}
          className={`${containerClasses} bg-sky-500/10 border border-sky-500/30 text-sky-600 ${className}`}
        >
          <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
            <rect x="3" y="3" width="26" height="26" rx="6" stroke="#0284C7" strokeWidth="2" />
            <path
              d="M6 18L11 18L14 9L18 23L21 15L23 18L26 18"
              stroke="#0284C7"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="14" cy="9" r="1.5" fill="#38BDF8" />
            <circle cx="18" cy="23" r="1.5" fill="#38BDF8" />
          </svg>
        </div>
      );

    case 'petroknow':
      return (
        <div
          style={{ width: size, height: size }}
          className={`${containerClasses} bg-teal-500/10 border border-teal-500/30 text-teal-600 ${className}`}
        >
          <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
            <path
              d="M16 4L27 10V22L16 28L5 22V10L16 4Z"
              stroke="#0D9488"
              strokeWidth="2"
              fill="#0D9488"
              fillOpacity="0.1"
            />
            <circle cx="16" cy="16" r="4" fill="#0D9488" />
            <path d="M16 4V12M27 10L19 14.5M27 22L19 17.5M16 28V20M5 22L13 17.5M5 10L13 14.5" stroke="#14B8A6" strokeWidth="1.5" />
          </svg>
        </div>
      );

    case 'myramadhan':
      return (
        <div
          style={{ width: size, height: size }}
          className={`${containerClasses} bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 ${className}`}
        >
          <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
            <path
              d="M20.5 6C15 6 10.5 10.5 10.5 16C10.5 21.5 15 26 20.5 26C21.8 26 23.1 25.7 24.2 25.2C19.5 24 16 19.8 16 14.8C16 10.5 18.8 6.8 22.8 5.7C22 5.8 21.3 6 20.5 6Z"
              fill="#059669"
            />
            <path
              d="M23 10L24 12.5L26.5 13.5L24 14.5L23 17L22 14.5L19.5 13.5L22 12.5L23 10Z"
              fill="#34D399"
            />
          </svg>
        </div>
      );

    case 'genz-finance':
      return (
        <div
          style={{ width: size, height: size }}
          className={`${containerClasses} bg-amber-500/10 border border-amber-500/30 text-amber-600 ${className}`}
        >
          <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
            <circle cx="16" cy="16" r="12" stroke="#D97706" strokeWidth="2" fill="#FEF3C7" />
            <path
              d="M16 9V23M19.5 12.5C19.5 11.1 18 10 16 10C14 10 12.5 11 12.5 12.5C12.5 14.5 19.5 14 19.5 16.5C19.5 18 18 19 16 19C14 19 12.5 18 12.5 16.5"
              stroke="#B45309"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M22 6L25 9M25 6L22 9" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'radja-topup':
      return (
        <div
          style={{ width: size, height: size }}
          className={`${containerClasses} bg-purple-500/10 border border-purple-500/30 text-purple-600 ${className}`}
        >
          <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
            <path
              d="M7 11L16 4L25 11L16 28L7 11Z"
              stroke="#7C3AED"
              strokeWidth="2"
              fill="#DDD6FE"
            />
            <path d="M7 11H25M16 4V28M11.5 11L16 28M20.5 11L16 28" stroke="#6D28D9" strokeWidth="1.5" />
          </svg>
        </div>
      );

    case 'kagehero-studio':
      return (
        <div
          style={{ width: size, height: size }}
          className={`${containerClasses} bg-orange-500/10 border border-orange-500/30 text-orange-600 ${className}`}
        >
          <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
            <path
              d="M16 4L19 13L28 16L19 19L16 28L13 19L4 16L13 13L16 4Z"
              fill="#EA580C"
            />
            <circle cx="16" cy="16" r="3" fill="#FFF" />
          </svg>
        </div>
      );

    default:
      return (
        <div
          style={{ width: size, height: size }}
          className={`${containerClasses} bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold text-sm`}
        >
          {id.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
