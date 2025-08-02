// src/app/services/page.tsx
'use client';

import React, { useState } from 'react'; // Import useState
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUsers,
    faCogs,
    faCrown,
    faComments,
    faBrain,
    faMapMarkedAlt,
    faSearchDollar,
    faRocket,
    faBookOpen,
    faRoute,
    faPlayCircle,
    faFileAlt,
    faLightbulb,
    faChartLine,
    faBullseye,
    faHandshake,
    faGem,
    faTools
} from '@fortawesome/free-solid-svg-icons';

export default function ServicesPage() {
    const personalizedCoachingOfferings = [
        {
            name: "Clarity Kickstart",
            tagline: "Start with your WHY.",
            icon: faComments,
            shortDescription: "A focused introductory call to articulate your aspirations and motivations. Gain initial clarity.",
            benefits: [
                { text: "Clarify your entrepreneurial 'why'", icon: faLightbulb },
                { text: "Pinpoint your excitement triggers", icon: faBrain },
                { text: "Uncover hidden strengths & passions", icon: faGem },
                { text: "Define WHY & VISION statements", icon: faBullseye }
            ],
            cta: "Book Clarity Kickstart",
            ctaLink: "contact"
        },
        {
            name: "Idea Ignition Session",
            tagline: "Spark innovative business concepts.",
            icon: faBrain,
            shortDescription: "Dynamic session using AI prompts to brainstorm tailored business ideas aligned with your profile and market needs.",
            benefits: [
                { text: "Generate multiple viable business ideas", icon: faRocket },
                { text: "Leverage AI for diverse brainstorming",
                    icon: faCogs },
                { text: "Identify strongest concepts to pursue", icon: faChartLine }
            ],
            cta: "Schedule Idea Ignition",
            ctaLink: "contact"
        },
        {
            name: "Vision Mapping & Direction",
            tagline: "Align purpose with market opportunity.",
            icon: faMapMarkedAlt,
            shortDescription: "In-depth session to align personal vision with compelling business opportunities, assisted by AI for research and validation.",
            benefits: [
                { text: "Harmonize personal vision with market demand", icon: faRoute },
                { text: "Utilize AI for rapid opportunity scanning", icon: faSearchDollar },
                { text: "Develop a strategic roadmap", icon: faFileAlt },
                { text: "Set the stage for your journey", icon: faPlayCircle }
            ],
            cta: "Map Your Vision",
            ctaLink: "contact"
        },
        {
            name: "Entrepreneurial Launchpad",
            tagline: "Comprehensive mentorship from concept to launch.",
            icon: faRocket,
            shortDescription: "Ongoing, personalized mentorship with expert guidance on seamlessly integrating AI tools into every aspect of business planning and early execution.",
            benefits: [
                { text: "Continuous expert guidance & accountability", icon: faHandshake },
                { text: "Strategic AI integration across functions", icon: faTools },
                { text: "Confidently launch & navigate early growth", icon: faCrown }
            ],
            cta: "Explore Mentorship",
            ctaLink: "contact"
        },
    ];

    const digitalResources = [
        {
            name: "\"The Ultimate Idea Generator\" Ebook",
            tagline: "Unleash your entrepreneurial creativity.",
            icon: faBookOpen,
            description: "A comprehensive guide packed with proven techniques for brainstorming and developing business ideas, including dedicated sections on how to strategically leverage AI platforms for maximum idea generation.",
            cta: "Download Ebook",
            ctaLink: "contact"
        },
        {
            name: "\"Niche Navigator\" Framework",
            tagline: "Find your profitable market segment.",
            icon: faRoute,
            description: "A step-by-step guide and actionable framework designed to help you identify and deeply understand your most profitable market niches, with specific instructions on using AI tools for in-depth market analysis and trend identification.",
            cta: "Explore Framework",
            ctaLink: "contact"
        },
        {
            name: "\"Validation Vortex\" Video Course",
            tagline: "Master the art of idea validation.",
            icon: faPlayCircle,
            description: "Engaging video lessons that teach you essential idea validation strategies, complete with practical demonstrations on how to effectively use AI tools for efficient research, data collection, and gathering crucial feedback.",
            cta: "Access Course",
            ctaLink: "contact"
        },
        {
            name: "AI-Optimized Business Templates",
            tagline: "Accelerate your planning with smart templates.",
            icon: faFileAlt,
            description: "A curated collection of versatile business templates (e.g., business plans, marketing strategies, pitch decks) specifically designed to be used in conjunction with AI tools for rapid content generation and customization.",
            cta: "View Templates",
            ctaLink: "contact"
        },
    ];

    // State to manage card flips for Coaching section
    const [coachingFlippedState, setCoachingFlippedState] = useState(
        new Array(personalizedCoachingOfferings.length).fill(false)
    );

    // State to manage card flips for Resources section
    const [resourcesFlippedState, setResourcesFlippedState] = useState(
        new Array(digitalResources.length).fill(false)
    );

    // Function to handle flipping a coaching card
    const handleCoachingFlip = (index: number) => {
        setCoachingFlippedState(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index]; // Toggle the flipped state
            return newState;
        });
    };

    // Function to handle flipping a resource card
    const handleResourceFlip = (index: number) => {
        setResourcesFlippedState(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index]; // Toggle the flipped state
            return newState;
        });
    };

    return (
        <div className="services-page-container">
            {/* Hero Section */}
            <section className="services-hero-section">
                <div className="hero-background-image-overlay"></div>
                <h1 className="services-hero-title">
                    Your Path to Entrepreneurial Success
                </h1>
                <p className="services-hero-subtitle">
                    Unlock your potential with tailored guidance, cutting-edge AI integration, and a supportive community.
                </p>
            </section>

            {/* Personalized Coaching Section */}
            <section className="coaching-section section-block-shadow">
                <h2 className="section-title">
                    Accelerate Your Journey: Personalized Coaching
                </h2>
                <div className="coaching-grid">
                    {personalizedCoachingOfferings.map((session, index) => (
                        <div
                            key={index}
                            className="coaching-card"
                            // Allow clicking the entire card to flip, but also the button
                        >
                            <div className={`card-inner ${coachingFlippedState[index] ? 'is-flipped' : ''}`}>
                                <div className="card-front" onClick={() => handleCoachingFlip(index)}>
                                    <div className="coaching-icon">
                                        <FontAwesomeIcon icon={session.icon} />
                                    </div>
                                    <h3>{session.name}</h3>
                                    <p className="coaching-tagline">{session.tagline}</p>
                                    <p className="card-instruction">Click to learn more</p> {/* Added text */}
                                    <a href={session.ctaLink} className="cta-button-card-secondary" onClick={(e) => e.stopPropagation()}>
                                        {session.cta}
                                    </a>
                                </div>
                                <div className="card-back" onClick={() => handleCoachingFlip(index)}>
                                    {/* Removed <h3> title here as it's on the front */}
                                    <p className="coaching-description">{session.shortDescription}</p>
                                    <div className="coaching-benefits-grid">
                                        {session.benefits.map((benefit, idx) => (
                                            <div key={idx} className="benefit-item">
                                                <FontAwesomeIcon icon={benefit.icon} className="benefit-icon" />
                                                <p>{benefit.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* The CTA is now on the front, this space will be empty or for other content if needed */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Digital Resources Section */}
            <section className="digital-resources-section section-block-shadow">
                <h2 className="section-title">
                    Empower Yourself: Digital Resources
                </h2>
                <div className="resources-grid">
                    {digitalResources.map((resource, index) => (
                        <div
                            key={index}
                            className="resource-card"
                            // Allow clicking the entire card to flip, but also the button
                        >
                            <div className={`card-inner ${resourcesFlippedState[index] ? 'is-flipped' : ''}`}>
                                <div className="card-front" onClick={() => handleResourceFlip(index)}>
                                    <div className="resource-icon">
                                        <FontAwesomeIcon icon={resource.icon} />
                                    </div>
                                    <h3>{resource.name}</h3>
                                    <p className="resource-tagline">{resource.tagline}</p>
                                    <p className="card-instruction">Click to learn more</p> {/* Added text */}
                                    <a href={resource.ctaLink} className="cta-button-card-primary" onClick={(e) => e.stopPropagation()}>
                                        {resource.cta}
                                    </a>
                                </div>
                                <div className="card-back" onClick={() => handleResourceFlip(index)}>
                                    {/* Removed <h3> title here as it's on the front */}
                                    <p className="resource-description">{resource.description}</p>
                                    {/* The CTA is now on the front, this space will be empty or for other content if needed */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CSS Styles - Modified for full-width sections and flip cards */}
            <style jsx>{`
                :root {
                    --color-background: #F8F8F8;
                    --color-text-primary: #1A1A1A;
                    --color-text-secondary: #555555;
                    --color-accent: #916C3C;
                    --color-light-bg: #FFFFFF;
                    --color-subtle-highlight: #FFF5EC;

                    /* Global CTA Button colors (ideally in globals.css, retained for reference) */
                    --color-global-cta-primary-bg: #916C3C; /* Main brand color for key CTAs */
                    --color-global-cta-primary-hover-bg: #7A5B32;
                    --color-global-cta-secondary-bg: #6c757d;
                    --color-global-cta-secondary-hover-bg: #5a6268;
                    --color-text-on-dark: #ffffff;

                    /* New: Specific colors for card CTAs */
                    --color-card-cta-primary-bg: var(--color-accent); /* Use main accent for card primary */
                    --color-card-cta-primary-text: #ffffff;
                    --color-card-cta-primary-hover-bg: var(--color-global-cta-primary-hover-bg);

                    --color-card-cta-secondary-bg: var(--color-light-bg); /* White background for secondary */
                    --color-card-cta-secondary-text: var(--color-accent); /* Accent text */
                    --color-card-cta-secondary-border: 2px solid var(--color-accent); /* Accent border */
                    --color-card-cta-secondary-hover-bg: var(--color-accent);
                    --color-card-cta-secondary-hover-text: #ffffff;
                }

                .services-page-container {
                    background-color: var(--color-background);
                    color: var(--color-text-primary);
                    padding-top: 0;
                    overflow-x: hidden;
                }

                /* Hero Section */
                .services-hero-section {
                    background-image: url('/images/services-hero-background.png'); /* Ensure this path is correct */
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

                .services-hero-title, .services-hero-subtitle {
                    position: relative;
                    z-index: 2;
                    max-width: 900px;
                }

                .services-hero-title {
                    font-size: 4rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    line-height: 1.1;
                }

                .services-hero-subtitle {
                    font-size: 1.6rem;
                    font-weight: 400;
                    margin-bottom: 2rem;
                    opacity: 0.9;
                }

                /* General Section Styles */
                section {
                    padding: 7rem 2rem;
                    margin: 4rem 0;
                    border-radius: 0;
                }

                .section-block-shadow {
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .coaching-section {
                    background-color: var(--color-subtle-highlight);
                }

                .digital-resources-section {
                    background-color: var(--color-background);
                }

                .section-title {
                    font-size: 3.2rem;
                    font-weight: 700;
                    color: var(--color-text-primary);
                    margin-bottom: 5rem;
                    text-align: center;
                    line-height: 1.2;
                    letter-spacing: -0.03em;
                }

                /* Grid Styles (for all service types) - NOW WITH WRAPPING! */
                .coaching-grid, .resources-grid {
                    display: flex;
                    flex-wrap: wrap; /* Allows cards to wrap to the next line */
                    gap: 3.5rem;
                    /* Removed overflow-x: auto as we now want wrapping */
                    padding-bottom: 1rem;
                    justify-content: center; /* Center cards horizontally when they wrap */
                    align-items: stretch;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    margin-left: 0;
                    margin-right: 0;
                }

                /* No need to hide scrollbar if no horizontal scroll */
                .coaching-grid::-webkit-scrollbar,
                .resources-grid::-webkit-scrollbar {
                    display: none;
                }
                .coaching-grid,
                .resources-grid {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }

                /* Card Base Styles - Responsive width and Flip Container */
                .coaching-card, .resource-card {
                    flex: 0 0 auto; /* Keep original flex properties */
                    min-width: 320px;
                    width: clamp(300px, 80vw, 400px);
                    height: 520px; /* Adjusted height for content fit */
                    background-color: transparent; /* Background on inner card sides */
                    border-radius: 16px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
                    position: relative; /* Crucial: Parent for absolute positioned inner card */
                    cursor: pointer; /* Cursor indicates clickability of the whole card */
                    transition: box-shadow 0.3s ease; /* Smooth shadow on hover */
                }

                .coaching-card:hover, .resource-card:hover {
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
                }

                .card-inner {
                    position: absolute; /* Take up full space of parent card */
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    transition: transform 0.6s; /* Flip animation speed */
                    transform-style: preserve-3d; /* Keep children in 3D space */
                    transform: translateZ(0); /* Promote to GPU layer for smoother scrolling */
                }

                .coaching-card .card-inner.is-flipped,
                .resource-card .card-inner.is-flipped {
                    transform: rotateY(180deg);
                }

                .card-front, .card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    -webkit-backface-visibility: hidden; /* Hide the back of the card when flipped away */
                    backface-visibility: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start; /* Align content to top initially */
                    padding: 3rem; /* Padding for the inner card content */
                    border-radius: 16px;
                    box-sizing: border-box; /* Include padding in element's total width and height */
                    background-color: var(--color-light-bg); /* Card background */
                }

                .card-front {
                    z-index: 2;
                    transform: rotateY(0deg);
                    justify-content: space-between; /* Space out icon, text, and button */
                }

                .card-back {
                    transform: rotateY(180deg);
                    justify-content: flex-start; /* Align content to top */
                    overflow-y: auto; /* Allow content to scroll if it overflows */
                    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
                    scrollbar-width: none; /* Hide scrollbar for Firefox */
                    -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
                }

                .card-back::-webkit-scrollbar {
                    display: none; /* Hide scrollbar for Chrome, Safari, Opera */
                }

                /* Individual Card Content Spacing (applied to both front and back where applicable) */
                .coaching-icon, .resource-icon {
                    font-size: 4rem;
                    color: var(--color-accent);
                    margin-bottom: auto; /* Push icon to top on front */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 90px;
                    height: 90px;
                    background-color: rgba(145, 108, 60, 0.1);
                    border-radius: 50%;
                    flex-shrink: 0; /* Prevent icon from shrinking */
                }

                .coaching-icon :global(svg), .resource-icon :global(svg) {
                    font-size: 3rem;
                    color: var(--color-accent);
                }

                .coaching-card h3, .resource-card h3 {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-top: 1.5rem; /* Space from icon */
                    margin-bottom: 1.2rem;
                    color: var(--color-text-primary);
                    line-height: 1.2;
                    flex-shrink: 0; /* Prevent title from shrinking */
                }

                /* Removed h3 styling from card-back as per request */

                .coaching-tagline, .resource-tagline {
                    font-size: 1.2rem;
                    font-style: normal;
                    color: var(--color-accent);
                    margin-bottom: 1.8rem;
                    font-weight: 500;
                    flex-grow: 1; /* Allow tagline to take available space */
                }

                .card-instruction { /* New style for "Click to learn more" text */
                    font-size: 0.95rem;
                    color: var(--color-text-secondary);
                    opacity: 0.7;
                    margin-bottom: 1.5rem; /* Space above the button */
                    flex-shrink: 0;
                }

                .coaching-description, .resource-description {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: var(--color-text-secondary);
                    margin-bottom: 2.5rem;
                    flex-grow: 1; /* Allow description to take available space */
                    text-align: center; /* Center align description text */
                    padding-top: 1rem; /* Add some space above description on back card */
                }

                .coaching-benefits-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.2rem;
                    width: 100%;
                    margin-bottom: 2.5rem;
                    text-align: left; /* Benefits list should be left-aligned */
                    flex-shrink: 0; /* Prevent benefits from shrinking */
                }

                .benefit-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--color-text-secondary);
                }

                .benefit-item .benefit-icon {
                    color: var(--color-accent);
                    font-size: 1.2em;
                    flex-shrink: 0;
                    margin-top: 0.2rem;
                }

                /* Card-Specific CTA Button Styles (on the front of the card) */
                .cta-button-card-primary,
                .cta-button-card-secondary {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem 2.5rem;
                    border-radius: 8px;
                    font-size: 1.15rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                    text-decoration: none;
                    white-space: nowrap;
                    margin-top: auto; /* Push to the bottom of the card-front */
                    flex-shrink: 0; /* Prevent button from shrinking */
                    z-index: 3; /* Ensure button is clickable on top of card */
                }

                .cta-button-card-primary {
                    background-color: var(--color-card-cta-primary-bg);
                    color: var(--color-card-cta-primary-text);
                    border: 2px solid var(--color-card-cta-primary-bg);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }

                .cta-button-card-primary:hover {
                    background-color: var(--color-card-cta-primary-hover-bg);
                    border-color: var(--color-card-cta-primary-hover-bg);
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
                }

                .cta-button-card-primary:active {
                    transform: translateY(-1px);
                }

                .cta-button-card-secondary {
                    background-color: var(--color-card-cta-secondary-bg);
                    color: var(--color-accent); /* Directly using accent color for text */
                    border: var(--color-card-cta-secondary-border);
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                }

                .cta-button-card-secondary:hover {
                    background-color: var(--color-card-cta-secondary-hover-bg);
                    color: var(--color-card-cta-secondary-hover-text);
                    border-color: var(--color-card-cta-secondary-hover-bg);
                    transform: translateY(-3px);
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
                }

                .cta-button-card-secondary:active {
                    transform: translateY(-1px);
                }

                /* Responsive Adjustments */
                @media (max-width: 1024px) {
                    .services-hero-title { font-size: 3.5rem; }
                    .services-hero-subtitle { font-size: 1.4rem; }
                    section {
                        padding: 6rem 1.5rem;
                        margin: 3.5rem 0;
                    }
                    .section-title { font-size: 2.8rem; margin-bottom: 4rem; }
                    .coaching-grid, .resources-grid {
                        gap: 2.5rem;
                        padding-left: 1.5rem;
                        padding-right: 1.5rem;
                    }
                    .coaching-card, .resource-card {
                        min-width: 280px;
                        width: clamp(280px, 85vw, 380px);
                        height: 480px; /* Adjusted height for smaller screens */
                    }
                    .card-front, .card-back {
                        padding: 2.5rem;
                    }
                    .coaching-icon, .resource-icon {
                        font-size: 3.5rem;
                        width: 80px;
                        height: 80px;
                    }
                    .coaching-icon :global(svg), .resource-icon :global(svg) {
                        font-size: 2.5rem;
                    }
                    .coaching-card h3, .resource-card h3 {
                        font-size: 1.8rem;
                        margin-bottom: 1rem;
                    }
                    .coaching-tagline, .resource-tagline {
                        margin-bottom: 1.5rem;
                    }
                    .card-instruction {
                        font-size: 0.9rem;
                        margin-bottom: 1.2rem;
                    }
                    .coaching-description, .resource-description { margin-bottom: 2rem; }
                    .coaching-benefits-grid { margin-bottom: 2rem; }
                    .cta-button-card-primary, .cta-button-card-secondary {
                        padding: 0.9rem 2.2rem;
                        font-size: 1.1rem;
                    }
                }

                @media (max-width: 768px) {
                    .services-hero-section {
                        padding: 7rem 1.5rem 5rem;
                        min-height: 400px;
                    }
                    .services-hero-title { font-size: 3rem; }
                    .services-hero-subtitle { font-size: 1.2rem; }
                    section {
                        padding: 5rem 1rem;
                        margin: 3rem 0;
                    }
                    .section-title { font-size: 2.4rem; margin-bottom: 3.5rem; }
                    .coaching-grid, .resources-grid {
                        gap: 1.8rem;
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                    .coaching-card, .resource-card {
                        min-width: 250px;
                        width: clamp(250px, 90vw, 350px);
                        height: 450px; /* Adjusted height for smaller screens */
                    }
                    .card-front, .card-back {
                        padding: 2.2rem;
                    }
                    .coaching-icon, .resource-icon {
                        font-size: 3rem;
                        width: 70px;
                        height: 70px;
                    }
                    .coaching-icon :global(svg), .resource-icon :global(svg) {
                        font-size: 2.2rem;
                    }
                    .coaching-card h3, .resource-card h3 {
                        font-size: 1.6rem;
                        margin-bottom: 0.8rem;
                    }
                    .coaching-tagline, .resource-tagline {
                        margin-bottom: 1.2rem;
                    }
                    .card-instruction {
                        font-size: 0.85rem;
                        margin-bottom: 1rem;
                    }
                    .coaching-description, .resource-description { margin-bottom: 1.8rem; }
                    .coaching-benefits-grid { margin-bottom: 1.8rem; }
                    .cta-button-card-primary, .cta-button-card-secondary {
                        padding: 0.8rem 2rem;
                        font-size: 1.05rem;
                    }
                }

                @media (max-width: 480px) {
                    .services-hero-section {
                        padding: 6rem 1rem 4rem;
                        min-height: 350px;
                    }
                    .services-hero-title { font-size: 2.5rem; }
                    .services-hero-subtitle { font-size: 1rem; }
                    section {
                        padding: 4rem 0.5rem;
                        margin: 2.5rem 0;
                    }
                    .section-title { font-size: 2rem; margin-bottom: 3rem; }
                    .coaching-grid, .resources-grid {
                        gap: 1.2rem;
                        padding-left: 0.5rem;
                        padding-right: 0.5rem;
                    }
                    .coaching-card, .resource-card {
                        min-width: 220px;
                        width: clamp(220px, 95vw, 300px);
                        height: 430px; /* Adjusted height for smallest screens */
                    }
                    .card-front, .card-back {
                        padding: 1.8rem;
                    }
                    .coaching-icon, .resource-icon {
                        font-size: 2.5rem;
                        width: 60px;
                        height: 60px;
                    }
                    .coaching-icon :global(svg), .resource-icon :global(svg) {
                        font-size: 1.8rem;
                    }
                    .coaching-card h3, .resource-card h3 {
                        font-size: 1.4rem;
                        margin-bottom: 0.7rem;
                    }
                    .coaching-tagline, .resource-tagline {
                        margin-bottom: 1rem;
                    }
                    .card-instruction {
                        font-size: 0.8rem;
                        margin-bottom: 0.8rem;
                    }
                    .coaching-description, .resource-description { font-size: 0.95rem; margin-bottom: 1.5rem; }
                    .coaching-benefits-grid { margin-bottom: 1.5rem; }
                    .cta-button-card-primary, .cta-button-card-secondary {
                        padding: 0.8rem 2rem;
                        font-size: 1.05rem;
                    }
                }
            `}</style>
        </div>
    );
}