import { Container } from '@/components/Container';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata = {
  title: 'Gallery — Behelo',
  description: 'Art & Experiments by Behelo',
};

export default function GalleryPage() {
  return (
    <section className="pt-24 pb-16">
      <Container>
        <h1 className="text-3xl font-semibold mb-6">Gallery</h1>
        <GalleryGrid />
      </Container>
    </section>
  );
}
