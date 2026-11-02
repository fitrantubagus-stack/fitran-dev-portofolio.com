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
  content: {
    intro: string;
    keyTakeaways: string[];
    sections: {
      heading: string;
      body: string;
      codeSnippet?: string;
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
    chaptersCount: 6,
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
];
