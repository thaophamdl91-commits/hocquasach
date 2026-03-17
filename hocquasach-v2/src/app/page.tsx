'use client';

import { useState } from 'react';
import { Book } from '@/types';
import { FEATURED_BOOK } from '@/lib/data';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import FeaturedHero from '@/components/books/FeaturedHero';
import BookGrid from '@/components/books/BookGrid';
import AudioPlayer from '@/components/player/AudioPlayer';

export default function HomePage() {
  const [activeNav, setActiveNav] = useState(0);
  const [playingBook, setPlayingBook] = useState<Book | null>(null);

  return (
    <div className="flex border border-gray-200 rounded-xl overflow-hidden bg-white h-screen max-h-[680px]">
      {/* Sidebar */}
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* Main column */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="p-5 max-w-3xl">
            <FeaturedHero book={FEATURED_BOOK} onPlay={setPlayingBook} />
            <BookGrid onPlay={setPlayingBook} />
          </div>
        </main>

        {/* Sticky audio player */}
        <AudioPlayer book={playingBook} onClose={() => setPlayingBook(null)} />
      </div>
    </div>
  );
}
