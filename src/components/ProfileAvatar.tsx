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
    sm: 'w-10 h-10 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-24 h-24 text-base',
    hero: 'w-24 h-24 sm:w-28 sm:h-28 text-lg',
  };

  return (
    <div className={`relative shrink-0 select-none ${className}`}>
      {/* Sleek circular avatar with double ring glow */}
      <div
        className={`relative ${sizeClasses[size]} rounded-full p-1 bg-gradient-to-tr from-zinc-200 via-zinc-400 to-zinc-200 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-800 shadow-md`}
      >
        <div className="w-full h-full rounded-full overflow-hidden border border-white dark:border-zinc-900 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-950 flex items-center justify-center">
          {!imageError && PERSONAL_INFO.avatarUrl ? (
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-[center_20%] transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center font-mono text-zinc-800 dark:text-zinc-200 font-bold bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900">
              <span className="text-xl sm:text-2xl font-black tracking-tight">TF</span>
              <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">software</span>
            </div>
          )}
        </div>
      </div>

      {/* Online Status Glowing Indicator */}
      {showBadge && (
        <span
          title="Available for projects & roles"
          className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white dark:border-zinc-900 shadow-xs"></span>
        </span>
      )}
    </div>
  );
};
