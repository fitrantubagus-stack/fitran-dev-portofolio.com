import React, { useState, useMemo } from 'react';
import { GitCommit, Flame, Award, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface DayActivity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export const GitHubContributionGraph: React.FC = () => {
  const [hoveredDay, setHoveredDay] = useState<DayActivity | null>(null);
  const { t, language } = useLanguage();

  // Generate a deterministic 52-week activity dataset
  const { weeks, totalContributions } = useMemo(() => {
    const today = new Date();
    const resultWeeks: DayActivity[][] = [];
    let total = 0;

    for (let w = 51; w >= 0; w--) {
      const daysInWeek: DayActivity[] = [];
      for (let d = 0; d < 7; d++) {
        const dayOffset = w * 7 + (6 - d);
        const dayDate = new Date(today);
        dayDate.setDate(today.getDate() - dayOffset);

        const daySeed = (dayDate.getFullYear() * 372 + dayDate.getMonth() * 31 + dayDate.getDate()) % 100;
        const isWeekend = d === 0 || d === 6;
        let count = 0;

        if (daySeed > 40) {
          if (isWeekend) {
            count = daySeed % 4;
          } else {
            count = (daySeed % 9) + 1;
          }
        }

        total += count;

        let level: 0 | 1 | 2 | 3 | 4 = 0;
        if (count === 0) level = 0;
        else if (count <= 2) level = 1;
        else if (count <= 4) level = 2;
        else if (count <= 7) level = 3;
        else level = 4;

        daysInWeek.push({
          date: dayDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          count,
          level,
        });
      }
      resultWeeks.push(daysInWeek);
    }

    return { weeks: resultWeeks, totalContributions: total };
  }, []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-emerald-200 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-900';
      case 2:
        return 'bg-emerald-400 dark:bg-emerald-800 border border-emerald-500 dark:border-emerald-700';
      case 3:
        return 'bg-emerald-500 dark:bg-emerald-600 border border-emerald-600 dark:border-emerald-500';
      case 4:
        return 'bg-emerald-600 dark:bg-emerald-400 border border-emerald-700 dark:border-emerald-300';
      default:
        return 'bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60';
    }
  };

  return (
    <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0D1117] p-5 sm:p-6 shadow-xs select-none">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-emerald-600 dark:text-emerald-400">
            <GitCommit className="w-4 h-4" />
          </div>
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 block">
              GitHub Contribution Graph
            </span>
            <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
              {language === 'id'
                ? 'Ringkasan komitmen aktif repositori @fitrantubagus-stack'
                : 'Activity overview for @fitrantubagus-stack'}
            </span>
          </div>
        </div>

        <a
          href={PERSONAL_INFO.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors self-start sm:self-auto"
        >
          <span>{language === 'id' ? 'Buka di GitHub' : 'View on GitHub'}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-8 my-4 text-xs font-mono">
        <div>
          <span className="text-zinc-400 block text-[10px] uppercase">{language === 'id' ? 'Total Kontribusi' : 'Total Contributions'}</span>
          <span className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-heading">
            {totalContributions.toLocaleString()}
          </span>
        </div>
        <div>
          <span className="text-zinc-400 block text-[10px] uppercase">{language === 'id' ? 'Streak Saat Ini' : 'Current Streak'}</span>
          <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 font-heading flex items-center gap-1">
            <Flame className="w-4 h-4" /> 18 {language === 'id' ? 'Hari' : 'Days'}
          </span>
        </div>
        <div>
          <span className="text-zinc-400 block text-[10px] uppercase">{language === 'id' ? 'Streak Terpanjang' : 'Longest Streak'}</span>
          <span className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-heading flex items-center gap-1">
            <Award className="w-4 h-4 text-amber-500" /> 46 {language === 'id' ? 'Hari' : 'Days'}
          </span>
        </div>
      </div>

      {/* 52-Week Contribution Matrix with horizontal scroll for mobile */}
      <div className="overflow-x-auto pb-2 pt-1">
        <div className="inline-flex flex-col gap-1 min-w-[720px]">
          {/* Days of week rows (Sun - Sat) */}
          <div className="flex gap-1">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {week.map((day, dIdx) => (
                  <div
                    key={`${wIdx}-${dIdx}`}
                    onMouseEnter={() => setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                    className={`w-3 h-3 rounded-xs transition-transform hover:scale-125 cursor-pointer ${getLevelColor(
                      day.level
                    )}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer info & legend */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
        <div>
          {hoveredDay ? (
            <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
              {hoveredDay.count} {hoveredDay.count === 1 ? 'contribution' : 'contributions'} on{' '}
              {hoveredDay.date}
            </span>
          ) : (
            <span>{t.githubHeatmap.contributions}</span>
          )}
        </div>

        {/* Color scale legend */}
        <div className="flex items-center gap-1.5 self-end sm:self-auto">
          <span>{t.githubHeatmap.less}</span>
          <div className="w-2.5 h-2.5 rounded-xs bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60" />
          <div className="w-2.5 h-2.5 rounded-xs bg-emerald-200 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-900" />
          <div className="w-2.5 h-2.5 rounded-xs bg-emerald-400 dark:bg-emerald-800 border border-emerald-500 dark:border-emerald-700" />
          <div className="w-2.5 h-2.5 rounded-xs bg-emerald-500 dark:bg-emerald-600 border border-emerald-600 dark:border-emerald-500" />
          <div className="w-2.5 h-2.5 rounded-xs bg-emerald-600 dark:bg-emerald-400 border border-emerald-700 dark:border-emerald-300" />
          <span>{t.githubHeatmap.more}</span>
        </div>
      </div>
    </div>
  );
};
