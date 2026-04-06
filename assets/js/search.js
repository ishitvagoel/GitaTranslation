/**
 * Client-side search for GitaTranslation.
 * Fetches each chapter page, extracts verse cards, and indexes them in memory.
 */
(function () {
  const BASE = window.SITE_BASEURL || '';
  const CHAPTERS = Array.from({ length: 18 }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    return { num: i + 1, url: BASE + '/chapters/chapter-' + n };
  });

  const searchInput = document.getElementById('search-input');
  const statusEl = document.getElementById('search-status');
  const resultsEl = document.getElementById('search-results');

  let index = [];
  let loaded = 0;
  let loading = false;

  function setStatus(msg) {
    if (statusEl) statusEl.textContent = msg;
  }

  function buildIndex() {
    if (loading) return;
    loading = true;
    setStatus('Loading…');

    const fetchPromises = CHAPTERS.map(ch =>
      fetch(ch.url)
        .then(r => r.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const cards = doc.querySelectorAll('.verse-card');
          cards.forEach(card => {
            const ref = card.querySelector('.verse-ref')?.textContent?.trim() || '';
            if (!ref) return;
            const translation = card.querySelector('.verse-translation')?.textContent?.trim() || '';
            const simple = card.querySelector('.verse-simple-translation')?.textContent?.trim() || '';
            const relevance = card.querySelector('.verse-relevance')?.textContent?.trim() || '';
            const text = [translation, simple, relevance].filter(Boolean).join(' ');
            index.push({ ref, chapter: ch.num, url: ch.url + '#verse-' + ref.replace('.', '-'), text });
          });
          loaded++;
          setStatus('Loading chapters… ' + loaded + ' / 18');
        })
        .catch(() => { loaded++; })
    );

    Promise.all(fetchPromises).then(() => {
      setStatus('');
      if (searchInput.value.trim().length >= 2) doSearch(searchInput.value.trim());
    });
  }

  function doSearch(query) {
    if (!query || query.length < 2) {
      resultsEl.innerHTML = '';
      return;
    }
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    const matches = index.filter(v =>
      terms.every(t => v.text.toLowerCase().includes(t) || v.ref.includes(t))
    );

    if (matches.length === 0) {
      resultsEl.innerHTML = '<p class="search-no-results">No verses found for "<strong>' + escHtml(query) + '</strong>".</p>';
      return;
    }

    const limit = 30;
    const shown = matches.slice(0, limit);
    resultsEl.innerHTML = '<p class="search-count">' + matches.length + ' verse' + (matches.length !== 1 ? 's' : '') + ' found' + (matches.length > limit ? ' (showing first ' + limit + ')' : '') + '</p>' +
      shown.map(v => {
        const snippet = makeSnippet(v.text, terms);
        return '<a href="' + v.url + '" class="search-result-item">' +
          '<span class="search-result-ref">' + escHtml(v.ref) + '</span>' +
          '<span class="search-result-chapter">Chapter ' + v.chapter + '</span>' +
          '<span class="search-result-snippet">' + snippet + '</span>' +
          '</a>';
      }).join('');
  }

  function makeSnippet(text, terms) {
    const lower = text.toLowerCase();
    const first = terms.reduce((best, t) => {
      const i = lower.indexOf(t);
      return i >= 0 && (best < 0 || i < best) ? i : best;
    }, -1);
    const start = Math.max(0, first - 60);
    const end = Math.min(text.length, start + 200);
    let snippet = (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
    // Highlight terms
    terms.forEach(t => {
      snippet = snippet.replace(new RegExp('(' + escRegex(t) + ')', 'gi'), '<mark>$1</mark>');
    });
    return snippet;
  }

  function escHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function escRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    const q = searchInput.value.trim();
    if (q.length < 2) { resultsEl.innerHTML = ''; return; }
    if (!loading) buildIndex();
    debounceTimer = setTimeout(() => doSearch(q), 300);
  });

  // Start loading when user focuses the input
  searchInput.addEventListener('focus', () => { if (!loading) buildIndex(); });
})();
