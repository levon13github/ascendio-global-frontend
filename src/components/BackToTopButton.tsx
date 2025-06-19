// src/components/BackToTopButton.tsx
'use client'; // This component needs to be a Client Component

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Import the arrow-up icon

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Adjust this value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll animation
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop} aria-label="Scroll to top">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}

      <style jsx>{`
        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 999; /* Ensure it's above most content */
        }

        .back-to-top button {
          background-color: var(--color-accent); /* Your brand accent color */
          color: white;
          border: none;
          border-radius: 50%; /* Makes it a circle */
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .back-to-top button:hover {
          background-color: var(--color-accent-hover);
          transform: translateY(-3px); /* Slight lift on hover */
        }

        .back-to-top button:active {
          transform: translateY(0); /* Return to original position on click */
        }

        .back-to-top button :global(svg) { /* Targeting Font Awesome icon */
          font-size: 1.2rem;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .back-to-top {
            bottom: 1.5rem;
            right: 1.5rem;
          }
          .back-to-top button {
            width: 45px;
            height: 45px;
          }
          .back-to-top button :global(svg) {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .back-to-top {
            bottom: 1rem;
            right: 1rem;
          }
          .back-to-top button {
            width: 40px;
            height: 40px;
          }
          .back-to-top button :global(svg) {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}