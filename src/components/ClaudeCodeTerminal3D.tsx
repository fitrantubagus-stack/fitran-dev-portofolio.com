import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Check, Copy, ChevronDown, ChevronRight, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ClaudeCodeTerminal3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeTheme, setActiveTheme] = useState<'claude' | 'antigravity'>('claude');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([]);
  const [eyeBlink, setEyeBlink] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const { language } = useLanguage();

  // Antigravity CLI live animation states
  const [selectedScheme, setSelectedScheme] = useState('dark');
  const [expandedThought1, setExpandedThought1] = useState(true);
  const [spinnerIndex, setSpinnerIndex] = useState(0);
  const spinnerFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

  // Spinner tick
  useEffect(() => {
    const timer = setInterval(() => {
      setSpinnerIndex((prev) => (prev + 1) % spinnerFrames.length);
    }, 90);
    return () => clearInterval(timer);
  }, [spinnerFrames.length]);

  // Eye blinking animation for Claude's 8-bit orange mascot
  useEffect(() => {
    const interval = setInterval(() => {
      setEyeBlink(true);
      setTimeout(() => setEyeBlink(false), 220);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 3D Tilt perspective based on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotY(x * 6);
    setRotX(-y * 5);
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
  };

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = '';

    switch (cmd) {
      case 'help':
      case '--help':
        output = (
          <div className="text-zinc-300 space-y-1 text-xs font-mono">
            <p className="text-emerald-400 font-bold">Available Commands:</p>
            <p><span className="text-amber-400 font-semibold">projects</span> : List live production repositories &amp; applications</p>
            <p><span className="text-amber-400 font-semibold">certs</span> : List verified Meta, Vercel, Google, AWS &amp; Olympiad honors</p>
            <p><span className="text-amber-400 font-semibold">about</span> : Developer bio, S1 Informatika &amp; affiliations</p>
            <p><span className="text-amber-400 font-semibold">skills</span> : Core languages, cloud infra &amp; autonomous agent stack</p>
            <p><span className="text-amber-400 font-semibold">antigravity</span> : Switch to Antigravity CLI theme</p>
            <p><span className="text-amber-400 font-semibold">claude</span> : Switch to Claude Code CLI theme</p>
            <p><span className="text-amber-400 font-semibold">contact</span> : Direct email and verified profiles</p>
            <p><span className="text-amber-400 font-semibold">clear</span> : Clear console buffer</p>
          </div>
        );
        break;

      case 'antigravity':
        setActiveTheme('antigravity');
        output = <p className="text-sky-400 font-mono">Switched to Antigravity CLI (Gemini 3.5 Flash) theme.</p>;
        break;

      case 'claude':
        setActiveTheme('claude');
        output = <p className="text-orange-400 font-mono">Switched to Claude Code CLI (v2.1.268) theme.</p>;
        break;

      case 'projects':
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-emerald-400 font-bold">Live Repositories &amp; Web Architectures:</p>
            <p>• <a href="https://petroknow-platform.vercel.app/" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">PetroKnow Platform</a> — Industrial AI knowledge hub &amp; digital twin</p>
            <p>• <a href="https://ramadhan-ku-tubagus.vercel.app/" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Ramadhan Ku</a> — Offline-first Islamic daily companion &amp; prayer suite</p>
            <p>• <a href="https://finansial-ku-tubagus.vercel.app/" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Finansial Ku</a> — Personal financial tracker &amp; cash-flow dashboard</p>
            <p>• <span className="text-zinc-400">Radja Topup</span> — High-concurrency gaming top-up &amp; checkout engine</p>
          </div>
        );
        break;

      case 'certs':
      case 'credentials':
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-emerald-400 font-bold">Verified Accreditations &amp; National Honors:</p>
            <p>• Meta Blueprint — How to post on a Facebook Page (09/12/2026)</p>
            <p>• Vercel Inc. — Next.js App Router Fundamentals (CEO: Guillermo Rauch)</p>
            <p>• Google Developer Program Verified Profile [108601218527303855788]</p>
            <p>• Google Maps Platform Innovators &amp; Firebase Studio Developer</p>
            <p>• AWS Responsible AI &amp; Bedrock Guardrails Certified</p>
            <p>• NVIDIA DSX Air &amp; CVT Fundamentals Certified</p>
            <p>• 2× Gold Medalist — National Science Olympiads (OSHSP &amp; KSHPI 2024)</p>
            <p>• Published Author — Perpustakaan Nasional RI (HUT Ke-46)</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-1 text-xs font-mono text-zinc-300">
            <p className="text-emerald-400 font-bold">Technical Competencies:</p>
            <p>• Frontend: TypeScript, Next.js 15 App Router, React 19, Tailwind CSS, Framer Motion</p>
            <p>• Cloud: Google Cloud, Firebase Serverless, AWS IAM &amp; API Gateway, Vercel Edge</p>
            <p>• AI / Data: Multimodal Gemini 3.5, Amazon Bedrock, BigQuery, Vector Search</p>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1">
            <p className="text-emerald-400 font-bold">Tubagus Fitran Badruttamam (Fitran):</p>
            <p>Software Engineer (student) at Universitas Muhammadiyah Banten (S1 Informatika).</p>
            <p>Alumni of SMA Negeri 1 Cilegon with 2× National Science Olympiad Gold Medals.</p>
            <p>Engineering Supervisor at Radja Gaming &amp; Community Tech Mentor at SejutaCita.</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs font-mono text-zinc-300 space-y-1">
            <p className="text-emerald-400 font-bold">Get In Touch:</p>
            <p>• Email: <a href="mailto:fitran.dev@gmail.com" className="text-cyan-400 hover:underline">fitran.dev@gmail.com</a></p>
            <p>• GitHub: <a href="https://github.com/tubagus-fitran" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">github.com/tubagus-fitran</a></p>
            <p>• Location: Cilegon &amp; Serang, Banten, Indonesia (UTC+7)</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <p className="text-rose-400 font-mono text-xs">
            Command not recognized: `${cmd}`. Type <span className="text-amber-300 font-bold">help</span> to view available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { cmd: rawCmd, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const colorSchemes = [
    'light',
    'solarized light',
    'colorblind-friendly light',
    'dark',
    'solarized dark',
    'colorblind-friendly dark',
    'tokyo night',
    'terminal',
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full transition-transform duration-200 ease-out select-none ${className}`}
      style={{
        perspective: '1200px',
        transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
      }}
    >
      {/* Outer Terminal Container */}
      <div
        className={`w-full rounded-2xl border overflow-hidden shadow-2xl transition-all duration-300 ${
          activeTheme === 'claude'
            ? 'bg-[#0A0B0D] border-zinc-800 text-[#CCCCCC]'
            : 'bg-[#1E1F22] border-zinc-700 text-[#E3E5E8]'
        }`}
      >
        {/* ========================================================================= */}
        {/* TOP WINDOW TITLEBAR & THEME SWITCHER */}
        {/* ========================================================================= */}
        <div
          className={`flex items-center justify-between px-3 py-2 border-b transition-colors ${
            activeTheme === 'claude'
              ? 'bg-[#121316] border-zinc-800 text-zinc-300'
              : 'bg-[#2B2D31] border-zinc-700 text-zinc-200'
          }`}
        >
          {/* Left: Window Tab / Controls matching exact screenshots */}
          <div className="flex items-center gap-2">
            {activeTheme === 'claude' ? (
              /* Exact Windows Terminal Tab from media_1789324580265.png */
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2 px-3 py-1 rounded-t-md bg-[#1F2024] border-t border-x border-zinc-700 text-xs font-mono text-white">
                  <span className="text-[10px] px-1 py-0.2 bg-zinc-800 rounded font-semibold text-zinc-300">cs.</span>
                  <span className="font-semibold">claude</span>
                  <span className="ml-2 text-zinc-500 hover:text-white cursor-pointer text-xs">✕</span>
                </div>
                <button className="px-1.5 py-0.5 text-zinc-500 hover:text-white font-mono text-sm">+</button>
                <button className="px-1.5 py-0.5 text-zinc-500 hover:text-white font-mono text-xs">⌄</button>
              </div>
            ) : (
              /* Exact macOS traffic lights from media_1789324607001.png */
              <div className="flex items-center gap-2 px-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ED6A5E] border border-[#CF5347] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#F5BF4F] border border-[#D6A23C] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#62C554] border border-[#4EA840] inline-block" />
                </div>
                <span className="text-zinc-500 font-mono text-xs ml-3">...</span>
              </div>
            )}
          </div>

          {/* Center / Right: Theme Switcher Pill */}
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-full border border-zinc-700/60 font-mono text-xs">
            <button
              onClick={() => setActiveTheme('claude')}
              className={`px-3 py-0.5 rounded-full transition-all cursor-pointer ${
                activeTheme === 'claude'
                  ? 'bg-[#D97757] text-white font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ◈ Claude Code
            </button>
            <button
              onClick={() => setActiveTheme('antigravity')}
              className={`px-3 py-0.5 rounded-full transition-all cursor-pointer ${
                activeTheme === 'antigravity'
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ✦ Antigravity CLI
            </button>
          </div>

          {/* Right: Window Controls */}
          <div className="hidden sm:flex items-center gap-3 text-zinc-500 text-xs font-mono pr-1">
            {activeTheme === 'claude' ? (
              <div className="flex items-center gap-3">
                <span className="hover:text-white cursor-pointer">—</span>
                <span className="hover:text-white cursor-pointer">□</span>
                <span className="hover:text-white cursor-pointer">✕</span>
              </div>
            ) : (
              <span className="text-zinc-400 text-xs">Antigravity 1.0.0</span>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* THEME 1: CLAUDE CODE CLI (EXACT MATCH TO media_1789324580265.png) */}
        {/* ========================================================================= */}
        {activeTheme === 'claude' && (
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto bg-black">
            {/* Header Metadata block matching user's exact uploaded screenshot */}
            <div className="space-y-0.5 text-zinc-400 text-xs">
              <p>Version: <span className="text-[#D97757] font-semibold">2.1.268</span></p>
              <p>Location: <span className="text-zinc-300">C:\Users\Hype GLK\.local\bin\claude.exe</span></p>
              <p className="pt-1">Next: Run <span className="text-[#D97757] font-bold">claude --help</span> to get started</p>
              <p className="text-emerald-400 font-semibold pb-2">Installation complete!</p>
            </div>

            <div className="pt-2 text-zinc-400 text-xs">
              <p>C:\Users\Hype GLK&gt;cd C:\fitran-portofolio</p>
              <p className="pt-1 text-white">
                C:\fitran-portofolio&gt;<span className="text-[#D97757] font-bold">claude</span>
              </p>
              <p className="text-[#D97757] font-bold text-sm sm:text-base pt-1">
                Welcome to Claude Code v2.1.268
              </p>
              <p className="text-zinc-600">
                ....................................................................................
              </p>
              <p className="text-[#D97757] font-bold text-sm sm:text-base pt-1">
                Welcome to Claude Code v2.1.268
              </p>
              <p className="text-zinc-600 pb-2">
                ....................................................................................
              </p>
            </div>

            {/* THE ICONIC PIXEL ART SCENE FROM USER'S SCREENSHOT media_1789324580265.png */}
            <div className="my-4 p-4 rounded-xl bg-black border border-zinc-900 relative overflow-hidden flex flex-col items-center justify-center min-h-[200px]">
              {/* Twinkling Stars exactly placed */}
              <span className="absolute top-4 left-8 text-zinc-400 text-xs animate-pulse">*</span>
              <span className="absolute top-10 left-36 text-zinc-500 text-[10px]">*</span>
              <span className="absolute top-6 right-20 text-zinc-400 text-xs animate-pulse">*</span>
              <span className="absolute top-24 right-44 text-zinc-500 text-[10px]">*</span>
              <span className="absolute bottom-12 left-52 text-zinc-500 text-[10px]">*</span>
              <span className="absolute bottom-16 right-16 text-zinc-400 text-[10px] animate-pulse">*</span>

              {/* Sky Composition: Clouds and Crescent Moon */}
              <div className="w-full max-w-[520px] flex items-end justify-between px-4 sm:px-10 relative pt-2">
                {/* Left Stippled Dithered Cloud (dots pattern from photo) */}
                <div className="relative mb-2 select-none font-mono text-[10px] text-zinc-600 leading-tight">
                  <pre className="font-mono text-zinc-500">
{`   .:::..
 ::::::::..
.::::::::::::.`}
                  </pre>
                </div>

                {/* Center Right: The Crescent Moon made of pixel blocks */}
                <div className="relative mb-3 select-none">
                  <svg width="60" height="60" viewBox="0 0 56 56" fill="none">
                    <path
                      d="M 22 4 C 12 10 8 22 14 34 C 20 46 32 50 44 46 C 34 46 24 38 22 26 C 20 14 26 6 34 2 C 30 2 26 3 22 4 Z"
                      fill="#E4E4E7"
                      stroke="#A1A1AA"
                      strokeWidth="1.5"
                    />
                    <rect x="18" y="16" width="4" height="4" fill="#71717A" />
                    <rect x="23" y="22" width="5" height="5" fill="#A1A1AA" />
                    <rect x="20" y="30" width="5" height="5" fill="#71717A" />
                    <rect x="28" y="36" width="4" height="4" fill="#A1A1AA" />
                  </svg>
                </div>

                {/* Right Stippled Cloud */}
                <div className="relative mb-1 select-none font-mono text-[10px] text-zinc-600 leading-tight">
                  <pre className="font-mono text-zinc-500">
{`  .::::.
 ::::::::
.:::::::::`}
                  </pre>
                </div>
              </div>

              {/* Ground line with the 8-bit space invader crab mascot */}
              <div className="w-full max-w-[520px] flex items-end justify-start px-6 pt-2 border-b border-dotted border-zinc-700 pb-1">
                {/* THE 8-BIT ORANGE CRAB MASCOT (EXACT MATCH TO media_1789324580265.png) */}
                <div className="relative pb-0.5 hover:scale-110 transition-transform cursor-pointer" title="Claude Crab Mascot">
                  <svg width="50" height="42" viewBox="0 0 48 40" fill="none">
                    {/* 2 Antennas on top */}
                    <rect x="10" y="4" width="6" height="6" fill="#D97757" />
                    <rect x="32" y="4" width="6" height="6" fill="#D97757" />

                    {/* Main rectangular head/body */}
                    <rect x="6" y="10" width="36" height="18" rx="1" fill="#D97757" />

                    {/* Left and right side tabs */}
                    <rect x="2" y="14" width="4" height="10" fill="#D97757" />
                    <rect x="42" y="14" width="4" height="10" fill="#D97757" />

                    {/* Eyes (blinking state) */}
                    {eyeBlink ? (
                      <>
                        <rect x="14" y="18" width="6" height="2" fill="#000000" />
                        <rect x="28" y="18" width="6" height="2" fill="#000000" />
                      </>
                    ) : (
                      <>
                        <rect x="14" y="15" width="6" height="6" fill="#000000" />
                        <rect x="28" y="15" width="6" height="6" fill="#000000" />
                      </>
                    )}

                    {/* Bottom 2 stubby legs */}
                    <rect x="10" y="28" width="6" height="8" fill="#D97757" />
                    <rect x="32" y="28" width="6" height="8" fill="#D97757" />
                  </svg>
                </div>
              </div>

              {/* Official subscription notice from screenshot */}
              <p className="text-zinc-500 text-[11px] font-mono text-center pt-3 px-4">
                Claude Code can be used with your Claude subscription or billed based on API usage through your Console account.
              </p>
            </div>

            {/* Command History Buffer */}
            {history.length > 0 && (
              <div className="space-y-3 my-3 pt-2 border-t border-zinc-800">
                {history.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-white flex items-center gap-1.5">
                      <span className="text-[#D97757] font-bold">&gt;</span>
                      <span className="font-semibold">{item.cmd}</span>
                    </p>
                    <div className="pl-4 text-zinc-300">{item.output}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Interactive Command Input Line */}
            <div className="flex items-center gap-2 pt-3 border-t border-zinc-800/80">
              <span className="text-[#D97757] font-bold">&gt;</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help', 'projects', 'certs', 'about', or 'antigravity'..."
                className="flex-1 bg-transparent text-white font-mono text-xs sm:text-[13px] outline-none placeholder:text-zinc-600 focus:ring-0"
              />
              <button
                onClick={() => executeCommand(inputVal)}
                className="px-2.5 py-1 rounded bg-[#D97757]/20 hover:bg-[#D97757]/30 text-[#D97757] border border-[#D97757]/40 text-xs font-mono transition-colors"
              >
                Run ↵
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* THEME 2: ANTIGRAVITY CLI (EXACT MATCH TO media_1789324607001.png) */}
        {/* ========================================================================= */}
        {activeTheme === 'antigravity' && (
          <div className="p-4 sm:p-7 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-[#E3E5E8] bg-[#1E1F22]">
            {/* Split layout exactly as in user's photo media_1789324607001.png */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Rainbow Pixel "A" Logo & Color Scheme Picker */}
              <div className="lg:col-span-5 space-y-4">
                {/* Stepped Pixel Rainbow "A" Logo */}
                <svg width="48" height="42" viewBox="0 0 48 42" fill="none">
                  {/* Top Apex: Red / Coral */}
                  <rect x="20" y="2" width="8" height="6" fill="#EA4335" />
                  {/* Tier 2: Orange */}
                  <rect x="15" y="8" width="6" height="6" fill="#FA7B17" />
                  <rect x="27" y="8" width="6" height="6" fill="#FA7B17" />
                  {/* Tier 3: Yellow */}
                  <rect x="10" y="14" width="6" height="6" fill="#FBBC04" />
                  <rect x="32" y="14" width="6" height="6" fill="#FBBC04" />
                  {/* Crossbar & Tier 4: Green */}
                  <rect x="6" y="20" width="36" height="6" fill="#34A853" />
                  {/* Tier 5: Blue legs */}
                  <rect x="4" y="26" width="6" height="10" fill="#4285F4" />
                  <rect x="38" y="26" width="6" height="10" fill="#4285F4" />
                </svg>

                <p className="text-white text-sm sm:text-base font-bold">
                  Welcome to <span className="text-[#60A5FA]">Antigravity CLI!</span>
                </p>

                <div className="space-y-1 text-xs">
                  <p className="text-zinc-300 font-semibold pb-1">Choose your color scheme:</p>
                  {colorSchemes.map((scheme) => (
                    <div
                      key={scheme}
                      onClick={() => setSelectedScheme(scheme)}
                      className={`cursor-pointer px-2 py-0.5 rounded transition-colors flex items-center gap-1.5 ${
                        selectedScheme === scheme
                          ? 'text-[#60A5FA] font-bold bg-blue-950/40'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <span className="w-3 text-right">{selectedScheme === scheme ? '>' : ''}</span>
                      <span>{scheme}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => executeCommand('projects')}
                  className="px-3 py-1 rounded bg-[#34A853]/20 border border-[#34A853]/50 text-[#34A853] font-bold text-xs hover:bg-[#34A853]/30 transition-colors"
                >
                  [Next]
                </button>
              </div>

              {/* Right Column: Code Diff Box matching media_1789324607001.png */}
              <div className="lg:col-span-7 space-y-3">
                <div className="rounded-xl bg-[#141518] border border-zinc-700/70 p-4 font-mono text-xs space-y-2">
                  <p className="text-zinc-200 font-semibold">
                    <span className="text-blue-400">&gt; you:</span> add a greeting function
                  </p>
                  <p className="text-emerald-400 font-semibold pt-1">
                    AGY: Here's the change:
                  </p>

                  {/* Code snippet with line numbers and diff highlights */}
                  <div className="mt-2 pt-2 border-t border-zinc-800 space-y-0.5 font-mono text-xs">
                    <p className="text-zinc-500">3   import "fmt"</p>
                    <p className="text-zinc-500">4</p>
                    <p className="bg-red-950/80 text-red-300 px-2 py-0.5 rounded-xs border-l-2 border-red-500">
                      5 - func main() {'{'}
                    </p>
                    <p className="bg-emerald-950/80 text-emerald-300 px-2 py-0.5 rounded-xs border-l-2 border-emerald-500">
                      5 + func greet(name string) {'{'}
                    </p>
                    <p className="bg-emerald-950/80 text-emerald-300 px-2 py-0.5 rounded-xs border-l-2 border-emerald-500">
                      6 +   fmt.Printf("Hello, %s!\n", name)
                    </p>
                    <p className="text-zinc-400">7   {'}'}</p>
                  </div>
                </div>

                {/* Subagents Dispatch Stream */}
                <div className="rounded-xl bg-[#141518] border border-zinc-700/70 p-3 text-xs space-y-2">
                  <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800 pb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 animate-pulse">{spinnerFrames[spinnerIndex]}</span>
                      <span>Gemini 3.5 Flash • Multi-Agent Workspace</span>
                    </div>
                    <span className="text-[10px] text-zinc-500">Thought for 2s (852 tokens)</span>
                  </div>

                  <div className="space-y-1 pt-1 text-[11px] text-zinc-300">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#FBBF24]" />
                      <span className="text-amber-300 font-semibold">DefineSubagent</span>
                      <span className="text-zinc-400">(ui_researcher: Responsive full-body 3D layout)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#FBBF24]" />
                      <span className="text-amber-300 font-semibold">DefineSubagent</span>
                      <span className="text-zinc-400">(data_researcher: Vector telemetry &amp; credentials)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Command History Buffer for Antigravity Mode */}
            {history.length > 0 && (
              <div className="space-y-3 my-4 pt-3 border-t border-zinc-700">
                {history.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-white flex items-center gap-1.5">
                      <span className="text-blue-400 font-bold">&gt;</span>
                      <span className="font-semibold">{item.cmd}</span>
                    </p>
                    <div className="pl-4 text-zinc-300">{item.output}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Command Input Prompt */}
            <div className="flex items-center gap-2 pt-4 border-t border-zinc-700/80 mt-4">
              <span className="text-blue-400 font-bold">&gt;</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'projects', 'certs', 'about', 'skills', or 'claude'..."
                className="flex-1 bg-transparent text-white font-mono text-xs sm:text-[13px] outline-none placeholder:text-zinc-500 focus:ring-0"
              />
              <button
                onClick={() => executeCommand(inputVal)}
                className="px-2.5 py-1 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/50 text-xs font-mono transition-colors"
              >
                Run ↵
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
