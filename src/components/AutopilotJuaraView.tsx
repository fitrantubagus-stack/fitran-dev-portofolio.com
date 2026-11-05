import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  Zap,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  MessageSquare,
  DollarSign,
  Layers,
  Award,
  ChevronRight,
  HelpCircle,
  Smartphone,
  PhoneCall,
  Activity,
  HeartHandshake,
  Check,
  X,
  Sliders,
  Flame,
  Star,
  MapPin,
  Receipt,
  Key,
} from 'lucide-react';

interface AutopilotJuaraViewProps {
  onWhatsAppInquiry: (msg?: string) => void;
  onNavigateBack: () => void;
  themePrefix?: string;
}

export const AutopilotJuaraView: React.FC<AutopilotJuaraViewProps> = ({
  onWhatsAppInquiry,
  onNavigateBack,
  themePrefix = '/corporation',
}) => {
  // Interactive Simulator for Time Saved
  const [dailyInquiries, setDailyInquiries] = useState<number>(35);
  const [ticketValue, setTicketValue] = useState<number>(150000);

  // Computed calculations
  const minutesSavedPerDay = dailyInquiries * 6; // 6 mins per manual chat
  const hoursSavedPerMonth = Math.round((minutesSavedPerDay * 30) / 60);
  const estimatedMonthlySales = Math.round(dailyInquiries * 0.28 * ticketValue * 30);
  const formattedMonthlySales = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(estimatedMonthlySales);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const pillars = [
    {
      num: '01',
      title: '100% Hak Milik Penuh',
      subtitle: 'Bukan Sistem Sewa Platform',
      desc: 'Website, database pelanggan, kode sumber, dan domain resmi sepenuhnya menjadi aset sah bisnis Anda tanpa biaya sewa bulanan yang menjebak.',
      icon: ShieldCheck,
      gradient: 'from-blue-600 to-indigo-700',
      badgeBorder: 'border-blue-200 dark:border-blue-800',
      glow: 'group-hover:border-blue-500/60 group-hover:shadow-blue-500/10',
    },
    {
      num: '02',
      title: 'Kemasan UI/UX Memikat',
      subtitle: 'Standar Internasional',
      desc: 'Tampilan visual berkelas tinggi yang membuat bisnis Anda tampak puluhan kali lipat lebih kredibel di mata investor dan calon konsumen.',
      icon: Sparkles,
      gradient: 'from-amber-500 to-orange-500',
      badgeBorder: 'border-amber-200 dark:border-amber-800',
      glow: 'group-hover:border-amber-500/60 group-hover:shadow-amber-500/10',
    },
    {
      num: '03',
      title: 'Titik Lokasi Terverifikasi',
      subtitle: 'Dominasi Google Maps',
      desc: 'Optimasi akun Google Bisnisku hingga bintang lima agar toko atau kantor fisik Anda selalu direkomendasikan saat orang mencari produk terdekat.',
      icon: MapPin,
      gradient: 'from-rose-500 to-red-600',
      badgeBorder: 'border-rose-200 dark:border-rose-800',
      glow: 'group-hover:border-rose-500/60 group-hover:shadow-rose-500/10',
    },
    {
      num: '04',
      title: 'CS AI WhatsApp 24/7',
      subtitle: 'Menjawab & Closing Otomatis',
      desc: 'Asisten virtual cerdas yang memahami katalog, menghitung ongkir, menjawab pertanyaan tengah malam, dan mengirim link bayar seketika.',
      icon: Bot,
      gradient: 'from-emerald-500 to-green-600',
      badgeBorder: 'border-emerald-200 dark:border-emerald-800',
      glow: 'group-hover:border-emerald-500/60 group-hover:shadow-emerald-500/10',
    },
    {
      num: '05',
      title: 'Otomasi Struk & Kasir',
      subtitle: 'Format Pesanan Rapi',
      desc: 'Pesanan tersusun rapi langsung ke WhatsApp kitchen/gudang dan terhubung ke printer thermal tanpa perlu dicatat manual di buku kertas.',
      icon: Receipt,
      gradient: 'from-purple-600 to-violet-700',
      badgeBorder: 'border-purple-200 dark:border-purple-800',
      glow: 'group-hover:border-purple-500/60 group-hover:shadow-purple-500/10',
    },
    {
      num: '06',
      title: 'Serah Terima Kunci',
      subtitle: 'Dashboard Kontrol Simpel',
      desc: 'Anda memegang kendali penuh. Kami sediakan panel admin praktis di smartphone untuk cek omset, update harga, dan pantau stok barang.',
      icon: Key,
      gradient: 'from-cyan-500 to-teal-600',
      badgeBorder: 'border-cyan-200 dark:border-cyan-800',
      glow: 'group-hover:border-cyan-500/60 group-hover:shadow-cyan-500/10',
    },
  ];

  return (
    <div className="space-y-14 animate-fade-in pb-16">
      {/* ========================================================================= */}
      {/* 1. TOP BREADCRUMB & BACK BUTTON                                           */}
      {/* ========================================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <button
          onClick={onNavigateBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-lime-700 dark:hover:text-lime-400 transition-colors cursor-pointer group"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Katalog Semua Layanan</span>
        </button>

        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <a href={`${themePrefix}`} className="hover:underline">Beranda</a>
          <span>/</span>
          <a href={`${themePrefix}/layanan`} className="hover:underline">Layanan</a>
          <span>/</span>
          <span className="text-lime-600 dark:text-lime-400 font-bold">Inovasi Autopilot</span>
        </nav>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO: VIBRANT LIME GREEN INSPIRED BY DUCOK & PUCOK JUARA               */}
      {/* ========================================================================= */}
      <div className="rounded-3xl bg-linear-to-br from-[#84CC16] via-[#65A30D] to-[#4D7C0F] text-slate-950 p-6 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
        {/* Soft decorative glow circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-yellow-300/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-lime-200/40 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: Bold Juara Headline & Badges */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black text-lime-400 font-mono text-xs font-black tracking-wide shadow-md">
                <Flame className="w-4 h-4 fill-lime-400 text-lime-400" />
                <span>FORMULA BISNIS JUARA 2026</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/90 text-lime-900 font-mono text-xs font-extrabold shadow-xs">
                100% Hak Milik Tanpa Fee Bulanan
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-black text-slate-950 tracking-tight leading-[1.12]">
              Bisnis Jalan Terus, Penjualan Masuk Otomatis Tanpa Bikin Pusing!
            </h1>

            <p className="text-sm sm:text-base text-slate-900/90 font-medium leading-relaxed max-w-xl">
              Tinggalkan cara lama yang menguras tenaga. Sistem Digital Autopilot mengintegrasikan website berkecepatan tinggi, agen AI customer service WhatsApp 24 jam nonstop, dan otomatisasi checkout sehingga bisnis Anda tetap menghasilkan omset bahkan saat Anda sedang istirahat.
            </p>

            {/* Quick Hero Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-xs">
                <div className="font-mono text-lg font-black text-slate-950">24 Jam</div>
                <div className="text-[11px] font-bold text-slate-800">Respon Chat &lt;3 Detik</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-xs">
                <div className="font-mono text-lg font-black text-slate-950">0% Potongan</div>
                <div className="text-[11px] font-bold text-slate-800">Margin Laba 100% Utuh</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-xs col-span-2 sm:col-span-1">
                <div className="font-mono text-lg font-black text-slate-950">Teruji</div>
                <div className="text-[11px] font-bold text-slate-800">Cocok UMKM &amp; Kuliner</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onWhatsAppInquiry('Halo mas Fitran, saya tertarik bangun Sistem Bisnis Digital Autopilot Juara untuk bisnis saya!')}
                className="px-6 py-4 rounded-2xl bg-black hover:bg-zinc-900 text-lime-300 font-black text-sm flex items-center gap-3 shadow-xl hover:scale-[1.02] transition-all cursor-pointer group"
              >
                <PhoneCall className="w-4 h-4 text-lime-400" />
                <span>Konsultasi Sistem Autopilot Sekarang</span>
                <ArrowRight className="w-4 h-4 text-lime-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#perbandingan-juara"
                className="px-5 py-4 rounded-2xl bg-white/90 hover:bg-white text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Lihat Perbandingan Cara Kerja</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Human Photo (No text inside image, 100% natural) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-white">
              <img
                src="/img-autopilot-hero.jpg"
                alt="Pengusaha memantau sistem autopilot penjualan online secara otomatis dari laptop dan smartphone"
                loading="lazy"
                decoding="async"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-white">
                <div className="flex items-center gap-2 text-lime-400 font-mono text-xs font-bold mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Garansi Sistem Siap Pakai</span>
                </div>
                <p className="text-xs text-zinc-200 font-medium">
                  Pendampingan langsung hingga tim Anda mahir mengelola dashboard kendali mandiri.
                </p>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-4 -right-3 px-4 py-2 rounded-2xl bg-yellow-300 text-slate-950 border-2 border-black font-black text-xs shadow-xl rotate-3">
              ⚡ BEBAS PUSING 2026!
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. 6 BULATAN PILAR JUARA (INSPIRED BY DUCOK 6 ICONS)                       */}
      {/* ========================================================================= */}
      <div className="space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-100 dark:bg-lime-950 text-lime-800 dark:text-lime-300 font-mono text-xs font-bold uppercase">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>6 Pilar Arsitektur Autopilot Juara</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white">
            Semua yang Dibutuhkan Agar Bisnis Anda Berjalan Mandiri
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Kombinasi teknologi canggih dan kemudahan praktis tanpa bahasa teknis yang membingungkan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-xs hover:shadow-xl transition-all group flex flex-col justify-between space-y-4 ${item.glow}`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    {/* Ducok & Pucok Juara Style Circular Badge with Rich Gradient Icon */}
                    <div className="w-14 h-14 rounded-full bg-slate-50 dark:bg-zinc-800/90 border-2 border-zinc-200/80 dark:border-zinc-700 shadow-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${item.gradient} text-white shadow-sm`}>
                        <Icon className="w-5 h-5 text-white stroke-[2.3]" />
                      </div>
                    </div>
                    <span className="font-mono text-2xl font-black text-zinc-300 dark:text-zinc-700">
                      {item.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-zinc-950 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-mono font-bold text-lime-700 dark:text-lime-400 block mb-1">
                      {item.subtitle}
                    </span>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs font-bold text-lime-700 dark:text-lime-400">
                  <Check className="w-4 h-4 text-lime-600" />
                  <span>Siap diimplementasikan</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. COMPARISON: AUTOPILOT VS CARA TRADISIONAL (REPOT & BOROS)              */}
      {/* ========================================================================= */}
      <div id="perbandingan-juara" className="space-y-6 pt-6 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-mono text-xs font-bold uppercase">
            <span>Uji Perbandingan Nyata</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 dark:text-white">
            Autopilot vs Usaha Sendiri (Cara Tradisional)
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Lihat perbedaan signifikan antara mengelola semuanya secara manual dibanding menggunakan sistem otomatisasi Fitran Dev.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Cara Tradisional / Usaha Sendiri (Merah / Abu) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-red-50/50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900/50 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-red-200/80 dark:border-red-900/60">
              <div>
                <span className="font-mono text-xs font-bold text-red-600 uppercase">Cara Lama</span>
                <h3 className="text-xl font-black text-zinc-950 dark:text-white">Usaha Manual (Repot &amp; Boros)</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/60 text-red-600 dark:text-red-300 flex items-center justify-center font-black">
                <X className="w-6 h-6" />
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Balas Chat Berjam-jam:</strong> Admin kelelahan mengetik ulang harga, menu, dan ongkir ke ratusan chat WhatsApp setiap hari.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Margin Habis untuk Komisi:</strong> Terpaksa bayar potongan 20-35% ke aplikasi marketplace atau ojek online.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Mati Gaya Saat Admin Libur:</strong> Pelanggan yang chat di malam hari atau hari libur tidak terlayani dan pindah ke kompetitor.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Data Pelanggan Hilang:</strong> Riwayat nomor pelanggan tercecer di banyak handphone dan tidak pernah di-broadcast kembali.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Biaya Sewa Bulanan Membengkak:</strong> Terjebak langganan software kasir jutaan rupiah per tahun yang fiturnya kaku.</span>
              </li>
            </ul>

            <div className="p-3.5 rounded-2xl bg-red-100/70 dark:bg-red-900/40 text-red-900 dark:text-red-200 text-xs font-semibold text-center">
              Hasil: Owner kelelahan mengurus teknis operasional harian, bisnis jalan di tempat.
            </div>
          </div>

          {/* Card 2: Sistem Autopilot Fitran Dev (Hijau Lime Juara) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-lime-50/70 dark:bg-lime-950/30 border-2 border-lime-400 dark:border-lime-500 space-y-5 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-lime-500 text-black font-mono text-[10px] font-black uppercase rounded-bl-xl">
              Rekomendasi 2026
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-lime-300 dark:border-lime-800">
              <div>
                <span className="font-mono text-xs font-bold text-lime-700 dark:text-lime-400 uppercase">Solusi Fitran Dev</span>
                <h3 className="text-xl font-black text-zinc-950 dark:text-white">Bisnis Digital Autopilot Juara</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-lime-400 text-black flex items-center justify-center font-black">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5 stroke-[3]" />
                <span><strong>Respon Otomatis 24 Jam:</strong> AI WhatsApp langsung membalas pertanyaan dalam 3 detik, lengkap dengan katalog dan total harga.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5 stroke-[3]" />
                <span><strong>100% Margin Masuk Rekening Sendiri:</strong> Pesanan delivery dan e-commerce langsung cair ke rekening bank Anda tanpa potongan fee.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5 stroke-[3]" />
                <span><strong>Closing Otomatis Saat Anda Tidur:</strong> Tamu bisa pilih varian, hitung ongkir otomatis, dan bayar lewat QRIS kapan saja.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5 stroke-[3]" />
                <span><strong>Database Tersimpan Rapi:</strong> Nomor WhatsApp pembeli tersimpan otomatis untuk promosi berkala satu klik.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5 stroke-[3]" />
                <span><strong>Beli Sekali Jadi Hak Milik:</strong> Tanpa langganan platform bulanan. Anda memiliki kontrol penuh atas aset digital Anda.</span>
              </li>
            </ul>

            <div className="p-3.5 rounded-2xl bg-lime-400 text-black text-xs font-black text-center shadow-xs">
              Hasil: Owner bebas fokus memperluas cabang dan inovasi produk, sistem yang bekerja!
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE CALCULATOR: SIMULATOR EFISIENSI AUTOPILOT                   */}
      {/* ========================================================================= */}
      <div className="rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 p-6 sm:p-10 space-y-8 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-mono text-xs font-bold uppercase mb-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>Simulator Penghematan Waktu &amp; Potensi Penjualan</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white">
              Hitung Berapa Jam dan Omset yang Diselamatkan Sistem Autopilot
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              Geser penggeser di bawah ini sesuai estimasi jumlah pesan atau calon pembeli harian Anda.
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-2xl bg-lime-100 dark:bg-lime-950/60 border border-lime-300 dark:border-lime-800 text-center">
            <span className="text-[10px] font-mono uppercase font-bold text-lime-900 dark:text-lime-300 block">Waktu Tersimpan per Bulan</span>
            <span className="text-2xl sm:text-3xl font-black text-lime-700 dark:text-lime-400 font-mono">
              ~{hoursSavedPerMonth} Jam
            </span>
            <span className="text-[10px] text-zinc-500 block">Setara 1 staf admin full-time</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          {/* Slider 1: Jumlah Pertanyaan Chat / Hari */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-zinc-700 dark:text-zinc-300">
              <span>Estimasi Chat / Calon Pembeli per Hari:</span>
              <span className="font-mono text-sm px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white">
                {dailyInquiries} Chat / Hari
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="200"
              step="5"
              value={dailyInquiries}
              onChange={(e) => setDailyInquiries(Number(e.target.value))}
              className="w-full accent-lime-600 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
              <span>5 Chat</span>
              <span>100 Chat</span>
              <span>200+ Chat</span>
            </div>
          </div>

          {/* Slider 2: Rata-rata Nilai Transaksi (Basket Size) */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-zinc-700 dark:text-zinc-300">
              <span>Rata-Rata Nilai Belanja per Transaksi:</span>
              <span className="font-mono text-sm px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white">
                Rp {ticketValue.toLocaleString('id-ID')}
              </span>
            </div>
            <input
              type="range"
              min="20000"
              max="1000000"
              step="10000"
              value={ticketValue}
              onChange={(e) => setTicketValue(Number(e.target.value))}
              className="w-full accent-lime-600 h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
              <span>Rp 20.000</span>
              <span>Rp 500.000</span>
              <span>Rp 1.000.000</span>
            </div>
          </div>
        </div>

        {/* Calculation Result Summary Bar */}
        <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left items-center">
          <div>
            <span className="text-[10px] font-mono uppercase text-zinc-400 block font-bold">Respon Cepat AI</span>
            <span className="text-sm font-bold text-zinc-900 dark:text-white">24/7 Tanpa Delay</span>
            <p className="text-[11px] text-zinc-500">Mencegah pelanggan beralih toko</p>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase text-zinc-400 block font-bold">Potensi Transaksi Bulanan</span>
            <span className="text-base font-black text-lime-600 dark:text-lime-400 font-mono">
              {formattedMonthlySales}
            </span>
            <p className="text-[11px] text-zinc-500">Estimasi konversi tertib 28%</p>
          </div>

          <div className="sm:text-right">
            <button
              onClick={() => onWhatsAppInquiry(`Halo mas Fitran, saya mencoba kalkulator autopilot dengan ${dailyInquiries} chat/hari dan rata-rata order Rp ${ticketValue.toLocaleString('id-ID')}. Saya ingin konsultasi sistem autopilot!`)}
              className="px-4 py-2.5 rounded-xl bg-lime-500 hover:bg-lime-600 text-black font-black text-xs inline-flex items-center gap-2 cursor-pointer transition-all shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Wujudkan Sistem Ini Sekarang</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. FAQ & CONSULTATION CTA                                                 */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: FAQ Accordion */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-xl font-black text-zinc-950 dark:text-white">
            Pertanyaan Umum Seputar Sistem Autopilot
          </h3>

          <div className="space-y-3">
            {[
              {
                q: 'Apakah saya tetap bisa membalas chat secara manual jika mau?',
                a: 'Tentu saja bisa. Sistem AI WhatsApp bekerja berdampingan dengan Anda atau staf admin. Jika ada pertanyaan rumit atau pelanggan ingin berbicara langsung dengan pemilik, Anda bisa mengambil alih obrolan kapan saja dengan mudah.'
              },
              {
                q: 'Apakah nomor WhatsApp yang digunakan harus nomor baru?',
                a: 'Tidak harus. Anda bisa menggunakan nomor WhatsApp bisnis yang sudah ada, atau kami bantu daftarkan nomor resmi baru khusus customer service agar terpisah dari chat pribadi Anda.'
              },
              {
                q: 'Berapa lama proses instalasi dan serah terima sistem autopilot?',
                a: 'Proses perancangan website, integrasi AI katalog, penyambungan payment gateway, dan training penggunaan dashboard selesai dalam waktu 7 hingga 14 hari kerja.'
              },
              {
                q: 'Apakah ada biaya sewa atau langganan tiap bulan?',
                a: 'Tidak ada biaya sewa platform bulanan! Seluruh sistem dan website adalah hak milik penuh Anda. Anda hanya perlu memperpanjang sewa domain dan server hosting tahunan dengan biaya sangat terjangkau.'
              }
            ].map((faqItem, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 hover:text-lime-600 dark:hover:text-lime-400 cursor-pointer"
                >
                  <span>{faqItem.q}</span>
                  <ChevronRight
                    className={`w-4 h-4 text-zinc-400 transition-transform ${activeFaq === idx ? 'rotate-90 text-lime-600' : ''}`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/60 pt-3">
                    {faqItem.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Direct Consultation Card (Adaptive Light/Dark Mode) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-linear-to-br from-lime-50 via-emerald-50/50 to-white dark:from-zinc-900 dark:to-black text-zinc-950 dark:text-white space-y-6 shadow-xl border border-lime-300/80 dark:border-zinc-800">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-lime-400 text-black font-mono text-[11px] font-black uppercase border border-lime-500 shadow-xs">
              Konsultasi Strategis 1-on-1
            </span>
            <h4 className="text-xl font-black text-zinc-950 dark:text-white">
              Siap Mengubah Bisnis Anda Menjadi Mesin Penjual Otomatis?
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Jadwalkan sesi diskusi gratis dengan Tubagus Fitran Badruttamam. Kami akan memetakan alur bisnis Anda dan merancang sistem autopilot yang paling efisien.
            </p>
          </div>

          <div className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 dark:text-lime-400 shrink-0" />
              <span>Audit alur penjualan saat ini secara cuma-cuma</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 dark:text-lime-400 shrink-0" />
              <span>Simulasi demo live AI WhatsApp sebelum deal</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 dark:text-lime-400 shrink-0" />
              <span>Perhitungan estimasi pengembalian modal (ROI)</span>
            </div>
          </div>

          <button
            onClick={() => onWhatsAppInquiry('Halo mas Fitran, saya ingin konsultasi 1-on-1 untuk merancang Sistem Bisnis Autopilot!')}
            className="w-full py-4 rounded-2xl bg-lime-400 hover:bg-lime-300 text-black font-black text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-lime-400/20 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Chat WhatsApp Sekarang (Fast Response)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
