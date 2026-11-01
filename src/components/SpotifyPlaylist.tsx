import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Headphones, Music2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DesignTheme } from './Navbar';

const SPOTIFY_PLAYLIST_ID = '23FnVlpQrsfbNVogBhoNAD';
const SPOTIFY_EMBED_URL = `https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`;
const SPOTIFY_OPEN_URL = `https://open.spotify.com/playlist/${SPOTIFY_PLAYLIST_ID}`;

interface SpotifyPlaylistProps {
  designTheme?: DesignTheme;
}

const EQ_BARS = [0.9, 0.5, 1, 0.65, 0.8, 0.45, 0.95, 0.6, 0.75, 0.5, 1, 0.7];

export const SpotifyPlaylist: React.FC<SpotifyPlaylistProps> = ({ designTheme = 'modern' }) => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const isId = language === 'id';
  const isAnimasi = designTheme === 'clipboard';
  const isKlasik = designTheme === 'arcade';

  const cardClass = isKlasik
    ? 'rounded-none border border-[#B48A3E]/60 bg-[#14110D]'
    : isAnimasi
    ? 'rounded-3xl border border-indigo-400/30 bg-slate-950'
    : 'rounded-3xl border border-zinc-800 bg-zinc-950';

  const accent = isKlasik ? '#D4AF37' : isAnimasi ? '#22D3EE' : '#1DB954';

  return (
    <section className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#09090B]/95 py-14">
      <style>{`
        @keyframes sp-spin { to { transform: rotate(360deg); } }
        @keyframes sp-eq { 0%,100% { transform: scaleY(0.25); } 50% { transform: scaleY(1); } }
        @keyframes sp-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .sp-vinyl { animation: sp-spin 7s linear infinite; }
        .sp-vinyl-wrap:hover .sp-vinyl { animation-duration: 2.2s; }
        .sp-eq-bar { transform-origin: bottom; animation: sp-eq 1.1s ease-in-out infinite; }
        .sp-float { animation: sp-float 4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .sp-vinyl, .sp-eq-bar, .sp-float { animation: none; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border font-mono text-xs mb-2"
              style={{ borderColor: `${accent}66`, color: accent, background: `${accent}14` }}
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>{isId ? 'Lagi Sering Diputar' : 'On Repeat'}</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight">
              {isId ? 'Playlist Coding Saya' : 'My Coding Playlist'}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-2xl">
              {isId
                ? 'Teman begadang saat ngoding, debug, dan nyusun arsitektur. Tekan play langsung di sini.'
                : 'My soundtrack for late-night coding, debugging, and architecture sessions. Hit play right here.'}
            </p>
          </div>

          <a
            href={SPOTIFY_OPEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-semibold transition-colors self-start md:self-auto"
          >
            <span>{isId ? 'Buka di Spotify' : 'Open in Spotify'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className={`relative overflow-hidden ${cardClass}`}>
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-30"
            style={{ background: accent }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{ background: isKlasik ? '#B48A3E' : '#8B5CF6' }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 p-5 sm:p-7">
            {/* Vinyl + equalizer */}
            <div className="flex flex-row lg:flex-col items-center justify-center gap-6">
              <div className="sp-vinyl-wrap sp-float relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 shrink-0">
                <div
                  className="sp-vinyl absolute inset-0 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                  style={{
                    background:
                      'repeating-radial-gradient(circle at center, #0b0b0b 0px, #0b0b0b 3px, #181818 4px, #0b0b0b 5px)',
                    border: '2px solid #222',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full opacity-40"
                    style={{
                      background:
                        'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.35) 40deg, transparent 90deg, transparent 180deg, rgba(255,255,255,0.25) 220deg, transparent 270deg)',
                    }}
                  />
                  <div
                    className="absolute inset-[32%] rounded-full flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${accent}, #7c3aed)` }}
                  >
                    <Music2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-[47%] rounded-full bg-zinc-950" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex items-end gap-1 h-10" aria-hidden="true">
                  {EQ_BARS.map((h, i) => (
                    <span
                      key={i}
                      className="sp-eq-bar w-1.5 rounded-full"
                      style={{
                        height: `${h * 100}%`,
                        background: accent,
                        animationDelay: `${i * 0.09}s`,
                        animationDuration: `${0.8 + (i % 4) * 0.18}s`,
                      }}
                    />
                  ))}
                </div>
                <span className="font-mono text-[11px] tracking-widest uppercase text-zinc-400">
                  {isId ? 'Sedang Mengudara' : 'Now Spinning'}
                </span>
              </div>
            </div>

            {/* Spotify player */}
            <div className="min-w-0 flex flex-col gap-3">
              <div
                className="rounded-2xl overflow-hidden transition-[height] duration-500 ease-in-out"
                style={{ height: expanded ? 420 : 152 }}
              >
                <iframe
                  title="Spotify Playlist"
                  src={SPOTIFY_EMBED_URL}
                  width="100%"
                  height={expanded ? 420 : 152}
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ border: 0, borderRadius: 16, display: 'block' }}
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setExpanded((v) => !v)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-zinc-100 font-mono text-xs font-semibold transition-colors cursor-pointer"
                  aria-expanded={expanded}
                >
                  <span>
                    {expanded
                      ? isId
                        ? 'Ringkas'
                        : 'Show Less'
                      : isId
                      ? 'Lihat Semua Lagu'
                      : 'Show All Tracks'}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                  />
                </button>

                <p className="text-[11px] text-zinc-500 font-mono">
                  {isId
                    ? 'Login Spotify di browser untuk memutar lagu penuh · tanpa login = cuplikan 30 detik'
                    : 'Log in to Spotify in your browser for full tracks · otherwise 30s previews'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
