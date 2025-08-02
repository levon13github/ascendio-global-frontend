// src/components/ProblemSolvedSection.tsx
'use client';

import React, { useState, useRef, useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLightbulb,
    faChartLine,
    faRobot,
    faClock,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence, Easing } from 'framer-motion'; // Re-added Easing import

export default function ProblemSolvedSection() {
    const problems = [
        {
            id: 'problem-1',
            icon: faLightbulb,
            title: 'The overwhelming "where to begin?"',
            shortDescription: 'Feeling lost at the starting line, unsure of the first step to take.',
            detailedDescription: 'Many aspiring entrepreneurs find themselves paralyzed by choice and the sheer scale of starting a business. We provide a clear starting point, breaking down complex tasks into manageable steps to eliminate initial overwhelm and get you moving forward with confidence. Our AI-powered tools help you map out your first 90 days, ensuring every step is purposeful and productive.',
        },
        {
            id: 'problem-2',
            icon: faChartLine,
            title: 'Doubting your viable idea',
            shortDescription: 'Worried if your concept holds true potential or if its just a fleeting thought.',
            detailedDescription: 'It\'s natural to question your ideas. Our process includes robust validation techniques to assess market demand, competitive landscape, and unique selling propositions, ensuring your idea has a solid foundation for sustainable growth and impact. Through market analysis and expert feedback, we help you refine your concept until it\'s undeniably viable.',
        },
        {
            id: 'problem-3',
            icon: faRobot,
            title: 'Fear of the unknown path',
            shortDescription: 'Anxiety about navigating the complexities of launching and growing a business.',
            detailedDescription: 'The entrepreneurial journey is full of unknowns. We demystify the process by providing actionable insights, strategic planning, and practical tools to help you anticipate challenges, mitigate risks, and confidently navigate every stage of your business development. Our community offers peer support, and our mentors share real-world strategies to overcome obstacles.',
        },
        {
            id: 'problem-4',
            icon: faClock,
            title: 'Lack of a clear roadmap',
            shortDescription: 'Struggling to transform ambition into a structured, actionable plan.',
            detailedDescription: 'Ambition is essential, but a clear roadmap is critical. We work with you to develop a step-by-step strategy, outlining key milestones, resource allocation, and performance metrics, ensuring your vision translates into measurable progress and tangible results. Our personalized coaching helps you stay accountable and adapt your roadmap as your business evolves.',
        },
    ];

    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const scrollPos = useRef(0);

    useLayoutEffect(() => {
        // No direct code change needed here for the current issue.
    }, [activeCardIndex]);

    const handleClick = (index: number) => {
        if (activeCardIndex === index) {
            setActiveCardIndex(null);
            document.body.style.overflow = ''; // Re-enable body scroll
            window.scrollTo(0, scrollPos.current); // Restore scroll position
        } else {
            scrollPos.current = window.scrollY; // Store current scroll position
            setActiveCardIndex(index);
            document.body.style.overflow = 'hidden'; // Disable body scroll
        }
    };

    const contentVariants = {
        collapsed: { opacity: 0, height: 0, overflow: 'hidden', padding: 0 },
        expanded: {
            opacity: 1,
            height: 'auto',
            padding: '1rem 0 0',
            transition: { opacity: { duration: 0.3 }, height: { duration: 0.5, ease: 'easeOut' as Easing } }, // Cast 'easeOut' to Easing
        },
    };

    return (
        <section className="problem-solved-section">
            <div className="section-header">
                <h2 className="section-title">Are These Your Challenges?</h2>
                <p className="section-subtitle">
                    From Ambition to Action: Turning Idea Uncertainty into Your Unstoppable Advantage.
                </p>
            </div>

            <div className="problems-grid-wrapper">
                <div className="problems-grid">
                    {problems.map((problem, index) => {
                        const isActive = activeCardIndex === index;
                        const isAnyCardActive = activeCardIndex !== null;

                        if (isActive) return null;

                        return (
                            <motion.div
                                key={problem.id}
                                layoutId={problem.id}
                                ref={el => { cardRefs.current[index] = el; }}
                                className={`problem-card ${isAnyCardActive && !isActive ? 'inactive-blurred' : ''}`}
                                whileHover={!isAnyCardActive ? { scale: 1.02, boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)' } : {}}
                                onClick={() => handleClick(index)}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                style={{ zIndex: isAnyCardActive && !isActive ? 1 : 'auto' }}
                            >
                                <div className="problem-icon">
                                    <FontAwesomeIcon icon={problem.icon} />
                                </div>
                                <h3 className="problem-title">{problem.title}</h3>
                                <p className="problem-short-description">{problem.shortDescription}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

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
                            key={problems[activeCardIndex].id}
                            layoutId={problems[activeCardIndex].id}
                            className="problem-card active"
                            onClick={() => handleClick(activeCardIndex)}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            style={{ zIndex: 10002 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <div className="problem-icon">
                                <FontAwesomeIcon icon={problems[activeCardIndex].icon} />
                            </div>
                            <h3 className="problem-title">{problems[activeCardIndex].title}</h3>
                            <motion.div
                                key="detailedContent"
                                variants={contentVariants}
                                initial="collapsed"
                                animate="expanded"
                                exit="collapsed"
                                className="problem-detailed-description-container"
                            >
                                <p>{problems[activeCardIndex].detailedDescription}</p>
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
                    All .problem-card.active styles are moved to globals.css
                    Only highly specific or dynamic styles remain here.
                */

                /* Hide short description when card is active (this rule is now less critical as shortDescription isn't rendered in active card) */
                .problem-card.active .problem-short-description {
                    display: none;
                }

                /* Styles for the detailed description container */
                .problem-detailed-description-container {
                    /* Padding and border are now part of contentVariants for animation */
                    position: relative; /* For close button positioning */
                }

                .problem-detailed-description-container p {
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
                    /* .problem-card.active styles are now in globals.css */
                    .problem-detailed-description-container p {
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