'use client';

import { useState } from 'react';
import { IconSearch, IconBell } from '@/components/icons';

export default function Header() {
  const [query, setQuery] = useState('');

  return (
    <header className="h-14 flex items-center gap-3 px-5 border-b border-gray-100 bg-white flex-shrink-0">
      {/* Search */}
      <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 max-w-md focus-within:border-[#00D26A] focus-within:bg-white transition-colors">
        <span className="text-gray-400">
          <IconSearch />
        </span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm kiếm sách, tác giả, chủ đề..."
          className="flex-1 bg-transparent outline-none text-gray-800 text-sm placeholder-gray-400"
        />
        {query && (
          <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600 text-xs">
            ✕
          </button>
        )}
      </div>

      {/* Bell */}
      <button className="relative w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
        <IconBell />
        <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#00D26A]" />
      </button>

      {/* Avatar */}
      <button className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-xl hover:bg-gray-100 transition-colors">
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold bg-[#00D26A]">
          P
        </div>
        <span className="text-sm font-medium text-gray-700">Phương</span>
      </button>
    </header>
  );
}
