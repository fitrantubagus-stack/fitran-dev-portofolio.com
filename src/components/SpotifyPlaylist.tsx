import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DesignTheme } from './Navbar';
import { FitranPixelLogo } from './FitranPixelLogo';

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

  const radius = isKlasik ? 'rounded-none' : 'rounded-2xl';

  return (
    <section className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#09090B]/95 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 min-w-0">
            <FitranPixelLogo size="sm" />
            <h2 className="font-heading font-bold text-lg text-zinc-950 dark:text-white tracking-tight truncate">
              Fitran playlist
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
