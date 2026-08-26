import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const UMBantenLogo: React.FC<LogoProps> = ({ className = '', size = 48 }) => {
  const uniqueId = React.useId().replace(/:/g, '');
  const topArcId = `umbTopArc-${uniqueId}`;
  const bottomArcId = `umbBottomArc-${uniqueId}`;
  const gradId = `umbGreenGrad-${uniqueId}`;

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-300/60 dark:border-amber-700/50 shadow-xs p-1 overflow-hidden group ${className}`}
      title="Universitas Muhammadiyah Banten"
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full transition-transform duration-300 transform group-hover:scale-105"
      >
        <defs>
          {/* Circular path for top arc text: UNIVERSITAS MUHAMMADIYAH */}
          <path
            id={topArcId}
            d="M 32,95 A 72,72 0 1,1 168,95"
            fill="none"
          />
          {/* Curved path for bottom text: ★ BANTEN ★ */}
          <path
            id={bottomArcId}
            d="M 44,148 Q 100,188 156,148"
            fill="none"
          />
          {/* Muhammadiyah Green Gradient */}
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#009A44" />
            <stop offset="100%" stopColor="#006A2E" />
          </linearGradient>
        </defs>

        {/* 1. Outer Black Pentagon Frame */}
        <polygon
          points="100,6 188,67 154,180 46,180 12,67"
          fill="#FFE600"
          stroke="#000000"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* 2. Concentric White Middle Line */}
        <polygon
          points="100,10 184,69 151,176 49,176 16,69"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* 3. Inner Fine Black Line */}
        <polygon
          points="100,13 181,71 149,173 51,173 19,71"
          fill="#FFE600"
          stroke="#000000"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* 4. Upper Circular Text: UNIVERSITAS MUHAMMADIYAH */}
        <text className="select-none">
          <textPath
            href={`#${topArcId}`}
            startOffset="50%"
            textAnchor="middle"
            fill="#000000"
            fontSize="12.5"
            fontWeight="900"
            fontFamily="Arial, Helvetica, sans-serif"
            letterSpacing="0.8"
          >
            UNIVERSITAS MUHAMMADIYAH
          </textPath>
        </text>

        {/* 5. Lower Curved Text: ★ BANTEN ★ */}
        <text className="select-none">
          <textPath
            href={`#${bottomArcId}`}
            startOffset="50%"
            textAnchor="middle"
            fill="#000000"
            fontSize="14.5"
            fontWeight="900"
            fontFamily="Arial, Helvetica, sans-serif"
            letterSpacing="1.2"
          >
            ★ BANTEN ★
          </textPath>
        </text>

        {/* 6. Rice Stalk (Padi) on Left - Golden Orange */}
        <g>
          {/* Main stem */}
          <path
            d="M 100,154 C 68,148 42,126 44,82"
            fill="none"
            stroke="#E67300"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Grains */}
          {[
            { x: 44, y: 84, rot: 35 },
            { x: 48, y: 92, rot: 40 },
            { x: 43, y: 98, rot: 25 },
            { x: 49, y: 106, rot: 45 },
            { x: 45, y: 114, rot: 30 },
            { x: 53, y: 121, rot: 50 },
            { x: 50, y: 129, rot: 35 },
            { x: 60, y: 136, rot: 55 },
            { x: 58, y: 143, rot: 40 },
            { x: 72, y: 147, rot: 60 },
            { x: 72, y: 153, rot: 45 },
            { x: 86, y: 153, rot: 65 },
          ].map((grain, idx) => (
            <ellipse
              key={idx}
              cx={grain.x}
              cy={grain.y}
              rx="4.5"
              ry="2.4"
              fill="#F97316"
              stroke="#C2410C"
              strokeWidth="0.8"
              transform={`rotate(${grain.rot} ${grain.x} ${grain.y})`}
            />
          ))}
        </g>

        {/* 7. Cotton Branch (Kapas) on Right - Green & White */}
        <g>
          {/* Main stem */}
          <path
            d="M 100,154 C 132,148 158,126 156,82"
            fill="none"
            stroke="#00873D"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Cotton buds */}
          {[
            { x: 156, y: 84 },
            { x: 153, y: 96 },
            { x: 152, y: 108 },
            { x: 148, y: 120 },
            { x: 142, y: 132 },
            { x: 132, y: 142 },
            { x: 118, y: 150 },
          ].map((bud, idx) => (
            <g key={idx}>
              {/* Green calyx */}
              <path
                d={`M ${bud.x - 4},${bud.y + 3} Q ${bud.x},${bud.y + 6} ${bud.x + 4},${bud.y + 3} Q ${bud.x},${bud.y + 1} ${bud.x - 4},${bud.y + 3}`}
                fill="#00873D"
              />
              {/* White bulbous petal cloud */}
              <circle cx={bud.x - 2.5} cy={bud.y - 1} r="3.2" fill="#FFFFFF" stroke="#00873D" strokeWidth="0.8" />
              <circle cx={bud.x + 2.5} cy={bud.y - 1} r="3.2" fill="#FFFFFF" stroke="#00873D" strokeWidth="0.8" />
              <circle cx={bud.x} cy={bud.y - 3.5} r="3.2" fill="#FFFFFF" stroke="#00873D" strokeWidth="0.8" />
              <circle cx={bud.x} cy={bud.y} r="2.5" fill="#FFFFFF" />
            </g>
          ))}
        </g>

        {/* Crossed stems knot at bottom */}
        <path d="M 96,155 Q 100,158 104,155" fill="none" stroke="#C2410C" strokeWidth="2.5" />
        <path d="M 94,157 L 90,161" stroke="#E67300" strokeWidth="2" strokeLinecap="round" />
        <path d="M 106,157 L 110,161" stroke="#00873D" strokeWidth="2" strokeLinecap="round" />

        {/* 8. Center Muhammadiyah Symbol (12 Sun Rays) */}
        <g transform="translate(100, 102)">
          {/* Fine golden radial sunbeams in background */}
          {[...Array(24)].map((_, i) => (
            <line
              key={`beam-${i}`}
              x1="0"
              y1="-36"
              x2="0"
              y2="-26"
              stroke="#FFE600"
              strokeWidth="1.2"
              transform={`rotate(${i * 15})`}
            />
          ))}

          {/* 12 Green Sun Ray Petals */}
          {[...Array(12)].map((_, i) => (
            <polygon
              key={`ray-${i}`}
              points="0,-35 5,-18 0,-14 -5,-18"
              fill={`url(#${gradId})`}
              stroke="#005A24"
              strokeWidth="0.7"
              transform={`rotate(${i * 30})`}
            />
          ))}

          {/* Outer Sun Circle */}
          <circle cx="0" cy="0" r="19" fill="#00873D" stroke="#FFE600" strokeWidth="1.5" />

          {/* Ring for Two Shahadatain (Gold Circle Ring) */}
          <circle cx="0" cy="0" r="14.5" fill="#007233" stroke="#FFE600" strokeWidth="1" />

          {/* Arabic Shahadah Inscription Graphic Pattern */}
          <circle
            cx="0"
            cy="0"
            r="12.5"
            fill="none"
            stroke="#FFE600"
            strokeWidth="1.2"
            strokeDasharray="2.5 1.5"
          />

          {/* Inner Central Green Disc */}
          <circle cx="0" cy="0" r="9.5" fill="#00873D" stroke="#FFE600" strokeWidth="0.8" />

          {/* Iconic "محمدية" (Muhammadiyah) Arabic Calligraphy in White */}
          <g transform="scale(0.85)">
            <path
              d="M -5,1 C -3,-2 0,-3 3,-1 C 4,0 4,2 2,3 C 0,4 -3,3 -4,1 Z"
              fill="#FFFFFF"
            />
            <path
              d="M -3,-3 C -2,-5 1,-5 3,-3 C 4,-2 3,-1 1,-1 Z"
              fill="#FFFFFF"
            />
            <circle cx="-1" cy="-4" r="0.9" fill="#FFFFFF" />
            <circle cx="2" cy="-4" r="0.9" fill="#FFFFFF" />
            <path
              d="M -4,2 Q 0,5 4,1 L 5,3 Q 0,7 -5,3 Z"
              fill="#FFFFFF"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export const SMAN1CilegonLogo: React.FC<LogoProps> = ({ className = '', size = 48 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-300 dark:border-blue-700/60 shadow-xs p-1 overflow-hidden group ${className}`}
      title="SMA Negeri 1 Cilegon"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full transition-transform duration-300 transform group-hover:scale-105"
      >
        {/* Shield Outer */}
        <path
          d="M50,4 Q78,14 92,20 C94,62 72,86 50,96 C28,86 6,62 8,20 Q22,14 50,4 Z"
          fill="#FDE047"
          stroke="#1E3A8A"
          strokeWidth="3.5"
        />
        {/* Blue Mountains & Ocean Waves */}
        <path
          d="M16,56 Q34,42 50,48 Q66,42 84,56 C80,74 66,86 50,92 C34,86 20,74 16,56 Z"
          fill="#1D4ED8"
        />
        {/* Blue wavy lines */}
        <path d="M20,62 Q35,58 50,62 Q65,58 80,62" fill="none" stroke="#60A5FA" strokeWidth="2" />
        <path d="M22,68 Q35,64 50,68 Q65,64 78,68" fill="none" stroke="#93C5FD" strokeWidth="1.5" />
        
        {/* Open Book */}
        <path
          d="M32,68 Q41,63 50,66 Q59,63 68,68 L68,74 Q59,69 50,72 Q41,69 32,74 Z"
          fill="#FFFFFF"
          stroke="#1E293B"
          strokeWidth="1"
        />
        {/* Torch & Flame */}
        <path d="M49,38 L51,38 L51,60 L49,60 Z" fill="#F59E0B" stroke="#1E293B" strokeWidth="1" />
        <path d="M50,26 C53,30 55,34 50,38 C45,34 47,30 50,26 Z" fill="#EF4444" />

        {/* Ribbon banner: BHAKTI TARUNA WAJA */}
        <path d="M22,78 Q50,84 78,78" fill="none" stroke="#DC2626" strokeWidth="3.5" />
        <text
          x="50"
          y="79"
          textAnchor="middle"
          fontSize="4"
          fontWeight="900"
          fill="#FFFFFF"
          fontFamily="system-ui"
        >
          BHAKTI TARUNA WAJA
        </text>
        {/* Text BANTEN at base */}
        <text
          x="50"
          y="89"
          textAnchor="middle"
          fontSize="6"
          fontWeight="900"
          fill="#1E3A8A"
          fontFamily="system-ui"
          letterSpacing="0.5"
        >
          BANTEN
        </text>
      </svg>
    </div>
  );
};
