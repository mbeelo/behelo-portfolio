import Image from 'next/image';

export default function ProjectShowcase() {
  // Studio projects with refined descriptions and categories
  const projects = [
    {
      number: '01',
      name: 'TaskRoulette',
      category: 'Productivity Tool',
      description: 'A tool for breaking indecision and turning intention into action.',
      year: '2025',
      status: 'live',
      thumbnail: '/task-roulette.png',
      url: 'https://task-roulette.com/?utm_source=behelo&utm_medium=website&utm_campaign=tool_click&utm_content=studio_gallery'
    },
    {
      number: '02',
      name: 'ChainFlow',
      category: 'Workout Timer',
      description: 'Sequential timing system for workouts that flow seamlessly from exercise to exercise.',
      year: '2025',
      status: 'live',
      thumbnail: '/chainflow.png',
      url: 'https://chainflow.app/?utm_source=behelo&utm_medium=website&utm_campaign=tool_click&utm_content=studio_gallery'
    },
    {
      number: '03',
      name: 'Eduba',
      category: 'Learning System',
      description: 'A system for training memory through reading and recall using texts worth learning.',
      year: '2026',
      status: 'live',
      thumbnail: '/eduba.png',
      url: 'https://eduba.co/?utm_source=behelo&utm_medium=website&utm_campaign=tool_click&utm_content=studio_gallery'
    },
    {
      number: '04',
      name: 'AfterImage',
      category: 'Art Training Platform',
      description: 'Daily drawing practice tracker with progress visualization and technique notes.',
      year: '2025',
      status: 'coming soon',
      thumbnail: '/afterimage.png'
    },
    {
      number: '05',
      name: 'TrustRight',
      category: 'Reference Platform',
      description: 'A system for transforming reference failures into lasting knowledge.',
      year: '2026',
      status: 'coming soon',
      thumbnail: '/trustright.png'
    },
    {
      number: '06',
      name: 'Cultural Bookstore',
      category: 'Digital Archive',
      description: 'Digital marketplace for cultural knowledge, stories, and traditions.',
      year: '2026',
      status: 'coming soon',
      thumbnail: '/libraryimg.png'
    }
  ];

  return (
    <section className="section">
      <div className="container-wide">
        {/* Section label */}
        <div className="label" style={{ marginBottom: '5rem' }}>
          Studio Projects
        </div>

        {/* Gallery-style project showcase */}
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.number}
                style={{
                  display: 'grid',
                  gridTemplateColumns: isEven ? '1fr 1.2fr' : '1.2fr 1fr',
                  gap: '4rem',
                  marginBottom: '8rem',
                  alignItems: 'center',
                  opacity: 0,
                  transform: 'translateY(40px)',
                  animation: `fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards ${index * 0.1}s`
                }}
              >
                {/* Project Info */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  {/* Project Number */}
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--step--1)',
                      color: 'var(--muted)',
                      letterSpacing: '0.1em',
                      marginBottom: '1rem'
                    }}
                  >
                    {project.number} — {project.name}
                  </div>

                  {/* Category */}
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--step--2)',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'var(--step-0)',
                      lineHeight: '1.5',
                      color: 'var(--ink)',
                      marginBottom: '2rem',
                      maxWidth: '400px'
                    }}
                  >
                    {project.description}
                  </p>

                  {/* CTA */}
                  {project.status === 'live' && project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--step--1)',
                        color: 'var(--ink)',
                        textDecoration: 'none',
                        borderBottom: '1px solid var(--line)',
                        paddingBottom: '2px',
                        transition: 'border-color 0.3s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      Visit
                      <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>↗</span>
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--step--1)',
                        color: 'var(--muted)',
                        letterSpacing: '0.05em'
                      }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Project Image */}
                <div
                  style={{
                    order: isEven ? 2 : 1,
                    background: '#2a2a2a',
                    borderRadius: 'var(--radius)',
                    padding: '2rem',
                    overflow: 'hidden'
                  }}
                >
                  {/* Browser Chrome */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '1rem',
                      background: '#1a1a1a',
                      borderRadius: '8px 8px 0 0',
                      marginBottom: '1px'
                    }}
                  >
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ca3f' }} />
                    </div>
                    <div
                      style={{
                        flex: 1,
                        height: '24px',
                        background: '#333',
                        borderRadius: '4px',
                        marginLeft: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '0.75rem'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          color: '#888'
                        }}
                      >
                        {project.name.toLowerCase().replace(/\s+/g, '')}.com
                      </span>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div
                    style={{
                      borderRadius: '0 0 8px 8px',
                      overflow: 'hidden',
                      background: '#f0f0f0',
                      aspectRatio: '16/10'
                    }}
                  >
                    <Image
                      src={project.thumbnail}
                      alt={`${project.name} interface`}
                      width={600}
                      height={375}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          div[style*="order"] {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  );
}