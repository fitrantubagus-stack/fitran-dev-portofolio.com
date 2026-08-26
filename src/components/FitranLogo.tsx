import React from 'react';

interface FitranLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon' | 'badge';
}

/**
 * Custom Brand Logo: "Fitran DEVELOPER" with the signature 3-color overlapping circles
 * Colors: Yellow (#FFD53D), Cyan (#00C5D6), Coral/Orange (#FF6F43)
 */
export const FitranLogo: React.FC<FitranLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
}) => {
  if (variant === 'icon' || variant === 'badge') {
    const iconDimensions = {
      sm: 'w-7 h-7',
      md: 'w-9 h-9',
      lg: 'w-12 h-12',
    };

    return (
      <div
        className={`relative ${iconDimensions[size]} shrink-0 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs flex items-center justify-center p-1 overflow-hidden transition-transform duration-200 hover:scale-105 ${className}`}
      >
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Overlapping Tri-Color Bubbles */}
          <circle cx="34" cy="18" r="11" fill="#FFD53D" opacity="0.9" />
          <circle cx="46" cy="16" r="11" fill="#00C5D6" opacity="0.9" />
          <circle cx="44" cy="28" r="11" fill="#FF6F43" opacity="0.9" />

          {/* Stylized 'F' */}
          <path
            d="M 12 18 C 12 15.79 13.79 14 16 14 L 32 14 C 34.21 14 36 15.79 36 18 C 36 20.21 34.21 22 32 22 L 20 22 L 20 28 L 29 28 C 31.21 28 33 29.79 33 32 C 33 34.21 31.21 36 29 36 L 20 36 L 20 48 C 20 50.21 18.21 52 16 52 C 13.79 52 12 50.21 12 48 Z"
            fill="#FF6F43"
          />
        </svg>
      </div>
    );
  }

  // Full Brand Logo with "Fitran" + 3 Overlapping Circles + "DEVELOPER"
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 280 120"
        className="h-9 sm:h-10 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main "Fitran" Text in rounded bold typography */}
        <g fill="#FF6F43">
          {/* F */}
          <path d="M 20,38 L 20,86 C 20,88.5 22,90 24.5,90 C 27,90 29,88.5 29,86 L 29,66 L 46,66 C 48.5,66 50,64 50,61.5 C 50,59 48.5,57 46,57 L 29,57 L 29,47 L 49,47 C 51.5,47 53,45 53,42.5 C 53,40 51.5,38 49,38 Z" />

          {/* i */}
          <circle cx="62" cy="42" r="4.5" />
          <path d="M 58,55 L 58,86 C 58,88.5 60,90 62.5,90 C 65,90 67,88.5 67,86 L 67,55 C 67,52.5 65,51 62.5,51 C 60,51 58,52.5 58,55 Z" />

          {/* t */}
          <path d="M 83,42 L 83,51 L 91,51 C 93,51 94.5,52.5 94.5,54.5 C 94.5,56.5 93,58 91,58 L 83,58 L 83,78 C 83,81 85,82.5 88,82.5 C 89.5,82.5 91,82 92,81 C 93.5,79.5 95.5,80.5 95.5,82.5 C 95.5,84 94.5,85.5 93,86.5 C 91.5,88 88.5,89 85.5,89 C 78.5,89 74.5,85 74.5,78 L 74.5,58 L 69.5,58 C 67.5,58 66,56.5 66,54.5 C 66,52.5 67.5,51 69.5,51 L 74.5,51 L 74.5,42 C 74.5,40 76.5,38.5 78.5,38.5 C 80.5,38.5 83,40 83,42 Z" />

          {/* r */}
          <path d="M 103,55 L 103,86 C 103,88.5 105,90 107.5,90 C 110,90 112,88.5 112,86 L 112,68 C 114,60 120,57 127,58.5 C 129,59 131,57.5 131,55 C 131,52.5 129.5,50.5 127,50.5 C 119,50.5 113.5,55 111.5,61 L 111.5,55 C 111.5,52.5 109.5,51 107.5,51 C 105.5,51 103,52.5 103,55 Z" />

          {/* a */}
          <path d="M 152,51 C 142,51 135,58 135,68 C 135,78 142,85 152,85 C 157,85 161,82.5 163.5,78 L 163.5,86 C 163.5,88.5 165.5,90 168,90 C 170.5,90 172.5,88.5 172.5,86 L 172.5,55 C 172.5,52.5 170.5,51 168,51 C 165.5,51 163.5,52.5 163.5,55 L 163.5,58 C 161,53.5 157,51 152,51 Z M 153.5,59 C 159,59 163.5,63.5 163.5,69 C 163.5,74.5 159,79 153.5,79 C 148,79 143.5,74.5 143.5,69 C 143.5,63.5 148,59 153.5,59 Z" />

          {/* n */}
          <path d="M 183,55 L 183,86 C 183,88.5 185,90 187.5,90 C 190,90 192,88.5 192,86 L 192,67 C 192,61.5 196,58 201.5,58 C 207,58 210.5,61.5 210.5,67 L 210.5,86 C 210.5,88.5 212.5,90 215,90 C 217.5,90 219.5,88.5 219.5,86 L 219.5,65 C 219.5,56 213.5,50.5 204.5,50.5 C 198.5,50.5 194,53.5 191.5,58 L 191.5,55 C 191.5,52.5 189.5,51 187.5,51 C 185,51 183,52.5 183,55 Z" />
        </g>

        {/* 3 Overlapping Colorful Bubble Circles on the right */}
        <g>
          {/* Yellow (Top-Left) */}
          <circle cx="204" cy="34" r="14" fill="#FFD53D" opacity="0.9" />

          {/* Cyan/Teal (Top-Right) */}
          <circle cx="222" cy="31" r="14" fill="#00C5D6" opacity="0.9" />

          {/* Coral/Orange (Bottom) */}
          <circle cx="221" cy="48" r="14" fill="#FF6F43" opacity="0.9" />
        </g>

        {/* Subtext: DEVELOPER in high-contrast tracking */}
        <text
          x="126"
          y="108"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="13"
          fontWeight="900"
          letterSpacing="4"
          className="fill-zinc-900 dark:fill-white"
        >
          DEVELOPER
        </text>
      </svg>
    </div>
  );
};
