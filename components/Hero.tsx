'use client';

import { useEffect, useState } from 'react';
import Button from './Button';

const phrases = ['I build', 'I draw', 'I do'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <h1>BEHELO</h1>
        <p className="hero-statement">
          <span style={{ fontWeight: 700, color: 'var(--accent)' }}>
            {phrases[index]}
          </span>{' '}
          the stuff I want. Maybe you’ll want it too.
        </p>
        <div className="actions">
          <Button href="https://roulette.behelo.com" variant="text">
            Play Task Roulette →
          </Button>
          <Button href="/gallery" variant="outline">
            See My Art
          </Button>
        </div>
      </div>
    </section>
  );
}
