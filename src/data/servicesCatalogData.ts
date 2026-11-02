export interface StandardFeature {
  title: string;
  desc: string;
  iconName: string;
}

export interface DeliverableSection {
  title: string;
  items: string[];
}

export interface WorkflowStage {
  step: number;
  title: string;
  desc: string;
  duration: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface SubServiceItem {
  id: string;
  category: 'website' | 'aplikasi' | 'marketing' | 'infrastruktur';
  categoryLabel: string;
  title: string;
  tagline: string;
  price: string;
  duration: string;
  iconName: string;
  badge?: string;
  overview: string;
  keyBenefits: string[];
  mockupType?: 'website' | 'ecommerce' | 'mobile' | 'ai' | 'database' | 'terminal' | 'analytics';
  featureSectionTitle?: string;
  featureSectionSubtitle?: string;
  featurePills?: { iconName: string; label: string }[];
  standardFeatures: StandardFeature[];
  deliverables: DeliverableSection[];
  workflow: WorkflowStage[];
  techStack: string[];
  faqs: ServiceFAQ[];
}

export const ALL_SERVICES_CATALOG: SubServiceItem[] = [
  // =========================================================================
  // KATEGORI: WEBSITE (5 LAYANAN)
  // =========================================================================
  {
    id: 'jasa-pembuatan-website',
    category: 'website',
    categoryLabel: 'WEBSITE',
    title: 'Jasa Pembuatan Website',
    tagline: 'Website bisnis modern super cepat, ramah mesin pencari, dan siap konversi pelanggan',
    price: 'Mulai Rp 500.000',
    duration: '2 - 4 Hari Kerja',
    iconName: 'Globe',
    badge: 'Paling Diminati',
    overview:
      'Solusi pembuatan website bisnis modern dengan kecepatan muat di bawah 0.8 detik, ramah mesin pencari (SEO), dan terhubung langsung ke WhatsApp untuk konversi penjualan instan tanpa perantara rumit.',
    keyBenefits: [
      'Kecepatan muat di bawah 0.8 detik berstandar Google Core Web Vitals',
      'Desain eksklusif dan responsif optimal di seluruh resolusi layar ponsel & desktop',
      '100% source code menjadi hak milik klien tanpa langganan CMS bulanan',
      'Terintegrasi tombol order WhatsApp cerdas dengan format pesan otomatis',
    ],
    mockupType: 'website',
    featureSectionTitle: 'Standar Baku Rekayasa Web Performa Tinggi',
    featureSectionSubtitle: 'Setiap website bisnis kami bangun dengan standar Core Web Vitals Google, tanpa template bajakan atau plugin lambat.',
    featurePills: [
      { iconName: 'Gauge', label: 'LCP < 0.8s Kilat' },
      { iconName: 'Search', label: 'Schema SEO JSON-LD' },
      { iconName: 'ShieldCheck', label: 'SSL TLS 1.3 A+' },
      { iconName: 'Smartphone', label: 'Mobile-First 100%' },
    ],
    standardFeatures: [
      {
        title: 'Kecepatan Muat Google Core Web Vitals',
        desc: 'Diuji di jaringan seluler 4G agar skor LCP di bawah 0.8 detik, memangkas bounce rate pengunjung secara drastis.',
        iconName: 'Gauge',
      },
      {
        title: 'Arsitektur SEO Semantik Sejak Awal',
        desc: 'Heading tag terstruktur H1-H3, meta OpenGraph, XML sitemap otomatis, dan schema data terstruktur Google.',
        iconName: 'Search',
      },
      {
        title: 'Penyajian Gambar Otomatis Next-Gen WebP/AVIF',
        desc: 'Kompresi lossless otomatis yang menghemat kuota pengunjung hingga 70% tanpa mengurangi ketajaman visual.',
        iconName: 'Sparkles',
      },
      {
        title: 'Tombol Interaktif WhatsApp Conversion Smart-CTA',
        desc: 'Tombol chat WhatsApp melayang dengan format pesan pre-filled yang langsung mengarahkan pengunjung menjadi prospek.',
        iconName: 'MessageSquare',
      },
      {
        title: 'Pelacakan Analitik GA4 & Meta Pixel Terintegrasi',
        desc: 'Dashboard analytics terpasang rapi untuk mengukur dari mana pengunjung datang dan tombol mana yang paling sering diklik.',
        iconName: 'Target',
      },
      {
        title: 'Hosting Global Edge CDN & SSL Otomatis',
        desc: 'Didistribusikan di ratusan server edge dunia via Cloudflare/Vercel dengan garansi uptime 99.9% dan proteksi DDoS.',
        iconName: 'Server',
      },
    ],
    deliverables: [
      {
        title: 'Fondasi Antarmuka (Front-End)',
        items: [
          'Halaman Beranda, Tentang Kami, Layanan, Portofolio & Kontak',
          'Navigasi floating interaktif dan mobile drawer mulus',
          'Desain clean corporate dengan tipografi modern dan palet cerah',
          'Optimasi gambar otomatis ke format WebP / AVIF hemat kuota',
        ],
      },
      {
        title: 'Optimasi SEO & Pelacakan',
        items: [
          'Pemasangan Meta Tags OpenGraph untuk preview link WhatsApp & sosmed',
          'File robots.txt dan dynamic sitemap.xml otomatis',
          'Pemasangan Google Tag Manager (GTM) dan Google Analytics 4',
          'Daftar akun Google Search Console hingga terindeks',
        ],
      },
      {
        title: 'Infrastruktur & Serah Terima',
        items: [
          'Setup domain kustom (.com, .id, .co.id) dan SSL HTTPS gratis selamanya',
          'Deploy ke edge server global berkecepatan tinggi (Vercel / Cloudflare)',
          'Akses penuh repository GitHub & source code 100% milik klien',
          'Panduan video pengelolaan website secara mandiri',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Discovery & Struktur Konten',
        desc: 'Pengumpulan aset logo, profil usaha, dan penataan sitemap halaman.',
        duration: 'Hari 1',
      },
      {
        step: 2,
        title: 'Pengembangan & Slicing Antarmuka',
        desc: 'Coding antarmuka modern dengan Tailwind CSS dan pengoptimalan Core Web Vitals.',
        duration: 'Hari 2 - 3',
      },
      {
        step: 3,
        title: 'Integrasi SEO & Pelacakan',
        desc: 'Pemasangan schema data JSON-LD, GA4, dan tombol interaksi WhatsApp.',
        duration: 'Hari 3',
      },
      {
        step: 4,
        title: 'Peluncuran & Serah Terima',
        desc: 'Hubungkan domain utama, validasi SSL, uji PageSpeed 95+, dan serah terima aset.',
        duration: 'Hari 4',
      },
    ],
    techStack: ['TypeScript', 'React / Next.js', 'Tailwind CSS', 'Vercel Edge', 'Cloudflare DNS', 'Google Analytics 4'],
    faqs: [
      {
        question: 'Berapa lama proses pengerjaan website hingga online?',
        answer: 'Rata-rata 2 hingga 4 hari kerja setelah materi logo, teks, dan foto produk kami terima lengkap.',
      },
      {
        question: 'Apakah ada biaya langganan bulanan tersembunyi?',
        answer: 'Tidak ada. Hosting serverless kami gratis selamanya tanpa kuota bulanan. Anda hanya perlu memperpanjang biaya sewa domain tahunan Anda sendiri.',
      },
      {
        question: 'Apakah website ini mudah dibuka di ponsel jadul / jaringan lambat?',
        answer: 'Sangat mudah. Ukuran bundel website sangat ringan (<100KB) dan seluruh gambar terkompresi otomatis, menjamin muat kilat bahkan di sinyal 3G/4G.',
      },
      {
        question: 'Apakah saya mendapatkan source code lengkap?',
        answer: 'Ya, 100% kode sumber menjadi milik Anda seutuhnya dan kami serahkan via repository GitHub.',
      },
    ],
  },
  {
    id: 'jasa-pembuatan-website-custom',
    category: 'website',
    categoryLabel: 'WEBSITE',
    title: 'Jasa Pembuatan Website Custom',
    tagline: 'Website tailor-made dengan arsitektur kode khusus, basis data relasional, dan alur interaksi kompleks',
    price: 'Mulai Rp 1.500.000',
    duration: '7 - 14 Hari Kerja',
    iconName: 'Code2',
    badge: 'Full-Stack Custom',
    overview:
      'Pengembangan website dari nol tanpa batasan template instan. Cocok untuk bisnis dengan proses kalkulasi harga kustom, sistem booking janji temu, katalog produk berfilter dinamis, dan integrasi backend mandiri.',
    keyBenefits: [
      'Arsitektur bebas batasan plugin pihak ketiga yang rawan crash',
      'Database relasional PostgreSQL untuk integritas data yang kokoh',
      'Panel admin khusus untuk mengelola data tanpa perlu menyentuh kode',
      'Dukungan integrasi API pihak ketiga (payment gateway, ekspedisi, dll)',
    ],
    mockupType: 'website',
    featureSectionTitle: 'Arsitektur Full-Stack Custom & Database Relasional',
    featureSectionSubtitle: 'Dirancang khusus untuk proses bisnis kompleks yang tidak bisa diselesaikan oleh CMS instan biasa.',
    featurePills: [
      { iconName: 'Database', label: 'PostgreSQL Relational' },
      { iconName: 'Cpu', label: 'Dynamic Business Logic' },
      { iconName: 'Lock', label: 'JWT Auth & Role' },
      { iconName: 'Layers', label: 'RESTful API Endpoint' },
    ],
    standardFeatures: [
      {
        title: 'Arsitektur Logika Bisnis Kustom',
        desc: 'Mendukung alur input dinamis, formulir multi-langkah dengan validasi ketat, kalkulator estimasi harga, dan filter data berlapis.',
        iconName: 'Cpu',
      },
      {
        title: 'Database Relasional Terstruktur (PostgreSQL)',
        desc: 'Desain skema tabel yang dinormalisasi dengan Foreign Key, indexing performa tinggi, dan ACID transactions yang aman.',
        iconName: 'Database',
      },
      {
        title: 'Autentikasi Pengguna & Role-Based Access Control',
        desc: 'Sistem login aman dengan enkripsi password bcrypt/Argon2, sesi JWT, dan pemisahan hak akses admin vs user biasa.',
        iconName: 'Lock',
      },
      {
        title: 'Serverless API & Edge Route Caching',
        desc: 'Endpoint backend berbasis serverless functions dengan caching pintar untuk menangani ribuan request tanpa beban server berat.',
        iconName: 'Server',
      },
      {
        title: 'Integrasi Headless CMS / Custom Admin Panel',
        desc: 'Panel admin khusus untuk mengelola master data produk, status pesanan, dan entri konten secara instan.',
        iconName: 'LayoutGrid',
      },
      {
        title: 'Pelaporan & Ekspor Data Realtime (CSV / PDF)',
        desc: 'Fitur unduh laporan transaksi, rekap pelanggan, atau invoice otomatis langsung dari sistem.',
        iconName: 'Target',
      },
    ],
    deliverables: [
      {
        title: 'Desain Sistem & Skema Database',
        items: [
          'Entity Relationship Diagram (ERD) skema basis data relasional',
          'Dokumentasi alur use-case dan otorisasi pengguna',
          'Setup database PostgreSQL di Supabase / Neon / AWS RDS',
          'Migrasi dan seeding data awal dengan Prisma ORM',
        ],
      },
      {
        title: 'Frontend Dinamis & Panel Admin',
        items: [
          'Antarmuka interaktif dengan Next.js App Router dan React Server Components',
          'Dashboard admin untuk create, read, update, delete (CRUD) master data',
          'Formulir interaktif dengan validasi Zod dan react-hook-form',
          'Sistem pencarian dan filter data instan tanpa reload halaman',
        ],
      },
      {
        title: 'Keamanan, API & Deployment',
        items: [
          'Otentikasi aman (NextAuth / JWT) dengan proteksi CSRF & XSS',
          'Pemasangan rate-limiter untuk proteksi brute force endpoint API',
          'CI/CD pipeline otomatis terhubung ke Git',
          'Garansi pemeliharaan teknis 60 hari pasca peluncuran',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Analisis Alur Bisnis & ERD',
        desc: 'Membedah kebutuhan fitur unik dan merancang arsitektur basis data relasional.',
        duration: 'Hari 1 - 2',
      },
      {
        step: 2,
        title: 'Coding Backend & Skema Data',
        desc: 'Membangun API endpoints, migrasi tabel database, dan logika bisnis inti.',
        duration: 'Hari 3 - 6',
      },
      {
        step: 3,
        title: 'Slicing UI & Integrasi Admin',
        desc: 'Membangun antarmuka pengguna interaktif dan dashboard admin pengelola data.',
        duration: 'Hari 7 - 11',
      },
      {
        step: 4,
        title: 'UAT & Deployment Produksi',
        desc: 'Pengujian fungsi bersama klien, pelatihan admin, dan peluncuran resmi.',
        duration: 'Hari 12 - 14',
      },
    ],
    techStack: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma ORM', 'NextAuth', 'Zod'],
    faqs: [
      {
        question: 'Apa bedanya paket Custom dengan paket Website Standar?',
        answer: 'Paket Custom memiliki database mandiri dan logika khusus (seperti filter bertingkat, formulir kalkulasi dinamis, panel admin manajemen data, dan akun member).',
      },
      {
        question: 'Apakah database-nya bisa diakses oleh tim internal saya?',
        answer: 'Tentu. Anda memiliki hak akses penuh ke koneksi database (URL connection string) dan seluruh data dapat diekspor kapan saja.',
      },
      {
        question: 'Bisakah ditambahkan integrasi payment gateway?',
        answer: 'Bisa. Kami berpengalaman mengintegrasikan Midtrans, Xendit, atau Doku untuk pembayaran otomatis via QRIS, Virtual Account, dan kartu kredit.',
      },
      {
        question: 'Apakah kodenya mudah dikembangkan oleh developer lain?',
        answer: 'Sangat mudah. Kami menggunakan pola Clean Architecture berbasis TypeScript murni dengan dokumentasi terstruktur yang sesuai standar industri global.',
      },
    ],
  },
  {
    id: 'website-korporat',
    category: 'website',
    categoryLabel: 'WEBSITE',
    title: 'Website Korporat & Holding Perusahaan',
    tagline: 'Presentasi perusahaan berkelas dunia, kepatuhan tata kelola (ESG/GCG), dan relasi investor',
    price: 'Mulai Rp 3.500.000',
    duration: '10 - 20 Hari Kerja',
    iconName: 'Building2',
    badge: 'Enterprise Ready',
    overview:
      'Website resmi perusahaan skala menengah hingga konglomerasi holding. Memenuhi standar kepatuhan Good Corporate Governance (GCG), laporan tahunan (ESG), reputasi kredibel di hadapan investor global, dan multi-bahasa.',
    keyBenefits: [
      'Desain elegan berwibawa yang mencerminkan kekuatan dan skala perusahaan',
      'Arsitektur multi-bahasa terpadu (Bahasa Indonesia & Bahasa Inggris)',
      'Bagian khusus Tata Kelola Perusahaan (GCG) & Hub Relasi Investor',
      'Standar kepatuhan keamanan enterprise dengan sertifikasi SSL grade A+',
    ],
    mockupType: 'website',
    featureSectionTitle: 'Standar Enterprise Governance, Keamanan & Reputasi Investor',
    featureSectionSubtitle: 'Dirancang khusus untuk institusi, BUMN, holding company, dan perusahaan publik yang mengutamakan kredibilitas mutlak.',
    featurePills: [
      { iconName: 'Globe', label: 'Multi-bahasa ID/EN' },
      { iconName: 'ShieldCheck', label: 'Security Grade A+' },
      { iconName: 'Building2', label: 'Investor Relations Hub' },
      { iconName: 'Search', label: 'Knowledge Graph SEO' },
    ],
    standardFeatures: [
      {
        title: 'Infrastruktur Multi-Bahasa Native (i18n ID/EN)',
        desc: 'Peralihan bahasa instan tanpa refresh lambat dengan struktur subpath SEO /id/ dan /en/ yang patuh panduan Google.',
        iconName: 'Languages',
      },
      {
        title: 'Pusat Dokumen Tata Kelola & Laporan Tahunan (ESG/GCG)',
        desc: 'Repositori unduhan laporan keuangan audited, prospektus, dan laporan keberlanjutan PDF dengan pelacakan unduhan.',
        iconName: 'Building2',
      },
      {
        title: 'Keamanan Tingkat Lanjut & Proteksi Reputasi Brand',
        desc: 'Penerapan Content Security Policy (CSP), proteksi clickjacking, DNSSEC, dan sertifikat SSL enkripsi 256-bit.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Optimasi Profil Google Knowledge Graph',
        desc: 'Markup entitas korporat JSON-LD terverifikasi agar nama perusahaan, dewan direksi, dan logo resmi tampil di Google Sidebar.',
        iconName: 'Search',
      },
      {
        title: 'Struktur Hub Informasi Anak Perusahaan & Unit Bisnis',
        desc: 'Navigasi interaktif yang memetakan portofolio holding, lini bisnis manufaktur/jasa, dan lokasi kantor cabang di peta interaktif.',
        iconName: 'LayoutGrid',
      },
      {
        title: 'Service Level Agreement (SLA) & Backup Redundansi',
        desc: 'Jaminan ketersediaan sistem 99.9% dengan replikasi server antar-region dan backup snapshot berkala.',
        iconName: 'Server',
      },
    ],
    deliverables: [
      {
        title: 'Arsitektur Informasi Korporat',
        items: [
          'Halaman Profil Grup, Sejarah Milestones, Visi Misi, dan Dewan Komisaris/Direksi',
          'Seksi Tata Kelola Perusahaan (Good Corporate Governance) & Keberlanjutan (ESG)',
          'Hub Relasi Investor (Unduhan Laporan Keuangan Audited, Prospektus, RUPS)',
          'Peta interaktif sebaran kantor cabang dan unit operasional pabrik/tambang',
        ],
      },
      {
        title: 'Sistem Multi-Bahasa & Keamanan',
        items: [
          'Setup arsitektur i18n dwibahasa (Indonesia & English) dengan SEO hreflang tags',
          'Enkripsi SSL TLS 1.3 dengan skor keamanan A+ di Qualys SSL Labs',
          'Konfigurasi Cloudflare Enterprise WAF untuk mitigasi serangan DDoS',
          'Sistem verifikasi reCAPTCHA v3 pada formulir kontak dan whistleblower portal',
        ],
      },
      {
        title: 'Tata Kelola Konten & SLA',
        items: [
          'Headless CMS untuk tim komunikasi korporat mengunggah siaran pers & keterbukaan informasi',
          'Dokumentasi panduan kepatuhan visual brand identity',
          'Garansi SLA ketersediaan sistem 99.9% selama 12 bulan',
          'Pelatihan intensif bagi sekretariat perusahaan / humas',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Kajian Kepatuhan & Brand Identity',
        desc: 'Penyelarasan guideline merek, audit kepatuhan keterbukaan informasi, dan struktur navigasi holding.',
        duration: 'Hari 1 - 3',
      },
      {
        step: 2,
        title: 'Pembangunan Modul Enterprise',
        desc: 'Coding antarmuka dwibahasa, repositori laporan tahunan, dan profil dewan direksi.',
        duration: 'Hari 4 - 11',
      },
      {
        step: 3,
        title: 'Audit Keamanan & Kepatuhan GCG',
        desc: 'Uji penetrasi celah keamanan web, optimasi Google Knowledge Graph, dan verifikasi dokumen legal.',
        duration: 'Hari 12 - 16',
      },
      {
        step: 4,
        title: 'Migrasi Domain Korporat & Rilis',
        desc: 'Setup DNSSEC, sertifikat SSL korporat, pendaftaran ke Google News / Search Console, dan handover.',
        duration: 'Hari 17 - 20',
      },
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Cloudflare WAF', 'AWS S3 Repositories', 'Framer Motion'],
    faqs: [
      {
        question: 'Apakah sistem memenuhi standar laporan keuangan dan keterbukaan informasi?',
        answer: 'Ya. Modul Relasi Investor dirancang khusus dengan kategori laporan triwulanan, laporan tahunan, materi paparan publik, dan risalah RUPS sesuai kaidah OJK/Bursa Efek.',
      },
      {
        question: 'Bagaimana penanganan dokumen PDF laporan keuangan berukuran besar?',
        answer: 'Dokumen dihosting di cloud object storage (AWS S3 / Cloudflare R2) dengan CDN berkecepatan tinggi sehingga unduhan ribuan halaman PDF tetap cepat tanpa membebani server.',
      },
      {
        question: 'Apakah tersedia fitur Whistleblowing System (WBS)?',
        answer: 'Ya, kami dapat menyertakan formulir pelaporan anonim terenkripsi yang langsung terkirim ke komite audit independen tanpa menyimpan identitas pelapor.',
      },
      {
        question: 'Apakah ada kontrak pemeliharaan (maintenance retainer)?',
        answer: 'Kami menyediakan opsi SLA pemeliharaan bulanan mencakup pembaruan siaran pers berkala, monitoring keamanan harian, dan backup redundan multi-region.',
      },
    ],
  },
  {
    id: 'ecommerce-b2b',
    category: 'website',
    categoryLabel: 'WEBSITE',
    title: 'E-Commerce B2B & Katalog Grosir',
    tagline: 'Platform transaksi grosir dengan harga bertingkat, minimum order (MOQ), dan penerbitan PO/RFQ otomatis',
    price: 'Mulai Rp 4.000.000',
    duration: '14 - 21 Hari Kerja',
    iconName: 'ShoppingBag',
    badge: 'B2B Wholesale',
    overview:
      'Solusi e-commerce khusus bisnis grosir, distributor resmi, dan manufaktur. Dilengkapi fitur harga bertingkat per kuantitas, kalkulasi tonase/volume karton, penguncian Minimum Order Quantity (MOQ), serta penerbitan Surat Penawaran (RFQ) resmi.',
    keyBenefits: [
      'Sistem harga grosir bertingkat otomatis semakin banyak kuantitas pesanan',
      'Penerbitan surat penawaran harga resmi (Quotation PDF) dalam satu klik',
      'Gerbang verifikasi keanggotaan distributor sebelum melihat harga pabrik',
      'Terhubung langsung ke divisi sales via checkout keranjang WhatsApp grosir',
    ],
    mockupType: 'ecommerce',
    featureSectionTitle: 'Spesifikasi Ekosistem Transaksi Grosir & B2B Wholesale',
    featureSectionSubtitle: 'Dirancang untuk distributor, prinsipal, dan pabrik yang membutuhkan sistem pemesanan partai besar tanpa kerumitan e-commerce ritel biasa.',
    featurePills: [
      { iconName: 'ShoppingBag', label: 'Tiered Pricing MOQ' },
      { iconName: 'Cable', label: 'RFQ to PDF Instant' },
      { iconName: 'ShieldCheck', label: 'Wholesale Member Gate' },
      { iconName: 'MessageSquare', label: 'Direct WhatsApp Sales' },
    ],
    standardFeatures: [
      {
        title: 'Kalkulasi Harga Bertingkat Berdasarkan Volume (Tiered Pricing)',
        desc: 'Penyesuaian harga unit otomatis semakin murah saat kuantitas pemesanan mencapai ambang batas tier 50, 200, atau 1.000 unit.',
        iconName: 'ShoppingBag',
      },
      {
        title: 'Validasi Minimum Order Quantity (MOQ) per Kategori',
        desc: 'Pencegahan pesanan eceran dengan penguncian kelipatan karton, pack, atau tonase sesuai ketentuan gudang Anda.',
        iconName: 'Boxes',
      },
      {
        title: 'Penerbitan Surat Penawaran Resmi (RFQ PDF) Otomatis',
        desc: 'Calon pembeli dapat mengunduh dokumen penawaran harga resmi berlogo perusahaan dalam 1 klik sebelum persetujuan direksi.',
        iconName: 'Cable',
      },
      {
        title: 'Gerbang Akses Khusus Member Grosir Terverifikasi',
        desc: 'Opsi menyembunyikan katalog harga grosir dari publik umum hingga calon mitra bisnis disetujui oleh admin penjualan.',
        iconName: 'Lock',
      },
      {
        title: 'Integrasi Checkout Multi-Channel WhatsApp Sales Direct',
        desc: 'Keranjang belanja grosir langsung terformat menjadi ringkasan pesanan rapi yang dikirim ke nomor WhatsApp divisi sales B2B.',
        iconName: 'MessageSquare',
      },
      {
        title: 'Sinkronisasi Stok Multi-Gudang & Status Ketersediaan',
        desc: 'Menampilkan ketersediaan real-time di Gudang Pusat vs Cabang Daerah untuk kepastian jadwal pengiriman armada.',
        iconName: 'Database',
      },
    ],
    deliverables: [
      {
        title: 'Mesin Katalog Grosir & Pricing Engine',
        items: [
          'Katalog produk B2B dengan filter kategori industri, spesifikasi bahan, dan SKU',
          'Algoritma kalkulasi harga bertingkat (Volume Tier Discount Pricing)',
          'Pengaturan ambang batas Minimum Order Quantity (MOQ) per satuan kemasan/dus',
          'Sistem permohonan sampel produk (Sample Request Workflow)',
        ],
      },
      {
        title: 'Modul Penawaran & Dokumen B2B',
        items: [
          'Generator Surat Penawaran Harga (Request for Quotation - RFQ) format PDF instan',
          'Sistem registrasi & persetujuan akun reseller / distributor berizin (KYB)',
          'Alur penerbitan Purchase Order (PO) draft sebelum pengiriman invoice',
          'Integrasi format pesanan grosir terstruktur ke nomor WhatsApp divisi penjualan',
        ],
      },
      {
        title: 'Panel Manajemen & Laporan Distribusi',
        items: [
          'Dashboard admin manajemen harga khusus per grup mitra grosir (Platinum, Gold, Silver)',
          'Pelaporan rekapitulasi volume permintaan per produk dan wilayah pengiriman',
          'Panduan operasional dan serah terima hak cipta source code 100%',
          'Garansi pendampingan operasional selama 60 hari',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Kajian Aturan Grosir & Struktur SKU',
        desc: 'Merumuskan matriks tier harga, ketentuan MOQ per kategori, dan format dokumen RFQ resmi.',
        duration: 'Hari 1 - 3',
      },
      {
        step: 2,
        title: 'Pengembangan Mesin B2B & Katalog',
        desc: 'Membangun logika kalkulasi volume, verifikasi akun pembeli grosir, dan generator PDF.',
        duration: 'Hari 4 - 11',
      },
      {
        step: 3,
        title: 'Integrasi WhatsApp Sales & Gateway',
        desc: 'Penyambungan alur checkout ke sales rep dan validasi pengiriman dokumen penawaran otomatis.',
        duration: 'Hari 12 - 17',
      },
      {
        step: 4,
        title: 'Uji Transaksi Grosir & Peluncuran',
        desc: 'Simulasi alur pemesanan partai besar dari registrasi mitra hingga penerbitan PO final.',
        duration: 'Hari 18 - 21',
      },
    ],
    techStack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'PDFKit Engine', 'Tailwind CSS', 'Redis'],
    faqs: [
      {
        question: 'Apakah harga grosir bisa disembunyikan dari pengunjung umum yang belum login?',
        answer: 'Bisa. Sistem mendukung mode "Login to View Price" sehingga kompetitor tidak bisa melihat struktur harga pabrik Anda sembarangan.',
      },
      {
        question: 'Bagaimana pembeli B2B melakukan pembayaran?',
        answer: 'Pembeli B2B dapat mengunduh dokumen penawaran RFQ untuk proses internal mereka, lalu memilih pembayaran via transfer bank perusahaan (Invoice TOP / Term of Payment) atau virtual account.',
      },
      {
        question: 'Apakah sistem bisa menghitung estimasi ongkos kirim armada truk sendiri?',
        answer: 'Bisa. Kami dapat menambahkan kalkulator berat tonase / kubikasi armada (CBM) untuk rute pengiriman ekspedisi kargo khusus.',
      },
      {
        question: 'Berapa jumlah produk maksimal yang dapat dimasukkan ke katalog?',
        answer: 'Tidak ada batasan. Database relasional PostgreSQL mampu menampung puluhan ribu SKU lengkap dengan varian ukuran dan spesifikasi teknis.',
      },
    ],
  },
  {
    id: 'landing-page-kampanye',
    category: 'website',
    categoryLabel: 'WEBSITE',
    title: 'Landing Page Kampanye Iklan Berkonversi Tinggi',
    tagline: 'Satu halaman fokus dengan copywriting persuasif, muat secepat kilat, dan pelacakan sinyal iklan 100%',
    price: 'Mulai Rp 650.000',
    duration: '1 - 3 Hari Kerja',
    iconName: 'MousePointerClick',
    badge: 'Akselerasi ROI Iklan',
    overview:
      'Landing page satu halaman berorientasi aksi langsung (Direct Response). Dirancang khusus untuk memotong biaya perolehan pelanggan (CPA) dari kampanye Meta Ads, TikTok Ads, dan Google Ads berkat kecepatan muat di bawah 0.6 detik dan copywriting teruji.',
    keyBenefits: [
      'Kecepatan kilat < 0.6 detik menghapus risiko calon pembeli kabur karena loading lambat',
      'Struktur copywriting psikologis yang memandu pembaca dari masalah ke solusi produk',
      'Pemasangan pelacakan ganda (Browser Pixel + Meta Conversions API Server-Side)',
      'Tombol Call to Action (CTA) melayang yang selalu dapat dijangkau jempol di layar ponsel',
    ],
    mockupType: 'website',
    featureSectionTitle: 'Formula Konversi Kilat & Server-Side Ads Tracking',
    featureSectionSubtitle: 'Setiap elemen dirancang untuk mengubah pengunjung iklan berbayar (Meta Ads, Google Ads, TikTok Ads) menjadi pembeli aktif.',
    featurePills: [
      { iconName: 'Gauge', label: 'Load Time < 0.6s' },
      { iconName: 'Target', label: 'Meta CAPI Gateway' },
      { iconName: 'Sparkles', label: 'Direct Copywriting' },
      { iconName: 'MousePointerClick', label: 'Sticky Conversion CTA' },
    ],
    standardFeatures: [
      {
        title: 'Arsitektur Kecepatan Ekstrem (Under 0.6s Instant Load)',
        desc: 'Dibuat tanpa script pihak ketiga yang berat agar pengguna iklan tidak meninggalkan halaman sebelum konten tampil.',
        iconName: 'Gauge',
      },
      {
        title: 'Penyusunan Struktur Copywriting Berbasis Psikologi Konversi',
        desc: 'Alur cerita persuasif Problem-Agitate-Solution (PAS) yang menyasar titik sakit calon pelanggan dan memicu tindakan.',
        iconName: 'Sparkles',
      },
      {
        title: 'Pelacakan Sinyal Konversi Server-Side (Meta CAPI & TikTok API)',
        desc: 'Pencatatan konversi yang kebal terhadap ad-blocker dan proteksi privasi iOS 14+ untuk menjaga optimasi algoritma iklan.',
        iconName: 'Target',
      },
      {
        title: 'Bilah Tombol Aksi Melayang Adaptif (Sticky Mobile CTA)',
        desc: 'Tombol pembelian atau konsultasi WhatsApp yang selalu terlihat di bagian bawah layar ponsel saat pengunjung membaca penawaran.',
        iconName: 'MousePointerClick',
      },
      {
        title: 'Integrasi Form Pengumpul Leads Instan dengan Notifikasi Telegram/WA',
        desc: 'Data prospek yang masuk otomatis dikirim ke ponsel tim sales Anda dalam hitungan detik untuk follow-up cepat.',
        iconName: 'MessageSquare',
      },
      {
        title: 'Kesiapan A/B Testing Varian Headline & Visual',
        desc: 'Struktur kode modular yang memudahkan pengujian variasi judul atau penawaran harga untuk menemukan formula konversi tertinggi.',
        iconName: 'LayoutGrid',
      },
    ],
    deliverables: [
      {
        title: 'Struktur Penawaran & Copywriting',
        items: [
          'Headline memikat berbasis value proposition kuat penarik perhatian dalam 3 detik pertama',
          'Seksi masalah pelanggan, perbandingan sebelum vs sesudah, dan bukti sosial testimoni',
          'Tabel komparasi keunggulan produk dibanding alternatif pasaran',
          'Seksi penawaran harga spesial, countdown timer urgensi, dan jaminan garansi uang kembali',
        ],
      },
      {
        title: 'Pelacakan Iklan & Integrasi Leads',
        items: [
          'Pemasangan Meta Pixel + Conversions API (CAPI) dengan Event Match Quality tinggi',
          'Pemasangan Google Tag Manager, Google Ads Conversion Tracking, dan TikTok Pixel',
          'Formulir order ringkas terhubung langsung ke notifikasi bot Telegram tim penjualan',
          'Pencatatan otomatis data prospek baru ke Google Sheets secara real-time',
        ],
      },
      {
        title: 'Optimasi Hosting & Peluncuran Kilat',
        items: [
          'Setup di edge server super cepat dengan skor Google PageSpeed Mobile 98-100',
          'Penyediaan domain kustom atau subdomain kampanye khusus',
          'Pengujian fungsi pengiriman formulir dan validasi nomor WhatsApp penerima order',
          'Dukungan revisi cepat sebelum kampanye iklan berbayar dinyalakan',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Riset Penawaran & Bedah Masalah Produk',
        desc: 'Menganalisis sudut penawaran unik (unique selling angle) dan menyusun copywriting.',
        duration: 'Hari 1 Pagi',
      },
      {
        step: 2,
        title: 'Desain Visual Berkonversi Tinggi',
        desc: 'Slicing layout mobile-first dengan CTA kontras dan ilustrasi produk tajam.',
        duration: 'Hari 1 Siang',
      },
      {
        step: 3,
        title: 'Pemasangan Pelacakan Iklan CAPI',
        desc: 'Konfigurasi Meta CAPI, Google Ads tracking, dan automasi notifikasi pesan instan.',
        duration: 'Hari 2',
      },
      {
        step: 4,
        title: 'Verifikasi Event Tracking & Siap Tayang',
        desc: 'Uji simulasi konversi di Test Events Ads Manager untuk memastikan sinyal hijau.',
        duration: 'Hari 2 - 3',
      },
    ],
    techStack: ['Next.js / Vite', 'Tailwind CSS', 'Cloudflare Edge CDN', 'Meta Conversions API', 'Telegram Bot API'],
    faqs: [
      {
        question: 'Kenapa landing page harus memuat sangat cepat di bawah 1 detik?',
        answer: 'Riset Google membuktikan bahwa setiap penambahan durasi loading 1 detik meningkatkan risiko pengunjung iklan berbayar keluar hingga 32%. Kecepatan adalah penentu utama efisiensi biaya iklan Anda.',
      },
      {
        question: 'Apakah saya dibantu menyusun kata-kata promosinya (copywriting)?',
        answer: 'Ya. Anda cukup menceritakan manfaat produk dan target konsumen, tim kami yang akan merapikan struktur kalimat menjadi bahasa penawaran persuasif.',
      },
      {
        question: 'Bagaimana cara memastikan pelacakan Meta CAPI sudah bekerja?',
        answer: 'Kami akan menunjukkan layar pengujian Meta Events Manager dengan status "Diterima dari Server" berstatus hijau dan nilai deduplikasi 100%.',
      },
      {
        question: 'Bisakah saya memasang promo terbatas seperti kupon diskon?',
        answer: 'Tentu. Kami dapat menyematkan kotak kode kupon otomatis atau timer hitung mundur untuk memicu rasa urgensi (FOMO) calon pembeli.',
      },
    ],
  },

  // =========================================================================
  // KATEGORI: APLIKASI (6 LAYANAN)
  // =========================================================================
  {
    id: 'aplikasi-custom',
    category: 'aplikasi',
    categoryLabel: 'APLIKASI & SISTEM',
    title: 'Pengembangan Aplikasi Web Kustom',
    tagline: 'Aplikasi web interaktif dengan logika bisnis rumit, performa tinggi, dan skalabilitas cloud modern',
    price: 'Mulai Rp 3.500.000',
    duration: '14 - 30 Hari Kerja',
    iconName: 'AppWindow',
    badge: 'Custom Logic',
    overview:
      'Membangun aplikasi digital fungsional dari nol yang dirancang khusus untuk memecahkan hambatan operasional perusahaan. Dari sistem pemesanan kustom, SaaS multi-tenant, hingga portal layanan pelanggan dengan arsitektur bersih dan skalabel.',
    keyBenefits: [
      'Arsitektur modular berbasis Clean Architecture yang mudah dipelihara dan dikembangkan',
      'Integritas data terjamin dengan basis data relasional PostgreSQL berstandar ACID',
      'API endpoint terstandarisasi untuk kesiapan integrasi mobile app di masa depan',
      'Keamanan tingkat tinggi dengan isolasi hak akses peran (RBAC) dan enkripsi sesi',
    ],
    mockupType: 'database',
    featureSectionTitle: 'Standar Desain Sistem Modular & API High-Availability',
    featureSectionSubtitle: 'Membangun aplikasi digital yang mampu memproses ribuan data per detik dengan integritas data ACID dan kode bersih teruji.',
    featurePills: [
      { iconName: 'Code2', label: 'Modular Architecture' },
      { iconName: 'Database', label: 'ACID PostgreSQL' },
      { iconName: 'Lock', label: 'JWT Token Security' },
      { iconName: 'Server', label: 'Docker Containerized' },
    ],
    standardFeatures: [
      {
        title: 'Arsitektur Modular Scalable (Clean Architecture)',
        desc: 'Pemisahan tegas antara Controller, Service Logic, dan Data Access Layer agar kode mudah dirawat dan dikembangkan di masa depan.',
        iconName: 'Code2',
      },
      {
        title: 'Database Modeling & Transaksi ACID Aman',
        desc: 'Skema database relasional dengan penanganan lock concurrency untuk mencegah double-booking atau selisih nominal data.',
        iconName: 'Database',
      },
      {
        title: 'RESTful & GraphQL API Endpoints',
        desc: 'Penyediaan antarmuka data terstandarisasi dengan dokumentasi Swagger / OpenAPI untuk koneksi ke front-end atau aplikasi pihak ketiga.',
        iconName: 'Cable',
      },
      {
        title: 'Sistem Autentikasi Modern & Session Management',
        desc: 'Proteksi endpoint menggunakan token JWT, Refresh Token rotasi, dan session storage di Redis dengan enkripsi SSL.',
        iconName: 'Lock',
      },
      {
        title: 'Background Job Queue & Asynchronous Worker',
        desc: 'Pemrosesan tugas berat seperti pengiriman email massal atau generate laporan PDF di background menggunakan BullMQ / Redis.',
        iconName: 'Cpu',
      },
      {
        title: 'Pipeline CI/CD Otomatis & Kontainer Docker',
        desc: 'Otomasi deployment kode ke server staging dan production dengan zero-downtime rolling update.',
        iconName: 'Server',
      },
    ],
    deliverables: [
      {
        title: 'Arsitektur Backend & Database',
        items: [
          'Perancangan skema relasional tabel PostgreSQL dengan Prisma / Drizzle ORM',
          'Penyusunan REST API terproteksi dengan validasi skema runtime Zod',
          'Penerapan isolasi transaksi basis data untuk integritas saldo dan inventaris',
          'Penyediaan dokumentasi endpoint API interaktif (Swagger / Postman Collection)',
        ],
      },
      {
        title: 'Antarmuka Pengguna & Panel Kontrol',
        items: [
          'Single Page Application (SPA) responsif berkecepatan tinggi dengan React / Next.js',
          'Sistem autentikasi multi-peran (Admin, Super Admin, Klien, Staff)',
          'Formulir kompleks multi-langkah dengan validasi realtime di browser',
          'Manajemen state global terstruktur tanpa memori bocor (memory leak)',
        ],
      },
      {
        title: 'Infrastruktur Cloud & Pemeliharaan',
        items: [
          'Kontainerisasi aplikasi dengan Docker & Docker Compose untuk kemudahan replikasi',
          'Konfigurasi server produksi Linux dengan reverse proxy Nginx dan SSL otomatis',
          'Pemasangan monitoring error realtime (Sentry) dan logging aktivitas sistem',
          'Garansi perbaikan bug dan pendampingan teknis selama 90 hari',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Spesifikasi Kebutuhan & Desain Database',
        desc: 'Menyusun dokumen Functional Specification Document (FSD) dan skema relasional tabel.',
        duration: 'Hari 1 - 4',
      },
      {
        step: 2,
        title: 'Pengembangan Backend & API Gateway',
        desc: 'Menulis endpoint RESTful, pengujian unit test transaksi, dan integrasi Redis cache.',
        duration: 'Hari 5 - 14',
      },
      {
        step: 3,
        title: 'Slicing UI & Penyambungan Data',
        desc: 'Membangun komponen antarmuka pengguna dan menghubungkan antarmuka ke endpoint data.',
        duration: 'Hari 15 - 24',
      },
      {
        step: 4,
        title: 'UAT, Security Audit & Deployment',
        desc: 'Pengujian beban (load testing), audit celah otorisasi, migrasi data, dan serah terima.',
        duration: 'Hari 25 - 30',
      },
    ],
    techStack: ['Node.js', 'Express / NestJS', 'TypeScript', 'Next.js', 'PostgreSQL', 'Redis', 'Docker'],
    faqs: [
      {
        question: 'Apakah aplikasi ini dapat diakses lewat browser ponsel?',
        answer: 'Ya. Seluruh antarmuka dirancang 100% responsif mobile-first, sehingga staf atau pengguna dapat mengaksesnya dengan nyaman dari ponsel pintar tanpa perlu install aplikasi terpisah.',
      },
      {
        question: 'Bagaimana jika di masa depan kami ingin membuat aplikasi Android/iOS?',
        answer: 'Sangat mudah. Karena backend dibangun dengan RESTful API terstandarisasi, pengembang mobile apps Anda dapat langsung memakai endpoint yang sama tanpa perlu membangun backend baru.',
      },
      {
        question: 'Berapa banyak pengguna yang mampu ditampung bersamaan?',
        answer: 'Dengan arsitektur stateless dan caching Redis, sistem mampu menangani ribuan transaksi per menit pada server cloud berbiaya terjangkau.',
      },
      {
        question: 'Apakah hak cipta dan kode program diserahkan penuh ke kami?',
        answer: 'Ya. Seluruh hak cipta intelektual, kode sumber di repository Git, dan kredensial database diserahkan 100% menjadi milik perusahaan Anda.',
      },
    ],
  },
  {
    id: 'sistem-internal-portal',
    category: 'aplikasi',
    categoryLabel: 'APLIKASI & SISTEM',
    title: 'Portal Internal & Sistem Operasional Bisnis',
    tagline: 'Platform operasional terpusat untuk efisiensi staf, approval berjenjang, dan audit trail transparan',
    price: 'Mulai Rp 5.000.000',
    duration: '21 - 45 Hari Kerja',
    iconName: 'Monitor',
    badge: 'Enterprise Intranet',
    mockupType: 'database',
    featureSectionTitle: 'Kontrol Akses Berlapis, Audit Trail & Keamanan Internal',
    featureSectionSubtitle: 'Menghilangkan kekacauan koordinasi manual via spreadsheet dan chat dengan portal operasional perusahaan yang terstruktur rapi.',
    featurePills: [
      { iconName: 'ShieldCheck', label: 'Hierarchical Approval' },
      { iconName: 'Lock', label: 'Immutable Audit Trail' },
      { iconName: 'Monitor', label: 'Single Sign-On (SSO)' },
      { iconName: 'Database', label: 'Role-Based Data Scoping' },
    ],
    standardFeatures: [
      {
        title: 'Alur Kerja Persetujuan Berjenjang (Multi-Tier Approval)',
        desc: 'Sistem rute persetujuan pengajuan anggaran atau cuti mulai dari supervisor, manajer, hingga direksi dengan notifikasi email/chat.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Log Audit Abadi (Immutable Audit Trail Log)',
        desc: 'Perekaman otomatis setiap aksi create, update, atau delete lengkap dengan waktu, identitas staf, dan IP address untuk mencegah manipulasi data.',
        iconName: 'Lock',
      },
      {
        title: 'Isolasi Hak Akses Data per Departemen (RBAC Scoping)',
        desc: 'Staf hanya dapat melihat data yang relevan dengan divisi kerjanya, menjaga kerahasiaan informasi sensitif antar bagian.',
        iconName: 'Monitor',
      },
      {
        title: 'Integrasi Single Sign-On (SSO) Google Workspace & Microsoft 365',
        desc: 'Staf dapat masuk menggunakan akun email kantor resmi tanpa perlu menghafal banyak username dan password baru.',
        iconName: 'Cable',
      },
      {
        title: 'Sistem Tiket & Penugasan Tugas Internal',
        desc: 'Papan penugasan tugas operasional dengan status to-do, in-progress, dan done yang memantau produktivitas harian tim.',
        iconName: 'LayoutGrid',
      },
      {
        title: 'Dashboard Rekapitulasi Produktivitas & SLA Kinerja',
        desc: 'Laporan otomatis durasi waktu penyelesaian tugas dan respons tim terhadap permintaan operasional.',
        iconName: 'Target',
      },
    ],
    deliverables: [
      {
        title: 'Manajemen Akses & Keamanan Identitas',
        items: [
          'Integrasi otentikasi korporat Single Sign-On (SSO Google / Azure AD)',
          'Matriks peran berlapis (Role-Based Access Control) hingga tingkat hak akses per tombol aksi',
          'Pencatatan riwayat sesi aktif dan fitur pemutusan sesi paksa jika ada perangkat hilang',
          'Enkripsi data rahasia perusahaan (AES-256) pada tingkat kolom database',
        ],
      },
      {
        title: 'Modul Operasional & Alur Approval',
        items: [
          'Mesin persetujuan berjenjang untuk pengajuan klaim biaya, cuti, dan pembelian barang',
          'Sistem notifikasi pengingat approval otomatis via WhatsApp dan email resmi',
          'Papan kanban pemantauan progres tugas operasional antar departemen',
          'Generator formulir internal kustom tanpa perlu bantuan programmer',
        ],
      },
      {
        title: 'Pusat Dokumen & Laporan Kinerja',
        items: [
          'Repositori SOP dan dokumen internal perusahaan dengan pencarian kata kunci cepat',
          'Fitur ekspor rekapitulasi data operasional ke format Excel dan PDF terproteksi',
          'Buku panduan manual operasional staf dan administrator portal',
          'Garansi dukungan teknis prioritas selama 6 bulan',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Pemetaan SOP & Matriks Kewenangan',
        desc: 'Mendokumentasikan hierarki persetujuan jabatan, alur data divisi, dan standar keamanan data.',
        duration: 'Hari 1 - 5',
      },
      {
        step: 2,
        title: 'Pembangunan Modul Approval & Log Audit',
        desc: 'Mengembangkan mesin rute approval otomatis, notifikasi real-time, dan pencatatan riwayat aksi.',
        duration: 'Hari 6 - 20',
      },
      {
        step: 3,
        title: 'Integrasi SSO & Uji Coba Lintas Divisi',
        desc: 'Penyambungan email login korporat dan uji coba simulasi alur kerja bersama perwakilan departemen.',
        duration: 'Hari 21 - 35',
      },
      {
        step: 4,
        title: 'Deployment Server Privat & Pelatihan Staf',
        desc: 'Pemasangan di server privat/VPN perusahaan, pelatihan administrator, dan rilis penuh.',
        duration: 'Hari 36 - 45',
      },
    ],
    techStack: ['Next.js Enterprise', 'PostgreSQL', 'Tailwind CSS', 'NextAuth / Azure AD', 'Redis', 'Docker'],
    faqs: [
      {
        question: 'Apakah portal ini bisa dipasang di server lokal kantor (On-Premise) tanpa internet?',
        answer: 'Bisa. Kami dapat menginstal aplikasi di server lokal kantor (Local Area Network / Intranet) dengan isolasi penuh dari jaringan internet luar demi keamanan maksimal.',
      },
      {
        question: 'Apakah data lama dari Excel bisa dipindahkan ke portal baru ini?',
        answer: 'Tentu. Tim kami menyediakan skrip migrasi data untuk memetakan dan memasukkan ribuan baris data spreadsheet lama Anda ke dalam database baru tanpa kehilangan riwayat.',
      },
      {
        question: 'Bisakah karyawan mengajukan persetujuan langsung dari ponsel?',
        answer: 'Bisa. Antarmuka portal ramah ponsel dan notifikasi WhatsApp yang dikirimkan bot menyertakan link instan satu klik untuk menyetujui (Approve) atau menolak (Reject).',
      },
      {
        question: 'Bagaimana jika ada staf yang mengubah data secara sembunyi-sembunyi?',
        answer: 'Fitur Immutable Audit Trail mencatat setiap perubahan data: siapa pelakunya, nilai sebelum vs sesudah diubah, serta waktu detik pastinya. Catatan ini terkunci dan tidak bisa dihapus.',
      },
    ],
  },
  {
    id: 'aplikasi-mobile',
    category: 'aplikasi',
    categoryLabel: 'APLIKASI & SISTEM',
    title: 'Pengembangan Aplikasi Mobile (iOS & Android)',
    tagline: 'Aplikasi mobile berperforma native 120Hz dengan satu basis kode Flutter yang hemat biaya dan cepat meluncur',
    price: 'Mulai Rp 6.000.000',
    duration: '21 - 40 Hari Kerja',
    iconName: 'Smartphone',
    badge: 'Flutter Cross-Platform',
    overview:
      'Solusi pengembangan aplikasi mobile multi-platform menggunakan Flutter. Menjangkau jutaan pengguna iPhone dan Android sekaligus dengan tampilan mulus 120Hz, kemampuan offline, dan integrasi fitur perangkat keras seperti GPS dan kamera.',
    keyBenefits: [
      'Satu basis kode Flutter menghemat biaya pengembangan hingga 50% dibanding native terpisah',
      'Animasi antarmuka sangat halus berkinerja tinggi 60 - 120 FPS tanpa lag',
      'Tetap dapat digunakan dalam kondisi offline berkat penyimpanan lokal SQLite / Hive',
      'Didampingi proses verifikasi rilis hingga terbit resmi di Google Play Store & Apple App Store',
    ],
    mockupType: 'mobile',
    featureSectionTitle: 'Spesifikasi Native 120Hz Multiplatform & Offline-First',
    featureSectionSubtitle: 'Menjangkau pengguna iPhone dan Android sekaligus dengan antarmuka yang sangat mulus, responsif, dan hemat memori.',
    featurePills: [
      { iconName: 'Smartphone', label: 'Flutter 120fps Smooth' },
      { iconName: 'Database', label: 'Offline SQLite Cache' },
      { iconName: 'Zap', label: 'Firebase Push Alerts' },
      { iconName: 'ShieldCheck', label: 'Biometric Auth Ready' },
    ],
    standardFeatures: [
      {
        title: 'Single Codebase Multiplatform (iOS & Android Sekaligus)',
        desc: 'Mengembangkan satu basis kode Flutter bermutu tinggi yang memangkas biaya pemeliharaan hingga 50% dibanding native terpisah.',
        iconName: 'Smartphone',
      },
      {
        title: 'Arsitektur Offline-First & Sinkronisasi Data SQLite',
        desc: 'Aplikasi tetap dapat digunakan saat sinyal internet putus, dan otomatis menyinkronkan data ke server saat online kembali.',
        iconName: 'Database',
      },
      {
        title: 'Notifikasi Push Interaktif (Firebase Cloud Messaging)',
        desc: 'Pengiriman pesan promosi dan notifikasi transaksi seketika ke layar ponsel pengguna untuk meningkatkan retensi retensi.',
        iconName: 'Zap',
      },
      {
        title: 'Autentikasi Biometrik (Fingerprint & Face ID)',
        desc: 'Fitur keamanan login instan menggunakan sidik jari atau pemindai wajah bawaan smartphone yang praktis dan aman.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Integrasi Kamera, GPS & Fitur Sensor Perangkat',
        desc: 'Pemanfaatan modul kamera untuk pemindaian barcode/foto bukti dokumen dan penandaan lokasi GPS akurat.',
        iconName: 'Target',
      },
      {
        title: 'Panduan Rilis Lengkap ke Google Play Store & Apple App Store',
        desc: 'Bantuan persiapan screenshot, metadata privasi, sertifikat rilis, dan penanganan proses review hingga tayang.',
        iconName: 'Sparkles',
      },
    ],
    deliverables: [
      {
        title: 'Pembangunan Aplikasi Mobile Flutter',
        items: [
          'Arsitektur state management modern (BLoC / Riverpod) yang bersih dan teruji',
          'Desain antarmuka UI/UX modern yang mengikuti pedoman Apple HIG dan Google Material 3',
          'Integrasi fitur autentikasi biometrik (Fingerprint / Touch ID / Face ID)',
          'Sistem penyimpanan lokal terenkripsi untuk akses offline saat jaringan seluler terputus',
        ],
      },
      {
        title: 'Konektivitas Backend & Notifikasi',
        items: [
          'Penyambungan aman ke RESTful API dengan enkripsi SSL Pinning',
          'Setup Firebase Cloud Messaging (FCM) untuk pengiriman push notification promosi & transaksi',
          'Integrasi modul GPS untuk pelacakan lokasi kurir atau presensi lapangan',
          'Modul pemindaian kamera untuk QR Code, barcode inventaris, dan unggah foto profil',
        ],
      },
      {
        title: 'Rilis Toko Aplikasi & Dokumentasi',
        items: [
          'Penyiapan paket rilis signed bundle (.aab untuk Android dan .ipa untuk iOS)',
          'Pendampingan penyusunan metadata, privacy policy, dan aset grafis promosi App Store',
          'Penanganan respon review dari tim kurasi Apple & Google hingga aplikasi tayang',
          'Akses penuh repository kode sumber Flutter di GitHub',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Wireframe UI/UX & Prototipe Interaktif',
        desc: 'Merancang alur layar pengguna di Figma dan menyepakati panduan desain aplikasi.',
        duration: 'Hari 1 - 7',
      },
      {
        step: 2,
        title: 'Coding Flutter & Integrasi Sensor Perangkat',
        desc: 'Membangun komponen antarmuka, modul kamera/GPS, dan penyimpanan lokal SQLite.',
        duration: 'Hari 8 - 22',
      },
      {
        step: 3,
        title: 'Integrasi API & Push Notifications',
        desc: 'Menghubungkan aplikasi ke server cloud, menguji FCM alerts, dan autentikasi biometrik.',
        duration: 'Hari 23 - 32',
      },
      {
        step: 4,
        title: 'Pengujian Internal & Submission Store',
        desc: 'Distribusi beta via TestFlight / Google Internal Testing, lalu pengajuan rilis publik.',
        duration: 'Hari 33 - 40',
      },
    ],
    techStack: ['Flutter / Dart', 'Firebase Cloud Messaging', 'SQLite / Hive', 'REST API', 'Riverpod', 'App Store / Play Store'],
    faqs: [
      {
        question: 'Apakah kami harus memiliki akun developer Google dan Apple sendiri?',
        answer: 'Ya, Anda disarankan mendaftar akun Google Play Console ($25 sekali bayar) dan Apple Developer Program ($99/tahun) atas nama perusahaan Anda agar merek terdaftar resmi. Tim kami akan memandu prosesnya dari awal.',
      },
      {
        question: 'Apakah performa Flutter sama cepatnya dengan aplikasi native murni?',
        answer: 'Flutter mengkompilasi kode langsung ke bahasa mesin (ARM Native Code) dengan engine grafis Impeller, sehingga performanya setara dengan Swift atau Kotlin murni pada kecepatan 60-120 FPS.',
      },
      {
        question: 'Bagaimana jika aplikasi ditolak saat proses review oleh Apple?',
        answer: 'Kami bertanggung jawab penuh memperbaiki isu teknis yang menjadi catatan reviewer Apple hingga aplikasi berhasil disetujui dan tayang di App Store.',
      },
      {
        question: 'Apakah aplikasi tetap bisa berjalan jika smartphone tidak ada internet?',
        answer: 'Ya, fitur offline-first memungkinkan pengguna membuka data yang sudah tersimpan di cache lokal dan melakukan input data yang akan otomatis tersinkronisasi saat koneksi internet pulih.',
      },
    ],
  },
  {
    id: 'erp-crm-inventory',
    category: 'aplikasi',
    categoryLabel: 'APLIKASI & SISTEM',
    title: 'Sistem ERP, CRM & Manajemen Stok Multi-Gudang',
    tagline: 'Kendali total stok barang, alur pembelian, piutang pelanggan, dan perhitungan HPP otomatis',
    price: 'Mulai Rp 7.500.000',
    duration: '30 - 60 Hari Kerja',
    iconName: 'Boxes',
    badge: 'Enterprise Operations',
    overview:
      'Solusi ERP terintegrasi untuk perusahaan dagang, distributor, dan manufaktur. Menggabungkan pencatatan stok multi-gudang secara akurat, alur pengadaan barang (Purchasing), pipeline penjualan (CRM), hingga laporan laba rugi otomatis dengan kalkulasi HPP presisi.',
    keyBenefits: [
      'Menghapus selisih stok dengan pencatatan mutasi multi-gudang real-time',
      'Kalkulasi Harga Pokok Penjualan (HPP / COGS) otomatis metode FIFO atau Average',
      'Otomasi penerbitan dokumen Purchase Order (PO), Surat Jalan (DO), dan Faktur Pajak',
      'Pantau piutang jatuh tempo dan omset penjualan harian langsung dari genggaman',
    ],
    mockupType: 'database',
    featureSectionTitle: 'Standar Otomasi Akuntansi HPP, Pergudangan & Sales Pipeline',
    featureSectionSubtitle: 'Menyatukan divisi penjualan, pergudangan, dan keuangan dalam satu platform terpadu tanpa selisih stok dan kebocoran dana.',
    featurePills: [
      { iconName: 'Boxes', label: 'Multi-Warehouse Stock' },
      { iconName: 'Calculator', label: 'FIFO / Average COGS' },
      { iconName: 'Target', label: 'CRM Sales Funnel' },
      { iconName: 'Printer', label: 'Auto PO & Faktur Pajak' },
    ],
    standardFeatures: [
      {
        title: 'Manajemen Stok Multi-Gudang & Mutasi Realtime',
        desc: 'Pencatatan perpindahan barang antar gudang cabang dengan bukti surat jalan digital dan verifikasi barcode scanner.',
        iconName: 'Boxes',
      },
      {
        title: 'Kalkulasi Otomatis Harga Pokok Penjualan (HPP / COGS)',
        desc: 'Metode penilaian persediaan FIFO atau Weighted Average yang terhitung otomatis setiap kali ada barang masuk dan keluar.',
        iconName: 'Cpu',
      },
      {
        title: 'Pipeline CRM & Riwayat Interaksi Prospek Penjualan',
        desc: 'Melacak pergerakan calon pelanggan dari tahap penawaran hingga penutupan kontrak lengkap dengan pencatatan jatuh tempo invoice.',
        iconName: 'Target',
      },
      {
        title: 'Otomasi Dokumen Purchase Order (PO) & Delivery Order (DO)',
        desc: 'Penerbitan surat pesanan ke supplier dan surat jalan pengiriman pelanggan dengan format cetak profesional standar akuntansi.',
        iconName: 'Cable',
      },
      {
        title: 'Peringatan Dini Stok Minimum & Rekomendasi Restock',
        desc: 'Notifikasi otomatis saat stok barang di gudang mendekati batas kritis untuk mencegah kekosongan barang jualan.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Laporan Laba Rugi & Arus Kas Komprehensif',
        desc: 'Visualisasi keuntungan bersih per produk, piutang yang belum terbayar, dan valuasi aset gudang kapan pun dibutuhkan pimpinan.',
        iconName: 'LayoutDashboard',
      },
    ],
    deliverables: [
      {
        title: 'Modul Pergudangan & Stok Inventaris',
        items: [
          'Pencatatan master data barang lengkap dengan kode SKU, barcode, kategori, dan satuan grosir/ecer',
          'Sistem mutasi stok antar gudang dengan verifikasi serah terima digital barcode scanner',
          'Modul Stock Opname harian/bulanan dengan perhitungan otomatis selisih fisik vs sistem',
          'Notifikasi peringatan stok kritis dan estimasi masa kedaluwarsa (batch expiration)',
        ],
      },
      {
        title: 'Modul Penjualan, CRM & Pembelian',
        items: [
          'Pipeline penjualan (Leads, Quotation, Sales Order, Invoice, Payment Receipt)',
          'Pengelolaan daftar supplier, riwayat perbandingan harga beli, dan Purchase Order (PO)',
          'Pencatatan piutang pelanggan dengan peringatan jatuh tempo otomatis via WhatsApp',
          'Dukungan cetak Surat Jalan (Delivery Order) dan label alamat paket pengiriman armada',
        ],
      },
      {
        title: 'Modul Keuangan & Akuntansi Manajerial',
        items: [
          'Perhitungan Harga Pokok Penjualan (HPP) otomatis dengan opsi metode FIFO atau Average',
          'Laporan Laba Rugi bersih per transaksi, per sales rep, dan per kategori produk',
          'Arus kas kasir (Cash In / Cash Out) dan pencatatan biaya operasional kantor',
          'Pelatihan komprehensif bagi staf admin, orang gudang, kasir, dan manajer keuangan',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Kajian Alur Gudang & Kebijakan Akuntansi',
        desc: 'Menentukan metode HPP yang dipilih, format kode SKU, serta skema perpajakan dan diskon.',
        duration: 'Hari 1 - 7',
      },
      {
        step: 2,
        title: 'Pengembangan Inti ERP & Database Stok',
        desc: 'Membangun logika mutasi gudang, kalkulasi FIFO/Average, dan modul pembelian supplier.',
        duration: 'Hari 8 - 25',
      },
      {
        step: 3,
        title: 'Modul CRM & Penjualan Terintegrasi',
        desc: 'Menghubungkan invoice, pencatatan piutang, dan dashboard keuangan manajer.',
        duration: 'Hari 26 - 45',
      },
      {
        step: 4,
        title: 'Migrasi Stok Awal & Pendampingan Go-Live',
        desc: 'Stock opname awal, input saldo hutang/piutang, simulasi transaksi, dan pendampingan staf.',
        duration: 'Hari 46 - 60',
      },
    ],
    techStack: ['PostgreSQL', 'Next.js Enterprise', 'Node.js', 'Tailwind CSS', 'Redis', 'Docker'],
    faqs: [
      {
        question: 'Apakah sistem bisa menggunakan barcode scanner fisik yang sudah ada di toko kami?',
        answer: 'Bisa. Sistem kompatibel dengan seluruh barcode scanner USB atau Bluetooth standar yang beroperasi layaknya keyboard input untuk pencarian dan mutasi barang seketika.',
      },
      {
        question: 'Bagaimana akurasi perhitungan HPP saat harga beli dari supplier naik turun?',
        answer: 'Sistem kami menggunakan algoritma antrean batch FIFO atau Weighted Average otomatis. Setiap pengeluaran barang akan dikaitkan langsung dengan harga modal saat batch tersebut dibeli, memastikan angka laba bersih 100% presisi.',
      },
      {
        question: 'Apakah kasir bisa melihat modal harga beli produk?',
        answer: 'Tidak. Berkat kontrol akses berbasis peran (RBAC), kasir hanya dapat melihat harga jual, sedangkan modal HPP dan laba bersih hanya dapat dibuka oleh pemilik bisnis dan manajer keuangan.',
      },
      {
        question: 'Apakah ada batasan jumlah transaksi atau gudang cabang?',
        answer: 'Tidak ada batasan. Anda bebas membuat cabang gudang baru dan mencatat jutaan transaksi tanpa biaya tambahan per gudang.',
      },
    ],
  },
  {
    id: 'integrasi-sistem-api',
    category: 'aplikasi',
    categoryLabel: 'APLIKASI & SISTEM',
    title: 'Integrasi Sistem, Middleware & Sinkronisasi API',
    tagline: 'Menghubungkan aplikasi lama (legacy), ERP, marketplace, dan payment gateway tanpa gesekan',
    price: 'Mulai Rp 2.500.000',
    duration: '7 - 14 Hari Kerja',
    iconName: 'Cable',
    badge: 'Seamless Middleware',
    mockupType: 'analytics',
    featureSectionTitle: 'Protokol Robust Webhook, Redis Queue & Anti-Data Lost',
    featureSectionSubtitle: 'Memastikan data mengalir antar platform dengan aman, terenkripsi, dan kebal dari kegagalan jaringan berkat mekanisme retry otomatis.',
    featurePills: [
      { iconName: 'Cable', label: 'Reliable Webhook Relay' },
      { iconName: 'Cpu', label: 'BullMQ Redis Queue' },
      { iconName: 'ShieldCheck', label: 'HMAC Signature Auth' },
      { iconName: 'Server', label: 'Auto Retry Backoff' },
    ],
    standardFeatures: [
      {
        title: 'Penerima Webhook Andal dengan Verifikasi Tanda Tangan HMAC',
        desc: 'Memvalidasi keaslian payload dari pihak ketiga (Midtrans, Xendit, Tokopedia, Shopify) sebelum data diproses.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Antrean Pesan Terdistribusi dengan BullMQ & Redis',
        desc: 'Menyerap ribuan lonjakan transaksi secara bersamaan tanpa membuat database crash, diproses berurutan secara teratur.',
        iconName: 'Cpu',
      },
      {
        title: 'Mekanisme Retry Otomatis & Exponential Backoff',
        desc: 'Jika server tujuan sedang down, sistem akan mencoba mengirim kembali secara berkala hingga data sukses diterima.',
        iconName: 'Server',
      },
      {
        title: 'Transformasi & Pemetaan Skema Data Otomatis',
        desc: 'Mengonversi format JSON, XML, atau CSV dari sistem lama agar dapat dibaca oleh sistem cloud baru secara presisi.',
        iconName: 'Cable',
      },
      {
        title: 'Pencatatan Log Transaksi Terperinci & Alerting Error',
        desc: 'Penyimpanan rekaman payload request dan response untuk mempermudah audit teknis jika terjadi ketidaksesuaian data.',
        iconName: 'Target',
      },
      {
        title: 'Rate Limiting & Perlindungan Anti-Spam API',
        desc: 'Pembatasan kuota request per IP atau token API untuk melindungi server dari serangan request berlebih.',
        iconName: 'Lock',
      },
    ],
    deliverables: [
      {
        title: 'Pembangunan Middleware & Adapter API',
        items: [
          'Pengembangan server middleware perantara berbasis Node.js / Express berkinerja tinggi',
          'Pemetaan (schema mapping) data antara format API lama dan format sistem modern',
          'Verifikasi otentikasi tanda tangan kriptografi (HMAC-SHA256) pada setiap webhook masuk',
          'Transformasi data real-time dengan penanganan kasus karakter khusus dan encoding',
        ],
      },
      {
        title: 'Antrean Pesan & Pemulihan Kegagalan Jaringan',
        items: [
          'Pemasangan Redis Message Queue (BullMQ) untuk menyerap lonjakan trafik lonjakan tinggi',
          'Algoritma Exponential Backoff Retry untuk mencoba ulang pengiriman saat server tujuan sibuk',
          'Dead Letter Queue (DLQ) untuk mengamankan data transaksi yang gagal terproses tanpa hilang',
          'Panel pemantauan visual status antrean antrean dan riwayat pengiriman payload',
        ],
      },
      {
        title: 'Dokumentasi & Pengujian Beban',
        items: [
          'Spesifikasi kontrak API interaktif standar OpenAPI / Swagger',
          'Simulasi pengujian beban ribuan request serentak untuk memastikan stabilitas middleware',
          'Pengaturan notifikasi peringatan kegagalan sinkronisasi ke bot Telegram teknis',
          'Garansi pemeliharaan integrasi selama 60 hari pasca go-live',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Audit Dokumentasi API & Pemetaan Data',
        desc: 'Menganalisis format payload dari kedua sistem dan menyusun tabel transformasi data.',
        duration: 'Hari 1 - 3',
      },
      {
        step: 2,
        title: 'Coding Middleware & Worker Queue',
        desc: 'Membangun adapter API, antrean BullMQ Redis, dan mekanisme verifikasi tanda tangan HMAC.',
        duration: 'Hari 4 - 8',
      },
      {
        step: 3,
        title: 'Pengujian Skenario Kegagalan (Failure Test)',
        desc: 'Menguji ketahanan sistem saat koneksi diputus untuk membuktikan mekanisme auto-retry.',
        duration: 'Hari 9 - 11',
      },
      {
        step: 4,
        title: 'Deployment Produksi & Live Monitoring',
        desc: 'Memasang middleware di cloud server dengan monitoring alert 24/7 dan serah terima.',
        duration: 'Hari 12 - 14',
      },
    ],
    techStack: ['Node.js', 'Express', 'Redis', 'BullMQ', 'PostgreSQL', 'Docker', 'OpenAPI / Swagger'],
    faqs: [
      {
        question: 'Bagaimana jika server pihak ketiga yang kami hubungkan mendadak mati (down)?',
        answer: 'Data transaksi Anda tidak akan hilang. Antrean Redis BullMQ akan menahan pesan dalam antrean dan secara otomatis mencoba mengirim ulang (retry) dengan jeda waktu berkala hingga server tujuan kembali menyala.',
      },
      {
        question: 'Apakah middleware ini bisa menghubungkan sistem database lokal jadul seperti FoxPro / SQL Server lama?',
        answer: 'Bisa. Kami dapat membangun agen sinkronisasi ringan yang membaca data dari database lokal lama dan mengirimkannya secara aman ke sistem cloud baru melalui koneksi terenkripsi.',
      },
      {
        question: 'Bagaimana keamanan data yang lalu lalang di middleware?',
        answer: 'Seluruh payload dienkripsi dengan HTTPS TLS 1.3 dan diverifikasi menggunakan HMAC Signature serta token API terproteksi, sehingga pihak luar tidak bisa memalsukan data transaksi.',
      },
      {
        question: 'Apakah kami diberikan dokumentasi cara kerja endpoint-nya?',
        answer: 'Ya, kami menyediakan dokumentasi interaktif Swagger / Postman Collection lengkap dengan contoh payload request, response sukses, dan kode error penanganannya.',
      },
    ],
  },
  {
    id: 'dashboard-bi',
    category: 'aplikasi',
    categoryLabel: 'APLIKASI & SISTEM',
    title: 'Dashboard Business Intelligence & Telemetri Eksekutif',
    tagline: 'Visualisasi metrik KPI, tren omset, dan analisis prediktif dalam antarmuka interaktif yang mudah dipahami',
    price: 'Mulai Rp 3.000.000',
    duration: '10 - 20 Hari Kerja',
    iconName: 'LayoutDashboard',
    badge: 'Data Driven',
    mockupType: 'analytics',
    featureSectionTitle: 'Pipa Agregasi Data Realtime & Metrik Bisnis Terpercaya',
    featureSectionSubtitle: 'Mengubah data mentah yang berserak di berbagai tabel menjadi grafik tren strategis untuk pengambilan keputusan dewan direksi.',
    featurePills: [
      { iconName: 'LayoutDashboard', label: 'Real-Time KPI Feed' },
      { iconName: 'Database', label: 'Materialized Views' },
      { iconName: 'Lock', label: 'Data Masking Security' },
      { iconName: 'Clock', label: 'Auto Daily Digest' },
    ],
    standardFeatures: [
      {
        title: 'Agregasi Cepat via Materialized Views & Indexing',
        desc: 'Kueri analitik jutaan baris data dirangkum dalam hitungan milidetik tanpa memperlambat operasional database utama.',
        iconName: 'Database',
      },
      {
        title: 'Grafik Interaktif dengan Filter Tanggal & Dimensi Dinamis',
        desc: 'Eksplorasi data penjualan berdasarkan wilayah, lini produk, performa tim sales, atau rentang waktu spesifik.',
        iconName: 'LayoutDashboard',
      },
      {
        title: 'Penyembunyian Data Sensitif (Role-Based Masking)',
        desc: 'Nomor telepon pelanggan atau nominal rahasia disamarkan untuk staf tingkat bawah dan hanya tampil penuh bagi direktur.',
        iconName: 'Lock',
      },
      {
        title: 'Pengiriman Ringkasan Otomatis ke Email & Telegram',
        desc: 'Laporan pencapaian omset dan metrik kunci dikirimkan terjadwal setiap pagi pukul 08:00 langsung ke perangkat eksekutif.',
        iconName: 'Clock',
      },
      {
        title: 'Deteksi Anomali & Peringatan Ambang Batas Otomatis',
        desc: 'Sistem memberi sinyal waspada ketika terjadi lonjakan pembatalan pesanan atau penurunan performa secara drastis.',
        iconName: 'Target',
      },
      {
        title: 'Ekspor Data Sekali Klik ke Format Excel & PDF Eksekutif',
        desc: 'Menghasilkan lembar laporan bersih yang siap dipresentasikan di rapat mingguan direksi.',
        iconName: 'Sparkles',
      },
    ],
    deliverables: [
      {
        title: 'Penyusunan Data Pipeline & Kueri Analitik',
        items: [
          'Pembersihan dan normalisasi data mentah dari berbagai sumber database atau spreadsheet',
          'Pembuatan Materialized Views di PostgreSQL untuk kalkulasi KPI berkecepatan tinggi',
          'Optimasi indexing kueri agregasi agar dashboard terbuka dalam waktu kurang dari 1 detik',
          'Pencegahan dampak beban analitik terhadap performa database transaksi operasional',
        ],
      },
      {
        title: 'Antarmuka Visualisasi Interaktif',
        items: [
          'Papan ringkasan KPI eksekutif (Pendapatan Kotor, Laba Bersih, Customer Acquisition Cost, AOV)',
          'Grafik garis tren musiman, diagram batang komparasi divisi, dan peta sebaran penjualan',
          'Filter interaktif berdasarkan rentang kalender, cabang toko, dan kategori produk',
          'Tampilan responsif yang optimal dilihat dari layar iPad, laptop, maupun monitor ruang rapat',
        ],
      },
      {
        title: 'Otomasi Pengiriman Laporan & Hak Akses',
        items: [
          'Bot pengirim rekapitulasi angka penjualan otomatis ke grup Telegram direksi tiap pukul 21:00',
          'Pengaturan hak akses bertingkat agar manajer cabang hanya melihat data cabangnya sendiri',
          'Fitur ekspor laporan instan ke format Excel rapi dan PDF presentasi',
          'Pelatihan membaca metrik analitik bagi jajaran manajerial',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Identifikasi KPI Kunci Bisnis',
        desc: 'Menentukan metrik bisnis utama yang paling berdampak bagi keputusan strategis pimpinan.',
        duration: 'Hari 1 - 3',
      },
      {
        step: 2,
        title: 'Penyusunan Kueri Data & Pembersihan',
        desc: 'Merancang materialized views, kueri SQL analitik, dan otomatisasi sinkronisasi data.',
        duration: 'Hari 4 - 9',
      },
      {
        step: 3,
        title: 'Desain Antarmuka Visual Dashboard',
        desc: 'Menyusun grafik interaktif, pemfilteran dinamis, dan penyesuaian kontras visual.',
        duration: 'Hari 10 - 16',
      },
      {
        step: 4,
        title: 'Uji Validitas Angka & Peluncuran',
        desc: 'Mencocokkan angka analitik dengan laporan keuangan riil, setup cron digest, dan serah terima.',
        duration: 'Hari 17 - 20',
      },
    ],
    techStack: ['PostgreSQL', 'Metabase / Tremor', 'Next.js', 'Chart.js', 'Tailwind CSS', 'Redis Cron'],
    faqs: [
      {
        question: 'Apakah pembukaan dashboard analitik ini akan membuat database aplikasi kami lambat?',
        answer: 'Tidak. Kami menggunakan teknik Materialized Views atau Database Read-Replica terpisah, sehingga kueri perhitungan data jutaan baris tidak akan mengganggu pengguna aplikasi operasional utama Anda.',
      },
      {
        question: 'Dapatkah dashboard ini menggabungkan data dari Google Sheets dan database SQL sekaligus?',
        answer: 'Bisa. Kami membangun pipa data (ETL pipeline) yang secara terjadwal menarik data dari Google Sheets, file CSV, dan database produksi untuk disatukan dalam satu gudang data analitik.',
      },
      {
        question: 'Apakah pimpinan bisa melihat ringkasan omset tanpa membuka dashboard?',
        answer: 'Bisa. Kami menyediakan fitur pengiriman rekapitulasi otomatis ke WhatsApp atau Telegram setiap hari pada jam yang Anda tentukan.',
      },
      {
        question: 'Bisakah data grafik diunduh ke Excel untuk diolah lebih lanjut?',
        answer: 'Tentu. Setiap kartu grafik dan tabel data memiliki tombol "Ekspor ke CSV/Excel" yang mengunduh data mentah yang sudah terfilter secara instan.',
      },
    ],
  },

  // =========================================================================
  // KATEGORI: MARKETING (3 LAYANAN)
  // =========================================================================
  {
    id: 'whatsapp-ai-agent',
    category: 'marketing',
    categoryLabel: 'DIGITAL MARKETING & AI',
    title: 'WhatsApp AI Agent & Customer Care Otomatis',
    tagline: 'Asisten AI pintar 24/7 terlatih dokumen SOP, katalog produk, dan kalkulasi bisnis tanpa lelah',
    price: 'Mulai Rp 2.500.000',
    duration: '5 - 10 Hari Kerja',
    iconName: 'Bot',
    badge: 'AI Otomasi 24/7',
    overview:
      'Asisten digital berbasis Large Language Model (Gemini / Claude / OpenAI) yang disematkan langsung di nomor WhatsApp resmi bisnis Anda. Menjawab pertanyaan pelanggan secara natural, merekomendasikan produk berdasarkan dokumen SOP Anda, dan melayani konsultasi 24 jam nonstop.',
    keyBenefits: [
      'Membalas pesan konsumen dalam hitungan 2-3 detik kapan pun mereka bertanya di malam hari',
      'Jawaban selalu akurat berkat teknologi RAG yang mengunci konteks pada dokumen SOP bisnis Anda',
      'Dilengkapi pembatas ketat (guardrails) agar bot tidak menjawab di luar topik bisnis atau berhalusinasi',
      'Fitur eskalasi halus ke staf manusia jika pelanggan membutuhkan bantuan transaksi khusus',
    ],
    mockupType: 'ai',
    featureSectionTitle: 'Kecerdasan Buatan RAG Terpandu Dokumen SOP & Guardrails',
    featureSectionSubtitle: 'Asisten digital yang menjawab pelanggan dengan bahasa Indonesia natural, sopan, dan terkunci pada fakta bisnis Anda.',
    featurePills: [
      { iconName: 'Bot', label: 'RAG Knowledge Embed' },
      { iconName: 'ShieldCheck', label: 'Strict Guardrails' },
      { iconName: 'MessageSquare', label: 'Official Cloud API' },
      { iconName: 'Users', label: 'Human Agent Handoff' },
    ],
    standardFeatures: [
      {
        title: 'Basis Pengetahuan Akurat Berbasis RAG (Retrieval-Augmented Generation)',
        desc: 'Bot hanya menjawab berdasarkan dokumen PDF, SOP, dan katalog resmi Anda, menghapus risiko halusinasi atau informasi palsu.',
        iconName: 'Bot',
      },
      {
        title: 'Koneksi Jalur Resmi Meta WhatsApp Cloud API',
        desc: 'Menggunakan infrastruktur API resmi Meta yang aman dari pemblokiran nomor ponsel bisnis Anda.',
        iconName: 'MessageSquare',
      },
      {
        title: 'Sistem Pembatas Wewenang Ketat (Strict Guardrails)',
        desc: 'AI diprogram tegas menolak pertanyaan di luar ruang lingkup bisnis, isu politik, atau manipulasi prompt pengguna nakal.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Eskalasi Mulus ke Operator Manusia (Human Handoff)',
        desc: 'Pelanggan dapat meminta berbicara dengan staf manusia kapan saja, atau bot otomatis menyerahkan obrolan jika mendeteksi keluhan kritis.',
        iconName: 'Target',
      },
      {
        title: 'Penyimpanan Profil Pelanggan & Rekam Leads Otomatis',
        desc: 'Data nama, nomor kontak, dan kebutuhan produk yang ditanyakan pelanggan tersimpan rapi ke database prospek.',
        iconName: 'Database',
      },
      {
        title: 'Optimasi Penggunaan Token Model Berbiaya Hemat',
        desc: 'Arsitektur pemilihan prompt dan model yang dirancang efisien agar biaya API bulanan sangat minim.',
        iconName: 'Cpu',
      },
    ],
    deliverables: [
      {
        title: 'Pelatihan Model AI & Dokumen SOP',
        items: [
          'Vektorisasi dokumen katalog produk, daftar harga, dan dokumen SOP kebijakan perusahaan ke Vector Database',
          'Penyusunan System Prompt berkarakter ramah, profesional, solutif, dan berbahasa Indonesia santun',
          'Pemasangan guardrails anti-halusinasi dan proteksi dari serangan manipulasi prompt injection',
          'Uji coba simulasi 100+ skenario pertanyaan jebakan sebelum bot terhubung ke nomor publik',
        ],
      },
      {
        title: 'Infrastruktur WhatsApp Cloud API',
        items: [
          'Pendaftaran akun Meta Business Manager dan aktivasi WhatsApp Business Cloud API resmi',
          'Server webhook perantara berkecepatan tinggi dengan isolasi sesi percakapan per pengguna',
          'Mekanisme handover ke staf manusia seketika pelanggan mengetik kata kunci eskalasi',
          'Integrasi tombol interaktif (Quick Reply Buttons & List Messages) untuk navigasi pesan praktis',
        ],
      },
      {
        title: 'Dashboard Pemantauan & Serah Terima',
        items: [
          'Panel kontrol riwayat percakapan untuk audit kualitas respon bot secara berkala',
          'Penyimpanan otomatis nomor kontak prospek baru ke database CRM / Google Sheets',
          'Panduan cara memperbarui dokumen materi pengetahuan bot saat ada produk baru',
          'Garansi pendampingan operasional dan tuning respon AI selama 30 hari',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Pengumpulan Dokumen SOP & Persona Bot',
        desc: 'Mengumpulkan FAQ, daftar harga, aturan retur, dan menentukan gaya bahasa asisten AI.',
        duration: 'Hari 1 - 2',
      },
      {
        step: 2,
        title: 'Vektorisasi RAG & Pemasangan Guardrails',
        desc: 'Memproses teks ke embedding vektor dan mengunci batasan wewenang respon model AI.',
        duration: 'Hari 3 - 5',
      },
      {
        step: 3,
        title: 'Koneksi Meta WhatsApp Cloud API',
        desc: 'Menghubungkan webhook bot ke nomor WhatsApp bisnis resmi dan menguji latensi respon.',
        duration: 'Hari 6 - 8',
      },
      {
        step: 4,
        title: 'Uji Penetrasi Respon & Peluncuran Resmi',
        desc: 'Menguji skenario eskalasi ke staf manusia dan menyalakan bot untuk melayani publik 24/7.',
        duration: 'Hari 9 - 10',
      },
    ],
    techStack: ['Meta WhatsApp Cloud API', 'Gemini / Claude API', 'Node.js', 'PostgreSQL / Vector DB', 'Docker', 'Redis'],
    faqs: [
      {
        question: 'Apakah nomor WhatsApp kami berisiko terblokir?',
        answer: 'Tidak, karena kami menggunakan jalur resmi Meta WhatsApp Cloud API, bukan menggunakan bot WhatsApp Web ilegal (scraping/unofficial webview) yang rawan banned.',
      },
      {
        question: 'Bagaimana jika ada pelanggan yang bertanya hal di luar produk kami?',
        answer: 'Sistem guardrails yang ketat akan membuat bot secara sopan menyatakan bahwa ia hanya memiliki wewenang membantu seputar produk dan layanan bisnis Anda.',
      },
      {
        question: 'Apakah bot bisa menghitung total biaya belanja pelanggan?',
        answer: 'Bisa. Kami dapat menambahkan fungsi kalkulasi (Function Calling) agar bot dapat menghitung kuantitas dikalikan harga satuan dan memberikan rincian total belanja.',
      },
      {
        question: 'Bagaimana jika tim kami ingin mengambil alih percakapan?',
        answer: 'Staf admin Anda dapat mematikan respon bot pada chat tertentu hanya dengan mengirimkan perintah singkat, atau bot otomatis menyerahkan obrolan jika pelanggan meminta berbicara dengan agen manusia.',
      },
    ],
  },
  {
    id: 'meta-capi-ads-tracking',
    category: 'marketing',
    categoryLabel: 'DIGITAL MARKETING & AI',
    title: 'Meta Conversions API & Pelacakan Server-Side',
    tagline: 'Pelacakan sinyal iklan 100% akurat dari server ke server, kebal ad-blocker dan proteksi privasi iOS 14+',
    price: 'Mulai Rp 1.500.000',
    duration: '3 - 5 Hari Kerja',
    iconName: 'Target',
    badge: 'High EMQ Score',
    overview:
      'Solusi pelacakan sinyal iklan Meta (Facebook & Instagram Ads) tingkat lanjut via Conversions API (CAPI). Mengirimkan data pembelian langsung dari server ke server, memulihkan data hilang akibat Safari ITP dan ad-blocker, serta mendongkrak skor Event Match Quality (EMQ) hingga 8.5+.',
    keyBenefits: [
      'Memulihkan hingga 30% data transaksi yang hilang akibat pemblokir iklan di browser pengguna',
      'Mendongkrak skor Event Match Quality (EMQ) ke kategori Excellent (8.5 - 9.5)',
      'Algoritma iklan Meta mendapatkan sinyal pembeli bernilai tinggi secara utuh untuk menekan biaya CPA',
      'Deduplikasi 100% presisi antara Browser Pixel dan Server CAPI tanpa hitungan ganda',
    ],
    mockupType: 'analytics',
    featureSectionTitle: 'Akurasi Pelacakan Sinyal Iklan 100% Server-Side Gateway',
    featureSectionSubtitle: 'Memulihkan data pembelian yang hilang akibat browser pengguna, mendongkrak skor Event Match Quality (EMQ) hingga 8.5+.',
    featurePills: [
      { iconName: 'Target', label: 'EMQ Score 8.5 - 9.5' },
      { iconName: 'Server', label: 'Safari ITP Bypass' },
      { iconName: 'ShieldCheck', label: 'Event Deduplication' },
      { iconName: 'Lock', label: 'First-Party CNAME' },
    ],
    standardFeatures: [
      {
        title: 'Pengiriman Sinyal Langsung Server-to-Server Gateway',
        desc: 'Data pembelian dikirim langsung dari cloud server ke endpoint Graph API Meta tanpa terhalang ad-blocker di browser pengguna.',
        iconName: 'Server',
      },
      {
        title: 'Optimalisasi Parameter Identitas Pengguna (EMQ 8.5+)',
        desc: 'Hashing SHA-256 otomatis untuk email, nomor telepon, IP, dan User-Agent demi memaksimalkan pencocokan profil pembeli di Meta.',
        iconName: 'Target',
      },
      {
        title: 'Deduplikasi Presisi dengan Event ID Seragam',
        desc: 'Mencegah pencatatan ganda antara Browser Pixel dan Server CAPI sehingga angka konversi dan ROAS di Ads Manager tetap valid.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Bypass Pembatasan Cookie Safari ITP via First-Party CNAME',
        desc: 'Masa aktif cookie pelacakan diperpanjang secara sah hingga 180 hari menggunakan domain kustom Anda sendiri.',
        iconName: 'Lock',
      },
      {
        title: 'Dukungan Pelacakan Multi-Platform (TikTok, Google Ads & GA4)',
        desc: 'Arsitektur gateway server-side yang siap diteruskan ke platform iklan lainnya tanpa menambah beban loading website.',
        iconName: 'LayoutGrid',
      },
      {
        title: 'Audit & Monitoring Log Kegagalan Pengiriman Data',
        desc: 'Dashboard pelacakan kesehatan pengiriman payload untuk memastikan tidak ada satu pun event konversi yang terlewat.',
        iconName: 'Cpu',
      },
    ],
    deliverables: [
      {
        title: 'Arsitektur Server-Side Tracking Gateway',
        items: [
          'Setup server pelacakan cloud terisolasi (Cloudflare Workers / Stape Cloud GTM)',
          'Pemasangan domain pelacakan kustom first-party CNAME (misal: metrics.domainanda.com)',
          'Enkripsi hashing SHA-256 data pribadi pengguna (email, nomor ponsel, nama) sesuai regulasi privasi',
          'Penerusan sinyal event Purchase, AddToCart, InitiateCheckout, dan Lead langsung ke Graph API Meta',
        ],
      },
      {
        title: 'Deduplikasi Event & Pengoptimalan EMQ',
        items: [
          'Sinkronisasi Event ID unik antara browser pixel dan server gateway untuk mencegah double-count',
          'Penyusunan parameter lanjutan: client_ip_address, client_user_agent, fbp, fbc, dan external_id',
          'Pencapaian skor Event Match Quality di angka 8.5 hingga 9.5 di dashboard Meta Events Manager',
          'Pengujian simulasi konversi di Test Events Ads Manager hingga seluruh sinyal berstatus Hijau',
        ],
      },
      {
        title: 'Monitoring & Dokumentasi Teknis',
        items: [
          'Konfigurasi dashboard peringatan jika terjadi penurunan sinyal API Meta',
          'Dokumentasi konfigurasi endpoint dan token akses jangka panjang (System User Token)',
          'Sesi konsultasi evaluasi kinerja pelacakan kampanye setelah 7 hari penayangan iklan',
          'Garansi pemeliharaan pelacakan selama 30 hari',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Audit Pixel & Meta Events Manager',
        desc: 'Memeriksa skor EMQ berjalan, rasio deduplikasi, dan mendiagnosis event yang hilang.',
        duration: 'Hari 1',
      },
      {
        step: 2,
        title: 'Deploy Server Gateway & Hashing Data',
        desc: 'Mengkonfigurasi server-side container, domain CNAME first-party, dan enkripsi SHA-256.',
        duration: 'Hari 2 - 3',
      },
      {
        step: 3,
        title: 'Sinkronisasi Deduplikasi & Test Event',
        desc: 'Mengirim transaksi uji coba dan memverifikasi deduplikasi 100% di Test Events Tool Meta.',
        duration: 'Hari 4',
      },
      {
        step: 4,
        title: 'Validasi Skor EMQ & Penyerahan',
        desc: 'Memastikan skor kualitas pencocokan mencapai status Good/Great (8.5+) di Ads Manager.',
        duration: 'Hari 5',
      },
    ],
    techStack: ['Meta Conversions API (Graph API v20.0)', 'Cloudflare Workers', 'Google Tag Manager Server-Side', 'Next.js', 'SHA-256'],
    faqs: [
      {
        question: 'Kenapa kita membutuhkan Meta CAPI jika sudah memasang Meta Pixel biasa?',
        answer: 'Pixel biasa berjalan di browser pengguna dan sering kali diblokir oleh ad-blocker, Safari ITP, dan kebijakan privasi iOS. Akibatnya 20-30% data transaksi hilang. CAPI mengirim data langsung dari server Anda ke server Meta, menjamin data 100% sampai.',
      },
      {
        question: 'Apa dampak skor Event Match Quality (EMQ) tinggi bagi iklan saya?',
        answer: 'Semakin tinggi skor EMQ (8.5+), semakin mudah Meta mencocokkan profil orang yang membeli di website Anda dengan akun Instagram/Facebook mereka. Ini membuat algoritma Meta lebih pintar mencari calon pembeli serupa (Lookalike) dan menekan biaya iklan Anda.',
      },
      {
        question: 'Apakah server gateway ini membebani kecepatan loading website saya?',
        answer: 'Tidak sama sekali. Proses server-side berjalan di background secara asinkron di cloud server edge, justru meringankan beban browser pengunjung karena script pihak ketiga di browser dikurangi.',
      },
      {
        question: 'Apakah data pembeli aman dari kebocoran privasi?',
        answer: 'Sangat aman. Seluruh data pribadi seperti email dan nomor telepon dienkripsi satu arah dengan algoritma SHA-256 sebelum dikirimkan ke Meta, mematuhi standar privasi internasional.',
      },
    ],
  },
  {
    id: 'jasa-seo-performa-web',
    category: 'marketing',
    categoryLabel: 'DIGITAL MARKETING & AI',
    title: 'Audit SEO Teknis, Schema Data & Core Web Vitals',
    tagline: 'Mendominasi pencarian Google dengan fondasi arsitektur website yang disukai crawler mesin pencari',
    price: 'Mulai Rp 1.200.000',
    duration: '5 - 10 Hari Kerja',
    iconName: 'Search',
    badge: 'Top Search Rank',
    mockupType: 'website',
    featureSectionTitle: 'Fondasi SEO Teknis, Core Web Vitals & Otomasi Indeks',
    featureSectionSubtitle: 'Memperbaiki akar masalah teknis yang membuat website Anda gagal terindeks atau kalah bersaing di hasil pencarian Google.',
    featurePills: [
      { iconName: 'Gauge', label: 'Core Web Vitals 95+' },
      { iconName: 'Search', label: 'Rich Snippets JSON-LD' },
      { iconName: 'Layers', label: 'Silo Architecture' },
      { iconName: 'Globe', label: 'Instant Indexing Ping' },
    ],
    standardFeatures: [
      {
        title: 'Perbaikan Komprehensif Google Core Web Vitals',
        desc: 'Mengeliminasi Layout Shift (CLS), mempercepat Largest Contentful Paint (LCP < 0.8s), dan meminimalkan Interaction to Next Paint (INP).',
        iconName: 'Gauge',
      },
      {
        title: 'Implementasi Data Terstruktur Schema JSON-LD Lengkap',
        desc: 'Menyematkan schema FAQPage, Article, LocalBusiness, BreadcrumbList, dan Product agar cuplikan web tampil menonjol dengan bintang ulasan di Google.',
        iconName: 'Search',
      },
      {
        title: 'Restrukturisasi Arsitektur Silo Konten & Internal Linking',
        desc: 'Menyusun alur link internal yang mengalirkan otoritas halaman (link juice) ke halaman layanan utama bisnis Anda.',
        iconName: 'Layers',
      },
      {
        title: 'Pembersihan Isu Indexability & Google Search Console',
        desc: 'Memperbaiki status "Discovered - currently not indexed", mengoptimalkan robots.txt, dan mengirimkan XML sitemap berkinerja tinggi.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Optimasi Penghematan Anggaran Perayapan (Crawl Budget)',
        desc: 'Menghilangkan redirect loop, rantai 301, dan tautan rusak 404 agar crawler Google memprioritaskan halaman krusial bisnis Anda.',
        iconName: 'Server',
      },
      {
        title: 'Penyusunan Strategi Metadata & Canonical Tag Presisi',
        desc: 'Mencegah kanibalisasi kata kunci dan konten duplikat dengan pengaturan canonical tag yang sesuai standar mesin pencari.',
        iconName: 'LayoutGrid',
      },
    ],
    deliverables: [
      {
        title: 'Audit Menyeluruh & Perbaikan Teknis',
        items: [
          'Pemeriksaan 100+ faktor teknis Googlebot (kecepatan, rendering JavaScript, mobile-friendliness)',
          'Pembersihan error HTTP 404 dan perbaikan redirect loop 301',
          'Penyusunan ulang file robots.txt dan dynamic XML sitemap berbasis prioritas pembaruan',
          'Penanganan status canonical tag untuk menghapus risiko duplikasi konten',
        ],
      },
      {
        title: 'Data Terstruktur & Rich Snippets',
        items: [
          'Injeksi kode Schema.org JSON-LD (Organization, WebSite, Service, FAQPage, BreadcrumbList)',
          'Validasi schema data melalui Google Rich Results Test hingga 100% lolos tanpa peringatan',
          'Optimasi tag meta OpenGraph dan Twitter Card untuk preview visual menarik di media sosial',
          'Penyusunan struktur navigasi remah roti (breadcrumbs) yang ramah mesin pencari',
        ],
      },
      {
        title: 'Inspeksi Google Search Console & Laporan',
        items: [
          'Audit menyeluruh status indeks di Google Search Console dan permintaan perayapan ulang halaman prioritas',
          'Laporan skor sebelum vs sesudah optimasi Google PageSpeed Insights (Mobile & Desktop)',
          'Daftar rekomendasi topik kata kunci potensial bernilai konversi tinggi',
          'Garansi pendampingan indeksasi selama 30 hari',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Audit Teknis Menyeluruh & Diagnosa GSC',
        desc: 'Membedah laporan cakupan indeksasi di Google Search Console dan menganalisis Core Web Vitals.',
        duration: 'Hari 1 - 2',
      },
      {
        step: 2,
        title: 'Perbaikan Kode & Optimasi Core Web Vitals',
        desc: 'Menghilangkan blocking resource, mengompresi gambar, dan memperbaiki pergeseran tata letak (CLS).',
        duration: 'Hari 3 - 5',
      },
      {
        step: 3,
        title: 'Pemasangan Schema JSON-LD & Internal Linking',
        desc: 'Menyematkan data terstruktur kaya fitur dan merapikan rantai link internal antar halaman.',
        duration: 'Hari 6 - 8',
      },
      {
        step: 4,
        title: 'Validasi Rich Results & Permintaan Re-Index',
        desc: 'Menguji keabsahan schema di Rich Results Test dan mengirimkan ping pembaruan ke Googlebot.',
        duration: 'Hari 9 - 10',
      },
    ],
    techStack: ['Google Search Console', 'Lighthouse CLI', 'Schema.org JSON-LD', 'Ahrefs Metrics', 'Next.js SEO Engine'],
    faqs: [
      {
        question: 'Mengapa halaman website saya tertulis "Discovered - currently not indexed" di Google Search Console?',
        answer: 'Status ini menandakan Google sudah mengetahui keberadaan URL Anda, namun menunda perayapan karena kualitas teknis halaman, kecepatan muat yang rendah, atau anggaran perayapan (crawl budget) situs yang terbuang. Layanan ini secara spesifik mengatasi akar masalah teknis tersebut.',
      },
      {
        question: 'Berapa lama waktu yang dibutuhkan hingga halaman saya muncul di hasil pencarian Google?',
        answer: 'Setelah perbaikan teknis dan permintaan indeks ulang dikirimkan, Googlebot biasanya merayapi ulang dalam 3 hingga 14 hari kerja, dan peringkat halaman akan berangsur naik seiring naiknya skor kepuasan pengunjung.',
      },
      {
        question: 'Apa itu Schema JSON-LD dan apa gunanya untuk bisnis saya?',
        answer: 'Schema JSON-LD adalah bahasa kode yang memberitahu robot Google tentang identitas bisnis, harga layanan, dan FAQ Anda secara gamblang. Ini memungkinkan Google menampilkan hasil pencarian kaya fitur (Rich Snippets) lengkap dengan accordion FAQ dan bintang ulasan yang menarik klik pengguna.',
      },
      {
        question: 'Apakah optimasi ini aman dari penalti algoritma Google?',
        answer: 'Sangat aman 100%. Kami hanya menerapkan teknik White-Hat Technical SEO yang sepenuhnya patuh terhadap panduan resmi Google Search Central.',
      },
    ],
  },

  // =========================================================================
  // KATEGORI: INFRASTRUKTUR (2 LAYANAN)
  // =========================================================================
  {
    id: 'setup-cloud-vps-hardening',
    category: 'infrastruktur',
    categoryLabel: 'INFRASTRUKTUR & CLOUD',
    title: 'Setup Cloud VPS, Linux Hardening & Reverse Proxy',
    tagline: 'Infrastruktur cloud server Linux berdaya tahan tinggi, kebal serangan brute-force, dan berstandar keamanan industri',
    price: 'Mulai Rp 1.500.000',
    duration: '2 - 4 Hari Kerja',
    iconName: 'Server',
    badge: 'Hardened Security',
    overview:
      'Konfigurasi server cloud Linux (Ubuntu Server / Debian) berstandar industri dengan pengerasan keamanan ketat (Hardening). Mengamankan server dari serangan peretas otomatis, menerapkan isolasi kontainer Docker, setup reverse proxy Nginx/Caddy berkecepatan tinggi, dan automasi pencadangan data terenkripsi.',
    keyBenefits: [
      'Menutup celah penyusup dengan menutup akses password dan mewajibkan kunci kriptografi SSH Ed25519',
      'Pemasangan firewall UFW ketat dan sistem pertahanan anti-brute force Fail2ban aktif',
      'Reverse proxy Nginx/Caddy modern dengan terminasi SSL otomatis berperingkat A+ SSL Labs',
      'Automasi pencadangan (backup) basis data harian terenkripsi ke penyimpanan cloud terpisah (Off-site S3)',
    ],
    mockupType: 'terminal',
    featureSectionTitle: 'Hardening Server Linux Standar CIS Benchmark & Non-Root',
    featureSectionSubtitle: 'Konfigurasi server produksi yang aman dari peretas, cepat, dan siap menampung lonjakan traffic tanpa downtime.',
    featurePills: [
      { iconName: 'Lock', label: 'SSH Ed25519 Key-Only' },
      { iconName: 'ShieldCheck', label: 'UFW Firewall Strict' },
      { iconName: 'Server', label: 'Fail2ban Defense' },
      { iconName: 'Database', label: 'Encrypted Off-Site Backup' },
    ],
    standardFeatures: [
      {
        title: 'Penguncian Akses SSH Ed25519 & Disable Root Login',
        desc: 'Menutup otentikasi password dan memblokir login langsung user root; akses hanya diizinkan via kunci kriptografi privat modern.',
        iconName: 'Lock',
      },
      {
        title: 'Konfigurasi Firewall Ketat (UFW / Iptables)',
        desc: 'Menolak seluruh port yang tidak digunakan secara default, hanya membuka port 80 (HTTP), 443 (HTTPS), dan port SSH kustom yang diamankan.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Pemasangan Sistem Pencegahan Intrusi Fail2ban',
        desc: 'Mendeteksi upaya login paksa (brute-force) secara otomatis dan memblokir alamat IP penyerang pada level kernel server.',
        iconName: 'Server',
      },
      {
        title: 'Reverse Proxy Nginx / Caddy Berperforma Tinggi',
        desc: 'Penanganan terminasi SSL otomatis berperingkat SSL Labs A+, kompresi data Brotli/Gzip, dan buffering koneksi yang efisien.',
        iconName: 'Cpu',
      },
      {
        title: 'Isolasi Lingkungan Aplikasi Menggunakan Docker',
        desc: 'Aplikasi dan database berjalan di dalam kontainer terisolasi sehingga kegagalan satu modul tidak mempengaruhi sistem lainnya.',
        iconName: 'Boxes',
      },
      {
        title: 'Otomasi Backup Terenkripsi Harian ke Penyimpanan Cloud S3 Terpisah',
        desc: 'Pencadangan basis data dan file konfigurasi secara otomatis yang disimpan di lokasi off-site berbeda untuk pemulihan bencana instan.',
        iconName: 'Database',
      },
    ],
    deliverables: [
      {
        title: 'Pengerasan Keamanan Dasar Linux (OS Hardening)',
        items: [
          'Pembuatan akun pengguna non-root dengan hak sudo terbatas',
          'Pemblokiran total login root SSH dan penonaktifan otentikasi kata sandi (PasswordAuthentication no)',
          'Penerapan autentikasi kunci publik-privat Ed25519 dengan passphrase aman',
          'Pengubahan port default SSH dan setup perlindungan anti-bruteforce Fail2ban',
        ],
      },
      {
        title: 'Firewall, Reverse Proxy & Kontainerisasi',
        items: [
          'Konfigurasi Uncomplicated Firewall (UFW) dengan kebijakan default DENY incoming',
          'Pemasangan reverse proxy Nginx / Caddy dengan kompresi Brotli/Gzip dan HTTP/2 / HTTP/3',
          'Pemasangan sertifikat SSL Let\'s Encrypt dengan perpanjangan otomatis tanpa henti',
          'Setup Docker Engine dan Docker Compose untuk isolasi aplikasi dan database produksi',
        ],
      },
      {
        title: 'Pencadangan Data & Pemantauan Server',
        items: [
          'Skrip pencadangan otomatis harian database (pg_dump / mysqldump) terenkripsi AES-256',
          'Sinkronisasi otomatis hasil backup ke bucket penyimpanan cloud off-site terpisah (AWS S3 / R2)',
          'Pemasangan pemantauan penggunaan CPU, RAM, dan kapasitas disk dengan alert ke Telegram',
          'Dokumentasi lembar kredensial aman dan prosedur pemulihan bencana (Disaster Recovery SOP)',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Penyediaan Cloud VPS & Kunci SSH',
        desc: 'Memilih spesifikasi VPS (DigitalOcean / Linode / AWS / Hetzner) dan menerbitkan pasangan kunci Ed25519.',
        duration: 'Hari 1',
      },
      {
        step: 2,
        title: 'Linux Hardening & Firewall UFW',
        desc: 'Menutup login root, memasang Fail2ban, mengunci port server, dan memperbarui paket keamanan sistem.',
        duration: 'Hari 2',
      },
      {
        step: 3,
        title: 'Setup Reverse Proxy & Docker Stack',
        desc: 'Mengkonfigurasi Nginx SSL otomatis, Docker runtime, dan jaringan kontainer aplikasi terisolasi.',
        duration: 'Hari 3',
      },
      {
        step: 4,
        title: 'Uji Penetrasi, Backup S3 & Serah Terima',
        desc: 'Uji simulasi brute force, pengujian restore database dari backup S3, dan serah terima dokumen SOP.',
        duration: 'Hari 4',
      },
    ],
    techStack: ['Ubuntu Server 24.04 LTS', 'Docker & Docker Compose', 'Nginx / Caddy', 'UFW Firewall', 'Fail2ban', 'AWS S3 Backup'],
    faqs: [
      {
        question: 'Penyedia cloud VPS apa yang direkomendasikan?',
        answer: 'Kami merekomendasikan penyedia ternama seperti DigitalOcean, Linode/Akamai, Hetzner, atau AWS Lightsail untuk performa komputasi stabil dengan biaya bulanan transparan.',
      },
      {
        question: 'Apakah server saya aman jika password saya ditebak orang lain?',
        answer: 'Sangat aman, karena kami mematikan login berbasis password sepenuhnya. Tidak ada seorang pun yang bisa login tanpa memiliki file Kunci Privat Kriptografi (Ed25519) yang hanya tersimpan di komputer Anda.',
      },
      {
        question: 'Bagaimana jika server rusak mendadak atau terjadi kegagalan hardware cloud?',
        answer: 'Berkat sistem automasi pencadangan off-site ke S3 terpisah yang kami bangun, seluruh data dan file konfigurasi dapat dipulihkan ke server baru dalam hitungan menit tanpa kehilangan data penting.',
      },
      {
        question: 'Apakah saya mendapatkan akses root penuh ke server?',
        answer: 'Tentu saja. Seluruh akses server diserahkan seutuhnya kepada Anda, lengkap dengan dokumen SOP cara mengakses server secara aman.',
      },
    ],
  },
  {
    id: 'otomasi-workflow-n8n',
    category: 'infrastruktur',
    categoryLabel: 'INFRASTRUKTUR & CLOUD',
    title: 'Otomasi Alur Kerja Bisnis n8n Self-Hosted',
    tagline: 'Otomasi proses kerja lintas aplikasi tanpa biaya bulanan mahal ala Zapier, berjalan aman di server Anda sendiri',
    price: 'Mulai Rp 2.000.000',
    duration: '4 - 7 Hari Kerja',
    iconName: 'Workflow',
    badge: 'Zero Monthly Sub',
    mockupType: 'analytics',
    featureSectionTitle: 'Otomasi Antar-Sistem Tanpa Biaya Berlangganan Zapier',
    featureSectionSubtitle: 'Menghubungkan ratusan aplikasi seperti Google Sheets, WhatsApp, CRM, dan sistem pembayaran dalam satu alur kerja otomatis tanpa batas eksekusi.',
    featurePills: [
      { iconName: 'Workflow', label: 'Unlimited Runs Self-Host' },
      { iconName: 'Cable', label: 'Multi-App Connectors' },
      { iconName: 'Lock', label: 'On-Premise Privacy' },
      { iconName: 'Zap', label: 'Real-Time Triggers' },
    ],
    standardFeatures: [
      {
        title: 'Eksekusi Alur Kerja Tanpa Batas (Unlimited Workflow Runs)',
        desc: 'Tidak ada batasan kuota kuota bulanan seperti Zapier/Make; Anda bebas menjalankan jutaan alur data tanpa biaya tambahan.',
        iconName: 'Workflow',
      },
      {
        title: 'Integrasi Data Lintas Aplikasi Bisnis Populer',
        desc: 'Sinkronisasi instan antara Google Forms, WhatsApp Gateway, Trello, Google Sheets, email, dan database internal.',
        iconName: 'Cable',
      },
      {
        title: 'Kerahasiaan Data Penuh di Server Sendiri',
        desc: 'Seluruh data transaksi dan informasi pelanggan diproses di server internal Anda tanpa pernah bocor ke platform cloud publik.',
        iconName: 'Lock',
      },
      {
        title: 'Penanganan Error Logika & Notifikasi Peringatan Instan',
        desc: 'Jika terjadi kegagalan input data dari pihak ketiga, sistem langsung mengirim pesan peringatan ke grup Telegram/Discord teknis Anda.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Transformasi Data Kompleks dengan Custom JavaScript / Python',
        desc: 'Dukungan eksekusi skrip kustom untuk memfilter, menjumlahkan, atau membersihkan data sebelum dimasukkan ke sistem utama.',
        iconName: 'Code2',
      },
      {
        title: 'Penjadwalan Otomasi Berkala (Cron Triggers)',
        desc: 'Pemicu otomatis untuk rekap data penjualan harian, sinkronisasi stok tiap tengah malam, dan pengingat tagihan pelanggan.',
        iconName: 'Clock',
      },
    ],
    deliverables: [
      {
        title: 'Setup Server n8n Mandiri & Keamanan',
        items: [
          'Pemasangan n8n versi produksi stabil menggunakan Docker container di server cloud privat Anda',
          'Konfigurasi basis data PostgreSQL terdedikasi untuk penyimpanan riwayat eksekusi alur kerja',
          'Pemasangan domain kustom terenkripsi SSL HTTPS otomatis (misal: automation.perusahaan.com)',
          'Setup sistem autentikasi pengguna berlapis dan manajemen kredensial API terenkripsi',
        ],
      },
      {
        title: 'Pembuatan Skenario Alur Kerja Otomatis',
        items: [
          'Pembangunan hingga 5 alur kerja otomatis kompleks sesuai kebutuhan alur bisnis perusahaan Anda',
          'Integrasi webhook pemicu realtime dari website, formulir pemesanan, atau payment gateway',
          'Otomasi pengiriman notifikasi terformat ke grup WhatsApp tim sales atau grup Telegram manajer',
          'Mekanisme penanganan error (Error Trigger Workflow) yang otomatis memberi tahu admin jika terjadi kendala',
        ],
      },
      {
        title: 'Dokumentasi & Pelatihan Tim',
        items: [
          'Ekspor file cadangan skenario alur kerja format JSON yang dapat diimpor kapan saja',
          'Panduan video cara memodifikasi atau menambah node alur kerja baru secara visual tanpa coding',
          'Setup backup basis data otomatis n8n harian ke cloud storage terpisah',
          'Garansi pendampingan operasional dan penyempurnaan alur kerja selama 30 hari',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Pemetaan Alur Kerja Manual Bisnis',
        desc: 'Mencatat seluruh proses manual yang membuang waktu staf dan merumuskan skenario otomasi.',
        duration: 'Hari 1 - 2',
      },
      {
        step: 2,
        title: 'Deploy Server n8n & Database PostgreSQL',
        desc: 'Memasang n8n di cloud VPS privat dengan domain SSL dan keamanan credential vault.',
        duration: 'Hari 3 - 4',
      },
      {
        step: 3,
        title: 'Perakitan & Pengujian Skenario Workflow',
        desc: 'Menghubungkan node aplikasi, membuat skrip pembersih data, dan menguji eksekusi webhook.',
        duration: 'Hari 5 - 6',
      },
      {
        step: 4,
        title: 'Uji Kehandalan & Pelatihan Admin',
        desc: 'Simulasi alur transaksi massal, pelatihan tim internal, dan serah terima akses penuh.',
        duration: 'Hari 7',
      },
    ],
    techStack: ['n8n Engine', 'Docker & Docker Compose', 'PostgreSQL', 'Node.js', 'Webhook APIs', 'Telegram Bot API'],
    faqs: [
      {
        question: 'Kenapa lebih menguntungkan menggunakan n8n self-hosted dibanding Zapier atau Make?',
        answer: 'Pada Zapier/Make, Anda dikenakan biaya berlangganan bulanan yang melambung jutaan rupiah jika eksekusi tugas (tasks) Anda meningkat. Dengan n8n self-hosted, Anda memiliki server sendiri tanpa biaya per-task, bebas menjalankan jutaan alur data tanpa batasan.',
      },
      {
        question: 'Aplikasi apa saja yang dapat dihubungkan oleh n8n?',
        answer: 'Lebih dari 400+ aplikasi bisnis populer (Google Workspace, WhatsApp, Slack, Trello, Shopify, Notion, PostgreSQL, MySQL, Meta Ads) serta aplikasi kustom apapun yang memiliki webhook atau REST API.',
      },
      {
        question: 'Apakah data pelanggan saya aman saat diproses di n8n?',
        answer: 'Sangat aman, karena seluruh data diproses di dalam server privat Anda sendiri. Tidak ada data pelanggan yang singgah atau disimpan di server perusahaan pihak ketiga.',
      },
      {
        question: 'Apakah tim saya yang bukan programmer bisa memodifikasi alur kerja nantinya?',
        answer: 'Bisa. Antarmuka n8n berbasis kanvas visual drag-and-drop yang sangat intuitif. Kami juga memberikan video panduan cara mengubah pesan atau menambah langkah baru.',
      },
    ],
  },
];
