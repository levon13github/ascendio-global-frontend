// src/components/CustomCursor.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default"); // 'default', 'text', 'link', etc.

  useEffect(() => {
    // Function to update mouse position
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", mouseMove);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  // Define Framer Motion variants for different cursor states
  const variants = {
    default: {
      x: mousePosition.x - 16, // Center the cursor circle horizontally
      y: mousePosition.y - 16, // Center the cursor circle vertically
      backgroundColor: "rgba(145, 108, 60, 0.8)", // Your accent color, slightly transparent
      height: 32,
      width: 32,
      mixBlendMode: "difference", // Creates a cool inversion effect over content
      border: "none", // No border for default
    },
    text: {
      x: mousePosition.x - 48, // Larger size, so adjust position to keep it centered
      y: mousePosition.y - 48,
      backgroundColor: "rgba(255, 255, 255, 0.8)", // White for text, for contrast
      height: 96,
      width: 96,
      mixBlendMode: "difference",
      border: "none",
    },
    link: {
      x: mousePosition.x - 24, // Medium size, adjust position
      y: mousePosition.y - 24,
      backgroundColor: "rgba(145, 108, 60, 0.8)", // Accent color
      height: 48,
      width: 48,
      mixBlendMode: "difference",
      border: "2px solid white", // Add a white border for links/interactive elements
    },
    // You can add more variants for different interactions (e.g., 'image', 'video')
  };

  // Functions to set cursor variant based on interaction
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const linkEnter = () => setCursorVariant("link");
  const linkLeave = () => setCursorVariant("default");

  // Use another useEffect to attach and clean up event listeners for interactive elements
  useEffect(() => {
    // Select all elements that should trigger a 'text' cursor variant
    // This includes common text elements and specific section titles/descriptions
    const textElements = document.querySelectorAll(
      "h1, h2, h3, p, .section-subtitle, .section-description, .testimonial-quote, .testimonial-author, .value-phrase, .value-description"
    );
    textElements.forEach(el => {
      el.addEventListener("mouseenter", textEnter);
      el.addEventListener("mouseleave", textLeave);
    });

    // Select all elements that should trigger a 'link' cursor variant
    // This includes all Link components, buttons, and your interactive cards
    const linkElements = document.querySelectorAll(
      "a, button, .global-cta-button, .solution-card, .problem-card, .value-tile"
    );
    linkElements.forEach(el => {
      el.addEventListener("mouseenter", linkEnter);
      el.addEventListener("mouseleave", linkLeave);
    });

    // Cleanup function for interactive elements' listeners
    return () => {
      textElements.forEach(el => {
        el.removeEventListener("mouseenter", textEnter);
        el.removeEventListener("mouseleave", textLeave);
      });
      linkElements.forEach(el => {
        el.removeEventListener("mouseenter", linkEnter);
        el.removeEventListener("mouseleave", linkLeave);
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <motion.div
      className="custom-cursor"
      variants={variants} // Pass the defined variants
      animate={cursorVariant} // Animate to the current cursor variant
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }} // Smooth transition for cursor changes
    >
      {/* Optional: You can add content inside the cursor for specific variants, e.g., a small icon or text */}
    </motion.div>
  );
}