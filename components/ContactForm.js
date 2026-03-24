'use client';
import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [pageName, setPageName] = useState('');

  useEffect(() => {
    setPageName(window.location.pathname || '/');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formspree.io/f/maqprklv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `Nouveau message — vpourdesign.com [${pageName}]`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Non fourni',
          message: formData.message,
          page: pageName,
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="contact-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', padding: '40px 0' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--accent)' }}>Merci!</div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>Votre message a été envoyé. Nous vous contacterons dans les plus brefs délais.</p>
        <button type="button" className="form-submit" onClick={() => setStatus('idle')} style={{ marginTop: '8px' }}>Envoyer un autre message</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">Votre nom</label>
        <input type="text" id="name" className="form-input" placeholder="Jean Dupont" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">Courriel</label>
        <input type="email" id="email" className="form-input" placeholder="jean@exemple.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="phone">Téléphone (facultatif)</label>
        <input type="tel" id="phone" className="form-input" placeholder="(514) 000-0000" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="message">Message</label>
        <textarea id="message" className="form-input" placeholder="Décrivez votre projet..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required />
      </div>
      <button type="submit" className="form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
      </button>
      {status === 'error' && (
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#e74c3c', marginTop: '8px' }}>Une erreur est survenue. Veuillez réessayer.</p>
      )}
    </form>
  );
}
