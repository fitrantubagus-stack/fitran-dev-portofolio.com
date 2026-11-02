import React, { useState } from 'react';
import {
  TrendingUp,
  Feather,
  Terminal,
  Lock,
  Globe,
  Gauge,
  Clock,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Check,
  Laptop,
  Smartphone,
  Layers,
  Database,
  Search,
  Eye,
  Rocket,
  Shield,
  Zap,
} from 'lucide-react';
import { FitranPixelLogo, TealBot, BlueBot, OrangeBot } from './FitranPixelLogo';

interface SekawanWebSolutionsProps {
  onWhatsAppInquiry: (serviceName?: string, price?: string) => void;
  onOpenFlipbook?: () => void;
  className?: string;
}

export const SekawanWebSolutions: React.FC<SekawanWebSolutionsProps> = ({
  onWhatsAppInquiry,
  onOpenFlipbook,
  className = '',
}) => {
  // Speedometer Gauge State for "Aman dan Berkesan"
  const [gaugeValue, setGaugeValue] = useState<number>(98);

  return (
    <div className={`space-y-16 select-none ${className}`}>
      {/* ========================================================================= */}
      {/* 1. SEKAWAN MEDIA 4 VALUE PILLARS (MATCHES USER IMAGE 1)                   */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#1E3A8A] dark:text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Standar Rekayasa Sekawan Media × Fitran Dev</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
            Mengapa Memilih Solusi Website Profesional Kami?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Fondasi pengembangan website kelas industri yang menggabungkan presisi teknis, estetika eksklusif, serta
            keamanan data mutakhir untuk akselerasi pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* 4 Cards Grid - Exact replica of User Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Pillar 1: Efektif & Efisien */}
          <div className="p-7 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all space-y-5 flex flex-col justify-between group hover:border-[#1E3A8A]">
            <div className="space-y-4">
              {/* Blue outline icon in white rounded square */}
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-[#1E3A8A] dark:text-blue-400 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="text-lg font-black text-zinc-950 dark:text-white tracking-tight">
                Efektif &amp; Efisien
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Melalui analisis kebutuhan secara mendalam dan pemilihan teknologi yang tepat, kami memastikan setiap
                proyek menghasilkan sistem yang teruji efektif serta efisien bagi operasional bisnis.
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-mono text-emerald-800 dark:text-emerald-300 font-bold flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>Optimasi Alur Kerja 100%</span>
            </div>
          </div>

          {/* Pillar 2: Desain Eksklusif */}
          <div className="p-7 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all space-y-5 flex flex-col justify-between group hover:border-[#1E3A8A]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-[#1E3A8A] dark:text-blue-400 group-hover:scale-105 transition-transform">
                <Feather className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="text-lg font-black text-zinc-950 dark:text-white tracking-tight">
                Desain Eksklusif
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Desain yang dipersonalisasi dengan responsivitas tinggi, mengikuti tren terkini untuk memastikan tampilan
                website Anda menarik perhatian dan nyaman digunakan oleh semua kalangan pengguna.
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-mono text-blue-700 dark:text-blue-300 font-bold flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-500" />
              <span>UI/UX Figma Berstandar</span>
            </div>
          </div>

          {/* Pillar 3: Sistem Mutakhir */}
          <div className="p-7 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all space-y-5 flex flex-col justify-between group hover:border-[#1E3A8A]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-[#1E3A8A] dark:text-blue-400 group-hover:scale-105 transition-transform">
                <Terminal className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="text-lg font-black text-zinc-950 dark:text-white tracking-tight">
                Sistem Mutakhir
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Dibangun menggunakan teknologi terkini untuk menjamin aspek keamanan data serta reliabilitas sistem,
                sehingga bisnis Anda siap berkembang pesat di tengah era digitalisasi global saat ini.
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-mono text-emerald-800 dark:text-emerald-300 font-bold flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>Next.js 15 &amp; Zero-Trust</span>
            </div>
          </div>

          {/* Pillar 4: Manajemen Maksimal */}
          <div className="p-7 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all space-y-5 flex flex-col justify-between group hover:border-[#1E3A8A]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-[#1E3A8A] dark:text-blue-400 group-hover:scale-105 transition-transform">
                <Lock className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="text-lg font-black text-zinc-950 dark:text-white tracking-tight">
                Manajemen Maksimal
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Melalui koordinasi intensif, kami mengelola setiap detail proyek secara profesional untuk memastikan seluruh
                tahapan berjalan sesuai rencana dan mencapai hasil yang maksimal.
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 text-[11px] font-mono text-amber-700 dark:text-amber-300 font-bold flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-amber-500" />
              <span>SLA Tertulis &amp; Garansi 60 Hari</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. SEKAWAN MEDIA INTERACTIVE BENTO GRID (MATCHES USER IMAGE 2 & 3)        */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#1E3A8A] dark:text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>Pilar Dampak Pertumbuhan Digital</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
            Keunggulan Strategis untuk Daya Saing Global
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Setiap komponen visual dan arsitektur website dirancang mendorong konversi nyata dan memperluas otoritas brand Anda.
          </p>
        </div>

        {/* Bento Grid Layout (Matches Image 2 & 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* BENTO 1: TINGKATKAN KEHADIRAN BRAND (Large Left Card with Concentric Orbit Rings) */}
          <div className="lg:col-span-5 rounded-3xl bg-blue-600 text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[420px]">
            {/* Concentric Orbital Ripple Vector Graphics */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-80 h-80 pointer-events-none">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-white/20 animate-spin-slow" />
              {/* Middle Ring */}
              <div className="absolute inset-8 rounded-full border border-white/25" />
              {/* Inner Ring */}
              <div className="absolute inset-16 rounded-full border border-white/30" />
              {/* Core Pulse Rocket */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg">
                  <Rocket className="w-8 h-8 text-white -rotate-45" />
                </div>
              </div>

              {/* Orbiting Avatar Badges (Matches Image 2 user heads) */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-blue-600 shadow-md flex items-center justify-center text-xs font-bold text-zinc-800">
                👨‍💼
              </div>
              <div className="absolute top-16 left-6 w-8 h-8 rounded-full bg-white border-2 border-blue-600 shadow-md flex items-center justify-center text-xs">
                👩‍💻
              </div>
              <div className="absolute top-24 right-6 w-8 h-8 rounded-full bg-white border-2 border-blue-600 shadow-md flex items-center justify-center text-xs">
                👨‍🔬
              </div>
              <div className="absolute bottom-16 left-12 w-8 h-8 rounded-full bg-white border-2 border-blue-600 shadow-md flex items-center justify-center text-xs">
                🧑‍💼
              </div>
              <div className="absolute bottom-12 right-12 w-8 h-8 rounded-full bg-white border-2 border-blue-600 shadow-md flex items-center justify-center text-xs">
                👩‍🎨
              </div>
            </div>

            <div className="h-48" />

            {/* Bottom Content (Matches Image 3 Text) */}
            <div className="relative z-10 space-y-2 pt-6">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Tingkatkan Kehadiran Brand
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
                Bangun kredibilitas brand Anda dan perluas jangkauan bisnis melalui kehadiran website yang optimal.
              </p>
            </div>
          </div>

          {/* SISI KANAN (Col 7): 3 Cards (Visibilitas Global, Aman dan Berkesan, Melampaui Waktu) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* BENTO 2: VISIBILITAS GLOBAL (Top Wide Card with Digital Dot Globe) */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
              <div className="space-y-3 max-w-sm">
                <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white tracking-tight">
                  Visibilitas Global
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Tampil paling atas dengan penguatan struktur SEO pada setiap aspek website Anda.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-[10px] font-bold">
                    Schema JSON-LD
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">
                    Sitemap XML
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono text-[10px]">
                    OpenGraph Meta
                  </span>
                </div>
              </div>

              {/* Digital Dot Globe Graphic with Orbital Trajectories (Matches Image 2) */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 relative shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 160 160" className="w-full h-full text-blue-600">
                  {/* Sphere Background */}
                  <circle cx="80" cy="80" r="54" className="fill-zinc-950" />
                  {/* Digital Grids */}
                  <ellipse cx="80" cy="80" rx="54" ry="24" fill="none" stroke="#2563EB" strokeWidth="1.2" strokeDasharray="3 3" />
                  <ellipse cx="80" cy="80" rx="54" ry="42" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.6" />
                  <ellipse cx="80" cy="80" rx="28" ry="54" fill="none" stroke="#60A5FA" strokeWidth="1" opacity="0.6" />
                  <circle cx="80" cy="80" r="54" fill="none" stroke="#2563EB" strokeWidth="2" />
                  {/* Orbital satellite trajectories */}
                  <path d="M 10 130 C 40 40, 120 40, 150 110" fill="none" stroke="#3B82F6" strokeWidth="2" />
                  <path d="M 30 20 C 70 140, 130 140, 150 60" fill="none" stroke="#60A5FA" strokeWidth="1.5" />
                  {/* Glowing Node */}
                  <circle cx="118" cy="56" r="4" fill="#10B981" />
                  <circle cx="48" cy="100" r="3" fill="#3B82F6" />
                </svg>
              </div>
            </div>

            {/* BOTTOM 2 CARDS ROW (Matches Image 2 & 3: Aman dan Berkesan + Melampaui Waktu) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* CARD 3: AMAN DAN BERKESAN (With Speedometer 1000+ views Gauge) */}
              <div className="p-7 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-zinc-950 dark:text-white tracking-tight">
                    Aman dan Berkesan
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Diciptakan dengan standar tinggi untuk impresi dan keamanan yang maksimal.
                  </p>
                </div>

                {/* Speedometer Gauge Visual with 1000+ views (Exact match to Image 3) */}
                <div className="pt-2 flex flex-col items-center relative">
                  {/* 1000+ views floating pill badge */}
                  <div className="self-start mb-1 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-[10px] font-mono font-bold text-blue-700 dark:text-blue-300 shadow-xs flex items-center gap-1">
                    <Eye className="w-3 h-3 text-blue-500" />
                    <span>1000+ views</span>
                  </div>

                  {/* SVG Speedometer Gauge */}
                  <svg viewBox="0 0 160 90" className="w-36 h-20 overflow-visible">
                    {/* Gauge Arc Ticks */}
                    <path
                      d="M 20 80 A 60 60 0 0 1 140 80"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="10"
                      strokeLinecap="round"
                      className="dark:stroke-zinc-800"
                    />
                    {/* Active Speed Arc (Blue) */}
                    <path
                      d="M 20 80 A 60 60 0 0 1 136 70"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    {/* Gauge Ticks Marks */}
                    {[0, 30, 60, 90, 120, 150, 180].map((deg, i) => {
                      const rad = (deg * Math.PI) / 180;
                      const x1 = 80 - 48 * Math.cos(rad);
                      const y1 = 80 - 48 * Math.sin(rad);
                      const x2 = 80 - 54 * Math.cos(rad);
                      const y2 = 80 - 54 * Math.sin(rad);
                      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#94A3B8" strokeWidth="1.5" />;
                    })}
                    {/* Needle Indicator */}
                    <line x1="80" y1="80" x2="128" y2="38" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round" />
                    {/* Pivot Circle */}
                    <circle cx="80" cy="80" r="8" fill="#FFFFFF" stroke="#1D4ED8" strokeWidth="3" className="shadow-md" />
                  </svg>
                  <p className="text-[10px] font-mono text-emerald-800 dark:text-emerald-300 font-bold mt-1">
                    Kecepatan Ekstrem &lt; 0.8s
                  </p>
                </div>
              </div>

              {/* CARD 4: MELAMPAUI WAKTU (With Layered Modern Wave Graphic) */}
              <div className="p-7 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-zinc-950 dark:text-white tracking-tight">
                    Melampaui Waktu
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Website design yang siap menghadapi kebutuhan dan perkembangan teknologi di masa depan.
                  </p>
                </div>

                {/* Layered Modern Blue Waves Graphic (Matches Image 3) */}
                <div className="pt-2 relative h-24 overflow-hidden rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 flex items-end">
                  <svg viewBox="0 0 200 80" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                    <path
                      d="M 0 50 Q 50 15, 100 45 T 200 35 L 200 80 L 0 80 Z"
                      fill="#3B82F6"
                      opacity="0.3"
                    />
                    <path
                      d="M 0 60 Q 60 25, 120 55 T 200 45 L 200 80 L 0 80 Z"
                      fill="#2563EB"
                      opacity="0.5"
                    />
                    <path
                      d="M 0 68 Q 70 40, 140 60 T 200 55 L 200 80 L 0 80 Z"
                      fill="#1E3A8A"
                    />
                  </svg>
                  <div className="absolute top-2 left-3 flex items-center gap-1.5 font-mono text-[10px] font-bold text-blue-700 dark:text-blue-300">
                    <Zap className="w-3 h-3 text-blue-500" />
                    <span>AI &amp; Cloud Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. FLIPBOOK PERPUSNAS PRESS BANNER (TRIGGER FOR INTERACTIVE BOOK)         */}
      {/* ========================================================================= */}
      <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 text-white border border-blue-900/60 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="space-y-3 max-w-2xl relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-300 font-mono text-[11px] font-bold uppercase">
              ★ KARYA BUKU RESMI PERPUSNAS RI
            </span>
            <span className="text-zinc-400 font-mono text-xs">Halaman 278 - 279</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Baca Tulisan &amp; Profil Tubagus Fitran dalam Mode Buku Digital (Flipbook)
          </h3>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Rasakan sensasi membaca buku fisik interaktif dengan animasi pembalikan halaman 3D realistis dari buku
            resmi terbitan Perpustakaan Nasional RI (*Press Perpusnas*): esai <em>"Gagasan: Literasi sebagai Senjata Produktivitas"</em> dan <em>"Profil Penulis"</em>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            {onOpenFlipbook && (
              <button
                onClick={onOpenFlipbook}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-lg group"
              >
                <span>Buka Mode Buku 3D (Flipbook)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}

            <a
              href="https://press.perpusnas.go.id/files/flipbooks/1635/mobile/index.html#p=293"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <span>Verifikasi di Portal Perpusnas</span>
              <Globe className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Mini Preview of Flipbook Cover */}
        <div className="relative z-10 shrink-0">
          <div
            onClick={onOpenFlipbook}
            className="w-48 sm:w-56 h-36 sm:h-40 rounded-2xl bg-[#f5efe6] text-zinc-900 border-4 border-amber-900/30 shadow-2xl p-4 flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-between border-b border-zinc-300 pb-1">
              <span className="font-mono text-[9px] font-bold text-zinc-500">Perpusnas Press</span>
              <span className="font-mono text-[9px] text-zinc-400">p. 278-279</span>
            </div>
            <div className="space-y-1">
              <p className="font-serif font-black text-xs text-zinc-900 leading-snug line-clamp-2">
                Gagasan: Literasi sebagai Senjata Produktivitas
              </p>
              <p className="text-[10px] font-sans text-zinc-600">Oleh: Tubagus Fitran Badruttamam</p>
            </div>
            <p className="text-[9px] font-mono text-blue-700 font-bold flex items-center gap-1">
              <span>Klik untuk Buka Buku 3D</span>
              <span>📖</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
