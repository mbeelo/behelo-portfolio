export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Behelo for questions about cultural heritage tools, digital library, or general inquiries.',
  openGraph: {
    title: 'Contact | Behelo',
    description: 'Get in touch with Behelo for questions about cultural heritage tools and digital library.'
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Contact</h1>
          <p style={{ fontSize: 'var(--step-0)', color: 'var(--muted)', marginTop: '8px' }}>
            Let&apos;s talk about cultural preservation, tools, or anything else
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              marginBottom: '40px'
            }}>

              {/* Direct Contact */}
              <div style={{
                padding: '32px',
                background: '#f9f9f9',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--line)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: 'var(--step-3)', marginBottom: '16px' }}>📧</div>
                <h3 style={{ marginBottom: '16px' }}>Email</h3>
                <a
                  href="mailto:hello@behelo.com"
                  style={{
                    display: 'block',
                    fontSize: 'var(--step-0)',
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    marginBottom: '8px',
                    fontWeight: '600'
                  }}
                >
                  hello@behelo.com
                </a>
                <p style={{
                  fontSize: 'var(--step--1)',
                  color: 'var(--muted)',
                  margin: 0
                }}>
                  Best for project inquiries, collaborations, and general questions
                </p>
              </div>

              {/* Phone Contact */}
              <div style={{
                padding: '32px',
                background: '#f9f9f9',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--line)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: 'var(--step-3)', marginBottom: '16px' }}>📱</div>
                <h3 style={{ marginBottom: '16px' }}>Phone</h3>
                <a
                  href="tel:+1234567890"
                  style={{
                    display: 'block',
                    fontSize: 'var(--step-0)',
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    marginBottom: '8px',
                    fontWeight: '600'
                  }}
                >
                  +1 (234) 567-8900
                </a>
                <p style={{
                  fontSize: 'var(--step--1)',
                  color: 'var(--muted)',
                  margin: 0
                }}>
                  For urgent matters or to schedule a call
                </p>
              </div>

            </div>

            {/* What to Expect */}
            <div style={{
              padding: '24px',
              background: 'rgba(163, 84, 44, 0.1)',
              borderLeft: '4px solid var(--accent)',
              borderRadius: '0 6px 6px 0',
              marginBottom: '40px'
            }}>
              <h3 style={{
                color: 'var(--accent)',
                marginBottom: '16px',
                fontSize: 'var(--step-0)'
              }}>
                💬 What to Expect
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '16px',
                fontSize: 'var(--step--1)',
                color: 'var(--muted)'
              }}>
                <div>
                  <strong>Response Time:</strong> I usually respond within 24-48 hours, often much sooner.
                </div>
                <div>
                  <strong>Language:</strong> I&apos;m fluent in English and Spanish, and know some Bubi.
                </div>
                <div>
                  <strong>Collaboration:</strong> Always open to cultural preservation projects and partnerships.
                </div>
                <div>
                  <strong>Tools & Code:</strong> Happy to discuss technical aspects or share implementation details.
                </div>
              </div>
            </div>

            {/* Common Topics */}
            <div>
              <h2 style={{ marginBottom: '24px' }}>Common Topics</h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}>

                <div style={{
                  padding: '20px',
                  background: '#f9f9f9',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--line)'
                }}>
                  <h3 style={{
                    marginBottom: '12px',
                    fontSize: 'var(--step-0)',
                    color: 'var(--accent)'
                  }}>
                    🏛️ Cultural Preservation
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 'var(--step--1)',
                    color: 'var(--muted)'
                  }}>
                    Questions about digital archiving, traditional knowledge documentation,
                    or community collaboration projects.
                  </p>
                </div>

                <div style={{
                  padding: '20px',
                  background: '#f9f9f9',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--line)'
                }}>
                  <h3 style={{
                    marginBottom: '12px',
                    fontSize: 'var(--step-0)',
                    color: 'var(--accent)'
                  }}>
                    🔧 Tool Development
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 'var(--step--1)',
                    color: 'var(--muted)'
                  }}>
                    Technical discussions, feature requests, bug reports,
                    or ideas for new productivity and learning tools.
                  </p>
                </div>

                <div style={{
                  padding: '20px',
                  background: '#f9f9f9',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--line)'
                }}>
                  <h3 style={{
                    marginBottom: '12px',
                    fontSize: 'var(--step-0)',
                    color: 'var(--accent)'
                  }}>
                    📚 Library & Content
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 'var(--step--1)',
                    color: 'var(--muted)'
                  }}>
                    Submissions for the cultural library, author inquiries,
                    content partnerships, or licensing discussions.
                  </p>
                </div>

                <div style={{
                  padding: '20px',
                  background: '#f9f9f9',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--line)'
                }}>
                  <h3 style={{
                    marginBottom: '12px',
                    fontSize: 'var(--step-0)',
                    color: 'var(--accent)'
                  }}>
                    🤝 Collaborations
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 'var(--step--1)',
                    color: 'var(--muted)'
                  }}>
                    Partnership opportunities, speaking engagements,
                    research collaborations, or joint projects.
                  </p>
                </div>

                <div style={{
                  padding: '20px',
                  background: '#f9f9f9',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--line)'
                }}>
                  <h3 style={{
                    marginBottom: '12px',
                    fontSize: 'var(--step-0)',
                    color: 'var(--accent)'
                  }}>
                    🌍 Cultural Exchange
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 'var(--step--1)',
                    color: 'var(--muted)'
                  }}>
                    Share your cultural heritage, learn about Bubi culture,
                    or discuss cross-cultural understanding initiatives.
                  </p>
                </div>

                <div style={{
                  padding: '20px',
                  background: '#f9f9f9',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--line)'
                }}>
                  <h3 style={{
                    marginBottom: '12px',
                    fontSize: 'var(--step-0)',
                    color: 'var(--accent)'
                  }}>
                    💡 Just Saying Hi
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: 'var(--step--1)',
                    color: 'var(--muted)'
                  }}>
                    Random thoughts, feedback about the site,
                    or just want to introduce yourself. Always welcome!
                  </p>
                </div>

              </div>
            </div>

            {/* Personal Note */}
            <div style={{
              marginTop: '40px',
              padding: '24px',
              background: 'rgba(163, 84, 44, 0.05)',
              borderRadius: 'var(--radius)',
              border: '1px solid rgba(163, 84, 44, 0.2)',
              textAlign: 'center'
            }}>
              <h3 style={{
                marginBottom: '16px',
                fontSize: 'var(--step-0)',
                color: 'var(--accent)'
              }}>
                🙏 A Personal Note
              </h3>
              <p style={{
                margin: 0,
                fontSize: 'var(--step--1)',
                color: 'var(--muted)',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: '1.6'
              }}>
                Whether you&apos;re here to share your culture, build something together,
                or just curious about what I&apos;m working on, I genuinely appreciate you taking
                the time to reach out. Every conversation helps make this project better.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}