'use client';

import { useState, useCallback } from 'react';
import { Book } from '@/types';
import { IconPlay, IconPause, IconRewind, IconForward, IconX } from '@/components/icons';

interface AudioPlayerProps {
  book: Book | null;
  onClose: () => void;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

export default function AudioPlayer({ book, onClose }: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0–100

  const duration = book ? book.time * 60 : 0;
  const currentSec = Math.round((progress / 100) * duration);

  const seek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const pct = Math.round(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
      setProgress(pct);
    },
    []
  );

  if (!book) return null;

  return (
    <div className="flex-shrink-0 relative bg-[#042C53]" style={{ height: '72px', borderTop: '0.5px solid rgba(255,255,255,0.1)' }}>
      {/* Top progress scrubber */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 cursor-pointer bg-white/10"
        onClick={seek}
      >
        <div
          className="h-full bg-[#00D26A] relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 w-3 h-3 rounded-full bg-white"
            style={{ transform: 'translateY(-50%) translateX(50%)' }}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 h-full px-4">
        {/* Mini cover */}
        <div
          className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
          style={{ backgroundColor: book.bg }}
        >
          <p className="text-white font-black text-center leading-tight" style={{ fontSize: '7px' }}>
            {book.title.slice(0, 6)}
          </p>
        </div>

        {/* Book info */}
        <div className="flex-1 min-w-0">
          <p className="text-white text-xs font-semibold truncate">{book.title}</p>
          <p className="text-xs text-white/40">{book.author}</p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setProgress((p) => Math.max(0, p - 5))}
            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            title="Tua lại 15s"
          >
            <IconRewind />
          </button>

          <button
            onClick={() => setPlaying((p) => !p)}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#00D26A] hover:bg-[#00ba5e] transition-colors"
          >
            {playing ? <IconPause /> : <IconPlay size={13} ml />}
          </button>

          <button
            onClick={() => setProgress((p) => Math.min(100, p + 5))}
            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            title="Tua tiếp 15s"
          >
            <IconForward />
          </button>
        </div>

        {/* Time + progress bar (hidden on small screens) */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs text-white/40 tabular-nums">{formatTime(currentSec)}</span>
          <div
            className="w-28 h-0.5 rounded-full cursor-pointer bg-white/15"
            onClick={seek}
          >
            <div
              className="h-full rounded-full bg-[#00D26A]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-white/40 tabular-nums">{formatTime(duration)}</span>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/10 transition-all"
        >
          <IconX />
        </button>
      </div>
    </div>
  );
}
