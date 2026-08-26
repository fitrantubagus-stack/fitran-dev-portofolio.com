import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO, HIGHLIGHTS_METRICS } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Clock,
  Medal,
  BookOpen,
  Award,
  Cpu,
  Mail,
  FileCode,
} from 'lucide-react';
import { motion } from 'motion/react';
import { SectionId } from '../types';

interface HeroProps {
  onNavigate: (section: SectionId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case 'Medal':
        return <Medal className="w-4 h-4 text-amber-500" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4 text-teal-600" />;
      case 'Award':
        return <Award className="w-4 h-4 text-blue-500" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-emerald-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-zinc-200/60 dark:border-zinc-800/60"
    >
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Badges & Location Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200/70 dark:border-zinc-700/70">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white"></span>
            <span>{PERSONAL_INFO.title}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100/60 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 text-xs font-mono border border-zinc-200/50 dark:border-zinc-700/50">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

          {localTime && (
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100/40 dark:bg-zinc-800/40 text-zinc-500 text-xs font-mono border border-zinc-200/40 dark:border-zinc-700/40">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span>Cilegon Time: {localTime} WIB</span>
            </div>
          )}
        </div>

        {/* Hero Content Grid with Profile Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-900 dark:text-white tracking-tight leading-[1.08]">
              Tubagus Fitran <br className="hidden sm:inline" />
              <span className="text-zinc-500 dark:text-zinc-400 font-bold">Badruttamam</span>
            </h1>

            <p className="font-heading font-semibold text-lg sm:text-xl md:text-2xl text-zinc-800 dark:text-zinc-200 leading-snug">
              {PERSONAL_INFO.tagline}
            </p>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed pt-1">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
              <button
                id="hero-explore-work-btn"
                onClick={() => onNavigate('work')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#18181B] dark:bg-white text-white dark:text-zinc-900 rounded-xl font-semibold text-sm shadow-md hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Shipped Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                id="hero-view-certs-btn"
                onClick={() => onNavigate('certificates')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 rounded-xl font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
              >
                <span>View Verified Credentials</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-4 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>

          {/* Right Column: Profile Photo Card */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
            <div className="flex flex-col items-center gap-3">
              <ProfileAvatar size="hero" showBadge={true} />
              <div className="text-center">
                <p className="font-heading font-bold text-sm text-zinc-900 dark:text-white">
                  Tubagus Fitran Badruttamam
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  Software Engineer • Informatics Student
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* High-Impact Stat & Recognition Highlights Strip */}
        <div className="mt-14 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Verified Benchmarks & Credentials</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HIGHLIGHTS_METRICS.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate(item.id.includes('gold') || item.id.includes('perpusnas') || item.id.includes('cloud') ? 'certificates' : 'about')}
                className="group relative p-4 rounded-xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 group-hover:scale-105 transition-transform">
                    {getMetricIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    {item.badge}
                  </span>
                </div>

                <p className="font-heading font-extrabold text-lg text-zinc-900 dark:text-white leading-tight">
                  {item.value}
                </p>
                <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mt-1">
                  {item.label}
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 line-clamp-1">
                  {item.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
