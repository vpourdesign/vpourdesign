// Navigation & shared UI translations
export const nav = {
  fr: {
    services: 'Services',
    about: 'À propos',
    projects: 'Projets',
    blog: 'Blog',
    contact: 'Contact',
    phone: '(514) 567-5763',
    email: 'info@vpourdesign.com',
    aboutPath: '/a-propos',
    projectsPath: '/projets',
    langSwitch: 'EN',
    langSwitchPath: '/en',
  },
  en: {
    services: 'Services',
    about: 'About',
    projects: 'Projects',
    blog: 'Blog',
    contact: 'Contact',
    phone: '(514) 567-5763',
    email: 'info@vpourdesign.com',
    aboutPath: '/en/about',
    projectsPath: '/en/projects',
    langSwitch: 'FR',
    langSwitchPath: '/',
  },
};

// Footer translations
export const footer = {
  fr: {
    tagline: 'Agence web augmentée par l\'intelligence artificielle',
    rights: 'Tous droits réservés.',
    services: 'Services',
    company: 'Entreprise',
    about: 'À propos',
    projects: 'Projets',
    blog: 'Blog',
    contact: 'Contact',
    quote: 'Soumission gratuite',
    cities: 'Villes desservies',
  },
  en: {
    tagline: 'AI-powered web agency',
    rights: 'All rights reserved.',
    services: 'Services',
    company: 'Company',
    about: 'About',
    projects: 'Projects',
    blog: 'Blog',
    contact: 'Contact',
    quote: 'Free quote',
    cities: 'Areas served',
  },
};

// Contact form translations
export const contactForm = {
  fr: {
    name: 'Votre nom',
    namePlaceholder: 'Jean Dupont',
    email: 'Courriel',
    emailPlaceholder: 'jean@exemple.com',
    phone: 'Téléphone (facultatif)',
    phonePlaceholder: '(514) 000-0000',
    message: 'Message',
    messagePlaceholder: 'Décrivez votre projet...',
    submit: 'Envoyer',
    sending: 'Envoi...',
    success: 'Message envoyé avec succès!',
    error: 'Erreur lors de l\'envoi.',
  },
  en: {
    name: 'Your name',
    namePlaceholder: 'John Smith',
    email: 'Email',
    emailPlaceholder: 'john@example.com',
    phone: 'Phone (optional)',
    phonePlaceholder: '(514) 000-0000',
    message: 'Message',
    messagePlaceholder: 'Describe your project...',
    submit: 'Send',
    sending: 'Sending...',
    success: 'Message sent successfully!',
    error: 'Error sending message.',
  },
};

// Service names
export const serviceNames = {
  fr: {
    'creation-site-web': 'Sites web',
    'strategie-ia': 'Stratégie IA',
    'identite-visuelle': 'Identité visuelle',
    'contenu-medias': 'Contenu & médias',
    'seo-referencement': 'SEO & Référencement',
  },
  en: {
    'creation-site-web': 'Websites',
    'strategie-ia': 'AI Strategy',
    'identite-visuelle': 'Brand Identity',
    'contenu-medias': 'Content & Media',
    'seo-referencement': 'SEO & Marketing',
  },
};

// Utility to get locale from pathname
export function getLocaleFromPath(pathname) {
  if (pathname.startsWith('/en')) return 'en';
  return 'fr';
}

// Get the equivalent path in the other language
export function getAlternatePath(pathname) {
  if (pathname.startsWith('/en')) {
    // EN -> FR
    let frPath = pathname.replace(/^\/en/, '') || '/';
    frPath = frPath.replace('/about', '/a-propos');
    frPath = frPath.replace('/projects', '/projets');
    return frPath;
  } else {
    // FR -> EN
    let enPath = pathname === '/' ? '/en' : '/en' + pathname;
    enPath = enPath.replace('/a-propos', '/about');
    enPath = enPath.replace('/projets', '/projects');
    return enPath;
  }
}
