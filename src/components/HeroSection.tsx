// src/components/HeroSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-headline">Ascendio Global: Igniting Entrepreneurial Journeys.</h1>
        <p className="hero-slogan">Rise Together. Shape Tomorrow.</p> {/* Add the slogan here */}
        <p className="hero-subheadline">
          Guiding aspiring founders from concept to impactful launch with clarity, confidence, and cutting-edge strategy.
        </p>
        <Link href="/services" className="global-cta-button">
          Discover Your Business Idea
        </Link>
      </div>

      <div className="hero-background-elements"></div>

      <style jsx>{`
        .hero-section {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: var(--color-background);
          color: var(--color-text-primary);
          text-align: center;
          overflow: hidden;
          padding: 0 2rem;
        }

        .hero-content {
          z-index: 2;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .hero-headline {
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 0.5rem;
          color: var(--color-text-primary);
        }

        .hero-slogan { /* New style for the slogan */
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--color-accent); /* Use your accent color for the slogan */
          margin-top: -1rem; /* Pull it slightly closer to the headline */
          margin-bottom: 1.5rem; /* Space before subheadline */
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .hero-subheadline {
          font-size: 1.5rem;
          line-height: 1.6;
          max-width: 700px;
          margin-bottom: 1.5rem;
          color: var(--color-text-primary);
        }

        .hero-background-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .hero-headline {
            font-size: 3rem;
          }
          .hero-slogan {
            font-size: 1.4rem;
          }
          .hero-subheadline {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 90vh;
          }
          .hero-headline {
            font-size: 2.5rem;
          }
          .hero-slogan {
            font-size: 1.2rem;
          }
          .hero-subheadline {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            height: 80vh;
            padding: 0 1rem;
          }
          .hero-headline {
            font-size: 2rem;
          }
          .hero-slogan {
            font-size: 1rem;
          }
          .hero-subheadline {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}