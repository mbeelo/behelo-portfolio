import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';
import ArtCarousel from '@/components/ArtCarousel';
import Link from 'next/link';
import Button from '@/components/Button';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* PROJECTS */}
      <section className="section">
        <div className="container">
          <h2>Projects</h2>
          <p className="small" style={{ marginBottom: 14 }}>
            Experiments, tools, and things I’m releasing.
          </p>
          <div style={{ display: 'grid', gap: 16 }}>
            {projects.map((p) => (
              <ProjectCard key={p.href} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ART */}
      <section className="section">
        <div className="container">
          <h2>Art</h2>
          <p className="small" style={{ marginBottom: 14 }}>
            Sketches, studies, and worlds I’m building.
          </p>
          <ArtCarousel />
          <div style={{ textAlign: 'right', marginTop: 8 }}>
            <Link href="/gallery" className="small underline">
              View all →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <div className="container">
          <h2>Contact</h2>
          <p style={{ marginTop: 6 }}>
            Want to collaborate, commission, or just talk?
          </p>
          <div style={{ marginTop: 12 }}>
            <Button href="mailto:you@behelo.com" variant="outline">
              Let’s Connect
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
