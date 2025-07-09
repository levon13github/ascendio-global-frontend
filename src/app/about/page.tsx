// src/app/about/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion, easeOut } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHandshake,
    faLightbulb,
    faShieldAlt,
    faGlobe,
    faGem,
    faTree,
    faStar,
    faBullseye, // For Vision
    faSeedling, // For Growth/Impact in Mission
    faCompass, // For Guidance in Why
    faTools, // For Action/Framework in How
    faRocket // For Mission - added explicitly
} from '@fortawesome/free-solid-svg-icons';

export default function AboutPage() {
    // Animation variants for consistent section reveals
    const sectionHeaderVariants = {
        hidden: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    };

    const textBlockVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut, delay: 0.2 } },
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOut } },
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

    const valueItemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
    };


    const coreValues = [
        {
            name: "Empowerment",
            phrase: "Unleashing the potential within every aspiring entrepreneur.",
            description: "Believing that everyone has the potential to build their dream. Our guidance fosters self-reliance and confidence.",
            icon: faStar
        },
        {
            name: "Trust",
            phrase: "Building relationships based on transparency and reliability.",
            description: "Fostering a safe and supportive space where everyone can confidently explore their ideas.",
            icon: faHandshake
        },
        {
            name: "Integrity",
            phrase: "Upholding the highest standards in all our actions.",
            description: "Championing ethical principles, a standard of honesty and commitment to what is right.",
            icon: faShieldAlt
        },
        {
            name: "Innovation",
            phrase: "Pioneering new approaches for sustainable growth.",
            description: " Leveraging cutting-edge methods, including AI, and embracing new technologies to accelerate and enhance your entrepreneurial journey.",
            icon: faLightbulb
        },
        {
            name: "Impact",
            phrase: "Driving meaningful change, globally and individually.",
            description: "Fueling a global wave of impactful businesses, born from empowered entrepreneurs who thrive, enrich their lives, and contribute to a better world.",
            icon: faGlobe
        },
        {
            name: "Authenticity",
            phrase: "Encouraging true self-expression in entrepreneurial journeys.",
            description: "Inspiring a movement of genuine entrepreneurship, grounded in our values and empowering all to embrace their true potential.",
            icon: faGem
        },
        {
            name: "Legacy",
            phrase: "Cultivating lasting success for future generations.",
            description: "Empowering future generations of entrepreneurs, leaving a lasting legacy of success created together.",
            icon: faTree
        },
    ];

    const businessStatements = [
        {
            title: "Our WHY",
            icon: faCompass,
            description: "To inspire a world where everyone believes in their power to shape their own destiny and create extraordinary impact."
        },
        {
            title: "Our HOW",
            icon: faTools,
            description: "Through the 'Ascendio Global Framework', we provide personalized 1-on-1 coaching, comprehensive digital content, a vibrant community platform, and cutting-edge AI tools. This integrated approach offers a clear roadmap from ideation to market leadership."
        },
        {
            title: "Our WHAT",
            icon: faSeedling,
            description: "We offer a holistic ecosystem of entrepreneurial guidance, resources, and support designed to help you generate your business idea, navigate the complexities of modern business creation and growth. We deliver clarity, strategy, and actionable steps."
        },
        {
            title: "Our VISION",
            icon: faBullseye,
            description: "Ascendio Global is a vehicle for significant positive global impact, driven by innovation and leadership, providing us with freedom, recognition, and continuous growth, while achieving ethical prosperity and fulfilling our vision of a better future for humanity."
        },
        {
            title: "Our MISSION",
            icon: faRocket,
            description: "To equip aspiring and established entrepreneurs with the knowledge, and tools necessary to confidently launch, scale, and sustain businesses that not only achieve financial success but also champion positive change in the world."
        },
    ];


    return (
        <div className="about-page-container">
            {/* Hero/Intro Section - Placeholder, can be more elaborate */}
            <section className="about-hero-section">
                {/* Background Image Overlay */}
                <div className="hero-background-image-overlay"></div>
                <motion.h1
                    className="about-hero-title"
                    initial={{ opacity: 0, y: -70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: easeOut }}
                >
                    About Ascendio Global
                </motion.h1>
                <motion.p
                    className="about-hero-subtitle"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
                >
                    Igniting Entrepreneurial Legacies.
                </motion.p>
            </section>

            {/* 1. My Brand Story */}
            <section className="brand-story-section">
                <motion.h2
                    className="section-title"
                    variants={sectionHeaderVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Our Journey: From Idea to Impact
                </motion.h2>
                <div className="story-content">
                    <motion.div
                        className="story-text"
                        variants={textBlockVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <p>
                            Every thriving enterprise begins with a singular vision – a deep-seated desire to solve a problem, fueled by <b>unwavering passion</b>, and a clear roadmap for a brighter future. For me, the genesis of <b>Ascendio Global</b> wasn't just a business idea; it was a profound response to a pervasive challenge. I observed countless brilliant minds, overflowing with groundbreaking concepts, often struggling to transform their latent potential into tangible, impactful businesses. They were stifled by market complexities, a lack of structured guidance, or the sheer, isolating weight of entrepreneurial uncertainty. <b>Their biggest fear was and still is how to think of a business idea.</b>
                        </p>
                        <p>
                            My journey through high-growth tech startups, corporate innovation, sustainable development, personal growth, consulting services and establishing NGOs provided a unique vantage point. I witnessed the common pitfalls that derail promising ventures – and, more importantly, identified the precise strategies that propel visionary founders to unprecedented success. This firsthand insight ignited a singular purpose within me: to demystify the entrepreneurial path and forge a clearer, more accessible route to market leadership.
                        </p>
                        <p>
                            <b>Ascendio Global</b> stands as the culmination of this dedication. It's not merely a platform; it's a meticulously crafted ecosystem built upon data-driven strategies, holistic personal development, lean startup methodologies, scalable digital frameworks and generative AI tools integration. Our foundational belief is simple yet powerful: with personalized mentorship, supportive toolkits, and actionable, cutting-edge tools, <b>any aspiring entrepreneur</b> can confidently generate their suitable idea, launch, navigate, and scale their ambition into a sustainable, world-changing enterprise. I've poured my dedication, years of solid experience, strategic foresight, unwavering commitment to ethical innovation, knack for simplifying complex systems, affinity for AI into cultivating a space where your ideas don't just survive – they <b>ascend</b> to their highest potential.
                        </p>
                        <p>
                            My personal mission, deeply embedded in Ascendio Global's ethos, is to empower you not only to achieve remarkable business success but to architect a lasting <b>legacy</b>. This is about building ventures that resonate with your authentic purpose, drive meaningful societal impact, and stand the test of time. <b>Let's embark on this transformative journey and build something truly extraordinary, together.</b>
                        </p>
                    </motion.div>
                    <motion.div
                        className="story-image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: easeOut, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Use <figure> and <figcaption> for the image and its visible caption */}
                        <figure className="founder-image-figure">
                            <Image
                                src="/images/founder.jpg"
                                alt="Levon Bampagian, Founder of Ascendio Global" // Improved alt text
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
                    </motion.div>
                </div>
            </section>

            {/* 2. My Business Statements */}
            <section className="business-statements-section">
                <motion.h2
                    className="section-title"
                    variants={sectionHeaderVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Our Blueprint: Guiding Principles for Growth
                </motion.h2>
                <motion.div
                    className="statements-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {businessStatements.map((statement, index) => (
                        <motion.div
                            key={index}
                            className="statement-card"
                            variants={listItemVariants}
                        >
                            <div className="statement-icon">
                                <FontAwesomeIcon icon={statement.icon} />
                            </div>
                            <h3>{statement.title}</h3>
                            <p>{statement.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* 3. My Core Values (Pulled from WhyChooseUsSection for consistency) */}
            <section className="core-values-section">
                <motion.h2
                    className="section-title"
                    variants={sectionHeaderVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    The Foundation: Our Unwavering Core Values
                </motion.h2>
                <motion.div
                    className="values-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={index}
                            className="value-card"
                            variants={valueItemVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)" }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="value-icon">
                                <FontAwesomeIcon icon={value.icon} />
                            </div>
                            <h3>{value.name}</h3>
                            <p className="value-phrase">{value.phrase}</p>
                            <p className="value-description">{value.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <style jsx>{`
                .about-page-container {
                    padding-top: 0;
                    background-color: var(--color-background);
                    color: var(--color-text-primary);
                }

                .about-hero-section {
                    background-image: url('/images/hero-about-background.png');
                }

                /* General Section Styles */
                .section-title {
                    font-size: 2.8rem;
                    font-weight: 700;
                    color: var(--color-text-primary);
                    margin-bottom: 4rem;
                    text-align: center;
                    line-height: 1.2;
                }

                /* Brand Story Section */
                .brand-story-section {
                    padding: 6rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .story-content {
                    display: flex;
                    flex-direction: row;
                    gap: 3rem;
                    align-items: flex-start;
                }

                .story-text {
                    flex: 1.2; /* Gave text slightly less room, but still primary */
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: rgba(62, 63, 64, 0.8);
                    text-align: left;
                }

                .story-text p {
                    margin-bottom: 1.5rem;
                }

                .story-image {
                    flex: 0.8; /* Gave image more room than previously, but less than text */
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    padding-bottom: 0.5rem;
                    background-color: white;
                }

                .founder-image-figure {
                    margin: 0; /* Reset default figure margin */
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .founder-image {
                    border-radius: 12px 12px 0 0; /* Rounded top, sharp bottom for seamless caption */
                    object-fit: cover;
                    width: 100%;
                    height: auto;
                    display: block;
                }

                .founder-caption {
                    font-size: 0.9rem;
                    color: var(--color-text-secondary); /* A slightly lighter color for the caption */
                    margin-top: 1rem; /* Space between image and caption */
                    text-align: center;
                    padding: 0 1rem 1rem; /* Padding within the caption area */
                    width: 100%;
                }

                /* Business Statements Section */
                .business-statements-section {
                    padding: 6rem 2rem;
                    background-color: var(--color-light-text);
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .statements-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2.5rem;
                    justify-content: center;
                }

                .statement-card {
                    background-color: white;
                    border-radius: 12px;
                    padding: 2.5rem;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    height: 100%;
                }

                .statement-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
                }

                .statement-icon {
                    font-size: 3.5rem;
                    color: var(--color-accent);
                    margin-bottom: 1.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 80px;
                    height: 80px;
                    background-color: rgba(145, 108, 60, 0.1);
                    border-radius: 50%;
                }

                .statement-icon :global(svg) {
                    font-size: 2.5rem;
                    color: var(--color-accent);
                }

                .statement-card h3 {
                    font-size: 1.6rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: var(--color-text-primary);
                }

                .statement-card p {
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: rgba(62, 63, 64, 0.7);
                }

                /* Core Values Section */
                .core-values-section {
                    padding: 6rem 2rem;
                    background-color: var(--color-background);
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .values-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2.5rem;
                    justify-content: center;
                    align-items: stretch;
                }

                .value-card {
                    background-color: white;
                    border-radius: 12px;
                    padding: 2.5rem;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    cursor: pointer;
                }

                .value-icon {
                    margin-bottom: 1rem;
                    line-height: 1;
                    color: var(--color-accent);
                }

                .value-icon :global(svg) {
                    font-size: 3.5rem;
                }

                .value-card h3 {
                    font-size: 1.4rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: var(--color-text-primary);
                }

                .value-phrase {
                    font-size: 1.1rem;
                    font-style: italic;
                    margin-bottom: 1rem;
                    color: var(--color-accent);
                }

                .value-description {
                    font-size: 0.95rem;
                    line-height: 1.5;
                    color: rgba(62, 63, 64, 0.7);
                }

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
                    .story-content {
                        flex-direction: column;
                        gap: 2rem;
                    }
                    .story-text {
                        font-size: 1.1rem;
                    }
                    .story-image {
                        flex: 1;
                        max-width: 500px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .statement-card, .value-card {
                        padding: 2rem;
                    }
                    .statement-icon, .value-icon {
                        font-size: 3rem;
                        width: 70px;
                        height: 70px;
                    }
                    .statement-icon :global(svg), .value-icon :global(svg) {
                        font-size: 2.2rem;
                    }
                    .statement-card h3 {
                        font-size: 1.4rem;
                    }
                    .statement-card p {
                        font-size: 1rem;
                    }
                    .value-card h3 {
                        font-size: 1.25rem;
                    }
                    .value-phrase, .value-description {
                        font-size: 0.9rem;
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
                    .brand-story-section, .business-statements-section, .core-values-section {
                        padding: 4rem 1.5rem;
                    }
                    .section-title {
                        font-size: 2rem;
                        margin-bottom: 3rem;
                    }
                    .story-text {
                        font-size: 1rem;
                    }
                    .statements-grid, .values-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                    .statement-card, .value-card {
                        padding: 1.8rem;
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
                    .brand-story-section, .business-statements-section, .core-values-section {
                        padding: 3rem 1rem;
                    }
                    .section-title {
                        font-size: 1.8rem;
                        margin-bottom: 2.5rem;
                    }
                    .statement-icon, .value-icon {
                        font-size: 2.8rem;
                        width: 60px;
                        height: 60px;
                        margin-bottom: 1rem;
                    }
                    .statement-icon :global(svg), .value-icon :global(svg) {
                        font-size: 2rem;
                    }
                    .statement-card h3 {
                        font-size: 1.25rem;
                    }
                    .statement-card p {
                        font-size: 0.95rem;
                    }
                    .value-card h3 {
                        font-size: 1.1rem;
                    }
                    .value-phrase, .value-description {
                        font-size: 0.85rem;
                    }
                }
            `}</style>
        </div>
    );
}