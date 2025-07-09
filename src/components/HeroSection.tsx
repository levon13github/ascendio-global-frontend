// src/components/HeroSection.tsx
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, easeOut, RepeatType, Easing } from 'framer-motion';

export default function HeroSection() {
  // Add useEffect to scroll to top on component mount/refresh
  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Define animation variants
  // Removed logoVariants as the logo is moving to Header

  const sloganVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut, delay: 0.1 } }, // Adjusted delay to be first
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut, delay: 0.3 } // Adjusted delay
    },
    pulsate: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 2.5,
        ease: "easeInOut" as Easing,
        repeat: Infinity,
        repeatType: "mirror" as RepeatType
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut, delay: 0.6 } }, // Adjusted delay
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOut, delay: 0.9 } }, // Adjusted delay
  };

  return (
    <section className="hero-section">
      <div className="hero-background-image-overlay"></div>

      <div className="hero-content">
        {/* Removed Brand Logo from here */}

        {/* Brand Slogan - now the first animated element */}
        <motion.p
          className="hero-slogan"
          variants={sloganVariants}
          initial="hidden"
          animate="show"
        >
          Rise Together. Shape Tomorrow.
        </motion.p>

        <motion.h1
          className="hero-main-title"
          variants={headlineVariants}
          initial="hidden"
          animate={["show", "pulsate"]}
        >
          Igniting Entrepreneurial Journeys<br />Stop Searching, Start Building!
        </motion.h1>

        <motion.p
          className="hero-main-subtitle"
          variants={descriptionVariants}
          initial="hidden"
          animate="show"
        >
          Your Clear Path to a Thriving Business Idea.<br />
          Gain the clarity and confidence you need to launch a purpose-driven venture with AI-powered insights.
          Discover your unique business idea and build a legacy that matters, starting today.
        </motion.p>

        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="show"
        >
          <Link href="/services" className="global-cta-button">
            Find Your Business Idea
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          overflow: hidden;

          background-image: url('/images/hero-main-bg.webp');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .hero-main-title {
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: white !important;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
        }

        .hero-main-subtitle {
          font-size: 1.8rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.95) !important;
          text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);
          max-width: 800px;
        }

        @media (max-width: 1200px) {
          .hero-main-title {
            font-size: 4rem;
          }
          .hero-main-subtitle {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 1024px) {
          .hero-main-title {
            font-size: 3.5rem;
          }
          .hero-main-subtitle {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 70vh;
            padding: 8rem 1.5rem 6rem;
            background-attachment: scroll;
          }
          .hero-main-title {
            font-size: 2.8rem;
          }
          .hero-main-subtitle {
            font-size: 1.2rem;
          }
          .hero-content {
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            min-height: 60vh;
            padding: 7rem 1rem 5rem;
          }
          .hero-main-title {
            font-size: 2.2rem;
          }
          .hero-main-subtitle {
            font-size: 1rem;
          }
          .hero-content {
            gap: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}