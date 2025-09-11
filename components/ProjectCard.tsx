import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export type Project = {
  title: string;
  href: string;
  description: string; // longer body copy if needed
  tagline?: string;    // playful one-liner
  cta?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function ProjectCard({
  title, href, description, tagline, cta = 'Open →', imageSrc, imageAlt,
}: Project) {
  return (
    <article className="card">
      {imageSrc ? (
        <div className="card-media">
          <Image src={imageSrc} alt={imageAlt ?? ''} fill sizes="(min-width: 900px) 800px, 100vw" style={{ objectFit: 'cover' }} />
        </div>
      ) : null}
      <div className="card-body">
        <h3>
          {title}{' '}
          <Link href={href} className="underline">
            ({new URL(href).host})
          </Link>
        </h3>
        {tagline ? <p className="tagline" style={{ marginTop: 4 }}>{tagline}</p> : null}
        <p style={{ marginTop: 8 }}>{description}</p>
        <div style={{ marginTop: 10 }}>
          <Button href={href}> {cta} </Button>
        </div>
      </div>
    </article>
  );
}
