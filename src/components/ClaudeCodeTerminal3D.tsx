import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, ExternalLink, MessageSquare, Check, ShieldCheck, Code, Globe, Database, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ExecutingState {
  cmd: string;
  phase: 'thinking' | 'coding';
  thoughtLogs: string[];
  codeLog: string;
}

export const ClaudeCodeTerminal3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeTheme, setActiveTheme] = useState<'claude' | 'antigravity'>('claude');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([]);
  const [executingState, setExecutingState] = useState<ExecutingState | null>(null);
  const [eyeBlink, setEyeBlink] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const terminalBottomRef = useRef<HTMLDivElement | null>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const { language } = useLanguage();

  // Antigravity CLI live animation states
  const [selectedScheme, setSelectedScheme] = useState('dark');
  const [spinnerIndex, setSpinnerIndex] = useState(0);
  const spinnerFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

  // Spinner tick
  useEffect(() => {
    const timer = setInterval(() => {
      setSpinnerIndex((prev) => (prev + 1) % spinnerFrames.length);
    }, 90);
    return () => clearInterval(timer);
  }, [spinnerFrames.length]);

  // Eye blinking animation for Claude's 8-bit orange mascot
  useEffect(() => {
    const interval = setInterval(() => {
      setEyeBlink(true);
      setTimeout(() => setEyeBlink(false), 220);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 3D Tilt perspective based on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotY(x * 5);
    setRotX(-y * 4);
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 60);
  };

  // Quick suggestion chips
  const quickChips = [
    'Siapa itu Tubagus Fitran?',
    'Apa saja keahlian (skills)?',
    'Lihat proyek unggulan',
    'Daftar sertifikasi resmi',
    'Layanan website & backend',
    'Kontak & kolaborasi',
    'Bantuan (help)',
  ];

  // Generates rich output for recognized or matched queries
  const generateOutput = (rawCmd: string): React.ReactNode => {
    const q = rawCmd.toLowerCase().trim();

    // 1. SIAPA ITU TUBAGUS FITRAN / PROFIL / ABOUT
    if (
      q.includes('siapa') ||
      q.includes('fitran') ||
      q.includes('tubagus') ||
      q.includes('about') ||
      q.includes('profil') ||
      q.includes('biodata') ||
      q.includes('siapa anda')
    ) {
      return (
        <div className="space-y-3 text-xs font-mono text-zinc-200">
          <div className="p-3.5 rounded-xl bg-orange-950/30 border border-orange-500/40 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-orange-400 font-bold text-sm sm:text-base">
                Tubagus Fitran Badruttamam
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
                ✓ S1 Informatika
              </span>
            </div>
            <p className="text-zinc-300 text-xs leading-relaxed font-sans">
              Saya adalah seorang mahasiswa yang tertarik dan mendalami dunia informatika di <strong>Universitas Muhammadiyah Banten (S1 Informatika)</strong>. Fokus keahlian saya terbagi ke dalam 4 pilar rekayasa perangkat lunak utama:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-1">
              <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                <Code className="w-3.5 h-3.5" />
                <span>1. Software Engineer</span>
              </div>
              <p className="text-zinc-400 leading-snug font-sans">
                Membangun arsitektur sistem yang modular, aman, maintainable, dan berpedoman pada standar clean code industri.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <Globe className="w-3.5 h-3.5" />
                <span>2. Frontend Engineer</span>
              </div>
              <p className="text-zinc-400 leading-snug font-sans">
                Merancang antarmuka web interaktif yang super cepat, responsif di mobile &amp; desktop, serta memikat calon pelanggan.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Database className="w-3.5 h-3.5" />
                <span>3. Backend Engineer</span>
              </div>
              <p className="text-zinc-400 leading-snug font-sans">
                Merancang database aman (PostgreSQL, Supabase, Firestore), API terintegrasi, dan pipeline data tanpa downtime.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-1">
              <div className="flex items-center gap-1.5 text-purple-400 font-bold">
                <Bot className="w-3.5 h-3.5" />
                <span>4. AI Engineer</span>
              </div>
              <p className="text-zinc-400 leading-snug font-sans">
                Mengeksplorasi model kecerdasan buatan, chatbot interaktif, dan otomasi cerdas untuk memecahkan problem bisnis nyata.
              </p>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800/80 text-[11px] space-y-1 text-zinc-400">
            <p>
              <strong className="text-zinc-200">• Kredensial Terverifikasi:</strong> Google Developer Program Verified Profile [108601218527303855788], Google Maps Platform Innovators, Firebase Studio Developer, AWS Responsible AI, dan NVIDIA DLI.
            </p>
            <p>
              <strong className="text-zinc-200">• Prestasi Nasional:</strong> 2× Peraih Medali Emas Olimpiade Sains Nasional (OSHSP &amp; KSHPI 2024).
            </p>
          </div>
        </div>
      );
    }

    // 2. KEAHLIAN / SKILLS / TECH STACK
    if (q.includes('keahlian') || q.includes('skill') || q.includes('tech') || q.includes('bahasa')) {
      return (
        <div className="space-y-2 text-xs font-mono">
          <p className="text-emerald-400 font-bold">Keahlian Teknikal &amp; Ekosistem Teknologi:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800">
              <span className="text-cyan-400 font-bold">Frontend &amp; UI Engineering</span>
              <p className="text-zinc-400 mt-1">TypeScript, React 19, Next.js 15 App Router, Tailwind CSS, Framer Motion, Responsive Layouts.</p>
            </div>
            <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800">
              <span className="text-emerald-400 font-bold">Backend &amp; Database</span>
              <p className="text-zinc-400 mt-1">Node.js, Express, PostgreSQL, Supabase Vector DB, Firebase Firestore, REST API, Webhooks.</p>
            </div>
            <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800">
              <span className="text-purple-400 font-bold">AI &amp; Automation</span>
              <p className="text-zinc-400 mt-1">Google Gemini 3.5 Flash, Amazon Bedrock Guardrails, WhatsApp Meta Chatbot, Vector Search.</p>
            </div>
            <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800">
              <span className="text-amber-400 font-bold">Cloud &amp; DevOps</span>
              <p className="text-zinc-400 mt-1">Vercel Edge CDN, Google Cloud Platform, AWS IAM &amp; CloudWatch, Cloudflare Security.</p>
            </div>
          </div>
        </div>
      );
    }

    // 3. PROYEK / PROJECTS / REPO
    if (q.includes('proyek') || q.includes('project') || q.includes('karya') || q.includes('repo')) {
      return (
        <div className="space-y-2 text-xs font-mono">
          <p className="text-emerald-400 font-bold">Proyek Unggulan &amp; Repositori Aktif:</p>
          <div className="space-y-1.5 text-[11px]">
            <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-start justify-between gap-2">
              <div>
                <a href="https://petroknow-platform.vercel.app/" target="_blank" rel="noreferrer" className="text-cyan-400 font-bold hover:underline">
                  PetroKnow Platform ↗
                </a>
                <p className="text-zinc-400">Pusat pengetahuan AI industri dan simulasi digital twin perminyakan modern.</p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 font-bold">Next.js 15</span>
            </div>

            <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-start justify-between gap-2">
              <div>
                <a href="https://ramadhan-ku-tubagus.vercel.app/" target="_blank" rel="noreferrer" className="text-cyan-400 font-bold hover:underline">
                  Ramadhan Ku ↗
                </a>
                <p className="text-zinc-400">Aplikasi penunjang ibadah harian offline-first dengan jadwal shalat &amp; kalkulator zakat.</p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold">PWA</span>
            </div>

            <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-start justify-between gap-2">
              <div>
                <a href="https://finansial-ku-tubagus.vercel.app/" target="_blank" rel="noreferrer" className="text-cyan-400 font-bold hover:underline">
                  Finansial Ku ↗
                </a>
                <p className="text-zinc-400">Pelacak arus kas keuangan mandiri dengan analitik visual cerdas.</p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-950 text-purple-300 font-bold">React 19</span>
            </div>

            <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-start justify-between gap-2">
              <div>
                <span className="text-zinc-200 font-bold">Radja Topup System</span>
                <p className="text-zinc-400">Mesin transaksi checkout kilat dan integrasi gateway pembayaran konkurensi tinggi.</p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 font-bold">Production</span>
            </div>
          </div>
        </div>
      );
    }

    // 4. SERTIFIKASI / CERTS
    if (q.includes('sertifikat') || q.includes('cert') || q.includes('lisensi') || q.includes('kredensial')) {
      return (
        <div className="space-y-2 text-xs font-mono">
          <p className="text-emerald-400 font-bold">Sertifikasi &amp; Akreditasi Resmi Terverifikasi:</p>
          <ul className="space-y-1 text-[11px] text-zinc-300 pl-2">
            <li>• <strong className="text-cyan-300">Google Developer Program:</strong> Verified Profile [ID: 108601218527303855788]</li>
            <li>• <strong className="text-yellow-300">Google Maps Platform Innovators &amp; Firebase Studio Developer</strong></li>
            <li>• <strong className="text-orange-400">AWS:</strong> Responsible AI &amp; Bedrock Guardrails Certified</li>
            <li>• <strong className="text-emerald-400">NVIDIA DLI:</strong> Fundamentals of Deep Learning &amp; Computer Vision</li>
            <li>• <strong className="text-white">Vercel Inc.:</strong> Next.js App Router Fundamentals (CEO: Guillermo Rauch)</li>
            <li>• <strong className="text-blue-400">Meta Blueprint:</strong> Facebook Page &amp; Commercial Presence Fundamentals</li>
            <li>• <strong className="text-amber-400">2× Medali Emas:</strong> Olimpiade Sains Nasional (OSHSP &amp; KSHPI 2024)</li>
          </ul>
        </div>
      );
    }

    // 5. LAYANAN & ARSITEKTUR WEB
    if (q.includes('layanan') || q.includes('jasa') || q.includes('website') || q.includes('backend') || q.includes('service')) {
      return (
        <div className="space-y-2 text-xs font-mono">
          <p className="text-emerald-400 font-bold">Layanan Rekayasa Web &amp; Integrasi Bisnis:</p>
          <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2 text-[11px] text-zinc-300">
            <p>
              Merancang sistem website dengan <strong>backend terintegrasi</strong>, serta dapat menggabungkan <strong>technical Meta chatbot</strong>, integrasi <strong>API Meta</strong>, atau <strong>Google Ads</strong> untuk memikat calon pelanggan dan mengakselerasi skala bisnis Anda.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-zinc-400">
              <div>✓ Website Kilat 24-48 Jam Siap Pakai</div>
              <div>✓ 100% Hak Milik Source Code (Bebas Sewa)</div>
              <div>✓ Integrasi CS AI WhatsApp Otomatis 24/7</div>
              <div>✓ Backend Database &amp; API Terintegrasi</div>
            </div>
          </div>
        </div>
      );
    }

    // 6. KONTAK & KOLABORASI
    if (q.includes('kontak') || q.includes('contact') || q.includes('email') || q.includes('whatsapp') || q.includes('hubungi')) {
      return (
        <div className="space-y-2 text-xs font-mono text-zinc-300">
          <p className="text-emerald-400 font-bold">Informasi Kontak &amp; Konsultasi Resmi:</p>
          <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1.5 text-[11px]">
            <p>• <strong>WhatsApp Konsultasi:</strong> <a href="https://wa.me/6282211993414" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">+62 822-1199-3414 ↗</a></p>
            <p>• <strong>Email Resmi:</strong> <a href="mailto:fitranbadrttmamtb@gmail.com" className="text-cyan-400 hover:underline">fitranbadrttmamtb@gmail.com</a></p>
            <p>• <strong>GitHub:</strong> <a href="https://github.com/fitrantubagus-stack" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">github.com/fitrantubagus-stack ↗</a></p>
            <p>• <strong>Domisili:</strong> Cilegon &amp; Serang, Banten, Indonesia (Asia/Jakarta • GMT+7)</p>
          </div>
        </div>
      );
    }

    // 7. BANTUAN / HELP
    if (q.includes('help') || q.includes('bantuan') || q === '?') {
      return (
        <div className="text-zinc-300 space-y-2 text-xs font-mono">
          <p className="text-emerald-400 font-bold">Daftar Pertanyaan &amp; Perintah yang Bisa Anda Pilih / Ketik:</p>
          <div className="space-y-1 text-[11px]">
            <p><span className="text-orange-400 font-semibold">siapa itu tubagus fitran</span> : Ringkasan profil mahasiswa, 4 pilar rekayasa, dan latar belakang</p>
            <p><span className="text-orange-400 font-semibold">keahlian</span> : Kompetensi frontend, backend, AI, cloud infra</p>
            <p><span className="text-orange-400 font-semibold">proyek</span> : Repositori aktif dan platform yang sudah dirilis</p>
            <p><span className="text-orange-400 font-semibold">sertifikat</span> : Daftar sertifikasi Google, AWS, NVIDIA, dan medali nasional</p>
            <p><span className="text-orange-400 font-semibold">layanan</span> : Arsitektur web backend terintegrasi &amp; integrasi Meta chatbot</p>
            <p><span className="text-orange-400 font-semibold">kontak</span> : Jalur WhatsApp dan email resmi</p>
            <p><span className="text-orange-400 font-semibold">clear</span> : Bersihkan layar terminal</p>
          </div>
        </div>
      );
    }

    // FALLBACK: Natural Language Matcher
    return (
      <div className="space-y-2 text-xs font-mono text-zinc-300">
        <p className="text-zinc-200">
          Pertanyaan Anda: <span className="text-orange-300 font-bold">"{rawCmd}"</span>
        </p>
        <p className="text-[11px] leading-relaxed text-zinc-400 font-sans">
          Saya adalah Tubagus Fitran Badruttamam — Mahasiswa S1 Informatika Universitas Muhammadiyah Banten yang berfokus pada Software Engineer, Frontend Engineer, Backend Engineer, dan AI Engineer.
        </p>
        <p className="text-[11px] text-zinc-500 font-mono">
          Ketik atau klik <span className="text-amber-400 font-bold">"siapa itu Tubagus Fitran"</span> atau <span className="text-amber-400 font-bold">"layanan"</span> untuk melihat informasi lebih spesifik.
        </p>
      </div>
    );
  };

  // Main Command Execution with Simulated Claude Code Thinking & Tool Use
  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd || executingState) return;

    const lower = cmd.toLowerCase();

    // Instant local utility commands
    if (lower === 'clear' || lower === 'cls') {
      setHistory([]);
      setInputVal('');
      return;
    }
    if (lower === 'claude') {
      setActiveTheme('claude');
      setInputVal('');
      return;
    }
    if (lower === 'antigravity' || lower === 'agy') {
      setActiveTheme('antigravity');
      setInputVal('');
      return;
    }

    // Start Phase 1: Thinking & Analyzing
    setInputVal('');
    setExecutingState({
      cmd,
      phase: 'thinking',
      thoughtLogs: [
        `Menganalisis pertanyaan: "${cmd}"...`,
        'Mengurai entitas kontekstual dan memetakan struktur data profil...',
      ],
      codeLog: '',
    });
    scrollToBottom();

    // Phase 2: Internal Coding & Tool Execution (after 500ms)
    setTimeout(() => {
      setExecutingState({
        cmd,
        phase: 'coding',
        thoughtLogs: [
          `Menganalisis pertanyaan: "${cmd}"...`,
          'Konteks ditemukan: Modul portofolio S1 Informatika & 4 pilar rekayasa terverifikasi.',
        ],
        codeLog: `$ node -e "const api = require('./core'); api.queryContext('${cmd.replace(/'/g, "\\'")}');"\n  ↳ [200 OK] Memuat data relevan, validasi source code, & menyusun sintesis jawaban.`,
      });
      scrollToBottom();
    }, 550);

    // Phase 3: Final Output Render (after 1250ms)
    setTimeout(() => {
      const output = generateOutput(cmd);
      setHistory((prev) => [...prev, { cmd, output }]);
      setExecutingState(null);
      scrollToBottom();
    }, 1250);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const colorSchemes = [
    'light',
    'solarized light',
    'colorblind-friendly light',
    'dark',
    'solarized dark',
    'colorblind-friendly dark',
    'tokyo night',
    'terminal',
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full transition-transform duration-200 ease-out select-none ${className}`}
      style={{
        perspective: '1200px',
        transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
      }}
    >
      {/* Outer Terminal Container */}
      <div
        className={`w-full rounded-2xl border overflow-hidden shadow-2xl transition-all duration-300 ${
          activeTheme === 'claude'
            ? 'bg-[#0A0B0D] border-zinc-800 text-[#CCCCCC]'
            : 'bg-[#1E1F22] border-zinc-700 text-[#E3E5E8]'
        }`}
      >
        {/* ========================================================================= */}
        {/* TOP WINDOW TITLEBAR & THEME SWITCHER */}
        {/* ========================================================================= */}
        <div
          className={`flex items-center justify-between px-3 py-2 border-b transition-colors ${
            activeTheme === 'claude'
              ? 'bg-[#121316] border-zinc-800 text-zinc-300'
              : 'bg-[#2B2D31] border-zinc-700 text-zinc-200'
          }`}
        >
          {/* Left: Window Tab / Controls matching screenshots */}
          <div className="flex items-center gap-2">
            {activeTheme === 'claude' ? (
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2 px-3 py-1 rounded-t-md bg-[#1F2024] border-t border-x border-zinc-700 text-xs font-mono text-white">
                  <span className="text-[10px] px-1 py-0.2 bg-zinc-800 rounded font-semibold text-zinc-300">cs.</span>
                  <span className="font-semibold">claude</span>
                  <span className="ml-2 text-zinc-500 hover:text-white cursor-pointer text-xs">✕</span>
                </div>
                <button className="px-1.5 py-0.5 text-zinc-500 hover:text-white font-mono text-sm">+</button>
                <button className="px-1.5 py-0.5 text-zinc-500 hover:text-white font-mono text-xs">⌄</button>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ED6A5E] border border-[#CF5347] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#F5BF4F] border border-[#D6A23C] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#62C554] border border-[#4EA840] inline-block" />
                </div>
                <span className="text-zinc-500 font-mono text-xs ml-3">...</span>
              </div>
            )}
          </div>

          {/* Center / Right: Theme Switcher Pill */}
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-full border border-zinc-700/60 font-mono text-xs">
            <button
              onClick={() => setActiveTheme('claude')}
              className={`px-3 py-0.5 rounded-full transition-all cursor-pointer ${
                activeTheme === 'claude'
                  ? 'bg-[#D97757] text-white font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ◈ Claude Code
            </button>
            <button
              onClick={() => setActiveTheme('antigravity')}
              className={`px-3 py-0.5 rounded-full transition-all cursor-pointer ${
                activeTheme === 'antigravity'
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ✦ Antigravity CLI
            </button>
          </div>

          {/* Right: Window Controls */}
          <div className="hidden sm:flex items-center gap-3 text-zinc-500 text-xs font-mono pr-1">
            {activeTheme === 'claude' ? (
              <div className="flex items-center gap-3">
                <span className="hover:text-white cursor-pointer">—</span>
                <span className="hover:text-white cursor-pointer">□</span>
                <span className="hover:text-white cursor-pointer">✕</span>
              </div>
            ) : (
              <span className="text-zinc-400 text-xs">Antigravity 1.0.0</span>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* THEME 1: CLAUDE CODE CLI */}
        {/* ========================================================================= */}
        {activeTheme === 'claude' && (
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto bg-black">
            {/* Header Metadata block */}
            <div className="space-y-0.5 text-zinc-400 text-xs">
              <p>Version: <span className="text-[#D97757] font-semibold">2.1.268</span></p>
              <p>Location: <span className="text-zinc-300">C:\Users\Hype GLK\.local\bin\claude.exe</span></p>
              <p className="pt-1">Session: <span className="text-emerald-400 font-semibold">Interactive Profiler Active</span></p>
            </div>

            <div className="pt-2 text-zinc-400 text-xs">
              <p>C:\Users\Hype GLK&gt;cd C:\fitran-portofolio</p>
              <p className="pt-1 text-white">
                C:\fitran-portofolio&gt;<span className="text-[#D97757] font-bold">claude</span>
              </p>
              <p className="text-[#D97757] font-bold text-sm sm:text-base pt-1">
                Welcome to Claude Code v2.1.268
              </p>
              <p className="text-zinc-600">
                ....................................................................................
              </p>
            </div>

            {/* THE ICONIC PIXEL ART SCENE */}
            <div className="my-3 p-4 rounded-xl bg-black border border-zinc-900 relative overflow-hidden flex flex-col items-center justify-center min-h-[170px]">
              <span className="absolute top-4 left-8 text-zinc-400 text-xs animate-pulse">*</span>
              <span className="absolute top-10 left-36 text-zinc-500 text-[10px]">*</span>
              <span className="absolute top-6 right-20 text-zinc-400 text-xs animate-pulse">*</span>
              <span className="absolute top-20 right-44 text-zinc-500 text-[10px]">*</span>

              {/* Sky Composition: Clouds and Crescent Moon */}
              <div className="w-full max-w-[500px] flex items-end justify-between px-4 sm:px-10 relative pt-2">
                <div className="relative mb-2 select-none font-mono text-[10px] text-zinc-600 leading-tight">
                  <pre className="font-mono text-zinc-500">
{`   .:::..
 ::::::::..
.::::::::::::.`}
                  </pre>
                </div>

                <div className="relative mb-3 select-none">
                  <svg width="52" height="52" viewBox="0 0 56 56" fill="none">
                    <path
                      d="M 22 4 C 12 10 8 22 14 34 C 20 46 32 50 44 46 C 34 46 24 38 22 26 C 20 14 26 6 34 2 C 30 2 26 3 22 4 Z"
                      fill="#E4E4E7"
                      stroke="#A1A1AA"
                      strokeWidth="1.5"
                    />
                    <rect x="18" y="16" width="4" height="4" fill="#71717A" />
                    <rect x="23" y="22" width="5" height="5" fill="#A1A1AA" />
                    <rect x="20" y="30" width="5" height="5" fill="#71717A" />
                    <rect x="28" y="36" width="4" height="4" fill="#A1A1AA" />
                  </svg>
                </div>

                <div className="relative mb-1 select-none font-mono text-[10px] text-zinc-600 leading-tight">
                  <pre className="font-mono text-zinc-500">
{`  .::::.
 ::::::::
.:::::::::`}
                  </pre>
                </div>
              </div>

              {/* Ground line with the 8-bit space invader crab mascot */}
              <div className="w-full max-w-[500px] flex items-end justify-start px-6 pt-1 border-b border-dotted border-zinc-700 pb-1">
                <div className="relative pb-0.5 hover:scale-110 transition-transform cursor-pointer" title="Claude Crab Mascot">
                  <svg width="44" height="38" viewBox="0 0 48 40" fill="none">
                    <rect x="10" y="4" width="6" height="6" fill="#D97757" />
                    <rect x="32" y="4" width="6" height="6" fill="#D97757" />
                    <rect x="6" y="10" width="36" height="18" rx="1" fill="#D97757" />
                    <rect x="2" y="14" width="4" height="10" fill="#D97757" />
                    <rect x="42" y="14" width="4" height="10" fill="#D97757" />
                    {eyeBlink ? (
                      <>
                        <rect x="14" y="18" width="6" height="2" fill="#000000" />
                        <rect x="28" y="18" width="6" height="2" fill="#000000" />
                      </>
                    ) : (
                      <>
                        <rect x="14" y="15" width="6" height="6" fill="#000000" />
                        <rect x="28" y="15" width="6" height="6" fill="#000000" />
                      </>
                    )}
                    <rect x="10" y="28" width="6" height="8" fill="#D97757" />
                    <rect x="32" y="28" width="6" height="8" fill="#D97757" />
                  </svg>
                </div>
              </div>

              <p className="text-zinc-500 text-[11px] font-mono text-center pt-2.5 px-4">
                Ini adalah terminal code untuk mengetahui informasi tentang saya. Silakan pilih opsi cepat atau ketik langsung di bawah:
              </p>
            </div>

            {/* Command History Buffer */}
            {history.length > 0 && (
              <div className="space-y-4 my-3 pt-2 border-t border-zinc-800">
                {history.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <p className="text-white flex items-center gap-1.5 font-bold">
                      <span className="text-[#D97757]">&gt;</span>
                      <span>{item.cmd}</span>
                    </p>
                    <div className="pl-3 sm:pl-4 border-l border-zinc-800 py-1 text-zinc-300">
                      {item.output}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* LIVE SIMULATED THINKING & CODING PROCESS */}
            {executingState && (
              <div className="space-y-2.5 my-3 pt-2 border-t border-zinc-800 font-mono text-xs">
                <p className="text-white flex items-center gap-1.5 font-bold">
                  <span className="text-[#D97757]">&gt;</span>
                  <span>{executingState.cmd}</span>
                </p>

                {/* Thinking Process Stage */}
                <div className="p-3 rounded-xl bg-zinc-950/90 border border-orange-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <span className="text-[#D97757] animate-pulse">{spinnerFrames[spinnerIndex]}</span>
                    <span className="text-[11px] uppercase tracking-wider">
                      {executingState.phase === 'thinking' ? 'Claude Code: Menganalisis & Menimbang...' : 'Analisis Selesai'}
                    </span>
                  </div>
                  {executingState.thoughtLogs.map((log, i) => (
                    <p key={i} className="text-zinc-400 text-[11px] pl-4 leading-snug">
                      ↳ {log}
                    </p>
                  ))}
                </div>

                {/* Internal Tool / Coding Execution Stage */}
                {executingState.phase === 'coding' && (
                  <div className="p-3 rounded-xl bg-zinc-950/90 border border-emerald-500/30 space-y-1.5 text-emerald-400">
                    <div className="flex items-center gap-2 font-bold">
                      <TerminalIcon className="w-3.5 h-3.5" />
                      <span className="text-[11px] uppercase tracking-wider">Menjalankan Eksekusi Kode / Tool Internal...</span>
                    </div>
                    <pre className="text-zinc-300 text-[11px] pl-4 font-mono whitespace-pre-wrap leading-snug">
                      {executingState.codeLog}
                    </pre>
                  </div>
                )}
              </div>
            )}

            <div ref={terminalBottomRef} />

            {/* Quick Action Chips to Choose From */}
            <div className="pt-3 pb-1 border-t border-zinc-800/80 space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-zinc-500 font-bold block">
                Silakan Pilih Pertanyaan / Opsi Cepat:
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {quickChips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    disabled={!!executingState}
                    onClick={() => executeCommand(chip)}
                    className="px-2.5 py-1 rounded-full text-[11px] font-mono border transition-all cursor-pointer bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border-zinc-700/80 hover:border-[#D97757] disabled:opacity-50"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Command Input Line */}
            <div className="flex items-center gap-2 pt-2.5">
              <span className="text-[#D97757] font-bold">&gt;</span>
              <input
                type="text"
                value={inputVal}
                disabled={!!executingState}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  executingState
                    ? 'Sedang menganalisis & memproses jawaban...'
                    : 'Ketik pertanyaan (cth: siapa itu Tubagus Fitran, proyek, skills)...'
                }
                className="flex-1 bg-transparent text-white font-mono text-xs sm:text-[13px] outline-none placeholder:text-zinc-600 focus:ring-0 disabled:opacity-50"
              />
              <button
                disabled={!!executingState || !inputVal.trim()}
                onClick={() => executeCommand(inputVal)}
                className="px-3 py-1 rounded bg-[#D97757]/20 hover:bg-[#D97757]/30 text-[#D97757] border border-[#D97757]/40 text-xs font-mono transition-colors disabled:opacity-40 cursor-pointer"
              >
                {executingState ? 'Thinking...' : 'Run ↵'}
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* THEME 2: ANTIGRAVITY CLI */}
        {/* ========================================================================= */}
        {activeTheme === 'antigravity' && (
          <div className="p-4 sm:p-7 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-[#E3E5E8] bg-[#1E1F22]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Rainbow Pixel "A" Logo & Color Scheme Picker */}
              <div className="lg:col-span-5 space-y-4">
                <svg width="48" height="42" viewBox="0 0 48 42" fill="none">
                  <rect x="20" y="2" width="8" height="6" fill="#EA4335" />
                  <rect x="15" y="8" width="6" height="6" fill="#FA7B17" />
                  <rect x="27" y="8" width="6" height="6" fill="#FA7B17" />
                  <rect x="10" y="14" width="6" height="6" fill="#FBBC04" />
                  <rect x="32" y="14" width="6" height="6" fill="#FBBC04" />
                  <rect x="6" y="20" width="36" height="6" fill="#34A853" />
                  <rect x="4" y="26" width="6" height="10" fill="#4285F4" />
                  <rect x="38" y="26" width="6" height="10" fill="#4285F4" />
                </svg>

                <p className="text-white text-sm sm:text-base font-bold">
                  Welcome to <span className="text-[#60A5FA]">Antigravity CLI!</span>
                </p>

                <div className="space-y-1 text-xs">
                  <p className="text-zinc-300 font-semibold pb-1">Choose your color scheme:</p>
                  {colorSchemes.map((scheme) => (
                    <div
                      key={scheme}
                      onClick={() => setSelectedScheme(scheme)}
                      className={`cursor-pointer px-2 py-0.5 rounded transition-colors flex items-center gap-1.5 ${
                        selectedScheme === scheme
                          ? 'text-[#60A5FA] font-bold bg-blue-950/40'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <span className="w-3 text-right">{selectedScheme === scheme ? '>' : ''}</span>
                      <span>{scheme}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => executeCommand('siapa itu Tubagus Fitran?')}
                  className="px-3 py-1 rounded bg-[#34A853]/20 border border-[#34A853]/50 text-[#34A853] font-bold text-xs hover:bg-[#34A853]/30 transition-colors cursor-pointer"
                >
                  [Eksplorasi Profil Fitran]
                </button>
              </div>

              {/* Right Column: Code Diff Box */}
              <div className="lg:col-span-7 space-y-3">
                <div className="rounded-xl bg-[#141518] border border-zinc-700/70 p-4 font-mono text-xs space-y-2">
                  <p className="text-zinc-200 font-semibold">
                    <span className="text-blue-400">&gt; query:</span> inspect candidate architecture
                  </p>
                  <p className="text-emerald-400 font-semibold pt-1">
                    AGY: Analysis result:
                  </p>

                  <div className="mt-2 pt-2 border-t border-zinc-800 space-y-0.5 font-mono text-xs">
                    <p className="text-zinc-500">1   // Software &amp; AI Engineering Profile</p>
                    <p className="bg-blue-950/60 text-blue-300 px-2 py-0.5 rounded-xs border-l-2 border-blue-500">
                      2   const developer = 'Tubagus Fitran Badruttamam';
                    </p>
                    <p className="bg-emerald-950/60 text-emerald-300 px-2 py-0.5 rounded-xs border-l-2 border-emerald-500">
                      3   const university = 'Universitas Muhammadiyah Banten (S1 Informatika)';
                    </p>
                    <p className="bg-purple-950/60 text-purple-300 px-2 py-0.5 rounded-xs border-l-2 border-purple-500">
                      4   const verifiedBadges = ['Google Developer', 'AWS AI', 'NVIDIA DLI'];
                    </p>
                  </div>
                </div>

                {/* Subagents Dispatch Stream */}
                <div className="rounded-xl bg-[#141518] border border-zinc-700/70 p-3 text-xs space-y-2">
                  <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800 pb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 animate-pulse">{spinnerFrames[spinnerIndex]}</span>
                      <span>Gemini 3.5 Flash • Profiler Agent</span>
                    </div>
                    <span className="text-[10px] text-zinc-500">Ready</span>
                  </div>

                  <div className="space-y-1 pt-1 text-[11px] text-zinc-300">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#FBBF24]" />
                      <span className="text-amber-300 font-semibold">CoreSpecialization</span>
                      <span className="text-zinc-400">Software • Frontend • Backend • AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Command History Buffer for Antigravity Mode */}
            {history.length > 0 && (
              <div className="space-y-4 my-4 pt-3 border-t border-zinc-700">
                {history.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <p className="text-white flex items-center gap-1.5 font-bold">
                      <span className="text-blue-400">&gt;</span>
                      <span>{item.cmd}</span>
                    </p>
                    <div className="pl-3 sm:pl-4 border-l border-zinc-700 py-1 text-zinc-300">
                      {item.output}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* LIVE SIMULATED THINKING & CODING PROCESS IN AGY */}
            {executingState && (
              <div className="space-y-2.5 my-3 pt-2 border-t border-zinc-700 font-mono text-xs">
                <p className="text-white flex items-center gap-1.5 font-bold">
                  <span className="text-blue-400">&gt;</span>
                  <span>{executingState.cmd}</span>
                </p>

                <div className="p-3 rounded-xl bg-zinc-950/90 border border-blue-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-400 font-bold">
                    <span className="animate-pulse">{spinnerFrames[spinnerIndex]}</span>
                    <span className="text-[11px] uppercase tracking-wider">
                      {executingState.phase === 'thinking' ? 'Antigravity Agent: Thinking & Context Search...' : 'Analisis Selesai'}
                    </span>
                  </div>
                  {executingState.thoughtLogs.map((log, i) => (
                    <p key={i} className="text-zinc-400 text-[11px] pl-4 leading-snug">
                      ↳ {log}
                    </p>
                  ))}
                </div>

                {executingState.phase === 'coding' && (
                  <div className="p-3 rounded-xl bg-zinc-950/90 border border-emerald-500/30 space-y-1.5 text-emerald-400">
                    <div className="flex items-center gap-2 font-bold">
                      <TerminalIcon className="w-3.5 h-3.5" />
                      <span className="text-[11px] uppercase tracking-wider">Menjalankan Eksekusi Data...</span>
                    </div>
                    <pre className="text-zinc-300 text-[11px] pl-4 font-mono whitespace-pre-wrap leading-snug">
                      {executingState.codeLog}
                    </pre>
                  </div>
                )}
              </div>
            )}

            {/* Quick Chips in AGY Mode */}
            <div className="pt-3 pb-1 border-t border-zinc-700/80 space-y-1.5 mt-4">
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">
                Pilih Opsi Pertanyaan:
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {quickChips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    disabled={!!executingState}
                    onClick={() => executeCommand(chip)}
                    className="px-2.5 py-1 rounded-full text-[11px] font-mono border transition-all cursor-pointer bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border-zinc-600 disabled:opacity-50"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Command Input Prompt */}
            <div className="flex items-center gap-2 pt-3 border-t border-zinc-700/80 mt-2">
              <span className="text-blue-400 font-bold">&gt;</span>
              <input
                type="text"
                value={inputVal}
                disabled={!!executingState}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  executingState
                    ? 'Sedang menganalisis & memproses...'
                    : 'Ketik perintah atau pertanyaan...'
                }
                className="flex-1 bg-transparent text-white font-mono text-xs sm:text-[13px] outline-none placeholder:text-zinc-500 focus:ring-0 disabled:opacity-50"
              />
              <button
                disabled={!!executingState || !inputVal.trim()}
                onClick={() => executeCommand(inputVal)}
                className="px-3 py-1 rounded bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 border border-blue-500/50 text-xs font-mono transition-colors disabled:opacity-40 cursor-pointer"
              >
                {executingState ? 'Thinking...' : 'Run ↵'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
