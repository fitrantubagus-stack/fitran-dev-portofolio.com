import React from 'react';
import {
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  GOOGLE_DEV_BADGES,
  PERSONAL_INFO,
  SKILL_GROUPS,
} from '../data/portfolioData';
import { UMBantenLogo, SMAN1CilegonLogo } from './EducationLogos';
import { BrandIcon } from './BrandIcon';
import { GoogleDeveloperLogo } from './GoogleDeveloperLogo';
import { ProfileAvatar } from './ProfileAvatar';
import {
  User,
  GraduationCap,
  Briefcase,
  Award,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Code2,
  Cpu,
  Flame,
  MapPin,
  Building,
  Users,
  ShieldCheck,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-3.5 h-3.5 text-blue-500" />;
      case 'Sparkles':
        return <Sparkles className="w-3.5 h-3.5 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />;
      case 'Users':
        return <Users className="w-3.5 h-3.5 text-indigo-500" />;
      case 'Building':
        return <Building className="w-3.5 h-3.5 text-cyan-500" />;
      case 'Flame':
        return <Flame className="w-3.5 h-3.5 text-orange-500" />;
      case 'MapPin':
        return <MapPin className="w-3.5 h-3.5 text-red-500" />;
      case 'Cpu':
        return <Cpu className="w-3.5 h-3.5 text-emerald-600" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-blue-500" />;
    }
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-24 border-b border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/40 dark:bg-zinc-950/40"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-1">
              <User className="w-3.5 h-3.5 text-zinc-500" />
              <span>Profile & Background</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-white">
              About Tubagus Fitran Badruttamam
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
              {PERSONAL_INFO.extendedBio}
            </p>
          </div>
          <div className="hidden md:block shrink-0">
            <ProfileAvatar size="md" showBadge={false} />
          </div>
        </div>

        {/* Google Developer Program - Highlighted Premium Card */}
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-900/10 via-emerald-900/10 to-amber-900/10 dark:from-blue-950/40 dark:via-zinc-900/60 dark:to-emerald-950/40 border-2 border-blue-500/30 dark:border-blue-500/20 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <div className="p-2 rounded-xl bg-white dark:bg-zinc-800 shadow-xs border border-zinc-200/80 dark:border-zinc-700/80 flex items-center justify-center">
                  <GoogleDeveloperLogo size={28} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-extrabold text-lg sm:text-xl text-zinc-900 dark:text-white">
                    Google Developer Program
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-zinc-950 shadow-xs">
                    Premium Tier
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-2xl">
                Active member since{' '}
                <span className="font-semibold text-zinc-900 dark:text-white">August 7, 2026</span>
                . Verified across 8 specialized developer competencies spanning cloud infrastructure,
                Gemini enterprise agent patterns, and geospatial services.
              </p>
            </div>

            <a
              href={PERSONAL_INFO.socialLinks.googleDev}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#18181B] dark:bg-white text-white dark:text-zinc-900 rounded-xl text-xs sm:text-sm font-semibold hover:opacity-90 transition-all shadow-xs shrink-0 self-start lg:self-auto"
            >
              <span>View Public Google Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Badges Grid Chips */}
          <div className="mt-6 pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
              Earned Program Badges & Ecosystem Recognitions
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {GOOGLE_DEV_BADGES.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/70 dark:border-zinc-800/70 shadow-xs hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 shrink-0">
                    {getBadgeIcon(badge.iconName)}
                  </div>
                  <div>
                    <p className="font-semibold text-xs text-zinc-900 dark:text-white leading-tight">
                      {badge.name}
                    </p>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5 line-clamp-1">
                      {badge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Experience Dual Timelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Timeline */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-zinc-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6 relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 pl-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline node */}
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-zinc-900 border-2 border-emerald-600 dark:border-emerald-400"></span>

                  <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs space-y-3">
                    <div className="flex items-start gap-4">
                      {edu.institution.includes('Muhammadiyah') ? (
                        <UMBantenLogo size={52} className="shrink-0" />
                      ) : (
                        <SMAN1CilegonLogo size={52} className="shrink-0" />
                      )}
                      <div>
                        <h4 className="font-heading font-bold text-base sm:text-lg text-zinc-900 dark:text-white leading-snug">
                          {edu.institution}
                        </h4>
                        <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                          {edu.degreeOrFocus}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono mt-0.5">
                          <span>{edu.period}</span>
                          <span>•</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="space-y-1 pt-1">
                      {edu.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-zinc-900 dark:text-white">
                Experience & Leadership
              </h3>
            </div>

            <div className="space-y-6 relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 pl-6">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline node */}
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-zinc-900 border-2 border-blue-600 dark:border-blue-400"></span>

                  <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs space-y-3">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-heading font-bold text-base sm:text-lg text-zinc-900 dark:text-white">
                          {exp.role}
                        </h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200/50">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                        {exp.organization}
                      </p>
                      <p className="text-xs text-zinc-500 font-mono mt-0.5">{exp.period}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {exp.keyResponsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills & Competency Matrix */}
        <div>
          <div className="mb-6">
            <h3 className="font-heading font-bold text-2xl text-zinc-900 dark:text-white">
              Skills & Technical Stack
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Structured across frontend architecture, multi-cloud platforms, and applied generative AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_GROUPS.map((group, gIdx) => (
              <div
                key={gIdx}
                className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs space-y-4"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-zinc-100 dark:border-zinc-800">
                  {gIdx === 0 && <Code2 className="w-4 h-4 text-blue-500" />}
                  {gIdx === 1 && <Cpu className="w-4 h-4 text-emerald-500" />}
                  {gIdx === 2 && <Sparkles className="w-4 h-4 text-amber-500" />}
                  <h4 className="font-heading font-bold text-sm text-zinc-900 dark:text-white">
                    {group.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60 text-xs font-medium text-zinc-800 dark:text-zinc-200 transition-colors"
                    >
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-zinc-400 font-mono">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
