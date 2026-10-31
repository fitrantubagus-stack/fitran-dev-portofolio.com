import React from 'react';
import { GoogleDeveloperLogo } from './GoogleDeveloperLogo';
import { SMAN1CilegonLogo, UMBantenLogo } from './EducationLogos';

export type BrandIconName =
  | 'github'
  | 'linkedin'
  | 'instagram'
  | 'aws'
  | 'aws-skill-builder'
  | 'meta'
  | 'vercel'
  | 'google'
  | 'google-dev'
  | 'google-cloud'
  | 'gcp'
  | 'google-cloud-platform'
  | 'claude'
  | 'anthropic'
  | 'claude-anthropic'
  | 'google-maps'
  | 'google-maps-innovators'
  | 'firebase'
  | 'firebase-developer'
  | 'firebase-studio'
  | 'nvidia'
  | 'nvidia-developer'
  | 'gdg-campus'
  | 'perpusnas'
  | 'oshsp'
  | 'kshpi'
  | 'chandra-asri'
  | 'nextjs'
  | 'react'
  | 'tailwind'
  | 'figma'
  | 'framer'
  | 'typescript'
  | 'python'
  | 'vite'
  | 'sman1-cilegon'
  | 'sman1cilegon'
  | 'um-banten'
  | 'umbanten';

interface BrandIconProps {
  name: BrandIconName;
  className?: string;
  size?: number;
  colored?: boolean;
}

