'use client';

const projects = [
  { name: 'Probaclac', url: 'probaclac.ca', span: '2', img: '/images/sitesweb/proaclac.jpg' },
  { name: 'Olivier Martineau', url: 'olivier-martineau.com', span: '1', img: '/images/sitesweb/oliviermartineau.jpg' },
  { name: 'Fred et Max', url: 'fredetmax.com', span: '1', img: '/images/sitesweb/fredetmax.jpg' },
  { name: 'Carrefour Industrielle Alliance', url: 'carrefourindustriellealliance.com', span: '2', img: '/images/sitesweb/carrefourindustriellealliance.jpg' },
  { name: 'Toitex', url: 'toitex.ca', span: '1', img: '/images/sitesweb/toitex.jpg' },
  { name: 'Santé Rosemère', url: 'santerosemere.com', span: '1', img: '/images/sitesweb/santerosemere.jpg' },
  { name: 'Fabelta', url: 'fabelta.com', span: '1', img: '/images/sitesweb/fabelta.jpg' },
  { name: 'Myoclub', url: 'myoclub.ca', span: '1', img: '/images/sitesweb/myoclub.jpg' },
  { name: 'Casa Murray', url: 'casamurray.ca', span: '2', img: '/images/sitesweb/casamurray.jpg' },
];

export default function PortfolioGrid() {
  return (
    <>
      <style>{`
        .portfolio-card {
          position: relative;
          overflow: hidden;
          border: 0.5px solid var(--line);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: clamp(20px, 3vw, 40px);
          text-decoration: none;
          cursor: pointer;
          background: var(--bg-primary);
        }
        .portfolio-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          opacity: 0.4;
          transform: scale(1);
          transition: filter 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .portfolio-card:hover .portfolio-card-img {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.05);
        }
        .portfolio-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(12, 11, 9, 0.85) 0%, rgba(12, 11, 9, 0.2) 50%, transparent 100%);
          z-index: 1;
          transition: background 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .portfolio-card:hover .portfolio-card-overlay {
          background: linear-gradient(to top, rgba(12, 11, 9, 0.7) 0%, rgba(12, 11, 9, 0.1) 40%, transparent 100%);
        }
        .portfolio-card-content {
          position: relative;
          z-index: 2;
        }
      `}</style>
      <div className="portfolio-grid-container" style={{
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
            className="portfolio-card"
            style={{
              gridColumn: `span ${project.span}`,
              aspectRatio: project.span === '2' ? '2.2/1' : '1.1/1',
            }}
          >
            {project.img && (
              <>
                <img
                  src={project.img}
                  alt={project.name}
                  className="portfolio-card-img"
                  loading="lazy"
                />
                <div className="portfolio-card-overlay" />
              </>
            )}
            <div className="portfolio-card-content">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-ghost)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 32px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '6px' }}>
                {project.name}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                {project.url}
              </div>
            </div>
            <div style={{ position: 'absolute', top: 'clamp(20px, 3vw, 40px)', right: 'clamp(20px, 3vw, 40px)', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-primary)', letterSpacing: '0.1em', zIndex: 2 }}>
              ↗
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
