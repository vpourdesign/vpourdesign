'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getLocaleFromPath, getAlternatePath } from '../data/i18n';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const isEn = locale === 'en';
  const prefix = isEn ? '/en' : '';

  // Navigation links per locale
  const links = isEn
    ? [
        { href: '/en', label: 'Home' },
        { href: '/en/services', label: 'Services' },
        { href: '/en/about', label: 'About' },
        { href: '/en/projects', label: 'Projects' },
        { href: '/en/blog', label: 'Blog' },
        { href: '/en/contact', label: 'Contact' },
      ]
    : [
        { href: '/', label: 'Accueil' },
        { href: '/services', label: 'Services' },
        { href: '/a-propos', label: 'À propos' },
        { href: '/projets', label: 'Projets' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
      ];

  const alternatePath = getAlternatePath(pathname);
  const langLabel = isEn ? 'FR' : 'EN';

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className="top-nav">
        <Link href={isEn ? '/en' : '/'} className="logo">
          <Image src="/logo-vpourdesign.png" alt="V pour Design" width={180} height={56} priority style={{ height: '56px', width: 'auto' }} />
        </Link>
        <div className="nav-items">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">{link.label}</Link>
          ))}
          <Link
            href={alternatePath}
            className="nav-link"
            style={{
              border: '1px solid var(--line)',
              padding: '4px 10px',
              fontSize: '11px',
              letterSpacing: '0.12em',
              marginLeft: '8px',
            }}
          >
            {langLabel}
          </Link>
        </div>
        <a href="tel:5145675763" className="nav-phone">(514) 567-5763</a>

        {/* Hamburger button — mobile only */}
        <button
          className={`hamburger${open ? ' hamburger--active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="hamburger-line hamburger-line--1"></span>
          <span className="hamburger-line hamburger-line--2"></span>
          <span className="hamburger-line hamburger-line--3"></span>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu${open ? ' mobile-menu--open' : ''}`}>
        <div className="mobile-menu-inner">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'none',
              border: 'none',
              cursor: 'crosshair',
              padding: '8px',
              color: 'var(--text-primary)',
              lineHeight: 1,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>

          <div className="mobile-menu-links">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="mobile-menu-link">{link.label}</Link>
            ))}
          </div>
          <div className="mobile-menu-footer">
            <Link
              href={alternatePath}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                color: 'var(--accent)',
                letterSpacing: '0.15em',
                textDecoration: 'none',
                border: '1px solid var(--accent)',
                padding: '8px 20px',
                display: 'inline-block',
                marginBottom: '16px',
              }}
            >
              {langLabel === 'EN' ? 'English version' : 'Version française'}
            </Link>
            <a href="tel:5145675763" className="mobile-menu-phone">(514) 567-5763</a>
            <a href="mailto:info@vpourdesign.com" className="mobile-menu-email">info@vpourdesign.com</a>
          </div>
        </div>
      </div>
    </>
  );
}
