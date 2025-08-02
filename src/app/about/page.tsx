// src/app/about/page.tsx
'use client';

import React, { useState, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Easing } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHandshake,
    faLightbulb,
    faShieldAlt,
    faGlobe,
    faGem,
    faTree,
    faStar,
    faBullseye,
    faSeedling,
    faCompass,
    faTools,
    faRocket,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

import WhyChooseUsSection from '@/components/WhyChooseUsSection';

export default function AboutPage() {
    const [activeJourneyIndex, setActiveJourneyIndex] = useState<number | null>(null);
    const [activeStatementIndex, setActiveStatementIndex] = useState<number | null>(null);
    const scrollPos = useRef(0);

    useLayoutEffect(() => {
        // This effect is primarily for capturing initial positions if needed,
        // though Framer Motion's layout prop often handles this internally.
    }, [activeJourneyIndex, activeStatementIndex]);

    const handleJourneyClick = (index: number) => {
        if (activeJourneyIndex === index) {
            setActiveJourneyIndex(null);
            document.body.style.overflow = '';
            window.scrollTo(0, scrollPos.current);
        } else {
            scrollPos.current = window.scrollY;
            setActiveJourneyIndex(index);
            document.body.style.overflow = 'hidden';
        }
    };

    const handleStatementClick = (index: number) => {
        if (activeStatementIndex === index) {
            setActiveStatementIndex(null);
            document.body.style.overflow = '';
            window.scrollTo(0, scrollPos.current);
        } else {
            scrollPos.current = window.scrollY;
            setActiveStatementIndex(index);
            document.body.style.overflow = 'hidden';
        }
    };

    // Removed sectionHeaderVariants, textBlockVariants, itemVariants, containerVariants
    // as they are no longer used for static reveals.

    const contentVariants = {
        collapsed: { opacity: 0, height: 0, overflow: 'hidden', padding: 0 },
        expanded: {
            opacity: 1,
            height: 'auto',
            padding: '1rem 0 0',
            transition: { opacity: { duration: 0.3 }, height: { duration: 0.5, ease: 'easeOut' as Easing } },
        },
    };

    const journeyMilestones = [
        {
            id: "journey-1",
            icon: faLightbulb,
            title: "The Spark: Identifying the Core Challenge",
            shortDescription: "Witnessing a widespread struggle for aspiring entrepreneurs.",
            detailedText: (
                <>
                    <p>
                        Every thriving enterprise begins with a singular vision – a deep-seated desire to solve a problem, fueled by <b>unwavering passion</b>, and a clear roadmap for a brighter future. For me, the genesis of <b>Ascendio Global</b> wasn't just a business idea; it was a profound response to a pervasive challenge. I observed countless brilliant minds, overflowing with groundbreaking concepts, often struggling to transform their latent potential into tangible, impactful businesses. They were stifled by market complexities, a lack of structured guidance, or the sheer, isolating weight of entrepreneurial uncertainty. <b>Their biggest fear was and still is how to think of a business idea.</b>
                    </p>
                </>
            ),
            founderImage: (
                <figure className="founder-image-figure">
                    <Image
                        src="/images/founder.jpg"
                        alt="Levon Bampagian, Founder of Ascendio Global"
                        width={1000}
                        height={1200}
                        layout="responsive"
                        objectFit="cover"
                        className="founder-image"
                    />
                    <figcaption className="founder-caption">
                        Levon Bampagian, Founder of Ascendio Global
                    </figcaption>
                </figure>
            ),
        },
        {
            id: "journey-2",
            icon: faCompass,
            title: "The Journey: Forging Expert Insights",
            shortDescription: "Leveraging diverse experience to pinpoint success strategies.",
            detailedDescription: (
                <p>
                    My journey through high-growth tech startups, corporate innovation, sustainable development, personal growth, consulting services and establishing NGOs provided a unique vantage point. I witnessed the common pitfalls that derail promising ventures – and, more importantly, identified the precise strategies that propel visionary founders to unprecedented success. This firsthand insight ignited a singular purpose within me: to demystify the entrepreneurial path and forge a clearer, more accessible route to market leadership.
                </p>
            ),
        },
        {
            id: "journey-3",
            icon: faTools,
            title: "The Ecosystem: Ascendio Global's Unique Approach",
            shortDescription: "A meticulously crafted system for entrepreneurial ascent.",
            detailedDescription: (
                <p>
                    <b>Ascendio Global</b> stands as the culmination of this dedication. It's not merely a platform; it's a meticulously crafted ecosystem built upon data-driven strategies, holistic personal development, lean startup methodologies, scalable digital frameworks and generative AI tools integration. Our foundational belief is simple yet powerful: with personalized mentorship, supportive toolkits, and actionable, cutting-edge tools, <b>any aspiring entrepreneur</b> can confidently generate their suitable idea, launch, navigate, and scale their ambition into a sustainable, world-changing enterprise. I've poured my dedication, years of solid experience, strategic foresight, unwavering commitment to ethical innovation, knack for simplifying complex systems, affinity for AI into cultivating a space where your ideas don't just survive – they <b>ascend</b> to their highest potential.
                </p>
            ),
        },
        {
            id: "journey-4",
            icon: faTree,
            title: "The Legacy: Building Beyond Business",
            shortDescription: "Empowering entrepreneurs to create lasting impact.",
            detailedDescription: (
                <p>
                    My personal mission, deeply embedded in Ascendio Global's ethos, is to empower you not only to achieve remarkable business success but to architect a lasting <b>legacy</b>. This is about building ventures that resonate with your authentic purpose, drive meaningful societal impact, and stand the test of time. <b>Let's embark on this transformative journey and build something truly extraordinary, together.</b>
                </p>
            ),
        },
    ];

    const businessStatements = [
        {
            id: "statement-1",
            title: "Our WHY",
            icon: faCompass,
            shortDescription: "To inspire a world where everyone believes in their power to shape their own destiny and create extraordinary impact.",
            detailedDescription: "Our fundamental purpose is to ignite a global movement where individuals recognize their inherent capacity to forge their own paths. We believe that by empowering people to tap into their unique strengths and visions, they can not only achieve personal success but also drive significant positive change in the world.",
        },
        {
            id: "statement-2",
            title: "Our HOW",
            icon: faTools,
            shortDescription: "Through the 'Ascendio Global Framework', we provide personalized 1-on-1 coaching, comprehensive digital content, a vibrant community platform, and cutting-edge AI tools.",
            detailedDescription: "The 'Ascendio Global Framework' is our proprietary methodology, meticulously designed to guide you from ideation to market leadership. It integrates personalized 1-on-1 coaching for tailored support, a comprehensive library of digital content for self-paced learning, a vibrant community platform for collaboration, and cutting-edge AI tools for efficiency and insight. This holistic approach ensures you have a clear, actionable roadmap at every stage.",
        },
        {
            id: "statement-3",
            title: "Our WHAT",
            icon: faSeedling,
            shortDescription: "We offer a holistic ecosystem of entrepreneurial guidance, resources, and support designed to help you generate your business idea, navigate the complexities of modern business creation and growth.",
            detailedDescription: "Ascendio Global delivers a complete ecosystem of entrepreneurial guidance. We provide the clarity, strategy, and actionable steps needed to help you generate a viable business idea, navigate the complexities of modern business creation, and scale your venture effectively. Our resources and support are designed to empower you to thrive in today's dynamic market.",
        },
        {
            id: "statement-4",
            title: "Our VISION",
            icon: faBullseye,
            shortDescription: "Ascendio Global is a vehicle for significant positive global impact, driven by innovation and leadership, providing us with freedom, recognition, and continuous growth.",
            detailedDescription: "Our vision extends beyond mere business success. We see Ascendio Global as a powerful vehicle for creating significant positive global impact, fueled by our commitment to innovation and leadership. This journey provides us with the freedom to pursue our passions, the recognition for our contributions, and the continuous growth that comes from achieving ethical prosperity and fulfilling our ultimate vision of a better future for humanity.",
        },
        {
            id: "statement-5",
            title: "Our MISSION",
            icon: faRocket,
            shortDescription: "To equip aspiring and established entrepreneurs with the knowledge, and tools necessary to confidently launch, scale, and sustain businesses that not only achieve financial success but also champion positive change in the world.",
            detailedDescription: "Our mission is to empower entrepreneurs at every stage – from aspiring individuals with nascent ideas to established business owners seeking to scale. We provide the essential knowledge, practical tools, and unwavering support needed to confidently launch, grow, and sustain ventures that are not only financially successful but also committed to championing positive change and contributing meaningfully to the world.",
        },
    ];

    return (
        <div className="about-page-container">
            {/* Hero/Intro Section */}
            <section className="about-hero-section">
                <div className="hero-background-image-overlay"></div>
                {/* Removed motion.h1 and motion.p with initial/animate/transition for hero text */}
                <h1 className="about-hero-title">
                    About Ascendio Global
                </h1>
                <p className="about-hero-subtitle">
                    Igniting Entrepreneurial Legacies.
                </p>
            </section>

            {/* 1. My Brand Story (Now interactive "Our Journey") */}
            <section className="our-journey-section">
                {/* Removed motion.h2 and animation props */}
                <h2 className="section-title">
                    Our Journey: From Idea to Impact
                </h2>
                {/* Removed motion.div wrapper and animation props */}
                <div className="journey-milestones-grid-wrapper">
                    {/* Removed motion.div wrapper and animation props */}
                    <div className="journey-milestones-grid">
                        {journeyMilestones.map((milestone, index) => {
                            const isActive = activeJourneyIndex === index;
                            const isAnyJourneyActive = activeJourneyIndex !== null;

                            if (isActive) return null;

                            return (
                                <motion.div // Keep motion.div for layoutId and whileHover
                                    key={milestone.id}
                                    layoutId={milestone.id}
                                    className={`journey-milestone-card ${isAnyJourneyActive && !isActive ? 'inactive-blurred' : ''}`}
                                    whileHover={!isAnyJourneyActive ? { scale: 1.02, boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)' } : {}}
                                    onClick={() => handleJourneyClick(index)}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    style={{ zIndex: isAnyJourneyActive && !isActive ? 1 : 'auto' }}
                                >
                                    <div className="journey-milestone-icon">
                                        <FontAwesomeIcon icon={milestone.icon} />
                                    </div>
                                    <h3>{milestone.title}</h3>
                                    <p className="journey-milestone-short-description">{milestone.shortDescription}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {activeJourneyIndex !== null && (
                    <>
                        <motion.div
                            className="card-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => handleJourneyClick(activeJourneyIndex)}
                        />
                        <motion.div
                            key={journeyMilestones[activeJourneyIndex].id}
                            layoutId={journeyMilestones[activeJourneyIndex].id}
                            className="journey-milestone-card active"
                            onClick={() => handleJourneyClick(activeJourneyIndex)}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            style={{ zIndex: 10002 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <div className="journey-milestone-icon">
                                <FontAwesomeIcon icon={journeyMilestones[activeJourneyIndex].icon} />
                            </div>
                            <h3>{journeyMilestones[activeJourneyIndex].title}</h3>
                            <motion.div
                                key="detailedContentJourney"
                                variants={contentVariants}
                                initial="collapsed"
                                animate="expanded"
                                exit="collapsed"
                                className="journey-milestone-detailed-description-container"
                            >
                                {/* NEW: Conditional rendering for specific layout of journey-1 */}
                                {journeyMilestones[activeJourneyIndex].id === "journey-1" ? (
                                    <div className="journey-spark-content-wrapper">
                                        <div className="journey-spark-image-column">
                                            {journeyMilestones[activeJourneyIndex].founderImage}
                                        </div>
                                        <div className="journey-spark-text-column">
                                            {journeyMilestones[activeJourneyIndex].detailedText}
                                        </div>
                                    </div>
                                ) : (
                                    // Default rendering for other journey cards
                                    journeyMilestones[activeJourneyIndex].detailedDescription
                                )}
                                <button className="close-card-button" onClick={(e) => { e.stopPropagation(); handleJourneyClick(activeJourneyIndex); }}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* 2. My Business Statements (Already interactive) */}
            <section className="business-statements-section">
                {/* Removed motion.h2 and animation props */}
                <h2 className="section-title">
                    Our Blueprint: Guiding Principles for Growth
                </h2>
                {/* Removed motion.div wrapper and animation props */}
                <div className="statements-grid-wrapper">
                    {/* Removed motion.div wrapper and animation props */}
                    <div className="statements-grid">
                        {businessStatements.map((statement, index) => {
                            const isActive = activeStatementIndex === index;
                            const isAnyStatementActive = activeStatementIndex !== null;

                            if (isActive) return null;

                            return (
                                <motion.div // Keep motion.div for layoutId and whileHover
                                    key={statement.id}
                                    layoutId={statement.id}
                                    className={`statement-card ${isAnyStatementActive && !isActive ? 'inactive-blurred' : ''}`}
                                    whileHover={!isAnyStatementActive ? { scale: 1.02, boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)' } : {}}
                                    onClick={() => handleStatementClick(index)}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    style={{ zIndex: isAnyStatementActive && !isActive ? 1 : 'auto' }}
                                >
                                    <div className="statement-icon">
                                        <FontAwesomeIcon icon={statement.icon} />
                                    </div>
                                    <h3>{statement.title}</h3>
                                    <p className="statement-short-description">{statement.shortDescription}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {activeStatementIndex !== null && (
                    <>
                        <motion.div
                            className="card-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => handleStatementClick(activeStatementIndex)}
                        />
                        <motion.div
                            key={businessStatements[activeStatementIndex].id}
                            layoutId={businessStatements[activeStatementIndex].id}
                            className="statement-card active"
                            onClick={() => handleStatementClick(activeStatementIndex)}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            style={{ zIndex: 10002 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <div className="statement-icon">
                                <FontAwesomeIcon icon={businessStatements[activeStatementIndex].icon} />
                            </div>
                            <h3>{businessStatements[activeStatementIndex].title}</h3>
                            <motion.div
                                key="detailedContentStatement"
                                variants={contentVariants}
                                initial="collapsed"
                                animate="expanded"
                                exit="collapsed"
                                className="statement-detailed-description-container"
                            >
                                <p>{businessStatements[activeStatementIndex].detailedDescription}</p>
                                <button className="close-card-button" onClick={(e) => { e.stopPropagation(); handleStatementClick(activeStatementIndex); }}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* 3. Why Choose Us Section (moved from Home page) */}
            <WhyChooseUsSection />

            <style jsx>{`
                .about-page-container {
                    padding-top: 0;
                    background-color: var(--color-background);
                    color: var(--color-text-primary);
                }

                .about-hero-section {
                    background-image: url('/images/hero-about-background.png');
                }

                /* General Section Titles */
                .section-title {
                    font-size: 2.8rem;
                    font-weight: 700;
                    color: var(--color-text-primary);
                    margin-bottom: 4rem;
                    text-align: center;
                    line-height: 1.2;
                }

                /* Our Journey Section (now interactive) */
                .our-journey-section {
                    padding: 6rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    text-align: center;
                }

                /* Hide short description when card is active (for journey cards) */
                .journey-milestone-card.active .journey-milestone-short-description {
                    display: none;
                }

                /* Styles for the detailed description container (for journey cards) */
                .journey-milestone-detailed-description-container {
                    position: relative;
                }

                /* NEW: Flex container for image and text inside the expanded "Spark" card */
                .journey-spark-content-wrapper {
                    display: flex;
                    flex-direction: row; /* Default to row for desktop */
                    gap: 2rem; /* Space between image and text */
                    align-items: flex-start; /* Align content to the top */
                    margin-top: 1.5rem; /* Space below title/icon */
                    padding-top: 1rem; /* Consistent with other detailed sections */
                    border-top: 1px dashed rgba(62, 63, 64, 0.2);
                }

                .journey-spark-image-column {
                    flex: 0 0 30%; /* Image column takes 30% width */
                    max-width: 200px; /* Limit image column width */
                    display: flex;
                    justify-content: center; /* Center image horizontally in its column */
                    align-items: flex-start; /* Align image to top of its column */
                }

                .journey-spark-text-column {
                    flex: 1; /* Text column takes remaining space */
                }

                .journey-milestone-detailed-description-container p {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--color-text-primary);
                    text-align: left;
                    margin-bottom: 1.5rem;
                }

                /* Founder Image within detailed description (for journey cards) */
                .journey-milestone-detailed-description-container .founder-image-figure {
                    margin: 0; /* Reset margin from previous central positioning */
                    width: 100%; /* Take full width of its column */
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    padding-bottom: 0.5rem;
                    background-color: white;
                }

                .journey-milestone-detailed-description-container .founder-image {
                    border-radius: 12px 12px 0 0;
                    object-fit: cover;
                    width: 100%;
                    height: auto;
                    display: block;
                }

                .journey-milestone-detailed-description-container .founder-caption {
                    font-size: 0.9rem;
                    color: var(--color-text-secondary);
                    margin-top: 1rem;
                    text-align: center;
                    padding: 0 1rem 1rem;
                    width: 100%;
                }

                /* Close button for expanded card (reused from other sections) */
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
                    z-index: 1003;
                }

                .close-card-button:hover {
                    background-color: rgba(0, 0, 0, 0.05);
                    color: var(--color-accent);
                }

                /* Icon, Title, Short Description for journey cards (base styles, moved to globals.css) */
                /* .journey-milestone-icon { ... } */
                /* .journey-milestone-icon :global(svg) { ... } */
                /* .journey-milestone-card h3 { ... } */
                /* .journey-milestone-short-description { ... } */


                /* Business Statements Section (existing styles, mostly moved to globals.css) */
                .business-statements-section {
                    padding: 6rem 2rem;
                    background-color: var(--color-light-text);
                    max-width: 1200px;
                    margin: 0 auto;
                    text-align: center;
                }

                /* Hide short description when card is active (for statement cards) */
                .statement-card.active .statement-short-description {
                    display: none;
                }

                /* Styles for the detailed description container (for statement cards) */
                .statement-detailed-description-container {
                    position: relative;
                }

                .statement-detailed-description-container p {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--color-text-primary);
                    text-align: left;
                }

                /* Icon, Title, Short Description for statement cards (base styles, moved to globals.css) */
                /* .statement-icon { ... } */
                /* .statement-icon :global(svg) { ... } */
                /* .statement-card h3 { ... } */
                /* .statement-short-description { ... } */


                /* Responsive Adjustments */
                @media (max-width: 1024px) {
                    .about-hero-title {
                        font-size: 3rem;
                    }
                    .about-hero-subtitle {
                        font-size: 1.4rem;
                    }
                    .section-title {
                        font-size: 2.4rem;
                    }
                    .our-journey-section, .business-statements-section {
                        padding: 6rem 2rem; /* Keep consistent padding */
                    }
                    /* Journey Card specific responsive styles */
                    .journey-spark-content-wrapper {
                        flex-direction: column; /* Stack columns on smaller screens */
                        align-items: center;
                    }
                    .journey-spark-image-column {
                        flex: none;
                        width: 100%;
                        max-width: 350px; /* Adjust max-width for stacked image */
                    }
                    .journey-spark-text-column {
                        flex: none;
                        width: 100%;
                    }
                    .journey-milestone-detailed-description-container .founder-image-figure {
                        max-width: 350px;
                        margin: 0 auto 1.5rem auto; /* Adjust margin for stacked layout */
                    }
                }

                @media (max-width: 768px) {
                    .about-hero-section {
                        padding: 6rem 1.5rem 4rem;
                        min-height: 350px;
                    }
                    .about-hero-title {
                        font-size: 2.5rem;
                    }
                    .about-hero-subtitle {
                        font-size: 1.2rem;
                    }
                    .our-journey-section, .business-statements-section {
                        padding: 4rem 1.5rem;
                    }
                    .section-title {
                        font-size: 2rem;
                        margin-bottom: 3rem;
                    }
                    /* Journey Card specific responsive styles */
                    .journey-spark-content-wrapper {
                        gap: 1rem; /* Smaller gap when stacked */
                    }
                    .journey-milestone-detailed-description-container .founder-image-figure {
                        max-width: 300px;
                        margin: 0 auto 1rem auto;
                    }
                }

                @media (max-width: 480px) {
                    .about-hero-section {
                        padding: 5rem 1rem 3rem;
                        min-height: 300px;
                    }
                    .about-hero-title {
                        font-size: 2rem;
                    }
                    .about-hero-subtitle {
                        font-size: 1rem;
                    }
                    .our-journey-section, .business-statements-section {
                        padding: 3rem 1rem;
                    }
                    .section-title {
                        font-size: 1.8rem;
                        margin-bottom: 2.5rem;
                    }
                    /* Journey Card specific responsive styles */
                    .journey-milestone-detailed-description-container .founder-image-figure {
                        max-width: 250px;
                        margin: 0 auto 0.8rem auto;
                    }
                }
            `}</style>
        </div>
    );
}