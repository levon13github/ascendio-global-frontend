// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Font Awesome Configuration (already done in globals.css, but good to keep in mind for future specific config)
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Import the BackToTopButton component
import BackToTopButton from '../components/BackToTopButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ascendio Global',
  description: 'Igniting Entrepreneurial Journeys. Rise Together. Shape Tomorrow.',
  // --- NEW: Favicon configuration ---
  icons: {
    icon: '/favicon.png', // Points to the favicon.ico in your public directory
    // You can add more sizes/types if you have them, e.g.:
    // apple: '/apple-touch-icon.png', // For Apple touch icon
    // other: {
    //   rel: 'mask-icon',
    //   url: '/safari-pinned-tab.svg',
    // },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BackToTopButton /> {/* Add the button here */}
      </body>
    </html>
  );
}