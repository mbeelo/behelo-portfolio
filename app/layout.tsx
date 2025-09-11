import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Behelo',
  description: 'Art, experiments, and projects by Behelo.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <main>{children}</main>
        <footer className="footer">
              <div className="container" style={{ textAlign: 'left' }}>
                {/* Signature dictionary — understated, like a letter closing */}
                <div className="signature">
                <div className="sig-sep" aria-hidden="true">—</div>
                <div className="entry entry--small">
                <div className="entry-line small">
                  <span className="entry-term">Behelo</span>
                  <span className="entry-meta">(Beh·eh·lo) (verb)</span>
                </div>
                <div className="entry-line small">
                  <span className="entry-meta">Origin:</span> Bubi (Bööbe), Equatorial Guinea
                </div>
                <p className="entry-meaning">Meaning: to be wanted</p>
                <p className="entry-note">Importance: It's my name.</p>
              </div>
            </div>

            <div className="copyright">
              © 2025 Behelo — Built on my own terms.
            </div>

          </div>
        </footer>
      </body>
    </html>
  );
}
