import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  X,
  BookOpen,
} from 'lucide-react';

interface InteractiveFlipbookProps {
  onClose?: () => void;
  initialSpreadIndex?: number;
  className?: string;
}

interface BookSpread {
  id: string;
  moduleName: string;
  leftPageNum: number;
  rightPageNum: number;
  leftTitle: string;
  leftSubtitle?: string;
  leftContent: React.ReactNode;
  rightTitle: string;
  rightSubtitle?: string;
  rightContent: React.ReactNode;
}

export const InteractiveFlipbook: React.FC<InteractiveFlipbookProps> = ({
  onClose,
  initialSpreadIndex = 0,
  className = '',
}) => {
  const [spreadIndex, setSpreadIndex] = useState<number>(initialSpreadIndex);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);

  // 10 Bab Kurikulum Terpadu Fitran Dev Handbook
  const MATERI_SPREADS: BookSpread[] = [
    {
      id: 'web-kilat-keamanan',
      moduleName: 'Modul 1: Web Kilat & Keamanan',
      leftPageNum: 1,
      rightPageNum: 2,
      leftTitle: 'Bab 01: Arsitektur Website Kilat (<0.8s)',
      leftSubtitle: 'Prinsip Rekayasa Performa Tinggi & Core Web Vitals',
      leftContent: (
        <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Kecepatan bukan sekadar estetika, melainkan penentu utama konversi bisnis. Setiap penundaan 100 milidetik
            dapat menurunkan tingkat konversi penjualan hingga 7%. Dalam buku panduan ini, kita menerapkan pola
            arsitektur hibrida modern yang menggabungkan <strong>Static Site Generation (SSG)</strong> dengan{' '}
            <strong>Edge Caching</strong>.
          </p>
          <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 space-y-1 font-sans">
            <span className="font-mono text-[10px] font-bold text-blue-900 uppercase">
              Alur Distribusi Konten Kilat:
            </span>
            <div className="font-mono text-[11px] text-blue-950 space-y-0.5">
              <p>1. Permintaan Browser Pengunjung</p>
              <p>2. Edge Cloudflare CDN Cache Hit (&lt;25ms)</p>
              <p>3. Dynamic Revalidation di Serverless Edge</p>
              <p>4. Render DOM Pertama &lt; 0.8 Detik</p>
            </div>
          </div>
          <p>
            Aset gambar dikompresi ke <code>AVIF / WebP</code> dan JavaScript di-tree-shake menyeluruh agar skor Lighthouse
            selalu stabil di kisaran 95–100 poin.
          </p>
        </div>
      ),
      rightTitle: 'Bab 02: 5 Lapisan Keamanan Server',
      rightSubtitle: 'Konfigurasi Hardening Zero-Trust Kelas Enterprise',
      rightContent: (
        <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Website bisnis harus tahan terhadap bot jahat dan eksploitasi data. Kami menerapkan struktur pertahanan
            berlapis (defense-in-depth) pada setiap server produksi:
          </p>
          <div className="space-y-1.5 font-sans text-xs">
            <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-200">
              <strong className="text-blue-900 font-mono">Lapisan 1:</strong> Cloudflare Edge WAF &amp; Rate-Limiting.
            </div>
            <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-200">
              <strong className="text-blue-900 font-mono">Lapisan 2:</strong> Reverse Proxy Caddy dengan isolasi HTTPS otomatis.
            </div>
            <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-200">
              <strong className="text-blue-900 font-mono">Lapisan 3:</strong> OS Linux Hardened, UFW Firewall &amp; Fail2ban.
            </div>
            <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-200">
              <strong className="text-blue-900 font-mono">Lapisan 4:</strong> Private WireGuard Mesh Tunnel via Tailscale.
            </div>
            <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-200">
              <strong className="text-blue-900 font-mono">Lapisan 5:</strong> Enkripsi Data Database &amp; Parameterized Query.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'bento-db',
      moduleName: 'Modul 2: Desain & Database',
      leftPageNum: 3,
      rightPageNum: 4,
      leftTitle: 'Bab 03: Prinsip Desain Bento Grid',
      leftSubtitle: 'Struktur Visual Padat Informasi yang Mudah Dipindai',
      leftContent: (
        <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Bento Grid mengadaptasi konsep kotak makan siang Jepang: mengelompokkan berbagai fungsi ke dalam kompartemen
            proporsional yang saling melengkapi. Pola ini memecah kejenuhan tata letak baris konvensional.
          </p>
          <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1">
            <span className="font-mono text-[10px] font-bold text-amber-900 uppercase">Hierarki Kompartemen:</span>
            <ul className="list-disc list-inside space-y-0.5 text-xs text-zinc-800">
              <li>Kompartemen Utama (2x2): Value proposition terbesar.</li>
              <li>Kompartemen Sekunder (1x2): Bukti sosial &amp; metrik HUD.</li>
              <li>Kompartemen Aksi (1x1): Tombol interaktif langsung WhatsApp.</li>
            </ul>
          </div>
        </div>
      ),
      rightTitle: 'Bab 04: Database PostgreSQL Offline-First',
      rightSubtitle: 'Integritas Relasional, Enkripsi, & Replikasi Cepat',
      rightContent: (
        <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Data adalah aset bisnis paling berharga. Memilih PostgreSQL dengan Supabase memberikan fondasi ACID compliance
            yang menjamin tidak ada transaksi yang hilang atau korup.
          </p>
          <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-1">
            <span className="font-mono text-[10px] font-bold text-emerald-900 uppercase">Praktek Terbaik Basis Data:</span>
            <p className="text-xs text-zinc-800">
              1. Row Level Security (RLS) untuk membatasi akses per-pengguna.<br />
              2. Indeks B-Tree &amp; GIN untuk query pencarian semantik kilat.<br />
              3. Backup snapshot harian terenkripsi otomatis.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'ai-rag',
      moduleName: 'Modul 3: AI Engineering & RAG',
      leftPageNum: 5,
      rightPageNum: 6,
      leftTitle: 'Bab 05: Fondasi AI Agent untuk Bisnis',
      leftSubtitle: 'Mengubah LLM Menjadi Karyawan Digital yang Disiplin',
      leftContent: (
        <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            AI Agent berbeda dengan chatbot sederhana. Agent memiliki <strong>persepsi</strong>, <strong>kemampuan bernalar</strong>,
            serta <strong>akses pemanggilan tool</strong> ke sistem eksternal untuk menyelesaikan transaksi bisnis secara mandiri.
          </p>
          <div className="p-3 rounded-xl bg-purple-50/80 border border-purple-200 space-y-1">
            <span className="font-mono text-[10px] font-bold text-purple-900 uppercase">Siklus Kerja Agent:</span>
            <p className="text-xs text-zinc-800 font-mono">
              Persepsi Pesan → Ekstraksi Intensi → Pencarian RAG Dokumen → Eksekusi Tool API → Respon Terverifikasi
            </p>
          </div>
        </div>
      ),
      rightTitle: 'Bab 06: WhatsApp AI Agent & Vector RAG',
      rightSubtitle: 'Integrasi Dokumen Bisnis dengan Guardrails Ketat',
      rightContent: (
        <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Dengan menyematkan <strong>Retrieval-Augmented Generation (RAG)</strong>, AI hanya menjawab berdasarkan SOP,
            katalog produk, dan harga resmi bisnis Anda tanpa risiko halusinasi.
          </p>
          <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 space-y-1">
            <span className="font-mono text-[10px] font-bold text-blue-900 uppercase">Protokol Keamanan Eskalasi:</span>
            <p className="text-xs text-zinc-800">
              Bila pelanggan meminta diskon khusus atau mengajukan komplain kritis, bot otomatis menahan diri dan meneruskan
              percakapan ke nomor WhatsApp staf manusia.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'marketing-capi',
      moduleName: 'Modul 4: Technical Marketing & CAPI',
      leftPageNum: 7,
      rightPageNum: 8,
      leftTitle: 'Bab 07: Meta Conversions API (CAPI)',
      leftSubtitle: 'Memulihkan 30% Sinyal Konversi yang Hilang Akibat AdBlocker',
      leftContent: (
        <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Browser modern semakin agresif memblokir third-party cookies. Akibatnya, pelaporan iklan di dashboard Meta
            atau Google sering tidak sinkron dengan transaksi riil di rekening bank bisnis Anda.
          </p>
          <div className="p-3 rounded-xl bg-rose-50/80 border border-rose-200 space-y-1">
            <span className="font-mono text-[10px] font-bold text-rose-900 uppercase">Solusi Server-Side CAPI:</span>
            <p className="text-xs text-zinc-800">
              Data transaksi dikirim langsung dari server backend ke endpoint Graph API Meta, menjamin 98%+ data terselamatkan
              secara legal dan mematuhi aturan privasi global.
            </p>
          </div>
        </div>
      ),
      rightTitle: 'Bab 08: Deduplikasi Event & sGTM',
      rightSubtitle: 'Sinkronisasi Event ID Browser & Server Tanpa Duplikasi',
      rightContent: (
        <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Tantangan terbesar sistem hibrida adalah mencegah transaksi dihitung dua kali. Kuncinya terletak pada
            <strong>Event ID unik</strong> yang dibagikan secara serentak antara tembakan browser dan webhook backend.
          </p>
          <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-1">
            <span className="font-mono text-[10px] font-bold text-emerald-900 uppercase">Jendela Pencocokan 48 Jam:</span>
            <p className="text-xs text-zinc-800 font-mono">
              Event ID: "ORD-9821" dicocokkan otomatis oleh algoritma Meta. Sinyal server yang lebih lengkap disimpan,
              duplikasi browser otomatis dibuang.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'vibe-coding',
      moduleName: 'Modul 5: Vibe Coding & Tooling',
      leftPageNum: 9,
      rightPageNum: 10,
      leftTitle: 'Bab 09: Vibe Coding Berbasis Spesifikasi',
      leftSubtitle: 'Membangun Software Cepat Menggunakan Claude Code CLI',
      leftContent: (
        <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Vibe Coding bukan berarti asal memberi instruksi sembarangan. Vibe coding yang benar adalah
            <strong>Spec-Driven Development</strong>: menyusun dokumen desain, batasan arsitektur, dan kontrak API yang jelas
            sebelum meminta AI menuliskan kode implementasi.
          </p>
          <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1">
            <span className="font-mono text-[10px] font-bold text-amber-900 uppercase">Alur Kerja Efisien:</span>
            <p className="text-xs text-zinc-800">
              Tulis spesifikasi ringkas → Jalankan AI agent per-tugas terisolasi → Verifikasi dengan build &amp; testing
              otomatis sebelum melakukan commit ke GitHub.
            </p>
          </div>
        </div>
      ),
      rightTitle: 'Bab 10: CI/CD & Deploy Tanpa Downtime',
      rightSubtitle: 'Otomasi Rilis GitHub Actions Menuju Edge Network',
      rightContent: (
        <div className="space-y-3 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Software yang baik harus bisa diperbarui kapan saja tanpa membuat pengguna mengalami error. Kami menyusun
            pipeline CI/CD yang mengotomatisasi pengujian, optimasi bundle, dan rilis zero-downtime.
          </p>
          <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 space-y-1">
            <span className="font-mono text-[10px] font-bold text-blue-900 uppercase">Praktek Terbaik Rilis:</span>
            <p className="text-xs text-zinc-800">
              Setiap kali kode di-push ke branch <code>main</code>, GitHub Actions memvalidasi TypeScript, menjalankan linter,
              dan memicu rolling update ke serverless edge dalam 60 detik.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const currentSpread = MATERI_SPREADS[spreadIndex];

  const handleNextPage = () => {
    if (spreadIndex < MATERI_SPREADS.length - 1 && !flipDirection) {
      setFlipDirection('next');
      setTimeout(() => {
        setSpreadIndex((prev) => prev + 1);
        setFlipDirection(null);
      }, 450);
    }
  };

  const handlePrevPage = () => {
    if (spreadIndex > 0 && !flipDirection) {
      setFlipDirection('prev');
      setTimeout(() => {
        setSpreadIndex((prev) => prev - 1);
        setFlipDirection(null);
      }, 450);
    }
  };

  return (
    <div
      className={`relative rounded-3xl overflow-hidden shadow-2xl border border-amber-950/20 select-none ${className}`}
      style={{
        backgroundColor: '#C5A880',
        backgroundImage: 'radial-gradient(circle at 50% 50%, #d4b892 0%, #b8986d 100%)',
      }}
    >
      {/* Sleek Floating Header: Minimal & Distraction-Free */}
      <div className="px-6 py-3.5 bg-black/30 backdrop-blur-md text-white flex items-center justify-between z-20 relative">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-300" />
          <span className="font-serif font-black text-sm tracking-wide text-amber-100">
            Fitran Dev Engineering Handbook
          </span>
          <span className="text-amber-200/60 text-xs hidden sm:inline">
            · Klik lembar buku untuk membalik halaman
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-amber-200">
            {spreadIndex + 1} / {MATERI_SPREADS.length} Lembar
          </span>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Tutup Flipbook"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Wooden Desk Canvas with Real 3D Book */}
      <div className="p-4 sm:p-8 lg:p-10 flex items-center justify-center relative min-h-[580px] sm:min-h-[640px]">
        {/* Floating Left Paddle */}
        <button
          onClick={handlePrevPage}
          disabled={spreadIndex === 0 || flipDirection !== null}
          className={`absolute left-1.5 sm:left-6 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-100 shadow-xl flex items-center justify-center transition-all cursor-pointer ${
            spreadIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
          }`}
          title="Halaman Sebelumnya"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Floating Right Paddle */}
        <button
          onClick={handleNextPage}
          disabled={spreadIndex === MATERI_SPREADS.length - 1 || flipDirection !== null}
          className={`absolute right-1.5 sm:right-6 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white dark:bg-zinc-900/90 text-zinc-800 dark:text-zinc-100 shadow-xl flex items-center justify-center transition-all cursor-pointer ${
            spreadIndex === MATERI_SPREADS.length - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
          }`}
          title="Halaman Selanjutnya"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* 3D BOOK SPREAD WRAPPER */}
        <div
          className="relative max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-[#8B5A2B]/40"
          style={{
            perspective: '1400px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Central Crease Shadow */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none z-30 bg-linear-to-r from-black/25 via-black/10 to-transparent" />
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-3 pointer-events-none z-30 bg-black/20" />

          {/* LEFT PAGE (Interactive Click to Flip Back) */}
          <div
            onClick={handlePrevPage}
            className={`relative px-8 py-6 sm:p-9 flex flex-col justify-between border-r border-zinc-300/80 min-h-[500px] sm:min-h-[560px] cursor-pointer transition-transform duration-500 ease-out ${
              flipDirection === 'prev' ? 'rotate-y-[-15deg] shadow-2xl' : ''
            }`}
            style={{
              backgroundColor: '#FCFAF5',
              backgroundImage: 'linear-gradient(to right, #EDE5D8 0%, #FAF8F2 6%, #FFFFFF 96%, #EDE5D8 100%)',
              transformOrigin: 'right center',
            }}
            title="Klik untuk ke halaman sebelumnya"
          >
            {/* Header */}
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] uppercase font-bold text-blue-800 tracking-wider">
                {currentSpread.moduleName}
              </span>
              <h3 className="font-serif font-black text-lg sm:text-2xl text-zinc-950 tracking-tight leading-snug">
                {currentSpread.leftTitle}
              </h3>
              {currentSpread.leftSubtitle && (
                <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                  {currentSpread.leftSubtitle}
                </p>
              )}
              <div className="w-12 h-0.5 bg-zinc-300 my-2" />
            </div>

            {/* Content */}
            <div className="my-auto py-2">
              {currentSpread.leftContent}
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-zinc-200/60 flex items-center justify-between font-serif text-xs text-zinc-500">
              <span className="text-[10px] font-mono text-zinc-400">← Hal. Sebelumnya</span>
              <span>— {currentSpread.leftPageNum} —</span>
            </div>
          </div>

          {/* RIGHT PAGE (Interactive Click to Flip Forward with 3D Page Turn) */}
          <div
            onClick={handleNextPage}
            className={`relative px-8 py-6 sm:p-9 flex flex-col justify-between min-h-[500px] sm:min-h-[560px] cursor-pointer transition-transform duration-500 ease-out ${
              flipDirection === 'next' ? 'rotate-y-[-45deg] scale-98 shadow-2xl origin-left' : ''
            }`}
            style={{
              backgroundColor: '#FCFAF5',
              backgroundImage: 'linear-gradient(to right, #EDE5D8 0%, #FFFFFF 4%, #FAF8F2 94%, #EDE5D8 100%)',
              transformOrigin: 'left center',
            }}
            title="Klik untuk ke halaman selanjutnya"
          >
            {/* Header */}
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] uppercase font-bold text-emerald-800 tracking-wider">
                {currentSpread.moduleName}
              </span>
              <h3 className="font-serif font-black text-lg sm:text-2xl text-zinc-950 tracking-tight leading-snug">
                {currentSpread.rightTitle}
              </h3>
              {currentSpread.rightSubtitle && (
                <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                  {currentSpread.rightSubtitle}
                </p>
              )}
              <div className="w-12 h-0.5 bg-zinc-300 my-2" />
            </div>

            {/* Content */}
            <div className="my-auto py-2">
              {currentSpread.rightContent}
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-zinc-200/60 flex items-center justify-between font-serif text-xs text-zinc-500">
              <span>— {currentSpread.rightPageNum} —</span>
              <span className="text-[10px] font-mono text-blue-600 font-bold">Hal. Selanjutnya →</span>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Bottom Bar: Just Page Indicators */}
      <div className="px-6 py-3 bg-black/25 backdrop-blur-md text-white flex items-center justify-center gap-1.5 z-20 relative">
        {MATERI_SPREADS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSpreadIndex(idx)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              idx === spreadIndex ? 'w-8 bg-amber-300' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            title={`Buka Lembar ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
