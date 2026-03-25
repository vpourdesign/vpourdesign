'use client';

const projects = [
  { name: 'Probaclac', url: 'probaclac.ca', span: '2' },
  { name: 'Olivier Martineau', url: 'olivier-martineau.com', span: '1' },
  { name: 'Santé Rosemère', url: 'santerosemere.com', span: '1' },
  { name: 'Toitex', url: 'toitex.ca', span: '1' },
  { name: 'Fred et Max', url: 'fredetmax.com', span: '1' },
  { name: 'Fabelta', url: 'fabelta.com', span: '1' },
  { name: 'Carrefour Industrielle Alliance', url: 'carrefourindustriellealliance.com', span: '2' },
  { name: 'Myoclub', url: 'myoclub.ca', span: '1' },
  { name: 'Casa Murray', url: 'casamurray.ca', span: '2' },
];

export default function PortfolioGrid() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'auto',
      gap: '0',
    }}>
      {projects.map((project, i) => (
        <a
          key={i}
          href={`https://${project.url}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            gridColumn: `span ${project.span}`,
            position: 'relative',
            aspectRatio: project.span === '2' ? '2.2/1' : '1.1/1',
            overflow: 'hidden',
            border: '0.5px solid var(--line)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: 'clamp(20px, 3vw, 40px)',
            textDecoration: 'none',
            transition: 'background 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            background: 'var(--bg-primary)',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#141310'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-primary)'; }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-ghost)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
            {String(i + 1).padStart(2, '0')}
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 32px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '6px' }}>
            {project.name}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
            {project.url}
          </div>
          <div style={{ position: 'absolute', top: 'clamp(20px, 3vw, 40px)', right: 'clamp(20px, 3vw, 40px)', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-ghost)', letterSpacing: '0.1em' }}>
            ↗
          </div>
        </a>
      ))}
    </div>
  );
}
