import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  X,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Share2,
  Download,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FitranPixelLogo, TealBot, BlueBot, OrangeBot } from './FitranPixelLogo';

interface InteractiveFlipbookProps {
  onClose?: () => void;
  initialSpreadIndex?: number;
  className?: string;
}

interface BookSpread {
  id: string;
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
  initialSpreadIndex = 1, // Default to Pages 278-279 (The Perpusnas Feature!)
  className = '',
}) => {
  const [spreadIndex, setSpreadIndex] = useState<number>(initialSpreadIndex);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [bookMode, setBookMode] = useState<'perpusnas' | 'belajar'>('perpusnas');

  // PERPUSNAS SPREADS (Matches Image 4)
  const PERPUSNAS_SPREADS: BookSpread[] = [
    {
      id: 'perpusnas-intro',
      leftPageNum: 276,
      rightPageNum: 277,
      leftTitle: 'Perpustakaan Nasional Republik Indonesia',
      leftSubtitle: 'Koleksi Publikasi & Terbitan Resmi Press Perpusnas',
      leftContent: (
        <div className="space-y-4 text-xs sm:text-[13px] leading-relaxed font-serif text-zinc-800">
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 space-y-1.5 font-sans">
            <span className="font-mono text-[10px] font-bold text-amber-900 uppercase">
              Dokumen Resmi Terverifikasi Perpusnas
            </span>
            <p className="font-bold text-xs text-zinc-900">
              Antologi Karya Ilmiah &amp; Gagasan Literasi Generasi Emas Indonesia
            </p>
            <p className="text-[11px] text-zinc-600">
              Penerbit: Press Perpustakaan Nasional RI · ISBN Terdaftar
            </p>
          </div>
          <p>
            Pendidikan dan literasi adalah dua tiang utama peradaban. Dalam antologi terbitan resmi Perpustakaan
            Nasional RI ini, gagasan-gagasan kritis dihimpun dari para pemikir muda lintas bidang untuk merumuskan
            langkah nyata menjawab tantangan transformasi digital bangsa.
          </p>
          <p>
            Tubagus Fitran Badruttamam turut berkontribusi menyumbangkan pemikiran bertajuk{' '}
            <em>"Gagasan: Literasi sebagai Senjata Produktivitas"</em>, yang menyoroti pergeseran peran generasi muda dari
            sekadar konsumen algoritma menjadi subjek yang menguasai teknologi dan ilmu pengetahuan.
          </p>
        </div>
      ),
      rightTitle: 'Daftar Isi & Pembahasan Bab',
      rightSubtitle: 'Bagian Penutup & Profil Penulis Terpilih',
      rightContent: (
        <div className="space-y-4 text-xs sm:text-[13px] leading-relaxed font-serif text-zinc-800">
          <div className="space-y-2 border-b border-zinc-200 pb-3 font-sans">
            <p className="font-bold text-xs uppercase text-zinc-700 font-mono tracking-wider">
              Susunan Bab Terbitan:
            </p>
            <ul className="space-y-1 text-xs text-zinc-600">
              <li className="flex justify-between">
                <span>Bab XI: Membangun Ekosistem Digital Berkelanjutan</span>
                <span className="font-mono text-zinc-400">hlm. 260</span>
              </li>
              <li className="flex justify-between font-bold text-zinc-900">
                <span>Bab XII: Gagasan: Literasi sebagai Senjata Produktivitas</span>
                <span className="font-mono text-blue-700">hlm. 278</span>
              </li>
              <li className="flex justify-between font-bold text-zinc-900">
                <span>Biografi Penulis: Tubagus Fitran Badruttamam</span>
                <span className="font-mono text-blue-700">hlm. 279</span>
              </li>
              <li className="flex justify-between">
                <span>Catatan Editor &amp; Dewan Redaksi Perpusnas</span>
                <span className="font-mono text-zinc-400">hlm. 280</span>
              </li>
            </ul>
          </div>
          <p className="text-xs text-zinc-600 font-sans italic">
            Klik tombol <strong>"Halaman Selanjutnya ›"</strong> di bawah atau tekan tombol panah kanan untuk membuka halaman
            278 - 279 yang memuat esai lengkap dan profil resmi Tubagus Fitran Badruttamam.
          </p>
        </div>
      ),
    },
    {
      // EXACT REPLICA OF USER IMAGE 4 (Pages 278 - 279)
      id: 'perpusnas-fitran-core',
      leftPageNum: 278,
      rightPageNum: 279,
      leftTitle: 'Gagasan: Literasi sebagai Senjata Produktivitas',
      leftContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-serif text-zinc-900 text-justify">
          <p>
            Gagasan utama yang ingin saya kemukakan adalah retensi fokus. Kita harus berhenti dari algoritma dan
            mulai menjadi subjek yang mengendalikan teknologi. Menjadikan laman Perpustakaan Nasional sebagai rujukan
            utama bukan hanya soal membaca buku, melainkan soal melatih kembali otak kita untuk memproses informasi
            yang mendalam dan kompleks.
          </p>
          <p>
            Penyambungan informasi digital yang disediakan Perpustakaan Nasional memungkinkan setiap remaja, dari kota
            besar hingga pelosok, untuk memiliki senjata yang sama dalam kompetisi global. Ilmu pengetahuan adalah
            satu-satunya alat yang bisa menyetarakan kesempatan. Ketika seorang remaja memilih untuk menutup aplikasi
            hiburannya dan membuka portal jurnal atau buku digital di laman Perpustakaan Nasional, ia sedang melakukan
            tindakan revolusioner untuk masa depannya sendiri.
          </p>
          <p>
            Keberadaan Perpustakaan Nasional secara digital menjadi bukti bahwa teknologi bisa digunakan untuk tujuan
            yang mulia: memanusiakan manusia melalui ilmu. Objektif kita jelas, yaitu mengubah ketergantungan gawai yang
            destruktif menjadi ketergantungan pada ilmu yang konstruktif. Mari kita buktikan bahwa kita adalah generasi
            yang mampu menaklukkan layar, bukan generasi yang ditaklukkan olehnya. Masa depan Indonesia tidak ditentukan
            oleh seberapa banyak pengikut kita di media sosial, melainkan oleh seberapa kuat gagasan yang kita tanam dalam
            pikiran kita melalui literasi yang berkualitas.
          </p>
        </div>
      ),
      rightTitle: 'Profil Penulis',
      rightContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-serif text-zinc-900 text-justify">
          {/* Official Author Photo Framed */}
          <div className="w-28 sm:w-32 h-36 sm:h-40 float-left mr-3.5 mb-2 rounded border border-zinc-400 p-1 bg-white shadow-xs overflow-hidden">
            <img
              src="/tubagus-fitran-avatar.jpg"
              alt="Tubagus Fitran Badruttamam - Penulis Perpusnas RI"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <p>
            Namaku Tubagus Fitran Badruttamam. Aku adalah seorang Mahasiswa Filomath yang suka bereksplorasi di dunia
            teknologi, hukum, dan seni kreatif. Meskipun saat ini menempuh jurusan di Teknik Informatika, perjalananku itu
            bisa dibilang lintas minat. Dari Jurusan Ilmu Pengetahuan Sosial, Aku tumbuh secara otodidak dalam belajar desain
            grafis, Belajar jadi penulis, hingga Belajar analisis sosial dan politik.
          </p>
          <p>
            Bagiku, teknologi hanyalah satu alat untuk memahami dunia. Di balik layar komputer, aku adalah seorang penulis
            novel yang mengeksplorasi imajinasi melalui kata-kata. Namun, di antara semua bidang tersebut, aku memiliki
            ketertarikan mendalam dan penguasaan yang kuat pada ilmu hukum. Kombinasi unik yang membuatku excited terhadap
            logika dan ketajaman solusi memberiku sudut pandang yang berbeda dalam melihat setiap permasalahan.
          </p>
          <p>
            Aku percaya bahwa di era digital ini, batasan antar disiplin ilmu sudah seharusnya memudar. Dengan semangat
            eksplorasi tanpa henti, aku terus berusaha memadukan kreativitas desain, struktur pemikiran hukum, dan inovasi
            teknologi untuk menciptakan karya yang berdampak bagi masyarakat.
          </p>
        </div>
      ),
    },
    {
      id: 'perpusnas-outro',
      leftPageNum: 280,
      rightPageNum: 281,
      leftTitle: 'Catatan Redaksi & Kurasi Ilmiah',
      leftContent: (
        <div className="space-y-4 text-xs sm:text-[13px] leading-relaxed font-serif text-zinc-800">
          <p>
            Karya tulis Tubagus Fitran Badruttamam dinilai oleh dewan kurator Perpustakaan Nasional RI memiliki kekuatan
            argumen yang jernih dalam mendamaikan polarisasi antara teknologi digital dan literasi mendalam.
          </p>
          <div className="p-4 rounded-xl bg-zinc-100 border border-zinc-300 font-sans space-y-1">
            <p className="font-bold text-xs text-zinc-900">Pernyataan Kurator:</p>
            <p className="text-xs text-zinc-700 italic">
              "Gagasan ini membuktikan bahwa mahasiswa teknologi informasi Indonesia mampu berpikir holistik, memandang
              literasi bukan hanya sebagai aktivitas pasif melainkan senjata produktivitas nyata di abad ke-21."
            </p>
          </div>
          <p>
            Tulisan ini terdaftar resmi dalam repositori digital Perpustakaan Nasional Republik Indonesia dan dapat
            diakses publik melalui portal flipbook resmi Perpusnas Press.
          </p>
        </div>
      ),
      rightTitle: 'Sertifikasi & Kredensial Penerbitan',
      rightContent: (
        <div className="space-y-4 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-800">
          <div className="p-4 rounded-2xl bg-white border border-zinc-300 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <img
                src="/official-perpusnas-press-logo.png"
                alt="Perpusnas Press Logo"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <p className="font-bold text-xs text-zinc-950">Press Perpustakaan Nasional RI</p>
                <p className="text-[10px] text-zinc-500 font-mono">Lembaga Pemerintah Nonkementerian</p>
              </div>
            </div>
            <p className="text-xs text-zinc-700">
              Sertifikat Penerbitan Karya Ilmiah Atas Nama: <strong>Tubagus Fitran Badruttamam</strong>
            </p>
            <a
              href="https://press.perpusnas.go.id/files/flipbooks/1635/mobile/index.html#p=293"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline"
            >
              <span>Buka Tautan Flipbook Resmi Perpusnas RI</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ),
    },
  ];

  // BELAJAR SPREADS (Interactive Book for Learning Tracks)
  const BELAJAR_SPREADS: BookSpread[] = [
    {
      id: 'belajar-ai',
      leftPageNum: 1,
      rightPageNum: 2,
      leftTitle: 'Buku Panduan: AI untuk Bisnis',
      leftSubtitle: 'Bab 01 — Fondasi & Kerangka Evaluasi AI',
      leftContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p className="font-bold text-blue-900">
            Mengapa Mayoritas Implementasi AI di Bisnis Berujung Gagal?
          </p>
          <p>
            Banyak pengusaha tergiur menggunakan model AI canggih hanya karena tren. Padahal, AI bukan obat mujarab untuk
            alur kerja yang pada dasarnya belum teratur. Kunci keberhasilan AI agent terletak pada kejelasan batasan peran
            (guardrails) dan jalur eskalasi ke operator manusia.
          </p>
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs">
            <span className="font-bold font-mono text-blue-900">Aturan Emas:</span>
            <p className="mt-1">
              Gunakan otomasi deterministik (rule-based) jika alur tugas kaku. Gunakan AI agent jika butuh penalaran
              kontekstual dari teks tidak terstruktur.
            </p>
          </div>
        </div>
      ),
      rightTitle: 'Arsitektur RAG & WhatsApp Customer Service',
      rightSubtitle: 'Bab 02 — Implementasi Retrieval-Augmented Generation',
      rightContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Teknik RAG memastikan model bahasa (seperti Gemini 2.5) hanya menjawab berdasarkan dokumen SOP, katalog produk,
            dan kebijakan pengembalian resmi perusahaan Anda, sehingga halusinasi model mendekati nol.
          </p>
          <div className="p-3 rounded-xl bg-zinc-100 border border-zinc-300 font-mono text-[11px] space-y-1">
            <p className="font-bold text-zinc-800">Alur Eksekusi Agen:</p>
            <p>1. User mengirim chat WhatsApp</p>
            <p>2. Vektor pencarian mencari konteks dokumen SOP</p>
            <p>3. Gemini merumuskan jawaban faktual santun</p>
            <p>4. Notifikasi auto-forward ke admin manusia jika komplain</p>
          </div>
        </div>
      ),
    },
    {
      id: 'belajar-marketing',
      leftPageNum: 3,
      rightPageNum: 4,
      leftTitle: 'Buku Panduan: Technical Marketing & CAPI',
      leftSubtitle: 'Bab 03 — Mengatasi Data Loss Akibat iOS 14',
      leftContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Sejak Safari ITP dan pemblokiran pihak ketiga semakin agresif, pixel browser standar kehilangan hingga 35% data
            transaksi. Solusinya adalah menerapkan Meta Conversions API (CAPI) yang mengirimkan sinyal pembelian langsung dari
            server Anda ke Meta Graph API.
          </p>
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
            <span className="font-bold font-mono text-emerald-900">Deduplikasi Event ID:</span>
            <p className="mt-1">
              Setiap event <em>Purchase</em> diberi ID unik yang sama di browser dan server. Algoritma Meta otomatis
              menggabungkan keduanya tanpa mencatat pembelian ganda.
            </p>
          </div>
        </div>
      ),
      rightTitle: 'Server-Side Google Tag Manager (sGTM)',
      rightSubtitle: 'Bab 04 — First-Party Data Collection Terpadu',
      rightContent: (
        <div className="space-y-3.5 text-xs sm:text-[13px] leading-relaxed font-sans text-zinc-900 text-justify">
          <p>
            Dengan sGTM di subdomain sendiri (misal <code>data.bisnisanda.com</code>), cookie dianggap first-party oleh browser.
            Ini memperpanjang masa retensi cookie dan meningkatkan skor Event Match Quality (EMQ) hingga di atas 9.0/10.
          </p>
          <p className="font-bold text-emerald-800">
            Hasil Nyata: Penghematan biaya iklan hingga 20-30% karena mesin AI Meta dapat menargetkan audiens pembeli secara
            presisi.
          </p>
        </div>
      ),
    },
  ];

  const currentSpreads = bookMode === 'perpusnas' ? PERPUSNAS_SPREADS : BELAJAR_SPREADS;
  const currentSpread = currentSpreads[spreadIndex] || currentSpreads[0];

  const handleNextPage = () => {
    if (spreadIndex < currentSpreads.length - 1 && !isFlipping) {
      setFlipDirection('next');
      setIsFlipping(true);
      setTimeout(() => {
        setSpreadIndex((prev) => prev + 1);
        setIsFlipping(false);
      }, 350);
    }
  };

  const handlePrevPage = () => {
    if (spreadIndex > 0 && !isFlipping) {
      setFlipDirection('prev');
      setIsFlipping(true);
      setTimeout(() => {
        setSpreadIndex((prev) => prev - 1);
        setIsFlipping(false);
      }, 350);
    }
  };

  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden shadow-2xl border border-amber-950/40 select-none ${className}`}
      style={{
        // REALISTIC WOODEN DESK TEXTURE (Matches Image 4)
        backgroundColor: '#c8ad88',
        backgroundImage: `
          repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 2px, transparent 2px, transparent 40px),
          repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 30px)
        `,
      }}
    >
      {/* Top Controls Bar */}
      <div className="px-4 sm:px-6 py-3.5 bg-zinc-950/90 text-white border-b border-zinc-800 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span className="font-serif font-bold text-xs sm:text-sm text-zinc-100">
              Flipbook 3D Interaktif
            </span>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center rounded-lg bg-zinc-900 border border-zinc-800 p-0.5 text-xs font-mono">
            <button
              onClick={() => {
                setBookMode('perpusnas');
                setSpreadIndex(1); // Default to Pages 278-279
              }}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                bookMode === 'perpusnas' ? 'bg-amber-600 text-white font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Buku Perpusnas RI (hlm. 278-279)
            </button>
            <button
              onClick={() => {
                setBookMode('belajar');
                setSpreadIndex(0);
              }}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                bookMode === 'belajar' ? 'bg-blue-600 text-white font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Buku Belajar Fitran Dev
            </button>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {bookMode === 'perpusnas' && (
            <a
              href="https://press.perpusnas.go.id/files/flipbooks/1635/mobile/index.html#p=293"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-[11px] font-mono text-zinc-300"
            >
              <span>Buka di Perpusnas RI</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

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
          className="relative max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] rounded-lg overflow-hidden transition-all duration-300"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'center center',
          }}
        >
          {/* Central Book Spine Shadow Crease (Simulates Book Fold) */}
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
            <div className="space-y-3">
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

            {/* Footer: Page Number (Matches Image 4: - 278 -) */}
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
            <div className="space-y-3">
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

            {/* Footer: Page Number (Matches Image 4: - 279 -) */}
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
              : 'bg-zinc-900 border-zinc-700 hover:bg-zinc-800 text-white shadow-sm'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Halaman Sebelumnya</span>
        </button>

        {/* Center: Current Page Spread Badge */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-zinc-400">
            Menampilkan Halaman:
          </span>
          <span className="px-3 py-1 rounded-full bg-amber-950 border border-amber-800/80 text-amber-300 font-mono text-xs font-bold">
            {currentSpread.leftPageNum} - {currentSpread.rightPageNum}
          </span>
          <span className="text-zinc-500 text-xs font-mono">
            ({spreadIndex + 1} dari {currentSpreads.length} lembar)
          </span>
        </div>

        {/* Right: Next Page Button */}
        <button
          onClick={handleNextPage}
          disabled={spreadIndex === currentSpreads.length - 1 || isFlipping}
          className={`px-4 py-2 rounded-xl border text-xs font-bold font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
            spreadIndex === currentSpreads.length - 1
              ? 'opacity-30 border-zinc-800 text-zinc-600 cursor-not-allowed'
              : 'bg-amber-600 border-amber-500 hover:bg-amber-700 text-white shadow-sm'
          }`}
        >
          <span>Halaman Selanjutnya</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
