import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Behelo - Voice Actor, Builder & Artist';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          color: '#ffffff',
          fontFamily: 'system-ui',
          position: 'relative',
        }}
      >
        {/* Studio Name - Dominant Element */}
        <div
          style={{
            fontSize: '120px',
            fontWeight: '600',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          BEHELO
        </div>

        {/* Pronunciation - Subtle */}
        <div
          style={{
            fontSize: '24px',
            color: '#999999',
            letterSpacing: '0.05em',
            marginBottom: '60px',
            opacity: 0.8,
          }}
        >
          /bəˈhɛlo/
        </div>

        {/* Main Tagline */}
        <div
          style={{
            fontSize: '42px',
            fontWeight: '400',
            lineHeight: '1.4',
            textAlign: 'center',
            maxWidth: '800px',
            letterSpacing: '-0.01em',
            marginBottom: '60px',
          }}
        >
          Turning imagination into reality<br />
          through tools, art, and voice.
        </div>

        {/* Studio Metadata */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: '#999999',
              letterSpacing: '0.05em',
            }}
          >
            Independent creator — Oakland, CA
          </div>
          <div
            style={{
              fontSize: '20px',
              color: '#999999',
              letterSpacing: '0.05em',
            }}
          >
            English · Spanish · French
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}