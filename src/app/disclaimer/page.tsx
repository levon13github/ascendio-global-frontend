// src/app/disclaimer/page.tsx
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="legal-page-container">
        <section className="legal-content">
          <h1>Disclaimer</h1>
          <p>
            The information provided by Ascendio Global on ascendioglobal.com (the "Site") and through our services is for general informational and educational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>
          <h2>1. Not Professional Advice</h2>
          <p>
            The content provided by Ascendio Global is not intended as, and shall not be understood or construed as, financial, legal, tax, medical, or any other professional advice. We are not attorneys, accountants, financial advisors, or healthcare professionals.
          </p>
          <h2>2. No Guarantees</h2>
          <p>
            While we strive to provide valuable guidance for aspiring entrepreneurs, Ascendio Global does not guarantee any specific results or outcomes from the use of our services or the information provided on the Site. Your success depends on your individual efforts, market conditions, and other factors beyond our control.
          </p>
          <h2>3. External Links Disclaimer</h2>
          <p>
            The Site may contain links to external websites that are not provided or maintained by or in any way affiliated with Ascendio Global. Please note that Ascendio Global does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>
          <h2>4. Affiliate Links Disclosure</h2>
          <p>
            Ascendio Global may participate in affiliate marketing programs. This means that we may earn a commission if you make a purchase through links provided on our Site to third-party products or services, at no extra cost to you. We only recommend products or services that we believe will add value to our audience.
          </p>
          <h2>5. Testimonials Disclaimer</h2>
          <p>
            The testimonials shared on the Site are individual experiences and reflect the real-life experiences and opinions of those individuals. However, the experiences are personal to those particular individuals, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences. Your individual results may vary.
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