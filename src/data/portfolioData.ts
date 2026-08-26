import {
  CertificateItem,
  EducationItem,
  ExperienceItem,
  GoogleBadge,
  ProjectItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Tubagus Fitran Badruttamam',
  nickname: 'Fitran',
  title: 'Software Engineer (student)',
  status: 'Open for projects, collaboration & tech roles',
  location: 'Cilegon, Banten, Indonesia',
  timezone: 'Asia/Jakarta (GMT+7)',
  avatarUrl: '/aku foto cv new.jpeg',
  tagline: 'Bridging modern web engineering, industrial AI dashboards, and multi-cloud infrastructure.',
  bio: 'I build web applications and explore how AI and cloud infrastructure can solve real-world problems — from industrial manufacturing dashboards to everyday apps for finance and worship. Currently studying Informatics while stacking hands-on certifications across AWS, Google Cloud, and NVIDIA.',
  extendedBio:
    'An early-career software engineer pursuing Informatics at Universitas Muhammadiyah Banten. Driven by high-output self-learning, I design and ship full-stack applications with an emphasis on crisp typography, accessible UX, and reliable cloud infrastructure. When not engineering apps or supervising codebases, I actively study cloud architecture and explore applied generative AI systems.',
  email: 'fitranbadrttmamtb@gmail.com',
  socialLinks: {
    github: 'https://github.com/fitrantubagus-stack',
    linkedin: 'https://www.linkedin.com/in/tubagus-fitran-badruttamam-05834737b/',
    instagram: 'https://www.instagram.com/iran_tbgs/',
    googleDev: 'https://me.developers.google.com/u/108601218527303855788',
    certificatesDrive:
      'https://drive.google.com/drive/folders/1qdWe_5nUkvtcnjRfZ1-cJ-x76OzOjCEH?usp=sharing',
  },
};

export const CERTIFICATES_DRIVE_URL =
  'https://drive.google.com/drive/folders/1qdWe_5nUkvtcnjRfZ1-cJ-x76OzOjCEH?usp=sharing';

export const HIGHLIGHTS_METRICS = [
  {
    id: 'gold-medals',
    value: '2× Gold Medalist',
    label: 'National Academic Competitions',
    subtext: 'Mathematics & History (Grade A+)',
    icon: 'Medal',
    badge: 'National Rank #1',
  },
  {
    id: 'perpusnas-author',
    value: 'Published Author',
    label: 'Indonesian National Library (Perpusnas RI)',
    subtext: 'Official 46th Anniversary Book Selection',
    icon: 'BookOpen',
    badge: 'National Publication',
  },
  {
    id: 'google-tier',
    value: 'Premium Tier',
    label: 'Google Developer Program',
    subtext: '8 Verified Ecosystem & Cloud Badges',
    icon: 'Award',
    badge: 'Verified Member',
  },
  {
    id: 'cloud-certifications',
    value: '9+ Certifications',
    label: 'Cloud, AI & Data Credentials',
    subtext: 'AWS · Google Cloud · NVIDIA · Google',
    icon: 'Cpu',
    badge: 'Multi-Cloud Verified',
  },
];

