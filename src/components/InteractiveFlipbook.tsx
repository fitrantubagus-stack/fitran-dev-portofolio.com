import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  X,
  Sparkles,
  Code2,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  TrendingUp,
  CheckCircle2,
  Database,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { FitranPixelLogo, TealBot, BlueBot, OrangeBot } from './FitranPixelLogo';

interface InteractiveFlipbookProps {
  onClose?: () => void;
  initialSpreadIndex?: number;
  className?: string;
}

interface BookSpread {
  id: string;
  moduleId: string;
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
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // =========================================================================
  // MATERI BELAJAR BUKU FISIK 3D (FITRAN DEV HANDBOOK SERIES)
  // Referensi animasi & tata letak buku fisik, isi materi rekayasa web & AI murni
  // =========================================================================
  const MATERI_SPREADS: BookSpread[] = [
    // -----------------------------------------------------------------------
    // SPREAD 1: ARSITEKTUR WEB KILAT & KEAMANAN SERVER (MODUL 1)
    // -----------------------------------------------------------------------
    {
      id: 'web-kilat-keamanan',
      moduleId: 'web-kilat',
      moduleName: 'Modul 1: Web Kilat & Keamanan',
      leftPageNum: 1,
      rightPageNum: 2,
      leftTitle: 'Bab 01: Arsitektur Website Kilat (<0.8s)',
      leftSubtitle: 'Prinsip Rekayasa Performa Tinggi & Core Web Vitals',
      leftContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Kecepatan bukan sekadar estetika, melainkan penentu utama konversi bisnis. Setiap penundaan 100 milidetik
            dapat menurunkan tingkat konversi penjualan hingga 7%. Dalam buku panduan ini, kita menerapkan pola
            arsitektur hibrida modern yang menggabungkan <strong>Static Site Generation (SSG)</strong> dengan{' '}
            <strong>Edge Caching</strong>.
          </p>

          <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 space-y-1.5 font-sans">
            <span className="font-mono text-[10px] font-bold text-blue-900 uppercase">
              Alur Distribusi Konten Kilat:
            </span>
            <div className="font-mono text-[11px] text-blue-950 space-y-1">
              <p>1. Permintaan Browser Pengunjung</p>
              <p>2. Edge Cloudflare CDN Cache Hit (&lt;25ms)</p>
              <p>3. Dynamic Revalidation di Serverless Edge</p>
              <p>4. Render DOM Pertama &lt; 0.8 Detik</p>
            </div>
          </div>

          <p>
            Dengan mengompres aset gambar ke format modern <code>AVIF / WebP</code> dan menghilangkan Javascript yang
            tidak digunakan, skor Google Lighthouse dapat bertahan konsisten di angka 95 hingga 100 poin.
          </p>
        </div>
      ),
      rightTitle: 'Bab 02: 5 Lapisan Keamanan Server',
      rightSubtitle: 'Konfigurasi Hardening Zero-Trust Kelas Enterprise',
      rightContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Website bisnis harus tahan terhadap serangan bot dan eksploitasi data. Kami menerapkan struktur pertahanan
            berlapis (defense-in-depth) pada setiap server produksi:
          </p>

          <div className="space-y-2 font-mono text-[11px]">
            <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-300">
              <span className="font-bold text-zinc-900">L1: Enkripsi TLS 1.3 &amp; HSTS</span>
              <p className="text-[10px] text-zinc-600 font-sans">Menjamin keamanan transfer data perbankan &amp; kontak.</p>
            </div>
            <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-300">
              <span className="font-bold text-zinc-900">L2: Zero-Trust UFW &amp; Fail2Ban</span>
              <p className="text-[10px] text-zinc-600 font-sans">Blokir otomatis IP penyerang brute-force SSH.</p>
            </div>
            <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-300">
              <span className="font-bold text-zinc-900">L3: Parameterized Sanitasi Anti-SQLi</span>
              <p className="text-[10px] text-zinc-600 font-sans">Mencegah kebocoran basis data lewat formulir publik.</p>
            </div>
            <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-300">
              <span className="font-bold text-zinc-900">L4: Cloudflare Web Application Firewall</span>
              <p className="text-[10px] text-zinc-600 font-sans">Mitigasi serangan DDoS &amp; bot scraping otomatis.</p>
            </div>
          </div>
        </div>
      ),
    },

    // -----------------------------------------------------------------------
    // SPREAD 2: UI/UX BENTO GRID & DATABASE RELASIONAL (MODUL 1 PART 2)
    // -----------------------------------------------------------------------
    {
      id: 'uiux-database',
      moduleId: 'web-kilat',
      moduleName: 'Modul 1: Web Kilat & Keamanan',
      leftPageNum: 3,
      rightPageNum: 4,
      leftTitle: 'Bab 03: Desain UI/UX & Pola Bento Grid',
      leftSubtitle: 'Standar Antarmuka Profesional Sekawan Media Style',
      leftContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Pola tata letak Bento Grid membagi informasi kompleks menjadi kartu-kartu terfokus dengan hierarki visual
            yang seimbang. Kunci keberhasilan desain ini adalah konsistensi kontras, ruang kosong (whitespace), dan
            tipografi proporsional.
          </p>

          <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-200 text-xs space-y-1">
            <span className="font-bold text-amber-900 font-mono">Pedoman Warna Non-Gradasi:</span>
            <p className="text-zinc-700">
              Gunakan warna solid terukur: Biru Navy (<code>#1E3A8A</code>) untuk otoritas dan stabilitas, Hijau Emerald (
              <code>#059669</code>) untuk tombol aksi utama / WhatsApp, dan Dark Slate (<code>#111319</code>) untuk teks
              tajam tanpa silau.
            </p>
          </div>

          <p>
            Setiap komponen visual dilengkapi micro-interactions halus saat disentuh atau diarahkan kursor, memberikan
            kesan responsif tanpa membebani thread pemrosesan CPU browser.
          </p>
        </div>
      ),
      rightTitle: 'Bab 04: Database & Offline-First Sync',
      rightSubtitle: 'Arsitektur Basis Data Berkecepatan Tinggi',
      rightContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Untuk aplikasi bisnis yang beroperasi di wilayah minim sinyal (seperti perkebunan atau kawasan industri),
            arsitektur <strong>offline-first</strong> menyimpan transaksi secara lokal di IndexedDB dan melakukan
            sinkronisasi otomatis ke server saat internet kembali terhubung.
          </p>

          <div className="p-3 rounded-xl bg-zinc-100 border border-zinc-300 font-mono text-[11px] space-y-1.5">
            <p className="font-bold text-zinc-900">Optimasi Query PostgreSQL:</p>
            <p className="text-zinc-700">✓ B-Tree Indexing pada kolom pencarian aktif</p>
            <p className="text-zinc-700">✓ Connection pooling via PgBouncer</p>
            <p className="text-zinc-700">✓ Response payload JSON terkompresi Brotli</p>
          </div>

          <p>
            Hasilnya adalah waktu tanggap query API di bawah 15 milidetik dengan jaminan data tidak hilang meski terjadi
            koneksi terputus tiba-tiba.
          </p>
        </div>
      ),
    },

    // -----------------------------------------------------------------------
    // SPREAD 3: AI ENGINEERING & RETRIEVAL-AUGMENTED GENERATION (MODUL 2)
    // -----------------------------------------------------------------------
    {
      id: 'ai-engineering-rag',
      moduleId: 'ai-engineering',
      moduleName: 'Modul 2: AI Engineering & WhatsApp Agent',
      leftPageNum: 5,
      rightPageNum: 6,
      leftTitle: 'Bab 05: Fondasi AI Agent untuk Bisnis',
      leftSubtitle: 'Strategi Otomasi Cerdas Tanpa Halusinasi',
      leftContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Banyak perusahaan gagal memanfaatkan model kecerdasan buatan karena menyangka AI dapat langsung menjawab
            semua hal tanpa aturan. Model bahasa besar (LLM) seperti Gemini 2.5 pada dasarnya adalah mesin penalaran,
            bukan basis data terverifikasi.
          </p>

          <div className="p-3.5 rounded-xl bg-purple-50/80 border border-purple-200 text-xs space-y-1.5">
            <span className="font-bold text-purple-900 font-mono">Dua Pilar Agen Sukses:</span>
            <p className="text-zinc-800">
              1. <strong>Guardrails Ketat:</strong> Instruksi tegas agar model menolak menjawab hal di luar dokumen SOP.
            </p>
            <p className="text-zinc-800">
              2. <strong>Jalur Eskalasi Manusia:</strong> Jika pengguna terdeteksi bingung atau komplain, tiket langsung
              diteruskan ke WhatsApp admin manusia.
            </p>
          </div>

          <p>
            Pendekatan ini menghemat hingga 80% waktu penanganan pesan masuk tanpa merusak reputasi layanan pelanggan bisnis.
          </p>
        </div>
      ),
      rightTitle: 'Bab 06: Arsitektur RAG & Vector Database',
      rightSubtitle: 'Menghubungkan SOP Perusahaan ke Otak AI',
      rightContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            <strong>Retrieval-Augmented Generation (RAG)</strong> adalah teknik membedah dokumen PDF katalog, daftar harga,
            dan syarat ketentuan menjadi potongan teks (chunks) lalu mengubahnya menjadi vektor semantik.
          </p>

          <div className="p-3 rounded-xl bg-zinc-100 border border-zinc-300 font-mono text-[11px] space-y-1">
            <p className="font-bold text-zinc-900">Alur Kerja Retrieval Semantik:</p>
            <p>1. User chat: "Apakah ada garansi 60 hari?"</p>
            <p>2. Vektor pencarian menemukan Bab 4 SOP Garansi</p>
            <p>3. Konteks resmi disematkan ke prompt LLM</p>
            <p>4. Jawaban faktual 100% sesuai kebijakan perusahaan</p>
          </div>

          <p>
            Dengan RAG, Anda tidak perlu melatih ulang (fine-tuning) model yang mahal setiap kali harga produk berubah.
            Cukup perbarui dokumen sumber, dan agen AI seketika mengetahui informasi terbaru.
          </p>
        </div>
      ),
    },

    // -----------------------------------------------------------------------
    // SPREAD 4: TECHNICAL MARKETING & META CONVERSIONS API (MODUL 3)
    // -----------------------------------------------------------------------
    {
      id: 'marketing-capi-tracking',
      moduleId: 'technical-marketing',
      moduleName: 'Modul 3: Technical Marketing & CAPI',
      leftPageNum: 7,
      rightPageNum: 8,
      leftTitle: 'Bab 07: Mengatasi Kebocoran Data Iklan',
      leftSubtitle: 'Dampak Pemblokiran Cookie Safari ITP & iOS 14',
      leftContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Sejak Safari Intelligent Tracking Prevention (ITP) dan pembaruan privasi seluler diluncurkan, pelacak piksel
            berbasis browser kehilangan hingga 35% data transaksi. Akibatnya, mesin AI Meta dan Google Ads tidak dapat
            mengenali siapa pembeli sesungguhnya.
          </p>

          <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs space-y-1.5">
            <span className="font-bold text-emerald-900 font-mono">Solusi: Server-to-Server Tracking</span>
            <p className="text-zinc-800">
              Sinyal pembelian dikirim langsung dari backend web server Anda ke Meta Graph API via HTTPS terenkripsi,
              melewati ad-blocker dan batasan browser sepenuhnya.
            </p>
          </div>

          <p>
            Data pembeli yang utuh memungkinkan algoritma iklan mengoptimalkan anggaran secara presisi ke target audiens
            yang benar-benar berpotensi melakukan pembelian berulang.
          </p>
        </div>
      ),
      rightTitle: 'Bab 08: sGTM & Deduplikasi Event ID',
      rightSubtitle: 'Mencapai Skor Event Match Quality (EMQ) 9.0+',
      rightContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Dengan menjalankan <strong>Server-side Google Tag Manager (sGTM)</strong> di bawah subdomain sendiri (seperti{' '}
            <code>data.bisnisanda.com</code>), cookie diperlakukan sebagai first-party oleh browser dengan retensi penuh.
          </p>

          <div className="p-3 rounded-xl bg-zinc-100 border border-zinc-300 font-mono text-[11px] space-y-1.5">
            <p className="font-bold text-zinc-900">Mekanisme Deduplikasi Unik:</p>
            <p>• Browser Event: <code>event_id: "trx_98213"</code></p>
            <p>• Server CAPI: <code>event_id: "trx_98213"</code></p>
            <p>• Meta Graph API otomatis menyatukan 1 pembelian</p>
          </div>

          <p>
            Hasil implementasi riil: biaya akuisisi pelanggan (CPA) turun 20-30% karena mesin iklan tidak membuang anggaran
            pada audiens yang sudah terkonversi.
          </p>
        </div>
      ),
    },

    // -----------------------------------------------------------------------
    // SPREAD 5: VIBE CODING & DEVELOPER TOOLING (MODUL 4)
    // -----------------------------------------------------------------------
    {
      id: 'vibe-coding-tooling',
      moduleId: 'vibe-coding',
      moduleName: 'Modul 4: Vibe Coding & Tooling AI',
      leftPageNum: 9,
      rightPageNum: 10,
      leftTitle: 'Bab 09: Paradigma Vibe Coding Modern',
      leftSubtitle: 'Membangun Software Terukur Bersama AI Coding Agents',
      leftContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            <strong>Vibe Coding</strong> bukanlah menulis kode sembarangan tanpa pemahaman, melainkan pergeseran peran
            rekayasawan dari mengetik sintaks secara manual menjadi <em>arsitek sistem</em> yang mengarahkan agen AI
            otonom (seperti Claude Code dan Antigravity).
          </p>

          <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs space-y-1">
            <span className="font-bold text-amber-900 font-mono">Aturan Emas Spec-Driven:</span>
            <p className="text-zinc-800">
              Kode yang baik berawal dari spesifikasi yang jelas. Definisikan kontrak antarmuka tipe (TypeScript
              interfaces), batas tanggung jawab fungsi, dan penanganan kegagalan sebelum menulis implementasi.
            </p>
          </div>

          <p>
            Kombinasi ketelitian arsitektur dengan kecepatan eksekusi AI memungkinkan pengembangan fitur kompleks selesai
            dalam hitungan jam dengan standar pengujian unit yang lengkap.
          </p>
        </div>
      ),
      rightTitle: 'Bab 10: CI/CD & Zero-Downtime Deploy',
      rightSubtitle: 'Otomatisasi Linting, Pengujian & Rilis Cloud',
      rightContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Setiap perubahan kode yang di-commit ke Git otomatis melewati jalur verifikasi bertingkat sebelum menyentuh
            pengunjung publik.
          </p>

          <div className="p-3 rounded-xl bg-zinc-100 border border-zinc-300 font-mono text-[11px] space-y-1.5">
            <p className="font-bold text-zinc-900">Pipeline Otomatisasi GitHub Actions:</p>
            <p>1. Static Type Checking (<code>tsc --noEmit</code>)</p>
            <p>2. Unit Testing &amp; Regresi (<code>vitest run</code>)</p>
            <p>3. Build Bundle Optimization (<code>vite build</code>)</p>
            <p>4. Atomic Zero-Downtime Rollout ke Edge Cloud</p>
          </div>

          <p>
            Dengan alur kerja ini, risiko regresi antarmuka mendekati nol dan pembaruan sistem dapat dirilis kapan saja tanpa
            mengganggu operasional bisnis Anda.
          </p>
        </div>
      ),
    },
  ];

  const currentSpread = MATERI_SPREADS[spreadIndex] || MATERI_SPREADS[0];

  const handleNextPage = () => {
    if (spreadIndex < MATERI_SPREADS.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setSpreadIndex((prev) => prev + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const handlePrevPage = () => {
    if (spreadIndex > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setSpreadIndex((prev) => prev - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden shadow-2xl border border-amber-950/40 select-none ${className}`}
      style={{
        // REALISTIC WOODEN DESK TEXTURE (Referensi Flipbook Fisik)
        backgroundColor: '#c8ad88',
        backgroundImage: `
          repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 2px, transparent 2px, transparent 40px),
          repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 30px)
        `,
      }}
    >
      {/* Top Controls Bar */}
      <div className="px-4 sm:px-6 py-3.5 bg-zinc-950/90 text-white border-b border-zinc-800 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span className="font-serif font-bold text-xs sm:text-sm text-zinc-100">
              Buku Materi Belajar 3D (Flipbook)
            </span>
          </div>

          {/* Module Quick Selector */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs font-mono">
            {MATERI_SPREADS.map((sp, idx) => (
              <button
                key={sp.id}
                onClick={() => setSpreadIndex(idx)}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  spreadIndex === idx
                    ? 'bg-blue-600 text-white font-bold shadow-xs'
                    : 'text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800'
                }`}
              >
                Bab {sp.leftPageNum}-{sp.rightPageNum}
              </button>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-amber-400 font-bold hidden sm:inline">
            fitran.dev Handbook Series
          </span>

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white cursor-pointer"
              title="Tutup Flipbook"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Wooden Desk Canvas with 3D Book Spread */}
      <div className="p-4 sm:p-8 lg:p-12 overflow-x-auto flex items-center justify-center min-h-[580px] sm:min-h-[660px]">
        {/* Book Container with Realistic Drop Shadows & Stacked Pages Effect */}
        <div
          className={`relative max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] rounded-lg overflow-hidden transition-all duration-300 ${
            isFlipping ? 'opacity-85 scale-[0.99]' : 'opacity-100 scale-100'
          }`}
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'center center',
          }}
        >
          {/* Central Book Spine Shadow Crease (Simulasi Lipatan Buku Fisik) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 pointer-events-none z-30 bg-gradient-to-r from-black/25 via-black/10 to-transparent" />
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-6 pointer-events-none z-30 bg-black/15" />

          {/* SISI KIRI: HALAMAN KIRI (GENAP) */}
          <div
            className="relative p-6 sm:p-10 flex flex-col justify-between border-r border-zinc-300/80 min-h-[520px] sm:min-h-[600px]"
            style={{
              backgroundColor: '#FCFAF5',
              backgroundImage: 'linear-gradient(to right, #EDE5D8 0%, #FAF8F2 6%, #FFFFFF 96%, #EDE5D8 100%)',
            }}
          >
            {/* Header: Title */}
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase font-bold text-blue-700 tracking-wider">
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

            {/* Content Body */}
            <div className="my-auto py-2">
              {currentSpread.leftContent}
            </div>

            {/* Footer: Page Number */}
            <div className="pt-4 border-t border-zinc-200/60 text-center font-serif text-xs text-zinc-500">
              <span>— {currentSpread.leftPageNum} —</span>
            </div>
          </div>

          {/* SISI KANAN: HALAMAN KANAN (GANJIL) */}
          <div
            className="relative p-6 sm:p-10 flex flex-col justify-between min-h-[520px] sm:min-h-[600px]"
            style={{
              backgroundColor: '#FCFAF5',
              backgroundImage: 'linear-gradient(to right, #EDE5D8 0%, #FFFFFF 4%, #FAF8F2 94%, #EDE5D8 100%)',
            }}
          >
            {/* Header: Title */}
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
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

            {/* Content Body */}
            <div className="my-auto py-2">
              {currentSpread.rightContent}
            </div>

            {/* Footer: Page Number */}
            <div className="pt-4 border-t border-zinc-200/60 text-center font-serif text-xs text-zinc-500">
              <span>— {currentSpread.rightPageNum} —</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Navigation Toolbar */}
      <div className="px-6 py-4 bg-zinc-950/95 border-t border-zinc-800 text-white flex flex-wrap items-center justify-between gap-4">
        {/* Left: Previous Page Button */}
        <button
          onClick={handlePrevPage}
          disabled={spreadIndex === 0 || isFlipping}
          className={`px-4 py-2 rounded-xl border text-xs font-bold font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
            spreadIndex === 0
              ? 'opacity-30 border-zinc-800 text-zinc-600 cursor-not-allowed'
              : 'bg-zinc-900 border-zinc-700 hover:bg-zinc-800 text-white shadow-xs'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Halaman Sebelumnya</span>
        </button>

        {/* Center: Current Page Spread Badge */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-zinc-400">
            Menampilkan Materi:
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-950 border border-blue-800/80 text-blue-300 font-mono text-xs font-bold">
            Halaman {currentSpread.leftPageNum} - {currentSpread.rightPageNum}
          </span>
          <span className="text-zinc-500 text-xs font-mono">
            ({spreadIndex + 1} dari {MATERI_SPREADS.length} lembar)
          </span>
        </div>

        {/* Right: Next Page Button */}
        <button
          onClick={handleNextPage}
          disabled={spreadIndex === MATERI_SPREADS.length - 1 || isFlipping}
          className={`px-4 py-2 rounded-xl border text-xs font-bold font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
            spreadIndex === MATERI_SPREADS.length - 1
              ? 'opacity-30 border-zinc-800 text-zinc-600 cursor-not-allowed'
              : 'bg-blue-600 border-blue-500 hover:bg-blue-700 text-white shadow-xs'
          }`}
        >
          <span>Halaman Selanjutnya</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
