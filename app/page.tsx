'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ProjectShowcase from '@/components/ProjectShowcase';
import ArtPracticeSection from '@/components/ArtPracticeSection';
import InfoPage from '@/components/InfoPage';
import Navigation from '@/components/Navigation';
import { AnimatedSection } from '@/lib/useScrollAnimation';

export default function HomePage() {
  const [currentView, setCurrentView] = useState<'work' | 'info'>('work');

  const handleViewChange = (view: 'work' | 'info') => {
    setCurrentView(view);
    // Smooth scroll to top when switching views
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Navigation with portfolio controls */}
      <Navigation
        currentView={currentView}
        onViewChange={handleViewChange}
        showPortfolioNav={true}
      />

      {/* Content based on current view */}
      {currentView === 'work' && (
        <>
          {/* Hero section */}
          <AnimatedSection>
            <Hero />
          </AnimatedSection>

          {/* Project showcase */}
          <AnimatedSection delay={200}>
            <ProjectShowcase />
          </AnimatedSection>

          {/* Art & Practice section */}
          <AnimatedSection delay={400}>
            <ArtPracticeSection />
          </AnimatedSection>
        </>
      )}

      {currentView === 'info' && (
        <>
          <InfoPage />
        </>
      )}

      {/* Footer */}
      <AnimatedSection>
        <footer
          style={{
            padding: '4rem 0 2rem',
            textAlign: 'center',
            borderTop: '1px solid var(--line)',
            marginTop: 'var(--spacing-section)'
          }}
        >
          <div className="container">
            {/* Monogram */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                background: 'var(--ink)',
                color: 'var(--bg)',
                borderRadius: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--step--1)',
                fontWeight: '600',
                margin: '0 auto 1rem'
              }}
            >
              B
            </div>

            {/* Copyright */}
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--step--2)',
                color: 'var(--muted)',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em' // Match hero's tight tracking for brand consistency
              }}
            >
              © 2025 Behelo
            </p>

            {/* Whimsical note */}
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--step--2)',
                color: 'var(--muted-light)',
                margin: 0,
                fontStyle: 'italic'
              }}
            >
              Built with curiosity & crafted in Oakland
            </p>
          </div>
        </footer>
      </AnimatedSection>
    </>
  );
}
