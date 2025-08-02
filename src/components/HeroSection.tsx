// src/components/HeroSection.tsx
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
    useEffect(() => {
        if (window.history.scrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="hero-section">
            <video
                className="hero-background-video"
                autoPlay
                loop
                muted
                playsInline
                disableRemotePlayback
            >
                <source src="/videos/hero-background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="hero-background-video-overlay"></div>

            <div className="hero-content">
                <div className="hero-text-columns">
                    <div className="hero-left-column">
                        <h1 className="hero-main-title">
                            Igniting Entrepreneurial Journeys<br />Stop Searching, <br/>Start Building!
                        </h1>
                    </div>

                    <div className="hero-right-column">
                        <p className="hero-main-subtitle">
                            Your Clear Path to a Thriving Business Idea.
                            Gain the clarity and confidence you need to launch a purpose-driven venture with AI-powered insights.
                            Discover your unique business idea and build a legacy that matters, starting today.
                        </p>
                    </div>
                </div>

                {/* The slogan has been moved here, right before the CTA button */}
                <p className="hero-slogan-cta">
                    Rise Together. Shape Tomorrow.
                </p>

                <Link href="/services" className="global-cta-button">
                    Find Your Business Idea
                </Link>
            </div>

            <style jsx>{`
                .hero-section {
                    position: relative;
                    width: 100%;
                    min-height: 85vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: white;
                    overflow: hidden;
                    padding: 10rem 2rem 6rem;
                }
                
                .hero-background-video {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 1200px;
                    width: 100%;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 3rem;
                }

                .hero-background-video-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8));
                    z-index: 1;
                }

                .hero-text-columns {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    width: 100%;
                    gap: 4rem;
                    text-align: left; 
                }

                .hero-left-column,
                .hero-right-column {
                    flex: 1;
                    min-width: 300px;
                }

                /* This old slogan style is now unused but kept here for reference */
                /*
                .hero-slogan {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.8);
                    margin-bottom: 0.8rem;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
                    line-height: 1.4;
                }
                */

                /* New style for the slogan when placed next to the CTA */
                .hero-slogan-cta {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--color-accent); /* Use your accent color for emphasis */
                    margin-bottom: 1.5rem; /* Add some space below the slogan */
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
                    line-height: 1.4;
                    text-align: center;
                }

                .hero-main-title {
                    font-size: 3.2rem;
                    font-weight: 800;
                    line-height: 1.2;
                    color: white;
                    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
                    margin-bottom: 0;
                }

                .hero-main-subtitle {
                    font-size: 1.9rem;
                    line-height: 1.4;
                    color: rgba(255, 255, 255, 0.95);
                    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);
                    max-width: none;
                    margin-top: 0;
                    text-align: left; 
                }

                .global-cta-button {
                    /* Assuming global styles apply, no specific changes needed here */
                }

                /* Responsive Adjustments */
                @media (max-width: 1200px) {
                    .hero-section {
                        padding: 8rem 2rem 5rem;
                    }
                    .hero-text-columns {
                        gap: 3rem;
                    }
                    /* Updated slogan styles for smaller screens */
                    .hero-slogan-cta {
                      font-size: 1.15rem;
                    }
                    .hero-main-title {
                        font-size: 2.8rem;
                    }
                    .hero-main-subtitle {
                        font-size: 1.6rem; 
                    }
                }

                @media (max-width: 1024px) {
                    .hero-section {
                        min-height: 70vh;
                        padding: 7rem 1.5rem 4rem;
                    }
                    .hero-text-columns {
                        flex-direction: column;
                        text-align: center;
                        gap: 1.5rem;
                    }
                    .hero-left-column, .hero-right-column {
                        min-width: unset;
                    }
                    .hero-slogan-cta {
                        margin-bottom: 1.2rem;
                        font-size: 1.1rem;
                    }
                    .hero-main-title {
                        font-size: 2.5rem;
                        margin-bottom: 1rem;
                    }
                    .hero-main-subtitle {
                        font-size: 1.2rem;
                        line-height: 1.5;
                    }
                    .hero-content {
                        gap: 2rem;
                        padding: 0;
                    }
                }

                @media (max-width: 768px) {
                    .hero-section {
                        min-height: 65vh;
                        padding: 6rem 1.5rem 3rem;
                        background-attachment: scroll;
                    }
                    .hero-main-title {
                        font-size: 2rem;
                    }
                    .hero-main-subtitle {
                        font-size: 1rem;
                    }
                    .hero-slogan-cta {
                        font-size: 0.9rem;
                    }
                }

                @media (max-width: 480px) {
                    .hero-section {
                        min-height: 55vh;
                        padding: 5rem 1rem 2rem;
                    }
                    .hero-main-title {
                        font-size: 1.7rem;
                    }
                    .hero-main-subtitle {
                        font-size: 0.9rem;
                    }
                    .hero-slogan-cta {
                        font-size: 0.8rem;
                        margin-bottom: 1rem;
                    }
                    .hero-content {
                        gap: 1rem;
                    }
                }
            `}</style>
        </section>
    );
}