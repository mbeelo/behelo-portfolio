'use client';

import Script from 'next/script';
import { useState, useEffect } from 'react';

interface AnalyticsProps {
  gtmId?: string;
}

export default function Analytics({ gtmId }: AnalyticsProps) {
  // Don't load analytics in development
  if (process.env.NODE_ENV !== 'production' || !gtmId) {
    return null;
  }

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtmId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}

// Cookie consent banner component
export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Check if user has already made a choice
    const consentChoice = localStorage.getItem('cookie-consent');
    if (!consentChoice) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  // Don't render anything until mounted (avoids hydration mismatch)
  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        right: '20px',
        background: 'var(--card-bg)',
        border: '1px solid var(--line)',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: 'var(--shadow-lifted)',
        zIndex: 9999,
        fontSize: 'var(--step--1)',
        backdropFilter: 'blur(12px)',
        maxWidth: '500px',
        margin: '0 auto'
      }}
    >
      <p style={{
        margin: '0 0 16px 0',
        color: 'var(--ink)',
        fontFamily: 'var(--font-mono)',
        lineHeight: '1.5'
      }}>
        This site uses cookies to improve your experience and analyze traffic.{' '}
        <a href="/cookies" style={{
          color: 'var(--ink)',
          textDecoration: 'underline',
          textDecorationColor: 'var(--muted)'
        }}>
          Learn more
        </a>
      </p>
      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={handleAccept}
          style={{
            padding: '8px 16px',
            background: 'var(--ink)',
            color: 'var(--bg)',
            border: 'none',
            borderRadius: '6px',
            fontSize: 'var(--step--1)',
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          style={{
            padding: '8px 16px',
            background: 'transparent',
            color: 'var(--muted)',
            border: '1px solid var(--line)',
            borderRadius: '6px',
            fontSize: 'var(--step--1)',
            fontFamily: 'var(--font-mono)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}