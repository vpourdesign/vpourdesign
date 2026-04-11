'use client';

import { useState } from 'react';

const tabs = [
  {
    label: 'Plumber',
    plainte: 'The plumber showed up 2 hours late and never called to warn me. I missed my meeting.',
    pubImage: 'We confirm the time. We keep it. If something comes up, we call.',
    pubCaption: 'When we say 9am, we mean 9am. Not 9am-ish.',
    pourquoi: 'You\'re not talking about pipes. You\'re talking about what broke a client\'s trust with another plumber — and showing you\'re different. That\'s the kind of content that gets saved and shared.',
  },
  {
    label: 'HR Consultant',
    plainte: 'We paid a fortune to an HR consultant and after 3 months, all we got was a 40-page PDF nobody reads.',
    pubImage: '40-page report ✘ vs 5-step action plan ✓',
    pubCaption: 'Our deliverables are actions. Not paper.',
    pourquoi: 'This content creates instant recognition in any manager who\'s lived through this. They share it. Their network sees it. You gain credibility without saying a word about your certifications.',
  },
  {
    label: 'Esthetics',
    plainte: 'The result looked great at the salon, but after 3 washes, it was all gone. Total waste.',
    pubImage: 'Before/after at day 30, not day 1',
    pubCaption: 'Our results last. We show the real timeline — not just the day-of.',
    pourquoi: 'The fear of "it won\'t last" is the #1 barrier in the esthetics industry. You address it directly, with visual proof. Result: less hesitation, more bookings.',
  },
];

export default function PainPointsTabsEN() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div style={{ display: 'flex', gap: '0', margin: '32px 0 0', borderBottom: '0.5px solid #c8c0b0' }}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            style={{
              flex: 1,
              padding: '14px 16px',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === i ? '2px solid #9a7b2e' : '2px solid transparent',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: activeTab === i ? '#9a7b2e' : '#8a7e6a',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'color 0.3s ease, border-color 0.3s ease',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '32px 0' }}>
        <div style={{ border: '0.5px solid #b06060', background: 'rgba(176, 96, 96, 0.08)', padding: '24px', marginBottom: '20px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#a04040', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Identified complaint</div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 300, fontStyle: 'italic', color: '#0C0B09', lineHeight: 1.4, margin: 0 }}>
            &ldquo;{tabs[activeTab].plainte}&rdquo;
          </p>
        </div>

        <div style={{ border: '0.5px solid #5080b0', background: 'rgba(80, 128, 176, 0.08)', padding: '24px', marginBottom: '20px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#4070a0', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Targeted post</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#0C0B09', marginBottom: '8px', fontWeight: 500 }}>{tabs[activeTab].pubImage}</div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#6a5e4e', margin: 0 }}>{tabs[activeTab].pubCaption}</p>
        </div>

        <div style={{ border: '0.5px solid #508050', background: 'rgba(80, 128, 80, 0.08)', padding: '24px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#408040', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px' }}>Why it works</div>
          <p style={{ margin: 0, color: '#4a4438' }}>{tabs[activeTab].pourquoi}</p>
        </div>
      </div>
    </>
  );
}
