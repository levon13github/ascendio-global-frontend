// src/components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';

// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons you need
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link href="/">
            Ascendio Global
          </Link>
          <p className="footer-slogan">Rise Together.<br />Shape Tomorrow.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} /> {/* Replaced <i> with FontAwesomeIcon */}
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} /> {/* Replaced <i> with FontAwesomeIcon */}
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} /> {/* Replaced <i> with FontAwesomeIcon */}
            </a>
          </div>
        </div>

        <div className="footer-legal">
          <h4>Legal</h4>
          <ul>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
            <li><Link href="/cookies-policy">Cookies Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Ascendio Global. All rights reserved.</p>
      </div>

      <style jsx>{`
        .site-footer {
          background-color: var(--color-text-primary);
          color: white;
          padding: 4rem 2rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          margin-top: 5rem;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto 3rem;
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-brand,
        .footer-links,
        .footer-social,
        .footer-legal {
          flex: 1;
          min-width: 180px;
          text-align: left;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-brand a {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }

        .footer-brand a:hover {
          color: var(--color-light-text);
        }

        .footer-slogan {
          font-size: 0.95rem;
          color: var(--color-light-text);
          margin-top: 0;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .footer-links h4,
        .footer-social h4,
        .footer-legal h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
        }

        .footer-links ul,
        .footer-legal ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li,
        .footer-legal li {
          margin-bottom: 0.6rem;
        }

        .footer-links li a,
        .footer-legal li a {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links li a:hover,
        .footer-legal li a:hover {
          color: var(--color-accent);
          text-decoration: underline;
        }

        .social-icons {
          display: flex;
          gap: 1.2rem;
          margin-top: 0.5rem;
        }

        /* Styling for Font Awesome icons */
        .social-icons a :global(svg) { /* Use :global to target the actual SVG element rendered by FontAwesomeIcon */
          font-size: 1.8rem; /* Icon size */
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.3s ease;
        }

        .social-icons a:hover :global(svg) {
          color: var(--color-accent); /* Accent color on hover */
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-bottom p {
          margin: 0;
        }

        /* Responsive adjustments for footer */
        @media (max-width: 768px) {
          .site-footer {
            padding: 3rem 1.5rem 1.5rem;
            margin-top: 3rem;
          }
          .footer-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 2rem;
          }
          .footer-brand,
          .footer-links,
          .footer-social,
          .footer-legal {
            min-width: unset;
            width: 100%;
            margin-bottom: 1.5rem;
          }
          .footer-brand {
            align-items: center;
          }
          .footer-links ul,
          .footer-legal ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.8rem;
          }
          .footer-links li,
          .footer-legal li {
            margin-bottom: 0;
          }
          .social-icons {
            justify-content: center;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 0.8rem;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .site-footer {
            padding: 2.5rem 1rem 1rem;
          }
          .footer-brand a {
            font-size: 1.5rem;
          }
          .footer-slogan {
            font-size: 0.85rem;
          }
          .footer-links h4,
          .footer-social h4,
          .footer-legal h4 {
            font-size: 1.1rem;
          }
          .footer-links li a,
          .footer-legal li a {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </footer>
  );
}