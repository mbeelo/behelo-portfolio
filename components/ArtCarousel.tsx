import Image from 'next/image';
import Link from 'next/link';
import { artworks } from '@/lib/art';

export default function ArtCarousel() {
  return (
    <div className="scroll-row" aria-label="Artworks">
      {artworks.map((a) => (
        <article className="card" key={a.src}>
          <div className="art-media">
            <Image
              src={a.src}
              alt={a.alt}
              fill
              sizes="(min-width: 900px) 360px, 80vw"
              style={{ objectFit: 'cover' }}
              priority={a.priority}
            />
          </div>
          <div className="art-body">
            <h3>{a.title}</h3>
            {a.caption ? <p className="small" style={{ marginTop: 4 }}>{a.caption}</p> : null}
            {a.href ? (
              <p style={{ marginTop: 8 }}>
                <Link href={a.href} className="btn-text">View →</Link>
              </p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
