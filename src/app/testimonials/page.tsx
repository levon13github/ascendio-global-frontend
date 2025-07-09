// src/app/testimonials/page.tsx
"use client"; // Added the client directive

import React from 'react';
import { motion } from 'framer-motion';

// Reusing the testimonials from your TestimonialsSection
const testimonials = [
  {
    quote: "Ascendio Global helped me turn my abstract ideas into a concrete business plan. Their framework provided the clarity I desperately needed!",
    name: "Alex P.",
    title: "Tech Startup Founder",
  },
  {
    quote: "The personalized coaching was a game-changer. I launched my sustainable fashion brand with confidence thanks to their strategic guidance.",
    name: "Maria L.",
    title: "Eco-Conscious Entrepreneur",
  },
  {
    quote: "From overwhelming uncertainty to a clear roadmap – Ascendio Global truly lives up to its promise. My business is thriving!",
    name: "Sam K.",
    title: "E-commerce Innovator",
  },
  {
    quote: "Working with Ascendio Global transformed my approach to business. Their insights are invaluable for any aspiring entrepreneur.",
    name: "Jordan T.",
    title: "Digital Marketing Specialist",
  },
  {
    quote: "The community platform is incredibly supportive. I've found mentors and collaborators who have accelerated my journey.",
    name: "Casey R.",
    title: "Social Enterprise Leader",
  },
];

// Reusing the TestimonialCard component structure and styling logic
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title }) => {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="quote-icon">❝</span>
      <p className="testimonial-quote">"{quote}"</p>
      <p className="testimonial-author">
        <span className="author-name">{name}</span>
        {title && <span className="author-title">, {title}</span>}
      </p>
    </motion.div>
  );
};


export default function TestimonialsPage() {
  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <section className="testimonials-hero-section">
        <div className="hero-background-image-overlay"></div>
        <h1 className="testimonials-hero-title">What Our Clients Say</h1>
        <p className="testimonials-hero-subtitle">
          Hear directly from businesses and leaders who have achieved remarkable success with Ascendio Global.
        </p>
      </section>

      {/* Testimonials Grid Section */}
      <section className="testimonials-grid-section">
        <div className="container"> {/* Use a container for consistent padding */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Local styles for this page only */}
      <style jsx>{`
        /* Hero Section specific styles (only unique ones like background-image) */
        .testimonials-hero-section {
          background-image: url('/images/hero-testimonials-background.jpg'); /* You'll need to create this image */
        }

        /* Testimonials Grid Section */
        .testimonials-grid-section {
          padding: 6rem 2rem; /* Consistent padding with other sections */
          background-color: var(--color-background);
          color: var(--color-text-primary);
          text-align: center;
        }

        .testimonials-grid-section .container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid for cards */
          gap: 2.5rem; /* Spacing between cards */
          padding: 0 1rem; /* Horizontal padding for smaller screens */
        }

        /* Testimonial Card Styling (mimicking TestimonialsSection.tsx) */
        .testimonial-card {
          background-color: white;
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08); /* Soft shadow */
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%; /* Ensure consistent height within the grid row */
          transition: transform 0.3s ease, box-shadow 0.3s ease; /* For hover effect */
        }

        .testimonial-card:hover {
          transform: translateY(-8px); /* Lift effect on hover */
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15); /* More pronounced shadow on hover */
        }

        .quote-icon {
          font-size: 4rem;
          line-height: 0.8;
          color: var(--color-accent); /* Highlight color */
          margin-bottom: 1.5rem;
          display: block; /* Ensures it's on its own line */
        }

        .testimonial-quote {
          font-size: 1.2rem;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 1.5rem;
          color: var(--color-text-primary);
          flex-grow: 1; /* Allows the quote to take up available space */
        }

        .testimonial-author {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-accent); /* Author name in accent color */
          margin-top: auto; /* Pushes the author block to the bottom of the card */
        }

        .author-name {
          font-weight: 700; /* Bold the name */
        }

        .author-title {
          font-weight: 400;
          color: var(--color-text-primary); /* Title in primary text color */
        }

        /* Responsive adjustments for testimonial section */
        @media (max-width: 1024px) {
          .testimonials-grid-section .container {
            gap: 2rem;
          }
          .testimonial-card {
            padding: 2rem;
          }
          .quote-icon {
            font-size: 3.5rem;
          }
          .testimonial-quote {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .testimonials-grid-section {
            padding: 4rem 1.5rem;
          }
          .testimonials-grid-section .container {
              grid-template-columns: 1fr; /* Stack cards on smaller screens */
              gap: 1.5rem;
          }
          .testimonial-card {
            padding: 1.8rem;
            min-height: auto; /* Allow height to adjust when stacked */
          }
          .quote-icon {
            font-size: 3rem;
          }
          .testimonial-quote {
            font-size: 1rem;
          }
          .testimonial-author {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .testimonials-grid-section .container {
            padding: 0 1rem;
          }
          .testimonial-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}