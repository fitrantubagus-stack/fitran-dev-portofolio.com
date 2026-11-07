// =============================================================================
// KLASIK & ELEGAN ECOSYSTEM DATA (Inspired by Fikran Dev & Tailored for Fitran)
// Tubagus Fitran Badruttamam — Fullstack Developer & AI Engineer
// =============================================================================

export interface ServicePackage {
  id: string;
  code: string;
  title: string;
  price: string;
  originalPrice?: string;
  tagline: string;
  category: 'Website Online' | 'Aplikasi & Dashboard' | 'AI & Otomasi' | 'Infrastruktur Cloud' | 'Keamanan & Tracking';
  description: string;
  scope: string[];
  deliverables: string[];
  securityHighlights: string[];
  techStack: string[];
  duration: string;
  idealFor: string;
  featured?: boolean;
  badge?: string;
}

export interface SecurityLayer {
  level: string;
  title: string;
  description: string;
  measures: string[];
  icon: string;
}

export interface SubchapterItem {
  id: string;
  num: string;
  title: string;
  situation: string;
  explanation: string;
  practice: string;
  mistakes: string;
  checklist: string[];
}

export interface LearningChapter {
  id: string;
  trackId: 'ai' | 'digital-marketing' | 'vibe-coding';
  code: string;
  title: string;
  kicker: string;
  summary: string;
  audience: string;
  subchapters: SubchapterItem[];
  icon?: string;
}

export interface LearningTrack {
  id: 'ai' | 'digital-marketing' | 'vibe-coding';
  name: string;
  badge: string;
  tagline: string;
  description: string;
  chaptersCount: number;
}

export interface KamusTerm {
  term: string;
  category: 'AI & Machine Learning' | 'Web & Arsitektur' | 'Cloud & DevOps' | 'Keamanan & Tracking';
  definition: string;
  practicalTip: string;
}

export interface ToolItem {
  name: string;
  category: 'Frontend & Web' | 'AI & LLMs' | 'Backend & Data' | 'Cloud & Security' | 'Marketing & Analytics';
  tagline: string;
  description: string;
  badge?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Web Engineering' | 'AI & Agents' | 'Cloud & DevOps' | 'Keamanan & Arsitektur';
  readTime: string;
  date: string;
  featured?: boolean;
  icon?: string;
  content: {
    intro: string;
    keyTakeaways: string[];
    sections: {
      heading: string;
      body: string;
      codeSnippet?: string;
      icon?: string;
}[];
    conclusion: string;
  };
}

// -----------------------------------------------------------------------------
// 1. DAFTAR TRACK PEMBELAJARAN (LEARNING TRACKS)
// -----------------------------------------------------------------------------
export const KLASIK_LEARNING_TRACKS: LearningTrack[] = [
  {
    id: 'ai',
    name: 'Peta Belajar AI untuk Bisnis',
    badge: '8 BAB LENGKAP',
    tagline: 'Dari fondasi, prompt engineering, konteks bisnis, hingga AI agent WhatsApp produksi.',
    description:
      'AI bukan tujuan. AI adalah cara mempercepat pekerjaan yang sudah jelas ukuran berhasilnya. Materi ini disusun untuk membantu Anda mengambil keputusan praktis, bukan sekadar menghafal istilah.',
    chaptersCount: 8,
  },
  {
    id: 'digital-marketing',
    name: 'Peta Belajar Technical Marketing & Tracking',
    badge: '8 BAB LENGKAP',
    tagline: 'Lelang iklan, Meta Ads, Google Ads, GTM, GA4, dan Meta Conversions API (CAPI).',
    description:
      'Menghubungkan landing page, server-side tracking, dan algoritma lelang iklan supaya setiap rupiah budget promosi memiliki data atribusi yang akurat dan terbebas dari ad-blocker.',
    chaptersCount: 8,
  },
  {
    id: 'vibe-coding',
    name: 'Peta Belajar Vibe Coding & Tooling Modern',
    badge: '6 BAB LENGKAP',
    tagline: 'Claude Code CLI, Cursor, MCP Server, dan arsitektur pengembangan berbasis AI.',
    description:
      'Metodologi rekayasa modern di mana insinyur perangkat lunak bertindak sebagai arsitek orkestrator yang mengarahkan LLM untuk menulis kode bersih, aman, dan langsung deploy ke cloud.',
    chaptersCount: 9,
  },
];

// -----------------------------------------------------------------------------
// 2. ARSITEKTUR SISTEM KEAMANAN TERSTRUKTUR (5 LAYERS OF SECURITY)
// -----------------------------------------------------------------------------
export const KLASIK_SECURITY_LAYERS: SecurityLayer[] = [
  {
    level: 'LAPISAN 01',
    title: 'Keamanan Jaringan & Enkripsi Transport (SSL/TLS 1.3)',
    description:
      'Setiap website dan aplikasi diproteksi dengan enkripsi TLS 1.3 mutakhir, HSTS header aktif, dan integrasi CDN global anti-DDoS untuk mencegah penyadapan data pengunjung.',
    measures: [
      'Sertifikat SSL/TLS otomatis tingkat perbankan (HTTPS)',
      'Perlindungan mitigasi serangan DDoS dan bot jahat via Cloudflare Edge',
      'Pemberlakuan HTTP Strict Transport Security (HSTS) untuk mencegah downgrade attack',
      'Konfigurasi DNSSEC untuk proteksi dari DNS spoofing & pembajakan domain',
    ],
    icon: 'ShieldCheck',
  },
  {
    level: 'LAPISAN 02',
    title: 'Hardening Server VPS & Zero-Trust Private Network',
    description:
      'Konfigurasi sistem operasi Linux yang diperketat: akses login SSH tanpa password (hanya kunci publik kriptografi), isolasi port publik, dan jaringan privat VPN Tailscale.',
    measures: [
      'Akses root dinonaktifkan total; login hanya melalui Ed25519 SSH Keys pribadi',
      'Firewall UFW memblokir seluruh port publik kecuali HTTP/HTTPS standar',
      'Fail2ban aktif memantau dan memblokir otomatis IP yang mencoba brute-force',
      'Mesh VPN Tailscale WireGuard: kelola server dari mana saja tanpa membuka port SSH ke publik',
    ],
    icon: 'Server',
  },
  {
    level: 'LAPISAN 03',
    title: 'Keamanan Aplikasi & Integritas Data (Sanitasi Input)',
    description:
      'Aplikasi web dibangun dengan arsitektur tahan tembus terhadap ancaman OWASP Top 10, terutama SQL Injection dan Cross-Site Scripting (XSS).',
    measures: [
      'Parameterized Queries (Prepared Statements) 100% kebal terhadap SQL Injection',
      'Validasi skema input ketat dengan Zod / Pydantic di sisi server',
      'Sanitasi otomatis output untuk mencegah eksekusi skrip berbahaya (XSS)',
      'Token CSRF dan cookie sesi terproteksi dengan atribut SameSite & HttpOnly',
    ],
    icon: 'Lock',
  },
  {
    level: 'LAPISAN 04',
    title: 'Pengamanan AI Agent & Guardrails Konteks (Anti-Halusinasi)',
    description:
      'Arsitektur agent cerdas dengan batasan ketat (Guardrails) agar AI tidak berhalusinasi, tidak membocorkan data rahasia perusahaan, dan tidak dapat dimanipulasi melalui Prompt Injection.',
    measures: [
      'Isolasi System Prompt dengan pemisahan tegas antara instruksi sistem dan input pengguna',
      'Penyaringan data sensitif (API key, password, PII) sebelum payload dikirim ke LLM',
      'Wajibkan konfirmasi otorisasi staf manusia untuk setiap aksi pengubahan data / order',
      'Audit logging lengkap untuk setiap pemanggilan fungsi eksternal oleh model AI',
    ],
    icon: 'Cpu',
  },
  {
    level: 'LAPISAN 05',
    title: 'Pemulihan Bencana & Backup Harian Terenkripsi (Disaster Recovery)',
    description:
      'Jaminan kelangsungan bisnis melalui skrip pencadangan database otomatis harian yang dienkripsi dan disimpan di lokasi penyimpanan objek awan (Object Storage) terpisah.',
    measures: [
      'Pencadangan database otomatis berkala setiap 24 jam',
      'Enkripsi cadangan data (AES-256) sebelum ditransfer ke cloud storage (AWS S3 / R2)',
      'Prosedur Restore Teruji: sistem dapat dipulihkan dalam waktu kurang dari 15 menit',
      'Penyimpanan cadangan di zona geografis terpisah untuk mengantisipasi insiden data center',
    ],
    icon: 'Database',
  },
];

// -----------------------------------------------------------------------------
// 3. KATALOG 8 LAYANAN RESMI DENGAN HARGA RINCI (MULAI 500 RIBUAN)
// -----------------------------------------------------------------------------
export const KLASIK_SERVICES: ServicePackage[] = [
  {
    id: 'website-starter',
    code: '01',
    title: 'Website Online Kilat / Landing Page Starter',
    price: 'Rp 500.000',
    originalPrice: 'Rp 850.000',
    tagline: 'Landing page dan website bisnis yang cepat, mudah di-tracking, dan disusun mengikuti kebutuhan pengunjung Anda.',
    category: 'Website Online',
    badge: 'Mulai Rp 500 Ribuan',
    description:
      'Pembuatan landing page profesional 1 halaman siap tayang online untuk UMKM, jasa, profesional, dan personal branding. Desain modern, loading instan di bawah 1 detik, lengkap dengan tombol WhatsApp interaktif.',
    scope: [
      'Halaman landing page kustom (Hero, Profil/Layanan, Bukti Sosial, Kontak WhatsApp)',
      'Desain mobile-first super responsif (tampil sempurna di HP, tablet & laptop)',
      'Setup domain kustom (.com / .id / .my.id) & hosting cloud berkecepatan tinggi',
      'Sertifikat keamanan SSL HTTPS gratis selamanya (gembok hijau aktif)',
      'Tombol WhatsApp melayang (*Floating CTA*) dengan draf pesan otomatis',
      'Integrasi tombol sosial media & Google Maps lokasi bisnis',
    ],
    deliverables: [
      'Website live online dan dapat diakses dari seluruh dunia',
      'Source code lengkap & hak kepemilikan aset 100% milik Anda',
      'Panduan singkat penggantian teks/gambar mandiri',
    ],
    securityHighlights: [
      'SSL/TLS 1.3 enkripsi penuh',
      'Proteksi form dari serangan bot spam',
      'Uptime server 99.9% tanpa biaya hosting bulanan mahal',
    ],
    techStack: ['Astro / React', 'Tailwind CSS', 'Cloudflare Pages / Vercel', 'SSL HTTPS'],
    duration: '1 - 2 Hari Kerja',
    idealFor: 'Pemilik usaha baru, pekerja lepas, konsultan, dan penjual produk yang ingin segera memiliki website kredibel dengan biaya terjangkau.',
    featured: true,
  },
  {
    id: 'web-app-dashboard',
    code: '02',
    title: 'Web App, Portal Klien & Dashboard Internal',
    price: 'Rp 3.500.000',
    originalPrice: 'Rp 5.500.000',
    tagline: 'Dashboard, portal klien, dan aplikasi internal custom yang mengikuti alur kerja tim Anda — menggantikan kerja manual.',
    category: 'Aplikasi & Dashboard',
    badge: 'Solusi Sistem',
    description:
      'Pembangunan sistem aplikasi web khusus untuk operasional bisnis Anda: manajemen inventori gudang, sistem approval cuti/keuangan, portal klien mandiri, atau CRM pencatatan prospek terpusat.',
    scope: [
      'Perancangan skema database relasional terstruktur (PostgreSQL / Supabase)',
      'Sistem login autentikasi aman dengan Role-Based Access Control (Admin, Staf, Klien)',
      'Dashboard manajemen data dengan tabel dinamis, pencarian instan, dan sorting',
      'Fitur ekspor laporan transaksi/data ke format Excel & PDF resmi berlogo',
      'Automasi notifikasi aksi via WhatsApp / Email saat ada status data baru',
    ],
    deliverables: [
      'Aplikasi web fungsional siap pakai sesuai proses bisnis internal',
      'Dokumentasi skema database & video panduan operasional tim',
      'Garansi pemeliharaan teknis & pendampingan sistem 60 hari',
    ],
    securityHighlights: [
      'Password hashing bcrypt dengan salt kuat',
      'Parameterized query anti-SQL Injection',
      'Token sesi terproteksi SameSite & HttpOnly',
      'Pencadangan database otomatis harian ke cloud storage',
    ],
    techStack: ['React', 'Next.js / Node.js', 'PostgreSQL / Supabase', 'Prisma ORM', 'Tailwind CSS'],
    duration: '7 - 14 Hari Kerja',
    idealFor: 'Bisnis dengan alur kerja internal yang rumit dan ingin beralih dari Excel manual ke sistem terintegrasi yang rapi dan terukur.',
    featured: true,
  },
  {
    id: 'ai-agent-custom',
    code: '03',
    title: 'AI Agent Custom & Asisten Sistem',
    price: 'Rp 2.000.000',
    originalPrice: 'Rp 3.200.000',
    tagline: 'Agent AI custom untuk menjawab pertanyaan, membantu tim, dan mengerjakan tugas berulang sesuai alur kerja Anda.',
    category: 'AI & Otomasi',
    badge: 'Kecerdasan Buatan',
    description:
      'Merancang agen AI mandiri yang terhubung dengan basis pengetahuan internal (RAG). Agen dapat memanggil API, membaca dokumen panduan, dan memproses data kompleks secara konsisten.',
    scope: [
      'Penyusunan Knowledge Base cerdas dari dokumen PDF / Excel / SOP perusahaan',
      'Integrasi Tool Calling / Function Calling untuk membaca database live',
      'Guardrails ketat anti-halusinasi dan pembatasan konteks bisnis',
      'Pengujian akurasi jawaban dengan dataset percakapan nyata',
    ],
    deliverables: [
      'Sistem AI Agent mandiri yang siap dihubungkan ke antarmuka web / API',
      'Dokumentasi konfigurasi prompt & skema pemanggilan fungsi',
      'Akses pengelolaan dokumen knowledge base secara mandiri',
    ],
    securityHighlights: [
      'Sandbox eksekusi fungsi terisolasi',
      'Sensor otomatis informasi identitas pribadi (PII)',
      'Rate-limiting API untuk pencegahan lonjakan biaya token',
    ],
    techStack: ['Claude 3.7 Sonnet', 'OpenAI API', 'Python / Node.js', 'LangChain', 'pgvector'],
    duration: '5 - 10 Hari Kerja',
    idealFor: 'Perusahaan yang membutuhkan asisten riset, verifikasi data internal, atau asisten otomatisasi yang cerdas dan patuh aturan.',
  },
  {
    id: 'whatsapp-ai-agent',
    code: '04',
    title: 'WhatsApp AI Agent & Customer Care Otomatis',
    price: 'Rp 2.000.000',
    originalPrice: 'Rp 3.500.000',
    tagline: 'Alur FAQ dan pengumpulan kebutuhan awal dengan sumber yang disetujui serta handoff ke tim.',
    category: 'AI & Otomasi',
    badge: 'Paling Diminati',
    description:
      'Asisten WhatsApp 24 jam yang merespons pertanyaan calon pembeli seketika menggunakan bahasa Indonesia yang luwes, mengumpulkan kualifikasi leads, dan mengalihkan ke CS manusia saat dibutuhkan.',
    scope: [
      'Koneksi WhatsApp Business Cloud API resmi tanpa risiko banned akun',
      'Penyesuaian gaya bicara AI agar ramah, sopan, dan sesuai brand Anda',
      'Kualifikasi prospek otomatis: nama, lokasi, produk yang diminati, dan budget',
      'Mekanisme Handoff Manusia: notifikasi langsung ke admin saat ada chat penting',
      'Sinkronisasi otomatis percakapan ke Google Sheets / CRM',
    ],
    deliverables: [
      'Nomor WhatsApp bisnis aktif dengan bot AI cerdas beroperasi 24/7',
      'Spreadsheet rekap data leads yang masuk secara realtime',
      'Panduan tim CS untuk memantau dan mengambil alih obrolan',
    ],
    securityHighlights: [
      'Guardrail tegas: bot dilarang menjanjikan diskon di luar aturan',
      'Data nomor pelanggan terenkripsi',
      'Webhook terverifikasi dengan tanda tangan digital HMAC',
    ],
    techStack: ['WhatsApp Cloud API', 'Claude / Gemini Flash', 'n8n Workflow', 'Google Sheets API'],
    duration: '3 - 5 Hari Kerja',
    idealFor: 'Bisnis online, klinik, agen properti, dan jasa yang sering kehilangan prospek karena admin telat membalas chat di luar jam kerja.',
    featured: true,
  },
  {
    id: 'automation-workflow',
    code: '05',
    title: 'Otomasi Workflow Bisnis (Automation)',
    price: 'Rp 1.200.000',
    originalPrice: 'Rp 1.800.000',
    tagline: 'Otomasi workflow bisnis — follow-up leads, laporan, integrasi antar tools, dan pekerjaan berulang — supaya tim Anda fokus ke hal penting.',
    category: 'AI & Otomasi',
    badge: 'Efisiensi Waktu',
    description:
      'Menghilangkan pekerjaan ketik-ulang manual antar aplikasi. Alur kerja berjalan otomatis: dari formulir masuk, data tercatat ke CRM, invoice PDF terkirim, hingga notifikasi ke Telegram tim.',
    scope: [
      'Audit proses operasional manual yang paling menyita waktu staf',
      'Pembuatan alur otomatisasi n8n / Make dengan penanganan error teruji',
      'Integrasi multi-aplikasi: Google Workspace, WhatsApp, Telegram, Email, Notion',
      'Pembuatan template laporan penjualan harian/mingguan otomatis',
    ],
    deliverables: [
      'Skenario alur kerja otomasi aktif dan berjalan stabil 24/7',
      'Dokumentasi diagram alur kerja dan petunjuk penanganan kendala',
      'Garansi pendampingan operasional selama 30 hari',
    ],
    securityHighlights: [
      'Enkripsi penyimpanan token API dan kredensial',
      'Pemisahan lingkungan kerja staging dan produksi',
      'Pemberitahuan darurat instan jika terjadi gangguan koneksi server',
    ],
    techStack: ['n8n Self-Hosted', 'Make.com', 'Webhooks', 'REST API', 'Google APIs'],
    duration: '2 - 4 Hari Kerja',
    idealFor: 'Pemilik bisnis dan tim operasional yang lelah dengan copy-paste data manual setiap hari.',
  },
  {
    id: 'cloud-server-vps',
    code: '06',
    title: 'Setup Server Cloud VPS & Hardening Keamanan',
    price: 'Rp 750.000',
    originalPrice: 'Rp 1.200.000',
    tagline: 'Arsitektur cloud mandiri yang tangguh, hemat biaya bulanan, dan terisolasi aman dengan Zero-Trust.',
    category: 'Infrastruktur Cloud',
    badge: 'Mulai Rp 750rb',
    description:
      'Konfigurasi server cloud VPS Linux (Ubuntu/Debian) siap produksi dengan container Docker, reverse proxy Caddy (SSL otomatis), dan jaringan privat VPN Tailscale agar server Anda aman dari intaian hacker publik.',
    scope: [
      'Hardening sistem Linux: matikan akses root password, aktifkan login SSH Key-Only',
      'Konfigurasi firewall UFW ketat & proteksi brute-force dengan fail2ban',
      'Setup Docker Engine & Docker Compose untuk isolasi container aplikasi',
      'Konfigurasi Caddy Web Server dengan auto-renew sertifikat SSL HTTPS Let\'s Encrypt',
      'Instalasi Tailscale WireGuard VPN: akses remote server tanpa perlu buka port SSH ke publik',
      'Penyusunan skrip backup otomatis berkala database ke object storage',
    ],
    deliverables: [
      'Server VPS aktif, teruji performanya, dan terlindungi penuh',
      'File template `docker-compose.yml` siap pakai untuk aplikasi Anda',
      'Dokumentasi kredensial & panduan maintenance berkala',
    ],
    securityHighlights: [
      'Port SSH publik 22 ditutup total dari internet luar',
      'Enkripsi jaringan privat WireGuard 256-bit',
      'Firewall UFW memblokir seluruh lalu lintas yang tidak sah',
    ],
    techStack: ['Ubuntu Linux', 'Docker', 'Caddy Server', 'Tailscale WireGuard', 'fail2ban', 'UFW'],
    duration: '1 Hari Kerja',
    idealFor: 'Developer, startup, atau pemilik bisnis yang ingin memiliki server mandiri hemat biaya tanpa terikat tagihan platform PaaS mahal.',
  },
  {
    id: 'meta-capi-tracking',
    code: '07',
    title: 'Setup Meta Conversions API (CAPI) & Tracking Akurat',
    price: 'Rp 650.000',
    originalPrice: 'Rp 1.000.000',
    tagline: 'Pemetaan Pixel dan server events, event deduplication, consent, serta pemeriksaan kualitas tracking.',
    category: 'Keamanan & Tracking',
    badge: 'Solusi Data Akurat',
    description:
      'Solusi server-side tracking untuk pengiklan Facebook & Instagram Ads. Mengirim data pembelian dan leads langsung dari server ke Meta untuk memintas pemblokiran browser iOS, dengan skor Event Match Quality 8.5+.',
    scope: [
      'Konfigurasi Google Tag Manager (GTM) Server-Side via Cloud / Stape',
      'Implementasi deduplikasi event browser pixel vs server event (Event ID match)',
      'Setup standar event esensial: PageView, ViewContent, Lead, AddToCart, Purchase',
      'Verifikasi domain resmi Meta Events Manager & konfigurasi Aggregated Event Measurement',
      'Audit kesehatan tracking dan optimalisasi parameter pengguna (hash email, no HP)',
    ],
    deliverables: [
      'Sistem CAPI aktif dengan status event terverifikasi hijau di Events Manager',
      'Laporan Event Match Quality Score minimal 8.0 - 9.0+',
      'Panduan pembacaan data atribusi pada Ads Manager',
    ],
    securityHighlights: [
      'Data pengguna di-hash dengan algoritma SHA-256 sebelum dikirim',
      'Kepatuhan privasi data dan perlindungan cookie pihak pertama',
    ],
    techStack: ['Meta Conversions API', 'Google Tag Manager', 'Stape.io / Cloud Run', 'Meta Pixel'],
    duration: '1 - 2 Hari Kerja',
    idealFor: 'Pengiklan Meta & Google Ads yang ingin memaksimalkan ROAS dengan data konversi yang akurat dan terhindar dari sinyal hilang.',
  },
  {
    id: 'google-ads-tracking',
    code: '08',
    title: 'Google Ads & Google Analytics 4 (GA4) Tracking Terukur',
    price: 'Rp 850.000',
    originalPrice: 'Rp 1.400.000',
    tagline: 'Search, Performance Max, dan YouTube Ads untuk menangkap orang yang sedang mencari produk Anda. Fokus pada intent, bukan impresi.',
    category: 'Keamanan & Tracking',
    badge: 'Marketing Terukur',
    description:
      'Setup kampanye Google Ads berbasis kata kunci niat beli tinggi (high-intent), dikombinasikan dengan pelacakan konversi presisi di GA4 dan Google Tag Manager.',
    scope: [
      'Riset kata kunci niat beli (Transactional Keywords) vs kata kunci informasi',
      'Struktur kampanye Google Search / Performance Max yang rapi',
      'Pemasangan Conversion Tracking Google Ads & integrasi GA4',
      'Negative Keywords list untuk mencegah pemborosan budget klik tak berguna',
    ],
    deliverables: [
      'Akun Google Ads tersetup rapi dengan tracking konversi teruji',
      'Dashboard ringkasan metrik di Google Looker Studio',
      'Dokumentasi kata kunci potensial untuk scaling',
    ],
    securityHighlights: [
      'Perlindungan dari click fraud (klik bot fiktif)',
      'Batasan alokasi budget harian yang terkontrol ketat',
    ],
    techStack: ['Google Ads', 'GA4', 'Google Tag Manager', 'Google Looker Studio'],
    duration: '2 - 3 Hari Kerja',
    idealFor: 'Bisnis jasa, B2B, rental, klinik, atau produk yang sering dicari orang secara aktif di Google Search.',
  },
];

