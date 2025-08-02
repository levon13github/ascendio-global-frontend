// src/components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
                    <Link href="/" className="footer-logo-link">
                        <Image
                            src="/images/brand-logo-footer.webp" // Path to your image in the public folder
                            alt="Ascendio Global Brand Logo"
                            width={80} // Set a default width
                            height={80} // Set a default height to maintain aspect ratio
                            className="brand-logo-footer"
                        />
                    </Link>
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
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
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
                /* Basic styles for global variables are usually defined elsewhere,
                    but included here for completeness if not global.css */
                :root {
                    --color-text-primary: #1A1A1A; /* Example value, adjust as per your global CSS */
                    --color-light-text: rgba(255, 255, 255, 0.8); /* Example value, adjust as per your global CSS */
                    --color-accent: #916C3C; /* Example value, adjust as per your global CSS */
                }

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
                    align-items: center; /* This will center the items horizontally */
                }

                /* New: Styles for the brand logo image */
                .brand-logo-footer {
                    border-radius: 50%;
                    object-fit: contain;
                    margin-bottom: 1rem;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                }

                .footer-logo-link {
                    display: block;
                    line-height: 0;
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
                    text-align: center; /* Ensure the slogan text itself is centered */
                }

                .footer-links h4,
                .footer-social h4,
                .footer-legal h4 {
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: white;
                }

                .footer-social {
                    /* Correct alignment for the h4 and social icons */
                    display: flex;
                    flex-direction: column;
                    align-items: center; /* Align items to the center of this container */
                    text-align: center; /* Center the text for the h4 tag */
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
                    justify-content: center; /* Center social icons within their column */
                }

                .social-icons a :global(svg) {
                    font-size: 1.8rem;
                    color: rgba(255, 255, 255, 0.8);
                    transition: color 0.3s ease;
                }

                .social-icons a:hover :global(svg) {
                    color: var(--color-accent);
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
                    .footer-brand,
                    .footer-links,
                    .footer-legal {
                      text-align: center;
                    }
                    .footer-brand {
                        align-items: center; /* Keep centered on mobile */
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
                        justify-content: center; /* Ensure centered on mobile */
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
                    .brand-logo-footer {
                        width: 60px;
                        height: 60px;
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