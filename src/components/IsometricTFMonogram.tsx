import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Block3D {
  x: number; // center x
  y: number; // center y
  z: number; // center z
  w: number; // width in x
  d: number; // depth in y
  h: number; // height in z
  label?: string;
}

export const IsometricTFMonogram: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { t, language } = useLanguage();

  // Mouse tilt target and current lerp values
  const mouseRef = useRef({ targetX: 0, targetY: 0, currentX: 0, currentY: 0 });
  const spinRef = useRef({ angle: 0, targetSpin: 0, isSpinning: false, velocity: 0 });
  const [clickCount, setClickCount] = useState(0);
  const [accentMode, setAccentMode] = useState<'blueprint' | 'emerald'>('blueprint');

  // Blocks defining the initials "T" and "F" in 3D isometric space
  // Coordinate space: X goes right, Y goes depth, Z goes vertical up.
  const BLOCKS: Block3D[] = [
    // --- LETTER 'T' ---
    // T Top horizontal bar
    { x: -2.3, y: 0, z: 2.8, w: 2.4, d: 1.1, h: 0.7, label: 'T-bar' },
    // T Vertical stem
    { x: -2.3, y: 0, z: 1.1, w: 0.9, d: 1.1, h: 2.2, label: 'T-stem' },

    // --- LETTER 'F' ---
    // F Vertical stem
    { x: 1.1, y: 0, z: 1.6, w: 0.9, d: 1.1, h: 3.2, label: 'F-stem' },
    // F Top horizontal bar
    { x: 2.35, y: 0, z: 2.85, w: 1.6, d: 1.1, h: 0.7, label: 'F-top' },
    // F Middle horizontal bar
    { x: 2.05, y: 0, z: 1.55, w: 1.2, d: 1.1, h: 0.65, label: 'F-mid' },

    // Floating architectural accent cube (ala chanhdai geometric detail)
    { x: -0.3, y: 1.4, z: 0.4, w: 0.8, d: 0.8, h: 0.8, label: 'cube-acc' },
  ];

  // Handle cursor tracking across the window or container
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from center of monogram normalized to [-1, 1]
      const dx = (e.clientX - centerX) / (window.innerWidth / 2);
      const dy = (e.clientY - centerY) / (window.innerHeight / 2);

      mouseRef.current.targetX = Math.max(-1.2, Math.min(1.2, dx));
      mouseRef.current.targetY = Math.max(-1.2, Math.min(1.2, dy));
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  // Handle click on monogram to trigger a 360-degree rotation spin
  const handleClick = () => {
    spinRef.current.targetSpin += Math.PI * 2;
    spinRef.current.isSpinning = true;
    spinRef.current.velocity = 0.22;
    setClickCount((prev) => prev + 1);
    if ((clickCount + 1) % 3 === 0) {
      setAccentMode((prev) => (prev === 'blueprint' ? 'emerald' : 'blueprint'));
    }
  };

  // Main Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      // High-DPI canvas setup
      const dpr = Math.min(window.devicePixelRatio || 2, 2.5);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Check dark mode
      const isDark = document.documentElement.classList.contains('dark');

      // Colors matching architectural blueprint with high-contrast dark mode lighting
      const strokeColor = isDark ? 'rgba(244, 244, 245, 0.95)' : 'rgba(82, 82, 91, 0.85)';
      const guideColor = isDark ? 'rgba(113, 113, 122, 0.45)' : 'rgba(212, 212, 216, 0.65)';
      const hatchColor = accentMode === 'emerald'
        ? (isDark ? 'rgba(52, 211, 153, 0.95)' : 'rgba(16, 185, 129, 0.85)')
        : (isDark ? 'rgba(56, 189, 248, 0.95)' : 'rgba(39, 39, 42, 0.8)');
      const topFill = isDark ? 'rgba(63, 63, 70, 0.98)' : 'rgba(255, 255, 255, 0.95)'; // Luminous metallic zinc-700
      const leftFill = isDark ? 'rgba(39, 39, 42, 0.95)' : 'rgba(244, 244, 245, 0.85)'; // Distinct architectural zinc-800
      const rightFill = isDark ? 'rgba(24, 24, 27, 0.92)' : 'rgba(228, 228, 231, 0.85)'; // Shaded zinc-900

      // Interpolate mouse movements smoothly (lerp)
      mouseRef.current.currentX += (mouseRef.current.targetX - mouseRef.current.currentX) * 0.08;
      mouseRef.current.currentY += (mouseRef.current.targetY - mouseRef.current.currentY) * 0.08;

      // Handle spin animation
      if (spinRef.current.isSpinning) {
        spinRef.current.angle += spinRef.current.velocity;
        spinRef.current.velocity *= 0.94;
        if (spinRef.current.velocity < 0.005) {
          spinRef.current.isSpinning = false;
          spinRef.current.angle = spinRef.current.targetSpin;
        }
      }

      // Base isometric projection parameters
      const originX = width / 2;
      const originY = height / 2 + 15;
      const unitScale = Math.min(width, height) / 8.6;

      // Rotation around Z axis (yaw) and X/Y tilt (pitch/roll) from cursor
      const yaw = (Math.PI / 4) + (mouseRef.current.currentX * 0.32) + spinRef.current.angle;
      const pitch = (Math.PI / 6) + (mouseRef.current.currentY * 0.22);

      const cosYaw = Math.cos(yaw);
      const sinYaw = Math.sin(yaw);
      const cosPitch = Math.cos(pitch);
      const sinPitch = Math.sin(pitch);

      // Project 3D point (x, y, z) to 2D screen coordinates
      const project = (x: number, y: number, z: number) => {
        // Rotate around Z axis (yaw)
        const rx = x * cosYaw - y * sinYaw;
        const ry = x * sinYaw + y * cosYaw;

        // Apply pitch (tilt)
        const px = rx * unitScale;
        const py = (-ry * sinPitch - z * cosPitch) * unitScale;
        const depth = ry * cosPitch - z * sinPitch;

        return {
          x: originX + px,
          y: originY + py,
          depth,
        };
      };

      // 1. Draw subtle background blueprint isometric grid lines
      ctx.strokeStyle = guideColor;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 4]);

      // Ground plane grid lines
      const gridSize = 4;
      for (let i = -gridSize; i <= gridSize; i += 2) {
        const p1 = project(i, -gridSize, 0);
        const p2 = project(i, gridSize, 0);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        const p3 = project(-gridSize, i, 0);
        const p4 = project(gridSize, i, 0);
        ctx.beginPath();
        ctx.moveTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
        ctx.stroke();
      }

      // 2. Draw construction dashed rays extending from the letters (as seen in screenshot)
      const ray1 = project(-3.6, 0, 3.2);
      const ray1End = project(-5.5, -2.5, 3.2);
      ctx.beginPath();
      ctx.moveTo(ray1.x, ray1.y);
      ctx.lineTo(ray1End.x, ray1End.y);
      ctx.stroke();

      const ray2 = project(3.2, 0, 3.2);
      const ray2End = project(5.5, 2.5, 3.2);
      ctx.beginPath();
      ctx.moveTo(ray2.x, ray2.y);
      ctx.lineTo(ray2End.x, ray2End.y);
      ctx.stroke();

      ctx.setLineDash([]); // Reset dashed line

      // 3. Collect all 3D faces from each block for depth sorting (Painter's Algorithm)
      interface Face {
        type: 'top' | 'left' | 'right' | 'backLeft' | 'backRight' | 'bottom';
        points: { x: number; y: number }[];
        avgDepth: number;
        block: Block3D;
      }

      const faces: Face[] = [];

      BLOCKS.forEach((block) => {
        const hx = block.w / 2;
        const hy = block.d / 2;
        const hz = block.h / 2;

        // 8 vertices of cuboid
        // 0: bottom-front-left (-hx, -hy, -hz)
        // 1: bottom-front-right (+hx, -hy, -hz)
        // 2: bottom-back-right (+hx, +hy, -hz)
        // 3: bottom-back-left (-hx, +hy, -hz)
        // 4: top-front-left (-hx, -hy, +hz)
        // 5: top-front-right (+hx, -hy, +hz)
        // 6: top-back-right (+hx, +hy, +hz)
        // 7: top-back-left (-hx, +hy, +hz)
        const v = [
          project(block.x - hx, block.y - hy, block.z - hz),
          project(block.x + hx, block.y - hy, block.z - hz),
          project(block.x + hx, block.y + hy, block.z - hz),
          project(block.x - hx, block.y + hy, block.z - hz),
          project(block.x - hx, block.y - hy, block.z + hz),
          project(block.x + hx, block.y - hy, block.z + hz),
          project(block.x + hx, block.y + hy, block.z + hz),
          project(block.x - hx, block.y + hy, block.z + hz),
        ];

        // Top face: [4, 5, 6, 7]
        faces.push({
          type: 'top',
          points: [v[4], v[5], v[6], v[7]],
          avgDepth: (v[4].depth + v[5].depth + v[6].depth + v[7].depth) / 4,
          block,
        });

        // Front-Left face (or Left): [0, 4, 7, 3]
        faces.push({
          type: 'left',
          points: [v[0], v[4], v[7], v[3]],
          avgDepth: (v[0].depth + v[4].depth + v[7].depth + v[3].depth) / 4,
          block,
        });

        // Front-Right face (or Front): [0, 1, 5, 4]
        faces.push({
          type: 'right',
          points: [v[0], v[1], v[5], v[4]],
          avgDepth: (v[0].depth + v[1].depth + v[5].depth + v[4].depth) / 4,
          block,
        });

        // Back-Right face: [1, 2, 6, 5]
        faces.push({
          type: 'backRight',
          points: [v[1], v[2], v[6], v[5]],
          avgDepth: (v[1].depth + v[2].depth + v[6].depth + v[5].depth) / 4,
          block,
        });

        // Back-Left face: [2, 3, 7, 6]
        faces.push({
          type: 'backLeft',
          points: [v[2], v[3], v[7], v[6]],
          avgDepth: (v[2].depth + v[3].depth + v[7].depth + v[6].depth) / 4,
          block,
        });
      });

      // Sort faces from furthest to nearest (descending depth)
      faces.sort((a, b) => b.avgDepth - a.avgDepth);

      // 4. Render sorted faces
      faces.forEach((face) => {
        // Calculate 2D normal vector to test face visibility (backface culling)
        const p0 = face.points[0];
        const p1 = face.points[1];
        const p2 = face.points[2];
        const cross = (p1.x - p0.x) * (p2.y - p0.y) - (p1.y - p0.y) * (p2.x - p0.x);

        // In screen coordinates where Y is down, visible faces have specific cross-product signs
        // For top face and visible side faces:
        ctx.beginPath();
        ctx.moveTo(face.points[0].x, face.points[0].y);
        for (let i = 1; i < face.points.length; i++) {
          ctx.lineTo(face.points[i].x, face.points[i].y);
        }
        ctx.closePath();

        // Fill based on face type
        if (face.type === 'top') {
          ctx.fillStyle = topFill;
          ctx.fill();

          // DRAW DIAGONAL HATCHING LINES on top faces (Signature chanhdai/blueprint craft)
          ctx.save();
          ctx.clip(); // Clip hatching precisely inside the top polygon
          ctx.strokeStyle = hatchColor;
          ctx.lineWidth = 1.1;

          // Find bounding box of polygon
          let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
          face.points.forEach((pt) => {
            if (pt.x < minX) minX = pt.x;
            if (pt.x > maxX) maxX = pt.x;
            if (pt.y < minY) minY = pt.y;
            if (pt.y > maxY) maxY = pt.y;
          });

          // Draw parallel 45° diagonal hatching stripes
          const spacing = 6;
          const totalWidth = (maxX - minX) + (maxY - minY);
          for (let offset = -totalWidth; offset <= totalWidth; offset += spacing) {
            ctx.beginPath();
            ctx.moveTo(minX + offset, minY);
            ctx.lineTo(minX + offset + (maxY - minY), maxY);
            ctx.stroke();
          }
          ctx.restore();
        } else if (face.type === 'left' || face.type === 'backLeft') {
          ctx.fillStyle = leftFill;
          ctx.fill();
        } else {
          ctx.fillStyle = rightFill;
          ctx.fill();
        }

        // Draw crisp wireframe edge outline
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.35;
        ctx.stroke();
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentMode]);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center justify-center select-none group cursor-pointer ${className}`}
      onClick={handleClick}
      title={language === 'id' ? 'Klik untuk memutar monogram TF 3D!' : 'Click to spin the 3D TF monogram!'}
    >
      {/* 3D Canvas Viewport */}
      <div className="relative w-full max-w-[360px] sm:max-w-[440px] aspect-square flex items-center justify-center">
        {/* Soft Ambient Depth Glow for Dark Mode */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-emerald-500/15 via-sky-500/15 to-transparent blur-3xl pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500" />

        <canvas
          ref={canvasRef}
          className="relative z-10 w-full h-full block touch-none filter drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
        />


        {/* Signature "Follows your cursor" arrow tag from screenshot */}
        <div className="absolute bottom-2 right-3 flex items-start gap-1.5 pointer-events-none text-zinc-500 dark:text-zinc-400">
          <svg
            className="w-5 h-5 -rotate-12 text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
          <div className="flex flex-col font-mono text-[11px] leading-tight">
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">
              {language === 'id' ? 'mengikuti kursormu' : 'follows your cursor'}
            </span>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
              {language === 'id' ? '• klik untuk putar 360°' : '• click to rotate 360°'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
