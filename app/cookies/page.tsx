export default function CookiePolicyPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Cookie Policy</h1>
          <p style={{ fontSize: 'var(--step-0)', color: 'var(--muted)', marginTop: '8px' }}>
            Last updated: January 9, 2026
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>

            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit our website.
              They help us provide you with a better experience by remembering your preferences
              and understanding how you use our platform.
            </p>

            <h2>How We Use Cookies</h2>
            <p>
              Behelo uses cookies to enhance your experience, improve our services, and support
              our cultural preservation mission. We use cookies for:
            </p>

            <h3>Essential Cookies (Always Active)</h3>
            <p>These cookies are necessary for our website to function properly:</p>
            <ul>
              <li><strong>Authentication:</strong> Keep you logged in during your session</li>
              <li><strong>Security:</strong> Protect against fraud and unauthorized access</li>
              <li><strong>Shopping Cart:</strong> Remember items you&apos;ve added to your cart</li>
              <li><strong>Preferences:</strong> Remember your language and display preferences</li>
            </ul>

            <h3>Analytics Cookies</h3>
            <p>These cookies help us understand how visitors use our platform:</p>
            <ul>
              <li><strong>Usage Analytics:</strong> Track page views, time spent, and navigation patterns</li>
              <li><strong>Performance Monitoring:</strong> Identify technical issues and slow pages</li>
              <li><strong>Content Engagement:</strong> Understand which cultural resources are most popular</li>
              <li><strong>User Journey:</strong> Improve the discovery and purchase process</li>
            </ul>

            <h3>Marketing Cookies</h3>
            <p>These cookies help us show you relevant content and measure campaign effectiveness:</p>
            <ul>
              <li><strong>Personalization:</strong> Recommend resources based on your interests</li>
              <li><strong>Email Marketing:</strong> Track email campaign performance</li>
              <li><strong>Social Media:</strong> Enable sharing and track social media referrals</li>
              <li><strong>Advertising:</strong> Measure the effectiveness of our outreach efforts</li>
            </ul>

            <h2>Types of Cookies We Use</h2>

            <h3>Session Cookies</h3>
            <ul>
              <li>Temporary cookies that expire when you close your browser</li>
              <li>Used for essential website functionality and security</li>
              <li>Cannot be used to identify you across different browsing sessions</li>
            </ul>

            <h3>Persistent Cookies</h3>
            <ul>
              <li>Remain on your device for a set period or until you delete them</li>
              <li>Used to remember your preferences and improve your experience</li>
              <li>Help us recognize you when you return to our platform</li>
            </ul>

            <h3>First-Party Cookies</h3>
            <ul>
              <li>Set directly by Behelo when you visit our website</li>
              <li>Used for core functionality and basic analytics</li>
              <li>Not shared with other websites or services</li>
            </ul>

            <h3>Third-Party Cookies</h3>
            <ul>
              <li>Set by external services we use (analytics, payment processing)</li>
              <li>Subject to the privacy policies of those third-party services</li>
              <li>Used for advanced analytics and payment processing</li>
            </ul>

            <h2>Specific Cookies We Use</h2>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', margin: '16px 0' }}>
                <thead>
                  <tr style={{ background: '#f9f9f9', borderBottom: '1px solid var(--line)' }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontSize: 'var(--step--1)' }}>Cookie Name</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontSize: 'var(--step--1)' }}>Purpose</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontSize: 'var(--step--1)' }}>Duration</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontSize: 'var(--step--1)' }}>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>behelo_session</td>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>User authentication</td>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>Session</td>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>Essential</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>behelo_cart</td>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>Shopping cart contents</td>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>7 days</td>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>Essential</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>behelo_preferences</td>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>Language and display settings</td>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>1 year</td>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>Functional</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>_ga</td>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>Google Analytics tracking</td>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>2 years</td>
                    <td style={{ padding: '12px', fontSize: 'var(--step--1)' }}>Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Managing Your Cookie Preferences</h2>

            <h3>Browser Settings</h3>
            <p>You can control cookies through your browser settings:</p>
            <ul>
              <li><strong>Block All Cookies:</strong> Prevent all cookies from being stored</li>
              <li><strong>Block Third-Party Cookies:</strong> Allow only our cookies</li>
              <li><strong>Delete Existing Cookies:</strong> Remove cookies already stored</li>
              <li><strong>Receive Notifications:</strong> Be alerted when cookies are set</li>
            </ul>

            <h3>Cookie Preference Center</h3>
            <p>
              We provide a cookie preference center where you can:
            </p>
            <ul>
              <li>Choose which types of cookies to accept</li>
              <li>Update your preferences at any time</li>
              <li>Learn more about each cookie category</li>
              <li>Withdraw consent for non-essential cookies</li>
            </ul>

            <div style={{
              background: '#f9f9f9',
              padding: '20px',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--line)',
              marginTop: '24px',
              textAlign: 'center'
            }}>
              <h4>Manage Cookie Preferences</h4>
              <a
                href="#cookie-settings"
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  background: 'var(--accent)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontSize: 'var(--step--1)',
                  fontWeight: '600'
                }}
              >
                Update Cookie Settings
              </a>
            </div>

            <h3>Impact of Disabling Cookies</h3>
            <p>
              If you disable certain cookies, some features may not work properly:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Website may not function correctly</li>
              <li><strong>Functional Cookies:</strong> Preferences and settings won&apos;t be remembered</li>
              <li><strong>Analytics Cookies:</strong> We can&apos;t improve the user experience</li>
              <li><strong>Marketing Cookies:</strong> Less relevant content recommendations</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>We work with trusted third-party services that may set their own cookies:</p>

            <h3>Analytics Services</h3>
            <ul>
              <li><strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
              <li><strong>Hotjar:</strong> User experience and heatmap analysis</li>
            </ul>

            <h3>Payment Processing</h3>
            <ul>
              <li><strong>Stripe:</strong> Secure payment processing and fraud prevention</li>
            </ul>

            <h3>Email Services</h3>
            <ul>
              <li><strong>Mailchimp:</strong> Email marketing and newsletter management</li>
            </ul>

            <h2>Children&apos;s Privacy</h2>
            <p>
              We do not knowingly collect information from children under 16.
              If you are under 16, please do not provide any information through our cookies
              or website without parental consent.
            </p>

            <h2>Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in
              technology, law, or our practices. We will notify you of significant changes
              through our website or via email.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><strong>Email:</strong> privacy@behelo.com</li>
              <li><strong>Subject:</strong> Cookie Policy Question</li>
            </ul>

            <div style={{
              background: 'rgba(163, 84, 44, 0.1)',
              padding: '20px',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--accent)',
              marginTop: '32px'
            }}>
              <h3>Supporting Cultural Preservation</h3>
              <p style={{ margin: 0, fontSize: 'var(--step--1)' }}>
                The data we collect through cookies helps us understand how people engage
                with cultural content, allowing us to better serve communities and authors
                working to preserve traditional knowledge and cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}