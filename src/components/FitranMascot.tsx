import React from 'react';

export type MascotVariant = 'idea' | 'code' | 'security' | 'bot' | 'rocket';

interface FitranMascotProps {
  variant?: MascotVariant;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

export const FitranMascot: React.FC<FitranMascotProps> = ({
  variant = 'idea',
  size = 'md',
  className = '',
}) => {
  const dimension =
    size === 'hero' ? 240 : size === 'lg' ? 160 : size === 'sm' ? 80 : 120;

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ width: dimension, height: dimension }}
      title="Fitran Bot — Asisten Rekayasa fitran.dev"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Soft Background Glow */}
        <circle cx="100" cy="100" r="85" fill="#1E3A8A" fillOpacity="0.08" />

        {/* Antenna */}
        <line
          x1="100"
          y1="40"
          x2="100"
          y2="18"
          stroke="#1E3A8A"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Antenna Glowing Gem (Emerald Green) */}
        <circle cx="100" cy="16" r="8" fill="#10B981" />
        <circle cx="100" cy="16" r="4" fill="#FFFFFF" />

        {/* Mascot Main Head / Body (Hexagonal Capsule with Navy Fill) */}
        <path
          d="M60 45 C45 45 35 55 35 75 L35 135 C35 155 45 165 60 165 L140 165 C155 165 165 155 165 135 L165 75 C165 55 155 45 140 45 Z"
          fill="#1E3A8A"
          stroke="#0F172A"
          strokeWidth="4"
        />

        {/* Screen / Visor Area (Dark High-Tech Glass) */}
        <rect
          x="48"
          y="60"
          width="104"
          height="55"
          rx="14"
          fill="#0B0F19"
          stroke="#334155"
          strokeWidth="2.5"
        />

        {/* Expressive Friendly Eyes */}
        <circle cx="78" cy="85" r="11" fill="#10B981" />
        <circle cx="76" cy="82" r="4" fill="#FFFFFF" />
        <circle cx="122" cy="85" r="11" fill="#10B981" />
        <circle cx="120" cy="82" r="4" fill="#FFFFFF" />

        {/* Cute Blushing Cheeks */}
        <circle cx="62" cy="100" r="5" fill="#3B82F6" fillOpacity="0.4" />
        <circle cx="138" cy="100" r="5" fill="#3B82F6" fillOpacity="0.4" />

        {/* Smiling Mouth */}
        <path
          d="M93 96 Q100 102 107 96"
          stroke="#10B981"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Brand Stamp on Chest: FD */}
        <rect x="86" y="128" width="28" height="18" rx="5" fill="#0F172A" />
        <text
          x="100"
          y="141"
          textAnchor="middle"
          fill="#10B981"
          fontSize="10"
          fontFamily="monospace"
          fontWeight="900"
        >
          FD
        </text>

        {/* Mascot Little Feet */}
        <rect x="68" y="165" width="18" height="12" rx="4" fill="#0F172A" />
        <rect x="114" y="165" width="18" height="12" rx="4" fill="#0F172A" />

        {/* ============================================================== */}
        {/* VARIANT-SPECIFIC ACCESSORIES                                   */}
        {/* ============================================================== */}
        {variant === 'idea' && (
          /* Mascot Holding a Glowing Lightbulb in Hands */
          <g transform="translate(100, 142)">
            {/* Left & Right Cute Robot Hands */}
            <circle cx="-35" cy="-8" r="8" fill="#10B981" />
            <circle cx="35" cy="-8" r="8" fill="#10B981" />

            {/* Glowing Bulb Glow */}
            <circle cx="0" cy="-6" r="22" fill="#FBBF24" fillOpacity="0.25" />
            {/* Bulb Body */}
            <path
              d="M-12 -12 C-16 -22 16 -22 12 -12 C10 -6 6 -2 6 2 L-6 2 C-6 -2 -10 -6 -12 -12 Z"
              fill="#F59E0B"
              stroke="#B45309"
              strokeWidth="2"
            />
            {/* Filament */}
            <path
              d="M-4 -12 L0 -16 L4 -12"
              stroke="#FFFFFF"
              strokeWidth="2"
              fill="none"
            />
            {/* Bulb Base */}
            <rect x="-5" y="2" width="10" height="4" fill="#CBD5E1" rx="1" />
            <rect x="-4" y="6" width="8" height="3" fill="#64748B" rx="1" />
          </g>
        )}

        {variant === 'code' && (
          /* Mascot Holding a Laptop with Matrix Code */
          <g transform="translate(100, 146)">
            {/* Laptop Base */}
            <rect x="-38" y="-6" width="76" height="10" rx="3" fill="#334155" />
            {/* Laptop Screen */}
            <path
              d="M-30 -26 L30 -26 L32 -6 L-32 -6 Z"
              fill="#0F172A"
              stroke="#475569"
              strokeWidth="2"
            />
            {/* Terminal Code on Screen */}
            <line x1="-24" y1="-20" x2="-4" y2="-20" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="-24" y1="-14" x2="16" y2="-14" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
            <line x1="-24" y1="-9" x2="-8" y2="-9" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {variant === 'security' && (
          /* Mascot Holding an Emerald Security Shield */
          <g transform="translate(100, 142)">
            {/* Shield Outline */}
            <path
              d="M0 -22 L22 -14 L22 0 C22 16 0 26 0 26 C0 26 -22 16 -22 0 L-22 -14 Z"
              fill="#10B981"
              stroke="#047857"
              strokeWidth="2.5"
            />
            {/* Checkmark inside Shield */}
            <path
              d="M-8 0 L-2 6 L9 -7"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        )}

        {variant === 'rocket' && (
          /* Mascot with Launch Rocket */
          <g transform="translate(100, 142)">
            <path
              d="M0 -24 C8 -16 12 0 12 8 L-12 8 C-12 0 -8 -16 0 -24 Z"
              fill="#EF4444"
              stroke="#991B1B"
              strokeWidth="2"
            />
            <circle cx="0" cy="-6" r="4" fill="#38BDF8" />
            <polygon points="-12,4 -18,12 -12,10" fill="#F97316" />
            <polygon points="12,4 18,12 12,10" fill="#F97316" />
            <polygon points="-6,8 0,16 6,8" fill="#FBBF24" />
          </g>
        )}

        {variant === 'bot' && (
          /* Waving Hand */
          <g>
            <circle cx="168" cy="76" r="9" fill="#10B981" />
            <path
              d="M155 90 Q168 84 168 76"
              stroke="#1E3A8A"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
