'use client';
import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let delay = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          delay += 100;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.02 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Fallback for elements already in viewport
    requestAnimationFrame(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
        }
      });
    });

    // CTA band — wipe reveal (top to bottom)
    const wipeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('wipe-open');
          wipeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    document.querySelectorAll('.cta-ia-band-wrap').forEach(el => wipeObserver.observe(el));

    return () => { observer.disconnect(); wipeObserver.disconnect(); };
  }, []);

  return null;
}
