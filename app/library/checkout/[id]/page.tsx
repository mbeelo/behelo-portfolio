import { notFound } from 'next/navigation';
import { getResourceById, libraryResources } from '@/lib/library';
import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return libraryResources.map((resource) => ({
    id: resource.id,
  }));
}

export default async function CheckoutPage({ params }: PageProps) {
  const { id } = await params;
  const resource = getResourceById(id);

  if (!resource) {
    notFound();
  }

  const isFree = resource.price === 0;

  return (
    <>
      {/* Breadcrumb */}
      <section style={{ paddingTop: '40px', paddingBottom: '20px' }}>
        <div className="container">
          <nav style={{ fontSize: 'var(--step--1)', color: 'var(--muted)' }}>
            <Link href="/library" className="underline">Library</Link>
            {' / '}
            <Link href={`/library/resource/${resource.id}`} className="underline">{resource.title}</Link>
            {' / '}
            <span>Checkout</span>
          </nav>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="section">
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: '40px',
            '@media (max-width: 768px)': {
              gridTemplateColumns: '1fr'
            }
          } as React.CSSProperties}>

            {/* Checkout Form */}
            <div>
              <h1 style={{ marginBottom: '24px' }}>
                {isFree ? 'Get Your Free Copy' : 'Complete Purchase'}
              </h1>

              {isFree && (
                <div style={{
                  background: 'rgba(163, 84, 44, 0.1)',
                  padding: '16px',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--accent)',
                  marginBottom: '24px'
                }}>
                  <h3 style={{ color: 'var(--accent)', marginBottom: '8px' }}>
                    🎁 This Resource is Free
                  </h3>
                  <p style={{ margin: 0, fontSize: 'var(--step--1)' }}>
                    We just need your email to send you the download link and keep you updated on new cultural resources.
                  </p>
                </div>
              )}

              {/* Email Collection Form */}
              <form style={{
                background: '#f9f9f9',
                padding: '24px',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--line)',
                marginBottom: '24px'
              }}>
                <h3 style={{ marginBottom: '16px' }}>Contact Information</h3>

                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="email" style={{
                    display: 'block',
                    fontWeight: '600',
                    marginBottom: '6px'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid var(--line)',
                      borderRadius: '6px',
                      fontSize: 'var(--step-0)'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="name" style={{
                    display: 'block',
                    fontWeight: '600',
                    marginBottom: '6px'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Your full name"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid var(--line)',
                      borderRadius: '6px',
                      fontSize: 'var(--step-0)'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="purpose" style={{
                    display: 'block',
                    fontWeight: '600',
                    marginBottom: '6px'
                  }}>
                    How will you use this resource? (Optional)
                  </label>
                  <select
                    id="purpose"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid var(--line)',
                      borderRadius: '6px',
                      fontSize: 'var(--step-0)'
                    }}
                  >
                    <option value="">Select a purpose</option>
                    <option value="personal-learning">Personal Learning</option>
                    <option value="academic-research">Academic Research</option>
                    <option value="cultural-preservation">Cultural Preservation</option>
                    <option value="education">Education/Teaching</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Newsletter Opt-in */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: 'var(--step--1)'
                  }}>
                    <input
                      type="checkbox"
                      defaultChecked
                      style={{ marginTop: '2px' }}
                    />
                    <span>
                      Yes, I&apos;d like to receive updates about new cultural resources, author spotlights, and community events. (You can unsubscribe anytime)
                    </span>
                  </label>
                </div>
              </form>

              {/* Payment Section (for paid resources) */}
              {!isFree && (
                <div style={{
                  background: '#f9f9f9',
                  padding: '24px',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--line)',
                  marginBottom: '24px'
                }}>
                  <h3 style={{ marginBottom: '16px' }}>Payment Information</h3>
                  <div style={{
                    background: 'white',
                    padding: '20px',
                    borderRadius: '6px',
                    border: '1px dashed var(--line)',
                    textAlign: 'center',
                    color: 'var(--muted)'
                  }}>
                    <p style={{ margin: 0, fontStyle: 'italic' }}>
                      🔧 Stripe payment integration will be implemented here
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'var(--accent)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: 'var(--step-0)',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease'
                }}
              >
                {isFree ? 'Get Free Download Link' : `Complete Purchase - $${resource.price.toFixed(2)}`}
              </button>

              <p style={{
                fontSize: 'var(--step--1)',
                color: 'var(--muted)',
                textAlign: 'center',
                marginTop: '16px'
              }}>
                {isFree ?
                  'Your download link will be sent to your email immediately.' :
                  'Secure payment processing. You\'ll receive your download link via email.'
                }
              </p>
            </div>

            {/* Order Summary */}
            <div>
              <div style={{
                background: '#f9f9f9',
                padding: '20px',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--line)',
                position: 'sticky',
                top: '20px'
              }}>
                <h3 style={{ marginBottom: '16px' }}>Order Summary</h3>

                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <Image
                    src={resource.coverImage}
                    alt={resource.title}
                    width={60}
                    height={80}
                    style={{ borderRadius: '6px', objectFit: 'cover' }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      margin: '0 0 4px 0',
                      fontSize: 'var(--step--1)',
                      lineHeight: '1.3'
                    }}>
                      {resource.title}
                    </h4>
                    <p style={{
                      margin: '0 0 8px 0',
                      fontSize: 'var(--step--1)',
                      color: 'var(--muted)'
                    }}>
                      by {resource.author.name}
                    </p>
                    <div style={{ fontSize: 'var(--step--1)', color: 'var(--muted)' }}>
                      {resource.pageCount} pages • {resource.language}
                    </div>
                  </div>
                </div>

                <div style={{
                  borderTop: '1px solid var(--line)',
                  paddingTop: '16px',
                  marginTop: '16px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span>Subtotal:</span>
                    <span>${resource.price.toFixed(2)}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                    fontSize: 'var(--step--1)',
                    color: 'var(--muted)'
                  }}>
                    <span>Processing fee:</span>
                    <span>$0.00</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontWeight: '700',
                    fontSize: 'var(--step-1)',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--line)'
                  }}>
                    <span>Total:</span>
                    <span style={{
                      color: isFree ? 'var(--accent)' : 'var(--ink)'
                    }}>
                      {isFree ? 'FREE' : `$${resource.price.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                {/* Cultural Impact Message */}
                <div style={{
                  marginTop: '20px',
                  padding: '16px',
                  background: 'rgba(163, 84, 44, 0.1)',
                  borderLeft: '4px solid var(--accent)',
                  borderRadius: '0 6px 6px 0'
                }}>
                  <div style={{ fontSize: 'var(--step--1)', fontWeight: '600', marginBottom: '4px' }}>
                    Supporting Cultural Preservation
                  </div>
                  <div style={{ fontSize: 'var(--step--1)', color: 'var(--muted)' }}>
                    {isFree ?
                      'Thank you for helping preserve cultural knowledge by engaging with this resource.' :
                      `${Math.round(resource.price * 0.7 * 100)/100} goes directly to the author, supporting their cultural preservation work.`
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}