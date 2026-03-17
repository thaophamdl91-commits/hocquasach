import { Book } from '@/types';

interface BookCoverProps {
  book: Book;
  className?: string;
}

export default function BookCover({ book, className = '' }: BookCoverProps) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden flex items-center justify-center ${className}`}
      style={{ backgroundColor: book.bg }}
    >
      {/* Decorative circle top-right */}
      <div
        className="absolute top-0 right-0 w-12 h-12 rounded-full opacity-20"
        style={{ backgroundColor: book.accent, transform: 'translate(30%, -30%)' }}
      />
      {/* Decorative circle bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-8 h-8 rounded-full opacity-15"
        style={{ backgroundColor: book.accent, transform: 'translate(-30%, 30%)' }}
      />
      <p
        className="relative z-10 text-center px-2 leading-tight font-black text-white"
        style={{ fontSize: '9px' }}
      >
        {book.title}
      </p>
    </div>
  );
}
