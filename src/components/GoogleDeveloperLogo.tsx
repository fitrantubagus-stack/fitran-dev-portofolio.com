import React from 'react';

interface GoogleDeveloperLogoProps {
  className?: string;
  size?: number;
  width?: number | string;
  height?: number | string;
}

/**
 * Official Google Developer Program Infinity Ribbon Logo (Red -> Blue -> Green -> Yellow)
 */
export const GoogleDeveloperLogo: React.FC<GoogleDeveloperLogoProps> = ({
  className = '',
  size = 28,
  width,
  height,
}) => {
  const calculatedWidth = width || (size ? size * 2.38 : 'auto');
  const calculatedHeight = height || size;

  return (
    <svg
      viewBox="0 0 960 400"
      width={calculatedWidth}
      height={calculatedHeight}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-200 ease-out hover:scale-105 ${className}`}
      aria-label="Google Developer Program"
    >
      <defs>
        {/* Left red-pink-purple gradient */}
        <linearGradient id="gdp_red_grad" x1="0%" y1="0%" x2="40%" y2="100%">
          <stop offset="0%" stopColor="#FF5252" />
          <stop offset="35%" stopColor="#EA4335" />
          <stop offset="70%" stopColor="#E91E63" />
          <stop offset="100%" stopColor="#536DFE" />
        </linearGradient>

        {/* Center blue gradient */}
        <linearGradient id="gdp_blue_grad" x1="20%" y1="90%" x2="60%" y2="10%">
          <stop offset="0%" stopColor="#304FFE" />
          <stop offset="30%" stopColor="#2979FF" />
          <stop offset="70%" stopColor="#4285F4" />
          <stop offset="100%" stopColor="#00E676" />
        </linearGradient>

        {/* Right green gradient */}
        <linearGradient id="gdp_green_grad" x1="50%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="40%" stopColor="#34A853" />
          <stop offset="85%" stopColor="#7CB342" />
          <stop offset="100%" stopColor="#FBC02D" />
        </linearGradient>

        {/* Right bottom yellow-orange gradient */}
        <linearGradient id="gdp_yellow_grad" x1="100%" y1="50%" x2="45%" y2="100%">
          <stop offset="0%" stopColor="#FFD600" />
          <stop offset="30%" stopColor="#FBBC05" />
          <stop offset="70%" stopColor="#00C853" />
          <stop offset="100%" stopColor="#00B0FF" />
        </linearGradient>
      </defs>

      {/* 
        The Google Developer Program ribbon is a smooth triple-loop Möbius strip.
        We draw the overlapping continuous curves with calibrated stroke widths and gradients.
      */}

      {/* Layer 1: Left Bottom loop to Center (Blue-Purple to Red) */}
      <path
        d="M 480,200 C 400,285 340,340 240,340 C 140,340 60,260 60,160 C 60,60 140,-20 240,-20 C 340,-20 400,35 480,120"
        stroke="url(#gdp_red_grad)"
        strokeWidth="90"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(0, 40)"
      />

      {/* Layer 2: Middle Arc and crossing (Blue to Green) */}
      <path
        d="M 240,340 C 340,340 400,285 480,200 C 560,115 620,60 720,60 C 820,60 900,140 900,240 C 900,340 820,420 720,420 C 620,420 560,365 480,280"
        stroke="url(#gdp_blue_grad)"
        strokeWidth="90"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(0, -40)"
      />

      {/* Layer 3: Right Loop (Green to Yellow) */}
      <path
        d="M 480,120 C 560,35 620,-20 720,-20 C 820,-20 900,60 900,160 C 900,260 820,340 720,340 C 620,340 560,285 480,200"
        stroke="url(#gdp_green_grad)"
        strokeWidth="90"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(0, 40)"
      />

      {/* Layer 4: Bottom Right to Center Bottom Loop (Yellow into Green & Blue) */}
      <path
        d="M 900,200 C 900,280 840,340 740,340 C 640,340 580,285 480,200 C 400,115 340,60 240,60 C 140,60 60,140 60,240 C 60,320 120,380 200,390"
        stroke="url(#gdp_yellow_grad)"
        strokeWidth="90"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />

      {/* Foreground crisp overlay path */}
      <path
        d="M 180,90 C 260,90 320,150 400,230 L 480,310 C 560,390 640,410 740,390"
        stroke="url(#gdp_blue_grad)"
        strokeWidth="86"
        strokeLinecap="round"
      />
    </svg>
  );
};
