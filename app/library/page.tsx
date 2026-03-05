import { getFeaturedResources, getFreeResources, libraryCategories } from '@/lib/library';
import ResourceCard from '@/components/ResourceCard';
import Link from 'next/link';

export default function LibraryPage() {
  const featuredResources = getFeaturedResources();
  const freeResources = getFreeResources();

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Digital Library</h1>
          <div className="entry">
            <div className="entry-meaning">
              Preserving and sharing cultural knowledge through books, stories, and educational resources.
              Discover the rich heritage of the Bubi people and other cultures.
            </div>
          </div>
          <div className="actions" style={{ marginTop: '20px' }}>
            <Link href="/library/browse" className="btn-outline">
              Browse All Resources
            </Link>
            <Link href="/library/free" className="btn-text">
              Free Resources →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <h2>Explore by Category</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '16px'
          }}>
            {libraryCategories.map((category) => (
              <Link
                key={category.id}
                href={`/library/category/${category.id}`}
                className="card"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  padding: '20px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>
                  {category.icon}
                </div>
                <h3 style={{ marginBottom: '8px', fontSize: 'var(--step-0)' }}>
                  {category.name}
                </h3>
                <p style={{ fontSize: 'var(--step--1)', color: 'var(--muted)', margin: 0 }}>
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2>Featured Resources</h2>
            <Link href="/library/browse" className="small underline">
              View all →
            </Link>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2>Free Resources</h2>
            <Link href="/library/free" className="small underline">
              View all →
            </Link>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {freeResources.slice(0, 3).map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div style={{
            textAlign: 'center',
            padding: '40px',
            background: '#f9f9f9',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--line)'
          }}>
            <h2 style={{ marginBottom: '12px' }}>Share Your Knowledge</h2>
            <p style={{ marginBottom: '20px', color: 'var(--muted)' }}>
              Are you an author, researcher, or cultural keeper? We&apos;d love to help you share your work.
            </p>
            <Link href="mailto:library@behelo.com" className="btn-outline">
              Submit Your Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}