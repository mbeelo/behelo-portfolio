import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/account/',
          '/author/',
          '/library/checkout/',
          '/_next/',
          '/auth/'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/library/',
          '/library/browse',
          '/contact',
          '/privacy',
          '/terms',
          '/cookies'
        ],
        disallow: [
          '/admin/',
          '/api/',
          '/account/',
          '/author/',
          '/library/checkout/',
          '/auth/'
        ],
      }
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://behelo.com'}/sitemap.xml`,
  };
}