// -----------------------------------------------------------------------------
// 4. KURIKULUM LENGKAP 3 TRACK (AI, DIGITAL MARKETING, VIBE CODING)
// -----------------------------------------------------------------------------
export const KLASIK_LEARNING_CHAPTERS: LearningChapter[] = [
  // ===================== TRACK 1: AI (8 BAB) =====================
  {
    id: 'ai-00',
    trackId: 'ai',
    code: 'Bab 00',
    title: 'Peta Belajar AI untuk Bisnis',
    kicker: 'Prinsip Kerja & Fondasi',
    summary:
      'AI bukan tujuan. AI adalah cara mempercepat pekerjaan yang sudah jelas ukuran berhasilnya. Materi ini dibuat untuk membantu pembaca mengambil keputusan praktis, bukan sekadar mengenal istilah AI.',
    audience: 'Pemilik bisnis, developer, dan tim yang baru mulai memakai AI dan belum tahu harus mulai dari mana.',
    subchapters: [
      {
        id: 'ai-00-1',
        num: '00.1',
        title: 'Cara Menggunakan Materi Pembelajaran Ini',
        situation: 'Banyak orang membaca tutorial AI namun saat kembali ke pekerjaan, waktu mereka tetap habis untuk tugas manual.',
        explanation: 'Urutan yang benar: kenali alur kerja berulang -> tentukan standar input & output -> tulis instruksi eksplisit -> baru pilih tools. Pelajari bab per bab dan terapkan ke 1 pekerjaan nyata.',
        practice: 'Pilih satu pekerjaan kecil yang paling sering Anda kerjakan berulang (misal: merangkum email klien, membalas komplain, atau menyusun laporan mingguan). Terapkan pola brief 4 pilar.',
        mistakes: 'Mengira AI tahu konteks bisnis Anda secara gaib tanpa pernah diberi dokumen profil, batasan, atau contoh format output yang diinginkan.',
        checklist: [
          'Sudah menentukan satu pekerjaan nyata untuk diuji minggu ini.',
          'Tidak menghafal prompt internet mentah-mentah tanpa menyesuaikan konteks.',
          'Mengetahui siapa yang memegang tanggung jawab akhir atas hasil kerja AI.',
        ],
      },
      {
        id: 'ai-00-2',
        num: '00.2',
        title: 'Tiga Jalur: Pakai AI, Bikin Otomasi, atau Bangun Agent',
        situation: 'Banyak yang ingin langsung membuat AI Agent serba otomatis padahal kebutuhan sebenarnya hanyalah template chat atau workflow integrasi 2 tools.',
        explanation: 'Jalur 1 (Pakai AI): Cukup pakai ChatGPT/Claude untuk tugas sekali jalan.\nJalur 2 (Otomasi): Gunakan n8n/Make untuk alur teratur (Trigger -> Action).\nJalur 3 (AI Agent): Gunakan agent jika butuh keputusan mandiri, pemanggilan tools eksternal (API/database), dan konteks dinamis.',
        practice: 'Petakan tugas Anda ke dalam diagram 3 jalur. Jika alurnya kaku (contoh: "setiap form masuk, kirim ke WhatsApp"), gunakan webhook biasa tanpa AI.',
        mistakes: 'Memaksa agent mengerjakan alur deterministik pasti berhasil, sehingga memicu halusinasi dan boros biaya token API.',
        checklist: [
          'Bisa membedakan pekerjaan sekali jalan vs pekerjaan terstruktur.',
          'Memilih solusi paling sederhana sebelum melompat ke arsitektur rumit.',
          'Menyediakan rute fallback manual saat API gagal berjalan.',
        ],
      },
      {
        id: 'ai-00-3',
        num: '00.3',
        title: 'Checklist Kesiapan Sebelum Memakai AI di Sistem Bisnis',
        situation: 'Ingin mengintegrasikan AI ke layanan pelanggan, namun dokumen SOP dan batasan privasi belum pernah ditulis.',
        explanation: 'AI tidak bisa merapikan kekacauan proses internal. Jika SOP manusia masih ambigu, AI hanya akan mempercepat penyebaran kekeliruan ke pelanggan.',
        practice: 'Tulis lembar batasan wewenang: apa yang boleh dijawab langsung oleh AI, dan kata kunci apa yang WAJIB dialihkan ke staf manusia.',
        mistakes: 'Memberikan wewenang kepada AI untuk menjanjikan komitmen finansial atau teknis tanpa persetujuan manusia.',
        checklist: [
          'Memiliki dokumen profil bisnis dan FAQ resmi yang disepakati.',
          'Menandai data rahasia agar tidak dimasukkan ke prompt publik.',
          'Menyiapkan kanal eskalasi darurat ke staf tim.',
        ],
      },
    ],
  },
  {
    id: 'ai-01',
    trackId: 'ai',
    code: 'Bab 01',
    title: 'Fondasi: AI Itu Bisa Apa dan Tidak Bisa Apa',
    kicker: 'Prinsip Kerja LLM',
    summary:
      'AI bukan manusia ajaib dan bukan database penentu kebenaran mutlak. AI adalah mesin pemprediksi token kata berdasarkan probabilitas statistik. Pahami cara kerjanya agar tidak tertipu rasa yakinnya.',
    audience: 'Siapa pun yang ingin memahami batas kemampuan model bahasa besar (LLM) secara objektif.',
    subchapters: [
      {
        id: 'ai-01-1',
        num: '01.1',
        title: 'AI Bukan Karyawan Baru, Melainkan Pekerja Magang Super Cepat',
        situation: 'Sering merasa kecewa karena hasil AI terasa hambar atau generik.',
        explanation: 'Perlakukan AI seperti pekerja magang cerdas yang membaca jutaan buku namun belum pernah magang di kantor Anda. Ia butuh brief tertulis, referensi gaya bahasa, batasan, dan review.',
        practice: 'Sertakan 2 contoh paragraf yang menurut Anda ideal sebagai patokan tone of voice.',
        mistakes: 'Memberikan instruksi 1 kalimat pendek lalu heran mengapa hasilnya generik.',
        checklist: ['Menyertakan contoh input-output (Few-shot prompting).', 'Meninjau draf sebelum dipublikasikan.'],
      },
      {
        id: 'ai-01-2',
        num: '01.2',
        title: 'Halusinasi: Kenapa Jawaban Salah Terdengar Begitu Yakin',
        situation: 'AI mengutip pasal hukum palsu atau angka riset fiktif dengan nada sangat meyakinkan.',
        explanation: 'LLM dirancang untuk menghasilkan kalimat yang runtut, bukan memverifikasi kebenaran ontologis. Ketika kekurangan data pasti, model mengisi kekosongan dengan tebakan probabilistik.',
        practice: 'Gunakan Grounded Prompting: perintahkan model HANYA menjawab berdasarkan teks referensi yang dilampirkan di dalam XML tag. Jika tidak ada di teks, jawab: "Data tidak tersedia di dokumen acuan."',
        mistakes: 'Meminta AI menganalisis angka tanpa melampirkan file sumber data aslinya.',
        checklist: ['Memberikan data sumber di dalam prompt (RAG pattern).', 'Tegas melarang AI mengarang saat data kurang.'],
      },
    ],
  },
  {
    id: 'ai-02',
    trackId: 'ai',
    code: 'Bab 02',
    title: 'Prompt yang Menghasilkan Output Layak Pakai',
    kicker: 'Prompt Engineering Praktis',
    summary:
      'Tinggalkan prompt panjang bertele-tele yang puitis. Gunakan struktur 4 bagian fungsional: Konteks Bisnis, Tugas Spesifik, Batasan Ketat, dan Format Output.',
    audience: 'Developer dan praktisi bisnis yang ingin output AI konsisten dan terstruktur.',
    subchapters: [
      {
        id: 'ai-02-1',
        num: '02.1',
        title: 'Kerangka 4 Bagian: Konteks, Tugas, Batasan, Format',
        situation: 'Prompt yang sama kadang menghasilkan jawaban panjang, kadang ringkas, dan formatnya sering berubah-ubah.',
        explanation: 'Struktur baku 4 bagian menghilangkan ambiguitas:\n1. Konteks: Siapa Anda, siapa audiensnya.\n2. Tugas: Kata kerja tindakan spesifik.\n3. Batasan: Apa yang TIDAK boleh dilakukan.\n4. Format: JSON, Markdown table, atau bullet list.',
        practice: 'Format template prompt:\n```markdown\n<context>Perusahaan logistik di Banten</context>\n<task>Buat draf email penawaran armada</task>\n<constraints>Maksimal 150 kata, jangan tawarkan diskon</constraints>\n<format>Format: Subjek, Pembuka, Poin Nilai, CTA WhatsApp</format>\n```',
        mistakes: 'Mencampuradukkan perintah tugas dengan batasan larangan dalam satu paragraf panjang.',
        checklist: ['Ada pemisahan eksplisit dengan tag XML.', 'Format output dispesifikasikan secara kaku.'],
      },
      {
        id: 'ai-02-2',
        num: '02.2',
        title: 'Structured Outputs & JSON Schema: Memaksa Output Valid',
        situation: 'Mengintegrasikan LLM ke backend namun model sering membalas dengan pembuka "Tentu, ini datanya:" dan membungkus JSON dengan markdown ```json.',
        explanation: 'Gunakan mode Structured Outputs asli dari provider (OpenAI response_format json_schema, Gemini responseSchema, atau Zod schema). Model di-guarantee 100% menghasilkan JSON valid yang lolos parser backend tanpa regex pembersih.',
        practice: 'Definisikan schema Zod:\n```typescript\nimport { z } from "zod";\nexport const LeadSchema = z.object({\n  name: z.string(),\n  phone: z.string(),\n  budget: z.number(),\n  intent: z.enum(["high", "medium", "low"])\n});\n```',
        mistakes: 'Hanya menulis "tolong keluarkan JSON" di prompt teks tanpa mengaktifkan schema constraint di level API.',
        checklist: ['Schema divalidasi dengan Zod di sisi backend.', 'Fallback retry otomatis jika JSON parse gagal.'],
      },
    ],
  },
  {
    id: 'ai-03',
    trackId: 'ai',
    code: 'Bab 03',
    title: 'Konteks Bisnis: Cara Menyuapi AI Data Perusahaan',
    kicker: 'Knowledge Base & RAG Sederhana',
    summary:
      'Model AI tercerdas di dunia tidak berguna jika tidak tahu harga paket, kebijakan retur, dan spesifikasi produk Anda. Masukkan data ke jendela konteks secara rapi.',
    audience: 'Tim yang ingin AI menjawab sesuai SOP perusahaan tanpa harus melatih ulang model (fine-tuning).',
    subchapters: [
      {
        id: 'ai-03-1',
        num: '03.1',
        title: 'Menyusun Dokumen Profil Perusahaan yang Mudah Dibaca Mesin',
        situation: 'Menyuapi AI dengan brosur gambar desain PDF penuh hiasan yang susah diekstrak teksnya.',
        explanation: 'Format terbaik untuk AI adalah Markdown atau JSON terstruktur. Buat dokumen `sop_faq.md` yang memuat pertanyaan, jawaban pasti, aturan garansi, dan harga resmi.',
        practice: 'Susun file `knowledge.md` sederhana dengan heading yang jelas untuk setiap topik bisnis.',
        mistakes: 'Membiarkan dokumen acuan memuat harga lama yang bertentangan dengan promo baru.',
        checklist: ['Dokumen berbentuk teks bersih Markdown.', 'Hanya ada 1 versi kebenaran yang valid.'],
      },
      {
        id: 'ai-03-2',
        num: '03.2',
        title: 'Vector Database & Chunking: pgvector untuk Data Produksi',
        situation: 'Dokumen panduan SOP perusahaan mencapai 300 halaman dan melampaui batas context window atau boros biaya jika dikirim utuh setiap chat.',
        explanation: 'Pecah dokumen menjadi potongan kecil (chunks) 500-800 token dengan overlap 100 token. Simpan embedding vektor di PostgreSQL menggunakan ekstensi `pgvector`. Saat pengguna bertanya, lakukan cosine similarity search untuk mengambil 3 potongan paling relevan saja.',
        practice: 'Query pencarian vektor di PostgreSQL:\n```sql\nSELECT content, 1 - (embedding <=> $1) AS similarity\nFROM knowledge_chunks\nORDER BY embedding <=> $1\nLIMIT 3;\n```',
        mistakes: 'Membuat potongan chunk terlalu kecil (kehilangan konteks) atau terlalu besar (memasukkan informasi sampah).',
        checklist: ['Ekstensi pgvector aktif di PostgreSQL.', 'Metrik kemiripan cosine distance teruji akurat.'],
      },
    ],
  },
  {
    id: 'ai-04',
    trackId: 'ai',
    code: 'Bab 04',
    title: 'AI untuk Marketing: Dari Copywriting Hingga Leads',
    kicker: 'Akuisisi Pelanggan dengan AI',
    summary:
      'Gunakan AI untuk membedah sudut pandang nyeri pelanggan (pain points), variasi headline iklan, dan kualifikasi prospek di chat.',
    audience: 'Pemasar digital, pemilik toko online, dan tim penjualan.',
    subchapters: [
      {
        id: 'ai-04-1',
        num: '04.1',
        title: 'Menganalisis Review Kompetitor untuk Menemukan Sudut Iklan',
        situation: 'Kehabisan ide sudut pandang penulisan iklan (angle copy) untuk produk yang sudah umum.',
        explanation: 'Kumpulkan 50 ulasan bintang 1-3 dari produk kompetitor, masukkan ke AI, lalu minta: "Kelompokkan kekecewaan terbesar pembeli ini menjadi 5 sudut penawaran produk saya."',
        practice: 'Gunakan prompt perbandingan kelemahan vs keunggulan unik produk Anda.',
        mistakes: 'Hanya meminta: "Tuliskan iklan menarik" tanpa data keluhan riil konsumen.',
        checklist: ['Menggunakan data keluhan pembeli nyata.', 'Menghasilkan minimal 5 variasi sudut pandang.'],
      },
      {
        id: 'ai-04-2',
        num: '04.2',
        title: 'Kualifikasi Prospek Otomatis di Percakapan WhatsApp',
        situation: 'Customer service menghabiskan 4 jam sehari menjawab chat prospek yang tidak punya anggaran atau sekadar coba-coba.',
        explanation: 'Rancang bot yang mengajukan 3 pertanyaan kualifikasi ramah (skala usaha, tenggat waktu kebutuhan, dan estimasi budget). Bot otomatis menandai tag prospek: "Hot Lead" jika budget di atas Rp 2 juta, dan langsung mengarahkan ke telepon staf penutup (closer).',
        practice: 'Instruksikan bot: "Jika pengguna menyebut budget di bawah Rp 500rb, tawarkan paket starter website atau materi mandiri. Jika di atas Rp 2jt, jadwalkan panggilan Google Meet."',
        mistakes: 'Langsung menodong pertanyaan budget di pesan pertama sebelum memberikan rasa aman dan nilai pembuka.',
        checklist: ['Alur kualifikasi terasa natural seperti obrolan manusia.', 'Hot leads dipisahkan otomatis ke notifikasi admin.'],
      },
    ],
  },
  {
    id: 'ai-05',
    trackId: 'ai',
    code: 'Bab 05',
    title: 'Otomasi Alur Kerja (Workflow Automation) dengan AI',
    kicker: 'Integrasi n8n & Make',
    summary:
      'Menghubungkan AI dengan tools operasional: saat ada form leads baru, AI merangkum kebutuhan dan mengirim notifikasi berprioritas ke WhatsApp staf.',
    audience: 'Developer dan tim operasional yang ingin menghubungkan API tanpa ngoding dari nol.',
    subchapters: [
      {
        id: 'ai-05-1',
        num: '05.1',
        title: 'Arsitektur Trigger, Filter, AI Node, dan Action',
        situation: 'Membuat alur n8n yang memanggil AI untuk setiap aktivitas, sehingga biaya token jebol.',
        explanation: 'Saring dulu dengan logika aturan pasti (IF/ELSE). Hanya lempar data ke node AI jika data tersebut memang membutuhkan pembacaan teks natural.',
        practice: 'Susun alur: Form Masuk -> Validasi Email/Nomor (RegEx) -> Rangkum Kebutuhan (AI) -> Catat ke Sheets -> Kirim WhatsApp.',
        mistakes: 'Menggunakan AI untuk memvalidasi format email padahal fungsi regex jauh lebih cepat dan gratis.',
        checklist: ['Hanya menggunakan AI di langkah yang benar-benar membutuhkan penalaran.', 'Memasang penanganan error jika API down.'],
      },
      {
        id: 'ai-05-2',
        num: '05.2',
        title: 'Webhook Error Handling & Dead Letter Queue (DLQ)',
        situation: 'Server API AI mengalami timeout sejenak (504 error) dan pesan pelanggan hilang tanpa jejak.',
        explanation: 'Setiap event webhook masuk wajib disimpan ke antrean database sebelum diproses (Ingest-First Pattern). Pasang mekanisme auto-retry 3 kali dengan exponential backoff. Jika tetap gagal, masukkan ke antrean Dead Letter Queue untuk ditinjau manual.',
        practice: 'Konfigurasi n8n Retry on Fail: Max Tries = 3, Wait Between Tries = 5000ms.',
        mistakes: 'Memproses webhook langsung di thread utama tanpa sistem pencatatan riwayat (audit log).',
        checklist: ['Payload pesan tersimpan sebelum proses AI dimulai.', 'Notifikasi Telegram/WA aktif jika webhook berulang kali gagal.'],
      },
    ],
  },
  {
    id: 'ai-06',
    trackId: 'ai',
    code: 'Bab 06',
    title: 'Membangun AI Agent WhatsApp Ber-Guardrails',
    kicker: 'Layanan Pelanggan 24/7',
    summary:
      'Merancang bot WhatsApp cerdas yang tidak bisa dibobol dengan prompt injection dan otomatis mengoper obrolan ke admin manusia saat situasi genting.',
    audience: 'Bisnis yang ingin layanan pelanggan responsif 24 jam tanpa risiko reputasi.',
    subchapters: [
      {
        id: 'ai-06-1',
        num: '06.1',
        title: 'Mekanisme Handoff Manusia & Boundary Safety',
        situation: 'Pelanggan marah dan meminta berbicara dengan manajer, tetapi bot terus membalas dengan kalimat template yang memicu emosi.',
        explanation: 'Pasang sensor sentimen dan kata kunci darurat ("telepon", "batal", "komplain", "marah"). Begitu terdeteksi, bot berhenti membalas dan langsung kirim notifikasi ke HP admin.',
        practice: 'Definisikan aturan `if sentiment == negative -> trigger human_takeover`.',
        mistakes: 'Mengunci pelanggan dalam putaran bot tanpa opsi berbicara dengan manusia.',
        checklist: ['Tersedia tombol alihkan ke staf manusia kapan saja.', 'Bot menghentikan respon otomatis saat admin mengambil alih.'],
      },
      {
        id: 'ai-06-2',
        num: '06.2',
        title: 'Function Calling Terintegrasi: Cek Status Pesanan & Database',
        situation: 'Pelanggan menanyakan "Apakah pesanan #9821 sudah dikirim?" dan bot tidak bisa menjawab karena tidak punya akses ke database.',
        explanation: 'Daftarkan tools fungsi `cek_pesanan(order_id: string)` ke LLM. Model membaca order_id dari chat pelanggan, memanggil API backend Anda, menerima JSON status pengiriman, lalu merangkum nomor resi secara akurat.',
        practice: 'Contoh definisi Tool Schema:\n```json\n{\n  "name": "cek_pesanan",\n  "description": "Ambil status paket dan resi berdasarkan nomor invoice",\n  "parameters": {\n    "type": "object",\n    "properties": {\n      "invoice_id": { "type": "string" }\n    },\n    "required": ["invoice_id"]\n  }\n}\n```',
        mistakes: 'Memberikan akses write (ubah status pesanan) tanpa token otorisasi atau verifikasi nomor HP pengirim.',
        checklist: ['Nomor pengirim WhatsApp diverifikasi sesuai pemilik order.', 'Fungsi hanya memiliki hak akses read-only.'],
      },
    ],
  },
  {
    id: 'ai-07',
    trackId: 'ai',
    code: 'Bab 07',
    title: 'Evaluasi, Monitoring & Mitigasi Risiko AI Produksi',
    kicker: 'Kualitas & Keamanan Berkelanjutan',
    summary:
      'Jangan lepaskan AI ke produksi tanpa sistem pemantauan berkala. Cara membaca log, mendeteksi penyimpangan, dan menjaga biaya API tetap efisien.',
    audience: 'Pemilik produk dan engineer yang mengelola AI di lingkungan produksi.',
    subchapters: [
      {
        id: 'ai-07-1',
        num: '07.1',
        title: 'Audit Percakapan Mingguan & Pelaporan Anomali',
        situation: 'Tidak pernah membuka log percakapan AI sampai ada pelanggan yang komplain viral.',
        explanation: 'Lakukan audit sampel acak 20 percakapan setiap minggu. Tandai jawaban yang kurang pas dan perbarui file `knowledge.md` untuk mencegah kesalahan terulang.',
        practice: 'Bikin spreadsheet `ai_feedback_log` untuk mencatat pertanyaan yang belum bisa dijawab AI dengan baik.',
        mistakes: 'Menganggap sistem AI sudah selesai sekali pasang tanpa perlu diperbarui.',
        checklist: ['Audit sampel berkala dilakukan.', 'SOP diperbarui berdasarkan pertanyaan baru.'],
      },
    ],
  },
  {
    id: 'ai-08',
    trackId: 'ai',
    code: 'Bab 08',
    title: 'Menghubungkan AI WhatsApp ke Database Penjualan Tanpa Koding Rumit',
    kicker: 'Integrasi WhatsApp & Catatan Toko',
    summary:
      'Cara mudah menghubungkan asisten AI di WhatsApp dengan lembar catatan penjualan Anda. Pesanan masuk langsung tercatat rapi ke Google Sheet atau database toko tanpa harus diketik ulang manual oleh admin.',
    audience: 'Pemilik toko, admin operasional, dan siapa saja yang ingin pesan masuk langsung tersimpan otomatis menjadi rekapan transaksi.',
    subchapters: [
      {
        id: 'ai-08-1',
        num: '08.1',
        title: 'Menyambungkan WhatsApp ke Lembar Google Sheet Penjualan',
        situation: 'Admin sering kewalahan menyalin nama pembeli, alamat, dan nomor telepon dari chat WhatsApp ke catatan Excel satu per satu.',
        explanation: 'Setiap kali pelanggan menyetujui pesanan di WhatsApp, sistem webhook otomatis mengambil ringkasan pesanan dan menambahkannya sebagai baris baru di Google Sheet toko Anda dalam waktu kurang dari 2 detik.',
        practice: 'Buat lembar Google Sheet dengan kolom: Tanggal, Nama Pelanggan, Nomor WA, Produk, Jumlah, Alamat, dan Status Bayar. Sambungkan melalui webhook n8n gratis.',
        mistakes: 'Membiarkan data pesanan tercecer di banyak chat tanpa pencatatan terpusat sehingga sering terjadi pesanan tertinggal.',
        checklist: [
          'Kolom Google Sheet sudah disiapkan dengan judul yang jelas.',
          'Format nomor telepon diawali kode negara (+62) agar mudah dihubungi kembali.',
          'Notifikasi pesan otomatis aktif saat baris baru berhasil tercatat.',
        ],
      },
      {
        id: 'ai-08-2',
        num: '08.2',
        title: 'Format Pesan Ringkasan: Rincian Produk, Alamat, dan Total Biaya',
        situation: 'Pelanggan sering bingung mengenai total harga yang harus dibayar dan nomor rekening tujuan transfer.',
        explanation: 'AI diformat untuk selalu mengirimkan 1 pesan rangkuman resmi yang rapi: daftar barang yang dibeli, ongkos kirim, nomor rekening resmi toko, dan instruksi kirim bukti transfer.',
        practice: 'Gunakan template pesan yang mudah dibaca: awali salam hangat, rincikan item dengan poin, dan cantumkan nomor rekening dengan huruf tebal agar mudah disalin.',
        mistakes: 'Mengirimkan rincian pembayaran terpisah-pisah dalam 5 chat pendek yang membingungkan calon pembeli.',
        checklist: [
          'Nomor rekening dan nama pemilik bank sudah diverifikasi benar 100%.',
          'Instruksi konfirmasi pembayaran ditulis dengan kalimat yang sopan dan ringkas.',
        ],
      },
    ],
  },

  // ===================== TRACK 2: DIGITAL MARKETING & TRACKING (8 BAB) =====================
  {
    id: 'mkt-00',
    trackId: 'digital-marketing',
    code: 'Bab 00',
    title: 'Peta Belajar Technical Marketing & Tracking Berbasis Data',
    kicker: 'Pemasaran Digital Berbasis Data',
    summary:
      'Iklan digital bukan judi tebak-tebakan. Iklan adalah lelang matematika di mana algoritma mencocokkan niat beli pengunjung dengan penawaran Anda.',
    audience: 'Pebisnis dan pengiklan yang ingin memahami mengapa iklan mereka boncos dan bagaimana memperbaikinya.',
    subchapters: [
      {
        id: 'mkt-00-1',
        num: '00.1',
        title: 'Tiga Pilar: Penawaran, Halaman Konversi, dan Sinyal Data',
        situation: 'Menggonta-ganti setting targeting iklan setiap hari padahal masalahnya ada di landing page yang lambat atau penawaran yang tidak menarik.',
        explanation: 'Algoritma Meta dan Google hanya bertugas mengantar orang ke pintu Anda. Jika pintu Anda terbuka setelah 5 detik (lambat) atau isinya membingungkan, pengunjung akan kabur sebelum membeli.',
        practice: 'Ukur kecepatan landing page Anda di Google PageSpeed Insights. Pastikan skor minimal 90+ di HP.',
        mistakes: 'Menyalahkan algoritma iklan padahal halaman web membutuhkan waktu 8 detik untuk memuat.',
        checklist: ['Landing page memuat di bawah 1.5 detik.', 'Penawaran utama jelas di layar pertama tanpa perlu scroll.'],
      },
    ],
  },
  {
    id: 'mkt-01',
    trackId: 'digital-marketing',
    code: 'Bab 01',
    title: 'Cara Kerja Lelang Iklan Meta Ads & Google Ads',
    kicker: 'Algoritma Lelang & Skor Relevansi',
    summary:
      'Biaya per klik (CPC) Anda tidak ditentukan semata oleh besaran bid uang, melainkan kombinasi bid, perkiraan rasio tindakan, dan kualitas pengalaman halaman tujuan.',
    audience: 'Pengiklan yang ingin menurunkan biaya iklan tanpa mengurangi jumlah leads.',
    subchapters: [
      {
        id: 'mkt-01-1',
        num: '01.1',
        title: 'Formula Total Value Meta Ads',
        situation: 'Menaikkan budget iklan 3x lipat namun biaya per hasil justru membengkak 4x lipat.',
        explanation: 'Rumus lelang Meta: `Total Value = [Advertiser Bid] + [Estimated Action Rate] + [Ad Quality & Relevance]`. Halaman yang relevan dan cepat mendapatkan diskon lelang alami dari sistem.',
        practice: 'Tingkatkan CTR kreatif dan kurangi bounce rate halaman untuk mendongkrak skor kualitas iklan.',
        mistakes: 'Menaikkan budget secara drastis dalam satu hari sehingga mereset fase pembelajaran (Learning Phase).',
        checklist: ['Menaikkan budget maksimal 20% per 2-3 hari.', 'Kreatif iklan sesuai dengan isi halaman landing page.'],
      },
    ],
  },
  {
    id: 'mkt-02',
    trackId: 'digital-marketing',
    code: 'Bab 02',
    title: 'Struktur Akun Iklan, Creative Testing & Validasi',
    kicker: 'Struktur Kampanye Modern',
    summary:
      'Tinggalkan struktur kampanye kuno dengan 20 adset mikro. Gunakan struktur Broad / Advantage+ dengan penekanan pada keragaman sudut pandang materi kreatif.',
    audience: 'Media buyer yang ingin struktur akun rapi dan mudah di-scale.',
    subchapters: [
      {
        id: 'mkt-02-1',
        num: '02.1',
        title: 'Metode Testing 3:2:2 (3 Kreatif, 2 Teks, 2 Headline)',
        situation: 'Menaruh 10 materi iklan dalam satu adset sehingga budget hanya terserap di 1 materi secara acak.',
        explanation: 'Gunakan Dynamic Creative Testing dengan formula terstruktur untuk menemukan kombinasi pemenang sebelum dipindahkan ke kampanye skala besar (Scaling CBO).',
        practice: 'Siapkan 3 format visual berbeda: foto produk bersih, video testimoni pengguna, dan infografis masalah-solusi.',
        mistakes: 'Hanya mengubah warna tombol lalu menganggapnya sebagai materi baru.',
        checklist: ['3 materi visual dengan sudut pandang berbeda.', 'Budget testing dialokasikan terpisah dari kampanye utama.'],
      },
    ],
  },
  {
    id: 'mkt-03',
    trackId: 'digital-marketing',
    code: 'Bab 03',
    title: 'Arsitektur Tracking: Dari Pixel Hingga GTM',
    kicker: 'Fondasi Pelacakan Sinyal',
    summary:
      'Memahami bagaimana tag pelacak bekerja di browser, cara kerja cookie pihak pertama vs pihak ketiga, dan mengapa Google Tag Manager wajib digunakan.',
    audience: 'Developer dan marketer yang ingin mengelola script tracking secara terpusat tanpa merusak kode website.',
    subchapters: [
      {
        id: 'mkt-03-1',
        num: '03.1',
        title: 'Mengapa Jangan Menempelkan Kode Script Mentah di Header HTML',
        situation: 'Website melambat drastis karena dipasangi 8 script analitik berbeda di baris `<head>`.',
        explanation: 'Gunakan satu container Google Tag Manager (GTM). GTM memuat script secara asinkron dan memudahkan pengaturan pemicu (trigger) konversi tanpa perlu deploy ulang website.',
        practice: 'Pasang GTM container, lalu kelola Pixel Meta, Google Ads tag, dan GA4 di dalam antarmuka GTM.',
        mistakes: 'Memasang script ganda di HTML dan GTM sekaligus sehingga data transaksi terhitung dobel.',
        checklist: ['Hanya satu snippet GTM di header web.', 'Tidak ada kode pelacak duplikat.'],
      },
    ],
  },
  {
    id: 'mkt-04',
    trackId: 'digital-marketing',
    code: 'Bab 04',
    title: 'Meta Conversions API (CAPI) & Server-Side Tracking',
    kicker: 'Kebal Ad-Blocker & iOS Privacy',
    summary:
      'Browser adblocker dan pembatasan cookie Safari memangkas 20-30% sinyal konversi Anda. CAPI mengirimkan data langsung dari server ke endpoint Meta.',
    audience: 'Pengiklan yang ingin data konversi 100% utuh dan skor pencocokan event tinggi.',
    subchapters: [
      {
        id: 'mkt-04-1',
        num: '04.1',
        title: 'Mekanisme Deduplikasi Event ID',
        situation: 'Setelah mengaktifkan CAPI, laporan penjualan di Ads Manager tercatat dua kali lipat dari transaksi riil.',
        explanation: 'Jika browser mengirim event dan server juga mengirim event yang sama, Anda wajib menyertakan parameter `event_id` yang identik (misal: ID Order). Meta akan menggabungkan keduanya menjadi satu data utuh.',
        practice: 'Generate UUID unik di backend untuk setiap transaksi dan sertakan di payload browser maupun payload CAPI.',
        mistakes: 'Mengaktifkan CAPI tanpa parameter `event_id` deduplikasi.',
        checklist: ['Event ID identik antara browser dan server.', 'Skor Event Match Quality mencapai minimal 8.0+.'],
      },
    ],
  },
  {
    id: 'mkt-05',
    trackId: 'digital-marketing',
    code: 'Bab 05',
    title: 'Google Analytics 4 (GA4) untuk Pembacaan Corong Bisnis',
    kicker: 'Analisis Jalur Pengunjung',
    summary:
      'Menelusuri dari mana pengunjung datang, halaman mana yang paling lama dibaca, dan di langkah mana mereka memutuskan pergi tanpa transaksi.',
    audience: 'Tim bisnis yang ingin optimasi conversion rate (CRO).',
    subchapters: [
      {
        id: 'mkt-05-1',
        num: '05.1',
        title: 'Menyusun Laporan Corong (Funnel Exploration)',
        situation: 'Hanya melihat angka total pengunjung tanpa tahu di tahap mana pengunjung rontok.',
        explanation: 'Buat Funnel Exploration 4 langkah: Sesi Masuk -> Scroll 50% -> Klik Tombol WhatsApp -> Kirim Pesan. Identifikasi titik hambatan terbesar.',
        practice: 'Analisis langkah dengan drop-off rate di atas 70% dan sederhanakan prosesnya.',
        mistakes: 'Membuat formulir dengan 10 kolom isian yang melelahkan bagi pengguna HP.',
        checklist: ['Laporan corong terkonfigurasi di GA4.', 'Formulir kontak maksimal 3-4 kolom isian.'],
      },
    ],
  },
  {
    id: 'mkt-06',
    trackId: 'digital-marketing',
    code: 'Bab 06',
    title: 'Membaca Atribusi Konversi, ROAS Sebenarnya & Budget',
    kicker: 'Efisiensi Finansial Iklan',
    summary:
      'Jangan tertipu metrik ROAS dashboard iklan yang sering mengklaim transaksi yang sama. Cara menghitung Blended ROAS dan batas biaya akuisisi (Target CPA).',
    audience: 'Pengambil keputusan finansial dan pemilik bisnis.',
    subchapters: [
      {
        id: 'mkt-06-1',
        num: '06.1',
        title: 'Rumus Margin Bersih vs Target CPA',
        situation: 'Iklan terlihat untung di dashboard, tetapi rekening bank bisnis justru defisit di akhir bulan.',
        explanation: 'Hitung dulu Margin Kotor per produk sebelum beriklan. Jika keuntungan kotor per barang Rp 100.000, maka biaya per akuisisi leads (CPA) maksimal tidak boleh melebihi Rp 50.000 agar bisnis tetap sehat.',
        practice: 'Buat tabel simulasi target CPA berdasarkan rasio closing CS Anda.',
        mistakes: 'Beriklan tanpa mengetahui berapa nilai maksimal yang rela Anda bayar untuk satu pembeli baru.',
        checklist: ['Target CPA tertulis jelas.', 'Menghitung Blended ROAS (Total Omzet / Total Biaya Iklan Gabungan).'],
      },
    ],
  },
  {
    id: 'mkt-07',
    trackId: 'digital-marketing',
    code: 'Bab 07',
    title: 'Alur Retargeting Otomatis & CRM Integration',
    kicker: 'Konversi Prospek yang Belum Beli',
    summary:
      '95% pengunjung tidak langsung membeli di kunjungan pertama. Bangun alur pengingat sopan melalui WhatsApp dan audiens retargeting.',
    audience: 'Tim penjualan yang ingin memaksimalkan setiap prospek yang sudah masuk.',
    subchapters: [
      {
        id: 'mkt-07-1',
        num: '07.1',
        title: 'Follow-Up Terstruktur: Hari 1, Hari 3, dan Hari 7',
        situation: 'Prospek yang sudah bertanya via WhatsApp tidak pernah dihubungi lagi jika tidak langsung bayar hari itu.',
        explanation: 'Gunakan pesan tindak lanjut sopan yang memberikan nilai tambah (bukan sekadar "gimana kak jadi beli?"), misalnya mengirimkan contoh studi kasus atau tips praktis.',
        practice: 'Otomatiskan pengingat jadwal follow-up ke kalender staf penjualan.',
        mistakes: 'Melakukan spam pesan promosi setiap hari sehingga nomor diblokir prospek.',
        checklist: ['Jadwal follow-up maksimal 3 kali.', 'Pesan berfokus pada membantu menjawab keraguan prospek.'],
      },
    ],
  },
  {
    id: 'mkt-08',
    trackId: 'digital-marketing',
    code: 'Bab 08',
    title: 'Strategi Iklan Modal Rendah dengan Hasil Maksimal untuk Bisnis Lokal',
    kicker: 'Iklan Efisien & Menjangkau Tetangga',
    summary:
      'Langkah mudah beriklan di Instagram dan Facebook mulai dari 20 ribu sehari. Menjangkau calon pembeli yang lokasinya dekat dengan toko fisik atau tempat usaha Anda tanpa membuang anggaran.',
    audience: 'Pelaku usaha kuliner, toko lokal, klinik, barbershop, dan jasa perorangan yang ingin ramai pelanggan baru.',
    subchapters: [
      {
        id: 'mkt-08-1',
        num: '08.1',
        title: 'Menentukan Radius Area Iklan: Hanya Muncul di Sekitar Toko Anda',
        situation: 'Pernah beriklan tapi yang tanya orang dari luar pulau yang tidak mungkin datang ke toko Anda.',
        explanation: 'Atur lokasi iklan dengan pin radius 2–5 kilometer dari alamat toko fisik Anda. Iklan hanya akan tayang di HP orang-orang yang memang sedang beraktivitas atau tinggal di sekitar tempat usaha Anda.',
        practice: 'Buka Meta Ads Manager, pilih opsi Lokasi, ketik alamat toko Anda, dan setel radius lingkaran ke 3 km.',
        mistakes: 'Membiarkan target lokasi diisi seluruh Indonesia padahal produk Anda makanan segar atau jasa di tempat.',
        checklist: [
          'Pin lokasi sudah tepat di titik toko Anda.',
          'Radius tidak terlalu luas agar biaya iklan fokus dan hemat.',
          'Jam tayang iklan disesuaikan dengan jam buka operasional toko.',
        ],
      },
      {
        id: 'mkt-08-2',
        num: '08.2',
        title: 'Membuat Foto & Video Menarik Cukup Menggunakan Kamera HP',
        situation: 'Merasa tidak bisa beriklan karena belum punya kamera mahal atau desainer grafis profesional.',
        explanation: 'Di media sosial, video rekaman langsung yang natural dan pencahayaan terang justru lebih dipercaya calon pembeli daripada brosur kaku penuh tulisan kecil.',
        practice: 'Rekam video 15 detik: tunjukkan proses pembuatan produk, suasana tempat yang bersih, dan ajakan mampir dengan promo khusus penonton video.',
        mistakes: 'Mengunggah poster gambar buram dengan terlalu banyak tulisan yang sulit dibaca di layar HP kecil.',
        checklist: [
          'Lensa kamera HP dibersihkan sebelum merekam.',
          'Suara penjelasan jernih tanpa derau angin kencang.',
          'Pencahayaan terang alami dari sinar matahari atau lampu ruangan.',
        ],
      },
    ],
  },

  // ===================== TRACK 3: VIBE CODING & MODERN TOOLING (6 BAB) =====================
  {
    id: 'vc-00',
    trackId: 'vibe-coding',
    code: 'Bab 00',
    title: 'Apa Itu Vibe Coding & Arsitektur AI-Assisted Engineering',
    kicker: 'Paradigma Rekayasa Baru',
    summary:
      'Vibe coding bukan berarti ngoding asal-asalan tanpa mikir. Ini adalah pergeseran peran developer dari pengetik sintaks menjadi arsitek sistem yang mengarahkan agen AI.',
    audience: 'Developer dan insinyur perangkat lunak yang ingin bekerja 5x lebih cepat dengan LLM coding tools.',
    subchapters: [
      {
        id: 'vc-00-1',
        num: '00.1',
        title: 'Dari Pengetik Kode Menjadi Reviewer Arsitektur',
        situation: 'Mengetik ribuan baris boilerplate sintaks yang membosankan dan rentan salah ketik.',
        explanation: 'Fokus manusia adalah: desain arsitektur data, pemilihan pustaka, penegakan keamanan, dan verifikasi logika bisnis. Biarkan agen AI yang menyusun kode implementasinya.',
        practice: 'Mulai dengan menyusun file spesifikasi teknis `ARCHITECTURE.md` sebelum meminta AI menulis kode.',
        mistakes: 'Langsung meminta AI membuat aplikasi tanpa memberikan spesifikasi struktur folder dan dependensi.',
        checklist: ['Spesifikasi teknis ditulis tertulis.', 'Mengetahui batasan keamanan kode yang dihasilkan.'],
      },
    ],
  },
  {
    id: 'vc-01',
    trackId: 'vibe-coding',
    code: 'Bab 01',
    title: 'Menyiapkan Lingkungan: Terminal & Claude Code CLI',
    kicker: 'Setup Developer Environment',
    summary:
      'Memanfaatkan Claude Code CLI dan antarmuka terminal interaktif untuk navigasi codebase, refactoring multi-file, dan eksekusi tes otomatis.',
    audience: 'Engineer yang ingin mengotomasi tugas koding langsung dari terminal.',
    subchapters: [
      {
        id: 'vc-01-1',
        num: '01.1',
        title: 'Alur Kerja Terminal CLI Terpadu',
        situation: 'Bolak-balik copy-paste kode dari browser ke IDE yang sangat menyita waktu.',
        explanation: 'Gunakan CLI agent yang memiliki akses langsung membaca berkas, menjalankan build, dan memeriksa error linting di terminal lokal Anda.',
        practice: 'Gunakan perintah CLI terstruktur untuk memecah tugas besar menjadi langkah atomic kecil.',
        mistakes: 'Membiarkan agent mengubah 50 berkas sekaligus tanpa git commit teratur.',
        checklist: ['Git status bersih sebelum menjalankan refactoring besar.', 'Menjalankan build check setelah setiap perubahan.'],
      },
    ],
  },
  {
    id: 'vc-02',
    trackId: 'vibe-coding',
    code: 'Bab 02',
    title: 'Prompting Arsitektural untuk Komponen Web Bersih',
    kicker: 'Clean Code dengan LLM',
    summary:
      'Cara meminta AI menulis komponen React/TypeScript yang modular, type-safe, dan tidak menghasilkan kode sampah (anti-slop).',
    audience: 'Frontend dan fullstack developer.',
    subchapters: [
      {
        id: 'vc-02-1',
        num: '02.1',
        title: 'Menegakkan Aturan Zero-Warning & Type Strictness',
        situation: 'AI sering memakai tipe `any` atau membuat komponen raksasa 800 baris yang sulit dipelihara.',
        explanation: 'Wajibkan AI mengikuti aturan: "Pecah menjadi sub-komponen jika melebihi 200 baris, gunakan interface TypeScript eksplisit, dan pastikan build lulus tanpa peringatan linter."',
        practice: 'Sertakan aturan coding standards Anda di file instruksi sistem agen.',
        mistakes: 'Menerima kode yang tidak type-safe demi kecepatan instan.',
        checklist: ['TypeScript strict mode aktif.', 'Komponen modular dan mudah diuji.'],
      },
    ],
  },
  {
    id: 'vc-03',
    trackId: 'vibe-coding',
    code: 'Bab 03',
    title: 'Debugging Runtime & Resolusi Bug Otomatis',
    kicker: 'Investigasi & Analisis Akar Masalah',
    summary:
      'Cara mengumpankan error stack trace dan log jaringan ke agent AI agar akar masalah ditemukan dalam hitungan detik.',
    audience: 'Engineer yang sering terjebak debugging berjam-jam.',
    subchapters: [
      {
        id: 'vc-03-1',
        num: '03.1',
        title: 'Teknik Root Cause Analysis (RCA)',
        situation: 'Memperbaiki gejala luar bug tanpa menyadari akar masalahnya ada di skema data backend.',
        explanation: 'Berikan log error lengkap bersama potongan kode terkait dan tanyakan: "Jelaskan mengapa kondisi ini bisa terjadi sebelum memberikan kode perbaikan."',
        practice: 'Wajibkan agen menjelaskan akar masalah sebelum menerapkan patch kode.',
        mistakes: 'Menerapkan patch perbaikan asal jalan yang justru merusak modul lain (regresi).',
        checklist: ['Akar masalah teridentifikasi jelas.', 'Uji regresi dilakukan setelah perbaikan.'],
      },
    ],
  },
  {
    id: 'vc-04',
    trackId: 'vibe-coding',
    code: 'Bab 04',
    title: 'Menghubungkan MCP Tools & Server Eksternal',
    kicker: 'Model Context Protocol (MCP)',
    summary:
      'Memberi kekuatan nyata kepada AI koding dengan menghubungkannya ke database lokal, browser testing, dan dokumentasi API terbaru melalui MCP.',
    audience: 'Developer modern yang membangun sistem multi-alat.',
    subchapters: [
      {
        id: 'vc-04-1',
        num: '04.1',
        title: 'Mengapa MCP Mengubah Segalanya',
        situation: 'AI koding tidak tahu struktur tabel database Anda atau tidak bisa mengetes tampilan di browser nyata.',
        explanation: 'MCP (Model Context Protocol) menyediakan antarmuka standar bagi LLM untuk berinteraksi dengan dunia luar: query Postgres, audit DevTools browser, atau panggil API eksternal.',
        practice: 'Pasang MCP server postgres atau devtools untuk audit langsung di komputer lokal.',
        mistakes: 'Memberikan akses write ke database produksi tanpa batasan sandbox.',
        checklist: ['Hanya mengizinkan akses ke database development.', 'Memverifikasi tool calls sebelum dieksekusi.'],
      },
    ],
  },
  {
    id: 'vc-05',
    trackId: 'vibe-coding',
    code: 'Bab 05',
    title: 'Siklus Deployment Otomatis (CI/CD) & Hardening',
    kicker: 'Dari Laptop ke Dunia Luar',
    summary:
      'Otomatisasi build, pengujian keamanan statis, dan deployment kilat ke Vercel / Cloudflare dengan git push.',
    audience: 'Solo developer yang ingin alur rilis aplikasi mulus dan otomatis.',
    subchapters: [
      {
        id: 'vc-05-1',
        num: '05.1',
        title: 'Zero-Downtime Deployment dengan Git Flow',
        situation: 'Deploy aplikasi dengan upload manual FTP yang rawan merusak website saat ada file hilang.',
        explanation: 'Gunakan Git repository yang terhubung ke pipeline CI/CD. Setiap `git push main`, sistem cloud otomatis membangun preview terisolasi dan memindahkan lalu lintas tanpa jeda server (zero-downtime).',
        practice: 'Setup auto-deploy GitHub ke Vercel atau Cloudflare Pages.',
        mistakes: 'Melakukan perubahan langsung di server produksi tanpa melalui git.',
        checklist: ['Pipeline build otomatis berjalan lancar.', 'Rollback instan tersedia jika terjadi error darurat.'],
      },
    ],
  },
  {
    id: 'vc-06',
    trackId: 'vibe-coding',
    code: 'Bab 06',
    title: 'Pipeline CI/CD Otomatis: Push Kode Langsung Live',
    kicker: 'Otomasi Rilis & Build Verification',
    icon: 'GitBranch',
    summary:
      'Menyusun pipeline GitHub Actions yang memvalidasi TypeScript, menjalankan tes otomatis, dan mendeploy langsung ke Edge Cloud tanpa campur tangan manual.',
    audience: 'Developer yang ingin merilis update kode dengan rasa tenang tanpa takut merusak sistem produksi.',
    subchapters: [
      {
        id: 'vc-06-1',
        num: '06.1',
        title: 'Konfigurasi GitHub Actions untuk Build & Typecheck Otomatis',
        situation: 'Sering ada error TypeScript yang baru ketahuan setelah kode di-push dan merusak website live.',
        explanation: 'Jalankan action otomatis setiap ada Pull Request atau push ke branch main. Pipeline akan menjalankan tsc --noEmit dan linter sebelum mengizinkan rilis.',
        practice: 'Buat file .github/workflows/deploy.yml dengan step: checkout -> setup node -> npm ci -> npm run build.',
        mistakes: 'Mematikan typecheck demi deploy cepat, yang berujung pada bug fatal di tangan pengunjung.',
        checklist: ['Action berjalan otomatis di setiap push.', 'Build gagal memblokir rilis ke server produksi.'],
      },
    ],
  },
  {
    id: 'vc-07',
    trackId: 'vibe-coding',
    code: 'Bab 07',
    title: 'Testing Otomatis & Regresi: Bebas Dari Error Tak Terduga',
    kicker: 'Jaminan Kualitas Kode',
    icon: 'ShieldCheck',
    summary:
      'Menulis unit test dan integration test ringkas untuk alur bisnis kritis agar fitur baru tidak merusak fitur lama yang sudah stabil.',
    audience: 'Engineer yang ingin menjaga stabilitas aplikasi dalam jangka panjang.',
    subchapters: [
      {
        id: 'vc-07-1',
        num: '07.1',
        title: 'Menguji Alur Kritis: Form, Transaksi, & API Webhook',
        situation: 'Perubahan pada komponen navigasi tidak sengaja membuat tombol transaksi WhatsApp berhenti berfungsi.',
        explanation: 'Fokuskan pengujian pada golden path (jalur kritis bisnis): tombol kontak, form input, dan respon API serverless.',
        practice: 'Gunakan testing library ringan seperti Vitest untuk memverifikasi fungsi utilitas dan state penting.',
        mistakes: 'Menulis tes untuk hal sepele namun mengabaikan alur checkout yang menghasilkan uang.',
        checklist: ['Alur checkout WhatsApp teruji otomatis.', 'Zero-warning pada suite pengujian.'],
      },
    ],
  },
  {
    id: 'vc-08',
    trackId: 'vibe-coding',
    code: 'Bab 08',
    title: 'Monitoring, Error Tracking Sentry, & Log Performa',
    kicker: 'Pemantauan Sistem 24/7',
    icon: 'Gauge',
    summary:
      'Menangkap runtime error sebelum pengunjung sempat komplain menggunakan Sentry, serta memantau skor Core Web Vitals secara langsung.',
    audience: 'Tim teknis yang bertanggung jawab atas uptime dan keandalan sistem bisnis.',
    subchapters: [
      {
        id: 'vc-08-1',
        num: '08.1',
        title: 'Setup Error Tracking Real-time Tanpa Memperlambat Web',
        situation: 'Pengunjung mengalami halaman blank putih saat membuka dari browser tertentu tanpa pernah ada log tercatat.',
        explanation: 'Pasang Sentry / Logtail dengan bundle ringan untuk mencatat uncaught exception secara real-time ke dashboard privat developer.',
        practice: 'Integrasikan Sentry client SDK dengan sampling rate 10% agar tetap hemat kuota kueri.',
        mistakes: 'Membiarkan error terjadi berhari-hari tanpa ada notifikasi peringatan ke Telegram / WhatsApp admin.',
        checklist: ['Alert error otomatis masuk ke email/chat.', 'Source maps privat terunggah untuk debug cepat.'],
      },
    ],
  },
  {
    id: 'vc-09',
    trackId: 'vibe-coding',
    code: 'Bab 09',
    title: 'Uji Tekan Server: Cara Memastikan Website Tidak Jebol Saat Ramai Pengunjung',
    kicker: 'Kesiapan Menghadapi Promo & Flash Sale',
    icon: 'ShieldCheck',
    summary:
      'Langkah mudah menguji daya tahan website sebelum peluncuran besar atau promosi diskon. Pastikan web tetap cepat, tidak error, dan semua transaksi pelanggan berjalan mulus.',
    audience: 'Pemilik bisnis dan tim yang ingin tokonya tidak mogok saat diserbu ribuan calon pembeli.',
    subchapters: [
      {
        id: 'vc-09-1',
        num: '09.1',
        title: 'Simulasi Serbuan Pengunjung: Melihat Titik Lemah Sebelum Pelanggan Merasakannya',
        situation: 'Website tiba-tiba lambat atau mati total saat link promo disebar ke ribuan kontak broadcast WhatsApp.',
        explanation: 'Sebelum promo disebar, jalankan simulasi tes beban sederhana untuk menguji apakah server mampu menampung 500 sampai 1.000 pengunjung secara bersamaan.',
        practice: 'Gunakan tool load test gratis seperti k6 atau Apache Benchmark untuk mengirim 100 kunjungan simulasi dalam 10 detik dan amati respon server.',
        mistakes: 'Langsung menyebarkan kampanye diskon besar tanpa pernah menguji kecepatan respon server saat trafik mendadak tinggi.',
        checklist: [
          'Server merespon di bawah 1 detik pada 500 permintaan serentak.',
          'Tidak muncul halaman error 502 atau 504 saat trafik melonjak.',
          'Basis data tidak kehabisan kuota koneksi saat form pesanan dikirim bertubi-tubi.',
        ],
      },
      {
        id: 'vc-09-2',
        num: '09.2',
        title: 'Mengaktifkan Cache Cerdas: Server Tetap Adem Walau Pengunjung Membludak',
        situation: 'Biaya server mendadak membengkak atau RAM server penuh 100% karena setiap pengunjung memaksa komputer membaca database terus-menerus.',
        explanation: 'Simpan halaman depan dan gambar produk di CDN gratis (seperti Cloudflare). Dengan cache, server asli Anda hanya bekerja santai karena data umum sudah disajikan langsung oleh jaringan cloud terdekat.',
        practice: 'Aktifkan Cloudflare Cache Everything untuk halaman katalog statis dan aset gambar produk toko Anda.',
        mistakes: 'Mengunggah foto produk ukuran asli kamera (5 MB sampai 10 MB) langsung ke website tanpa dikompresi menjadi WebP ringan (50 KB).',
        checklist: [
          'Semua gambar produk berformat WebP dengan ukuran di bawah 100 KB.',
          'Cloudflare caching status menunjukkan HIT pada file halaman umum.',
        ],
      },
    ],
  },
];

