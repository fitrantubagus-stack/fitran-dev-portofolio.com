import React, { useState } from 'react';
import {
  Server,
  ShieldCheck,
  Globe,
  Code2,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  Smartphone,
  Sparkles,
  Zap,
  Lock,
  ArrowRight,
  Calculator,
  HardDrive,
  BarChart3,
  Bot,
  Network,
  Share2,
} from 'lucide-react';
import { FitranPixelIcon } from './FitranPixelLogo';

interface MateriVisualProps {
  slug: string;
  onConsultation?: (topic: string) => void;
}

export const MateriArticleVisual: React.FC<MateriVisualProps> = ({
  slug,
  onConsultation,
}) => {
  // Calculator state for website cost breakdown
  const [selectedPlan, setSelectedPlan] = useState<'kilat' | 'bisnis' | 'kustom'>('kilat');
  const [includeDomain, setIncludeDomain] = useState<boolean>(true);
  const [maintenanceMonths, setMaintenanceMonths] = useState<number>(0);

  // 1. MATERI: BIAYA PEMBUATAN WEBSITE
  if (slug === 'biaya-pembuatan-website') {
    const planBasePrice = {
      kilat: 500000,
      bisnis: 1500000,
      kustom: 3500000,
    };
    const domainCost = includeDomain ? 150000 : 0;
    const maintenanceCost = maintenanceMonths * 100000;
    const totalEstimate = planBasePrice[selectedPlan] + domainCost + maintenanceCost;

    return (
      <div className="space-y-8 my-8 select-none">
        {/* INFOGRAPHIC BANNER 1: 4 KOMPONEN STRUKTURAL BIAYA WEBSITE */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Infografis Materi Edukasi</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Anatomi &amp; Breakdown Biaya Riil Pembuatan Website
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <FitranPixelIcon variant="orange" size={24} />
              <span>Transparansi fitran.dev</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-3xl">
            Di balik layar sebuah website profesional, ada 4 komponen infrastruktur yang menentukan anggaran. Pahami ke mana setiap rupiah Anda dialokasikan agar tidak membayar mahal untuk hal yang sebenarnya gratis.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {/* Komponen 1: Domain */}
            <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-white">1. Nama Domain Resmi</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Alamat resmi bisnis Anda (.com, .id, .co.id). Biaya sewa tahunan resmi ke registrar PANDI atau ICANN.
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-800/80">
                <span className="font-mono text-xs font-bold text-blue-400">± Rp 150.000 / th</span>
                <p className="text-[10px] text-zinc-500">Hak milik akun atas nama Anda</p>
              </div>
            </div>

            {/* Komponen 2: Cloud Hosting Serverless */}
            <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-white">2. Hosting Cloud Edge</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Penyimpanan berkas dan eksekusi komputasi (Vercel, Cloudflare Pages, VPS). Cepat dan tahan lonjakan trafik.
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-800/80">
                <span className="font-mono text-xs font-bold text-emerald-400">Rp 0 – 200rb / bln</span>
                <p className="text-[10px] text-zinc-500">Tier serverless gratis untuk awal</p>
              </div>
            </div>

            {/* Komponen 3: Keamanan SSL & Anti-DDoS */}
            <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-white">3. Sertifikat SSL HTTPS</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Enkripsi gembok hijau HTTPS &amp; proteksi DNS dari serangan hacker. Di era modern, ini gratis dari Let's Encrypt / Cloudflare.
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-800/80">
                <span className="font-mono text-xs font-bold text-purple-400">Rp 0 (Gratis Penuh)</span>
                <p className="text-[10px] text-zinc-500">Jangan mau dibebankan biaya SSL!</p>
              </div>
            </div>

            {/* Komponen 4: Source Code & Rekayasa */}
            <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-white">4. Rekayasa &amp; Source Code</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                  Waktu dan keterampilan developer menyusun UI responsif, optimasi skor 95+ Lighthouse, dan penulisan kode bersih.
                </p>
              </div>
              <div className="pt-3 border-t border-zinc-800/80">
                <span className="font-mono text-xs font-bold text-amber-400">100% Hak Milik Anda</span>
                <p className="text-[10px] text-zinc-500">Repo GitHub diserahterimakan</p>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE SIMULATOR: KALKULATOR BIAYA REALISTIS */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111319] border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#1E3A8A] dark:text-blue-400 font-mono text-[10px] font-bold uppercase mb-1">
                <Calculator className="w-3.5 h-3.5" />
                <span>Simulasi Anggaran Interaktif</span>
              </div>
              <h4 className="font-extrabold text-lg sm:text-xl text-zinc-950 dark:text-white">
                Pilih Kategori Kebutuhan Bisnis Anda
              </h4>
            </div>
            <p className="text-xs text-zinc-400 font-mono">Estimasi transparan tanpa markup tersembunyi</p>
          </div>

          {/* Option Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setSelectedPlan('kilat')}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedPlan === 'kilat'
                  ? 'border-[#1E3A8A] bg-blue-50/50 dark:bg-blue-950/30 ring-2 ring-[#1E3A8A]/20'
                  : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60 hover:bg-zinc-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400">Paling Hemat</span>
                <span className="font-mono text-xs font-black text-[#1E3A8A] dark:text-blue-400">Rp 500rb</span>
              </div>
              <p className="font-bold text-sm text-zinc-950 dark:text-white mt-1">Landing Page Kilat 24 Jam</p>
              <p className="text-[11px] text-zinc-500 mt-1">1 halaman fokus konversi WhatsApp. Cocok untuk UMKM, kuliner, dan event.</p>
            </button>

            <button
              onClick={() => setSelectedPlan('bisnis')}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedPlan === 'bisnis'
                  ? 'border-[#1E3A8A] bg-blue-50/50 dark:bg-blue-950/30 ring-2 ring-[#1E3A8A]/20'
                  : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60 hover:bg-zinc-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400">Rekomendasi</span>
                <span className="font-mono text-xs font-black text-[#1E3A8A] dark:text-blue-400">Rp 1,5 Juta</span>
              </div>
              <p className="font-bold text-sm text-zinc-950 dark:text-white mt-1">Company Profile Pro</p>
              <p className="text-[11px] text-zinc-500 mt-1">Multi-page (Tentang, Layanan, Portofolio, Kontak) + integrasi Meta CAPI &amp; SEO.</p>
            </button>

            <button
              onClick={() => setSelectedPlan('kustom')}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedPlan === 'kustom'
                  ? 'border-[#1E3A8A] bg-blue-50/50 dark:bg-blue-950/30 ring-2 ring-[#1E3A8A]/20'
                  : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60 hover:bg-zinc-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase text-purple-600 dark:text-purple-400">Enterprise</span>
                <span className="font-mono text-xs font-black text-[#1E3A8A] dark:text-blue-400">Rp 3,5 Juta+</span>
              </div>
              <p className="font-bold text-sm text-zinc-950 dark:text-white mt-1">Web App &amp; AI Automation</p>
              <p className="text-[11px] text-zinc-500 mt-1">Database kustom, sistem login admin, bot WhatsApp AI RAG, &amp; dashboard analytics.</p>
            </button>
          </div>

          {/* Add-on toggles */}
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-zinc-800 dark:text-zinc-200">
              <input
                type="checkbox"
                checked={includeDomain}
                onChange={(e) => setIncludeDomain(e.target.checked)}
                className="rounded border-zinc-300 text-[#1E3A8A] focus:ring-0 w-4 h-4"
              />
              <span>Sertakan Pendaftaran Domain .com / .id Resmi (+Rp 150.000 / th)</span>
            </label>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span>Maintenance:</span>
              <select
                value={maintenanceMonths}
                onChange={(e) => setMaintenanceMonths(Number(e.target.value))}
                className="px-2 py-1 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs font-semibold"
              >
                <option value={0}>Mandiri (Rp 0)</option>
                <option value={3}>3 Bulan (+Rp 300rb)</option>
                <option value={6}>6 Bulan (+Rp 600rb)</option>
                <option value={12}>1 Tahun (+Rp 1,2jt)</option>
              </select>
            </div>
          </div>

          {/* Result Calculation Bar */}
          <div className="p-5 rounded-2xl bg-[#1E3A8A] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
            <div>
              <p className="text-[11px] font-mono text-blue-200 uppercase tracking-wider">Total Estimasi Investasi Awal:</p>
              <p className="text-2xl sm:text-3xl font-black font-mono">
                Rp {totalEstimate.toLocaleString('id-ID')}
              </p>
              <p className="text-xs text-blue-100 mt-0.5">Sudah termasuk 100% serah terima source code, tanpa sewa tahunan berantai.</p>
            </div>

            <button
              onClick={() => onConsultation?.(`Konsultasi Paket ${selectedPlan.toUpperCase()} (Estimasi Rp ${totalEstimate.toLocaleString('id-ID')})`)}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md self-start sm:self-auto shrink-0"
            >
              <span>Kunci Paket Ini via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. MATERI: APA ITU AI AGENT
  if (slug === 'apa-itu-ai-agent') {
    return (
      <div className="space-y-6 my-8 select-none">
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-purple-400" />
              <span className="font-mono text-xs font-bold text-purple-300 uppercase">
                Arsitektur Rekayasa AI Agent Otonom
              </span>
            </div>
            <span className="font-mono text-[10px] text-zinc-500">fitran.dev Architecture Spec</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
              <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase">1. Perception Layer</span>
              <p className="font-bold text-white">Input Multi-Kanal</p>
              <p className="text-[11px] text-zinc-400">Pesan WhatsApp masuk, formulir leads website, atau webhook e-commerce.</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
              <span className="font-mono text-[10px] text-purple-400 font-bold uppercase">2. Reasoning Core</span>
              <p className="font-bold text-white">LLM + Vector RAG</p>
              <p className="text-[11px] text-zinc-400">Claude 3.7 / Gemini 2.0 menganalisis intensi dengan referensi dokumen bisnis Anda.</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
              <span className="font-mono text-[10px] text-blue-400 font-bold uppercase">3. Action Execution</span>
              <p className="font-bold text-white">Tool Calling API</p>
              <p className="text-[11px] text-zinc-400">Mengecek database stok PostgreSQL, generate invoice PDF, atau booking jadwal.</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
              <span className="font-mono text-[10px] text-amber-400 font-bold uppercase">4. Human Handover</span>
              <p className="font-bold text-white">Eskalasi Cerdas</p>
              <p className="text-[11px] text-zinc-400">Bila pelanggan mengajukan komplain kritis, AI otomatis mengalihkan obrolan ke staf manusia.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. MATERI: CARA TRACKING KONVERSI META ADS (CAPI)
  if (slug === 'cara-tracking-konversi-meta-ads') {
    return (
      <div className="space-y-6 my-8 select-none">
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <Network className="w-5 h-5 text-blue-400" />
              <span className="font-mono text-xs font-bold text-blue-300 uppercase">
                Perbandingan: Browser Pixel vs Server-Side CAPI
              </span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400">Deduplikasi Event 48 Jam</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-900/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-rose-400 uppercase">Metode Usang (Client-Side)</span>
                <span className="text-[10px] font-mono text-rose-300 font-bold">Data Hilang ±30%</span>
              </div>
              <h4 className="font-bold text-sm text-white">Browser Pixel Standar</h4>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Tembakan pixel dieksekusi di browser pengunjung. Sangat rentan diblokir oleh AdBlocker, ekstensi Brave, serta pembatasan cookie Safari ITP (Intelligent Tracking Prevention).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-900/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase">Standar Modern fitran.dev</span>
                <span className="text-[10px] font-mono text-emerald-300 font-bold">Akurasi 98%+</span>
              </div>
              <h4 className="font-bold text-sm text-white">Server-Side CAPI + Deduplikasi</h4>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Sinyal transaksi dikirim langsung dari backend cloud (Edge Server) menuju API Meta Graph. Tidak dapat diblokir oleh ekstensi browser dan aman secara regulasi privasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. MATERI: CODING DARI HP DENGAN TERMIUS & TAILSCALE
  if (slug === 'coding-dari-hp-remote-ssh-termius-tailscale') {
    return (
      <div className="space-y-6 my-8 select-none">
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-amber-400" />
              <span className="font-mono text-xs font-bold text-amber-300 uppercase">
                Alur Remote Zero-Trust Terminal (HP ke Cloud VPS)
              </span>
            </div>
            <span className="font-mono text-[10px] text-zinc-500">Port 22 Tertutup untuk Publik</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
              <span className="font-mono text-[10px] text-amber-400 font-bold uppercase">1. Perangkat Ponsel</span>
              <p className="font-bold text-white">Aplikasi Termius (iOS/Android)</p>
              <p className="text-[11px] text-zinc-400">Kunci otentikasi SSH Ed25519 disimpan secara aman dalam biometric enclave perangkat.</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
              <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase">2. Tailscale Mesh Network</span>
              <p className="font-bold text-white">Enkripsi WireGuard P2P</p>
              <p className="text-[11px] text-zinc-400">Komunikasi terenkripsi penuh tanpa membuka port SSH ke internet publik. Bebas dari serangan brute-force bot.</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
              <span className="font-mono text-[10px] text-blue-400 font-bold uppercase">3. Cloud VPS Linux</span>
              <p className="font-bold text-white">Docker + Caddy + Git CI/CD</p>
              <p className="text-[11px] text-zinc-400">Server menjalankan kontainer aplikasi web dengan isolasi proses dan reload sertifikat otomatis.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
