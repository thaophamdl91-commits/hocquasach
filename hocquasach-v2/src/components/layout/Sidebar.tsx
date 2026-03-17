'use client';

import { IconBook } from '@/components/icons';
import { CATEGORIES } from '@/lib/data';

const NAV_ITEMS = [
  {
    label: 'Khám phá',
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: 'Thư viện',
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    label: 'Danh mục',
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
];

interface SidebarProps {
  activeNav: number;
  setActiveNav: (i: number) => void;
}

export default function Sidebar({ activeNav, setActiveNav }: SidebarProps) {
  return (
    <aside className="w-56 flex-shrink-0 flex flex-col h-full overflow-y-auto bg-[#042C53]">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#00D26A]">
            <IconBook />
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-none">Học Qua Sách</p>
            <p className="text-white/40 mt-0.5 text-[9px] uppercase tracking-wide">Book Summaries</p>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="px-3 py-3 border-b border-white/10">
        <p className="px-3 mb-1.5 text-white/30 font-semibold text-[9px] uppercase tracking-widest">
          Menu
        </p>
        {NAV_ITEMS.map((n, i) => (
          <button
            key={n.label}
            onClick={() => setActiveNav(i)}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all mb-0.5 border-l-2 ${
              activeNav === i
                ? 'text-white border-[#00D26A] bg-[#00D26A]/10'
                : 'text-white/55 border-transparent hover:text-white/90 hover:bg-white/5'
            }`}
          >
            <span className={activeNav === i ? 'text-[#00D26A]' : 'text-white/40'}>{n.icon}</span>
            {n.label}
            {activeNav === i && (
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00D26A]" />
            )}
          </button>
        ))}
      </nav>

      {/* Categories */}
      <nav className="px-3 py-3 flex-1">
        <p className="px-3 mb-1.5 text-white/30 font-semibold text-[9px] uppercase tracking-widest">
          Danh mục
        </p>
        {CATEGORIES.map((c) => (
          <button
            key={c.label}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white/55 hover:text-white/90 hover:bg-white/5 transition-all"
          >
            <span className="flex-1 text-left">{c.label}</span>
            <span className="text-white/25 text-xs">{c.count}</span>
          </button>
        ))}
      </nav>

      {/* Upgrade CTA */}
      <div className="mx-3 mb-3 p-3 rounded-xl bg-[#00D26A]/10">
        <p className="text-white font-bold text-xs mb-1">Nâng cấp Premium</p>
        <p className="text-white/45 mb-2.5 leading-snug text-[10px]">
          Đọc không giới hạn 2,500+ sách
        </p>
        <button className="w-full py-1.5 rounded-lg text-white font-bold text-xs bg-[#00D26A] hover:bg-[#00ba5e] transition-colors">
          Dùng thử miễn phí
        </button>
      </div>
    </aside>
  );
}
