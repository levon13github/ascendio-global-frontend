// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from "@/components/Header"; // Import your Header component
import Footer from "@/components/Footer"; // Import your Footer component
import CustomCursor from "@/components/CustomCursor"; // Import the custom cursor component

// Font Awesome Configuration
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


// Import the BackToTopButton component
import BackToTopButton from '../components/BackToTopButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ascendio Global',
  description: 'Igniting Entrepreneurial Journeys. Rise Together. Shape Tomorrow. Ascendio Global empowers aspiring entrepreneurs with personalized coaching, comprehensive digital content, vibrant community, and AI tools to build impactful businesses and leave a lasting legacy.',
  icons: {
    icon: '/favicon.ico',
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
        <Header /> {/* Header placed here */}
        {children} {/* This is where your page content will be rendered */}
        <Footer /> {/* Footer placed here */}
        <BackToTopButton />
        <CustomCursor /> {/* Render the custom cursor here, typically at the end of the body */}
      </body>
    </html>
  );
}