import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Play, Pause, Coffee, Code2, Terminal } from 'lucide-react';

export const VibeCodingLaptop: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const codeLines = [
    "import { craft } from '@tubagus-fitran/core';",
    "const developer = new SoftwareEngineer({",
    "  name: 'Tubagus Fitran Badruttamam',",
    "  focus: ['Distributed Systems', 'Cloud AI'],",
    "  status: 'Shipping reliable software',",
    "});",
    "await developer.deploy({ mode: 'production' });",
    "// status: ✓ vibe coding active",
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [isPlaying, codeLines.length]);

  return (
    <div className={`relative flex flex-col items-center justify-center select-none py-6 ${className}`}>
      {/* 3D Perspective Scene Container */}
      <div
        className="relative flex items-center justify-center"
        style={{ perspective: '1000px' }}
      >
        {/* Floating Steam/Vibe particles (code tokens) */}
        <div className="absolute -top-10 flex gap-8 pointer-events-none">
          <span className="font-mono text-xs font-bold text-emerald-500/70 animate-bounce delay-100">&lt;/&gt;</span>
          <span className="font-mono text-xs font-bold text-blue-500/70 animate-bounce delay-300">&#123; &#125;</span>
          <span className="font-mono text-xs font-bold text-amber-500/70 animate-bounce delay-500">async</span>
        </div>

        {/* 3D LAPTOP BODY */}
        <div
          className="relative flex flex-col items-center transition-transform duration-500 hover:scale-105"
          style={{ transform: 'rotateX(12deg) rotateY(-8deg) rotateZ(1deg)' }}
        >
          {/* Laptop Screen Lid */}
          <div className="w-[300px] sm:w-[380px] h-[190px] sm:h-[230px] rounded-t-xl rounded-b-xs p-2.5 bg-gradient-to-b from-zinc-800 to-zinc-900 border-2 border-zinc-700 shadow-2xl flex flex-col">
            {/* Screen Bezel & Camera */}
            <div className="flex items-center justify-between px-2 pb-1.5 border-b border-zinc-800 text-[10px] font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
                <span className="ml-2 text-zinc-500">fitran-dev-env</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            </div>

            {/* Glowing Screen Content: Code Editor */}
            <div className="flex-1 bg-[#0D1117] rounded-md p-3 font-mono text-xs text-zinc-300 overflow-hidden flex flex-col justify-between shadow-inner">
              <div className="space-y-1">
                {codeLines.slice(0, currentLineIndex + 1).map((line, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-zinc-600 select-none w-4 text-right text-[10px]">{idx + 1}</span>
                    <span className={idx === currentLineIndex ? 'text-emerald-400 font-semibold' : 'text-zinc-300'}>
                      {line}
                    </span>
                  </div>
                ))}
              </div>

              {/* Status bar */}
              <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-500">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>vibe-coding.ts</span>
                </div>
                <span>UTF-8 • Next.js</span>
              </div>
            </div>
          </div>

          {/* Laptop Screen Hinge */}
          <div className="w-[120px] h-[5px] bg-zinc-700 rounded-b-md" />

          {/* Laptop Base Keyboard Deck */}
          <div className="w-[340px] sm:w-[420px] h-[70px] sm:h-[80px] bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-b-xl border-t border-zinc-600 shadow-2xl flex flex-col items-center justify-between p-2">
            {/* Keyboard Keys Layout */}
            <div className="w-full max-w-[300px] sm:max-w-[360px] h-[34px] bg-zinc-900/90 rounded-md p-1 grid grid-cols-12 gap-0.5 border border-zinc-800">
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-xs ${
                    i % 5 === currentLineIndex % 5
                      ? 'bg-zinc-600 shadow-inner'
                      : 'bg-zinc-800'
                  }`}
                />
              ))}
            </div>

            {/* Trackpad */}
            <div className="w-[70px] sm:w-[85px] h-[18px] bg-zinc-800/80 rounded-md border border-zinc-700/60" />
          </div>

          {/* Laptop Shadow */}
          <div className="w-[320px] sm:w-[400px] h-[16px] bg-black/40 filter blur-md rounded-full mt-2" />
        </div>

        {/* Steaming Coffee Cup Beside Laptop */}
        <div className="relative -ml-6 sm:-ml-8 mt-12 flex flex-col items-center group cursor-pointer" title="Coffee Fuel">
          {/* Steam lines */}
          <div className="flex gap-1 mb-1">
            <span className="w-0.5 h-3 bg-zinc-400/60 rounded-full animate-pulse" />
            <span className="w-0.5 h-4 bg-zinc-400/80 rounded-full animate-pulse delay-150" />
            <span className="w-0.5 h-3 bg-zinc-400/60 rounded-full animate-pulse delay-300" />
          </div>

          {/* Ceramic Mug */}
          <div className="w-9 h-11 bg-zinc-200 dark:bg-zinc-800 rounded-b-xl border border-zinc-300 dark:border-zinc-700 shadow-md relative flex items-center justify-center">
            <Coffee className="w-4 h-4 text-amber-600 dark:text-amber-500" />
            {/* Mug Handle */}
            <div className="absolute -right-2 top-2 w-3 h-5 border-2 border-zinc-300 dark:border-zinc-700 rounded-r-full" />
          </div>
        </div>
      </div>

      {/* Control / Label */}
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-mono text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          <span>{isPlaying ? (language === 'id' ? 'Jeda Ketik' : 'Pause Vibe') : (language === 'id' ? 'Lanjutkan' : 'Resume')}</span>
        </button>

        <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
          // {language === 'id' ? '3D Vibe Coding Station' : '3D Vibe Coding Station'}
        </span>
      </div>
    </div>
  );
};
