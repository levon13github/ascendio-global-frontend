// src/components/WhyChooseUsSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function WhyChooseUsSection() {
  const coreValues = [
    {
      name: "Empowerment",
      phrase: "Unleashing the potential within every aspiring entrepreneur.",
      description: "We believe everyone has the innate ability to build their dream business and achieve extraordinary impact. Our guidance fosters self-reliance and confidence.",
      icon: "🌟"
    },
    {
      name: "Trust",
      phrase: "Building relationships based on transparency and reliability.",
      description: "Our commitment to honesty, ethical practices, and consistent support ensures you feel secure and valued in every interaction.",
      icon: "🤝"
    },
    {
      name: "Integrity",
      phrase: "Upholding the highest standards in all our actions.",
      description: "We operate with unwavering moral principles, ensuring our advice and services always serve your best interests with honesty and fairness.",
      icon: "✅"
    },
    {
      name: "Innovation",
      phrase: "Pioneering new approaches for sustainable growth.",
      description: "We are committed to forward-thinking strategies, leveraging cutting-edge tools and methodologies to keep you ahead in a dynamic market.",
      icon: "💡"
    },
    {
      name: "Impact",
      phrase: "Driving meaningful change, globally and individually.",
      description: "Our focus is on creating businesses that not only succeed financially but also contribute positively to society and leave a lasting legacy.",
      icon: "🌍"
    },
    {
      name: "Authenticity",
      phrase: "Encouraging true self-expression in entrepreneurial journeys.",
      description: "We champion genuine ideas and unique visions, helping you build a business that truly reflects who you are and what you stand for.",
      icon: "✨"
    },
    {
      name: "Legacy",
      phrase: "Cultivating lasting success for future generations.",
      description: "We guide you to build businesses that endure, creating sustainable value and contributing to a better future beyond immediate gains.",
      icon: "🌳"
    },
  ];

  return (
    <section className="why-choose-us-section">
      <div className="section-content">
        <h2 className="section-headline">
          The Ascendio Difference: Built on Vision, Driven by Values.
        </h2>

        <div className="value-tiles-grid">
          {coreValues.map((value, index) => (
            <div key={index} className="value-tile">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.name}</h3>
              <p className="value-phrase">{value.phrase}</p>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>

        <p className="impact-statement">
          These values fuel our commitment to fostering a global wave of impactful businesses.
          We believe in nurturing entrepreneurs who not only achieve their dreams but also
          contribute to a better future for humanity, leaving a profound and positive legacy.
        </p>

        <Link href="/about" className="global-cta-button">
          Discover Our Full Mission
        </Link>
      </div>

      <div className="why-choose-us-background-elements"></div>

      <style jsx>{`
        .why-choose-us-section {
          padding: 6rem 2rem;
          background-color: var(--color-background);
          color: var(--color-text-primary);
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
          color: var(--color-text-primary);
        }

        .value-tiles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .value-tile {
          background-color: white;
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          overflow: hidden;
        }

        .value-tile:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .value-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          line-height: 1;
          color: var(--color-accent);
        }

        .value-tile h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--color-text-primary);
        }

        .value-phrase {
          font-size: 1.1rem;
          font-style: italic;
          margin-bottom: 1rem;
          color: var(--color-accent);
        }

        .value-description {
            font-size: 0.95rem;
            line-height: 1.5;
            color: var(--color-text-primary);
        }

        .impact-statement {
          font-size: 1.2rem;
          line-height: 1.7;
          max-width: 800px;
          margin: 0 auto 4rem auto;
          color: var(--color-text-primary);
        }

        .why-choose-us-background-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        /* --- RESPONSIVE ADJUSTMENTS FOR WHY CHOOSE US SECTION --- */
        @media (max-width: 900px) { /* Adjust grid columns for tablets */
          .value-tiles-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Allow slightly smaller cards */
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .section-headline {
            font-size: 2rem;
          }
          .value-tile {
            padding: 2rem;
          }
          .value-icon {
            font-size: 3rem;
          }
          .value-tile h3 {
            font-size: 1.2rem;
          }
          .value-phrase, .value-description {
            font-size: 0.9rem;
          }
          .impact-statement {
            font-size: 1rem;
          }
        }

        @media (max-width: 600px) { /* Stack into 1 column on smaller tablets/large phones */
          .value-tiles-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .why-choose-us-section {
            padding: 4rem 1.5rem;
          }
          .section-headline {
            font-size: 1.8rem;
          }
          .value-tile {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}