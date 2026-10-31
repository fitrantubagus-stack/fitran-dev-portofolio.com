import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, HIGHLIGHTS_METRICS } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import { ScrambleText } from './ScrambleText';
import { GoogleDeveloperLogo } from './GoogleDeveloperLogo';
import { BrandIcon } from './BrandIcon';
import { IsometricTFMonogram } from './IsometricTFMonogram';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  ShieldCheck,
  Copy,
  Check,
  ArrowRight,
  Award,
  BookOpen,
  Cpu,
  Medal,
} from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  onNavigate: (section: SectionId) => void;
}

interface HeroBadgeItem {
  id: string;
  label: string;
  sublabel: string;
  href?: string;
  pillClass: string;
  textClass: string;
  logoRender: React.ReactNode;
  popupLogoRender: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [activePopupId, setActivePopupId] = useState<string | null>(null);
  const { t, language } = useLanguage();

  // Auto pop-up showcase sequence on initial website load so the user sees the unique logo pop-up immediately
  useEffect(() => {
    const t1 = setTimeout(() => setActivePopupId('maps'), 1200);
    const t2 = setTimeout(() => setActivePopupId('firebase'), 2300);
    const t3 = setTimeout(() => setActivePopupId('nvidia'), 3400);
    const t4 = setTimeout(() => setActivePopupId('gdg'), 4500);
    const t5 = setTimeout(() => setActivePopupId(null), 5700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const metricIcons: Record<string, React.ReactNode> = {
    'gold-medals': <Medal className="w-5 h-5 text-amber-500" />,
    'perpusnas-author': <BookOpen className="w-5 h-5 text-emerald-500" />,
    'google-tier': <Award className="w-5 h-5 text-blue-500" />,
    'cloud-certifications': <Cpu className="w-5 h-5 text-purple-500" />,
  };

  const heroBadges: HeroBadgeItem[] = [
    {
      id: 'maps',
      label: t.hero.mapsInnovators,
      sublabel: 'Google Maps Platform Innovators',
      href: 'https://me.developers.google.com/badges/community/innovators/maps',
      pillClass:
        'border-red-200/90 dark:border-red-900/50 bg-white dark:bg-zinc-900 hover:border-red-400',
      textClass: 'text-red-600 dark:text-red-400',
      logoRender: (
        <img
          src="/certificates/badge-google-maps-innovators.svg"
          alt="Google Maps Platform Innovators"
          className="w-9 h-9 object-contain shrink-0"
        />
      ),
      popupLogoRender: (
        <img
          src="/certificates/badge-google-maps-innovators.svg"
          alt="Google Maps Platform Innovators"
          className="w-20 h-20 object-contain drop-shadow-md"
        />
      ),
    },
    {
      id: 'firebase',
      label: 'Firebase Studio',
      sublabel: 'Google Developer Program • Firebase Studio',
      href: 'https://me.developers.google.com/badges/community/firebasestudio/firebase-studio',
      pillClass:
        'border-amber-200/90 dark:border-amber-900/50 bg-white dark:bg-zinc-900 hover:border-amber-400',
      textClass: 'text-amber-600 dark:text-amber-400',
      logoRender: (
        <img
          src="/certificates/badge-firebase-studio.svg"
          alt="Firebase Studio"
          className="w-9 h-9 object-contain shrink-0"
        />
      ),
      popupLogoRender: (
        <img
          src="/certificates/badge-firebase-studio.svg"
          alt="Firebase Studio"
          className="w-20 h-20 object-contain drop-shadow-md"
        />
      ),
    },
    {
      id: 'nvidia',
      label: 'NVIDIA Developer',
      sublabel: 'Official NVIDIA Developer Program & DLI',
      href: 'https://me.developers.google.com/badges/nvidia-developer',
      pillClass:
        'border-emerald-200/90 dark:border-emerald-900/50 bg-white dark:bg-zinc-900 hover:border-emerald-400',
      textClass: 'text-emerald-700 dark:text-emerald-400',
      logoRender: (
        <div className="flex items-center gap-1.5 shrink-0">
          <img
            src="/certificates/badge-nvidia-developer.svg"
            alt="NVIDIA Developer Badge"
            className="w-9 h-9 object-contain shrink-0"
          />
          <span className="bg-white px-1.5 py-0.5 rounded border border-zinc-200 inline-flex items-center">
            <img
              src="/official-nvidia-logo.png"
              alt="NVIDIA"
              className="h-5 w-auto object-contain"
            />
          </span>
        </div>
      ),
      popupLogoRender: (
        <div className="flex items-center gap-3">
          <img
            src="/certificates/badge-nvidia-developer.svg"
            alt="NVIDIA Developer Badge"
            className="w-16 h-16 object-contain drop-shadow-md"
          />
          <span className="bg-white p-2 rounded-xl border border-zinc-200 shadow-xs">
            <img
              src="/official-nvidia-logo.png"
              alt="NVIDIA"
              className="h-9 w-auto object-contain"
            />
          </span>
        </div>
      ),
    },
    {
      id: 'gdg',
      label: 'GDG on Campus',
      sublabel: 'Google Developer Groups on Campus Member',
      href: 'https://me.developers.google.com/badges/community/gdg/GDGoC/member',
      pillClass:
        'border-blue-200/90 dark:border-blue-900/50 bg-white dark:bg-zinc-900 hover:border-blue-400',
      textClass: 'text-blue-600 dark:text-blue-400',
      logoRender: (
        <img
          src="/certificates/badge-gdg-campus-member.svg"
          alt="GDG on Campus Member"
          className="w-9 h-9 object-contain shrink-0"
        />
      ),
      popupLogoRender: (
        <img
          src="/certificates/badge-gdg-campus-member.svg"
          alt="GDG on Campus Member"
          className="w-20 h-20 object-contain drop-shadow-md"
        />
      ),
    },
    {
      id: 'aws',
      label: 'AWS Certified',
      sublabel: 'Amazon Web Services & AWS Skill Builder',
      pillClass:
        'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-amber-500',
      textClass: 'text-zinc-800 dark:text-zinc-200',
      logoRender: <BrandIcon name="aws" size={18} />,
      popupLogoRender: (
        <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-zinc-200 shadow-xs">
          <img
            src="/official-aws-logo.png"
            alt="AWS"
            className="h-9 w-auto object-contain"
          />
          <span className="w-0.5 h-8 bg-zinc-200" />
          <img
            src="/official-aws-skill-builder.png"
            alt="AWS Skill Builder"
            className="h-11 w-auto object-contain scale-115"
          />
        </div>
      ),
    },
  ];

  return (
    <section
      id="home"
      className="relative w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-[#09090B]/60 backdrop-blur-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        {/* Two-Column Responsive Hero: Left Specs / Right 3D Monogram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Identity, Bio, Badges & CTA (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Verified Google Developer Program Pill */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 320, damping: 20 }}
              className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 font-mono text-xs shadow-2xs"
            >
              <GoogleDeveloperLogo size={16} />
              <span className="font-semibold">{t.hero.verifiedDev}</span>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <a
                href={PERSONAL_INFO.socialLinks.googleDev}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 font-bold text-blue-600 dark:text-blue-400"
              >
                <span>Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>

            {/* Profile Avatar + Auto-Typing Headline */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              >
                <ProfileAvatar size="hero" showBadge={true} />
              </motion.div>

              <div className="flex-1 min-w-0">
                <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mb-1 select-none">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">const</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">softwareEngineer</span>
                  <span className="text-zinc-400 dark:text-zinc-500">=</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-zinc-950 dark:text-white tracking-tight">
                    <ScrambleText text={PERSONAL_INFO.name} scrambleSpeed={40} autoPlay={true} />
                  </h1>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: [0, 1.35, 1] }}
                    transition={{ delay: 1.1, duration: 0.45, ease: 'easeOut' }}
                    title="Verified Developer Profile"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400"
                  >
                    <ShieldCheck className="w-6 h-6" />
                  </motion.span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1.5 flex items-center gap-1.5 flex-wrap">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">&gt;</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                    {t.hero.softwareEngineer}
                  </span>
                  <span className="text-zinc-400">•</span>
                  <span className="text-zinc-500 dark:text-zinc-400">
                    Universitas Muhammadiyah Banten
                  </span>
                </p>

                {/* Ecosystem Badges with Unique Spring Pop-Up Animation & Floating 3D Logo Card */}
                <div className="flex flex-wrap items-center gap-2.5 mt-4 font-mono text-[11px] relative">
                  {heroBadges.map((badge, idx) => {
                    const isPopupOpen = activePopupId === badge.id;
                    const PillTag: React.ElementType = badge.href ? motion.a : motion.div;
                    const linkProps = badge.href
                      ? {
                          href: badge.href,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        }
                      : {
                          onClick: () => onNavigate('certificates'),
                        };

                    return (
                      <div
                        key={badge.id}
                        className="relative"
                        onMouseEnter={() => setActivePopupId(badge.id)}
                        onMouseLeave={() => setActivePopupId(null)}
                      >
                        {/* Floating 3D Pop-Up Card Above Logo */}
                        <AnimatePresence>
                          {isPopupOpen && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.4, y: 18, rotateX: 25 }}
                              animate={{ opacity: 1, scale: 1, y: -8, rotateX: 0 }}
                              exit={{ opacity: 0, scale: 0.5, y: 12 }}
                              transition={{ type: 'spring', stiffness: 420, damping: 18 }}
                              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-40 w-60 p-3.5 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-200 shadow-[5px_5px_0px_#1E2265] flex flex-col items-center text-center pointer-events-none"
                            >
                              <motion.div
                                initial={{ scale: 0.5, rotate: -10 }}
                                animate={{ scale: [0.6, 1.15, 1], rotate: [0, 5, 0] }}
                                transition={{ duration: 0.4 }}
                                className="mb-2 flex items-center justify-center"
                              >
                                {badge.popupLogoRender}
                              </motion.div>
                              <p className="font-heading font-black text-xs text-zinc-950 dark:text-white leading-tight">
                                {badge.label}
                              </p>
                              <p className="font-mono text-[9.5px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">
                                {badge.sublabel}
                              </p>
                              <span className="mt-2 px-2 py-0.5 rounded-full bg-yellow-300 text-black border border-black font-mono text-[8.5px] font-black uppercase">
                                ✓ Official Verified Badge
                              </span>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Main Badge Pill with Staggered Pop-Up Entrance */}
                        <PillTag
                          {...linkProps}
                          initial={{ opacity: 0, scale: 0.2, y: 24 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          whileHover={{ scale: 1.07, y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 15,
                            delay: 0.35 + idx * 0.14,
                          }}
                          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-xs cursor-pointer transition-colors ${badge.pillClass}`}
                        >
                          <motion.div
                            animate={
                              isPopupOpen
                                ? { scale: [1, 1.25, 1.1], rotate: [0, -6, 6, 0] }
                                : { scale: 1, rotate: 0 }
                            }
                            transition={{ duration: 0.35 }}
                            className="flex items-center"
                          >
                            {badge.logoRender}
                          </motion.div>
                          <span className={`font-bold ${badge.textClass}`}>{badge.label}</span>
                        </PillTag>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bilingual Biography */}
            <div className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 border-l-2 border-emerald-500 pl-4 py-1">
              <p>{t.hero.bio}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 mt-6 w-full">
              <button
                onClick={() => onNavigate('work')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-mono text-xs font-semibold shadow-xs transition-all cursor-pointer"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('certificates')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-medium transition-colors cursor-pointer"
              >
                <Award className="w-3.5 h-3.5 text-blue-500" />
                <span>{t.hero.viewCredentials}</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs transition-colors cursor-pointer"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      {t.hero.emailCopied}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.hero.copyEmail}</span>
                  </>
                )}
              </button>

              <a
                href={PERSONAL_INFO.socialLinks.googleDev}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/30 hover:bg-blue-100/80 text-blue-700 dark:text-blue-300 font-mono text-xs transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{t.hero.googleProfile}</span>
              </a>
            </div>

            {/* Quick Status Bar */}
            <div className="mt-5 flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span>{t.hero.openForWork}</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive 3D Isometric "TF" Monogram (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-blue-500/5 to-transparent rounded-full filter blur-3xl pointer-events-none" />

            {/* The 3D Monogram Canvas */}
            <IsometricTFMonogram className="w-full" />
          </div>
        </div>

        {/* HIGHLIGHTS METRICS (Full Width 4-Card Responsive Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          {HIGHLIGHTS_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/40 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800">
                  {metricIcons[metric.id] || <Award className="w-4 h-4" />}
                </span>
                <span className="font-mono text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400 px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800">
                  {metric.badge}
                </span>
              </div>
              <div>
                <p className="font-heading font-black text-lg sm:text-xl text-zinc-950 dark:text-white">
                  {metric.value}
                </p>
                <p className="font-mono text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">
                  {language === 'id' && metric.labelId ? metric.labelId : metric.label}
                </p>
                <p className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                  {metric.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
