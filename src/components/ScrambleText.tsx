import React, { useState, useEffect } from 'react';
import { useTextStyle } from '../context/TextStyleContext';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  scrambleCycles?: number;
  autoPlay?: boolean;
  hoverTrigger?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p' | 'div';
  forceMode?: 'formal' | 'coding';
}

// Crisp, high-contrast IDE Syntax Highlighting Colors (Zero glow/blur, 100% legible on Light & Dark)
const SYNTAX_COLORS = [
  'text-blue-700 dark:text-sky-400',
  'text-emerald-700 dark:text-emerald-400',
  'text-indigo-700 dark:text-indigo-400',
  'text-rose-700 dark:text-rose-400',
  'text-amber-700 dark:text-amber-400',
  'text-purple-700 dark:text-purple-400',
];

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  scrambleSpeed = 38,
  autoPlay = true,
  tag = 'span',
  forceMode,
}) => {
  const { isFormalMode } = useTextStyle();
  const isFormal = forceMode ? forceMode === 'formal' : isFormalMode;

  // In formal mode: length is just text.length
  // In coding mode: length is text.length + 4 (includes '< ' and ' />')
  const fullLength = isFormal ? text.length : text.length + 4;

  const [typedCount, setTypedCount] = useState<number>(autoPlay ? 0 : fullLength);
  const [isTyping, setIsTyping] = useState<boolean>(autoPlay);
  const Tag = tag;

  useEffect(() => {
    if (!autoPlay) {
      setTypedCount(fullLength);
      setIsTyping(false);
      return;
    }

    setTypedCount(0);
    setIsTyping(true);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setTypedCount(current);
      if (current >= fullLength) {
        clearInterval(interval);
        setTimeout(() => setIsTyping(false), 900);
      }
    }, scrambleSpeed);

    return () => clearInterval(interval);
  }, [text, autoPlay, fullLength, scrambleSpeed, isFormal]);

  // Split text into words/tokens while keeping spaces and punctuation
  const tokens = text.split(/(\s+|&|—|-)/);

  if (isFormal) {
    // FORMAL MODE: Clean solid typography without < /> and without syntax colors
    let charCursor = 0;
    return (
      <Tag
        className={`inline-flex items-center gap-x-1.5 flex-wrap font-heading font-black tracking-tight select-text transition-all duration-500 ${className}`}
      >
        {tokens.map((token, index) => {
          if (!token) return null;
          const tokenStart = charCursor;
          const tokenEnd = charCursor + token.length;
          charCursor = tokenEnd;

          if (typedCount <= tokenStart) {
            return null;
          }

          const sliceLen = Math.min(token.length, typedCount - tokenStart);
          const visibleToken = token.slice(0, sliceLen);

          if (token.trim() === '') {
            return <span key={index}> </span>;
          }

          return (
            <span key={index} className="tracking-tight">
              {visibleToken}
            </span>
          );
        })}
        {isTyping && (
          <span
            className="inline-block w-[3px] h-[0.95em] bg-current opacity-70 animate-pulse ml-0.5 align-middle"
            aria-hidden="true"
          />
        )}
      </Tag>
    );
  }

  // CODING MODE: With <, />, syntax colors and monospace font
  const showOpenBracket = typedCount >= 1;
  const visibleInnerChars = Math.max(0, Math.min(text.length, typedCount - 1));
  const closingProgress = Math.max(0, typedCount - 1 - text.length);

  let charCursor = 0;
  let colorWordCounter = 0;

  return (
    <Tag
      className={`inline-flex items-center gap-x-1.5 flex-wrap font-mono select-text transition-all duration-500 ${className}`}
    >
      {showOpenBracket && (
        <span className="text-purple-700 dark:text-purple-400 font-black select-none text-[0.92em]">
          &lt;
        </span>
      )}

      {tokens.map((token, index) => {
        if (!token) return null;

        const tokenStart = charCursor;
        const tokenEnd = charCursor + token.length;
        charCursor = tokenEnd;

        if (visibleInnerChars <= tokenStart) {
          return null;
        }

        const sliceLen = Math.min(token.length, visibleInnerChars - tokenStart);
        const visibleToken = token.slice(0, sliceLen);

        if (token.trim() === '') {
          return <span key={index}> </span>;
        }

        if (token === '&') {
          return (
            <span key={index} className="text-rose-700 dark:text-rose-400 font-black select-none">
              {visibleToken}
            </span>
          );
        }

        if (token === '—' || token === '-') {
          return (
            <span key={index} className="text-zinc-500 dark:text-zinc-400 font-bold select-none">
              {visibleToken}
            </span>
          );
        }

        const colorClass = SYNTAX_COLORS[colorWordCounter % SYNTAX_COLORS.length];
        colorWordCounter += 1;

        return (
          <span key={index} className={`${colorClass} font-black tracking-tight`}>
            {visibleToken}
          </span>
        );
      })}

      {closingProgress >= 2 && (
        <span className="text-purple-700 dark:text-purple-400 font-black select-none text-[0.92em]">
          {closingProgress >= 3 ? '/>' : '/'}
        </span>
      )}

      {isTyping && (
        <span
          className="inline-block w-[3px] h-[0.95em] bg-emerald-600 dark:bg-emerald-400 animate-pulse ml-0.5 align-middle"
          aria-hidden="true"
        />
      )}
    </Tag>
  );
};
