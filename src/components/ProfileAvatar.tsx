import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProfileAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showBadge?: boolean;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  className = '',
  size = 'hero',
  showBadge = true,
}) => {
  const [imageError, setImageError] = useState(false);

  // Size mapping
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-20 h-20 sm:w-24 sm:h-24',
    lg: 'w-32 h-32 sm:w-40 sm:h-40',
    hero: 'w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80',
  };

  return (
    <div className={`relative shrink-0 select-none ${className}`}>
      {/* Outer Glow & Decorative Rings */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/20 via-zinc-400/20 to-amber-500/20 rounded-3xl blur-md opacity-70 pointer-events-none"></div>

      {/* Main Avatar Frame */}
      <div
        className={`relative ${sizeClasses[size]} rounded-3xl overflow-hidden shadow-2xl border-2 border-zinc-200/90 dark:border-zinc-700/80 bg-[#D4CFCA]`}
      >
        {!imageError && PERSONAL_INFO.avatarUrl ? (
          <img
            src={PERSONAL_INFO.avatarUrl}
            alt="Tubagus Fitran Badruttamam"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          />
        ) : (
          /* High-Fidelity SVG Portrait matching user's uploaded CV photo */
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Background Grey Radial Gradients */}
              <linearGradient id="avatarBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E2DDD8" />
                <stop offset="50%" stopColor="#D2CCC6" />
                <stop offset="100%" stopColor="#BCB5AF" />
              </linearGradient>

              {/* Suit Mocha/Taupe Fabric Gradient */}
              <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8C7D6C" />
                <stop offset="40%" stopColor="#766757" />
                <stop offset="100%" stopColor="#5E5143" />
              </linearGradient>

              {/* Lapel Dark Accent Gradient */}
              <linearGradient id="lapelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2D2825" />
                <stop offset="100%" stopColor="#1A1816" />
              </linearGradient>

              {/* Skin Tone Gradient */}
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E5AB86" />
                <stop offset="50%" stopColor="#D99B73" />
                <stop offset="100%" stopColor="#C4845D" />
              </linearGradient>

              {/* Hair Gradient */}
              <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2B211B" />
                <stop offset="50%" stopColor="#1E1713" />
                <stop offset="100%" stopColor="#120E0C" />
              </linearGradient>

              {/* Shadow Overlay */}
              <radialGradient id="vignetteGrad" cx="50%" cy="50%" r="50%">
                <stop offset="80%" stopColor="#000000" stopOpacity="0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
              </radialGradient>
            </defs>

            {/* Studio Background Layer with Circular Geometric Graphics */}
            <rect width="400" height="400" fill="url(#avatarBgGrad)" />
            
            {/* Geometric Light Grey Backdrop Circles */}
            <circle cx="160" cy="220" r="170" fill="#E8E4DF" fillOpacity="0.85" />
            <circle cx="60" cy="180" r="140" fill="#DDD8D2" fillOpacity="0.75" />
            <circle cx="340" cy="140" r="120" fill="#C9C2BA" fillOpacity="0.6" />
            <circle cx="380" cy="360" r="130" fill="#EAE6E1" fillOpacity="0.9" />

            {/* Body / Shoulders Suit Base */}
            <g transform="translate(0, 0)">
              {/* Suit Silhouette */}
              <path
                d="M 60,400 L 110,230 C 130,210 160,205 210,205 C 260,205 290,210 310,230 L 360,400 Z"
                fill="url(#suitGrad)"
              />

              {/* Suit Left Shoulder & Arm */}
              <path
                d="M 60,400 L 110,230 C 125,215 145,210 170,210 L 140,400 Z"
                fill="#6B5D4E"
              />

              {/* Suit Right Shoulder & Arm */}
              <path
                d="M 360,400 L 310,230 C 295,215 275,210 250,210 L 280,400 Z"
                fill="#615345"
              />

              {/* White Shirt Collar Opening */}
              <polygon points="170,210 250,210 220,340 200,340 180,340" fill="#F8FAFC" />
              <polygon points="190,210 230,210 215,265 205,265" fill="#E2E8F0" />

              {/* Shirt Left Collar */}
              <polygon points="170,210 205,245 195,215" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
              {/* Shirt Right Collar */}
              <polygon points="250,210 215,245 225,215" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />

              {/* Black Necktie */}
              <polygon points="205,240 215,240 218,255 202,255" fill="#18181B" />
              <polygon points="202,255 218,255 225,390 210,400 195,390" fill="#18181B" />
              <polygon points="205,255 215,255 218,390 210,400" fill="#27272A" />

              {/* Suit Black Peak Lapels (Accents as in uploaded photo) */}
              <polygon points="140,218 190,240 165,295 130,245" fill="url(#lapelGrad)" />
              <polygon points="280,218 230,240 255,295 290,245" fill="url(#lapelGrad)" />

              {/* Suit Taupe Main Lapels */}
              <polygon points="135,240 195,340 170,350 120,260" fill="#7D6E5D" />
              <polygon points="285,240 225,340 250,350 300,260" fill="#716252" />

              {/* Suit Pocket & Seam Line */}
              <rect x="220" y="305" width="48" height="5" rx="1.5" fill="#584C3F" transform="rotate(3, 220, 305)" />
            </g>

            {/* Neck */}
            <path
              d="M 180,185 L 180,225 C 180,240 240,240 240,225 L 240,185 Z"
              fill="url(#skinGrad)"
            />
            {/* Neck Shadow under chin */}
            <path
              d="M 180,185 C 195,208 225,208 240,185 L 240,198 C 225,215 195,215 180,198 Z"
              fill="#A86E4B"
              opacity="0.6"
            />

            {/* Ears */}
            <ellipse cx="142" cy="155" rx="11" ry="17" fill="#D99B73" />
            <ellipse cx="142" cy="155" rx="6" ry="10" fill="#B87752" />
            <ellipse cx="278" cy="155" rx="11" ry="17" fill="#CF8E67" />
            <ellipse cx="278" cy="155" rx="6" ry="10" fill="#AC6D49" />

            {/* Head / Face Shape */}
            <path
              d="M 148,135 C 148,75 272,75 272,135 C 272,185 248,205 210,205 C 172,205 148,185 148,135 Z"
              fill="url(#skinGrad)"
            />

            {/* Hair Base & Volume (Combed slightly up and to the right) */}
            <path
              d="M 142,125 C 138,80 160,50 210,45 C 255,40 280,65 278,115 C 272,95 255,80 230,80 C 190,80 170,95 155,120 C 150,130 144,135 142,125 Z"
              fill="url(#hairGrad)"
            />
            {/* Additional Hair Tuft / Texture on Top */}
            <path
              d="M 180,55 C 195,38 225,35 240,48 C 255,42 270,55 275,70 C 265,58 240,50 215,52 C 195,54 185,60 180,55 Z"
              fill="#2D221C"
            />
            <path
              d="M 142,125 C 146,105 155,95 170,90 L 165,115 Z"
              fill="#1C1613"
            />

            {/* Eyebrows */}
            <path
              d="M 162,125 C 172,120 188,122 195,126"
              stroke="#261C17"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 225,126 C 232,122 248,120 258,125"
              stroke="#261C17"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Eyes */}
            {/* Left Eye */}
            <ellipse cx="178" cy="138" rx="8" ry="5.5" fill="#FFFFFF" />
            <circle cx="179" cy="138" r="4.2" fill="#231A15" />
            <circle cx="180.5" cy="136.5" r="1.3" fill="#FFFFFF" />
            <path d="M 170,134 Q 178,130 186,134" stroke="#422D22" strokeWidth="1.8" fill="none" />

            {/* Right Eye */}
            <ellipse cx="242" cy="138" rx="8" ry="5.5" fill="#FFFFFF" />
            <circle cx="241" cy="138" r="4.2" fill="#231A15" />
            <circle cx="242.5" cy="136.5" r="1.3" fill="#FFFFFF" />
            <path d="M 234,134 Q 242,130 250,134" stroke="#422D22" strokeWidth="1.8" fill="none" />

            {/* Nose */}
            <path
              d="M 210,132 L 207,156 C 202,157 200,161 204,163 C 208,164 212,164 216,163 C 220,161 218,157 213,156 L 210,132"
              fill="#C88862"
              opacity="0.8"
            />
            <ellipse cx="204" cy="162" rx="2" ry="1.2" fill="#7C4B2E" opacity="0.6" />
            <ellipse cx="216" cy="162" rx="2" ry="1.2" fill="#7C4B2E" opacity="0.6" />

            {/* Subtle Mustache / Lip Shade */}
            <path
              d="M 198,169 C 205,167 215,167 222,169"
              stroke="#875338"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />

            {/* Gentle Warm Smile */}
            <path
              d="M 196,176 C 204,183 216,183 224,176"
              stroke="#68341E"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 200,177 C 206,180 214,180 220,177"
              stroke="#A8573E"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Subtle Chin Dimple / Shadow */}
            <path
              d="M 206,192 Q 210,194 214,192"
              stroke="#B37351"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />

            {/* Vignette Overlay */}
            <rect width="400" height="400" fill="url(#vignetteGrad)" pointerEvents="none" />
          </svg>
        )}
      </div>

      {/* Verified Online Status Badge */}
      {showBadge && (
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-white dark:bg-zinc-900 rounded-full p-1.5 shadow-lg border border-zinc-200 dark:border-zinc-700 flex items-center gap-1.5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-bold text-zinc-800 dark:text-zinc-200 pr-1 hidden sm:inline">
            Verified
          </span>
        </div>
      )}
    </div>
  );
};
