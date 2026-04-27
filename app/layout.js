import './globals.css';
import Script from 'next/script';
import JsonLd from '../components/JsonLd';
import CookieBanner from '../components/CookieBanner';
import { organizationSchema, websiteSchema } from '../data/schema';

export const metadata = {
  metadataBase: new URL('https://vpourdesign.com'),
  title: {
    template: '%s | V pour Design — Agence web IA Rive-Nord',
    default: 'V pour Design — Agence web augmentée par l\'IA | Rive-Nord & Laval',
  },
  description: 'Agence web spécialisée en intelligence artificielle sur la Rive-Nord de Montréal. Création de sites web, SEO, stratégie IA, identité visuelle. 17+ ans d\'expérience, 500+ projets livrés.',
  keywords: ['agence web rive-nord', 'création site web laval', 'intelligence artificielle', 'SEO rive-nord', 'agence web blainville', 'agence web boisbriand', 'spécialiste IA québec'],
  authors: [{ name: 'V pour Design' }],
  creator: 'V pour Design',
  openGraph: {
    title: 'V pour Design — Agence web augmentée par l\'IA',
    description: 'Agence web spécialisée en intelligence artificielle sur la Rive-Nord de Montréal. Sites web, SEO, stratégie IA, identité visuelle.',
    url: 'https://vpourdesign.com',
    siteName: 'V pour Design',
    locale: 'fr_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V pour Design — Agence web IA Rive-Nord',
    description: 'Agence web spécialisée en intelligence artificielle. Rive-Nord de Montréal.',
  },
  alternates: {
    canonical: 'https://vpourdesign.com',
    languages: { 'fr-CA': '/' },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr-CA">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvUDQZNLo_U2r.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="alternate" hrefLang="fr-CA" href="https://vpourdesign.com" />
        <link rel="alternate" hrefLang="en" href="https://vpourdesign.com/en" />
        {/* Consent mode — default DENIED before user chooses (Loi 25 / PIPEDA) */}
        <Script id="gtag-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500,
            });
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DBGGSR584C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DBGGSR584C');
          `}
        </Script>
      </head>
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
