import React, { useState, useEffect } from 'react';
import { Terminal, Copy, Check, RotateCcw, Code2 } from 'lucide-react';

const fullCodeSnippet = `/**
 * Architecture & Technology Stack
 * Built and engineered with modern web standards.
 */

const applicationSpec = {
  markup: "HTML5 (Semantic & Accessible)",
  styling: "Tailwind CSS (Utility-First)",
  scripting: "JavaScript / TypeScript (ESNext)",
  runtime: "Node.js (Server & Tooling)",
  buildEngine: "Vite + React 18+",
  status: "Production Ready & Verified"
};

export default applicationSpec;`;

export const TechStackTerminal: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    setIsTyping(true);

    const timer = setInterval(() => {
      index++;
      if (index <= fullCodeSnippet.length) {
        setDisplayedText(fullCodeSnippet.slice(0, index));
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 18);

    return () => clearInterval(timer);
  }, []);

  const restartTyping = () => {
    setDisplayedText('');
    setIsTyping(true);
    let index = 0;
    const timer = setInterval(() => {
      index++;
      if (index <= fullCodeSnippet.length) {
        setDisplayedText(fullCodeSnippet.slice(0, index));
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 18);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(fullCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper to render simple syntax highlighting for the current typed text
  const renderHighlightedCode = (text: string) => {
    const lines = text.split('\n');

    return lines.map((line, lineIndex) => {
      // Comments
      if (line.trim().startsWith('/**') || line.trim().startsWith('*') || line.trim().startsWith('*/')) {
        return (
          <div key={lineIndex} className="text-zinc-500 font-mono italic">
            {line}
          </div>
        );
      }

      // Const / export keywords
      let content = line;
      return (
        <div key={lineIndex} className="font-mono leading-relaxed">
          <span className="text-zinc-600 select-none mr-3 text-[11px] inline-block w-4 text-right">
            {lineIndex + 1}
          </span>
          {line.includes('const ') ? (
            <>
              <span className="text-purple-400 font-semibold">const </span>
              <span className="text-blue-300">applicationSpec </span>
              <span className="text-zinc-400">= </span>
              <span className="text-amber-300">{'{'}</span>
            </>
          ) : line.includes('export default') ? (
            <>
              <span className="text-purple-400 font-semibold">export default </span>
              <span className="text-blue-300">applicationSpec</span>
              <span className="text-zinc-400">;</span>
            </>
          ) : line.includes(':') ? (
            (() => {
              const parts = line.split(':');
              const key = parts[0];
              const val = parts.slice(1).join(':');
              return (
                <>
                  <span className="text-cyan-300">{key}</span>
                  <span className="text-zinc-400">:</span>
                  <span className="text-emerald-300">{val}</span>
                </>
              );
            })()
          ) : (
            <span className="text-zinc-300">{line}</span>
          )}
        </div>
      );
    });
  };

  return (
    <div className="rounded-2xl bg-[#0F141C] border border-zinc-700/80 shadow-2xl overflow-hidden text-left font-mono">
      {/* Terminal Titlebar Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#161D27] border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block"></span>
          </div>
          <div className="ml-2 flex items-center gap-1.5 text-xs text-zinc-400 font-sans font-medium">
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>stack.config.js</span>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={restartTyping}
            title="Replay typing animation"
            className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-700/60 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={copyCode}
            title="Copy code snippet"
            className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-700/60 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 text-xs sm:text-[12.5px] overflow-x-auto min-h-[220px]">
        {renderHighlightedCode(displayedText)}
        {isTyping && (
          <span className="inline-block w-2 h-4 ml-0.5 bg-blue-400 animate-pulse align-middle"></span>
        )}
      </div>

      {/* Tech Stack Badges Footer */}
      <div className="px-4 py-3 bg-[#131923] border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5 font-sans">
          <span className="px-2 py-0.5 rounded-md bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold text-[10px]">
            HTML5
          </span>
          <span className="px-2 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-400 font-semibold text-[10px]">
            Tailwind CSS
          </span>
          <span className="px-2 py-0.5 rounded-md bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-semibold text-[10px]">
            JavaScript
          </span>
          <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-[10px]">
            Node.js
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>ESNext Modules</span>
        </div>
      </div>
    </div>
  );
};
