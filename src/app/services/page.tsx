// src/app/services/page.tsx
'use client';

import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUsers, // Community for Explorer
    faCogs, // Advanced Frameworks for Catalyst
    faCrown, // Premium/Visionary
    faComments, // Coaching
    faBrain, // Idea Ignition
    faMapMarkedAlt, // Vision Mapping
    faSearchDollar, // Validation Blueprint
    faRocket, // Entrepreneurial Launchpad
    faBookOpen, // Ebook
    faRoute, // Niche Navigator
    faPlayCircle, // Video Course
    faFileAlt // Templates
} from '@fortawesome/free-solid-svg-icons';

export default function ServicesPage() {
    // Reusing animation variants for consistency
    const sectionHeaderVariants = {
        hidden: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
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

    // --- Content Data (Keep as is) ---
    const subscriptionOfferings = [
        {
            level: "Explorer",
            tagline: "Your first steps towards entrepreneurial clarity.",
            price: "Starting at $X/month", // MANDATORY INPUT: Define pricing
            icon: faUsers,
            features: [
                "**Foundational Frameworks Library:** Unlock essential strategies to build a solid business base.",
                "**Vibrant Community Forum:** Connect, share, and learn with fellow aspiring entrepreneurs.",
                "**AI Idea & Research Guidance:** Learn introductory strategies and prompts to leverage AI (Gemini, ChatGPT, DeepSeek) for basic idea generation and initial market research.",
                "**Monthly 'Ask Me Anything' (Text-Based):** Get your burning questions answered directly.",
            ],
            cta: "Get Started with Explorer"
        },
        {
            level: "Catalyst",
            tagline: "Accelerate your idea into a concrete business concept.",
            price: "Starting at $Y/month", // MANDATORY INPUT: Define pricing
            icon: faCogs,
            features: [
                "**Everything in Explorer, PLUS:**",
                "**Advanced Frameworks & Methodologies:** Dive deeper into scalable growth strategies.",
                "**Enhanced AI for Validation & Niche Identification:** Access specific prompts and expert guidance to use AI tools for problem validation, niche discovery, and initial business model exploration.",
                "**Monthly Group Coaching & AI Workshop:** Participate in live sessions focused on practical AI application in early-stage entrepreneurship.",
                "**Essential Template Library:** Gain access to a selection of basic business templates to streamline your processes.",
            ],
            cta: "Become a Catalyst"
        },
        {
            level: "Visionary",
            tagline: "Transform your vision into a market-leading enterprise.",
            price: "Starting at $Z/month", // MANDATORY INPUT: Define pricing
            icon: faCrown,
            features: [
                "**Everything in Catalyst, PLUS:**",
                "**Cutting-Edge AI Strategies:** Master advanced techniques for leveraging AI tools in market research, competitor analysis, and high-quality content creation.",
                "**Exclusive Mastermind Group Sessions:** Participate in two group coaching calls per month or a smaller, focused mastermind group with dedicated segments on advanced AI integration.",
                "**Premium Resources & Templates:** Access an exclusive library of premium templates and advanced resources.",
                "**Discount on 1-on-1 AI Coaching:** Benefit from reduced rates on personalized coaching sessions for in-depth AI guidance.",
            ],
            cta: "Unleash Your Vision"
        },
    ];

    const personalizedCoachingOfferings = [
        {
            name: "Clarity Kickstart",
            tagline: "Define your entrepreneurial direction.",
            icon: faComments,
            description: "A focused introductory call designed to help you articulate your aspirations and identify potential paths forward. Perfect for gaining initial clarity.",
            benefits: [
                "Pinpoint your core entrepreneurial objectives.",
                "Uncover hidden strengths and passions.",
                "Set the stage for your business journey."
            ],
            cta: "Book Clarity Kickstart"
        },
        {
            name: "Idea Ignition Session",
            tagline: "Spark innovative business concepts.",
            icon: faBrain,
            description: "A dynamic session utilizing guided exercises and powerful AI prompts to brainstorm and generate tailored business ideas aligned with your profile and market needs.",
            benefits: [
                "Generate multiple viable business ideas.",
                "Leverage AI for diverse brainstorming perspectives.",
                "Identify your strongest concepts to pursue."
            ],
            cta: "Schedule Idea Ignition"
        },
        {
            name: "Vision Mapping Session",
            tagline: "Align your purpose with market opportunity.",
            icon: faMapMarkedAlt,
            description: "An in-depth session guiding you to align your personal vision with compelling business opportunities. Explore how AI can assist in thoroughly researching and validating these prospects.",
            benefits: [
                "Harmonize personal vision with market demand.",
                "Utilize AI for rapid opportunity scanning.",
                "Develop a strategic roadmap for your venture."
            ],
            cta: "Map Your Vision"
        },
        {
            name: "Validation Blueprint (2 Sessions)",
            tagline: "Confirm your idea's market viability.",
            icon: faSearchDollar,
            description: "A two-session package focused on empowering you through critical market research and idea validation. Receive specific instructions and techniques for using AI tools for efficient data gathering and insightful analysis.",
            benefits: [
                "Systematically validate your business concept.",
                "Master AI-driven market research techniques.",
                "Reduce risk by confirming demand early."
            ],
            cta: "Get Your Blueprint"
        },
        {
            name: "Entrepreneurial Launchpad",
            tagline: "Comprehensive mentorship from concept to launch.",
            icon: faRocket,
            description: "Ongoing, personalized mentorship providing continuous support and expert guidance on seamlessly integrating AI tools into every aspect of your business planning and early execution phase.",
            benefits: [
                "Continuous expert guidance and accountability.",
                "Strategic AI integration across business functions.",
                "Confidently launch and navigate early growth."
            ],
            cta: "Explore Mentorship"
        },
    ];

    const digitalResources = [
        {
            name: "\"The Ultimate Idea Generator\" Ebook",
            tagline: "Unleash your entrepreneurial creativity.",
            icon: faBookOpen,
            description: "A comprehensive guide packed with proven techniques for brainstorming and developing business ideas, including dedicated sections on how to strategically leverage AI platforms for maximum idea generation.",
            cta: "Download Ebook"
        },
        {
            name: "\"Niche Navigator\" Framework",
            tagline: "Find your profitable market segment.",
            icon: faRoute,
            description: "A step-by-step guide and actionable framework designed to help you identify and deeply understand your most profitable market niches, with specific instructions on using AI tools for in-depth market analysis and trend identification.",
            cta: "Explore Framework"
        },
        {
            name: "\"Validation Vortex\" Video Course",
            tagline: "Master the art of idea validation.",
            icon: faPlayCircle,
            description: "Engaging video lessons that teach you essential idea validation strategies, complete with practical demonstrations on how to effectively use AI tools for efficient research, data collection, and gathering crucial feedback.",
            cta: "Access Course"
        },
        {
            name: "AI-Optimized Business Templates",
            tagline: "Accelerate your planning with smart templates.",
            icon: faFileAlt,
            description: "A curated collection of versatile business templates (e.g., business plans, marketing strategies, pitch decks) specifically designed to be used in conjunction with AI tools for rapid content generation and customization.",
            cta: "View Templates"
        },
    ];


    return (
        <div className="services-page-container">
            {/* Hero Section */}
            <section className="services-hero-section">
                <div className="hero-background-image-overlay"></div>
                <motion.h1
                    className="services-hero-title"
                    initial={{ opacity: 0, y: -70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: easeOut }}
                >
                    Our Services: Your Path to Entrepreneurial Success
                </motion.h1>
                <motion.p
                    className="services-hero-subtitle"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
                >
                    Unlock your potential with tailored guidance, cutting-edge AI integration, and a supportive community.
                </motion.p>
            </section>

            {/* Subscription Offerings Section */}
            <section className="subscription-offerings-section">
                <motion.h2
                    className="section-title"
                    variants={sectionHeaderVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Choose Your Growth Path: Subscription Plans
                </motion.h2>
                <motion.div
                    className="subscription-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {subscriptionOfferings.map((plan, index) => (
                        <motion.div
                            key={index}
                            className="subscription-card"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)" }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="plan-icon">
                                <FontAwesomeIcon icon={plan.icon} />
                            </div>
                            <h3>{plan.level}</h3>
                            <p className="plan-tagline">{plan.tagline}</p>
                            <p className="plan-price">{plan.price}</p>
                            <ul className="plan-features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} dangerouslySetInnerHTML={{ __html: feature }} />
                                ))}
                            </ul>
                            <button className="cta-button">{plan.cta}</button>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Personalized Coaching Section */}
            <section className="coaching-section">
                <motion.h2
                    className="section-title"
                    variants={sectionHeaderVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Accelerate Your Journey: Personalized Coaching
                </motion.h2>
                <motion.div
                    className="coaching-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {personalizedCoachingOfferings.map((session, index) => (
                        <motion.div
                            key={index}
                            className="coaching-card"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)" }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="coaching-icon">
                                <FontAwesomeIcon icon={session.icon} />
                            </div>
                            <h3>{session.name}</h3>
                            <p className="coaching-tagline">{session.tagline}</p>
                            <p className="coaching-description">{session.description}</p>
                            <ul className="coaching-benefits">
                                {session.benefits.map((benefit, idx) => (
                                    <li key={idx}>✅ {benefit}</li> // Adding a checkmark for visual appeal
                                ))}
                            </ul>
                            <button className="cta-button secondary">{session.cta}</button>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Digital Resources Section */}
            <section className="digital-resources-section">
                <motion.h2
                    className="section-title"
                    variants={sectionHeaderVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Empower Yourself: Digital Resources
                </motion.h2>
                <motion.div
                    className="resources-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {digitalResources.map((resource, index) => (
                        <motion.div
                            key={index}
                            className="resource-card"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)" }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="resource-icon">
                                <FontAwesomeIcon icon={resource.icon} />
                            </div>
                            <h3>{resource.name}</h3>
                            <p className="resource-tagline">{resource.tagline}</p>
                            <p className="resource-description">{resource.description}</p>
                            <button className="cta-button primary">{resource.cta}</button>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Basic Styles (similar to About page for consistency) */}
            <style jsx>{`
                .services-page-container {
                    background-color: var(--color-background);
                    color: var(--color-text-primary);
                }

                /* Hero Section */
                .services-hero-section {
                    background-image: url('/images/services-hero-background.png');
                }

                
                /* General Section Styles */
                .section-title {
                    font-size: 2.8rem;
                    font-weight: 700;
                    color: var(--color-text-primary);
                    margin-bottom: 4rem;
                    text-align: center;
                    line-height: 1.2;
                    padding-top: 2rem; /* Add some padding at the top of the section title */
                }

                section {
                    padding: 6rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .subscription-offerings-section {
                    background-color: var(--color-background);
                }

                .coaching-section {
                    background-color: var(--color-light-text); /* Slightly different background for contrast */
                }

                .digital-resources-section {
                    background-color: var(--color-background);
                }

                /* Grid Styles (for all service types) */
                .subscription-grid, .coaching-grid, .resources-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2.5rem;
                    justify-content: center;
                    align-items: stretch; /* Ensures cards are same height */
                }

                /* Card Base Styles */
                .subscription-card, .coaching-card, .resource-card {
                    background-color: white;
                    border-radius: 12px;
                    padding: 2.5rem;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    height: 100%; /* Important for align-items: stretch */
                }

                /* Icons */
                .plan-icon, .coaching-icon, .resource-icon {
                    font-size: 3.5rem;
                    color: var(--color-accent);
                    margin-bottom: 1.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 80px;
                    height: 80px;
                    background-color: rgba(145, 108, 60, 0.1); /* Light background for icons */
                    border-radius: 50%;
                }

                .plan-icon :global(svg), .coaching-icon :global(svg), .resource-icon :global(svg) {
                    font-size: 2.5rem;
                    color: var(--color-accent);
                }

                /* Card Headings */
                .subscription-card h3, .coaching-card h3, .resource-card h3 {
                    font-size: 1.6rem;
                    font-weight: 600;
                    margin-bottom: 0.75rem;
                    color: var(--color-text-primary);
                }

                /* Taglines */
                .plan-tagline, .coaching-tagline, .resource-tagline {
                    font-size: 1.1rem;
                    font-style: italic;
                    color: var(--color-accent);
                    margin-bottom: 1rem;
                }

                /* Descriptions/Prices */
                .plan-price {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: var(--color-primary);
                    margin-bottom: 1.5rem;
                }

                .coaching-description, .resource-description {
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: rgba(62, 63, 64, 0.7);
                    margin-bottom: 1.5rem;
                    flex-grow: 1; /* Allows description to take up available space */
                }

                /* Features/Benefits Lists */
                .plan-features, .coaching-benefits {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 1.5rem 0;
                    text-align: left;
                    width: 100%; /* Ensure list takes full width for alignment */
                }

                .plan-features li {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: rgba(62, 63, 64, 0.8);
                    margin-bottom: 0.5rem;
                    position: relative;
                    padding-left: 1.5rem;
                }

                .plan-features li:last-child {
                    margin-bottom: 0;
                }

                .plan-features li::before {
                    content: '✓'; /* Checkmark for features */
                    color: var(--color-primary);
                    position: absolute;
                    left: 0;
                    font-weight: bold;
                }

                .coaching-benefits li {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: rgba(62, 63, 64, 0.8);
                    margin-bottom: 0.5rem;
                }


                /* CTA Buttons */
                .cta-button {
                    background-color: var(--color-primary);
                    color: white;
                    border: none;
                    padding: 0.8rem 2rem;
                    border-radius: 8px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                    margin-top: auto; /* Pushes button to the bottom of the card */
                }

                .cta-button:hover {
                    background-color: var(--color-primary-dark);
                    transform: translateY(-2px);
                }

                .cta-button.secondary {
                    background-color: var(--color-accent);
                }
                .cta-button.secondary:hover {
                    background-color: var(--color-accent-dark);
                }

                .cta-button.primary { /* For digital resources, if you want a slightly different color */
                    background-color: var(--color-primary);
                }
                .cta-button.primary:hover {
                    background-color: var(--color-primary-dark);
                }


                /* Responsive Adjustments (similar pattern to About page) */
                @media (max-width: 1024px) {
                    .services-hero-title { font-size: 3rem; }
                    .services-hero-subtitle { font-size: 1.4rem; }
                    .section-title { font-size: 2.4rem; }
                    section { padding: 5rem 1.5rem; }
                    .subscription-grid, .coaching-grid, .resources-grid {
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 2rem;
                    }
                    .subscription-card, .coaching-card, .resource-card {
                        padding: 2rem;
                    }
                    .plan-icon :global(svg), .coaching-icon :global(svg), .resource-icon :global(svg) {
                        font-size: 2.2rem;
                    }
                    .subscription-card h3, .coaching-card h3, .resource-card h3 {
                        font-size: 1.4rem;
                    }
                    .plan-price { font-size: 1.6rem; }
                    .coaching-description, .resource-description { font-size: 1rem; }
                }

                @media (max-width: 768px) {
                    .services-hero-section {
                        padding: 6rem 1.5rem 4rem;
                        min-height: 350px;
                    }
                    .services-hero-title { font-size: 2.5rem; }
                    .services-hero-subtitle { font-size: 1.2rem; }
                    section { padding: 4rem 1.5rem; }
                    .section-title { font-size: 2rem; margin-bottom: 3rem; }
                    .subscription-grid, .coaching-grid, .resources-grid {
                        grid-template-columns: 1fr; /* Stack columns on smaller mobiles */
                        gap: 1.5rem;
                    }
                    .subscription-card, .coaching-card, .resource-card {
                        padding: 1.8rem;
                    }
                }

                @media (max-width: 480px) {
                    .services-hero-section {
                        padding: 5rem 1rem 3rem;
                        min-height: 300px;
                    }
                    .services-hero-title { font-size: 2rem; }
                    .services-hero-subtitle { font-size: 1rem; }
                    section { padding: 3rem 1rem; }
                    .section-title { font-size: 1.8rem; margin-bottom: 2.5rem; }
                    .plan-icon :global(svg), .coaching-icon :global(svg), .resource-icon :global(svg) {
                        font-size: 2.8rem; /* Corrected to match earlier desktop size */
                        width: 60px; /* Adjusted icon container size */
                        height: 60px; /* Adjusted icon container size */
                    }
                    .plan-icon :global(svg), .coaching-icon :global(svg), .resource-icon :global(svg) {
                        font-size: 2rem;
                    }
                    .subscription-card h3, .coaching-card h3, .resource-card h3 {
                        font-size: 1.25rem;
                    }
                    .plan-price { font-size: 1.4rem; }
                    .coaching-description, .resource-description { font-size: 0.95rem; }
                    .cta-button {
                        padding: 0.7rem 1.5rem;
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}