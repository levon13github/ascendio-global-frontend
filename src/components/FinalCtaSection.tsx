// src/components/FinalCtaSection.tsx
'use client'; // This must be the very first line

import React from 'react';
import Link from 'next/link';
import { motion, easeOut } from 'framer-motion'; // Import motion AND easeOut from framer-motion

export default function FinalCtaSection() {
  // Define animation variants
  const headlineVariants = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut, delay: 0.3 } },
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOut, delay: 0.6 } },
  };

  return (
    <section className="final-cta-section">
      <div className="section-content">
        <motion.h2
          className="section-headline"
          variants={headlineVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }} // Animates when 60% of it is in view
        >
          Unlock Your Entrepreneurial Vision: Claim Your Free Strategy Session.
        </motion.h2>
        <motion.p
          className="section-description"
          variants={descriptionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }} // Animates after headline
        >
          Take the first step towards transforming your entrepreneurial ambition.
          Connect with us for a no-obligation discussion to explore your business idea and strategic next moves.
        </motion.p>
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }} // Animates after description
        >
          <Link href="/contact" className="global-cta-button">
            Book Your FREE Strategy Session Now
          </Link>
        </motion.div>
      </div>

      <div className="final-cta-background-elements"></div>

      <style jsx>{`
        .final-cta-section {
          padding: 6rem 2rem;
          background-color: var(--color-accent);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .section-content {
          max-width: 800px;
          margin: 0 auto;
          z-index: 2;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem; /* Framer motion handles spacing during animation, but this is good for static */
        }

        .section-headline {
          font-size: 2.8rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0.5rem; /* Adjusted to rely more on flex gap */
          color: white;
        }

        .section-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 1.5rem; /* Adjusted to rely more on flex gap */
          color: rgba(255, 255, 255, 0.9);
        }

        /* The .final-cta-button styles have been moved to globals.css */

        .final-cta-background-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .section-headline {
            font-size: 2.2rem;
          }
          .section-description {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .section-headline {
            font-size: 1.8rem;
          }
          .section-description {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}