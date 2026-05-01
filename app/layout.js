export const metadata = {
  title: 'English Learning Hub',
  description: 'Learn English with vocabulary flashcards and grammar quizzes.',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
