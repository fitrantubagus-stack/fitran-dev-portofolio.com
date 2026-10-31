import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, HIGHLIGHTS_METRICS } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import { ScrambleText } from './ScrambleText';
import { GoogleDeveloperLogo } from './GoogleDeveloperLogo';
import { BrandIcon } from './BrandIcon';
import { IsometricTFMonogram } from './IsometricTFMonogram';
import { useLanguage } from '../context/LanguageContext';
import { DesignTheme } from './Navbar';
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
  FileText,
  Sparkles,
  GraduationCap,
  MapPin,
} from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  onNavigate: (section: SectionId) => void;
  designTheme?: DesignTheme;
  onChangeDesignTheme?: (theme: DesignTheme) => void;
  onOpenCV?: () => void;
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

const ANIMATED_ROLES = [
  'Software Engineer (Student)',
  'Data Engineering & Backend Dev',
  'Google Cloud & NVIDIA Ecosystem',
  'Quantitative & System Architecture',
];

const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  designTheme = 'modern',
  onOpenCV,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeWaveIdx, setActiveWaveIdx] = useState<number | null>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const { t, language } = useLanguage();

  // Non-blocking wave pop animation across the 8 logos
  useEffect(() => {
    const timers = [0, 1, 2, 3, 4, 5, 6, 7].map((idx) =>
      setTimeout(() => setActiveWaveIdx(idx), 500 + idx * 320)
    );
    const clearTimer = setTimeout(() => setActiveWaveIdx(null), 3500);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(clearTimer);
    };
  }, [designTheme]);

  // Role ticker for Design 2 (Full Animasi Desain)
  useEffect(() => {
    if (designTheme !== 'clipboard') return;
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % ANIMATED_ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [designTheme]);

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
      id: 'gcloud',
      label: 'Google Cloud & GCP',
      sublabel: 'Google Cloud Platform Infrastructure & Skills Boost',
      href: 'https://www.skills.google/public_profiles/19eb8264-5dd8-4e7c-a55e-f5e468ae6bcc/badges/26894567',
      pillClass:
        'border-sky-200/90 dark:border-sky-900/50 bg-white dark:bg-zinc-900 hover:border-sky-400',
      textClass: 'text-sky-700 dark:text-sky-400',
      logoRender: <BrandIcon name="google-cloud-platform" size={18} />,
    },
    {
      id: 'claude-anthropic',
      label: 'Claude & Anthropic',
      sublabel: 'Claude Academy & Anthropic AI Certified',
      href: 'https://academy.claude.com/verify/cd4bb5cc3b0fb83d807700bd5f41ba35',
      pillClass:
        'border-orange-200/90 dark:border-orange-900/50 bg-white dark:bg-zinc-900 hover:border-orange-400',
      textClass: 'text-orange-700 dark:text-orange-400',
      logoRender: <BrandIcon name="claude-anthropic" size={18} />,
    },
    {
      id: 'vercel',
      label: 'Vercel & Meta',
      sublabel: 'Vercel Next.js & Meta Blueprint Certified',
      pillClass:
        'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-500',
      textClass: 'text-zinc-900 dark:text-zinc-100',
      logoRender: (
        <span className="inline-flex items-center gap-1">
          <BrandIcon name="vercel" size={18} />
          <BrandIcon name="meta" size={18} />
        </span>
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

  // ===========================================================================
  // DESIGN 2: FULL ANIMASI DESAIN (Interactive Kinetic Bento & Motion Studio)
  // ===========================================================================
  if (designTheme === 'clipboard') {
    return (
      <section
        id="home"
        className="relative w-full border-b border-indigo-500/20 bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#E0E7FF] dark:from-[#070913] dark:via-[#0F172A] dark:to-[#090D16] py-8 sm:py-12 overflow-hidden"
      >
        {/* Animated Floating Aurora Orbs in Background */}
        <motion.div
          animate={{
            x: [0, 45, -25, 0],
            y: [0, -35, 25, 0],
            scale: [1, 1.15, 0.92, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-500/25 via-cyan-400/20 to-purple-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.18, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-bl from-blue-500/25 via-emerald-400/15 to-indigo-500/25 blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Kinetic Status Ribbon (No duplicate theme buttons here) */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-between gap-3 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-300/80 dark:border-indigo-500/40 bg-white/90 dark:bg-slate-900/90 text-indigo-950 dark:text-indigo-200 font-mono text-xs shadow-sm backdrop-blur-md">
              <GoogleDeveloperLogo size={15} />
              <span className="font-bold">{t.hero.verifiedDev}</span>
              <span className="text-indigo-300 dark:text-indigo-700">•</span>
              <a
                href={PERSONAL_INFO.socialLinks.googleDev}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 font-bold text-indigo-600 dark:text-indigo-400"
              >
                <span>Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white font-mono text-xs font-bold shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>KINETIC MOTION STUDIO UI</span>
            </motion.div>
          </motion.div>

          {/* KINETIC BENTO GRID ARCHITECTURE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* BENTO CARD 1 (7 Cols): Animated Identity & Morphing Role Deck */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className="lg:col-span-7 rounded-3xl border-2 border-indigo-200/90 dark:border-indigo-500/30 bg-white/90 dark:bg-slate-900/85 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(79,70,229,0.12)] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-indigo-500/10 via-cyan-500/5 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Floating Avatar + Live Status Pill */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ y: [0, -6, 0], rotate: [0, 2, -2, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="p-1.5 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-emerald-400 shadow-lg shrink-0"
                    >
                      <div className="bg-white dark:bg-slate-900 rounded-xl p-0.5">
                        <ProfileAvatar size="hero" showBadge={true} />
                      </div>
                    </motion.div>

                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        <span>CILEGON, BANTEN • ID</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h1 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-slate-950 dark:text-white tracking-tight">
                          <ScrambleText text={PERSONAL_INFO.name} scrambleSpeed={35} autoPlay={true} />
                        </h1>
                        <ShieldCheck className="w-6 h-6 text-indigo-600 dark:text-indigo-400 shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Morphing Role Banner */}
                <div className="mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50/90 via-blue-50/80 to-cyan-50/90 dark:from-indigo-950/50 dark:via-slate-800/80 dark:to-cyan-950/40 border border-indigo-200/80 dark:border-indigo-500/30 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono text-[10px] font-black uppercase shrink-0">
                      ROLE
                    </span>
                    <div className="h-5 overflow-hidden relative flex items-center">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={roleIdx}
                          initial={{ opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -14 }}
                          transition={{ duration: 0.28 }}
                          className="font-mono text-xs sm:text-sm font-bold text-indigo-950 dark:text-indigo-200 truncate"
                        >
                          {ANIMATED_ROLES[roleIdx]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline shrink-0">
                    UM Banten
                  </span>
                </div>

                {/* Biography */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  {t.hero.bio}
                </p>
              </div>

              {/* Spring-Animated Action Deck (with CV Button) */}
              <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-indigo-100 dark:border-slate-800">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onNavigate('work')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-mono text-xs font-bold shadow-md cursor-pointer"
                >
                  <span>{t.hero.viewProjects}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>

                {onOpenCV && (
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={onOpenCV}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 border border-slate-900 font-mono text-xs font-black shadow-sm cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Lihat / Unduh CV</span>
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onNavigate('certificates')}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-indigo-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs font-semibold cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{t.hero.viewCredentials}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-indigo-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                        {t.hero.emailCopied}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.hero.copyEmail}</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* BENTO CARD 2 (5 Cols): Holographic 3D Isometric Stage with Orbiting Chips */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20, delay: 0.08 }}
              className="lg:col-span-5 rounded-3xl border-2 border-indigo-500/30 bg-gradient-to-b from-slate-900 via-[#0F172A] to-indigo-950 text-white p-6 shadow-[0_20px_50px_rgba(30,58,138,0.25)] flex flex-col justify-between relative overflow-hidden"
            >
              {/* Animated Orbiting Skill Chips */}
              <div className="flex items-center justify-between gap-2 relative z-10 mb-2">
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 font-mono text-[10px] font-bold text-indigo-200"
                >
                  ⚡ 3D Interactive Core
                </motion.span>
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 font-mono text-[10px] font-bold text-emerald-200"
                >
                  Cloud × AI Ready
                </motion.span>
              </div>

              <div className="my-auto py-2 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-cyan-400/10 to-transparent rounded-full blur-2xl pointer-events-none" />
                <IsometricTFMonogram className="w-full" />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 relative z-10 pt-2 border-t border-white/10 font-mono text-[10px] text-indigo-200">
                <span className="px-2.5 py-0.5 rounded-md bg-white/10">Data Engineering</span>
                <span className="px-2.5 py-0.5 rounded-md bg-white/10">Backend API</span>
                <span className="px-2.5 py-0.5 rounded-md bg-white/10">Google Cloud</span>
                <span className="px-2.5 py-0.5 rounded-md bg-white/10">NVIDIA GPU</span>
              </div>
            </motion.div>

            {/* BENTO CARD 3 (12 Cols): Interactive Animated Ecosystem Spotlight Deck */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-12 rounded-3xl border-2 border-indigo-200/90 dark:border-indigo-500/30 bg-white/90 dark:bg-slate-900/85 backdrop-blur-xl p-5 sm:p-6 shadow-md"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-ping" />
                  <h2 className="font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-slate-900 dark:text-white">
                    Ekosistem Cloud, AI &amp; Komunitas Pengembang Terverifikasi
                  </h2>
                </div>
                <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400 font-bold">
                  8 Lencana &amp; Kredensial Aktif
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {heroBadges.map((badge, idx) => {
                  const isWaveActive = activeWaveIdx === idx;
                  const CardTag: React.ElementType = badge.href ? motion.a : motion.div;
                  const linkProps = badge.href
                    ? { href: badge.href, target: '_blank', rel: 'noopener noreferrer' }
                    : { onClick: () => onNavigate('certificates') };

                  return (
                    <CardTag
                      key={badge.id}
                      {...linkProps}
                      animate={
                        isWaveActive
                          ? { y: [0, -7, 0], scale: [1, 1.05, 1] }
                          : { y: [0, idx % 2 === 0 ? -3 : 3, 0] }
                      }
                      transition={{
                        duration: isWaveActive ? 0.5 : 3.2 + (idx % 3) * 0.4,
                        repeat: isWaveActive ? 0 : Infinity,
                        ease: 'easeInOut',
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group p-3.5 rounded-2xl border border-indigo-100 dark:border-slate-800 bg-gradient-to-br from-white via-indigo-50/30 to-white dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900 hover:border-indigo-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-3"
                    >
                      <div className="shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                        {badge.logoRender}
                      </div>
                      <div className="min-w-0">
                        <p className={`font-heading font-bold text-xs truncate ${badge.textClass}`}>
                          {badge.label}
                        </p>
                        <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                          {badge.sublabel}
                        </p>
                      </div>
                    </CardTag>
                  );
                })}
              </div>
            </motion.div>

            {/* BENTO CARD 4 (12 Cols): 4 Animated Metric Pods */}
            <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {HIGHLIGHTS_METRICS.map((metric, i) => (
                <motion.div
                  key={metric.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-4 sm:p-5 rounded-3xl border-2 border-indigo-200/80 dark:border-indigo-500/30 bg-white/90 dark:bg-slate-900/90 shadow-sm relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60">
                      {metricIcons[metric.id] || <Award className="w-4 h-4" />}
                    </span>
                    <span className="font-mono text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-300 px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60">
                      {metric.badge}
                    </span>
                  </div>
                  <p className="font-heading font-black text-xl sm:text-2xl text-slate-950 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="font-mono text-xs font-bold text-slate-700 dark:text-slate-200 mt-0.5">
                    {language === 'id' && metric.labelId ? metric.labelId : metric.label}
                  </p>
                  <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    {metric.subtext}
                  </p>
                  {/* Animated bottom progress bar */}
                  <div className="w-full h-1 bg-indigo-100 dark:bg-slate-800 rounded-full mt-3 overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
                      className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-400"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ===========================================================================
  // DESIGN 3: PROFESIONAL, ELEGAN & KLASIK (Executive Editorial Dossier UI/UX)
  // ===========================================================================
  if (designTheme === 'arcade') {
    return (
      <section
        id="home"
        className="relative w-full border-b-2 border-[#B48A3E]/50 bg-[#FAF7F0] dark:bg-[#111110] text-[#141413] dark:text-[#F5F2EB] py-8 sm:py-12 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Classical Double-Ruled Executive Masthead */}
          <div className="border-y-2 border-[#141413] dark:border-[#B48A3E]/70 py-2.5 mb-8">
            <div className="border-y border-[#141413]/40 dark:border-[#B48A3E]/30 py-2 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] tracking-widest uppercase">
              <div className="flex items-center gap-2 font-bold text-[#855E1E] dark:text-[#D4AF37]">
                <span>DOSSIER EKSEKUTIF • EDISI XXVI</span>
                <span>•</span>
                <span>CILEGON, BANTEN</span>
              </div>

              <div className="flex items-center gap-2">
                <GoogleDeveloperLogo size={14} />
                <a
                  href={PERSONAL_INFO.socialLinks.googleDev}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-bold flex items-center gap-1"
                >
                  <span>{t.hero.verifiedDev}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {onOpenCV && (
                <button
                  onClick={onOpenCV}
                  className="inline-flex items-center gap-1.5 font-bold text-[#1B2A4A] dark:text-[#D4AF37] hover:underline cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>CURRICULUM VITAE RESMI (PDF)</span>
                </button>
              )}
            </div>
          </div>

          {/* 3-COLUMN CLASSICAL EDITORIAL DOSSIER GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT COLUMN (3 Cols): Formal Framed Portrait & Academic Pedigree */}
            <div className="lg:col-span-3 flex flex-col justify-between p-6 bg-white dark:bg-[#181816] border border-[#141413]/25 dark:border-[#B48A3E]/40 shadow-xs">
              <div>
                <div className="flex flex-col items-center text-center mb-5">
                  <div className="p-3 border-2 border-[#B48A3E] bg-[#FAF7F0] dark:bg-[#141413] flex flex-col items-center">
                    <ProfileAvatar size="hero" showBadge={true} />
                  </div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-[#855E1E] dark:text-[#D4AF37] font-bold mt-3">
                    POTRET RESMI • 2026
                  </p>
                </div>

                <div className="space-y-3 text-xs border-t border-[#141413]/15 dark:border-white/10 pt-4">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-[#855E1E] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-zinc-900 dark:text-white">
                        Universitas Muhammadiyah Banten
                      </p>
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                        S1 Informatika • Data &amp; Backend
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#855E1E] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-zinc-900 dark:text-white">
                        Cilegon, Provinsi Banten
                      </p>
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                        Alumni SMA Negeri 1 Cilegon
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Classical Executive Actions */}
              <div className="space-y-2 pt-5 mt-5 border-t border-[#141413]/15 dark:border-white/10 font-mono text-xs">
                {onOpenCV && (
                  <button
                    onClick={onOpenCV}
                    className="w-full py-2.5 px-4 bg-[#1B2A4A] hover:bg-[#142038] text-white border border-[#B48A3E] font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Buka / Unduh CV</span>
                  </button>
                )}

                <button
                  onClick={() => onNavigate('work')}
                  className="w-full py-2.5 px-4 bg-[#FAF7F0] dark:bg-zinc-900 hover:bg-[#B48A3E]/15 text-zinc-900 dark:text-white border border-[#141413]/40 dark:border-[#B48A3E]/50 font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>{t.hero.viewProjects}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleCopyEmail}
                  className="w-full py-2 px-4 bg-white dark:bg-zinc-900 hover:bg-zinc-100 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer text-[11px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="font-bold text-emerald-700">{t.hero.emailCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.hero.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* CENTER COLUMN (5 Cols): Classical Editorial Biography & Architectural Emblem */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-[#181816] border border-[#141413]/25 dark:border-[#B48A3E]/40 shadow-xs">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#855E1E] dark:text-[#D4AF37] font-bold mb-2">
                  PROFIL REKAYASA PERANGKAT LUNAK &amp; DATA
                </p>

                <h1 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-zinc-950 dark:text-white tracking-tight leading-tight border-b-2 border-[#B48A3E] pb-4 mb-4">
                  {PERSONAL_INFO.name}
                </h1>

                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify mb-6">
                  {t.hero.bio}
                </p>
              </div>

              {/* Architectural 3D Pedestal inside Classic Frame */}
              <div className="p-4 bg-[#FAF7F0] dark:bg-[#121210] border border-[#B48A3E]/40">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#855E1E] dark:text-[#D4AF37] pb-2 mb-2 border-b border-[#B48A3E]/20">
                  <span>MONOGRAM ARSITEKTURAL 3D</span>
                  <span>INTERAKTIF</span>
                </div>
                <IsometricTFMonogram className="w-full" />
              </div>
            </div>

            {/* RIGHT COLUMN (4 Cols): Classical Numbered Ledger of Verified Badges (I - VIII) */}
            <div className="lg:col-span-4 flex flex-col justify-between p-6 bg-white dark:bg-[#181816] border border-[#141413]/25 dark:border-[#B48A3E]/40 shadow-xs">
              <div>
                <div className="flex items-center justify-between border-b-2 border-[#141413] dark:border-[#B48A3E] pb-3 mb-4">
                  <h2 className="font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-zinc-950 dark:text-white">
                    INDEKS AFILIASI &amp; LISENSI RESMI
                  </h2>
                  <span className="font-mono text-[10px] font-bold text-[#855E1E] dark:text-[#D4AF37]">
                    I – VIII
                  </span>
                </div>

                <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {heroBadges.map((badge, idx) => {
                    const RowTag: React.ElementType = badge.href ? 'a' : 'div';
                    const linkProps = badge.href
                      ? { href: badge.href, target: '_blank', rel: 'noopener noreferrer' }
                      : { onClick: () => onNavigate('certificates') };

                    return (
                      <RowTag
                        key={badge.id}
                        {...linkProps}
                        className="py-2.5 flex items-center justify-between gap-3 hover:bg-[#FAF7F0] dark:hover:bg-zinc-900/80 px-2 -mx-2 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="font-mono text-[11px] font-bold text-[#855E1E] dark:text-[#D4AF37] w-6 shrink-0">
                            {ROMAN_NUMERALS[idx]}.
                          </span>
                          <div className="shrink-0">{badge.logoRender}</div>
                          <div className="min-w-0">
                            <p className="font-heading font-bold text-xs text-zinc-900 dark:text-white truncate">
                              {badge.label}
                            </p>
                            <p className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
                              {badge.sublabel}
                            </p>
                          </div>
                        </div>
                        <ExternalLink className="w-3 h-3 text-zinc-400 shrink-0" />
                      </RowTag>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={() => onNavigate('certificates')}
                className="mt-4 w-full py-2.5 px-4 bg-[#FAF7F0] dark:bg-zinc-900 hover:bg-[#B48A3E]/20 border border-[#B48A3E] font-mono text-xs font-bold text-[#1B2A4A] dark:text-[#D4AF37] flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Lihat Seluruh Arsip Sertifikat</span>
              </button>
            </div>
          </div>

          {/* BOTTOM CLASSICAL 4-PILLAR LEDGER TABLE */}
          <div className="grid grid-cols-2 md:grid-cols-4 border border-[#141413]/30 dark:border-[#B48A3E]/40 bg-white dark:bg-[#181816] divide-y md:divide-y-0 md:divide-x divide-[#141413]/20 dark:divide-[#B48A3E]/30 mt-8">
            {HIGHLIGHTS_METRICS.map((metric, idx) => (
              <div key={metric.id} className="p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between font-mono text-[10px] text-[#855E1E] dark:text-[#D4AF37] font-bold uppercase tracking-widest mb-2">
                  <span>PILAR {ROMAN_NUMERALS[idx]}</span>
                  <span>{metric.badge}</span>
                </div>
                <div>
                  <p className="font-heading font-black text-xl sm:text-2xl text-zinc-950 dark:text-white">
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
  }

  // ===========================================================================
  // DESIGN 1 (DEFAULT): MODERN TECH BLUEPRINT
  // ===========================================================================
  return (
    <section
      id="home"
      className="relative w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#09090B]/70 backdrop-blur-xs py-6 sm:py-12 transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle Cyan-Sky Radial Top Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80 opacity-70 dark:opacity-25"
        style={{
          background:
            'radial-gradient(ellipse 75% 60% at 50% -15%, rgba(165, 243, 252, 0.65), rgba(224, 242, 254, 0.25) 55%, transparent 80%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Verified Developer Pill (Duplicate Theme Switcher Removed as Requested) */}
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
        </div>

        {/* Two-Column Responsive Hero: Left Specs / Right 3D Monogram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Identity, Bio, Badges & CTA (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Profile Avatar + Auto-Typing Headline */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className="shrink-0"
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

                <p className="text-xs sm:text-sm mt-1.5 flex items-center gap-1.5 flex-wrap text-zinc-600 dark:text-zinc-400">
                  <span className="text-emerald-500 font-bold">&gt;</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                    {t.hero.softwareEngineer}
                  </span>
                  <span className="opacity-50">•</span>
                  <span>Universitas Muhammadiyah Banten</span>
                </p>
              </div>
            </div>

            {/* ECOSYSTEM BADGE LOGOS: IN-PLACE POP-UP */}
            <div className="flex flex-wrap items-center gap-2.5 mt-5 font-mono text-[11px] w-full">
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

            {/* Bilingual Biography */}
            <div className="mt-5 text-sm sm:text-base leading-relaxed border-l-2 border-emerald-500 pl-4 py-1 text-zinc-600 dark:text-zinc-300">
              <p>{t.hero.bio}</p>
            </div>

            {/* Action Buttons (Including Official CV Modal / Download Button) */}
            <div className="flex flex-wrap items-center gap-2.5 mt-6 w-full">
              <button
                onClick={() => onNavigate('work')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs font-semibold shadow-xs transition-all cursor-pointer bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {onOpenCV && (
                <button
                  onClick={onOpenCV}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-blue-600 dark:border-blue-400 bg-blue-50/90 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Lihat / Unduh CV</span>
                </button>
              )}

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
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-blue-500/5 to-transparent rounded-full filter blur-3xl pointer-events-none" />
            <IsometricTFMonogram className="w-full" />
          </div>
        </div>

        {/* HIGHLIGHTS METRICS (Full Width 4-Card Responsive Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
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
                <p className="font-mono text-xs font-semibold mt-0.5 text-zinc-800 dark:text-zinc-200">
                  {language === 'id' && metric.labelId ? metric.labelId : metric.label}
                </p>
                <p className="font-mono text-[11px] mt-1 text-zinc-500 dark:text-zinc-400">
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
