import React from 'react';
import { GoogleDeveloperLogo } from './GoogleDeveloperLogo';

interface BrandIconProps {
  name:
    | 'github'
    | 'linkedin'
    | 'instagram'
    | 'aws'
    | 'google'
    | 'google-dev'
    | 'google-cloud'
    | 'nvidia'
    | 'perpusnas'
    | 'oshsp'
    | 'kshpi'
    | 'chandra-asri'
    | 'nextjs'
    | 'react'
    | 'tailwind'
    | 'figma'
    | 'framer';
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
  const baseClasses = 'transition-transform duration-200 ease-out hover:scale-105';

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

    case 'aws':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={`${baseClasses} ${className}`}
        >
          <path
            d="M8.2 9.5c-.8 0-1.4.2-1.8.6-.4.4-.6 1-.6 1.8 0 .8.2 1.4.6 1.8.4.4 1 .6 1.8.6.8 0 1.4-.2 1.8-.6.4-.4.6-1 .6-1.8 0-.8-.2-1.4-.6-1.8-.4-.4-1-.6-1.8-.6zm0 3.8c-.5 0-.8-.2-1-.5-.2-.3-.3-.7-.3-1.3 0-.6.1-1 .3-1.3.2-.3.5-.5 1-.5.5 0 .8.2 1 .5.2.3.3.7.3 1.3 0 .6-.1 1-.3 1.3-.2.3-.5.5-1 .5zM15.4 9.5c-.8 0-1.4.2-1.8.6-.4.4-.6 1-.6 1.8 0 .8.2 1.4.6 1.8.4.4 1 .6 1.8.6.8 0 1.4-.2 1.8-.6.4-.4.6-1 .6-1.8 0-.8-.2-1.4-.6-1.8-.4-.4-1-.6-1.8-.6zm0 3.8c-.5 0-.8-.2-1-.5-.2-.3-.3-.7-.3-1.3 0-.6.1-1 .3-1.3.2-.3.5-.5 1-.5.5 0 .8.2 1 .5.2.3.3.7.3 1.3 0 .6-.1 1-.3 1.3-.2.3-.5.5-1 .5z"
            fill="#232F3E"
          />
          <path
            d="M3 17.5c4.5 3 13.5 3 18-2M18.8 13.8l2.2 1.7-1 2.5"
            stroke="#FF9900"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

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

    case 'google-cloud':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={`${baseClasses} ${className}`}
        >
          <path
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"
            fill="#4285F4"
          />
        </svg>
      );

    case 'nvidia':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={`${baseClasses} ${className}`}
        >
          <path
            d="M8.9 4.5c4.7 0 8.5 3.8 8.5 8.5 0 2.2-.8 4.2-2.2 5.7-.3.3-.8.4-1.1.1-.3-.3-.4-.8-.1-1.1 1.1-1.3 1.8-3 1.8-4.7 0-3.8-3.1-6.9-6.9-6.9-3 0-5.6 1.9-6.5 4.7-.1.4-.6.7-1 .5-.4-.1-.7-.6-.5-1 1.2-3.4 4.3-5.8 7.9-5.8zm-1.8 3.5c3 0 5.4 2.4 5.4 5.4 0 1.4-.5 2.7-1.4 3.6-.3.3-.8.3-1.1 0-.3-.3-.3-.8 0-1.1.6-.7.9-1.6.9-2.5 0-2.1-1.7-3.8-3.8-3.8-1.7 0-3.1 1.1-3.6 2.7-.1.4-.6.6-1 .5-.4-.1-.6-.6-.5-1 .7-2.2 2.7-3.8 5.1-3.8zm-.8 3.2c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z"
            fill="#76B900"
          />
        </svg>
      );

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

    default:
      return (
        <div
          style={{ width: size, height: size }}
          className={`rounded flex items-center justify-center font-bold text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 ${baseClasses} ${className}`}
        >
          TF
        </div>
      );
  }
};
