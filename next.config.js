/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  // La grille BICOM est lue au runtime avec fs — sans ceci, le traceur de fichiers
  // ne l'embarque pas dans le bundle serverless et la route renvoie 500 en production.
  outputFileTracingIncludes: {
    '/api/bicom/grille': ['./content/bicom/**'],
    '/api/atelierjacob-seo/plan': ['./content/atelierjacob/**'],
  },
  async headers() {
    return [
      {
        source: '/9sept/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet' }],
      },
      {
        source: '/bicom',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet' }],
      },
      {
        source: '/api/bicom/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet' }],
      },
      {
        source: '/atelierjacob-seo',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet' }],
      },
      {
        source: '/api/atelierjacob-seo/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet' }],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/agence-web-:city',
        destination: '/villes/:city',
      },
      {
        source: '/en/web-agency-:city',
        destination: '/en/villes/:city',
      },
    ];
  },
  async redirects() {
    return [
      { source: '/9sept', destination: '/9sept/index.html', permanent: false },
      // Anciennes pages Wix indexées dans Google
      { source: '/gestion-medias-sociaux', destination: '/services/contenu-medias', permanent: true },
      { source: '/post/pourquoi-nous-avons-choisi-wix', destination: '/blog', permanent: true },
      { source: '/post/reinventer-la-publicite-l-urgence-de-la-subtilite', destination: '/blog', permanent: true },
      { source: '/product-page/video-de-mariage', destination: '/services/contenu-medias', permanent: true },
      { source: '/product-page/creation-de-logo', destination: '/services/identite-visuelle', permanent: true },
      { source: '/product-page/2500-flyers-4x8', destination: '/services/identite-visuelle', permanent: true },
      { source: '/product-page/lot-de-2500-cartes-d-affaire', destination: '/services/identite-visuelle', permanent: true },
      { source: '/category/all-products', destination: '/services', permanent: true },
      { source: '/videos-corporatifs', destination: '/services/contenu-medias', permanent: true },
      // Anciennes pages Joomla avec index.php
      { source: '/index.php/:path*', destination: '/', permanent: true },
      // Catch-all pour product-page, post, category
      { source: '/product-page/:slug', destination: '/services', permanent: true },
      { source: '/post/:slug', destination: '/blog', permanent: true },
      { source: '/category/:slug', destination: '/services', permanent: true },
    ];
  },
};

module.exports = nextConfig;