export const BrandIcon: React.FC<BrandIconProps> = ({
  name,
  className = '',
  size = 20,
  colored = true,
}) => {
  const baseClasses = 'transition-transform duration-200 ease-out hover:scale-105 shrink-0';

  switch (name) {
    case 'github':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={`${baseClasses} ${className}`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            fill="currentColor"
          />
        </svg>
      );

    case 'linkedin':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={`${baseClasses} ${className}`}
        >
          <path
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6h2.78v-7.6H6.46M7.85 6.5a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"
            fill="#0A66C2"
          />
        </svg>
      );

    case 'instagram':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={`${baseClasses} ${className}`}
        >
          <defs>
            <linearGradient id="instaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FD5949" />
              <stop offset="50%" stopColor="#D6249F" />
              <stop offset="100%" stopColor="#285AEB" />
            </linearGradient>
          </defs>
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            fill="url(#instaGrad)"
          />
        </svg>
      );

    case 'aws': {
      const logoH = Math.max(size * 1.45, 22);
      return (
        <span
          className={`inline-flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-md border border-zinc-200/90 shadow-2xs shrink-0 ${baseClasses} ${className}`}
        >
          <img
            src="/official-aws-logo.png"
            alt="Amazon Web Services"
            style={{ height: `${logoH * 0.85}px`, width: 'auto' }}
            className="object-contain shrink-0"
          />
          <span className="w-px h-3.5 bg-zinc-200 shrink-0" />
          <img
            src="/official-aws-skill-builder.png"
            alt="AWS Skill Builder"
            style={{ height: `${logoH * 1.15}px`, width: 'auto' }}
            className="object-contain shrink-0 scale-125"
          />
        </span>
      );
    }

    case 'aws-skill-builder':
      return (
        <img
          src="/official-aws-skill-builder.png"
          alt="AWS Skill Builder"
          style={{ height: `${Math.max(size * 1.5, 26)}px`, width: 'auto' }}
          className={`object-contain bg-white rounded-md px-1 inline-block shrink-0 ${baseClasses} ${className}`}
        />
      );

    case 'meta':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={`${baseClasses} ${className}`}
          aria-label="Meta"
        >
          <path
            d="M16.96 4C14.77 4 13.06 5.15 12 6.55C10.94 5.15 9.23 4 7.04 4C3.15 4 0 7.33 0 11.45C0 16.48 4.67 20 8.5 20C10.63 20 11.78 18.9 12 18.66C12.22 18.9 13.37 20 15.5 20C19.33 20 24 16.48 24 11.45C24 7.33 20.85 4 16.96 4ZM7.04 17.65C4.74 17.65 2.35 15.17 2.35 11.45C2.35 8.63 4.45 6.35 7.04 6.35C9.27 6.35 10.96 8.16 11.48 10.5H9.5C9.09 9.92 8.16 9.47 7.23 9.47C5.85 9.47 4.74 10.58 4.74 11.96C4.74 13.34 5.85 14.45 7.23 14.45C8.36 14.45 9.17 13.84 9.5 13.15H11.52C11.08 15.7 9.38 17.65 7.04 17.65ZM16.96 17.65C14.62 17.65 12.92 15.7 12.48 13.15H14.5C14.83 13.84 15.64 14.45 16.77 14.45C18.15 14.45 19.26 13.34 19.26 11.96C19.26 10.58 18.15 9.47 16.77 9.47C15.84 9.47 14.91 9.92 14.5 10.5H12.52C13.04 8.16 14.73 6.35 16.96 6.35C19.55 6.35 21.65 8.63 21.65 11.45C21.65 15.17 19.26 17.65 16.96 17.65Z"
            fill="#0081FB"
          />
        </svg>
      );

    case 'vercel': {
      const vercelH = Math.max(size * 1.4, 24);
      return (
        <span
          className={`inline-flex items-center bg-white px-2 py-0.5 rounded-md border border-zinc-200/90 shadow-2xs shrink-0 ${baseClasses} ${className}`}
        >
          <img
            src="/official-vercel-logo.png"
            alt="Vercel"
            style={{ height: `${vercelH}px`, width: 'auto' }}
            className="object-contain shrink-0 scale-115"
          />
        </span>
      );
    }

    case 'claude': {
      const claudeH = Math.max(size * 1.5, 26);
      return (
        <span
          className={`inline-flex items-center bg-white px-2 py-0.5 rounded-md border border-zinc-200/90 shadow-2xs shrink-0 overflow-hidden ${baseClasses} ${className}`}
        >
          <img
            src="/official-claude-logo.png"
            alt="Claude"
            style={{ height: `${claudeH}px`, width: 'auto' }}
            className="object-contain shrink-0 scale-135"
          />
        </span>
      );
    }

    case 'anthropic': {
      const anthH = Math.max(size * 1.35, 22);
      return (
        <span
          className={`inline-flex items-center bg-white px-1.5 py-0.5 rounded-md border border-zinc-200/90 shadow-2xs shrink-0 ${baseClasses} ${className}`}
        >
          <img
            src="/official-anthropic-logo.png"
            alt="Anthropic"
            style={{ height: `${anthH}px`, width: 'auto' }}
            className="object-contain shrink-0"
          />
        </span>
      );
    }

    case 'claude-anthropic': {
      const logoH = Math.max(size * 1.45, 24);
      return (
        <span
          className={`inline-flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-md border border-zinc-200/90 shadow-2xs shrink-0 overflow-hidden ${baseClasses} ${className}`}
        >
          <img
            src="/official-claude-logo.png"
            alt="Claude"
            style={{ height: `${logoH * 1.1}px`, width: 'auto' }}
            className="object-contain shrink-0 scale-135"
          />
          <span className="w-px h-3.5 bg-zinc-200 shrink-0" />
          <img
            src="/official-anthropic-logo.png"
            alt="Anthropic"
            style={{ height: `${logoH * 0.85}px`, width: 'auto' }}
            className="object-contain shrink-0"
          />
        </span>
      );
    }

    case 'google-dev':
      return <GoogleDeveloperLogo size={size} className={`${baseClasses} ${className}`} />;

    case 'google':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={`${baseClasses} ${className}`}
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            fill="#EA4335"
          />
        </svg>
      );

    case 'google-cloud': {
      const gcSize = Math.max(size * 1.45, 24);
      return (
        <img
          src="/official-google-cloud-logo.png"
          alt="Google Cloud"
          width={gcSize}
          height={gcSize}
          style={{ width: gcSize, height: gcSize }}
          className={`object-contain shrink-0 ${baseClasses} ${className}`}
        />
      );
    }

    case 'gcp': {
      const gcpSize = Math.max(size * 1.45, 24);
      return (
        <img
          src="/official-gcp-logo.png"
          alt="Google Cloud Platform"
          width={gcpSize}
          height={gcpSize}
          style={{ width: gcpSize, height: gcpSize }}
          className={`object-contain shrink-0 ${baseClasses} ${className}`}
        />
      );
    }

    case 'google-cloud-platform': {
      const logoH = Math.max(size * 1.45, 24);
      return (
        <span
          className={`inline-flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-md border border-zinc-200/90 shadow-2xs shrink-0 ${baseClasses} ${className}`}
        >
          <img
            src="/official-google-cloud-logo.png"
            alt="Google Cloud"
            style={{ height: `${logoH}px`, width: 'auto' }}
            className="object-contain shrink-0"
          />
          <span className="w-px h-3.5 bg-zinc-200 shrink-0" />
          <img
            src="/official-gcp-logo.png"
            alt="Google Cloud Platform"
            style={{ height: `${logoH}px`, width: 'auto' }}
            className="object-contain shrink-0"
          />
        </span>
      );
    }

    case 'google-maps':
    case 'google-maps-innovators': {
      const badgeSize = Math.max(size * 1.6, 28);
      return (
        <img
          src="/certificates/badge-google-maps-innovators.svg"
          alt="Google Maps Platform Innovators"
          width={badgeSize}
          height={badgeSize}
          style={{ width: badgeSize, height: badgeSize }}
          className={`object-contain shrink-0 ${baseClasses} ${className}`}
        />
      );
    }

    case 'firebase':
    case 'firebase-developer':
    case 'firebase-studio': {
      const badgeSize = Math.max(size * 1.6, 28);
      return (
        <img
          src="/certificates/badge-firebase-studio.svg"
          alt="Firebase Studio"
          width={badgeSize}
          height={badgeSize}
          style={{ width: badgeSize, height: badgeSize }}
          className={`object-contain shrink-0 ${baseClasses} ${className}`}
        />
      );
    }

    case 'nvidia': {
      const nvidiaH = Math.max(size * 1.5, 24);
      return (
        <span
          className={`inline-flex items-center bg-white px-1.5 py-0.5 rounded-md border border-zinc-200/90 shadow-2xs shrink-0 ${baseClasses} ${className}`}
        >
          <img
            src="/official-nvidia-logo.png"
            alt="NVIDIA"
            style={{ height: `${nvidiaH}px`, width: 'auto' }}
            className="object-contain shrink-0 scale-110"
          />
        </span>
      );
    }

    case 'nvidia-developer': {
      const badgeSize = Math.max(size * 1.6, 28);
      return (
        <img
          src="/certificates/badge-nvidia-developer.svg"
          alt="NVIDIA Developer"
          width={badgeSize}
          height={badgeSize}
          style={{ width: badgeSize, height: badgeSize }}
          className={`object-contain shrink-0 ${baseClasses} ${className}`}
        />
      );
    }

    case 'gdg-campus': {
      const badgeSize = Math.max(size * 1.6, 28);
      return (
        <img
          src="/certificates/badge-gdg-campus-member.svg"
          alt="GDG on Campus Member"
          width={badgeSize}
          height={badgeSize}
          style={{ width: badgeSize, height: badgeSize }}
          className={`object-contain shrink-0 ${baseClasses} ${className}`}
        />
      );
    }

    case 'perpusnas':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={`${baseClasses} ${className}`}
        >
          <path
            d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v-14H6.5A2.5 2.5 0 0 0 4 5.5v14zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-2H6.5a.5.5 0 0 1-.5-.5z"
            fill="#0F766E"
          />
          <path d="M12 7l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5-2.5-2.5 3.5-.5L12 7z" fill="#F59E0B" />
        </svg>
      );

    case 'oshsp':
    case 'kshpi':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={`${baseClasses} ${className}`}
        >
          <circle cx="12" cy="9" r="6" fill="#F59E0B" />
          <path d="M9 14l-3 7 6-3 6 3-3-7" fill="#DC2626" />
          <circle cx="12" cy="9" r="4" fill="#FDE68A" />
        </svg>
      );

    case 'sman1-cilegon':
    case 'sman1cilegon':
      return <SMAN1CilegonLogo size={size} className={className} />;

    case 'um-banten':
    case 'umbanten':
      return <UMBantenLogo size={size} className={className} />;

    case 'typescript':
      return (
        <div
          style={{ width: size, height: size }}
          className={`bg-[#3178C6] text-white flex items-center justify-center font-bold text-[10px] font-mono select-none ${baseClasses} ${className}`}
        >
          TS
        </div>
      );

    case 'python':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={`${baseClasses} ${className}`}
        >
          <path
            d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3v1.4h5.9v.9H6.6S4 5.3 4 8.5c0 3.1 2.3 3 2.3 3h1.4v-1.4c0-1.6 1.3-1.6 1.3-1.6h5.8c1.3 0 1.6-1.3 1.6-1.3V3.3S16.7 2 11.9 2zm-1.8 1.4c.4 0 .8.3.8.8s-.3.8-.8.8-.8-.3-.8-.8.4-.8.8-.8z"
            fill="#3776AB"
          />
          <path
            d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3v-1.4H9.1v-.9h8.3s2.6.3 2.6-2.9c0-3.1-2.3-3-2.3-3h-1.4v1.4c0 1.6-1.3 1.6-1.3 1.6H9.2c-1.3 0-1.6 1.3-1.6 1.3v3.9s-.3 1.3 4.5 1.3zm1.8-1.4c-.4 0-.8-.3-.8-.8s.3-.8.8-.8.8.3.8.8-.4.8-.8.8z"
            fill="#FFD43B"
          />
        </svg>
      );

    case 'nextjs':
      return (
        <div
          style={{ width: size, height: size }}
          className={`border border-zinc-700 bg-black text-white flex items-center justify-center font-bold text-[10px] font-mono ${baseClasses} ${className}`}
        >
          N
        </div>
      );

    case 'react':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={`${baseClasses} ${className}`}
        >
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
        </svg>
      );

    case 'tailwind':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={`${baseClasses} ${className}`}
        >
          <path
            d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2.2-1.1 3.5-.8 1.1.3 1.9 1.1 2.8 2 1.4 1.4 3 3.2 6.2 3.2 2.4 0 3.9-1.2 4.5-3.6-1 .8-2.2 1.1-3.5.8-1.1-.3-1.9-1.1-2.8-2-1.4-1.4-3-3.2-6.2-3.2zm-8 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2.2-1.1 3.5-.8 1.1.3 1.9 1.1 2.8 2 1.4 1.4 3 3.2 6.2 3.2 2.4 0 3.9-1.2 4.5-3.6-1 .8-2.2 1.1-3.5.8-1.1-.3-1.9-1.1-2.8-2-1.4-1.4-3-3.2-6.2-3.2z"
            fill="#38BDF8"
          />
        </svg>
      );

    default:
      return (
        <div
          style={{ width: size, height: size }}
          className={`border border-zinc-700 flex items-center justify-center font-bold text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono ${baseClasses} ${className}`}
        >
          TF
        </div>
      );
  }
};
