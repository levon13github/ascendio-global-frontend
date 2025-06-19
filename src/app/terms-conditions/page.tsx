// src/app/terms-conditions/page.tsx
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsConditionsPage() {
  return (
    <>
      <Header />
      <main className="legal-page-container">
        <section className="legal-content">
          <h1>Terms & Conditions</h1>
          <p>
            Welcome to Ascendio Global! These Terms & Conditions ("Terms") govern your use of the ascendioglobal.com website (the "Site") and our services. By accessing or using the Site and our services, you agree to be bound by these Terms.
          </p>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By using our Site and services, you affirm that you are of legal age to enter into this agreement and agree to comply with all applicable laws and regulations.
          </p>
          <h2>2. Services</h2>
          <p>
            Ascendio Global provides coaching programs, digital content, community platforms, and guidance on using AI tools for aspiring entrepreneurs. Our services are for informational and educational purposes only and do not guarantee any specific business outcomes.
          </p>
          <h2>3. User Responsibilities</h2>
          <p>
            You agree to use our Site and services lawfully and ethically. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
          <h2>4. Intellectual Property</h2>
          <p>
            All content on the Site, including text, graphics, logos, and digital downloads, is the property of Ascendio Global or its content suppliers and is protected by international copyright laws.
          </p>
          <h2>5. Limitation of Liability</h2>
          <p>
            Ascendio Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service.
          </p>
          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Belgium, without regard to its conflict of law provisions.
          </p>
          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. We will provide reasonable notice prior to any new terms taking effect.
          </p>
          <p>
            <strong>Last updated: June 19, {new Date().getFullYear()}</strong>
          </p>
        </section>
      </main>
      <Footer />
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