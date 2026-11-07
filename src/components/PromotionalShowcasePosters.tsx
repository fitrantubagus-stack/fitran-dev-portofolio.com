import React, { useState } from 'react';
import {
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  Lock,
  Server,
  Cpu,
  Database,
  Terminal,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Shield,
  Smartphone,
  Laptop,
  Check,
  TrendingUp,
  Award,
  Globe,
  Share2,
} from 'lucide-react';
import { FitranPixelLogo, FitranPixelIcon, TealBot, BlueBot, OrangeBot } from './FitranPixelLogo';

interface PromotionalPosterProps {
  onWhatsAppInquiry: (serviceName?: string, price?: string) => void;
  className?: string;
}

/**
 * 1. PROMO POSTER: JASA WEBSITE KILAT 24-48 JAM Rp 500.000
 * Desain nyata, realistis, lengkap dengan browser preview & kartu skor Google Lighthouse 100/100
 */
export const WebsiteKilatPromoPoster: React.FC<PromotionalPosterProps> = ({
  onWhatsAppInquiry,
  className = '',
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-linear-to-br from-white via-slate-50 to-emerald-50/30 dark:from-zinc-950 dark:via-[#111319] dark:to-zinc-950 text-zinc-950 dark:text-white border border-zinc-200/90 dark:border-zinc-800 shadow-xl p-6 sm:p-10 select-none ${className}`}
    >
      {/* Background Decorative Subtle Rings */}
      <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full border border-blue-500/10 pointer-events-none" />
      <div className="absolute right-20 -bottom-20 w-80 h-80 rounded-full border border-emerald-500/10 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* SISI KIRI: Headline Penawaran Nyata & Deliverable */}
        <div className="lg:col-span-7 space-y-5">
          {/* Top Brand & Promo Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700/80 text-emerald-800 dark:text-emerald-300 font-mono text-[11px] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>PROMO RESMI · UMKM &amp; PORTOFOLIO PROFESIONAL</span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-mono text-[10px] font-bold">
              GARANSI 30 HARI
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-tight">
              Website Online Kilat <br />
              <span className="text-emerald-600 dark:text-emerald-400">24 - 48 Jam Siap Pakai</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
              Solusi landing page performa tinggi tanpa ribet: langsung online di edge CDN global, terhubung tombol
              pemesanan WhatsApp otomatis, dan kepemilikan 100% full source code tanpa biaya sewa tahunan tersembunyi.
            </p>
          </div>

          {/* Pricing Highlight Pill */}
          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-wrap items-baseline gap-3">
            <div>
              <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase font-semibold">Investasi Promo Terbatas:</p>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl sm:text-4xl font-black font-mono text-zinc-950 dark:text-white">Rp 500.000</span>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 line-through">Rp 1.200.000</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/80 text-emerald-800 dark:text-emerald-300 font-mono text-[10px] font-bold">
                  HEMAT 58%
                </span>
              </div>
            </div>
          </div>

          {/* Real Deliverables Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700 dark:text-zinc-300 pt-1">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Gratis Hosting Selamanya di Vercel Edge</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Setup Domain Sendiri (.com / .id)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Kecepatan Load di Bawah 0.8 Detik</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>100% Hak Milik Source Code Milik Anda</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onWhatsAppInquiry('Promo Website Kilat 24 Jam', 'Rp 500.000')}
              className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all cursor-pointer group"
            >
              <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Klaim Promo via WhatsApp Sekarang</span>
            </button>
            <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              *Hanya untuk slot pengerjaan minggu ini
            </span>
          </div>
        </div>

        {/* SISI KANAN: Realistis UI Preview + Kartu Google Lighthouse 100/100 */}
        <div className="lg:col-span-5 space-y-4">
          {/* Browser Mockup Window */}
          <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 overflow-hidden shadow-lg">
            {/* Browser Top Chrome */}
            <div className="px-3.5 py-2.5 bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-3 py-0.5 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 shadow-xs">
                <Lock className="w-2.5 h-2.5 text-emerald-500" />
                <span>https://bisnis-klien.com</span>
              </div>
              <div className="w-6" />
            </div>

            {/* Browser Body Preview (Real UI) */}
            <div className="p-4 bg-slate-50/70 dark:bg-zinc-950/60 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TealBot size={16} />
                  <span className="font-bold text-xs text-zinc-900 dark:text-white">Bisnis Unggulan</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 text-[9px] font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                  Online 24/7
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 space-y-1.5 shadow-xs">
                <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase font-semibold">Headline Bisnis:</p>
                <p className="text-xs font-extrabold text-zinc-900 dark:text-white">Layanan Terbaik &amp; Terpercaya untuk Kebutuhan Anda</p>
                <div className="pt-1 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[10px] font-bold">
                    Pesan via WhatsApp
                  </span>
                  <span className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400">Respon &lt; 5 Menit</span>
                </div>
              </div>
            </div>
          </div>

          {/* REALISTIC GOOGLE LIGHTHOUSE 100/100 AUDIT SCORECARD */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-900/95 border border-zinc-800 shadow-xl space-y-2.5">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-zinc-200 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span>Google Lighthouse Audit</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-bold">Lolos Uji Sempurna</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
              <div className="p-2 rounded-xl bg-zinc-950 border border-emerald-900/60 flex flex-col items-center justify-between min-h-[72px] sm:min-h-[82px]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-emerald-500 mx-auto flex items-center justify-center font-mono font-black text-xs text-emerald-400">
                  100
                </div>
                <p className="text-[10px] font-sans font-semibold text-zinc-300 mt-1 leading-tight">Performa</p>
              </div>
              <div className="p-2 rounded-xl bg-zinc-950 border border-emerald-900/60 flex flex-col items-center justify-between min-h-[72px] sm:min-h-[82px]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-emerald-500 mx-auto flex items-center justify-center font-mono font-black text-xs text-emerald-400">
                  100
                </div>
                <p className="text-[10px] font-sans font-semibold text-zinc-300 mt-1 leading-tight">Aksesibilitas</p>
              </div>
              <div className="p-2 rounded-xl bg-zinc-950 border border-emerald-900/60 flex flex-col items-center justify-between min-h-[72px] sm:min-h-[82px]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-emerald-500 mx-auto flex items-center justify-center font-mono font-black text-xs text-emerald-400">
                  100
                </div>
                <p className="text-[10px] font-sans font-semibold text-zinc-300 mt-1 leading-tight">Praktik Terbaik</p>
              </div>
              <div className="p-2 rounded-xl bg-zinc-950 border border-emerald-900/60 flex flex-col items-center justify-between min-h-[72px] sm:min-h-[82px]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-emerald-500 mx-auto flex items-center justify-center font-mono font-black text-xs text-emerald-400">
                  100
                </div>
                <p className="text-[10px] font-sans font-semibold text-zinc-300 mt-1 leading-tight">SEO</p>
              </div>
            </div>

            <p className="text-[10px] font-mono text-zinc-400 text-center pt-1 border-t border-zinc-800">
              Waktu Muat: <span className="text-emerald-400 font-bold">0.4 Detik</span> · First Contentful Paint: <span className="text-emerald-400 font-bold">0.3 Detik</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 2. POSTER CYBERSECURITY & HARDENING 5-LAPIS (MEREVITALISASI TOTAL TAMPILAN POLOS DI IMAGE 3)
 * Menampilkan Security Operations Center (SOC) nyata: terminal scanner, 5 lapisan aktif, dan status zero-trust.
 */
export const CybersecurityOperationsPoster: React.FC<PromotionalPosterProps> = ({
  onWhatsAppInquiry,
  className = '',
}) => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const SECURITY_LAYERS = [
    {
      num: '01',
      title: 'Enkripsi Jaringan & Transport (TLS 1.3)',
      tag: 'Transport Layer',
      metric: 'Grade A+ SSL Labs',
      desc: 'Protokol enkripsi modern TLS 1.3 strict mode dengan ChaCha20-Poly1305 dan HSTS Preload permanen. Menjamin tidak ada celah Man-In-The-Middle (MITM) saat transmisi data.',
      terminalLog: '[TLS] Handshake complete: TLS_AES_256_GCM_SHA384 (KeyExchange: X25519) - Cipher grade 100/100',
    },
    {
      num: '02',
      title: 'Hardening Server VPS & Zero-Trust',
      tag: 'Infrastructure Layer',
      metric: 'Zero Open Attack Surface',
      desc: 'Konfigurasi Linux kernel hardened: login root dinonaktifkan, autentikasi wajib SSH key Ed25519, proteksi firewall UFW ketat, serta automasi blokir IP penyerang via Fail2ban daemon.',
      terminalLog: '[FAIL2BAN] Filter sshd-ddos activated: 1,842 malicious botnets auto-banned across subnet',
    },
    {
      num: '03',
      title: 'Sanitasi Input & Integritas Data Aplikasi',
      tag: 'Application Layer',
      metric: 'OWASP Top 10 Verified',
      desc: 'Pencegahan menyeluruh serangan injeksi: SQL Injection, Stored/Reflected XSS, Cross-Site Request Forgery (CSRF tokens), dan HTTP security headers (CSP, CORS, X-Frame-Options via Helmet).',
      terminalLog: '[SECURITY-AUDIT] AST Scanner: 0 SQLi, 0 XSS vulnerabilities detected in application build',
    },
    {
      num: '04',
      title: 'Pengamanan AI Agent & Guardrails Konteks',
      tag: 'AI Security Layer',
      metric: 'Anti-Jailbreak Sandboxed',
      desc: 'Penerapan sandboxing prompt ketat dan semantic validation agar AI agent tidak dapat dimanipulasi dengan teknik context injection, kebocoran data sensitif sistem, atau jawaban di luar domain bisnis.',
      terminalLog: '[AI-GUARD] Prompt injection attempt intercepted and scrubbed: Zero internal system prompt leaks',
    },
    {
      num: '05',
      title: 'Pencadangan Harian Terenkripsi (Disaster Recovery)',
      tag: 'Resilience Layer',
      metric: 'RTO < 15 Min / RPO 24h',
      desc: 'Automasi backup snapshot database dan aset setiap hari, dienkripsi AES-256 GCM sebelum dikirim ke cold storage terisolasi. Jaminan pemulihan sistem cepat saat terjadi insiden darurat.',
      terminalLog: '[BACKUP] Automated offsite encrypted snapshot created: 2.4 GB AES-256 GCM verified OK',
    },
  ];

  return (
    <div
      className={`rounded-3xl bg-linear-to-br from-white via-slate-50 to-blue-50/30 dark:from-zinc-950 dark:via-[#111319] dark:to-zinc-950 text-zinc-950 dark:text-white border border-zinc-200/90 dark:border-zinc-800 shadow-xl p-6 sm:p-10 space-y-8 select-none ${className}`}
    >
      {/* Top Header: Brand Emblem & Cybersecurity Badge */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800/80 pb-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-700/80 text-blue-700 dark:text-blue-300 font-mono text-[11px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>5 LAPISAN KEAMANAN TERSTRUKTUR · FITRAN DEV PROTOCOL</span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE SOC MONITOR</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 dark:text-white tracking-tight">
            Sistem Aman, Cepat, dan Tahan Serangan Siber
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Standar rekayasa keamanan berlapis sekelas infrastruktur enterprise: melindungi basis data, kredensial server,
            dan alur kerja AI bisnis Anda dari ancaman eksploitasi di internet terbuka.
          </p>
        </div>

        {/* Brand Pixel Avatar Stamp */}
        <div className="flex items-center gap-3 shrink-0">
          <FitranPixelIcon size="md" />
          <div className="text-left font-mono">
            <p className="text-xs font-bold text-zinc-900 dark:text-white">fitran<span className="text-emerald-600 dark:text-emerald-400">.dev</span></p>
            <p className="text-[10px] text-zinc-500">Security Engineering</p>
          </div>
        </div>
      </div>

      {/* REALISTIC LIVE TERMINAL SCANNER (Replacing the bare empty UI) */}
      <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-4 font-mono text-xs space-y-2 shadow-inner text-white">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-2 text-zinc-400 text-[11px]">
          <div className="flex items-center gap-2 min-w-0">
            <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-zinc-200 truncate">security-daemon@fitran-dev-soc:~$ status --strict</span>
          </div>
          <span className="text-emerald-400 text-[10px] shrink-0">ALL DEFENSE LAYERS ACTIVE</span>
        </div>

        <div className="space-y-1 text-zinc-300 text-[11px] pt-1 break-words">
          <p><span className="text-emerald-400">[KERNEL]</span> Linux 6.8.0-Hardened (x86_64) · Uptime: 99.99% Nominal</p>
          <p><span className="text-emerald-400">[FIREWALL]</span> UFW: ALLOW 80/tcp, ALLOW 443/tcp · DENY ALL OTHER INBOUND</p>
          <p><span className="text-blue-400">[ACTIVE]</span> {SECURITY_LAYERS[activeLayer].terminalLog}</p>
          <p><span className="text-amber-400">[CERTIFICATE]</span> Let's Encrypt / Cloudflare Edge TLS 1.3 (Strict HSTS Active)</p>
        </div>
      </div>

      {/* 5 INTERACTIVE SECURITY ARCHITECTURE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-1">
        {SECURITY_LAYERS.map((layer, idx) => {
          const isActive = activeLayer === idx;
          return (
            <div
              key={layer.num}
              onClick={() => setActiveLayer(idx)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-950/70 border-blue-500 text-zinc-950 dark:text-white shadow-md ring-1 ring-blue-500'
                  : 'bg-white dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 text-zinc-800 dark:text-zinc-300 shadow-xs'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-blue-600 dark:text-blue-400">
                    LAPIS {layer.num}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-emerald-600 dark:text-emerald-400 font-bold">
                    ✓ Aktif
                  </span>
                </div>

                <h3 className="font-bold text-xs sm:text-sm text-zinc-950 dark:text-white leading-snug">
                  {layer.title}
                </h3>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                  {layer.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                <span className="text-emerald-600 dark:text-emerald-300 font-bold">{layer.metric}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Action Row: Direct Security Audit Inquiry */}
      <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>Setiap baris kode diuji terhadap standar OWASP Top 10 sebelum diserahterimakan ke klien.</span>
        </div>

        <button
          onClick={() => onWhatsAppInquiry('Audit Keamanan & Hardening Server 5 Lapis', 'Mulai Rp 750.000')}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <Shield className="w-4 h-4" />
          <span>Konsultasi Keamanan Sistem</span>
        </button>
      </div>
    </div>
  );
};

/**
 * 3. PROMO POSTER: META CONVERSIONS API & GA4 ATTRIBUTION SYSTEM
 * Menampilkan solusi nyata deduplikasi data iklan & bypass proteksi browser
 */
export const MetaCapiPromoPoster: React.FC<PromotionalPosterProps> = ({
  onWhatsAppInquiry,
  className = '',
}) => {
  return (
    <div
      className={`rounded-3xl bg-white dark:bg-[#111319] border border-blue-200 dark:border-blue-900 shadow-md p-6 sm:p-8 space-y-6 select-none ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#1E3A8A] dark:text-blue-300 font-mono text-[10px] font-bold uppercase mb-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>SOLUSI ADVERTISER &amp; TECHNICAL MARKETING</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white">
            Meta Conversions API (CAPI) &amp; Server Tracking
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
            Cegah data loss hingga 35% akibat pemblokiran cookie browser (iOS 14+ &amp; AdBlocker) dengan pengiriman sinyal
            transaksi langsung dari backend server.
          </p>
        </div>

        <div className="text-right p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 shrink-0">
          <p className="text-[10px] font-mono text-zinc-500 uppercase">Event Match Quality:</p>
          <p className="font-mono text-2xl font-black text-emerald-700 dark:text-emerald-300">9.4 / 10</p>
          <p className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">Status: Sangat Akurat</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1">
          <p className="font-bold text-zinc-900 dark:text-white">Deduplikasi Event ID</p>
          <p className="text-[11px] text-zinc-500">Mencegah dobel pencatatan pembelian antara browser pixel dan server CAPI.</p>
        </div>
        <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1">
          <p className="font-bold text-zinc-900 dark:text-white">Google Tag Manager Server</p>
          <p className="text-[11px] text-zinc-500">First-party server container untuk GA4 dan Meta tanpa beban di browser klien.</p>
        </div>
        <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1">
          <p className="font-bold text-zinc-900 dark:text-white">Optimasi ROAS Iklan</p>
          <p className="text-[11px] text-zinc-500">Algoritma AI Meta belajar dari data pembelian riil, menurunkan biaya per konversi.</p>
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs font-mono text-zinc-500">Investasi Mulai: <strong className="text-zinc-900 dark:text-white font-bold">Rp 650.000</strong> (Pengerjaan 2-3 Hari)</span>
        <button
          onClick={() => onWhatsAppInquiry('Setup Meta Conversions API (CAPI)', 'Rp 650.000')}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Pasang Meta CAPI Sekarang</span>
        </button>
      </div>
    </div>
  );
};
