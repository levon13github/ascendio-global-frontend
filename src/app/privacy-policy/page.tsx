// src/app/privacy-policy/page.tsx
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="legal-page-container">
        <section className="legal-content">
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy describes how Ascendio Global collects, uses, and discloses your personal information when you visit or make a purchase from ascendioglobal.com (the "Site") or use our services.
          </p>
          <h2>1. Information We Collect</h2>
          <p>
            We collect various types of information in connection with the services, including:
          </p>
          <ul>
            <li><strong>Personal Information:</strong> Information that can be used to identify you, such as your name, email address, phone number, and payment information.</li>
            <li><strong>Usage Data:</strong> Information about how you access and use the Site and services, which may include your IP address, browser type, device information, and pages visited.</li>
          </ul>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul>
            <li>To provide and maintain our services.</li>
            <li>To process your transactions and send you related information.</li>
            <li>To communicate with you, including for customer service and marketing.</li>
            <li>To improve and personalize your experience on the Site.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <h2>3. Sharing Your Information</h2>
          <p>
            We may share your information with third-party service providers to perform functions on our behalf, such as payment processing, analytics, and marketing services. We do not sell your personal information.
          </p>
          <h2>4. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data.
          </p>
          <h2>5. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          <p>
            <strong>Last updated: June 19, {new Date().getFullYear()}</strong>
          </p>
        </section>
      </main>

      <style jsx>{`
        .legal-page-container {
          padding: 8rem 2rem 4rem; /* Adjusted padding to account for fixed header */
          max-width: 900px;
          margin: 0 auto;
          min-height: calc(100vh - 120px); /* Ensure footer stays at bottom */
          color: var(--color-text-primary);
        }
        .legal-content h1 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: var(--color-text-primary);
          text-align: center;
        }
        .legal-content h2 {
          font-size: 1.8rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: var(--color-accent);
        }
        .legal-content p {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .legal-content ul {
          list-style: disc;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .legal-content li {
          font-size: 1.05rem;
          margin-bottom: 0.5rem;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .legal-page-container {
            padding: 6rem 1.5rem 3rem;
          }
          .legal-content h1 {
            font-size: 2rem;
          }
          .legal-content h2 {
            font-size: 1.5rem;
          }
          .legal-content p {
            font-size: 1rem;
          }
          .legal-content li {
            font-size: 0.95rem;
          }
        }
        @media (max-width: 480px) {
          .legal-page-container {
            padding: 5rem 1rem 2.5rem;
          }
          .legal-content h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}