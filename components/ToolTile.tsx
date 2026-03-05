import Button from './Button';
import Image from 'next/image';

interface ToolTileProps {
  name: string;
  description: string;
  thumbnail: string;
  status: 'live' | 'prototype' | 'coming soon';
  ctaText: string;
  ctaHref?: string;
}

export default function ToolTile({
  name,
  description,
  thumbnail,
  status,
  ctaText,
  ctaHref
}: ToolTileProps) {
  const statusColors = {
    live: '#10B981',
    prototype: '#F59E0B',
    'coming soon': '#6B7280'
  };

  return (
    <div className="card">
      <div className="card-body" style={{ padding: '14px 14px 0 14px' }}>
        <h3 style={{ marginBottom: '12px' }}>{name}</h3>
      </div>
      <div className="card-media">
        <Image
          src={thumbnail}
          alt={`${name} preview`}
          width={400}
          height={225}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="card-body">
        <p style={{ marginBottom: '12px', fontSize: 'var(--step--1)', lineHeight: '1.5' }}>
          {description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {ctaHref ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '8px 18px',
                border: '1px solid var(--accent)',
                borderRadius: '6px',
                background: 'white',
                color: 'var(--accent)',
                textDecoration: 'none',
                fontSize: 'var(--step--1)',
                fontWeight: '600',
                transition: 'background 0.2s ease',
                display: 'inline-block'
              }}
            >
              {ctaText}
            </a>
          ) : (
            <span style={{
              padding: '8px 18px',
              border: '1px solid var(--muted)',
              borderRadius: '6px',
              background: 'white',
              color: 'var(--muted)',
              fontSize: 'var(--step--1)',
              fontWeight: '600',
              display: 'inline-block'
            }}>
              {ctaText}
            </span>
          )}
          <span
            style={{
              fontSize: 'var(--step--1)',
              fontWeight: '600',
              color: statusColors[status],
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}