export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p style={{ fontSize: 'var(--step-0)', color: 'var(--muted)', marginTop: '8px' }}>
            Last updated: February 27, 2026
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>

            <h2>Our Commitment to Privacy</h2>
            <p>
              At Behelo, we are committed to preserving cultural heritage and protecting your personal information.
              This Privacy Policy explains how we collect, use, and protect your data when you use our digital library platform.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, and password when you create an account</li>
              <li><strong>Purchase Information:</strong> Billing details and transaction history for resource purchases</li>
              <li><strong>Profile Information:</strong> Optional information you choose to add to your profile</li>
              <li><strong>Communication:</strong> Messages you send us and survey responses</li>
              <li><strong>Usage Information:</strong> How you use our resources (for improvement purposes)</li>
            </ul>

            <h3>Information We Collect Automatically</h3>
            <ul>
              <li><strong>Device Information:</strong> Browser type, operating system, and device identifiers</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent, and interaction patterns</li>
              <li><strong>Location Information:</strong> General location based on IP address (country/region level)</li>
              <li><strong>Cookies:</strong> Small files stored on your device to improve your experience</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li><strong>Service Provision:</strong> Deliver digital resources and manage your account</li>
              <li><strong>Communication:</strong> Send purchase confirmations, updates, and newsletter (if subscribed)</li>
              <li><strong>Improvement:</strong> Analyze usage to improve our platform and user experience</li>
              <li><strong>Legal Compliance:</strong> Comply with legal obligations and protect our rights</li>
              <li><strong>Cultural Mission:</strong> Understand engagement with cultural content to better serve our mission</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information only in these circumstances:</p>
            <ul>
              <li><strong>Authors:</strong> Purchase information with content authors for royalty purposes</li>
              <li><strong>Service Providers:</strong> Trusted third parties who help operate our platform</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfer:</strong> In connection with a sale or merger of our business</li>
            </ul>

            <h2>Your Rights and Choices</h2>
            <h3>European Union Users (GDPR Rights)</h3>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Object to certain processing of your data</li>
              <li><strong>Restriction:</strong> Request limitation of data processing</li>
            </ul>

            <h3>All Users</h3>
            <ul>
              <li><strong>Email Preferences:</strong> Unsubscribe from marketing emails at any time</li>
              <li><strong>Account Control:</strong> Update your profile and communication preferences</li>
              <li><strong>Cookie Management:</strong> Control cookies through your browser settings</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information, including:
            </p>
            <ul>
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and employee training</li>
              <li>Secure payment processing through trusted providers</li>
            </ul>

            <h2>International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence.
              When we transfer personal data internationally, we ensure appropriate safeguards are in place to protect your privacy.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy,
              comply with legal obligations, resolve disputes, and enforce our agreements. Typically:
            </p>
            <ul>
              <li><strong>Account Data:</strong> Until you delete your account, plus up to 30 days</li>
              <li><strong>Transaction Data:</strong> 7 years for tax and legal compliance</li>
              <li><strong>Marketing Data:</strong> Until you unsubscribe or 3 years of inactivity</li>
            </ul>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our platform is not directed to children under 16. We do not knowingly collect personal information from
              children under 16. If you are a parent and believe your child has provided us with personal information,
              please contact us immediately.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by
              email or through our platform. Your continued use of our services after any changes constitutes acceptance
              of the updated policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or want to exercise your rights, please contact us:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>Email:</strong> privacy@behelo.com
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Subject Line:</strong> Privacy Policy Inquiry
              </li>
            </ul>

            <h2>Cultural Heritage Commitment</h2>
            <p>
              As a platform dedicated to cultural preservation, we are especially mindful of the sensitivity of cultural
              information and content. We work closely with cultural communities and authors to ensure respectful handling
              of traditional knowledge and cultural materials.
            </p>

            <div style={{
              background: '#f9f9f9',
              padding: '20px',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--line)',
              marginTop: '32px'
            }}>
              <p style={{ margin: 0, fontSize: 'var(--step--1)', color: 'var(--muted)' }}>
                This Privacy Policy was last updated on January 9, 2026. We encourage you to review this policy
                periodically to stay informed about how we protect your information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}