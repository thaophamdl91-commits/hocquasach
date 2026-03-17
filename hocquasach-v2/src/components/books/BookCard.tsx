'use client';

import { Book } from '@/types';
import { IconClock, IconPlay } from '@/components/icons';

interface BookCardProps {
  book: Book;
  onPlay: (book: Book) => void;
}

export default function BookCard({ book, onPlay }: BookCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Cover */}
      <div className="relative rounded-xl overflow-hidden mb-2.5 shadow-sm" style={{ aspectRatio: '3/4' }}>
        {/* Background */}
        <div
          className="absolute inset-0 flex items-center justify-center p-3 text-center"
          style={{ backgroundColor: book.bg }}
        >
          <div
            className="absolute top-0 right-0 w-10 h-10 rounded-full opacity-20"
            style={{ backgroundColor: book.accent, transform: 'translate(30%,-30%)' }}
          />
          <p className="text-white font-black leading-tight relative z-10" style={{ fontSize: '9px' }}>
            {book.title}
          </p>
        </div>

        {/* Badges */}
        {book.isNew && (
          <span
            className="absolute top-2 left-2 text-white font-bold rounded-full px-1.5 py-0.5 z-10 text-[8px] bg-[#00D26A]"
          >
            Mới
          </span>
        )}
        {book.hot && (
          <span
            className="absolute font-bold rounded-full px-1.5 py-0.5 z-10 text-[8px] bg-amber-400 text-amber-900"
            style={{ top: '8px', left: book.isNew ? '34px' : '8px' }}
          >
            Hot
          </span>
        )}

        {/* Hover play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/45">
          <button
            onClick={(e) => { e.stopPropagation(); onPlay(book); }}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#00D26A] hover:bg-[#00ba5e] transition-colors"
          >
            <IconPlay size={13} ml />
          </button>
        </div>
      </div>

      {/* Info */}
      <p className="text-sm font-bold text-gray-900 truncate mb-0.5 group-hover:text-green-600 transition-colors">
        {book.title}
      </p>
      <p className="text-xs text-gray-400 truncate mb-2">{book.author}</p>

      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs text-gray-400">
          <IconClock /> {book.time} min
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onPlay(book); }}
          className="w-6 h-6 rounded-full flex items-center justify-center bg-[#00D26A] hover:bg-[#00ba5e] transition-colors"
        >
          <IconPlay size={8} ml />
        </button>
      </div>
    </div>
  );
}