// -----------------------------------------------------------------------------
// 5. KAMUS 40+ ISTILAH TEKNIS DIGITAL, AI & TRACKING (GLOSARIUM LENGKAP)
// -----------------------------------------------------------------------------
export const KLASIK_KAMUS: KamusTerm[] = [
  {
    term: 'AI Agent',
    category: 'AI & Machine Learning',
    definition: 'Sistem perangkat lunak yang menggunakan model bahasa (LLM) sebagai otak untuk mengamati lingkungan, membuat rencana, memanggil alat bantu (tools/API), dan menyelesaikan tugas berulang tanpa perlu instruksi manusia di setiap langkahnya.',
    practicalTip: 'Gunakan AI Agent saat tugas Anda butuh konteks dinamis dan integrasi antar sistem. Untuk alur kaku tanpa variasi, cukup gunakan otomasi biasa.',
  },
  {
    term: 'RAG (Retrieval-Augmented Generation)',
    category: 'AI & Machine Learning',
    definition: 'Teknik menyuapi AI dengan dokumen pengetahuan eksternal (PDF, SOP, database) sebelum AI menjawab pertanyaan, sehingga jawabannya selalu akurat dan berakar pada data nyata perusahaan Anda.',
    practicalTip: 'RAG jauh lebih murah, cepat, dan mudah diperbarui dibanding melatih ulang model (fine-tuning) saat ada perubahan harga atau aturan bisnis.',
  },
  {
    term: 'Prompt Injection',
    category: 'Keamanan & Tracking',
    definition: 'Serangan keamanan di mana pengguna jahat menyisipkan instruksi manipulatif ke dalam kolom chat untuk memaksa model AI mengabaikan aturan aslinya dan membocorkan data rahasia.',
    practicalTip: 'Terapkan pemisahan tegas antara instruksi sistem dengan input pengguna, dan gunakan filter sensor sebelum data dikirim ke LLM.',
  },
  {
    term: 'Halusinasi AI',
    category: 'AI & Machine Learning',
    definition: 'Kecenderungan model LLM untuk menghasilkan jawaban yang salah, tidak akurat, atau mengarang fakta fiktif dengan gaya bahasa yang terdengar sangat meyakinkan.',
    practicalTip: 'Wajibkan model untuk menolak menjawab jika fakta tidak ditemukan di dalam dokumen acuan dengan instruksi Grounded Prompting.',
  },
  {
    term: 'Meta Conversions API (CAPI)',
    category: 'Keamanan & Tracking',
    definition: 'Protokol pelacakan yang mengirimkan data konversi (pembelian, leads) langsung dari server website ke server Meta, memintas pemblokiran browser cookie dan ad-blocker.',
    practicalTip: 'Aktifkan CAPI bersamaan dengan Pixel browser dan gunakan parameter Event ID yang sama untuk deduplikasi agar data iklan 100% akurat.',
  },
  {
    term: 'Event Deduplication',
    category: 'Keamanan & Tracking',
    definition: 'Proses di mana platform iklan (seperti Meta) mencocokkan event dari browser dan event dari server dengan ID yang sama, lalu mengabaikan data duplikat agar transaksi tidak terhitung dua kali.',
    practicalTip: 'Wajib generate Event ID unik di backend untuk setiap transaksi agar laporan omzet di Ads Manager tidak membengkak semu.',
  },
  {
    term: 'Zero-Trust Architecture',
    category: 'Cloud & DevOps',
    definition: 'Model keamanan infrastruktur yang memegang prinsip "jangan pernah percaya, selalu verifikasi". Setiap pengguna dan perangkat harus diautentikasi bahkan saat berada di jaringan internal.',
    practicalTip: 'Tutup port publik server VPS Anda dan gunakan mesh VPN privat seperti Tailscale untuk akses internal database dan SSH.',
  },
  {
    term: 'Tailscale (WireGuard)',
    category: 'Cloud & DevOps',
    definition: 'Layanan jaringan privat terenkripsi berbasis protokol WireGuard yang menghubungkan server cloud, laptop, dan perangkat mobile Anda tanpa perlu membuka port ke internet umum.',
    practicalTip: 'Dengan Tailscale, port SSH 22 di server VPS bisa ditutup total dari internet luar, sehingga hacker bot otomatis tidak bisa menyerang.',
  },
  {
    term: 'Prepared Statements (Anti-SQLi)',
    category: 'Keamanan & Tracking',
    definition: 'Metode eksekusi kueri database yang memisahkan kode SQL dari data input pengguna, membuat serangan penyusupan data (SQL Injection) mustahil dieksekusi.',
    practicalTip: 'Gunakan selalu ORM seperti Prisma atau driver database parameterized query; jangan pernah menggabungkan string input pengguna langsung ke teks SQL.',
  },
  {
    term: 'Core Web Vitals & LCP',
    category: 'Web & Arsitektur',
    definition: 'Metrik resmi Google untuk mengukur kecepatan halaman. LCP (Largest Contentful Paint) mengukur berapa lama konten visual utama halaman muncul ke layar pengguna.',
    practicalTip: 'Targetkan skor LCP di bawah 1.2 detik untuk mendapatkan skor Google PageSpeed 95+ dan peringkat SEO yang unggul.',
  },
  {
    term: 'ROAS (Return on Ad Spend)',
    category: 'Keamanan & Tracking',
    definition: 'Rasio pendapatan kotor yang dihasilkan dari setiap rupiah yang dihabiskan untuk iklan berbayar (Total Pendapatan / Total Biaya Iklan).',
    practicalTip: 'Hitung juga Blended ROAS yang memasukkan seluruh biaya iklan dibagi seluruh omzet toko untuk mengetahui kesehatan margin riil.',
  },
  {
    term: 'CPA (Cost per Acquisition)',
    category: 'Keamanan & Tracking',
    definition: 'Rata-rata biaya iklan yang harus Anda bayar untuk mendapatkan satu pelanggan baru atau satu leads prospek yang mengirim pesan.',
    practicalTip: 'Ketahui batas maksimal CPA yang sanggup ditoleransi margin keuntungan bisnis Anda sebelum menaikkan budget iklan.',
  },
  {
    term: 'Vibe Coding',
    category: 'AI & Machine Learning',
    definition: 'Pendekatan rekayasa perangkat lunak modern di mana developer bertindak sebagai perancang arsitektur sistem dan memanfaatkan asisten AI untuk menulis implementasi kode dengan cepat.',
    practicalTip: 'Kunci sukses vibe coding adalah memiliki spesifikasi arsitektur yang jelas dan selalu memverifikasi keamanan serta build check secara otomatis.',
  },
  {
    term: 'MCP (Model Context Protocol)',
    category: 'AI & Machine Learning',
    definition: 'Standar protokol terbuka yang memungkinkan model AI terhubung secara aman dengan alat eksternal, repositori kode, database lokal, dan API pihak ketiga.',
    practicalTip: 'Gunakan MCP server untuk memberi akses aman kepada agent AI koding Anda agar bisa mengecek database lokal tanpa bocor ke internet.',
  },
  {
    term: 'Docker & Containerization',
    category: 'Cloud & DevOps',
    definition: 'Teknologi untuk membungkus aplikasi beserta seluruh pustaka pendukungnya ke dalam satu paket terisolasi (container), sehingga aplikasi berjalan identik di komputer manapun.',
    practicalTip: 'Pakai Docker Compose untuk menjalankan database, backend, dan reverse proxy di VPS hanya dengan satu perintah `docker compose up -d`.',
  },
  {
    term: 'Caddy Web Server',
    category: 'Cloud & DevOps',
    definition: 'Web server modern berkecepatan tinggi yang ditulis dalam bahasa Go dengan fitur otomatisasi penerbitan dan pembaruan sertifikat SSL HTTPS Let\'s Encrypt tanpa konfigurasi rumit.',
    practicalTip: 'Caddy jauh lebih ringkas dibanding Nginx: cukup tulis 3 baris konfigurasi, domain langsung aktif dengan HTTPS aman dan kompresi Brotli.',
  },
];

