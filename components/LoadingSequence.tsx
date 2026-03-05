'use client';

import { useEffect, useState } from 'react';

interface LoadingSequenceProps {
  onComplete: () => void;
}

export default function LoadingSequence({ onComplete }: LoadingSequenceProps) {
  const [stage, setStage] = useState<'dots' | 'scroll-prompt' | 'fade-out' | 'complete'>('dots');

  useEffect(() => {
    // Stage 1: Show pulsing dots for 1.5 seconds
    const dotsTimer = setTimeout(() => {
      setStage('scroll-prompt');
    }, 1500);

    return () => clearTimeout(dotsTimer);
  }, []);

  const handleUserInteraction = () => {
    if (stage === 'scroll-prompt') {
      setStage('fade-out');
      // Wait for fade animation to complete
      setTimeout(() => {
        setStage('complete');
        onComplete();
      }, 600);
    }
  };

  useEffect(() => {
    if (stage === 'scroll-prompt') {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowDown') {
          e.preventDefault();
          handleUserInteraction();
        }
      };

      const handleScroll = () => {
        if (window.scrollY > 10) {
          handleUserInteraction();
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('click', handleUserInteraction);

      return () => {
        window.removeEventListener('keydown', handleKeyPress);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('click', handleUserInteraction);
      };
    }
  }, [stage]);

  if (stage === 'complete') {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--bg)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: stage === 'fade-out' ? 0 : 1,
        transition: 'opacity 0.6s ease-out'
      }}
    >
      {stage === 'dots' && (
        <div
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--ink)',
                animation: `pulse 1.2s ease-in-out infinite ${i * 0.2}s`
              }}
            />
          ))}
        </div>
      )}

      {stage === 'scroll-prompt' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            cursor: 'pointer'
          }}
          onClick={handleUserInteraction}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--step--1)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--muted)',
              textAlign: 'center'
            }}
          >
            Scroll to Enter
          </div>
          <div
            style={{
              fontSize: '1.5rem',
              color: 'var(--muted)',
              animation: 'bounce-gentle 2s ease-in-out infinite'
            }}
          >
            ↓
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-gentle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </div>
  );
}