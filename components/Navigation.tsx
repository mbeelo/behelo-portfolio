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
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    // Lock body scroll when mobile menu is open
    if (!showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Close mobile menu when clicking outside or selecting option
  const closeMobileMenu = () => {
    setShowMobileMenu(false);
    document.body.style.overflow = '';
  };

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
      <div
        data-nav-container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
        {/* Brand Name */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--step-0)',
            fontWeight: '600',
            color: 'var(--ink)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase'
          }}
        >
          Behelo
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {/* Portfolio Navigation (only on homepage) */}
          {showPortfolioNav && isHomePage && (
            <div style={{ display: 'flex', gap: '2rem' }}>
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

          {/* Contact Menu */}
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
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="mobile-hamburger"
          onClick={toggleMobileMenu}
          style={{
            display: 'none',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            gap: '4px'
          }}
        >
          <div style={{
            width: '20px',
            height: '2px',
            backgroundColor: 'var(--ink)',
            transition: 'all 0.3s ease',
            transform: showMobileMenu ? 'rotate(45deg) translateY(6px)' : 'none'
          }} />
          <div style={{
            width: '20px',
            height: '2px',
            backgroundColor: 'var(--ink)',
            transition: 'all 0.3s ease',
            opacity: showMobileMenu ? 0 : 1
          }} />
          <div style={{
            width: '20px',
            height: '2px',
            backgroundColor: 'var(--ink)',
            transition: 'all 0.3s ease',
            transform: showMobileMenu ? 'rotate(-45deg) translateY(-6px)' : 'none'
          }} />
        </button>
      </div>

      {/* Full-Screen Mobile Menu Modal */}
      {showMobileMenu && (
        <div
          className="mobile-menu-modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: '#0a0a0a',
            zIndex: 9999,
            transform: showMobileMenu ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease',
            overflow: 'auto'
          }}
          onClick={(e) => {
            // Close modal when clicking on backdrop (but not on content)
            if (e.target === e.currentTarget) {
              closeMobileMenu();
            }
          }}
        >
        {/* Modal Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 2rem',
          borderBottom: '1px solid var(--line)'
        }}>
          <Link
            href="/"
            onClick={closeMobileMenu}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--step-0)',
              fontWeight: '600',
              color: 'var(--ink)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase'
            }}
          >
            Behelo
          </Link>

          <button
            onClick={closeMobileMenu}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--ink)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '8px',
              fontFamily: 'var(--font-mono)'
            }}
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '2rem' }}>
          {/* Portfolio Navigation (only on homepage) */}
          {showPortfolioNav && isHomePage && (
            <div style={{ marginBottom: '3rem' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--step--1)',
                color: 'var(--muted)',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Portfolio
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button
                  onClick={() => {
                    onViewChange?.('work');
                    closeMobileMenu();
                  }}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--step-0)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: currentView === 'work' ? 'var(--ink)' : 'var(--muted)',
                    background: 'none',
                    border: 'none',
                    padding: '12px 0',
                    cursor: 'pointer',
                    textAlign: 'left',
                    borderBottom: '1px solid var(--line)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Work
                </button>
                <button
                  onClick={() => {
                    onViewChange?.('info');
                    closeMobileMenu();
                  }}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--step-0)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: currentView === 'info' ? 'var(--ink)' : 'var(--muted)',
                    background: 'none',
                    border: 'none',
                    padding: '12px 0',
                    cursor: 'pointer',
                    textAlign: 'left',
                    borderBottom: '1px solid var(--line)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Info
                </button>
              </div>
            </div>
          )}

          {/* Contact Section */}
          {isHomePage && (
            <div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--step--1)',
                color: 'var(--muted)',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Connect
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a
                  href="https://www.linkedin.com/in/michael-ebako/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 0',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--step-0)',
                    borderBottom: '1px solid var(--line)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span>LinkedIn</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>↗</span>
                </a>
                <a
                  href="mailto:michael@behelo.com"
                  onClick={closeMobileMenu}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 0',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--step-0)',
                    borderBottom: '1px solid var(--line)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span>Email</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>↗</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      )}
    </nav>

  );
}