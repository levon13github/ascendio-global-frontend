// src/components/CoreSolutionSection.tsx
'use client';

import React, { useState, useRef, useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRocket,
    faBrain,
    faCogs,
    faUsers,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence, Easing } from 'framer-motion';

export default function CoreSolutionSection() {
    const solutions = [
        {
            id: 'solution-1',
            icon: faBrain,
            title: 'Personalized 1-on-1 Coaching',
            shortDescription: 'Tailored guidance and strategic insights to refine your ideas and overcome specific challenges.',
            detailedDescription: 'Our expert coaches provide bespoke 1-on-1 sessions, diving deep into your unique business challenges. From refining your initial concept to scaling operations, we offer actionable strategies and personalized feedback designed to accelerate your growth and ensure you navigate the entrepreneurial landscape with confidence.',
        },
        {
            id: 'solution-2',
            icon: faRocket,
            title: 'Comprehensive Digital Content',
            shortDescription: 'Access a rich library of courses, frameworks, and resources for self-paced learning and deep dives.',
            detailedDescription: 'Unlock a vast repository of meticulously crafted digital content, including in-depth courses, proven frameworks, and practical resources. This self-paced learning library covers everything from market validation and business planning to advanced growth hacking techniques, empowering you with knowledge at your fingertips.',
        },
        {
            id: 'solution-3',
            icon: faCogs,
            title: 'Vibrant Community Platform',
            shortDescription: 'Connect, collaborate, and grow with a network of like-minded aspiring and established entrepreneurs.',
            detailedDescription: 'Join an exclusive, thriving community of ambitious entrepreneurs. Our platform fosters collaboration, peer-to-peer learning, and invaluable networking opportunities. Share insights, seek advice, and celebrate successes in a supportive environment designed to fuel your journey and expand your professional circle.',
        },
        {
            id: 'solution-4',
            icon: faUsers,
            title: 'AI Tools & Integration Guidance',
            shortDescription: 'Leverage cutting-edge AI for market research, idea validation, and operational efficiency.',
            detailedDescription: 'Step into the future of business with our curated AI tools and expert integration guidance. Discover how to harness artificial intelligence for rapid market research, precise idea validation, automated operational tasks, and data-driven decision-making, giving your venture a significant competitive edge.',
        },
    ];

    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const scrollPos = useRef(0);

    useLayoutEffect(() => {
        // This effect is primarily for capturing initial positions if needed,
        // though Framer Motion's layout prop often handles this internally.
    }, [activeCardIndex]);

    const handleClick = (index: number) => {
        if (activeCardIndex === index) {
            setActiveCardIndex(null);
            document.body.style.overflow = '';
            window.scrollTo(0, scrollPos.current);
        } else {
            scrollPos.current = window.scrollY;
            setActiveCardIndex(index);
            document.body.style.overflow = 'hidden';
        }
    };

    const headlineVariants = {
        hidden: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as Easing } },
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

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as Easing } },
    };

    const contentVariants = {
        collapsed: { opacity: 0, height: 0, overflow: 'hidden', padding: 0 },
        expanded: {
            opacity: 1,
            height: 'auto',
            padding: '1rem 0 0',
            transition: { opacity: { duration: 0.3 }, height: { duration: 0.5, ease: 'easeOut' as Easing } },
        },
    };

    return (
        <section className="core-solution-section">
            <motion.div
                className="section-header"
                variants={headlineVariants}
                initial="hidden"
                animate="show" // Changed from whileInView to animate
                // Removed viewport prop
            >
                <h2 className="section-title">Our Solutions: Your Path to Entrepreneurial Excellence</h2>
                <p className="section-subtitle">
                    The Ascendio Global Framework: Your Blueprint for Visionary Business Creation.
                </p>
            </motion.div>

            <motion.div
                className="solutions-grid-wrapper"
            >
                <motion.div
                    className="solutions-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show" // Changed from whileInView to animate
                    // Removed viewport prop
                >
                    {solutions.map((solution, index) => {
                        const isActive = activeCardIndex === index;
                        const isAnyCardActive = activeCardIndex !== null;

                        if (isActive) return null;

                        return (
                            <motion.div
                                key={solution.id}
                                layoutId={solution.id}
                                ref={el => { cardRefs.current[index] = el; }}
                                className={`solution-card ${isAnyCardActive && !isActive ? 'inactive-blurred' : ''}`}
                                variants={itemVariants}
                                initial="hidden"
                                animate="show" // Changed from whileInView to animate
                                // Removed viewport prop
                                whileHover={!isAnyCardActive ? { scale: 1.02, boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)' } : {}}
                                onClick={() => handleClick(index)}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                style={{ zIndex: isAnyCardActive && !isActive ? 1 : 'auto' }}
                            >
                                <div className="solution-icon">
                                    <FontAwesomeIcon icon={solution.icon} />
                                </div>
                                <h3 className="solution-card-title">{solution.title}</h3>
                                <p className="solution-short-description">{solution.shortDescription}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {activeCardIndex !== null && (
                    <>
                        <motion.div
                            className="card-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => handleClick(activeCardIndex)}
                        />
                        <motion.div
                            key={solutions[activeCardIndex].id}
                            layoutId={solutions[activeCardIndex].id}
                            className="solution-card active"
                            onClick={() => handleClick(activeCardIndex)}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            style={{ zIndex: 10002 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <div className="solution-icon">
                                <FontAwesomeIcon icon={solutions[activeCardIndex].icon} />
                            </div>
                            <h3 className="solution-card-title">{solutions[activeCardIndex].title}</h3>
                            <motion.div
                                key="detailedContent"
                                variants={contentVariants}
                                initial="collapsed"
                                animate="expanded"
                                exit="collapsed"
                                className="solution-detailed-description-container"
                            >
                                <p>{solutions[activeCardIndex].detailedDescription}</p>
                                <button className="close-card-button" onClick={(e) => { e.stopPropagation(); handleClick(activeCardIndex); }}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style jsx>{`
                /*
                  All .solution-card.active styles are moved to globals.css
                  Only highly specific or dynamic styles remain here.
                */

                /* Hide short description when card is active */
                .solution-card.active .solution-short-description {
                    display: none;
                }

                /* Styles for the detailed description container */
                .solution-detailed-description-container {
                    /* Padding and border are now part of contentVariants for animation */
                    position: relative; /* For close button positioning */
                }

                .solution-detailed-description-container p {
                    text-align: left;
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--color-text-primary); /* Ensure primary dark text color */
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

                /* Responsive adjustments for expanded card */
                @media (max-width: 768px) {
                    /* .solution-card.active styles are now in globals.css */
                    .solution-detailed-description-container p {
                        font-size: 0.95rem;
                    }
                    .close-card-button {
                        font-size: 1.2rem;
                        top: 0.2rem;
                        right: 0.2rem;
                    }
                }
            `}</style>
        </section>
    );
}