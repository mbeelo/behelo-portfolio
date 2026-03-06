export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-intro">
          {/* Studio Name - Dominant Element */}
          <div className="hero-title">
            Behelo
          </div>

          {/* Pronunciation - Subtle, Dictionary Feel */}
          <div className="hero-pronunciation">
            /bəˈhɛlo/
          </div>

          {/* Main Tagline - PRIMARY HERO STATEMENT */}
          <h1 className="hero-tagline">
            <span className="tagline-desktop">
              Turning imagination into reality<br />
              through tools, art, and voice.
            </span>
            <span className="tagline-mobile">
              Turning imagination into reality through tools, art, and voice.
            </span>
          </h1>

          {/* Studio Metadata - Secondary Information */}
          <div className="hero-metadata">
            <div className="hero-location">
              <span className="location-desktop">Independent creator — Oakland, CA</span>
              <span className="location-mobile">Independent creator<br />Oakland, CA</span>
            </div>

            <div className="hero-languages">
              English · Spanish · French
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        ↓
      </div>

      <style jsx>{`
        .hero-content {
          padding: 0 2rem;
        }

        .hero-title {
          font-family: var(--font-mono);
          font-size: var(--step-4);
          letter-spacing: -0.02em;
          color: var(--ink);
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          word-break: keep-all;
        }

        .hero-pronunciation {
          font-family: var(--font-mono);
          font-size: var(--step--1);
          color: var(--muted);
          margin-bottom: 4rem;
          letter-spacing: 0.05em;
          opacity: 0.8;
        }

        .hero-tagline {
          font-family: var(--font-serif);
          font-size: clamp(1.75rem, 4vw + 1rem, 2.5rem);
          font-weight: 400;
          color: var(--ink);
          line-height: 1.4;
          margin-bottom: 4rem;
          max-width: 700px;
          letter-spacing: -0.01em;
        }

        .tagline-mobile {
          display: none;
        }

        .tagline-desktop {
          display: inline;
        }

        .hero-metadata {
          margin-top: 2rem;
        }

        .hero-location, .hero-languages {
          font-family: var(--font-mono);
          font-size: var(--step--1);
          color: var(--muted);
          letter-spacing: 0.05em;
          opacity: 0.65;
          line-height: 1.4;
        }

        .hero-location {
          margin-bottom: 0.75rem;
        }

        .location-mobile {
          display: none;
        }

        .location-desktop {
          display: inline;
        }

        @media (max-width: 767px) {
          .hero-content {
            padding: 0 1rem;
          }

          .hero-title {
            font-size: clamp(2.5rem, 8vw, 3.5rem);
            margin-bottom: 0.5rem;
          }

          .hero-pronunciation {
            font-size: var(--step--2);
            margin-bottom: 2rem;
          }

          .hero-tagline {
            font-size: clamp(1.25rem, 5vw, 1.75rem);
            line-height: 1.3;
            margin-bottom: 2rem;
            max-width: 100%;
          }

          .tagline-desktop {
            display: none;
          }

          .tagline-mobile {
            display: inline;
          }

          .hero-metadata {
            margin-top: 1rem;
          }

          .hero-location, .hero-languages {
            font-size: var(--step--2);
          }

          .location-desktop {
            display: none;
          }

          .location-mobile {
            display: inline;
          }
        }
      `}</style>
    </section>
  );
}
