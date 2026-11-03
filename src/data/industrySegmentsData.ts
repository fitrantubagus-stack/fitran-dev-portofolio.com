export interface IndustrySegment {
  slug: string;
  title: string;
  targetSubtitle: string;
  categoryBadge: string;
  heroPhoto: string;
  photoAlt: string;
  heroTagline: string;
  summary: string;
  roiHighlight: {
    stat: string;
    label: string;
    explanation: string;
  };
  painPoints: {
    iconName: string;
    title: string;
    desc: string;
  }[];
  solutions: {
    iconName: string;
    title: string;
    desc: string;
    metrics: string;
  }[];
  keyFeatures: {
    title: string;
    desc: string;
    iconName: string;
    tag: string;
  }[];
  workflowSteps: {
    step: string;
    title: string;
    desc: string;
    duration: string;
  }[];
  techStack: string[];
  deliverables: {
    title: string;
    items: string[];
  }[];
  pricingTiers: {
    name: string;
    price: string;
    badge?: string;
    features: string[];
    ctaText: string;
  }[];
  faq: {
    q: string;
    a: string;
  }[];
}

export const INDUSTRY_SEGMENTS_DATA: Record<string, IndustrySegment> = {
  'bisnis-kuliner': {
    slug: 'bisnis-kuliner',
    title: 'Website & Sistem Digital Bisnis Kuliner',
    targetSubtitle: 'Restoran, Coffee Shop, Kafe Modern, Cloud Kitchen, Bakery & Franchise F&B',
    categoryBadge: 'F&B & Kuliner',
    heroPhoto: '/reference-mobile-desk.jpg',
    photoAlt: 'Setup meja kerja modern untuk operasional bisnis kuliner',
    heroTagline: 'Hemat Biaya Potongan Ojol 20-30% dengan Saluran Pemesanan Mandiri & Menu Digital QR',
    summary:
      'Solusi website restoran dan kafe yang dirancang khusus untuk memotong ketergantungan pada komisi aplikasi ojek online. Dilengkapi menu digital interaktif, sistem takeaway/delivery langsung ke WhatsApp kasir, reservasi meja instan, serta integrasi QRIS dinamis tanpa biaya bulanan memberatkan.',
    roiHighlight: {
      stat: '0% Komisi',
      label: 'Margin Penjualan Utuh',
      explanation: 'Setiap pesanan delivery dan takeaway masuk 100% langsung ke rekening usaha Anda tanpa potongan komisi pihak ketiga.'
    },
    painPoints: [
      {
        iconName: 'Percent',
        title: 'Margin Tergerus Komisi Ojol 20-35%',
        desc: 'Bergantung sepenuhnya pada platform aggregator membuat laba bersih F&B tipis karena biaya merchant yang terus meningkat.'
      },
      {
        iconName: 'Clock',
        title: 'Buku Menu Fisik Rentan Rusak & Mahal Cetak Ulang',
        desc: 'Setiap pergantian harga atau menu musiman memerlukan cetak ulang ratusan lembar buku menu yang memakan biaya dan waktu.'
      },
      {
        iconName: 'UserX',
        title: 'Tidak Memiliki Database Pelanggan Setia',
        desc: 'Aplikasi pihak ketiga tidak memberikan nomor telepon atau preferensi pelanggan, sehingga Anda tidak bisa melakukan retargeting promo.'
      },
      {
        iconName: 'PhoneCall',
        title: 'Kasir Repot Mengetik Ulang Pesanan WhatsApp',
        desc: 'Chat WhatsApp dari pelanggan sering bertumpuk, salah catat menu, atau lambat dibalas saat jam sibuk operasional.'
      }
    ],
    solutions: [
      {
        iconName: 'QrCode',
        title: 'Buku Menu Digital QR Meja Dinamis',
        desc: 'Tamu cukup scan QR di meja untuk melihat foto hidangan beresolusi tajam, deskripsi bahan, varian level pedas/topping, dan promo aktif.',
        metrics: 'Update menu & harga dalam 10 detik tanpa cetak ulang'
      },
      {
        iconName: 'ShoppingBag',
        title: 'Sistem Pesan Delivery Mandiri ke WhatsApp',
        desc: 'Pelanggan memilih menu, memasukkan alamat kirim, lalu pesanan terformat rapi dikirimkan langsung ke nomor WhatsApp kasir atau kitchen printer.',
        metrics: '100% margin pesanan delivery menjadi milik restoran Anda'
      },
      {
        iconName: 'CalendarCheck',
        title: 'Sistem Reservasi Meja & VIP Room',
        desc: 'Formulir booking tanggal, jam, jumlah pax, dan DP reservasi dengan notifikasi WhatsApp konfirmasi otomatis kepada pelanggan dan staf.',
        metrics: 'Mengurangi no-show tamu hingga 85%'
      },
      {
        iconName: 'Database',
        title: 'Database Pelanggan & Loyalty Program',
        desc: 'Mencatat riwayat nomor kontak pelanggan secara rapi untuk broadcast promo ulang tahun, menu baru, atau cashback weekend.',
        metrics: 'Tingkatkan repeat order tamu lama hingga 40%'
      }
    ],
    keyFeatures: [
      {
        title: 'Katalog Menu Interaktif & Multi Varian',
        desc: 'Mendukung opsi suhu (hot/iced), ukuran (regular/large), level gula, topping tambahan, dan catatan khusus alergen.',
        iconName: 'Layers',
        tag: 'F&B Engine'
      },
      {
        title: 'Integrasi Pembayaran QRIS Dinamis & Transfer',
        desc: 'Tamu bisa langsung bayar via QRIS atau transfer bank dengan verifikasi bukti bayar otomatis.',
        iconName: 'CreditCard',
        tag: 'Payment Gateway'
      },
      {
        title: 'Status Buka / Tutup Toko Otomatis',
        desc: 'Tombol order otomatis nonaktif saat di luar jam operasional dapur atau saat stok menu harian habis.',
        iconName: 'Clock',
        tag: 'Smart Automation'
      },
      {
        title: 'Kecepatan Muat Ekstra Kilat (<0.6 Detik)',
        desc: 'Dioptimalkan agar tamu yang sedang kelaparan tidak menunggu lama saat membuka menu dengan kuota seluler minim.',
        iconName: 'Zap',
        tag: 'Core Web Vitals'
      }
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Audit Menu & Alur Operasional',
        desc: 'Pengumpulan foto menu, daftar harga, alur dapur (dine-in, takeaway, delivery), dan nomor WhatsApp penerima order.',
        duration: 'Hari ke 1-2'
      },
      {
        step: '02',
        title: 'Desain UI/UX Selaras Branding Resto',
        desc: 'Penyusunan antarmuka visual bernuansa selera makan, tipografi elegan, dan kemudahan tombol navigasi satu jempol.',
        duration: 'Hari ke 3-5'
      },
      {
        step: '03',
        title: 'Integrasi Checkout & Format WA Kasir',
        desc: 'Konfigurasi format struk pesanan digital WhatsApp, tombol cetak bluetooth thermal, dan integrasi QRIS.',
        duration: 'Hari ke 6-8'
      },
      {
        step: '04',
        title: 'Uji Coba Lapangan & Serah Terima QR Meja',
        desc: 'Simulasi order meja penuh, training kasir, dan penyerahan file cetak stiker akrilik QR meja siap pakai.',
        duration: 'Hari ke 9-10'
      }
    ],
    techStack: ['Next.js 15', 'Tailwind CSS', 'WhatsApp Cloud Webhook', 'Midtrans / QRIS Dinamis', 'Cloudflare CDN', 'PostgreSQL'],
    deliverables: [
      {
        title: 'Aset Digital & Web',
        items: [
          'Website resmi F&B full responsive (Desktop, Tablet, Mobile)',
          'Menu digital QR meja dengan panel admin update harga',
          'Sistem checkout keranjang WhatsApp otomatis',
          'Formulir reservasi meja & notifikasi real-time'
        ]
      },
      {
        title: 'Aset Fisik & Operasional',
        items: [
          'Master file desain stiker/akrilik QR Code meja siap cetak',
          'Panduan video operasional untuk staf kasir',
          'SOP penanganan pesanan delivery mandiri',
          'Garansi teknis & pendampingan operasional 30 hari'
        ]
      }
    ],
    pricingTiers: [
      {
        name: 'Paket Starter Kafe',
        price: 'Rp 1.450.000',
        badge: 'Untuk Kafe & Kedai Kopi',
        features: [
          'Website profil resto & alamat Google Maps',
          'Menu digital QR hingga 60 item menu',
          'Tombol pesan WhatsApp ke 1 nomor kasir',
          'Domain .com & hosting SSD 1 tahun',
          'Desain stiker QR meja siap cetak'
        ],
        ctaText: 'Pilih Paket Starter Kafe'
      },
      {
        name: 'Paket Pro Resto & Delivery',
        price: 'Rp 2.950.000',
        badge: 'Paling Diminati Resto & FnB',
        features: [
          'Semua fitur Starter Kafe',
          'Unlimited menu & multi varian topping/level',
          'Sistem keranjang belanja WhatsApp otomatis',
          'Sistem booking & reservasi meja online',
          'Integrasi QRIS pembayaran instan',
          'Routing pesanan ke 2 nomor kasir/dapur'
        ],
        ctaText: 'Pilih Paket Pro Resto'
      },
      {
        name: 'Paket Multi-Outlet & Franchise',
        price: 'Rp 5.800.000',
        badge: 'Franchise & Multi-Cabang',
        features: [
          'Semua fitur Pro Resto',
          'Dukungan multi-cabang (pilih cabang terdekat)',
          'Panel manajemen stok & ketersediaan per cabang',
          'Database pelanggan tersentralisasi',
          'Integrasi printer thermal kasir otomatis',
          'Dedicated support prioritas 12 bulan'
        ],
        ctaText: 'Konsultasi Multi Cabang'
      }
    ],
    faq: [
      {
        q: 'Apakah saya bisa mengubah harga dan menambah foto menu sendiri?',
        a: 'Tentu bisa. Kami menyediakan panel admin yang sangat mudah digunakan lewat smartphone, sehingga Anda atau staf resto bisa menambah menu baru atau mengubah harga kapan saja tanpa butuh keahlian koding.'
      },
      {
        q: 'Bagaimana alur pesanan masuk ke WhatsApp kasir?',
        a: 'Saat tamu klik "Kirim Pesanan", sistem otomatis menyusun format pesan rapi berisi nama pemesan, nomor meja/alamat, rincian menu beserta variannya, total bayar, dan link verifikasi bayar sehingga kasir tinggal konfirmasi dengan satu sentuhan.'
      },
      {
        q: 'Apakah bisa digunakan untuk banyak meja di restoran?',
        a: 'Bisa. Kami akan membuatkan QR code unik untuk setiap meja (misal Meja 01 s/d Meja 30), sehingga pesanan yang masuk langsung mencantumkan nomor meja tamu secara otomatis.'
      }
    ]
  },

  'retail-lokal': {
    slug: 'retail-lokal',
    title: 'Website & Toko Online Retail Lokal',
    targetSubtitle: 'Toko Fashion, Distro, Gadget, Oleh-Oleh Khas, Toko Buku, Kosmetik & Home Living',
    categoryBadge: 'Retail & E-Commerce',
    heroPhoto: '/reference-web-design-sketch.png',
    photoAlt: 'Sketsa konsep website katalog toko online retail lokal',
    heroTagline: 'Toko Online Berkecepatan Tinggi dengan Hitung Ongkir Otomatis & Checkout WhatsApp',
    summary:
      'Tingkatkan skala penjualan toko retail Anda melampaui batas geografis. Hadirkan website toko online profesional berkecepatan tinggi dengan hitung ongkir kurir nasional (JNE, J&T, SiCepat, Anteraja), katalog variasi ukuran/warna, dan alur checkout langsung ke WhatsApp tanpa potongan admin marketplace.',
    roiHighlight: {
      stat: '0% Biaya Admin',
      label: 'Hemat Fee Marketplace 5-10%',
      explanation: 'Hilangkan potongan biaya layanan marketplace yang terus naik. Bangun basis pelanggan setia di channel toko milik Anda sendiri.'
    },
    painPoints: [
      {
        iconName: 'BadgePercent',
        title: 'Biaya Admin Marketplace Menggerus Keuntungan',
        desc: 'Potongan marketplace yang terus melonjak hingga 6-12% membuat penjual retail kesulitan mempertahankan harga bersaing.'
      },
      {
        iconName: 'Calculator',
        title: 'Admin Toko Lelah Hitung Ongkir Manual Tiap Menit',
        desc: 'Pelanggan sering membatalkan transaksi karena harus menunggu admin membalas total ongkir ke kecamatan tujuan.'
      },
      {
        iconName: 'Layers',
        title: 'Stok Varian Warna & Ukuran Sering Selisih',
        desc: 'Penjualan manual di chat WhatsApp rawan terjadi over-selling pada ukuran atau warna yang sebenarnya sudah habis.'
      },
      {
        iconName: 'ShieldAlert',
        title: 'Toko Rentan Kena Penalti / Suspend Sepihak',
        desc: 'Menaruh seluruh aset bisnis di platform milik orang lain berisiko tinggi saat akun terkena moderasi algoritma.'
      }
    ],
    solutions: [
      {
        iconName: 'Truck',
        title: 'Kalkulator Ongkir Otomatis Multi-Ekspedisi',
        desc: 'Sistem terhubung langsung ke tarif resmi JNE, J&T, SiCepat, POS, dan kurir instan berdasarkan kecamatan tujuan.',
        metrics: 'Pelanggan langsung tahu total belanja + ongkir seketika'
      },
      {
        iconName: 'ShoppingBag',
        title: 'Checkout Keranjang WhatsApp Terformat Rapih',
        desc: 'Detail barang, SKU varian, alamat lengkap, pilihan ekspedisi, dan total tagihan tersusun rapi dalam satu pesan kirim.',
        metrics: 'Admin toko closing 3x lebih cepat tanpa tanya jawab berulang'
      },
      {
        iconName: 'Boxes',
        title: 'Manajemen Varian & Status Stok Real-Time',
        desc: 'Dukungan multi-varian (Warna, Ukuran S/M/L/XL, Bahan) dengan indikator stok habis otomatis.',
        metrics: 'Nol kesalahan kirim varian pesanan'
      },
      {
        iconName: 'Share2',
        title: 'Katalog Siap Iklan Meta Ads & TikTok Shop',
        desc: 'Dilengkapi integrasi Meta Pixel, Conversions API (CAPI), dan Google Analytics 4 untuk optimasi retargeting iklan.',
        metrics: 'ROAS iklan meningkat berkat akurasi pelacakan purchase'
      }
    ],
    keyFeatures: [
      {
        title: 'Fitur Cari & Filter Produk Cepat',
        desc: 'Pelanggan bisa memfilter produk berdasarkan kategori, rentang harga, ketersediaan ukuran, dan produk terlaris.',
        iconName: 'Search',
        tag: 'Search Engine'
      },
      {
        title: 'Integrasi Multi-Payment Gateway',
        desc: 'Mendukung QRIS, Virtual Account BCA/Mandiri/BRI, Alfamart/Indomaret, serta COD aman.',
        iconName: 'CreditCard',
        tag: 'Payment System'
      },
      {
        title: 'Banner Flash Sale & Kode Kupon Diskon',
        desc: 'Buat kupon potongan persen atau nominal tertentu dengan batas kuota penggunaan untuk promo tanggal kembar.',
        iconName: 'Tag',
        tag: 'Marketing Tools'
      },
      {
        title: 'Mobile First & Ringan (<0.7s Load Time)',
        desc: 'Sangat enteng dibuka di semua jenis ponsel pintar pelanggan tanpa boros kuota data.',
        iconName: 'Smartphone',
        tag: 'High Performance'
      }
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Katalog & Struktur Kategori Produk',
        desc: 'Pendataan daftar produk, varian ukuran/warna, bobot gram, dan penentuan ekspedisi yang digunakan.',
        duration: 'Hari ke 1-3'
      },
      {
        step: '02',
        title: 'Desain Etalase Modern & Brand Identity',
        desc: 'Rancangan tampilan visual storefront modern yang menonjolkan foto produk dengan estetika bersih.',
        duration: 'Hari ke 4-6'
      },
      {
        step: '03',
        title: 'Integrasi API Ongkos Kirim & WhatsApp',
        desc: 'Penyambungan database tarif ekspedisi nasional, API WhatsApp, dan payment gateway.',
        duration: 'Hari ke 7-9'
      },
      {
        step: '04',
        title: 'Uji Coba Transaksi & Training Admin Toko',
        desc: 'Simulasi checkout riil, uji coba perhitungan berat paket, dan pelatihan dashboard admin.',
        duration: 'Hari ke 10-12'
      }
    ],
    techStack: ['Next.js 15', 'Tailwind CSS', 'RajaOngkir / Kurir API', 'WhatsApp Cloud API', 'PostgreSQL', 'Cloudflare Cache'],
    deliverables: [
      {
        title: 'Toko Online Lengkap',
        items: [
          'Website toko online modern responsif dengan domain .com/id',
          'Sistem keranjang belanja & hitung ongkir otomatis',
          'Panel admin manajemen produk, stok, dan pesanan',
          'Integrasi Meta Pixel CAPI & Google Analytics 4'
        ]
      },
      {
        title: 'Dokumentasi & Support',
        items: [
          'Video panduan input produk & update stok barang',
          'Template copywriting balasan cepat admin WhatsApp',
          'Maintenance & backup server mingguan selama 1 tahun',
          'Garansi perbaikan bug & konsultasi gratis'
        ]
      }
    ],
    pricingTiers: [
      {
        name: 'Paket Katalog Retail',
        price: 'Rp 1.850.000',
        badge: 'Untuk Usaha Retail Rintisan',
        features: [
          'Website katalog online hingga 100 produk',
          'Checkout langsung ke nomor WhatsApp admin',
          'Kategori & filter produk praktis',
          'Domain .com & hosting berkecepatan tinggi 1 tahun',
          'Integrasi tombol chat WhatsApp mengambang'
        ],
        ctaText: 'Mulai Toko Retail'
      },
      {
        name: 'Paket Pro E-Commerce Otomatis',
        price: 'Rp 3.650.000',
        badge: 'Paling Populer untuk Brand Retail',
        features: [
          'Semua fitur Paket Katalog Retail',
          'Kalkulator ongkir otomatis (JNE, J&T, SiCepat, dll)',
          'Sistem multi varian warna & ukuran dengan stok real-time',
          'Fitur kupon diskon & banner promo flash sale',
          'Integrasi Meta Pixel & CAPI untuk iklan konversi',
          'Dukungan multi-admin WhatsApp customer service'
        ],
        ctaText: 'Pilih Paket Pro E-Commerce'
      },
      {
        name: 'Paket Enterprise Omnichannel',
        price: 'Rp 6.900.000',
        badge: 'Retail Skala Besar & Gudang',
        features: [
          'Semua fitur Paket Pro E-Commerce',
          'Integrasi payment gateway QRIS & Virtual Account',
          'Dukungan sinkronisasi stok multi-gudang / cabang',
          'Sistem cetak label alamat paket otomatis',
          'Custom report omset & analitik penjualan',
          'Prioritas dedicated server & SLA response 2 jam'
        ],
        ctaText: 'Konsultasi Solusi Omnichannel'
      }
    ],
    faq: [
      {
        q: 'Apakah ongkos kirim kurir terupdate secara otomatis?',
        a: 'Ya, sistem kami terintegrasi dengan database tarif ekspedisi nasional terkini (JNE, J&T, SiCepat, Wahana, POS, dll) yang menghitung ongkir secara presisi berdasarkan berat gram produk dan kecamatan tujuan.'
      },
      {
        q: 'Apakah saya bisa menerima pembayaran transfer bank dan QRIS?',
        a: 'Bisa. Kami dapat mengintegrasikan payment gateway berizin Bank Indonesia (seperti Midtrans atau Xendit) sehingga pelanggan bisa membayar lewat QRIS atau Virtual Account dengan status bayar terverifikasi otomatis.'
      },
      {
        q: 'Berapa banyak produk yang bisa saya upload?',
        a: 'Tidak ada batasan jumlah produk. Anda bebas mengunggah ratusan hingga ribuan produk melalui dashboard admin yang user-friendly.'
      }
    ]
  },

  'manufaktur-b2b': {
    slug: 'manufaktur-b2b',
    title: 'Website & Portal Penjualan Manufaktur B2B',
    targetSubtitle: 'Pabrik Industri, Distributor Grosir, Supplier Bahan Baku, Bengkel Fabrikasi & Kontraktor EPC',
    categoryBadge: 'Manufaktur & B2B',
    heroPhoto: '/reference-team-wireframing.png',
    photoAlt: 'Kolaborasi tim dalam merancang alur sistem manufaktur dan rantai pasok B2B',
    heroTagline: 'Tingkatkan Kredibilitas Tender dengan Profil Korporat Berstandar Global & Portal RFQ Otomatis',
    summary:
      'Solusi digital komprehensif untuk industri manufaktur, produsen, dan distributor B2B. Dilengkapi etalase spesifikasi teknis mesin/produk berstandar ISO, formulir Request for Quotation (RFQ) cerdas penghasil draft penawaran PDF otomatis, serta portal verifikasi legalitas izin usaha untuk memenangkan tender bernilai miliaran rupiah.',
    roiHighlight: {
      stat: '5x Lead B2B',
      label: 'Kualifikasi Prospek Proyek',
      explanation: 'Formulir RFQ terstruktur memfilter calon pembeli eceran dan hanya meneruskan inquiry proyek B2B bermargin tinggi ke tim sales.'
    },
    painPoints: [
      {
        iconName: 'FileX',
        title: 'Kalah Saing Saat Verifikasi Tender Korporat & BUMN',
        desc: 'Perusahaan skala besar dan BUMN mewajibkan vendor memiliki website profesional yang memuat sertifikasi ISO, K3, dan portofolio proyek terverifikasi.'
      },
      {
        iconName: 'Clock',
        title: 'Tim Sales Membuang Waktu Buat Penawaran Eceran',
        desc: 'Inquiry yang masuk sering kali tidak jelas volumenya, menyebabkan sales engineer sibuk menghitung estimasi untuk pembeli yang tidak qualified.'
      },
      {
        iconName: 'Download',
        title: 'Katalog PDF Spesifikasi Teknis Sulit Ditemukan',
        desc: 'Buyer teknis dan purchasing engineer kesulitan mengunduh lembar spesifikasi (datasheet) produk, sehingga beralih ke kompetitor.'
      },
      {
        iconName: 'Globe',
        title: 'Tidak Muncul di Pencarian Buyer Internasional & Nasional',
        desc: 'Tanpa optimasi SEO B2B industri, pabrik Anda tidak akan pernah ditemukan oleh procurement officer yang mencari supplier lokal.'
      }
    ],
    solutions: [
      {
        iconName: 'FileSpreadsheet',
        title: 'Sistem Formulir RFQ (Request for Quotation) Cerdas',
        desc: 'Calon buyer wajib mengisi estimasi volume (MOQ), spesifikasi material, deadline proyek, dan upload gambar teknik CAD/PDF.',
        metrics: 'Inquiry B2B tersaring 100% terstruktur & siap hitung tim sales'
      },
      {
        iconName: 'Award',
        title: 'Ruang Sertifikasi Kredibilitas & Legalitas Resmi',
        desc: 'Halaman khusus yang menampilkan dokumen ISO 9001/14001/45001, TKDN, SNI, dan NIB dengan viewer interaktif tanpa harus download.',
        metrics: 'Lolos uji verifikasi awal vendor list rekanan korporat'
      },
      {
        iconName: 'FileText',
        title: 'Datasheet & Technical Drawing Download Hub',
        desc: 'Portal pengunduhan brosur spesifikasi teknis produk yang meminta email dan nomor WhatsApp buyer sebagai prospek terdaftar.',
        metrics: 'Mengumpulkan database procurement officer secara otomatis'
      },
      {
        iconName: 'Search',
        title: 'SEO B2B Kata Kunci Industri Spesifik',
        desc: 'Optimasi struktur metadata Google untuk istilah pencarian teknis seperti "pabrik injection molding", "supplier pipa baja industri", dsb.',
        metrics: 'Mendatangkan prospek organik berkualitas tanpa biaya iklan harian'
      }
    ],
    keyFeatures: [
      {
        title: 'Katalog Produk Spesifikasi Teknis Lengkap',
        desc: 'Menampilkan tabel dimensi, toleransi milimeter, material grade, kapasitas produksi per bulan, dan standar uji laboratorium.',
        iconName: 'Layers',
        tag: 'Technical Spec'
      },
      {
        title: 'Dukungan Multi-Bahasa (ID & EN)',
        desc: 'Membuka peluang ekspor ke pasar mancanegara dengan peralihan bahasa Indonesia dan Inggris instan.',
        iconName: 'Globe',
        tag: 'Export Ready'
      },
      {
        title: 'Galeri Fasilitas Pabrik & Mesin Produksi',
        desc: 'Menampilkan foto dan video fasilitas workshop, mesin CNC, jalur perakitan, dan laboratorium uji kendali mutu (QC).',
        iconName: 'Building2',
        tag: 'Factory Tour'
      },
      {
        title: 'Keamanan Data & Enkripsi SSL Perusahaan',
        desc: 'Melindungi dokumen penawaran harga dan gambar teknik CAD dari kebocoran pihak ketiga dengan standar ISO/IEC 27001.',
        iconName: 'ShieldCheck',
        tag: 'Enterprise Security'
      }
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Pengumpulan Portofolio & Spesifikasi Industri',
        desc: 'Inventarisasi jenis produk, kapasitas pabrik, sertifikasi mutu, daftar klien korporat, dan parameter formulir RFQ.',
        duration: 'Minggu ke 1'
      },
      {
        step: '02',
        title: 'Arsitektur Informasi & Prototipe UI B2B',
        desc: 'Penyusunan wireframe berwibawa khas korporasi industri global, mengedepankan ketegasan, kestabilan, dan trust.',
        duration: 'Minggu ke 2'
      },
      {
        step: '03',
        title: 'Pengembangan Portal RFQ & Download Hub',
        desc: 'Koding sistem formulir penawaran bertingkat, penataan database lembar spesifikasi, dan integrasi notifikasi email sales.',
        duration: 'Minggu ke 3'
      },
      {
        step: '04',
        title: 'Audit SEO Industri & Peluncuran Resmi',
        desc: 'Pengecekan indeks Google Search Console, pengujian kecepatan muat, dan penyerahan dokumentasi CMS ke staf IT internal.',
        duration: 'Minggu ke 4'
      }
    ],
    techStack: ['Next.js 15 Enterprise', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Resend Email API', 'Cloudflare Enterprise'],
    deliverables: [
      {
        title: 'Platform Korporat B2B',
        items: [
          'Website profil pabrik & manufaktur berstandar korporasi global',
          'Sistem formulir Request for Quotation (RFQ) bertingkat',
          'Portal unduh datasheet teknis berpagar form prospek',
          'Halaman legalitas & sertifikasi mutu interaktif'
        ]
      },
      {
        title: 'Aset Penjualan & Panduan',
        items: [
          'Email notifikasi otomatis ke tim sales saat ada RFQ baru',
          'Panduan pemeliharaan konten dan upload berkas datasheet',
          'Laporan audit performa SEO industri terindeks Google',
          'Dukungan SLA pemeliharaan server 12 bulan'
        ]
      }
    ],
    pricingTiers: [
      {
        name: 'Paket Company Profile B2B',
        price: 'Rp 3.500.000',
        badge: 'Profil Korporat Kredibel',
        features: [
          'Website korporat modern hingga 7 halaman utama',
          'Showcase fasilitas pabrik & sertifikasi mutu',
          'Formulir kontak & inquiry WhatsApp B2B',
          'Domain korporat (.com / .co.id) & SSL resmi',
          'Integrasi Google Maps lokasi pabrik & kantor'
        ],
        ctaText: 'Pilih Profil Korporat'
      },
      {
        name: 'Paket Pro Manufaktur & RFQ Portal',
        price: 'Rp 6.800.000',
        badge: 'Standar Industri & Tender',
        features: [
          'Semua fitur Company Profile B2B',
          'Katalog produk teknis dengan tabel spesifikasi & toleransi',
          'Sistem formulir RFQ bertahap dengan upload file CAD/PDF',
          'Download center datasheet berpagar data kontak buyer',
          'Dukungan multi-bahasa (Indonesia & English)',
          'Optimasi SEO on-page kata kunci industri spesifik'
        ],
        ctaText: 'Pilih Paket Pro Manufaktur'
      },
      {
        name: 'Paket Enterprise Supplier Portal',
        price: 'Rp 14.500.000',
        badge: 'Pabrik Skala Besar & Ekspor',
        features: [
          'Semua fitur Pro Manufaktur',
          'Portal akun rekanan (Vendor & Buyer Login)',
          'Sistem tracking status produksi pesanan PO',
          'Integrasi webhook ke ERP internal / Google Sheets',
          'Arsitektur headless berkecepatan tinggi & proteksi DDoS',
          'Dedicated account manager & SLA response 1 jam'
        ],
        ctaText: 'Konsultasi Enterprise B2B'
      }
    ],
    faq: [
      {
        q: 'Apakah formulir RFQ bisa disesuaikan dengan alur hitung tim estimasi kami?',
        a: 'Sangat bisa. Kami dapat menyesuaikan setiap kolom input (seperti jenis bahan, dimensi panjang x lebar x tebal, volume order satuan, toleransi, hingga upload file lampiran teknis) agar tim sales langsung menerima data presisi.'
      },
      {
        q: 'Apakah bisa menggunakan domain resmi korporat berakhiran .co.id?',
        a: 'Bisa. Kami akan membantu proses pendaftaran domain .co.id ke PANDI dengan melengkapi syarat legalitas perusahaan (NIB, SIUP, KTP Penanggung Jawab).'
      },
      {
        q: 'Apakah website ini aman dari serangan siber dan pembobolan data?',
        a: 'Kami menerapkan standar keamanan OWASP Top 10, perlindungan Web Application Firewall (WAF) Cloudflare Enterprise, serta enkripsi SSL End-to-End untuk menjaga kerahasiaan dokumen teknis perusahaan Anda.'
      }
    ]
  },

  'komunitas': {
    slug: 'komunitas',
    title: 'Website & Portal Keanggotaan Komunitas',
    targetSubtitle: 'Komunitas Hobi, Asosiasi Profesi, Klub Olahraga, Ikatan Alumni & Organisasi Kepemudaan',
    categoryBadge: 'Komunitas & Asosiasi',
    heroPhoto: '/reference-team-wireframing.png',
    photoAlt: 'Anggota komunitas berdiskusi merancang kegiatan dan kolaborasi organisasi',
    heroTagline: 'Kelola Database Anggota, Iuran Rutin, dan Publikasi Agenda dalam Satu Wadah Digital Terpadu',
    summary:
      'Tingkatkan keterlibatan dan transparansi organisasi Anda. Bangun portal keanggotaan terpusat dengan registrasi online mandiri, pembuatan kartu tanda anggota (KTA) digital ber-QR Code unik, sistem pembayaran iuran terverifikasi otomatis, serta papan pengumuman agenda kegiatan resmi.',
    roiHighlight: {
      stat: '100% Otomatis',
      label: 'Penerbitan KTA Digital',
      explanation: 'Anggota baru langsung mendapatkan Kartu Anggota Digital ber-QR Code sesaat setelah formulir dan iuran diverifikasi sistem.'
    },
    painPoints: [
      {
        iconName: 'Database',
        title: 'Database Anggota Tercecer di Google Form & Excel',
        desc: 'Pengurus kesulitan melacak jumlah anggota aktif, nomor kontak terkini, atau status domisili wilayah cabang.'
      },
      {
        iconName: 'CreditCard',
        title: 'Pengurus Lelah Menagih Iuran Bulanan Manual',
        desc: 'Bendahara harus mengecek mutasi rekening bank satu per satu untuk mencocokkan struk transfer yang dikirim lewat grup chat.'
      },
      {
        iconName: 'IdCard',
        title: 'Biaya Cetak & Kirim Kartu Fisik Member Mahal',
        desc: 'Pembuatan kartu member PVC fisik memakan biaya ratusan ribu per orang dan butuh waktu berminggu-minggu sampai ke alamat tujuan.'
      },
      {
        iconName: 'Megaphone',
        title: 'Informasi Agenda Resmi Tenggelam di Grup Chat',
        desc: 'Pengumuman gathering, musyawarah kerja, atau webinar sering terlewat oleh anggota karena tertimbun ribuan obrolan harian.'
      }
    ],
    solutions: [
      {
        iconName: 'UserCheck',
        title: 'Portal Registrasi Mandiri & KTA Digital Ber-QR',
        desc: 'Calon anggota mendaftar online, upload foto profil, dan langsung mengunduh KTA digital yang memuat QR code verifikasi keaslian.',
        metrics: 'Proses verifikasi anggota baru selesai dalam hitungan menit'
      },
      {
        iconName: 'QrCode',
        title: 'Sistem Iuran QRIS & Virtual Account Otomatis',
        desc: 'Pembayaran uang kas atau iuran tahunan terverifikasi sistem tanpa perlu mengirimkan screenshot bukti transfer ke bendahara.',
        metrics: 'Laporan kas iuran organisasi terdata transparan & real-time'
      },
      {
        iconName: 'Calendar',
        title: 'Kalender Agenda & RSVP Kegiatan Komunitas',
        desc: 'Daftar jadwal meetup, touring, musyawarah, atau workshop dengan tombol konfirmasi kehadiran dan pengingat tanggal.',
        metrics: 'Tingkat kehadiran anggota pada event meningkat signifikan'
      },
      {
        iconName: 'BookOpen',
        title: 'Arsip Anggaran Dasar & Notula Musyawarah',
        desc: 'Perpustakaan digital untuk mengunduh AD/ART organisasi, laporan pertanggungjawaban tahunan, dan sertifikat kegiatan.',
        metrics: 'Kredibilitas tata kelola organisasi diakui oleh pihak eksternal'
      }
    ],
    keyFeatures: [
      {
        title: 'Pemeriksa Keaslian QR Code Anggota',
        desc: 'Pihak luar atau panitia acara cukup scan QR KTA untuk memastikan status keanggotaan aktif tanpa bisa dipalsukan.',
        iconName: 'ShieldCheck',
        tag: 'Anti Fraud'
      },
      {
        title: 'Direktori Anggota & Jejaring Bisnis Member',
        desc: 'Memungkinkan sesama anggota mencari rekanan profesi, keahlian, atau domisili kota untuk memperkuat networking.',
        iconName: 'Layers',
        tag: 'Networking'
      },
      {
        title: 'Pemisahan Hak Akses (Admin vs Anggota)',
        desc: 'Hak akses berjenjang untuk Ketua Umum, Sekretaris, Bendahara, Koordinator Wilayah, dan Anggota Biasa.',
        iconName: 'Lock',
        tag: 'Role Management'
      },
      {
        title: 'Galeri Dokumentasi Foto & Video Kegiatan',
        desc: 'Etalase visual kegiatan komunitas beresolusi tinggi yang terorganisir per tahun dan kota penyelenggaraan.',
        iconName: 'Sparkles',
        tag: 'Media Center'
      }
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Analisis Struktur Organisasi & Aturan KTA',
        desc: 'Penetapan syarat pendaftaran, format penomoran anggota (NPA), skema iuran, dan desain template KTA digital.',
        duration: 'Hari ke 1-3'
      },
      {
        step: '02',
        title: 'Desain Antarmuka Portal Komunitas',
        desc: 'Perancangan layout visual yang membangkitkan rasa bangga, kekeluargaan, dan identitas warna khas komunitas.',
        duration: 'Hari ke 4-6'
      },
      {
        step: '03',
        title: 'Koding Sistem KTA & Pembayaran Iuran',
        desc: 'Pengembangan generator kartu digital SVG-to-Canvas, integrasi payment gateway QRIS, dan formulir pendaftaran.',
        duration: 'Hari ke 7-10'
      },
      {
        step: '04',
        title: 'Migrasi Data Anggota Lama & Sosialisasi',
        desc: 'Impor data anggota dari file Excel/Spreadsheet lama dan pelatihan penggunaan dashboard untuk sekretaris/bendahara.',
        duration: 'Hari ke 11-14'
      }
    ],
    techStack: ['Next.js 15', 'Tailwind CSS', 'Canvas API (KTA Generator)', 'Midtrans Payment', 'PostgreSQL', 'Cloudflare CDN'],
    deliverables: [
      {
        title: 'Sistem Portal Keanggotaan',
        items: [
          'Website resmi komunitas dengan domain kustom (.org / .id / .com)',
          'Formulir pendaftaran anggota online mandiri',
          'Sistem penerbitan Kartu Tanda Anggota (KTA) digital otomatis',
          'Halaman verifikasi scan QR status anggota aktif'
        ]
      },
      {
        title: 'Alat Pengurus & Pelatihan',
        items: [
          'Dashboard admin untuk bendahara dan sekretaris',
          'Panduan ekspor data anggota ke format Excel',
          'SOP penagihan iuran digital terintegrasi QRIS',
          'Dukungan teknis dan konsultasi selama 6 bulan'
        ]
      }
    ],
    pricingTiers: [
      {
        name: 'Paket Komunitas Rintisan',
        price: 'Rp 1.650.000',
        badge: 'Komunitas Hobi & Klub Lokal',
        features: [
          'Website profil komunitas & galeri kegiatan',
          'Formulir pendaftaran anggota ke Google Sheet',
          'Kalender agenda & jadwal meetup bulanan',
          'Domain .org / .com & hosting 1 tahun',
          'Tombol gabung grup WhatsApp resmi'
        ],
        ctaText: 'Pilih Paket Komunitas'
      },
      {
        name: 'Paket Pro Asosiasi & KTA Digital',
        price: 'Rp 3.450.000',
        badge: 'Paling Diminati Asosiasi & Klub',
        features: [
          'Semua fitur Paket Komunitas Rintisan',
          'Sistem KTA Digital otomatis dengan foto & QR Code',
          'Halaman validasi keaslian member saat scan QR',
          'Sistem pembayaran iuran via QRIS terverifikasi otomatis',
          'Dashboard admin untuk sekretaris & bendahara',
          'Direktori anggota publik atau terproteksi PIN'
        ],
        ctaText: 'Pilih Paket Pro KTA'
      },
      {
        name: 'Paket Federasi & Multi Chapter',
        price: 'Rp 6.200.000',
        badge: 'Organisasi Nasional & Provinsi',
        features: [
          'Semua fitur Pro Asosiasi',
          'Dukungan multi-chapter / pengurus daerah (Pengda/Pengcab)',
          'Hak akses berjenjang per koordinator wilayah',
          'Laporan keuangan & rekap kas terpusat',
          'Broadcast notifikasi email massal ke seluruh anggota',
          'Dedicated support maintenance & backup bulanan'
        ],
        ctaText: 'Konsultasi Organisasi Nasional'
      }
    ],
    faq: [
      {
        q: 'Bagaimana cara anggota mendapatkan KTA digital mereka?',
        a: 'Setelah data pendaftaran disetujui admin (atau otomatis setelah bayar iuran), anggota bisa langsung mengunduh gambar KTA digital resolusi tinggi ke galeri ponsel mereka atau menyimpannya dalam format PDF.'
      },
      {
        q: 'Apakah data anggota lama di Excel bisa dimasukkan ke sistem baru?',
        a: 'Bisa. Kami akan membantu mengimpor data seluruh anggota lama dari file Excel atau Google Spreadsheet Anda secara cuma-cuma saat proses setup.'
      },
      {
        q: 'Apakah pihak luar bisa mengecek keaslian anggota?',
        a: 'Bisa. Setiap KTA memiliki QR Code unik. Siapapun yang memindai QR tersebut dengan kamera ponsel akan diarahkan ke halaman resmi website yang menampilkan status keaslian member.'
      }
    ]
  },

  'yayasan': {
    slug: 'yayasan',
    title: 'Website & Portal Donasi Yayasan Sosial',
    targetSubtitle: 'Yayasan Amal, Lembaga Kemanusiaan, Panti Asuhan, Pondok Pesantren & Organisasi Wakaf',
    categoryBadge: 'Yayasan & Filantropi',
    heroPhoto: '/reference-client-handshake.png',
    photoAlt: 'Kesepakatan dan komitmen transparansi amanah donasi untuk lembaga yayasan sosial',
    heroTagline: 'Tingkatkan Kepercayaan Donatur Melalui Transparansi Laporan Real-Time & Portal Donasi Digital',
    summary:
      'Wujudkan tata kelola filantropi yang akuntabel dan terpercaya. Hadirkan portal digital resmi yayasan dengan sistem donasi online instan (QRIS, VA, E-Wallet), transparansi penyaluran dana per program, buku laporan keuangan tahunan interaktif (3D Flipbook), serta legalitas izin Kemenkumham yang jelas.',
    roiHighlight: {
      stat: '3x Donatur',
      label: 'Pertumbuhan Penghimpunan Donasi',
      explanation: 'Kemudahan berdonasi via QRIS instan ditambah bukti legalitas transparan melipatgandakan keyakinan para muhsinin dan korporat CSR.'
    },
    painPoints: [
      {
        iconName: 'ShieldAlert',
        title: 'Masyarakat Khawatir Penipuan & Kurang Percaya',
        desc: 'Maraknya kasus penyelewengan dana membuat calon donatur ragu menyalurkan infak jika yayasan tidak memiliki website resmi berbadan hukum.'
      },
      {
        iconName: 'Clock',
        title: 'Donatur Sulit Konfirmasi Transfer Manual',
        desc: 'Banyak calon donatur yang membatalkan niat baiknya karena harus konfirmasi kirim foto struk transfer ke nomor WhatsApp pengurus.'
      },
      {
        iconName: 'FileText',
        title: 'Laporan Penyaluran Donasi Tidak Transparan',
        desc: 'Donatur tidak mengetahui apakah donasi yang mereka titipkan sudah disalurkan kepada penerima manfaat atau belum.'
      },
      {
        iconName: 'Building2',
        title: 'Sulit Mengajukan Kerjasama Dana CSR Perusahaan',
        desc: 'Divisi CSR korporat mewajibkan proposal dan profil lembaga tercantum jelas pada domain resmi yayasan (.or.id / .org).'
      }
    ],
    solutions: [
      {
        iconName: 'QrCode',
        title: 'Payment Gateway Donasi Instan (QRIS & VA)',
        desc: 'Donatur dapat berdonasi mulai dari Rp 10.000 dengan satu sentuhan via Gopay, OVO, ShopeePay, Dana, QRIS, dan Virtual Account.',
        metrics: 'Donasi masuk terverifikasi otomatis dalam 3 detik'
      },
      {
        iconName: 'Activity',
        title: 'Papan Donasi & Progress Penyaluran Terbuka',
        desc: 'Tiap program (beasiswa santri, renovasi asrama, sembako dhuafa) memiliki progress bar target terkumpul vs tersalurkan.',
        metrics: 'Tingkat akuntabilitas publik mencapai standar BAZNAS'
      },
      {
        iconName: 'BookOpen',
        title: 'Laporan Keuangan Tahunan Interaktif (3D Flipbook)',
        desc: 'Para donatur dapat membalik lembaran laporan pertanggungjawaban tahunan layaknya membaca majalah cetak mewah di layar ponsel.',
        metrics: 'Meningkatkan kredibilitas di hadapan auditor dan muzakki'
      },
      {
        iconName: 'Award',
        title: 'Ruang Verifikasi SK Kemenkumham & Rekening',
        desc: 'Menampilkan nomor AHU Kemenkumham, izin operasional dinas sosial, dan nomor rekening resmi atas nama lembaga yayasan.',
        metrics: 'Menghapus 100% keraguan legalitas donatur baru'
      }
    ],
    keyFeatures: [
      {
        title: 'Kalkulator Zakat Mal & Zakat Penghasilan',
        desc: 'Membantu calon muzakki menghitung kewajiban nisab dan zakat harta mereka secara akurat sebelum menunaikannya.',
        iconName: 'Layers',
        tag: 'Zakat Engine'
      },
      {
        title: 'Pilihan Donasi Anonim (Hamba Allah)',
        desc: 'Memberikan opsi kepada donatur yang ingin menyembunyikan identitas namanya dari daftar publik demi privasi.',
        iconName: 'ShieldCheck',
        tag: 'Donor Privacy'
      },
      {
        title: 'Bukti Donasi & Kuitansi Elektronik Otomatis',
        desc: 'Donatur secara otomatis menerima sertifikat donasi PDF resmi bertanda tangan digital lembaga via email/WhatsApp.',
        iconName: 'FileCheck',
        tag: 'Auto Receipt'
      },
      {
        title: 'Katalog Program Wakaf & Sedekah Jariyah',
        desc: 'Halaman khusus untuk penggalangan dana wakaf pembebasan tanah, pembangunan masjid, dan air bersih per paket m².',
        iconName: 'HeartHandshake',
        tag: 'Wakaf Portal'
      }
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Legalitas & Program Kerja Yayasan',
        desc: 'Pengumpulan berkas SK Kemenkumham, profil panti/pesantren, daftar program sosial aktif, dan rekening bank yayasan.',
        duration: 'Hari ke 1-3'
      },
      {
        step: '02',
        title: 'Desain Antarmuka Penuh Kesejukan & Amanah',
        desc: 'Perancangan visual bernuansa teduh, hijau menenangkan, bersih, dan menonjolkan senyum bahagia penerima manfaat.',
        duration: 'Hari ke 4-6'
      },
      {
        step: '03',
        title: 'Integrasi Sistem Donasi & Flipbook Laporan',
        desc: 'Penyambungan QRIS dinamis berizin BI, kalkulator zakat, dan digitalisasi dokumen laporan keuangan tahunan.',
        duration: 'Hari ke 7-9'
      },
      {
        step: '04',
        title: 'Uji Donasi Riil & Pelatihan Pengurus',
        desc: 'Simulasi transaksi donasi nyata, pengujian kuitansi otomatis, dan serah terima akses admin ke bendahara yayasan.',
        duration: 'Hari ke 10-12'
      }
    ],
    techStack: ['Next.js 15', 'Tailwind CSS', 'Midtrans Zakat/Donasi', 'HTML5 Flipbook 3D', 'PostgreSQL', 'Cloudflare SSL'],
    deliverables: [
      {
        title: 'Platform Donasi Lembaga',
        items: [
          'Website resmi yayasan berdomain khusus (.or.id / .org / .id)',
          'Sistem penerimaan donasi online instan (QRIS & Virtual Account)',
          'Fitur flipbook interaktif laporan tahunan yayasan',
          'Kalkulator zakat mal & penghasilan online'
        ]
      },
      {
        title: 'Legalitas & Pendampingan',
        items: [
          'Halaman verifikasi SK Kemenkumham & struktur pembina',
          'Generator kuitansi donasi elektronik otomatis',
          'Panduan pengurus untuk mempublikasikan dokumentasi penyaluran',
          'Garansi teknis dan pemeliharaan server donasi 1 tahun'
        ]
      }
    ],
    pricingTiers: [
      {
        name: 'Paket Profil Amanah Yayasan',
        price: 'Rp 1.450.000',
        badge: 'Yayasan & Panti Asuhan Rintisan',
        features: [
          'Website profil lembaga & legalitas Kemenkumham',
          'Informasi nomor rekening resmi yayasan',
          'Galeri foto dokumentasi santri & dhuafa',
          'Domain .or.id / .org & hosting 1 tahun',
          'Tombol konfirmasi donasi langsung ke WhatsApp'
        ],
        ctaText: 'Pilih Profil Amanah'
      },
      {
        name: 'Paket Pro Donasi Instan & Flipbook',
        price: 'Rp 2.950.000',
        badge: 'Paling Diminati Lembaga Wakaf & Ziswaf',
        features: [
          'Semua fitur Paket Profil Amanah',
          'Integrasi pembayaran donasi QRIS & Virtual Account instan',
          'Widget 3D Flipbook majalah laporan keuangan tahunan',
          'Kalkulator zakat mal & zakat profesi otomatis',
          'Progress bar target donasi per program penggalangan',
          'Generator bukti tanda terima donasi elektronik'
        ],
        ctaText: 'Pilih Paket Pro Donasi'
      },
      {
        name: 'Paket Lembaga Amil Zakat Skala Nasional',
        price: 'Rp 5.900.000',
        badge: 'LAZNAS & Lembaga Kemanusiaan',
        features: [
          'Semua fitur Pro Donasi Instan',
          'Sistem donasi rutin bulanan otomatis (auto-debit)',
          'Portal akun donatur untuk memantau riwayat infak pribadi',
          'Integrasi program kemitraan CSR korporat',
          'Optimasi SEO penggalangan sedekah di Google',
          'Dedicated support pengawalan kampanye Ramadhan / Qurban'
        ],
        ctaText: 'Konsultasi Lembaga Nasional'
      }
    ],
    faq: [
      {
        q: 'Apakah uang donasi langsung masuk ke rekening bank yayasan?',
        a: 'Ya, 100% dana donasi ditransfer langsung oleh payment gateway ke rekening bank resmi atas nama yayasan Anda tanpa perantara pihak ketiga.'
      },
      {
        q: 'Apa saja syarat membuat domain resmi .or.id untuk yayasan?',
        a: 'Syaratnya cukup melampirkan Akta Notaris pendirian yayasan, SK Kemenkumham, dan KTP penanggung jawab lembaga. Tim kami akan mendampingi seluruh proses pendaftarannya hingga tuntas.'
      },
      {
        q: 'Apakah bisa digunakan untuk program qurban dan wakaf tanah?',
        a: 'Bisa. Sistem kami sangat fleksibel untuk membuat kampanye qurban (patungan 1/7 sapi atau kambing tunggal) maupun wakaf tunai per paket meter persegi dengan pencatatan nama donatur yang rapi.'
      }
    ]
  },

  'klinik-kesehatan': {
    slug: 'klinik-kesehatan',
    title: 'Website & Sistem Booking Klinik Kesehatan',
    targetSubtitle: 'Klinik Pratama, Dokter Gigi, Fisioterapi, Klinik Kecantikan & Praktek Mandiri Tenaga Medis',
    categoryBadge: 'Kesehatan & Medis',
    heroPhoto: '/reference-client-handshake.png',
    photoAlt: 'Konsultasi dan pelayanan kesehatan terpercaya antara dokter dan pasien di klinik modern',
    heroTagline: 'Antrean Pasien Lebih Tertib dengan Jadwal Dokter Real-Time & Booking Janji Temu Online',
    summary:
      'Solusi modern untuk klinik kesehatan, dental care, dan fasilitas medis pratama. Mengakhiri penumpukan antrean pasien di ruang tunggu melalui sistem booking online terstruktur, jadwal praktek dokter real-time, notifikasi WhatsApp pengingat otomatis H-1, serta panduan layanan medis yang informatif.',
    roiHighlight: {
      stat: '0 Jam',
      label: 'Penumpukan Ruang Tunggu',
      explanation: 'Pasien datang sesuai estimasi jam konsultasi yang dipilih, menciptakan kenyamanan ruang tunggu yang tenang dan profesional.'
    },
    painPoints: [
      {
        iconName: 'Users',
        title: 'Ruang Tunggu Penuh Sesak & Pasien Frustrasi',
        desc: 'Pasien yang sedang sakit harus menunggu berjam-jam tanpa kepastian urutan nomor giliran dokter.'
      },
      {
        iconName: 'CalendarX',
        title: 'Tingkat Pasien Batal Hadir (No-Show) Tinggi',
        desc: 'Pasien yang mendaftar via telepon kerap lupa jadwal janji temu karena tidak ada sistem pengingat otomatis.'
      },
      {
        iconName: 'Clock',
        title: 'Resepsionis Sibuk Angkat Telepon Tanya Jadwal',
        desc: 'Waktu staf administrasi habis hanya untuk menjawab pertanyaan berulang tentang jam buka praktek dokter gigi atau umum.'
      },
      {
        iconName: 'Search',
        title: 'Klinik Kalah Populer di Google Maps Sekitar',
        desc: 'Masyarakat sekitar yang membutuhkan pertolongan medis darurat tidak menemukan klinik Anda saat mencari di Google.'
      }
    ],
    solutions: [
      {
        iconName: 'CalendarCheck',
        title: 'Sistem Booking Janji Temu Online 24/7',
        desc: 'Pasien memilih poli, dokter spesialis, tanggal, dan slot jam yang masih tersedia langsung dari layar smartphone.',
        metrics: 'Pasien dapat mendaftar kapan saja meski klinik sedang tutup'
      },
      {
        iconName: 'Clock',
        title: 'Jadwal Praktek Dokter Real-Time',
        desc: 'Menampilkan ketersediaan dokter hari ini, cuti praktek, atau pergantian jadwal secara transparan.',
        metrics: 'Menghilangkan kekecewaan pasien akibat dokter berhalangan'
      },
      {
        iconName: 'MessageSquare',
        title: 'Notifikasi Pengingat WhatsApp H-1 Otomatis',
        desc: 'Sistem mengirimkan pesan pengingat jadwal konsultasi dan tautan konfirmasi kehadiran H-1 sebelum waktu praktek.',
        metrics: 'Menurunkan tingkat no-show pasien hingga di bawah 5%'
      },
      {
        iconName: 'MapPin',
        title: 'Optimasi Profil Google Bisnisku Medis',
        desc: 'Pendaftaran titik akurat klinik pada Google Maps dengan ulasan bintang 5, foto fasilitas klinik, dan rute navigasi instan.',
        metrics: 'Mendatangkan pasien baru dari warga permukiman sekitar'
      }
    ],
    keyFeatures: [
      {
        title: 'Katalog Layanan Medis & Estimasi Biaya Transparan',
        desc: 'Menampilkan rincian tindakan medis (scaling gigi, cek lab darah, perawatan luka, vaksinasi) beserta fasilitasnya.',
        iconName: 'Layers',
        tag: 'Medical Service'
      },
      {
        title: 'Nomor Antrean Digital Berbasis Jam',
        desc: 'Pasien mendapatkan tiket digital berisi nomor antrean dan estimasi jam masuk ke ruang periksa dokter.',
        iconName: 'QrCode',
        tag: 'Smart Queue'
      },
      {
        title: 'Pendaftaran Pasien BPJS & Pasien Umum',
        desc: 'Opsi pemilihan metode penjaminan (BPJS Kesehatan, Asuransi Swasta, atau Bayar Mandiri).',
        iconName: 'ShieldCheck',
        tag: 'Insurance Ready'
      },
      {
        title: 'Kepatuhan Kerahasiaan Rekam Medis (HIPAA Friendly)',
        desc: 'Data identitas pasien disimpan dengan enkripsi aman tanpa pernah dibagikan kepada pihak ketiga.',
        iconName: 'Lock',
        tag: 'Data Privacy'
      }
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Pemetaan Poli, Dokter & Jam Praktek',
        desc: 'Pendataan daftar dokter, spesialisasi, SIP (Surat Izin Praktik), jadwal hari & jam konsultasi, serta tarif tindakan.',
        duration: 'Hari ke 1-3'
      },
      {
        step: '02',
        title: 'Desain Visual Higienis & Menenangkan',
        desc: 'Antarmuka bernuansa hijau tosca dan biru medis yang memberikan rasa tenang, higienis, dan terpercaya bagi pasien.',
        duration: 'Hari ke 4-6'
      },
      {
        step: '03',
        title: 'Integrasi Mesin Booking & Notifikasi WhatsApp',
        desc: 'Koding kalender slot waktu, pembatasan kuota pasien per jam, dan konfigurasi webhook WhatsApp pengingat otomatis.',
        duration: 'Hari ke 7-9'
      },
      {
        step: '04',
        title: 'Uji Coba Resepsionis & Go-Live',
        desc: 'Simulasi alur registrasi dari pendaftaran pasien hingga panggilan masuk ruang periksa, serta pelatihan staf administrasi.',
        duration: 'Hari ke 10-12'
      }
    ],
    techStack: ['Next.js 15', 'Tailwind CSS', 'WhatsApp Cloud API', 'PostgreSQL', 'FullCalendar API', 'Cloudflare SSL'],
    deliverables: [
      {
        title: 'Sistem Digital Klinik',
        items: [
          'Website resmi klinik berkecepatan tinggi dengan domain resmi',
          'Sistem booking slot konsultasi dokter online 24 jam',
          'Papan jadwal dokter real-time yang mudah diperbarui staf',
          'Tiket antrean digital untuk pasien'
        ]
      },
      {
        title: 'Otomasi & Rekomendasi',
        items: [
          'Template pesan pengingat janji temu WhatsApp otomatis',
          'Optimasi akun Google Bisnisku & Google Maps terverifikasi',
          'Panduan operasional staf resepsionis klinik',
          'Garansi perbaikan bug & pendampingan teknis 1 tahun'
        ]
      }
    ],
    pricingTiers: [
      {
        name: 'Paket Profil Medis & Jadwal',
        price: 'Rp 1.750.000',
        badge: 'Praktek Mandiri & Dokter Gigi',
        features: [
          'Website profil klinik & dokter terpercaya',
          'Jadwal praktek dokter terupdate',
          'Daftar tindakan medis & fasilitas klinik',
          'Domain resmi & hosting SSD 1 tahun',
          'Tombol buat janji langsung ke WhatsApp resepsionis'
        ],
        ctaText: 'Pilih Profil Medis'
      },
      {
        name: 'Paket Pro Booking Online & Notifikasi WA',
        price: 'Rp 3.850.000',
        badge: 'Paling Diminati Klinik Pratama & Dental',
        features: [
          'Semua fitur Paket Profil Medis',
          'Sistem booking online dengan pemilihan jam & dokter',
          'Pembatasan kuota pasien otomatis per sesi praktek',
          'Notifikasi WhatsApp pengingat janji H-1 ke pasien',
          'Dashboard resepsionis untuk mengelola daftar antrean',
          'Optimasi Google Maps klinik untuk pencarian terdekat'
        ],
        ctaText: 'Pilih Paket Pro Booking'
      },
      {
        name: 'Paket Multi-Poli & Rekam Medis Ringan',
        price: 'Rp 7.500.000',
        badge: 'Klinik Utama & Rumah Sakit Ibu Anak',
        features: [
          'Semua fitur Paket Pro Booking',
          'Dukungan multi-poli (Gigi, Umum, Anak, Kandungan, dll)',
          'Sistem verifikasi nomor BPJS & asuransi rekanan',
          'Riwayat kunjungan pasien berbasis nomor rekam medis (RM)',
          'Integrasi pembayaran deposit booking online via QRIS',
          'Dedicated support prioritas & SLA tanggap 1 jam'
        ],
        ctaText: 'Konsultasi Klinik Skala Besar'
      }
    ],
    faq: [
      {
        q: 'Apakah pasien bisa membatalkan atau mengubah jadwal janji temu?',
        a: 'Bisa. Di dalam pesan WhatsApp konfirmasi terdapat link aman bagi pasien untuk melakukan pembatalan atau penjadwalan ulang minimal H-3 jam sebelum jam praktek.'
      },
      {
        q: 'Bagaimana jika dokter mendadak berhalangan hadir?',
        a: 'Resepsionis cukup menandai dokter "Cuti/Berhalangan" di dashboard admin. Sistem akan otomatis mematikan slot booking hari itu dan dapat mengirimkan pesan pembatalan sopan ke seluruh pasien yang sudah terdaftar.'
      },
      {
        q: 'Apakah sistem ini sesuai dengan regulasi rekam medis di Indonesia?',
        a: 'Sistem booking kami berfokus pada manajemen janji temu dan antrean pasien. Kami tidak menyimpan rekam medis sensitif (anamnesis/diagnosa) di publik, melainkan hanya data kontak pendaftaran sehingga aman dan patuh regulasi kerahasiaan medis.'
      }
    ]
  },

  'umkm': {
    slug: 'umkm',
    title: 'Website & Solusi Go Digital UMKM Juara',
    targetSubtitle: 'Usaha Mikro, Kecil, dan Menengah Seluruh Indonesia Siap Naik Kelas & Banjir Pelanggan',
    categoryBadge: 'Sentra UMKM Nasional',
    heroPhoto: '/reference-mobile-desk.jpg',
    photoAlt: 'Perangkat kerja pemilik UMKM modern dalam mengelola pemasaran digital',
    heroTagline: 'Solusi Lengkap UMKM Go Digital: Website Kilat, Google Bisnisku Terverifikasi & Order WhatsApp',
    summary:
      'Waktunya produk UMKM lokal Anda bersaing di panggung nasional. Kami membangun website berkecepatan tinggi di bawah 0.8 detik, domain resmi .com/id, optimasi titik Google Maps agar mudah ditemukan warga sekitar, serta tombol pemesanan WhatsApp yang langsung menghasilkan konversi penjualan tanpa potongan fee aplikasi.',
    roiHighlight: {
      stat: '<0.8s',
      label: 'Kecepatan Muat Kilat',
      explanation: 'Situs terbuka instan di ponsel calon pembeli tanpa buffering, memaksimalkan peluang transaksi saat pertama kali berkunjung.'
    },
    painPoints: [
      {
        iconName: 'Store',
        title: 'Usaha Hanya Mengandalkan Pelanggan yang Lewat',
        desc: 'Toko fisik sepi jika lokasi tidak di pinggir jalan raya utama dan belum terdaftar di peta pencarian Google.'
      },
      {
        iconName: 'MessageCircle',
        title: 'Calon Pembeli Bingung Saat Menanyakan Daftar Harga',
        desc: 'Pemilik UMKM lelah mengirimkan ulang foto brosur buram atau mengetik manual daftar harga panjang lewat chat.'
      },
      {
        iconName: 'ShieldX',
        title: 'Dianggap Usaha Abal-Abal Karena Belum Punya Web Resmi',
        desc: 'Calon pembeli dari luar kota ragu mentransfer uang karena toko tidak memiliki alamat website resmi berdomain .com/id.'
      },
      {
        iconName: 'DollarSign',
        title: 'Biaya Jasa Agensi Terlalu Mahal untuk Skala UMKM',
        desc: 'Software house besar mematok puluhan juta rupiah yang tidak masuk akal untuk cash flow usaha rintisan mikro.'
      }
    ],
    solutions: [
      {
        iconName: 'Globe',
        title: 'Website Toko Resmi Berdomain .com / .id',
        desc: 'Tampilan toko profesional yang menampilkan kisah perjuangan usaha, keunggulan produk lokal, dan sertifikat halal/P-IRT.',
        metrics: 'Meningkatkan rasa percaya calon pembeli baru hingga 90%'
      },
      {
        iconName: 'MapPin',
        title: 'Verifikasi Titik Google Maps & Google Bisnisku',
        desc: 'Klaim dan optimasi nama toko di Google Maps dengan foto produk, jam buka, dan ulasan bintang lima.',
        metrics: 'Tampil di urutan teratas saat orang mencari "produk terdekat"'
      },
      {
        iconName: 'ShoppingBag',
        title: 'Etalase Katalog Produk Lengkap & Order WA',
        desc: 'Pelanggan bisa melihat foto produk berkualitas tinggi, deskripsi keunggulan, dan langsung klik pesan ke WhatsApp penjual.',
        metrics: 'Proses closing penjualan lebih cepat dan tertib'
      },
      {
        iconName: 'Zap',
        title: 'Ringan, Cepat & Hemat Kuota Internet',
        desc: 'Dibuat dengan kode bersih modern sehingga sangat cepat diakses bahkan saat sinyal seluler pelanggan lemah.',
        metrics: 'Skor performa Google PageSpeed 95-100 Sempurna'
      }
    ],
    keyFeatures: [
      {
        title: 'Tombol Chat WhatsApp Mengambang',
        desc: 'Memudahkan pengunjung langsung bertanya ketersediaan stok atau konsultasi produk hanya dengan satu sentuhan.',
        iconName: 'PhoneCall',
        tag: 'Instant Chat'
      },
      {
        title: 'Pameran Ulasan & Testimoni Pelanggan',
        desc: 'Menampilkan tangkapan layar kepuasan pelanggan dan bukti resi pengiriman sebagai bukti otentik usaha terpercaya.',
        iconName: 'Sparkles',
        tag: 'Social Proof'
      },
      {
        title: 'Tampilan Responsif di Semua Ukuran Layar',
        desc: 'Toko terlihat rapi, proporsional, dan nyaman dibaca baik di layar smartphone murah maupun laptop kantor.',
        iconName: 'Smartphone',
        tag: 'Responsive Design'
      },
      {
        title: '100% Hak Milik Penuh Tanpa Biaya Tersembunyi',
        desc: 'Website dan domain adalah aset sah bisnis Anda, tanpa ada ikatan langganan sewa platform bulanan yang mencekik.',
        iconName: 'ShieldCheck',
        tag: '100% Hak Milik'
      }
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Wawancara Singkat Profil Usaha & Produk',
        desc: 'Pengiriman foto produk, daftar harga, cerita brand, dan nomor WhatsApp admin melalui formulir simpel.',
        duration: 'Hari ke 1-2'
      },
      {
        step: '02',
        title: 'Perakitan Desain & Optimasi Copywriting',
        desc: 'Penyusunan kalimat promosi yang memikat hati pembeli lokal dan penataan etalase foto produk yang menggugah.',
        duration: 'Hari ke 3-4'
      },
      {
        step: '03',
        title: 'Pendaftaran Domain & Pengaturan WhatsApp',
        desc: 'Aktivasi nama domain pilihan Anda, setup hosting server berkecepatan tinggi, dan pengetesan link order.',
        duration: 'Hari ke 5-6'
      },
      {
        step: '04',
        title: 'Peluncuran & Bimbingan Penggunaan',
        desc: 'Website resmi siap disebarkan ke media sosial, kartu nama, dan pelatihan gampang cara update konten.',
        duration: 'Hari ke 7'
      }
    ],
    techStack: ['HTML5 Modern', 'Tailwind CSS', 'Vite / Next.js', 'WhatsApp Business Link', 'Cloudflare High Speed', 'SSL Let\'s Encrypt'],
    deliverables: [
      {
        title: 'Aset Website UMKM',
        items: [
          'Website resmi profil & katalog produk usaha UMKM',
          'Nama domain pilihan (.com / .id) aktif selama 1 tahun',
          'Hosting penyimpanan cepat & aman selama 1 tahun',
          'Sertifikat keamanan gembok hijau SSL resmi'
        ]
      },
      {
        title: 'Layanan Ekstra UMKM',
        items: [
          'Bantuan verifikasi titik lokasi Google Maps',
          'Link tautan profil bio media sosial (ala Linktree) khusus',
          'Video panduan ganti harga dan nomor WhatsApp',
          'Garansi teknis dan perbaikan selama 1 tahun'
        ]
      }
    ],
    pricingTiers: [
      {
        name: 'Paket UMKM Rintisan',
        price: 'Rp 650.000',
        badge: 'Usaha Rumahan & Pemula',
        features: [
          'Website satu halaman (Landing Page) ringkas & elegan',
          'Katalog hingga 15 produk unggulan',
          'Tombol order langsung terhubung ke WhatsApp',
          'Domain kustom & hosting kilat 1 tahun',
          'Link kartu nama digital untuk bio Instagram/TikTok'
        ],
        ctaText: 'Mulai Paket UMKM Rintisan'
      },
      {
        name: 'Paket UMKM Tumbuh Juara',
        price: 'Rp 1.350.000',
        badge: 'Paling Diminati Pelaku UMKM',
        features: [
          'Website multi-halaman lengkap (Profil, Katalog, Kontak)',
          'Katalog hingga 60 produk dengan kategori rapi',
          'Integrasi verifikasi titik lokasi Google Maps usaha',
          'Galeri testimoni pelanggan & sertifikat izin usaha (PIRT/Halal)',
          'Domain resmi (.com / .id) & hosting prioritas 1 tahun',
          'Bantuan optimasi pencarian lokal Google'
        ],
        ctaText: 'Pilih Paket Tumbuh Juara'
      },
      {
        name: 'Paket UMKM Skala Nasional',
        price: 'Rp 2.650.000',
        badge: 'Produsen & Distributor Lokal',
        features: [
          'Semua fitur Paket Tumbuh Juara',
          'Katalog tanpa batas produk',
          'Formulir pendaftaran reseller & agen luar kota',
          'Integrasi kalkulator perkiraan ongkos kirim',
          'Desain banner promosi digital untuk status WhatsApp',
          'Pendampingan teknis & konsultasi marketing 1 tahun'
        ],
        ctaText: 'Pilih Paket Skala Nasional'
      }
    ],
    faq: [
      {
        q: 'Saya masih awam teknologi, apakah proses pembuatannya rumit?',
        a: 'Sama sekali tidak rumit. Anda cukup mengirimkan foto produk, harga, dan nomor WhatsApp lewat chat. Seluruh urusan teknis seperti koding, domain, hosting, dan desain kami yang tuntaskan dari A sampai Z.'
      },
      {
        q: 'Apakah ada biaya bulanan yang harus dibayar?',
        a: 'Tidak ada biaya bulanan! Anda hanya membayar sekali untuk pembuatan dan fasilitas hosting serta domain aktif selama 1 tahun penuh. Perpanjangan tahun berikutnya sangat terjangkau mulai dari Rp 300-an ribu per tahun.'
      },
      {
        q: 'Berapa lama proses pembuatan website UMKM selesai?',
        a: 'Untuk paket UMKM, proses pengerjaan rata-rata selesai dalam waktu 3 hingga 7 hari kerja sejak materi foto dan data usaha Anda kami terima lengkap.'
      }
    ]
  }
};
