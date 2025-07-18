// src/components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic for background and shadow on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Logic for disappearing/reappearing header (remains the same)
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
        setIsHeaderVisible(false);
      } else if (window.scrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }
      setLastScrollY(window.scrollY);

      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isHeaderVisible ? 'visible' : 'hidden'}`}>
      <div className="header-content">
        <div className="brand-logo">
          <Link href="/">
            <img src="/images/brand-logo.webp" alt="Ascendio Global Logo" className="header-logo-image" />
          </Link>
        </div>
        <button
          className="hamburger-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link></li>
            <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 900;
          background-color: var(--color-background); /* Back to solid background */
          border-bottom: 1px solid rgba(0, 0, 0, 0.05); /* Back to solid border */
          padding: 1rem 2rem; /* Back to original padding */
          transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease-in-out;
        }

        .site-header.scrolled {
          background-color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
        }

        /* Header visibility on scroll */
        .site-header.hidden {
          transform: translateY(-100%);
        }
        .site-header.visible {
          transform: translateY(0);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Styles for the logo image in the header */
        .brand-logo .header-logo-image {
          height: 40px; /* Original height */
          width: auto;
          vertical-align: middle;
          filter: none; /* Ensure no residual filters */
          transition: height 0.3s ease;
        }

        .site-header.scrolled .brand-logo .header-logo-image {
          height: 35px; /* Slightly smaller when scrolled */
        }

        .main-nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 2rem;
        }

        .main-nav li a {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-text-primary); /* Back to primary text color */
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }

        .main-nav li a:hover {
          color: var(--color-accent);
        }

        .main-nav li a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: var(--color-accent);
          transition: width 0.3s ease;
        }

        .main-nav li a:hover::after {
          width: 100%;
        }

        /* Hamburger Menu Button Styles */
        .hamburger-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          justify-content: space-around;
          width: 30px;
          height: 25px;
          padding: 0;
          z-index: 1001;
        }

        .hamburger-menu-button .bar {
          width: 100%;
          height: 3px;
          background-color: var(--color-text-primary); /* Back to primary text color */
          border-radius: 2px;
          transition: all 0.3s ease-in-out;
        }

        /* Mobile Menu (Dropdown) Styles */
        @media (max-width: 768px) {
          .site-header {
            padding: 0.8rem 1.5rem;
          }
          /* Adjusted logo size for mobile header */
          .brand-logo .header-logo-image {
            height: 35px;
          }

          .hamburger-menu-button {
            display: flex;
          }

          .main-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.98);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            padding: 1rem 0;
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.3s ease-out;
            opacity: 0;
            pointer-events: none;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
          }

          .main-nav.open {
            display: block;
            max-height: 300px;
            opacity: 1;
            pointer-events: all;
          }

          .main-nav ul {
            flex-direction: column;
            gap: 0;
            text-align: center;
          }

          .main-nav li {
            width: 100%;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }

          .main-nav li:last-child {
            border-bottom: none;
          }

          .main-nav li a {
            display: block;
            padding: 1rem 0;
            font-size: 1.1rem;
            color: var(--color-text-primary);
          }

          .main-nav li a::after {
            display: none;
          }

          .site-header.scrolled {
              padding-bottom: 0.8rem;
          }
        }

        /* Further adjustments for smaller screens */
        @media (max-width: 600px) {
          .site-header {
            padding: 0.6rem 1rem;
          }
          .brand-logo .header-logo-image {
            height: 30px;
          }
        }
      `}</style>
    </header>
  );
}