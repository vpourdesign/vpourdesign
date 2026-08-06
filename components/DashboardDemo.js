'use client';

import { useState } from 'react';

const periods = {
  '7j': { trafic: '+12 %', position: '8,4', conversions: '6', geo: '72', bars: [40, 55, 48, 62, 58, 70, 66] },
  '30j': { trafic: '+34 %', position: '6,1', conversions: '24', geo: '81', bars: [30, 42, 38, 55, 61, 68, 74, 70, 78, 82] },
  '90j': { trafic: '+58 %', position: '4,7', conversions: '71', geo: '89', bars: [20, 28, 35, 40, 48, 55, 60, 68, 74, 80, 85, 92] },
};

const kpis = [
  { key: 'trafic', label: 'Trafic organique', color: '#408040' },
  { key: 'position', label: 'Position moyenne', color: '#0C0B09' },
  { key: 'conversions', label: 'Conversions', color: '#0C0B09' },
  { key: 'geo', label: 'Score GEO', color: '#9a7b2e', suffix: '/100' },
];

export default function DashboardDemo() {
  const [period, setPeriod] = useState('30j');
  const d = periods[period];

  return (
    <div style={{ border: '0.5px solid #c8c0b0', margin: '32px 0', background: '#fff' }}>
      {/* Header */}
      <div style={{ padding: '16px 20px', borderBottom: '0.5px solid #c8c0b0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#0C0B09', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Dashboard — Client démo</div>
        <div style={{ display: 'flex', gap: '4px' }}>
          {Object.keys(periods).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              style={{
                padding: '6px 14px',
                background: period === p ? '#0C0B09' : 'transparent',
                color: period === p ? '#F0EAD6' : '#8a7e6a',
                border: '0.5px solid #c8c0b0',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'background 0.3s ease, color 0.3s ease',
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* KPI grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', borderBottom: '0.5px solid #c8c0b0' }}>
        {kpis.map((kpi, i) => (
          <div key={kpi.key} style={{ padding: '18px 20px', borderRight: i < kpis.length - 1 ? '0.5px solid #c8c0b0' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#8a7e6a', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>{kpi.label}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.2vw, 26px)', fontWeight: 300, color: kpi.color }}>
              {d[kpi.key]}{kpi.suffix || ''}
            </div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div style={{ padding: '24px 20px 20px', display: 'flex', alignItems: 'flex-end', gap: '4px', height: '110px' }}>
        {d.bars.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              background: i === d.bars.length - 1 ? '#9a7b2e' : 'rgba(154, 123, 46, 0.45)',
              transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        ))}
      </div>
      <div style={{ padding: '0 20px 16px', fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#8a7e6a', letterSpacing: '0.05em' }}>
        Trafic organique — tendance sur la période sélectionnée
      </div>
    </div>
  );
}
