import React, { useState } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  scrambleCycles?: number;
  autoPlay?: boolean;
  hoverTrigger?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p' | 'div';
}

// Vibrant IDE Syntax Highlighting Color Palette
const SYNTAX_COLORS = [
  'text-cyan-500 dark:text-cyan-400',
  'text-amber-500 dark:text-amber-300',
  'text-emerald-500 dark:text-emerald-400',
  'text-rose-500 dark:text-rose-400',
  'text-indigo-500 dark:text-indigo-400',
  'text-yellow-500 dark:text-yellow-300',
];

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  tag = 'span',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const Tag = tag;

  // Split text by tokens while keeping spaces and special punctuation clean
  const tokens = text.split(/(\s+|&|—|-)/);

  return (
    <Tag
      className={`inline-flex items-center gap-x-1.5 flex-wrap font-mono transition-transform duration-200 select-text ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-purple-500 dark:text-purple-400 font-bold select-none text-[0.9em]">&lt;</span>
      {tokens.map((token, index) => {
        if (!token) return null;
        if (token === ' ') {
          return <span key={index}> </span>;
        }
        if (token === '&') {
          return (
            <span key={index} className="text-rose-500 dark:text-rose-400 font-bold select-none">
              &amp;
            </span>
          );
        }
        if (token === '—' || token === '-') {
          return (
            <span key={index} className="text-zinc-400 dark:text-zinc-500 select-none">
              {token}
            </span>
          );
        }

        const colorIndex = index % SYNTAX_COLORS.length;
        const colorClass = SYNTAX_COLORS[colorIndex];

        return (
          <span
            key={index}
            className={`${colorClass} font-extrabold tracking-tight transition-all duration-300 ${
              isHovered ? 'filter drop-shadow-[0_0_8px_currentColor] brightness-125' : ''
            }`}
          >
            {token}
          </span>
        );
      })}
      <span className="text-purple-500 dark:text-purple-400 font-bold select-none text-[0.9em]">/&gt;</span>
    </Tag>
  );
};
