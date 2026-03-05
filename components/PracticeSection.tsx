'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
}

export default function PracticeSection() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual Instagram API call
    // For now, using placeholder data
    const fetchInstagramPosts = async () => {
      try {
        // Simulated API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Placeholder Instagram-style posts
        const mockPosts: InstagramPost[] = [
          {
            id: '1',
            media_url: 'https://picsum.photos/400/400?random=10',
            permalink: '#',
            caption: 'Daily sketch practice - exploring gesture and form',
            media_type: 'IMAGE'
          },
          {
            id: '2',
            media_url: 'https://picsum.photos/400/400?random=11',
            permalink: '#',
            caption: 'Work in progress - testing new techniques',
            media_type: 'IMAGE'
          },
          {
            id: '3',
            media_url: 'https://picsum.photos/400/400?random=12',
            permalink: '#',
            caption: 'Studio setup for today\'s session',
            media_type: 'IMAGE'
          }
        ];

        setPosts(mockPosts);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch Instagram posts:', error);
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h2>Practice</h2>
        <p className="small" style={{ marginBottom: '20px' }}>
          Latest from my art practice and studio work
        </p>

        {loading ? (
          <div style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            paddingBottom: '4px'
          }}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="card"
                style={{
                  minWidth: '160px',
                  width: '160px',
                  height: '160px',
                  background: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--muted)',
                  flexShrink: 0
                }}
              >
                Loading...
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            paddingBottom: '4px'
          }}>
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                className="card"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  minWidth: '160px',
                  width: '160px',
                  flexShrink: 0
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style={{
                  position: 'relative',
                  width: '160px',
                  height: '160px'
                }}>
                  <Image
                    src={post.media_url}
                    alt="Instagram post"
                    width={160}
                    height={160}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <a
            href="https://instagram.com/drawnfromme"
            target="_blank"
            rel="noopener noreferrer"
            className="small underline"
            style={{ color: 'var(--accent)' }}
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}