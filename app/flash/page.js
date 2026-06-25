'use client';

import PhoneLink from '../../components/PhoneLink';
import { useEffect, useState, useRef, useCallback } from 'react';

// ── CONFIG ──
const SHEET_ID = '18IpuW-T0uajojkEALwkFIbZOjPM5Bt0CLRM_6AEPcFg';
const GVIZ_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=0`;
const APPROVAL_WEB_APP_URL = '';
const APPROVED_STATUS_VALUE = 'Approuvé';

// ── UTILITIES ──
function normalize(val) {
  return String(val || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\s_\-]+/g, '').trim();
}

function findCol(headers, candidates) {
  for (let c = 0; c < candidates.length; c++) {
    for (let i = 0; i < headers.length; i++) {
      if (normalize(headers[i]).indexOf(normalize(candidates[c])) !== -1) return i;
    }
  }
  return -1;
}

function cell(row, col) {
  if (col < 0 || !row) return '';
  return String(row[col] || '').trim();
}

function looksLikeDayNumber(val) {
  var n = parseInt(val, 10);
  return !isNaN(n) && n >= 1 && n <= 31 && String(n) === String(val).trim();
}

function inferDateCol(headers, rows, headerRowIndex, colDay) {
  var explicit = findCol(headers, ['date']);
  if (explicit !== -1) return explicit;
  if (colDay === -1) return -1;
  var candidates = [colDay - 1, colDay + 1].filter(c => c >= 0 && c < headers.length && c !== colDay);
  for (var ci = 0; ci < candidates.length; ci++) {
    var c = candidates[ci];
    var checked = 0, score = 0;
    for (var r = headerRowIndex + 1; r < Math.min(rows.length, headerRowIndex + 20); r++) {
      var v = cell(rows[r], c);
      if (!v) continue;
      checked++;
      if (looksLikeDayNumber(v)) score++;
    }
    if (checked > 0 && score / checked >= 0.6) return c;
  }
  return -1;
}

function inferMonthFromText(val) {
  var m = normalize(val).match(/(janvier|fevrier|mars|avril|mai|juin|juillet|aout|septembre|octobre|novembre|decembre)(?:\s*(\d{4}))?/);
  if (!m) return '';
  var cap = m[1].charAt(0).toUpperCase() + m[1].slice(1);
  return m[2] ? cap + ' ' + m[2] : cap;
}

function inferClientFromMergedHeader(headers) {
  var first = String(headers[0] || '').trim();
  if (normalize(first).indexOf('nomclient') !== -1 || normalize(first).indexOf('client') !== -1) {
    return String(headers[1] || headers[0] || '').trim();
  }
  return '';
}

function inferPlatformLabel(values) {
  for (var i = 0; i < values.length; i++) {
    var n = normalize(values[i]);
    if (n.indexOf('facebook') !== -1 || n === 'fb') return 'Facebook';
    if (n.indexOf('instagram') !== -1 || n === 'ig') return 'Instagram';
  }
  return '';
}

function shortPlatformName(p) {
  var n = normalize(p);
  if (n.indexOf('facebook') !== -1 || n === 'fb') return 'FB';
  if (n.indexOf('instagram') !== -1 || n === 'ig') return 'IG';
  return p.toUpperCase().substring(0, 4);
}

function resolveImage(val) {
  if (!val) return null;
  val = val.trim();
  if (!val.match(/^https?:\/\//i)) return null;
  // Video
  if (val.match(/\.(mp4|webm)(\?|$)/i) && val.match(/i\.imgur\.com/i)) return { kind: 'video', url: val };
  // Google Drive
  var m = val.match(/\/d\/([a-zA-Z0-9_\-]{10,})/);
  if (!m) m = val.match(/[?&]id=([a-zA-Z0-9_\-]{10,})/);
  if (m) return 'https://lh3.googleusercontent.com/d/' + m[1];
  // Imgur direct
  if (val.match(/^https?:\/\/i\.imgur\.com\/.+/i)) return val;
  // Imgur page
  m = val.match(/^https?:\/\/(?:www\.)?imgur\.com\/([a-zA-Z0-9]+)(?:\.[a-z]+)?$/);
  if (m) return 'https://i.imgur.com/' + m[1] + '.jpg';
  // Imgur album
  m = val.match(/^https?:\/\/(?:www\.)?imgur\.com\/(a|gallery)\/([a-zA-Z0-9]+)/);
  if (m) return { kind: 'imgur-album', albumType: m[1], id: m[2], url: val };
  return val;
}

function extractMediaItems(val) {
  var raw = String(val || '').trim();
  if (!raw) return [];
  var urls = raw.match(/https?:\/\/[^\s,]+/g);
  if (!urls || !urls.length) {
    var single = resolveImage(raw);
    return single ? [single] : [];
  }
  return urls.map(resolveImage).filter(Boolean);
}

function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function fmtNum(n) { return n >= 1000 ? (n / 1000).toFixed(1) + 'k' : String(n); }

function ratioClass(type, format) {
  var f = normalize(format || '');
  if (f.indexOf('9') !== -1 && f.indexOf('16') !== -1) return 'ratio-9-16';
  if (f.indexOf('4') !== -1 && f.indexOf('5') !== -1) return 'ratio-4-5';
  if (f.indexOf('1') !== -1 && f.indexOf('1') !== -1 && f.length <= 4) return 'ratio-1-1';
  var t = normalize(type || '');
  if (t.indexOf('reel') !== -1 || t.indexOf('story') !== -1 || t.indexOf('stories') !== -1) return 'ratio-9-16';
  return 'ratio-1-1';
}

// ── GVIZ LOADER ──
function gvizCellToText(c) {
  if (!c) return '';
  if (c.f) return String(c.f);
  if (c.v != null) return String(c.v);
  return '';
}

function gvizToRows(payload) {
  var rows = [];
  if (payload.table && payload.table.cols) {
    var headerRow = payload.table.cols.map(c => c.label || '');
    if (headerRow.some(h => h)) rows.push(headerRow);
  }
  if (payload.table && payload.table.rows) {
    payload.table.rows.forEach(r => {
      rows.push(r.c ? r.c.map(gvizCellToText) : []);
    });
  }
  return rows;
}

function loadSheetJsonp() {
  return new Promise((resolve, reject) => {
    var cbName = '__flashSheetCb_' + Date.now() + '_' + Math.floor(Math.random() * 100000);
    var timer = setTimeout(() => { delete window[cbName]; reject(new Error('Timeout Google Sheets')); }, 15000);
    window[cbName] = function(response) {
      clearTimeout(timer);
      delete window[cbName];
      try {
        var rows = gvizToRows(response);
        resolve(rows);
      } catch (e) { reject(new Error('Réponse Google Sheets invalide')); }
    };
    var script = document.createElement('script');
    script.src = GVIZ_URL + '&tqx=responseHandler:' + cbName;
    script.onerror = () => { clearTimeout(timer); delete window[cbName]; reject(new Error('Chargement Google Sheets bloqué')); };
    document.body.appendChild(script);
  });
}

function detectSheetConfig(rows) {
  var headerRowIndex = -1;
  var meta = { client: '', mois: '', defaultPlatform: '' };
  if (rows[0] && rows[0].length) {
    meta.client = inferClientFromMergedHeader(rows[0]) || meta.client;
    meta.mois = inferMonthFromText((rows[0][1] || '') + ' ' + (rows[0][0] || '')) || meta.mois;
    meta.defaultPlatform = inferPlatformLabel(rows[0]) || meta.defaultPlatform;
  }
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (!row.some(v => String(v || '').trim())) continue;
    var first = normalize(row[0]);
    if (!meta.client && first === 'nomclient') { meta.client = (row[1] || row[0] || '').trim(); continue; }
    if (!meta.mois && first === 'mois') { meta.mois = (row[1] || '').trim(); continue; }
    var hasJour = findCol(row, ['jour', 'day']) !== -1;
    var hasDate = findCol(row, ['date']) !== -1;
    var hasText = findCol(row, ['text fr', 'texte fr', 'texte', 'text', 'caption', 'legende']) !== -1;
    var hasVisuel = findCol(row, ['visuel', 'image', 'img', 'photo', 'visual', 'media']) !== -1;
    if (hasJour && (hasDate || hasText || hasVisuel)) { headerRowIndex = i; break; }
  }
  return { headerRowIndex, meta };
}

// ── POST CARD COMPONENT ──
function PostCard({ post, onApprove }) {
  const [expanded, setExpanded] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [approvalState, setApprovalState] = useState(post.approved ? 'approved' : 'idle');
  const likes = useRef(randInt(12, 340));
  const comments = useRef(randInt(2, 45));
  const shares = useRef(randInt(0, 18));

  const handleApprove = async () => {
    if (!APPROVAL_WEB_APP_URL || approvalState === 'approved') return;
    setApprovalState('pending');
    try {
      var params = new URLSearchParams({
        sheetId: SHEET_ID,
        day: post.day || '',
        date: post.date || '',
        text: (post.text || '').substring(0, 80),
        approvedValue: APPROVED_STATUS_VALUE,
      });
      await fetch(APPROVAL_WEB_APP_URL + '?' + params.toString(), { method: 'GET', mode: 'cors' });
      setApprovalState('approved');
      if (onApprove) onApprove(post);
    } catch {
      setApprovalState('error');
      setTimeout(() => setApprovalState('idle'), 2000);
    }
  };

  const images = post.images || [];
  const hasMultiple = images.length > 1;

  return (
    <div className="flash-card">
      {/* Day badge */}
      {post.day && <div className="flash-card-day">{post.day}</div>}

      {/* Header */}
      <div className="flash-card-header">
        <div className="flash-card-avatar">{post.clientInitials || 'VP'}</div>
        <div className="flash-card-meta">
          <div className="flash-card-name">{post.clientName || 'V pour Design'}</div>
          <div className="flash-card-date">{post.date || ''} {post.platform && <span className="flash-card-platform">{shortPlatformName(post.platform)}</span>}</div>
        </div>
      </div>

      {/* Image */}
      <div className={`flash-card-media ${ratioClass(post.type, post.format)}`}>
        {images.length === 0 ? (
          <div className="flash-card-placeholder">Visuel à venir</div>
        ) : (
          <>
            {images.map((img, i) => {
              if (typeof img === 'object' && img.kind === 'video') {
                return <video key={i} src={img.url} muted autoPlay loop playsInline style={{ display: i === carouselIndex ? 'block' : 'none', width: '100%', height: '100%', objectFit: 'cover' }} />;
              }
              if (typeof img === 'object' && img.kind === 'imgur-album') {
                return <blockquote key={i} className="imgur-embed-pub" lang="en" data-id={`a/${img.id}`} style={{ display: i === carouselIndex ? 'block' : 'none' }}><a href={img.url}>{img.url}</a></blockquote>;
              }
              return <img key={i} src={typeof img === 'string' ? img : img.url} alt="" loading="lazy" style={{ display: i === carouselIndex ? 'block' : 'none', width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />;
            })}
            {hasMultiple && (
              <div className="flash-carousel-controls">
                <button onClick={() => setCarouselIndex((carouselIndex - 1 + images.length) % images.length)}>‹</button>
                <span>{carouselIndex + 1}/{images.length}</span>
                <button onClick={() => setCarouselIndex((carouselIndex + 1) % images.length)}>›</button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Text */}
      {post.text && (
        <div className="flash-card-body">
          <p className={expanded ? '' : 'flash-text-clamp'}>{post.text}</p>
          {post.text.length > 200 && (
            <button className="flash-see-more" onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Voir moins' : 'Voir plus'}
            </button>
          )}
        </div>
      )}

      {/* Stats */}
      <div className="flash-card-stats">
        <span>❤️ {fmtNum(likes.current)}</span>
        <span>{fmtNum(comments.current)} commentaires · {fmtNum(shares.current)} partages</span>
      </div>

      {/* Actions */}
      <div className="flash-card-actions">
        <button
          className={`flash-action-btn ${approvalState === 'approved' ? 'approved' : ''}`}
          onClick={handleApprove}
          disabled={approvalState === 'approved' || approvalState === 'pending'}
        >
          {approvalState === 'approved' ? '✓ Approuvé' : approvalState === 'pending' ? '...' : '👍 J\'aime'}
        </button>
        <button className="flash-action-btn">💬 Commenter</button>
        <button className="flash-action-btn">↗ Partager</button>
      </div>
    </div>
  );
}

// ── MAIN PAGE ──
export default function FlashPage() {
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [activePlatform, setActivePlatform] = useState('all');
  const [clientName, setClientName] = useState('');
  const [mois, setMois] = useState('');

  const loadData = useCallback(async () => {
    setStatus('loading');
    setError('');
    try {
      var rows = await loadSheetJsonp();
      var sheet = detectSheetConfig(rows);
      if (sheet.headerRowIndex === -1) throw new Error('Impossible de détecter la structure du fichier');
      var headers = rows[sheet.headerRowIndex];

      var colPlatform = findCol(headers, ['plateforme', 'platform', 'reseau', 'reseaux']);
      var colDay = findCol(headers, ['jour', 'day']);
      var colType = findCol(headers, ['type']);
      var colFormat = findCol(headers, ['format', 'ratio', 'aspect']);
      var colText = findCol(headers, ['text fr', 'texte fr', 'texte', 'text', 'caption', 'legende']);
      var colDate = inferDateCol(headers, rows, sheet.headerRowIndex, colDay);

      var imageCols = [];
      for (var h = 0; h < headers.length; h++) {
        if (normalize(headers[h]).indexOf('visuel') !== -1) imageCols.push(h);
      }
      if (!imageCols.length) {
        var fallback = findCol(headers, ['image', 'img', 'photo', 'visual', 'media']);
        if (fallback !== -1) imageCols.push(fallback);
      }

      // Clean up client name — strip URLs, pricing info, extra metadata
      var rawClient = sheet.meta.client || 'Client';
      var client = rawClient.split(/https?:\/\//)[0].replace(/\d+\s*\$.*$/i, '').replace(/\d+\s*posts?.*$/i, '').trim();
      if (!client) client = rawClient.split(' ').slice(0, 3).join(' ');
      var initials = client.split(/\s+/).filter(w => w.length > 1).map(w => w[0]).join('').substring(0, 2).toUpperCase();
      setClientName(client);
      setMois(sheet.meta.mois || '');

      var parsedPosts = [];
      var platformSet = new Set();

      for (var i = sheet.headerRowIndex + 1; i < rows.length; i++) {
        var row = rows[i];
        if (!row.some(v => String(v || '').trim())) continue;

        var day = cell(row, colDay);
        var date = cell(row, colDate);
        var text = cell(row, colText);
        var type = cell(row, colType);
        var format = cell(row, colFormat);
        var platform = cell(row, colPlatform) || sheet.meta.defaultPlatform || '';

        var allImages = [];
        imageCols.forEach(c => {
          var items = extractMediaItems(cell(row, c));
          allImages = allImages.concat(items);
        });

        // Skip rows with no meaningful content (need text OR images)
        if (!text && allImages.length === 0) continue;

        if (platform) platformSet.add(platform);

        parsedPosts.push({ day, date, text, type, format, platform, images: allImages, clientName: client, clientInitials: initials, approved: false });
      }

      setPosts(parsedPosts);
      setPlatforms(Array.from(platformSet));
      setStatus('ok');
    } catch (e) {
      setError(e.message || 'Erreur de chargement');
      setStatus('error');
    }
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  const filteredPosts = activePlatform === 'all' ? posts : posts.filter(p => p.platform === activePlatform);

  return (
    <>
      {/* NAV */}
      <nav className="nav" style={{ position: 'sticky', top: 0, zIndex: 100, background: 'var(--bg-primary)' }}>
        <div className="logo"><a href="/"><img src="/logo-vpourdesign.png" alt="V pour Design" style={{ height: '56px', width: 'auto' }} /></a></div>
        <div className="nav-items">
          <a href="/" className="nav-link">Accueil</a>
          <a href="/services" className="nav-link">Services</a>
          <a href="/projets" className="nav-link">Projets</a>
          <a href="/flash" className="nav-link" style={{ color: 'var(--accent)' }}>Flash</a>
          <a href="/contact" className="nav-link">Contact</a>
        </div>
        <PhoneLink className="nav-phone" />
      </nav>

      {/* HERO */}
      <section className="hero-grid">
        <div className="cell cell-a">
          <div className="eyebrow">Flash · Calendrier de contenu</div>
          <h1 className="h1">{clientName || 'Chargement...'}{mois && <><br/><em>{mois}</em></>}</h1>
        </div>
        <div className="cell cell-b">
          <div><div className="page-num">{filteredPosts.length} posts</div></div>
          <div className="ai-icon-wrap">
            <div className="accent-line" style={{ height: '80px' }}></div>
          </div>
          <div>
            <div className="tag">Contenu social</div>
          </div>
        </div>
        <div className="cell cell-c">
          <p className="subline">Calendrier de publications pour les réseaux sociaux. Prévisualisez et approuvez le contenu directement depuis cette page.</p>
        </div>
        <div className="cell cell-d">
          <div className="body-text" style={{ marginBottom: '8px' }}>Source</div>
          <button onClick={loadData} style={{ background: 'none', border: '0.5px solid var(--line)', color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', padding: '6px 14px', cursor: 'pointer' }}>
            ↻ Rafraîchir
          </button>
        </div>
      </section>

      {/* STATUS + PLATFORM TABS */}
      <section style={{ borderTop: '0.5px solid var(--line)', padding: '12px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {platforms.length > 1 && (
            <>
              <button className={`flash-tab ${activePlatform === 'all' ? 'active' : ''}`} onClick={() => setActivePlatform('all')}>Tout</button>
              {platforms.map(p => (
                <button key={p} className={`flash-tab ${activePlatform === p ? 'active' : ''}`} onClick={() => setActivePlatform(p)}>{p}</button>
              ))}
            </>
          )}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em' }}>
          {status === 'loading' && <span style={{ color: 'var(--accent)' }}>Chargement...</span>}
          {status === 'ok' && <span style={{ color: 'var(--text-muted)' }}>{filteredPosts.length} publications</span>}
          {status === 'error' && <span style={{ color: '#ff4444' }}>Erreur</span>}
        </div>
      </section>

      {/* ERROR STATE */}
      {status === 'error' && (
        <section style={{ padding: '60px 32px', textAlign: 'center', borderTop: '0.5px solid var(--line)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', color: 'var(--text-primary)', marginBottom: '16px' }}>Impossible de charger le fichier</div>
          <p className="about-body" style={{ maxWidth: '50ch', margin: '0 auto 24px' }}>{error}</p>
          <p className="about-body" style={{ maxWidth: '50ch', margin: '0 auto' }}>Vérifiez que le Google Sheets est partagé publiquement (Fichier → Partager → Toute personne ayant le lien).</p>
        </section>
      )}

      {/* LOADING STATE */}
      {status === 'loading' && (
        <section style={{ padding: '80px 32px', textAlign: 'center', borderTop: '0.5px solid var(--line)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>Chargement des publications...</div>
        </section>
      )}

      {/* POST GRID */}
      {status === 'ok' && (
        <section className="flash-grid" style={{ borderTop: '0.5px solid var(--line)' }}>
          {filteredPosts.map((post, i) => (
            <PostCard key={i} post={post} />
          ))}
        </section>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-ghost)' }}>© {new Date().getFullYear()} V pour Design</span>
          </div>
          <div className="footer-col" style={{ textAlign: 'right' }}>
            <a href="/" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>← Retour au site</a>
          </div>
        </div>
      </footer>
    </>
  );
}
