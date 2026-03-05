'use client';

import { useState } from 'react';

export default function ArtPracticeSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // Art pieces - your actual work from the gallery
  const artPieces = [
    {
      id: 1,
      image: '/gallery/IMG_0694.jpeg',
      // TODO: Add tags and category metadata here
      tags: [], // e.g., ['sketch', 'portrait', 'charcoal']
      category: '', // e.g., 'figure drawing', 'landscape', 'abstract'
      aspectRatio: '3/4'
    },
    {
      id: 2,
      image: '/gallery/IMG_0807.jpeg',
      tags: [],
      category: '',
      aspectRatio: '4/3'
    },
    {
      id: 4,
      image: '/gallery/IMG_2877.jpeg',
      tags: [],
      category: '',
      aspectRatio: '4/3'
    },
    {
      id: 5,
      image: '/gallery/IMG_2878.jpeg',
      tags: [],
      category: '',
      aspectRatio: '3/4'
    },
    {
      id: 6,
      image: '/gallery/IMG_5181.jpeg',
      tags: [],
      category: '',
      aspectRatio: '4/3'
    },
    {
      id: 7,
      image: '/gallery/IMG_5223.jpeg',
      tags: [],
      category: '',
      aspectRatio: '3/4'
    },
    {
      id: 9,
      image: '/gallery/IMG_5233.jpeg',
      tags: [],
      category: '',
      aspectRatio: '3/4'
    },
    {
      id: 10,
      image: '/gallery/IMG_5238.jpeg',
      tags: [],
      category: '',
      aspectRatio: '4/3'
    },
    {
      id: 11,
      image: '/gallery/IMG_5241.jpeg',
      tags: [],
      category: '',
      aspectRatio: '3/4'
    },
    {
      id: 12,
      image: '/gallery/IMG_5249.jpeg',
      tags: [],
      category: '',
      aspectRatio: '4/3'
    },
    {
      id: 13,
      image: '/gallery/IMG_5260.jpeg',
      tags: [],
      category: '',
      aspectRatio: '3/4'
    },
    {
      id: 14,
      image: '/gallery/IMG_5270.jpeg',
      tags: [],
      category: '',
      aspectRatio: '4/3'
    },
    {
      id: 15,
      image: '/gallery/IMG_5279.jpeg',
      tags: [],
      category: '',
      aspectRatio: '3/4'
    },
    {
      id: 16,
      image: '/gallery/IMG_5309.jpeg',
      tags: [],
      category: '',
      aspectRatio: '4/3'
    },
    {
      id: 17,
      image: '/gallery/IMG_5361.jpeg',
      tags: [],
      category: '',
      aspectRatio: '3/4'
    },
    {
      id: 18,
      image: '/gallery/IMG_5364.jpeg',
      tags: [],
      category: '',
      aspectRatio: '4/3'
    },
    {
      id: 19,
      image: '/gallery/IMG_5375.jpeg',
      tags: [],
      category: '',
      aspectRatio: '3/4'
    },
    {
      id: 20,
      image: '/gallery/IMG_5399.jpeg',
      tags: [],
      category: '',
      aspectRatio: '4/3'
    },
    {
      id: 21,
      image: '/gallery/IMG_5400.jpeg',
      tags: [],
      category: '',
      aspectRatio: '3/4'
    }
  ];

  return (
    <section className="section">
      <div className="container-wide">
        {/* Studio Practice Header */}
        <div style={{ marginBottom: '4rem', maxWidth: '600px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--step-1)',
              fontWeight: '600',
              color: 'var(--ink)',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem'
            }}
          >
            Studio Practice
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--step-0)',
              lineHeight: '1.5',
              color: 'var(--ink)',
              marginBottom: '2rem'
            }}
          >
            Ink sketchbooks exploring form, movement, and visual memory.
          </p>

          {/* Practice metrics */}
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--step--1)',
              color: 'var(--muted)',
              marginBottom: '1.5rem'
            }}
          >
            <div>Sketches: 1,200+</div>
            <div>Years practicing: 3</div>
          </div>

          {/* Method description */}
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'var(--step--1)',
              lineHeight: '1.5',
              color: 'var(--muted)',
              fontStyle: 'italic'
            }}
          >
            Most drawings are done in ink to encourage decisive mark-making and rapid iteration.
          </p>
        </div>

        {/* Dynamic masonry grid */}
        <div
          style={{
            columns: '3',
            columnGap: '1.5rem',
            marginBottom: '3rem',
            maxWidth: '1000px',
            margin: '0 auto 3rem auto'
          }}
        >
          {artPieces.map((piece, index) => (
            <div
              key={piece.id}
              onClick={() => setSelectedImage(piece.image)}
              style={{
                display: 'inline-block',
                width: '100%',
                marginBottom: '1.5rem',
                background: 'var(--card-bg)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease',
                border: '1px solid var(--line)',
                position: 'relative',
                breakInside: 'avoid',
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards ${index * 0.08}s`
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = 'var(--card-hover)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'var(--card-bg)';
              }}
            >
              {/* Image */}
              <img
                src={piece.image}
                alt={`Artwork ${piece.id} - ${piece.category || 'Mixed media'}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
                className="art-image"
                onError={(e) => {
                  // Handle image load error silently
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>

        {/* Visual Library footer */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '4rem'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--step--1)',
              color: 'var(--muted)',
              letterSpacing: '0.05em'
            }}
          >
            Visual Library — ongoing
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            backdropFilter: 'blur(8px)'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '-3rem',
                right: 0,
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                zIndex: 10000,
                fontFamily: 'var(--font-mono)',
                transition: 'opacity 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              ×
            </button>

            {/* Full-size image */}
            <img
              src={selectedImage}
              alt="Artwork enlarged view"
              style={{
                maxWidth: '80vw',
                maxHeight: '80vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: 'var(--radius)'
              }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .art-image {
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }

        div:hover .art-image {
          transform: scale(1.05) !important;
        }

        div:hover .art-overlay {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}