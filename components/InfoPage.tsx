import { AnimatedSection } from '@/lib/useScrollAnimation';

export default function InfoPage() {
  return (
    <>
      {/* HERO SECTION - Exact Copy of Work Page Hero Structure */}
      <AnimatedSection>
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

              {/* Main Definition - PRIMARY HERO STATEMENT */}
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
                <strong>verb:</strong> to be wanted, to be desired
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
                  Origin: Bubi language, Equatorial Guinea
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--step-0)',
                    color: 'var(--muted)',
                    letterSpacing: '0.01em',
                    opacity: '0.85',
                    fontStyle: 'italic',
                    maxWidth: '500px',
                    margin: '0 auto'
                  }}
                >
  &ldquo;Creating things that are behelo, genuinely wanted and needed by the people who use them.&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator">
            ↓
          </div>
        </section>
      </AnimatedSection>

      {/* MANIFESTO + REFERENCE - Two Column Layout */}
      <section style={{ paddingBottom: '8rem' }}>
        <div style={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '8fr 4fr',
            gap: '5rem',
            alignItems: 'start'
          }}>
            {/* Left Column - Narrative (7 columns) */}
            <div style={{
              maxWidth: '65ch', // Comfortable reading measure
              lineHeight: '1.8'
            }}>
              <div style={{ marginBottom: '4rem' }}>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'var(--step-0)',
                  lineHeight: '1.8',
                  color: 'var(--ink)',
                  marginBottom: '3rem'
                }}>
                  I&rsquo;m Michael, a builder, artist, and voice actor based in Oakland, California.
                </p>

                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'var(--step-0)',
                  lineHeight: '1.8',
                  color: 'var(--ink)',
                  marginBottom: '2rem'
                }}>
                  My work explores the intersection of creativity, technology, and human performance. I design software, draw in ink, and perform through voice, different mediums that share the same underlying pursuit:
                </p>

                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'var(--step-1)',
                  lineHeight: '1.7',
                  color: 'var(--ink)',
                  marginBottom: '4rem',
                  fontStyle: 'italic',
                  fontWeight: '500'
                }}>
                  to build things that make people more capable.
                </p>

                <div style={{ marginBottom: '3rem' }}>
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--step-0)',
                    lineHeight: '1.8',
                    color: 'var(--ink)',
                    marginBottom: '1.5rem'
                  }}>
                    Some of those things are tools.
                  </p>

                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--step-0)',
                    lineHeight: '1.8',
                    color: 'var(--ink)',
                    marginBottom: '3rem'
                  }}>
                    Projects like AfterImage, Eduba, and ChainFlow are experiments in learning systems, creative discipline, and focused work. Small, practical systems designed to help people practice skills and develop mastery.
                  </p>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--step-0)',
                    lineHeight: '1.8',
                    color: 'var(--ink)',
                    marginBottom: '1.5rem'
                  }}>
                    Some of those things are artistic practice.
                  </p>

                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--step-0)',
                    lineHeight: '1.8',
                    color: 'var(--ink)',
                    marginBottom: '3rem'
                  }}>
                    My studio work focuses primarily on drawing and ink, studying form, light, and movement through the tradition of black-and-white masters. The process is deliberate and repetitive, building a visual library through observation.
                  </p>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--step-0)',
                    lineHeight: '1.8',
                    color: 'var(--ink)',
                    marginBottom: '1.5rem'
                  }}>
                    And some of those things are performance.
                  </p>

                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--step-0)',
                    lineHeight: '1.8',
                    color: 'var(--ink)',
                    marginBottom: '3rem'
                  }}>
                    Voice acting allows me to explore clarity, tone, and presence, the craft of communicating stories and ideas in a way that feels human and alive.
                  </p>
                </div>

                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'var(--step-0)',
                  lineHeight: '1.8',
                  color: 'var(--ink)',
                  marginBottom: '2rem'
                }}>
                  Across everything I build, the goal remains the same:
                </p>

                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'var(--step-1)',
                  lineHeight: '1.7',
                  color: 'var(--ink)',
                  fontStyle: 'italic',
                  fontWeight: '500'
                }}>
                  create things that expand human capability.
                </p>
              </div>

              {/* Principles */}
              <div style={{ marginTop: '6rem' }}>
                {/* Simple divider */}
                <div style={{
                  width: '60px',
                  height: '1px',
                  background: 'var(--line)',
                  marginBottom: '4rem'
                }} />

                <div style={{
                  display: 'grid',
                  gap: '2.5rem'
                }}>
                  {[
                    'Build things that matter.',
                    'Practice every day.',
                    'Turn imagination into reality.'
                  ].map((principle, index) => (
                    <p key={index} style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'var(--step-0)',
                      lineHeight: '1.7',
                      color: 'var(--ink)',
                      margin: '0'
                    }}>
                      {principle}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Reference (5 columns) */}
            <div style={{
              position: 'sticky',
              top: '120px', // Account for fixed navigation
              paddingLeft: '2rem'
            }}>
              {/* Details section */}
              <div style={{ marginBottom: '4rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--step--2)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--muted)',
                    marginBottom: '2rem'
                  }}
                >
                  Details
                </h3>

                <div
                  style={{
                    display: 'grid',
                    gap: '1rem'
                  }}
                >
                  {[
                    ['Location', 'Oakland, CA'],
                    ['Languages', 'English, Spanish, French'],
                    ['Background', 'Voice Acting, Development'],
                    ['Art Study', 'Drawing, Painting'],
                    ['Residency', 'Independent Studio Practice']
                  ].map(([label, value], index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem',
                        paddingBottom: '0.75rem',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--step--2)',
                          color: 'var(--muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {label}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--step--2)',
                          color: 'var(--ink)'
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience section */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--step--2)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--muted)',
                    marginBottom: '2rem'
                  }}
                >
                  Experience
                </h3>

                <div>
                  {/* Voice Acting */}
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h4
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'var(--step--1)',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        color: 'var(--ink)'
                      }}
                    >
                      Voice Acting & Narration
                    </h4>
                    <div
                      style={{
                        display: 'grid',
                        gap: '0.5rem'
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'var(--step--2)',
                            color: 'var(--ink)'
                          }}
                        >
                          Audiobook Narration
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'var(--step--2)',
                            color: 'var(--muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                          }}
                        >
                          ACX, EN & ES
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'var(--step--2)',
                            color: 'var(--ink)'
                          }}
                        >
                          Character Voices
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'var(--step--2)',
                            color: 'var(--muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                          }}
                        >
                          Animation, Games
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'var(--step--2)',
                            color: 'var(--ink)'
                          }}
                        >
                          Commercial
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'var(--step--2)',
                            color: 'var(--muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                          }}
                        >
                          Brand, Product
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Development */}
                  <div style={{ marginBottom: '2.5rem' }}>
                    <h4
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'var(--step--1)',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        color: 'var(--ink)'
                      }}
                    >
                      Development & Building
                    </h4>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'var(--step--2)',
                            color: 'var(--ink)'
                          }}
                        >
                          Digital Products
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'var(--step--2)',
                            color: 'var(--muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                          }}
                        >
                          iOS, Web, Tools
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'var(--step--2)',
                            color: 'var(--ink)'
                          }}
                        >
                          Cultural Preservation
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'var(--step--2)',
                            color: 'var(--muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                          }}
                        >
                          Platforms, Archives
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Art */}
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'var(--step--1)',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        color: 'var(--ink)'
                      }}
                    >
                      Art & Practice
                    </h4>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'var(--step--2)',
                            color: 'var(--ink)'
                          }}
                        >
                          Drawing & Painting
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'var(--step--2)',
                            color: 'var(--muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                          }}
                        >
                          Studio Practice
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'var(--step--2)',
                            color: 'var(--ink)'
                          }}
                        >
                          Physical Tools
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'var(--step--2)',
                            color: 'var(--muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                          }}
                        >
                          Prototypes, Builds
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive behavior */}
          <style jsx>{`
            @media (max-width: 1279px) {
              div[style*="maxWidth: '1240px'"] {
                max-width: 1100px !important;
                padding-left: 2rem !important;
                padding-right: 2rem !important;
              }

              div[style*="gap: '5rem'"] {
                gap: 4rem !important;
              }
            }

            @media (max-width: 768px) {
              div[style*="maxWidth: '1240px'"] {
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
              }

              div[style*="gap: '5rem'"] {
                grid-template-columns: 1fr !important;
                gap: 3rem !important;
              }

              div[style*="gap: '5rem'"] > div:last-child {
                position: static !important;
                padding-left: 0 !important;
                margin-top: 2rem;
              }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}