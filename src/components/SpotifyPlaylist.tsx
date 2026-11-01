import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DesignTheme } from './Navbar';

const SPOTIFY_PLAYLIST_ID = '23FnVlpQrsfbNVogBhoNAD';
const SPOTIFY_EMBED_URL = `https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`;
const SPOTIFY_OPEN_URL = `https://open.spotify.com/playlist/${SPOTIFY_PLAYLIST_ID}`;

const COLLAPSED_HEIGHT = 152;
const EXPANDED_HEIGHT = 352;

interface SpotifyPlaylistProps {
  designTheme?: DesignTheme;
}

export const SpotifyPlaylist: React.FC<SpotifyPlaylistProps> = ({ designTheme = 'modern' }) => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const isId = language === 'id';
  const isKlasik = designTheme === 'arcade';
  const isAnimasi = designTheme === 'clipboard';

  const accent = isKlasik ? '#D4AF37' : isAnimasi ? '#22D3EE' : '#1DB954';
  const radius = isKlasik ? 'rounded-none' : 'rounded-2xl';

  return (
    <section className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#09090B]/95 py-8">
      <style>{`
        @keyframes sp-spin { to { transform: rotate(360deg); } }
        .sp-vinyl { animation: sp-spin 8s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .sp-vinyl { animation: none; } }
      `}</style>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3 min-w-0">
            <div
              aria-hidden="true"
              className="sp-vinyl relative w-9 h-9 shrink-0 rounded-full"
              style={{
                background:
                  'repeating-radial-gradient(circle at center, #0b0b0b 0px, #0b0b0b 2px, #1c1c1c 3px, #0b0b0b 4px)',
                border: '1px solid #2a2a2a',
              }}
            >
              <span
                className="absolute inset-[34%] rounded-full"
                style={{ background: accent }}
              />
              <span className="absolute inset-[46%] rounded-full bg-zinc-950" />
            </div>
            <h2 className="font-heading font-bold text-lg text-zinc-950 dark:text-white tracking-tight truncate">
              Fitran Playlist
            </h2>
          </div>

          <a
            href={SPOTIFY_OPEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors shrink-0"
          >
            <span>{isId ? 'Buka di Spotify' : 'Open in Spotify'}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div
          className={`overflow-hidden transition-[height] duration-500 ease-in-out ${radius}`}
          style={{ height: expanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT }}
        >
          <iframe
            title="Fitran Playlist"
            src={SPOTIFY_EMBED_URL}
            width="100%"
            height={expanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ border: 0, display: 'block' }}
          />
        </div>

        <div className="flex justify-end mt-2">
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
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
              className={`w-3 h-3 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
