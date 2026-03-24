/**
 * Centralized Schema.org JSON-LD data for V pour Design
 * Used across all pages for maximum AI/search engine indexability
 */

const BASE_URL = 'https://vpourdesign.com';

// ── Core Organization (used on every page via layout) ──
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  "name": "V pour Design",
  "legalName": "V pour Design inc.",
  "url": BASE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${BASE_URL}/logo-vpourdesign.png`,
    "width": 400,
    "height": 200
  },
  "image": `${BASE_URL}/logo-vpourdesign.png`,
  "description": "Agence web spécialisée en intelligence artificielle sur la Rive-Nord de Montréal. Création de sites web, SEO local, stratégie IA, identité visuelle et production de contenu.",
  "telephone": "+15145675763",
  "email": "info@vpourdesign.com",
  "foundingDate": "2009",
  "founder": {
    "@type": "Person",
    "@id": `${BASE_URL}/#founder`,
    "name": "Vincent Lavoie",
    "jobTitle": "Président fondateur",
    "description": "17+ ans d'expérience en graphisme, web design et intelligence artificielle appliquée.",
    "alumniOf": [
      { "@type": "EducationalOrganization", "name": "Collège Salette", "department": "Graphisme" }
    ]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rive-Nord de Montréal",
    "addressRegion": "QC",
    "postalCode": "J7C",
    "addressCountry": "CA"
  },
  "areaServed": [
    { "@type": "City", "name": "Laval", "@id": "https://www.wikidata.org/wiki/Q141471" },
    { "@type": "City", "name": "Blainville" },
    { "@type": "City", "name": "Boisbriand" },
    { "@type": "City", "name": "Sainte-Thérèse" },
    { "@type": "City", "name": "Rosemère" },
    { "@type": "City", "name": "Terrebonne" },
    { "@type": "City", "name": "Mascouche" },
    { "@type": "City", "name": "Saint-Eustache" },
    { "@type": "City", "name": "Mirabel" },
    { "@type": "City", "name": "Saint-Jérôme" }
  ],
  "knowsAbout": [
    "Intelligence artificielle appliquée au web",
    "Création de sites web sur mesure",
    "SEO local Rive-Nord",
    "Stratégie de contenu IA",
    "Identité visuelle et branding",
    "Production vidéo et photographie",
    "Google Ads et publicité web",
    "Automatisation marketing par IA"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services V pour Design",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Création de sites web sur mesure", "url": `${BASE_URL}/services/creation-site-web` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stratégie IA pour PME", "url": `${BASE_URL}/services/strategie-ia` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Identité visuelle et branding", "url": `${BASE_URL}/services/identite-visuelle` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Contenu et médias", "url": `${BASE_URL}/services/contenu-medias` } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO et référencement local", "url": `${BASE_URL}/services/seo-referencement` } }
    ]
  },
  "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 10 },
  "priceRange": "$$",
  "slogan": "L'intelligence artificielle, au service de votre croissance",
  "sameAs": []
};

// ── WebSite schema (for sitelinks search box) ──
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "name": "V pour Design",
  "url": BASE_URL,
  "description": "Agence web augmentée par l'intelligence artificielle — Rive-Nord de Montréal",
  "publisher": { "@id": `${BASE_URL}/#organization` },
  "inLanguage": "fr-CA",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BASE_URL}/blog?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

// ── LocalBusiness schema (homepage, contact, city pages) ──
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${BASE_URL}/#localbusiness`,
  "name": "V pour Design",
  "image": `${BASE_URL}/logo-vpourdesign.png`,
  "url": BASE_URL,
  "telephone": "+15145675763",
  "email": "info@vpourdesign.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rive-Nord de Montréal",
    "addressRegion": "QC",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.6066,
    "longitude": -73.8775
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" }
  ],
  "areaServed": [
    "Laval", "Blainville", "Boisbriand", "Sainte-Thérèse", "Rosemère",
    "Terrebonne", "Mascouche", "Saint-Eustache", "Mirabel", "Saint-Jérôme"
  ],
  "founder": { "@id": `${BASE_URL}/#founder` },
  "parentOrganization": { "@id": `${BASE_URL}/#organization` }
};

