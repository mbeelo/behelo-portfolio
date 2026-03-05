import { notFound } from 'next/navigation';
import { getResourceById, libraryResources } from '@/lib/library';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return libraryResources.map((resource) => ({
    id: resource.id,
  }));
}

export default async function ResourcePage({ params }: PageProps) {
  const { id } = await params;
  const resource = getResourceById(id);

  if (!resource) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return price === 0 ? 'Free Download' : `$${price.toFixed(2)}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Breadcrumb */}
      <section style={{ paddingTop: '40px', paddingBottom: '20px' }}>
        <div className="container">
          <nav style={{ fontSize: 'var(--step--1)', color: 'var(--muted)' }}>
            <Link href="/library" className="underline">Library</Link>
            {' / '}
            <Link href="/library/browse" className="underline">Browse</Link>
            {' / '}
            <span>{resource.title}</span>
          </nav>
        </div>
      </section>

      {/* Resource Details */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '40px',
            '@media (max-width: 768px)': {
              gridTemplateColumns: '1fr'
            }
          } as React.CSSProperties}>

            {/* Cover Image */}
            <div>
              <div style={{
                position: 'relative',
                aspectRatio: '3/4',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                border: '1px solid var(--line)',
                marginBottom: '20px'
              }}>
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
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: 'var(--step--1)',
                    fontWeight: '600'
                  }}>
                    FREE
                  </div>
                )}
              </div>

              {/* Purchase/Download Section */}
              <div style={{
                padding: '20px',
                background: '#f9f9f9',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--line)'
              }}>
                <div style={{
                  fontSize: 'var(--step-2)',
                  fontWeight: '700',
                  marginBottom: '12px',
                  color: resource.price === 0 ? 'var(--accent)' : 'var(--ink)'
                }}>
                  {formatPrice(resource.price)}
                </div>

                <Button
                  variant="outline"
                  href={`/library/checkout/${resource.id}`}
                  style={{ width: '100%', marginBottom: '12px' }}
                >
                  {resource.price === 0 ? 'Get Free Copy' : 'Purchase'}
                </Button>

                {resource.previewUrl && (
                  <Button
                    variant="text"
                    href={resource.previewUrl}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Preview Pages →
                  </Button>
                )}

                <div style={{
                  marginTop: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--line)',
                  fontSize: 'var(--step--1)',
                  color: 'var(--muted)'
                }}>
                  <div style={{ marginBottom: '8px' }}>
                    📄 {resource.pageCount} pages
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                    🌍 {resource.language}
                  </div>
                  <div>
                    📅 Published {formatDate(resource.publishedDate)}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h1 style={{ marginBottom: '16px' }}>{resource.title}</h1>

              {/* Author Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px',
                padding: '16px',
                background: '#f9f9f9',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--line)'
              }}>
                {resource.author.avatar && (
                  <Image
                    src={resource.author.avatar}
                    alt={resource.author.name}
                    width={48}
                    height={48}
                    style={{ borderRadius: '50%' }}
                  />
                )}
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '4px' }}>
                    {resource.author.name}
                  </div>
                  {resource.author.bio && (
                    <div style={{ fontSize: 'var(--step--1)', color: 'var(--muted)' }}>
                      {resource.author.bio}
                    </div>
                  )}
                </div>
              </div>

              {/* Cultural Origin */}
              {resource.culturalOrigin && (
                <div style={{
                  marginBottom: '20px',
                  padding: '12px 16px',
                  background: 'rgba(163, 84, 44, 0.1)',
                  borderLeft: '4px solid var(--accent)',
                  borderRadius: '0 6px 6px 0'
                }}>
                  <div style={{ fontSize: 'var(--step--1)', fontWeight: '600', marginBottom: '4px' }}>
                    Cultural Heritage
                  </div>
                  <div style={{ fontSize: 'var(--step-0)' }}>
                    📍 {resource.culturalOrigin}
                  </div>
                </div>
              )}

              {/* Description */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ marginBottom: '12px' }}>About This Resource</h3>
                <p style={{ lineHeight: '1.6' }}>
                  {resource.description}
                </p>
              </div>

              {/* Tags */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ marginBottom: '12px' }}>Topics</h3>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {resource.tags.map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        fontSize: 'var(--step--1)',
                        background: '#f0f0f0',
                        color: 'var(--muted)',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: '1px solid var(--line)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download Stats */}
              <div style={{
                padding: '16px',
                background: '#f9f9f9',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--line)'
              }}>
                <div style={{ fontSize: 'var(--step--1)', color: 'var(--muted)' }}>
                  📊 Downloaded by {resource.downloadCount.toLocaleString()} readers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Library */}
      <section style={{ paddingBottom: '40px' }}>
        <div className="container">
          <Link href="/library/browse" className="btn-text">
            ← Back to Library
          </Link>
        </div>
      </section>
    </>
  );
}