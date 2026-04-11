'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    eyebrow: 'Nouveau sur le blog',
    headline: <>Mon commerce est &agrave; Rosem&egrave;re &mdash; pourquoi mes clients de Lorraine ne me trouvent pas sur <em>Google</em>&nbsp;?</>,
    body: 'Google vous associe uniquement à votre ville si vous ne déclarez pas votre zone de service. 130 000 clients potentiels dans un rayon de 15 minutes — et ils ne vous voient pas.',
    offer: 'Guide complet + diagnostic gratuit.',
    btnText: 'Lire l\'article \u2192',
    btnHref: '/blog/seo-local-rosemere-villes-voisines',
    image: '/images/blog/honnete.jpg',
    imageAlt: 'SEO local Rosem\u00e8re — visibilit\u00e9 dans les villes voisines',
  },
  {
    eyebrow: 'Nouveau sur le blog',
    headline: <>L&apos;IA pour les r&eacute;seaux sociaux : arr&ecirc;tez de poster dans le <em>vide</em></>,
    body: 'La vraie puissance de l\u0027IA, c\u0027est d\u0027identifier les pain points de vos clients et cr\u00e9er du contenu qui r\u00e9pond \u00e0 leurs vraies frustrations \u2014 pas juste publier pour publier.',
    offer: 'Strat\u00e9gie compl\u00e8te en 4 \u00e9tapes.',
    btnText: 'Lire l\u0027article \u2192',
    btnHref: '/blog/ia-pain-points-reseaux-sociaux',
    image: '/images/blog/painpoints.jpg',
    imageAlt: 'Pain points et strat\u00e9gie IA pour r\u00e9seaux sociaux',
  },
  {
    eyebrow: 'Intelligence artificielle',
    headline: <>Vous dites <em>\u00ab&nbsp;IA&nbsp;\u00bb</em> en r\u00e9union,<br/>mais personne ne sait par o\u00f9 commencer&nbsp;?</>,
    body: 'On passe du jargon \u00e0 l\u0027action. Nous identifions les gains concrets que l\u0027intelligence artificielle peut apporter \u00e0 votre workflow \u2014 puis on les implante avec vous, \u00e9tape par \u00e9tape.',
    offer: 'Premi\u00e8re consultation gratuite.',
    btnText: 'Prendre rendez-vous \u2192',
    btnHref: '#contact',
    image: '/images/accueil/meeting-ai.jpg',
    imageAlt: 'R\u00e9union strat\u00e9gique sur l\u0027intelligence artificielle',
  },
];

export default function CtaSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (index === current || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, [current, isTransitioning]);

  // Auto-advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current === slides.length - 1 ? 0 : current + 1);
    }, 8000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = slides[current];
  const isLink = slide.btnHref.startsWith('/');

  return (
    <section className="cta-ia-band">
      <div className="cta-ia-inner" style={{ opacity: isTransitioning ? 0 : 1, transition: 'opacity 0.3s ease' }}>
        <div className="cta-ia-img">
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="cta-ia-content">
          <p className="cta-ia-eyebrow">{slide.eyebrow}</p>
          <h2 className="cta-ia-headline">{slide.headline}</h2>
          <p className="cta-ia-body">{slide.body}</p>
          <p className="cta-ia-offer">{slide.offer}</p>
          {isLink ? (
            <Link href={slide.btnHref} className="cta-ia-btn">{slide.btnText}</Link>
          ) : (
            <a href={slide.btnHref} className="cta-ia-btn">{slide.btnText}</a>
          )}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: 'clamp(24px, 3vw, 40px)' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: current === i ? '32px' : '8px',
              height: '8px',
              border: 'none',
              borderRadius: '4px',
              background: current === i ? '#0C0B09' : '#c8c0b0',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
