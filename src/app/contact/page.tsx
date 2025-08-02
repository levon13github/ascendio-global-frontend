// src/app/contact/page.tsx
'use client';

import React from 'react';
// Removed 'motion' import as it's no longer needed for reveal animations
// import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faClock,
    faPaperPlane // For the send button
} from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedinIn, // Using faLinkedinIn for consistency with other brand icons
    faInstagram,
    faFacebook
} from '@fortawesome/free-brands-svg-icons'; // For social media icons

export default function ContactPage() {
    // Removed staticVariants as it's no longer needed

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send data to an API
        alert('Thank you for your message! We will get back to you shortly.');
        // You might also clear the form fields here
    };

    return (
        <div className="contact-page-container">
            {/* Hero Section - Reveal animations removed here */}
            <section className="contact-hero-section">
                <div className="hero-background-image-overlay"></div>
                {/* Removed motion wrappers and animation props */}
                <h1 className="contact-hero-title">
                    Get in Touch with Ascendio Global
                </h1>
                <p className="contact-hero-subtitle">
                    We're here to help you ascend. Reach out for inquiries, support, or partnership opportunities.
                </p>
            </section>

            {/* Main Contact Content - Now with Two Columns */}
            <section className="contact-content-section">
                {/* The main container for the two-column layout */}
                <div className="contact-two-column-layout">
                    {/* Left Column: Information Block */}
                    <div className="contact-info-column">
                        {/* Removed motion wrapper and animation props */}
                        <h2 className="section-title">
                            How Can We Assist You?
                        </h2>

                        <p className="intro-text">
                            Whether you're looking for guidance, have a specific question about our services, or want to explore collaboration, we're ready to connect. Choose the method that works best for you.
                        </p>

                        <div className="info-cards-grid">
                            {/* Removed motion wrappers and animation props from info-cards */}
                            <div className="info-card">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <h3>Email Us</h3>
                                <p>For general inquiries and support.</p>
                                <a href="mailto:ascendioglobal25@gmail.com">ascendioglobal25@gmail.com</a>
                            </div>
                            <div className="info-card">
                                <FontAwesomeIcon icon={faPhone} />
                                <h3>Call Us</h3>
                                <p>Speak directly with our team.</p>
                                <a href="tel:+32......">+32......</a>
                            </div>
                            <div className="info-card">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <h3>Our Location</h3>
                                <p>By appointment only. Virtual first.</p>
                                <address>Grimbergen, Belgium</address>
                            </div>
                            <div className="info-card">
                                <FontAwesomeIcon icon={faClock} />
                                <h3>Business Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 5:00 PM (CET)</p>
                            </div>
                        </div>

                        <div className="social-media-links">
                            <h3>Connect with Us</h3>
                            {/* Removed motion wrapper and animation props from social-icons container */}
                            <div className="social-icons">
                                {/* Removed motion wrappers and animation props from individual social links, kept whileHover */}
                                <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                {/* Add more social links as needed */}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="contact-form-column">
                        {/* Removed motion wrapper and animation props from contact-form-block */}
                        <div className="contact-form-block">
                            <h3>Send Us a Message</h3>
                            <form onSubmit={handleSubmit} className="contact-form">
                                {/* Removed motion wrappers and animation props from form-groups */}
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" id="name" name="name" required placeholder="Enter your full name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" placeholder="Regarding partnership, support, etc." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea id="message" name="message" rows={6} required placeholder="Type your message here..."></textarea>
                                </div>
                                {/* Retained whileHover and whileTap for interactive button feedback */}
                                <button
                                    type="submit"
                                    className="submit-button"
                                    // These are interactive effects, not reveal animations, so they are kept
                                    // You would typically use Framer Motion's `motion.button` for these
                                    // For now, these props are commented out as the 'motion' import is removed.
                                    // If you want these interactive effects, you'll need to re-add 'motion' import
                                    // and wrap this button with 'motion.button'
                                    // whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
                                    // whileTap={{ scale: 0.95 }}
                                >
                                    Send Message <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Basic Styles (similar to About and Services for consistency) */}
            <style jsx>{`
                :root {
                    /* Assuming these are defined in a global CSS or context */
                    --color-background: #F8F8F8;
                    --color-text-primary: #1A1A1A;
                    --color-accent: #916C3C;
                    --color-primary: #916C3C; /* Assuming --color-primary is the same as --color-accent or a similar brand color */
                    --color-primary-dark: #7a5a30; /* A darker shade for hover effect */
                    --color-border: #E0E0E0;
                }

                .contact-page-container {
                    background-color: var(--color-background);
                    color: var(--color-text-primary);
                }

                /* Hero Section */
                .contact-hero-section {
                    background-image: url('/images/contact-hero-background.jpg'); /* MANDATORY INPUT: Add your hero image path */
                    background-size: cover;
                    background-position: center;
                    color: white;
                    padding: 8rem 2rem;
                    min-height: 450px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .hero-background-image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
                    z-index: 1;
                }

                .contact-hero-title, .contact-hero-subtitle {
                    position: relative;
                    z-index: 2;
                    max-width: 900px;
                }

                .contact-hero-title {
                    font-size: 4rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                }

                .contact-hero-subtitle {
                    font-size: 1.6rem;
                    font-weight: 400;
                    margin-bottom: 2rem;
                    opacity: 0.9;
                }

                /* General Section Styles */
                .section-title {
                    font-size: 2.8rem;
                    font-weight: 700;
                    color: var(--color-text-primary);
                    margin-bottom: 4rem;
                    text-align: center;
                    line-height: 1.2;
                    padding-top: 2rem;
                }

                .contact-content-section {
                    padding: 6rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                /* --- NEW TWO-COLUMN LAYOUT STYLES --- */
                .contact-two-column-layout {
                    display: flex;
                    gap: 4rem; /* Space between columns */
                    align-items: flex-start; /* Align tops of columns */
                }

                .contact-info-column {
                    flex: 1.5; /* This column will be wider */
                    min-width: 400px; /* Ensure minimum width for content readability */
                    display: flex; /* Allow content inside to flow vertically */
                    flex-direction: column;
                }

                .contact-form-column {
                    flex: 1; /* This column will be narrower */
                    min-width: 350px; /* Ensure minimum width for form usability */
                }

                /* Adjusting existing blocks to fit new column structure */
                .contact-info-block { /* This block is now effectively wrapped by .contact-info-column */
                    background-color: transparent; /* Remove background as column provides visual separation */
                    box-shadow: none; /* Remove shadow */
                    padding: 0; /* Remove padding if handled by column itself */
                }

                .contact-info-column .section-title {
                    text-align: left; /* Align title to the left within its column */
                }

                /* Keep the form block styling */
                .contact-form-block {
                    background-color: #f7f9fc;
                    border-radius: 16px;
                    padding: 3rem;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
                    border: 1px solid var(--color-border);
                    position: sticky; /* Make it sticky */
                    top: 2rem; /* Stick it 2rem from the top of the viewport */
                    align-self: flex-start; /* Ensure it aligns to the top when sticky */
                }

                /* --- END NEW TWO-COLUMN LAYOUT STYLES --- */

                .intro-text {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: rgba(62, 63, 64, 0.8);
                    margin-bottom: 3rem;
                    text-align: left;
                }

                .contact-form-block h3, .social-media-links h3 {
                    font-size: 2rem;
                    color: var(--color-text-primary);
                    margin-bottom: 2rem;
                    text-align: center;
                }
                .contact-form-block h3 {
                    margin-top: 0;
                    font-size: 2.2rem;
                    color: var(--color-primary);
                    font-weight: 700;
                }

                /* Info Cards Grid */
                .info-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                }

                .info-card {
                    background-color: white;
                    border-radius: 12px;
                    padding: 2rem;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                    text-align: center;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .info-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
                }

                .info-card :global(svg) {
                    font-size: 2.5rem;
                    color: var(--color-accent);
                    margin-bottom: 1rem;
                }

                .info-card h3 {
                    font-size: 1.4rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: var(--color-text-primary);
                }

                .info-card p, .info-card a, .info-card address {
                    font-size: 1rem;
                    color: rgba(62, 63, 64, 0.7);
                    line-height: 1.6;
                    text-decoration: none;
                }

                .info-card a:hover {
                    color: var(--color-primary);
                    text-decoration: underline;
                }

                /* Social Media Links - Adjusted for size and spacing */
                .social-media-links {
                    text-align: center;
                    margin-top: 3rem;
                }

                .social-icons {
                    display: flex;
                    justify-content: center;
                    gap: 2.5rem; /* Adjusted gap for more space between icons */
                }

                .social-icons a {
                    /* Individual social link (the <a> tag) */
                    /* FontAwesomeIcon component will inherit font-size from this parent <a> */
                    font-size: 3.5rem; /* Significantly larger icon size */
                    color: var(--color-accent); /* Use your accent color for icons */
                    transition: color 0.3s ease, transform 0.2s ease; /* Smooth hover transition */
                    display: flex; /* Ensure the link itself is a flex item for proper gap */
                    align-items: center; /* Vertically center icon within its link */
                    justify-content: center; /* Horizontally center icon within its link */
                }

                .social-icons a:hover {
                    color: var(--color-primary-dark); /* Darker accent on hover */
                    transform: scale(1.1); /* Slightly enlarge on hover */
                }

                /* Contact Form */
                .contact-form .form-group {
                    margin-bottom: 1.8rem;
                }

                .contact-form label {
                    display: block;
                    font-size: 1.05rem;
                    color: var(--color-text-primary);
                    margin-bottom: 0.6rem;
                    font-weight: 600;
                }

                .contact-form input[type="text"],
                .contact-form input[type="email"],
                .contact-form textarea {
                    width: 100%;
                    padding: 1.1rem 1.2rem;
                    border: 1px solid #dcdfe6;
                    border-radius: 10px;
                    font-size: 1rem;
                    color: var(--color-text-primary);
                    background-color: white;
                    box-sizing: border-box;
                    transition: border-color 0.3s ease, box-shadow 0.3s ease;
                }

                /* Placeholder styles for visibility */
                .contact-form input::placeholder,
                .contact-form textarea::placeholder {
                    color: #929292;
                    opacity: 1;
                    font-style: italic;
                }

                .contact-form input:focus,
                .contact-form textarea:focus {
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 4px rgba(145, 108, 60, 0.25);
                    outline: none;
                }

                .contact-form textarea {
                    resize: vertical;
                    min-height: 140px;
                }

                .submit-button {
                    background-color: var(--color-primary);
                    color: white;
                    border: none;
                    padding: 1.2rem 2.8rem;
                    border-radius: 10px;
                    font-size: 1.25rem;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.85rem;
                    width: 100%;
                    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
                }

                .submit-button:hover {
                    background-color: var(--color-primary-dark);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
                }

                .submit-button .send-icon {
                    font-size: 1.25rem;
                }

                /* Responsive Adjustments */
                @media (max-width: 1024px) {
                    .contact-hero-section {
                        padding: 7rem 2rem;
                        min-height: 400px;
                    }
                    .contact-hero-title { font-size: 3.5rem; }
                    .contact-hero-subtitle { font-size: 1.4rem; }
                    .section-title { font-size: 2.4rem; }
                    .contact-content-section { padding: 5rem 1.5rem; }

                    /* Adjust two-column layout for tablets */
                    .contact-two-column-layout {
                        flex-direction: column; /* Stack columns vertically */
                        gap: 3rem;
                    }
                    .contact-info-column, .contact-form-column {
                        min-width: unset;
                        width: 100%;
                        max-width: 600px; /* Constrain width when stacked */
                        margin: 0 auto; /* Center when stacked */
                    }
                    .contact-info-column .section-title {
                        text-align: center; /* Center title when stacked */
                    }
                    .intro-text { text-align: center; } /* Center text when stacked */
                    .contact-form-block {
                        position: static; /* Remove sticky positioning when stacked */
                        top: auto;
                    }
                }

                @media (max-width: 768px) {
                    .contact-hero-section {
                        padding: 6rem 1.5rem 4rem;
                        min-height: 350px;
                    }
                    .contact-hero-title { font-size: 3rem; }
                    .contact-hero-subtitle { font-size: 1.2rem; }
                    .section-title { font-size: 2rem; margin-bottom: 3rem; }
                    .contact-content-section { padding: 4rem 1.5rem; }
                    .info-cards-grid { grid-template-columns: 1fr; }
                    /* Corrected font-size for social icons on smaller screens */
                    .social-icons a { font-size: 3rem; } /* Adjusted font size for larger icons */
                    .submit-button { padding: 1rem 2.5rem; font-size: 1.1rem; }
                }

                @media (max-width: 480px) {
                    .contact-hero-section {
                        min-height: 300px;
                        padding: 5rem 1rem 3rem;
                    }
                    .contact-hero-title { font-size: 2.5rem; }
                    .contact-hero-subtitle { font-size: 1rem; }
                    .section-title { font-size: 1.8rem; margin-bottom: 2.5rem; }
                    .contact-content-section { padding: 3rem 1rem; }
                    .contact-form-block h3, .social-media-links h3 { font-size: 1.5rem; }
                    .info-card :global(svg) { font-size: 2rem; }
                    .info-card h3 { font-size: 1.2rem; }
                    .info-card p, .info-card a { font-size: 0.9rem; }
                    .contact-form label, .contact-form input, .contact-form textarea { font-size: 0.95rem; }
                    .submit-button { padding: 0.9rem 2.2rem; font-size: 1.05rem; }
                    .submit-button .send-icon { font-size: 1.05rem; }
                    /* Corrected font-size for social icons on extra small screens */
                    .social-icons a { font-size: 2.5rem; } /* Adjusted font size for larger icons */
                }
            `}</style>
        </div>
    );
}