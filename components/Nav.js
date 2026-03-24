'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
        <Link href="/" className="logo">
          <img src="/logo-vpourdesign.png" alt="V pour Design" style={{ height: '56px', width: 'auto' }} />
        </Link>
        <div className="nav-items">
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/a-propos" className="nav-link">À propos</Link>
          <Link href="/projets" className="nav-link">Projets</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
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
          <div className="mobile-menu-links">
            <Link href="/services" className="mobile-menu-link">Services</Link>
            <Link href="/a-propos" className="mobile-menu-link">À propos</Link>
            <Link href="/projets" className="mobile-menu-link">Projets</Link>
            <Link href="/blog" className="mobile-menu-link">Blog</Link>
            <Link href="/contact" className="mobile-menu-link">Contact</Link>
          </div>
          <div className="mobile-menu-footer">
            <a href="tel:5145675763" className="mobile-menu-phone">(514) 567-5763</a>
            <a href="mailto:info@vpourdesign.com" className="mobile-menu-email">info@vpourdesign.com</a>
          </div>
        </div>
      </div>
    </>
  );
}
