import { cities } from '../data/cities';
import { services } from '../data/services';

export default function sitemap() {
  const baseUrl = 'https://vpourdesign.com';

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/projets`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/soumission`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  const servicePages = services.map(s => ({
    url: `${baseUrl}/services/${s.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const cityPages = cities.map(c => ({
    url: `${baseUrl}/agence-web-${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages, ...cityPages];
}