export const SKILL_GROUPS = [
  {
    category: 'Frontend & Architecture',
    skills: [
      { name: 'Next.js', level: 'Advanced' },
      { name: 'React', level: 'Advanced' },
      { name: 'TypeScript', level: 'Proficient' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Framer Motion', level: 'Proficient' },
      { name: 'Figma', level: 'UI/UX Design' },
      { name: 'REST APIs', level: 'Proficient' },
      { name: 'Vite', level: 'Advanced' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS IAM & Security', level: 'Certified' },
      { name: 'AWS API Gateway', level: 'Certified' },
      { name: 'Google Cloud Infrastructure', level: 'Certified' },
      { name: 'NVIDIA DSX Air & CVT', level: 'Certified' },
      { name: 'Serverless Systems', level: 'Practiced' },
      { name: 'Vercel Deployment', level: 'Proficient' },
    ],
  },
  {
    category: 'AI & Data Engineering',
    skills: [
      { name: 'Generative AI Apps', level: 'Practiced' },
      { name: 'Amazon Bedrock Guardrails', level: 'Certified' },
      { name: 'Responsible AI Practices', level: 'Certified' },
      { name: 'Google Gemini & LLMs', level: 'Certified' },
      { name: 'Data Engineering on AWS', level: 'Certified' },
      { name: 'Google Analytics & Campaign 360', level: 'Certified' },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Universitas Muhammadiyah Banten',
    degreeOrFocus: 'Bachelor of Informatics (S1 Informatika)',
    period: 'Sep 2025 – Present',
    location: 'Banten, Indonesia',
    description:
      'Pursuing software engineering, computational algorithms, and distributed systems while spearheading self-directed research in industrial intelligence and modern web technologies.',
    logoFilename: 'logo-umbanten.png',
    badgeColor: '#047857',
    highlights: [
      'Informatics Undergraduate Program',
      'Focusing on Software Architecture, Cloud Infrastructure, and AI Integration',
      'Active developer and student researcher',
    ],
  },
  {
    institution: 'SMA Negeri 1 Cilegon',
    degreeOrFocus: 'Social Sciences & Interdisciplinary Studies',
    period: '2022 – 2025',
    location: 'Cilegon, Banten, Indonesia',
    description:
      'Graduated with distinction while winning consecutive national-level olympiad medals in Mathematics and History, and publishing a national essay with the Indonesian National Library.',
    logoFilename: 'logo-sman1cilegon.png',
    badgeColor: '#1D4ED8',
    highlights: [
      'Gold Medalist in National Olympiads (OSHSP & KSHPI)',
      '10th OSN Tingkat Kota Champion — Geography',
      'Published author in Perpusnas RI anniversary compilation',
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Coding Supervisor',
    organization: 'Radja Gaming',
    period: 'Apr 2020 – Present',
    type: 'Leadership & Architecture',
    description:
      'Supervises and coordinates a developer team, enforces clean code standards and peer reviews, and leads the technical system architecture for high-concurrency gaming service platforms.',
    keyResponsibilities: [
      'Lead architectural decision-making and component reusability for core digital products',
      'Oversee frontend performance, mobile responsiveness, and payment gateway integration stability',
      'Conduct regular code reviews to maintain repository maintainability and reliable deployment pipelines',
    ],
  },
  {
    role: 'Education Mentor',
    organization: 'SejutaCita Indonesia',
    period: 'Jun 2025 – Present',
    type: 'Mentorship & Community',
    description:
      'Mentors aspiring tech students, preparing structured curriculum and delivering hands-on material on web fundamentals, software engineering mindsets, and self-directed learning.',
    keyResponsibilities: [
      'Deliver interactive workshops and technical presentations to student cohorts',
      'Provide 1-on-1 guidance on portfolio development and modern technology stacks',
      'Advocate for cloud and AI literacy among high school and university students across Indonesia',
    ],
  },
];

export const GOOGLE_DEV_BADGES: GoogleBadge[] = [
  {
    name: 'Learning',
    iconName: 'GraduationCap',
    description: 'Continuous technical skill acquisition & verification',
  },
  {
    name: 'Gemini Enterprise Agent Ready',
    iconName: 'Sparkles',
    description: 'Autonomous AI agent patterns & Gemini enterprise workflows',
  },
  {
    name: 'Google Skills',
    iconName: 'ShieldCheck',
    description: 'Verified cloud infrastructure and analytical computing',
  },
  {
    name: 'GDG Events',
    iconName: 'Users',
    description: 'Google Developer Group community engagement & participation',
  },
  {
    name: 'GDG on Campus BINUS University',
    iconName: 'Building',
    description: 'Campus developer community collaboration & hackathons',
  },
  {
    name: 'Firebase Studio Developer',
    iconName: 'Flame',
    description: 'Serverless backend, Firestore schemas & real-time sync',
  },
  {
    name: 'Google Maps Platform Innovators',
    iconName: 'MapPin',
    description: 'Geospatial visualization & location-based service design',
  },
  {
    name: 'Google Cloud & NVIDIA Community',
    iconName: 'Cpu',
    description: 'Accelerated cloud computing and GPU pipeline exploration',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'plantpulse',
    name: 'PlantPulse',
    tagline: 'AI-Powered Manufacturing Intelligence Command Center',
    role: 'Lead Architect & Prototype Designer',
    type: 'case-study',
    featured: true,
    category: 'AI & Data',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'SVG Data Viz', 'Prototype UX', 'Industrial AI'],
    summary:
      'AI copilot for petrochemical plant operations unifying fragmented sensory feeds into a single command center with transparent AI root-cause reasoning and bilingual interface.',
    fullDescription:
      'Built as an executive business case competition entry for CALIBER 2026 (hosted by Chandra Asri Group). PlantPulse addresses the massive cognitive overhead plant operators face by consolidating scattered SCADA/IoT alerts into a prioritized intelligence stream with explainable root-cause recommendations.',
    keyFeatures: [
      'Unified Plant Command Center: Aggregates real-time telemetry from multiple processing units',
      'Transparent AI Root-Cause Reasoning: Gives operators clear diagnostic rationale and confidence levels',
      'Dynamic Alert Priority Queue: Ranks anomalies by operational severity to prevent downtime',
      'Searchable Equipment Knowledge Base: Instant access to machine schematics and SOP history',
      'Full Bilingual Support: Seamless toggle between English and Bahasa Indonesia for local floor teams',
    ],
    architectureHighlights: [
      'Modular client-side dashboard state machine for zero-latency operator switching',
      'Lightweight SVG-based data visualizers custom-built for high-density monitoring displays',
      'Designed to comply with industrial safety guidelines and fault-tolerant operational flows',
    ],
    impactOrContext:
      'Developed specifically for Chandra Asri Group\'s CALIBER 2026 competition, receiving high acclaim for operational clarity and human-in-the-loop AI safety design.',
    logoInitial: 'PP',
    themeColor: '#0284C7',
    customLogoFilename: 'logo-plantpulse.png',
  },
  {
    id: 'petroknow',
    name: 'PetroKnow',
    tagline: 'AI-Powered Manufacturing Knowledge Hub & Digital Twin',
    role: 'Full Stack Engineer & UI Architect',
    type: 'live',
    liveUrl: 'https://petroknow-platform.vercel.app/',
    featured: true,
    category: 'AI & Data',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vector Search', 'AI Assistants', 'Vercel'],
    summary:
      'Industrial AI knowledge hub uniting SOPs, tacit expert knowledge, and plant-floor equipment data with real-time verification and digital twin traceability.',
    fullDescription:
      'PetroKnow tackles knowledge silos in complex heavy industries. It digitizes engineering procedures, operator shift logs, and maintenance histories into a semantic retrieval engine backed by conversational AI assistants for instant plant troubleshooting.',
    keyFeatures: [
      'Semantic SOP Intelligence: Natural language search across thousands of technical manuals',
      'Digital Twin Equipment Traceability: Instant timeline of part maintenance and operational wear',
      'Field-Ready Mobile & Desktop UI: High-contrast responsive layout built for factory tablets',
      'Multi-Role Knowledge Verification: Peer-reviewed signoff for updated standard procedures',
    ],
    architectureHighlights: [
      'Next.js App Router with server-rendered streaming views for instant page responses',
      'Strict TypeScript domain models ensuring rock-solid data integrity for safety parameters',
      'Optimized client bundle with Framer Motion transitions for desktop and tablet users',
    ],
    impactOrContext:
      'Live in production on Vercel as a comprehensive showcase of modern enterprise industrial UX and AI retrieval architectures.',
    logoInitial: 'PK',
    themeColor: '#0D9488',
    customLogoFilename: 'logo-petroknow.png',
  },
  {
    id: 'myramadhan',
    name: 'MyRamadhan',
    tagline: 'Comprehensive Offline-Capable Islamic Companion & RamaTalk AI',
    role: 'Solo Creator & Full Stack Developer',
    type: 'live',
    liveUrl: 'https://ramadhan-ku-tubagus.vercel.app/',
    featured: true,
    category: 'Web & Mobile',
    technologies: ['React', 'Tailwind CSS', 'RamaTalk AI', 'IndexedDB', 'PWA', 'Audio API'],
    summary:
      'All-in-one Islamic worship companion featuring offline Qur\'an reader, prayer times, gratitude journal, fiqh guides, digital zakat calculator, and RamaTalk AI companion.',
    fullDescription:
      'A holistic lifestyle and spiritual application built to accompany millions of Muslims during Ramadan and daily life. Designed with deep attention to typography, offline-first reliability, respectful color palettes, and empathetic AI guidance.',
    keyFeatures: [
      'Offline Qur\'an Reader with smooth Arabic calligraphy typography, translation & audio recitation',
      'RamaTalk AI: Context-aware conversational guide for Ramadan questions, prayers, and reflections',
      'Precise Prayer Schedules & Qibla Direction calculated with geolocation algorithms',
      'Ramadan Habit Tracker & Gratitude Journal with streak visualization',
      'Comprehensive Islamic Tools: Digital Tasbih, Zakat Calculator, Hadith repository, and Haid tracker',
    ],
    architectureHighlights: [
      'Offline-first architecture with client-side caching for full functionality without active internet',
      'Custom Arabic font rendering pipeline with optimized line heights and glyph ligatures',
      'Responsive audio player integration with state restoration across sessions',
    ],
    impactOrContext:
      'Shipped live on Vercel with high praise from daily community users for its serene aesthetic and comprehensive toolset.',
    logoInitial: 'MR',
    themeColor: '#15803D',
    customLogoFilename: 'logo-myramadhan.png',
  },
  {
    id: 'genz-finance',
    name: 'GenZ Finance Tracker',
    tagline: 'Approachable Personal Finance & Wealth Dashboard',
    role: 'Creator & Frontend Developer',
    type: 'live',
    liveUrl: 'https://finansial-ku-tubagus.vercel.app/',
    featured: false,
    category: 'Web & Mobile',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Chart.js', 'Local Storage'],
    summary:
      'A casual, approachable personal finance management app ("Manage your cuan like a pro") with clean spending insights, multi-account management, and savings targets.',
    fullDescription:
      'Traditional banking tools are tedious and intimidating for young adults. GenZ Finance Tracker makes cash flow management engaging with conversational Indonesian copywriting ("Cuan", "Tabungan", "Nongkrong"), interactive spending breakdowns, and goal trackers.',
    keyFeatures: [
      'Executive Financial Dashboard: Real-time net worth calculation and cash-flow overview',
      'Categorized Spending Analytics: Interactive visual breakdown of lifestyle vs essential expenses',
      'Multi-Account & E-Wallet Aggregator: Track cash, bank balances, and digital wallets in one place',
      'Gamified Savings Target Vaults: Set milestones with celebration animations upon completion',
    ],
    architectureHighlights: [
      'Reactive state management providing instant recalculation on expense entry',
      'Mobile-first responsive cards with micro-animations on transaction additions',
      'Client-side privacy-first storage model keeping personal finances entirely on the device',
    ],
    impactOrContext:
      'Deployed live on Vercel, serving as an approachable budgeting prototype for Indonesian youth and university students.',
    logoInitial: 'GZ',
    themeColor: '#854D0E',
    customLogoFilename: 'logo-genzfinance.png',
  },
  {
    id: 'radja-topup',
    name: 'Radja Topup',
    tagline: 'High-Volume Gaming Services & Diamond Top-Up Platform',
    role: 'Frontend Developer & UI Engineer',
    type: 'case-study',
    featured: false,
    category: 'Frontend Engineering',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Payment Gateways', 'REST APIs'],
    summary:
      'Digital top-up platform for Mobile Legends featuring Diamond purchases, 24-hour Joki rank-boosting orders, multi-channel payment validation, and sub-second checkout.',
    fullDescription:
      'Spearheaded a complete frontend overhaul of Radja Topup to handle thousands of daily gamers. Streamlined the order selection flow, implemented real-time account validation, and integrated automatic Indonesian payment methods (QRIS, VA, E-Wallets).',
    keyFeatures: [
      'Streamlined 3-Step Checkout Flow: User ID validation -> Package selection -> Instant payment',
      'Professional Rank Boosting (Joki) Order Builder with tier selectors and live price calculator',
      'Automated Order Status Tracker with live websocket/polling state updates',
      'Mobile-Optimized Touch Interactions: 100% thumb-friendly for quick in-game top-ups',
    ],
    architectureHighlights: [
      'Next.js component modularity cutting checkout bounce rates by over 30%',
      'Optimized asset loading and caching ensuring fast load times on 3G/4G networks',
      'Strict input sanitization preventing duplicate payment submissions and invalid account IDs',
    ],
    impactOrContext:
      'Core production engine powering active daily commercial transactions in the Indonesian gaming community.',
    logoInitial: 'RT',
    themeColor: '#7C3AED',
    customLogoFilename: 'logo-radjatopup.png',
  },
  {
    id: 'kagehero-studio',
    name: 'KageHero Studio',
    tagline: 'Themed Marketplace & Digital Assets for Gaming Enthusiasts',
    role: 'UI/UX Designer & Lead Frontend Developer',
    type: 'case-study',
    featured: false,
    category: 'Frontend Engineering',
    technologies: ['HTML5/Sass', 'JavaScript ES6+', 'Figma', 'Responsive Design', 'Animation'],
    summary:
      'Niche gaming marketplace for the Naruto Shippuden / Boruto ecosystem with curated top-up services, custom digital assets, and franchise-inspired design language.',
    fullDescription:
      'Designed and coded a high-immersion digital commerce storefront tailored to anime gaming communities. Created custom franchise iconography, dynamic card hover effects, and structured service menus that resonate with dedicated fandoms.',
    keyFeatures: [
      'Franchise-Aligned Design System: Custom ninja-aesthetic colorways, badges, and typography',
      'Interactive Product Catalog with instant tag filtering and item previews',
      'Customer Support Bridge: Direct WhatsApp/Discord integration for custom concierge orders',
      'Rock-Solid Responsive Layouts across ultra-wide monitors down to budget Android smartphones',
    ],
    architectureHighlights: [
      'Zero-bloat architecture with custom CSS grid logic for optimal browser rendering performance',
      'Pixel-perfect Figma-to-code translation maintaining typographic hierarchy and sharp iconography',
    ],
    impactOrContext:
      'Successfully served hundreds of community members with zero reported checkout layout glitches across devices.',
    logoInitial: 'KH',
    themeColor: '#EA580C',
    customLogoFilename: 'logo-kagehero.png',
  },
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  // FEATURED HIGHLIGHTS (Top 3)
  {
    id: 'oshsp-2024-gold',
    title: 'Gold Medal — Olimpiade Sains Hari Sumpah Pemuda (OSHSP) 2024',
    issuer: 'OSHSP',
    issuerFullName: 'CV. Divya Cahaya Prestasi (AHU-0057943-AH.01.14 Tahun 2021)',
    category: 'academic',
    date: 'Oct 25–27, 2024',
    grade: 'Grade A+ (Nilai A+)',
    field: 'Mathematics (Bidang Matematika)',
    level: 'National Level / Mahasiswa (Perguruan Tinggi)',
    certId: '593/01/OSHSP/2024',
    featured: true,
    highlightType: 'gold-medal',
    description:
      'Awarded the prestigious Gold Medal with Grade A+ in the Mathematics category at the nationwide Olimpiade Sains Hari Sumpah Pemuda 2024, competing against top university students across Indonesia.',
    skillsLearned: ['Discrete Mathematics', 'Applied Logic', 'Algorithmic Problem Solving', 'Quantitative Analysis'],
    imagePlaceholderColor: '#B45309',
    customImageFilename: 'award-oshsp-2024.png',
  },
  {
    id: 'kshpi-2024-gold',
    title: 'Gold Medal — Kompetisi Sains Hari Pahlawan Indonesia (KSHPI) 2024',
    issuer: 'KSHPI',
    issuerFullName: 'PT. Eka Edukasi Utama (AHU-0122241 AH.01.11.TAHUN 2022)',
    category: 'academic',
    date: 'Nov 25–28, 2024',
    grade: 'Grade A+ (Nilai A+)',
    field: 'History (Bidang Sejarah)',
    level: 'National Level / Mahasiswa (Perguruan Tinggi)',
    certId: '1/01/KSHPI/2024',
    featured: true,
    highlightType: 'gold-medal',
    description:
      'Awarded the National Gold Medal with Grade A+ in History at the Kompetisi Sains Hari Pahlawan Indonesia 2024, demonstrating comprehensive socio-historical analysis and research precision.',
    skillsLearned: ['Historical Research', 'Critical Analysis', 'Sociological Syntheses', 'National Heritage'],
    imagePlaceholderColor: '#DC2626',
    customImageFilename: 'award-kshpi-2024.png',
  },
  {
    id: 'perpusnas-press-author',
    title: 'Published Author — Perpustakaan Nasional Republik Indonesia',
    issuer: 'Perpusnas',
    issuerFullName: 'Perpustakaan Nasional RI (Perpusnas Press)',
    category: 'publications',
    date: 'May 2026',
    certId: 'HMP.05/ 674 /2026',
    featured: true,
    highlightType: 'publication',
    description:
      'Selected essay "Gawai dalam Genggaman, Dunia dalam Kebutaan: Menciptakan Produktivitas Positif Melalui Jendela Digital Perpusnas" published in the official Perpusnas Press flipbook celebrating the 46th anniversary of the National Library of Indonesia.',
    verifyUrl: 'https://press.perpusnas.go.id/files/flipbooks/1635/mobile/index.html#p=293',
    skillsLearned: ['Digital Productivity', 'Technology Ethics', 'Published Academic Writing', 'Information Literacy'],
    imagePlaceholderColor: '#0F766E',
    customImageFilename: 'cert-perpusnas-press.png',
  },

  // CLOUD & AI
  {
    id: 'aws-responsible-ai',
    title: 'Responsible Artificial Intelligence Practices',
    issuer: 'AWS',
    issuerFullName: 'Amazon Web Services Training & Certification',
    category: 'cloud-ai',
    date: 'Aug 07, 2026',
    description:
      'Comprehensive AWS curriculum covering ethical AI principles, bias mitigation, transparency, model explainability, and regulatory governance in production machine learning.',
    skillsLearned: ['Responsible AI', 'Model Explainability', 'Bias Mitigation', 'AI Governance'],
    imagePlaceholderColor: '#FF9900',
    customImageFilename: 'cert-aws-responsible-ai.png',
  },
  {
    id: 'aws-api-gateway',
    title: 'Amazon API Gateway for Serverless Applications (Bahasa Indonesia)',
    issuer: 'AWS',
    issuerFullName: 'Amazon Web Services Training & Certification',
    category: 'cloud-ai',
    date: 'Aug 07, 2026',
    description:
      'Hands-on mastery of designing, securing, and maintaining scalable REST and WebSocket APIs on AWS with serverless backends, authentication keys, and traffic throttling.',
    skillsLearned: ['Amazon API Gateway', 'Serverless Architecture', 'REST & WebSocket APIs', 'Throttling & Auth'],
    imagePlaceholderColor: '#FF9900',
    customImageFilename: 'cert-aws-api-gateway.png',
  },
  {
    id: 'aws-iam-identity-center',
    title: 'AWS Identity and Access Management — Identity Center Getting Started',
    issuer: 'AWS',
    issuerFullName: 'Amazon Web Services Training & Certification',
    category: 'cloud-ai',
    date: 'Aug 07, 2026',
    description:
      'Architectural principles for multi-account AWS access control, SSO integration, least-privilege security policies, and enterprise user directory synchronization.',
    skillsLearned: ['AWS IAM', 'IAM Identity Center', 'Multi-Account Security', 'Least-Privilege RBAC'],
    imagePlaceholderColor: '#FF9900',
    customImageFilename: 'cert-aws-iam.png',
  },
  {
    id: 'aws-bedrock-guardrails',
    title: 'Building Safe and Responsible Generative AI Applications with Amazon Bedrock Guardrails',
    issuer: 'AWS',
    issuerFullName: 'Amazon Web Services Training & Certification',
    category: 'cloud-ai',
    date: 'Aug 07, 2026',
    description:
      'Implementation of content filters, topic boundaries, PII redaction, and hallucination reduction policies for enterprise LLMs on Amazon Bedrock.',
    skillsLearned: ['Amazon Bedrock', 'Guardrails Configuration', 'PII Redaction', 'Safety Policies'],
    imagePlaceholderColor: '#FF9900',
    customImageFilename: 'cert-aws-bedrock-guardrails.png',
  },
  {
    id: 'aws-data-engineering',
    title: 'Data Engineering on AWS — Foundations',
    issuer: 'AWS',
    issuerFullName: 'Amazon Web Services Training & Certification',
    category: 'cloud-ai',
    date: 'Aug 08, 2026',
    description:
      'Foundational data pipeline architecture on AWS: S3 data lakes, Glue ETL, Athena querying, Redshift warehousing, and streaming analytics pipelines.',
    skillsLearned: ['AWS S3 Lakes', 'AWS Glue & ETL', 'Amazon Athena', 'Data Pipelines'],
    imagePlaceholderColor: '#FF9900',
    customImageFilename: 'cert-aws-data-engineering.png',
  },
  {
    id: 'nvidia-dsx-air',
    title: 'Getting Started with NVIDIA DSX Air',
    issuer: 'NVIDIA',
    issuerFullName: 'NVIDIA Training / Global Education Services & Field Enablement',
    category: 'cloud-ai',
    date: 'Aug 08, 2026',
    description:
      'Verified completion of NVIDIA DSX Air platform fundamentals, accelerating data science pipelines and AI workflow orchestration on high-performance compute clusters.',
    skillsLearned: ['NVIDIA DSX Air', 'GPU Acceleration', 'AI Workflow Orchestration', 'Compute Clusters'],
    imagePlaceholderColor: '#76B900',
    customImageFilename: 'cert-nvidia-dsx-air.png',
  },
  {
    id: 'nvidia-cvt-fundamentals',
    title: 'Cable Validation Tool (CVT) Fundamentals',
    issuer: 'NVIDIA',
    issuerFullName: 'NVIDIA Training / Global Education Services & Field Enablement',
    category: 'cloud-ai',
    date: 'Aug 08, 2026',
    description:
      'Hardware and network topology validation for high-density NVIDIA DGX/SuperPOD clusters using automated cable validation and link diagnostics tools.',
    skillsLearned: ['NVIDIA CVT', 'Cluster Topology', 'Hardware Diagnostics', 'InfiniBand Verification'],
    imagePlaceholderColor: '#76B900',
    customImageFilename: 'cert-nvidia-cvt.png',
  },
  {
    id: 'google-skills-infra',
    title: 'Essential Google Cloud Infrastructure: Foundation',
    issuer: 'Google Skills',
    issuerFullName: 'Google Cloud Training & Skills',
    category: 'cloud-ai',
    date: 'Aug 2026',
    verifyUrl: 'https://www.skills.google/public_profiles/19eb8264-5dd8-4e7c-a55e-f5e468ae6bcc/badges/26894567',
    description:
      'Foundational architectural concepts on Google Cloud: Compute Engine, VPC networking, Cloud Storage, IAM roles, and deployment management.',
    skillsLearned: ['Google Cloud Compute', 'VPC Networking', 'Cloud Storage', 'IAM Roles'],
    imagePlaceholderColor: '#4285F4',
    customImageFilename: 'cert-google-infra.png',
  },
  {
    id: 'google-skills-gemini',
    title: 'Gemini for Data Scientists and Analysts',
    issuer: 'Google Skills',
    issuerFullName: 'Google Cloud Training & Skills',
    category: 'cloud-ai',
    date: 'Aug 2026',
    verifyUrl: 'https://www.skills.google/public_profiles/ef22e3fc-d6e0-4023-af67-20d5351fa38a/badges/26480644',
    description:
      'Harnessing Gemini multimodal models and BigQuery ML for data analysis, code generation, predictive workflows, and automated reporting.',
    skillsLearned: ['Gemini Multimodal', 'BigQuery ML', 'Automated Insights', 'Prompt Engineering'],
    imagePlaceholderColor: '#4285F4',
    customImageFilename: 'cert-google-gemini.png',
  },

  // MARKETING & ANALYTICS
  {
    id: 'google-analytics',
    title: 'Google Analytics Certification',
    issuer: 'Google',
    issuerFullName: 'Google Skillshop / Google Certified',
    category: 'marketing',
    date: 'Aug 08, 2026',
    validUntil: 'Aug 08, 2027',
    certId: '190978287',
    description:
      'Official Google certification validating proficiency in GA4 event tracking, cross-platform user journey attribution, conversion funnel optimization, and custom exploration reports.',
    skillsLearned: ['Google Analytics 4 (GA4)', 'Conversion Tracking', 'Attribution Modeling', 'User Analytics'],
    imagePlaceholderColor: '#EA4335',
    customImageFilename: 'cert-google-analytics.png',
  },
  {
    id: 'google-campaign-manager-360',
    title: 'Campaign Manager 360 Certification',
    issuer: 'Google',
    issuerFullName: 'Google Marketing Platform / Skillshop',
    category: 'marketing',
    date: 'Aug 08, 2026',
    validUntil: 'Aug 08, 2027',
    certId: '191000751',
    description:
      'Comprehensive verification in enterprise digital advertising ad serving, Floodlight conversion tagging, creative trafficking, and cross-channel campaign measurement.',
    skillsLearned: ['Campaign Manager 360', 'Floodlight Tagging', 'Ad Serving', 'Measurement Protocols'],
    imagePlaceholderColor: '#FBBC05',
    customImageFilename: 'cert-campaign-manager360.png',
  },

  // ACADEMIC & ADDITIONAL
  {
    id: 'osn-geografi-10th',
    title: '10th OSN Tingkat Kota — Bidang Geografi (Champion/Winner)',
    issuer: 'OSN',
    issuerFullName: 'Olimpiade Sains Nasional (OSN) Tingkat Kota Cilegon',
    category: 'academic',
    date: '2024',
    field: 'Geography & Geospatial Analysis',
    description:
      'Winner in the municipal level of the National Science Olympiad in Geography, showcasing deep mastery of GIS concepts, climate systems, and physical-human geography.',
    skillsLearned: ['Spatial Analysis', 'Geomorphology', 'Resource Management', 'Climatology'],
    imagePlaceholderColor: '#059669',
    customImageFilename: 'cert-osn-geografi.png',
  },
  {
    id: 'toefl-prediction',
    title: 'TOEFL Prediction Test — Certificate of Completion',
    issuer: 'TOEFL',
    issuerFullName: 'Standardized English Language Assessment',
    category: 'academic',
    date: '2025',
    description:
      'Demonstrated high English language proficiency across listening comprehension, structural grammar, and academic reading analysis for global technical discourse.',
    skillsLearned: ['Academic English', 'Technical Reading', 'Grammar & Syntax', 'Listening Comprehension'],
    imagePlaceholderColor: '#4F46E5',
    customImageFilename: 'cert-toefl.png',
  },
];
