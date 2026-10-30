import React, { useState, useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  scrambleCycles?: number;
  autoPlay?: boolean;
  hoverTrigger?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p' | 'div';
}

const GLYPHS = '!<>-_\\/[]{}—=+*^?#________0101';

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = '',
  scrambleSpeed = 25,
  scrambleCycles = 2,
  autoPlay = true,
  hoverTrigger = true,
  tag = 'span',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const isScrambling = useRef(false);
  const intervalRef = useRef<number | null>(null);

  const startScramble = () => {
    if (isScrambling.current) return;
    isScrambling.current = true;

    let iteration = 0;
    const maxIterations = text.length * scrambleCycles;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / scrambleCycles) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        isScrambling.current = false;
      }

      iteration += 1;
    }, scrambleSpeed);
  };

  useEffect(() => {
    if (autoPlay) {
      startScramble();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  const Tag = tag;

  return (
    <Tag
      className={`inline-block cursor-default font-mono ${className}`}
      onMouseEnter={() => {
        if (hoverTrigger && !isScrambling.current) {
          startScramble();
        }
      }}
    >
      {displayText}
    </Tag>
  );
};
