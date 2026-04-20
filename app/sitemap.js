import { cities } from '../data/cities';
import { services, projects } from '../data/services';

export default function sitemap() {
  const baseUrl = 'https://vpourdesign.com';

  // ─── FRENCH STATIC PAGES ───
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/projets`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/soumission`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  // ─── FRENCH SERVICE PAGES ───
  const servicePages = services.map(s => ({
    url: `${baseUrl}/services/${s.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // ─── FRENCH BLOG POSTS ───
  const blogPosts = [
    { slug: 'ia-transforme-web-design-pme-rive-nord', date: '2026-03-23' },
    { slug: 'combien-coute-site-web-quebec-2026',     date: '2026-03-24' },
    { slug: 'fevrier-nouvelle-ere-marketing-web',     date: '2026-03-30' },
    { slug: 'ia-pain-points-reseaux-sociaux',         date: '2026-04-07' },
    { slug: 'seo-local-rosemere-villes-voisines',     date: '2026-04-11' },
  ].map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // ─── FRENCH PROJECT PAGES ───
  const projectPages = projects.map(p => ({
    url: `${baseUrl}/projets/${p.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // ─── CITY PAGES ───
  const cityPages = cities.map(c => ({
    url: `${baseUrl}/agence-web-${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // ─── ENGLISH STATIC PAGES ───
  const enStaticPages = [
    { url: `${baseUrl}/en`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/en/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/en/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/en/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/en/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/en/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
  ];

  // ─── ENGLISH SERVICE PAGES ───
  const enServiceSlugs = ['website-creation', 'ai-strategy', 'brand-identity', 'content-media', 'seo-marketing'];
  const enServicePages = enServiceSlugs.map(slug => ({
    url: `${baseUrl}/en/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // ─── ENGLISH BLOG POSTS ───
  const enBlogPosts = [
    { slug: 'ai-transforms-web-design-sme-north-shore',          date: '2026-03-23' },
    { slug: 'website-cost-quebec-2026',                          date: '2026-03-24' },
    { slug: 'february-changed-everything-new-era-web-marketing', date: '2026-03-30' },
    { slug: 'ai-pain-points-social-media',                       date: '2026-04-07' },
    { slug: 'local-seo-rosemere-nearby-cities',                  date: '2026-04-11' },
  ].map(post => ({
    url: `${baseUrl}/en/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...blogPosts,
    ...projectPages,
    ...cityPages,
    ...enStaticPages,
    ...enServicePages,
    ...enBlogPosts,
  ];
}
