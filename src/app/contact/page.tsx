// src/app/contact/page.tsx
'use client';

import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faClock,
    faPaperPlane // For the send button
} from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faInstagram,
    faFacebook
} from '@fortawesome/free-brands-svg-icons'; // For social media icons

export default function ContactPage() {
    // Reusing animation variants for consistency
    const sectionHeaderVariants = {
        hidden: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    };

    const textBlockVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut, delay: 0.2 } },
    };

    const formFieldVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } },
    };

    const iconCardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut, delay: 0.2 } },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send data to an API
        alert('Thank you for your message! We will get back to you shortly.');
        // You might also clear the form fields here
    };

    return (
        <div className="contact-page-container">
            {/* Hero Section */}
            <section className="contact-hero-section">
                <div className="hero-background-image-overlay"></div>
                <motion.h1
                    className="contact-hero-title"
                    initial={{ opacity: 0, y: -70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: easeOut }}
                >
                    Get in Touch with Ascendio Global
                </motion.h1>
                <motion.p
                    className="contact-hero-subtitle"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
                >
                    We're here to help you ascend. Reach out for inquiries, support, or partnership opportunities.
                </motion.p>
            </section>

            {/* Main Contact Content */}
            <section className="contact-content-section">
                <motion.h2
                    className="section-title"
                    variants={sectionHeaderVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    How Can We Assist You?
                </motion.h2>

                <div className="contact-info-and-form">
                    {/* Contact Information */}
                    <motion.div
                        className="contact-info-block"
                        variants={textBlockVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <p className="intro-text">
                            Whether you're looking for guidance, have a specific question about our services, or want to explore collaboration, we're ready to connect. Choose the method that works best for you.
                        </p>

                        <div className="info-cards-grid">
                            <motion.div className="info-card" variants={iconCardVariants}>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <h3>Email Us</h3>
                                <p>For general inquiries and support.</p>
                                <a href="mailto:ascendioglobal25@gmail.com">ascendioglobal25@gmail.com</a> {/* MANDATORY: Your email */}
                            </motion.div>
                            <motion.div className="info-card" variants={iconCardVariants}>
                                <FontAwesomeIcon icon={faPhone} />
                                <h3>Call Us</h3>
                                <p>Speak directly with our team.</p>
                                <a href="tel:+32......">+32......</a> {/* MANDATORY: Your phone number */}
                            </motion.div>
                            <motion.div className="info-card" variants={iconCardVariants}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <h3>Our Location</h3>
                                <p>By appointment only. Virtual first.</p>
                                <address>Grimbergen, Belgium</address> {/* OPTIONAL: Your physical address */}
                            </motion.div>
                            <motion.div className="info-card" variants={iconCardVariants}>
                                <FontAwesomeIcon icon={faClock} />
                                <h3>Business Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 5:00 PM (CET)</p> {/* MANDATORY: Your business hours and timezone */}
                            </motion.div>
                        </div>

                        <div className="social-media-links">
                            <h3>Connect with Us</h3>
                            <motion.div
                                className="social-icons"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <motion.a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer" variants={iconCardVariants} whileHover={{ scale: 1.1 }}>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </motion.a>
                                <motion.a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" variants={iconCardVariants} whileHover={{ scale: 1.1 }}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </motion.a>
                                <motion.a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" variants={iconCardVariants} whileHover={{ scale: 1.1 }}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </motion.a>
                                {/* Add more social links as needed */}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="contact-form-block"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: easeOut, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <h3>Send Us a Message</h3>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <motion.div className="form-group" variants={formFieldVariants}>
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="name" required />
                            </motion.div>
                            <motion.div className="form-group" variants={formFieldVariants}>
                                <label htmlFor="email">Your Email</label>
                                <input type="email" id="email" name="email" required />
                            </motion.div>
                            <motion.div className="form-group" variants={formFieldVariants}>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" />
                            </motion.div>
                            <motion.div className="form-group" variants={formFieldVariants}>
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" name="message" rows={6} required></textarea>
                            </motion.div>
                            <motion.button
                                type="submit"
                                className="submit-button"
                                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Basic Styles (similar to About and Services for consistency) */}
            <style jsx>{`
                .contact-page-container {
                    background-color: var(--color-background);
                    color: var(--color-text-primary);
                }

                /* Hero Section */
                .contact-hero-section {
                    background-image: url('/images/contact-hero-background.jpg'); /* MANDATORY INPUT: Add your hero image path */
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

                .contact-info-and-form {
                    display: flex;
                    gap: 4rem;
                    align-items: flex-start; /* Align top of content */
                    flex-wrap: wrap; /* Allow wrapping on smaller screens */
                }

                .contact-info-block {
                    flex: 1.2; /* Slightly larger for info */
                    min-width: 350px; /* Minimum width before wrapping */
                }

                .contact-form-block {
                    flex: 1;
                    min-width: 350px; /* Minimum width before wrapping */
                    background-color: white;
                    border-radius: 12px;
                    padding: 3rem;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                }

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
                    margin-top: 0; /* Override default h3 margin */
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

                /* Social Media Links */
                .social-media-links {
                    text-align: center;
                    margin-top: 3rem;
                }

                .social-icons {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                }

                .social-icons a {
                    font-size: 2.5rem;
                    color: var(--color-text-secondary);
                    transition: color 0.3s ease;
                }

                .social-icons a:hover {
                    color: var(--color-primary); /* Or specific brand color */
                }

                /* Contact Form */
                .contact-form .form-group {
                    margin-bottom: 1.5rem;
                }

                .contact-form label {
                    display: block;
                    font-size: 1rem;
                    color: var(--color-text-primary);
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                }

                .contact-form input[type="text"],
                .contact-form input[type="email"],
                .contact-form textarea {
                    width: 100%;
                    padding: 1rem;
                    border: 1px solid var(--color-border);
                    border-radius: 8px;
                    font-size: 1rem;
                    color: var(--color-text-primary);
                    background-color: var(--color-background);
                    box-sizing: border-box; /* Include padding in width */
                    transition: border-color 0.3s ease, box-shadow 0.3s ease;
                }

                .contact-form input:focus,
                .contact-form textarea:focus {
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 3px rgba(145, 108, 60, 0.2); /* Light primary color glow */
                    outline: none;
                }

                .contact-form textarea {
                    resize: vertical; /* Allow vertical resizing */
                    min-height: 120px;
                }

                .submit-button {
                    background-color: var(--color-primary);
                    color: white;
                    border: none;
                    padding: 1rem 2.5rem;
                    border-radius: 8px;
                    font-size: 1.2rem;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    width: 100%; /* Make button full width of form */
                    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
                }

                .submit-button:hover {
                    background-color: var(--color-primary-dark);
                }

                .submit-button .send-icon {
                    font-size: 1.2rem;
                }

                /* Responsive Adjustments */
                @media (max-width: 1024px) {
                    .contact-hero-title { font-size: 3rem; }
                    .contact-hero-subtitle { font-size: 1.4rem; }
                    .section-title { font-size: 2.4rem; }
                    .contact-content-section { padding: 5rem 1.5rem; }
                    .contact-info-and-form {
                        flex-direction: column; /* Stack on medium screens */
                        gap: 3rem;
                        align-items: center; /* Center stacked blocks */
                    }
                    .contact-info-block, .contact-form-block {
                        min-width: unset; /* Remove min-width to allow full flexibility */
                        width: 100%; /* Take full width when stacked */
                        max-width: 600px; /* Max width for readability */
                    }
                    .contact-form-block { padding: 2.5rem; }
                    .intro-text { text-align: center; }
                    .contact-form-block h3, .social-media-links h3 { font-size: 1.8rem; }
                    .info-cards-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
                }

                @media (max-width: 768px) {
                    .contact-hero-section { min-height: 350px; padding: 6rem 1.5rem 4rem; }
                    .contact-hero-title { font-size: 2.5rem; }
                    .contact-hero-subtitle { font-size: 1.2rem; }
                    .section-title { font-size: 2rem; margin-bottom: 3rem; }
                    .contact-content-section { padding: 4rem 1.5rem; }
                    .contact-info-block, .contact-form-block {
                        max-width: 100%; /* Allow full width on smaller screens */
                    }
                    .contact-form-block { padding: 2rem; }
                    .info-cards-grid { grid-template-columns: 1fr; } /* Stack info cards */
                }

                @media (max-width: 480px) {
                    .contact-hero-section { min-height: 300px; padding: 5rem 1rem 3rem; }
                    .contact-hero-title { font-size: 2rem; }
                    .contact-hero-subtitle { font-size: 1rem; }
                    .section-title { font-size: 1.8rem; margin-bottom: 2.5rem; }
                    .contact-content-section { padding: 3rem 1rem; }
                    .contact-form-block h3, .social-media-links h3 { font-size: 1.5rem; }
                    .info-card :global(svg) { font-size: 2rem; }
                    .info-card h3 { font-size: 1.2rem; }
                    .info-card p, .info-card a { font-size: 0.9rem; }
                    .contact-form label, .contact-form input, .contact-form textarea { font-size: 0.95rem; }
                    .submit-button { padding: 0.8rem 2rem; font-size: 1.1rem; }
                    .submit-button .send-icon { font-size: 1.1rem; }
                }
            `}</style>
        </div>
    );
}