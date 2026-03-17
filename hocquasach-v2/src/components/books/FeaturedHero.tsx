'use client';

import { Book } from '@/types';
import { IconClock, IconStar, IconPlay } from '@/components/icons';

interface FeaturedHeroProps {
  book: Book;
  onPlay: (book: Book) => void;
}

export default function FeaturedHero({ book, onPlay }: FeaturedHeroProps) {
  return (
    <div
      className="rounded-2xl p-5 mb-6 flex items-center gap-5 cursor-pointer"
      style={{ backgroundColor: book.bg }}
      onClick={() => onPlay(book)}
    >
      {/* Mini cover */}
      <div
        className="flex-shrink-0 w-20 h-28 rounded-xl flex items-center justify-center p-2 text-center"
        style={{ backgroundColor: `${book.accent}22` }}
      >
        <p className="text-white font-black leading-tight" style={{ fontSize: '9px' }}>
          {book.title}
        </p>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <span
          className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2"
          style={{ backgroundColor: `${book.accent}25`, color: book.accent }}
        >
          ⚡ Nổi bật tuần này
        </span>

        <h2 className="text-xl font-black text-white mb-1 leading-tight">{book.title}</h2>
        <p className="text-sm mb-3 text-white/60">{book.author}</p>

        <div className="flex items-center gap-4 mb-4 text-xs text-white/50">
          <span className="flex items-center gap-1">
            <IconClock /> {book.time} phút
          </span>
          <span className="flex items-center gap-1">
            <IconStar />
            <span className="text-white">{book.rating}</span>/5
          </span>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); onPlay(book); }}
          className="flex items-center gap-2 text-white text-sm font-bold px-4 py-2 rounded-xl bg-[#00D26A] hover:bg-[#00ba5e] transition-colors"
        >
          <IconPlay ml />
          Nghe ngay
        </button>
      </div>
    </div>
  );
}
