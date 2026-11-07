export type SectionId =
  | 'home'
  | 'about'
  | 'work'
  | 'certificates'
  | 'ecosystem'
  | 'craft-lab'
  | 'contact'
  | 'services'
  | 'security'
  | 'learning'
  | 'blog'
  | 'tools'
  | 'kamus';

export type CertificateCategory = 'all' | 'cloud-ai' | 'marketing' | 'academic' | 'publications';

export interface CertificateItem {
  id: string;
  title: string;
  issuer:
    | 'AWS'
    | 'NVIDIA'
    | 'Google'
    | 'Google Skills'
    | 'Meta'
    | 'Vercel'
    | 'Perpusnas'
    | 'OSHSP'
    | 'KSHPI'
    | 'OSN'
    | 'TOEFL'
    | 'Central Course'
    | 'Firebase'
    | 'Anthropic'
    | 'Claude Academy'
    | 'Dicoding'
    | 'Belajar Era Digital'
    | 'Indonesia Baik'
    | 'Google Developer Program'
    | 'Perpustakaan Nasional RI';
  issuerFullName: string;
  category: 'cloud-ai' | 'marketing' | 'academic' | 'publications';
  date: string;
  validUntil?: string;
  certId?: string;
  credentialId?: string;
  grade?: string;
  field?: string;
  level?: string;
  description: string;
  verifyUrl?: string;
  verifyLabel?: string;
  secondaryVerifyUrl?: string;
  secondaryVerifyLabel?: string;
  featured?: boolean;
  highlightType?: 'gold-medal' | 'publication' | 'cloud-leader';
  skillsLearned?: string[];
  imagePlaceholderColor?: string;
  customImageFilename?: string;
  isVerifiedMatch?: boolean;
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  role: string;
  type: 'live' | 'case-study';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'AI & Data' | 'Web & Mobile' | 'Frontend Engineering';
  technologies: string[];
  summary: string;
  fullDescription: string;
  keyFeatures: string[];
  architectureHighlights: string[];
  impactOrContext: string;
  logoInitial: string;
  themeColor: string;
  customLogoFilename?: string;
}

export interface EducationItem {
  institution: string;
  degreeOrFocus: string;
  period: string;
  location: string;
  description: string;
  logoFilename: string;
  badgeColor: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  keyResponsibilities: string[];
}

export interface GoogleBadge {
  name: string;
  iconName: string;
  description: string;
  badgeImageUrl?: string;
  verifyUrl?: string;
}
