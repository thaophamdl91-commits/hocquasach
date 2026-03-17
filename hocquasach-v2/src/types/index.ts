export interface Book {
  id: string;
  title: string;
  author: string;
  bg: string;
  accent: string;
  time: number;
  cat: string;
  rating: number;
  isNew?: boolean;
  hot?: boolean;
}
