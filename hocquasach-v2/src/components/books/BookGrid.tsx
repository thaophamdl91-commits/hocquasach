'use client';

import { useState } from 'react';
import { BOOKS } from '@/lib/data';
import { Book } from '@/types';
import BookCard from './BookCard';

const FILTERS = [
  { label: 'Tất cả',    key: 'all' },
  { label: 'Mới nhất',  key: 'new' },
  { label: 'Phổ biến',  key: 'popular' },
  { label: 'Ngắn nhất', key: 'short' },
] as const;

type FilterKey = typeof FILTERS[number]['key'];

interface BookGridProps {
  onPlay: (book: Book) => void;
}

export default function BookGrid({ onPlay }: BookGridProps) {
  const [filter, setFilter] = useState<FilterKey>('all');

  const books = (() => {
    const list = [...BOOKS];
    if (filter === 'new')     return list.filter((b) => b.isNew);
    if (filter === 'popular') return list.sort((a, b) => b.rating - a.rating);
    if (filter === 'short')   return list.sort((a, b) => a.time - b.time);
    return list;
  })();

  return (
    <section>
      {/* Section header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-base font-bold text-gray-900">Khám phá</h2>
          <p className="text-xs text-gray-400">{books.length} tóm tắt sách</p>
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`flex-shrink-0 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
              filter === f.key
                ? 'bg-[#00D26A] text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(130px,1fr))]">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onPlay={onPlay} />
        ))}
      </div>
    </section>
  );
}