// -----------------------------------------------------------------------------
// 6. TOOLS YANG SAYA PAKAI (TOOLKIT HARIAN DENGAN KATEGORI JELAS)
// -----------------------------------------------------------------------------
export const KLASIK_TOOLS: ToolItem[] = [
  {
    name: 'Next.js & React',
    category: 'Frontend & Web',
    tagline: 'Framework Standar Industri',
    description: 'Arsitektur web modern dengan Server-Side Rendering (SSR) dan Static Generation untuk kecepatan muat instan di bawah 1 detik.',
    badge: 'Frontend',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend & Web',
    tagline: 'Desain Responsif Presisi',
    description: 'Penyusunan antarmuka berstandar tinggi yang ringan, konsisten di seluruh ukuran layar, dan bebas dari CSS gemuk tak terpakai.',
    badge: 'Styling',
  },
  {
    name: 'TypeScript',
    category: 'Frontend & Web',
    tagline: 'Type-Safe Engineering',
    description: 'Mencegah bug fatal di produksi dengan validasi tipe data statis sejak kode pertama ditulis.',
    badge: 'Bahasa',
  },
  {
    name: 'Claude 3.7 Sonnet',
    category: 'AI & LLMs',
    tagline: 'Otak AI Penalaran Mendalam',
    description: 'Model AI tercanggih untuk penalaran arsitektur kode, ekstraksi dokumen kompleks, dan pemanggilan tools eksternal terpercaya.',
    badge: 'LLM Utama',
  },
  {
    name: 'Gemini Flash & OpenAI',
    category: 'AI & LLMs',
    tagline: 'Inferensi Cepat & Efisien',
    description: 'Digunakan untuk respon chat WhatsApp berbiaya sangat terjangkau dengan latensi ultra-rendah.',
    badge: 'LLM Pendukung',
  },
  {
    name: 'n8n & Webhooks',
    category: 'AI & LLMs',
    tagline: 'Otomasi Workflow Mandiri',
    description: 'Menghubungkan ratusan sistem operasional bisnis tanpa terikat langganan pihak ketiga yang mahal.',
    badge: 'Automation',
  },
  {
    name: 'PostgreSQL & Supabase',
    category: 'Backend & Data',
    tagline: 'Database Relasional Teruji',
    description: 'Penyimpanan data yang tangguh dengan integritas relasional, dukungan enkripsi data, dan query terparameter anti-SQLi.',
    badge: 'Database',
  },
  {
    name: 'Ubuntu Linux 24.04 LTS',
    category: 'Cloud & Security',
    tagline: 'Sistem Operasi Server Standar',
    description: 'Distribusi Linux minim celah keamanan yang di-hardening khusus untuk menjalankan container aplikasi produksi 24/7.',
    badge: 'OS Server',
  },
  {
    name: 'Docker Engine',
    category: 'Cloud & Security',
    tagline: 'Isolasi Kontainer Aplikasi',
    description: 'Menjamin aplikasi berjalan stabil tanpa konflik pustaka antar layanan di dalam server cloud.',
    badge: 'DevOps',
  },
  {
    name: 'Tailscale & WireGuard',
    category: 'Cloud & Security',
    tagline: 'Zero-Trust Private Mesh VPN',
    description: 'Mengunci port remote SSH agar tidak terlihat oleh internet publik, hanya bisa diakses oleh perangkat resmi yang diautentikasi.',
    badge: 'Keamanan Jaringan',
  },
  {
    name: 'Cloudflare WAF & CDN',
    category: 'Cloud & Security',
    tagline: 'Perlindungan Perimeter Terdepan',
    description: 'Mitigasi serangan DDoS global, filter bot jahat, dan percepatan aset statis di ratusan data center dunia.',
    badge: 'Edge Security',
  },
  {
    name: 'Meta Conversions API (CAPI)',
    category: 'Marketing & Analytics',
    tagline: 'Tracking Server-Side Presisi',
    description: 'Memulihkan 20-30% sinyal konversi yang hilang akibat pemblokiran browser modern demi efisiensi budget iklan.',
    badge: 'Tracking',
  },
  {
    name: 'Google Tag Manager & GA4',
    category: 'Marketing & Analytics',
    tagline: 'Analitik Corong Perilaku Pengunjung',
    description: 'Manajemen script pelacak terpusat dan pengukuran jalur konversi pengunjung secara terstruktur.',
    badge: 'Analitik',
  },
  {
    name: 'Vercel Edge Network',
    category: 'Cloud & Security',
    tagline: 'Platform Deployment Kilat',
    description: 'Infrastruktur serverless global dengan revalidasi instan, routing edge, dan optimasi aset otomatis.',
    badge: 'Edge Hosting',
  },
  {
    name: 'Python & FastAPI',
    category: 'Backend & Data',
    tagline: 'Backend AI & Pemrosesan Data',
    description: 'Bahasa utama untuk pipeline embedding vektor, scraping data terstruktur, dan microservice agen AI.',
    badge: 'AI Backend',
  },
  {
    name: 'AWS Cloud Services',
    category: 'Cloud & Security',
    tagline: 'Infrastruktur Cloud Skala Global',
    description: 'Penyimpanan S3, komputasi EC2/Lambda, dan IAM security hardening terverifikasi resmi AWS.',
    badge: 'Cloud Infra',
  },
  {
    name: 'Caddy Web Server',
    category: 'Cloud & Security',
    tagline: 'Reverse Proxy TLS Otomatis',
    description: 'Web server modern berkinerja tinggi dengan HTTPS Let\'s Encrypt otomatis tanpa certbot manual.',
    badge: 'Web Server',
  },
  {
    name: 'Git & GitHub Actions',
    category: 'Cloud & Security',
    tagline: 'Automated CI/CD Workflows',
    description: 'Kontrol versi terpusat dengan pengujian otomatis sebelum deployment ke lingkungan produksi.',
    badge: 'CI/CD',
  },
  {
    name: 'Redis & Upstash',
    category: 'Backend & Data',
    tagline: 'In-Memory Cache & Rate Limiter',
    description: 'Penyimpanan cache semantik super cepat di bawah 10ms untuk membatasi frekuensi API dan respon instan.',
    badge: 'Cache & Rate-Limit',
  },
];

