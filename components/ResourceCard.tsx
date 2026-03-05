import { LibraryResource } from '@/lib/library';
import Image from 'next/image';
import Link from 'next/link';

interface ResourceCardProps {
  resource: LibraryResource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const formatPrice = (price: number) => {
    return price === 0 ? 'Free' : `$${price.toFixed(2)}`;
  };

  const getCategoryIcon = (category: LibraryResource['category']) => {
    const icons = {
      language: '📚',
      culture: '🎭',
      history: '📜',
      education: '🎓',
      stories: '📖'
    };
    return icons[category] || '📄';
  };

  return (
    <Link
      href={`/library/resource/${resource.id}`}
      className="card"
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
    >
      {/* Cover Image */}
      <div style={{ position: 'relative', aspectRatio: '3/4', borderBottom: '1px solid var(--line)' }}>
        <Image
          src={resource.coverImage}
          alt={`${resource.title} cover`}
          fill
          style={{ objectFit: 'cover' }}
        />
        {resource.price === 0 && (
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: 'var(--accent)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: 'var(--step--1)',
            fontWeight: '600'
          }}>
            FREE
          </div>
        )}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: 'var(--step--1)'
        }}>
          {getCategoryIcon(resource.category)}
        </div>
      </div>

      {/* Content */}
      <div className="card-body">
        <h3 style={{ marginBottom: '8px', fontSize: 'var(--step-0)', lineHeight: '1.3' }}>
          {resource.title}
        </h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          {resource.author.avatar && (
            <Image
              src={resource.author.avatar}
              alt={resource.author.name}
              width={24}
              height={24}
              style={{ borderRadius: '50%' }}
            />
          )}
          <span style={{ fontSize: 'var(--step--1)', color: 'var(--muted)' }}>
            {resource.author.name}
          </span>
        </div>

        <p style={{
          fontSize: 'var(--step--1)',
          lineHeight: '1.4',
          color: 'var(--muted)',
          marginBottom: '12px',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          textOverflow: 'ellipsis'
        }}>
          {resource.description}
        </p>

        {/* Metadata */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 'var(--step--1)', color: 'var(--muted)' }}>
            {resource.pageCount && `${resource.pageCount} pages`}
            {resource.culturalOrigin && (
              <div style={{ marginTop: '2px' }}>
                📍 {resource.culturalOrigin}
              </div>
            )}
          </div>
          <div style={{
            fontSize: 'var(--step-0)',
            fontWeight: '700',
            color: resource.price === 0 ? 'var(--accent)' : 'var(--ink)'
          }}>
            {formatPrice(resource.price)}
          </div>
        </div>

        {/* Tags */}
        {resource.tags.length > 0 && (
          <div style={{ marginTop: '12px' }}>
            <div style={{
              display: 'flex',
              gap: '6px',
              flexWrap: 'wrap'
            }}>
              {resource.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  style={{
                    fontSize: 'var(--step--1)',
                    background: '#f0f0f0',
                    color: 'var(--muted)',
                    padding: '2px 6px',
                    borderRadius: '3px',
                    textTransform: 'lowercase'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}