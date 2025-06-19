// src/components/CoreSolutionSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function CoreSolutionSection() {
  const solutions = [
    {
      title: "Personalized 1-on-1 Coaching",
      description: "Tailored guidance and strategic insights to refine your ideas and overcome specific challenges.",
      icon: "👩‍🏫"
    },
    {
      title: "Comprehensive Digital Content",
      description: "Access a rich library of courses, frameworks, and resources for self-paced learning and deep dives.",
      icon: "📚"
    },
    {
      title: "Vibrant Community Platform",
      description: "Connect, collaborate, and grow with a network of like-minded aspiring and established entrepreneurs.",
      icon: "🤝"
    },
    {
      title: "AI Tools & Integration Guidance",
      description: "Leverage cutting-edge AI for market research, idea validation, and operational efficiency.",
      icon: "🤖"
    }
  ];

  return (
    <section className="core-solution-section">
      <div className="section-content">
        <h2 className="section-headline">
          The Ascendio Global Framework: Your Blueprint for Visionary Business Creation.
        </h2>
        <div className="solution-cards-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon">{solution.icon}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
        {/* Apply global class here */}
        <Link href="/offerings" className="global-cta-button">
          Explore Our Full Offerings
        </Link>
      </div>

      <div className="core-solution-background-elements"></div>

      <style jsx>{`
        .core-solution-section {
          padding: 6rem 2rem;
          background-color: var(--color-text-primary);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .section-content {
          max-width: 1100px;
          margin: 0 auto;
          z-index: 2;
          position: relative;
        }

        .section-headline {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          line-height: 1.2;
          color: white;
        }

        .solution-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
          margin-bottom: 4rem;
        }

        .solution-card {
          background-color: var(--color-background);
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .solution-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        }

        .solution-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          line-height: 1;
          color: var(--color-accent);
        }

        .solution-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          color: var(--color-text-primary);
        }

        .solution-card p {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--color-text-primary);
        }

        /* Remove .section-cta-button styles from here, they are now in globals.css */

        .core-solution-background-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .section-headline {
            font-size: 2rem;
          }
          .solution-card {
            padding: 2rem;
          }
        }

        @media (max-width: 480px) {
          .section-headline {
            font-size: 1.8rem;
          }
          .solution-cards-grid {
            grid-template-columns: 1fr;
          }
          .solution-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}