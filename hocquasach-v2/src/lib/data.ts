import { Book } from '@/types';

export const BOOKS: Book[] = [
  { id: '1', title: 'Atomic Habits',          author: 'James Clear',         bg: '#0f172a', accent: '#00D26A', time: 15, cat: 'Kinh doanh',  rating: 4.8, hot: true },
  { id: '2', title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman',    bg: '#1e3a5f', accent: '#60a5fa', time: 18, cat: 'Tâm lý học',  rating: 4.7, hot: true },
  { id: '3', title: 'Deep Work',               author: 'Cal Newport',         bg: '#1c1917', accent: '#f59e0b', time: 12, cat: 'Năng suất',   rating: 4.6, isNew: true },
  { id: '4', title: 'The Power of Now',         author: 'Eckhart Tolle',      bg: '#2d1b69', accent: '#a78bfa', time: 10, cat: 'Triết học',   rating: 4.5 },
  { id: '5', title: 'Sapiens',                  author: 'Yuval Noah Harari',  bg: '#1a2e1a', accent: '#4ade80', time: 20, cat: 'Lịch sử',     rating: 4.9, hot: true },
  { id: '6', title: 'Start with Why',           author: 'Simon Sinek',        bg: '#1e1b4b', accent: '#818cf8', time: 14, cat: 'Kinh doanh',  rating: 4.4, isNew: true },
  { id: '7', title: 'Zero to One',              author: 'Peter Thiel',        bg: '#18181b', accent: '#e5e7eb', time:  9, cat: 'Kinh doanh',  rating: 4.6 },
  { id: '8', title: 'The Subtle Art',           author: 'Mark Manson',        bg: '#7c1d1d', accent: '#fca5a5', time:  7, cat: 'Tâm lý học',  rating: 4.3, isNew: true },
];

export const CATEGORIES = [
  { label: 'Kinh doanh', count: 84 },
  { label: 'Tâm lý học', count: 62 },
  { label: 'Năng suất',  count: 45 },
  { label: 'Lịch sử',    count: 38 },
  { label: 'Triết học',  count: 29 },
];

export const FEATURED_BOOK = BOOKS[0];
