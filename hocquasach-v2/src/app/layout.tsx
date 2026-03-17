import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata: Metadata = {
  title: 'Học Qua Sách — Tóm tắt sách hay mỗi ngày',
  description:
    'Học kiến thức từ hàng nghìn cuốn sách chỉ trong 15 phút. Tóm tắt chất lượng cao, nghe audio, đọc nhanh.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={GeistSans.variable}>
      <body className="font-sans antialiased bg-gray-100 min-h-screen flex items-start justify-center p-4 sm:p-8">
        {children}
      </body>
    </html>
  );
}
