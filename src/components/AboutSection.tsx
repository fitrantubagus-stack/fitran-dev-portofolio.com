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

export const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

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
    <section id="about" className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-[#09090B]/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-900/60 bg-purple-50/70 dark:bg-purple-950/30 text-purple-800 dark:text-purple-300 font-mono text-xs mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">
            <ScrambleText text={t.about.title} scrambleSpeed={20} />
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
            {t.about.subtitle}
          </p>
        </div>

        {/* 1. Google Developer Program Featured Banner */}
        <ScrollReveal variant="fade-up">
          <div className="mt-8 p-6 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#0D1117] shadow-xs">
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

              <div className="space-y-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800 font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>2× National Gold Medalist (OSHSP & KSHPI 2024)</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Published Author Perpustakaan Nasional RI (HUT Ke-46)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>10th OSN Tingkat Kota Champion — Geografi</span>
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
