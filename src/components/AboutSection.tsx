import React from 'react';
import {
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  GOOGLE_DEV_BADGES,
  PERSONAL_INFO,
} from '../data/portfolioData';
import { GoogleDeveloperLogo } from './GoogleDeveloperLogo';
import { BrandIcon } from './BrandIcon';
import { ScrambleText } from './ScrambleText';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { DesignTheme } from './Navbar';
import {
  GraduationCap,
  Briefcase,
  ExternalLink,
  Award,
  Sparkles,
  ShieldCheck,
  Building,
  Users,
  Flame,
  MapPin,
  Cpu,
  BookOpen,
  Calendar,
} from 'lucide-react';

interface AboutSectionProps {
  designTheme?: DesignTheme;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ designTheme = 'modern' }) => {
  const { t, language } = useLanguage();
  const isAnimasi = designTheme === 'clipboard';
  const isKlasik = designTheme === 'arcade';

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-blue-500" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-emerald-500" />;
      case 'Users':
        return <Users className="w-4 h-4 text-indigo-500" />;
      case 'Building':
        return <Building className="w-4 h-4 text-cyan-500" />;
      case 'Flame':
        return <Flame className="w-4 h-4 text-orange-500" />;
      case 'MapPin':
        return (
          <img
            src="/official-google-maps-innovators.png"
            alt="Google Maps Platform Innovators"
            className="w-5 h-5 object-contain rounded-full"
          />
        );
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-emerald-600" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4 text-purple-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <section
      id="about"
      className={`w-full py-12 relative overflow-hidden transition-colors duration-500 ${
        isAnimasi
          ? 'bg-gradient-to-b from-[#070B18] via-[#0B1120] to-[#060913] text-white border-b border-indigo-500/30'
          : isKlasik
          ? 'bg-[#F7F3E8] dark:bg-[#121110] text-zinc-900 dark:text-stone-100 border-b-2 border-[#B48A3E]'
          : 'border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-[#09090B]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`pb-8 border-b ${
            isAnimasi
              ? 'border-indigo-500/30'
              : isKlasik
              ? 'border-[#B48A3E]/50'
              : 'border-zinc-200 dark:border-zinc-800'
          }`}
        >
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs mb-2 ${
              isAnimasi
                ? 'rounded-full border border-cyan-400/40 bg-indigo-500/20 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                : isKlasik
                ? 'rounded-none border border-[#B48A3E] bg-[#1C1917] text-[#E5C158] uppercase tracking-widest'
                : 'rounded-full border border-purple-200 dark:border-purple-900/60 bg-purple-50/70 dark:bg-purple-950/30 text-purple-800 dark:text-purple-300'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2
            className={`font-heading font-extrabold text-2xl sm:text-3xl tracking-tight ${
              isAnimasi
                ? 'text-white'
                : isKlasik
                ? 'font-serif text-zinc-950 dark:text-stone-100'
                : 'text-zinc-950 dark:text-white'
            }`}
          >
            <ScrambleText text={t.about.title} scrambleSpeed={20} />
          </h2>
          <p
            className={`text-sm mt-1 max-w-2xl ${
              isAnimasi
                ? 'text-slate-300'
                : isKlasik
                ? 'text-zinc-700 dark:text-stone-300 font-serif italic'
                : 'text-zinc-600 dark:text-zinc-400'
            }`}
          >
            {t.about.subtitle}
          </p>
        </div>

        {/* 1. Google Developer Program Featured Banner */}
        <ScrollReveal variant="fade-up">
          <div
            className={`mt-8 p-6 transition-all ${
              isAnimasi
                ? 'rounded-3xl border-2 border-indigo-500/40 bg-slate-900/90 shadow-[0_12px_35px_rgba(79,70,229,0.2)]'
                : isKlasik
                ? 'rounded-none border-2 border-[#B48A3E] bg-[#FDFBF7] dark:bg-[#1A1816] shadow-sm'
                : 'rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#0D1117] shadow-xs'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/40 flex items-center justify-center">
                  <GoogleDeveloperLogo size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-zinc-950 dark:text-white">
                      {t.about.googleDevProgram}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500 text-white font-mono text-[10px] font-bold">
                      Official Member
                    </span>
                  </div>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Member ID: 108601218527303855788 • Active Verified Profile
                  </p>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.socialLinks.googleDev}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-semibold transition-colors self-start sm:self-auto shadow-xs"
              >
                <span>{language === 'id' ? 'Buka Profil Resmi' : 'Open Official Profile'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
              {t.about.googleDevDesc}
            </p>

            {/* Ecosystem Badges 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-5">
              {GOOGLE_DEV_BADGES.map((badge, idx) => {
                const CardWrapper: React.ElementType = badge.verifyUrl ? 'a' : 'div';
                const wrapperProps = badge.verifyUrl
                  ? {
                      href: badge.verifyUrl,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {};
                return (
                  <ScrollReveal key={idx} delayMs={(idx % 4) * 60} variant="zoom-in">
                    <CardWrapper
                      {...wrapperProps}
                      className="h-full group p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 hover:border-blue-400 dark:hover:border-blue-600 transition-all flex items-center gap-3"
                    >
                      {badge.badgeImageUrl ? (
                        <img
                          src={badge.badgeImageUrl}
                          alt={badge.name}
                          className="w-14 h-14 object-contain shrink-0 group-hover:scale-110 transition-transform"
                        />
                      ) : (
                        <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-800 shrink-0">
                          {getBadgeIcon(badge.iconName)}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <p className="font-bold text-xs text-zinc-900 dark:text-zinc-100 truncate">
                            {badge.name}
                          </p>
                          {badge.verifyUrl && (
                            <ExternalLink className="w-3 h-3 text-blue-500 shrink-0 opacity-75 group-hover:opacity-100" />
                          )}
                        </div>
                        {badge.name.toUpperCase().includes('NVIDIA') && (
                          <div className="my-1 inline-flex bg-white px-1.5 py-0.5 rounded border border-zinc-200">
                            <img
                              src="/official-nvidia-logo.png"
                              alt="NVIDIA"
                              className="h-4 w-auto object-contain"
                            />
                          </div>
                        )}
                        {badge.name.toUpperCase().includes('GOOGLE CLOUD') && (
                          <div className="my-1 inline-flex items-center gap-1.5 bg-white px-1.5 py-0.5 rounded border border-zinc-200">
                            <img
                              src="/official-google-cloud-logo.png"
                              alt="Google Cloud"
                              className="h-4 w-auto object-contain"
                            />
                            <img
                              src="/official-gcp-logo.png"
                              alt="Google Cloud Platform"
                              className="h-4 w-auto object-contain"
                            />
                          </div>
                        )}
                        <p className="text-[10px] text-zinc-500 dark:text-zinc-400 line-clamp-2 mt-0.5 leading-tight">
                          {badge.description}
                        </p>
                      </div>
                    </CardWrapper>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* 2. Official Google Developer Badges Grid (Maps Innovators, Firebase Studio, NVIDIA Developer, GDG on Campus) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          {/* Google Maps Innovators Card */}
          <ScrollReveal delayMs={0} variant="fade-up">
            <a
              href="https://me.developers.google.com/badges/community/innovators/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group p-6 rounded-2xl border border-red-200/80 dark:border-red-900/40 bg-gradient-to-br from-red-50/30 via-white to-white dark:from-red-950/20 dark:via-[#0D1117] dark:to-[#0D1117] hover:border-red-400 transition-all shadow-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="/certificates/badge-google-maps-innovators.svg"
                  alt="Google Maps Platform Innovators"
                  className="w-20 h-20 object-contain shrink-0 group-hover:scale-105 transition-transform"
                />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-heading font-bold text-base sm:text-lg text-zinc-950 dark:text-white">
                      {t.about.mapsTitle}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-mono text-[10px] font-semibold border border-red-200 dark:border-red-900">
                      INNOVATORS
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-0.5">
                    <span>me.developers.google.com/badges/community/innovators/maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t.about.mapsDesc}
              </p>
            </a>
          </ScrollReveal>

          {/* Firebase Studio Developer Card */}
          <ScrollReveal delayMs={70} variant="fade-up">
            <a
              href="https://me.developers.google.com/badges/community/firebasestudio/firebase-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group p-6 rounded-2xl border border-amber-200/80 dark:border-amber-900/40 bg-gradient-to-br from-amber-50/30 via-white to-white dark:from-amber-950/20 dark:via-[#0D1117] dark:to-[#0D1117] hover:border-amber-400 transition-all shadow-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="/certificates/badge-firebase-studio.svg"
                  alt="Firebase Studio"
                  className="w-20 h-20 object-contain shrink-0 group-hover:scale-105 transition-transform"
                />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-heading font-bold text-base sm:text-lg text-zinc-950 dark:text-white">
                      Firebase Studio Developer
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-mono text-[10px] font-semibold border border-amber-200 dark:border-amber-900">
                      OFFICIAL BADGE
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-0.5">
                    <span>me.developers.google.com/badges/community/firebasestudio</span>
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t.about.firebaseDesc}
              </p>
            </a>
          </ScrollReveal>

          {/* NVIDIA Developer Card */}
          <ScrollReveal delayMs={140} variant="fade-up">
            <a
              href="https://me.developers.google.com/badges/nvidia-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group p-6 rounded-2xl border border-emerald-200/80 dark:border-emerald-900/40 bg-gradient-to-br from-emerald-50/30 via-white to-white dark:from-emerald-950/20 dark:via-[#0D1117] dark:to-[#0D1117] hover:border-emerald-400 transition-all shadow-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="/certificates/badge-nvidia-developer.svg"
                  alt="NVIDIA Developer"
                  className="w-20 h-20 object-contain shrink-0 group-hover:scale-105 transition-transform"
                />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-white px-2 py-0.5 rounded-md border border-zinc-200 inline-flex items-center">
                      <img
                        src="/official-nvidia-logo.png"
                        alt="NVIDIA"
                        className="h-6 w-auto object-contain"
                      />
                    </span>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-zinc-950 dark:text-white">
                      NVIDIA Developer
                    </h4>
                  </div>
                  <p className="font-mono text-[11px] text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-1">
                    <span>me.developers.google.com/badges/nvidia-developer</span>
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Anggota terverifikasi ekosistem NVIDIA Developer pada Google Developer Program dan NVIDIA Deep Learning Institute (DLI).
              </p>
            </a>
          </ScrollReveal>

          {/* GDG on Campus & Dual AWS Cloud Ecosystem Card */}
          <ScrollReveal delayMs={210} variant="fade-up">
            <a
              href="https://me.developers.google.com/badges/community/gdg/GDGoC/member"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group p-6 rounded-2xl border border-blue-200/80 dark:border-blue-900/40 bg-gradient-to-br from-blue-50/30 via-white to-white dark:from-blue-950/20 dark:via-[#0D1117] dark:to-[#0D1117] hover:border-blue-400 transition-all shadow-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src="/certificates/badge-gdg-campus-member.svg"
                  alt="GDG on Campus Member"
                  className="w-20 h-20 object-contain shrink-0 group-hover:scale-105 transition-transform"
                />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-heading font-bold text-base sm:text-lg text-zinc-950 dark:text-white">
                      GDG on Campus Member
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono text-[10px] font-semibold border border-blue-200 dark:border-blue-900">
                      GDGoC
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-0.5">
                    <span>me.developers.google.com/badges/community/gdg/GDGoC/member</span>
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Anggota resmi komunitas Google Developer Groups on Campus (GDGoC) dalam kolaborasi pengembangan perangkat lunak modern dan multi-cloud.
              </p>
            </a>
          </ScrollReveal>

          {/* Google Cloud & Google Cloud Platform (GCP) Card */}
          <ScrollReveal delayMs={240} variant="fade-up">
            <a
              href="https://www.skills.google/public_profiles/19eb8264-5dd8-4e7c-a55e-f5e468ae6bcc/badges/26894567"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group p-6 rounded-2xl border border-sky-200/80 dark:border-sky-900/40 bg-gradient-to-br from-sky-50/30 via-white to-white dark:from-sky-950/20 dark:via-[#0D1117] dark:to-[#0D1117] hover:border-sky-400 transition-all shadow-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-2xl border border-zinc-200 shrink-0 shadow-2xs">
                  <img
                    src="/official-google-cloud-logo.png"
                    alt="Google Cloud"
                    className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
                  />
                  <span className="w-px h-10 bg-zinc-200" />
                  <img
                    src="/official-gcp-logo.png"
                    alt="Google Cloud Platform"
                    className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-heading font-bold text-base sm:text-lg text-zinc-950 dark:text-white">
                      Google Cloud &amp; GCP
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-mono text-[10px] font-semibold border border-sky-200 dark:border-sky-900">
                      CLOUD INFRASTRUCTURE
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-0.5">
                    <span>skills.google/public_profiles • Badge 26894567</span>
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Tersertifikasi resmi pada ekosistem Google Cloud &amp; Google Cloud Platform (Essential Google Cloud Infrastructure: Foundation, Compute Engine, VPC, IAM, dan BigQuery).
              </p>
            </a>
          </ScrollReveal>

          {/* Claude, Anthropic & Vercel Ecosystem Card */}
          <ScrollReveal delayMs={280} variant="fade-up">
            <a
              href="https://academy.claude.com/verify/cd4bb5cc3b0fb83d807700bd5f41ba35"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full group p-6 rounded-2xl border border-orange-200/80 dark:border-orange-900/40 bg-gradient-to-br from-orange-50/30 via-white to-white dark:from-orange-950/20 dark:via-[#0D1117] dark:to-[#0D1117] hover:border-orange-400 transition-all shadow-xs"
            >
              <div className="flex items-center gap-3.5 mb-3 flex-wrap">
                <div className="flex items-center gap-2.5 bg-white px-3 py-2 rounded-2xl border border-zinc-200 shrink-0 shadow-2xs overflow-hidden">
                  <img
                    src="/official-claude-logo.png"
                    alt="Claude"
                    className="h-10 w-auto object-contain scale-135 group-hover:scale-145 transition-transform"
                  />
                  <span className="w-px h-8 bg-zinc-200" />
                  <img
                    src="/official-anthropic-logo.png"
                    alt="Anthropic"
                    className="h-8 w-auto object-contain group-hover:scale-105 transition-transform"
                  />
                  <span className="w-px h-8 bg-zinc-200" />
                  <img
                    src="/official-vercel-logo.png"
                    alt="Vercel"
                    className="h-9 w-auto object-contain scale-115 group-hover:scale-125 transition-transform"
                  />
                  <span className="w-px h-8 bg-zinc-200" />
                  <img
                    src="/official-meta-logo.png"
                    alt="Meta"
                    className="h-9 w-auto object-contain scale-125 group-hover:scale-135 transition-transform"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-heading font-bold text-base sm:text-lg text-zinc-950 dark:text-white">
                      Claude, Anthropic, Vercel &amp; Meta
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 font-mono text-[10px] font-semibold border border-orange-200 dark:border-orange-900">
                      AI &amp; CLOUD ECOSYSTEM
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-0.5">
                    <span>academy.claude.com • Vercel • Meta Blueprint</span>
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Memegang 3 sertifikasi resmi Anthropic &amp; Claude Academy (Claude 101, Claude Platform 101, AI Capabilities &amp; Limitations), sertifikasi Next.js App Router oleh Vercel Inc., serta Meta Blueprint.
              </p>
            </a>
          </ScrollReveal>

          {/* OSN, Perpusnas Press, Belajar Era Digital & SohIB National Ecosystem Card */}
          <ScrollReveal delayMs={320} variant="fade-up" className="md:col-span-2">
            <div className="block h-full group p-6 rounded-2xl border border-indigo-200/80 dark:border-indigo-900/40 bg-gradient-to-br from-indigo-50/30 via-white to-white dark:from-indigo-950/20 dark:via-[#0D1117] dark:to-[#0D1117] hover:border-indigo-400 transition-all shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3 bg-white px-3.5 py-2.5 rounded-2xl border border-zinc-200 shrink-0 shadow-2xs flex-wrap">
                  <img
                    src="/official-osn-logo.png"
                    alt="Olimpiade Sains Nasional (OSN)"
                    className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
                  />
                  <span className="w-px h-8 bg-zinc-200" />
                  <img
                    src="/official-perpusnas-press-logo.png"
                    alt="Perpusnas Press"
                    className="h-9 w-auto object-contain group-hover:scale-105 transition-transform"
                  />
                  <span className="w-px h-8 bg-zinc-200" />
                  <img
                    src="/official-belajar-era-digital-logo.png"
                    alt="Belajar Era Digital"
                    className="h-10 w-10 rounded-lg object-cover border border-zinc-200 group-hover:scale-105 transition-transform"
                  />
                  <span className="w-px h-8 bg-zinc-200" />
                  <img
                    src="/official-sohib-logo.png"
                    alt="SohIB Indonesia.go.id"
                    className="h-10 w-auto object-contain scale-115 group-hover:scale-125 transition-transform"
                  />
                  <span className="w-px h-8 bg-zinc-200" />
                  <img
                    src="/official-central-course-logo.png"
                    alt="Central Course TOEFL"
                    className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-heading font-bold text-base sm:text-lg text-zinc-950 dark:text-white">
                      OSN, Perpusnas Press, Belajar Era Digital, SohIB &amp; Central Course (TOEFL 630)
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono text-[10px] font-semibold border border-indigo-200 dark:border-indigo-900">
                      PRESTASI &amp; PUBLIKASI NASIONAL
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-blue-600 dark:text-blue-400 mt-0.5">
                    Dinas Pendidikan &amp; Kebudayaan Prov. Banten • Perpustakaan Nasional RI • Kemkomdigi RI
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                Peraih Peringkat 10 Olimpiade Sains Nasional (OSN) SMA Tingkat Kota Cilegon &amp; Peserta OSN Tingkat Provinsi Banten (Geografi), Penulis Buku Terbitan Resmi Perpusnas Press (HUT Ke-46 Perpustakaan Nasional RI), 4× Lulusan Diklat Nasional Belajar Era Digital (32 JP), serta Kontributor SohIB Indonesia.go.id.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-indigo-100 dark:border-zinc-800 font-mono text-[11px]">
                <a
                  href="https://press.perpusnas.go.id/files/flipbooks/1635/files/basic-html/page293.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold transition-colors"
                >
                  <span>Flipbook Perpusnas Press (Hal. 293)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href="https://cilacap.pikiran-rakyat.com/nasional/pr-2396690049/deretan-sma-terbaik-di-kota-cilegon-yang-juara-pada-osn-sma-2023-selain-sman-2-krakatau-steel-ada-siapa-saja?page=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-bold transition-colors"
                >
                  <span>Berita OSN (Pikiran Rakyat)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href="https://www.rbg.id/pendidikan/9448967509/ayo-cek-pengumuman-osn-sma-dan-ma-2023-tingkat-kabupaten-dan-kota-di-provinsi-banten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-bold transition-colors"
                >
                  <span>Pengumuman OSN Banten (RBG.id)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 3. Education: SMA Negeri 1 Cilegon & Universitas Muhammadiyah Banten */}
        <ScrollReveal variant="fade-up" className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-blue-500" />
            <h3 className="font-heading font-extrabold text-xl text-zinc-950 dark:text-white">
              {t.about.education}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SMA Negeri 1 Cilegon */}
            <div className="p-6 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#0D1117] shadow-xs">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 flex items-center justify-center">
                  <BrandIcon name="sman1cilegon" size={60} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-zinc-950 dark:text-white">
                    {t.about.highschoolTitle}
                  </h4>
                  <p className="font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                    2022 – 2025 • Cilegon, Banten
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {t.about.highschoolDesc}
              </p>

              <div className="space-y-2 pt-3 border-t border-zinc-100 dark:border-zinc-800 font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>2× National Gold Medalist (OSHSP &amp; KSHPI 2024)</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <img
                    src="/official-perpusnas-press-logo.png"
                    alt="Perpusnas Press"
                    className="h-4 w-auto object-contain shrink-0 bg-white px-1 py-0.5 rounded border border-zinc-200"
                  />
                  <a
                    href="https://press.perpusnas.go.id/files/flipbooks/1635/files/basic-html/page293.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1"
                  >
                    <span>Published Author Perpusnas Press — Perpustakaan Nasional RI (Hal. 293)</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <img
                    src="/official-osn-logo.png"
                    alt="OSN"
                    className="h-4.5 w-auto object-contain shrink-0 bg-white p-0.5 rounded border border-zinc-200"
                  />
                  <a
                    href="https://cilacap.pikiran-rakyat.com/nasional/pr-2396690049/deretan-sma-terbaik-di-kota-cilegon-yang-juara-pada-osn-sma-2023-selain-sman-2-krakatau-steel-ada-siapa-saja?page=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1"
                  >
                    <span>Peringkat 10 OSN Kota Cilegon &amp; Peserta OSN Provinsi Banten — Geografi</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>
              </div>
            </div>

            {/* Universitas Muhammadiyah Banten */}
            <div className="p-6 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#0D1117] shadow-xs">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 flex items-center justify-center">
                  <BrandIcon name="umbanten" size={60} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-zinc-950 dark:text-white">
                    {t.about.universityTitle}
                  </h4>
                  <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    Sep 2025 – Present • S1 Informatika
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {t.about.universityDesc}
              </p>

              <div className="space-y-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800 font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Software Architecture & Distributed Systems Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>Applied Artificial Intelligence & Cloud Infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                  <span>Undergraduate Researcher & Active Software Builder</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4. Experience Highlights */}
        <ScrollReveal variant="fade-up" className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-5 h-5 text-indigo-500" />
            <h3 className="font-heading font-extrabold text-xl text-zinc-950 dark:text-white">
              {language === 'id' ? 'Pengalaman & Kepemimpinan Teknis' : 'Experience & Technical Leadership'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <ScrollReveal key={idx} delayMs={(idx % 2) * 80} variant="fade-up">
                <div className="h-full p-5 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#0D1117] shadow-xs">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="font-bold text-base text-zinc-950 dark:text-white">
                        {exp.role}
                      </h4>
                      <p className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {exp.organization}
                      </p>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 font-mono text-[11px] text-zinc-500">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  <ul className="space-y-1 text-[11px] text-zinc-500 dark:text-zinc-400 list-disc list-inside">
                    {exp.keyResponsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
