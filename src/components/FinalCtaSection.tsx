'use client'; // This must be the very first line

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Only import motion, easeOut is no longer needed

export default function FinalCtaSection() {
    // Define a basic "static" variant for immediate display
    // This will ensure elements start and stay visible without animating in
    const staticVariants = {
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0 } }, // Duration 0 means instant
    };

    // Removed specific animation variants (headlineVariants, descriptionVariants, ctaVariants)
    // as they are no longer needed for a static appearance.

    return (
        <section className="final-cta-section">
            <div className="section-content">
                <motion.h2
                    className="section-headline"
                    initial="visible" // Set to immediate visible state
                    animate="visible" // Ensure it stays in the visible state
                    variants={staticVariants} // Use the static variant
                    // Removed whileInView and viewport props
                >
                    Unlock Your Entrepreneurial Vision:<br /> Claim Your Free Strategy Session.
                </motion.h2>
                <motion.p
                    className="section-description"
                    initial="visible" // Set to immediate visible state
                    animate="visible" // Ensure it stays in the visible state
                    variants={staticVariants} // Use the static variant
                    // Removed whileInView and viewport props
                >
                    Take the first step towards transforming your entrepreneurial ambition.<br />
                    Connect with us for a no-obligation discussion to explore your business idea and strategic next moves.
                </motion.p>
                <motion.div
                    initial="visible" // Set to immediate visible state
                    animate="visible" // Ensure it stays in the visible state
                    variants={staticVariants} // Use the static variant
                    // Removed whileInView and viewport props
                >
                    <Link href="/contact" className="global-cta-button">
                        Book Your FREE Strategy Session Now
                    </Link>
                </motion.div>
            </div>

            <div className="final-cta-background-elements"></div>

            <style jsx>{`
                .final-cta-section {
                    padding: 6rem 2rem;
                    background-color: var(--color-accent);
                    color: white;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .section-content {
                    max-width: 800px;
                    margin: 0 auto;
                    z-index: 2;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem; /* Framer motion handles spacing during animation, but this is good for static */
                }

                .section-headline {
                    font-size: 2.8rem;
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 0.5rem; /* Adjusted to rely more on flex gap */
                    color: white;
                }

                .section-description {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem; /* Adjusted to rely more on flex gap */
                    color: rgba(255, 255, 255, 0.9);
                }

                /* The .final-cta-button styles have been moved to globals.css */

                .final-cta-background-elements {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }

                @media (max-width: 768px) {
                    .section-headline {
                        font-size: 2.2rem;
                    }
                    .section-description {
                        font-size: 1rem;
                    }
                }

                @media (max-width: 480px) {
                    .section-headline {
                        font-size: 1.8rem;
                    }
                    .section-description {
                        font-size: 0.95rem;
                    }
                }
            `}</style>
        </section>
    );
}