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
  standardFeatures: StandardFeature[];
  deliverables: DeliverableSection[];
  workflow: WorkflowStage[];
  techStack: string[];
  faqs: ServiceFAQ[];
}

export const ALL_SERVICES_CATALOG: SubServiceItem[] = [
  // =========================================================================
  // KATEGORI: WEBSITE
  // =========================================================================
  {
    id: 'jasa-pembuatan-website',
    category: 'website',
    categoryLabel: 'WEBSITE',
    title: 'Jasa Pembuatan Website',
    tagline: 'Website yang mudah dikelola tim Anda dan dirancang untuk mendatangkan pelanggan',
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
    standardFeatures: [
      {
        title: 'Kecepatan yang diukur',
        desc: 'Kami menguji kecepatan dengan standar Core Web Vitals di ponsel sebelum website tayang.',
        iconName: 'Gauge',
      },
      {
        title: 'SEO teknis sejak awal',
        desc: 'Struktur heading, meta, sitemap, data terstruktur schema JSON-LD, dan URL yang rapi dipasang sejak pembangunan.',
        iconName: 'Search',
      },
      {
        title: 'Siap multi bahasa',
        desc: 'Mendukung bahasa Indonesia dan Inggris dengan struktur URL yang benar untuk mesin pencari.',
        iconName: 'Languages',
      },
      {
        title: 'CMS yang mudah dipakai',
        desc: 'Tim Anda bisa memperbarui halaman, artikel, dan gambar tanpa perlu menyentuh kode sama sekali.',
        iconName: 'LayoutGrid',
      },
      {
        title: 'Keamanan dan backup',
        desc: 'Sertifikat SSL otomatis, proteksi brute-force, dan backup database berkala terjadwal.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Tracking konversi',
        desc: 'Setiap klik WhatsApp dan pengisian formulir tercatat rapi di Google Analytics & Meta Pixel.',
        iconName: 'Target',
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
          'Akses repository Git dengan dokumentasi panduan edit konten',
          'Garansi pemeliharaan teknis 30 hari pasca go-live',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Konsultasi & Wireframe',
        desc: 'Memetakan tujuan bisnis, struktur menu, dan alur konversi pengunjung.',
        duration: 'Hari ke-1',
      },
      {
        step: 2,
        title: 'Desain & Pengembangan',
        desc: 'Penyusunan kode frontend dengan standar Tailwind CSS dan performa kilat.',
        duration: 'Hari ke-2',
      },
      {
        step: 3,
        title: 'Audit Kecepatan & SEO',
        desc: 'Pengujian performa Lighthouse skor 95+ dan validasi Google Rich Snippets.',
        duration: 'Hari ke-3',
      },
      {
        step: 4,
        title: 'Peluncuran & Pelatihan',
        desc: 'Hubungkan domain resmi, uji form WhatsApp, dan serah terima source code.',
        duration: 'Hari ke-4',
      },
    ],
    techStack: ['Next.js / React', 'Tailwind CSS', 'Vercel Edge', 'Cloudflare', 'TypeScript'],
    faqs: [
      {
        question: 'Apakah ada biaya langganan bulanan setelah website jadi?',
        answer:
          'Tidak ada biaya bulanan dari kami. Website di-deploy di infrastruktur modern dengan hosting gratis andal (seperti Vercel). Klien hanya perlu memperpanjang nama domain tahunan (~Rp 150rb - Rp 250rb/tahun) ke registrar.',
      },
      {
        question: 'Apakah saya mendapatkan seluruh file coding website?',
        answer:
          'Ya, 100% source code diserahkan penuh melalui GitHub. Anda memiliki hak cipta penuh atas sistem tanpa keterikatan vendor lock-in.',
      },
      {
        question: 'Berapa lama waktu yang dibutuhkan hingga website siap tayang?',
        answer:
          'Untuk paket kilat selesai dalam 24–48 jam. Untuk website bisnis lengkap rata-rata selesai dalam 3–4 hari kerja setelah materi konten disiapkan.',
      },
    ],
  },
  {
    id: 'jasa-pembuatan-website-custom',
    category: 'website',
    categoryLabel: 'WEBSITE',
    title: 'Jasa Pembuatan Website Custom',
    tagline: 'Portal dan website dengan fitur khusus di luar batasan template standar',
    price: 'Mulai Rp 2.500.000',
    duration: '5 - 10 Hari Kerja',
    iconName: 'Code2',
    badge: 'Tailored Solution',
    overview:
      'Layanan rekayasa website custom untuk bisnis dengan alur kerja spesifik: sistem kalkulator biaya otomatis, formulir berjenjang (multi-step), filter katalog dinamis, hingga integrasi backend database relasional.',
    keyBenefits: [
      'Arsitektur koding dari nol sesuai logika dan alur operasional bisnis Anda',
      'Kalkulator harga dan simulasi interaktif langsung menghasilkan penawaran',
      'Filter pencarian instan berbasis parameter kategori, tag, dan harga',
      'Koneksi mulus ke database PostgreSQL / Supabase untuk manajemen data dinamis',
    ],
    standardFeatures: [
      {
        title: 'Kecepatan yang diukur',
        desc: 'SSR dan static generation hibrida memastikan performa halaman instan di bawah 1 detik.',
        iconName: 'Gauge',
      },
      {
        title: 'SEO teknis sejak awal',
        desc: 'Routing dinamis dengan canonical URL dan metadata otomatis per halaman produk/layanan.',
        iconName: 'Search',
      },
      {
        title: 'Siap multi bahasa',
        desc: 'Dukungan translasi dinamis berbasis kamus lokal tanpa library berat.',
        iconName: 'Languages',
      },
      {
        title: 'CMS yang mudah dipakai',
        desc: 'Dashboard internal khusus untuk menambah katalog tanpa menyentuh struktur kode.',
        iconName: 'LayoutGrid',
      },
      {
        title: 'Keamanan dan backup',
        desc: 'Validasi input ketat (anti-SQLi / XSS) dengan enkripsi data SSL kelas enterprise.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Tracking konversi',
        desc: 'Pelacakan alur interaksi pengguna (user journey) hingga pengiriman formulir.',
        iconName: 'Target',
      },
    ],
    deliverables: [
      {
        title: 'Fitur Khusus (Custom Logic)',
        items: [
          'Logika kalkulator simulasi harga interaktif real-time',
          'Formulir pendaftaran multi-tahap dengan validasi regex otomatis',
          'Fitur pencarian instan debounce tanpa reload halaman',
          'Integrasi webhook pengiriman notifikasi ke Telegram / WhatsApp admin',
        ],
      },
      {
        title: 'Basis Data & Admin Dashboard',
        items: [
          'Setup basis data PostgreSQL dengan Row Level Security',
          'Panel admin terproteksi login untuk mengelola konten dan data masuk',
          'Fitur ekspor data formulir ke format CSV dan Excel',
        ],
      },
      {
        title: 'Dokumentasi & Dukungan',
        items: [
          'Diagram alur arsitektur dan dokumentasi API endpoint',
          'Sesi panduan video pengelolaan sistem untuk staf perusahaan',
          'Garansi perbaikan bug gratis selama 60 hari',
        ],
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'Analisis Kebutuhan Sistem',
        desc: 'Membedah spesifikasi logika, skema data, dan formula kalkulasi.',
        duration: 'Hari 1-2',
      },
      {
        step: 2,
        title: 'Pembangunan Komponen & API',
        desc: 'Koding UI responsif dan implementasi fungsionalitas interaktif.',
        duration: 'Hari 3-6',
      },
      {
        step: 3,
        title: 'Integrasi Database & Security',
        desc: 'Penyambungan database, hardening API, dan uji coba skenario ekstrem.',
        duration: 'Hari 7-8',
      },
      {
        step: 4,
        title: 'User Acceptance Test (UAT)',
        desc: 'Verifikasi bersama klien, peluncuran resmi, dan serah terima dokumen.',
        duration: 'Hari 9-10',
      },
    ],
    techStack: ['React', 'Next.js', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'TypeScript'],
    faqs: [
      {
        question: 'Apakah bisa menambahkan fitur pembayaran online?',
        answer:
          'Bisa. Kami dapat mengintegrasikan payment gateway resmi seperti Midtrans, Xendit, atau Duitku untuk pembayaran via QRIS, Virtual Account bank, dan e-wallet otomatis.',
      },
      {
        question: 'Apakah sistem bisa diperluas di masa depan?',
        answer:
          'Sangat bisa. Arsitektur modular TypeScript dan basis data relasional kami dirancang fleksibel sehingga penambahan modul baru di kemudian hari tidak merusak sistem lama.',
      },
    ],
  },
  {
    id: 'website-korporat',
    category: 'website',
    categoryLabel: 'WEBSITE',
    title: 'Website Korporat',
    tagline: 'Profil bisnis kredibel dua bahasa yang bisa diperbarui tim internal Anda sendiri',
    price: 'Mulai Rp 1.800.000',
    duration: '4 - 7 Hari Kerja',
    iconName: 'Building2',
    badge: 'Profil Enterprise',
    overview:
      'Membangun citra kredibel perusahaan di hadapan investor, klien B2B, dan mitra strategis dengan website profil korporat berstandar internasional, dukungan multi-bahasa, serta halaman struktur organisasi dan laporan tata kelola.',
    keyBenefits: [
      'Penyajian profil perusahaan yang meyakinkan untuk tender B2B dan verifikasi rekanan',
      'Dukungan dwibahasa (Bahasa Indonesia & English) dengan navigasi intuitif',
      'Struktur tata letak elegan dengan ruang pamer legalitas, penghargaan, dan portofolio proyek',
      'Alur kontak resmi langsung ke email per divisi (Marketing, HR, Procurement)',
    ],
    standardFeatures: [
      {
        title: 'Kecepatan yang diukur',
        desc: 'Optimasi performa tinggi untuk kenyamanan akses mitra korporat global.',
        iconName: 'Gauge',
      },
      {
        title: 'SEO teknis sejak awal',
        desc: 'Schema Organization JSON-LD lengkap dengan verifikasi Google Knowledge Panel.',
        iconName: 'Search',
      },
      {
        title: 'Siap multi bahasa',
        desc: 'Struktur i18n native dengan URL terpisah (/id dan /en) yang disukai Google.',
        iconName: 'Languages',
      },
      {
        title: 'CMS yang mudah dipakai',
        desc: 'Memudahkan staf sekretariat memperbarui siaran pers dan lowongan kerja.',
        iconName: 'LayoutGrid',
      },
      {
        title: 'Keamanan dan backup',
        desc: 'Isolasi server anti-deface dan perlindungan proteksi DDoS Cloudflare terintegrasi.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Tracking konversi',
        desc: 'Pelacakan unduhan Company Profile PDF dan pengiriman pesan inquiry kemitraan.',
        iconName: 'Target',
      },
    ],
    deliverables: [
      {
        title: 'Struktur Halaman Korporat',
        items: [
          'Profil Perusahaan, Visi Misi, Sejarah & Milestone Bisnis',
          'Direksi & Manajemen Eksekutif dengan foto profesional terstandar',
          'Layanan & Solusi Bisnis dengan studi kasus mitra',
          'Hubungan Investor / Tata Kelola (GCG) & Unduhan Laporan Tahunan',
          'Karir & Lowongan Kerja dengan formulir lamaran online',
        ],
      },
      {
        title: 'Kredensial & Legalitas',
        items: [
          'Bagian sertifikasi ISO, sertifikat perizinan NIB, dan penghargaan industri',
          'Peta Google Maps interaktif lokasi kantor pusat dan pabrik operasional',
          'Tombol download Company Profile PDF beresolusi tinggi',
        ],
      },
    ],
    workflow: [
      { step: 1, title: 'Koleksi Aset & Copywriting', desc: 'Kurasi materi legalitas, narasi brand, dan foto.', duration: 'Hari 1-2' },
      { step: 2, title: 'Penyusunan UI Dwibahasa', desc: 'Pembuatan tata letak korporat bersih dan elegan.', duration: 'Hari 3-4' },
      { step: 3, title: 'Uji Aksesibilitas & SEO', desc: 'Pengecekan lintas perangkat dan optimasi rich snippets.', duration: 'Hari 5-6' },
      { step: 4, title: 'Serah Terima & Rilis', desc: 'Peluncuran domain resmi korporat dan panduan admin.', duration: 'Hari 7' },
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Cloudflare WAF', 'TypeScript', 'SEO Engine'],
    faqs: [
      {
        question: 'Apakah bisa menggunakan domain resmi korporat seperti .co.id?',
        answer: 'Bisa. Kami bantu proses registrasi domain .co.id dengan melengkapi persyaratan legalitas perusahaan Anda ke PANDI.',
      },
    ],
  },
  {
    id: 'ecommerce-b2b',
    category: 'website',
    categoryLabel: 'WEBSITE',
    title: 'E-commerce & Katalog B2B',
    tagline: 'Katalog produk, harga per tier pelanggan, dan sistem pemesanan untuk distributor',
    price: 'Mulai Rp 3.200.000',
    duration: '7 - 14 Hari Kerja',
    iconName: 'ShoppingBag',
    badge: 'Katalog Grosir',
    overview:
      'Platform katalog digital dan pemesanan online khusus transaksi bisnis ke bisnis (B2B): mendukung pemesanan grosir kuantitas besar, permintaan penawaran resmi (RFQ/Quotation), serta katalog tertutup untuk agen resmi.',
    keyBenefits: [
      'Memudahkan distributor memesan produk tanpa harus mencatat manual di chat',
      'Fitur cetak Surat Penawaran Harga (Invoice / Quotation PDF) otomatis',
      'Filter spesifikasi teknis barang, SKU produk, dan status ketersediaan stok',
      'Koneksi checkout otomatis ke WhatsApp sales per wilayah distributor',
    ],
    standardFeatures: [
      {
        title: 'Kecepatan yang diukur',
        desc: 'Pencarian ribuan SKU produk tanpa jeda berkat indexing client-side yang ringan.',
        iconName: 'Gauge',
      },
      {
        title: 'SEO teknis sejak awal',
        desc: 'Schema Product & Offer terstruktur agar produk langsung muncul di Google Shopping.',
        iconName: 'Search',
      },
      {
        title: 'Siap multi bahasa',
        desc: 'Mendukung konversi mata uang dan spesifikasi internasional untuk ekspor.',
        iconName: 'Languages',
      },
      {
        title: 'CMS yang mudah dipakai',
        desc: 'Manajemen upload produk masal via format spreadsheet Excel/CSV.',
        iconName: 'LayoutGrid',
      },
      {
        title: 'Keamanan dan backup',
        desc: 'Sistem terenkripsi untuk melindungi data harga dan histori transaksi rekanan.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Tracking konversi',
        desc: 'Pelacakan funnel dari pencarian barang, add to RFQ, hingga closing transaksi.',
        iconName: 'Target',
      },
    ],
    deliverables: [
      {
        title: 'Modul Katalog & Keranjang B2B',
        items: [
          'Halaman katalog produk dengan filter kategori, merek, dan rentang harga',
          'Sistem keranjang belanja grosir dengan minimal pembelian (MOQ)',
          'Fitur Request for Quotation (RFQ) langsung menghasilkan draft PDF',
          'Tombol kirim pesanan otomatis via format teks WhatsApp sales resmi',
        ],
      },
      {
        title: 'Panel Manajemen Katalog',
        items: [
          'Dashboard penambahan produk, gambar galeri, dan dokumen datasheet PDF',
          'Pengelolaan status stok (Ready Stock, Indent, Pre-Order)',
          'Ekspor rekap pesanan berkala untuk tim keuangan',
        ],
      },
    ],
    workflow: [
      { step: 1, title: 'Struktur SKU & Kategori', desc: 'Pemetaan kategori barang dan alur checkout pesanan.', duration: 'Hari 1-3' },
      { step: 2, title: 'Pembangunan Katalog & Keranjang', desc: 'Koding antarmuka belanja cepat tanpa login wajib.', duration: 'Hari 4-8' },
      { step: 3, title: 'Integrasi RFQ & Generator PDF', desc: 'Pembuatan modul invoice / penawaran otomatis.', duration: 'Hari 9-11' },
      { step: 4, title: 'Uji Beban & Peluncuran', desc: 'Pengujian performa katalog dengan ribuan produk.', duration: 'Hari 12-14' },
    ],
    techStack: ['React', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel Edge'],
    faqs: [
      {
        question: 'Apakah pelanggan wajib mendaftar akun untuk memesan?',
        answer: 'Tidak wajib. Sistem kami mendukung guest checkout cepat via WhatsApp maupun sistem akun terdaftar.',
      },
    ],
  },
  {
    id: 'landing-page-kampanye',
    category: 'website',
    categoryLabel: 'WEBSITE',
    title: 'Landing Page Kampanye',
    tagline: 'Halaman iklan berkonversi tinggi dengan tracking presisi kebal ad-blocker',
    price: 'Mulai Rp 750.000',
    duration: '24 - 48 Jam Kerja',
    iconName: 'MousePointerClick',
    badge: 'Iklan Siap Konversi',
    overview:
      'Landing page super cepat (<0.6 detik) yang dirancang khusus untuk memenangkan kampanye Meta Ads (Facebook/Instagram), Google Ads, dan TikTok Ads. Struktur copywriting teruji untuk memicu aksi beli cepat.',
    keyBenefits: [
      'Kecepatan muat di bawah 0.6 detik mencegah calon pembeli kabur karena loading lambat',
      'Desain mobile-first dengan tombol CTA mengambang (sticky WhatsApp button)',
      'Terpasang pelacakan Meta Pixel + Conversions API (CAPI) skor EMQ 8.5+',
      'A/B testing siap pakai untuk menguji variasi judul dan penawaran terbaik',
    ],
    standardFeatures: [
      {
        title: 'Kecepatan yang diukur',
        desc: 'Lighthouse performa 100 poin, gambar terkompresi tanpa mengurangi ketajaman.',
        iconName: 'Gauge',
      },
      {
        title: 'SEO teknis sejak awal',
        desc: 'Struktur halaman teroptimasi Quality Score Google Ads untuk biaya per klik lebih murah.',
        iconName: 'Search',
      },
      {
        title: 'Siap multi bahasa',
        desc: 'Format fleksibel untuk penargetan audiens lokal maupun nasional.',
        iconName: 'Languages',
      },
      {
        title: 'CMS yang mudah dipakai',
        desc: 'Struktur kode bersih yang mudah disunting teks promo dan diskonnya.',
        iconName: 'LayoutGrid',
      },
      {
        title: 'Keamanan dan backup',
        desc: 'Proteksi Cloudflare DDoS memastikan landing page tidak tumbang saat dibanjiri traffic iklan.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Tracking konversi',
        desc: 'Deduplikasi event Pixel browser dan Server CAPI kebal terhadap pemblokir iklan.',
        iconName: 'Target',
      },
    ],
    deliverables: [
      {
        title: 'Cakupan Landing Page',
        items: [
          'Headline memikat dengan penawaran value proposition tegas',
          'Bagian bukti sosial (testimoni, logo klien terpercaya, dan sertifikasi)',
          'Tabel perbandingan keuntungan produk Anda vs kompetitor pasaran',
          'Section FAQ penuntas keraguan calon pembeli',
          'Tombol CTA WhatsApp melayang dengan pesan dinamis per varian produk',
        ],
      },
      {
        title: 'Integrasi Pelacakan Iklan',
        items: [
          'Setup Meta Pixel + Meta Conversions API Server Container',
          'Setup Google Tag Manager & Google Analytics 4 Event Purchase',
          'Deduplikasi Event ID untuk pelaporan ROAS iklan yang akurat',
        ],
      },
    ],
    workflow: [
      { step: 1, title: 'Analisis Penawaran & Copywriting', desc: 'Merumuskan angle promosi dan psikologi konversi.', duration: 'Hari ke-1' },
      { step: 2, title: 'Koding Cepat & Setup Tracking', desc: 'Penyusunan kode frontend kilat dan pasang CAPI.', duration: 'Hari ke-1 malam' },
      { step: 3, title: 'Pengujian Konversi & Go-Live', desc: 'Uji event tracking di Ads Manager dan aktivasi domain.', duration: 'Hari ke-2' },
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Meta CAPI', 'GTM Server-Side', 'Cloudflare Edge'],
    faqs: [
      {
        question: 'Apakah landing page ini tahan terhadap serbuan ribuan klik iklan bersamaan?',
        answer: 'Sangat tahan. Landing page kami di-hosting pada jaringan Edge CDN global yang mampu melayani jutaan request tanpa penurunan performa.',
      },
    ],
  },

  // =========================================================================
  // KATEGORI: APLIKASI
  // =========================================================================
  {
    id: 'aplikasi-custom',
    category: 'aplikasi',
    categoryLabel: 'APLIKASI',
    title: 'Jasa Pembuatan Aplikasi Custom',
    tagline: 'Aplikasi web dan mobile yang sepenuhnya mengikuti alur proses bisnis unik Anda',
    price: 'Mulai Rp 4.500.000',
    duration: '2 - 4 Minggu',
    iconName: 'AppWindow',
    badge: 'Full Architecture',
    overview:
      'Pengembangan aplikasi khusus untuk otomatisasi proses kerja kompleks yang tidak bisa diselesaikan oleh software pasaran. Dirancang dengan arsitektur cloud modular, database relasional terproteksi, dan kemudahan skalabilitas.',
    keyBenefits: [
      'Menghilangkan pencatatan manual dan dokumen tercecer antar departemen',
      'Hak akses berjenjang berbasis role (Super Admin, Manajer, Staf Operasional, Klien)',
      'Notifikasi otomatis via WhatsApp / Email untuk setiap approval tugas',
      'Dashboard analitik performa kerja dan laporan periodik yang siap diekspor',
    ],
    standardFeatures: [
      {
        title: 'Kecepatan yang diukur',
        desc: 'Optimasi query database dan server response time di bawah 150 milidetik.',
        iconName: 'Gauge',
      },
      {
        title: 'SEO teknis sejak awal',
        desc: 'Arsitektur web app modern yang ramah indexing bila difungsikan publik.',
        iconName: 'Search',
      },
      {
        title: 'Siap multi bahasa',
        desc: 'Pemisahan modul bahasa untuk aplikasi yang diakses oleh tim lintas negara.',
        iconName: 'Languages',
      },
      {
        title: 'CMS & Manajemen Data',
        desc: 'Interface CRUD intuitif dengan validasi data real-time dan log perubahan (audit trail).',
        iconName: 'LayoutGrid',
      },
      {
        title: 'Keamanan dan backup',
        desc: 'Enkripsi data at-rest & in-transit, Row Level Security (RLS), dan backup otomatis harian.',
        iconName: 'ShieldCheck',
      },
      {
        title: 'Tracking & Telemetri',
        desc: 'Monitoring kesehatan server dan log error terintegrasi untuk pencegahan downtime.',
        iconName: 'Target',
      },
    ],
    deliverables: [
      {
        title: 'Arsitektur & Backend API',
        items: [
          'Perancangan skema database relasional PostgreSQL yang normal dan terindeks',
          'RESTful / GraphQL API aman dengan autentikasi JWT token bertingkat',
          'Enkripsi kata sandi dan pembatasan rate limit anti-serangan brute force',
        ],
      },
      {
        title: 'Antarmuka Pengguna (Frontend)',
        items: [
          'Dashboard visual responsif dengan grafik statistik interaktif',
          'Tabel data cerdas dengan pagination, filter multi-kolom, dan pencarian kilat',
          'Formulir input data lengkap dengan upload dokumen dan kompresi file otomatis',
        ],
      },
      {
        title: 'Layanan & Pemeliharaan',
        items: [
          'Deployment ke Cloud VPS Linux terisolasi dengan reverse proxy Caddy / Nginx',
          'Pelatihan penggunaan langsung untuk tim operasional perusahaan Anda',
          'Garansi SLA perbaikan bug tertulis selama 90 hari',
        ],
      },
    ],
    workflow: [
      { step: 1, title: 'Analisis Alur Kerja & Skema Data', desc: 'Merumuskan Blueprint Arsitektur Sistem.', duration: 'Minggu ke-1' },
      { step: 2, title: 'Pembangunan Database & Backend API', desc: 'Koding logika bisnis dan keamanan server.', duration: 'Minggu ke-2' },
      { step: 3, title: 'Penyusunan Antarmuka Frontend', desc: 'Pembuatan dashboard visual dan integrasi data.', duration: 'Minggu ke-3' },
      { step: 4, title: 'Uji Coba Stres, QA & Deployment', desc: 'Simulasi beban data, pelatihan staf, dan peluncuran.', duration: 'Minggu ke-4' },
    ],
    techStack: ['Node.js', 'PostgreSQL', 'React / Next.js', 'TypeScript', 'Docker', 'Linux VPS'],
    faqs: [
      {
        question: 'Apakah aplikasi bisa diakses di smartphone karyawan?',
        answer: 'Bisa. Aplikasi berbasis Responsive Web App (PWA) sehingga dapat dibuka lancar di browser HP Android/iPhone maupun disimpan sebagai ikon aplikasi di home screen.',
      },
    ],
  },
  {
    id: 'sistem-internal-portal',
    category: 'aplikasi',
    categoryLabel: 'APLIKASI',
    title: 'Aplikasi Web & Sistem Internal',
    tagline: 'Portal karyawan, approval workflow bertingkat, dan sistem operasional berbasis browser',
    price: 'Mulai Rp 3.800.000',
    duration: '2 - 3 Minggu',
    iconName: 'Monitor',
    badge: 'Efisiensi Internal',
    overview:
      'Digitalisasi birokrasi kantor menjadi portal internal yang tertib: approval surat menyurat, pengajuan cuti, reimbursement, absensi GPS, dan pelacakan tugas proyek tanpa kertas fisik.',
    keyBenefits: [
      'Persetujuan tugas sekali klik langsung dari browser atau notifikasi WhatsApp',
      'Rekam jejak audit digital lengkap (siapa yang menyetujui, jam berapa, catatan revisi)',
      'Hemat kertas dan waktu koordinasi hingga 80% bagi tim HR & Operasional',
      'Penyimpanan arsip digital rapi dan terlindungi sistem enkripsi perusahaan',
    ],
    standardFeatures: [
      { title: 'Kecepatan yang diukur', desc: 'Akses instan di jaringan lokal maupun internet publik.', iconName: 'Gauge' },
      { title: 'SEO teknis sejak awal', desc: 'Robots noindex otomatis untuk melindungi kerahasiaan data internal.', iconName: 'Search' },
      { title: 'Siap multi bahasa', desc: 'Pilihan bahasa untuk staf lokal dan ekspatriat.', iconName: 'Languages' },
      { title: 'CMS & Manajemen Data', desc: 'Pengaturan hierarki persetujuan manajer bertingkat dengan drag-and-drop.', iconName: 'LayoutGrid' },
      { title: 'Keamanan dan backup', desc: 'Autentikasi 2FA dan akses VPN terisolasi (Zero-Trust).', iconName: 'ShieldCheck' },
      { title: 'Tracking konversi', desc: 'Metrik durasi penyelesaian tugas dan SLA respon karyawan.', iconName: 'Target' },
    ],
    deliverables: [
      {
        title: 'Modul Approval & Workflow',
        items: [
          'Pengajuan reimbursement dengan upload struk dan verifikasi bertingkat',
          'Manajemen cuti dan kalender kehadiran tim terintegrasi',
          'Notifikasi real-time via WhatsApp bot ketika ada dokumen butuh approval',
        ],
      },
    ],
    workflow: [
      { step: 1, title: 'Pemetaan SOP Approval', desc: 'Mendokumentasikan hierarki otorisasi perusahaan.', duration: 'Minggu ke-1' },
      { step: 2, title: 'Implementasi Modul & Testing', desc: 'Koding alur kerja dan proteksi hak akses.', duration: 'Minggu ke-2' },
      { step: 3, title: 'UAT & Pelatihan Karyawan', desc: 'Sosialisasi pengoperasian sistem ke seluruh departemen.', duration: 'Minggu ke-3' },
    ],
    techStack: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'WhatsApp Cloud API'],
    faqs: [
      {
        question: 'Apakah aman dari kebocoran data keluar kantor?',
        answer: 'Sangat aman. Akses portal dapat dibatasi hanya untuk IP address kantor atau melalui jaringan Zero-Trust VPN Tailscale terenkripsi.',
      },
    ],
  },
  {
    id: 'aplikasi-mobile',
    category: 'aplikasi',
    categoryLabel: 'APLIKASI',
    title: 'Aplikasi Mobile (Android & iOS)',
    tagline: 'Aplikasi mobile cross-platform untuk tim lapangan, kurir, dan pelanggan setia',
    price: 'Mulai Rp 6.000.000',
    duration: '3 - 6 Minggu',
    iconName: 'Smartphone',
    badge: 'Mobile Native / PWA',
    overview:
      'Pengembangan aplikasi mobile modern dengan teknologi Flutter atau React Native / Progressive Web App (PWA): mendukung fitur kamera scan barcode, geotagging GPS presisi, dan mode offline-first untuk wilayah minim sinyal.',
    keyBenefits: [
      'Bisa beroperasi dalam kondisi minim sinyal dan sinkronisasi otomatis saat online',
      'Fitur penandaan lokasi GPS akurat untuk verifikasi absensi dan pengiriman',
      'Pengalaman penggunaan responsif dan mulus di Android dan iOS',
      'Bantuan publikasi ke Google Play Store dan Apple App Store',
    ],
    standardFeatures: [
      { title: 'Kecepatan yang diukur', desc: 'Render 60fps dengan animasi antarmuka yang ringan dan hemat baterai.', iconName: 'Gauge' },
      { title: 'SEO teknis sejak awal', desc: 'Deep-linking URL yang menghubungkan tautan web langsung ke aplikasi.', iconName: 'Search' },
      { title: 'Siap multi bahasa', desc: 'Dukungan translasi konten dinamis sesuai pengaturan bahasa perangkat.', iconName: 'Languages' },
      { title: 'CMS yang mudah dipakai', desc: 'Pembaruan banner promosi dan notifikasi push tanpa update aplikasi di store.', iconName: 'LayoutGrid' },
      { title: 'Keamanan dan backup', desc: 'Penyimpanan lokal terenkripsi (SQLite / Encrypted Shared Preferences).', iconName: 'ShieldCheck' },
      { title: 'Tracking konversi', desc: 'Analitik aktivitas pengguna dalam aplikasi via Firebase Analytics.', iconName: 'Target' },
    ],
    deliverables: [
      {
        title: 'Fitur Perangkat Keras',
        items: [
          'Integrasi kamera pemindai barcode / QR code barang',
          'Pelacakan koordinat GPS dengan proteksi fake GPS',
          'Pengambilan foto bukti serah terima barang langsung dengan watermark waktu',
          'Notifikasi push real-time via Firebase Cloud Messaging (FCM)',
        ],
      },
    ],
    workflow: [
      { step: 1, title: 'Desain UI/UX Mobile', desc: 'Prototyping tampilan interaktif mobile.', duration: 'Minggu 1-2' },
      { step: 2, title: 'Koding Fitur & Offline Engine', desc: 'Pengembangan logika aplikasi dan sinkronisasi data.', duration: 'Minggu 3-4' },
      { step: 3, title: 'Pengujian Lapangan & Store Submission', desc: 'Uji coba di berbagai jenis perangkat smartphone.', duration: 'Minggu 5-6' },
    ],
    techStack: ['Flutter / Dart', 'React Native', 'Firebase', 'SQLite', 'REST API'],
    faqs: [
      {
        question: 'Apakah aplikasi bisa berjalan tanpa koneksi internet?',
        answer: 'Ya, dengan arsitektur Offline-First, data dicatat di memori lokal ponsel dan otomatis disinkronkan ke server saat sinyal internet kembali stabil.',
      },
    ],
  },
  {
    id: 'erp-crm-inventory',
    category: 'aplikasi',
    categoryLabel: 'APLIKASI',
    title: 'ERP, CRM & Manajemen Inventori',
    tagline: 'Stok multi-gudang, pipeline penjualan, purchase order, dan pencatatan laba rugi',
    price: 'Mulai Rp 5.500.000',
    duration: '3 - 5 Minggu',
    iconName: 'Boxes',
    badge: 'Kendali Finansial',
    overview:
      'Solusi ERP terintegrasi untuk perusahaan berkembang: memantau mutasi stok multi-gudang secara real-time, mengelola alur penjualan dari leads hingga closing, dan menyajikan laporan keuangan harian secara otomatis.',
    keyBenefits: [
      'Pencegahan selisih stok dan kebocoran barang di gudang dengan audit barcode',
      'Pencatatan riwayat interaksi pelanggan (CRM) untuk meningkatkan retensi pembeli',
      'Laporan laba kotor, HPP (Harga Pokok Penjualan), dan arus kas instan sekali klik',
      'Integrasi Surat Jalan dan Purchase Order (PO) siap cetak format resmi',
    ],
    standardFeatures: [
      { title: 'Kecepatan yang diukur', desc: 'Query kalkulasi stok ribuan varian selesai di bawah 200ms.', iconName: 'Gauge' },
      { title: 'SEO teknis sejak awal', desc: 'Pencegahan indexing publik untuk melindungi kerahasiaan stok & harga.', iconName: 'Search' },
      { title: 'Siap multi bahasa', desc: 'Dukungan multi-mata uang untuk transaksi impor & ekspor.', iconName: 'Languages' },
      { title: 'CMS yang mudah dipakai', desc: 'Penyesuaian stok opname mudah dengan import file spreadsheet massal.', iconName: 'LayoutGrid' },
      { title: 'Keamanan dan backup', desc: 'Audit log mutasi barang yang tidak bisa dimanipulasi (immutable ledger).', iconName: 'ShieldCheck' },
      { title: 'Tracking konversi', desc: 'Visualisasi pipeline penjualan dari prospek baru hingga order selesai.', iconName: 'Target' },
    ],
    deliverables: [
      {
        title: 'Modul Gudang & Inventori',
        items: [
          'Pencatatan stok masuk, stok keluar, transfer antar gudang, dan stok opname',
          'Peringatan otomatis saat stok barang mendekati batas minimum',
          'Manajemen nomor batch dan tanggal kedaluwarsa produk',
        ],
      },
      {
        title: 'Modul CRM & Penjualan',
        items: [
          'Database riwayat pembelian pelanggan dan pengingat follow up sales',
          'Penerbitan Invoice, Faktur Pajak, dan Surat Jalan otomatis',
        ],
      },
    ],
    workflow: [
      { step: 1, title: 'Analisis Alur Akuntansi & Gudang', desc: 'Memetakan alur fisik barang vs alur pencatatan buku.', duration: 'Minggu 1-2' },
      { step: 2, title: 'Pembangunan Database Transaksional', desc: 'Koding logika ACID transaksi dan jurnal otomatis.', duration: 'Minggu 3-4' },
      { step: 3, title: 'Uji Validasi Angka & Peluncuran', desc: 'Pencocokan saldo pembukuan dan implementasi live.', duration: 'Minggu ke-5' },
    ],
    techStack: ['PostgreSQL', 'Node.js', 'React', 'Tailwind CSS', 'Docker', 'Linux VPS'],
    faqs: [
      {
        question: 'Apakah bisa dihubungkan dengan printer thermal kasir atau barcode scanner?',
        answer: 'Bisa. Sistem mendukung output cetak printer thermal struk kasir dan input scanner USB/Bluetooth standar industri.',
      },
    ],
  },
  {
    id: 'integrasi-sistem-api',
    category: 'aplikasi',
    categoryLabel: 'APLIKASI',
    title: 'Integrasi Sistem & Custom API',
    tagline: 'Hubungkan ERP, akuntansi, marketplace, dan payment gateway secara otomatis',
    price: 'Mulai Rp 2.800.000',
    duration: '1 - 2 Minggu',
    iconName: 'Cable',
    badge: 'Otomasi Pipa Data',
    overview:
      'Menghubungkan aplikasi yang terpisah menjadi satu ekosistem data yang sinkron. Hentikan input manual berulang kali: sambungkan toko online Anda ke software akuntansi, WhatsApp bot, dan kurir logistik secara otomatis.',
    keyBenefits: [
      'Sinkronisasi pesanan dari Tokopedia/Shopee/Toko Online langsung ke sistem gudang',
      'Pengecekan mutasi bank BCA/Mandiri/BRI otomatis tanpa login manual perbankan',
      'Integrasi tarif ongkos kirim resmi JNE, J&T, SiCepat dan pembuatan resi otomatis',
      'Webhook callback dengan verifikasi enkripsi HMAC aman dari manipulasi data',
    ],
    standardFeatures: [
      { title: 'Kecepatan yang diukur', desc: 'Pemrosesan data real-time via webhook dengan latency di bawah 300ms.', iconName: 'Gauge' },
      { title: 'SEO teknis sejak awal', desc: 'Struktur REST API terdokumentasi rapi sesuai standar OpenAPI/Swagger.', iconName: 'Search' },
      { title: 'Siap multi bahasa', desc: 'Standarisasi format tanggal dan angka desimal internasional.', iconName: 'Languages' },
      { title: 'CMS yang mudah dipakai', desc: 'Dashboard monitoring status webhook sukses dan tombol retry otomatis.', iconName: 'LayoutGrid' },
      { title: 'Keamanan dan backup', desc: 'Verifikasi signature HMAC SHA-256 dan pembatasan IP whitelist ketat.', iconName: 'ShieldCheck' },
      { title: 'Tracking konversi', desc: 'Pencatatan log transaksi terperinci untuk audit rekonsiliasi.', iconName: 'Target' },
    ],
    deliverables: [
      {
        title: 'Cakupan Integrasi',
        items: [
          'Pengembangan middleware penghubung dua sistem berbeda arsitektur',
          'Sistem antrian pesan (Queue Engine) anti-duplikasi transaksi',
          'Panel log monitoring transaksi gagal dengan tombol resend instan',
        ],
      },
    ],
    workflow: [
      { step: 1, title: 'Analisis API Endpoint', desc: 'Mempelajari dokumentasi teknis API pihak ketiga.', duration: 'Hari 1-3' },
      { step: 2, title: 'Koding Middleware & Webhook', desc: 'Membangun logika transformasi data dan enkripsi.', duration: 'Hari 4-8' },
      { step: 3, title: 'Uji Rekonsiliasi & Rilis', desc: 'Verifikasi keakuratan saldo data antar sistem.', duration: 'Hari 9-12' },
    ],
    techStack: ['Node.js', 'Python', 'Redis Queue', 'PostgreSQL', 'Docker'],
    faqs: [
      {
        question: 'Bagaimana jika API pihak ketiga mengalami gangguan (down)?',
        answer: 'Sistem middleware kami dilengkapi Retry Policy otomatis dan antrian pesan (Queue), sehingga data tidak akan hilang dan akan dikirim ulang saat server pihak ketiga pulih.',
      },
    ],
  },
  {
    id: 'dashboard-bi',
    category: 'aplikasi',
    categoryLabel: 'APLIKASI',
    title: 'Dashboard & Business Intelligence',
    tagline: 'Laporan manajemen eksekutif real-time dari berbagai sumber database & spreadsheet',
    price: 'Mulai Rp 2.200.000',
    duration: '1 - 2 Minggu',
    iconName: 'LayoutDashboard',
    badge: 'Analitik Eksekutif',
    overview:
      'Ubah data mentah yang menumpuk di spreadsheet menjadi dashboard visual interaktif yang membantu pemilik bisnis mengambil keputusan strategis berdasarkan angka nyata, bukan sekadar intuisi.',
    keyBenefits: [
      'Visualisasi metrik KPI utama (Omzet, Profit Bersih, Retensi Pelanggan, ARPU)',
      'Grafik interaktif dengan filter rentang tanggal, cabang toko, dan kategori produk',
      'Tampilan adaptif nyaman dipantau dari layar laptop maupun tablet direksi',
      'Ekspor laporan berkala ke format presentasi PDF atau Excel dengan sekali klik',
    ],
    standardFeatures: [
      { title: 'Kecepatan yang diukur', desc: 'Agregasi query data kilat menggunakan view database terindeks.', iconName: 'Gauge' },
      { title: 'SEO teknis sejak awal', desc: 'Autentikasi berlapis dan proteksi noindex untuk kerahasiaan bisnis.', iconName: 'Search' },
      { title: 'Siap multi bahasa', desc: 'Format angka mata uang Rupiah dan Dolar fleksibel.', iconName: 'Languages' },
      { title: 'CMS & Manajemen Data', desc: 'Koneksi langsung ke Google Sheets, Excel, atau database SQL Anda.', iconName: 'LayoutGrid' },
      { title: 'Keamanan dan backup', desc: 'Hak akses khusus jajaran direksi dengan proteksi 2-Factor Authentication.', iconName: 'ShieldCheck' },
      { title: 'Tracking konversi', desc: 'Metrik perbandingan performa bulan ini vs bulan lalu (MoM Growth).', iconName: 'Target' },
    ],
    deliverables: [
      {
        title: 'Komponen Dashboard',
        items: [
          'Widget ringkasan HUD (Total Pendapatan, Order Masuk, Tiket CS Terbuka)',
          'Grafik garis tren penjualan harian dan perbandingan periode',
          'Diagram lingkaran kontribusi profit per produk unggulan',
          'Tabel peringkat performa cabang toko dan tim sales',
        ],
      },
    ],
    workflow: [
      { step: 1, title: 'Koleksi Formula KPI', desc: 'Merumuskan metrik terpenting yang dipantau direksi.', duration: 'Hari 1-3' },
      { step: 2, title: 'Penyusunan Data Pipeline', desc: 'Menghubungkan sumber data mentah ke database agregasi.', duration: 'Hari 4-7' },
      { step: 3, title: 'Desain Antarmuka Visual & Rilis', desc: 'Koding chart interaktif dan serah terima akses.', duration: 'Hari 8-12' },
    ],
    techStack: ['React', 'Next.js', 'Chart.js / Recharts', 'PostgreSQL', 'Tailwind CSS'],
    faqs: [
      {
        question: 'Apakah dashboard ini bisa mengambil data dari Google Sheets yang biasa kami pakai?',
        answer: 'Bisa. Kami dapat menghubungkan Google Sheets Anda langsung ke dashboard via API resmi, sehingga grafik otomatis terupdate saat tim memasukkan data di spreadsheet.',
      },
    ],
  },

  // =========================================================================
  // KATEGORI: DIGITAL MARKETING & AI
  // =========================================================================
  {
    id: 'whatsapp-ai-agent',
    category: 'marketing',
    categoryLabel: 'DIGITAL MARKETING & AI',
    title: 'WhatsApp AI Agent & Customer Care',
    tagline: 'Bot AI 24/7 terlatih dokumen SOP, katalog produk, dan kalkulasi harga bisnis Anda',
    price: 'Mulai Rp 2.500.000',
    duration: '5 - 7 Hari Kerja',
    iconName: 'Bot',
    badge: 'AI Otomasi 24/7',
    overview:
      'Asisten digital berbasis Large Language Model (Gemini / Claude / OpenAI) yang disematkan langsung di nomor WhatsApp bisnis Anda. Menjawab pertanyaan pelanggan secara natural, merekomendasikan produk, dan melayani konsultasi 24 jam tanpa lelah.',
    keyBenefits: [
      'Membalas pesan konsumen dalam hitungan 2–3 detik kapan pun mereka bertanya',
      'Jawaban selalu akurat berkat teknologi RAG yang mengunci konteks pada SOP bisnis Anda',
      'Dilengkapi pembatas ketat (guardrails) agar bot tidak menjawab di luar topik bisnis',
      'Fitur eskalasi halus ke staf manusia jika pelanggan membutuhkan bantuan khusus',
    ],
    standardFeatures: [
      { title: 'Kecepatan yang diukur', desc: 'Respon streaming kilat dengan latensi inferensi di bawah 2.5 detik.', iconName: 'Gauge' },
      { title: 'SEO teknis sejak awal', desc: 'Integrasi link WhatsApp cerdas yang mudah dipasang di website dan iklan.', iconName: 'Search' },
      { title: 'Siap multi bahasa', desc: 'Mampu memahami dan merespon bahasa Indonesia santai, formal, maupun Inggris.', iconName: 'Languages' },
      { title: 'CMS & Manajemen Data', desc: 'Anda cukup mengunggah file PDF SOP atau daftar produk baru untuk melatih bot.', iconName: 'LayoutGrid' },
      { title: 'Keamanan dan backup', desc: 'Kerahasiaan data perusahaan terjamin tanpa dipakai untuk melatih model publik.', iconName: 'ShieldCheck' },
      { title: 'Tracking konversi', desc: 'Pencatatan leads yang berhasil diarahkan ke penutupan transaksi.', iconName: 'Target' },
    ],
    deliverables: [
      {
        title: 'Konfigurasi Otak AI & Data',
        items: [
          'Vektorisasi dokumen katalog produk, daftar harga, dan dokumen FAQ perusahaan',
          'Pembuatan System Prompt berkarakter ramah, profesional, dan persuasif',
          'Pemasangan guardrails anti-halusinasi dan proteksi prompt injection',
        ],
      },
      {
        title: 'Integrasi WhatsApp Cloud API',
        items: [
          'Setup akun resmi WhatsApp Business Cloud API Meta verified',
          'Server webhook perantara dengan isolasi session pengguna',
          'Fitur handover ke admin staf manusia dengan satu perintah kata kunci',
        ],
      },
    ],
    workflow: [
      { step: 1, title: 'Koleksi Dokumen SOP & Persona', desc: 'Menghimpun seluruh FAQ dan panduan produk.', duration: 'Hari 1-2' },
      { step: 2, title: 'Pembangunan Vector RAG & Server', desc: 'Koding backend AI dan integrasi WhatsApp API.', duration: 'Hari 3-4' },
      { step: 3, title: 'Uji Coba Skenario Percakapan', desc: 'Simulasi ratusan pertanyaan pelanggan riil.', duration: 'Hari 5-6' },
      { step: 4, title: 'Go-Live di Nomor WhatsApp Klien', desc: 'Aktivasi bot live 24/7 dan serah terima dokumen.', duration: 'Hari ke-7' },
    ],
    techStack: ['Gemini API', 'WhatsApp Cloud API', 'Python / TypeScript', 'FastAPI', 'Docker VPS'],
    faqs: [
      {
        question: 'Apakah nomor WhatsApp yang sudah ada bisa digunakan?',
        answer: 'Bisa. Kami bantu migrasikan nomor bisnis Anda ke infrastruktur WhatsApp Cloud API resmi Meta agar tidak terkena risiko banned pemakaian bot ilegal.',
      },
    ],
  },
  {
    id: 'meta-capi-ads-tracking',
    category: 'marketing',
    categoryLabel: 'DIGITAL MARKETING & AI',
    title: 'Jasa Setup Meta CAPI & Google Ads Tracking',
    tagline: 'Pelacakan data iklan presisi tinggi kebal ad-blocker dan perlindungan privasi iOS 14+',
    price: 'Mulai Rp 1.200.000',
    duration: '2 - 3 Hari Kerja',
    iconName: 'Target',
    badge: 'ROI Iklan Naik',
    overview:
      'Solusi pelacakan server-side (Meta Conversions API & GTM Server-Side) yang mengirimkan event pembelian dan leads langsung dari server ke Meta & Google. Mengembalikan data iklan yang hilang akibat ad-blocker sehingga algoritma iklan menemukan pembeli yang tepat.',
    keyBenefits: [
      'Meningkatkan skor Event Match Quality (EMQ) Meta Ads ke tingkat 8.0 – 9.0/10',
      'Deduplikasi event browser dan server sempurna tanpa dobel hitung',
      'Mengurangi biaya per akuisisi (CPA) karena algoritma iklan mendapatkan sinyal akurat',
      'Data transaksi terenkripsi SHA-256 sesuai standar privasi GDPR dan Meta',
    ],
    standardFeatures: [
      { title: 'Kecepatan yang diukur', desc: 'Pengiriman event server-to-server instan tanpa membebani kecepatan website.', iconName: 'Gauge' },
      { title: 'SEO teknis sejak awal', desc: 'Setup first-party tracking domain (tracking.domainanda.com) kebal pemblokir.', iconName: 'Search' },
      { title: 'Siap multi bahasa', desc: 'Mendukung pelacakan lintas negara dan konversi mata uang otomatis.', iconName: 'Languages' },
      { title: 'CMS & Manajemen Data', desc: 'Dashboard ringkasan Event Match Quality langsung di Ads Manager Anda.', iconName: 'LayoutGrid' },
      { title: 'Keamanan dan backup', desc: 'Hashing PII (Email, No HP) dengan SHA-256 sebelum data dikirimkan.', iconName: 'ShieldCheck' },
      { title: 'Tracking konversi', desc: 'Pelacakan parameter lengkap (Lead, ViewContent, InitiateCheckout, Purchase).', iconName: 'Target' },
    ],
    deliverables: [
      {
        title: 'Cakupan Setup CAPI',
        items: [
          'Setup Google Tag Manager Server-Side Container di Cloudflare Workers / Stape',
          'Konfigurasi First-Party Custom Domain Tracking',
          'Implementasi Event Deduplication dengan generate Event ID unik',
          'Audit Event Match Quality (EMQ) hingga mencapai skor di atas 8.0',
        ],
      },
    ],
    workflow: [
      { step: 1, title: 'Audit Tag & Pixel Saat Ini', desc: 'Mengevaluasi kebocoran data pelacakan yang ada.', duration: 'Hari ke-1' },
      { step: 2, title: 'Penyusunan Server Container CAPI', desc: 'Setup cloud serverless dan parameter data.', duration: 'Hari ke-2' },
      { step: 3, title: 'Uji Test Events & Validasi EMQ', desc: 'Verifikasi di Meta Events Manager dan serah terima.', duration: 'Hari ke-3' },
    ],
    techStack: ['Meta Conversions API', 'Google Tag Manager Server', 'Cloudflare Workers', 'GA4'],
    faqs: [
      {
        question: 'Mengapa pixel biasa lewat browser sudah tidak cukup?',
        answer: 'Karena update privasi iOS 14+ dan browser seperti Safari/Brave memblokir cookie pihak ketiga hingga 30-40% data iklan hilang. CAPI mengirim data dari server sehingga 100% data transaksi terselamatkan.',
      },
    ],
  },
  {
    id: 'jasa-seo-performa-web',
    category: 'marketing',
    categoryLabel: 'DIGITAL MARKETING & AI',
    title: 'Jasa SEO Teknis & Core Web Vitals',
    tagline: 'Optimasi performa halaman <0.8 detik dan struktur schema untuk peringkat teratas Google',
    price: 'Mulai Rp 1.500.000',
    duration: '3 - 5 Hari Kerja',
    iconName: 'Search',
    badge: 'Trafik Organik',
    overview:
      'Optimasi fondasi teknis website agar dicintai algoritma Google: meningkatkan kecepatan muat, memperbaiki Cumulative Layout Shift (CLS), memasang Schema JSON-LD terstruktur, dan menata hierarki URL agar mudah terindeks di peringkat 1.',
    keyBenefits: [
      'Mendapatkan pengunjung organik tanpa harus terus-menerus membayar biaya iklan',
      'Skor Google PageSpeed Insights hijau stabil (95–100 poin di ponsel & desktop)',
      'Rich Snippets bintang ulasan dan sitelinks muncul di hasil pencarian Google',
      'Struktur sitemap dan robots.txt bersih bebas dari error crawl indexing',
    ],
    standardFeatures: [
      { title: 'Kecepatan yang diukur', desc: 'Pemenuhan 3 metrik Core Web Vitals (LCP < 1.2s, INP < 100ms, CLS = 0).', iconName: 'Gauge' },
      { title: 'SEO teknis sejak awal', desc: 'Audit menyeluruh struktur tag H1-H3, alt text gambar, dan internal links.', iconName: 'Search' },
      { title: 'Siap multi bahasa', desc: 'Pemasangan tag hreflang resmi untuk pemisahan target geografis pembaca.', iconName: 'Languages' },
      { title: 'CMS yang mudah dipakai', desc: 'Panduan menulis artikel yang ramah SEO untuk tim marketing Anda.', iconName: 'LayoutGrid' },
      { title: 'Keamanan dan backup', desc: 'Pemberian sertifikat SSL dan penanganan header keamanan (CSP, HSTS).', iconName: 'ShieldCheck' },
      { title: 'Tracking konversi', desc: 'Monitoring ranking kata kunci dan tayangan di Google Search Console.', iconName: 'Target' },
    ],
    deliverables: [
      {
        title: 'Cakupan Audit & Eksekusi',
        items: [
          'Pemangkasan JavaScript yang tidak terpakai (tree-shaking)',
          'Kompresi gambar masal ke WebP dan penerapan lazy-loading cerdas',
          'Pemasangan Schema LocalBusiness / Product / Article JSON-LD',
          'Laporan komprehensif Before-After perbaikan kecepatan dan SEO',
        ],
      },
    ],
    workflow: [
      { step: 1, title: 'Audit Kesehatan Teknis Web', desc: 'Menganalisis skor PageSpeed dan error indexing.', duration: 'Hari 1-2' },
      { step: 2, title: 'Refaktor Kode & Optimasi Aset', desc: 'Membersihkan CSS/JS gemuk dan caching.', duration: 'Hari 3-4' },
      { step: 3, title: 'Validasi Ulang & Submit Google', desc: 'Request re-index ke Google Search Console.', duration: 'Hari ke-5' },
    ],
    techStack: ['Google Search Console', 'PageSpeed Insights', 'Next.js', 'Cloudflare Caching'],
    faqs: [
      {
        question: 'Apakah hasil peningkatan skor PageSpeed terbukti permanen?',
        answer: 'Ya, karena optimasi dilakukan pada fondasi kode sumber (source code) dan arsitektur server, bukan sekadar menggunakan plugin sementara.',
      },
    ],
  },

  // =========================================================================
  // KATEGORI: INFRASTRUKTUR & CLOUD
  // =========================================================================
  {
    id: 'setup-cloud-vps-hardening',
    category: 'infrastruktur',
    categoryLabel: 'INFRASTRUKTUR & CLOUD',
    title: 'Setup Cloud VPS & Hardening Server',
    tagline: 'Server mandiri tangguh, proteksi 5 lapis, zero-trust VPN, dan backup otomatis',
    price: 'Mulai Rp 1.500.000',
    duration: '2 - 4 Hari Kerja',
    iconName: 'Server',
    badge: 'Zero-Trust Security',
    overview:
      'Bebaskan bisnis Anda dari ketergantungan shared-hosting yang lambat dan rawan tersusupi malware. Kami siapkan Cloud VPS mandiri (Ubuntu Linux) dengan konfigurasi Docker, firewall 5 lapis, dan proteksi Zero-Trust VPN.',
    keyBenefits: [
      'Website berjalan di server privat tanpa berbagi resource RAM/CPU dengan pihak lain',
      'Proteksi 5 lapis Fitran Dev: Cloudflare WAF, Caddy Reverse Proxy, UFW, Tailscale VPN, dan Fail2ban',
      'Port SSH tidak dibuka ke publik bebas dari serangan brute-force bot jahat',
      'Backup database berkala terenkripsi otomatis dikirimkan ke cloud storage cadangan',
    ],
    standardFeatures: [
      { title: 'Kecepatan yang diukur', desc: 'Performa CPU dedicated dan RAM optimal untuk traffic tinggi.', iconName: 'Gauge' },
      { title: 'SEO teknis sejak awal', desc: 'Uptime server 99.9% menjamin Googlebot selalu berhasil mengakses situs.', iconName: 'Search' },
      { title: 'Siap multi bahasa', desc: 'Lokasi server fleksibel di Singapura atau Jakarta untuk latensi terendah.', iconName: 'Languages' },
      { title: 'CMS & Manajemen Data', desc: 'Akses portainer / container manajemen mudah dipantau.', iconName: 'LayoutGrid' },
      { title: 'Keamanan dan backup', desc: '5 Lapisan Keamanan Server resmi standar industri manufaktur.', iconName: 'ShieldCheck' },
      { title: 'Tracking & Telemetri', desc: 'Alert notifikasi otomatis ke Telegram jika penggunaan RAM/CPU melewati batas.', iconName: 'Target' },
    ],
    deliverables: [
      {
        title: 'Komponen Pengerasan (Hardening)',
        items: [
          'Instalasi OS Linux Ubuntu LTS terbaru dengan patch keamanan berkala',
          'Konfigurasi Docker & Docker Compose untuk isolasi aplikasi',
          'Pemasangan Caddy Server dengan sertifikat SSL otomatis zero-config',
          'Penerapan WireGuard / Tailscale VPN untuk remote akses privat aman',
          'Setup script backup database harian terenkripsi ke Google Drive / S3',
        ],
      },
    ],
    workflow: [
      { step: 1, title: 'Provisioning Server Cloud', desc: 'Pemilihan provider VPS terbaik (Hetzner, DigitalOcean, IDCloudHost).', duration: 'Hari ke-1' },
      { step: 2, title: 'Hardening & Konfigurasi Firewall', desc: 'Penutupan port publik dan setup Tailscale VPN.', duration: 'Hari ke-2' },
      { step: 3, title: 'Deploy Aplikasi & Container', desc: 'Pemasangan database, reverse proxy, dan web app.', duration: 'Hari ke-3' },
      { step: 4, title: 'Uji Penetrasi & Serah Terima Kunci', desc: 'Simulasi audit kerentanan dan penyerahan kredensial.', duration: 'Hari ke-4' },
    ],
    techStack: ['Ubuntu Linux', 'Docker', 'Caddy Server', 'Tailscale WireGuard', 'Fail2ban', 'UFW'],
    faqs: [
      {
        question: 'Berapa biaya sewa server VPS per bulannya?',
        answer: 'Sangat terjangkau. VPS berkualitas tinggi mulai dari Rp 60rb – Rp 150rb per bulan (dibayarkan langsung ke penyedia VPS pilihan Anda tanpa markup).',
      },
    ],
  },
  {
    id: 'otomasi-workflow-n8n',
    category: 'infrastruktur',
    categoryLabel: 'INFRASTRUKTUR & CLOUD',
    title: 'Otomasi Workflow n8n & Webhooks',
    tagline: 'Otomatisasi pertukaran data antar Google Sheets, WhatsApp, CRM, dan database tanpa koding',
    price: 'Mulai Rp 1.800.000',
    duration: '3 - 5 Hari Kerja',
    iconName: 'Workflow',
    badge: 'Hemat Ratusan Jam',
    overview:
      'Solusi otomasi alur kerja mandiri menggunakan self-hosted n8n: mengeliminasi biaya langganan Zapier atau Make yang mahal. Hubungkan seluruh aplikasi operasional bisnis Anda untuk bekerja secara otomatis tanpa intervensi manual.',
    keyBenefits: [
      'Hemat biaya langganan bulanan software integrasi hingga jutaan rupiah per tahun',
      'Pemberitahuan otomatis ke grup WhatsApp tim saat ada pembayaran masuk',
      'Sinkronisasi data formulir prospek langsung menjadi baris baru di spreadsheet dan CRM',
      'Pengiriman invoice PDF otomatis ke nomor WhatsApp pelanggan setelah verifikasi transfer',
    ],
    standardFeatures: [
      { title: 'Kecepatan yang diukur', desc: 'Eksekusi workflow instan hitungan detik begitu webhook terpicu.', iconName: 'Gauge' },
      { title: 'SEO teknis sejak awal', desc: 'Membantu update sitemap otomatis saat ada postingan produk baru.', iconName: 'Search' },
      { title: 'Siap multi bahasa', desc: 'Format pesan dinamis dapat disesuaikan per segmen pelanggan.', iconName: 'Languages' },
      { title: 'CMS & Manajemen Data', desc: 'Visual workflow canvas yang mudah dibaca alurnya oleh orang non-teknis.', iconName: 'LayoutGrid' },
      { title: 'Keamanan dan backup', desc: 'Data transaksi tersimpan di server mandiri Anda tanpa melewati server pihak ketiga.', iconName: 'ShieldCheck' },
      { title: 'Tracking konversi', desc: 'Pencatatan statistik berapa ribu tugas yang berhasil diselesaikan otomatis.', iconName: 'Target' },
    ],
    deliverables: [
      {
        title: 'Cakupan Setup n8n',
        items: [
          'Instalasi self-hosted n8n di Cloud VPS dengan domain kustom ber-SSL',
          'Pembuatan hingga 5 alur otomasi kompleks (e.g., Pesanan -> Notifikasi WA -> Faktur PDF)',
          'Pemasangan webhook listener terproteksi API Key',
          'Dokumentasi cara menambah atau mengedit alur kerja n8n mandiri',
        ],
      },
    ],
    workflow: [
      { step: 1, title: 'Pemetaan Alur Operasional', desc: 'Mencatat tugas manual harian yang paling menyita waktu.', duration: 'Hari 1-2' },
      { step: 2, title: 'Setup Instance n8n & Workflow', desc: 'Penyusunan node integrasi dan formula transformasi.', duration: 'Hari 3-4' },
      { step: 3, title: 'Uji Kirim Data & Serah Terima', desc: 'Simulasi alur transaksi nyata dan pelatihan admin.', duration: 'Hari ke-5' },
    ],
    techStack: ['n8n Self-Hosted', 'Docker', 'Webhooks', 'WhatsApp API', 'Google Sheets API'],
    faqs: [
      {
        question: 'Apakah ada batasan kuota task seperti di Zapier?',
        answer: 'Tidak ada batasan (Unlimited tasks) karena n8n di-hosting di VPS mandiri Anda sendiri tanpa batasan kuota per bulan.',
      },
    ],
  },
];
