import React, { useState, useEffect } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Download,
  ExternalLink,
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export interface LightboxData {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
}

interface ImageLightboxModalProps {
  data: LightboxData | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ data, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Close on ESC key
  useEffect(() => {
    if (!data) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [data, onClose]);

  // Reset zoom whenever image changes
  useEffect(() => {
    setZoomLevel(1);
  }, [data?.src]);

  if (!data) return null;

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in select-none"
    >
      {/* 1. TOP HEADER BAR */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-white shadow-xl"
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* Fitran Dev Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-xs shadow-sm">
              FD
            </div>
            <div>
              <span className="font-mono text-xs font-black tracking-tight text-white block">
                fitran<span className="text-emerald-400">.dev</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">Official Visual Viewer</span>
            </div>
          </div>

          <div className="h-6 w-px bg-zinc-800 hidden sm:block" />

          {/* Title & Contact */}
          <div className="min-w-0">
            <h3 className="font-bold text-xs sm:text-sm text-zinc-100 truncate">
              {data.title || data.alt || 'Pratinjau Gambar Penuh'}
            </h3>
            <div className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono mt-0.5">
              <span className="flex items-center gap-1 hover:text-emerald-400 transition-colors">
                <Mail className="w-3 h-3 text-emerald-400" />
                <span>fitranbadrttmamtb@gmail.com</span>
              </span>
              <span className="hidden md:inline text-zinc-600">•</span>
              <span className="hidden md:flex items-center gap-1 hover:text-emerald-400 transition-colors">
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>087722100276</span>
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls & Close */}
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          {/* Zoom In / Out Controls */}
          <div className="flex items-center gap-1 bg-zinc-800/80 rounded-xl p-1 border border-zinc-700/60">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.75}
              className="p-1.5 rounded-lg hover:bg-zinc-700 disabled:opacity-40 text-zinc-300 transition-colors cursor-pointer"
              title="Perkecil (-)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="px-2 py-1 text-[10px] font-mono font-bold text-zinc-300 hover:text-white"
              title="Kembalikan ke 100%"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 2.5}
              className="p-1.5 rounded-lg hover:bg-zinc-700 disabled:opacity-40 text-zinc-300 transition-colors cursor-pointer"
              title="Perbesar (+)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          <a
            href={data.src}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors"
            title="Buka File Asli di Tab Baru"
          >
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={data.src}
            download
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors"
            title="Unduh Gambar Asli"
          >
            <Download className="w-4 h-4" />
          </a>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white transition-colors cursor-pointer ml-1"
            title="Tutup (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. CENTER IMAGE DISPLAY AREA (UNCROPPED, NATURAL FULL RATIO) */}
      <div className="flex-1 flex items-center justify-center overflow-auto p-2 sm:p-4 my-2">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-full max-h-[75vh] flex items-center justify-center transition-transform duration-200"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={data.src}
            alt={data.alt || 'Pratinjau Penuh'}
            className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-zinc-800 bg-zinc-950"
          />
        </div>
      </div>

      {/* 3. BOTTOM FOOTER BAR */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl mx-auto p-3 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs flex flex-col sm:flex-row items-center justify-between gap-2 shadow-lg"
      >
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px] font-bold">
          <CheckCircle2 className="w-4 h-4" />
          <span>Gambar Asli Beresolusi Tinggi • Tanpa Pemotongan Ukuran</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-mono">
          <span>Kontak Konsultasi: 087722100276</span>
          <span className="text-zinc-600">•</span>
          <span>fitranbadrttmamtb@gmail.com</span>
        </div>
      </div>
    </div>
  );
};
