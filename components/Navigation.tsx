'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  currentView?: 'work' | 'info';
  onViewChange?: (view: 'work' | 'info') => void;
  showPortfolioNav?: boolean;
}

export default function Navigation({ currentView = 'work', onViewChange, showPortfolioNav = false }: NavigationProps) {
  const [showContactMenu, setShowContactMenu] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.8) 100%)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line)',
      zIndex: 1000,
      padding: '16px 0'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: '2rem'
      }}>
        {/* Left: Brand Name */}
        <div style={{ justifySelf: 'start' }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--step-0)',
              fontWeight: '600',
              color: 'var(--ink)',
              textDecoration: 'none',
              letterSpacing: '-0.02em', // Match hero's tight tracking for luxury feel
              textTransform: 'uppercase'
            }}
          >
            Behelo
          </Link>
        </div>

        {/* Center: Portfolio Navigation (only on homepage) */}
        {showPortfolioNav && isHomePage && (
          <div style={{
            display: 'flex',
            gap: '2rem',
            justifySelf: 'center'
          }}>
            <button
              onClick={() => onViewChange?.('work')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--step--1)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: currentView === 'work' ? 'var(--ink)' : 'var(--muted)',
                background: 'none',
                border: 'none',
                padding: '0',
                cursor: 'pointer',
                borderBottom: currentView === 'work' ? '1px solid var(--ink)' : '1px solid transparent',
                transition: 'all 0.3s ease'
              }}
            >
              Work
            </button>
            <button
              onClick={() => onViewChange?.('info')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--step--1)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: currentView === 'info' ? 'var(--ink)' : 'var(--muted)',
                background: 'none',
                border: 'none',
                padding: '0',
                cursor: 'pointer',
                borderBottom: currentView === 'info' ? '1px solid var(--ink)' : '1px solid transparent',
                transition: 'all 0.3s ease'
              }}
            >
              Info
            </button>
          </div>
        )}

        {/* Library Link (when not on homepage) - Coming Soon */}
        {/* {!isHomePage && (
          <div style={{ justifySelf: 'center' }}>
            <Link
              href="/library"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--step--1)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: isLibraryPage ? 'var(--ink)' : 'var(--muted)',
                textDecoration: 'none',
                borderBottom: isLibraryPage ? '1px solid var(--ink)' : '1px solid transparent',
                transition: 'all 0.3s ease'
              }}
            >
              Library
            </Link>
          </div>
        )} */}

        {/* Right: Contact Menu */}
        <div style={{
          justifySelf: 'end'
        }}>
          {/* Contact Menu (on homepage) */}
          {isHomePage && (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setShowContactMenu(!showContactMenu)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid var(--line)',
                  background: 'var(--bg)',
                  color: 'var(--ink)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--step--1)',
                  transition: 'all 0.3s ease'
                }}
              >
                {showContactMenu ? '×' : '@'}
              </button>

              {showContactMenu && (
                <>
                  {/* Backdrop */}
                  <div
                    onClick={() => setShowContactMenu(false)}
                    style={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: -1
                    }}
                  />

                  {/* Contact Dropdown */}
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '8px',
                    background: 'var(--bg)',
                    border: '1px solid var(--line)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-lifted)',
                    minWidth: '180px',
                    zIndex: 1001
                  }}>
                    <div style={{ padding: '12px 0' }}>
                      <a
                        href="https://www.linkedin.com/in/michael-ebako/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setShowContactMenu(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '8px 16px',
                          textDecoration: 'none',
                          color: 'var(--ink)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--step--1)',
                          transition: 'background 0.3s ease'
                        }}
                      >
                        <span>LinkedIn</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>↗</span>
                      </a>
                      <a
                        href="mailto:michael@behelo.com"
                        onClick={() => setShowContactMenu(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '8px 16px',
                          textDecoration: 'none',
                          color: 'var(--ink)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--step--1)',
                          transition: 'background 0.3s ease'
                        }}
                      >
                        <span>Email</span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>↗</span>
                      </a>
                      {/* <Link
                        href="/library"
                        onClick={() => setShowContactMenu(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '8px 16px',
                          textDecoration: 'none',
                          color: 'var(--ink)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--step--1)',
                          transition: 'background 0.3s ease'
                        }}
                      >
                        <span>Library</span>
                      </Link> */}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Library/Auth removed - portfolio only launch */}
        </div>
      </div>
    </nav>
  );
}