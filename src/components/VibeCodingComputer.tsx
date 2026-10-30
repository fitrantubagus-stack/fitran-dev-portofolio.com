import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Play, Pause, RotateCw, Smartphone, Terminal } from 'lucide-react';

interface VibeCodingComputerProps {
  className?: string;
}

export const VibeCodingComputer: React.FC<VibeCodingComputerProps> = ({ className = '' }) => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [phoneMode, setPhoneMode] = useState<'claude' | 'antigravity'>('claude');
  const [phoneStep, setPhoneStep] = useState(0);

  // References for direct 60fps DOM mutation (zero React re-render overhead, 100% crash-proof)
  const stageRef = useRef<HTMLDivElement | null>(null);
  const phoneWrapRef = useRef<HTMLDivElement | null>(null);

  const rotXRef = useRef(-6);
  const rotYRef = useRef(-25);
  const scaleRef = useRef(1);
  const isDraggingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);
  const vxRef = useRef(0);
  const vyRef = useRef(0);
  const autoRotateRef = useRef(true);

  // iPhone 15 Pro live typing demo sequence
  const phoneClaudeSteps = [
    { prompt: '$ claude', title: 'Claude Code v2.1.268', desc: 'Welcome to Claude Code CLI environment' },
    { prompt: '> fix mobile viewport bounds', title: '0 Viewport Overflow', desc: 'Airtight iPhone 15 Pro 360° geometry centered' },
    { prompt: '✓ build verified', title: 'Vercel Edge Ready', desc: 'Clean, unified single localized headers' },
  ];

  const phoneAntigravitySteps = [
    { prompt: '$ agy run --agent mobile', title: 'Antigravity CLI', desc: 'Gemini 3.5 Flash • Workspace active' },
    { prompt: '> audit screen width', title: '100% Viewport Contained', desc: 'Locked html/body max-width: 100%' },
    { prompt: '✓ diff deployed', title: 'iPhone 15 Pro Titanium', desc: 'Smooth 360° rotation with direct GPU transform' },
  ];

  const currentPhoneData = phoneMode === 'claude' ? phoneClaudeSteps[phoneStep] : phoneAntigravitySteps[phoneStep];

  // Cycling phone demo typing text every 3.2s
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPhoneStep((prev) => (prev + 1) % 3);
      if (Math.random() > 0.65) {
        setPhoneMode((prev) => (prev === 'claude' ? 'antigravity' : 'claude'));
      }
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Apply CSS 3D transform directly to the DOM element
  const applyTransform = () => {
    if (phoneWrapRef.current) {
      phoneWrapRef.current.style.transform = `translate(-50%, -50%) rotateX(${rotXRef.current}deg) rotateY(${rotYRef.current}deg) scale(${scaleRef.current})`;
    }
  };

  // Pointer drag events for smooth 360 rotation (mouse & touch)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    autoRotateRef.current = false;
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
    rotXRef.current = Math.max(-50, Math.min(50, rotXRef.current + vxRef.current));

    lastXRef.current = e.clientX;
    lastYRef.current = e.clientY;

    applyTransform();
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    if (stageRef.current) {
      try {
        stageRef.current.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    scaleRef.current = Math.min(1.25, Math.max(0.75, scaleRef.current + e.deltaY * -0.0008));
    applyTransform();
  };

  // Animation loop with requestAnimationFrame directly updating style
  useEffect(() => {
    let animId: number;

    const animate = () => {
      if (!isDraggingRef.current) {
        if (autoRotateRef.current) {
          rotYRef.current += 0.2;
          applyTransform();
        } else {
          if (Math.abs(vyRef.current) > 0.02 || Math.abs(vxRef.current) > 0.02) {
            rotYRef.current += vyRef.current;
            rotXRef.current = Math.max(-50, Math.min(50, rotXRef.current + vxRef.current));
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
  }, []);

  const handleResetRotation = () => {
    rotXRef.current = -6;
    rotYRef.current = -25;
    scaleRef.current = 1;
    vxRef.current = 0;
    vyRef.current = 0;
    autoRotateRef.current = true;
    applyTransform();
  };

  const handleToggleAutoRotate = () => {
    autoRotateRef.current = !autoRotateRef.current;
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`w-full max-w-full overflow-hidden flex flex-col items-center select-none ${className}`}>
      {/* Scoped CSS based precisely on user's provided code */}
      <style>{`
        .iphone15-stage {
          position: relative;
          width: 100%;
          max-width: 100%;
          height: 520px;
          perspective: 1200px;
          cursor: grab;
          touch-action: none;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .iphone15-stage:active {
          cursor: grabbing;
        }
        .iphone15-wrap {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 310px;
          height: 620px;
          transform-style: preserve-3d;
          transform: translate(-50%, -50%) rotateX(-6deg) rotateY(-25deg);
          will-change: transform;
        }
        .iphone15-phone {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
        }
        .iphone15-face {
          position: absolute;
          inset: 0;
          border-radius: 48px;
          overflow: hidden;
          backface-visibility: hidden;
          box-shadow: 0 40px 90px rgba(0, 0, 0, 0.45);
        }
        .iphone15-front {
          transform: translateZ(14px);
          background: #050505;
          border: 1px solid #6f6f70;
          padding: 9px;
        }
        .iphone15-screen {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 40px;
          overflow: hidden;
          background:
            radial-gradient(circle at 62% 18%, rgba(255, 255, 255, 0.20), transparent 20%),
            radial-gradient(circle at 40% 30%, #5c646b 0%, #25292d 25%, transparent 48%),
            radial-gradient(circle at 66% 69%, #2e3032 0%, #151719 31%, transparent 56%),
            linear-gradient(145deg, #101214, #25282b 44%, #0c0d0f 72%);
        }
        .iphone15-screen:before {
          content: "";
          position: absolute;
          width: 210%;
          height: 46%;
          left: -35%;
          top: 23%;
          border-radius: 50%;
          border: 50px solid rgba(225, 225, 225, 0.13);
          transform: rotate(-32deg);
          filter: blur(2px);
          pointer-events: none;
        }
        .iphone15-island {
          position: absolute;
          top: 11px;
          left: 50%;
          transform: translateX(-50%);
          width: 92px;
          height: 28px;
          border-radius: 18px;
          background: #020202;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
        }
        .iphone15-island:after {
          content: "";
          position: absolute;
          right: 9px;
          top: 9px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: radial-gradient(circle, #214a7a 0%, #07111c 40%, #000 72%);
        }
        .iphone15-back {
          transform: rotateY(180deg) translateZ(14px);
          background: linear-gradient(145deg, #4f4e4b, #2d2d2b 50%, #55534f);
          border: 1px solid #6d6b66;
        }
        .iphone15-apple {
          position: absolute;
          left: 50%;
          top: 47%;
          transform: translate(-50%, -50%);
          width: 56px;
          height: 66px;
          opacity: 0.55;
        }
        .iphone15-apple .body {
          position: absolute;
          left: 8px;
          top: 17px;
          width: 40px;
          height: 42px;
          background: #161616;
          border-radius: 42% 42% 46% 46% / 45% 45% 55% 55%;
        }
        .iphone15-apple .bite {
          position: absolute;
          right: 0;
          top: 27px;
          width: 19px;
          height: 19px;
          border-radius: 50%;
          background: #3b3a37;
        }
        .iphone15-apple .leaf {
          position: absolute;
          left: 30px;
          top: 3px;
          width: 17px;
          height: 11px;
          background: #161616;
          border-radius: 100% 0 100% 0;
          transform: rotate(-32deg);
        }
        .iphone15-camerabump {
          position: absolute;
          left: 18px;
          top: 18px;
          width: 126px;
          height: 126px;
          border-radius: 31px;
          background: linear-gradient(145deg, #595854, #363633);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16), 0 2px 6px rgba(0, 0, 0, 0.22);
        }
        .iphone15-lens {
          position: absolute;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background:
            radial-gradient(circle at 38% 34%, #2f4764 0 8%, #0d1117 12%, #020304 36%, #111 51%, #000 58%),
            #000;
          border: 4px solid #242424;
          box-shadow: 0 0 0 2px #77746e, inset 0 0 14px #000;
        }
        .iphone15-l1 { left: 12px; top: 12px; }
        .iphone15-l2 { right: 12px; top: 38px; }
        .iphone15-l3 { left: 12px; bottom: 12px; }
        .iphone15-flash {
          position: absolute;
          right: 22px;
          top: 14px;
          width: 19px;
          height: 19px;
          border-radius: 50%;
          background: radial-gradient(circle, #fff7c8 0%, #ddd4a7 52%, #9b9579 100%);
          box-shadow: 0 0 0 2px #555;
        }
        .iphone15-lidar {
          position: absolute;
          right: 23px;
          bottom: 18px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #111;
          box-shadow: inset 0 0 0 2px #2b2b2a;
        }
        .iphone15-side {
          position: absolute;
          background: linear-gradient(#72706b, #44433f 55%, #6b6964);
          transform-style: preserve-3d;
        }
        .iphone15-side.left, .iphone15-side.right {
          top: 46px;
          width: 28px;
          height: 528px;
        }
        .iphone15-side.left {
          left: -14px;
          transform: rotateY(-90deg);
        }
        .iphone15-side.right {
          right: -14px;
          transform: rotateY(90deg);
        }
        .iphone15-side.top, .iphone15-side.bottom {
          left: 46px;
          width: 218px;
          height: 28px;
        }
        .iphone15-side.top {
          top: -14px;
          transform: rotateX(90deg);
        }
        .iphone15-side.bottom {
          bottom: -14px;
          transform: rotateX(-90deg);
        }
        .iphone15-side:after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.16), transparent 30%, rgba(0, 0, 0, 0.18));
        }
        .iphone15-btn {
          position: absolute;
          background: #7b7973;
          border-radius: 4px;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
        }
        .iphone15-btn.power {
          right: -16px;
          top: 182px;
          width: 4px;
          height: 88px;
          transform: translateZ(4px);
        }
        .iphone15-btn.action {
          left: -16px;
          top: 121px;
          width: 4px;
          height: 34px;
          transform: translateZ(4px);
        }
        .iphone15-btn.vol1 {
          left: -16px;
          top: 176px;
          width: 4px;
          height: 62px;
          transform: translateZ(4px);
        }
        .iphone15-btn.vol2 {
          left: -16px;
          top: 251px;
          width: 4px;
          height: 62px;
          transform: translateZ(4px);
        }
        .iphone15-shadow {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 340px;
          height: 70px;
          transform: translate(-50%, 310px) rotateX(82deg);
          background: radial-gradient(ellipse, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0) 68%);
          filter: blur(10px);
          pointer-events: none;
        }
        /* Mobile Scaling to Guarantee 100% Zero Overflow */
        @media (max-width: 600px) {
          .iphone15-stage {
            height: 440px;
          }
          .iphone15-wrap {
            width: 245px;
            height: 490px;
          }
          .iphone15-side.left, .iphone15-side.right {
            height: 398px;
            top: 46px;
          }
          .iphone15-side.top, .iphone15-side.bottom {
            left: 42px;
            width: 161px;
          }
          .iphone15-camerabump {
            transform: scale(0.8);
            transform-origin: top left;
          }
          .iphone15-island {
            width: 75px;
            height: 23px;
          }
          .iphone15-shadow {
            width: 270px;
            transform: translate(-50%, 250px) rotateX(82deg);
          }
        }
      `}</style>

      {/* 3D Stage Viewport (100% Centered & Responsive) */}
      <div
        ref={stageRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        className="iphone15-stage"
      >
        {/* Drop Shadow Underneath */}
        <div className="iphone15-shadow" />

        {/* 3D Rotatable Phone Container */}
        <div ref={phoneWrapRef} className="iphone15-wrap">
          <div className="iphone15-phone">
            {/* FRONT FACE: OLED Super Retina XDR Screen with Dynamic Island & Live CLI Stream */}
            <div className="iphone15-face iphone15-front">
              <div className="iphone15-screen flex flex-col justify-between p-3">
                {/* Dynamic Island Pill */}
                <div className="iphone15-island">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse inline-block" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-8 px-2 z-10">
                  <span className="font-bold text-white">02:45</span>
                  <div className="flex items-center gap-1.5 text-[9px]">
                    <span className="text-emerald-400 font-semibold">5G</span>
                    <span className="w-4 h-2 border border-zinc-400 rounded-xs flex items-center p-0.5">
                      <span className="w-full h-full bg-emerald-400 rounded-2xs" />
                    </span>
                  </div>
                </div>

                {/* Live CLI Video Demo Stream on Phone Screen */}
                <div className="my-auto mx-1 rounded-2xl bg-black/85 backdrop-blur-md border border-zinc-800/80 p-3 flex flex-col justify-between font-mono text-xs z-10 shadow-2xl">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between pb-1 border-b border-zinc-800 text-[9px] text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Terminal className="w-3 h-3 text-orange-400" />
                        <span className="font-bold text-white">
                          {phoneMode === 'claude' ? 'Claude Code CLI' : 'Antigravity CLI'}
                        </span>
                      </span>
                      <span className="px-1.5 py-0.2 rounded-full bg-emerald-950 text-emerald-300 font-bold border border-emerald-800 text-[8px]">
                        LIVE DEMO
                      </span>
                    </div>

                    <p className="text-white font-bold text-[12px] pt-1">{currentPhoneData.prompt}</p>
                    <p className="text-[#D97757] font-semibold text-[11px]">{currentPhoneData.title}</p>
                    <p className="text-zinc-400 leading-relaxed text-[10px]">{currentPhoneData.desc}</p>
                  </div>

                  {/* Mode Indicator Switcher */}
                  <div className="pt-3 mt-2 border-t border-zinc-800/80 flex items-center justify-between text-[9px]">
                    <span className="text-zinc-500">Tap to toggle CLI</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPhoneMode((prev) => (prev === 'claude' ? 'antigravity' : 'claude'));
                      }}
                      className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-200 border border-zinc-700 hover:bg-zinc-700 transition-colors font-bold cursor-pointer"
                    >
                      {phoneMode === 'claude' ? 'Switch to Antigravity' : 'Switch to Claude'}
                    </button>
                  </div>
                </div>

                {/* Home Indicator Bar */}
                <div className="pt-2 flex flex-col items-center z-10 pb-1">
                  <span className="w-28 h-1 bg-white/50 rounded-full" />
                </div>
              </div>
            </div>

            {/* BACK FACE: Natural Titanium Plate with Camera Bump, Lenses, Flash, LiDAR & Apple Logo */}
            <div className="iphone15-face iphone15-back">
              {/* Camera Plateau */}
              <div className="iphone15-camerabump">
                <div className="iphone15-lens iphone15-l1" title="Main 48MP" />
                <div className="iphone15-lens iphone15-l2" title="Ultra Wide 12MP" />
                <div className="iphone15-lens iphone15-l3" title="Telephoto 5x" />
                <div className="iphone15-flash" title="Adaptive True Tone Flash" />
                <div className="iphone15-lidar" title="LiDAR Scanner" />
              </div>

              {/* Iconic Apple Logo */}
              <div className="iphone15-apple">
                <div className="leaf" />
                <div className="body" />
                <div className="bite" />
              </div>

              {/* Bottom Subtle Typography */}
              <div className="absolute bottom-6 inset-x-0 text-center font-mono text-[8px] text-zinc-400/80 tracking-widest uppercase">
                iPhone 15 Pro • Titanium
              </div>
            </div>

            {/* SIDES: Titanium Edge Bands */}
            <div className="iphone15-side left" />
            <div className="iphone15-side right" />
            <div className="iphone15-side top" />
            <div className="iphone15-side bottom" />

            {/* BUTTONS: Titanium Tactile Buttons */}
            <div className="iphone15-btn power" title="Side Button" />
            <div className="iphone15-btn action" title="Action Button" />
            <div className="iphone15-btn vol1" title="Volume Up" />
            <div className="iphone15-btn vol2" title="Volume Down" />
          </div>
        </div>
      </div>

      {/* Control Bar & 360 Rotation Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mt-2 px-4 max-w-full">
        <button
          onClick={handleToggleAutoRotate}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-mono text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shadow-2xs"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-500" /> : <Play className="w-3.5 h-3.5 text-emerald-500" />}
          <span>{isPlaying ? (language === 'id' ? 'Jeda' : 'Pause') : (language === 'id' ? 'Putar' : 'Resume')}</span>
        </button>

        <button
          onClick={() => setPhoneMode(phoneMode === 'claude' ? 'antigravity' : 'claude')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-mono text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shadow-2xs"
        >
          <Smartphone className="w-3.5 h-3.5 text-sky-500" />
          <span>{phoneMode === 'claude' ? 'Claude Code' : 'Antigravity'}</span>
        </button>

        <button
          onClick={handleResetRotation}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-mono text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shadow-2xs"
          title="Reset 3D view"
        >
          <RotateCw className="w-3.5 h-3.5 text-blue-500" />
          <span>Reset 360°</span>
        </button>

        <span className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-zinc-500 dark:text-zinc-400 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60">
          <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
          <span>{language === 'id' ? 'Sentuh & geser untuk putar iPhone 360°' : 'Drag or swipe to rotate iPhone 360°'}</span>
        </span>
      </div>
    </div>
  );
};
