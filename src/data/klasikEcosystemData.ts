// =============================================================================
// KLASIK & ELEGAN ECOSYSTEM DATA (Inspired by Fikran Dev & Tailored for Fitran)
// Tubagus Fitran Badruttamam — Software Engineer & AI System Integrator
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

export interface LearningChapter {
  id: string;
  code: string;
  title: string;
  kicker: string;
  summary: string;
  audience: string;
  subchapters: {
    id: string;
    num: string;
    title: string;
    situation: string;
    explanation: string;
    practice: string;
    mistakes: string;
    checklist: string[];
  }[];
}

export interface KamusTerm {
  term: string;
  category: 'AI & Machine Learning' | 'Web & Arsitektur' | 'Cloud & DevOps' | 'Keamanan & Tracking';
  definition: string;
  practicalTip: string;
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
// 1. ARSITEKTUR SISTEM KEAMANAN TERSTRUKTUR (5 LAYERS OF SECURITY)
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
      'Server mandiri dikonfigurasi dengan prinsip Zero-Trust: port SSH publik ditutup rapat dan hanya dapat diakses melalui jaringan privat virtual WireGuard Tailscale terenkripsi.',
    measures: [
      'Non-aktifkan login SSH berbasis password (hanya Public Key Cryptography)',
      'Firewall UFW minimalis: hanya membuka port 80 & 443 ke internet publik',
      'Port manajemen SSH dialihkan ke jaringan privat Tailscale VPN',
      'Pemasangan fail2ban untuk pemblokiran otomatis IP yang melakukan brute force',
    ],
    icon: 'Server',
  },
  {
    level: 'LAPISAN 03',
    title: 'Keamanan Aplikasi, Validasi Input & Proteksi Database',
    description:
      'Pemberantasan celah keamanan klasik OWASP Top 10 melalui sanitasi parameter ketat, parameterized query (anti-SQL Injection), dan proteksi Cross-Site Scripting (XSS).',
    measures: [
      'Sanitasi menyeluruh data form untuk membasmi injeksi script (XSS) & SQLi',
      'Autentikasi sesi aman dengan token HTTP-only SameSite cookies & CSRF protection',
      'Role-Based Access Control (RBAC) ketat untuk mencegah akses privilege tak sah',
      'Penyimpanan kata sandi terenkripsi menggunakan algoritma modern bcrypt / argon2',
    ],
    icon: 'Lock',
  },
  {
    level: 'LAPISAN 04',
    title: 'Tata Kelola AI (AI Guardrails & Human-in-the-Loop)',
    description:
      'Sistem otomasi dan AI Agent dibatasi dengan guardrails ketat agar tidak pernah membocorkan data sensitif perusahaan atau mengambil keputusan finansial tanpa persetujuan manusia.',
    measures: [
      'Isolasi prompt (Prompt Sandboxing) untuk menangkal serangan Prompt Injection',
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
      'Prosedur Restore Teruji: sistem dapat dipulihkan dalam waktu kurang dari 30 menit',
      'Penyimpanan cadangan di zona geografis terpisah untuk mengantisipasi insiden data center',
    ],
    icon: 'Database',
  },
];

