'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in production
    console.error(error);
  }, [error]);

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
            Oops!
          </h1>
          <h2 style={{ marginBottom: '24px' }}>
            Something went wrong
          </h2>
          <p style={{
            marginBottom: '32px',
            color: 'var(--muted)',
            fontSize: 'var(--step-0)'
          }}>
            We encountered an unexpected error. Don&rsquo;t worry, it&rsquo;s not you - it&rsquo;s us.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => reset()}
              style={{
                padding: '12px 24px',
                background: 'var(--accent)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: 'var(--step-0)',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Try again
            </button>
            <Link
              href="/"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: 'white',
                color: 'var(--ink)',
                textDecoration: 'none',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                fontSize: 'var(--step-0)',
                fontWeight: '600'
              }}
            >
              Back to Home
            </Link>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <div style={{
              marginTop: '48px',
              padding: '16px',
              background: '#f8f8f8',
              borderRadius: '8px',
              textAlign: 'left',
              fontSize: 'var(--step--1)',
              fontFamily: 'monospace',
              border: '1px solid #ddd'
            }}>
              <strong>Error details (dev only):</strong>
              <br />
              {error.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}