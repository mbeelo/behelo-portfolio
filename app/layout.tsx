import type { Metadata } from 'next';
import './globals.css';
import { Inter, Cormorant_Garamond, DM_Mono } from 'next/font/google';
// ShoppingCart and Auth removed for portfolio-only launch
import Analytics, { CookieConsent } from '@/components/Analytics';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700']
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500']
});

export const metadata: Metadata = {
  title: {
    default: 'Behelo - Voice Actor, Builder & Artist',
    template: '%s | Behelo'
  },
  description: 'Voice actor, builder, and artist crafting stories, tools & asymmetric bets. Based in Oakland. Creating digital tools like Task Roulette, ChainFlow, Eduba, and TrustRight.',
  keywords: ['voice actor', 'audiobook narration', 'digital tools', 'productivity apps', 'artist', 'product development', 'Oakland', 'web development', 'task management', 'learning tools'],
  authors: [{ name: 'Behelo' }],
  creator: 'Behelo',
  publisher: 'Behelo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://behelo.com',
    siteName: 'Behelo Portfolio',
    title: 'Behelo - Voice Actor, Builder & Artist',
    description: 'Voice actor, builder, and artist crafting stories, tools & asymmetric bets. Based in Oakland.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://behelo.com'}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Behelo - Cultural Heritage Tools & Digital Library'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@michaelebako',
    creator: '@michaelebako',
    title: 'Behelo - Voice Actor, Builder & Artist',
    description: 'Voice actor, builder, and artist crafting stories, tools & asymmetric bets.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://behelo.com'}/og-image.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Behelo",
    "description": "Voice actor, builder, and artist crafting stories, tools & asymmetric bets",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://behelo.com",
    "jobTitle": "Voice Actor, Builder & Artist",
    "worksFor": {
      "@type": "Organization",
      "name": "Independent"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Oakland",
      "addressRegion": "CA"
    },
    "knowsAbout": ["Voice Acting", "Web Development", "Digital Tools", "Product Development", "Art"],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Voice Actor"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable} ${dmMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
        <Analytics gtmId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        <CookieConsent />
      </body>
    </html>
  );
}
