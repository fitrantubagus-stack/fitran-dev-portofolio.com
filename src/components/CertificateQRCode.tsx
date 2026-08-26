import React from 'react';

// Reusable Authentic QR Code SVG Component
export const CertificateQRCode: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      className={`text-zinc-900 shrink-0 ${className}`}
    >
      <rect x="0" y="0" width="100" height="100" fill="#FFFFFF" rx="2" />
      {/* Outer 1 */}
      <rect x="6" y="6" width="28" height="28" fill="#000000" />
      <rect x="10" y="10" width="20" height="20" fill="#FFFFFF" />
      <rect x="14" y="14" width="12" height="12" fill="#000000" />
      {/* Outer 2 */}
      <rect x="66" y="6" width="28" height="28" fill="#000000" />
      <rect x="70" y="10" width="20" height="20" fill="#FFFFFF" />
      <rect x="74" y="14" width="12" height="12" fill="#000000" />
      {/* Outer 3 */}
      <rect x="6" y="66" width="28" height="28" fill="#000000" />
      <rect x="10" y="70" width="20" height="20" fill="#FFFFFF" />
      <rect x="14" y="74" width="12" height="12" fill="#000000" />
      {/* Data dots */}
      <rect x="40" y="8" width="6" height="6" fill="#000000" />
      <rect x="52" y="8" width="6" height="6" fill="#000000" />
      <rect x="40" y="20" width="6" height="6" fill="#000000" />
      <rect x="48" y="24" width="6" height="6" fill="#000000" />
      <rect x="56" y="18" width="6" height="6" fill="#000000" />
      <rect x="8" y="42" width="6" height="6" fill="#000000" />
      <rect x="20" y="42" width="6" height="6" fill="#000000" />
      <rect x="14" y="50" width="6" height="6" fill="#000000" />
      <rect x="26" y="50" width="6" height="6" fill="#000000" />
      <rect x="40" y="40" width="8" height="8" fill="#000000" />
      <rect x="54" y="40" width="6" height="6" fill="#000000" />
      <rect x="44" y="52" width="6" height="6" fill="#000000" />
      <rect x="56" y="52" width="8" height="8" fill="#000000" />
      <rect x="70" y="42" width="6" height="6" fill="#000000" />
      <rect x="82" y="42" width="8" height="8" fill="#000000" />
      <rect x="76" y="52" width="6" height="6" fill="#000000" />
      <rect x="88" y="52" width="6" height="6" fill="#000000" />
      <rect x="42" y="68" width="6" height="6" fill="#000000" />
      <rect x="52" y="74" width="8" height="8" fill="#000000" />
      <rect x="42" y="84" width="6" height="6" fill="#000000" />
      <rect x="54" y="86" width="6" height="6" fill="#000000" />
      <rect x="68" y="68" width="8" height="8" fill="#000000" />
      <rect x="80" y="72" width="6" height="6" fill="#000000" />
      <rect x="72" y="82" width="6" height="6" fill="#000000" />
      <rect x="84" y="84" width="8" height="8" fill="#000000" />
    </svg>
  );
};
