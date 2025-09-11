export type Artwork = {
  title: string;
  src: string;      // /art/xxx.jpg or /gallery/xxx.jpg
  alt: string;
  caption?: string;
  href?: string;
  priority?: boolean;
};

export const artworks: Artwork[] = [
  {
    title: 'Study 01',
    src: '/gallery/sample-1.jpg',
    alt: 'Sketch lines over paper',
    caption: 'Graphite study',
    priority: true,
  },
  {
    title: 'Study 02',
    src: '/gallery/sample-2.jpg',
    alt: 'Ink drawing detail',
    caption: 'Ink on paper',
  },
  {
    title: 'Concept',
    src: '/gallery/sample-3.jpg',
    alt: 'Concept frame',
    caption: 'Blue ink',
  },
  // Add more items or point to /art/*.jpg later
];