// -----------------------------------------------------------------------------
// 7. ARTIKEL BLOG PILIHAN
// -----------------------------------------------------------------------------
export const KLASIK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'cara-membuat-mvp-dan-menentukan-fitur',
    slug: 'cara-membuat-mvp-dan-menentukan-fitur',
    title: 'Cara Membuat MVP dan Menentukan Fitur untuk Validasi Produk Secepat Kilat',
    excerpt:
      'Panduan praktis memangkas fitur, menghindari jebakan overengineering, dan merilis Minimum Viable Product yang terbukti dibeli pasar sebelum menghabiskan tabungan.',
    category: 'Web Engineering',
    readTime: '9 min read',
    date: '01 Nov 2026',
    featured: true,
    content: {
      intro:
        'Hampir 90% proyek perangkat lunak dan startup baru gagal bukan karena kodenya jelek atau servernya tumbang, melainkan karena pendirinya menghabiskan waktu 6 bulan di ruang tertutup membangun 40 fitur yang ternyata tidak dibutuhkan siapa pun. Minimum Viable Product (MVP) bukan berarti produk cacat atau setengah jadi; MVP adalah versi paling ramping dari ide Anda yang mampu menyelesaikan satu masalah inti pelanggan dan membuktikan apakah mereka bersedia membayar.',
      keyTakeaways: [
        'MVP bukanlah produk jelek atau buggy; MVP adalah produk utuh dengan cakupan fitur paling minimal yang memberikan nilai nyata.',
        'Gunakan kerangka kerja MoSCoW: pisahkan secara kejam mana fitur "Must Have" (wajib ada agar alur jalan) dan mana yang hanya "Nice to have".',
        'Validasi transaksi nyata selalu mengalahkan pujian teman: jika ada 3 orang asing yang rela mentransfer uang muka via WhatsApp, produk Anda valid.',
        'Fokus pada Critical User Journey: dari orang datang ke landing page hingga terjadi kesepakatan transaksi.',
      ],
      sections: [
        {
          heading: '1. Mengapa Kebanyakan MVP Berakhir Menjadi "Fitur Kuburan"',
          body:
            'Kesalahan paling umum dari developer dan founder pemula adalah menunda peluncuran karena merasa aplikasinya "belum siap". Mereka sibuk menambahkan fitur dark mode, sistem reset password lewat SMS OTP, multi-bahasa 5 negara, dan referral link berjenjang, padahal belum ada satupun pengguna aktif yang mendaftar.\n\nPrinsip dasarnya sederhana: Setiap baris kode yang Anda tulis sebelum ada validasi pasar adalah bentuk utang teknis dan pemborosan modal. Jika Anda tidak merasa sedikit malu dengan versi pertama produk Anda saat diluncurkan, kemungkinan besar Anda sudah terlambat meluncurkannya.',
        },
        {
          heading: '2. Kerangka Kerja MoSCoW: Membedah Fitur Secara Kejam',
          body:
            'Untuk menentukan fitur apa yang wajib masuk ke MVP versi 1.0, kelompokkan seluruh ide Anda ke dalam 4 kotak:\n\n1. MUST HAVE (Wajib Ada):\nFitur yang jika dihilangkan, produk Anda kehilangan alasan untuk eksis. Contoh: jika Anda membuat jasa pembuatan website kilat, Must Have-nya adalah landing page profil, tombol chat WhatsApp, dan portofolio bukti hasil kerja.\n\n2. SHOULD HAVE (Sebaiknya Ada, Tapi Bisa Ditunda):\nFitur penting namun masih bisa diakali manual oleh manusia di tahap awal. Contoh: kalkulator estimasi harga otomatis. Pada rilis awal, biarkan calon klien menanyakan estimasi harga langsung via chat WhatsApp daripada menghabiskan seminggu mengoding logika kalkulator yang belum tentu dipakai.\n\n3. COULD HAVE (Boleh Ada Jika Ada Sisa Waktu):\nFitur pemanis seperti animasi interaktif 3D atau generator invoice PDF otomatis. Kerjakan hanya jika Must Have sudah berjalan mulus di tangan pengguna nyata.\n\n4. WON\'T HAVE (Tegas Ditolak untuk Rilis Pertama):\nSistem multi-tenant, pembayaran kartu kredit internasional otomatis dengan escrow, dan dashboard analitik rumit. Catat ide ini di backlog masa depan, lalu kunci dan lupakan sampai ada 20 klien aktif.',
        },
        {
          heading: '3. Memetakan Jalur Kritis (The Critical User Journey)',
          body:
            'Gambarkan garis lurus dari titik pertama pengunjung melihat penawaran Anda hingga titik mereka menyelesaikan tujuan utama. Contoh alur kritis jasa digital:\nPengunjung Buka Website → Membaca Masalah & Solusi → Melihat Bukti Kredensial → Klik Tombol Chat WhatsApp → Konsultasi & Deal.\n\nSetiap elemen halaman yang tidak mendukung alur lurus ini harus disingkirkan atau disederhanakan. Jangan buat pengunjung berpikir keras atau mengisi formulir 12 kolom yang melelahkan.',
        },
        {
          heading: '4. Studi Kasus Riil: Validasi Layanan Jasa Web Kilat 500rb dalam 48 Jam',
          body:
            'Saat saya merancang paket "Website Online Kilat Rp 500rb", godaan awalnya adalah membangun platform SaaS generator landing page otomatis seperti Wix atau Shopify. Namun itu membutuhkan waktu 3 bulan rekayasa dan biaya server bulanan yang tinggi.\n\nAlih-alih membuat software otomatis, saya menerapkan prinsip MVP concierge: saya membuat 1 landing page statis cepat dengan Astro & Tailwind CSS, menampilkan paket layanan jelas dengan harga transparan Rp 500rb, dan menghubungkannya langsung ke WhatsApp saya. Dalam tempo 48 jam, validasi pasar langsung terjadi: calon klien UMKM menghubungi, memesan, dan proses pengerjaan dilakukan manual dengan standar kode tinggi. Pasar terbukti ada tanpa perlu membangun SaaS bernilai ratusan juta di muka.',
        },
        {
          heading: '5. Lima Kesalahan Fatal Saat Membangun MVP',
          body:
            'Hindari 5 jebakan klasik berikut:\n- Terlalu Cepat Menggunakan Arsitektur Microservices: Gunakan monolit sederhana atau serverless static page. Jangan mempersulit diri dengan Kubernetes untuk aplikasi berpenghuni 50 orang.\n- Mengabaikan Kecepatan Muat (Page Speed): Banyak MVP dibuat asal-asalan dengan builder berat yang loading-nya 7 detik di HP 4G. Calon pembeli sudah kabur sebelum halaman selesai dimuat.\n- Lupa Memasang Sinyal Pelacak (Tracking): Anda wajib memasang Meta Pixel / CAPI dan Google Analytics sejak hari pertama agar tahu tombol mana yang diklik dan di langkah mana pengunjung membatalkan niatnya.\n- Tidak Memiliki Mekanisme Pengumpulan Feedback: Berikan cara termudah bagi pengguna pertama untuk menyampaikan keluhan langsung ke founder.\n- Takut Menaruh Harga: Jangan malu menampilkan harga yang jelas. Fitur gratisan menarik pengguna pemburu gratisan, bukan pembeli yang memvalidasi model bisnis Anda.',
        },
        {
          heading: '6. Checklist 10 Poin: Siapkah MVP Anda Diluncurkan Hari Ini?',
          body:
            'Centang daftar berikut sebelum membagikan link ke publik:\n[ ] Satu masalah inti teratasi dengan jelas tanpa ambigu\n[ ] Waktu muat halaman di bawah 1.5 detik pada koneksi ponsel\n[ ] Tombol Call-to-Action (WhatsApp / Beli) langsung terlihat tanpa perlu scroll jauh\n[ ] Kredensial, portofolio, atau bukti sosial sudah terpasang\n[ ] Tidak ada dead links atau tombol rusak (404 error)\n[ ] Desain responsif diuji di layar HP Android dan iPhone\n[ ] Sertifikat SSL HTTPS aktif dan gembok hijau menyala\n[ ] Nomor kontak dan alamat email pengelola valid dan aktif dipantau\n[ ] Teks penawaran fokus pada keuntungan klien, bukan daftar fitur teknis belaka\n[ ] Akses analitik pengunjung sudah aktif merekam kunjungan',
        },
      ],
      conclusion:
        'MVP bukanlah tentang seberapa sedikit kode yang Anda tulis, melainkan seberapa cepat Anda belajar dari interaksi manusia nyata. Luncurkan solusi paling ringkas Anda sekarang, dengarkan masukan mereka, dan lakukan iterasi setiap minggu. Keberhasilan produk tidak ditentukan di meja perancangan, melainkan di tangan pengguna yang masalahnya terselesaikan.',
    },
  },
  {
    id: 'apa-itu-ai-agent-arsitektur-dan-batas',
    slug: 'apa-itu-ai-agent',
    title: 'Apa Itu AI Agent? Komponen, Batas Tindakan, dan Kapan Harus Memakainya',
    excerpt:
      'Perbedaan mendasar antara chatbot tanya-jawab biasa dengan AI Agent yang memiliki kemampuan merencanakan, memanggil tools, dan mengeksekusi tugas bisnis nyata.',
    category: 'AI & Agents',
    readTime: '6 min read',
    date: '28 Sep 2026',
    featured: true,
    content: {
      intro:
        'Hampir semua perusahaan hari ini mengklaim memiliki "AI" di produk mereka. Namun, sebagian besar hanya memasang kotak teks ke endpoint ChatGPT publik tanpa memori, tanpa integrasi sistem, dan tanpa kemampuan eksekusi nyata.',
      keyTakeaways: [
        'Chatbot konvensional hanya menghasilkan kata-kata berdasarkan input teks pengguna.',
        'AI Agent memiliki siklus penalaran (Plan -> Execute -> Observe -> Reflect) dan dibekali alat bantu nyata.',
        'Tool Calling dan protokol terbuka seperti MCP adalah jembatan yang menghubungkan kecerdasan LLM dengan database produksi.',
      ],
      sections: [
        {
          heading: '1. Siklus Hidup Agen: Dari Teks Menjadi Tindakan',
          body:
            'Sebuah chatbot ketika ditanya "Berapa sisa stok barang XYZ di gudang Cilegon?" akan menjawab dengan kalimat umum atau berhalusinasi jika data tersebut tidak ada di data trainingnya. Sebaliknya, sebuah AI Agent dibekali schema fungsi `cek_stok_gudang(nama_barang, lokasi)`. Model akan memutuskan untuk memanggil fungsi tersebut, menerima data JSON nyata dari database internal Anda, lalu merangkum jawabannya kepada pengguna dengan akurasi 100%.',
        },
        {
          heading: '2. Prinsip Keamanan & Guardrails',
          body:
            'Memberikan agen akses ke dunia nyata membawa risiko keamanan baru seperti Prompt Injection. Aturan emas dalam arsitektur agentic adalah prinsip Least Privilege: berikan agen akses read-only secara default, dan wajibkan konfirmasi otorisasi manusia (Human-in-the-loop) untuk setiap tindakan yang mengubah data atau melibatkan transfer finansial.',
        },
      ],
      conclusion:
        'Masa depan rekayasa perangkat lunak bukan tentang menggantikan developer, melainkan bagaimana developer merancang ekosistem di mana agen-agen cerdas dapat bekerja sama di bawah tata kelola sistem yang ketat.',
    },
  },
  {
    id: 'biaya-pembuatan-website-komponen-dan-paket',
    slug: 'biaya-pembuatan-website',
    title: 'Biaya Pembuatan Website: Komponen Riil dan Pilihan Paket Masuk Akal',
    excerpt:
      'Membedah mengapa harga website bisa berkisar dari Rp 500 ribu hingga puluhan juta rupiah, dan apa saja yang sebenarnya Anda bayar di balik layar.',
    category: 'Web Engineering',
    readTime: '7 min read',
    date: '27 Agt 2026',
    featured: true,
    content: {
      intro:
        'Banyak calon pemilik usaha bingung melihat variasi harga pembuatan website di pasaran. Ada yang menawarkan Rp 100 ribu, ada yang Rp 500 ribu, dan ada agensi yang meminta puluhan juta untuk tampilan yang sekilas mirip.',
      keyTakeaways: [
        'Biaya website ditentukan oleh 3 faktor: infrastruktur (domain & hosting), performa kecepatan render, dan kompleksitas fitur fungsional.',
        'Paket Rp 500 ribuan sangat ideal untuk landing page statis cepat yang mengarahkan pembeli ke WhatsApp.',
        'Aplikasi web kustom dengan sistem login dan database internal membutuhkan investasi rekayasa yang lebih serius.',
      ],
      sections: [
        {
          heading: '1. Komponen Biaya yang Nyata',
          body:
            'Komponen dasar website terdiri dari:\n- Nama Domain (.com / .id): Biaya sewa tahunan resmi ke registrar.\n- Hosting & Server: Layanan komputasi cloud untuk menampung berkas web.\n- Sertifikat Keamanan SSL: Enkripsi HTTPS (yang seharusnya gratis via Let\'s Encrypt / Cloudflare).\n- Desain & Rekayasa Kode: Waktu insinyur menyusun tata letak responsif, mengoptimasi gambar, dan memastikan website tidak lelet di ponsel pembeli.',
        },
      ],
      conclusion:
        'Pilihlah solusi yang sesuai dengan skala bisnis Anda saat ini. Jangan menghabiskan puluhan juta untuk sistem rumit jika yang Anda butuhkan hanyalah landing page cepat yang menghasilkan kontak leads setiap hari.',
    },
  },
  {
    id: 'server-side-tracking-capi-vs-pixel',
    slug: 'cara-tracking-konversi-meta-ads',
    title: 'Cara Tracking Konversi Meta Ads: Event, WhatsApp, dan Server-Side CAPI',
    excerpt:
      'Mengapa browser pixel tradisional kehilangan hingga 30% data akibat adblocker, serta bagaimana arsitektur server-side mengatasinya secara legal dan akurat.',
    category: 'Keamanan & Arsitektur',
    readTime: '6 min read',
    date: '27 Agt 2026',
    featured: true,
    content: {
      intro:
        'Jika Anda pernah menjalankan iklan berbayar dan melihat laporan dashboard mencatat 50 transaksi sementara rekening bank Anda mencatat 70 transaksi, Anda sedang mengalami fenomena data loss akibat pemblokiran browser modern.',
      keyTakeaways: [
        'Browser cookie pihak ketiga sedang dihapuskan secara bertahap oleh browser modern (Safari ITP, Firefox, Chrome).',
        'Conversions API (CAPI) mengirimkan sinyal transaksi langsung dari backend server ke endpoint API platform iklan.',
        'Deduplikasi event dengan Event ID yang sama adalah kunci mencegah pelaporan transaksi ganda.',
      ],
      sections: [
        {
          heading: '1. Cara Kerja Deduplikasi Event',
          body:
            'Saat pelanggan menyelesaikan checkout di website Anda, browser akan menembakkan event `Purchase` dengan membawa parameter `event_id: "ORD-9821"`. Secara bersamaan, webhook backend Anda juga menembakkan data transaksi yang sama ke API Meta dengan `event_id: "ORD-9821"`. Platform analitik akan mencocokkan ID tersebut dalam jendela deduplikasi 48 jam, menyimpan sinyal server yang lengkap, dan mengabaikan duplikasi browser.',
        },
      ],
      conclusion:
        'Keputusan pemasaran dan alokasi budget bisnis hanya seakurat data yang Anda kumpulkan. Investasi pada sistem tracking yang solid selalu membuahkan hasil dalam bentuk biaya akuisisi yang lebih terkendali.',
    },
  },
  {
    id: 'setup-cloud-vps-docker-caddy-tailscale',
    slug: 'coding-dari-hp-remote-ssh-termius-tailscale',
    title: 'Coding dari HP: Remote SSH ke PC Lokal & Cloud VPS dengan Termius + Tailscale',
    excerpt:
      'Panduan praktis mengelola server cloud VPS Linux yang aman, hemat biaya, dan bisa dipantau langsung dari smartphone Anda.',
    category: 'Cloud & DevOps',
    readTime: '8 min read',
    date: '09 Agt 2026',
    featured: true,
    content: {
      intro:
        'Mengelola server dan merilis pembaruan kode tidak harus selalu di depan meja kerja dengan multi-monitor. Dengan setup modern, Anda bisa mengecek status server dari mana saja dengan aman.',
      keyTakeaways: [
        'Satu server VPS seharga $4-$6 per bulan dapat menjalankan belasan aplikasi containerized dengan performa prima.',
        'Caddy Web Server mengeliminasi kerumitan certbot dan konfigurasi Nginx berbelit.',
        'Tailscale VPN memungkinkan server dikelola dari HP tanpa perlu membuka port SSH ke publik.',
      ],
      sections: [
        {
          heading: '1. Hardening Server Linux dalam 5 Menit',
          body:
            'Langkah pertama setelah membuat VPS adalah mematikan login root berbasis password dan hanya mengizinkan public key cryptography. Pasang firewall UFW hanya untuk port 80 dan 443. Untuk port SSH (22), jangan buka ke publik — gunakan antarmuka Tailscale sehingga hanya perangkat terautentikasi Anda yang bisa mengaksesnya.',
        },
      ],
      conclusion:
        'Memahami dasar-dasar sistem operasi dan infrastruktur server memberi Anda kebebasan penuh sebagai insinyur perangkat lunak untuk menjalankan eksperimen apapun tanpa memikirkan tagihan cloud yang membengkak.',
    },
  },
  {
    id: 'keamanan-website-5-lapisan-produksi',
    slug: 'keamanan-website-5-lapisan',
    title: '5 Lapisan Keamanan Website Produksi: Dari Cloudflare WAF Hingga Query Terparameter',
    excerpt: 'Menerapkan pertahanan berlapis pada website bisnis untuk mencegah SQL Injection, DDoS, brute force, dan kebocoran data pelanggan.',
    category: 'Keamanan & Arsitektur',
    readTime: '6 min read',
    date: '18 Okt 2026',
    featured: true,
    icon: 'ShieldCheck',
    content: {
      intro: 'Banyak pengembang menganggap keamanan adalah urusan belakangan setelah aplikasi selesai. Padahal satu celah keamanan dapat merusak reputasi bisnis yang dibangun bertahun-tahun. Keamanan sistem yang baik dibangun dengan prinsip defense-in-depth.',
      keyTakeaways: [
        'Tidak ada satu sistem yang 100% aman; kuncinya adalah membuat setiap lapisan saling menopang.',
        'WAF di edge memblokir 90% bot jahat sebelum menyentuh server komputasi Anda.',
        'Parameterized query adalah pertahanan mutlak terhadap serangan SQL Injection.'
      ],
      sections: [
        {
          heading: '1. Arsitektur 5 Lapis Pertahanan',
          body: 'Pertahanan dibagi menjadi: 1) Cloudflare WAF di edge; 2) Reverse Proxy TLS Caddy; 3) Linux OS Hardening & UFW; 4) WireGuard Mesh Tailscale; 5) Enkripsi Database dan Prepared Statements.'
        }
      ],
      conclusion: 'Investasi pada keamanan adalah asuransi kelangsungan operasional bisnis digital Anda.'
    }
  },
  {
    id: 'arsitektur-rag-whatsapp-bot-latensi-rendah',
    slug: 'arsitektur-rag-whatsapp-bot',
    title: 'Merancang Arsitektur RAG WhatsApp Bot dengan Latensi di Bawah 1.5 Detik',
    excerpt: 'Strategi optimasi embedding vector, cache semantic, dan streaming webhook untuk respon customer care cerdas yang kilat.',
    category: 'AI & Agents',
    readTime: '8 min read',
    date: '15 Okt 2026',
    featured: true,
    icon: 'Bot',
    content: {
      intro: 'Pengguna WhatsApp menuntut balasan instan. Jika bot AI Anda butuh 8 detik untuk menjawab pertanyaan stok barang, pelanggan akan menutup obrolan dan beralih ke kompetitor.',
      keyTakeaways: [
        'Model embedding harus dipilih yang berdimensi efisien (misal text-embedding-3-small).',
        'Pertanyaan umum (FAQ) wajib disimpan dalam Redis Semantic Cache untuk respon <150ms.',
        'Kirimkan sinyal status "sedang mengetik..." segera setelah webhook pesan diterima.'
      ],
      sections: [
        {
          heading: '1. Alur Webhook dan Eksekusi Vector Search',
          body: 'Saat pesan masuk ke nomor WhatsApp Business, webhook mengirim payload ke serverless backend. Teks di-embed dan dicocokkan dengan pgvector di Supabase dalam radius cosinus > 0.82.'
        }
      ],
      conclusion: 'Kecepatan dan akurasi adalah dua pilar yang membuat AI agent benar-benar diadopsi oleh pelanggan.'
    }
  },
  {
    id: 'mengapa-skor-lighthouse-penting-untuk-iklan',
    slug: 'mengapa-skor-lighthouse-penting',
    title: 'Mengapa Skor Google Lighthouse 95+ Berdampak Langsung pada Penurunan Biaya Iklan',
    excerpt: 'Korelasi teknis antara kecepatan render halaman (LCP < 1.2s), Google Quality Score, dan biaya per klik (CPC) Meta Ads.',
    category: 'Web Engineering',
    readTime: '5 min read',
    date: '10 Okt 2026',
    featured: true,
    icon: 'Zap',
    content: {
      intro: 'Banyak pemasar mengeluhkan biaya iklan Meta dan Google yang terus melonjak, tanpa menyadari bahwa 40% calon pembeli pergi sebelum landing page mereka sempat tampil sempurna di layar ponsel.',
      keyTakeaways: [
        'Waktu muat lebih lambat 1 detik meningkatkan bounce rate pengunjung iklan hingga 32%.',
        'Google Ads memberikan diskon CPC hingga 20% untuk landing page dengan skor kecepatan tinggi.',
        'Website statis kilat (<0.8 detik) menghasilkan rasio kontak WhatsApp yang jauh lebih tinggi.'
      ],
      sections: [
        {
          heading: '1. Menekan Bobot Aset di Bawah 300KB',
          body: 'Gunakan format gambar modern AVIF, hilangkan pustaka JavaScript pihak ketiga yang berat, dan pastikan CSS critical di-inlining langsung di tag head dokumen HTML.'
        }
      ],
      conclusion: 'Optimasi kecepatan website adalah cara paling efektif melipatgandakan ROI anggaran iklan Anda.'
    }
  },
  {
    id: 'panduan-migrasi-ke-nextjs-app-router-stabil',
    slug: 'panduan-migrasi-ke-nextjs-app-router',
    title: 'Panduan Praktis Migrasi ke Next.js App Router Tanpa Downtime',
    excerpt: 'Langkah bertahap memindahkan routing Pages Router lama ke App Router modern dengan Server Components dan Streaming SSR.',
    category: 'Web Engineering',
    readTime: '7 min read',
    date: '02 Okt 2026',
    featured: false,
    icon: 'Layers',
    content: {
      intro: 'Next.js App Router menghadirkan kapabilitas React Server Components yang revolusioner. Namun melakukan migrasi sekaligus pada aplikasi yang sedang berjalan di produksi bisa sangat berisiko.',
      keyTakeaways: [
        'Pages Router dan App Router dapat berjalan berdampingan dalam satu proyek yang sama.',
        'Mulailah migrasi dari halaman statis seperti About dan Kontak sebelum menyentuh halaman dashboard dinamis.',
        'Manfaatkan layout.tsx untuk mencegah re-render komponen navigasi utama.'
      ],
      sections: [
        {
          heading: '1. Strategi Koeksistensi Rute Bertahap',
          body: 'Buat folder app/ berdampingan dengan pages/. Rute di app/ akan memiliki prioritas lebih tinggi, memungkinkan Anda menguji satu rute baru di staging sebelum merilisnya ke pengguna nyata.'
        }
      ],
      conclusion: 'Migrasi bertahap menjamin stabilitas bisnis tanpa mengorbankan keuntungan arsitektur modern.'
    }
  },
  {
    id: 'setup-cloud-vps-caddy-server-otomatis-ssl',
    slug: 'panduan-setup-cloud-vps-caddy',
    title: 'Setup Cloud VPS Linux dengan Caddy Web Server: Otomatis SSL Tanpa Certbot',
    excerpt: 'Cara mudah mengelola puluhan aplikasi web di VPS Linux murah dengan Caddyfile yang bersih dan perpanjangan SSL otomatis.',
    category: 'Cloud & DevOps',
    readTime: '6 min read',
    date: '28 Sep 2026',
    featured: false,
    icon: 'Server',
    content: {
      intro: 'Mengonfigurasi Nginx dengan certbot dan crontab perpanjangan sertifikat seringkali menimbulkan error tak terduga. Caddy Web Server hadir sebagai alternatif modern dengan HTTPS otomatis bawaan.',
      keyTakeaways: [
        'Caddyfile hanya membutuhkan 3 baris konfigurasi untuk reverse proxy ber-HTTPS.',
        'Sertifikat Let\'s Encrypt dan ZeroSSL diperpanjang otomatis secara redundan.',
        'Mendukung protokol HTTP/3 secara native tanpa instalasi modul tambahan.'
      ],
      sections: [
        {
          heading: '1. Contoh Caddyfile Bersih',
          body: 'domainanda.com {\n    reverse_proxy localhost:3000\n    encode gzip zstd\n}'
        }
      ],
      conclusion: 'Alat yang sederhana dan andal mengurangi beban kognitif pemeliharaan infrastruktur cloud Anda.'
    }
  },
  {
    id: 'cara-kerja-vector-database-supabase-pgvector',
    slug: 'cara-kerja-vector-database-supabase',
    title: 'Memahami Cara Kerja Vector Database pgvector di Supabase untuk Pencarian Semantik',
    excerpt: 'Menyimpan embedding teks dokumen bisnis dan melakukan similarity search menggunakan ekstensi pgvector di PostgreSQL.',
    category: 'AI & Agents',
    readTime: '7 min read',
    date: '24 Sep 2026',
    featured: false,
    icon: 'Database',
    content: {
      intro: 'Pencarian kata kunci konvensional (LIKE %keyword%) gagal memahami makna sinonim. Vector database memungkinkan AI menemukan dokumen yang relevan berdasarkan konteks makna, bukan ejaan kata.',
      keyTakeaways: [
        'Vektor adalah array angka mengambang (misal 1536 float) yang merepresentasikan koordinat makna.',
        'Ekstensi pgvector menambahkan tipe data vector dan operator jarak cosinus (<=>).',
        'Indeks HNSW memungkinkan pencarian cepat di antara jutaan dokumen dalam hitungan milidetik.'
      ],
      sections: [
        {
          heading: '1. Definisi Tabel Embedding di Postgres',
          body: 'CREATE EXTENSION IF NOT EXISTS vector;\nCREATE TABLE dokumen_sop (\n    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),\n    konten text NOT NULL,\n    embedding vector(1536)\n);'
        }
      ],
      conclusion: 'Memanfaatkan PostgreSQL untuk data relasional dan vektor sekaligus mengeliminasi kebutuhan database terpisah.'
    }
  },
  {
    id: 'mengamankan-api-dengan-rate-limiting-upstash',
    slug: 'mengamankan-api-dengan-rate-limiting',
    title: 'Mengamankan Endpoint API Publik dengan Upstash Redis Rate Limiting',
    excerpt: 'Mencegah pembengkakan tagihan LLM akibat serangan spammer dengan sliding window rate limiter di edge server.',
    category: 'Keamanan & Arsitektur',
    readTime: '5 min read',
    date: '20 Sep 2026',
    featured: false,
    icon: 'Lock',
    content: {
      intro: 'Endpoint API yang memanggil LLM berbayar (seperti Claude atau OpenAI) adalah target empuk serangan pemborosan biaya jika dibiarkan tanpa pembatasan frekuensi kueri.',
      keyTakeaways: [
        'Algoritma Sliding Window lebih adil daripada Fixed Window untuk membatasi lonjakan request.',
        'Upstash Redis berbasis serverless dengan latensi global di bawah 15ms.',
        'Tolak request berlebih dengan status code HTTP 429 Too Many Requests.'
      ],
      sections: [
        {
          heading: '1. Penerapan di Middleware Edge',
          body: 'import { Ratelimit } from "@upstash/ratelimit";\nconst ratelimit = new Ratelimit({\n  redis: Redis.fromEnv(),\n  limiter: Ratelimit.slidingWindow(10, "10 s"),\n});'
        }
      ],
      conclusion: 'Rate limiting adalah dinding pengaman pertama yang melindungi dompet dan infrastruktur Anda.'
    }
  },
  {
    id: 'mencegah-adblocker-dengan-server-side-gtm',
    slug: 'mencegah-adblocker-dengan-server-gtm',
    title: 'Mencegah Kehilangan Data Akibat AdBlocker Menggunakan Server-Side GTM',
    excerpt: 'Menjalankan container Google Tag Manager di sub-domain first-party (data.domainanda.com) untuk tracking analitik bersih.',
    category: 'Keamanan & Arsitektur',
    readTime: '6 min read',
    date: '14 Sep 2026',
    featured: false,
    icon: 'Network',
    content: {
      intro: 'Hingga sepertiga pengguna internet di Asia Tenggara memasang pemblokir iklan di browser mereka. Akibatnya, script gtm.js standar dari google.com langsung diblokir sebelum sempat dimuat.',
      keyTakeaways: [
        'Subdomain first-party menyamarkan endpoint analitik sebagai bagian dari sistem web Anda.',
        'Cookie first-party memiliki umur retensi yang jauh lebih panjang di Safari (ITP).',
        'Data dapat disaring dan dianonimisasi sebelum dikirim ke platform analitik pihak ketiga.'
      ],
      sections: [
        {
          heading: '1. Setup DNS Routing ke Cloud Run / Stape',
          body: 'Arahkan CNAME data.domainanda.com ke container sGTM. Script GTM dimuat dari https://data.domainanda.com/gtm.js sehingga tidak terdeteksi oleh daftar blokir adblocker publik.'
        }
      ],
      conclusion: 'Data analitik yang utuh memberikan peta jalan yang jelas bagi keputusan ekspansi bisnis Anda.'
    }
  },
  {
    id: 'vibe-coding-dengan-claude-code-cli-modern',
    slug: 'vibe-coding-dengan-claude-code-cli',
    title: 'Vibe Coding yang Benar: Alur Spec-Driven Development dengan Claude Code CLI',
    excerpt: 'Bagaimana developer profesional memanfaatkan agen terminal untuk membangun software 5x lebih cepat tanpa mengorbankan kualitas.',
    category: 'Web Engineering',
    readTime: '7 min read',
    date: '08 Sep 2026',
    featured: true,
    icon: 'Terminal',
    content: {
      intro: 'Banyak orang salah kaprah mengartikan vibe coding sebagai koding malas tanpa pemahaman. Kenyataannya, vibe coder terbaik adalah mereka yang memiliki pemahaman arsitektur paling matang.',
      keyTakeaways: [
        'Spesifikasi tertulis yang presisi menghasilkan kode yang 90% langsung bekerja.',
        'Gunakan agen terminal yang mampu membaca file dan menjalankan uji mandiri.',
        'Lakukan commit git kecil secara berkala setelah setiap tugas selesai.'
      ],
      sections: [
        {
          heading: '1. Tiga Tahap: Plan, Execute, Verify',
          body: 'Jangan langsung meminta agen koding menulis 500 baris. Minta ia membuat rencana langkah kerja, lakukan eksekusi satu per satu, dan verifikasi dengan perintah npm run build.'
        }
      ],
      conclusion: 'AI tidak menggantikan developer; AI melipatgandakan kecepatan developer yang terstruktur.'
    }
  },
  {
    id: 'mengapa-tidak-boleh-pakai-wordpress-berat-untuk-iklan',
    slug: 'mengapa-tidak-boleh-pakai-wordpress-berat',
    title: 'Mengapa Landing Page Iklan Lebih Baik Pakai Static Code Ketimbang CMS Lambat',
    excerpt: 'Perbandingan riil konsumsi sumber daya, kerentanan plugin bocor, dan kecepatan konversi antara WordPress berat vs Next.js/Static.',
    category: 'Web Engineering',
    readTime: '6 min read',
    date: '04 Sep 2026',
    featured: false,
    icon: 'Cpu',
    content: {
      intro: 'WordPress memang mudah dipasang, namun menumpuk 30 plugin pihak ketiga dan pembuat halaman lambat di shared hosting adalah resep pasti menghasilkan landing page lelet yang membakar budget iklan.',
      keyTakeaways: [
        'Website statis tidak memerlukan query database MySQL setiap kali pengunjung membuka halaman.',
        'Tidak ada risiko celah keamanan login /wp-admin atau eksploitasi plugin kadaluarsa.',
        'Waktu Time to First Byte (TTFB) dari CDN statis adalah di bawah 30 milidetik.'
      ],
      sections: [
        {
          heading: '1. Analisis Beban Server saat Iklan Skala Besar',
          body: 'Ketika ribuan pengunjung datang bersamaan dari kampanye iklan flash sale, website statis tetap santai melayani dari edge cache. Sebaliknya, CMS konvensional sering tumbang kehabisan memori RAM.'
        }
      ],
      conclusion: 'Untuk halaman penawaran produk yang dibiayai iklan, pilihlah arsitektur kode statis yang tahan banting.'
    }
  },
  {
    id: 'tips-desain-bento-grid-modern-ui-ux',
    slug: 'tips-desain-bento-grid-modern',
    title: 'Prinsip Desain Bento Grid: Menyajikan Informasi Kompleks dengan Visual Bersih',
    excerpt: 'Evolusi tata letak antarmuka modern yang diadopsi Apple, Vercel, dan Stripe untuk menyajikan fitur produk secara intuitif.',
    category: 'Web Engineering',
    readTime: '5 min read',
    date: '30 Agt 2026',
    featured: false,
    icon: 'Layers',
    content: {
      intro: 'Menyajikan terlalu banyak teks di halaman beranda membuat pengunjung bosan dan pergi. Pola desain Bento Grid memecah informasi ke dalam kompartemen visual yang seimbang dan menyenangkan dilihat.',
      keyTakeaways: [
        'Gunakan variasi ukuran sel (span 1, span 2) untuk menciptakan ritme visual yang dinamis.',
        'Sertakan micro-interaction halus seperti hover elevation dan ring border halus.',
        'Prioritaskan keterbacaan tipografi di atas sekadar ornamen hiasan grafis.'
      ],
      sections: [
        {
          heading: '1. Susunan Grid CSS Responsif',
          body: 'Gunakan CSS Grid dengan auto-fit dan minmax: grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) dengan gap proporsional untuk tampilan mobile yang tetap rapi.'
        }
      ],
      conclusion: 'Desain yang baik adalah desain yang membuat informasi rumit terasa mudah dicerna oleh siapa saja.'
    }
  },
  {
    id: 'otomasi-workflow-n8n-self-hosted-docker',
    slug: 'otomasi-workflow-n8n-self-hosted',
    title: 'Menggantikan Biaya Langganan Zapier dengan n8n Self-Hosted di Docker',
    excerpt: 'Membangun mesin integrasi operasional bisnis tanpa batas eksekusi dengan biaya VPS hemat $5 per bulan.',
    category: 'Cloud & DevOps',
    readTime: '7 min read',
    date: '25 Agt 2026',
    featured: false,
    icon: 'Workflow',
    content: {
      intro: 'Layanan otomasi cloud komersial seringkali mengenakan biaya mahal begitu alur kerja bisnis Anda mengeksekusi ribuan task per bulan. n8n self-hosted memberikan kendali penuh tanpa batasan task.',
      keyTakeaways: [
        'n8n mendukung eksekusi kode JavaScript/Python kustom di dalam node workflow.',
        'Data transaksi sensitif tetap berada di server privat Anda tanpa dikirim ke pihak ketiga.',
        'Dapat dihubungkan langsung ke WhatsApp Gateway, Supabase, dan model AI LLM.'
      ],
      sections: [
        {
          heading: '1. Docker Compose Ringkas n8n',
          body: 'version: "3.8"\nservices:\n  n8n:\n    image: docker.n8n.io/n8nio/n8n\n    restart: always\n    ports:\n      - "5678:5678"\n    environment:\n      - N8N_HOST=otomasi.domainanda.com'
        }
      ],
      conclusion: 'Otomasi mandiri memberi Anda kemerdekaan infrastruktur dan efisiensi margin operasional.'
    }
  },
  {
    id: 'panduan-deduplikasi-event-capi-browser-server',
    slug: 'panduan-deduplikasi-event-capi',
    title: 'Panduan Teknis Deduplikasi Event CAPI: Browser Event vs Server Event ID',
    excerpt: 'Mekanisme pencocokan sinyal piksel iklan di server Meta agar metrik ROAS dan rasio konversi Anda akurat 100%.',
    category: 'Keamanan & Arsitektur',
    readTime: '6 min read',
    date: '21 Agt 2026',
    featured: false,
    icon: 'TrendingUp',
    content: {
      intro: 'Jika Anda mengirimkan event pembelian dari browser DAN dari server secara bersamaan tanpa penanganan deduplikasi, Meta akan mencatat dua transaksi untuk satu pesanan yang sama, merusak laporan ROAS Anda.',
      keyTakeaways: [
        'Nama event (eventName) dan Event ID (eventID) HARUS sama persis di kedua sisi.',
        'Meta memberikan jendela deduplikasi hingga 48 jam untuk mencocokkan sinyal.',
        'Sinyal server yang membawa fbp, fbc, dan IP address akan melengkapi sinyal browser.'
      ],
      sections: [
        {
          heading: '1. Pembuatan ID Transaksi Deterministik',
          body: 'const eventId = "ORDER_" + order.id;\n// Tembakkan ke fbq("track", "Purchase", {...}, { eventID: eventId });\n// Kirimkan juga dari webhook backend dengan event_id: eventId.'
        }
      ],
      conclusion: 'Data yang bersih dan tidak duplikat adalah kompas bagi algoritma iklan untuk menemukan pembeli berikutnya.'
    }
  },
  {
    id: 'ci-cd-github-actions-untuk-umkm-dan-startup',
    slug: 'ci-cd-github-actions-untuk-umkm',
    title: 'Pipeline CI/CD GitHub Actions Otomatis: Push Kode Langsung Live ke Server',
    excerpt: 'Menghilangkan stres saat merilis pembaruan website dengan alur kerja git otomatis yang andal dan terstruktur.',
    category: 'Cloud & DevOps',
    readTime: '5 min read',
    date: '16 Agt 2026',
    featured: false,
    icon: 'GitBranch',
    content: {
      intro: 'Banyak pemilik usaha takut memperbarui websitenya karena trauma halaman web pernah blank putih saat diubah. Dengan pipeline CI/CD, setiap perubahan diuji dulu sebelum diterapkan ke server live.',
      keyTakeaways: [
        'Setiap commit memicu build di lingkungan terisolasi untuk memastikan tidak ada file korup.',
        'Rollback ke versi sebelumnya dapat dilakukan dalam 1 klik jika ada kendala mendesak.',
        'Menghilangkan kebiasaan berbahaya mengedit file live via file manager cPanel.'
      ],
      sections: [
        {
          heading: '1. Tiga Pilar Pipeline Rilis Sehat',
          body: '1. Lint & Format Check; 2. Type Checking TypeScript; 3. Atomic Deployment ke edge network dengan rute zero-downtime.'
        }
      ],
      conclusion: 'Otomatisasi rilis mengembalikan ketenangan pikiran developer dan pemilik bisnis.'
    }
  },
  {
    id: 'cara-memilih-domain-dan-dns-cloudflare-tercepat',
    slug: 'cara-memilih-domain-dan-dns-cloudflare',
    title: 'Strategi Memilih Domain Bisnis dan Optimasi DNS Resolver via Cloudflare 1.1.1.1',
    excerpt: 'Tips memilih ekstensi domain yang kredibel (.id vs .com) dan memangkas waktu resolusi DNS global hingga di bawah 10ms.',
    category: 'Cloud & DevOps',
    readTime: '5 min read',
    date: '12 Agt 2026',
    featured: false,
    icon: 'Globe',
    content: {
      intro: 'Nama domain adalah aset merek digital pertama Anda. Namun kecepatan nameserver DNS registrar bawaan seringkali lambat merespon pengguna di Indonesia.',
      keyTakeaways: [
        'Ekstensi .id memberikan sinyal lokalisasi kuat di mata mesin pencari Google Indonesia.',
        'Pindahkan nameserver ke Cloudflare untuk waktu lookup DNS tercepat di dunia.',
        'Aktifkan DNSSEC untuk mencegah serangan pembajakan DNS cache poisoning.'
      ],
      sections: [
        {
          heading: '1. Optimasi TTL dan Flat CNAME',
          body: 'Cloudflare CNAME Flattening memungkinkan domain root (tanpa www) menunjuk ke target serverless tanpa melanggar standar RFC DNS.'
        }
      ],
      conclusion: 'Fondasi domain yang solid memastikan website Anda selalu dapat ditemukan dengan instan.'
    }
  },
  {
    id: 'desain-basis-data-postgresql-multitenant-saas',
    slug: 'desain-basis-data-postgresql-multitenant',
    title: 'Pola Desain Basis Data PostgreSQL untuk Aplikasi SaaS Multi-Tenant',
    excerpt: 'Memilih antara isolasi skema vs Row Level Security (RLS) untuk keamanan data pelanggan bisnis yang ketat.',
    category: 'Cloud & DevOps',
    readTime: '7 min read',
    date: '06 Agt 2026',
    featured: false,
    icon: 'Database',
    content: {
      intro: 'Dalam aplikasi multi-pengguna atau SaaS, kebocoran data antar perusahaan klien adalah bencana hukum dan bisnis. Desain database harus menjamin isolasi data sejak baris query pertama.',
      keyTakeaways: [
        'PostgreSQL Row Level Security (RLS) menerapkan aturan filter tenant_id langsung di level mesin database.',
        'Aplikasi tidak bisa secara tidak sengaja membaca data tenant lain bahkan bila developer lupa menulis klausa WHERE.',
        'Indeks gabungan (tenant_id, created_at) menjaga query tetap kilat pada jutaan baris data.'
      ],
      sections: [
        {
          heading: '1. Kebijakan RLS di PostgreSQL',
          body: 'ALTER TABLE orders ENABLE ROW LEVEL SECURITY;\\nCREATE POLICY tenant_isolation ON orders\\n    USING (tenant_id = current_setting("app.current_tenant_id"));'
        }
      ],
      conclusion: 'Keamanan data multi-tenant yang ditegakkan di level database memberikan jaminan kepatuhan regulasi terkuat.'
    }
  },
  {
    id: 'strategi-lead-generation-whatsapp-presisi',
    slug: 'strategi-lead-generation-whatsapp',
    title: 'Meningkatkan Konversi WhatsApp Leads dari Iklan Berbayar Menggunakan Click-to-Chat',
    excerpt: 'Teknik merancang tautan WhatsApp berparameter dinamis untuk mengetahui dari mana asal kampanye setiap prospek.',
    category: 'Web Engineering',
    readTime: '5 min read',
    date: '01 Agt 2026',
    featured: false,
    icon: 'Sparkles',
    content: {
      intro: 'Banyak bisnis menyematkan tombol WhatsApp biasa tanpa pesan pembuka otomatis. Akibatnya, calon pembeli merasa canggung untuk memulai chat pertama mereka.',
      keyTakeaways: [
        'Sediakan draft pesan pembuka ramah yang mencantumkan nama produk yang sedang dilihat.',
        'Sematkan kode referensi unik (ref: PROD-98) di pesan untuk pelacakan sumber iklan.',
        'Gunakan tombol fixed melayang di layar ponsel untuk aksesibilitas jempol pengguna.'
      ],
      sections: [
        {
          heading: '1. Tautan URL Enkripsi Ramah Pengguna',
          body: 'const text = encodeURIComponent("Halo Kak Fitran, saya tertarik dengan Paket Web Kilat.");\nconst waUrl = "https://wa.me/628123456789?text=" + text;'
        }
      ],
      conclusion: 'Mempermudah calon klien memulai percakapan adalah separuh dari keberhasilan penjualan Anda.'
    }
  },
  {
    id: 'membedah-latensi-llm-streaming-sse',
    slug: 'membedah-latensi-llm-streaming',
    title: 'Membedah Latensi LLM: Mengapa Server-Sent Events (SSE) Wajib untuk AI Chat',
    excerpt: 'Mengeliminasi waktu tunggu membosankan pengguna dengan mengalirkan token jawaban secara real-time dari server ke browser.',
    category: 'AI & Agents',
    readTime: '6 min read',
    date: '28 Jul 2026',
    featured: false,
    icon: 'Zap',
    content: {
      intro: 'Menunggu 6 detik untuk sebuah paragraf AI yang muncul sekaligus terasa seperti keabadian. Dengan streaming token, pengguna membaca kata pertama dalam waktu 400 milidetik.',
      keyTakeaways: [
        'Server-Sent Events (SSE) lebih ringan daripada WebSocket untuk komunikasi satu arah server-ke-klien.',
        'Time to First Token (TTFT) adalah metrik terpenting dalam persepsi kecepatan antarmuka AI.',
        'ReadableStream di browser modern memungkinkan pembaruan DOM yang sangat mulus.'
      ],
      sections: [
        {
          heading: '1. Respon Streaming di Edge Endpoint',
          body: 'return new Response(stream, {\n  headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache" },\n});'
        }
      ],
      conclusion: 'Persepsi kecepatan adalah segalanya dalam membangun pengalaman aplikasi berbasis AI.'
    }
  },
  {
    id: 'zero-trust-network-dengan-tailscale-mesh',
    slug: 'zero-trust-network-dengan-tailscale',
    title: 'Menutup Port SSH 22 ke Publik: Implementasi Zero-Trust Mesh Network dengan Tailscale',
    excerpt: 'Menghilangkan bot pemindai IP dan serangan password brute-force dengan jaringan privat WireGuard terenkripsi.',
    category: 'Keamanan & Arsitektur',
    readTime: '6 min read',
    date: '22 Jul 2026',
    featured: false,
    icon: 'ShieldCheck',
    content: {
      intro: 'Dalam hitungan jam setelah sebuah VPS cloud diaktifkan, ribuan bot dari seluruh dunia akan mencoba membobol port SSH 22 Anda dengan jutaan kombinasi kata sandi.',
      keyTakeaways: [
        'Tutup port 22 di firewall UFW untuk seluruh antarmuka publik.',
        'Hubungkan VPS dan laptop/HP Anda ke Tailscale mesh network privat.',
        'Akses SSH hanya dibuka ke antarmuka jaringan tailscale0 ber-IP 100.x.y.z.'
      ],
      sections: [
        {
          heading: '1. Firewall UFW Khusus Tailscale',
          body: 'sudo ufw default deny incoming\nsudo ufw allow in on tailscale0 to any port 22 proto tcp\nsudo ufw enable'
        }
      ],
      conclusion: 'Server yang tidak terlihat oleh publik adalah server yang tidak bisa diserang dari luar.'
    }
  },
  {
    id: 'audit-performa-web-core-web-vitals-checklist',
    slug: 'audit-performa-web-core-web-vitals',
    title: 'Checklist 10 Langkah Audit Core Web Vitals (LCP, FID, CLS) Sebelum Meluncurkan Iklan',
    excerpt: 'Panduan sistematis memeriksa stabilitas visual, respon interaksi, dan elemen Largest Contentful Paint halaman Anda.',
    category: 'Web Engineering',
    readTime: '7 min read',
    date: '15 Jul 2026',
    featured: true,
    icon: 'Gauge',
    content: {
      intro: 'Core Web Vitals adalah standar baku Google untuk menilai kualitas pengalaman penjelajahan pengguna di dunia nyata. Nilai yang buruk akan menurunkan peringkat SEO dan menaikkan biaya iklan.',
      keyTakeaways: [
        'LCP (Largest Contentful Paint) harus di bawah 2.5 detik (target optimal fitran.dev < 0.8s).',
        'CLS (Cumulative Layout Shift) harus mendekati 0 untuk mencegah elemen melompat saat gambar dimuat.',
        'INP (Interaction to Next Paint) mengukur responsivitas klik tombol di ponsel berspesifikasi rendah.'
      ],
      sections: [
        {
          heading: '1. Mengunci Dimensi Gambar untuk Mencegah CLS',
          body: 'Selalu berikan atribut width dan height eksplisit pada tag <img> atau gunakan container ber-rasio aspek (aspect-ratio) agar ruang tampilan sudah dicadangkan sebelum gambar selesai diunduh.'
        }
      ],
      conclusion: 'Audit performa sebelum rilis adalah jaminan bahwa budget pemasaran Anda tidak menguap sia-sia.'
    }
  }
];
