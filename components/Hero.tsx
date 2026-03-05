export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-intro">
          {/* Studio Name - Dominant Element */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--step-4)',
              letterSpacing: '-0.02em', // Tight tracking for luxury feel
              color: 'var(--ink)',
              fontWeight: '600',
              marginBottom: '1rem',
              textTransform: 'uppercase'
            }}
          >
            Behelo
          </div>

          {/* Pronunciation - Subtle, Dictionary Feel */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--step--1)',
              color: 'var(--muted)',
              marginBottom: '4rem',
              letterSpacing: '0.05em',
              opacity: '0.8'
            }}
          >
            /bəˈhɛlo/
          </div>

          {/* Main Tagline - PRIMARY HERO STATEMENT */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 4vw + 1rem, 2.5rem)', // Significantly larger, responsive
              fontWeight: '400',
              color: 'var(--ink)',
              lineHeight: '1.4', // Breathing room and authority
              marginBottom: '4rem',
              maxWidth: '700px',
              letterSpacing: '-0.01em'
            }}
          >
            Turning imagination into reality<br />
            through tools, art, and voice.
          </h1>

          {/* Studio Metadata - Secondary Information */}
          <div style={{ marginTop: '2rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--step--1)',
                color: 'var(--muted)',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
                opacity: '0.65' // Tasteful fade to push attention back to tagline
              }}
            >
              Independent studio — Oakland, CA
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--step--1)',
                color: 'var(--muted)',
                letterSpacing: '0.05em',
                opacity: '0.65' // Consistent subtle fade
              }}
            >
              English · Spanish · French
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        ↓
      </div>
    </section>
  );
}
