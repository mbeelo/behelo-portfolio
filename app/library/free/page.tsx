import { getFreeResources } from '@/lib/library';
import ResourceCard from '@/components/ResourceCard';
import Link from 'next/link';

export default function FreeResourcesPage() {
  const freeResources = getFreeResources();

  return (
    <>
      {/* Header */}
      <section className="hero">
        <div className="container">
          <h1>Free Resources</h1>
          <p style={{ fontSize: 'var(--step-0)', color: 'var(--muted)', marginTop: '8px' }}>
            Explore our collection of {freeResources.length} free cultural and educational resources
          </p>
          <div className="actions" style={{ marginTop: '20px' }}>
            <Link href="/library/browse" className="btn-text">
              ← Browse All Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="section">
        <div className="container">
          {freeResources.length > 0 ? (
            <>
              <div style={{
                background: 'rgba(163, 84, 44, 0.1)',
                padding: '20px',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--accent)',
                marginBottom: '32px',
                textAlign: 'center'
              }}>
                <h3 style={{ marginBottom: '8px', color: 'var(--accent)' }}>
                  🎁 Knowledge Should Be Accessible
                </h3>
                <p style={{ margin: 0, color: 'var(--muted)' }}>
                  These resources are freely available to help preserve and share cultural knowledge.
                  No registration required – just click to download.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px'
              }}>
                {freeResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: 'var(--muted)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📚</div>
              <h3>No free resources available yet</h3>
              <p>Check back soon as we continue to add free cultural resources to our library.</p>
              <div style={{ marginTop: '20px' }}>
                <Link href="/library/browse" className="btn-outline">
                  Browse All Resources
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action for Authors */}
      <section className="section">
        <div className="container">
          <div style={{
            textAlign: 'center',
            padding: '40px',
            background: '#f9f9f9',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--line)'
          }}>
            <h2 style={{ marginBottom: '12px' }}>Share Your Work for Free</h2>
            <p style={{ marginBottom: '20px', color: 'var(--muted)' }}>
              Want to make your cultural knowledge freely accessible? We can help you distribute your work at no cost.
            </p>
            <Link href="mailto:library@behelo.com?subject=Free Resource Submission" className="btn-outline">
              Submit Free Resource
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}