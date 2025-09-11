import Image from 'next/image';
import { gallery } from '@/lib/gallery';

export default function GalleryGrid() {
  return (
    <div className="gallery-grid">
      {gallery.map((img) => (
        <figure key={img.src} className="figure">
          <div className="thumb-wrap">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="thumb-img"
              sizes="(min-width: 900px) 260px, (min-width: 600px) 45vw, 90vw"
              priority={img.priority}
            />
          </div>
          {img.caption ? <figcaption className="caption">{img.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
