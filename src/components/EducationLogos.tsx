import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Official Universitas Muhammadiyah Banten Crest Logo
 * Uses the exact official image uploaded by user: /official-umbanten.png
 */
export const UMBantenLogo: React.FC<LogoProps> = ({ className = '', size = 48 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center shrink-0 group ${className}`}
      title="Universitas Muhammadiyah Banten"
    >
      <img
        src="/official-umbanten.png"
        alt="Universitas Muhammadiyah Banten"
        width={size}
        height={size}
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 filter dark:drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]"
      />
    </div>
  );
};

export const SMAN1CilegonLogo: React.FC<LogoProps> = ({ className = '', size = 48 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center shrink-0 group ${className}`}
      title="SMA Negeri 1 Cilegon"
    >
      <img
        src="/official-sman1cilegon.png"
        alt="SMA Negeri 1 Cilegon"
        width={size}
        height={size}
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 filter dark:drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]"
      />
    </div>
  );
};
