---
layout: null
---
document.addEventListener('DOMContentLoaded', () => {
  // Sidebar Logic
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close-sidebar');

  const toggleSidebar = () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
  };

  if (hamburger) hamburger.addEventListener('click', toggleSidebar);
  if (closeBtn) closeBtn.addEventListener('click', toggleSidebar);
  if (overlay) overlay.addEventListener('click', toggleSidebar);

  // Responsive Table Wrapping
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  // Verse Card Wrapping Logic
  const pageContent = document.querySelector('.page-content .wrapper');
  if (pageContent) {
    const elements = Array.from(pageContent.children);
    let currentCard = null;

    elements.forEach(el => {
      // Verse headers are h3 and contain a dot (e.g. 1.1, 18.78)
      if (el.tagName === 'H3' && /^\d+\.\d+$/.test(el.textContent.trim())) {
        currentCard = document.createElement('div');
        currentCard.className = 'verse-card';
        el.parentNode.insertBefore(currentCard, el);

        const ref = document.createElement('span');
        ref.className = 'verse-ref';
        ref.textContent = el.textContent;
        currentCard.appendChild(ref);
        el.remove();
      } else if (currentCard) {
        if (el.tagName === 'HR') {
          el.remove();
          currentCard = null;
        } else {
          const createLabel = (text) => {
            const label = document.createElement('span');
            label.className = 'verse-label';
            label.textContent = text;
            return label;
          };

          // Removes the leading "**Label:**" node (rendered as <strong>)
          // without touching sibling nodes, so inline elements further in
          // the paragraph (e.g. <a class="char-link"> mentions) survive.
          const stripLabel = (labelText) => {
            const first = el.firstElementChild;
            if (first && first.tagName === 'STRONG' && first.textContent.trim() === labelText) {
              first.remove();
            }
            const next = el.firstChild;
            if (next && next.nodeType === Node.TEXT_NODE) {
              next.textContent = next.textContent.replace(/^\s+/, '');
            }
          };

          // Identify Sanskrit, IAST, and English
          if (el.tagName === 'P') {
            const text = el.textContent.trim();
            // Simple heuristic: Sanskrit contains Devanagari
            if (/[\u0900-\u097F]/.test(text)) {
              el.className = 'verse-sanskrit';
              currentCard.appendChild(createLabel('Sanskrit'));
            }
            // IAST often has | or // for verse markers, or the word uvāca
            else if (text.includes('|') || text.includes('//') || /uvāca/i.test(text)) {
              el.className = 'verse-iast';
              currentCard.appendChild(createLabel('Transliteration'));
            }
            else if (text.startsWith('Simple Translation:')) {
              el.className = 'verse-simple-translation';
              stripLabel('Simple Translation:');
              currentCard.appendChild(createLabel('Simple Translation'));
            }
            else if (text.startsWith('Contemporary Relevance:')) {
              el.className = 'verse-relevance';
              stripLabel('Contemporary Relevance:');
              currentCard.appendChild(createLabel('Contemporary Relevance'));
            }
            else if (text.startsWith('Neuroscience Perspective:')) {
              el.className = 'verse-neuroscience';
              stripLabel('Neuroscience Perspective:');
              currentCard.appendChild(createLabel('Neuroscience Perspective'));
            }
            else if (text.startsWith('Argument Arc:')) {
              el.className = 'verse-argument-arc';
              stripLabel('Argument Arc:');
              currentCard.appendChild(createLabel('Argument Arc'));
            }
            else if (text.startsWith('Common Misreading:')) {
              el.className = 'verse-misreading';
              stripLabel('Common Misreading:');
              currentCard.appendChild(createLabel('Common Misreading'));
            }
            else {
              el.className = 'verse-translation';
              currentCard.appendChild(createLabel('Primary Translation'));
            }
          } else if (el.tagName === 'BLOCKQUOTE') {
            currentCard.appendChild(createLabel('Notes'));
          }
          currentCard.appendChild(el);
        }
      }
    });
  }

  // Theme Toggle Persistence
  const themeToggle = document.querySelector('.theme-toggle input');
  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      const theme = themeToggle.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });

    // Initialize toggle state
    const currentTheme = document.documentElement.getAttribute('data-theme');
    themeToggle.checked = currentTheme === 'dark';
  }

  // Character "X-Ray" Popup
  // Intercepts clicks on inline character-mention links (added to verse
  // text) and shows their bio in a closable modal instead of navigating
  // to /characters. Falls back to normal navigation if the character data
  // can't be loaded, or if the click was a modified click (new tab, etc).
  const BASEURL = '{{ site.baseurl }}';
  let charDataPromise = null;
  const getCharacterData = () => {
    if (!charDataPromise) {
      charDataPromise = fetch(BASEURL + '/characters.json').then(res => {
        if (!res.ok) throw new Error('characters.json fetch failed');
        return res.json();
      });
    }
    return charDataPromise;
  };

  let popupEls = null;
  const buildPopup = () => {
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'char-popup-overlay';
    popupOverlay.setAttribute('hidden', '');

    const dialog = document.createElement('div');
    dialog.className = 'char-popup';
    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'true');

    const closeBtn = document.createElement('button');
    closeBtn.className = 'char-popup-close';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = '&times;';

    const body = document.createElement('div');
    body.className = 'char-popup-body';

    dialog.appendChild(closeBtn);
    dialog.appendChild(body);
    popupOverlay.appendChild(dialog);
    document.body.appendChild(popupOverlay);

    let lastFocused = null;

    const close = () => {
      popupOverlay.setAttribute('hidden', '');
      document.body.style.overflow = '';
      if (lastFocused) lastFocused.focus();
    };

    popupOverlay.addEventListener('click', (e) => {
      if (e.target === popupOverlay) close();
    });
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !popupOverlay.hasAttribute('hidden')) close();
    });

    const open = (triggerEl) => {
      lastFocused = triggerEl;
      popupOverlay.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    };

    return { popupOverlay, body, open, close };
  };

  const verseLink = (vref) => {
    const [chPadded, vs] = vref.split(':');
    const chNum = parseInt(chPadded, 10);
    const anchor = String(chNum) + vs;
    return {
      href: `${BASEURL}/chapters/chapter-${chPadded}#${anchor}`,
      label: `${chNum}.${vs}`,
    };
  };

  const escapeHtml = (str) => String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

  const renderCharacter = (c) => {
    const epithets = (c.epithets || []).filter(Boolean);
    const verses = c.verses || [];
    return `
      <div class="character-card-head">
        <h4>${escapeHtml(c.name)}</h4>
        <span class="character-iast">${escapeHtml(c.iast)}</span>
      </div>
      <p class="character-role">${escapeHtml(c.role)}</p>
      <p class="character-bio">${escapeHtml(c.bio).trim()}</p>
      ${c.note ? `<p class="character-note">${escapeHtml(c.note)}</p>` : ''}
      ${epithets.length ? `<div class="character-epithets">${epithets.map(e => `<span class="epithet-tag">${escapeHtml(e)}</span>`).join('')}</div>` : ''}
      ${verses.length ? `
        <div class="character-verses">
          <span class="verses-label">Appears at</span>
          ${verses.map(v => {
            const { href, label } = verseLink(v);
            return `<a class="verse-chip" href="${href}">${label}</a>`;
          }).join('')}
        </div>
      ` : `<p class="character-context-note">Not named directly in the Gītā's text.</p>`}
      <a class="char-popup-full-link" href="${BASEURL}/characters#${c.id}">View full profile &rarr;</a>
    `;
  };

  document.addEventListener('click', (e) => {
    const link = e.target.closest('.char-link');
    if (!link) return;
    // Let modified clicks (new tab, etc.) and non-primary buttons behave normally.
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const href = link.getAttribute('href') || '';
    const id = href.split('#')[1];
    if (!id) return;

    e.preventDefault();

    getCharacterData().then(data => {
      const c = Array.isArray(data) ? data.find(ch => ch.id === id) : null;
      if (!c) {
        window.location.href = href;
        return;
      }
      if (!popupEls) popupEls = buildPopup();
      popupEls.body.innerHTML = renderCharacter(c);
      popupEls.open(link);
    }).catch(() => {
      window.location.href = href;
    });
  });
});
