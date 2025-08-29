import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cosmic Destiny - Vedic Astrology',
  description: 'Discover your cosmic destiny through ancient Vedic wisdom',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300">
          {children}
        </div>
      </body>
    </html>
  );
}
