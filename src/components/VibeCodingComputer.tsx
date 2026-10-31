import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Play,
  Pause,
  RotateCw,
  Smartphone,
  Terminal,
  Send,
  Sparkles,
  RefreshCw,
  Wifi,
  BatteryCharging,
} from 'lucide-react';

interface VibeCodingComputerProps {
  className?: string;
}

interface CliEntry {
  cmd: string;
  output: React.ReactNode;
}

export const VibeCodingComputer: React.FC<VibeCodingComputerProps> = ({ className = '' }) => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [spinMode, setSpinMode] = useState<'orbit' | '360'>('orbit');
  const [phoneMode, setPhoneMode] = useState<'claude' | 'antigravity'>('claude');
  const [inputVal, setInputVal] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [eyeBlink, setEyeBlink] = useState(false);
  const [spinnerIndex, setSpinnerIndex] = useState(0);
  const [selectedScheme, setSelectedScheme] = useState('tokyo night');
  const [history, setHistory] = useState<CliEntry[]>([
    {
      cmd: 'status --verify',
      output: (
        <div className="text-[10px] space-y-0.5 text-zinc-300">
          <p className="text-emerald-400 font-bold">✓ Multi-Cloud &amp; Portfolio Engine Ready</p>
          <p className="text-zinc-400">Ketik <span className="text-amber-300 font-bold">help</span>, <span className="text-amber-300 font-bold">projects</span>, <span className="text-amber-300 font-bold">certs</span>, atau pesan apa saja!</p>
        </div>
      ),
    },
  ]);

  const spinnerFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

  // References for direct 60fps DOM mutation
  const stageRef = useRef<HTMLDivElement | null>(null);
  const phoneWrapRef = useRef<HTMLDivElement | null>(null);
  const scrollBodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const rotXRef = useRef(-4);
  const rotYRef = useRef(-14);
  const scaleRef = useRef(1);
  const isDraggingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);
  const vxRef = useRef(0);
  const vyRef = useRef(0);
  const autoRotateRef = useRef(true);
  const timeRef = useRef(0);

  // Blinking eye for Claude 8-bit mascot
  useEffect(() => {
    const interval = setInterval(() => {
      setEyeBlink(true);
      setTimeout(() => setEyeBlink(false), 220);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Spinner animation for Antigravity CLI
  useEffect(() => {
    const timer = setInterval(() => {
      setSpinnerIndex((prev) => (prev + 1) % spinnerFrames.length);
    }, 90);
    return () => clearInterval(timer);
  }, [spinnerFrames.length]);

  // Auto-scroll terminal output inside phone screen when new command is added
  useEffect(() => {
    if (scrollBodyRef.current) {
      scrollBodyRef.current.scrollTop = scrollBodyRef.current.scrollHeight;
    }
  }, [history, phoneMode]);

  const applyTransform = () => {
    if (phoneWrapRef.current) {
      phoneWrapRef.current.style.transform = `translate(-50%, -50%) rotateX(${rotXRef.current}deg) rotateY(${rotYRef.current}deg) scale(${scaleRef.current})`;
    }
  };

  // Pointer drag events for smooth 360 rotation (mouse & touch)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === 'INPUT' ||
      target.tagName === 'BUTTON' ||
      target.closest('button') ||
      target.closest('input') ||
      target.closest('.phone-interactive-area')
    ) {
      return;
    }

    isDraggingRef.current = true;
    autoRotateRef.current = false;
    setIsPlaying(false);
    lastXRef.current = e.clientX;
    lastYRef.current = e.clientY;
    vxRef.current = 0;
    vyRef.current = 0;
    if (stageRef.current) {
      stageRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    const dy = e.clientY - lastYRef.current;

    vyRef.current = dx * 0.45;
    vxRef.current = -dy * 0.28;

    rotYRef.current += vyRef.current;
    rotXRef.current = Math.max(-45, Math.min(45, rotXRef.current + vxRef.current));

    lastXRef.current = e.clientX;
    lastYRef.current = e.clientY;

    applyTransform();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    if (stageRef.current) {
      try {
        stageRef.current.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  // Smooth 60fps animation loop
  useEffect(() => {
    let animId: number;

    const animate = () => {
      if (!isDraggingRef.current) {
        if (isInputFocused) {
          // Smoothly orient phone toward user when typing
          rotXRef.current += (-2 - rotXRef.current) * 0.12;
          // Normalize rotY to nearest front angle
          const normalizedY = ((rotYRef.current + 180) % 360) - 180;
          rotYRef.current = normalizedY + (-6 - normalizedY) * 0.12;
          applyTransform();
        } else if (autoRotateRef.current) {
          timeRef.current += 0.016;
          if (spinMode === '360') {
            rotYRef.current += 0.35;
            rotXRef.current = -4 + Math.sin(timeRef.current * 1.2) * 3;
          } else {
            // Smooth 3D showcase orbit keeping the screen readable & interactive
            rotYRef.current = Math.sin(timeRef.current * 0.85) * 18 - 6;
            rotXRef.current = -4 + Math.cos(timeRef.current * 0.65) * 4;
          }
          applyTransform();
        } else {
          if (Math.abs(vyRef.current) > 0.02 || Math.abs(vxRef.current) > 0.02) {
            rotYRef.current += vyRef.current;
            rotXRef.current = Math.max(-45, Math.min(45, rotXRef.current + vxRef.current));
            vyRef.current *= 0.92;
            vxRef.current *= 0.92;
            applyTransform();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    applyTransform();

    return () => cancelAnimationFrame(animId);
  }, [isInputFocused, spinMode]);

  const executePhoneCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;
    const cmd = trimmed.toLowerCase();

    if (cmd === 'clear' || cmd === 'cls') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output: React.ReactNode = null;

    if (cmd === 'help' || cmd === '--help') {
      output = (
        <div className="space-y-0.5 text-[10px] text-zinc-300">
          <p className="text-emerald-400 font-bold">Perintah CLI Tersedia:</p>
          <p><span className="text-amber-300 font-bold">projects</span> : Daftar aplikasi live &amp; repo</p>
          <p><span className="text-amber-300 font-bold">certs</span> : Sertifikat Google, AWS, NVIDIA</p>
          <p><span className="text-amber-300 font-bold">about</span> : Profil Tubagus Fitran</p>
          <p><span className="text-amber-300 font-bold">skills</span> : Stack teknologi &amp; Cloud AI</p>
          <p><span className="text-amber-300 font-bold">claude / agy</span> : Ganti tema CLI</p>
          <p><span className="text-amber-300 font-bold">clear</span> : Bersihkan layar terminal</p>
        </div>
      );
    } else if (cmd === 'projects') {
      output = (
        <div className="space-y-0.5 text-[10px] text-zinc-300">
          <p className="text-emerald-400 font-bold">Proyek Unggulan Live:</p>
          <p>• <span className="text-sky-400 font-bold">PetroKnow</span> — Industrial AI Digital Twin</p>
          <p>• <span className="text-sky-400 font-bold">Ramadhan Ku</span> — Aplikasi Ibadah Harian</p>
          <p>• <span className="text-sky-400 font-bold">Finansial Ku</span> — Smart Finance Tracker</p>
        </div>
      );
    } else if (cmd === 'certs' || cmd === 'credentials') {
      output = (
        <div className="space-y-0.5 text-[10px] text-zinc-300">
          <p className="text-emerald-400 font-bold">24+ Sertifikasi &amp; Lencana Resmi:</p>
          <p>• Google Dev: Maps Innovators, Firebase Studio, GDGoC</p>
          <p>• AWS Skill Builder: Data Engineering, IAM, Bedrock</p>
          <p>• NVIDIA Developer: DLI, Cumulus NetQ, Air</p>
          <p>• 2× Medali Emas Olimpiade Sains Nasional</p>
        </div>
      );
    } else if (cmd === 'about' || cmd === 'whoami') {
      output = (
        <div className="space-y-0.5 text-[10px] text-zinc-300">
          <p className="text-amber-300 font-bold">Tubagus Fitran Badruttamam</p>
          <p>Software Engineer (Student) • S1 Informatika UMBanten &amp; Alumni SMAN 1 Cilegon.</p>
        </div>
      );
    } else if (cmd === 'skills') {
      output = (
        <div className="space-y-0.5 text-[10px] text-zinc-300">
          <p className="text-emerald-400 font-bold">Core Engineering Stack:</p>
          <p>TypeScript, React 19, Next.js, Tailwind, Python, Google Cloud, AWS, NVIDIA AI.</p>
        </div>
      );
    } else if (cmd === 'antigravity' || cmd === 'agy') {
      setPhoneMode('antigravity');
      output = (
        <p className="text-sky-400 text-[10px] font-bold">
          ✦ Beralih ke tampilan Antigravity CLI (Gemini 3.5 Flash).
        </p>
      );
    } else if (cmd === 'claude') {
      setPhoneMode('claude');
      output = (
        <p className="text-[#D97757] text-[10px] font-bold">
          ◈ Beralih ke tampilan Claude Code CLI v2.1.268.
        </p>
      );
    } else {
      output = (
        <div className="space-y-0.5 text-[10px] text-zinc-300">
          <p className={phoneMode === 'claude' ? 'text-[#D97757] font-bold' : 'text-sky-400 font-bold'}>
            {phoneMode === 'claude' ? '◈ Claude Code:' : '✦ AGY Agent:'}
          </p>
          <p>
            Menerima input <span className="text-white font-semibold">"{trimmed}"</span>. Ketik{' '}
            <span className="text-amber-300 font-bold">projects</span>,{' '}
            <span className="text-amber-300 font-bold">certs</span>, atau{' '}
            <span className="text-amber-300 font-bold">help</span> untuk eksplorasi portofolio!
          </p>
        </div>
      );
    }

    setHistory((prev) => [...prev.slice(-6), { cmd: trimmed, output }]);
    setInputVal('');
  };

  const handleResetRotation = () => {
    rotXRef.current = -4;
    rotYRef.current = -14;
    scaleRef.current = 1;
    vxRef.current = 0;
    vyRef.current = 0;
    autoRotateRef.current = true;
    setIsPlaying(true);
    applyTransform();
  };

  const handleFlipBack = () => {
    autoRotateRef.current = false;
    setIsPlaying(false);
    rotXRef.current = 0;
    rotYRef.current = Math.abs(rotYRef.current % 360) > 90 ? -14 : 180;
    applyTransform();
  };

  const handleToggleAutoRotate = () => {
    autoRotateRef.current = !autoRotateRef.current;
    setIsPlaying(autoRotateRef.current);
  };

  return (
    <div className={`w-full max-w-full overflow-visible flex flex-col items-center select-none ${className}`}>
      <style>{`
        .iphone15-stage {
          position: relative;
          width: 100%;
          max-width: 100%;
          height: 690px;
          perspective: 1400px;
          cursor: grab;
          touch-action: pan-y;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }
        .iphone15-stage:active {
          cursor: grabbing;
        }
        .iphone15-wrap {
          position: absolute;
          left: 50%;
          top: 48%;
          width: 326px;
          height: 636px;
          transform-style: preserve-3d;
          transform: translate(-50%, -50%) rotateX(-4deg) rotateY(-14deg);
          will-change: transform;
        }
        .iphone15-phone {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
        }
        /* Multi-layer Titanium Chassis Extrusion for seamless 3D depth */
        .iphone15-chassis-layer {
          position: absolute;
          inset: 0;
          border-radius: 52px;
          background: linear-gradient(135deg, #8a8780 0%, #4b4a46 35%, #2c2b29 65%, #75726b 100%);
          border: 1px solid rgba(255, 255, 255, 0.22);
          pointer-events: none;
        }
        .iphone15-face {
          position: absolute;
          inset: 0;
          border-radius: 52px;
          overflow: hidden;
          backface-visibility: hidden;
        }
        .iphone15-front {
          transform: translateZ(15px);
          background: linear-gradient(145deg, #27272a, #09090b 60%, #18181b);
          border: 2.5px solid #78756e;
          padding: 10px;
          box-shadow: inset 0 0 0 2px #000000, 0 25px 60px rgba(0, 0, 0, 0.35);
        }
        .iphone15-screen {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 42px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.06);
        }
        .iphone15-island {
          position: absolute;
          top: 9px;
          left: 50%;
          transform: translateX(-50%);
          width: 96px;
          height: 26px;
          border-radius: 20px;
          background: #000000;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
          z-index: 30;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
        }
        .iphone15-island-lens {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #3b82f6 0%, #0f172a 45%, #000 80%);
          border: 1px solid #1e293b;
        }
        .iphone15-back {
          transform: rotateY(180deg) translateZ(15px);
          background: linear-gradient(145deg, #575551 0%, #383734 48%, #5e5c57 100%);
          border: 2.5px solid #85827a;
          box-shadow: inset 0 0 24px rgba(0, 0, 0, 0.45);
        }
        .iphone15-apple {
          position: absolute;
          left: 50%;
          top: 48%;
          transform: translate(-50%, -50%);
          width: 56px;
          height: 66px;
          opacity: 0.7;
        }
        .iphone15-apple .body {
          position: absolute;
          left: 8px;
          top: 17px;
          width: 40px;
          height: 42px;
          background: #1c1b1a;
          border-radius: 42% 42% 46% 46% / 45% 45% 55% 55%;
        }
        .iphone15-apple .bite {
          position: absolute;
          right: 0;
          top: 27px;
          width: 19px;
          height: 19px;
          border-radius: 50%;
          background: #42413d;
        }
        .iphone15-apple .leaf {
          position: absolute;
          left: 30px;
          top: 3px;
          width: 17px;
          height: 11px;
          background: #1c1b1a;
          border-radius: 100% 0 100% 0;
          transform: rotate(-32deg);
        }
        .iphone15-camerabump {
          position: absolute;
          left: 20px;
          top: 20px;
          width: 132px;
          height: 132px;
          border-radius: 34px;
          background: linear-gradient(145deg, #63615c, #33322f);
          box-shadow:
            inset 0 1px 2px rgba(255, 255, 255, 0.3),
            0 8px 20px rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        .iphone15-lens {
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background:
            radial-gradient(circle at 34% 30%, #60a5fa 0%, #1d4ed8 8%, #090d16 22%, #020305 48%, #18181b 62%, #000 72%),
            #000;
          border: 4px solid #27272a;
          box-shadow: 0 2px 6px rgba(0,0,0,0.6), 0 0 0 2.5px #8a8780, inset 0 0 12px #000;
        }
        .iphone15-l1 { left: 12px; top: 12px; }
        .iphone15-l2 { right: 12px; top: 41px; }
        .iphone15-l3 { left: 12px; bottom: 12px; }
        .iphone15-flash {
          position: absolute;
          right: 23px;
          top: 14px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, #fef9c3 0%, #fde047 45%, #a16207 100%);
          box-shadow: 0 0 0 2px #52525b;
        }
        .iphone15-lidar {
          position: absolute;
          right: 24px;
          bottom: 18px;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #3f3f46, #09090b 75%);
          box-shadow: inset 0 0 0 2px #27272a;
        }
        .iphone15-side {
          position: absolute;
          background: linear-gradient(180deg, #87847d 0%, #464541 35%, #272624 50%, #5c5a55 80%, #87847d 100%);
          transform-style: preserve-3d;
        }
        .iphone15-side.left, .iphone15-side.right {
          top: 48px;
          width: 30px;
          height: 540px;
        }
        .iphone15-side.left {
          left: -15px;
          transform: rotateY(-90deg);
        }
        .iphone15-side.right {
          right: -15px;
          transform: rotateY(90deg);
        }
        .iphone15-side.top, .iphone15-side.bottom {
          left: 48px;
          width: 230px;
          height: 30px;
        }
        .iphone15-side.top {
          top: -15px;
          transform: rotateX(90deg);
        }
        .iphone15-side.bottom {
          bottom: -15px;
          transform: rotateX(-90deg);
        }
        .iphone15-btn {
          position: absolute;
          background: linear-gradient(180deg, #96938b, #52504c);
          border-radius: 4px;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
        }
        .iphone15-btn.power {
          right: -17px;
          top: 182px;
          width: 4px;
          height: 86px;
          transform: translateZ(4px);
        }
        .iphone15-btn.action {
          left: -17px;
          top: 118px;
          width: 4px;
          height: 34px;
          transform: translateZ(4px);
        }
        .iphone15-btn.vol1 {
          left: -17px;
          top: 172px;
          width: 4px;
          height: 60px;
          transform: translateZ(4px);
        }
        .iphone15-btn.vol2 {
          left: -17px;
          top: 246px;
          width: 4px;
          height: 60px;
          transform: translateZ(4px);
        }
        .iphone15-shadow {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 320px;
          height: 56px;
          transform: translate(-50%, 315px) rotateX(82deg);
          background: radial-gradient(ellipse, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.2) 45%, rgba(0, 0, 0, 0) 72%);
          filter: blur(8px);
          pointer-events: none;
        }
        @media (max-width: 640px) {
          .iphone15-stage {
            height: 590px;
          }
          .iphone15-wrap {
            width: 282px;
            height: 552px;
          }
          .iphone15-side.left, .iphone15-side.right {
            height: 456px;
            top: 48px;
          }
          .iphone15-side.top, .iphone15-side.bottom {
            left: 44px;
            width: 194px;
          }
          .iphone15-camerabump {
            transform: scale(0.84);
            transform-origin: top left;
          }
          .iphone15-shadow {
            width: 260px;
            transform: translate(-50%, 272px) rotateX(82deg);
          }
        }
      `}</style>

      {/* 3D Stage Viewport (Uncropped & Centered) */}
      <div
        ref={stageRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="iphone15-stage"
      >
        {/* Realistic Floating Ground Shadow */}
        <div className="iphone15-shadow" />

        {/* 3D Rotatable Phone Container */}
        <div ref={phoneWrapRef} className="iphone15-wrap">
          <div className="iphone15-phone">
            {/* Multi-layered 3D Titanium Slices to eliminate any corner gaps at any angle */}
            {[-12, -8, -4, 0, 4, 8, 12].map((z) => (
              <div
                key={z}
                className="iphone15-chassis-layer"
                style={{ transform: `translateZ(${z}px)` }}
              />
            ))}

            {/* ================================================================= */}
            {/* FRONT FACE: FULL-SCREEN CLAUDE CODE CLI & ANTIGRAVITY CLI         */}
            {/* ================================================================= */}
            <div className="iphone15-face iphone15-front">
              <div
                className={`iphone15-screen transition-colors duration-300 ${
                  phoneMode === 'claude' ? 'bg-[#090A0C]' : 'bg-[#18191C]'
                }`}
              >
                {/* Dynamic Island */}
                <div className="iphone15-island">
                  <span
                    className={`w-2 h-2 rounded-full animate-pulse inline-block ${
                      phoneMode === 'claude' ? 'bg-[#D97757]' : 'bg-sky-400'
                    }`}
                  />
                  <div className="iphone15-island-lens" />
                </div>

                {/* iOS Status Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-300 pt-2.5 px-5 z-20 shrink-0">
                  <span className="font-bold tracking-tight text-white">09:41</span>
                  <div className="flex items-center gap-1.5 text-[9px]">
                    <span className="text-emerald-400 font-bold">5G</span>
                    <Wifi className="w-3 h-3 text-white" />
                    <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>

                {/* CLI Window Top Bar & Mode Switcher inside Phone */}
                <div
                  className={`mt-2 mx-2 rounded-t-xl border-x border-t px-2.5 py-1.5 flex items-center justify-between text-[10px] font-mono shrink-0 z-20 phone-interactive-area ${
                    phoneMode === 'claude'
                      ? 'bg-[#141519] border-zinc-800 text-zinc-300'
                      : 'bg-[#24262B] border-zinc-700 text-zinc-200'
                  }`}
                >
                  {phoneMode === 'claude' ? (
                    <div className="flex items-center gap-1.5">
                      <span className="px-1 py-0.2 bg-zinc-800 rounded text-[9px] text-zinc-300 font-bold">
                        cs.
                      </span>
                      <span className="font-bold text-white">claude</span>
                      <span className="text-[9px] text-[#D97757]">v2.1.268</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#ED6A5E]" />
                      <span className="w-2 h-2 rounded-full bg-[#F5BF4F]" />
                      <span className="w-2 h-2 rounded-full bg-[#62C554]" />
                      <span className="font-bold text-sky-400 ml-1">agy v1.0</span>
                    </div>
                  )}

                  {/* One-Tap Theme Switcher inside Phone */}
                  <div className="flex items-center gap-1 bg-black/50 p-0.5 rounded-full border border-zinc-700/80">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPhoneMode('claude');
                      }}
                      className={`px-2 py-0.5 rounded-full text-[9px] font-bold transition-all cursor-pointer ${
                        phoneMode === 'claude'
                          ? 'bg-[#D97757] text-white'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Claude
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPhoneMode('antigravity');
                      }}
                      className={`px-2 py-0.5 rounded-full text-[9px] font-bold transition-all cursor-pointer ${
                        phoneMode === 'antigravity'
                          ? 'bg-blue-600 text-white'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      AGY
                    </button>
                  </div>
                </div>

                {/* ============================================================= */}
                {/* SCROLLABLE TERMINAL BODY INSIDE PHONE SCREEN                  */}
                {/* ============================================================= */}
                <div
                  ref={scrollBodyRef}
                  className={`mx-2 flex-1 overflow-y-auto border-x px-2.5 py-2 font-mono text-[10px] leading-relaxed space-y-2 phone-interactive-area ${
                    phoneMode === 'claude'
                      ? 'bg-[#050507] border-zinc-800 text-zinc-300'
                      : 'bg-[#141518] border-zinc-700 text-zinc-200'
                  }`}
                >
                  {phoneMode === 'claude' ? (
                    /* ---------------- CLAUDE CODE CLI VIEW ---------------- */
                    <>
                      <div className="space-y-0.5 text-[9.5px] text-zinc-400">
                        <p>C:\Users\Hype GLK&gt;cd C:\fitran-portofolio</p>
                        <p className="text-white">
                          C:\fitran-portofolio&gt;
                          <span className="text-[#D97757] font-bold">claude</span>
                        </p>
                        <p className="text-[#D97757] font-bold text-[11px]">
                          Welcome to Claude Code v2.1.268
                        </p>
                        <p className="text-zinc-600 tracking-tighter overflow-hidden whitespace-nowrap">
                          ....................................................
                        </p>
                      </div>

                      {/* Iconic 8-bit Orange Crab Mascot + Crescent Moon + Stippled Clouds */}
                      <div className="p-2.5 rounded-xl bg-black border border-zinc-800/90 relative overflow-hidden flex flex-col items-center">
                        <span className="absolute top-1.5 left-3 text-zinc-400 text-[9px] animate-pulse">
                          *
                        </span>
                        <span className="absolute top-2 right-4 text-zinc-400 text-[9px] animate-pulse">
                          *
                        </span>

                        <div className="w-full flex items-end justify-between px-2 pt-1">
                          <pre className="font-mono text-[7px] text-zinc-500 leading-none">
{`  .::.
 ::::::`}
                          </pre>

                          {/* Pixel Crescent Moon */}
                          <svg width="32" height="32" viewBox="0 0 56 56" fill="none">
                            <path
                              d="M 22 4 C 12 10 8 22 14 34 C 20 46 32 50 44 46 C 34 46 24 38 22 26 C 20 14 26 6 34 2 C 30 2 26 3 22 4 Z"
                              fill="#E4E4E7"
                              stroke="#A1A1AA"
                              strokeWidth="1.5"
                            />
                            <rect x="18" y="16" width="4" height="4" fill="#71717A" />
                            <rect x="23" y="22" width="5" height="5" fill="#A1A1AA" />
                          </svg>

                          <pre className="font-mono text-[7px] text-zinc-500 leading-none">
{` .:::.
:::::::`}
                          </pre>
                        </div>

                        {/* 8-Bit Orange Crab Mascot on Dotted Ground */}
                        <div className="w-full flex items-end justify-center pt-1 border-b border-dotted border-zinc-700 pb-1">
                          <svg width="36" height="30" viewBox="0 0 48 40" fill="none">
                            <rect x="10" y="4" width="6" height="6" fill="#D97757" />
                            <rect x="32" y="4" width="6" height="6" fill="#D97757" />
                            <rect x="6" y="10" width="36" height="18" rx="1" fill="#D97757" />
                            <rect x="2" y="14" width="4" height="10" fill="#D97757" />
                            <rect x="42" y="14" width="4" height="10" fill="#D97757" />
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
                            <rect x="10" y="28" width="6" height="8" fill="#D97757" />
                            <rect x="32" y="28" width="6" height="8" fill="#D97757" />
                          </svg>
                        </div>

                        <p className="text-[8.5px] text-zinc-500 text-center pt-1.5 leading-tight">
                          Claude Code CLI • Interactive Mobile Session
                        </p>
                      </div>
                    </>
                  ) : (
                    /* ---------------- ANTIGRAVITY CLI VIEW ---------------- */
                    <>
                      <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#1E1F22] border border-zinc-700/80">
                        {/* Stepped Pixel Rainbow "A" Logo */}
                        <svg width="34" height="30" viewBox="0 0 48 42" fill="none" className="shrink-0">
                          <rect x="20" y="2" width="8" height="6" fill="#EA4335" />
                          <rect x="15" y="8" width="6" height="6" fill="#FA7B17" />
                          <rect x="27" y="8" width="6" height="6" fill="#FA7B17" />
                          <rect x="10" y="14" width="6" height="6" fill="#FBBC04" />
                          <rect x="32" y="14" width="6" height="6" fill="#FBBC04" />
                          <rect x="6" y="20" width="36" height="6" fill="#34A853" />
                          <rect x="4" y="26" width="6" height="10" fill="#4285F4" />
                          <rect x="38" y="26" width="6" height="10" fill="#4285F4" />
                        </svg>
                        <div>
                          <p className="text-white font-bold text-[10.5px] leading-tight">
                            Welcome to <span className="text-sky-400">Antigravity CLI!</span>
                          </p>
                          <p className="text-[9px] text-emerald-400 flex items-center gap-1 mt-0.5">
                            <span>{spinnerFrames[spinnerIndex]}</span>
                            <span>Gemini 3.5 Flash • Active</span>
                          </p>
                        </div>
                      </div>

                      {/* Interactive Color Scheme Pills */}
                      <div className="flex flex-wrap gap-1 pt-0.5">
                        {['dark', 'tokyo night', 'solarized'].map((scheme) => (
                          <button
                            key={scheme}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedScheme(scheme);
                            }}
                            className={`px-1.5 py-0.5 rounded text-[8.5px] font-mono cursor-pointer border ${
                              selectedScheme === scheme
                                ? 'bg-blue-950/70 text-sky-300 border-sky-500/50 font-bold'
                                : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                            }`}
                          >
                            {selectedScheme === scheme ? `> ${scheme}` : scheme}
                          </button>
                        ))}
                      </div>

                      {/* Live Code Diff Box */}
                      <div className="rounded-lg bg-[#0D0E11] border border-zinc-800 p-2 text-[9px] space-y-0.5">
                        <p className="text-sky-400 font-bold">&gt; you: optimize 3D phone CLI</p>
                        <p className="text-emerald-400 font-semibold">AGY: Applied live patch:</p>
                        <p className="bg-red-950/70 text-red-300 px-1.5 py-0.2 rounded-xs border-l-2 border-red-500">
                          - staticPhoneScreen()
                        </p>
                        <p className="bg-emerald-950/70 text-emerald-300 px-1.5 py-0.2 rounded-xs border-l-2 border-emerald-500">
                          + interactiveMobileCLI(claude, agy)
                        </p>
                      </div>
                    </>
                  )}

                  {/* Interactive Command History Log */}
                  <div className="space-y-2 pt-1 border-t border-zinc-800/90">
                    {history.map((item, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <p className="text-white flex items-center gap-1 text-[10px]">
                          <span
                            className={
                              phoneMode === 'claude'
                                ? 'text-[#D97757] font-bold'
                                : 'text-sky-400 font-bold'
                            }
                          >
                            &gt;
                          </span>
                          <span className="font-bold">{item.cmd}</span>
                        </p>
                        <div className="pl-2.5">{item.output}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ============================================================= */}
                {/* QUICK COMMAND CHIPS & LIVE TYPING INPUT BAR INSIDE PHONE      */}
                {/* ============================================================= */}
                <div
                  className={`mx-2 mb-1 rounded-b-2xl border-x border-b p-2 space-y-1.5 shrink-0 z-20 phone-interactive-area ${
                    phoneMode === 'claude'
                      ? 'bg-[#121317] border-zinc-800'
                      : 'bg-[#202226] border-zinc-700'
                  }`}
                >
                  {/* One-Tap Quick Command Chips */}
                  <div className="flex items-center gap-1 overflow-x-auto pb-0.5 no-scrollbar">
                    {['help', 'projects', 'certs', 'skills', 'about', 'clear'].map((cmdChip) => (
                      <button
                        key={cmdChip}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          executePhoneCommand(cmdChip);
                        }}
                        className="px-1.5 py-0.5 rounded bg-zinc-800/90 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-mono text-[8.5px] font-bold shrink-0 cursor-pointer transition-colors"
                      >
                        {cmdChip}
                      </button>
                    ))}
                  </div>

                  {/* Interactive Text Input Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      executePhoneCommand(inputVal);
                    }}
                    className="flex items-center gap-1.5 bg-black/80 border border-zinc-700 focus-within:border-amber-400 rounded-xl px-2.5 py-1.5"
                  >
                    <span
                      className={`font-mono font-bold text-xs ${
                        phoneMode === 'claude' ? 'text-[#D97757]' : 'text-sky-400'
                      }`}
                    >
                      &gt;
                    </span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputVal}
                      onFocus={() => setIsInputFocused(true)}
                      onBlur={() => setIsInputFocused(false)}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder={
                        language === 'id'
                          ? 'Ketik perintah (help, certs)...'
                          : 'Type command (help, certs)...'
                      }
                      className="flex-1 min-w-0 bg-transparent text-white font-mono text-[10.5px] outline-none placeholder:text-zinc-500"
                    />
                    <button
                      type="submit"
                      className={`p-1 rounded-lg text-white transition-colors cursor-pointer shrink-0 ${
                        phoneMode === 'claude'
                          ? 'bg-[#D97757] hover:bg-[#e08668]'
                          : 'bg-blue-600 hover:bg-blue-500'
                      }`}
                      title="Jalankan perintah"
                    >
                      <Send className="w-3 h-3" />
                    </button>
                  </form>
                </div>

                {/* iOS Home Indicator Bar */}
                <div className="pb-1.5 pt-0.5 flex flex-col items-center shrink-0">
                  <span className="w-28 h-1 bg-white/60 rounded-full" />
                </div>
              </div>
            </div>

            {/* ================================================================= */}
            {/* BACK FACE: NATURAL TITANIUM WITH TRIPLE PRO CAMERAS & APPLE LOGO  */}
            {/* ================================================================= */}
            <div className="iphone15-face iphone15-back">
              <div className="iphone15-camerabump">
                <div className="iphone15-lens iphone15-l1" title="Main 48MP Fusion Camera" />
                <div className="iphone15-lens iphone15-l2" title="Ultra Wide 48MP Camera" />
                <div className="iphone15-lens iphone15-l3" title="Telephoto 5x Optical Zoom" />
                <div className="iphone15-flash" title="Adaptive True Tone Flash" />
                <div className="iphone15-lidar" title="LiDAR 3D Scanner" />
              </div>

              <div className="iphone15-apple">
                <div className="leaf" />
                <div className="body" />
                <div className="bite" />
              </div>

              <div className="absolute bottom-7 inset-x-0 text-center font-mono text-[9px] text-zinc-300/80 tracking-widest uppercase font-semibold">
                iPhone Pro • Titanium CLI Edition
              </div>
            </div>

            {/* SIDES: Brushed Titanium Edge Bands */}
            <div className="iphone15-side left" />
            <div className="iphone15-side right" />
            <div className="iphone15-side top" />
            <div className="iphone15-side bottom" />

            {/* TACTILE TITANIUM BUTTONS */}
            <div className="iphone15-btn power" title="Power / Side Button" />
            <div className="iphone15-btn action" title="Action Button" />
            <div className="iphone15-btn vol1" title="Volume Up" />
            <div className="iphone15-btn vol2" title="Volume Down" />
          </div>
        </div>
      </div>

      {/* Control Bar & 360 Rotation Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mt-1 px-4 max-w-full">
        <button
          type="button"
          onClick={handleToggleAutoRotate}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shadow-2xs"
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 text-amber-500" />
          ) : (
            <Play className="w-3.5 h-3.5 text-emerald-500" />
          )}
          <span>
            {isPlaying
              ? language === 'id'
                ? 'Jeda Animasi'
                : 'Pause Motion'
              : language === 'id'
                ? 'Lanjutkan Animasi'
                : 'Resume Motion'}
          </span>
        </button>

        <button
          type="button"
          onClick={() => {
            setSpinMode((prev) => (prev === 'orbit' ? '360' : 'orbit'));
            autoRotateRef.current = true;
            setIsPlaying(true);
          }}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shadow-2xs"
        >
          <RefreshCw className="w-3.5 h-3.5 text-purple-500" />
          <span>
            {spinMode === 'orbit'
              ? language === 'id'
                ? 'Mode: Orbit Interaktif'
                : 'Mode: Interactive Orbit'
              : language === 'id'
                ? 'Mode: Putar 360° Penuh'
                : 'Mode: Full 360° Spin'}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setPhoneMode(phoneMode === 'claude' ? 'antigravity' : 'claude')}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shadow-2xs"
        >
          <Terminal className="w-3.5 h-3.5 text-[#D97757]" />
          <span>
            {phoneMode === 'claude' ? 'Tema: Claude Code CLI' : 'Tema: Antigravity CLI'}
          </span>
        </button>

        <button
          type="button"
          onClick={() => {
            inputRef.current?.focus();
          }}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-mono text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
        >
          <Terminal className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
          <span>{language === 'id' ? 'Ketik di CLI HP' : 'Type in Phone CLI'}</span>
        </button>

        <button
          type="button"
          onClick={handleFlipBack}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-mono text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shadow-2xs"
        >
          <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
          <span>{language === 'id' ? 'Lihat Kamera Belakang' : 'Flip Back Camera'}</span>
        </button>

        <button
          type="button"
          onClick={handleResetRotation}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-mono text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shadow-2xs"
          title="Reset 3D view"
        >
          <RotateCw className="w-3.5 h-3.5 text-blue-500" />
          <span>Reset Posisi</span>
        </button>
      </div>
    </div>
  );
};
