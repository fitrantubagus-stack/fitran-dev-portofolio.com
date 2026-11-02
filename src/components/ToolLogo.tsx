import React from 'react';

interface ToolLogoProps {
  name: string;
  size?: number;
  className?: string;
}

export const ToolLogo: React.FC<ToolLogoProps> = ({ name, size = 32, className = '' }) => {
  const norm = name.toLowerCase();

  // Next.js
  if (norm.includes('next.js') || norm === 'nextjs') {
    return (
      <svg width={size} height={size} viewBox="0 0 180 180" fill="none" className={className}>
        <circle cx="90" cy="90" r="90" fill="currentColor" className="text-zinc-950 dark:text-white" />
        <path
          d="M149.508 158.46L68.796 54H54V126H66.696V69.756L139.788 163.836C143.208 162.216 146.46 160.404 149.508 158.46Z"
          fill="white"
          className="dark:fill-zinc-950"
        />
        <rect x="115.2" y="54" width="12.6" height="72" fill="white" className="dark:fill-zinc-950" />
      </svg>
    );
  }

  // React
  if (norm.includes('react')) {
    return (
      <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 10.5C18.6 10.5 15.2 13.2 13.8 18.6C16 15.5 18.7 14.5 21.9 15.6C23.7 16.2 25 17.5 26.5 19C28.9 21.4 31.7 24.3 37.5 24.3C42.9 24.3 46.3 21.6 47.7 16.2C45.5 19.3 42.8 20.3 39.6 19.2C37.8 18.6 36.5 17.3 35.1 15.8C32.7 13.4 29.9 10.5 24 10.5ZM13.8 24.3C8.4 24.3 5 27 3.6 32.4C5.8 29.3 8.5 28.3 11.7 29.4C13.5 30 14.8 31.3 16.2 32.8C18.6 35.2 21.4 38.1 27.2 38.1C32.6 38.1 36 35.4 37.4 30C35.2 33.1 32.5 34.1 29.3 33C27.5 32.4 26.2 31.1 24.8 29.6C22.4 27.2 19.6 24.3 13.8 24.3Z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  // TypeScript
  if (norm.includes('typescript')) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <path
          d="M74.88 107.52c-2.4 1.28-5.76 2.08-9.44 2.08-9.92 0-16.64-5.44-16.64-15.68V62.4H36.48V48h12.32V29.76L64 26.88V48h18.24v14.4H64v29.44c0 4.8 2.56 7.36 6.88 7.36 2.24 0 4.16-.48 5.44-.96l-1.44 8.68zM113.6 88c0 13.44-8.8 21.6-23.36 21.6-5.76 0-11.2-1.44-15.2-3.84l3.52-8.96c3.36 2.08 7.68 3.52 11.84 3.52 7.52 0 12-4 12-10.4 0-14.72-23.04-10.72-23.04-26.4 0-9.28 7.36-16.8 20.32-16.8 5.6 0 10.08 1.28 13.44 2.88l-3.2 8.64c-2.72-1.44-6.4-2.56-10.24-2.56-6.72 0-9.6 3.68-9.6 7.52 0 13.6 23.52 9.92 23.52 24.8z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // Claude 3.7 / Anthropic
  if (norm.includes('claude') || norm.includes('anthropic')) {
    return (
      <img
        src="/official-claude-logo.png"
        alt="Claude"
        style={{ width: size, height: size }}
        className={`object-contain ${className}`}
      />
    );
  }

  // Gemini & OpenAI
  if (norm.includes('gemini') || norm.includes('openai')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill="url(#gemini-grad)"
        />
        <defs>
          <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E3A8A" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // n8n
  if (norm.includes('n8n')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#EA4B71" />
        <path
          d="M6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14Z"
          fill="white"
        />
        <path
          d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z"
          fill="white"
        />
        <path
          d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z"
          fill="white"
        />
        <path
          d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z"
          fill="white"
        />
        <path d="M8 12H16M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // PostgreSQL & Supabase
  if (norm.includes('postgres') || norm.includes('supabase')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#3ECF8E" />
        <path
          d="M13.2 4L4 14.8H11.2L10.4 20L19.6 9.2H12.4L13.2 4Z"
          fill="#1C1C1C"
        />
      </svg>
    );
  }

  // Ubuntu Linux
  if (norm.includes('ubuntu') || norm.includes('linux')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="11" fill="#E95420" />
        <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="2.5" />
        <circle cx="6" cy="12" r="2" fill="white" />
        <circle cx="15.5" cy="6" r="2" fill="white" />
        <circle cx="15.5" cy="18" r="2" fill="white" />
      </svg>
    );
  }

  // Docker
  if (norm.includes('docker')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#2496ED" />
        <rect x="4" y="10" width="2" height="2" fill="white" />
        <rect x="7" y="10" width="2" height="2" fill="white" />
        <rect x="10" y="10" width="2" height="2" fill="white" />
        <rect x="7" y="7" width="2" height="2" fill="white" />
        <rect x="10" y="7" width="2" height="2" fill="white" />
        <rect x="13" y="10" width="2" height="2" fill="white" />
        <path
          d="M3 13C3.5 13 4 14 6 14C8 14 9 13 11 13C13 13 14 14 16 14C18 14 19 13 21 13.5C21.5 15.5 20 18 16 18C8 18 4 16 3 13Z"
          fill="white"
        />
      </svg>
    );
  }

  // Tailscale & WireGuard
  if (norm.includes('tailscale') || norm.includes('wireguard')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#232222" />
        <circle cx="7" cy="7" r="2.5" fill="white" />
        <circle cx="12" cy="7" r="2.5" fill="white" opacity="0.4" />
        <circle cx="17" cy="7" r="2.5" fill="white" opacity="0.2" />
        <circle cx="7" cy="12" r="2.5" fill="white" opacity="0.4" />
        <circle cx="12" cy="12" r="2.5" fill="white" />
        <circle cx="17" cy="12" r="2.5" fill="white" opacity="0.4" />
        <circle cx="7" cy="17" r="2.5" fill="white" opacity="0.2" />
        <circle cx="12" cy="17" r="2.5" fill="white" opacity="0.4" />
        <circle cx="17" cy="17" r="2.5" fill="white" />
      </svg>
    );
  }

  // Cloudflare
  if (norm.includes('cloudflare')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#F38020" />
        <path
          d="M18.5 15.5H7.5C6.1 15.5 5 14.4 5 13C5 11.8 5.8 10.7 7 10.5C7.3 8.5 9 7 11 7C12.8 7 14.3 8.2 14.8 9.9C15.2 9.7 15.6 9.5 16 9.5C17.4 9.5 18.5 10.6 18.5 12C18.8 12 19 12.2 19.3 12.5C19.7 13 20 13.7 20 14.5C20 15.1 19.3 15.5 18.5 15.5Z"
          fill="white"
        />
      </svg>
    );
  }

  // Meta Conversions API (CAPI) / Ads
  if (norm.includes('meta')) {
    return (
      <img
        src="/official-meta-logo.png"
        alt="Meta"
        style={{ width: size, height: size }}
        className={`object-contain ${className}`}
      />
    );
  }

  // Google Tag Manager & GA4
  if (norm.includes('google') || norm.includes('gtm') || norm.includes('ga4')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#4285F4" />
        <path d="M7 17V13H10V17H7Z" fill="#FABB05" />
        <path d="M11 17V9H14V17H11Z" fill="#E37400" />
        <path d="M15 17V5H18V17H15Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Vercel
  if (norm.includes('vercel')) {
    return (
      <img
        src="/official-vercel-logo.png"
        alt="Vercel"
        style={{ width: size, height: size }}
        className={`object-contain ${className}`}
      />
    );
  }

  // Python
  if (norm.includes('python')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M11.9 2C8.3 2 8.5 3.5 8.5 3.5V5.1H12.1V5.6H5.2C2.7 5.6 2.7 8.1 2.7 8.1C2.7 10.5 4.3 10.4 4.3 10.4H5.9V8.6C5.9 7.4 6.9 7.4 6.9 7.4H10.4C11.5 7.4 11.5 6.3 11.5 6.3V2.8C11.5 2 11.9 2 11.9 2ZM10.2 3.5C10.6 3.5 10.9 3.8 10.9 4.2C10.9 4.6 10.6 4.9 10.2 4.9C9.8 4.9 9.5 4.6 9.5 4.2C9.5 3.8 9.8 3.5 10.2 3.5Z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22C15.7 22 15.5 20.5 15.5 20.5V18.9H11.9V18.4H18.8C21.3 18.4 21.3 15.9 21.3 15.9C21.3 13.5 19.7 13.6 19.7 13.6H18.1V15.4C18.1 16.6 17.1 16.6 17.1 16.6H13.6C12.5 16.6 12.5 17.7 12.5 17.7V21.2C12.5 22 12.1 22 12.1 22ZM13.8 20.5C13.4 20.5 13.1 20.2 13.1 19.8C13.1 19.4 13.4 19.1 13.8 19.1C14.2 19.1 14.5 19.4 14.5 19.8C14.5 20.2 14.2 20.5 13.8 20.5Z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // AWS
  if (norm.includes('aws') || norm.includes('amazon')) {
    return (
      <img
        src="/official-aws-logo.png"
        alt="AWS"
        style={{ width: size, height: size }}
        className={`object-contain ${className}`}
      />
    );
  }

  // Default fallback badge
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 flex items-center justify-center font-mono font-bold text-xs text-[#1E3A8A] dark:text-blue-400 ${className}`}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
};
