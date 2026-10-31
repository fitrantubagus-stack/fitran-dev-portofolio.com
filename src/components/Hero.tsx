import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, HIGHLIGHTS_METRICS } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import { ScrambleText } from './ScrambleText';
import { GoogleDeveloperLogo } from './GoogleDeveloperLogo';
import { BrandIcon } from './BrandIcon';
import { IsometricTFMonogram } from './IsometricTFMonogram';
import { useLanguage } from '../context/LanguageContext';
import { DesignTheme } from './Navbar';
import { motion } from 'motion/react';
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
  Palette,
} from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  onNavigate: (section: SectionId) => void;
  designTheme?: DesignTheme;
  onChangeDesignTheme?: (theme: DesignTheme) => void;
}

interface HeroBadgeItem {
  id: string;
  label: string;
  sublabel: string;
  href?: string;
  pillClass: string;
  textClass: string;
  logoRender: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  designTheme = 'modern',
  onChangeDesignTheme,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeWaveIdx, setActiveWaveIdx] = useState<number | null>(null);
  const { t, language } = useLanguage();

  // Non-blocking in-place wave pop animation across the 5 logos on page load
  useEffect(() => {
    const timers = [0, 1, 2, 3, 4].map((idx) =>
      setTimeout(() => setActiveWaveIdx(idx), 700 + idx * 450)
    );
    const clearTimer = setTimeout(() => setActiveWaveIdx(null), 3200);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(clearTimer);
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
    },
    {
      id: 'aws',
      label: 'AWS Certified',
      sublabel: 'Amazon Web Services & AWS Skill Builder',
      pillClass:
        'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-amber-500',
      textClass: 'text-zinc-800 dark:text-zinc-200',
      logoRender: <BrandIcon name="aws" size={18} />,
    },
  ];

  return (
    <section
      id="home"
      className={`relative w-full border-b transition-colors duration-300 overflow-hidden ${
        designTheme === 'clipboard'
          ? 'border-blue-900/30 py-6 sm:py-10'
          : designTheme === 'arcade'
            ? 'border-[#D4A038]/40 bg-gradient-to-b from-[#2A210E] via-[#18140A] to-[#120F07] py-6 sm:py-10'
            : 'border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#09090B]/70 backdrop-blur-xs py-6 sm:py-12'
      }`}
    >
      {/* THEME 1 (MODERN): Subtle Cyan-Sky Radial Top Glow (matches Eka Revandi reference) */}
      {designTheme === 'modern' && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-80 opacity-70 dark:opacity-25"
          style={{
            background:
              'radial-gradient(ellipse 75% 60% at 50% -15%, rgba(165, 243, 252, 0.65), rgba(224, 242, 254, 0.25) 55%, transparent 80%)',
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Quick 3-Theme Selector Bar at Top of Hero */}
        {onChangeDesignTheme && (
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5 pb-3 border-b border-zinc-200/60 dark:border-zinc-800/60">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 font-mono text-xs shadow-2xs">
              <GoogleDeveloperLogo size={15} />
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
            </div>

            {/* 3 Design Theme Switcher Pills */}
            <div className="flex items-center gap-1.5 bg-white/90 dark:bg-zinc-900/90 p-1 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-2xs font-mono text-[11px]">
              <span className="px-2 text-zinc-400 hidden sm:inline-flex items-center gap-1">
                <Palette className="w-3 h-3" />
                <span>Tema:</span>
              </span>
              {[
                { id: 'modern' as DesignTheme, label: '1. Modern Cyan' },
                { id: 'clipboard' as DesignTheme, label: '2. Pixel Clipboard' },
                { id: 'arcade' as DesignTheme, label: '3. Gold Arcade' },
              ].map((th) => (
                <button
                  key={th.id}
                  onClick={() => onChangeDesignTheme(th.id)}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer font-bold ${
                    designTheme === th.id
                      ? th.id === 'arcade'
                        ? 'bg-[#D4A038] text-black shadow-2xs'
                        : th.id === 'clipboard'
                          ? 'bg-blue-600 text-white shadow-2xs'
                          : 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-2xs'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {th.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* THEME WRAPPER: ADAPTS TO MODERN / CLIPBOARD (AMRU) / ARCADE (KANOEN)  */}
        {/* ===================================================================== */}
        <div
          className={
            designTheme === 'clipboard'
              ? 'relative rounded-3xl bg-[#C89D66] border-4 border-[#7C4D25] p-3 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
              : designTheme === 'arcade'
                ? 'relative rounded-3xl bg-gradient-to-b from-[#785A1E]/40 via-[#3F3011]/50 to-[#221A09]/70 border-2 border-[#D4A038]/80 p-5 sm:p-8 shadow-[0_16px_45px_rgba(212,160,56,0.18)] backdrop-blur-md'
                : ''
          }
        >
          {/* THEME 2 (CLIPBOARD): Wooden Clipboard Top Metallic Clip & Notebook Paper Sheet */}
          {designTheme === 'clipboard' && (
            <div className="hidden sm:flex justify-center -mt-8 mb-3 relative z-20 pointer-events-none">
              <div className="w-36 h-8 rounded-t-xl bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-600 border-2 border-zinc-800 shadow-md flex items-center justify-center">
                <div className="w-16 h-2.5 rounded-full bg-zinc-800/70" />
              </div>
            </div>
          )}

          {/* THEME 3 (GOLD ARCADE): Retro Loading Bar + Pixel Ghost Mascot Header (Kanoen Style) */}
          {designTheme === 'arcade' && (
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#D4A038]/30">
              <div className="flex items-center gap-3">
                <div className="font-mono text-[10px] text-[#FDE68A]">
                  <div className="w-32 h-3.5 border border-[#D4A038] p-0.5 rounded-xs flex gap-0.5 bg-black/40">
                    {[1, 2, 3, 4, 5, 6, 7].map((b) => (
                      <span key={b} className="flex-1 bg-[#FDE68A] inline-block" />
                    ))}
                    <span className="flex-1 bg-transparent inline-block" />
                    <span className="flex-1 bg-transparent inline-block" />
                  </div>
                  <p className="tracking-widest mt-0.5 font-bold text-center">LOADING • EDC 2026</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#D4A038]/20 border border-[#D4A038] text-[#FDE68A] font-mono text-xs font-bold">
                  Portfolio • Fitran Edition
                </span>
              </div>

              {/* Cute 8-bit Pixel Ghost with Wizard Hat (from Kanoen reference, non-blocking) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-[#D4A038]/50 text-[#FDE68A] font-mono text-xs"
              >
                <svg width="24" height="24" viewBox="0 0 16 16" className="shrink-0">
                  {/* Wizard Hat */}
                  <rect x="6" y="1" width="4" height="2" fill="#3B82F6" />
                  <rect x="4" y="3" width="8" height="1" fill="#FACC15" />
                  <rect x="3" y="4" width="10" height="1" fill="#1E293B" />
                  {/* Ghost Body */}
                  <rect x="4" y="5" width="8" height="8" fill="#F8FAFC" />
                  <rect x="3" y="6" width="10" height="6" fill="#F8FAFC" />
                  {/* Eyes */}
                  <rect x="6" y="7" width="1.5" height="2" fill="#0F172A" />
                  <rect x="9.5" y="7" width="1.5" height="2" fill="#0F172A" />
                  {/* Ghost Bottom Feet */}
                  <rect x="3" y="13" width="2" height="1.5" fill="#F8FAFC" />
                  <rect x="7" y="13" width="2" height="1.5" fill="#F8FAFC" />
                  <rect x="11" y="13" width="2" height="1.5" fill="#F8FAFC" />
                </svg>
                <span>Astral Mode Active</span>
              </motion.div>
            </div>
          )}

          {/* Inner Sheet for Clipboard Theme */}
          <div
            className={
              designTheme === 'clipboard'
                ? 'rounded-2xl bg-[#FAF8F2] dark:bg-zinc-900 border-2 border-zinc-800 p-5 sm:p-8 shadow-inner relative'
                : ''
            }
            style={
              designTheme === 'clipboard'
                ? {
                    backgroundImage:
                      'linear-gradient(to right, rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.07) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }
                : undefined
            }
          >
            {/* Two-Column Responsive Hero: Left Specs / Right 3D Monogram */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* LEFT COLUMN: Identity, Bio, Badges & CTA (7 cols on lg) */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Profile Avatar + Auto-Typing Headline */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                    className={
                      designTheme === 'clipboard'
                        ? 'p-2.5 pb-4 bg-white border-2 border-zinc-900 rounded-2xl shadow-[4px_4px_0px_#1E3A8A] -rotate-2 shrink-0'
                        : designTheme === 'arcade'
                          ? 'p-1.5 rounded-full border-2 border-[#D4A038] bg-[#3A2E14] shadow-[0_0_25px_rgba(212,160,56,0.3)] shrink-0'
                          : 'shrink-0'
                    }
                  >
                    <ProfileAvatar size="hero" showBadge={true} />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mb-1 select-none">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">const</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">
                        softwareEngineer
                      </span>
                      <span className="text-zinc-400 dark:text-zinc-500">=</span>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <h1 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-zinc-950 dark:text-white tracking-tight">
                        <ScrambleText text={PERSONAL_INFO.name} scrambleSpeed={38} autoPlay={true} />
                      </h1>
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: [0, 1.35, 1] }}
                        transition={{ delay: 1.0, duration: 0.45, ease: 'easeOut' }}
                        title="Verified Developer Profile"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400"
                      >
                        <ShieldCheck className="w-6 h-6" />
                      </motion.span>
                    </div>

                    <p
                      className={`text-xs sm:text-sm mt-1.5 flex items-center gap-1.5 flex-wrap ${
                        designTheme === 'arcade'
                          ? 'text-amber-100/90'
                          : 'text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      <span className="text-emerald-500 font-bold">&gt;</span>
                      <span
                        className={`font-semibold ${
                          designTheme === 'arcade'
                            ? 'text-[#FDE68A]'
                            : 'text-zinc-800 dark:text-zinc-200'
                        }`}
                      >
                        {t.hero.softwareEngineer}
                      </span>
                      <span className="opacity-50">•</span>
                      <span>Universitas Muhammadiyah Banten</span>
                    </p>

                    {/* ========================================================= */}
                    {/* ECOSYSTEM BADGE LOGOS: IN-PLACE POP-UP (NEVER BLOCKS TEXT) */}
                    {/* ========================================================= */}
                    <div className="flex flex-wrap items-center gap-2.5 mt-4 font-mono text-[11px]">
                      {heroBadges.map((badge, idx) => {
                        const isWaveActive = activeWaveIdx === idx;
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
                          <PillTag
                            key={badge.id}
                            {...linkProps}
                            initial={{ opacity: 0, scale: 0.15, y: 20 }}
                            animate={
                              isWaveActive
                                ? {
                                    opacity: 1,
                                    scale: [1, 1.14, 1.04],
                                    y: [0, -5, 0],
                                  }
                                : { opacity: 1, scale: 1, y: 0 }
                            }
                            whileHover={{
                              scale: 1.1,
                              y: -3,
                              transition: { type: 'spring', stiffness: 450, damping: 14 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                              type: 'spring',
                              stiffness: 380,
                              damping: 15,
                              delay: 0.25 + idx * 0.12,
                            }}
                            title={`${badge.label} — ${badge.sublabel}`}
                            className={`group flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-xs cursor-pointer transition-shadow hover:shadow-md ${badge.pillClass} ${
                              isWaveActive ? 'ring-2 ring-blue-400/70 shadow-md' : ''
                            }`}
                          >
                            <motion.div
                              animate={
                                isWaveActive
                                  ? {
                                      scale: [1, 1.32, 1.1],
                                      rotate: [0, -10, 10, 0],
                                    }
                                  : { scale: 1, rotate: 0 }
                              }
                              transition={{ duration: 0.42 }}
                              className="flex items-center group-hover:scale-120 group-hover:-rotate-6 transition-transform duration-200"
                            >
                              {badge.logoRender}
                            </motion.div>
                            <span className={`font-bold ${badge.textClass}`}>{badge.label}</span>
                          </PillTag>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bilingual Biography */}
                <div
                  className={`mt-5 text-sm sm:text-base leading-relaxed border-l-2 border-emerald-500 pl-4 py-1 ${
                    designTheme === 'arcade'
                      ? 'text-amber-50/90'
                      : 'text-zinc-600 dark:text-zinc-300'
                  }`}
                >
                  <p>{t.hero.bio}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5 mt-6 w-full">
                  <button
                    onClick={() => onNavigate('work')}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs font-semibold shadow-xs transition-all cursor-pointer ${
                      designTheme === 'arcade'
                        ? 'bg-[#D4A038] hover:bg-[#e3b046] text-black font-bold'
                        : designTheme === 'clipboard'
                          ? 'bg-blue-600 hover:bg-blue-700 text-white border-2 border-zinc-900 shadow-[3px_3px_0px_#000]'
                          : 'bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950'
                    }`}
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
                <div
                  className={`mt-5 flex items-center gap-2 font-mono text-xs ${
                    designTheme === 'arcade'
                      ? 'text-[#FDE68A]/80'
                      : 'text-zinc-500 dark:text-zinc-400'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                  <span>{t.hero.openForWork}</span>
                </div>
              </div>

              {/* RIGHT COLUMN: Interactive 3D Isometric "TF" Monogram (5 cols on lg) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-blue-500/5 to-transparent rounded-full filter blur-3xl pointer-events-none" />
                <IsometricTFMonogram className="w-full" />
              </div>
            </div>

            {/* HIGHLIGHTS METRICS (Full Width 4-Card Responsive Grid) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
              {HIGHLIGHTS_METRICS.map((metric) => (
                <div
                  key={metric.id}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                    designTheme === 'clipboard'
                      ? 'border-2 border-zinc-900 bg-white shadow-[4px_4px_0px_#1E3A8A]'
                      : designTheme === 'arcade'
                        ? 'border-[#D4A038]/60 bg-[#2A200C]/90 text-amber-50'
                        : 'border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/40 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}
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
                    <p
                      className={`font-heading font-black text-lg sm:text-xl ${
                        designTheme === 'arcade'
                          ? 'text-[#FDE68A]'
                          : 'text-zinc-950 dark:text-white'
                      }`}
                    >
                      {metric.value}
                    </p>
                    <p
                      className={`font-mono text-xs font-semibold mt-0.5 ${
                        designTheme === 'arcade'
                          ? 'text-amber-100'
                          : 'text-zinc-800 dark:text-zinc-200'
                      }`}
                    >
                      {language === 'id' && metric.labelId ? metric.labelId : metric.label}
                    </p>
                    <p
                      className={`font-mono text-[11px] mt-1 ${
                        designTheme === 'arcade'
                          ? 'text-amber-200/70'
                          : 'text-zinc-500 dark:text-zinc-400'
                      }`}
                    >
                      {metric.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
