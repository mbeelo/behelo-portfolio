import Image from 'next/image';
import { Tool } from '@/lib/tools';

interface ProjectShowcaseCardProps extends Tool {
  year?: string;
  category?: string;
}

export default function ProjectShowcaseCard({
  name = 'Untitled Project',
  description = 'Project description',
  thumbnail = '/placeholder.png',
  status = 'coming soon',
  ctaText = 'Coming Soon',
  ctaHref,
  year = '2024',
  category = 'Digital Tool'
}: ProjectShowcaseCardProps) {
  const statusConfig = {
    live: { color: 'var(--status-live)', text: 'LIVE' },
    prototype: { color: 'var(--status-progress)', text: 'PROTOTYPE' },
    'coming soon': { color: 'var(--status-coming)', text: 'COMING SOON' }
  };

  const statusInfo = statusConfig[status];

  const handleClick = () => {
    if (ctaHref) {
      window.open(ctaHref, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article
      className="project-card"
      data-status={status}
      onClick={handleClick}
      style={{
        cursor: ctaHref ? 'pointer' : 'default',
        background: 'var(--card-bg)',
        borderRadius: 'var(--radius)',
        padding: '2rem',
        border: '1px solid var(--line)',
        transition: 'background 0.3s ease'
      }}
    >
      {/* Project info header - above the mockup */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '1.5rem'
        }}
      >
        <div>
          {/* Project title */}
          <h3
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--step-2)',
              fontWeight: '600',
              color: 'var(--ink)',
              margin: '0 0 0.5rem 0',
              letterSpacing: '0.05em'
            }}
          >
            {name}
          </h3>

          {/* Meta information */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--step--2)',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              {category}, &rsquo;{year.toString().slice(-2)}
            </span>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--step--2)',
                color: 'var(--muted)',
                marginLeft: '1rem'
              }}
            >
              {description}
            </span>
          </div>
        </div>

        {/* Arrow indicator */}
        {ctaHref && (
          <div
            style={{
              fontSize: '1.5rem',
              color: 'var(--muted)',
              transition: 'transform 0.3s ease, color 0.3s ease'
            }}
            className="project-arrow"
          >
            →
          </div>
        )}
      </div>

      {/* Desktop browser mockup container */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16 / 10',
          background: '#2a2a2a',
          borderRadius: 'var(--radius)',
          padding: '1rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Browser chrome header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.75rem 1rem',
            background: '#1a1a1a',
            borderRadius: '8px 8px 0 0',
            marginBottom: '1px'
          }}
        >
          {/* Traffic lights */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ca3f' }} />
          </div>

          {/* Address bar */}
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
              {name?.toLowerCase().replace(/\s+/g, '') || 'app'}.com
            </span>
          </div>
        </div>

        {/* Screenshot container */}
        <div
          style={{
            width: '100%',
            height: 'calc(100% - 60px)',
            borderRadius: '0 0 8px 8px',
            overflow: 'hidden',
            background: '#f0f0f0'
          }}
        >
          <Image
            src={thumbnail}
            alt={`${name} project screenshot`}
            width={1200}
            height={750}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
            priority
          />
        </div>

      </div>

      <style jsx>{`
        .project-card:hover {
          background: var(--card-hover) !important;
        }

        .project-card:hover .project-arrow {
          transform: translateX(4px) !important;
          color: var(--ink) !important;
        }

        .project-card:hover img {
          transform: scale(1.02) !important;
        }
      `}</style>
    </article>
  );
}