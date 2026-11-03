import React from 'react';
import {
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Sparkles,
  DollarSign,
  Gauge,
  Target,
  Bot,
  ShieldAlert,
  Zap,
} from 'lucide-react';

interface BusinessDilemmaSectionProps {
  onWhatsAppInquiry: (topic?: string, budget?: string) => void;
  onNavigateServices: () => void;
  className?: string;
}

export const BusinessDilemmaSection: React.FC<BusinessDilemmaSectionProps> = ({
  onWhatsAppInquiry,
  onNavigateServices,
  className = '',
}) => {
  const DILEMMAS = [
    {
      problemIcon: <DollarSign className="w-4 h-4 text-rose-500" />,
      problemTitle: 'Biaya Sewa & Langganan Membengkak',
      problemDesc: 'Vendor lama membebankan biaya sewa lisensi tahunan tersembunyi yang terus naik tanpa penambahan fitur nyata.',
      solutionTitle: '100% Hak Milik Source Code Tanpa Sewa',
      solutionDesc: 'Sistem dan kode sepenuhnya milik Anda. Bebas biaya sewa bulanan dan dapat di-host gratis selamanya di Vercel / Cloudflare.',
    },
    {
      problemIcon: <Gauge className="w-4 h-4 text-amber-500" />,
      problemTitle: 'Website Lambat & Ditinggal Calon Pembeli',
      problemDesc: 'Waktu muat di atas 4 detik membuat 53% calon konsumen menutup halaman sebelum membaca penawaran produk Anda.',
      solutionTitle: 'Kecepatan Muat Kilat <0.8 Detik',
      solutionDesc: 'Dibangun dengan Next.js / Vite performa tinggi dan skor Google Lighthouse 100/100 agar konversi penjualan melonjak.',
    },
    {
      problemIcon: <Target className="w-4 h-4 text-purple-500" />,
      problemTitle: 'Iklan Boncos & Tracking Data Meleset',
      problemDesc: 'Browser pixel gagal mencatat konversi akibat pemblokiran iOS 14+ dan AdBlocker, membuat algoritma iklan buta.',
      solutionTitle: 'Meta CAPI & GA4 Server Tracking Presisi',
      solutionDesc: 'Pengiriman sinyal transaksi langsung dari server dengan Event Match Quality 9.4/10, menurunkan biaya iklan per leads.',
    },
    {
      problemIcon: <Bot className="w-4 h-4 text-blue-500" />,
      problemTitle: 'Chat Menumpuk & CS Slow Response',
      problemDesc: 'Pesan calon pelanggan yang masuk di malam hari atau akhir pekan terabaikan, menyebabkan peluang omzet hilang ke kompetitor.',
      solutionTitle: 'WhatsApp AI Agent Aktif 24/7 Sesuai SOP',
      solutionDesc: 'Bot AI pintar menjawab pertanyaan spesifik, mengecek katalog harga, dan mengirimkan quotation otomatis secara instan.',
    },
  ];

  return (
    <section className={`rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200/90 dark:border-zinc-800 shadow-md p-6 sm:p-10 lg:p-12 overflow-hidden relative ${className}`}>
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8 sm:space-y-10">
        {/* Top Header Tag & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800/80 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-300 font-mono text-[11px] font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>DILEMA &amp; KENDALA BISNIS DIGITAL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
              Bingung Memilih Solusi Digital yang Tepat untuk Bisnis Anda?
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              Banyak pemilik bisnis merasa terjebak dalam biaya vendor yang membengkak, teknologi usang yang lambat, dan sistem yang tidak terintegrasi.
            </p>
          </div>

          <button
            onClick={() => onWhatsAppInquiry('Konsultasi Solusi Dilema Digital Bisnis')}
            className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer shrink-0 self-start md:self-auto"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Diskusi Solusi via WhatsApp</span>
          </button>
        </div>

        {/* 2-Column Showcase: Editorial Visual on Left + Dilemma Resolution on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Column (Col 5) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700/80 shadow-2xl bg-zinc-950">
              <img
                src="/business-dilemma-confused.jpg"
                alt="Pengusaha sedang memikirkan dilema solusi digital bisnis"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />

              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-zinc-700/80 text-white space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[11px] font-bold">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Realita Lapangan:</span>
                </div>
                <p className="text-xs text-zinc-200 leading-snug">
                  <strong className="text-white font-bold">78% Pemilik Bisnis &amp; UMKM</strong> mengeluhkan sistem yang kaku dan biaya langganan membengkak sebelum beralih ke arsitektur mandiri.
                </p>
              </div>
            </div>
          </div>

          {/* Dilemma vs Solution Matrix (Col 7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {DILEMMAS.map((d, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800 space-y-2.5 hover:border-blue-400/60 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/60 flex items-center justify-center shrink-0 mt-0.5">
                      {d.problemIcon}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-zinc-900 dark:text-zinc-100 leading-snug">
                        {d.problemTitle}
                      </h4>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                        {d.problemDesc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800 flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[11px] text-emerald-700 dark:text-emerald-400 leading-tight">
                        {d.solutionTitle}
                      </p>
                      <p className="text-[10px] text-zinc-600 dark:text-zinc-400 mt-0.5 leading-relaxed">
                        {d.solutionDesc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Summary Action Strip */}
            <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>
                  <strong>Solusi Terintegrasi Fitran Dev:</strong> Sekali bayar, 100% hak milik kode, dan garansi resmi 30 hari.
                </span>
              </div>

              <button
                onClick={onNavigateServices}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                <span>Lihat 16 Solusi Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