// -----------------------------------------------------------------------------
// 2. KATALOG LAYANAN RESMI DENGAN HARGA RINCI (MULAI 500 RIBUAN)
// -----------------------------------------------------------------------------
export const KLASIK_SERVICES: ServicePackage[] = [
  {
    id: 'website-starter',
    code: 'SRV-01',
    title: 'Website Online Kilat / Landing Page Starter',
    price: 'Rp 500.000',
    originalPrice: 'Rp 850.000',
    tagline: 'Solusi website online cepat, aman, responsif, dan siap terima leads chat.',
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
    duration: '2 - 4 Hari Kerja',
    idealFor: 'Pemilik usaha baru, pekerja lepas, konsultan, dan penjual produk yang ingin segera memiliki website kredibel dengan biaya terjangkau.',
    featured: true,
  },
  {
    id: 'website-business',
    code: 'SRV-02',
    title: 'Website Bisnis & Profil Perusahaan Profesional',
    price: 'Rp 1.500.000',
    originalPrice: 'Rp 2.500.000',
    tagline: 'Multi-page website berstandar korporat dengan skor Google PageSpeed 95+ dan SEO on-page.',
    category: 'Website Online',
    badge: 'Paling Populer',
    description:
      'Pengembangan website perusahaan lengkap (Multi-Page: Beranda, Tentang Kami, Katalog Layanan/Produk, Galeri/Portofolio, Kontak). Didesain dengan estetika berkelas, struktur SEO siap ranking, dan analitik pengunjung.',
    scope: [
      'Hingga 5-7 halaman web kustom sesuai identitas brand perusahaan',
      'Optimasi performa Core Web Vitals (skor Google PageSpeed 95+, LCP < 1.2 detik)',
      'Optimasi SEO On-Page teknis (Sitemap XML, Robots.txt, Schema JSON-LD, Open Graph)',
      'Formulir penawaran/inquiry interaktif dengan validasi data aman',
      'Integrasi Google Tag Manager, Google Analytics 4 (GA4), & Search Console',
      'Setup email bisnis profesional (nama@perusahaananda.com)',
    ],
    deliverables: [
      'Website multi-halaman live dengan performa ultra-cepat',
      'Hak cipta source code penuh dan akses dashboard hosting',
      'Garansi perbaikan bug & pendampingan teknis selama 30 hari',
    ],
    securityHighlights: [
      'Proteksi Content Security Policy (CSP) ketat',
      'Sanitasi formulir anti-injeksi script XSS',
      'Backup data berkala dan mitigasi DDoS otomatis',
    ],
    techStack: ['Astro / Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Google Analytics 4'],
    duration: '7 - 14 Hari Kerja',
    idealFor: 'Perusahaan berkembang, klinik, kantor hukum, kontraktor, dan agensi yang ingin membangun otoritas dan dipercaya klien korporat.',
    featured: true,
  },
  {
    id: 'web-app-dashboard',
    code: 'SRV-03',
    title: 'Aplikasi Web, Portal Klien & Dashboard Internal',
    price: 'Rp 3.500.000',
    originalPrice: 'Rp 5.500.000',
    tagline: 'Sistem operasional web terstruktur untuk menggantikan spreadsheet manual yang berantakan.',
    category: 'Aplikasi & Dashboard',
    badge: 'Solusi Sistem',
    description:
      'Pembangunan sistem aplikasi web khusus untuk operasional bisnis Anda: manajemen inventori gudang, sistem approval cuti/keuangan, portal klien mandiri, atau CRM pencatatan prospek terpusat.',
    scope: [
      'Perancangan skema database relasional terstruktur (PostgreSQL / MySQL / Supabase)',
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
    duration: '2 - 4 Minggu Kerja',
    idealFor: 'Bisnis dengan alur kerja internal yang rumit dan ingin beralih dari Excel manual ke sistem terintegrasi yang rapi dan terukur.',
    featured: true,
  },
  {
    id: 'ai-automation-agent',
    code: 'SRV-04',
    title: 'Integrasi AI Agent & Otomasi Alur Kerja WhatsApp',
    price: 'Rp 2.000.000',
    originalPrice: 'Rp 3.500.000',
    tagline: 'Asisten cerdas terkoneksi knowledge base bisnis dengan batas eskalasi aman ke manusia.',
    category: 'AI & Otomasi',
    badge: 'Teknologi AI Modern',
    description:
      'Membangun alur otomasi cerdas yang menghubungkan chat WhatsApp bisnis, formulir web, dan spreadsheet menggunakan LLM (OpenAI / Claude) dengan guardrails ketat agar tidak berhalusinasi atau menjanjikan hal ngawur.',
    scope: [
      'Penyusunan Knowledge Base bisnis (FAQ, profil produk, aturan harga resmi)',
      'Desain prompt 4 pilar ber-guardrails (AI dilarang berhalusinasi / janji diskon palsu)',
      'Alur kualifikasi leads otomatis: kumpulkan nama, kebutuhan, dan budget sebelum dialihkan ke sales',
      'Integrasi webhook n8n / Make untuk sinkronisasi otomatis ke Google Sheets / CRM',
      'Mekanisme Handoff Manusia: otomatis serahkan percakapan ke CS saat pelanggan meminta komplain khusus',
    ],
    deliverables: [
      'Sistem bot/agent aktif terkoneksi ke WhatsApp Business API / webhook',
      'Dokumen SOP instruksi AI & alur flowchart eskalasi',
      'Notifikasi peringatan darurat ke Telegram/WhatsApp developer saat ada error API',
    ],
    securityHighlights: [
      'Isolasi prompt mencegah Prompt Injection',
      'Data sensitif disaring sebelum diproses model AI',
      'Akses sistem bersifat Read-Only untuk memitigasi risiko manipulasi data',
    ],
    techStack: ['Claude / OpenAI API', 'n8n Workflow', 'Python / Node.js', 'Webhooks', 'Google Sheets API'],
    duration: '10 - 18 Hari Kerja',
    idealFor: 'Bisnis yang kebanjiran chat tanya-jawab berulang setiap hari dan ingin menjaga respon cepat 24 jam tanpa kehilangan kontrol kualitas.',
  },
  {
    id: 'cloud-server-vps',
    code: 'SRV-05',
    title: 'Setup Server VPS Cloud, Docker & Hardening Server',
    price: 'Rp 750.000',
    originalPrice: 'Rp 1.200.000',
    tagline: 'Arsitektur cloud mandiri yang tangguh, hemat biaya bulanan, dan terisolasi aman.',
    category: 'Infrastruktur Cloud',
    badge: 'Infrastruktur Mandiri',
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
    duration: '3 - 5 Hari Kerja',
    idealFor: 'Developer, startup, atau pemilik bisnis yang ingin memiliki server mandiri hemat biaya tanpa terikat tagihan platform PaaS mahal.',
  },
  {
    id: 'tracking-audit-capi',
    code: 'SRV-06',
    title: 'Audit Keamanan Web & Server-Side Tracking (CAPI / GA4)',
    price: 'Rp 650.000',
    originalPrice: 'Rp 1.100.000',
    tagline: 'Perbaikan akurasi data tracking konversi dan audit celah keamanan formulir.',
    category: 'Keamanan & Tracking',
    badge: 'Akurasi Data',
    description:
      'Pemasangan pelacakan dataLayer Google Tag Manager, GA4, dan Meta Conversions API (CAPI) server-side untuk memastikan data transaksi tidak hilang akibat adblocker atau perlindungan privasi browser iOS.',
    scope: [
      'Audit kebocoran event tracking dan perbedaan angka dashboard iklan vs penjualan nyata',
      'Pemasangan dataLayer standar industri untuk event ViewContent, Lead, dan Purchase',
      'Implementasi Meta Conversions API (CAPI) server-side via Cloudflare Workers',
      'Pengujian event deduplication dengan Event ID matching yang presisi',
      'Pemeriksaan keamanan formulir web untuk mencegah pengiriman data palsu / spam',
    ],
    deliverables: [
      'Skor Event Match Quality (EMQ) di atas 8.5/10 pada dashboard iklan',
      'Dokumentasi kamus event tracking dan panduan membaca laporan mingguan',
    ],
    securityHighlights: [
      'Hanya mengirimkan parameter data yang telah di-hash (SHA-256)',
      'Kepatuhan regulasi privasi data pengunjung',
    ],
    techStack: ['Google Tag Manager', 'Google Analytics 4', 'Meta CAPI', 'Cloudflare Workers', 'dataLayer'],
    duration: '4 - 7 Hari Kerja',
    idealFor: 'Pengiklan Meta & Google Ads yang ingin memaksimalkan ROAS dengan data konversi yang akurat dan terhindar dari sinyal hilang.',
  },
];

// -----------------------------------------------------------------------------
// 3. KURIKULUM PEMBELAJARAN INTERAKTIF & LENGKAP (LEARNING CURRICULUM)
// -----------------------------------------------------------------------------
export const KLASIK_LEARNING_CHAPTERS: LearningChapter[] = [
  {
    id: 'ai-00',
    code: 'Bab 00',
    title: 'Peta Belajar AI untuk Bisnis',
    kicker: 'Prinsip Kerja & Fondasi',
    summary:
      'AI bukan tujuan. AI adalah cara mempercepat pekerjaan yang sudah jelas ukuran berhasilnya. Jangan mulai dari tools atau tren, melainkan dari masalah nyata yang memakan waktu.',
    audience: 'Pemilik bisnis, developer, dan tim yang ingin membedakan antara pakai AI, membuat otomasi, atau membangun agent mandiri.',
    subchapters: [
      {
        id: 'ai-00-1',
        num: '00.1',
        title: 'Cara Menggunakan Materi Pembelajaran Ini',
        situation:
          'Banyak orang menghabiskan berminggu-minggu menonton tutorial tools AI terbaru, tetapi saat kembali ke laptop, pekerjaan harian mereka tidak berubah dan waktu tetap habis.',
        explanation:
          'Urutan yang benar adalah: kenali alur kerja berulang -> perjelas standar input dan output yang diinginkan -> tulis instruksi eksplisit -> baru pilih alat. Belajarlah bab per bab dan langsung uji pada satu pekerjaan nyata hari ini.',
        practice:
          'Pilih satu pekerjaan kecil yang paling sering Anda kerjakan berulang (misal: merangkum email klien, menulis balasan komplain, atau menyusun laporan mingguan). Terapkan pola brief 4 bagian.',
        mistakes:
          'Mengira AI tahu konteks bisnis Anda secara gaib tanpa pernah diberi dokumen profil, batasan, atau contoh format output yang diinginkan.',
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
        situation:
          'Banyak yang latah ingin langsung membuat "AI Agent" serba otomatis padahal kebutuhan sebenarnya hanyalah template chat atau workflow integrasi 2 tools.',
        explanation:
          'Jalur 1 (Pakai AI): Cukup pakai ChatGPT/Claude untuk tugas sekali jalan atau draf awal.\nJalur 2 (Otomasi): Gunakan n8n/Make untuk alur teratur berulang (Trigger -> Action) tanpa perlu penalaran kompleks.\nJalur 3 (AI Agent): Gunakan agent jika sistem perlu membuat keputusan mandiri, memanggil tools eksternal (API/database), dan mengumpulkan konteks dinamis.',
        practice:
          'Petakan tugas Anda ke dalam diagram 3 jalur. Jika alurnya kaku (contoh: "setiap ada form masuk, kirim ke WhatsApp"), jangan pakai AI Agent — gunakan otomasi webhook biasa.',
        mistakes:
          'Memaksa agent mengerjakan alur yang seharusnya memakai otomasi deterministik pasti berhasil, sehingga memicu halusinasi dan boros biaya token API.',
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
        situation:
          'Ingin mengintegrasikan AI ke dalam layanan pelanggan atau dashboard bisnis, tetapi dokumen SOP dan batasan privasi belum pernah ditulis.',
        explanation:
          'AI tidak bisa merapikan kekacauan proses internal. Jika SOP manusia saja masih ambigu dan sering berubah-ubah, AI hanya akan mempercepat penyebaran kekeliruan ke pelanggan.',
        practice:
          'Tulis lembar batasan wewenang: apa yang boleh dijawab langsung oleh AI, dan kata kunci apa yang WAJIB dialihkan ke staf manusia (misal: komplain hukum, pembatalan kontrak, tawar harga di luar batas).',
        mistakes:
          'Memberikan wewenang kepada AI untuk menjanjikan komitmen finansial atau teknis tanpa persetujuan manusia.',
        checklist: [
          'Memiliki dokumen profil bisnis dan FAQ resmi yang disepakati.',
          'Menandai data rahasia (password, data pribadi) agar tidak dimasukkan ke prompt.',
          'Menyiapkan kanal eskalasi darurat ke staf tim.',
        ],
      },
    ],
  },
  {
    id: 'ai-01',
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
        situation:
          'Sering merasa kecewa karena hasil AI terasa hambar, tidak sesuai ekspektasi, atau terdengar seperti basa-basi internet umum.',
        explanation:
          'Perlakukan AI seperti pekerja magang yang sangat cerdas dan membaca jutaan buku, tetapi belum pernah magang satu hari pun di kantor Anda. Ia butuh brief tertulis, referensi contoh gaya bahasa, batasan, dan review sebelum hasilnya disebar ke publik.',
        practice:
          'Setiap kali meminta draf, sertakan 2 contoh paragraf yang menurut Anda "bagus" sebagai patokan tone of voice.',
        mistakes:
          'Memberikan instruksi satu kalimat pendek lalu heran mengapa hasilnya generik.',
        checklist: [
          'Menyertakan contoh input-output (Few-shot prompting).',
          'Meluangkan waktu 2 menit untuk meninjau draf sebelum dipakai.',
        ],
      },
      {
        id: 'ai-01-2',
        num: '01.2',
        title: 'Halusinasi: Kenapa Jawaban Salah Terdengar Begitu Yakin',
        situation:
          'AI mengutip pasal hukum palsu, mengarang angka riset fiktif, atau merekomendasikan fungsi kode pemrograman yang tidak pernah ada di dokumentasi.',
        explanation:
          'LLM dirancang untuk menghasilkan kalimat yang runtut dan meyakinkan secara gramatikal, bukan memverifikasi kebenaran ontologis. Ketika tidak memiliki data pasti, model akan mengisi kekosongan dengan tebakan yang terdengar paling masuk akal secara probabilitas.',
        practice:
          'Gunakan teknik "Grounded Prompting": perintahkan model untuk HANYA menjawab berdasarkan teks referensi yang Anda lampirkan di dalam tanda kutip / XML tag. Jika tidak ada di teks, perintahkan untuk menjawab "Saya tidak menemukan informasi tersebut di dokumen acuan."',
        mistakes:
          'Meminta AI menganalisis data atau angka spesifik tanpa melampirkan file sumber data aslinya.',
        checklist: [
          'Memberikan data sumber di dalam prompt (RAG pattern).',
          'Memerintahkan secara tegas untuk menolak mengarang saat data kurang.',
        ],
      },
    ],
  },
  {
    id: 'ai-02',
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
        title: 'Kerangka 4 Pilar: Konteks, Tugas, Batasan, Format',
        situation:
          'Prompt Anda sering menghasilkan jawaban yang terlalu panjang, keluar jalur, atau menggunakan bahasa kaku yang tidak enak dibaca.',
        explanation:
          'Struktur formula standar industri:\n1. Konteks: Siapa Anda, siapa audiens Anda, dan apa situasi bisnis saat ini.\n2. Tugas: Kata kerja aktif yang sangat spesifik (misal: "Tulis 3 variasi hook pembuka").\n3. Batasan: Apa yang TIDAK boleh dilakukan (misal: "Jangan gunakan kata \'revolusioner\', maksimal 20 kata per hook").\n4. Format: Tampilan akhir yang diharapkan (JSON, Markdown tabel, atau bullet points singkat).',
        practice:
          'Terapkan template 4 bagian ini untuk membuat pengumuman rilis fitur baru atau draf email penawaran kerja sama.',
        mistakes:
          'Mencampurkan tugas dan batasan dalam satu paragraf panjang tanpa pemisah visual.',
        checklist: [
          'Memisahkan konteks, tugas, batasan, dan format dengan jelas.',
          'Menentukan batasan kata atau format keluaran secara tegas.',
        ],
      },
    ],
  },
  {
    id: 'ai-03',
    code: 'Bab 03',
    title: 'Memberi Konteks dari Bisnis Sendiri',
    kicker: 'Context Injection & Knowledge Base',
    summary:
      'Tanpa konteks bisnis Anda, AI hanyalah ensiklopedia umum internet. Bangun dokumen profil bisnis satu halaman yang dapat disematkan ke dalam setiap sistem asisten AI Anda.',
    audience: 'Founder dan tim pengembang yang ingin AI berbicara layaknya representasi resmi perusahaan.',
    subchapters: [
      {
        id: 'ai-03-1',
        num: '03.1',
        title: 'Dokumen Profil Bisnis Satu Halaman (One-Page Business Profile)',
        situation:
          'Setiap kali tim Anda membuka obrolan AI baru, mereka harus mengetik ulang profil produk, daftar harga, dan keunggulan dari awal.',
        explanation:
          'Rangkum bisnis Anda ke dalam 1 dokumen ringkas: (1) Nama & Niche, (2) Masalah yang diselesaikan, (3) Target pembeli utama, (4) Daftar layanan/paket & rentang harga, (5) Nilai pembeda (USP), dan (6) Hal yang dilarang dijanjikan. Simpan file ini sebagai system prompt atau lampiran permanen.',
        practice:
          'Buat file markdown bernama `BUSINESS_CONTEXT.md` dan salin ke system instruction ChatGPT / Claude Projects / custom system prompt.',
        mistakes:
          'Mengunggah ratusan halaman PDF acak yang membingungkan model daripada 1 lembar ringkasan yang terstruktur rapi.',
        checklist: [
          'Dokumen profil bisnis selesai dibuat dalam 1-2 halaman.',
          'Daftar harga dan paket sudah terverifikasi valid.',
          'Aturan komunikasi dan tone of voice tertulis eksplisit.',
        ],
      },
    ],
  },
  {
    id: 'ai-06',
    code: 'Bab 06',
    title: 'Workflow Automation: Menghubungkan Tools Tanpa Manual',
    kicker: 'Arsitektur Otomasi Sistem',
    summary:
      'Otomasi yang berhasil dibangun di atas proses kerja yang sudah stabil. Petakan pemicu (trigger), kondisi pemilah, aksi sistem, dan sediakan jalur pengaman jika terjadi kendala jaringan.',
    audience: 'Developer dan operator bisnis yang ingin mengotomatiskan alur kerja tanpa kekhawatiran sistem kolaps diam-diam.',
    subchapters: [
      {
        id: 'ai-06-1',
        num: '06.1',
        title: 'Trigger, Action, Condition, dan Fallback Manual',
        situation:
          'Alur otomatisasi yang dibuat di n8n atau Make tiba-tiba berhenti di tengah jalan karena format pesan pelanggan tidak sesuai perkiraan, mengakibatkan lead terbengkalai berhari-hari.',
        explanation:
          'Setiap arsitektur otomasi wajib memiliki: (1) Trigger (pemicu event), (2) Sanitasi Input (membersihkan karakter berbahaya), (3) Condition (percabangan logika jika data lengkap vs tidak lengkap), (4) Action (mengeksekusi pengiriman data), dan (5) Error Catching / Fallback (jika gagal, segera kirim notifikasi darurat ke Telegram/WhatsApp developer).',
        practice:
          'Tambahkan node penangkap error (Error Trigger / Router Fallback) pada setiap otomasi yang berhubungan langsung dengan transaksi atau pelanggan.',
        mistakes:
          'Menganggap API pihak ketiga akan selalu online 100% tanpa menyiapkan log pencatat kegagalan.',
        checklist: [
          'Memiliki notifikasi darurat saat webhook gagal memproses data.',
          'Menyimpan salinan data mentah di database/spreadsheet cadangan sebelum diproses.',
        ],
      },
    ],
  },
  {
    id: 'ai-07',
    code: 'Bab 07',
    title: 'AI Agent untuk Chat, Sales, dan Dukungan Teknis',
    kicker: 'Autonomous AI Agents',
    summary:
      'Kapan bisnis membutuhkan AI Agent dan bukan chatbot biasa? Pahami arsitektur tool calling, integrasi MCP (Model Context Protocol), kualifikasi leads, dan titik penyerahan ke staf manusia.',
    audience: 'Pengembang sistem yang ingin membangun asisten otonom yang aman dan bertanggung jawab.',
    subchapters: [
      {
        id: 'ai-07-1',
        num: '07.1',
        title: 'Kapan Bisnis Benar-Benar Membutuhkan AI Agent',
        situation:
          'Banyak yang mengira chatbot pohon keputusan (rule-based: ketik 1 untuk info, ketik 2 untuk komplain) sudah usang dan harus diganti AI Agent yang bebas berbicara tanpa batas.',
        explanation:
          'Chatbot berbasis aturan tetap yang terbaik untuk navigasi menu cepat tanpa biaya token. AI Agent baru diperlukan saat pengguna mengajukan pertanyaan terbuka dengan bahasa alami yang bervariasi, membutuhkan pencarian konteks di dokumen (RAG), atau meminta sistem mengeksekusi tindakan (seperti cek status resi lewat API).',
        practice:
          'Batasi wewenang agent pada tahap awal hanya untuk 2 fungsi: (1) Menjawab pertanyaan FAQ produk, dan (2) Mengumpulkan data kontak serta kebutuhan awal prospek (kualifikasi leads).',
        mistakes:
          'Memberikan kebebasan penuh kepada agent untuk menjanjikan diskon atau menyetujui transaksi tanpa verifikasi manusia.',
        checklist: [
          'Menentukan batas eskalasi: kapan agent harus berkata "Mohon tunggu, saya sambungkan dengan rekan tim kami."',
          'Membatasi akses tools ke endpoint yang bersifat read-only sebelum memberi izin write/update.',
        ],
      },
    ],
  },
];

