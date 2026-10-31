import React, { useState } from 'react';
import { PERSONAL_INFO, HIGHLIGHTS_METRICS } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import { ScrambleText } from './ScrambleText';
import { GoogleDeveloperLogo } from './GoogleDeveloperLogo';
import { BrandIcon } from './BrandIcon';
import { IsometricTFMonogram } from './IsometricTFMonogram';
import { useLanguage } from '../context/LanguageContext';
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
  Terminal,
} from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  onNavigate: (section: SectionId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const { t, language } = useLanguage();

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

  return (
    <section id="home" className="relative w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-[#09090B]/60 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        {/* Two-Column Responsive Hero: Left Specs / Right 3D Monogram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Identity, Bio, Badges & CTA (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Verified Google Developer Program Pill */}
            <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300 font-mono text-xs shadow-2xs">
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
            </div>

            {/* Profile Avatar + Scramble Headline */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 w-full">
              <ProfileAvatar size="hero" showBadge={true} />

              <div className="flex-1 min-w-0">
                <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mb-1 select-none">
                  <span className="text-purple-500 dark:text-purple-400 font-bold">const</span>
                  <span className="text-blue-500 dark:text-blue-400 font-bold">softwareEngineer</span>
                  <span className="text-zinc-400 dark:text-zinc-500">=</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-950 dark:text-white tracking-tight">
                    <ScrambleText text={PERSONAL_INFO.name} />
                  </h1>
                  <span
                    title="Verified Developer Profile"
                    className="inline-flex items-center text-blue-500"
                  >
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1.5 flex items-center gap-1.5 flex-wrap">
                  <span className="text-emerald-500 font-bold">&gt;</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                    {t.hero.softwareEngineer}
                  </span>
                  <span className="text-zinc-400">•</span>
                  <span className="text-zinc-500 dark:text-zinc-400">Universitas Muhammadiyah Banten</span>
                </p>

                {/* Ecosystem Badges: Official Google Developer Badges, Dual AWS Logos, NVIDIA Logo */}
                <div className="flex flex-wrap items-center gap-2 mt-3.5 font-mono text-[11px]">
                  <a
                    href="https://me.developers.google.com/badges/community/innovators/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-200/90 dark:border-red-900/50 bg-white dark:bg-zinc-900 hover:border-red-400 text-zinc-800 dark:text-zinc-200 shadow-2xs transition-all"
                  >
                    <img
                      src="/certificates/badge-google-maps-innovators.svg"
                      alt="Google Maps Platform Innovators"
                      className="w-7 h-7 object-contain shrink-0"
                    />
                    <span className="font-bold text-red-600 dark:text-red-400">{t.hero.mapsInnovators}</span>
                  </a>

                  <a
                    href="https://me.developers.google.com/badges/community/firebasestudio/firebase-studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-200/90 dark:border-amber-900/50 bg-white dark:bg-zinc-900 hover:border-amber-400 text-zinc-800 dark:text-zinc-200 shadow-2xs transition-all"
                  >
                    <img
                      src="/certificates/badge-firebase-studio.svg"
                      alt="Firebase Studio"
                      className="w-7 h-7 object-contain shrink-0"
                    />
                    <span className="font-bold text-amber-600 dark:text-amber-400">Firebase Studio</span>
                  </a>

                  <a
                    href="https://me.developers.google.com/badges/nvidia-developer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200/90 dark:border-emerald-900/50 bg-white dark:bg-zinc-900 hover:border-emerald-400 text-zinc-800 dark:text-zinc-200 shadow-2xs transition-all"
                  >
                    <img
                      src="/certificates/badge-nvidia-developer.svg"
                      alt="NVIDIA Developer Badge"
                      className="w-7 h-7 object-contain shrink-0"
                    />
                    <span className="bg-white px-1.5 py-0.5 rounded border border-zinc-200 inline-flex items-center">
                      <img
                        src="/official-nvidia-logo.png"
                        alt="NVIDIA"
                        className="h-5 w-auto object-contain"
                      />
                    </span>
                    <span className="font-bold text-emerald-700 dark:text-emerald-400">NVIDIA Developer</span>
                  </a>

                  <a
                    href="https://me.developers.google.com/badges/community/gdg/GDGoC/member"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200/90 dark:border-blue-900/50 bg-white dark:bg-zinc-900 hover:border-blue-400 text-zinc-800 dark:text-zinc-200 shadow-2xs transition-all"
                  >
                    <img
                      src="/certificates/badge-gdg-campus-member.svg"
                      alt="GDG on Campus Member"
                      className="w-7 h-7 object-contain shrink-0"
                    />
                    <span className="font-bold text-blue-600 dark:text-blue-400">GDG on Campus</span>
                  </a>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 shadow-2xs">
                    <BrandIcon name="aws" size={16} />
                    <span className="font-bold">AWS Certified</span>
                  </div>
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
