// src/app/cookies-policy/page.tsx
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CookiesPolicyPage() {
  return (
    <>
      <Header />
      <main className="legal-page-container">
        <section className="legal-content">
          <h1>Cookies Policy</h1>
          <p>
            This Cookies Policy explains what cookies are, how Ascendio Global uses them, and your choices regarding cookies when you visit ascendioglobal.com (the "Site").
          </p>
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Site or a third-party to recognize you and make your next visit easier and the Site more useful to you.
          </p>
          <h2>2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li>To enable certain functions of the Site (e.g., remembering your preferences).</li>
            <li>To provide analytics (e.g., tracking website traffic and user behavior).</li>
            <li>To deliver advertisements (e.g., showing relevant ads based on your interests).</li>
          </ul>
          <h2>3. Types of Cookies We Use</h2>
          <ul>
            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
            <li><strong>Performance Cookies:</strong> Collect information about how you use the website.</li>
            <li><strong>Functionality Cookies:</strong> Remember choices you make to improve your experience.</li>
            <li><strong>Targeting/Advertising Cookies:</strong> Used to deliver more relevant advertisements to you.</li>
          </ul>
          <h2>4. Your Choices Regarding Cookies</h2>
          <p>
            If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.
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