// -----------------------------------------------------------------------------
// 4. KAMUS ISTILAH DIGITAL, REKAYASA & AI (GLOSSARY)
// -----------------------------------------------------------------------------
export const KLASIK_KAMUS: KamusTerm[] = [
  {
    term: 'AI Agent',
    category: 'AI & Machine Learning',
    definition:
      'Sistem perangkat lunak bertenaga LLM yang mampu merencanakan langkah secara mandiri, memanfaatkan alat eksternal (API / fungsi kode), dan mengeksekusi tugas beruntun untuk mencapai tujuan tertentu.',
    practicalTip:
      'Selalu terapkan sandboxing dan pembatasan izin (guardrails) agar agent tidak mengeksekusi perintah destruktif tanpa konfirmasi pengguna.',
  },
  {
    term: 'RAG (Retrieval-Augmented Generation)',
    category: 'AI & Machine Learning',
    definition:
      'Metode menghubungkan dokumen atau database eksternal ke model AI saat inferensi, sehingga jawaban yang dihasilkan selalu berbasis data fakta terkini tanpa perlu melatih ulang model (fine-tuning).',
    practicalTip:
      'Pastikan dokumen acuan di-chunk (dipotong) dalam ukuran proporsional (200-500 kata) agar konteks yang disuntikkan ke prompt relevan dan hemat biaya token.',
  },
  {
    term: 'MCP (Model Context Protocol)',
    category: 'AI & Machine Learning',
    definition:
      'Standar protokol terbuka yang diperkenalkan oleh Anthropic untuk menghubungkan aplikasi kecerdasan buatan dengan sumber data lokal, lingkungan runtime, dan alat bantu pengembang secara aman dan terstandar.',
    practicalTip:
      'Gunakan MCP server saat membangun asisten coding atau integrasi database internal agar model tidak memerlukan integrasi API kustom yang rapuh.',
  },
  {
    term: 'SSR vs SSG vs CSR',
    category: 'Web & Arsitektur',
    definition:
      'Tiga pendekatan rendering web: SSR (Server-Side Rendering) membuat HTML di server saat request datang; SSG (Static Site Generation) membuat seluruh file HTML saat proses build; CSR (Client-Side Rendering) membebankan rendering halaman sepenuhnya ke browser pengguna lewat JavaScript.',
    practicalTip:
      'Untuk landing page dan blog yang mengejar SEO serta loading instan, pilih SSG (seperti Astro). Untuk dashboard analitik yang penuh interaksi data privat, pilih CSR/SSR.',
  },
  {
    term: 'Core Web Vitals',
    category: 'Web & Arsitektur',
    definition:
      'Tiga metrik utama Google untuk mengukur kualitas pengalaman pengguna nyata pada halaman web: LCP (kecepatan muat konten utama), CLS (stabilitas tata letak visual), dan INP (responsivitas interaksi klik).',
    practicalTip:
      'Hindari penggunaan JavaScript bundle raksasa dan sertakan dimensi eksplisit (width & height) pada gambar untuk mengunci skor hijau 95+ di Google PageSpeed.',
  },
  {
    term: 'Conversions API (CAPI)',
    category: 'Keamanan & Tracking',
    definition:
      'Metode pengiriman data interaksi pengguna langsung dari web server ke platform iklan (seperti Meta / Google) tanpa bergantung pada browser pixel yang rentan diblokir adblocker atau kebijakan privasi browser.',
    practicalTip:
      'Jalankan browser pixel dan Conversions API secara berdampingan dengan menyertakan Event ID yang identik agar sistem analitik dapat melakukan deduplikasi otomatis.',
  },
  {
    term: 'Reverse Proxy (Caddy / Nginx)',
    category: 'Cloud & DevOps',
    definition:
      'Server perantara yang menerima lalu lintas internet dari pengunjung dan meneruskannya ke port aplikasi backend internal, sekaligus menangani terminasi SSL HTTPS, kompresi data, dan keamanan firewall.',
    practicalTip:
      'Caddy adalah pilihan terbaik untuk pengembang modern karena secara otomatis mengurus dan memperbarui sertifikat SSL Let\'s Encrypt tanpa konfigurasi cron job manual.',
  },
  {
    term: 'Tailscale VPN',
    category: 'Cloud & DevOps',
    definition:
      'Jaringan privat virtual berbasis protokol WireGuard yang memungkinkan perangkat terhubung satu sama lain secara terenkripsi point-to-point tanpa perlu membuka port publik atau mengonfigurasi port forwarding di router.',
    practicalTip:
      'Gunakan Tailscale untuk mengakses port SSH dan dashboard internal server VPS Anda, sehingga port 22 tidak perlu dibuka ke internet publik.',
  },
];

