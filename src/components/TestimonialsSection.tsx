// src/components/TestimonialsSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Styles for pagination dots (if you want them)
import 'swiper/css/navigation'; // Styles for navigation arrows (if you want them)

// Import Swiper modules
// We'll use Pagination and Navigation for basic controls
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Added Autoplay

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
      quote: "The community platform is invaluable. Sharing challenges and successes with other founders has accelerated my progress significantly.",
      name: "Jordan T.",
      title: "Social Enterprise Lead",
    },
    {
      quote: "I was skeptical about online coaching, but Ascendio's approach is incredibly personal and effective. Highly recommend for any aspiring entrepreneur!",
      name: "Chris R.",
      title: "Digital Nomad & Founder",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="section-content">
        <h2 className="section-headline">Hear From Our Rising Entrepreneurs</h2>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]} // Enable modules
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Show 1 slide per view by default
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 5000, // 5 seconds delay
            disableOnInteraction: false, // Keep autoplay even after user interaction
          }}
          pagination={{ clickable: true }} // Enable clickable pagination dots
          navigation={true} // Enable navigation arrows
          breakpoints={{ // Responsive breakpoints for different screen sizes
            640: { // When window width is >= 640px
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: { // When window width is >= 768px
              slidesPerView: 2, // Show 2 slides
              spaceBetween: 30,
            },
            1024: { // When window width is >= 1024px
              slidesPerView: 3, // Show 3 slides
              spaceBetween: 30,
            },
          }}
          className="mySwiper" // Custom class for Swiper container
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}> {/* Each testimonial is a SwiperSlide */}
              <div className="testimonial-card">
                <span className="quote-icon">❝</span>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-author">
                  <span className="author-name">{testimonial.name}</span>
                  {testimonial.title && <span className="author-title">, {testimonial.title}</span>}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Link href="/testimonials" className="global-cta-button">
          Read All Success Stories
        </Link>
      </div>

      <div className="testimonials-background-elements"></div>

      <style jsx>{`
        .testimonials-section {
          padding: 6rem 2rem;
          background-color: var(--color-background);
          color: var(--color-text-primary);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .section-content {
          max-width: 1200px; /* Increased max-width slightly for 3 cards */
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

        /* Swiper container needs specific width/height if not inheriting */
        /* .mySwiper from Swiper's CSS will handle most of this */
        .mySwiper {
            width: 100%;
            padding-bottom: 50px; /* Space for pagination dots */
            margin-bottom: 4rem; /* Space below carousel */
        }

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
          box-sizing: border-box; /* Include padding in height calculation */
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
        }

        .testimonial-author {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-accent);
          margin-top: auto; /* Pushes author to the bottom if content height varies */
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

        /* Responsive adjustments for sections (already refined) */
        @media (max-width: 768px) {
          .section-headline {
            font-size: 2rem;
          }
          .testimonial-card {
            padding: 2rem;
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
          .mySwiper {
              padding-bottom: 40px; /* Adjust pagination space */
          }
        }

        @media (max-width: 480px) {
          .testimonials-section {
            padding: 4rem 1.5rem;
          }
          .section-headline {
            font-size: 1.8rem;
          }
          .testimonial-card {
            padding: 1.5rem;
          }
          .mySwiper {
              padding-bottom: 30px; /* Adjust pagination space */
          }
        }
      `}</style>
    </section>
  );
}