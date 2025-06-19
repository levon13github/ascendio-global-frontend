// src/components/FinalCtaSection.tsx
'use client'; // This must be the very first line

import React from 'react';
import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="final-cta-section">
      <div className="section-content">
        <h2 className="section-headline">
          Unlock Your Entrepreneurial Vision: Claim Your Free Strategy Session.
        </h2>
        <p className="section-description">
          Take the first step towards transforming your entrepreneurial ambition.
          Connect with us for a no-obligation discussion to explore your business idea and strategic next moves.
        </p>
        {/* Use the new global class here */}
        <Link href="/contact" className="global-cta-button">
          Book Your FREE Strategy Session Now
        </Link>
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
          gap: 1.5rem;
        }

        .section-headline {
          font-size: 2.8rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0.5rem;
          color: white;
        }

        .section-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
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