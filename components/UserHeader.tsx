'use client';

// import { useAuth } from '@/lib/auth'; // Disabled for portfolio-only launch
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function UserHeader() {
  // const { user, logout } = useAuth(); // Disabled for portfolio-only launch
  const [showDropdown, setShowDropdown] = useState(false);

  // Portfolio-only: no auth needed
  return null;

  if (!user) {
    return (
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 1000,
        display: 'flex',
        gap: '8px'
      }}>
        <Link
          href="/auth/login"
          className="btn-text"
          style={{
            background: 'white',
            padding: '8px 12px',
            borderRadius: '6px',
            boxShadow: 'var(--shadow-1)',
            border: '1px solid var(--line)'
          }}
        >
          Sign In
        </Link>
        <Link
          href="/auth/register"
          className="btn-outline"
          style={{
            background: 'white',
            boxShadow: 'var(--shadow-1)'
          }}
        >
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      zIndex: 1000
    }}>
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'white',
            border: '1px solid var(--line)',
            borderRadius: '8px',
            padding: '8px 12px',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-1)',
            fontSize: 'var(--step--1)'
          }}
        >
          {user.avatar && (
            <Image
              src={user.avatar}
              alt={user.name}
              width={24}
              height={24}
              style={{ borderRadius: '50%' }}
            />
          )}
          <span>{user.name}</span>
          <span style={{
            fontSize: '0.8rem',
            color: 'var(--muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {user.role}
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
            ▼
          </span>
        </button>

        {showDropdown && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setShowDropdown(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1
              }}
            />

            {/* Dropdown Menu */}
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              marginTop: '4px',
              background: 'white',
              border: '1px solid var(--line)',
              borderRadius: '8px',
              boxShadow: 'var(--shadow-2)',
              minWidth: '200px',
              zIndex: 1001
            }}>
              <div style={{ padding: '8px 0' }}>
                <Link
                  href="/account"
                  onClick={() => setShowDropdown(false)}
                  style={{
                    display: 'block',
                    padding: '8px 16px',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                    fontSize: 'var(--step--1)',
                    borderBottom: '1px solid var(--line)'
                  }}
                >
                  👤 My Account
                </Link>
                <Link
                  href="/account/library"
                  onClick={() => setShowDropdown(false)}
                  style={{
                    display: 'block',
                    padding: '8px 16px',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                    fontSize: 'var(--step--1)'
                  }}
                >
                  📚 My Library
                </Link>
                <Link
                  href="/account/purchases"
                  onClick={() => setShowDropdown(false)}
                  style={{
                    display: 'block',
                    padding: '8px 16px',
                    textDecoration: 'none',
                    color: 'var(--ink)',
                    fontSize: 'var(--step--1)'
                  }}
                >
                  🧾 Purchase History
                </Link>
                {user.role === 'author' && (
                  <>
                    <div style={{ height: '1px', background: 'var(--line)', margin: '4px 0' }} />
                    <Link
                      href="/author/dashboard"
                      onClick={() => setShowDropdown(false)}
                      style={{
                        display: 'block',
                        padding: '8px 16px',
                        textDecoration: 'none',
                        color: 'var(--ink)',
                        fontSize: 'var(--step--1)'
                      }}
                    >
                      ✍️ Author Dashboard
                    </Link>
                  </>
                )}
                {user.role === 'admin' && (
                  <>
                    <div style={{ height: '1px', background: 'var(--line)', margin: '4px 0' }} />
                    <Link
                      href="/admin"
                      onClick={() => setShowDropdown(false)}
                      style={{
                        display: 'block',
                        padding: '8px 16px',
                        textDecoration: 'none',
                        color: 'var(--ink)',
                        fontSize: 'var(--step--1)'
                      }}
                    >
                      ⚙️ Admin Panel
                    </Link>
                  </>
                )}
                <div style={{ height: '1px', background: 'var(--line)', margin: '4px 0' }} />
                <button
                  onClick={() => {
                    logout();
                    setShowDropdown(false);
                  }}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '8px 16px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    color: '#dc2626',
                    fontSize: 'var(--step--1)',
                    cursor: 'pointer'
                  }}
                >
                  🚪 Sign Out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}