// -----------------------------------------------------------------------------
// 5. ARTIKEL BLOG TEKNIS & STUDI KASUS (BLOG POSTS)
// -----------------------------------------------------------------------------
export const KLASIK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'arsitektur-web-modern-csr-ssr-ssg',
    slug: 'arsitektur-web-modern-csr-ssr-ssg',
    title: 'Arsitektur Web Modern: Kapan Memilih CSR, SSR, atau SSG untuk Produk Anda',
    excerpt:
      'Membedah perbandingan teknis antara Client-Side Rendering, Server-Side Rendering, dan Static Site Generation agar keputusan teknologi produk Anda tidak dimulai dari tren semata.',
    category: 'Web Engineering',
    readTime: '6 min read',
    date: '28 Okt 2026',
    featured: true,
    content: {
      intro:
        'Salah satu kesalahan paling umum dalam pengembangan perangkat lunak modern adalah memilih tech stack berdasarkan popularitas di media sosial, bukan karakteristik beban kerja dan kebutuhan pengguna akhir.',
      keyTakeaways: [
        'SSG adalah pilihan mutlak untuk website pemasaran, company profile, dan blog teknis yang memprioritaskan skor SEO 100 dan biaya hosting nol.',
        'SSR dibutuhkan ketika konten halaman bersifat sangat dinamis dan dipersonalisasi per pengguna berdasarkan sesi otentikasi server.',
        'CSR ideal untuk aplikasi dashboard internal, tools interaktif murni, atau panel kontrol di mana SEO tidak relevan.',
      ],
      sections: [
        {
          heading: '1. Mengapa Static Site Generation (SSG) Mengalami Kebangkitan',
          body:
            'Di era awal web, kita menggunakan HTML statis. Kemudian web beralih ke dynamic PHP, lalu ke Single Page Applications (SPA) berbasis React yang memindahkan semua beban render ke browser klien. Masalahnya: pengguna di jaringan seluler harus mengunduh megabyte JavaScript sebelum layar menampilkan teks pertama. Framework modern seperti Astro mengembalikan kejayaan SSG dengan konsep Island Architecture: kirim HTML murni secara instan, dan hanya hydrate komponen kecil yang membutuhkan interaktivitas JavaScript.',
        },
        {
          heading: '2. Kriteria Objektif Memilih Pola Render',
          body:
            'Tanyakan 3 pertanyaan ini sebelum memulai proyek:\n1. Apakah halaman ini wajib diindeks Google Search secara sempurna? (Jika ya -> Pilih SSG atau SSR).\n2. Apakah konten halaman berubah setiap detik untuk semua pengunjung? (Jika tidak -> Pilih SSG dengan rebuild otomatis saat ada konten baru).\n3. Apakah ada budget bulanan untuk memelihara server Node.js aktif 24 jam? (Jika tidak -> SSG yang di-host di Cloudflare Pages / Vercel Edge berbiaya nol rupiah dan tahan lonjakan jutaan pengunjung).',
        },
      ],
      conclusion:
        'Gunakan teknologi yang paling membosankan dan paling dapat diandalkan untuk masalah yang Anda hadapi. Jangan gunakan arsitektur microservices atau SSR kompleks jika yang Anda bangun hanyalah company profile yang cukup diselesaikan dengan file statis berkecepatan tinggi.',
    },
  },
  {
    id: 'ai-agent-vs-chatbot-konvensional',
    slug: 'ai-agent-vs-chatbot-konvensional',
    title: 'AI Agent vs Chatbot Konvensional: Kenapa Tool Calling Mengubah Segalanya',
    excerpt:
      'Penjelasan mendalam mengenai perbedaan mendasar antara chatbot percakapan biasa dengan sistem AI Agent yang mampu merencanakan tindakan dan memanggil API eksternal.',
    category: 'AI & Agents',
    readTime: '7 min read',
    date: '15 Okt 2026',
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
    id: 'setup-cloud-vps-docker-caddy-tailscale',
    slug: 'setup-cloud-vps-docker-caddy-tailscale',
    title: 'Setup Server Mandiri: Docker, Tailscale, dan Caddy untuk Pengembang Solo',
    excerpt:
      'Panduan praktis menyusun infrastruktur cloud VPS Linux yang aman, hemat biaya, dan mudah dipelihara tanpa terjebak biaya bulanan platform PaaS yang mahal.',
    category: 'Cloud & DevOps',
    readTime: '8 min read',
    date: '02 Okt 2026',
    content: {
      intro:
        'Banyak developer pemula enggan menyentuh VPS Linux dan lebih memilih layanan PaaS berbayar bulanan mahal karena takut dengan kompleksitas konfigurasi firewall dan sertifikat SSL. Padahal, dengan kombinasi alat modern, mengelola VPS mandiri kini sangat mudah dan menyenangkan.',
      keyTakeaways: [
        'Satu server VPS seharga $4-$6 per bulan dapat menjalankan belasan aplikasi containerized dengan performa sangat memuaskan.',
        'Caddy Web Server mengeliminasi kerumitan certbot dan konfigurasi Nginx yang berbelit-belit.',
        'Tailscale VPN memungkinkan server dikelola dari mana saja tanpa perlu mengekspos port SSH ke internet publik.',
      ],
      sections: [
        {
          heading: '1. Hardening Server Linux dalam 5 Menit',
          body:
            'Langkah pertama setelah membuat VPS adalah mematikan login root berbasis password dan hanya mengizinkan public key cryptography. Pasang firewall UFW hanya untuk port 80 dan 443. Untuk port SSH (22), jangan buka ke publik — gunakan antarmuka Tailscale sehingga hanya laptop atau HP Anda yang terautentikasi yang bisa melakukan remote SSH ke server.',
        },
        {
          heading: '2. Mengapa Caddy Menggantikan Nginx untuk Tim Kecil',
          body:
            'Caddy ditulis dalam bahasa Go dan memiliki arsitektur modern. Anda cukup menulis 3 baris di Caddyfile:\n```\napp.domainanda.com {\n    reverse_proxy localhost:3000\n}\n```\nCaddy akan otomatis menghubungi Let\'s Encrypt, menerbitkan sertifikat SSL HTTPS, memperbaruinya setiap 60 hari, dan mengompresi aset web dengan algoritma Brotli tanpa konfigurasi tambahan apapun.',
        },
      ],
      conclusion:
        'Memahami dasar-dasar sistem operasi dan infrastruktur server memberi Anda kebebasan penuh sebagai insinyur perangkat lunak untuk menjalankan eksperimen apapun tanpa memikirkan tagihan cloud yang membengkak.',
    },
  },
  {
    id: 'server-side-tracking-capi-vs-pixel',
    slug: 'server-side-tracking-capi-vs-pixel',
    title: 'Server-Side Tracking (CAPI) vs Browser Pixel: Menjaga Akurasi Data di Era Modern',
    excerpt:
      'Mengapa browser pixel tradisional kehilangan hingga 30% data akibat adblocker dan perlindungan privasi browser, serta bagaimana arsitektur server-side mengatasinya.',
    category: 'Keamanan & Tracking',
    readTime: '5 min read',
    date: '20 Sep 2026',
    content: {
      intro:
        'Jika Anda pernah menjalankan iklan berbayar dan melihat laporan dashboard iklan mencatat 50 transaksi sementara rekening bank Anda mencatat 70 transaksi, Anda sedang mengalami fenomena "data signal loss" akibat pemblokiran browser modern.',
      keyTakeaways: [
        'Browser cookie pihak ketiga sedang dihapuskan secara bertahap oleh browser terkemuka (Safari ITP, Firefox ETP, Chrome).',
        'Conversions API (CAPI) mengirimkan sinyal transaksi langsung dari backend server ke endpoint API platform analitik.',
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
];
