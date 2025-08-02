// src/components/TestimonialsSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion, easeOut } from 'framer-motion'; // Import motion AND easeOut from framer-motion

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Ascendio Global helped me turn my abstract ideas into a concrete business plan. Their framework provided the clarity I desperately needed!",
            name: "Alex P.",
            title: "Tech Startup Founder",
        },
        {
            quote: "The personalized coaching was a game-changer. I launched my sustainable fashion brand with confidence thanks to their strategic guidance.",
            name: "Maria L.",
            title: "Eco-Conscious Entrepreneur",
        },
        {
            quote: "From overwhelming uncertainty to a clear roadmap – Ascendio Global truly lives up to its promise. My business is thriving!",
            name: "Sam K.",
            title: "E-commerce Innovator",
        },
        {
            quote: "Working with Ascendio Global transformed my approach to business. Their insights are invaluable for any aspiring entrepreneur.",
            name: "Jordan T.",
            title: "Digital Marketing Specialist",
        },
        {
            quote: "The community platform is incredibly supportive. I've found mentors and collaborators who have accelerated my journey.",
            name: "Casey R.",
            title: "Social Enterprise Leader",
        },
    ];

    // Define animation variants for the container and items
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Delay between children animations
                delayChildren: 0.3, // Delay before children start animating
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
    };

    const headlineVariants = {
        hidden: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
    };

    const ctaVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOut, delay: 0.6 } },
    };

    return (
        <section className="testimonials-section">
            <div className="section-content">
                <motion.h2
                    className="section-headline"
                    variants={headlineVariants}
                    initial="hidden"
                    animate="show" // Changed from whileInView to animate
                    // Removed viewport prop
                >
                    Hear From Our Rising Entrepreneurs
                </motion.h2>

                <motion.div
                    className="testimonials-carousel-wrapper"
                    variants={containerVariants} // Apply container variants to the wrapper
                    initial="hidden"
                    animate="show" // Changed from whileInView to animate
                    // Removed viewport prop
                >
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={30} // Space between slides
                        slidesPerView={1} // Default to 1 slide per view
                        loop={true} // Enable looping
                        autoplay={{
                            delay: 5000, // 5 seconds delay
                            disableOnInteraction: false, // Continue autoplay after user interaction
                        }}
                        pagination={{ clickable: true }} // Enable clickable pagination dots
                        navigation={true} // Enable navigation arrows
                        breakpoints={{
                            // When window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            // When window width is >= 1024px
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper" // Custom class for Swiper instance
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                {/* Apply itemVariants to the testimonial-card itself */}
                                <motion.div
                                    className="testimonial-card"
                                    variants={itemVariants}
                                    // No whileInView needed here, as the parent carousel wrapper animates
                                    // and Swiper handles individual slide transitions.
                                    // The 'initial' state will apply when the Swiper component mounts.
                                >
                                    <span className="quote-icon">❝</span>
                                    <p className="testimonial-quote">"{testimonial.quote}"</p>
                                    <p className="testimonial-author">
                                        <span className="author-name">{testimonial.name}</span>
                                        {testimonial.title && <span className="author-title">, {testimonial.title}</span>}
                                    </p>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                <motion.div
                    variants={ctaVariants}
                    initial="hidden"
                    animate="show" // Changed from whileInView to animate
                    // Removed viewport prop
                >
                    <Link href="/testimonials" className="global-cta-button">
                        Read All Success Stories
                    </Link>
                </motion.div>
            </div>

            <div className="testimonials-background-elements"></div>

            {/* All Swiper-related styles are now in globals.css */}
            <style jsx>{`
                .testimonials-section {
                    padding: 6rem 2rem;
                    background-color: var(--color-background);
                    color: var(--color-text-primary);
                    text-align: center;
                    position: relative;
                    overflow: hidden; /* Keep overflow hidden for section */
                }

                .section-content {
                    max-width: 1200px; /* Increased max-width for better Swiper display */
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

                .testimonials-carousel-wrapper {
                    margin-bottom: 4rem;
                }

                /* The .mySwiper class and its direct child styles are now primarily managed in globals.css */
                /* Only component-specific styles that don't conflict with Swiper's internal elements remain here */

                .testimonial-card {
                    background-color: white;
                    border-radius: 12px;
                    padding: 2.5rem;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    height: 100%; /* Ensure cards fill SwiperSlide height */
                }

                .quote-icon {
                    font-size: 4rem;
                    line-height: 0.8;
                    color: var(--color-accent);
                    margin-bottom: 1.5rem;
                    display: block;
                }

                .testimonial-quote {
                    font-size: 1.2rem;
                    line-height: 1.6;
                    font-style: italic;
                    margin-bottom: 1.5rem;
                    color: var(--color-text-primary);
                    flex-grow: 1; /* Allow quote to take available space */
                }

                .testimonial-author {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--color-accent);
                }

                .author-name {
                    font-weight: 700;
                }

                .author-title {
                    font-weight: 400;
                    color: var(--color-text-primary);
                }

                .testimonials-background-elements {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }

                /* Responsive adjustments for section content */
                @media (max-width: 1024px) {
                    .section-headline {
                        font-size: 2.2rem;
                    }
                    .testimonial-card {
                        padding: 2rem;
                    }
                    .quote-icon {
                        font-size: 3.5rem;
                    }
                    .testimonial-quote {
                        font-size: 1.1rem;
                    }
                }

                @media (max-width: 768px) {
                    .testimonials-section {
                        padding: 4rem 1.5rem;
                    }
                    .section-headline {
                        font-size: 2rem;
                    }
                    .testimonial-card {
                        padding: 1.8rem;
                    }
                    .quote-icon {
                        font-size: 3rem;
                    }
                    .testimonial-quote {
                        font-size: 1rem;
                    }
                    .testimonial-author {
                        font-size: 0.9rem;
                    }
                }

                @media (max-width: 480px) {
                    .section-headline {
                        font-size: 1.8rem;
                    }
                    .testimonial-card {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
}