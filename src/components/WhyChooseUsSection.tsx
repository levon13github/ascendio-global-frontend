// src/components/WhyChooseUsSection.tsx
'use client';

import React, { useState, useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHandshake, // For Trust
    faLightbulb, // For Innovation (or Empowerment)
    faShieldAlt, // For Integrity (or Trust)
    faRocket, // For Empowerment (or Innovation) - not used in values
    faGlobe, // For Impact
    faGem, // For Authenticity
    faTree, // For Legacy
    faStar, // For Empowerment
    faTimes, // For closing the expanded card
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence, Easing } from 'framer-motion'; // Import AnimatePresence and Easing

export default function WhyChooseUsSection() {
    const coreValues = [
        {
            id: "value-1", // Added unique ID
            name: "Empowerment",
            shortDescription: "Unleashing the potential within every aspiring entrepreneur.", // Renamed from 'phrase'
            detailedDescription: "We believe everyone has the innate ability to build their dream business and achieve extraordinary impact. Our guidance fosters self-reliance and confidence, providing the tools and mindset shifts necessary to overcome challenges and realize your full entrepreneurial potential.", // Renamed from 'description'
            icon: faStar
        },
        {
            id: "value-2",
            name: "Trust",
            shortDescription: "Building relationships based on transparency and reliability.",
            detailedDescription: "Our commitment to honesty, ethical practices, and consistent support ensures you feel secure and valued in every interaction. We prioritize open communication and deliver on our promises, fostering a foundation of trust that is essential for long-term success and partnership.",
            icon: faHandshake
        },
        {
            id: "value-3",
            name: "Integrity",
            shortDescription: "Upholding the highest standards in all our actions.",
            detailedDescription: "We operate with unwavering moral principles, ensuring our advice and services always serve your best interests with honesty and fairness. Our integrity means you can rely on us for truthful guidance and ethical solutions, building a business you can truly be proud of.",
            icon: faShieldAlt
        },
        {
            id: "value-4",
            name: "Innovation",
            shortDescription: "Pioneering new approaches for sustainable growth.",
            detailedDescription: "We are committed to forward-thinking strategies, leveraging cutting-edge tools and methodologies to keep you ahead in a dynamic market. Our focus on innovation ensures you are equipped with the latest insights and technologies to adapt, evolve, and lead in your industry.",
            icon: faLightbulb
        },
        {
            id: "value-5",
            name: "Impact",
            shortDescription: "Driving meaningful change, globally and individually.",
            detailedDescription: "Our focus is on creating businesses that not only succeed financially but also contribute positively to society and leave a lasting legacy. We guide you to identify and amplify your positive footprint, ensuring your entrepreneurial journey makes a significant difference in the world.",
            icon: faGlobe
        },
        {
            id: "value-6",
            name: "Authenticity",
            shortDescription: "Encouraging true self-expression in entrepreneurial journeys.",
            detailedDescription: "We champion genuine ideas and unique visions, helping you build a business that truly reflects who you are and what you stand for. Our approach encourages you to leverage your authentic self, fostering a brand and business model that resonates deeply with your values and target audience.",
            icon: faGem
        },
        {
            id: "value-7",
            name: "Legacy",
            shortDescription: "Cultivating lasting success for future generations.",
            detailedDescription: "We guide you to build businesses that endure, creating sustainable value and contributing to a better future beyond immediate gains. Our long-term perspective helps you establish robust foundations, ensuring your entrepreneurial efforts create a positive and lasting impact for years to come.",
            icon: faTree
        },
    ];

    // State to manage the index of the currently active (expanded) card
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
    // Ref to store the initial positions and dimensions of each card (used by Framer Motion layout)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    // Ref to store the scroll position before opening a card
    const scrollPos = useRef(0);

    useLayoutEffect(() => {
        // No direct code change needed here for the current issue.
    }, [activeCardIndex]);

    // Function to handle card click
    const handleClick = (index: number) => {
        if (activeCardIndex === index) {
            // If clicking the active card, close it
            setActiveCardIndex(null);
            // Re-enable body scroll and restore scroll position
            document.body.style.overflow = '';
            window.scrollTo(0, scrollPos.current);
        } else {
            // If clicking a new card, open it
            scrollPos.current = window.scrollY; // Store current scroll position
            setActiveCardIndex(index);
            // Disable body scroll to prevent scrolling while card is open
            document.body.style.overflow = 'hidden';
        }
    };

    // Removed headlineVariants, containerVariants, itemVariants, ctaVariants
    // as they are no longer used for static reveal animations.

    // Variants for the detailed content (appears/disappears inside expanded card)
    const contentVariants = {
        collapsed: { opacity: 0, height: 0, overflow: 'hidden', padding: 0 }, // Ensure padding is 0 when collapsed
        expanded: {
            opacity: 1,
            height: 'auto',
            padding: '1rem 0 0', // Add padding when expanded
            transition: { opacity: { duration: 0.3 }, height: { duration: 0.5, ease: 'easeOut' as Easing } },
        },
    };

    return (
        <section className="why-choose-us-section">
            <div className="section-content">
                {/* Removed motion.h2 and animation props */}
                <h2 className="section-headline">
                    The Ascendio Difference: Built on Vision, Driven by Values.
                </h2>

                {/* Removed motion.div wrapper and animation props */}
                <div className="value-tiles-grid-wrapper">
                    {/* Removed motion.div wrapper and animation props */}
                    <div className="value-tiles-grid">
                        {coreValues.map((value, index) => {
                            const isActive = activeCardIndex === index;
                            const isAnyCardActive = activeCardIndex !== null;

                            // Only render the card in the grid if it's NOT the active card
                            if (isActive) return null;

                            return (
                                <motion.div // Keep motion.div for layoutId and whileHover
                                    key={value.id} // Use unique ID as key
                                    layoutId={value.id} // Crucial: layoutId for Framer Motion to track element
                                    ref={el => { cardRefs.current[index] = el; }} // Assign ref to capture position
                                    className={`value-tile ${isAnyCardActive && !isActive ? 'inactive-blurred' : ''}`}
                                    whileHover={!isAnyCardActive ? { scale: 1.03, boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)" } : {}}
                                    onClick={() => handleClick(index)}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Spring transition for smooth movement
                                    // Z-index for normal/blurred cards (active card z-index handled by globals.css now)
                                    style={{ zIndex: isAnyCardActive && !isActive ? 1 : 'auto' }}
                                >
                                    <div className="value-icon">
                                        <FontAwesomeIcon icon={value.icon} />
                                    </div>
                                    <h3>{value.name}</h3>
                                    <p className="value-short-description">{value.shortDescription}</p>
                                    {/* Detailed description is only in the expanded card instance */}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Removed motion.p and animation props */}
                <p className="impact-statement">
                    These values fuel our commitment to fostering a global wave of impactful businesses.
                    We believe in nurturing entrepreneurs who not only achieve their dreams but also
                    contribute to a better future for humanity, leaving a profound and positive legacy.
                </p>

                {/* Removed motion.div and animation props */}
                <div>
                    <Link href="/contact" className="global-cta-button">
                        Discover Our Full Mission<br />Book Your FREE Strategy Session Now
                    </Link>
                </div>
            </div>

            {/* NEW: Backdrop/Overlay for the expanded card */}
            <AnimatePresence>
                {activeCardIndex !== null && (
                    <>
                        <motion.div
                            className="card-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => handleClick(activeCardIndex)} // Click backdrop to close
                        />
                        {/* Render the active card here, outside the grid, with the same layoutId */}
                        <motion.div
                            key={coreValues[activeCardIndex].id} // Use the ID of the active value
                            layoutId={coreValues[activeCardIndex].id} // Match layoutId
                            className="value-tile active" // Force active class
                            onClick={() => handleClick(activeCardIndex)} // Click to close
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            style={{ zIndex: 10002 }} // Explicitly high z-index
                            initial={{ opacity: 0, scale: 0.8 }} // Start slightly smaller and transparent
                            animate={{ opacity: 1, scale: 1 }} // Animate in fully opaque and normal scale
                            exit={{ opacity: 0, scale: 0.8 }} // Animate out
                        >
                            <div className="value-icon">
                                <FontAwesomeIcon icon={coreValues[activeCardIndex].icon} />
                            </div>
                            <h3>{coreValues[activeCardIndex].name}</h3>
                            {/* Detailed content is always rendered in the active card instance */}
                            <motion.div
                                key="detailedContent"
                                variants={contentVariants}
                                initial="collapsed"
                                animate="expanded"
                                exit="collapsed"
                                className="value-detailed-description-container"
                            >
                                <p>{coreValues[activeCardIndex].detailedDescription}</p>
                                <button className="close-card-button" onClick={(e) => { e.stopPropagation(); handleClick(activeCardIndex); }}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

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

                /*
                .value-tiles-grid styles moved to globals.css
                .value-tile styles moved to globals.css
                .value-tile.active styles moved to globals.css
                */

                /* Hide short description when card is active */
                .value-tile.active .value-short-description {
                    display: none;
                }

                /* Styles for the detailed description container */
                .value-detailed-description-container {
                    /* Padding and border are now part of contentVariants for animation */
                    position: relative; /* For close button positioning */
                }

                .value-detailed-description-container p {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--color-text-primary); /* Ensure primary dark text color */
                    text-align: left; /* Align text left within the expanded card */
                }

                /* Close button for expanded card */
                .close-card-button {
                    position: absolute;
                    top: 0.5rem;
                    right: 0.5rem;
                    background: none;
                    border: none;
                    color: var(--color-text-primary);
                    font-size: 1.5rem;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 50%;
                    transition: background-color 0.2s ease, color 0.2s ease;
                    z-index: 1003; /* Higher than card content */
                }

                .close-card-button:hover {
                    background-color: rgba(0, 0, 0, 0.05);
                    color: var(--color-accent);
                }

                .value-icon {
                    margin-bottom: 1rem;
                    line-height: 1;
                    color: var(--color-accent);
                }

                /* Removed :global(svg) from here, now in globals.css */
                /* .value-icon :global(svg) {
                    font-size: 3.5rem;
                } */

                .value-tile h3 {
                    font-size: 1.4rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: var(--color-text-primary);
                }

                /* .value-phrase is now .value-short-description */
                /* .value-description is now .value-detailed-description-container p */
                .value-short-description {
                    font-size: 1.1rem;
                    font-style: italic;
                    margin-bottom: 1rem;
                    color: var(--color-accent);
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

                @media (max-width: 1024px) {
                    .section-headline {
                        font-size: 2.2rem;
                    }
                    /* .value-tile padding moved to globals.css */
                    /* .value-icon :global(svg) moved to globals.css */
                    /* .value-tile h3 moved to globals.css */
                    /* .value-phrase, .value-description moved to globals.css */
                }

                @media (max-width: 768px) {
                    .section-headline {
                        font-size: 2rem;
                    }
                    /* .value-tile padding moved to globals.css */
                    /* .value-icon :global(svg) moved to globals.css */
                    /* .testimonial-quote removed as not relevant */
                    /* .impact-statement moved to globals.css */
                }

                @media (max-width: 480px) {
                    .section-headline {
                        font-size: 1.8rem;
                    }
                    /* .value-tiles-grid moved to globals.css */
                }
            `}</style>
        </section>
    );
}