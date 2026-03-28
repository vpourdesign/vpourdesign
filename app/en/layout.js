import '../globals.css';
import Script from 'next/script';
import JsonLd from '../../components/JsonLd';
import { organizationSchema, websiteSchema } from '../../data/schema';

export const metadata = {
  metadataBase: new URL('https://vpourdesign.com'),
  title: {
    template: '%s | V pour Design — AI Web Agency',
    default: 'V pour Design — AI-Powered Web Agency | Montreal North Shore',
  },
  description: 'Web agency specializing in artificial intelligence on Montreal\'s North Shore. Website creation, SEO, AI strategy, brand identity. 17+ years of experience, 500+ projects delivered.',
  keywords: ['web agency north shore', 'website creation laval', 'artificial intelligence', 'SEO north shore', 'AI specialist quebec'],
  authors: [{ name: 'V pour Design' }],
  creator: 'V pour Design',
  openGraph: {
    title: 'V pour Design — AI-Powered Web Agency',
    description: 'Web agency specializing in artificial intelligence on Montreal\'s North Shore. Websites, SEO, AI strategy, brand identity.',
    url: 'https://vpourdesign.com/en',
    siteName: 'V pour Design',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vpourdesign.com/en',
    languages: { 'fr-CA': '/', 'en': '/en' },
  },
};

export default function EnglishLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" hrefLang="fr-CA" href="https://vpourdesign.com" />
        <link rel="alternate" hrefLang="en" href="https://vpourdesign.com/en" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DBGGSR584C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-en" strategy="afterInteractive">
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
      </body>
    </html>
  );
}