// ── Helper: Generate Service schema ──
export function serviceSchema({ name, description, url, features = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": `${BASE_URL}${url}`,
    "provider": { "@id": `${BASE_URL}/#organization` },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 45.6066, "longitude": -73.8775 },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": features.length > 0 ? {
      "@type": "OfferCatalog",
      "name": name,
      "itemListElement": features.map((f, i) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": f }
      }))
    } : undefined,
    "termsOfService": `${BASE_URL}/contact`,
    "serviceType": "Web Design & AI Consulting"
  };
}

// ── Helper: Generate BlogPosting schema ──
export function blogPostSchema({ title, description, slug, datePublished, dateModified, keywords = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "url": `${BASE_URL}/blog/${slug}`,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": "Vincent Lavoie",
      "@id": `${BASE_URL}/#founder`
    },
    "publisher": { "@id": `${BASE_URL}/#organization` },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`
    },
    "inLanguage": "fr-CA",
    "keywords": keywords.join(", "),
    "isPartOf": { "@id": `${BASE_URL}/#website` }
  };
}

// ── Helper: Generate FAQPage schema ──
export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question || faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer || faq.a
      }
    }))
  };
}

// ── Helper: Generate BreadcrumbList ──
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url ? `${BASE_URL}${item.url}` : undefined
    }))
  };
}

// ── Helper: Generate city-specific LocalBusiness schema ──
export function cityLocalBusinessSchema(cityData) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": `V pour Design — Agence web à ${cityData.name}`,
    "description": `Agence web spécialisée en intelligence artificielle à ${cityData.name}. Création de sites web, SEO local, stratégie IA pour les PME de ${cityData.name} et la Rive-Nord.`,
    "url": `${BASE_URL}/agence-web-${cityData.slug}`,
    "telephone": "+15145675763",
    "email": "info@vpourdesign.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityData.name,
      "addressRegion": "QC",
      "addressCountry": "CA"
    },
    "areaServed": { "@type": "City", "name": cityData.name },
    "parentOrganization": { "@id": `${BASE_URL}/#organization` },
    "priceRange": "$$",
    "image": `${BASE_URL}/logo-vpourdesign.png`
  };
}

// ── Helper: Generate project/CreativeWork schema ──
export function projectSchema({ name, description, url, client, services = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": name,
    "description": description,
    "url": `${BASE_URL}${url}`,
    "creator": { "@id": `${BASE_URL}/#organization` },
    "about": client,
    "keywords": services.join(", "),
    "inLanguage": "fr-CA"
  };
}

// ── Helper: Generate CollectionPage schema (for listings) ──
export function collectionSchema({ name, description, url, items = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": name,
    "description": description,
    "url": `${BASE_URL}${url}`,
    "isPartOf": { "@id": `${BASE_URL}/#website` },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": items.length,
      "itemListElement": items.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": item.name,
        "url": item.url ? `${BASE_URL}${item.url}` : undefined
      }))
    }
  };
}

// ── Helper: ProfilePage schema (for about/founder) ──
export const founderProfileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "@id": `${BASE_URL}/#founder`,
    "name": "Vincent Lavoie",
    "jobTitle": "Président fondateur",
    "worksFor": { "@id": `${BASE_URL}/#organization` },
    "description": "Fondateur de V pour Design avec 17+ ans d'expérience en graphisme, web design et intelligence artificielle. Diplômé du Collège Salette en graphisme, avec une formation en histoire et politique.",
    "knowsAbout": ["Intelligence artificielle", "Web design", "SEO", "Branding", "Marketing numérique"],
    "alumniOf": [
      { "@type": "EducationalOrganization", "name": "Collège Salette" }
    ]
  }
};

// ── Helper: ContactPage schema ──
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contactez V pour Design",
  "description": "Contactez notre agence web pour discuter de votre projet. Consultation gratuite. Réponse en 24h.",
  "url": `${BASE_URL}/contact`,
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "V pour Design",
    "telephone": "+15145675763",
    "email": "info@vpourdesign.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+15145675763",
      "contactType": "customer service",
      "availableLanguage": ["French", "English"],
      "areaServed": "CA"
    }
  }
};
