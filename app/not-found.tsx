import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: 'var(--step-4)',
            marginBottom: '16px',
            color: 'var(--muted)'
          }}>
            404
          </h1>
          <h2 style={{ marginBottom: '24px' }}>
            Page not found
          </h2>
          <p style={{
            marginBottom: '32px',
            color: 'var(--muted)',
            fontSize: 'var(--step-0)'
          }}>
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link
              href="/"
              className="btn-outline"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: 'var(--accent)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: 'var(--step-0)',
                fontWeight: '600',
                border: 'none'
              }}
            >
              ← Back to Home
            </Link>
          </div>

          <div style={{
            marginTop: '48px',
            padding: '24px',
            background: 'rgba(163, 84, 44, 0.05)',
            borderRadius: 'var(--radius)',
            border: '1px solid rgba(163, 84, 44, 0.2)'
          }}>
            <h3 style={{
              marginBottom: '8px',
              fontSize: 'var(--step-0)',
              color: 'var(--accent)'
            }}>
              Looking for something specific?
            </h3>
            <p style={{
              margin: '0',
              fontSize: 'var(--step--1)',
              color: 'var(--muted)'
            }}>
              Check out our <Link href="/" className="underline">tools collection</Link> or browse the <Link href="/library" className="underline">cultural library</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}