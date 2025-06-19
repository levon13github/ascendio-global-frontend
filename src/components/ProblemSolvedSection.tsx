// src/components/ProblemSolvedSection.tsx
'use client'; // Mark as Client Component due to potential future interactivity/styles

import React from 'react';

export default function ProblemSolvedSection() {
  const painPoints = [
    {
      title: "The overwhelming 'where to begin?'",
      description: "Feeling lost at the starting line, unsure of the first step to take.",
      icon: "❓" // Placeholder icon, replace with actual SVG/Image later
    },
    {
      title: "Doubting your viable idea",
      description: "Worried if your concept holds true potential or if it's just a fleeting thought.",
      icon: "🤔"
    },
    {
      title: "Fear of the unknown path",
      description: "Anxiety about navigating the complexities of launching and growing a business.",
      icon: "🚧"
    },
    {
      title: "Lack of a clear roadmap",
      description: "Struggling to transform ambition into a structured, actionable plan.",
      icon: "🗺️"
    },
  ];

  return (
    <section className="problem-section">
      <div className="section-content">
        <h2 className="section-headline">
          From Ambition to Action: Turning Idea Uncertainty into Your Unstoppable Advantage.
        </h2>
        <div className="pain-points-grid">
          {painPoints.map((point, index) => (
            <div key={index} className="pain-point-card">
              <div className="pain-point-icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Placeholder for subtle background animations */}
      <div className="problem-background-elements"></div>

      <style jsx>{`
        .problem-section {
          padding: 6rem 2rem; /* Ample padding for visual separation */
          background-color: var(--color-background); /* Consistent background */
          color: var(--color-text-primary); /* Consistent text color */
          text-align: center;
          position: relative; /* For background elements */
          overflow: hidden;
        }

        .section-content {
          max-width: 1000px;
          margin: 0 auto;
          z-index: 2; /* Ensure content is above background */
          position: relative;
        }

        .section-headline {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem; /* Space below headline */
          line-height: 1.2;
          color: var(--color-text-primary);
        }

        .pain-points-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid */
          gap: 2rem; /* Space between cards */
          margin-top: 2rem;
        }

        .pain-point-card {
          background-color: white; /* Cards with white background */
          border-radius: 12px; /* Slightly rounded corners */
          padding: 2.5rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08); /* Soft shadow */
          transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover */
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .pain-point-card:hover {
          transform: translateY(-8px); /* Lift effect on hover */
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15); /* More prominent shadow on hover */
        }

        .pain-point-icon {
          font-size: 3.5rem; /* Large icon size */
          margin-bottom: 1rem;
          line-height: 1; /* Prevent extra space around icon */
          color: var(--color-accent); /* Use accent color for icons */
        }

        .pain-point-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          color: var(--color-accent); /* Headline for card in accent color */
        }

        .pain-point-card p {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--color-text-primary);
        }

        .problem-background-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1; /* Below content but above section background */
          /* We'll add subtle animations here later */
        }

        @media (max-width: 768px) {
          .section-headline {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
          .pain-point-card {
            padding: 2rem;
          }
        }

        @media (max-width: 480px) {
          .section-headline {
            font-size: 1.8rem;
          }
          .pain-points-grid {
            grid-template-columns: 1fr; /* Stack cards on very small screens */
          }
          .pain-point-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}